import React from "react";
import { Col, FormLabel, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card, CardBody, Container } from "reactstrap";
import ArrowRightPointing from "../../assets/img/chevronrightpointing.png";
import Profile from "../../assets/img/Profile-Pic.png";

const ProfileNavList = () => {
  return (
    <>
      <Col className="section">
        <Container fluid>
          <Row className="g-2 form">
            <Col className="col-12 border-bottom form-control form-group border-0">
              <FormLabel className="font-size-14 fw-bold Ri-text-color-main-menu ">

                My Profile
              </FormLabel>
            </Col>
            <Col className="col-12">
              <Row className="g-2 form">
                <Col className="col-3 text-center">
                  <img src={Profile} className="w-75" />
                </Col>
                <Col className="col-8 text-center">
                  <Row className="lh-1 form">
                    <Col className="col-12">&nbsp;</Col>
                    <Col className="col-12">
                      <FormLabel className="font-size-18 fw-bold Ri-text-color-main-menu">

                        Prafull Bhagat
                      </FormLabel>


                    </Col>
                    <Col className="col-12">
                      <FormLabel className="font-size-12 fw-normal Ri-text-color-sub-menu">

                        M21-2345
                      </FormLabel>
                    </Col>
                  </Row>

                </Col>
              </Row>
            </Col>
            <Col className="col-12">
              <Container>
                <Row className="g-3 form">
                  <CardBody >
                    <Col className="col-12 p-3 shadow rounded-3">
                      <Row className="g-2 form">
                        <Link className="text-decoration-none" to="/auth/login/profile/personaldetails">
                          <Col className="form-control form-group  border-0 col-12">
                            <Row>
                              <Col className="col-10">
                                <FormLabel className="font-size-14 fw-bold Ri-text-color-main-menu">

                                  Personal Details
                                </FormLabel>
                              </Col>
                              <Col className="col-2">
                                <img
                                  src={ArrowRightPointing}
                                  alt="arrow right point"
                                />
                              </Col>
                            </Row>
                          </Col>
                        </Link>
                      </Row>
                    </Col>
                  </CardBody>
                  <CardBody className="">
                    <Col className="col-12 p-3 shadow">
                      <Row className="g-2 form">
                        <Link className="text-decoration-none" to="/auth/login/profile/m21organization">
                          <Col className="form-control form-group  border-0 col-12">
                            <Row>
                              <Col className="col-10 bold">
                                <FormLabel className="font-size-14 fw-bold Ri-text-color-main-menu">

                                  M21 Organization
                                </FormLabel>
                              </Col>
                              <Col className="col-2">
                                <img
                                  src={ArrowRightPointing}
                                  alt="arrow right point"
                                />
                              </Col>
                            </Row>
                          </Col>
                        </Link>
                      </Row>
                    </Col>
                  </CardBody>
                  <CardBody className="">
                    <Col className="col-12 p-3 shadow">
                      <Row className="g-2 form">
                        <Link className="text-decoration-none" to="/auth/login/profile/socialcontribution">
                          <Col className="form-control form-group  border-0 col-12">
                            <Row>
                              <Col className="col-10 bold">
                                <FormLabel className="font-size-14 fw-bold Ri-text-color-main-menu">

                                  Social Contribution
                                </FormLabel>
                              </Col>
                              <Col className="col-2">
                                <img
                                  src={ArrowRightPointing}
                                  alt="arrow right point"
                                />
                              </Col>
                            </Row>
                          </Col>
                        </Link>
                      </Row>
                    </Col>
                  </CardBody>
                  <CardBody className="">
                    <Col className="col-12 p-3 shadow">
                      <Row className="g-2 form">
                        <Link className="text-decoration-none" to="/auth/login/profile/healthdetails">
                          <Col className="form-control form-group  border-0 col-12">
                            <Row>
                              <Col className="col-10">
                                <FormLabel className="font-size-14 fw-bold Ri-text-color-main-menu">

                                  Health Details
                                </FormLabel>
                              </Col>
                              <Col className="col-2">
                                <img
                                  src={ArrowRightPointing}
                                  alt="arrow right point"
                                />
                              </Col>
                            </Row>
                          </Col>
                        </Link>
                      </Row>
                    </Col>
                  </CardBody>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  );
};

export default ProfileNavList;
