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

const UpdateAvailabilty = () => {
  return (
    <>
      <Col className="conatiner-fluid">
        <Row>
          <Col className="" sm="12">
            <Card>
              <CardHeader>
                <Col sm="12">
                  <Row>
                    <Col sm="6">
                      <h5>Update AVAILABILITY</h5>
                    </Col>
                    <Col sm="6" className="text-end">
                      <CloseButton />
                    </Col>
                  </Row>
                </Col>
              </CardHeader>
              <CardBody>
                <Row className="g-2 form-group">
                  <Col sm="12">
                    <Row className="g-2 form-group">
                      <Col sm="1">I am</Col>
                      <Col sm="4">
                        <Input type="select">
                          <option>Available</option>
                          <option>UnAvailable</option>
                        </Input>
                      </Col>
                      <Col sm="6">for Movement21 Introductory session,</Col>
                    </Row>
                  </Col>
                  <Col sm="12">
                    <Row className="g-2">
                      <Col sm="4">
                        <Row>
                          <Col sm="3">From</Col>
                          <Col sm="6">
                            <Input type="date" />
                          </Col>
                        </Row>
                      </Col>
                      <Col sm="4">
                        <Row>
                          <Col sm="3" className="text-end">
                            To
                          </Col>
                          <Col sm="6">
                            <Input type="date" />
                          </Col>
                        </Row>
                      </Col>
                      <Col sm="4">
                        <Row>
                          <Col className="form-check">
                            <Input
                              checked
                              type="checkbox"
                              className="bg-success"
                            />
                            All day
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="12">
                    <Row>
                      <Col sm="4">
                        <Row>
                          <Col sm="3">Between</Col>
                          <Col sm="6">
                            <Input type="time" />
                          </Col>
                        </Row>
                      </Col>
                      <Col sm="4">
                        <Row>
                          <Col sm="3" className="text-end">
                            To
                          </Col>
                          <Col sm="6">
                            <Input type="time" />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="12">
                    <Row>
                      <FormLabel>Comment</FormLabel>
                      <Col sm="12">
                        <Input
                          type="textarea"
                          placeholder="Type your comment here"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <Col sm="12">
                  <Row>
                    <Col sm="8">&nbsp;</Col>
                    <Col sm="4">
                      <Row>
                        <Col sm="6">
                          <Button variant="outline-secondary">Cancel</Button>
                        </Col>
                        <Col sm="6">
                          <Button variant="primary">Update</Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default UpdateAvailabilty;
