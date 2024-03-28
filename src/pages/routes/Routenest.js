import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { CardBody, CardFooter, CardHeader, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  UncontrolledDropdown,
} from "reactstrap";
import { Container, Button, Card } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import HomeUi from "../nomination/HomeUi";
// Tabs in my profile
import MyProfileindex from "../home/DesktopMyProfile/MyProfileIndex";

//  Introductory page
import CreateIntroductoryMeeting from "../introductory/CreateIntroductoryMeeting";
import ViewIntroductory from "../introductory/plannedIntroductoryTabOne/pages/viewIntroductory";
import AddAttendess from "../introductory/plannedIntroductoryTabOne/pages/addAttendees";
import ViewMeetingOnDay from "../introductory/plannedIntroductoryTabOne/pages/viewMeetingOnDay";
import MarkAttendance from "../introductory/plannedIntroductoryTabOne/pages/markAttendance";

// Main header of the project
import HomeHeader from "../../component/header/HomeHeader";

// Profile page sidebar
import SideBarProfilePage from "../../component/sidebar/SideBarProfile";

// mobile display pages start
import MobilePersonalDetails from "../home/MobileMyProfile/MobilePersonalDetails";
import MobileHealthdetails from "../home/MobileMyProfile/MobileHealthdetails";
import SocialContribution from "../home/MobileMyProfile/SocialContribution";
import MobileM21Organization from "../home/MobileMyProfile/MobileM21Organization";
// Moile display pages end

// Main collapse Sidebar
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

// main collapse sidebar img
import NotificationIcon from "../../assets/img/Bell.png";
import userProfile from "../../assets/img/Vector.png";
import SearchIcon from "../../assets/img/Search.png";
import MyNominationImg from "../../assets/img/MyNominationImg.png";
import ParticipantForm from "../../assets/img/doc.text.png";
import DownloadForm from "../../assets/img/arrow.down.doc.png";

import OrganizationMappingimg from "../../assets/img/OrganizationMappin.png";
import collapseBar from "../../assets/img/listdash.png";
import CreateIntroductoryMeetingimg from "../../assets/img/Introductory.png";

import ViewNomination from "../nomination/pages/viewNomination";
import CompanyLogo from "../../assets/img/Frame.png";

import Review from "../introductory/ReviewIntroductoryTabThree/pages/review";

import AddIntroducer from "../introductory/IntroducerDetailTabFour/Pages/AddIntroducer";
//review nomination pages
import reviewNominationimg from "../../assets/img/Reviewnominations.png";
import ReviewNomination from "../reviewnomination/ReviewNomination";
import ViewNominationRn from "../reviewnomination/pages/viewNominationRn.js";

import ProfileNavList from "../../component/profileMainMenuMobile/ProfileNavList";
import ViewPostIntroductory from "../introductory/postIntroductoryTabTwo/pages/viewPostIntroductory";
import ReviewIntroductory from "../introductory/postIntroductoryTabTwo/pages/reviewIntroductory";
import EditNominationState from "../reviewnomination/pages/editState";

//Orgnaiztion page
import OrganizationMapping from "../organizationMapping/organizationMapping.js";

import AddUserOrganizationMapping from "../organizationMapping/pages/adduserOrganizationMapping";
import ViewNewRegistrationDetails from "../organizationMapping/pages/viewNewRegistrationOm";
import OrgnizationMapping from "../organizationMapping/organizationMapping.js";

//Member management
import MemberManagements from "../membershipManagement/MemberManagement";
import MemberManagementsimg from "../../assets/img/MembershipManagement.png";
import AddUserMemberMangement from "../membershipManagement/Pages/addUser";
import ViewMemberDetails from "../membershipManagement/Pages/viewMemberDetails";

//My M-friend
import MyMFriend from "../myMFriend/myMFriend.js";
import MyMFriendimg from "../../assets/img/person.2.png";
import AddUserMyMFriend from "../myMFriend/pages/addMyMfriend";
import AssignMFriend from "../myMFriend/pages/assignM21Friend";
import IntroductoryParticipantFeedbackForm from "../participantfeedback/participantFeedbackForm";
import MyMFriendMobile from "../myMFriend/mobilePage/myMFriendMobile";
import AddMFriendMobile from "../myMFriend/mobilePage/addMFriendMobile";
import AssignMFriendNewJoinee from "../myMFriend/mobilePage/assignMFriendNewJoinee";
import AssignMFriendMobile from "../myMFriend/mobilePage/assignMFriendMobile";
import AssignMFriendButtonMObile from "../myMFriend/mobilePage/assignMFriendButtonMobile";
import MFriendMobile from "../myMFriend/mobilePage/mFriendMobile";
import { routes, routesMobile } from "./routeArray";
import ViewIntroducerDetails from "../introductory/IntroducerDetailTabFour/Pages/viewIntroductoryDetails";
import UpdatePreferences from "../introductory/MyFacilitatorTabFour/updatePreferences";
import UpdateAvailabilty from "../introductory/MyFacilitatorTabFour/updateAvailability";
import ViewFacility from "../introductory/MyFacilitatorTabFour/viewIntroductoryFacility";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const Routenest = () => {
  const { collapseSidebar } = useProSidebar();
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("role");
    setUserRole(role);
  }, []);
  // const routes=[

  //   path='/',
  //   exact:true,
  //   sidebar:()=>
  // ]

  return (
    <>
      <Desktop>
        <Col className="section">
          <Col className="Ri-container">
            <Col sm="12">
              <Row>
                <Sidebar className="pe-0 bg-dark">
                  <Menu className="bg-dark vh-100  ">
                    <Card className=" border-0 bg-transparent">
                      <CardHeader className="px-0">
                        <MenuItem className="text-sidebar pt-5 pb-2">
                          <img
                            src={CompanyLogo}
                            alt="M21"
                            className="col-sm-10"
                          />
                        </MenuItem>
                      </CardHeader>
                      <CardBody className="px-0">
                        <MenuItem
                          className="text-sidebar"
                          routerLink={<Link to="/auth/login/nomination" />}
                        >
                          <img
                            src={MyNominationImg}
                            alt="MynominationImg"
                            className="pe-2"
                          />{" "}
                          My Nomination
                        </MenuItem>
                        <MenuItem
                          className="text-sidebar"
                          routerLink={<Link to="/auth/login/mymfriend" />}
                        >
                          <img
                            src={MyMFriendimg}
                            alt="MyM-Friend"
                            className="pe-2"
                          />
                          My M-Friends
                        </MenuItem>
                        {userRole === "3" && (
                          <>
                            <MenuItem
                              className="text-sidebar"
                              routerLink={
                                <Link to="/auth/login/reviewnomination" />
                              }
                            >
                              <img
                                src={reviewNominationimg}
                                alt="Review Nomination"
                                className="pe-2"
                              />
                              Review Nomination
                            </MenuItem>
                            <MenuItem
                              className="text-sidebar"
                              routerLink={
                                <Link to="/auth/login/orgnizationmapping" />
                              }
                            >
                              <img
                                src={OrganizationMappingimg}
                                alt="OrganizationMapping"
                                className="pe-2"
                              />
                              Organization Mapping
                            </MenuItem>
                            <MenuItem
                              className="text-sidebar"
                              routerLink={
                                <Link to="/auth/login/introductory" />
                              }
                            >
                              <img
                                src={CreateIntroductoryMeetingimg}
                                alt="CreateIntroductoryMeeting"
                                className="pe-2"
                              />
                              Introductory
                            </MenuItem>
                            <MenuItem
                              routerLink={
                                <Link to="/auth/login/membershipmanagement" />
                              }
                              className="text-sidebar"
                            >
                              <img
                                src={MemberManagementsimg}
                                alt="MemberManagements"
                                className="pe-2"
                              />
                              Membership Management
                            </MenuItem>
                          </>
                        )}
                        <MenuItem
                          // routerLink={<Link to="" />}
                          className="text-sidebar  "
                        >
                          <img src={ParticipantForm} className="pe-2" alt=""/>
                          Reports
                        </MenuItem>
                      </CardBody>
                      <Col sm="12" className="p-3">
                        &nbsp;
                      </Col>
                      <CardFooter className="bg-transparent border-0 px-1">
                        {userRole === "3" && (
                          <>
                            <MenuItem
                              routerLink={
                                <Link to="/auth/login/participantfeedback" />
                              }
                              className="text-sidebar  "
                            >
                              <img src={ParticipantForm} className="pe-2" alt=""/>
                              Praticipant feedback
                            </MenuItem>
                          </>
                        )}
                        <MenuItem className="text-sidebar">
                          <img src={DownloadForm} className="pe-2" alt=""/>
                          Download forms
                        </MenuItem>
                      </CardFooter>
                    </Card>
                  </Menu>
                </Sidebar>

                <Col className="pe-0 ps-0">
                  <div>
                    <Col
                      lg="12"
                      className="  lh-lg form-control border-0 rounded-0 card bg-white border-0 "
                    >
                      <Row>
                        <Col sm="6">
                          <Row>
                            <Col className="text-end " sm="1">
                              <Col onClick={() => collapseSidebar()}>
                                <img src={collapseBar} alt="collapseBar" />
                              </Col>
                            </Col>
                            <Col
                              sm="10"
                              className="fs-5 title-text-color text-uppercase"
                            >
                              <b> M21 Introductory Application</b>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg="4">&nbsp;</Col>
                        <Col sm="2" className="">
                          <Nav fill className="">
                            <NavItem>
                              <img src={SearchIcon} className="w-25" alt=""/>
                            </NavItem>
                            <NavItem>
                              <img src={NotificationIcon} alt=""/>
                            </NavItem>
                            <NavItem navbar>
                              <UncontrolledDropdown nav className="">
                                <DropdownToggle
                                  id="dropdown-button-dark-example1"
                                  className="border-0 bg-transparent p-0 "
                                  nav
                                >
                                  <img src={userProfile} className="w-25" alt=""/>
                                </DropdownToggle>

                                <DropdownMenu
                                  variant="white"
                                  className="dropdown-menu-arrow rounded-0 "
                                  right
                                >
                                  <DropdownItem className="border-0">
                                    <Link
                                      to="/auth/login/profile"
                                      className="text-black text-decoration-non"
                                    >
                                      My Profile
                                    </Link>
                                  </DropdownItem>
                                  <DropdownItem
                                    href="#/action-3"
                                    className="border-0"
                                  >
                                    Setting
                                  </DropdownItem>
                                  {/* <DropdownItem divider /> */}
                                  <DropdownItem>
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
                  </div>

                  {/* {routes.map((route, index) => (
                    <Routes>
                      <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                      />
                    </Routes>
                  ))} */}

                  <Routes>
                    <Route path="/auth/login/nomination" element={<HomeUi />} />
                    <Route
                      path="/auth/login/profile"
                      index
                      element={<MyProfileindex />}
                    />
                    <Route
                      path="/auth/login/introductory"
                      element={<CreateIntroductoryMeeting />}
                    />
                    <Route
                      path="/auth/login/introductory/:id"
                      element={<ViewIntroductory />}
                    />
                    <Route
                      path="/auth/login/introductory/addattendees/:id"
                      element={<AddAttendess />}
                    />
                    <Route
                      path="/auth/login/introductory/viewmeeting/:id"
                      element={<ViewMeetingOnDay />}
                    />
                    <Route
                      path="/auth/login/introductory/meetingattendance/:id"
                      element={<MarkAttendance />}
                    />
                    <Route
                      path="/auth/login/introductory/viewpostintroductory/:id"
                      element={<ViewPostIntroductory />}
                    />
                    <Route
                      path="/auth/login/introductory/reviewintroductory/:id"
                      element={<ReviewIntroductory />}
                    />
                    <Route
                      path="/auth/login/introductory/addIntroducer"
                      element={<AddIntroducer />}
                    />
                    <Route
                      path="/auth/login/introductory/viewintroducerdetail"
                      element={<ViewIntroducerDetails />}
                    />
                    <Route
                      path="/auth/log/introductory/updatepreferences"
                      element={<UpdatePreferences />}
                    />
                    <Route
                      path="/auth/log/introductory/updateavailability"
                      element={<UpdateAvailabilty />}
                    />
                    <Route
                      path="/auth/login/introductory/viewfacility"
                      element={<ViewFacility />}
                    />
                    <Route
                      path="/auth/login/introductory/review/:id"
                      element={<Review />}
                    />
                    <Route
                      path="/auth/login/nomination/nominationdetail/:id"
                      element={<ViewNomination />}
                    />
                    <Route
                      path="/auth/login/membershipmanagement"
                      element={<MemberManagements />}
                    />
                    <Route
                      path="/auth/login/reviewnomination"
                      element={<ReviewNomination />}
                    />
                    <Route
                      path="/auth/login/reviewnomination/viewnomination/:id"
                      element={<ViewNominationRn />}
                    />
                    <Route
                      path="/auth/login/reviewnomination/editstate/:id"
                      element={<EditNominationState />}
                    />
                    <Route
                      path="/auth/login/orgnizationmapping"
                      element={<OrganizationMapping />}
                    />
                    <Route
                      path="/auth/login/orgnizationmapping/adduser"
                      element={<AddUserOrganizationMapping />}
                    />
                    <Route
                      path="/auth/login/orgnizationmapping/viewregistration/:id"
                      element={<ViewNewRegistrationDetails />}
                    />
                    <Route
                      path="/auth/login/membershipmanagement/adduser"
                      element={<AddUserMemberMangement />}
                    />
                    <Route
                      path="/auth/login/mymfriend"
                      element={<MyMFriend />}
                    />
                    <Route
                      path="/auth/login/mymfriend/addmymfriend"
                      element={<AddUserMyMFriend />}
                    />
                    <Route
                      path="/auth/login/mymfriend/assignmfriend"
                      element={<AssignMFriend />}
                    />
                    <Route
                      path="/auth/login/participantfeedback"
                      element={<IntroductoryParticipantFeedbackForm />}
                    />
                    <Route
                      path="/auth/login/downloadform"
                      element={<DownloadForm />}
                    />
                  </Routes>
                </Col>
              </Row>
            </Col>
          </Col>
        </Col>
      </Desktop>

      <Mobile>
        <Col lg="12" className="bg-secondary">
          <Col lg="12" className=" login-menu ">
            <HomeHeader />
          </Col>

          <Col>
            <Col lg="10" className=" rounded-0 bg-white">
              {routesMobile.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}

              {/* <Routes>
                <Route path="/auth/login/nomination" element={<HomeUi />} />

                <Route
                  path="/auth/login/profile/personaldetails"
                  element={<MobilePersonalDetails />}
                />
                <Route
                  path="/auth/login/profile/healthdetails"
                  element={<MobileHealthdetails />}
                />
                <Route
                  path="/auth/login/profile/socialcontribution"
                  element={<SocialContribution />}
                />
                <Route
                  path="/auth/login/profile/m21organization"
                  element={<MobileM21Organization />}
                />

                <Route
                  path="/auth/login/nomination/nominationdetail"
                  element={<ViewNomination />}
                />
                <Route
                  path="/auth/login/profile"
                  element={<ProfileNavList />}
                />
                <Route
                  path="/auth/login/membershipmanagement"
                  element={<MemberManagements />}
                />

                <Route
                  path="/auth/login/membershipmanagement/adduser"
                  element={<AddUserMemberMangement />}
                />
                <Route
                  path="/auth/login/membershipmanagement/viewmemberdetails"
                  element={<ViewMemberDetails />}
                />
                <Route
                  path="/auth/login/orgnizationmapping"
                  element={<OrgnizationMapping />}
                />
                <Route
                  path="/auth/login/orgnizationmapping/adduser"
                  element={<AddUserOrganizationMapping />}
                />
                <Route
                  path="/auth/login/orgnizationmapping/viewregistration"
                  element={<ViewNewRegistrationDetails />}
                />
                <Route
                  path="/auth/login/reviewnomination"
                  element={<ReviewNomination />}
                />
                <Route
                  path="/auth/login/mymfriend"
                  element={<MyMFriendMobile />}
                />
                <Route
                  path="/auth/login/mymfriend/addmfriend"
                  element={<AddMFriendMobile />}
                />
                <Route
                  path="/auth/login/mymfriend/assignmfriendnewjoinee"
                  element={<AssignMFriendNewJoinee />}
                />
                <Route
                  path="/auth/login/mymfriend/assignmfriend"
                  element={<AssignMFriendMobile />}
                />
                <Route
                  path="/auth/login/mymfriend/assignmfriend/assignmfriendbutton"
                  element={<AssignMFriendButtonMObile />}
                />
                <Route
                  path="/auth/login/mymfriend/mfriend"
                  element={<MFriendMobile />}
                />
              </Routes> */}
            </Col>
          </Col>
        </Col>
      </Mobile>
    </>
  );
};

export default Routenest;
