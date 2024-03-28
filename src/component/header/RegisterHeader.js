import React from "react";
import {
  Card,
  CloseButton,
  Col,
  Container,
  FormLabel,
  InputGroup,
  Nav,
  NavItem,
  NavLink,
  Row,
} from "react-bootstrap";
import { CardBody, CardHeader, Input, Label } from "reactstrap";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

export const RegisterHeader = ({ stepSelected }) => {
  return (
    <>
      <div className="header shadow">
        <Desktop>
          {/* <Container> */}
          <Col lg="12">
            <Card className="border-0 rounded-0">
              <CardHeader lg="12" className="pt-4 pb-1 border-0">
                <Row>
                  <Col lg="11" className="p-0 ps-5  pb-2 ">
                    <Label className="fs-4 fw-bold Ri-text-color-sub-menu">
                      Register yourself to Introductory Application
                    </Label>
                  </Col>
                  <Col sm="1" className="text-end">
                    <Link to="/">
                      <CloseButton />
                    </Link>
                  </Col>
                </Row>
                <Nav className="p-2 ms-4">
                  <NavItem className="px-1">
                    <Input
                      type="checkbox"
                      className="rounded-5 box-shadow-0"
                      checked={stepSelected >= 1}
                    />
                  </NavItem>
                  <NavItem className="px-1 font-size-11 pt-1 fw-normal">
                    Basic Item
                  </NavItem>
                  <NavItem className="px-1">
                    <Input
                      type={stepSelected == 2 ? "radio" : "checkbox"}
                      className="rounded-5"
                      disabled
                      checked={stepSelected >= 2}
                    />
                  </NavItem>
                  <NavItem className="px-1 font-size-11 pt-1 fw-normal">
                    Address Detials
                  </NavItem>
                  <NavItem className="px-1">
                    <Input
                      type={stepSelected == 3 ? "radio" : "checkbox"}
                      className="rounded-5"
                      disabled
                      checked={stepSelected >= 3}
                    />
                  </NavItem>
                  <NavItem className="px-1 font-size-11 pt-1 fw-normal">
                    Organization mapping
                  </NavItem>
                  <NavItem className="px-1">
                    <Input
                      type={stepSelected == 4 ? "radio" : "checkbox"}
                      className="rounded-5"
                      disabled
                      checked={stepSelected >= 4}
                    />
                  </NavItem>
                  <NavItem className="px-1 font-size-11 pt-1 fw-normal">
                    Additional details
                  </NavItem>
                  <NavItem className="px-1">
                    <Input
                      type={stepSelected == 5 ? "radio" : "checkbox"}
                      className="rounded-5"
                      disabled
                      checked={stepSelected >= 5}
                    />
                  </NavItem>
                  <NavItem className="px-1 font-size-11 pt-1 fw-normal">
                    Set password
                  </NavItem>
                </Nav>
              </CardHeader>
            </Card>
          </Col>
          {/* </Container> */}
        </Desktop>
      </div>
      <div>
        <Mobile>
          {/* <Container> */}
          <Col className="col-12">
            <Card className="border-0 rounded-0">
              <CardHeader className="col-12  border-0">
                <Col className="col-12">
                  <Row className="g-2 form">
                    <Col className="col-12">
                      <FormLabel className="font-size-20 fw-normal Ri-text-color-main-menu">
                        Register yourself to Introductory Application</FormLabel>
                    </Col>

                  </Row>

                </Col>

                <Col sm="12" className="Nav mx-2 my-2 text-center">
                  <Col sm="12">
                    <Row>
                      <Col className="p-0">
                        <Col sm="2" className="NavItem">
                          <Input
                            type="checkbox"
                            className="rounded-5 box-shadow-0"
                            checked={stepSelected >= 1}
                          />
                          <Col className="NavItem font-size-11 fw-normal Ri-text-color-main-menu">
                            Basic <br /> Details
                          </Col>
                        </Col>
                      </Col>

                      <Col className="p-0">
                        <Col sm="2" className="NavItem">
                          <Input
                            type={stepSelected == 2 ? "radio" : "checkbox"}
                            className="rounded-5"
                            disabled
                            checked={stepSelected >= 2}
                          />
                          <Col className="NavItem font-size-11 fw-normal Ri-text-color-main-menu">
                            {" "}
                            Address Detials
                          </Col>
                        </Col>
                      </Col>

                      <Col className="p-0">
                        <Col sm="2" className="NavItem">
                          <Input
                            type={stepSelected == 3 ? "radio" : "checkbox"}
                            className="rounded-5"
                            disabled
                            checked={stepSelected >= 3}
                          />
                          <Col className="NavItem font-size-11 fw-normal Ri-text-color-main-menu">
                            Organization Details
                          </Col>
                        </Col>
                      </Col>

                      <Col className="p-0">
                        <Col sm="2" className="NavItem">
                          <Input
                            type={stepSelected == 4 ? "radio" : "checkbox"}
                            className="rounded-5"
                            disabled
                            checked={stepSelected >= 4}
                          />
                          <Col className="NavItem font-size-11 fw-normal Ri-text-color-main-menu">
                            Additional Details
                          </Col>
                        </Col>
                      </Col>

                      <Col className="p-0">
                        <Col sm="2" className="NavItem">
                          <Input
                            type={stepSelected == 5 ? "radio" : "checkbox"}
                            className="rounded-5"
                            disabled
                            checked={stepSelected >= 5}
                          />
                          <Col className="NavItem font-size-11 fw-normal Ri-text-color-main-menu">
                            Set password
                          </Col>
                        </Col>
                      </Col>
                    </Row>
                  </Col>
                </Col>
              </CardHeader>
            </Card>
          </Col>
          {/* </Container> */}
        </Mobile>
      </div>
    </>
  );
};
