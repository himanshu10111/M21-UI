import React from "react";
import { useState } from "react";
import { Accordion, Card, Col, Form, FormLabel, Row } from "react-bootstrap";
import { Input } from "reactstrap";
import ProfileCovidSafe from "../../../assets/img/MyProfile.png";
import ChattingIcon from "../../../assets/img/message-solid.svg";
import DocImg from "../../../assets/img/doctext.png";

const ViewMemberDetails = () => {
  const [isStatusChange, setIsStatusChange] = useState("Online");

  const FnChaneStatus = () => {
    setIsStatusChange("Offline");
  };

  return (
    <>
      <Col className="section">
        <Col className="container-fluid px-0">
          <Row className="g-2 form">
            <Col className="col-12">
              <h4>
                <small>View Member details</small>
              </h4>
            </Col>
            <Col className="col-12  form-control bg-light form-group border-0">
              <Row className="g-2 form">
                <Col className="col-2">
                  <img src={ProfileCovidSafe} className="w-100" />
                </Col>
                <Col className="col-10">
                  <Row className="g-2 form">
                    <Col className="col-12">
                      <Col className="col-12">
                        <h4>Tanweer Hasan</h4>
                      </Col>
                      <Col className="col-12">M21-1234</Col>
                    </Col>
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-4">
                          <Col className="col-12 border rounded-5 px-2">
                            <Row className="g-2 form-check">
                              <Col className="col-2">
                                <Input
                                  type="radio"
                                  id="btnswitch"
                                  onClick={FnChaneStatus}
                                />
                              </Col>
                              <Col
                                className="col-10"
                                defaultValue={isStatusChange}
                                id="statusChange"
                                onChange={setIsStatusChange}
                              >
                                Online
                              </Col>
                            </Row>
                          </Col>
                        </Col>
                        <Col className="col-2 border rounded-5 text-center pt-1 ">
                          <img src={ChattingIcon} className="w-50" />
                        </Col>
                        <Col className="col-6">
                          <Input type="select">
                            <option>Sabbatical leave</option>
                          </Input>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col className="col-12 border-bottom ">
              <Row className="g-2 form">
                <Col className="col-12">
                  <FormLabel>Mobile Number</FormLabel>
                </Col>
                <Col className="col-12">
                  <Row className="g-2 form">
                    <Col className="col-4">
                      <b>
                        <small>+91 9876 532 412</small>
                      </b>
                    </Col>
                    <Col className="col-1">
                      <img src={DocImg} />
                    </Col>
                    <Col className="col-6 form-check">
                      <Input type="checkbox" />
                      <b>
                        <small>Whatsapp number too</small>
                      </b>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col className="col-12">
              <Row className="g-2 form">
                <Col className="col-12">
                  <small>Email</small>
                </Col>
                <Col className="col-12">
                  <Row className="g-2 form">
                    <Col className="col-8">
                      <FormLabel>tanweerhasan@gmail.com</FormLabel>
                    </Col>
                    <Col className="col-2">Primary</Col>
                    <Col className="col-1">
                      {" "}
                      <img src={DocImg} />
                    </Col>
                  </Row>
                </Col>
                <Col className="col-12">
                  <Row className="g-2 form">
                    <Col className="col-8">
                      <FormLabel>tanweerhasan@gmail.com</FormLabel>
                    </Col>
                    <Col className="col-2">Primary</Col>
                    <Col className="col-1">
                      {" "}
                      <img src={DocImg} />
                    </Col>
                  </Row>
                </Col>
                <Col className="col-12">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Address details</Accordion.Header>
                      <Accordion.Body></Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
                <Col className="col-12">
                  <Accordion>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Additional details</Accordion.Header>
                      <Accordion.Body></Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
                <Col className="col-12">
                  <Accordion>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Education details</Accordion.Header>
                      <Accordion.Body></Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
                <Col className="col-12">
                  <Accordion>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Job details</Accordion.Header>
                      <Accordion.Body></Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
                <Col className="col-12">
                  <Accordion>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Diversity details</Accordion.Header>
                      <Accordion.Body></Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Col>
    </>
  );
};

export default ViewMemberDetails;
