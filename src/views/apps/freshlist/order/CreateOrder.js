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
  Table,
} from "reactstrap";
import { Razorpay } from "react-razorpay";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { BiEnvelope } from "react-icons/bi";
import {
  BsFillArrowLeftSquareFill,
  BsFillChatDotsFill,
  BsWhatsapp,
} from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

import "../../../../assets/scss/pages/users.scss";
import {
  CreateOrder_ViewData,
  ListCreaterOrderView,
  CommentOrder,
  OrderDataSave,
  CreatedOrderList,
  CreateOrder_ID,
  // GetCommentListView,
  WarrantyAuditHistoryList,
  WarrantyAuditHistoryViewOne,
} from "../../../../ApiEndPoint/ApiCalling";
import "../../../../assets/scss/pages/users.scss";
import SoftNumenLogo from "../../../../assets/img/logo/logowithoutback.png";
import OrderedList from "./OrderedList";
import AuditHistory from "./audithistory/AuditHistory";
import swal from "sweetalert";
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
  const [productTotal, setProductTotal] = useState("");
  // const [productGrand, setProductGrand] = useState("");
  const [partTotal, setPartTotal] = useState("");
  const [partGrand, setPartGrand] = useState("");
  const [audit, setAudit] = useState(false);
  // const toggle = () => setModal(!modal);
  const [modalone, setModalone] = useState(false);
  const toggleone = () => setModalone(!modalone);
  const [Audithistory, setAudithistory] = useState([]);
  const [Allhistory, setAllhistory] = useState([]);
 

  const toggle = (item) => {
    setItems(item);
    setModal(!modal);
  };
  // const audittoggle = () => {
  //   setAudit(!audit);
  // };
  const audittoggle = () => {
    setAudit(!audit);
    WarrantyAuditHistoryList()
      .then((res) => {
        console.log(res?.AuditHistory);
        const uniqueArray = Array.from(
          new Set(res?.AuditHistory?.map((obj) => obj.id))
        ).map((id) => {
          return res?.AuditHistory?.find((obj) => obj?.id === id);
        });

        console.log(uniqueArray);
        setAudithistory(uniqueArray);
        setAllhistory(uniqueArray);
      })
      .catch((err) => {
        console.log(err);
        swal("Error", "Something Went Wrong");
      });
    // setModal(!modal);
  };
  const handleopentoggle = (iteam, index) => {
    toggle(iteam, index);
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
      // discount: "",
      // Shipping: "",
      // tax: "",
      // grandTotal: "",
    },
  ]);

   
    // Calculate subtotal
    const subTotal = product.reduce((acc, item) => acc + item.price * item.rquiredQty, 0);
    
  // Calculate discount (example: 10% off if subtotal > 100)
   const discountPercentage = subTotal > 100 ? 0.1 : 0;
   const discount = subTotal * discountPercentage;
   // Calculate tax (example: 5% tax)
  const taxPercentage = 0.05;
  const tax = subTotal * taxPercentage;

  // Calculate shipping cost (example: $5 for orders under $50)
  const shippingCost = subTotal < 50 ? 5 : 0;

  // Calculate total
  const total = subTotal - discount + tax + shippingCost;
  const [part, setPart] = useState([
    {
      part: "",
      partName: "",
      availableQty: "",
      rquiredQty: 1,
      price: "",
      totalprice: "",
      // Shipping: "",
      // discount: "",
      // tax: "",
      // grandTotal: "",
    },
  ]);
      // Calculate subtotal
      const partSubTotal = part.reduce((acc, item) => acc + item.price * item.rquiredQty, 0);
    
      // Calculate discount (example: 10% off if subtotal > 100)
       const partDiscountPercentage = partSubTotal > 100 ? 0.1 : 0;
       const partDiscount = partSubTotal * partDiscountPercentage;
       // Calculate tax (example: 5% tax)
      const partTaxPercentage = 0.05;
      const partTax = partSubTotal * partTaxPercentage;
    
      // Calculate shipping cost (example: $5 for orders under $50)
      const partShippingCost = partSubTotal < 50 ? 5 : 0;
    
      // Calculate total
      const PartTotal = partSubTotal - partDiscount + partTax + partShippingCost;
  const productNdpart =total+PartTotal;
  const [Comments, setComments] = useState([
    {
      name: JSON.parse(localStorage.getItem("userData")).UserName,
      userRole: JSON.parse(localStorage.getItem("userData")).Role,
      comment: "",
      time: new Date().toString(),
    },
  ]);
  const [formValues, setFormValues] = useState([{ files: [] }]);

  const newComment = {
    name: JSON.parse(localStorage.getItem("userData"))?.UserName,
    userRole: JSON.parse(localStorage.getItem("userData"))?.Role,
    comment: "",
    time: new Date().toString(),
  };
  let handleComment = (i, e) => {
    console.log(i, e.target.value)
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
  const handleProductChangeQty = (e, productIndex, availableQty) => {
    // console.log(productIndex)

    if (availableQty >= e.target.value) {
      const { name, value } = e.target;
      const productList = [...product];
      productList[productIndex][name] = value;
      let productamt = 0;
      if (productList.length > 0) {
        const x = productList?.map((value) => {
          productList[productIndex]["totalprice"] = value.rquiredQty * value.price;
          return value.rquiredQty * value.price;
        });
        productamt = x.reduce((a, b) => a + b);
        setProductTotal(productamt)
      }
     setProduct(productList);
    }

  };
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    let userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData.Primarymobileno)

    // let response = await axios.post("http://localhost:3000/api/razorpay", {
    //   totalBill,
    // });
   // let data = response.data;
    // let totalamount = total?.split(".")[0];
    // var total = (user?.Currencyconvert * this.state.Grand).toFixed(2);
    // let totalamount =productTotal?.split(".")[0];
  //  let finalTotalproduct=total.toFixed(2)
   let finalTotalproduct=productNdpart.toFixed(2)
    let totalAmount = typeof finalTotalproduct === 'string' ? finalTotalproduct.split(".")[0] : undefined;
//     var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";
let sanitizedText=userData.UserName;
let username = sanitizedText.replace(/[!@#$^&%*()+=\[\]\\\/{}|:<>?,_]/g, '');
    const options = {
      key: "rzp_test_Vhg1kq9b86udsY",
      currency: "INR",
      amount: totalAmount * 100,
      name: "SoftNumen",
      description: "Test Wallet Transaction",
      image: SoftNumenLogo,
      // order_id: 12,
      handler: async (response) => {
        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_order_id);
        console.log(response.razorpay_signature);
         myOrderApiCall()
        // dispatch(setDeliveryDetail(checkout));
        // const res = await axios.post("http://localhost:3000/order/buynow", {
        //   customerid: currentCustomer._id,
        //   deliveryAddress: checkout.deliveryAddress,
        //   contactNumber: checkout.contactNumber,
        //   contactPerson: checkout.contactPerson,
        //   orderItems: products,
        // });
        // console.log(res);
        // toast.success("Order Placed Successfully");
        swal("sucess","Order Placed Successfully")
        // navigate("/ordersuccess");
      },
      prefill: {
        name: `${username}`,
        email: `${userData?.Primarymobileno}`,
        // contact: `${userData?.Primarymobileno}`,
        contact: "8889407856",
      },
      theme: {
        color: '#055761'
      },
      // Define the error handler function
      modal: {
        ondismiss: function () {
          // This function will be called if the payment window is closed without completing the payment
          alert('Payment window closed');
        },
        onerror: function (error) {
          // This function will be called if an error occurs during payment
          // console.error('Razorpay Error:', error);
          // swal("Error", "Payment failed. Please try again later");
          alert('Payment failed. Please try again later.');
        }
      }
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };


  const handlePartChangeQty = (e, partindx, availableQty) => {
    if (availableQty >= e.target.value) {
      const { name, value } = e.target;
      const partList = [...part];
      partList[partindx][name] = value;

      let partamt = 0;
      if (partList.length > 0) {
        const x = partList?.map((value) => {
          partList[partindx]["totalprice"] = value.rquiredQty * value.price;
          return value.rquiredQty * value.price;
        });
        partamt = x.reduce((a, b) => a + b);
        setPartTotal(partamt)
        setPart(partList);
      }
    }
    
  };
  
  let removeFileAttach = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  // let handleFileChange = (i, e) => {
  //   console.log(i,e.target.files[0])
  //   const newFormValues = [...formValues];
  //   const selectedFiles = e.target.files;
  //   newFormValues[i].files = selectedFiles;
  //   // console.log(object)
  //   setFormValues(newFormValues);
  // };
 
  const handleFileChange = (i, e) => {
    const newFormValues = [...formValues];
    const selectedFiles = e.target.files;
    
    // Update the 'files' property of the specific form value at index 'i'
    newFormValues[i] = {
      ...newFormValues[i],
      files: selectedFiles,
    };
  
    setFormValues(newFormValues);
  };
  


  let removeFormFields = (i) => {
    let newFormValues = [...Comments];
    newFormValues.splice(i, 1);
    setComments(newFormValues);
  };
  const handleInputChange = (e, type, i) => {
    const { name, value, checked } = e.target;
    console.log(value)
    setindex(i);
    setFormData({
      ...formData,
      [name]: value
    })
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

 
  const handleOrigionalAudithistory = () => {
    setAudithistory(Allhistory);
  };
  
  const handleViewone = async (e, ele) => {
    e.preventDefault();
    console.log(ele?.id);
    
 await WarrantyAuditHistoryViewOne(ele?.id)
      .then((res) => {
        console.log(res?.AuditHistory);
        setAudithistory(res?.AuditHistory);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    // console.log(part, product)
    const userDetails = JSON.parse(localStorage.getItem("userData"))
    setUserDetails(userDetails)
  }, [part, product,formData]);

  useEffect(() => {
    // ListCreaterOrderView
    let userInfo = JSON.parse(localStorage.getItem("userData"));
    setUserInfo(userInfo);
    CreatedOrderList()
      .then((res) => {
console.log(res.Order)
let lastElement = res.Order[res.Order.length - 1];
const lastStrOrder = lastElement.OrderId

        // const lastElement = res?.Order[res?.Order?.length - 1].id;
        const prefix = lastStrOrder?.substring(0, 5);
        const number = parseInt(lastStrOrder?.match(/\d+$/)[0], 10) + 1;
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

    // GetCommentListView(userInfo._id)
    // .then((res) => {
    //   console.log(res)
    // setCommentshow(res)

    // })
    // .catch((err) => {
    //   console.log(err);
    // });
    loadScript("https://checkout.razorpay.com/v1/checkout.js");

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
        // totalprice: "",
        // discount: "",
        // tax: "",
        // grandTotal: "",
      },

    ]);
    setpartIndex(partindx + 1)
  };
  let removeMorePart = (i) => {
    let newFormValues = [...part];
    newFormValues.splice(i, 1);
    setPart(newFormValues);
  };

  let addMoreProduct = (newIndex) => {
    // console.log(newIndex)
    setProduct((product) => [
      ...product,
      {
        productName: "",
        availableQty: "",
        rquiredQty: 1,
        price: "",
        totalprice: "",
        // discount: "",
        // Shipping: "",
        // tax: "",
        // grandTotal: "",
      },
    ]);
    setProductIndex(newIndex + 1);
  };
  let removeMoreProduct = (i) => {
    let newFormValues = [...product];
    newFormValues.splice(i, 1);
    setProduct(newFormValues);
  };
  // let handlePartChange = (i, e) => {
  //   let newFormValues = [...part];
  //   newFormValues[i][e.target.name] = e.target.value;
  //   setPart(newFormValues);
  // };
const myOrderApiCall =()=>{
  let formdata = new FormData();
 dropdownValue?.createOrder?.MyDropDown?.map((drop, i)  => {
      formdata.append(`${drop?.name?._text}`, formData[drop?.name?._text]);
    });
 // CreatAccountView?.createOrder?.input?.map((ele, i)  => {
    //   formdata.append(`${ele?.name?._text}`, formData[ele?.name?._text]);
    // });


    // formdata.append("WtpOnecode", "WTP001");
    // formdata.append("PartnerCode", "PRT789");
    // formdata.append("OrderedBy", "JaneDoe");
    // formdata.append("SuppliedBy", "SupplierXYZ");
    // formdata.append("OEMPartPrice", "150");
    // formdata.append("Wtponeadress", "WTP Address, City");
    // formdata.append("SupplierLocation", "Supplier City");
    // formdata.append("SupplierName", "SupplierXYZ");
    // formdata.append("WTPname", "WTP XYZ");
    
    // formdata.append("NewOrder", "Yes");
    // formdata.append("partorderId", "PO123456");
    // formdata.append("Tracking", "ABC123456");
    // formdata.append("ShippingCost", "$15.00");
    // formdata.append("ShippingAddress", "456 Shipping Lane, City");
    // formdata.append("BillingAddress", "789 Billing Street, City");
    // formdata.append("SupplierCode", "SUP123");
    // formdata.append("CourierBy", "FastCourier");
    // formdata.append("whatsapp", "911234567890");
    // formdata.append("sms", "+918889407856");
    // formdata.append("gmail", "test@example.com");
    // formdata.append("DealerPartPrice", "20");
    // formdata.append("Warehouselocationname", "Warehouse A");
    // formdata.append("Warrantycovered", "2");
    // formdata.append("Tiedto", "Some Information");
    // formdata.append("Status", "Pending");
    // formdata.append("startDate", "2023-11-26");
    // formdata.append("EndDate", "2024-11-26");
    // formdata.append("Discount", "10");
    // formdata.append("CreatedDate", "2023-11-26T08:00:00Z");
    // formdata.append("ModifiedDate", "2023-11-26T10:30:00Z");
    // formdata.append("OrderDate", "2023-11-26T09:45:00Z");
  formdata.append("OrderId", OrderID);
  formdata.append("PartDetail", part);
  formdata.append("ProductDetail", product);

  if (formValues.length) {
    let myarr = [];
    formValues?.map((ele, i) => {
      let newdata = Array.from(ele?.files);
      myarr.push(newdata);
    });
    let totalimg = myarr.flat();
    totalimg?.map((ele, i) => {
      formdata.append("files", ele);
    });
  }
  if (Comments.length > 0) {
    formdata.append(`Comments`, JSON.stringify(Comments));
  }
  if (error) {
    swal("Error occured while Entering Details");
  } else {
   
    OrderDataSave(formdata)
      .then(res => {
        console.log(res,res?.message)
        if (res.status) {
          // setFormData({});
          // setProduct([{}])
          // setComments([{}])
          // window.location.reload();
          swal(`${res?.message}`);

        }
      })
      .catch(err => {
        console.log(err);
      });
  }
}
  const submitHandler = (e) => {
    e.preventDefault();
    displayRazorpay()
    const prefixStr = OrderID.substring(0, 5);
    const updateNumber = parseInt(OrderID.match(/\d+$/)[0], 10) + 1;
    const newOrderID = prefixStr + updateNumber;
    setOrderID(newOrderID);
   


  
   
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
                 <>
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
                            onClick={() => handleopentoggle("Product", productIndex)}
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
                          onChange={(e) => handleProductChangeQty(e, productIndex, product.availableQty)}
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
                    {/* <div className="setInput" lg="2" md="2" sm="12">
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
                    </div> */}
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
                  
                 </>
                ))}
              <Row className="justify-content-end mt-2">
                   <ul className="calculationList">    
                     <li className="fontOfTotal">SubTotal:${subTotal.toFixed(2) ? subTotal.toFixed(2) : 0}</li>
                     <li className="fontOfTotal">Discount:${discount.toFixed(2)}</li>
                     <li className="fontOfTotal">Tax:${tax.toFixed(2)}</li>
                     <li className="fontOfTotal">ShippingCost:${shippingCost.toFixed(2)}</li>
                     <hr></hr>
                     <li className="fontOfTotal">Product GrandTotal:${total.toFixed(2)}</li>
                   </ul></Row>
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
                        onChange={(e) => handlePartChangeQty(e, partindx, part.availableQty)}
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
                  {/* <div className="setInput" lg="2" md="2" sm="12">
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
                  </div> */}
                  {/* <div className="setInput" lg="2" md="2" sm="12">
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
                  </div> */}
                  {/* <div className="setInput" lg="2" md="2" sm="12">
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
                  </div> */}
                  {/* <div className="setInput" lg="2" md="2" sm="12">
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
                  </div> */}
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
              <Row className="justify-content-end mt-2">
                <ul className="calculationList">
                  <li className="fontOfTotal">SubTotal:${partSubTotal? partSubTotal.toFixed(2) : 0}</li>
                  <li className="fontOfTotal">Discount:{partDiscount.toFixed(2)}</li>
                  <li className="fontOfTotal">Tax:${partTax.toFixed(2)}</li>
                  <li className="fontOfTotal">ShippingCost:${partShippingCost.toFixed(2)}</li>
                  <hr></hr>
                  
                  <li className="fontOfTotal"> Part GrandTotal:${PartTotal.toFixed(2)}</li>
                  <hr></hr>
                  <hr></hr>
                  <li className="fontOfTotal"> Product&Part GrandTotal:${productNdpart}</li>
                </ul></Row>
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
        {/* <Modal
          fullscreen="xl"
          size="lg"
          backdrop={false}
          isOpen={audit}
          toggle={audittoggle}
          {...args}
        >
          <ModalHeader toggle={audittoggle}>Audit History List1111111</ModalHeader>
          <ModalBody>
            <AuditHistory />
          </ModalBody>
        </Modal> */}
        <Modal
          className="modal-dialog modal-xl"
          // className="modal-dialog modal-lg"
          size="lg"
          backdrop={false}
          isOpen={audit}
          toggle={audittoggle}
          {...args}
        >
          <ModalHeader toggle={audittoggle}>Audit History List</ModalHeader>
          <ModalBody>
            <div className="d-flex justify-content-center">
              <h2>Audit History </h2>
            </div>
            <div className="container p-1">
              <div
                style={{ justifyContent: "space-between" }}
                className="d-flex "
              >
                <BsFillArrowLeftSquareFill
                  className="mb-1"
                  style={{ cursor: "pointer" }}
                  size={30}
                  color="primary"
                  onClick={handleOrigionalAudithistory}
                />
                <input type="text" name="filter" className="" />
              </div>
              <Table striped>
                <thead>
                  <tr>
                    <th>#ID</th>
                    <th>Status</th>
                    <th>userName</th>
                    {/* <th>Role</th> */}
                    <th>OldRole</th>
                    <th>CurrentRole</th>
                    <th>timestamp</th>
                    <th>timelag</th>
                  </tr>
                </thead>
                <tbody>
                  {Audithistory && Audithistory ? (
                    <>
                      {Audithistory &&
                        Audithistory?.map((ele, i) => {
                          return (
                            <>
                              <tr
                                onClick={(e) => handleViewone(e, ele)}
                                style={{ cursor: "pointer" }}
                                key={i}
                              >
                                <th scope="row">{ele?.id}</th>
                                <td>{ele?.status}</td>
                                <td>{ele?.userName}</td>
                                <td>{ele?.Role}</td>
                                <td>{ele?.Role}</td>
                                <td>{ele?.timestamp}</td>
                                <td>{ele?.timeLag}</td>
                              </tr>
                            </>
                          );
                        })}
                    </>
                  ) : (
                    <>
                      <h2>No Audit history Found</h2>
                    </>
                  )}
                </tbody>
              </Table>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};
export default CreateOrder;
