import React from "react";
import {
  Button,
  Card,
  CloseButton,
  Col,
  FormLabel,
  Row,
} from "react-bootstrap";
import { CardBody, CardFooter, CardHeader, Input } from "reactstrap";
//img section
import DocumentFile from "../../../../assets/img/doctext.png";
import MemberImg from "../../../../assets/img/latter.png";
import { Link } from "react-router-dom";
import ImgOfMyFriend from "../../../../assets/img/u6611.png";
import ChatImgMyFriend from "../../../../assets/img/u6763.png";

const ViewIntroducerDetails = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <Col sm="12">
            <Row>
              <Col sm="8" className="me-auto">
                View Introducer Details
              </Col>
              <Col sm="4" className="text-end">
                <CloseButton />
              </Col>
            </Row>
          </Col>
        </CardHeader>
        <CardBody>
          <Row className="g-2 form">
            <Col sm="12">
              <Row className="g-2 form">
                <Col sm="2">
                  <Row className="g-2 form">
                    <Col sm="12">
                      <img src={ImgOfMyFriend} />
                    </Col>
                    <Col sm="12">
                      <Row className="g-2 form">
                        <Col sm="6">
                          m21 ID
                          <br />
                          <b>12345</b>
                        </Col>
                        <Col sm="6">
                          <Button variant="success">Active</Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col sm="10">
                  <Row className="g-2 form">
                    <Col sm="12" className="form-group form-control border-0">
                      <FormLabel>Name</FormLabel>
                    </Col>
                    <hr />
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="6">
                          <Row className="g-2 form">
                            <Col sm="6">
                              <FormLabel>
                                <h4>Tanweer Hasan</h4>
                              </FormLabel>
                            </Col>
                            <Col sm="2" className="text-center">
                              <Button small variant="success">
                                Active
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="6">&nbsp;</Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="form-group">
                      <FormLabel>Contact Details</FormLabel>
                    </Col>
                    <hr />
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="4">
                          <Row className="g-2 form">
                            <Col sm="12">
                              <FormLabel>Mobile Number</FormLabel>
                            </Col>
                            <Col sm="12">
                              <FormLabel>+91 9876 412 532</FormLabel>
                            </Col>
                            <Col sm="12" className="form-check">
                              <Input type="checkbox" />
                              <FormLabel>Whatsapp Number too</FormLabel>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="4">
                          <Row className="g-2 form">
                            <Col sm="12">
                              <FormLabel>emial</FormLabel>
                            </Col>
                            <Col sm="12">
                              <b>prafullbhagat@gmail.com</b>
                            </Col>
                            <Col sm="12">
                              <b>prafull@gmail.com</b>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="4">
                          <Row className="g-2 form">
                            <Col sm="12">&nbsp;</Col>
                            <Col sm="12">
                              <FormLabel>Primary</FormLabel>
                            </Col>
                            <Col sm="12">
                              <FormLabel>Alternate</FormLabel>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="form-group">
                      <FormLabel>Address Details</FormLabel>
                    </Col>
                    <hr />
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="6">
                          <Row className="g-2 form">
                            <Col sm="12">
                              <FormLabel>present address</FormLabel>
                            </Col>
                            <Col sm="12">
                              <b>
                                Flat no. 1891
                                <br />
                                Bharat Bhavan
                                <br />
                                Near Victory Tower
                                <br />
                                14 Main Road, 02nd Sector,
                                <br />
                                Vijay Nagar, Bangalore, Karnataka
                                <br />
                                560100
                              </b>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="6">
                          <Row className="g-2 form">
                            <Col sm="12">
                              <FormLabel>permanent address</FormLabel>
                            </Col>
                            <Col sm="12">
                              <b>
                                Flat no. 1891
                                <br />
                                Bharat Bhavan
                                <br />
                                Near Victory Tower
                                <br />
                                14 Main Road, 02nd Sector,
                                <br />
                                Vijay Nagar, Bangalore, Karnataka
                                <br />
                                560100
                              </b>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="form-group">
                      Additional Details
                    </Col>
                    <hr />
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="6" className="form-group">
                          <Row className="g-2 form">
                            <Col sm="12">
                              <FormLabel>Gender</FormLabel>
                            </Col>
                            <Col sm="12">
                              <b>Male</b>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="6">
                          <Row className="g-2 form">
                            <Col sm="12">
                              <FormLabel>Date of birth</FormLabel>
                            </Col>
                            <Col sm="12">
                              <FormLabel>
                                <b>DD-MM-YYYY</b>
                              </FormLabel>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>

                    <Col sm="12" className="form-group">
                      <FormLabel>Education Details</FormLabel>
                    </Col>
                    <hr />
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="6">
                          <Row className="g-2 form">
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="4" className="form-group">
                                  <FormLabel>
                                    <b>B.E(Mechanical)</b>
                                  </FormLabel>
                                </Col>
                                <Col sm="6" className="form-group">
                                  <FormLabel>NIT,Nagpur Maharashtra</FormLabel>
                                </Col>
                              </Row>
                            </Col>
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="4" className="form-group">
                                  <FormLabel>
                                    <b>MBA(Finance)</b>
                                  </FormLabel>
                                </Col>
                                <Col sm="6" className="form-group">
                                  <FormLabel>
                                    MIlind University, Nagpur Maharashtra
                                  </FormLabel>
                                </Col>
                              </Row>
                            </Col>
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="4" className="form-group">
                                  <FormLabel>
                                    <b>PhD(Finance)</b>
                                  </FormLabel>
                                </Col>
                                <Col sm="6" className="form-group">
                                  <FormLabel>
                                    MIlind University, Nagpur Maharashtra
                                  </FormLabel>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="4">&nbsp;</Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="form-group">
                      <FormLabel>Job Details</FormLabel>
                    </Col>
                    <hr />
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="4">
                          <Row className="g-2 form">
                            <Col sm="12">
                              <FormLabel>Occupation</FormLabel>
                            </Col>
                            <Col sm="12">
                              <FormLabel>
                                <b>Service</b>
                              </FormLabel>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="4">
                          <Row className="g-2 form">
                            <Col sm="12">
                              <FormLabel>Company/Bussiness name</FormLabel>
                            </Col>
                            <Col sm="12">
                              <FormLabel>
                                informatica Bussiness Solutions Private Limited
                              </FormLabel>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="4">
                          <Row className="g-2 form">
                            <Col sm="12">
                              <FormLabel>Designation</FormLabel>
                            </Col>
                            <Col sm="12">
                              <FormLabel>Senior Software Engineer</FormLabel>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12">Diversity Details</Col>
                    <hr />
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="4">
                          <Row className="g-2 form">
                            <Col sm="12">
                              <FormLabel>Nationality</FormLabel>
                            </Col>
                            <Col sm="12">
                              <b>Indiam</b>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="4">
                          <Row className="g-2 form">
                            <Col sm="12">
                              <FormLabel> Religion practiced</FormLabel>
                            </Col>
                            <Col sm="12">
                              <FormLabel>
                                <b>Atheist</b>
                              </FormLabel>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="4">
                          <Row className="g-2 form">
                            <Col sm="12">
                              <FormLabel>Social Category</FormLabel>
                            </Col>
                            <Col sm="12">
                              <FormLabel>
                                <b>Other Bhujan</b>
                              </FormLabel>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
          <Col sm="12">
            <Row>
              <Col sm="8" className="me-auto">
                &nbsp;
              </Col>
              <Col sm="4">
                <Button variant="outline-secondary">Close</Button>
              </Col>
            </Row>
          </Col>
        </CardFooter>
      </Card>
    </>
  );
};

export default ViewIntroducerDetails;
