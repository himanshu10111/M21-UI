import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import { Dropdown } from "react-bootstrap";
import Latter from "../../assets/img/u24073.png";
import { useMediaQuery } from "react-responsive";
import MobileProfileSideBar from "../sidebar/MobileProfileSideBar";

import NotificationIcon from "../../assets/img/Bell.png";
import userProfile from "../../assets/img/Vector.png";
import SearchIcon from "../../assets/img/Search.png";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const HomeHeader = () => {
  return (
    <>
      <Desktop>
        {/* <div>
          <Col
            lg="12"
            className="  lh-lg form-control border-0 rounded-0 card bg-white border-0 "
          >
            <Row>
              <Col sm="6">
                <Row>
                  <Col className="text-end " sm="1">
                    <img className="w-100" src={Latter}></img>
                  </Col>
                  <Col sm="10" className="fs-5 title-text-color text-uppercase">
                    <b> M21 Introductory Application </b>
                  </Col>
                </Row>
              </Col>
              <Col lg="4">&nbsp;</Col>
              <Col sm="2" className="">
                <Nav fill className="">
                  <NavItem>
                    <img src={SearchIcon} className="w-25" />
                  </NavItem>
                  <NavItem>
                    <img src={NotificationIcon} />
                  </NavItem>
                  <NavItem navbar>
                    <UncontrolledDropdown nav className="">
                      <DropdownToggle
                        id="dropdown-button-dark-example1"
                        className="border-0 bg-transparent p-0 "
                        nav
                      >
                        <img src={userProfile} className="w-25" />
                      </DropdownToggle>

                      <DropdownMenu
                        variant="white"
                        className="dropdown-menu-arrow rounded-0 "
                        right
                      >
                        <DropdownItem className="border-0">
                          <Link
                            to="/p"
                            className="text-black text-decoration-non"
                          >
                            My Profile
                          </Link>
                        </DropdownItem>
                        <DropdownItem href="#/action-3" className="border-0">
                          Setting
                        </DropdownItem>
                        {/* <DropdownItem divider /> */}
        {/* <DropdownItem>
                          <Link
                            to="/"
                            className="text-black text-decoration-non border-0"
                          >
                            Log Out
                          </Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Col>
        </div> */}
      </Desktop>
      <Mobile>
        {[false].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Brand href="#">M21 Introductory Application</Navbar.Brand>

              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Prafull Bhagat
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link
                      href="/auth/login/nomination"
                      className="p-2 border-0 border-bottom rounded-0"
                    >
                      <b>My Nomination</b>
                    </Nav.Link>

                    <NavDropdown.Divider />
                    <NavDropdown
                      title="My M-friends"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      className="alert-link border-0 p-2"
                    >
                      <NavDropdown.Item href="/auth/login/mymfriend">
                        M-Friends Assigned to me
                      </NavDropdown.Item>

                      <NavDropdown.Divider />

                      <NavDropdown
                        title="Assig M-Friends"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        className="border-0"
                      >
                        <NavDropdown.Item href="/auth/login/mymfriend/assignmfriendnewjoinee">
                          <Col className="p-2 border-bottom"> New Joinee</Col>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/auth/login/mymfriend/assignmfriend">
                          <Col className="p-2 border-bottom">
                            {" "}
                            Assigned M-Friend
                          </Col>
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown.Item href="/auth/login/mymfriend/mfriend">
                        {" "}
                        <Col className="border-bottom"> My M-Friends</Col>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Col className="border-bottom ps-2">
                      <Nav.Link
                        href="/auth/login/reviewnomination"
                        className="border-0 rounded-0"
                      >
                        <b>Review Nominations</b>
                      </Nav.Link>
                    </Col>
                    <Col className="border-bottom ps-2">
                      <Nav.Link
                        href="/auth/login/orgnizationmapping"
                        className="border-0 rounded-0"
                      >
                        <b>Organization mapping</b>
                      </Nav.Link>
                    </Col>
                    <NavDropdown
                      title="Introductory"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      className="alert-link p-2"
                    >
                      <Col className="border-bottom p-2">
                        <NavDropdown.Item>
                          Planned Introductory
                        </NavDropdown.Item>
                      </Col>
                      <Col className="border-bottom p-2">
                        <NavDropdown.Item>Post Introductory</NavDropdown.Item>
                      </Col>
                      <Col className="border-bottom p-2">
                        <NavDropdown.Item>
                          Review Introductory Meeting
                        </NavDropdown.Item>
                      </Col>
                      <Col className="border-bottom p-2">
                        <NavDropdown.Item>
                          Introductory Details
                        </NavDropdown.Item>
                      </Col>
                      <Col className="border-bottom p-2">
                        <NavDropdown.Item>My Facilitation</NavDropdown.Item>
                      </Col>
                    </NavDropdown>
                    <Col className="border-bottom ps-2">
                      <Nav.Link
                        href="/auth/login/membershipmanagement"
                        className="border-0 rounded-0 "
                      >
                        <b>Membership management</b>
                      </Nav.Link>
                    </Col>
                    <NavDropdown
                      title="Report"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      className="alert-link p-2"
                    >
                      <Col className="border-bottom p-2">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </Col>
                      <Col className="border-bottom p-2">
                        <NavDropdown.Item>Introductory Report</NavDropdown.Item>
                      </Col>
                      <Col className="border-bottom p-2">
                        <NavDropdown.Item>My Favorite</NavDropdown.Item>
                      </Col>
                    </NavDropdown>
                    <NavDropdown
                      title="Participant Feedback"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      className="alert-link ps-2"
                    >
                      <Col className="border-bottom p-2">
                        <NavDropdown.Item>Genearl form</NavDropdown.Item>
                      </Col>
                      <Col className="border-bottom p-2">
                        <NavDropdown.Item>Student form</NavDropdown.Item>
                      </Col>
                    </NavDropdown>
                    <NavDropdown
                      title="Download Forms"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      className="alert-link p-2"
                    >
                      <Col className="border-bottom p-2">
                        <NavDropdown.Item>Micro Introductory</NavDropdown.Item>
                      </Col>
                      <Col className="border-bottom p-2">
                        <NavDropdown.Item>
                          Online Profiling Feedback Form
                        </NavDropdown.Item>
                      </Col>
                      <Col className="border-bottom p-2">
                        <NavDropdown.Item>
                          Post Introductory Feedback Form
                        </NavDropdown.Item>
                      </Col>
                    </NavDropdown>

                    <Col className="border-bottom ps-2">
                      <Nav.Link
                        href="/auth/login/profile"
                        className="border-0 rounded-0 "
                      >
                        <b>Profile</b>
                      </Nav.Link>
                    </Col>
                    {/* <Col className="border-bottom ps-2">
                      <MobileProfileSideBar />
                    </Col> */}
                  </Nav>
                  {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
                  <Dropdown.Divider />
                </Offcanvas.Body>

                <Col className="offcanvas-footer d-flex" col="12">
                  <Col col="6" className="p-1">
                    <Button className="w-100 rounded-0 p-1">Setting</Button>
                  </Col>
                  <Col col="6" className="p-1">
                    <Button className="w-100 rounded-0 p-1">Next</Button>
                  </Col>
                </Col>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </Mobile>
    </>
  );
};

export default HomeHeader;
