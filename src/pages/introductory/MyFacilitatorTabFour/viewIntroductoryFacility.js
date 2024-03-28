import React from "react";
import { Button, Card, CloseButton, Col, FormLabel } from "react-bootstrap";
import { CardBody, CardFooter, CardHeader, Input, Row } from "reactstrap";

const ViewFacility = () => {
  return (
    <>
      <Col className="container-fluid">
        <Row>
          <Card>
            <CardHeader>
              <Col sm="12">
                <Row>
                  <Col sm="10">
                    <Row>
                      <Col sm="12">
                        <h5>Introductory Meeting Details</h5>
                      </Col>
                      <Col sm="12">
                        <Row>
                          <Col sm="8">IM_SN_DN_YYYYMMDD</Col>
                          <Col sm="4">
                            <label className="text-success">Approved</label>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="2">
                    <CloseButton />
                  </Col>
                </Row>
              </Col>
            </CardHeader>
            <CardBody className="g-2 form-group">
              <Card>
                <CardBody>
                  <Row className="g-2 form-group">
                    <Col sm="12">
                      <Row className="g-2 form-group">
                        <Col sm="6">
                          <FormLabel>submitted by</FormLabel>
                          <Col sm="12">Name surname(M21ID)</Col>
                        </Col>
                        <Col sm="6">
                          <FormLabel>Submitted date</FormLabel>
                          <Col sm="12">DD-MM-YYYY</Col>
                        </Col>
                      </Row>
                    </Col>
                    <hr />
                    <Col sm="12">
                      <Row className="g-2 from-group">
                        <Col sm="2">
                          <FormLabel>introductory type</FormLabel>
                          <Col sm="12">Online</Col>
                        </Col>
                        <Col sm="2">
                          <FormLabel>M21 wing</FormLabel>
                          <Col sm="12">Technology</Col>
                        </Col>
                        <Col sm="2">
                          <FormLabel>Special introductory drive</FormLabel>
                          <Col sm="12">Womens</Col>
                        </Col>
                        <Col sm="2">
                          <FormLabel>Language</FormLabel>
                          <Col sm="12">Hindi</Col>
                        </Col>
                        <Col sm="2">
                          <FormLabel>Introductory level</FormLabel>
                          <Col sm="12">Country - India</Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12">
                      <Row>
                        <Col sm="6">
                          <FormLabel>Meeting Date & Time</FormLabel>
                          <Col sm="12">
                            Fri, 31 Dec 2021 | 10:00 AM - 01:00 PM
                          </Col>
                        </Col>
                        <Col sm="6">
                          <FormLabel>Location</FormLabel>
                          <Col sm="12">Hotel The Avalon, Malviya Nagar</Col>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Col sm="12">
                    <Row>
                      <Col sm="6">
                        <FormLabel>Introductory 1</FormLabel>
                        <Col sm="12">Amol Dhkaday</Col>
                      </Col>
                      <Col sm="6">
                        <FormLabel>Introducer 2</FormLabel>
                        <Col sm="12">Tanweer</Col>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="12">
                    <Row className="g-2 form-group">
                      <FormLabel>Comment</FormLabel>
                      Facilitator (Amol Dhakadey) is available for first half
                      only
                    </Row>
                  </Col>
                </CardBody>
              </Card>
            </CardBody>
            <CardFooter>
              <Col sm="12">
                <Row className="g-2 form-group">
                  <Col sm="8">&nbsp;</Col>
                  <Col sm="4">
                    <Row>
                      <Col sm="6">
                        <Button variant="outline-secondary">Cancel</Button>
                      </Col>
                      <Col sm="6">
                        <Button variant="primary">Add Attendees</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </CardFooter>
          </Card>
        </Row>
      </Col>
    </>
  );
};

export default ViewFacility;
