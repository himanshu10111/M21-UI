import React, { useState } from "react";
import {
  Button,
  Card,
  Dropdown,
  FormGroup,
  FormLabel,
  InputGroup,
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import {
  CardBody,
  CardFooter,
  Col,
  Form,
  Input,
  InputGroupText,
  Row,
} from "reactstrap";

import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const NewNominationDetails = ({
  nextStep,
  prevStep,
  values,
  handleFormData,
}) => {
  const SubmitForm = (e) => {
    e.preventDefault();

    nextStep();
  };
  const handleKeyPress = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const handleMobileNoChange =(e) =>{
    const {value} = e.target;
    if(value.length < 10)
    {
      setIsError(true);
      setError("Please enter a valid 10-digit contact number.");
    } 
    else{
      setIsError(false);
      setError("");
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
                      <h5>New nomination details</h5>
                    </CardHeader>
                    <CardBody className="border-0 px-0">
                      <Row className="g-2 form">
                        <Col sm="12" className="form-label mb-4">
                          <Row>
                            <Col sm="2">
                              <FormLabel>
                                <sub>Title</sub>
                                <sup className="text-danger"> *</sup>
                              </FormLabel>
                              <Col sm="12" className="p-0">
                                <Input
                                  type="select"
                                  name="InvtiTitle"
                                  defaultValue={values.InvtiTitle}
                                  onChange={handleFormData("InvtiTitle")}
                                  required
                                  className="rounded-0"
                                  size="sm"
                                >
                                  <option value="" selected disabled>
                                    Select Gender
                                  </option>
                                  <option>Mr</option>
                                  <option>Ms</option>
                                  <option>Mrs</option>
                                </Input>
                              </Col>
                            </Col>
                            <Col sm="4">
                              <FormLabel>
                                <sub>First Name</sub>
                                <sup className="text-danger">*</sup>
                              </FormLabel>
                              <Col sm="12" className="p-0">
                                <Input
                                  type="text"
                                  placeholder="Enter first name here"
                                  name="firstName"
                                  defaultValue={values.firstName}
                                  onChange={handleFormData("firstName")}
                                  required
                                  className="rounded-0"
                                  size="sm"
                                />
                              </Col>
                            </Col>
                            <Col sm="4">
                              <FormLabel>
                                <sub>Last Name</sub>
                              </FormLabel>
                              <Col sm="12" className="">
                                <Input
                                  type="text"
                                  placeholder="Enter last name here"
                                  name="lastName"
                                  defaultValue={values.lastName}
                                  onChange={handleFormData("lastName")}
                                  required
                                  className="rounded-0"
                                  size="sm"
                                />
                              </Col>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="12">
                          <FormLabel>
                            <sub>My mobile number</sub>
                            <sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col sm="5">
                            <InputGroup
                              className="rounded-0 form-label"
                              size="sm"
                            >
                              <InputGroupText className="rounded-0">
                                <Dropdown size="sm">
                                  <Dropdown.Toggle
                                    size="sm"
                                    className="bg-transparent border-0 text-black"
                                  >
                                    +91
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item>1</Dropdown.Item>
                                    <Dropdown.Item>2</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </InputGroupText>

                              <Input
                                className="rounded-0"
                                size="sm"
                                type="text" 
                                placeholder="Enter your mobile number"
                                name="MobileNo"
                                defaultValue={values.MobileNo}
                                onChange={handleMobileNoChange}
                                pattern="\d{10}"
                                maxLength="10"
                                onKeyPress={handleKeyPress}
                              />
                              {setIsError && <div style={{ color: 'red' }}>{error}</div>} 
                            </InputGroup>
                          </Col>
                          <Col sm="5">
                            <Row className="g-2 form">
                              <Col sm="1 pe-0">
                                <Input type="checkbox" />
                              </Col>
                              <Col sm="10 figure-caption ">
                                {" "}
                                Whatsapp number too
                              </Col>
                            </Row>
                          </Col>
                        </Col>
                        <Col sm="12">
                          <Row>
                            <Col sm="5">
                              <FormLabel>
                                <sub>My Email Id</sub>
                              </FormLabel>
                              <Col sm="12">
                                <Input
                                  type="email"
                                  placeholder="Enter your mobile number here"
                                  name="Email"
                                  defaultValue={values.Email}
                                  onChange={handleFormData("Email")}
                                  required
                                  size="sm"
                                  className="rounded-0"
                                />
                              </Col>
                            </Col>
                            <Col sm="5">
                              <FormLabel>
                                <sub>Alternate Email Id</sub>
                              </FormLabel>
                              <Col sm="12">
                                <Input
                                  type="email"
                                  placeholder="Enter your mobile number here"
                                  name="AltEmail"
                                  defaultValue={values.AltEmail}
                                  onChange={handleFormData("AltEmail")}
                                  required
                                  size="sm"
                                  className="rounded-0"
                                />
                              </Col>
                            </Col>
                          </Row>
                        </Col>

                        <Col sm="12">
                          <Row>&nbsp;</Row>
                        </Col>
                        <Col sm="12" className="pt-3">
                          <Row>&nbsp;</Row>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="border-0 bg-white">
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
          <Col className="g-2 from form-control border-0 form-group">
            <Row className="g-2 form">
              <Form onSubmit={SubmitForm}>
                <FormGroup>
                  <Card className="border-0">
                    <CardHeader className="border-0 bg-white px-0 ">
                      <h5>New nomination details</h5>
                    </CardHeader>
                    <CardBody className="border-0 px-0">
                      <Row className="g-2 form">
                        <Col className="col-12 form-label mb-4">
                          <Row>
                            <Col className="col-12">
                              <FormLabel>
                                <sub>Title</sub>
                                <sup className="text-danger"> *</sup>
                              </FormLabel>
                              <Col className="p-0 col-12">
                                <Input
                                  type="select"
                                  name="InvtiTitle"
                                  defaultValue={values.InvtiTitle}
                                  onChange={handleFormData("InvtiTitle")}
                                  required
                                  className="rounded-0"
                                  size="sm"
                                >
                                  <option value="" selected>
                                    Select Gender
                                  </option>
                                  <option>Mr</option>
                                  <option>Mrs</option>
                                </Input>
                              </Col>
                            </Col>
                            <Col className="col-12">
                              <FormLabel>
                                <sub>First Name</sub>
                                <sup>*</sup>
                              </FormLabel>
                              <Col className="p-0 col-12">
                                <Input
                                  type="text"
                                  placeholder="Enter first name here"
                                  name="firstName"
                                  defaultValue={values.firstName}
                                  onChange={handleFormData("firstName")}
                                  required
                                  className="rounded-0"
                                  size="sm"
                                />
                              </Col>
                            </Col>
                            <Col className="col-12">
                              <FormLabel>
                                <sub>Last Name</sub>
                              </FormLabel>
                              <Col sm="12" className="">
                                <Input
                                  type="text"
                                  placeholder="Enter last name here"
                                  name="lastName"
                                  defaultValue={values.lastName}
                                  onChange={handleFormData("lastName")}
                                  required
                                  className="rounded-0"
                                  size="sm"
                                />
                              </Col>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="col-12">
                          <FormLabel>
                            <sub>My mobile number</sub>
                            <sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col className="col-12">
                            <InputGroup
                              className="rounded-0 form-label"
                              size="sm"
                            >
                              <InputGroupText className="rounded-0">
                                <Dropdown size="sm">
                                  <Dropdown.Toggle
                                    size="sm"
                                    className="bg-transparent border-0 text-black"
                                  >
                                    +91
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item>1</Dropdown.Item>
                                    <Dropdown.Item>2</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </InputGroupText>

                              <Input
                                className="rounded-0"
                                size="sm"
                                type="text"
                                placeholder="Enter your mobile number here"
                                name="MobileNo"
                                defaultValue={values.MobileNo}
                                onChange={handleFormData("MobileNo")}
                                required
                              />
                            </InputGroup>
                          </Col>
                          <Col className="col-12 ">
                            <Row className="g-2 form ">
                              <Col className="col-1">
                                <Input type="checkbox" />
                              </Col>
                              <Col className="col-10">Whatsapp number too</Col>
                            </Row>
                          </Col>
                        </Col>
                        <Col sm="12">
                          <Row>
                            <Col sm="5">
                              <FormLabel>
                                <sub>My Email Id</sub>
                              </FormLabel>
                              <Col sm="12">
                                <Input
                                  type="email"
                                  placeholder="Enter your mobile number here"
                                  name="Email"
                                  defaultValue={values.Email}
                                  onChange={handleFormData("Email")}
                                  required
                                  size="sm"
                                  className="rounded-0"
                                />
                              </Col>
                            </Col>
                            <Col sm="5">
                              <FormLabel>
                                <sub>Alternate Email Id</sub>
                              </FormLabel>
                              <Col sm="12">
                                <Input
                                  type="email"
                                  placeholder="Enter your mobile number here"
                                  name="AltEmail"
                                  defaultValue={values.AltEmail}
                                  onChange={handleFormData("AltEmail")}
                                  required
                                  size="sm"
                                  className="rounded-0"
                                />
                              </Col>
                            </Col>
                          </Row>
                        </Col>

                        <Col sm="12">
                          <Row>&nbsp;</Row>
                        </Col>
                        <Col sm="12" className="pt-3">
                          <Row>&nbsp;</Row>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="border-0 bg-white">
                      <Col className="col-12">
                        <Row className="g-2 form">
                          <Col className="col-4">
                            <Button
                              onClick={prevStep}
                              size="lg"
                              className="col-sm-3 rounded-0 text-white figure-caption "
                            >
                              Previous
                            </Button>
                          </Col>
                          <Col className="col-8">
                            <Row>
                              <Col className="col-6">
                                <Button
                                  size="lg"
                                  className="btn-outline-secondary bg-white rounded-0 text-black figure-caption"
                                >
                                  Cancel
                                </Button>
                              </Col>
                              <Col className="col-6">
                                <Button
                                  size="lg"
                                  type="submit"
                                  onClick={SubmitForm}
                                  className="col-12 rounded-0 figure-caption text-white"
                                >
                                  Next
                                </Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </CardFooter>
                  </Card>
                </FormGroup>
              </Form>
            </Row>
          </Col>
        </Col>
      </Mobile>
    </>
  );
};

export default NewNominationDetails;
