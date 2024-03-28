import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  FormLabel,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardBody, CardFooter, Col, Input, Label } from "reactstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const AdditionalDetails = ({ nextStep, prevStep, handleFormData, values }) => {
  const [bgBlueForOtpButton, setBgBlueForOtpButton] = useState("secondary");
  const [bgChangeDarkToBlue, setBgChangeDarkToBlue] = useState("primary");

  const SubmitForm = (e) => {
    e.preventDefault();
    
    nextStep();
  };
  return (
    <>
      <div className="additional">
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
                            <Label className="font-size-16 fw-bold Ri-text-color-sub-menu">
                              Additional details
                            </Label>
                          </Col>
                        </CardHeader>
                        <CardBody className=" border-0 pt-0 px-0">
                          <Col className="form-control pt-3 px-0 border-0 ">
                            <Row className="g-2 form">
                              <Col lg="12" className="pb-5">
                                <Row>
                                  <Col lg="5" className="">
                                    <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                      Gender {" "}
                                      <sup className="text-danger"> *</sup>
                                    </FormLabel>
                                    <Col lg="12">
                                      <Input
                                        name="gender"
                                        type="select"
                                        defaultValue={values.gender}
                                        onChange={handleFormData("gender")}
                                        className="rounded-0 figure-caption"
                                        placeholder="Select Gender"
                                        required
                                        size="sm"
                                      >
                                        <option selected value="">
                                          Choose your title
                                        </option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Transgender</option>
                                      </Input>
                                    </Col>
                                  </Col>
                                  <Col lg="4">
                                    <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                      Date Of Birth
                                      <sup className="text-danger"> *</sup>
                                    </FormLabel>
                                    <Col lg="12">
                                      <Input
                                        name="dateOfBirth"
                                        type="date"
                                        defaultValue={values.dateOfBirth}
                                        onChange={handleFormData("dateOfBirth")}
                                        className="rounded-0 figure-caption"
                                        required
                                        size="sm"
                                        max="2005-12-31"
                                      />
                                    </Col>
                                  </Col>
                                </Row>
                              </Col>
                              <Col sm="12" className="p-2">
                                &nbsp;
                              </Col>
                              <Col lg="12" className="pb-3">
                                <Col lg="12">
                                  <Row>
                                    <Col lg="5">
                                      <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                        Education{" "}
                                        <sup className="text-danger">*</sup>
                                      </FormLabel>
                                      <Col lg="12">
                                        <Input
                                          name="education"
                                          type="select"
                                          defaultValue={values.education}
                                          onChange={handleFormData("education")}
                                          className="rounded-0 figure-caption"
                                          required
                                          size="sm"
                                        >
                                          <option selected value="">
                                            Choose your option
                                          </option>
                                          <option>B.E</option>
                                          <option>B.Com</option>
                                          <option>LLB</option>
                                          <option>B.Tech</option>
                                          <option>MBA</option>
                                          <option>M.E</option>
                                          <option>M.B.B.S</option>
                                        </Input>
                                      </Col>
                                    </Col>
                                    <Col lg="4">
                                      <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                        Profession{" "}
                                        <sup className="text-danger">*</sup>
                                      </FormLabel>
                                      <Col lg="12">
                                        <Input
                                          name="profession"
                                          type="select"
                                          defaultValue={values.profession}
                                          onChange={handleFormData(
                                            "profession"
                                          )}
                                          className="rounded-0 figure-caption"
                                          required
                                          size="sm"
                                        >
                                          <option selected value="">
                                            Choose your option
                                          </option>
                                          <option>Doctor</option>
                                          <option>Engineer</option>
                                          <option>Lawyer</option>
                                        </Input>
                                      </Col>
                                    </Col>
                                  </Row>
                                </Col>
                              </Col>

                              <Col sm="12" className="p-4">
                                &nbsp;
                              </Col>
                            </Row>
                          </Col>
                        </CardBody>
                      </Col>
                      <CardFooter className="border-0 py-4 bg-white">
                        <Col sm="12" className="pt-2">
                          <Col lg="12" className="pt-1">
                            <Row>
                              <Col lg="8">
                                <Button
                                  size="lg"
                                  className="btn-outline-secondary
                                   col-sm-3 bg-white rounded-2 text-black font-size-11 fw-bold"
                                >
                                  Cancel
                                </Button>
                              </Col>

                              <Col sm="2">
                                <Button
                                  onClick={prevStep}
                                  size="lg"
                                  className="col-sm-12 rounded-2 text-white font-size-11 fw-bold "
                                >
                                  Previous
                                </Button>
                              </Col>
                              <Col sm="2">
                                <Button
                                  size="lg"
                                  onClick={nextStep}
                                  type="submit"
                                  className="col-sm-12 rounded-2 font-size-11 fw-bold text-white"
                                  disabled={
                                    values.gender !== "" &&
                                      values.dateOfBirth !== "" &&
                                      values.education !== "" &&
                                      values.profession !== ""
                                      ? false
                                      : true
                                  }
                                  variant={
                                    values.gender !== "" &&
                                      values.dateOfBirth !== "" &&
                                      values.education !== "" &&
                                      values.profession !== ""
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

      <div className="additional">
        <Mobile>
          <Col>
            <Row>
              <Col lg="12">
                <Card className="border-0 rounded-0">
                  <Form onSubmit={SubmitForm}>
                    <CardHeader className="bg-transparent">
                      <Col lg="12" className=" font-size-14 fw-normal Ri-text-color-main-menu">

                        Additional details

                      </Col>
                    </CardHeader>
                    <CardBody>
                      <Col className="col-12">
                        <Row className="g-2 form">
                          <Col sm="12" className="">
                            <Row className="g-2 form">
                              <Col className="col-6">
                                <FormLabel className="font-size-11 text-uppercase fw-normal Ri-text-color-sub-menu">

                                  Gender <sup className="text-danger font-size-12">*</sup>
                                </FormLabel>

                                <Form.Select
                                  className="rounded-0"
                                  name="gender"
                                  type="select"
                                  defaultValue={values.gender}
                                  required
                                  onChange={handleFormData("gender")}
                                  size='sm'
                                >
                                  <option selected disabled value=''>Choose your title</option>
                                  <option>Male</option>
                                  <option>Female</option>
                                  <option>Transgender</option>
                                </Form.Select>
                              </Col>
                              <Col className="col-6">
                                <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu text-uppercase">

                                  Date Of Birth<sup className="text-danger font-size-12">*</sup>
                                </FormLabel>

                                <Input
                                  className="rounded-0"
                                  name="dateOfBirth"
                                  type="date"
                                  defaultValue={values.dateOfBirth}
                                  onChange={handleFormData("dateOfBirth")}
                                  required
                                  max='2005-12-31'
                                  size='sm'
                                />
                              </Col>
                            </Row>
                          </Col>
                          <Col className="col-12 p-4 form-group">&nbsp;</Col>
                          <Col className="col-12 form-group">
                            <Row className="g-2 form">
                              <Col className="col-6 form-group">
                                <FormLabel className="font-size-11 fw-normal text-uppercase Ri-text-color-sub-menu">

                                  Education<sup className="text-danger font-size-12">*</sup>
                                </FormLabel>

                                <Input
                                  className="rounded-0"
                                  name="education"
                                  type="select"
                                  defaultValue={values.education}
                                  onChange={handleFormData("education")}
                                  required
                                  size='sm'
                                >
                                  <option selected>Choose your option</option>
                                  <option>B.E</option>
                                  <option>B.Com</option>
                                  <option>LLB</option>
                                  <option>B.Tech</option>
                                  <option>MBA</option>
                                  <option>M.E</option>
                                  <option>M.B.B.S</option>
                                </Input>
                              </Col>
                              <Col className="col-6 form-group">
                                <FormLabel className="font-size-11 fw-normal text-uppercase Ri-text-color-sub-menu">

                                  Profession<sup className="text-danger font-size-12">*</sup>
                                </FormLabel>

                                <Input
                                  className="rounded-0"
                                  name="profession"
                                  type="select"
                                  defaultValue={values.profession}
                                  onChange={handleFormData("profession")}
                                  required
                                  size='sm'
                                >
                                  <option selected disabled value=''>Choose your option</option>
                                  <option>Doctor</option>
                                  <option>Engineer</option>
                                  <option>Lawyer</option>
                                </Input>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>





                    </CardBody>
                    <CardFooter className="bg-transparent ">
                      <Col className="col-12">
                        <Col className=" ">
                          <Row className="g-2 form">
                            <Col className="col-6">
                              <Button onClick={prevStep}
                                className="text-uppercase fw-bold font-size-10">Previous</Button>

                            </Col>
                            <Col className="col-6">
                              <Row className="g-2 form">
                                <Col className="col-6">
                                  <Button variant="outline-dark text-uppercase fw-bold font-size-10">Cancel</Button></Col>
                                <Col className="col-6">
                                  <Button
                                    disabled={
                                      values.gender !== "" &&
                                        values.dateOfBirth !== "" &&
                                        values.education !== "" &&
                                        values.profession !== ""
                                        ? false : true
                                    }
                                    variant={
                                      values.gender !== "" &&
                                        values.dateOfBirth !== "" &&
                                        values.education !== "" &&
                                        values.profession !== ""
                                        ? bgChangeDarkToBlue : bgBlueForOtpButton
                                    }
                                    className="text-uppercase fw-bold font-size-10" type="submit">
                                    Next
                                  </Button></Col>
                              </Row>
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
        </Mobile>
      </div>
    </>
  );
};
export default AdditionalDetails;
