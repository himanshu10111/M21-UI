import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { Col } from "reactstrap";

const MobileProfileSideBar = () => {
  return (
    <>
      {/* {[false].map((expand) => (
                        <Navbar
                          key={expand}
                          bg="light"
                          expand={expand}
                          className="mb-3"
                        >
                            <Col className='float-end'>
                            <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                          >
                            <b>Back </b>
                          </Navbar.Toggle>
                            </Col>
                         

                          <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                          >
                            <Offcanvas.Header>
                              <Offcanvas.Title
                                id={`offcanvasNavbarLabel-expand-${expand}`}
                              >
                                Prafull Bhagat
                              </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                              <Col className="card">
                                <Col className="col-12 d-flex p-3 ">
                                  <Col className="col-10">
                                    <Nav.Link
                                      href="/p/a"
                                      className="text-decoration-none text-dark small"
                                    >
                                      Personal Details
                                    </Nav.Link>
                                  </Col>
                                  <Col className="col-2 text-center">
                                    {" "}
                                    <FontAwesomeIcon icon={faAngleRight} />
                                  </Col>
                                </Col>
                              </Col>

                              <Col className=" card mt-3">
                                <Col className="col-12 d-flex p-3 ">
                                  <Col className="col-10">
                                    <Nav.Link
                                      href="/p/m"
                                      className="text-decoration-none text-dark small"
                                    >
                                      M21 Organization
                                    </Nav.Link>
                                  </Col>
                                  <Col className="col-2 text-center">
                                    {" "}
                                    <FontAwesomeIcon icon={faAngleRight} />
                                  </Col>
                                </Col>
                              </Col>
                              <Col className="card mt-3">
                                <Col className="col-12 d-flex p-3 ">
                                  <Col className="col-10">
                                    <Nav.Link
                                      href="/p/s"
                                      className="text-decoration-none text-dark small"
                                    >
                                      Social Contribution
                                    </Nav.Link>
                                  </Col>
                                  <Col className="col-2 text-center">
                                    {" "}
                                    <FontAwesomeIcon icon={faAngleRight} />
                                  </Col>
                                </Col>
                              </Col>
                              <Col className="card mt-3">
                                <Col className="col-12 d-flex p-3 ">
                                  <Col className="col-10">
                                    <Nav.Link
                                      href="/p/h"
                                      className="text-decoration-none text-dark small"
                                    >
                                      Health Details
                                    </Nav.Link>
                                  </Col>
                                  <Col className="col-2 text-center">
                                    <FontAwesomeIcon icon={faAngleRight} />
                                  </Col>
                                </Col>
                              </Col>
                            </Offcanvas.Body>
                          </Navbar.Offcanvas>
                        </Navbar>
                      ))} */}
    </>
  );
};

export default MobileProfileSideBar;
