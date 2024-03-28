import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { CardBody, CardHeader, Input } from "reactstrap";

const DownloadForm = () => {
  return (
    <>
      <Col className="section">
        <Col className="container-fluid">
          <Col className="form-control bg-transparent border-0">
            <Card className="rounded-0 border-0">
              <Row className="g-2 form">
                <Col sm="12">
                  <CardHeader className="bg-white">
                    <b>
                      <h4>Download Forms</h4>
                    </b>
                  </CardHeader>
                  <CardBody>
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="8" className="form-group rounded-5">
                          <Input placeholder="Search attendees by name, phone, email, location" />
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col>
                          <a>A</a>
                        </Col>
                        <Col>
                          <a>B</a>
                        </Col>
                        <Col>
                          <a>C</a>
                        </Col>
                        <Col>
                          <a>D</a>
                        </Col>
                        <Col>
                          <a>E</a>
                        </Col>
                        <Col>
                          <a>F</a>
                        </Col>
                      </Row>
                    </Col>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
        </Col>
      </Col>
    </>
  );
};

export default DownloadForm;
