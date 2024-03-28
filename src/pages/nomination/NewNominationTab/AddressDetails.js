import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Input,
  Row,
} from "reactstrap";
import { Accordion, Button, Form, FormGroup, FormLabel } from "react-bootstrap";

import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const AddressDetails = ({ nextStep, prevStep, values, changeInputData }) => {
  const SubmitForm = (e) => {
    e.preventDefault();
    prevStep();
    nextStep();
  };
  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [isaddCount, setIsAddcount] = useState([]);
  const [isaddState, setIsAddState] = useState([]);
  const [isadddist, setIsAddDist] = useState([]);
  const [isaddtaluka, setIsAddTaluka] = useState([]);
  const [isaddcity, setIsAddCity] = useState([]);
  
  const [formValues, setFormValues] = useState({
    Country: { id: '', name: '' },
    State: { id: '', name: '' },
    District: { id: '', name: '' },
    City: { id: '', name: '' },
    Taluka: { id: '', name: '' }
  });

  useEffect(() => {
    fetch(`${BaseURL}/api/org/countries`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => setIsAddcount(data));
  }, []);

  const handleFormData = (fieldName) => (event) => {
    const { id, name } = event.target.value;
    setFormValues(prev => ({ ...prev, [fieldName]: { id, name } }));
    changeInputData(fieldName, name);

    if(fieldName === 'houseNo' || fieldName === 'streetdetails' || fieldName === 'PinZip' )
    {
      const { value } = event.target;
      setFormValues(prev => ({ ...prev, [fieldName]: value }));
      changeInputData(fieldName, value);
    }

    // If country field changes, fetch states for the selected country
    if (fieldName === "Country") {
      fetch(`${BaseURL}/api/org/statecountry/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAddState(data)
          console.log("State:", data);
        }
        );
    }

    if (fieldName === "State") {
      fetch(`${BaseURL}/api/org/districtstate/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAddDist(data)
          console.log("districts:", data);
        }
        );
    }

    if (fieldName === "District") {
      fetch(`${BaseURL}/api/org/talukadistrict/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAddTaluka(data)
          console.log("taluka:", data);
        }
        );
    }

    if (fieldName === "District") {
      fetch(`${BaseURL}/api/org/citydistirct/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("City Data:", data);
          setIsAddCity(data);
        });      
    }
  };

  return (
    <>
      <Desktop>
        <Col className="section">
          <Col className="g-2 from  py-3 px-5">
            <Row>
              <Form onSubmit={SubmitForm}>
                <FormGroup>
                  <Card className="border-0">
                    <CardHeader className="border-0 bg-white px-0 ">
                      <h5>Address Details</h5>
                    </CardHeader>
                    <CardBody className="border bg-light form-label">
                      <Col sm="12">
                        <Row className="g-2 form">
                          <Col sm="12">
                            <FormLabel>
                              <sub>Present address</sub>
                            </FormLabel>
                          </Col>
                          <Col sm="12" className="pb-1">
                            <Row>
                              <Col sm="6">
                                <FormLabel>
                                  <sub>House/Flast No./Building</sub>
                                </FormLabel>
                                <Col sm="12" className="p-0">
                                  <Input
                                    type="text"
                                    name="houseNo"
                                    defaultValue={values.houseNo}
                                    onChange={handleFormData("houseNo")}
                                    placeholder="Enter House/Flat No./Building name here"
                                    size="sm"
                                  />
                                </Col>
                              </Col>
                              <Col sm="6">
                                <FormLabel>
                                  <sub>Street details</sub>
                                </FormLabel>
                                <Col sm="12">
                                  <Input
                                    type="text"
                                    name="streetdetails"
                                    defaultValue={values.streetdetails}
                                    onChange={handleFormData("streetdetails")}
                                    placeholder="Enter street details here"
                                    size="sm"
                                  />
                                </Col>
                              </Col>
                            </Row>
                          </Col>
                          <Col sm="12">
                            <Row>
                              <Col sm="4">
                                <FormLabel>
                                  <sub>Country</sub>
                                  <sup className="text-danger">*</sup>
                                </FormLabel>
                                <Col sm="12">
                                  <Input
                                    type="select"
                                    name="Country"
                                    defaultValue={values.Country}
                                    onChange={(event) => {
                                      const id = event.target.value;
                                      const name = event.target.options[event.target.selectedIndex].text;
                                      const enhancedEvent = {
                                        target: {
                                          name: event.target.name,
                                          value: { id, name },
                                        },
                                      };
                                      handleFormData("Country")(enhancedEvent);
                                    }}
                                    size="sm"
                                  >
                                    <option selected disabled value=''>Select country</option>
                                          {isaddCount.map((country) => (
                                            <>
                                              <option key={country.id} value={country.id}>{country.name}</option>
                                              {/* setIsIndia(dat.name) */}
                                            </>
                                          ))}
                                  </Input>
                                </Col>
                              </Col>
                              <Col sm="4">
                                <FormLabel>
                                  <sub>State</sub>
                                  <sup className="text-danger">*</sup>
                                </FormLabel>
                                <Col sm="12">
                                  <Input
                                    type="select"
                                    name="State"
                                    defaultValue={values.State}
                                    onChange={(event) => {
                                      const id = event.target.value;
                                      const name = event.target.options[event.target.selectedIndex].text;
                                      const enhancedEvent = {
                                        target: {
                                          name: event.target.name,
                                          value: { id, name },
                                        },
                                      };
                                      handleFormData("State")(enhancedEvent);
                                    }}
                                    size="sm"
                                  >
                                    <option selected disabled value=''>Select state</option>
                                          {isaddState.map((state) => (
                                            <option key={state.id} value={state.id}>{state.name}</option>
                                          ))}
                                  </Input>
                                </Col>
                              </Col>
                              <Col sm="4">
                                <FormLabel>
                                  <sub>City</sub>
                                  <sup className="text-danger">*</sup>
                                </FormLabel>
                                <Col sm="12">
                                  <Input
                                    type="select"
                                    name="City"
                                    defaultValue={values.City}
                                    onChange={(event) => {
                                      const id = event.target.value;
                                      const name = event.target.options[event.target.selectedIndex].text;
                                      const enhancedEvent = {
                                        target: {
                                          name: event.target.name,
                                          value: { id, name },
                                        },
                                      };
                                      handleFormData("City")(enhancedEvent);
                                    }}
                                    size="sm"
                                  >
                                    <option selected disabled value=''>Select city</option>
                                          {isaddcity.map((city) => (
                                            <option key={city.id} value={city.id}>{city.name}</option>
                                          ))}
                                  </Input>
                                </Col>
                              </Col>
                            </Row>
                          </Col>
                          <Col sm="12" className="pt-3">
                            <Row>
                              <Col sm="4">
                                <FormLabel>
                                  <sub>District</sub>
                                  <sup className="text-danger">*</sup>
                                </FormLabel>
                                <Col sm="12">
                                  <Input
                                    type="select"
                                    name="District"
                                    defaultValue={values.District}
                                    onChange={(event) => {
                                      const id = event.target.value;
                                      const name = event.target.options[event.target.selectedIndex].text;
                                      const enhancedEvent = {
                                        target: {
                                          name: event.target.name,
                                          value: { id, name },
                                        },
                                      };
                                      handleFormData("District")(enhancedEvent);
                                    }}
                                    size="sm"
                                  >
                                    <option selected disabled value=''>Select district</option>
                                          {isadddist.map((district) => (
                                            <option key={district.id} value={district.id}>{district.name}</option>
                                          ))}
                                  </Input>
                                </Col>
                              </Col>
                              <Col sm="4">
                                <FormLabel>
                                  <sub>Taluka</sub>
                                </FormLabel>
                                <Col sm="12">
                                  <Input
                                    type="select"
                                    name="Taluka"
                                    defaultValue={values.Taluka}
                                    onChange={(event) => {
                                      const id = event.target.value;
                                      const name = event.target.options[event.target.selectedIndex].text;
                                      const enhancedEvent = {
                                        target: {
                                          name: event.target.name,
                                          value: { id, name },
                                        },
                                      };
                                      handleFormData("Taluka")(enhancedEvent);
                                    }}
                                    size="sm"
                                  >
                                    <option selected disabled value=''>Select taluka</option>
                                          {isaddtaluka.map((taluka) => (
                                            <option key={taluka.id} value={taluka.id}>{taluka.name}</option>
                                          ))}
                                  </Input>
                                </Col>
                              </Col>
                              <Col sm="4">
                                <FormLabel>
                                  <sub>Pin/Zip Code</sub>
                                </FormLabel>
                                <Col sm="12">
                                  <Input
                                    type="text"
                                    name="PinZip"
                                    defaultValue={values.PinZip}
                                    onChange={handleFormData("PinZip")}
                                    size="sm"
                                    placeholder="Enter pin/zip code here"
                                  >
                                  </Input>
                                </Col>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </CardBody>
                    <CardBody className="border py-0 bg-light ">
                      <Col sm="12">
                        <FormLabel>
                          <sub>Permanent address</sub>
                        </FormLabel>
                      </Col>
                      <Col sm="5">
                        <Row className="g-2 form">
                          <Col sm="1 pe-0">
                            <Input type="checkbox" />
                          </Col>
                          <Col sm="10 figure-caption ">
                            {" "}
                            Same as present address
                          </Col>
                        </Row>
                      </Col>
                    </CardBody>
                    <CardFooter className="border-0 bg-white pt-4">
                      <Col sm="12">
                        <Col lg="12" className="p-3">
                          <Row>
                            <Col lg="8">
                              <Button
                                onClick={prevStep}
                                size="lg"
                                className="col-sm-3 rounded-0 text-white figure-caption "
                              >
                                Previous
                              </Button>
                            </Col>
                            <Col sm="4">
                              <Row>
                                <Col sm="6">
                                  <Button
                                    size="lg"
                                    className="btn-outline-secondary bg-white rounded-0 text-black figure-caption"
                                  >
                                    Cancel
                                  </Button>
                                </Col>
                                <Col sm="6">
                                  <Button
                                    size="lg"
                                    type="submit"
                                    className="col-sm-12 rounded-0 figure-caption text-white"
                                  >
                                    Next
                                  </Button>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Col>
                    </CardFooter>
                  </Card>
                </FormGroup>
              </Form>
            </Row>
          </Col>
        </Col>
      </Desktop>
      <Mobile>
        <Col className="section">
          <Col className="container-fluid">
            <Card>
              <Form onSubmit={SubmitForm}>
                <CardBody>
                  <Col className="form-control form-group p-0 border-0">
                    <Row className="g-2 form">
                      <Col className="col-12">
                        <Card className="border-0">
                          <CardHeader className="border-bottom bg-white">
                            Address details
                          </CardHeader>
                          <CardBody className="px-0 border-0">
                            <Accordion defaultActiveKey="0">
                              <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                  Present Address
                                </Accordion.Header>
                                <Accordion.Body>
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-12">
                                        <FormLabel>
                                          House/Flat No./Building
                                        </FormLabel>
                                        <Col className="col-12">
                                          <Input
                                            type="text"
                                            name="houseNo"
                                            defaultValue={values.houseNo}
                                            onChange={handleFormData("houseNo")}
                                            placeholder="Enter House/Flat No./Building name here"
                                            size="sm"
                                          />
                                        </Col>
                                      </Col>
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <FormLabel>Street Details</FormLabel>
                                          <Col className="col-12">
                                            <Input
                                              type="text"
                                              name="streetdetails"
                                              defaultValue={
                                                values.streetdetails
                                              }
                                              onChange={handleFormData(
                                                "streetdetails"
                                              )}
                                              placeholder="Enter street details"
                                            />
                                          </Col>
                                        </Row>
                                      </Col>
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <FormLabel>Landmark</FormLabel>
                                          <Col className="col-12">
                                            <Input
                                              type="text"
                                              placeholder="Enter your address"
                                              className="rounded-0"
                                            />
                                          </Col>
                                        </Row>
                                      </Col>
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-6">
                                            <FormLabel>Country</FormLabel>
                                            <Col className="col-12">
                                              <Input
                                                type="select"
                                                name="Country"
                                                defaultValue={values.Country}
                                                onChange={handleFormData(
                                                  "Country"
                                                )}
                                                size="sm"
                                              >
                                                <option>India</option>
                                                <option>Japan</option>
                                                <option>USA</option>
                                              </Input>
                                            </Col>
                                          </Col>
                                          <Col className="col-6">
                                            <FormLabel>State</FormLabel>
                                            <Col className="col-12">
                                              <Input
                                                type="select"
                                                name="State"
                                                defaultValue={values.State}
                                                onChange={handleFormData(
                                                  "State"
                                                )}
                                                size="sm"
                                              >
                                                <option>Maharashtra</option>
                                                <option>Tokyo</option>
                                                <option>New York</option>
                                              </Input>
                                            </Col>
                                          </Col>
                                        </Row>
                                      </Col>

                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-6">
                                            <FormLabel>City</FormLabel>
                                            <Col className="col-12">
                                              <Input
                                                type="select"
                                                name="City"
                                                defaultValue={values.City}
                                                onChange={handleFormData(
                                                  "City"
                                                )}
                                                size="sm"
                                              >
                                                <option>Pune</option>
                                                <option>Ohio</option>
                                              </Input>
                                            </Col>
                                          </Col>
                                          <Col className="col-6">
                                            <FormLabel>District</FormLabel>
                                            <Col className="col-12">
                                              <Input
                                                type="select"
                                                name="District"
                                                defaultValue={values.District}
                                                onChange={handleFormData(
                                                  "District"
                                                )}
                                                size="sm"
                                              >
                                                <option>Mumbai</option>
                                                <option>Patna</option>
                                              </Input>
                                            </Col>
                                          </Col>
                                        </Row>
                                      </Col>

                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-6">
                                            <FormLabel>Taluka</FormLabel>
                                            <Col className="col-12">
                                              <Input
                                                type="select"
                                                name="Taluka"
                                                defaultValue={values.Taluka}
                                                onChange={handleFormData(
                                                  "Taluka"
                                                )}
                                                size="sm"
                                              >
                                                <option>Haveli</option>
                                                <option>Satara</option>
                                              </Input>
                                            </Col>
                                          </Col>
                                          <Col className="col-6">
                                            <FormLabel>Pin/Zip code</FormLabel>
                                            <Col className="col-12">
                                              <Input
                                                type="select"
                                                name="PinZip"
                                                defaultValue={values.PinZip}
                                                onChange={handleFormData(
                                                  "PinZip"
                                                )}
                                                size="sm"
                                                maxLength="6"
                                              />
                                            </Col>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="col-12">
                        <Card className="border-0">
                          <CardBody className="px-0 border-0">
                            <Accordion defaultActiveKey="0">
                              <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                  <Row className="g-2 form">
                                    <Col className="col-12">
                                      Permanent Address
                                    </Col>
                                    <Col className="col-12 form-check">
                                      <Input type="checkbox" />
                                      <b>same as present address</b>
                                    </Col>
                                  </Row>
                                </Accordion.Header>
                                <Accordion.Body>
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-12">
                                        <FormLabel>
                                          House/Flat No./Building
                                        </FormLabel>
                                        <Col className="col-12">
                                          <Input
                                            type="text"
                                            placeholder="Enter your address"
                                            className="rounded-0"
                                          />
                                        </Col>
                                      </Col>
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <FormLabel>Street Details</FormLabel>
                                          <Col className="col-12">
                                            <Input
                                              type="text"
                                              placeholder="Enter your address"
                                              className="rounded-0"
                                            />
                                          </Col>
                                        </Row>
                                      </Col>
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <FormLabel>Landmark</FormLabel>
                                          <Col className="col-12">
                                            <Input
                                              type="text"
                                              placeholder="Enter your address"
                                              className="rounded-0"
                                            />
                                          </Col>
                                        </Row>
                                      </Col>
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-6">
                                            <FormLabel>Country</FormLabel>
                                            <Col className="col-12">
                                              <Input
                                                type="select"
                                                className="rounded-0"
                                              >
                                                <option>India</option>
                                                <option>Japan</option>
                                                <option>USA</option>
                                              </Input>
                                            </Col>
                                          </Col>
                                          <Col className="col-6">
                                            <FormLabel>State</FormLabel>
                                            <Col className="col-12">
                                              <Input
                                                type="select"
                                                className="rounded-0"
                                              >
                                                <option>Maharashtra</option>
                                                <option>Tokyo</option>
                                                <option>New York</option>
                                              </Input>
                                            </Col>
                                          </Col>
                                        </Row>
                                      </Col>

                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-6">
                                            <FormLabel>City</FormLabel>
                                            <Col className="col-12">
                                              <Input
                                                type="select"
                                                className="rounded-0"
                                              >
                                                <option>Pune</option>
                                                <option>Ohio</option>
                                              </Input>
                                            </Col>
                                          </Col>
                                          <Col className="col-6">
                                            <FormLabel>District</FormLabel>
                                            <Col className="col-12">
                                              <Input
                                                className="rounded-0"
                                                type="select"
                                              >
                                                <option>Mumbai</option>
                                                <option>Patna</option>
                                              </Input>
                                            </Col>
                                          </Col>
                                        </Row>
                                      </Col>

                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-6">
                                            <FormLabel>Taluka</FormLabel>
                                            <Col className="col-12">
                                              <Input
                                                className="rounded-0"
                                                type="select"
                                              >
                                                <option>Havili</option>
                                                <option>Satara</option>
                                              </Input>
                                            </Col>
                                          </Col>
                                          <Col className="col-6">
                                            <FormLabel>Pin/Zip code</FormLabel>
                                            <Col className="col-12">
                                              <Input
                                                type="text"
                                                placeholder="Enter your zip/pin number "
                                                cla
                                              />
                                            </Col>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </CardBody>
                <CardFooter className="bg-white">
                  <Col className="col-12">
                    <Row className="g-2 form">
                      <Col className="col-4">
                        <Button className="rounded-0">Previous</Button>
                      </Col>
                      <Col className="col-4">
                        <Button className="bg-white rounded-0 text-primary">
                          Cancel
                        </Button>
                      </Col>
                      <Col className="col-4">
                        <Button
                          type="submit"
                          className="rounded-0"
                          onClick={SubmitForm}
                        >
                          Next
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </CardFooter>
              </Form>
            </Card>
          </Col>
        </Col>
      </Mobile>
    </>
  );
};
export default AddressDetails;
