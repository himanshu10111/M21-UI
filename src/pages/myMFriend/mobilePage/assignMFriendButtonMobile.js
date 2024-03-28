import React from "react";
import { Button, Col, Dropdown, FormLabel, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card, CardBody, CardFooter, Input } from "reactstrap";

const AssignMFriendButtonMObile = () => {
  return (
    <>
      <Col className="section">
        <Col className="container-fluid px-1">
          <Card className="border-0">
            <CardBody className="px-1">
              <Row className="g-2 form">
                <Col className="col-12 form-group">
                  <Row className="g-2 form">
                    <Col className="col-6 form-group">
                      <b>Assign M-friend</b>
                    </Col>
                    <Col className="col-6 text-end form-group">
                      <Link to="/auth/login/mymfriend/assignmfriend">
                        <Button className="bg-white text-secondary border-secondary">
                          back
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Col>
                <Col className="col-12 form-group">
                  <Row className="g-2 form">
                    <Col className="col-4 form-group">
                      <FormLabel>
                        <b>Select M21 member</b>
                      </FormLabel>
                    </Col>
                    <Col className="col-8 form-group">
                      <FormLabel>
                        How to select member?
                        <a className="text-primary">
                          <u>Learn more</u>
                        </a>
                      </FormLabel>
                    </Col>
                  </Row>
                </Col>
                <Col className="col-12 form-group">
                  <Input placeholder="Search memeber name, phone, email, location" />
                </Col>
                <Col sm="12" className="section">
                  <Col className="container-fluid px-1">
                    <Col className="col-12 form-check">
                      <Input type="checkbox" />
                      <FormLabel>All</FormLabel>
                    </Col>
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Card>
                          <CardBody>
                            <Row className="g-2 form">
                              <Col className="col-10 border-end">
                                <Row className="g-2 form">
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-2">
                                        <Input type="checkbox" />
                                      </Col>
                                      <Col className="col-10">
                                        <small>Saba Anjum Karim</small>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-4">
                                        <small>9876 532 412</small>
                                      </Col>
                                      <Col className="col-4">
                                        <small>Araria Bihar</small>
                                      </Col>
                                      <Col className="col-4">
                                        <small>Technology</small>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                              <Col className="col-2 text-center">
                                <Dropdown>
                                  <Dropdown.Toggle></Dropdown.Toggle>
                                </Dropdown>
                              </Col>
                            </Row>
                          </CardBody>
                          <CardFooter className="bg-white">
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-6">
                                  <FormLabel>Select Mentor</FormLabel>
                                  <Col className="col-12">
                                    <Input type="select">
                                      <option>Choose your option</option>
                                    </Input>
                                  </Col>
                                </Col>
                                <Col className="col-6">
                                  <Row className="g-2">
                                    <Col className="col-12 ">&nbsp;</Col>
                                    <Col className="col-12 font-size-11">
                                      <Button disabled>Assign M-friend</Button>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Col>
                          </CardFooter>
                        </Card>
                        <Card>
                          <CardBody>
                            <Row className="g-2 form">
                              <Col className="col-10 border-end">
                                <Row className="g-2 form">
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-2">
                                        <Input type="checkbox" />
                                      </Col>
                                      <Col className="col-10">
                                        <small>Saba Anjum Karim</small>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-4">
                                        <small>9876 532 412</small>
                                      </Col>
                                      <Col className="col-4">
                                        <small>Araria Bihar</small>
                                      </Col>
                                      <Col className="col-4">
                                        <small>Technology</small>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                              <Col className="col-2 text-center">
                                <Dropdown>
                                  <Dropdown.Toggle></Dropdown.Toggle>
                                </Dropdown>
                              </Col>
                            </Row>
                          </CardBody>
                          <CardFooter className="bg-white">
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-6">
                                  <FormLabel>Select Mentor</FormLabel>
                                  <Col className="col-12">
                                    <Input type="select">
                                      <option>Choose your option</option>
                                    </Input>
                                  </Col>
                                </Col>
                                <Col className="col-6">
                                  <Row className="g-2">
                                    <Col className="col-12 ">&nbsp;</Col>
                                    <Col className="col-12 font-size-11">
                                      <Button disabled>Assign M-friend</Button>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Col>
                          </CardFooter>
                        </Card>
                        <Card>
                          <CardBody>
                            <Row className="g-2 form">
                              <Col className="col-10 border-end">
                                <Row className="g-2 form">
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-2">
                                        <Input type="checkbox" />
                                      </Col>
                                      <Col className="col-10">
                                        <small>Saba Anjum Karim</small>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-4">
                                        <small>9876 532 412</small>
                                      </Col>
                                      <Col className="col-4">
                                        <small>Araria Bihar</small>
                                      </Col>
                                      <Col className="col-4">
                                        <small>Technology</small>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                              <Col className="col-2 text-center">
                                <Dropdown>
                                  <Dropdown.Toggle></Dropdown.Toggle>
                                </Dropdown>
                              </Col>
                            </Row>
                          </CardBody>
                          <CardFooter className="bg-white">
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-6">
                                  <FormLabel>Select Mentor</FormLabel>
                                  <Col className="col-12">
                                    <Input type="select">
                                      <option>Choose your option</option>
                                    </Input>
                                  </Col>
                                </Col>
                                <Col className="col-6">
                                  <Row className="g-2">
                                    <Col className="col-12 ">&nbsp;</Col>
                                    <Col className="col-12 font-size-11">
                                      <Button disabled>Assign M-friend</Button>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Col>
                          </CardFooter>
                        </Card>
                        <Card>
                          <CardBody>
                            <Row className="g-2 form">
                              <Col className="col-10 border-end">
                                <Row className="g-2 form">
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-2">
                                        <Input type="checkbox" />
                                      </Col>
                                      <Col className="col-10">
                                        <small>Saba Anjum Karim</small>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-4">
                                        <small>9876 532 412</small>
                                      </Col>
                                      <Col className="col-4">
                                        <small>Araria Bihar</small>
                                      </Col>
                                      <Col className="col-4">
                                        <small>Technology</small>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                              <Col className="col-2 text-center">
                                <Dropdown>
                                  <Dropdown.Toggle></Dropdown.Toggle>
                                </Dropdown>
                              </Col>
                            </Row>
                          </CardBody>
                          <CardFooter className="bg-white">
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-6">
                                  <FormLabel>Select Mentor</FormLabel>
                                  <Col className="col-12">
                                    <Input type="select">
                                      <option>Choose your option</option>
                                    </Input>
                                  </Col>
                                </Col>
                                <Col className="col-6">
                                  <Row className="g-2">
                                    <Col className="col-12 ">&nbsp;</Col>
                                    <Col className="col-12 font-size-11">
                                      <Button disabled>Assign M-friend</Button>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Col>
                          </CardFooter>
                        </Card>
                      </Row>
                    </Col>
                  </Col>
                </Col>
              </Row>
            </CardBody>
            <CardFooter>
              <Col className="col-12 form-group">
                <Row className="g-2 form">
                  <Col className="col-6 form-group">
                    <Button className="bg-white text-secondary border-secondary">
                      Close
                    </Button>
                  </Col>
                  <Col className="col-6 text-end form-group">
                    <Button>Done</Button>
                  </Col>
                </Row>
              </Col>
            </CardFooter>
          </Card>
        </Col>
      </Col>
    </>
  );
};

export default AssignMFriendButtonMObile;
