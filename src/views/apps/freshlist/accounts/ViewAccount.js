import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  Badge,
} from "reactstrap";
import { history } from "../../../../history";
import swal from "sweetalert";
import "../../../../../src/layouts/assets/scss/pages/users.scss";

import {
  CreateAccountSave,
  CreateAccountUpdate,
  CreateAccountView,
} from "../../../../ApiEndPoint/ApiCalling";

const CreateAccount = ({ ViewOneData }) => {
  const [CreatAccountView, setCreatAccountView] = useState({});
  const [formData, setFormData] = useState({});
  const [dropdownValue, setdropdownValue] = useState({});

  const Params = useParams();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // console.log(formData);
  useEffect(() => {
    console.log(ViewOneData);
    setFormData(ViewOneData);
    // CreateAccountUpdate(Params.id)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    CreateAccountView()
      .then((res) => {
        const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
        // console.log(JSON.parse(jsonData));
        setCreatAccountView(JSON.parse(jsonData));
        setdropdownValue(JSON.parse(jsonData));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(formData);
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
  };

  return (
    <div>
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 className="float-left">Account Information</h1>
            </Col>
          </Row>

          <CardBody>
            <Form className="m-1" onSubmit={submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>
                      {
                        dropdownValue.CreateAccount?.MyDropdown?.dropdown?.label
                          ?._text
                      }
                    </Label>
                    <CustomInput
                      readOnly
                      type="select"
                      name={
                        dropdownValue.CreateAccount?.MyDropdown?.dropdown?.name
                          ?._text
                      }
                      value={
                        formData[
                          dropdownValue.CreateAccount?.MyDropdown?.dropdown
                            ?.name?._text
                        ]
                      }
                      onChange={handleInputChange}
                    >
                      <option value="">
                        {" "}
                        {
                          formData[
                            dropdownValue.CreateAccount?.MyDropdown?.dropdown
                              ?.name?._text
                          ]
                        }
                      </option>
                      {/* {dropdownValue?.CreateAccount?.MyDropdown?.dropdown?.option.map(
                        (option, index) => (
                          <option
                            key={index}
                            value={option?._attributes?.value}
                          >
                            {option?._attributes?.value}
                          </option>
                        )
                      )} */}
                    </CustomInput>
                  </FormGroup>
                </Col>

                {CreatAccountView &&
                  CreatAccountView?.CreateAccount?.input?.map((ele, i) => {
                    return (
                      <Col key={i} lg="6" md="6" sm="12">
                        <FormGroup>
                          <Label>{ele?.label?._text}</Label>
                          <Input
                            readOnly
                            onKeyDown={(e) => {
                              if (ele?.type?._attributes?.type == "number") {
                                ["e", "E", "+", "-"].includes(e.key) &&
                                  e.preventDefault();
                              }
                            }}
                            type={ele?.type?._attributes?.type}
                            placeholder={ele?.placeholder?._text}
                            name={ele?.name?._text}
                            value={formData[ele?.name?._text]}
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                    );
                  })}
              </Row>
              <hr />
              <Row className="mt-2 ">
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="">
                    <h4>
                      Status-
                      <Badge
                        color={
                          formData.Status == "Active" ? "primary" : "danger"
                        }
                      >
                        {formData.Status}
                      </Badge>
                    </h4>
                  </Label>
                  {/* <div className="form-label-group mx-1">
                    {CreatAccountView &&
                      CreatAccountView?.CreateAccount?.Radiobutton?.input?.map(
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
                              <span style={{ marginRight: "20px" }}>
                                {ele?.label?._text}
                              </span>
                            </FormGroup>
                          );
                        }
                      )}
                  </div> */}
                </Col>
              </Row>

              {/* <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mt-2 mx-2"
                >
                  Update
                </Button.Ripple>
              </Row> */}
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default CreateAccount;
