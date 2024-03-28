import React from "react";
import { Card, Col, Dropdown, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Row,
} from "reactstrap";

const AddMFriendMobile = () => {
  return (
    <>
      <Col className="section">
        <Col className="container-fluid px-0">
          <Col className="form-control border-0 px-0">
            <Card className="border-0 vh-100">
              <CardHeader className="border-0">
                <Col className="col-12form-group">
                  <Row className="g-2 form">
                    <Col className=" col-8 form-group">
                      <b>Add M-Friend</b>
                    </Col>
                    <Col className=" col-4 form-group">
                      <Link to="/auth/login/mymfriend">
                        <Button className="bg-white border-secondary text-secondary">
                          Back
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </CardHeader>
              <hr />
              <CardBody>
                <Col className="col-12 section">
                  <Col className="form-group">
                    <Row className="g-2 form">
                      <Col className="col-12 form-group">
                        <b>Select M21 member </b>
                      </Col>
                      <Col className="col-12 form-group">
                        <Input />
                      </Col>
                    </Row>
                  </Col>
                  <Col className="form-group">
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
                                      <FormLabel>Saba Anjum karim</FormLabel>
                                    </Col>
                                    <Col className="col-4 font-size-11">
                                      &Nbsp;
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
                                  <Dropdown.Item href="">View</Dropdown.Item>
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
                                      <FormLabel>Saba Anjum karim</FormLabel>
                                    </Col>
                                    <Col className="col-4 pe-0 font-size-11">
                                      &nbsp;
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
                                  <Dropdown.Item href="#">View</Dropdown.Item>
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
                </Col>
              </CardBody>
              <CardFooter className="fixed-bottom bg-transparent border-0">
                <Col className="section">
                  <Row className="g-2 form">
                    <Col className="col-6 form-group">
                      <Button className="bg-white border-secondary text-secondary">
                        Close
                      </Button>
                    </Col>
                    <Col className="col-6 form-group text-end">
                      <Button>Add m-Friend</Button>
                    </Col>
                  </Row>
                </Col>
              </CardFooter>
            </Card>
          </Col>
        </Col>
      </Col>
    </>
  );
};

export default AddMFriendMobile;
