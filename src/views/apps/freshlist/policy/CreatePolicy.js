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
} from "reactstrap";
import { history } from "../../../../history";
import YearPicker from "react-year-picker";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Country, State, City } from "country-state-city";
import Select from "react-select";

import swal from "sweetalert";
import "../../../../../src/layouts/assets/scss/pages/users.scss";

import {
  // PolicySaveData,
  PolicyViewData,
} from "../../../../ApiEndPoint/ApiCalling";
import { BiEnvelope } from "react-icons/bi";
import { FcPhoneAndroid } from "react-icons/fc";
import { BsWhatsapp } from "react-icons/bs";
import "../../../../assets/scss/pages/users.scss";
import UserContext from "../../../../context/Context";
import { CloudLightning } from "react-feather";

const CreatePolicy = () => {
  const [CreatePolicyView, setCreatePolicyView] = useState({});
  const [Countries, setCountry] = useState({});
  const [States, setState] = useState({});
  const [Cities, setCities] = useState({});
  const [formData, setFormData] = useState({});
  const [dropdownValue, setdropdownValue] = useState({});
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const [selectedYear, setSelectedYear] = useState(null);

  const [Comments, setComments] = useState([
    {
      name: JSON.parse(localStorage.getItem("userData")).UserName,
      userRole: JSON.parse(localStorage.getItem("userData")).Role,
      comment: "",
      time: new Date(),
    },
  ]);

  const [formValues, setFormValues] = useState([{ file: {} }]);

  const newComment = {
    userName: JSON.parse(localStorage.getItem("userData")).UserName,
    Role: JSON.parse(localStorage.getItem("userData")).Role,
    comment: "",
    time: new Date().toString(),
  };

  const createUserXmlView = useContext(UserContext);

  const handleInputChange = (e, type, i) => {
    console.log(e.target.value);
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
  const handleyear = (date) => {
    setSelectedYear(date);
  };
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const { UserName, Role } = JSON.parse(userData);
  }, [formData]);
  useEffect(() => {
    PolicyViewData()
      .then((res) => {
        const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
        setCreatePolicyView(JSON.parse(jsonData));
        let value = JSON.parse(jsonData)?.MyDropdown?.CheckBox?.input;
        value?.map((ele) => {
          formData[ele?.name._text] = false;
        });

        setdropdownValue(JSON.parse(jsonData));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(Comments);
  }, [Comments]);

  let handleComment = (i, e) => {
    let newFormValues = [...Comments];
    newFormValues[i][e.target.name] = e.target.value;
    setComments(newFormValues);
  };

  let addFormFields = () => {
    setComments([...Comments, newComment]);
  };

  let addFileInput = () => {
    setFormValues([...formValues, { file: {} }]);
  };

  let removeFileAttach = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleFileChange = (i, e) => {
    console.log(e.target.files);
    console.log((newFormValues[i].file = e.target.files));
    let newFormValues = [...formValues];
    newFormValues[i].file = e.target.files;
    setFormValues(newFormValues);
  };
  let removeFormFields = (i) => {
    let newFormValues = [...Comments];
    newFormValues.splice(i, 1);
    setComments(newFormValues);
  };
  const submitHandler = (e) => {
    // e.preventDefault();
    // if (error) {
    //   swal("Error occured while Entering Details");
    // } else {
    //   PolicySaveData(formData)
    //     .then(res => {
    //       console.log(res);
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
            <Col>
              <h1 className="float-left">Create Policy</h1>
            </Col>
          </Row>

          <CardBody>
            <Form className="m-1" onSubmit={submitHandler}>
              <Row className="mb-2">
                {CreatePolicyView?.Policy?.MyDropDown.map((drop, i) => {
                  return (
                    <Col lg="6" md="6" key={i}>
                      <FormGroup>
                        <Label>{drop.dropdown.label._text}</Label>
                        <CustomInput
                          required
                          type="select"
                          name={drop.dropdown.name._text}
                          value={
                            formData[drop?.dropdown?.dropdown?.name?._text]
                          }
                          onChange={handleInputChange}
                        >
                          <option value="">
                            --Select {drop.dropdown.name._text}---
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

                {CreatePolicyView &&
                  CreatePolicyView?.Policy?.input?.map((ele, i) => {
                    if (!!ele?.YearPicker) {
                      return (
                        <>
                          <Col key={i} lg="6" md="6" sm="12">
                            <FormGroup>
                              <Label>{ele?.label?._text}</Label>
                              <YearPicker
                                style={{ width: "100%" }}
                                onChange={handleyear}
                                selectedYear={selectedYear}
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
                    if (!!ele?.phoneinput) {
                      return (
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
                    } else if (!!ele?.library) {
                      if (ele?.label._text?.includes("ountry")) {
                        return (
                          <Col key={i} lg="6" md="6" sm="12">
                            <FormGroup>
                              <Label>{ele?.label?._text}</Label>
                              <Select
                                inputClass="countryclass"
                                className="countryclassnw"
                                options={Country.getAllCountries()}
                                getOptionLabel={(options) => {
                                  return options["name"];
                                }}
                                getOptionValue={(options) => {
                                  return options["name"];
                                }}
                                value={Countries}
                                onChange={(country) => {
                                  setCountry(country);
                                  setFormData({
                                    ...formData,
                                    ["Country"]: country?.name,
                                  });
                                }}
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
                        );
                      } else if (ele?.label._text?.includes("tate")) {
                        return (
                          <Col key={i} lg="6" md="6" sm="12">
                            <FormGroup>
                              <Label>{ele?.label?._text}</Label>
                              <Select
                                options={State?.getStatesOfCountry(
                                  Countries?.isoCode
                                )}
                                getOptionLabel={(options) => {
                                  return options["name"];
                                }}
                                getOptionValue={(options) => {
                                  return options["name"];
                                }}
                                value={States}
                                onChange={(State) => {
                                  setState(State);
                                  setFormData({
                                    ...formData,
                                    ["State"]: State?.name,
                                  });
                                }}
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
                        );
                      } else if (ele?.label._text?.includes("ity")) {
                        return (
                          <Col key={i} lg="6" md="6" sm="12">
                            <FormGroup>
                              <Label>{ele?.label?._text}</Label>
                              <Select
                                options={City?.getCitiesOfState(
                                  States?.countryCode,
                                  States?.isoCode
                                )}
                                getOptionLabel={(options) => {
                                  return options["name"];
                                }}
                                getOptionValue={(options) => {
                                  return options["name"];
                                }}
                                value={Cities}
                                onChange={(City) => {
                                  setCities(City);
                                  setFormData({
                                    ...formData,
                                    ["City"]: City?.name,
                                  });
                                }}
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
                        );
                      } else {
                        return (
                          <Col key={i} lg="6" md="6" sm="12">
                            <FormGroup key={i}>
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
                        );
                      }
                    } else {
                      return (
                        <>
                          <Col key={i} lg="6" md="6" sm="12">
                            <FormGroup key={i}>
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
              </Row>

              {Comments &&
                Comments?.map((element, index) => (
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

                    <Col className="d-flex" lg="3" md="3" sm="12">
                      <div>
                        {index ? (
                          <Button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => removeFormFields(index)}
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
                          onClick={() => addFormFields()}
                        >
                          Add More
                        </Button>
                      </div>
                    </Col>
                  </Row>
                ))}

              {formValues.map((index, i) => (
                <Row>
                  {console.log(index, i)}
                  <Col lg="6" md="6" key={i}>
                    <Input
                      type="file"
                      multiple
                      onChange={(e) => handleFileChange(index, e)}
                    />
                  </Col>
                  <Col className="d-flex" lg="3" md="3" sm="12">
                    <div>
                      {index ? (
                        <Button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => removeFileAttach(index)}
                        >
                          Remove
                        </Button>
                      ) : null}
                    </div>
                  </Col>
                  <div>
                    <Button
                      className="ml-1 my-2"
                      color="primary"
                      type="button"
                      onClick={() => addFileInput()}
                    >
                      Add File Input
                    </Button>
                  </div>
                </Row>
              ))}

              <hr />
              <Row className="mt-2 ">
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="">
                    <h4>Status</h4>
                  </Label>
                  <div className="form-label-group mx-1">
                    {CreatePolicyView &&
                      CreatePolicyView?.Policy?.Radiobutton?.input?.map(
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
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default CreatePolicy;
