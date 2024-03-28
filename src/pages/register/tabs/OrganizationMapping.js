import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Input,
  Label,
  Row,
} from "reactstrap";

import { useMediaQuery } from "react-responsive";
import { InputGroup, Button, FormLabel, Form } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useState } from "react";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const OrganizationMapping = ({ prevStep, nextStep, changeInputData, values }) => {
  const [orgMap, setOrgMap] = useState([]);

  const BaseURL = process.env.REACT_APP_BASE_URL;

  const [isaddCount, setIsAddcount] = useState([]);
  const [isaddState, setIsAddState] = useState([]);
  const [isadddist, setIsAddDist] = useState([]);
  const [isaddtaluka, setIsAddTaluka] = useState([]);
  const [isaddcity, setIsAddCity] = useState([]);

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

    fetch(`${BaseURL}/api/org/wings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => setOrgMap(data));
  }, []);

  const [formValues, setFormValues] = useState({
    m21Wing: { id: '', name: '' },
    nRC: { id: '', name: '' },
    sRC: { id: '', name: '' },
    dRC: { id: '', name: '' },
    cRC: { id: '', name: '' },
    tRC: { id: '', name: '' }
  });


  const handleFormData = (fieldName) => (event) => {
    const { id, name } = event.target.value;
    setFormValues(prev => ({ ...prev, [fieldName]: { id, name } }));
    changeInputData(fieldName, name);

    if (fieldName === 'currentResponsibilities') {
      const { value } = event.target;
      setFormValues(prev => ({ ...prev, [fieldName]: value }));
      changeInputData(fieldName, value);
    }

    // If country field changes, fetch states for the selected country
    if (fieldName === "nRC") {
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

    if (fieldName === "sRC") {
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

    if (fieldName === "dRC") {
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
        });
    }

    if (fieldName === "dRC") {
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

  const SubmitForm = (e) => {
    e.preventDefault();

    nextStep();

    changeInputData('m21Wing', values.m21Wing);
    changeInputData('nRC', formValues.nRC.name);
    changeInputData('sRC', formValues.sRC.name);
    changeInputData('dRC', formValues.dRC.name);
    changeInputData('tRC', formValues.tRC.name);
    changeInputData('cRC', formValues.cRC.name);
    changeInputData('currentResponsibilities', formValues.currentResponsibilities);

  };

  //next button color code

  const [bgBlueForOtpButton, setBgBlueForOtpButton] = useState("secondary");
  const [bgChangeDarkToBlue, setBgChangeDarkToBlue] = useState("primary");

  return (
    <>
      <div className="organization">
        <Desktop>
          <Container>
            <Col lg="12">
              <Row>
                <Col lg="3">&nbsp;</Col>
                <Col lg="8">
                  <Card className="border-0 shadow">
                    <Form onSubmit={SubmitForm}>
                      <Col sm="12" className="px-5">
                        <CardHeader className="border-0 px-1 bg-white">
                          <Col sm="12" className="">
                            <b className="font-size-16 fw-bold Ri-text-color-sub-menu">
                              Map your organization{" "}
                            </b>
                          </Col>
                        </CardHeader>

                        <CardBody className=" border-0 pt-0 px-0">
                          <Col className="form-control pt-4 px-0 border-0 ">
                            <Row className="g-2 form">
                              <Col lg="8">
                                <Col sm="12">
                                  <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                    M21 Wing
                                    <sup className="text-danger">*</sup>
                                  </FormLabel>
                                  <Col lg="8">
                                    <Input
                                      name="m21Wing"
                                      type="select"
                                      value={values.m21Wing}
                                      onChange={(event) => {
                                        const id = event.target.value;
                                        const name = event.target.options[event.target.selectedIndex].text;
                                        const enhancedEvent = {
                                          target: {
                                            name: event.target.name,
                                            value: { id, name },
                                          },
                                        };
                                        handleFormData("m21Wing")(enhancedEvent);
                                      }}
                                      className="rounded-0 figure-caption"
                                      placeholder="Choose your option"
                                      required
                                      size="sm"
                                    >
                                      <option value="">Choose your option</option>
                                      {orgMap.map((data) => (
                                        <option key={data.m21Wing} value={data.m21Wing}>{data.m21Wing}</option>
                                      ))}

                                    </Input>
                                    <Label className="font-size-10 fw-normal Ri-text-color-sub-menu">
                                      Please select the wing you belong
                                    </Label>
                                  </Col>

                                </Col>

                                <Col sm="12" className="form-group">
                                  <Row className="g-2 form">
                                    <Col sm="6">
                                      <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                        Country/NRC
                                        <sup className="text-danger">*</sup>
                                      </FormLabel>
                                      <Col>
                                        <Input
                                          name="nRC"
                                          type="select"
                                          defaultValue={values.nRC}
                                          onChange={(event) => {
                                            const id = event.target.value;
                                            const name = event.target.options[event.target.selectedIndex].text;
                                            const enhancedEvent = {
                                              target: {
                                                name: event.target.name,
                                                value: { id, name },
                                              },
                                            };
                                            handleFormData("nRC")(enhancedEvent);
                                          }}
                                          className="rounded-0 figure-caption"
                                          placeholder="Select Country"
                                          required
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
                                    <Col sm="6">
                                      <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                        State/SRC
                                        <sup className="text-danger">*</sup>
                                      </FormLabel>
                                      <Col>
                                        <Input
                                          name="sRC"
                                          type="select"
                                          defaultValue={values.sRC}
                                          onChange={(event) => {
                                            const id = event.target.value;
                                            const name = event.target.options[event.target.selectedIndex].text;
                                            const enhancedEvent = {
                                              target: {
                                                name: event.target.name,
                                                value: { id, name },
                                              },
                                            };
                                            handleFormData("sRC")(enhancedEvent);
                                          }}
                                          className="rounded-0 figure-caption"
                                          placeholder="Select State"
                                          required
                                          size="sm"
                                        >
                                          <option selected disabled value=''>Select state</option>
                                          {isaddState.map((state) => (
                                            <option key={state.id} value={state.id}>{state.name}</option>
                                          ))}
                                        </Input>
                                      </Col>
                                    </Col>
                                  </Row>
                                </Col>

                                <Col sm="12" className="form-group">
                                  <Row className="g-2 form">
                                    <Col sm="6">
                                      <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                        City
                                        <sup className="text-danger">*</sup>
                                      </FormLabel>
                                      <Col>
                                        <Input
                                          name="cRC"
                                          type="select"
                                          defaultValue={values.cRC}
                                          onChange={(event) => {
                                            const id = event.target.value;
                                            const name = event.target.options[event.target.selectedIndex].text;
                                            const enhancedEvent = {
                                              target: {
                                                name: event.target.name,
                                                value: { id, name },
                                              },
                                            };
                                            handleFormData("cRC")(enhancedEvent);
                                          }}
                                          className="rounded-0 figure-caption"
                                          placeholder="Select city"
                                          required
                                          size="sm"
                                        >
                                          <option selected disabled value=''>Select city</option>
                                          {isaddcity.map((city) => (
                                            <option key={city.id} value={city.id}>{city.name}</option>
                                          ))}
                                        </Input>
                                      </Col>
                                    </Col>
                                    <Col sm="6">
                                      <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                        District/DRC
                                        <sup className="text-danger">*</sup>
                                      </FormLabel>
                                      <Col sm="12">
                                        <Input
                                          name="dRC"
                                          type="select"
                                          defaultValue={values.dRC}
                                          onChange={(event) => {
                                            const id = event.target.value;
                                            const name = event.target.options[event.target.selectedIndex].text;
                                            const enhancedEvent = {
                                              target: {
                                                name: event.target.name,
                                                value: { id, name },
                                              },
                                            };
                                            handleFormData("dRC")(enhancedEvent);
                                          }}
                                          placeholder="Select dRC"
                                          className="rounded-0 figure-caption"
                                          required
                                          size="sm"
                                        >
                                          <option selected disabled value=''>Select district</option>
                                          {isadddist.map((district) => (
                                            <option key={district.id} value={district.id}>{district.name}</option>
                                          ))}
                                        </Input>
                                      </Col>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col sm="12" className="form-group">
                                  <Row className="g-2 form">
                                    <Col sm="6">
                                      <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                        Taluka/TRC
                                      </FormLabel>
                                      <Col sm="12">
                                        <Input
                                          name="tRC"
                                          type="select"
                                          defaultValue={values.tRC}
                                          onChange={(event) => {
                                            const id = event.target.value;
                                            const name = event.target.options[event.target.selectedIndex].text;
                                            const enhancedEvent = {
                                              target: {
                                                name: event.target.name,
                                                value: { id, name },
                                              },
                                            };
                                            handleFormData("tRC")(enhancedEvent);
                                          }}
                                          className="rounded-0 figure-caption"
                                          placeholder="Select Taluka"
                                          size="sm"
                                        >
                                          <option selected disabled value=''>Select Taluka</option>
                                          {isaddtaluka.map((taluka) => (
                                            <option key={taluka.id} value={taluka.id}>{taluka.name}</option>
                                          ))}
                                        </Input>
                                      </Col>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col sm="12" className="pt-2">
                                  <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                    Current responsibilities
                                  </FormLabel>
                                  <Col lg="6">
                                    <Input
                                      name="currentResponsibilities"
                                      type="select"
                                      defaultValue={values.currentResponsibilities}
                                      onChange={handleFormData("currentResponsibilities")}
                                      className="rounded-0 figure-caption"
                                      placeholder="Choose your option"
                                      size="sm"
                                    >
                                      <option selected disabled value=''>Choose your option</option>
                                      <option value="Responsibilities One">Responsibilities One</option>
                                      <option value="Responsibilities two">Responsibilities Two</option>
                                      <option value="Responsibilities three">Responsibilities Three</option>
                                    </Input>
                                  </Col>
                                </Col>
                              </Col>
                              <Col lg="4">
                                <Card className="bg-light border-0">
                                  <Col lg="12" className="p-3 lh-1">
                                    <Col className="p-1 ">
                                      <Label className="font-size-11 fw-bold Ri-text-color-sub-menu">
                                        Map your organization
                                      </Label>
                                    </Col>
                                    <Col className="p-1">
                                      <Col>
                                        <small>
                                          Step : 1 <br />
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipiscing elit. Aenean
                                          euismod bibendum laoreet. Proin
                                          gravida dolor sit amet lacus accumsan
                                          et viverra justo commodo.
                                        </small>
                                      </Col>
                                    </Col>
                                    <Col className="p-1">
                                      <Col>
                                        <small>
                                          Step : 2 <br />
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipiscing elit. Aenean
                                          euismod bibendum laoreet. Proin
                                          gravida dolor sit amet lacus accumsan
                                          et viverra justo commodo.
                                        </small>
                                      </Col>
                                    </Col>
                                  </Col>
                                </Card>
                              </Col>
                            </Row>
                          </Col>
                        </CardBody>
                      </Col>
                      <CardFooter className="border-0 py-4 bg-white">
                        <Col sm="12" className="pt-2">
                          <Col lg="12" className=" pt-4">
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

                              <Col sm="2" className="text-end">
                                <Button
                                  size="lg"
                                  className="btn-outline-secondary
                                   col-sm-7
                                    bg-white
                                    font-size-11
                                    fw-bold
                                     rounded-0 text-black "
                                >
                                  Cancel
                                </Button>
                              </Col>
                              <Col sm="2">
                                <Button
                                  size="lg"
                                  // onClick={nextStep}
                                  type="submit"
                                  className="col-sm-7 rounded-0 font-size-11 fw-bold text-white"
                                  disabled={
                                    formValues.m21Wing != "" &&
                                      formValues.nRC != "" &&
                                      formValues.sRC != "" &&
                                      formValues.dRC != "" &&
                                      formValues.cRC != ""
                                      ? false
                                      : true
                                  }
                                  variant={
                                    formValues.m21Wing != "" &&
                                      formValues.nRC != "" &&
                                      formValues.sRC != "" &&
                                      formValues.dRC != "" &&
                                      formValues.cRC != ""
                                      ? bgChangeDarkToBlue
                                      : bgBlueForOtpButton
                                  }
                                >
                                  Next
                                </Button>
                              </Col>
                            </Row>
                          </Col>
                        </Col>
                      </CardFooter>
                    </Form>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Container>
        </Desktop>
      </div>

      <div className="organization">
        <Mobile>
          <Col className="col-12">
            <Card className="border-0 rounded-0">
              <Form onSubmit={SubmitForm}>
                <CardHeader className="bg-transparent">
                  <Col className="">
                    <FormLabel className="font-size-14 fw-normal Ri-text-color-main-menu">
                      Map your organization
                    </FormLabel>
                  </Col>
                </CardHeader>
                <CardBody>
                  <Col className="col-12">
                    <Row className="g-2 form">
                      <Col className="col-12">
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="bg-light form-control border-0 col-12 rounded-3 ">
                              <Row className="g-2 form">
                                <Col className="col-8">
                                  <FormLabel className="font-size-11 fw-normal Ri-text-color-main-menu">
                                    Map your organization
                                  </FormLabel>
                                </Col>

                                <Col className="col-4">
                                  <label className="text-primary font-size-11 fw-normal">
                                    <u>learn more</u>
                                  </label>
                                </Col>
                              </Row>
                            </Col>

                            <Col className="col-12 form-group">
                              <Row className="g-2 form">
                                <Col className="col-12 form-group">
                                  <FormLabel
                                    className="font-size-11 fw-normal
                                Ri-text-color-sub-menu text-uppercase"
                                  >
                                    M21 Wing<sup className="text-danger">*</sup>
                                  </FormLabel>

                                  <Form.Select
                                    className="rounded-0"
                                    name="m21Wing"
                                    type="select"
                                    defaultValue={values.m21Wing}
                                    onChange={handleFormData("m21Wing")}
                                    required
                                    size="sm"
                                  >
                                    <option selected disabled value="">
                                      Choose your option
                                    </option>
                                    <option>M21-1234</option>
                                    <option>M21-1235</option>
                                    <option>M21-1236</option>
                                  </Form.Select>
                                </Col>
                                <Col className="text-muted col-12 font-size-10 fw-normal">
                                  Please select the wing you belong.
                                </Col>
                              </Row>
                            </Col>

                            <Col className="col-12 form-group">
                              <Row className="g-2 form">
                                <Col className="col-6">
                                  <FormLabel
                                    className="font-size-11 fw-normal
                                Ri-text-color-sub-menu text-uppercase
                                "
                                  >
                                    Country/NRC
                                    <sup className="text-danger">*</sup>
                                  </FormLabel>
                                  <Form.Select
                                    className="rounded-0"
                                    name="nRC"
                                    type="select"
                                    defaultValue={values.nRC}
                                    onChange={handleFormData("nRC")}
                                    required
                                    size="sm"
                                  >
                                    <option>Select country</option>
                                    <option>India</option>
                                    <option>Japan</option>
                                  </Form.Select>
                                </Col>
                                <Col className="col-6">
                                  <Col className="col-12">
                                    <FormLabel className="font-size-11 fw-normal text-uppercase Ri-text-color-sub-menu">
                                      State/SRC
                                      <sup className="text-danger">*</sup>
                                    </FormLabel>
                                    <Form.Select
                                      className="rounded-0"
                                      name="sRC"
                                      type="select"
                                      defaultValue={values.sRC}
                                      onChange={handleFormData("sRC")}
                                      required
                                      size="sm"
                                    >
                                      <option selected>Select state</option>
                                      <option>Tamil Nadu</option>
                                      <option>Kerala</option>
                                    </Form.Select>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="col-12 form-group">
                              <Row className="g-2 form">
                                <Col className="col-6 ">
                                  <FormLabel className="text-uppercase fw-normal font-size-11 Ri-text-color-sub-menu">
                                    District/DRC
                                    <sup className="text-danger">*</sup>
                                  </FormLabel>

                                  <Form.Select
                                    className="rounded-0"
                                    name="dRC"
                                    type="select"
                                    defaultValue={values.dRC}
                                    onChange={handleFormData("dRC")}
                                    required
                                    size="sm"
                                  >
                                    <option selected disabled value="">
                                      Select district
                                    </option>
                                    <option>Chennai</option>
                                    <option>Madhurai</option>
                                  </Form.Select>
                                </Col>

                                <Col className="col-6">
                                  <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu text-uppercase">
                                    Taluka/TRC
                                    <sup className="text-danger">*</sup>
                                  </FormLabel>
                                  <Form.Select
                                    className="rounded-0"
                                    name="tRC"
                                    type="select"
                                    defaultValue={values.tRC}
                                    onChange={handleFormData("tRC")}
                                    size="sm"
                                    required
                                  >
                                    <option selected disabled value="">
                                      Select taluka
                                    </option>
                                    <option>Madhurai</option>
                                    <option>Chennai</option>
                                  </Form.Select>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Col>

                      <Col lg="12" className="col-12">
                        <Col lg="6" className="col-6">
                          <Col className="col-12">
                            <FormLabel className="font-size-11 text-uppercase Ri-text-color-sub-menu fw-normal">
                              Current responsibilities
                            </FormLabel>

                            <Form.Select
                              className="rounded-0"
                              name="currentResponsibilities"
                              type="select"
                              defaultValue={values.currentResponsibilities}
                              onChange={handleFormData(
                                "currentResponsibilities"
                              )}
                              size="sm"
                            >
                              <option selected value="">
                                Choose your option
                              </option>
                              <option>X</option>
                              <option>y</option>
                              <option>Z</option>
                            </Form.Select>
                          </Col>
                        </Col>
                      </Col>
                    </Row>
                  </Col>
                </CardBody>
                <CardFooter className="bg-transparent">
                  <Col lg="12" className="col-12">
                    <Row className="g-2 form">
                      <Col lg="6" className="col-6">
                        <Button
                          color="primary"
                          className="text-uppercase font-size-10 fw-bold"
                          onClick={prevStep}
                        >
                          Previous
                        </Button>
                      </Col>
                      <Col className="col-6">
                        <Row className="g-2 form">
                          <Col lg="1" className="col-6">
                            <Col>
                              <Button
                                className="text-uppercase font-size-10 fw-bold"
                                variant="outline-dark"
                              >
                                Cancel
                              </Button>
                            </Col>
                          </Col>
                          <Col lg="1" className=" col-6">
                            <Button
                              disabled={
                                values.m21Wing !== "" &&
                                  values.nRC !== "" &&
                                  values.sRC !== "" &&
                                  values.dRC !== "" &&
                                  values.tRC !== "" &&
                                  values.currentResponsibilities !== ""
                                  ? false
                                  : true
                              }
                              variant={
                                values.m21Wing !== "" &&
                                  values.nRC !== "" &&
                                  values.sRC !== "" &&
                                  values.dRC !== "" &&
                                  values.tRC !== "" &&
                                  values.currentResponsibilities !== ""
                                  ? bgChangeDarkToBlue
                                  : bgBlueForOtpButton
                              }
                              className="text-uppercase font-size-10 fw-bold"
                              type="submit"
                            >
                              Next
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </CardFooter>
              </Form>
            </Card>
          </Col>
        </Mobile>
      </div>
    </>
  );
};
export default OrganizationMapping;
