import React, { useState, useEffect } from "react";
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
import Select from "react-select";
import xmlJs from "xml-js";
import xml2js from "xml2js";
import { Country, State, City } from "country-state-city";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";
import { Route } from "react-router-dom";
import { CreateParts } from "../../../../ApiEndPoint/ApiCalling";

const AmcPolicy = () => {
  const [formData, setFormData] = useState({
    startDate: "",endDate:"" });

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [CustomerRegistView, setCustomerRegistView] = useState({});
  const [CustomerDropdown, setCustomerDropdown] = useState({});
  const changeHandler = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // CreateParts()
    //   .then((res) => {
    //     console.log(res.data);
    //     const jsonAllData = xmlJs.xml2json(res.data, {
    //       compact: true,
    //       spaces: 2,
    //     });
    //     console.log(JSON.parse(jsonAllData));
    //     setCustomerRegistView(JSON.parse(jsonAllData));
    //     setCustomerDropdown(JSON.parse(jsonAllData));
    //     xml2js.parseString(res?.data, (err, result) => {
    //       if (err) {
    //         console.error("Error parsing XML:", err);
    //       } else {
    //         console.log(result.ProductRgistration);
    //       }
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);



  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("submitHandler", formData);

    // axiosConfig
    //   .post("/admin/addcategory", formData)
    //   .then((response) => {
    //     console.log(response);
    //     this.props.history.push("/app/freshlist/order/orderList");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div>
      <Card>
        <Row className="m-2">
          <Col>
            <h1 col-sm-6 className="float-left">
              AMC Policy
            </h1>
          </Col>
        </Row>
        <CardBody>
          <Form className="m-1" onSubmit={submitHandler}>
            <Row className="mb-2">
           <Col lg="6" md="6">
                <FormGroup>
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    name="start_date"
                    value={formData.startDate}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>End Date</Label>
                  <Input
                    type="date"
                    name="end_date"
                    value={formData.endDate}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
             </Row>

            <Row className="m-2">
              <Button color="primary" type="submit" className="mr-1 mb-1">
              Amc Policy
              </Button>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AmcPolicy;
