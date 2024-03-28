import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import PDFImg from "../../assets/img/u23948.png";

const ParticipantFeedbackTable = () => {
  return (
    <>
      <Col sm="section">
        <Col className="container-fluid">
          <Col className="form-control border-0">
            <Row className="g-2 form">
              <Table striped hover>
                <thead>
                  <tr>
                    <th>Form type</th>
                    <th>Description</th>
                    <th>Link</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>PDF</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Introductory feedback form</b>
                    </td>
                    <td>
                      Lorem ipsum dolor sit amet, consectetur
                      <br /> adipiscing elit. Aenean euismod... Learn more
                    </td>
                    <td>
                      <Link to="/auth/login/introductoryparticipantfeedback">
                        <a>
                          <u>https://introductory-feedback-form</u>
                        </a>
                      </Link>
                    </td>
                    <td>
                      <Button className="bg-white text-secondary border-secondary">
                        Copy link
                      </Button>
                    </td>
                    <td>
                      <Button>Share</Button>
                    </td>
                    <td>
                      <img src={PDFImg} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>
                        Introductory feedback form <br />
                        (student wing)
                      </b>
                    </td>
                    <td>
                      Lorem ipsum dolor sit amet, consectetur
                      <br /> adipiscing elit. Aenean euismod... Learn more
                    </td>
                    <td>
                      <Link to="/auth/login/introductoryparticipantstudentfeedback">
                        <a>
                          <u>https://introductory-feedback-form</u>
                        </a>
                      </Link>
                    </td>
                    <td>
                      <Button className="bg-white text-secondary border-secondary">
                        Copy link
                      </Button>
                    </td>
                    <td>
                      <Button>Share</Button>
                    </td>
                    <td>
                      <img src={PDFImg} />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Col>
        </Col>
      </Col>
    </>
  );
};

const IntroductoryParticipantFeedbackForm = () => {
  return (
    <>
      <Col className="section">
        <Col className="container-fluid">
          <Col className="form-control border-0 bg-transparent">
            <Card>
              <CardHeader>
                <h4>Introductory Participant Feedback Form</h4>
              </CardHeader>
              <CardBody>
                <Row className="g-2 form">
                  <Col sm="12" className="form-group">
                    <ParticipantFeedbackTable />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Col>
      </Col>
    </>
  );
};

export default IntroductoryParticipantFeedbackForm;
