import React from "react";
import HomeUi from "../nomination/HomeUi";
import DownloadForm from "../../pages/downloadForm/downloadForm";
// Tabs in my profile
import MyProfileindex from "../home/DesktopMyProfile/MyProfileIndex";

//  Introductory page
import CreateIntroductoryMeeting from "../introductory/CreateIntroductoryMeeting";
import ViewIntroductory from "../introductory/plannedIntroductoryTabOne/pages/viewIntroductory";
import AddAttendess from "../introductory/plannedIntroductoryTabOne/pages/addAttendees";
import ViewMeetingOnDay from "../introductory/plannedIntroductoryTabOne/pages/viewMeetingOnDay";
import MarkAttendance from "../introductory/plannedIntroductoryTabOne/pages/markAttendance";
import ViewPostIntroductory from "../introductory/postIntroductoryTabTwo/pages/viewPostIntroductory";
import ReviewIntroductory from "../introductory/postIntroductoryTabTwo/pages/reviewIntroductory";

import AddIntroducer from "../introductory/IntroducerDetailTabFour/Pages/AddIntroducer";
import Review from "../introductory/ReviewIntroductoryTabThree/pages/review";
import ViewNomination from "../nomination/pages/viewNomination";
import MemberManagements from "../membershipManagement/MemberManagement";
import ReviewNomination from "../reviewnomination/ReviewNomination";
import ViewNominationRn from "../reviewnomination/pages/viewNominationRn";
import EditNominationState from "../reviewnomination/pages/editState";
import OrganizationMappingTable from "../organizationMapping/organizationMapping";
import AddUserOrganizationMapping from "../organizationMapping/pages/adduserOrganizationMapping";
import ViewNewRegistrationDetails from "../organizationMapping/pages/viewNewRegistrationOm";
import AddUserMemberMangement from "../membershipManagement/Pages/addUser";
import MyMFriend from "../myMFriend/myMFriend";
import AddUserMyMFriend from "../myMFriend/pages/addMyMfriend";
import AssignMFriend from "../myMFriend/pages/assignM21Friend";
import IntroductoryParticipantFeedbackForm from "../participantfeedback/participantFeedbackForm";

//Mobile files
// mobile display pages start
import MobilePersonalDetails from "../home/MobileMyProfile/MobilePersonalDetails";
import MobileHealthdetails from "../home/MobileMyProfile/MobileHealthdetails";
import SocialContribution from "../home/MobileMyProfile/SocialContribution";
import MobileM21Organization from "../home/MobileMyProfile/MobileM21Organization";

import ProfileNavList from "../../component/profileMainMenuMobile/ProfileNavList";

//Orgnaiztion page

import ViewMemberDetails from "../membershipManagement/Pages/viewMemberDetails";
import OrgnizationMapping from "../organizationMapping/organizationMapping";
import MyMFriendMobile from "../myMFriend/mobilePage/myMFriendMobile";
import AddMFriendMobile from "../myMFriend/mobilePage/addMFriendMobile";
import AssignMFriendMobile from "../myMFriend/mobilePage/assignMFriendMobile";
import AssignMFriendButtonMObile from "../myMFriend/mobilePage/assignMFriendButtonMobile";
import AssignMFriendNewJoinee from "../myMFriend/mobilePage/assignMFriendNewJoinee";
import MFriendMobile from "../myMFriend/mobilePage/mFriendMobile";

const routes = [
  { path: "/auth/login/nomination", element: <HomeUi /> },
  { path: "/auth/login/profile", element: <MyProfileindex /> },
  { path: "/introductory", element: <CreateIntroductoryMeeting /> },
  { path: "/auth/login/introductory/:id", element: <ViewIntroductory /> },
  {
    path: "/auth/login/introductory/addattendees/:id",
    element: <AddAttendess />,
  },
  {
    path: "/auth/login/introductory/viewmeeting/:id",
    element: <ViewMeetingOnDay />,
  },
  {
    path: "/auth/login/introductory/meetingattendance/:id",
    element: <MarkAttendance />,
  },
  {
    path: "/auth/login/introductory/viewpostintroductory/:id",
    element: <ViewPostIntroductory />,
  },
  {
    path: "/auth/login/introductory/reviewintroductory/:id",
    element: <ReviewIntroductory />,
  },
  {
    path: "/auth/login/introductory/addIntroducer",
    element: <AddIntroducer />,
  },
  { path: "/auth/login/introductory/review/:id", element: <Review /> },
  {
    path: "/auth/login/nomination/nominationdetail/:id",
    element: <ViewNomination />,
  },
  { path: "/auth/login/membershipmanagement", element: <MemberManagements /> },
  { path: "/auth/login/reviewnomination", element: <ReviewNomination /> },
  {
    path: "/auth/login/reviewnomination/viewnomination/:id",
    element: <ViewNominationRn />,
  },
  {
    path: "/auth/login/reviewnomination/editstate/:id",
    element: <EditNominationState />,
  },
  {
    path: "/auth/login/orgnizationmapping",
    element: <OrganizationMappingTable />,
  },
  {
    path: "/auth/login/orgnizationmapping/adduser",
    element: <AddUserOrganizationMapping />,
  },
  {
    path: "/auth/login/orgnizationmapping/viewregistration/:id",
    element: <ViewNewRegistrationDetails />,
  },
  {
    path: "/auth/login/membershipmanagement/adduser",
    element: <AddUserMemberMangement />,
  },
  { path: "/auth/login/mymfriend", element: <MyMFriend /> },
  { path: "/auth/login/mymfriend/addmymfriend", element: <AddUserMyMFriend /> },
  { path: "/auth/login/mymfriend/assignmfriend", element: <AssignMFriend /> },
  {
    path: "/auth/login/participantfeedback",
    element: <IntroductoryParticipantFeedbackForm />,
  },
  { path: "/auth/login/downloadform", element: <DownloadForm /> },
];

const routesMobile = [
  { path: "/auth/login/nomination", element: <HomeUi /> },
  {
    path: "/auth/login/profile/personaldetails",
    element: <MobilePersonalDetails />,
  },
  {
    path: "/auth/login/profile/healthdetails",
    element: <MobileHealthdetails />,
  },
  {
    path: "/auth/login/profile/socialcontribution",
    element: <SocialContribution />,
  },
  {
    path: "/auth/login/profile/m21organization",
    element: <MobileM21Organization />,
  },
  {
    path: "/auth/login/nomination/nominationdetail",
    element: <ViewNomination />,
  },
  { path: "/auth/login/profile", element: <ProfileNavList /> },
  { path: "/auth/login/membershipmanagement", element: <MemberManagements /> },
  {
    path: "/auth/login/membershipmanagement/adduser",
    element: <AddUserMemberMangement />,
  },
  {
    path: "/auth/login/membershipmanagement/viewmemberdetails",
    element: <ViewMemberDetails />,
  },
  { path: "/auth/login/orgnizationmapping", element: <OrgnizationMapping /> },
  {
    path: "/auth/login/orgnizationmapping/adduser",
    element: <AddUserOrganizationMapping />,
  },
  {
    path: "/auth/login/orgnizationmapping/viewregistration",
    element: <ViewNewRegistrationDetails />,
  },
  { path: "/auth/login/reviewnomination", element: <ReviewNomination /> },
  { path: "/auth/login/mymfriend", element: <MyMFriendMobile /> },
  { path: "/auth/login/mymfriend/addmfriend", element: <AddMFriendMobile /> },
  {
    path: "/auth/login/mymfriend/assignmfriendnewjoinee",
    element: <AssignMFriendNewJoinee />,
  },
  {
    path: "/auth/login/mymfriend/assignmfriend",
    element: <AssignMFriendMobile />,
  },
  {
    path: "/auth/login/mymfriend/assignmfriend/assignmfriendbutton",
    element: <AssignMFriendButtonMObile />,
  },
  { path: "/auth/login/mymfriend/mfriend", element: <MFriendMobile /> },
];

export { routes, routesMobile };
