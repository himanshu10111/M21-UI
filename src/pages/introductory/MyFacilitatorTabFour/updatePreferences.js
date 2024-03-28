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

const UpdatePreferences = () => {
  return (
    <Col className=" container-fluid">
      <Row>
        <Card>
          <CardHeader>
            <Col sm="12">
              <Row>
                <Col sm="10">
                  <h1>Update Preference</h1>
                </Col>
                <Col sm="2" className="text-end">
                  <CloseButton />
                </Col>
              </Row>
            </Col>
          </CardHeader>
          <CardBody>
            <Col sm="12" className="container-fluid">
              <Row>
                <Col sm="12">
                  <Col sm="12">
                    <FormLabel>
                      Prefered language<sup className="text-danger">*</sup>
                    </FormLabel>
                  </Col>
                  <Col sm="12">
                    <Row>
                      <Col sm="4">
                        <Input type="select">
                          <option>Choose your option</option>
                          <option>A</option>
                          <option>A</option>
                          <option>A </option>
                        </Input>
                      </Col>
                      <Col sm="3">
                        <Row>
                          <Col sm="3">English</Col>
                          <Col sm="6">
                            <CloseButton />
                          </Col>
                        </Row>
                      </Col>
                      <Col sm="3">
                        <Row>
                          <Col sm="3">Hindi</Col>
                          <Col sm="6">
                            <CloseButton />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Col>
                <Col sm="12">
                  <Col sm="12">
                    <FormLabel>
                      My skilles<sup className="text-danger">*</sup>
                    </FormLabel>
                  </Col>
                  <Col sm="12">
                    <Row>
                      <Col sm="4">
                        <Input type="select">
                          <option>Choose your option</option>
                          <option>A</option>
                          <option>A</option>
                          <option>A </option>
                        </Input>
                      </Col>
                      <Col sm="3">
                        <Row>
                          <Col sm="3">Skill 1</Col>
                          <Col sm="6">
                            <CloseButton />
                          </Col>
                        </Row>
                      </Col>
                      <Col sm="3">
                        <Row>
                          <Col sm="3">Skill 2</Col>
                          <Col sm="6">
                            <CloseButton />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Col>
                <Col sm="12">
                  <Row>
                    <Col sm="12">
                      <FormLabel>Comment</FormLabel>
                      <Input
                        type="textarea"
                        placeholder="Writte your comment"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </CardBody>
          <CardFooter>
            <Col sm="12">
              <Row>
                <Col sm="6">&nbsp;</Col>
                <Col sm="6">
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
      </Row>
    </Col>
  );
};

export default UpdatePreferences;
