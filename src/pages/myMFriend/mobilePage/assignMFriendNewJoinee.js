import React from "react";
import { Button, Card, Col, Dropdown, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardBody, CardFooter, Input, Row } from "reactstrap";

const AssignMFriendNewJoinee = () => {
  return (
    <>
      <Col className="section">
        <Col className="container-fluid">
          <Row className="g-2 form">
            <Col className="col-12 form-group">
              <Col className="form-control">
                <b>New Joinee</b>
              </Col>
            </Col>
            <hr />
            <Col className="col-12 form-group">
              <Input placeholder="Search M-Friend by name, phone, email, location" />
            </Col>
            <Col className="col-12 form-group">
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
                                <Dropdown.Menu>
                                  <Dropdown.Item className="text-primary">
                                    Assign M_Friend
                                  </Dropdown.Item>
                                  <Dropdown.Item className="text-primary">
                                    View
                                  </Dropdown.Item>
                                  <Dropdown.Item className="text-primary">
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
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
                                  <Col className="col-12">
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
                                <Dropdown.Menu>
                                  <Dropdown.Item className="text-primary">
                                    Assign M_Friend
                                  </Dropdown.Item>
                                  <Dropdown.Item className="text-primary">
                                    View
                                  </Dropdown.Item>
                                  <Dropdown.Item className="text-primary">
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
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
                                  <Col className="col-12">
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
                                <Dropdown.Menu>
                                  <Dropdown.Item className="text-primary">
                                    Assign M_Friend
                                  </Dropdown.Item>
                                  <Dropdown.Item className="text-primary">
                                    View
                                  </Dropdown.Item>
                                  <Dropdown.Item className="text-primary">
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
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
                                  <Col className="col-12">
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
                                <Dropdown.Menu>
                                  <Dropdown.Item className="text-primary">
                                    Assign M_Friend
                                  </Dropdown.Item>
                                  <Dropdown.Item className="text-primary">
                                    View
                                  </Dropdown.Item>
                                  <Dropdown.Item className="text-primary">
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
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
                                  <Col className="col-12">
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
            </Col>
          </Row>
        </Col>
      </Col>
    </>
  );
};

export default AssignMFriendNewJoinee;
