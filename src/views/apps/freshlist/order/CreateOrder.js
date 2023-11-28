import React, { useEffect, useState, useContext } from "react";
import xmlJs from "xml-js";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
  CustomInput,
  ModalBody,
  ModalHeader,
  Modal,
  InputGroup,
} from "reactstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { BiEnvelope } from "react-icons/bi";
import { BsFillChatDotsFill, BsWhatsapp } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

import "../../../../assets/scss/pages/users.scss";
import {
  CreateOrder_ViewData,
  CommentOrder,
  OrderDataSave,
  CreateOrder_ID,
  GetCommentListView
} from "../../../../ApiEndPoint/ApiCalling";
import "../../../../assets/scss/pages/users.scss";
import Payment from "./payment/Payment";
import OrderedList from "./OrderedList";
import AuditHistory from "./audithistory/AuditHistory";
const CreateOrder = (args) => {
  const [CreatAccountView, setCreatAccountView] = useState({});
  const [formData, setFormData] = useState({});
  const [dropdownValue, setdropdownValue] = useState({});
  const [StatusDropDown, setStatusDropDown] = useState({});
  const [partdetails, setPartDetails] = useState({});
  const [index, setindex] = useState("");
  const [userDetails, setUserDetails] = useState("");
  const [partIndex, setpartIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);
  const [error, setError] = useState("");
  const [permissions, setpermissions] = useState({});
  const [Commentshow, setCommentshow] = useState([]);
  const [OrderID, setOrderID] = useState();
  const [UserInfo, setUserInfo] = useState({});
  const [modal, setModal] = useState(false);
  const [items, setItems] = useState("");
  const [audit, setAudit] = useState(false);
  const toggle = (item) => {
    setItems(item);
    setModal(!modal);
  };
  const audittoggle = () => {
    setAudit(!audit);
  };
  const handleopentoggle = (iteam,index) => {
    toggle(iteam,index);
  };
  const handleHistory = () => {
    audittoggle();
  };
  const [product, setProduct] = useState([
    {
      product: "",
      productName: "",
      availableQty: "",
      rquiredQty: 1,
      price: "",
      totalprice: "",
      discount: "",
      Shipping: "",
      tax: "",
      grandTotal: "",
    },
  ]);
  const [part, setPart] = useState([
    {
      part: "",
      partName: "",
      Shipping: "",
      availableQty: "",
      rquiredQty: 1,
      price: "",
      totalprice: "",
      discount: "",
      tax: "",
      grandTotal: "",
    },
  ]);

  const [Comments, setComments] = useState([
    {
      // name: JSON.parse(localStorage.getItem("userData")).UserName,
      name: "Sadik",
      // userRole: JSON.parse(localStorage.getItem("userData")).Role,
      userRole: "admin",
      comment: "",
      time: new Date().toString(),
    },
  ]);
  const [formValues, setFormValues] = useState([{ files: [] }]);

  const newComment = {
    name: JSON.parse(localStorage.getItem("userData")).UserName,
    userRole: JSON.parse(localStorage.getItem("userData")).Role,
    comment: "",
    time: new Date().toString(),
  };

  let handleComment = (i, e) => {
    console.log(i,e.target.value)
    let newFormValues = [...Comments];
  //  const {name,value} =e.target
  //  newFormValues[i][name]=value
    newFormValues[i][e.target.name] = e.target.value;
    setComments(newFormValues);
  };
  // const SubmitComment = () => {
  //   let user = JSON.parse(localStorage.getItem("userData"));
  //   console.log(user._id)
  //  CommentOrder(user?.accountId, Comments)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  let addFormFields = () => {
    setComments([...Comments, newComment]);
  };

  let addFileInput = () => {
    setFormValues([...formValues, { files: [] }]);
  };
  const handleProductChangeQty = (e, index) => {
    // console.log(index)
  const { name, value } = e.target;
    const productList = [...product];
    productList[index][name] = value;
    let amt = 0;
    if (productList.length > 0) {
      const x = productList?.map((value) => {
        productList[index]["totalprice"] = value.rquiredQty * value.price;
        return value.rquiredQty * value.price;
      });
      amt = x.reduce((a, b) => a + b);
    }
    setProduct(productList);
  };

  const handlePartChangeQty = (e, partindx) => {
 const { name, value } = e.target;
    const partList = [...part];
    partList[partindx][name] = value;
    let amt = 0;
    if (partList.length > 0) {
      const x = partList?.map((value) => {
        partList[partindx]["totalprice"] = value.rquiredQty * value.price;
        return value.rquiredQty * value.price;
      });
      amt = x.reduce((a, b) => a + b);
     }
    setPart(partList);
  };


  let removeFileAttach = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleFileChange = (i, e) => {
    const newFormValues = [...formValues];
    const selectedFiles = e.target.files;
    newFormValues[i].files = selectedFiles;
    // console.log(object)
    setFormValues(newFormValues);
  };
  let removeFormFields = (i) => {
    let newFormValues = [...Comments];
    newFormValues.splice(i, 1);
    setComments(newFormValues);
  };
  const handleInputChange = (e, type, i) => {
    const { name, value, checked } = e.target;
    // console.log(value)
    setindex(i);
    // if (type == "checkbox") {
    //   if (checked) {
    //     setFormData({
    //       ...formData,
    //       [name]: checked,
    //     });
    //   } else {
    //     setFormData({
    //       ...formData,
    //       [name]: checked,
    //     });
    //   }
    // } 
    // else {
      if (type == "number") {
        if (/^\d{0,10}$/.test(value)) {
          setFormData({
            ...formData,
            [name]: value,
          });
          setError("");
        } else {
          setError(
            "Please enter a valid number with a maximum length of 10 digits"
          );
        }
      } else {
        if (value.length <= 10) {
          setFormData({
            ...formData,
            [name]: value,
          });
          setError("");
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      }
    // }
  };
  // useEffect(()=>{
  //   // console.log(product)
  //     },[product])
  useEffect(() => {
   const userDetails= JSON.parse(localStorage.getItem("userData"))
   setUserDetails(userDetails)
   console.log(userDetails._id)
  }, [formData]);
  useEffect(() => {
    console.log(part,product)
  }, [part,product]);
  
  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem("userData"));
     setUserInfo(userInfo);
    CreateOrder_ID()
      .then((res) => {
        const lastElement = res?.Order[res?.Order?.length - 1].id;
        const prefix = lastElement?.substring(0, 5);
        const number = parseInt(lastElement?.match(/\d+$/)[0], 10) + 1;
        const concatenatedString = prefix + number;
        setOrderID(concatenatedString);
      })
      .catch((err) => {
        console.log(err);
      });

    CreateOrder_ViewData()
      .then((res) => {
        const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
        setCreatAccountView(JSON.parse(jsonData));
        setStatusDropDown(
          JSON.parse(jsonData)?.createOrder.CurrentStatus?.MyDropDown?.dropdown
        );
        setdropdownValue(JSON.parse(jsonData));
        setPartDetails(JSON.parse(jsonData)?.createOrder.PartDetails);
      })
      .catch((err) => {
        console.log(err);
      });
      
      GetCommentListView(userInfo._id)
      .then((res) => {
        console.log(res)
      setCommentshow(res)

      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  let addMorePart = (partindx) => {
    setPart([
      ...part,
      {
        part: "",
        partName: "",
        Shipping: "",
        availableQty: "",
        rquiredQty: 1,
        price: "",
        totalprice: "",
        discount: "",
        tax: "",
        grandTotal: "",
      },
      
    ]);
    setpartIndex(partindx+1)
  };
  let removeMorePart = (i) => {
    let newFormValues = [...part];
    newFormValues.splice(i, 1);
    setPart(newFormValues);
  };

  let addMoreProduct = (newIndex) => {
  // console.log(newIndex)
  setProduct((product)=>[
      ...product,
      {
        productName: "",
        availableQty: "",
        rquiredQty: 1,
        price: "",
        totalprice: "",
        discount: "",
        Shipping: "",
        tax: "",
        grandTotal: "",
      },
    ]);
   setProductIndex(newIndex+1);
 };
  let removeMoreProduct = (i) => {
    let newFormValues = [...product];
    newFormValues.splice(i, 1);
    setProduct(newFormValues);
  };
  let handlePartChange = (i, e) => {
    let newFormValues = [...part];
    newFormValues[i][e.target.name] = e.target.value;
    setPart(newFormValues);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // const prefixStr = OrderID.substring(0, 5);
    // const updateNumber = parseInt(OrderID.match(/\d+$/)[0], 10) + 1;
    // const newOrderID = prefixStr + updateNumber;
    // setOrderID(newOrderID);
    let formdata = new FormData();
    // console.log("comentsList",Comments)
    console.log("product",product)
    console.log("part",part)
  // console.log("abc",formData)
    // formdata.append(`WtpOnecode`, "WTP001");

    // CreatAccountView?.createOrder?.input?.map((ele, i)  => {
    //   formdata.append(`${ele?.name?._text}`, formData[ele?.name?._text]);
    // });

    // for (var value of formdata.values()) {
    //   console.log(value);
    // }
    formdata.append(`WtpOnecode`, "WTP001");
    formdata.append(`PartnerCode`, "PRT789");
    formdata.append(`OrderedBy`, "JaneDoe");
    formdata.append(`SuppliedBy`, "SupplierXYZ");
    formdata.append(`OEMPartPrice`, "150");
    formdata.append(`Wtponeadress`, "WTP Address, City");
    formdata.append(`SupplierLocation`, "Supplier City");
    formdata.append(`SupplierName`, "SupplierXYZ");
    formdata.append(`WTPname`, "WTP XYZ");
    formdata.append(`OrderId`, "ORD789");
    formdata.append(`NewOrder`, "Yes");
    formdata.append(`partorderId`, "PO123456");
    formdata.append(`Tracking`, "ABC123456");
    formdata.append(`ShippingCost`, "$15.00");
    formdata.append(`ShippingAddress`, "456 Shipping Lane, City");
    formdata.append(`BillingAddress`, "789 Billing Street, City");
    formdata.append(`CreatedDate`, "2023-11-26T08:00:00Z");
    formdata.append(`ModifiedDate`, "2023-11-26T10:30:00Z");
    formdata.append(`OrderDate`, "2023-11-26T09:45:00Z");
    formdata.append(`SupplierCode`, "SUP123");
    formdata.append(`CourierBy`, "FastCourier");
    formdata.append(`whatsapp`, "+1234567890");
    formdata.append(`sms`, "+918889407856");
    formdata.append(`gmail`, "test@example.com");
    formdata.append(`DealerPartPrice`, "20");
    formdata.append(`Warehouselocationname`, "Warehouse A");
    formdata.append(`Warrantycovered`, "2");
    formdata.append(`Tiedto`, "Some Information");
    formdata.append(`Status`, "Pending");
    formdata.append(`startDate`, "2023-11-26");
    formdata.append(`EndDate`, "2024-11-26");
    formdata.append(`Discount`, "10");
    // formdata.append(`PartDetail`,part);
    // formdata.append(`ProductDetail`, product);
    // formdata.append(`Comments`,Comments );
    // formdata.append("id", JSON.stringify("wrn" + { randomNumber }));
    // if (Comments.length > 0) {
    //   formdata.append(`Comments`, JSON.stringify(Comments));
    // }
    if (error) {
      swal("Error occured while Entering Details");
    } else {
      OrderDataSave(formdata)
        .then(res => {
          console.log(res)
          if (res.status) {
            setFormData({});
            // window.location.reload();
            swal("Order Created Successfully");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <div>
        <Card>
          <Row className="m-2">
            <Col className="">
              <div>
                <h1 className="">Create Order</h1>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <span className="orderIdtext pr-1">Order Id</span>

                  <span className="orderId">
                    {OrderID ? `#${OrderID}` : `#ord00${OrderID}`}
                  </span>
                  <span
                    className="ml-2"
                    onClick={handleHistory}
                    style={{ cursor: "pointer" }}
                  >
                    <FaHistory size={15} color="#055761" />
                  </span>
                </div>
                <div>
                  <span className="orderId">Status:</span> <span>Draft</span>
                </div>
                <div className="mystatus">
                  <div>
                    {!!StatusDropDown && !!StatusDropDown ? (
                      <>
                       <Label>{StatusDropDown?.label?._text}</Label>
                        <CustomInput
                          required
                          type="select"
                          name={StatusDropDown?.name?._text}
                          value={formData[StatusDropDown?.name?._text]}
                          onChange={handleInputChange}
                        >
                          <option value="">--Select Status---</option>
                          {StatusDropDown?.option?.map((option, index) => {
                            let dropdownpermision =
                              option?._attributes?.permission.split(",");
                            let permission = dropdownpermision?.includes(
                              UserInfo?.Role
                            );

                            return (
                              <>
                                {permission && (
                                  <option
                                    key={index}
                                    value={option?._attributes?.value}
                                  >
                                    {option?._attributes?.value}
                                  </option>
                                )}
                              </>
                            );
                          })}
                        </CustomInput>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <CardBody>
            <Form className="m-1" onSubmit={submitHandler}>
              <Row className="mb-2">
                {dropdownValue?.createOrder?.MyDropDown.map((drop, i) => {
                  // console.log(formData[drop?.dropdown?.dropdown?.name?._text])
                  return (
                    <Col lg="6" md="6" key={i}>
                      <FormGroup>
                        <Label>{drop?.dropdown?.label?._text}</Label>
                        <CustomInput
                          type="select"
                          name={drop?.dropdown?.name?._text}
                          value={
                            formData[drop?.dropdown?.dropdown?.name?._text]
                          }
                          // onChange={(phone) => {
                          //                     setFormData({
                          //                       ...formData,
                          //                       [ele?.name?._text]: phone,
                          //                     });
                          //                   }}
                          onChange={handleInputChange}
                        >
                          <option value="">
                            --Select {drop?.dropdown.name._text}---
                          </option>
                          {drop.dropdown.option.map((option, index) => {
                            return (
                              <option
                                key={index}
                                value={option?._attributes?.value}
                              >
                                {option?._attributes?.value}
                              </option>
                            );
                          })}
                        </CustomInput>
                      </FormGroup>
                    </Col>
                  );
                })}
                {dropdownValue?.createOrder?.OType?.MyDropDown?.map(
                  (drop, i) => {
                    return (
                      <Col lg="6" md="6" key={i}>
                        <FormGroup>
                          <Label>{drop?.dropdown?.label?._text}</Label>
                          <CustomInput
                            type="select"
                            name={drop?.dropdown?.name?._text}
                            value={
                              formData[drop?.dropdown?.dropdown?.name?._text]
                            }
                            onChange={handleInputChange}
                          >
                            <option value="">
                              --Select {drop?.dropdown.name._text}---
                            </option>
                            {drop.dropdown.option.map((option, index) => {
                              return (
                                <option
                                  key={index}
                                  value={option?._attributes?.value}
                                >
                                  {option?._attributes?.value}
                                </option>
                              );
                            })}
                          </CustomInput>
                        </FormGroup>
                      </Col>
                    );
                  }
                )}
                {dropdownValue?.createOrder?.OType?.SuppliedBy?.MyDropDown.map(
                  (drop, i) => {
                    return (
                      <Col lg="6" md="6" key={i}>
                        <FormGroup>
                          <Label>{drop?.dropdown?.label?._text}</Label>
                          <CustomInput
                            type="select"
                            name={drop?.dropdown?.name?._text}
                            value={
                              formData[drop?.dropdown?.dropdown?.name?._text]
                            }
                            onChange={handleInputChange}
                          >
                            <option value="">
                              --Select {drop?.dropdown.name._text}---
                            </option>
                            {drop.dropdown.option.map((option, index) => {
                              return (
                                <option
                                  key={index}
                                  value={option?._attributes?.value}
                                >
                                  {option?._attributes?.value}
                                </option>
                              );
                            })}
                          </CustomInput>
                        </FormGroup>
                      </Col>
                    );
                  }
                )}

                {CreatAccountView &&
                  CreatAccountView?.createOrder?.input?.map((ele, i) => {
                    {
                      /* if (ele?.role) {
                      let roles = ele?.role?.find(
                        role => role._attributes?.name === "WARRANTY APPROVER"
                      );

                      View = roles?.permissions?._text.includes("View");
                      Edit = roles?.permissions?._text.includes("Edit");
                    } */
                    }
                    if (!!ele?.lookup) {
                      return (
                        <>
                          <>
                            <Col key={i} lg="6" md="6" sm="12">
                              <FormGroup>
                                <Label>{ele?.label?._text}</Label>
                                <InputGroup className="maininput">
                                  <Input
                                    className="form-control inputs"
                                    type="text"
                                    readOnly
                                    name={ele?.name?._text}
                                    placeholder={ele?.name._text}
                                    value={formData[ele?.name?._text]}
                                    onChange={(e) =>
                                      handleInputChange(
                                        e,
                                        ele?.type?._attributes?.type,
                                        i
                                      )
                                    }
                                  />
                                  <Button
                                    color="primary"
                                    className="mybtn primary"
                                    name="part"
                                    onClick={handleopentoggle}
                                  >
                                    <AiOutlineSearch
                                      onClick={(e) => e.preventDefault()}
                                      fill="white"
                                    />
                                  </Button>
                                </InputGroup>

                                {index === i ? (
                                  <>
                                    {error && (
                                      <span style={{ color: "red" }}>
                                        {error}
                                      </span>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                              </FormGroup>
                            </Col>
                          </>
                        </>
                      );
                    }

                    if (!!ele?.phoneinput) {
                      return (
                        <>
                          <>
                            <Col key={i} lg="6" md="6" sm="12">
                              <FormGroup>
                                <Label>{ele?.label?._text}</Label>
                                <PhoneInput
                                  inputClass="myphoneinput"
                                  country={"us"}
                                  onKeyDown={(e) => {
                                    if (
                                      ele?.type?._attributes?.type == "number"
                                    ) {
                                      ["e", "E", "+", "-"].includes(e.key) &&
                                        e.preventDefault();
                                    }
                                  }}
                                  countryCodeEditable={false}
                                  name={ele?.name?._text}
                                  value={formData[ele?.name?._text]}
                                  onChange={(phone) => {
                                    setFormData({
                                      ...formData,
                                      [ele?.name?._text]: phone,
                                    });
                                  }}
                                  // onChange={handleInputChange}
                                />
                                {index === i ? (
                                  <>
                                    {error && (
                                      <span style={{ color: "red" }}>
                                        {error}
                                      </span>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                              </FormGroup>
                            </Col>
                          </>
                        </>
                      );
                    } else if (!!ele?.Readonly) {
                      if (ele?.type._attributes?.type == "checkbox") {
                        return (
                          <>
                            <div>
                              <Label className="mx-2">
                                {ele?.heading?._text}
                              </Label>
                              <Col key={i} lg="12" md="12" sm="12">
                                <FormGroup>
                                  <Input
                                    disabled
                                    className="mx-1"
                                    type={ele?.type._attributes?.type}
                                    name={ele?.name?._text}
                                    placeholder={ele?.name._text}
                                    value={formData[ele?.value?._text]}
                                  />
                                  <span className="mx-3 py-1">
                                    {ele?.value?._text}
                                  </span>
                                  {index === i ? (
                                    <>
                                      {error && (
                                        <span style={{ color: "red" }}>
                                          {error}
                                        </span>
                                      )}
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </FormGroup>
                              </Col>
                            </div>
                          </>
                        );
                      } else {
                        return (
                          <>
                            <Col key={i} lg="6" md="6" sm="12">
                              <Label>{ele?.label?._text}</Label>
                              <FormGroup>
                                <Input
                                  disabled
                                  className="form-control"
                                  type={ele?.type._attributes?.type}
                                  name={ele?.name?._text}
                                  placeholder={ele?.name._text}
                                  value={formData[ele?.value?._text]}
                                />
                                <span className="mx-2">
                                  {ele?.value?._text}
                                </span>
                                {index === i ? (
                                  <>
                                    {error && (
                                      <span style={{ color: "red" }}>
                                        {error}
                                      </span>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                              </FormGroup>
                            </Col>
                          </>
                        );
                      }
                    } else {
                      return (
                        <>
                          <Col key={i} lg="6" md="6" sm="12">
                            <Label>{ele?.label?._text}</Label>

                            <Input
                              type={ele?.type?._attributes?.type}
                              placeholder={ele?.placeholder?._text}
                              name={ele?.name?._text}
                              value={formData[ele?.name?._text]}
                              onChange={(e) =>
                                handleInputChange(
                                  e,
                                  ele?.type?._attributes?.type,
                                  i
                                )
                              }
                            />
                            {index === i ? (
                              <>
                                {error && (
                                  <span style={{ color: "red" }}>{error}</span>
                                )}
                              </>
                            ) : (
                              <></>
                            )}
                          </Col>
                        </>
                      );
                    }
                  })}
                {/* {partdetails &&
                  partdetails?.input?.map(
                    (ele, i) => {
                   if (!!ele?.lookup) {
                        return (
                          <>
                            <>
                              <Col key={i} lg="6" md="6" sm="12">
                                <FormGroup>
                                  <Label>{ele?.label?._text}789</Label>
                                  <InputGroup className="maininput">
                                    <Input
                                      className="form-control inputs"
                                      type="text"
                                      name={ele?.name?._text}
                                      placeholder={ele?.name._text}
                                      value={formData[ele?.name?._text]}
                                      readOnly
                                    />
                                    <Button
                                      onClick={handleopentoggle}
                                      color="primary"
                                      className="mybtn primary"
                                    >
                                      <AiOutlineSearch
                                        onClick={e => e.preventDefault()}
                                        fill="white"
                                      />
                                    </Button>
                                  </InputGroup>

                                  {index === i ? (
                                    <>
                                      {error && (
                                        <span style={{ color: "red" }}>
                                          {error}
                                        </span>
                                      )}
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </FormGroup>
                              </Col>
                            </>
                          </>
                        );
                      }

                      if (!!ele?.phoneinput) {
                        return (
                          <>
                            <>
                              <Col key={i} lg="6" md="6" sm="12">
                                <FormGroup>
                                  <Label>{ele?.label?._text}</Label>
                                  <PhoneInput
                                    inputClass="myphoneinput"
                                    country={"us"}
                                    onKeyDown={e => {
                                      if (
                                        ele?.type?._attributes?.type == "number"
                                      ) {
                                        ["e", "E", "+", "-"].includes(e.key) &&
                                          e.preventDefault();
                                      }
                                    }}
                                    countryCodeEditable={false}
                                    name={ele?.name?._text}
                                    value={formData[ele?.name?._text]}
                                    onChange={phone => {
                                      setFormData({
                                        ...formData,
                                        [ele?.name?._text]: phone,
                                      });
                                    }}
                                    // onChange={handleInputChange}
                                  />
                                  {index === i ? (
                                    <>
                                      {error && (
                                        <span style={{ color: "red" }}>
                                          {error}
                                        </span>
                                      )}
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </FormGroup>
                              </Col>
                            </>
                          </>
                        );
                      } else if (!!ele?.Readonly) {
                        if (ele?.type._attributes?.type == "checkbox") {
                          return (
                            <>
                              <div>
                                <Label className="mx-2">
                                  {ele?.heading?._text}
                                </Label>
                                <Col key={i} lg="12" md="12" sm="12">
                                  <FormGroup>
                                    <Input
                                      disabled
                                      className="mx-1"
                                      type={ele?.type._attributes?.type}
                                      name={ele?.name?._text}
                                      placeholder={ele?.name._text}
                                      value={formData[ele?.value?._text]}
                                    />
                                    <span className="mx-3 py-1">
                                      {ele?.value?._text}
                                    </span>
                                    {index === i ? (
                                      <>
                                        {error && (
                                          <span style={{ color: "red" }}>
                                            {error}
                                          </span>
                                        )}
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </FormGroup>
                                </Col>
                              </div>
                            </>
                          );
                        } else {
                          return (
                            <>
                              <Col key={i} lg="6" md="6" sm="12">
                                <Label>{ele?.label?._text}</Label>
                                <FormGroup>
                                  <Input
                                    disabled
                                    className="form-control"
                                    type={ele?.type._attributes?.type}
                                    name={ele?.name?._text}
                                    placeholder={ele?.name._text}
                                    value={formData[ele?.value?._text]}
                                  />
                                  <span className="mx-2">
                                    {ele?.value?._text}
                                  </span>
                                  {index === i ? (
                                    <>
                                      {error && (
                                        <span style={{ color: "red" }}>
                                          {error}
                                        </span>
                                      )}
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </FormGroup>
                              </Col>
                            </>
                          );
                        }
                      } else {
                        return (
                          <>
                            <Col key={i} lg="6" md="6" sm="12">
                              <Label>{ele?.label?._text}</Label>

                              <Input
                                type={ele?.type?._attributes?.type}
                                placeholder={ele?.placeholder?._text}
                                name={ele?.name?._text}
                                value={formData[ele?.name?._text]}
                                onChange={e =>
                                  handleInputChange(
                                    e,
                                    ele?.type?._attributes?.type,
                                    i
                                  )
                                }
                              />
                              {index === i ? (
                                <>
                                  {error && (
                                    <span style={{ color: "red" }}>
                                      {error}
                                    </span>
                                  )}
                                </>
                              ) : (
                                <></>
                              )}
                            </Col>
                          </>
                        );
                      }
                    }
                  )} */}

                <div className="container">
                  <Label className="py-1">Notification</Label>
                  <div>
                    {CreatAccountView &&
                      CreatAccountView?.createOrder?.CheckBox?.input?.map(
                        (ele, i) => {
                          return (
                            <>
                              <span key={i} className="mx-2">
                                <Input
                                  style={{ marginRight: "3px" }}
                                  type={ele?.type?._attributes?.type}
                                  name={ele?.name?._text}
                                  onChange={(e) =>
                                    handleInputChange(e, "checkbox")
                                  }
                                />{" "}
                                <span
                                  className="mt-1 mx-1"
                                  style={{ marginRight: "40px" }}
                                >
                                  {ele?.label?._text == "Whatsapp" ? (
                                    <BsWhatsapp
                                      className="mx-1"
                                      color="#59CE72"
                                      size={25}
                                    />
                                  ) : (
                                    <>
                                      {ele.label?._text == "SMS" ? (
                                        <>
                                          <FcPhoneAndroid size={30} />
                                        </>
                                      ) : (
                                        <>
                                          <BiEnvelope className="" size={30} />
                                        </>
                                      )}
                                    </>
                                  )}
                                </span>
                              </span>
                            </>
                          );
                        }
                      )}
                  </div>
                </div>
              </Row>
              <hr />

              <h2 className="text-center">Product Details</h2>
              {product &&
                product?.map((product, productIndex) => (
                 <Row className="productRow" key={productIndex}>
                    <div className="setInput lookUp" lg="2" md="2" sm="12">
                      <div className="mainLook">
                        <Label>Product#</Label>
                        <InputGroup className="maininput">
                          <Input
                            className="form-control inputs"
                            disabled
                            type="text"
                            name="productN"
                            readOnly
                            placeholder="Product"
                            // value={element.productName || ""}
                          />
                          <Button
                            onClick={() => handleopentoggle("Product",productIndex)}
                            color="primary"
                            className="mybtn primary"
                          >
                            <AiOutlineSearch
                              onClick={(e) => e.preventDefault()}
                              fill="white"
                            />
                          </Button>
                        </InputGroup>
                      </div>
                    </div>
                    <div className="setInput" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>ProdName</Label>
                        <Input
                          type="text"
                          name="ProdName"
                          readOnly
                          placeholder="ProdName"
                          value={product.productName || ""}
                        />
                      </div>
                    </div>
                    <div className="setInput" lg="2" md="2" sm="12">
                      <div className="Qntywidth">
                        <Label>Avl_Qty</Label>
                        <Input
                          type="number"
                          name="availableQty"
                          readOnly
                          placeholder="Avl_Qty"
                          value={product.availableQty}
                        />
                      </div>
                    </div>
                    <div className="setInput" lg="2" md="2" sm="12">
                      <div className="Qntywidth">
                        <Label>Req_Qty</Label>
                        <Input
                          type="number"
                          name="rquiredQty"
                          placeholder="Req_Qty"
                          value={product?.rquiredQty}
                          onChange={(e) => handleProductChangeQty(e, productIndex)}
                        />
                      </div>
                    </div>
                    <div className="setInput" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Price</Label>
                        <Input
                          type="number"
                          name="Price"
                          readOnly
                          placeholder="Price"
                          value={product.price}
                        />
                      </div>
                    </div>
                    <div className="setInput" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>TtlPrice</Label>
                        <Input
                          type="number"
                          name="totalprice"
                          readOnly
                          placeholder="TtlPrice"
                          value={product.totalprice}
                        />
                      </div>
                    </div>
                    <div className="setInput" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Dissct</Label>
                        <Input
                          type="number"
                          name="discount"
                          readOnly
                          placeholder="Dissct"
                          value={product.discount}
                        />
                      </div>
                    </div>
                    <div className="setInput" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Shipcst</Label>
                        <Input
                          type="number"
                          name="Shipcst"
                          readOnly
                          placeholder="Shipcst"
                          value={product.Shipping}
                        />
                      </div>
                    </div>
                    <div className="setInput" lg="2" md="2" sm="12">
                      <div className="Qntywidth">
                        <Label>Tax</Label>
                        <Input
                          type="number"
                          name="tax"
                          readOnly
                          placeholder="Tax"
                          value={product.tax}
                        />
                      </div>
                    </div>
                    <div className="setInput" lg="2" md="2" sm="12">
                      <div className="Qntywidth">
                        <Label>Grdttl</Label>
                        <Input
                          type="number"
                          name="Grdttl"
                          readOnly
                          placeholder="Grdttl"
                          value={product.grandTotal}
                        />
                      </div>
                    </div>
                    <div className="d-flex mt-2 abb" lg="" md="2" sm="12">
                      <div className="btnStyle">
                        {productIndex ? (
                          <Button
                            type="button"
                            color="danger"
                            className="button remove "
                            onClick={() => removeMoreProduct(productIndex)}
                          >
                            -
                          </Button>
                        ) : null}
                      </div>

                      <div className="btnStyle">
                        <Button
                          className="ml-1 "
                          color="primary"
                          type="button"
                          onClick={() => addMoreProduct(productIndex)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </Row>
                ))}
              <hr></hr>
              <h2 className="text-center">Part Details</h2>
              {part.map((part, partindx) => (
                  <Row className="" key={partindx}>
                   <div className="setInput" lg="2" md="2" sm="12">
                    <Label>Part#</Label>
                    <InputGroup className="maininput">
                      <Input
                        className="form-control inputs"
                        disabled
                        type="text"
                        name="part"
                        readOnly
                        placeholder="Part"
                        // onChange={e => handleInputChange(e)}
                        // value={element.productName || ""}
                      />
                      <Button
                        onClick={() => handleopentoggle("Part")}
                        color="primary"
                        className="mybtn primary"
                      >
                        <AiOutlineSearch
                          onClick={(e) => e.preventDefault()}
                          fill="white"
                        />
                      </Button>
                    </InputGroup>
                  </div>

                  <div className="setInput" md="2" sm="12">
                    <div className="">
                      <Label>PartName</Label>
                      <Input
                        type="text"
                        name="partName"
                        readOnly
                        placeholder="PartName"
                        value={part.partName}
                        // onChange={(e) => handlePartChange(partindx, e)}
                      />
                    </div>
                  </div>
                  <div className="setInput" lg="2" md="2" sm="12">
                    <div className="Qntywidth">
                      <Label>Avl_Qty</Label>
                      <Input
                        type="number"
                        name="availableQty"
                        readOnly
                        placeholder="Avl_Qty"
                        value={part.availableQty}
                      />
                    </div>
                  </div>
                  <div className="setInput" lg="2" md="2" sm="12">
                    <div className="Qntywidth">
                      <Label>Req_Qty</Label>
                      <Input
                        type="number"
                        name="rquiredQty"
                        placeholder="Require Qty"
                        value={part?.rquiredQty}
                        onChange={(e) => handlePartChangeQty(e, partindx)}
                      />
                    </div>
                  </div>
                  <div className="setInput" lg="2" md="2" sm="12">
                    <div className="">
                      <Label>Price</Label>
                      <Input
                        type="number"
                        name="price"
                        readOnly
                        placeholder="Price"
                        value={part.price}
                      />
                    </div>
                  </div>
                  <div className="setInput" lg="2" md="2" sm="12">
                    <div className="">
                      <Label>TtlPrice</Label>
                      <Input
                        type="number"
                        name="totalprice"
                        readOnly
                        placeholder="TtlPrice"
                        value={part.totalprice}
                      />
                    </div>
                  </div>
                  <div className="setInput" lg="2" md="2" sm="12">
                    <div className="">
                      <Label>Dissct</Label>
                      <Input
                        type="number"
                        name="discount"
                        readOnly
                        placeholder="Dissct"
                        value={part.discount}
                      />
                    </div>
                  </div>
                  <div className="setInput" lg="2" md="2" sm="12">
                    <div className="">
                      <Label>Shipcst</Label>
                      <Input
                        type="text"
                        name="Shipping"
                        readOnly
                        placeholder="Shipcst"
                        value={part.Shipping}
                      />
                    </div>
                  </div>
                  <div className="setInput" lg="2" md="2" sm="12">
                    <div className="Qntywidth">
                      <Label>Tax</Label>
                      <Input
                        type="number"
                        name="tax"
                        readOnly
                        placeholder="Tax"
                        value={part.tax}
                      />
                    </div>
                  </div>
                  <div className="setInput" lg="2" md="2" sm="12">
                    <div className="Qntywidth">
                      <Label>Grdttl</Label>
                      <Input
                        type="number"
                        name="Grdttl"
                        readOnly
                        placeholder="Grdttl"
                        value={part.grandTotal}
                      />
                    </div>
                  </div>
                  <Col className="d-flex mt-2" lg="2" md="2" sm="12">
                    <div className="btnStyle">
                      {partindx ? (
                        <Button
                          type="button"
                          color="danger"
                          className="button remove "
                          onClick={() => removeMorePart(partindx)}
                        >
                          -
                        </Button>
                      ) : null}
                    </div>

                    <div className="btnStyle">
                      <Button
                        className="ml-1 "
                        color="primary"
                        type="button"
                        onClick={() => addMorePart(partindx)}
                      >
                        +
                      </Button>
                    </div>
                  </Col>
                </Row>
              ))}
              <Row>
                <Button.Ripple color="primary" type="submit" className="mt-2">
                  Submit
                </Button.Ripple>
              </Row>
            </Form>
         
                {/* {Commentshow.length &&
                  Commentshow?.map((ele, i) => (
                    <Row key={i}>
                      {console.log(ele)}
                      <Col>
                        <div
                          style={{
                            border: "1px solid black",
                            padding: "2px 2px",
                            borderRadius: "8px",
                            marginBottom: "4px",
                          }}
                          className=""
                        >
                          <div className="py-1 mx-2">
                            <strong>
                              <BsFillChatDotsFill size={25} fill="#055761" />
                            </strong>
                            &nbsp;{ele?.comment} {ele?.userName} ({ele?.Role})
                            {ele?.time}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  ))} */}
          
            {Comments &&
              Comments?.map((element, index) => (
                <>
                  <Row key={index} className="my-2">
                    <Col lg="6" md="6" sm="12">
                      <Label>Comment</Label>
                      <Input
                        type="textarea"
                        name="comment"
                        placeholder="Comment"
                        value={element.comment || ""}
                        onChange={(e) => handleComment(index, e)}
                      />
                    </Col>

                    <Col className="d-flex mt-2" lg="3" md="3" sm="12">
                      <div>
                        {index ? (
                          <Button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => removeFormFields(index)}
                          >
                            -
                          </Button>
                        ) : null}
                      </div>

                      <div>
                        <Button
                          className="ml-1 "
                          color="primary"
                          type="button"
                          onClick={() => addFormFields()}
                        >
                          +
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </>
              ))}

            {/* <Button
              className=""
              color="primary"
              onClick={(e) => {
                SubmitComment(e);
              }}
            >
              <span className="pr-1">Submit</span>
              <FiSend fill="white" size={18} />
            </Button> */}
            <div className="attachment">
              <h2 className="attachSection">Attachment</h2>
              {formValues.map((index, i) => (
                <Row className="my-2">
                  <Col lg="6" md="6" sm="12" key={i}>
                    <Input
                      type="file"
                      multiple
                      onChange={(e) => handleFileChange(i, e)}
                    />
                  </Col>
                  <Col className="d-flex mt-2" lg="3" md="3" sm="12">
                    <div>
                      {i ? (
                        <Button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => removeFileAttach(i)}
                        >
                          -
                        </Button>
                      ) : null}
                    </div>
                    <div>
                      <Button
                        className="ml-1"
                        color="primary"
                        type="button"
                        onClick={() => addFileInput()}
                      >
                        +
                      </Button>
                    </div>
                  </Col>
                </Row>
              ))}
            </div>
            <Payment />
          </CardBody>
        </Card>
        <Modal
          fullscreen="xl"
          size="lg"
          backdrop={false}
          isOpen={modal}
          toggle={toggle}
          {...args}
        >
          <ModalHeader toggle={toggle}>Product List</ModalHeader>
          <ModalBody>
            <OrderedList
             items={items}
              setProduct={setProduct}
              product={product}
              productIndex={productIndex}

              setPart={setPart}
              part={part}
              partIndex={partIndex}

              toggle={toggle}
            />
          </ModalBody>
        </Modal>
        <Modal
          fullscreen="xl"
          size="lg"
          backdrop={false}
          isOpen={audit}
          toggle={audittoggle}
          {...args}
        >
          <ModalHeader toggle={audittoggle}>Audit History List</ModalHeader>
          <ModalBody>
            <AuditHistory />
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};
export default CreateOrder;
