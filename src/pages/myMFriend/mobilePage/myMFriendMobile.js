import React from "react";
import { Button, Dropdown, FormLabel, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Input } from "reactstrap";

const MyMFriendMobile = () => {
  return (
    <>
      <Col className="section">
        <Col className="container-fluid">
          <Col className="form-contro; border-0">
            <Col className="form-group">
              <Row className="g-2 form">
                <Card className="border-0 border-start-primary">
                  <CardBody className="px-0">
                    <Col className="col-12 form-group">
                      <Row className="g-2 form">
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-8">
                              <b>M-Friends Assigned to me</b>
                            </Col>
                            <Col className="col-4">
                              <Link to="/auth/login/mymfriend/addmfriend">
                                <Button className="font-size-11 text-uppercase ">
                                  Add M-Friend
                                </Button>
                              </Link>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="col-12">
                          <Input></Input>
                        </Col>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Card className="shadow">
                              <CardBody className="px-1">
                                <Row className="g-2 form">
                                  <Col className="col-11">
                                    <Row className="lh-1 form">
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-1">
                                            <Input type="checkbox" />
                                          </Col>
                                          <Col className="col-6">
                                            <FormLabel>
                                              Saba Anjum karim
                                            </FormLabel>
                                          </Col>
                                          <Col className="col-4 font-size-11">
                                            Assigned by: Myself
                                          </Col>
                                        </Row>
                                      </Col>
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-1">&nbsp;</Col>
                                          <Col className="col-4">
                                            <sub>9876 532 412</sub>
                                          </Col>
                                          <Col className="col-4 pe-0">
                                            <sub>Araria,Bihar</sub>
                                          </Col>
                                          <Col className="col-3 pe-0">
                                            <sub>Technology</sub>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-1">
                                    <Dropdown className="bg-transparent border-0">
                                      <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item href="/auth/login/orgnizationmapping/viewregistration">
                                          View
                                        </Dropdown.Item>
                                        <Dropdown.Item>Review</Dropdown.Item>
                                        <Dropdown.Item>Rejected</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </Col>
                                </Row>
                              </CardBody>
                            </Card>
                            <Card className="shadow">
                              <CardBody className="px-1">
                                <Row className="g-2 form">
                                  <Col className="col-11">
                                    <Row className="lh-1 form">
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-1">
                                            <Input type="checkbox" />
                                          </Col>
                                          <Col className="col-6">
                                            <FormLabel>
                                              Saba Anjum karim
                                            </FormLabel>
                                          </Col>
                                          <Col className="col-4 font-size-11">
                                            Assigned by: Admin
                                          </Col>
                                        </Row>
                                      </Col>
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-1">&nbsp;</Col>
                                          <Col className="col-4">
                                            <sub>9876 532 412</sub>
                                          </Col>
                                          <Col className="col-4 font-size-11">
                                            <sub>Araria,Bihar</sub>
                                          </Col>
                                          <Col className="col-3 pe-0">
                                            <sub>Technology</sub>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-1">
                                    <Dropdown className="bg-transparent border-0">
                                      <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item href="">
                                          View
                                        </Dropdown.Item>
                                        <Dropdown.Item>Review</Dropdown.Item>
                                        <Dropdown.Item>Rejected</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </Col>
                                </Row>
                              </CardBody>
                            </Card>
                            <Card className="shadow">
                              <CardBody className="px-1">
                                <Row className="g-2 form">
                                  <Col className="col-11">
                                    <Row className="lh-1 form">
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-1">
                                            <Input type="checkbox" />
                                          </Col>
                                          <Col className="col-6">
                                            <FormLabel>
                                              Saba Anjum karim
                                            </FormLabel>
                                          </Col>
                                          <Col className="col-4 pe-0 font-size-11">
                                            Assigned by:Admin
                                          </Col>
                                        </Row>
                                      </Col>
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-1">&nbsp;</Col>
                                          <Col className="col-4">
                                            <sub>9876 532 412</sub>
                                          </Col>
                                          <Col className="col-4 pe-0">
                                            <sub>Araria,Bihar</sub>
                                          </Col>
                                          <Col className="col-3 pe-0">
                                            <sub>Technology</sub>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-1">
                                    <Dropdown className="bg-transparent border-0">
                                      <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item href="#">
                                          View
                                        </Dropdown.Item>
                                        <Dropdown.Item>Review</Dropdown.Item>
                                        <Dropdown.Item>Rejected</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </Col>
                                </Row>
                              </CardBody>
                            </Card>
                            <Card className="shadow">
                              <CardBody className="px-1">
                                <Row className="g-2 form">
                                  <Col className="col-11">
                                    <Row className="lh-1 form">
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-1">
                                            <Input type="checkbox" />
                                          </Col>
                                          <Col className="col-6">
                                            <FormLabel>
                                              Saba Anjum karim
                                            </FormLabel>
                                          </Col>
                                          <Col className="col-4 font-size-11">
                                            Assigned by: Admin
                                          </Col>
                                        </Row>
                                      </Col>
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-1">&nbsp;</Col>
                                          <Col className="col-4">
                                            <sub>9876 532 412</sub>
                                          </Col>
                                          <Col className="col-4 pe-0">
                                            <sub>Araria,Bihar</sub>
                                          </Col>
                                          <Col className="col-3 pe-0">
                                            <sub>Technology</sub>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-1">
                                    <Dropdown className="bg-transparent border-0">
                                      <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item href="#">
                                          View
                                        </Dropdown.Item>
                                        <Dropdown.Item>Review</Dropdown.Item>
                                        <Dropdown.Item>Rejected</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </Col>
                                </Row>
                              </CardBody>
                            </Card>
                            <Card className="shadow">
                              <CardBody className="px-1">
                                <Row className="g-2 form">
                                  <Col className="col-11">
                                    <Row className="lh-1 form">
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-1">
                                            <Input type="checkbox" />
                                          </Col>
                                          <Col className="col-7">
                                            <FormLabel>
                                              Saba Anjum karim
                                            </FormLabel>
                                          </Col>
                                          <Col className="col-4 font-size-11">
                                            Assigned by: Admin
                                          </Col>
                                        </Row>
                                      </Col>
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-1">&nbsp;</Col>
                                          <Col className="col-4">
                                            <sub>9876 532 412</sub>
                                          </Col>
                                          <Col className="col-4 pe-0">
                                            <sub>Araria,Bihar</sub>
                                          </Col>
                                          <Col className="col-3 pe-0">
                                            <sub>Technology</sub>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-1">
                                    <Dropdown className="bg-transparent border-0">
                                      <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item href="#">
                                          View
                                        </Dropdown.Item>
                                        <Dropdown.Item>Review</Dropdown.Item>
                                        <Dropdown.Item>Rejected</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </Col>
                                </Row>
                              </CardBody>
                            </Card>
                            <Card className="shadow">
                              <CardBody className="px-1">
                                <Row className="g-2 form">
                                  <Col className="col-11">
                                    <Row className="lh-1 form">
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-1">
                                            <Input type="checkbox" />
                                          </Col>
                                          <Col className="col-7">
                                            <FormLabel>
                                              Saba Anjum karim
                                            </FormLabel>
                                          </Col>
                                          <Col className="col-4 font-size-11">
                                            Assigned by:Admin
                                          </Col>
                                        </Row>
                                      </Col>
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-1">&nbsp;</Col>
                                          <Col className="col-4">
                                            <sub>9876 532 412</sub>
                                          </Col>
                                          <Col className="col-4 pe-0">
                                            <sub>Araria,Bihar</sub>
                                          </Col>
                                          <Col className="col-3 pe-0">
                                            <sub>Technology</sub>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-1">
                                    <Dropdown className="bg-transparent border-0">
                                      <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item href="#">
                                          View
                                        </Dropdown.Item>
                                        <Dropdown.Item>Review</Dropdown.Item>
                                        <Dropdown.Item>Rejected</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </Col>
                                </Row>
                              </CardBody>
                            </Card>
                            <Card className="shadow">
                              <CardBody className="px-1">
                                <Row className="g-2 form">
                                  <Col className="col-11">
                                    <Row className="lh-1 form">
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-1">
                                            <Input type="checkbox" />
                                          </Col>
                                          <Col className="col-7">
                                            <FormLabel>
                                              Saba Anjum karim
                                            </FormLabel>
                                          </Col>
                                          <Col className="col-4 font-size-11">
                                            Assigned by:Admin
                                          </Col>
                                        </Row>
                                      </Col>
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-1">&nbsp;</Col>
                                          <Col className="col-4">
                                            <sub>9876 532 412</sub>
                                          </Col>
                                          <Col className="col-4 pe-0">
                                            <sub>Araria,Bihar</sub>
                                          </Col>
                                          <Col className="col-3 pe-0">
                                            <sub>Technology</sub>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-1">
                                    <Dropdown className="bg-transparent border-0">
                                      <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item href="#">
                                          View
                                        </Dropdown.Item>
                                        <Dropdown.Item>Review</Dropdown.Item>
                                        <Dropdown.Item>Rejected</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </Col>
                                </Row>
                              </CardBody>
                            </Card>
                            <Card className="shadow">
                              <CardBody className="px-1">
                                <Row className="g-2 form">
                                  <Col className="col-11">
                                    <Row className="lh-1 form">
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-1">
                                            <Input type="checkbox" />
                                          </Col>
                                          <Col className="col-7">
                                            <FormLabel>
                                              Saba Anjum karim
                                            </FormLabel>
                                          </Col>
                                          <Col className="col-4 font-size-11">
                                            Assigned by:Admin
                                          </Col>
                                        </Row>
                                      </Col>
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-1">&nbsp;</Col>
                                          <Col className="col-4">
                                            <sub>9876 532 412</sub>
                                          </Col>
                                          <Col className="col-4 pe-0">
                                            <sub>Araria,Bihar</sub>
                                          </Col>
                                          <Col className="col-3 pe-0">
                                            <sub>Technology</sub>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-1">
                                    <Dropdown className="bg-transparent border-0">
                                      <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item href="#">
                                          View
                                        </Dropdown.Item>
                                        <Dropdown.Item>Review</Dropdown.Item>
                                        <Dropdown.Item>Rejected</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </Col>
                                </Row>
                              </CardBody>
                            </Card>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </CardBody>
                </Card>
              </Row>
            </Col>
          </Col>
        </Col>
      </Col>
    </>
  );
};

export default MyMFriendMobile;
