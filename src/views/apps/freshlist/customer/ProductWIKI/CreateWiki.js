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
  InputGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Table,
} from "reactstrap";
import { history } from "../../../../../history";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { Route } from "react-router-dom";
import swal from "sweetalert";
import "../../../../../../src/layouts/assets/scss/pages/users.scss";

import {
  Warranty_ViewData,
  createWikiViewData,
  Productwiki_ViewData,
  CreateAccountSave,
} from "../../../../../ApiEndPoint/ApiCalling";
import { BiEnvelope } from "react-icons/bi";
import { FcPhoneAndroid } from "react-icons/fc";
import { BsWhatsapp } from "react-icons/bs";
import "../../../../../assets/scss/pages/users.scss";
import UserContext from "../../../../../context/Context";
import { AiOutlineSearch } from "react-icons/ai";

const CreateWiki = (args) => {
  const [CreatAccountView, setCreatAccountView] = useState({});
  const [formData, setFormData] = useState({});
  const [dropdownValue, setdropdownValue] = useState({});
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const [permissions, setpermissions] = useState({});
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const createUserXmlView = useContext(UserContext);
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
  let handleComment = (i, e) => {
    let newFormValues = [...Comments];
    newFormValues[i][e.target.name] = e.target.value;
    setComments(newFormValues);
  };
  const SubmitComment = () => {
    alert("Comment Submitt ");
  };
  let addFormFields = () => {
    setComments([...Comments, newComment]);
  };

  let addFileInput = () => {
    setFormValues([...formValues, { files: [] }]);
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
    setFormValues(newFormValues);
  };
  let removeFormFields = (i) => {
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
          // console.log(value);
          setError("");
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
          // setError("Input length exceeds the maximum of 10 characters");
        }
      }
    }
  };

  const handleopentoggle = () => {
    toggle();
  };
  useEffect(() => {
    // console.log(formData);
  }, [formData]);
  useEffect(() => {
    Productwiki_ViewData()
      .then((res) => {
        console.log(res);
        const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
        console.log(JSON.parse(jsonData).createWiki);
        // let origionalpermission =
        //   JSON.parse(jsonData)?.Warranty?.input[14].permissions?.role;
        setCreatAccountView(JSON.parse(jsonData));
        setdropdownValue(JSON.parse(jsonData));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (error) {
      swal("Error occured while Entering Details");
    } else {
      CreateAccountSave(formData)
        .then((res) => {
          if (res.status) {
            setFormData({});
            window.location.reload();
            swal("Acccont Created Successfully");
          }
        })
        .catch((err) => {
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
                <h1 className="">Create Wiki</h1>
              </div>
              <div>
                <span>Wiki Id</span> <span>#</span>
              </div>
            </Col>
          </Row>

          <CardBody>
            <Form className="m-1" onSubmit={submitHandler}>
              <Row className="mb-2">
                {dropdownValue?.createWiki?.MyDropDown.map((drop, i) => {
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
                  CreatAccountView?.createWiki?.input?.map((ele, i) => {
                    let View = "";
                    let Edit = "";
                    if (ele?.role) {
                      let roles = ele?.role?.find(
                        (role) => role._attributes?.name === "WARRANTY APPROVER"
                      );

                      View = roles?.permissions?._text.includes("View");
                      Edit = roles?.permissions?._text.includes("Edit");
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
                    } else if (!!ele?.lookup) {
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
                                  />{" "}
                                  <Button
                                    onClick={handleopentoggle}
                                    color="primary"
                                    className="mybtn primary"
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
                    } else {
                      return (
                        <>
                          <Col key={i} lg="6" md="6" sm="12">
                            <FormGroup>
                              <Label>{ele?.label?._text}</Label>

                              <Input
                                onKeyDown={(e) => {
                                  if (
                                    ele?.type?._attributes?.type == "number"
                                  ) {
                                    ["e", "E", "+", "-"].includes(e.key) &&
                                      e.preventDefault();
                                  }
                                }}
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
                  })}

                <div className="container">
                  <Label className="py-1">Notification</Label>
                  <div>
                    {CreatAccountView &&
                      CreatAccountView?.createWiki?.CheckBox?.input?.map(
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

              <hr />
              <Row className="mt-2 ">
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="">
                    <h4>Status</h4>
                  </Label>
                  <div className="form-label-group mx-1">
                    {CreatAccountView &&
                      CreatAccountView?.Warranty?.Radiobutton?.input?.map(
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
            <Button
              className="ml-1 "
              color="primary"
              onClick={(e) => {
                SubmitComment(e);
              }}
            >
              Submit Comment
            </Button>
          </CardBody>
        </Card>
      </div>
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
  );
};
export default CreateWiki;
