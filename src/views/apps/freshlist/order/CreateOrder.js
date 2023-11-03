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
  Table,
  ModalBody,
  ModalHeader,
  Modal,
  InputGroup,
} from "reactstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { BiEnvelope } from "react-icons/bi";
import { BsFillChatDotsFill, BsWhatsapp } from "react-icons/bs";
import { FcPhoneAndroid } from "react-icons/fc";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

import "../../../../assets/scss/pages/users.scss";
import {
  CreateOrder_ViewData,
  CreateOrder_ID,
  CommentProductWiki,
} from "../../../../ApiEndPoint/ApiCalling";
import "../../../../assets/scss/pages/users.scss";
import Payment from "./payment/Payment";
import ProductData from "../house/ProductType";
const CreateWarrenty = args => {
  const [CreatAccountView, setCreatAccountView] = useState({});
  const [formData, setFormData] = useState({});
  const [dropdownValue, setdropdownValue] = useState({});
  const [StatusDropDown, setStatusDropDown] = useState({});
  const [partdetails, setPartDetails] = useState({});
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const [permissions, setpermissions] = useState({});
  const [Commentshow, setCommentshow] = useState(false);
  const [OrderID, setOrderID] = useState(0);
  const [UserInfo, setUserInfo] = useState({});
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  // const [formValues, setFormValues] = useState([{ files: [] }]);

  // const newComment = {
  //   userName: JSON.parse(localStorage.getItem("userData")).UserName,
  //   Role: JSON.parse(localStorage.getItem("userData")).Role,
  //   comment: "",
  //   time: new Date().toString(),
  // };
  const [product, setProduct] = useState([
    { productName: "", productImg: "", variant: "" },
  ]);
  const [part, setPart] = useState([
    { part: "", partName: "", partImage: "", color: "" },
  ]);

  const [Comments, setComments] = useState([
    {
      name: JSON.parse(localStorage.getItem("userData")).UserName,
      userRole: JSON.parse(localStorage.getItem("userData")).Role,
      comment: "",
      time: new Date(),
    },
  ]);
  const [formValues, setFormValues] = useState([{ files: [] }]);

  const newComment = {
    userName: JSON.parse(localStorage.getItem("userData")).UserName,
    Role: JSON.parse(localStorage.getItem("userData")).Role,
    comment: "",
    time: new Date().toString(),
  };

  const handleopentoggle = () => {
    toggle();
  };
  let handleComment = (i, e) => {
    let newFormValues = [...Comments];
    newFormValues[i][e.target.name] = e.target.value;
    setComments(newFormValues);
  };
  const SubmitComment = () => {
    let user = JSON.parse(localStorage.getItem("userData"));

    setCommentshow(true);
    CommentProductWiki(user?.accountId, Comments)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  let addFormFields = () => {
    setComments([...Comments, newComment]);
  };

  let addFileInput = () => {
    setFormValues([...formValues, { files: [] }]);
  };

  let removeFileAttach = i => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleFileChange = (i, e) => {
    const newFormValues = [...formValues];
    const selectedFiles = e.target.files;
    newFormValues[i].files = selectedFiles;
    setFormValues(newFormValues);
  };
  let removeFormFields = i => {
    let newFormValues = [...Comments];
    newFormValues.splice(i, 1);
    setComments(newFormValues);
  };
  const handleInputChange = (e, type, i) => {
    const { name, value, checked } = e.target;
    setindex(i);
    if (type == "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          [name]: checked,
        });
      } else {
        setFormData({
          ...formData,
          [name]: checked,
        });
      }
    } else {
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
    }
  };
  // handleInputChange;
  useEffect(() => {}, [formData]);
  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem("userData"));
    setUserInfo(userInfo);
    CreateOrder_ID()
      .then(res => {
        const lastElement = res.Order[res.Order.length - 1].id;
        const prefix = lastElement.substring(0, 5);
        const number = parseInt(lastElement.match(/\d+$/)[0], 10) + 1;
        const concatenatedString = prefix + number;
        setOrderID(concatenatedString);
      })
      .catch(err => {
        console.log(err);
      });
    CreateOrder_ViewData()
      .then(res => {
        const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
        console.log(
          JSON.parse(jsonData).createOrder.PartDetails.input[0].Readonly
        );
        setCreatAccountView(JSON.parse(jsonData));
        setStatusDropDown(
          JSON.parse(jsonData)?.createOrder.CurrentStatus?.MyDropDown?.dropdown
        );
        setdropdownValue(JSON.parse(jsonData));
        setPartDetails(JSON.parse(jsonData)?.createOrder.PartDetails);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  let addMorePart = () => {
    setPart([...part, { partName: "", part: "", partImg: "", color: "" }]);
  };
  let removeMorePart = i => {
    let newFormValues = [...part];
    newFormValues.splice(i, 1);
    setPart(newFormValues);
  };
  let addMoreProduct = () => {
    setProduct([...product, { productName: "", model: "", variant: "" }]);
  };
  let removeMoreProduct = i => {
    let newFormValues = [...product];
    newFormValues.splice(i, 1);
    setProduct(newFormValues);
  };
  let handlePartChange = (i, e) => {
    let newFormValues = [...part];
    newFormValues[i][e.target.name] = e.target.value;
    setPart(newFormValues);
  };
  // const generateOrderID = () => {

  // };

  const submitHandler = e => {
    e.preventDefault();
    console.log("previous", OrderID);
    const prefixStr = OrderID.substring(0, 5);
    const updateNumber = parseInt(OrderID.match(/\d+$/)[0], 10) + 1;
    const newOrderID = prefixStr + updateNumber;
    setOrderID(newOrderID);
    // let formdata = new FormData();

    // formdata.append(`Status`, Status);
    // formdata.append("id", JSON.stringify("wrn" + { randomNumber }));
    // if (Comments.length > 0) {
    //   formdata.append(`Comments`, JSON.stringify(Comments));
    // }
    // if (error) {
    //   swal("Error occured while Entering Details");
    // } else {
    //   CreateAccountSave(formData)
    //     .then(res => {
    //       if (res.status) {
    //         setFormData({});
    //         window.location.reload();
    //         swal("Acccont Created Successfully");
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
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
                    {OrderID ? `#${OrderID}` : `#ord00 ${OrderID}`}
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
                  return (
                    <Col lg="6" md="6" key={i}>
                      <FormGroup>
                        <Label>{drop?.dropdown?.label?._text}</Label>
                        <CustomInput
                          // required
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
                })}
                {dropdownValue?.createOrder?.OType?.MyDropDown?.map(
                  (drop, i) => {
                    return (
                      <Col lg="6" md="6" key={i}>
                        <FormGroup>
                          <Label>{drop?.dropdown?.label?._text}</Label>
                          <CustomInput
                            // required
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
                            // required
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
                                <Label>{ele?.label?._text}656</Label>
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
                                  onChange={e =>
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
              {product.map((element, index) => (
                <Row className="" key={index}>
                  <Col className="" lg="2" md="2" sm="12">
                    <Label>Product#</Label>
                    <InputGroup className="maininput">
                      <Input
                        // value={Role}
                        // onChange={e => handleInputChange(e)}
                        className="form-control inputs"
                        disabled
                        type="text"
                        name="productN"
                        readOnly
                        placeholder="Product"
                        // value={element.productName || ""}
                        // onChange={e => handleProductChange(index, e)}
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
                  </Col>
                  <Col className="" lg="" md="2" sm="12">
                    <FormGroup>
                      <Label>ProdName</Label>
                      <Input
                        type="text"
                        name="ProdName"
                        readOnly
                        placeholder="ProdName"
                        value={element.productName || ""}
                        onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="" md="2" sm="12">
                    <FormGroup>
                      <Label>Avl_Qty</Label>
                      <Input
                        type="number"
                        name="Avl_Qty"
                        readOnly
                        placeholder="Avl_Qty"
                        value={element.model || ""}
                        // onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="" md="2" sm="12">
                    <FormGroup>
                      <Label>Req_Qty</Label>
                      <Input
                        type="number"
                        name="Req_Qty"
                        readOnly
                        placeholder="Req_Qty"
                        value={element.variant || ""}
                        // onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="" md="2" sm="12">
                    <FormGroup>
                      <Label>Price</Label>
                      <Input
                        type="number"
                        name="Price"
                        readOnly
                        placeholder="Price"
                        value={element.variant || ""}
                        // onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="" md="2" sm="12">
                    <FormGroup>
                      <Label>TtlPrice</Label>
                      <Input
                        type="number"
                        name="Price"
                        readOnly
                        placeholder="Price"
                        value={element.variant || ""}
                        // onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="" md="2" sm="12">
                    <FormGroup>
                      <Label>Dsct</Label>
                      <Input
                        type="number"
                        name="Dsct"
                        readOnly
                        placeholder="Dsct"
                        value={element.variant || ""}
                        // onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="" md="2" sm="12">
                    <FormGroup>
                      <Label>Shipcst</Label>
                      <Input
                        type="number"
                        name="Shipcst"
                        readOnly
                        placeholder="Shipcst"
                        value={element.variant || ""}
                        // onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="" md="2" sm="12">
                    <FormGroup>
                      <Label>Tax</Label>
                      <Input
                        type="number"
                        name="tax"
                        readOnly
                        placeholder="Tax"
                        value={element.variant || ""}
                        // onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="" md="2" sm="12">
                    <FormGroup>
                      <Label>Grdttl</Label>
                      <Input
                        type="number"
                        name="Grdttl"
                        readOnly
                        placeholder="Grdttl"
                        value={element.variant || ""}
                        // onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="d-flex mt-2" lg="" md="2" sm="12">
                    <div>
                      {index ? (
                        <Button
                          type="button"
                          color="danger"
                          className="button remove "
                          onClick={() => removeMoreProduct(index)}
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
                        onClick={() => addMoreProduct()}
                      >
                        +
                      </Button>
                    </div>
                  </Col>
                </Row>
              ))}

              {part.map((element, index) => (
                <Row className="" key={index}>
                  <Col className="" lg="2" md="2" sm="12">
                    <Label>Part#</Label>
                    <InputGroup className="maininput">
                      <Input
                        // value={Role}
                        // onChange={e => handleInputChange(e)}
                        className="form-control inputs"
                        disabled
                        type="text"
                        name="part"
                        readOnly
                        placeholder="Part"
                        // value={element.productName || ""}
                        // onChange={e => handleProductChange(index, e)}
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
                  </Col>
                  <Col className="" lg="" md="2" sm="12">
                    <FormGroup>
                      <Label>PartName</Label>
                      <Input
                        type="text"
                        name="partName"
                        readOnly
                        placeholder="PartName"
                        value={element.partName || ""}
                        onChange={e => handlePartChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="" md="2" sm="12">
                    <FormGroup>
                      <Label>Avl_Qty</Label>
                      <Input
                        type="number"
                        name="Avl_Qty"
                        readOnly
                        placeholder="Avl_Qty"
                        value={element.model || ""}
                        // onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="" md="2" sm="12">
                    <FormGroup>
                      <Label>Req_Qty</Label>
                      <Input
                        type="number"
                        name="Req_Qty"
                        readOnly
                        placeholder="Req_Qty"
                        value={element.variant || ""}
                        // onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="" md="2" sm="12">
                    <FormGroup>
                      <Label>Price</Label>
                      <Input
                        type="number"
                        name="Price"
                        readOnly
                        placeholder="Price"
                        value={element.variant || ""}
                        // onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="" md="2" sm="12">
                    <FormGroup>
                      <Label>TtlPrice</Label>
                      <Input
                        type="number"
                        name="Price"
                        readOnly
                        placeholder="Price"
                        value={element.variant || ""}
                        // onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="" md="2" sm="12">
                    <FormGroup>
                      <Label>Dsct</Label>
                      <Input
                        type="number"
                        name="Dsct"
                        readOnly
                        placeholder="Dsct"
                        value={element.variant || ""}
                        // onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="" md="2" sm="12">
                    <FormGroup>
                      <Label>Shipcst</Label>
                      <Input
                        type="number"
                        name="Shipcst"
                        readOnly
                        placeholder="Shipcst"
                        value={element.variant || ""}
                        // onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="" md="2" sm="12">
                    <FormGroup>
                      <Label>Tax</Label>
                      <Input
                        type="number"
                        name="tax"
                        readOnly
                        placeholder="Tax"
                        value={element.variant || ""}
                        // onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="" md="2" sm="12">
                    <FormGroup>
                      <Label>Grdttl</Label>
                      <Input
                        type="number"
                        name="Grdttl"
                        readOnly
                        placeholder="Grdttl"
                        value={element.variant || ""}
                        // onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>

                  <Col className="d-flex mt-2" lg="2" md="2" sm="12">
                    <div>
                      {index ? (
                        <Button
                          type="button"
                          color="danger"
                          className="button remove "
                          onClick={() => removeMorePart(index)}
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
                        onClick={() => addMorePart()}
                      >
                        +
                      </Button>
                    </div>
                  </Col>
                </Row>
              ))}
              {/* <Row className="mt-2 ">
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="">
                    <h4>Status</h4>
                  </Label>
                  <div className="form-label-group mx-1">
                    {CreatAccountView &&
                      CreatAccountView?.createOrder?.Radiobutton?.input?.map(
                        (ele, i) => {
                          return (
                            <FormGroup key={i}>
                              <Input
                                key={i}
                                style={{ marginRight: "3px" }}
                                required
                                type={ele?.type?._attributes?.type}
                                name={ele?.name?._text}
                                value={`${
                                  ele?.label?._text == "Active"
                                    ? "Active"
                                    : "Deactive"
                                }`}
                                onChange={handleInputChange}
                              />{" "}
                              <span
                                className="mx-1 mt-1"
                                style={{ marginRight: "20px" }}
                              >
                                {ele?.label?._text}
                              </span>
                            </FormGroup>
                          );
                        }
                      )}
                  </div>
                </Col>
              </Row> */}

              <Row>
                <Button.Ripple color="primary" type="submit" className="mt-2">
                  Submit
                </Button.Ripple>
              </Row>
            </Form>
            {Commentshow && Commentshow ? (
              <>
                {Comments.length &&
                  Comments?.map((ele, i) => (
                    <Row key={i}>
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
                            </strong>{" "}
                            &nbsp;{ele?.comment} {ele?.userName} ({ele?.Role}){" "}
                            {ele?.time}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  ))}
              </>
            ) : null}
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
                        onChange={e => handleComment(index, e)}
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
            <Button
              className=""
              color="primary"
              onClick={e => {
                SubmitComment(e);
              }}
            >
              <span className="pr-1">Submit</span>
              <FiSend fill="white" size={18} />
            </Button>
            <div className="attachment">
              <h2 className="attachSection">Attachment</h2>
              {formValues.map((index, i) => (
                <Row className="my-2">
                  <Col lg="6" md="6" sm="12" key={i}>
                    <Input
                      type="file"
                      multiple
                      onChange={e => handleFileChange(i, e)}
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
            {/* <div className="modalheaderaddrol p-1">
              <h3>Product List</h3>
              <Table
                className="tableofrole"
                bordered
                borderless
                hover
                responsive
                size="sm"
                striped
              >
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Product Name</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </Table>
            </div> */}
            <ProductData />
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};
export default CreateWarrenty;
