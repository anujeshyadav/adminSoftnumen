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
import "../../../../assets/scss/pages/users.scss";
import { CreateOrder_ViewData } from "../../../../ApiEndPoint/ApiCalling";
import { BiEnvelope } from "react-icons/bi";
import { FcPhoneAndroid } from "react-icons/fc";
import { BsWhatsapp } from "react-icons/bs";
import "../../../../assets/scss/pages/users.scss";
import { AiOutlineSearch } from "react-icons/ai";

const CreateWarrenty = args => {
  const [CreatAccountView, setCreatAccountView] = useState({});
  const [formData, setFormData] = useState({});
  const [dropdownValue, setdropdownValue] = useState({});
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const [permissions, setpermissions] = useState({});
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
    { productName: "", model: "", variant: "" },
  ]);
  const [part, setPart] = useState([{ productName: "", color: "" }]);

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
    alert("Comment Submit");
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
  useEffect(() => {}, [formData]);
  useEffect(() => {
    CreateOrder_ViewData()
      .then(res => {
        const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
        console.log(JSON.parse(jsonData).createOrder);
        setCreatAccountView(JSON.parse(jsonData));
        setdropdownValue(JSON.parse(jsonData));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const submitHandler = e => {
    e.preventDefault();
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
  // add Product
  // let handleFileChange = (i, e) => {
  //   const newFormValues = [...formValues];
  //   const selectedFiles = e.target.files;
  //   newFormValues[i].files = selectedFiles;
  //   setFormValues(newFormValues);
  // };
  return (
    <div>
      <div>
        <Card>
          <Row className="m-2">
            <Col className="">
              <div>
                <h1 className="">Create Order</h1>
              </div>
              <div>
                <span className="orderId">Order Id</span> <span>#</span>
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
                          required
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

                {CreatAccountView &&
                  CreatAccountView?.createOrder?.input?.map((ele, i) => {
                    let View = "";
                    let Edit = "";
                    if (ele?.role) {
                      let roles = ele?.role?.find(
                        role => role._attributes?.name === "WARRANTY APPROVER"
                      );

                      View = roles?.permissions?._text.includes("View");
                      Edit = roles?.permissions?._text.includes("Edit");
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
                  <Col className="" lg="2" md="2" sm="12">
                    <FormGroup>
                      <Label>Product Name</Label>
                      <Input
                        type="text"
                        name="productName"
                        readOnly
                        placeholder="Product Name"
                        value={element.productName || ""}
                        onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="2" md="2" sm="12">
                    <FormGroup>
                      <Label>Model</Label>
                      <Input
                        type="text"
                        name="model"
                        readOnly
                        placeholder="Model"
                        value={element.model || ""}
                        onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="2" md="2" sm="12">
                    <FormGroup>
                      <Label>Variant</Label>
                      <Input
                        type="text"
                        name="variant"
                        readOnly
                        placeholder="Variant"
                        value={element.variant || ""}
                        onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="d-flex mt-2" lg="2" md="2" sm="12">
                    <div>
                      {index ? (
                        <Button
                          type="button"
                          className="button remove "
                          onClick={() => removeMoreProduct(index)}
                        >
                          Remove
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
                  <Col className="" lg="3" md="3" sm="12">
                    <FormGroup>
                      <Label>Part#</Label>
                      <Input
                        type="text"
                        name="partName"
                        readOnly
                        placeholder="Part Name"
                        // value={element.partName || ""}
                        // onChange={e => handlePartChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="3" md="3" sm="12">
                    <FormGroup>
                      <Label>Part Name</Label>
                      <Input
                        type="text"
                        name="partName"
                        readOnly
                        placeholder="Part Name"
                        value={element.partName || ""}
                        onChange={e => handlePartChange(index, e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="" lg="3" md="3" sm="12">
                    <FormGroup>
                      <Label>Color</Label>
                      <Input
                        type="text"
                        name="model"
                        placeholder="Color"
                        readOnly
                        value={element.color || ""}
                        onChange={e => handleProductChange(index, e)}
                      />
                    </FormGroup>
                  </Col>

                  <Col className="d-flex mt-2" lg="3" md="3" sm="12">
                    <div>
                      {index ? (
                        <Button
                          type="button"
                          className="button remove "
                          onClick={() => removeMorePart(index)}
                        >
                          Remove
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
              <Row className="mt-2 ">
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
              </Row>

              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mt-2 mx-2"
                >
                  Submit
                </Button.Ripple>
              </Row>
            </Form>
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
              className="ml-1 "
              color="primary"
              onClick={e => {
                SubmitComment(e);
              }}
            >
              Submit Comment
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
            <div className="modalheaderaddrol p-1">
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
            </div>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};
export default CreateWarrenty;
