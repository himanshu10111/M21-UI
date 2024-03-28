import React from "react";
import { Button, Card, Col, Dropdown, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardBody, CardFooter, Input, Row } from "reactstrap";

const AssignMFriendMobile = () => {
  return (
    <>
      <Col className="setion">
        <Col className="container-fluid">
          <Row className="g-2 form">
            <Col className="col-12 form-group">
              <Row className="g-2 form">
                <Col className="col-6 form-group">
                  <Col className="form-control border-0">
                    <b>Assigned M-Friend</b>
                  </Col>
                </Col>
                <Col className="col-6 form-group">
                  <Col className="form-control border-0">
                    <Link to="/auth/login/mymfriend/assignmfriend/assignmfriendbutton">
                      <Button>Assign M-Friend</Button>
                    </Link>
                  </Col>
                </Col>
              </Row>
            </Col>
            <hr />
            <Col className="col-12 form-group">
              <Row className="g-2 form">
                <Card>
                  <CardBody>
                    <Row className="g-1 form">
                      <Col className="col-1">
                        <Input type="checkbox" />
                      </Col>
                      <Col className="col-10 px-0">
                        <Row className="g-1 form">
                          <Col className="col-12">
                            <Row className="g-2 form">
                              <Col className="col-8 form-group">
                                <Col className="form-control font-size-11 border-0">
                                  <FormLabel>
                                    <a className="text-primary">
                                      Saba Anjum Karim
                                    </a>
                                  </FormLabel>
                                </Col>
                              </Col>
                              <Col className="col-4 font-size-11 form-group">
                                <Col className="form-control border-0">
                                  <FormLabel>
                                    <a className="text-success">Approved</a>
                                  </FormLabel>
                                </Col>
                              </Col>
                            </Row>
                          </Col>
                          <Col className="col-12">
                            <Row className="g-1 form">
                              <Col className="col-6 font-size-11  form-group">
                                9875 632 415
                              </Col>
                              <Col className="col-3 font-size-11 form-group">
                                Araria,Bihar
                              </Col>
                              <Col className="col-3 font-size-11 form-group">
                                Technology
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="col-1">
                        <Dropdown>
                          <Dropdown.Toggle></Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Approved</Dropdown.Item>
                            <Dropdown.Item>Rejected</Dropdown.Item>
                            <Dropdown.Item>Awaiting</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="bg-white">
                    <Col className="section">
                      <Row className="g-1 form">
                        <Col className="col-4 form-group">
                          <Col className="form-control font-size-11 border-0">
                            <FormLabel>New Joinee</FormLabel>
                          </Col>
                        </Col>
                        <Col className="col-8 font-size-11 form-group">
                          <Col className="form-control border-0">
                            <FormLabel>Assigned to: Ruchi Bagde</FormLabel>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                  </CardFooter>
                </Card>
                <Card>
                  <CardBody>
                    <Row className="g-1 form">
                      <Col className="col-1">
                        <Input type="checkbox" />
                      </Col>
                      <Col className="col-10 px-0">
                        <Row className="g-1 form">
                          <Col className="col-12">
                            <Row className="g-2 form">
                              <Col className="col-8 form-group">
                                <Col className="form-control font-size-11 border-0">
                                  <FormLabel>
                                    <a className="text-primary">
                                      Saba Anjum Karim
                                    </a>
                                  </FormLabel>
                                </Col>
                              </Col>
                              <Col className="col-4 font-size-11 form-group">
                                <Col className="form-control border-0">
                                  <FormLabel>
                                    <a className="text-danger">Rejected</a>
                                  </FormLabel>
                                </Col>
                              </Col>
                            </Row>
                          </Col>
                          <Col className="col-12">
                            <Row className="g-1 form">
                              <Col className="col-6 font-size-11  form-group">
                                9875 632 415
                              </Col>
                              <Col className="col-3 font-size-11 form-group">
                                Araria,Bihar
                              </Col>
                              <Col className="col-3 font-size-11 form-group">
                                Technology
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="col-1">
                        <Dropdown>
                          <Dropdown.Toggle></Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Approved</Dropdown.Item>
                            <Dropdown.Item>Rejected</Dropdown.Item>
                            <Dropdown.Item>Awaiting</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="bg-white">
                    <Col className="section">
                      <Row className="g-1 form">
                        <Col className="col-4 form-group">
                          <Col className="form-control font-size-11 border-0">
                            <FormLabel>
                              <Button variant="success">Active</Button>
                            </FormLabel>
                          </Col>
                        </Col>
                        <Col className="col-8 font-size-11 form-group">
                          <Col className="form-control border-0">
                            <FormLabel>Assigned to: Ruchi Bagde</FormLabel>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                  </CardFooter>
                </Card>
                <Card>
                  <CardBody>
                    <Row className="g-1 form">
                      <Col className="col-1">
                        <Input type="checkbox" />
                      </Col>
                      <Col className="col-10 px-0">
                        <Row className="g-1 form">
                          <Col className="col-12">
                            <Row className="g-2 form">
                              <Col className="col-8 form-group">
                                <Col className="form-control font-size-11 border-0">
                                  <FormLabel>
                                    <a className="text-primary">
                                      Saba Anjum Karim
                                    </a>
                                  </FormLabel>
                                </Col>
                              </Col>
                              <Col className="col-4 font-size-11 form-group">
                                <Col className="form-control border-0">
                                  <FormLabel>
                                    <a className="">Awaiting</a>
                                  </FormLabel>
                                </Col>
                              </Col>
                            </Row>
                          </Col>
                          <Col className="col-12">
                            <Row className="g-1 form">
                              <Col className="col-6 font-size-11  form-group">
                                9875 632 415
                              </Col>
                              <Col className="col-3 font-size-11 form-group">
                                Araria,Bihar
                              </Col>
                              <Col className="col-3 font-size-11 form-group">
                                Technology
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="col-1">
                        <Dropdown>
                          <Dropdown.Toggle></Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Approved</Dropdown.Item>
                            <Dropdown.Item>Rejected</Dropdown.Item>
                            <Dropdown.Item>Awaiting</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="bg-white">
                    <Col className="section">
                      <Row className="g-1 form">
                        <Col className="col-4 form-group">
                          <Col className="form-control font-size-11 border-0">
                            <FormLabel>
                              <Button variant="danger">inactive</Button>
                            </FormLabel>
                          </Col>
                        </Col>
                        <Col className="col-8 font-size-11 form-group">
                          <Col className="form-control border-0">
                            <FormLabel>Assigned to: Ruchi Bagde</FormLabel>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                  </CardFooter>
                </Card>
              </Row>
            </Col>
          </Row>
        </Col>
      </Col>
    </>
  );
};

export default AssignMFriendMobile;
