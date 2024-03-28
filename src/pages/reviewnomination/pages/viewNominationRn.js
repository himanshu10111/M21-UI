import React, { useEffect, useState } from "react";
import {
  Accordion,
  Button,
  Card,
  CloseButton,
  Col,
  Form,
  FormLabel,
  Modal,
  Row,
} from "react-bootstrap";
import {
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  FormFeedback,
  Input,
  Label,
} from "reactstrap";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate, useParams } from "react-router-dom";
import SuccessIcon from "../../../assets/img/success.jpg";
import { data } from "browserslist";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};
const ViewNominationRn = () => {
  const [houseNumber, setHouseNumber] = useState("");
  const [streetDetails, setStreetDetails] = useState("");
  const [landMark, setLandMark] = useState("");
  const [country, setCountry] = useState("");
  const [isstate, setIsState] = useState("");
  const [isdistrict, setIsDistrict] = useState("");
  const [city, setCity] = useState("");
  const [taluka, setTaluka] = useState("");
  const [pin, setPin] = useState("");

  const [isintroductoryDetails, setIsIntroductoryDetails] = useState(1);

  //update edit entry
  const [updateIntroductoryType, setUpdateIntroductoryType] = useState("");
  const [updateM21Wing, setUpdateM21Wing] = useState("");
  const [updateSpecialIntroductoryDrive, setSpecialIntroductoryDrive] =
    useState("");
  const [updatePreferedLanguage, setUpdatePreferredLanguage] = useState("");
  const [updateUpcomingIntro, setUpdateUpcomingIntro] = useState("");
  const [updateComment, setUpdateComment] = useState("");
  const [updateDataholder, setUpdateDataHolder] = useState("");

  //update personal detail
  const [updateFirstName, setUpdateFirstName] = useState("");
  const [updateLastName, setUpdateLastName] = useState("");
  const [updateMobileNo, setUpdateMobileNo] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updateAlternateEmail, setUpdateAlternateEmail] = useState("");

  //update Address details
  const [isaddCount, setIsAddcount] = useState([]);
  const [isaddState, setIsAddState] = useState([]);
  const [isadddist, setIsAddDist] = useState([]);
  const [isaddtaluka, setIsAddTaluka] = useState([]);
  const [isaddcity, setIsAddCity] = useState([]);

  const [updateHouseInfo, setUpdateHouseInfo] = useState("");
  const [updatePermanentHouse, setUpdateParmanentHouse] = useState("");
  const [updateStreet, setUpdateStreet] = useState("");
  const [updatParmenentStreet, setUpdateParmenentStreet] = useState("");
  const [updateLandmark, setUpdateLandMark] = useState("");
  const [updateParmenentLandmark, setparmenentLandmark] = useState("");
  const [updateCity, setUpdateCity] = useState("");
  const [updateParmenentCity, setUpdateParmenentCity] = useState("");
  const [updateTaluka, setUpdateTaluka] = useState("");
  const [updateParmenentTaluka, setUpdateParmenentTaluka] = useState("");
  const [updateDistrict, setUpdateDistrict] = useState("");
  const [UpdateDistrictParmenent, setUpdateDistrictParment] = useState("");
  const [updateState, setUpdateState] = useState("");
  const [updateParmanentState, setUpdateParmentState] = useState("");
  const [updateCountry, setUpdateCountry] = useState("");
  const [updateParmanentCountry, setUpdateParmanentCountry] = useState("");
  const [updatePinCode, setUpdatePinCode] = useState("");
  const [updateParmanentPinCode, setUpdateParmanentPinCode] = useState("");

  //additional detail
  const [updateGender, setUpdateGender] = useState("");
  const [updateDoB, setUpdateDoB] = useState("");
  const [updateEducation, setUpdateEducation] = useState("");
  const [updateProfession, setUpdateProfession] = useState("");
  const [updateNationality, setUpdateNationality] = useState("");
  const [updateSocialCat, setUpdateCocialCat] = useState("");
  const [updateReligionPrac, setUpdateReligionPrac] = useState("");

  const introductoryDetails = () => { };

  const introductorySubmitForm = (e) => {
    //e.preventDefault();
  };

  const [isviewName, setIsViewName] = useState(1);

  const NominatedPersonName = () => {
    setIsViewName((current) => !current);
  };

  const [isContactDetails, setIsContactDetails] = useState(1);
  const ContactDetails = () => {
    setIsContactDetails((current) => !current);
  };

  const [isPersonalAddressShow, setIsPersonalAddressShow] = useState(true);
  const PersonalAddressDetail = () => {
    setIsPersonalAddressShow((current) => !current);
  };

  const [isAdditionalDetail, setIsAdditionalDetail] = useState(1);
  const AdditionalDetail = () => {
    setIsAdditionalDetail((current) => !current);
  };

  const [isaddComment, setIsAddComment] = useState(false);

  const handleClose = () => setIsAddComment(false);
  const handleShow = () => setIsAddComment(true);

  const [iscommentdone, setIsCommentDone] = useState(false);
  const Navigate = useNavigate();

  const handleDoneClose = () => {
    setIsCommentDone(false);
    Navigate("/auth/login/reviewnomination");
  };
  const handleDoneShow = () => {
    setIsAddComment(false);
    setIsCommentDone(true);
  };

  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [nomination, setNomination] = useState("");
  const { id } = useParams();

  //Introductory details holder
  const [introductoryTypeHolder, setIntroductoryTypeHolder] = useState("");

  const responsebodyOrg = {
    introductoryDetailsResponse: {
      introductoryType: "introductoryType",
      m21Wing: "m21Wing",
      specialIntroductoryDrive: "specialIntroductoryDrive",
      preferredLanguageByGuest: "preferredLanguageByGuest",
      upcomingIntroductory: "upcomingIntroductory",
      comments: " comments",
    },
    additionalNomineeResponseDto: {
      gender: "gender",
      dob: "dob",
      education: "education",
      profession: "profession",
      nationality: "nationality",
      socialCategoryOfInvitee: "socialCategoryOfInvitee",
      religion: "religion",
    },
    addressNomineeResponseDto: {
      house: "house",
      street: "street",
      country: "country",
      state: " state",
      city: "city",
      district: " district",
      taluka: " taluka",
      pinCode: "pinCode",
    },
    inviteeResponseDto: {
      firstName: "firstName",
      lastName: "lastName",
      mobile: " mobile",
      email: "email",
      alternateEmailId: "alternateEmailId",
    },
  };

  const [changeIndicator, setChangeIndicator] = useState(true);

  const UpdateSubmited = (e) => {
    e.preventDefault();
    //setIsIntroductoryDetails((current) => !current);
    // window.location.reload();
    setChangeIndicator(false);

    const introductoryNominee = {
      introductoryType: updateIntroductoryType,
      m21Wing: updateM21Wing,
      specialIntroductoryDrive: updateSpecialIntroductoryDrive,
      preferredLanguageByGuest: updatePreferedLanguage,
      upcomingIntroductory: updateUpcomingIntro,
      comments: updateComment,
    };

    const inviteeDetails = {
      firstName: updateFirstName,
      lastName: updateLastName,
      mobile: updateMobileNo,
      email: updateEmail,
      alternateEmailId: updateAlternateEmail,
    };
    const addressDetails = {
      house: updateHouseInfo,
      street: updateStreet,
      country: updateCountry,
      state: updateState,
      city: updateCity,
      district: updateDistrict,
      taluka: updateTaluka,
      pinCode: updatePinCode,
    };
    const additionalDetail = {
      gender: updateGender,
      dob: updateDoB,
      education: updateEducation,
      profession: updateProfession,
      nationality: updateNationality,
      social_category_of_invitee: updateSocialCat,
      religion: updateReligionPrac,
    };

    const responsebody = {
      " introductory-nominee": introductoryNominee,
      "invitee-details": inviteeDetails,
      "address-nominee": addressDetails,
      "additional-nominee": additionalDetail,
    };

    fetch(`${BaseURL}/api/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(responsebody),
    })
      .then((res) => {
        res.json();
        console.log("updated data", responsebody);
        console.log("status call", res.status);
      })
      .then((data) => {
        console.log("value in API updated", data);
      });
  };

  useEffect(() => {
    fetch(
      `${BaseURL}/api/nomination/details/${id}`,
      console.log("detail api call"),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",

          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setNomination(data);

        setUpdateIntroductoryType(
          data.introductoryDetailsResponse?.introductoryType
        );
        setUpdateM21Wing(data.introductoryDetailsResponse?.m21Wing);
        setSpecialIntroductoryDrive(
          data.introductoryDetailsResponse.specialIntroductoryDrive
        );
        setUpdatePreferredLanguage(
          data.introductoryDetailsResponse?.preferredLanguageByGuest
        );
        setUpdateUpcomingIntro(
          data.introductoryDetailsResponse?.upcomingIntroductory
        );
        setUpdateComment(data.introductoryDetailsResponse?.comments);

        setUpdateFirstName(data.inviteeResponseDto?.firstName);
        setUpdateLastName(data.inviteeResponseDto?.lastName);
        setUpdateMobileNo(data.inviteeResponseDto.mobile);
        setUpdateEmail(data.inviteeResponseDto.email);
        setUpdateAlternateEmail(data.inviteeResponseDto.alternateEmailId);

        setUpdateHouseInfo(data.addressNomineeResponseDto.house);
        setUpdateCity(data.addressNomineeResponseDto.city);
        setUpdateState(data.addressNomineeResponseDto.state);
        setUpdateDistrict(data.addressNomineeResponseDto.district);
        setUpdateTaluka(data.addressNomineeResponseDto.taluka);
        setUpdateCountry(data.addressNomineeResponseDto.country);
        setUpdateStreet(data.additionalNomineeResponseDto.street);
        setUpdateLandMark(data.additionalNomineeResponseDto.landMark);
        setUpdatePinCode(data.additionalNomineeResponseDto.pinCode);

        setUpdateGender(data.additionalNomineeResponseDto.gender);
        setUpdateDoB(data.additionalNomineeResponseDto.dob);
        setUpdateEducation(data.additionalNomineeResponseDto.education);
        setUpdateProfession(data.additionalNomineeResponseDto.profession);
        setUpdateNationality(data.additionalNomineeResponseDto.nationality);
        setUpdateCocialCat(
          data.additionalNomineeResponseDto.socialCategoryOfInvitee
        );
        setUpdateReligionPrac(data.additionalNomineeResponseDto.religion);
      });
  }, [id]);

  const handleApproveNomination = () => {
    const responsebody = {
      id: parseInt(id, 10),
      status: 1, //Approve
    };

    fetch(`${BaseURL}/api/setStatus`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(responsebody),
    })
      .then((res) => {
        const statusCode = res.status;
        if (statusCode === 200) {
          setIsCommentDone(true);
        }

        if (!res.ok) {
          throw new Error(`Request failed with status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Received response", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log("********Nominee Approved******");
  };

  const handleRejectNomination = () => {
    const responsebody = {
      id: parseInt(id, 10),
      status: 0, //Reject
    };

    fetch(`${BaseURL}/api/setStatus`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(responsebody),
    })
      .then((res) => {
        const statusCode = res.status;
        if (statusCode === 200) {
          setIsAddComment(true);
        }
        if (!res.ok) {
          throw new Error(`Request failed with status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Received response", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log("********Nominee Rejected******");
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // const dataVariableHolder={
  //   "introductory-nominee":  introductoryNominee,
  // }

  //API Call
  //refresh page holder
  const [refreshCounter, setRefreshCounter] = useState(0);

  const UpdateIntroductoryDetail = () => {
    setRefreshCounter(refreshCounter + 1);
    setIsIntroductoryDetails((current) => !current);
    //window.location.reload();
  };
  const [m21WingHolder, setM21WingHolder] = useState([]);
  //M21 wing APi

  //upcoming introductory api
  const [meetings, setMeeting] = useState([]);

  useEffect(() => {
    const UpcomingIntro = fetch(
      `${BaseURL}/api/auth/getall/introductory/metting`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",

          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMeeting(data);
      });

    const M21WingAPI = fetch(`${BaseURL}/api/org/wings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setM21WingHolder(data);
      });

    fetch(`${BaseURL}/api/org/countries`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => setIsAddcount(data));

    fetch(`${BaseURL}/api/org/states`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => setIsAddState(data));

    fetch(`${BaseURL}/api/org/district`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => setIsAddDist(data));

    fetch(`${BaseURL}/api/org/city`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => setIsAddCity(data));

    fetch(`${BaseURL}/api/org/taluka`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => setIsAddTaluka(data));
  }, []);

  return (
    <>
      <Desktop>
        <Col className="section">
          <Col className="container-fluid">
            <Col className="form-control bg-transparent border-0">
              <Col className="form-group">
                <Card>
                  <CardHeader className="bg-white ">
                    <Col sm="12" className="">
                      <Row className="g-2 form">
                        <Col sm="8">
                          <h4>Review Nomination Details</h4>
                        </Col>
                        <Col sm="4" className="text-end">
                          <CloseButton />
                        </Col>
                      </Row>
                    </Col>
                  </CardHeader>
                  <CardBody>
                    <Row className="g-2 form">
                      <Col className="form-control col-sm-12">
                        <Col className="conatiner-fluid">
                          <Row className="g-2  form">
                            <Col sm="12" className="border-bottom">
                              <Row className="g-2 form">
                                <Label
                                  for="inputText"
                                  className="col-sm-2  col-form-label"
                                >
                                  Refered by
                                </Label>
                                <Col sm="10">
                                  <a className="text-primary">
                                    Mr. Prafull Bhagat
                                  </a>
                                  (123456)
                                </Col>
                              </Row>
                            </Col>
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="4">
                                  <FormLabel>Know as</FormLabel>
                                  <Col sm="12">
                                    <b>
                                      {nomination.referedResponseDto?.knowAs}
                                    </b>
                                  </Col>
                                </Col>
                                <Col sm="4">
                                  <FormLabel>Know from</FormLabel>
                                  <Col sm="12">
                                    <b>
                                      {nomination.referedResponseDto?.knowFrom}
                                    </b>
                                  </Col>
                                </Col>
                                <Col sm="4">
                                  <FormLabel>Appeal shared</FormLabel>
                                  <Col sm="12">
                                    <b>
                                      {" "}
                                      {
                                        nomination.referedResponseDto
                                          ?.appealSharedWithInvitee
                                      }
                                    </b>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col sm="12" className="border-bottom">
                              <Row className="g-2 form">
                                <Col sm="10" className="form-check">
                                  <FormLabel>Introductory Details</FormLabel>
                                  <Input type="checkbox" />
                                </Col>
                                <Col
                                  sm="2"
                                  className="text-end"
                                  onClick={UpdateIntroductoryDetail}
                                >
                                  <a className="text-primary ">Edit</a>
                                </Col>
                              </Row>
                            </Col>
                            {isintroductoryDetails && (
                              <>
                                <Col sm="12">
                                  <Card>
                                    <CardBody>
                                      <Row className="g-2 form">
                                        <Col sm="12">
                                          <Row className="g-2 from">
                                            <Col sm="2">
                                              <FormLabel>
                                                {" "}
                                                Introductory Type{" "}
                                              </FormLabel>
                                              <Col sm="12">
                                                <b>
                                                  {changeIndicator &&
                                                    nomination
                                                      .introductoryDetailsResponse
                                                      ?.introductoryType}

                                                  {!changeIndicator &&
                                                    updateIntroductoryType}
                                                </b>
                                              </Col>
                                            </Col>
                                            <Col sm="2">
                                              <FormLabel>M21 Wing</FormLabel>
                                              <Col sm="12">
                                                <b>
                                                  {" "}
                                                  {changeIndicator &&
                                                    nomination
                                                      .introductoryDetailsResponse
                                                      ?.m21Wing}
                                                  {!changeIndicator &&
                                                    updateM21Wing}
                                                </b>
                                              </Col>
                                            </Col>
                                            <Col sm="2">
                                              <FormLabel>
                                                Special introductory drive{" "}
                                              </FormLabel>
                                              <Col sm="12">
                                                <b>
                                                  {changeIndicator &&
                                                    nomination
                                                      .introductoryDetailsResponse
                                                      ?.specialIntroductoryDrive}
                                                  {!changeIndicator &&
                                                    updateSpecialIntroductoryDrive}
                                                </b>
                                              </Col>
                                            </Col>
                                            <Col sm="2">
                                              <FormLabel>
                                                Prederred language
                                              </FormLabel>
                                              <Col sm="12">
                                                <b>
                                                  {changeIndicator &&
                                                    nomination
                                                      .introductoryDetailsResponse
                                                      ?.preferredLanguageByGuest}
                                                  {!changeIndicator &&
                                                    updatePreferedLanguage}
                                                </b>
                                              </Col>
                                            </Col>
                                            <Col sm="3">
                                              <FormLabel>
                                                {" "}
                                                Upcoming introductory
                                              </FormLabel>
                                              <Col sm="12">
                                                <b>
                                                  {changeIndicator &&
                                                    nomination
                                                      .introductoryDetailsResponse
                                                      ?.upcomingIntroductory}
                                                  {!changeIndicator &&
                                                    updateUpcomingIntro}
                                                </b>
                                              </Col>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="12"></Col>
                                        <FormLabel>Comment</FormLabel>
                                        <Col sm="12">
                                          <p>
                                            {changeIndicator &&
                                              nomination
                                                .introductoryDetailsResponse
                                                ?.comments}
                                            {!changeIndicator && updateComment}
                                          </p>
                                        </Col>
                                      </Row>
                                    </CardBody>
                                  </Card>
                                </Col>
                              </>
                            )}

                            {!isintroductoryDetails && (
                              <>
                                <Col sm="12">
                                  <Form
                                    onSubmit={introductorySubmitForm}
                                    className="needs-validation"
                                  >
                                    <Card>
                                      <CardBody>
                                        <Row className="g-2 form">
                                          <Col sm="12">
                                            <Row className="g-2 form">
                                              <Col sm="2">
                                                <FormLabel>
                                                  Introductory type
                                                </FormLabel>
                                                <Col
                                                  sm="12"
                                                  className="position-relative"
                                                >
                                                  <Input
                                                    type="select"
                                                    className="form-select"
                                                    required
                                                    defaultValue={
                                                      updateIntroductoryType
                                                    }
                                                    onChange={(e) =>
                                                      setUpdateIntroductoryType(
                                                        e.target.value
                                                      )
                                                    }
                                                  >
                                                    <option
                                                      selected
                                                      disabled
                                                      value=""
                                                    >
                                                      Choose your option
                                                    </option>

                                                    <option>Online</option>
                                                    <option>Offline</option>
                                                  </Input>
                                                </Col>
                                              </Col>
                                              <Col sm="2">
                                                <FormLabel>M21 Wing</FormLabel>
                                                <Col sm="12">
                                                  <Input
                                                    type="select"
                                                    className="form-select"
                                                    required
                                                    defaultValue={updateM21Wing}
                                                    onChange={(e) =>
                                                      setUpdateM21Wing(
                                                        e.target.value
                                                      )
                                                    }
                                                  >
                                                    <option
                                                      selected
                                                      disabled
                                                      value=""
                                                    >
                                                      choose your option
                                                    </option>
                                                    {m21WingHolder.map(
                                                      (data) => (
                                                        <option>
                                                          {data.m21Wing}{" "}
                                                        </option>
                                                      )
                                                    )}
                                                  </Input>
                                                </Col>
                                              </Col>
                                              <Col sm="2">
                                                <FormLabel>
                                                  {" "}
                                                  Special introductory drive
                                                </FormLabel>
                                                <Col sm="12">
                                                  <Input
                                                    type="select"
                                                    className="form-select"
                                                    required
                                                    defaultValue={
                                                      updateSpecialIntroductoryDrive
                                                    }
                                                    onChange={(e) =>
                                                      setSpecialIntroductoryDrive(
                                                        e.target.value
                                                      )
                                                    }
                                                  >
                                                    <option
                                                      selected
                                                      disabled
                                                      value=""
                                                    >
                                                      Choose your option
                                                    </option>
                                                    <option>None</option>
                                                    <option>Women</option>
                                                    <option>
                                                      High potential
                                                    </option>
                                                  </Input>
                                                </Col>
                                              </Col>
                                              <Col sm="2">
                                                <FormLabel>
                                                  Preferred language
                                                </FormLabel>
                                                <Col sm="12">
                                                  <Input
                                                    type="select"
                                                    className="form-select"
                                                    required
                                                    defaultValue={
                                                      updatePreferedLanguage
                                                    }
                                                    onChange={(e) =>
                                                      setUpdatePreferredLanguage(
                                                        e.target.value
                                                      )
                                                    }
                                                  >
                                                    <option
                                                      selected
                                                      disabled
                                                      value=""
                                                    >
                                                      choose your option
                                                    </option>
                                                    <option>Hindi</option>
                                                    <option>English</option>
                                                  </Input>
                                                </Col>
                                              </Col>
                                              <Col sm="2">
                                                <FormLabel>
                                                  {" "}
                                                  Upcoming introductory
                                                </FormLabel>
                                                <Col sm="12">
                                                  <Input
                                                    type="select"
                                                    className="form-select"
                                                    required
                                                    defaultValue={
                                                      updateUpcomingIntro
                                                    }
                                                    onChange={(e) =>
                                                      setUpdateUpcomingIntro(
                                                        e.target.value
                                                      )
                                                    }
                                                  >
                                                    <option
                                                      selected
                                                      disabled
                                                      value=""
                                                    >
                                                      Choose your option
                                                    </option>
                                                    {meetings.map((meeting) => (
                                                      <option>
                                                        <table>
                                                          <tr>
                                                            <td>
                                                              {meeting.m21Type}{" "}
                                                              &nbsp;
                                                            </td>
                                                            <td>
                                                              {formatDate(
                                                                meeting.date
                                                              )}{" "}
                                                              &nbsp;
                                                            </td>
                                                            <td>
                                                              {meeting.fromTime}
                                                              AM -{" "}
                                                              {meeting.toTime}
                                                              PM
                                                            </td>
                                                          </tr>
                                                        </table>
                                                      </option>
                                                    ))}
                                                  </Input>
                                                </Col>
                                              </Col>
                                            </Row>
                                          </Col>
                                          <Col sm="12">
                                            <FormLabel>Comments</FormLabel>
                                            <Col sm="12">
                                              <Input
                                                type="textarea"
                                                className="form-textarea"
                                                required
                                                placeholder="comment"
                                                defaultValue={updateComment}
                                                onChange={(e) => setUpdateComment(e.target.value)}
                                              />
                                            </Col>
                                          </Col>
                                        </Row>
                                      </CardBody>
                                      <CardFooter className="bg-white">
                                        <Col sm="12">
                                          <Row className="g-2 form">
                                            <Col sm="6" className="text-end">
                                              <Button className="bg-white border-secondary text-secondary ">
                                                Cancel
                                              </Button>
                                            </Col>
                                            <Col sm="6">
                                              <Button
                                                type="submit"
                                                onClick={UpdateSubmited}
                                              >
                                                Submit
                                              </Button>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </CardFooter>
                                    </Card>
                                  </Form>
                                </Col>
                              </>
                            )}

                            <Col sm="12"></Col>
                          </Row>
                        </Col>
                      </Col>
                      <Col className="form-control border-0 col-sm-12">
                        <Card className="border-0 px-0">
                          <CardHeader className="bg-white">
                            Nominated Person Details
                          </CardHeader>
                          <CardBody>
                            <Row className="g-2 form">
                              <Form className="needs-validation">
                                <Col sm="12" className="border-bottom">
                                  <Row className="g-2 form">
                                    <Col sm="10" className="form-check ">
                                      <Input type="checkbox" />
                                      <FormLabel>Name</FormLabel>
                                    </Col>
                                    <Col
                                      sm="2"
                                      className="text-end"
                                      onClick={NominatedPersonName}
                                    >
                                      <a className="text-primary">Edit</a>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col sm="12">
                                  {isviewName && (
                                    <>
                                      <Col sm="12">
                                        <Row className="g-2 form">
                                          <b>
                                            {changeIndicator &&
                                              nomination.inviteeResponseDto
                                                ?.firstName}
                                            {!changeIndicator &&
                                              updateFirstName}
                                            &nbsp;{" "}
                                            {changeIndicator &&
                                              nomination.inviteeResponseDto
                                                ?.lastName}
                                            {!changeIndicator && updateLastName}
                                          </b>
                                        </Row>
                                      </Col>
                                    </>
                                  )}
                                </Col>
                                <Col sm="12">
                                  {!isviewName && (
                                    <>
                                      <Card className="border-0 px-0">
                                        <CardBody className="px-0">
                                          <Row>
                                            <Col sm="6">
                                              <Input
                                                type="text"
                                                className="form-input"
                                                required
                                                defaultValue={updateFirstName}
                                                onChange={(e) =>
                                                  setUpdateFirstName(
                                                    e.target.value
                                                  )
                                                }
                                              />
                                            </Col>
                                            <Col sm="6">
                                              <Input
                                                type="text"
                                                className="form-input"
                                                required
                                                defaultValue={updateLastName}
                                                onChange={(e) =>
                                                  setUpdateLastName(
                                                    e.target.value
                                                  )
                                                }
                                              />
                                            </Col>
                                          </Row>
                                        </CardBody>
                                        <CardFooter>
                                          <Col sm="12">
                                            <Row className="g-2 form">
                                              <Col sm="6" className="text-end">
                                                <Button className="bg-white border-secondary text-secondary">
                                                  Cancel
                                                </Button>
                                              </Col>
                                              <Col sm="6">
                                                <Button
                                                  onClick={UpdateSubmited}
                                                  className=""
                                                >
                                                  Submit
                                                </Button>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </CardFooter>
                                      </Card>
                                    </>
                                  )}
                                </Col>
                              </Form>
                            </Row>

                            <Row className="g-2 form">
                              <Form className="needs-validation">
                                <Col sm="12" className="border-bottom">
                                  <Row className="g-2 form">
                                    <Col sm="10" className="form-check">
                                      <FormLabel>Contact Details</FormLabel>
                                      <Input type="checkbox" />
                                    </Col>
                                    <Col
                                      sm="2"
                                      className="text-end"
                                      onClick={ContactDetails}
                                    >
                                      <a className="text-primary"> Edit</a>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col sm="12">
                                  {isContactDetails && (
                                    <>
                                      <Col sm="12">
                                        <Row className="g-2 form">
                                          <Col sm="6">
                                            <Row className="g-2 form">
                                              <Col sm="12">
                                                <FormLabel>
                                                  {" "}
                                                  Mobile Number
                                                </FormLabel>
                                              </Col>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col sm="6">
                                                    <a>
                                                      +91{" "}
                                                      {changeIndicator &&
                                                        nomination
                                                          .inviteeResponseDto
                                                          ?.mobile}
                                                      {!changeIndicator &&
                                                        updateMobileNo}
                                                    </a>
                                                  </Col>
                                                  <Col sm="6">
                                                    {" "}
                                                    <a>primary</a>{" "}
                                                  </Col>
                                                </Row>
                                              </Col>
                                              <Col
                                                sm="12"
                                                className="form-check"
                                              >
                                                <Input type="checkbox" />
                                                <FormLabel>
                                                  {" "}
                                                  Whatsapp number too
                                                </FormLabel>
                                              </Col>
                                            </Row>
                                          </Col>
                                          <Col sm="6">
                                            <Row className="g-2 form">
                                              <Col sm="12">
                                                <FormLabel>Email</FormLabel>
                                              </Col>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col sm="6">
                                                    <b>
                                                      {changeIndicator &&
                                                        nomination
                                                          .inviteeResponseDto
                                                          ?.email}
                                                      {!changeIndicator &&
                                                        updateEmail}
                                                    </b>
                                                  </Col>
                                                  <Col sm="6">
                                                    <a>Primary</a>
                                                  </Col>
                                                </Row>
                                              </Col>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col sm="6">
                                                    <b>
                                                      {changeIndicator &&
                                                        nomination
                                                          .inviteeResponseDto
                                                          ?.alternateEmailId}
                                                      {!changeIndicator &&
                                                        updateAlternateEmail}
                                                    </b>
                                                  </Col>
                                                  <Col sm="6">
                                                    {" "}
                                                    <a>Alternate</a>{" "}
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </>
                                  )}
                                </Col>
                                <Col sm="12">
                                  {!isContactDetails && (
                                    <>
                                      <Card>
                                        <CardBody>
                                          <Col sm="12">
                                            <Row className="g-2 form">
                                              <Col sm="6">
                                                <Row className="g-2 form">
                                                  <Col sm="12">
                                                    <FormLabel>
                                                      Mobile Number
                                                    </FormLabel>
                                                  </Col>
                                                  <Col sm="12">
                                                    <Row className="g-2 form">
                                                      <Col sm="6">
                                                        <Input
                                                          type="text"
                                                          className="form-input"
                                                          required
                                                          defaultValue={
                                                            updateMobileNo
                                                          }
                                                          onChange={(e) =>
                                                            setUpdateMobileNo(
                                                              e.target.value
                                                            )
                                                          }
                                                        />
                                                      </Col>
                                                      <Col sm="6">
                                                        <Input
                                                          type="select"
                                                          className="form-select"
                                                          required
                                                        >
                                                          <option
                                                            selected
                                                            disabled
                                                            value=""
                                                          >
                                                            Choose your option
                                                          </option>
                                                          <option>
                                                            Primary
                                                          </option>
                                                          <option>
                                                            Alternate
                                                          </option>
                                                        </Input>
                                                      </Col>
                                                    </Row>
                                                  </Col>
                                                </Row>
                                              </Col>
                                              <Col sm="6">
                                                <Row className="g-2 form">
                                                  <Col sm="12">
                                                    <FormLabel>Email</FormLabel>
                                                  </Col>
                                                  <Col sm="12">
                                                    <Row className="g-2 form">
                                                      <Col sm="6">
                                                        <Input
                                                          type="text"
                                                          className="form-input"
                                                          required
                                                          defaultValue={
                                                            updateEmail
                                                          }
                                                          onChange={(e) =>
                                                            setUpdateEmail(
                                                              e.target.value
                                                            )
                                                          }
                                                        />
                                                      </Col>
                                                      <Col sm="6">
                                                        {/* <Input
                                                    type="select"
                                                    className="form-select"
                                                    required
                                                   
                                                  >
                                                    <option
                                                      selected
                                                      disabled
                                                      value=""
                                                    >
                                                      Choose your option
                                                    </option>
                                                    <option>Primary</option>
                                                    <option>Alternate</option>
                                                  </Input> */}
                                                        Primary
                                                      </Col>
                                                    </Row>
                                                  </Col>
                                                  <Col sm="12">
                                                    <Row className="g-2 form">
                                                      <Col sm="6">
                                                        <Input
                                                          type="text"
                                                          className="form-input"
                                                          required
                                                          defaultValue={
                                                            updateAlternateEmail
                                                          }
                                                          onChange={(e) =>
                                                            setUpdateAlternateEmail(
                                                              e.target.value
                                                            )
                                                          }
                                                        />
                                                      </Col>
                                                      <Col sm="6">
                                                        {/* <Input
                                                    type="select"
                                                    className="form-select"
                                                    required
                                                  >
                                                    <option
                                                      selected
                                                      disabled
                                                      value=""
                                                    >
                                                      Choose your option
                                                    </option>
                                                    <option>Primary</option>
                                                    <option>Alternate</option>
                                                  </Input> */}
                                                        Alternate
                                                      </Col>
                                                    </Row>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </CardBody>
                                        <CardFooter>
                                          <Col sm="12">
                                            <Row>
                                              <Col sm="6" className="text-end">
                                                <Button className="bg-white border-secondary text-secondary ">
                                                  Cancel
                                                </Button>
                                              </Col>
                                              <Col sm="6">
                                                <Button
                                                  type="submit"
                                                  onClick={UpdateSubmited}
                                                >
                                                  Submit
                                                </Button>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </CardFooter>
                                      </Card>
                                    </>
                                  )}
                                </Col>
                              </Form>
                            </Row>
                            <Row className="g-2 form">
                              <Form className="needs-validation">
                                <Col sm="12" className="border-bottom">
                                  <Row className="g-2 form">
                                    <Col sm="10">
                                      <FormLabel>
                                        <b>Address Details</b>
                                      </FormLabel>
                                    </Col>
                                    <Col
                                      sm="2"
                                      className="text-end"
                                      onClick={PersonalAddressDetail}
                                    >
                                      <a className="text-primary">Edit</a>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col sm="12">
                                  {isPersonalAddressShow && (
                                    <>
                                      <Card className="border-0">
                                        <CardBody>
                                          <Col
                                            sm="12"
                                            className="border-bottom"
                                          >
                                            <Row className="g-2 form">
                                              <Col sm="6">
                                                <Col
                                                  sm="12"
                                                  className="text-uppercase"
                                                >
                                                  <FormLabel>
                                                    persent address{" "}
                                                  </FormLabel>{" "}
                                                </Col>
                                                {changeIndicator &&
                                                  nomination
                                                    .addressNomineeResponseDto
                                                    ?.house}
                                                {!changeIndicator &&
                                                  updateHouseInfo}
                                                <br />
                                                {changeIndicator &&
                                                  nomination
                                                    .addressNomineeResponseDto
                                                    ?.street}
                                                {!changeIndicator &&
                                                  updateStreet}
                                                <br />
                                                {changeIndicator &&
                                                  nomination
                                                    .addressNomineeResponseDto
                                                    ?.city}
                                                {!changeIndicator && updateCity}
                                                , &nbsp;
                                                {changeIndicator &&
                                                  nomination
                                                    .addressNomineeResponseDto
                                                    ?.state}
                                                {!changeIndicator &&
                                                  updateState}
                                                , &nbsp;
                                                {changeIndicator &&
                                                  nomination
                                                    .addressNomineeResponseDto
                                                    ?.country}
                                                {!changeIndicator &&
                                                  updateCountry}
                                                <br />
                                                {changeIndicator &&
                                                  nomination
                                                    .addressNomineeResponseDto
                                                    ?.pinCode}
                                                {!changeIndicator &&
                                                  updatePinCode}
                                              </Col>

                                              <Col sm="6">
                                                <Col
                                                  sm="12"
                                                  className="text-uppercase"
                                                >
                                                  <FormLabel>
                                                    Perment address
                                                  </FormLabel>{" "}
                                                </Col>
                                                {
                                                  nomination
                                                    .addressNomineeResponseDto
                                                    ?.house
                                                }
                                                <br />
                                                {
                                                  nomination
                                                    .addressNomineeResponseDto
                                                    ?.street
                                                }
                                                <br />
                                                {
                                                  nomination
                                                    .addressNomineeResponseDto
                                                    ?.city
                                                }
                                                , &nbsp;
                                                {
                                                  nomination
                                                    .addressNomineeResponseDto
                                                    ?.state
                                                }
                                                , &nbsp;
                                                {
                                                  nomination
                                                    .addressNomineeResponseDto
                                                    ?.country
                                                }
                                                <br />
                                                {
                                                  nomination
                                                    .addressNomineeResponseDto
                                                    ?.pinCode
                                                }
                                              </Col>
                                            </Row>
                                          </Col>
                                        </CardBody>
                                      </Card>
                                    </>
                                  )}

                                  {!isPersonalAddressShow && (
                                    <>
                                      <Card
                                        onFocus={() => isPersonalAddressShow}
                                      >
                                        <CardBody className="bg-light">
                                          <Col sm="12">
                                            <Row>
                                              <Col sm="6">
                                                <CardHeader className="bg-transparent">
                                                  Present address
                                                </CardHeader>
                                                <Col sm="12" className="pt-2">
                                                  <Col
                                                    sm="12"
                                                    className="form-check"
                                                  >
                                                    &nbsp;
                                                  </Col>
                                                </Col>
                                                <CardBody>
                                                  <Row className="g-2 form">
                                                    <Col sm="12">
                                                      <FormLabel>
                                                        {" "}
                                                        House/Flat No./Building{" "}
                                                      </FormLabel>
                                                      <Col sm="12">
                                                        <Input
                                                          type="text"
                                                          required
                                                          placeholder="Enter house no"
                                                          className="rounded-0"
                                                          defaultValue={
                                                            updateHouseInfo
                                                          }
                                                          onChange={(e) =>
                                                            setUpdateHouseInfo(
                                                              e.target.value
                                                            )
                                                          }
                                                        />
                                                      </Col>
                                                    </Col>
                                                    <Col sm="12">
                                                      <FormLabel>
                                                        Street Details{" "}
                                                      </FormLabel>
                                                      <Col sm="12">
                                                        <Input
                                                          type="text"
                                                          required
                                                          placeholder="Enter street details"
                                                          defaultValue={
                                                            updateStreet
                                                          }
                                                          onChange={(e) =>
                                                            setUpdateStreet(
                                                              e.target.value
                                                            )
                                                          }
                                                        />
                                                      </Col>
                                                    </Col>
                                                    <Col sm="12">
                                                      <FormLabel>
                                                        {" "}
                                                        Landmark{" "}
                                                      </FormLabel>
                                                      <Col sm="12">
                                                        <Input
                                                          type="text"
                                                          required
                                                          placeholder="Enter land mark"
                                                          defaultValue={
                                                            updateLandmark
                                                          }
                                                          onChange={(event) =>
                                                            setUpdateLandMark(
                                                              event.target.value
                                                            )
                                                          }
                                                        />
                                                      </Col>
                                                    </Col>
                                                    <Col sm="12">
                                                      <Row className="g-2 form">
                                                        <Col sm="6">
                                                          <Col sm="12">
                                                            <FormLabel>
                                                              Country{" "}
                                                            </FormLabel>
                                                            <Col sm="12">
                                                              <Input
                                                                required
                                                                type="select"
                                                                defaultValue={
                                                                  updateCountry
                                                                }
                                                                onChange={(
                                                                  event
                                                                ) =>
                                                                  setUpdateCountry(
                                                                    event.target
                                                                      .value
                                                                  )
                                                                }
                                                                className="rounded-0"
                                                              >
                                                                <option
                                                                  selected
                                                                >
                                                                  Choose your
                                                                  option
                                                                </option>
                                                                {isaddCount.map(
                                                                  (data) => (
                                                                    <option>
                                                                      {
                                                                        data.name
                                                                      }
                                                                    </option>
                                                                  )
                                                                )}
                                                              </Input>
                                                            </Col>
                                                          </Col>
                                                          <Col sm="12">
                                                            <FormLabel>
                                                              City
                                                            </FormLabel>
                                                            <Col sm="12">
                                                              <Input
                                                                required
                                                                type="select"
                                                                defaultValue={
                                                                  updateCity
                                                                }
                                                                onChange={(
                                                                  event
                                                                ) =>
                                                                  setUpdateCity(
                                                                    event.target
                                                                      .value
                                                                  )
                                                                }
                                                              >
                                                                <option
                                                                  selected
                                                                >
                                                                  Choose your
                                                                  option
                                                                </option>
                                                                {isaddcity.map(
                                                                  (data) => (
                                                                    <option>
                                                                      {
                                                                        data.name
                                                                      }
                                                                    </option>
                                                                  )
                                                                )}
                                                              </Input>
                                                            </Col>
                                                          </Col>
                                                          <Col sm="12">
                                                            <FormLabel>
                                                              Taluka
                                                            </FormLabel>
                                                            <Col sm="12">
                                                              <Input
                                                                type="select"
                                                                defaultValue={
                                                                  updateTaluka
                                                                }
                                                                onChange={(
                                                                  event
                                                                ) =>
                                                                  setUpdateTaluka(
                                                                    event.target
                                                                      .value
                                                                  )
                                                                }
                                                                className="rounded-0"
                                                              >
                                                                <option
                                                                  selected
                                                                >
                                                                  Choose your
                                                                  option
                                                                </option>
                                                                {isaddtaluka.map(
                                                                  (data) => (
                                                                    <option>
                                                                      {
                                                                        data.name
                                                                      }
                                                                    </option>
                                                                  )
                                                                )}
                                                              </Input>
                                                            </Col>
                                                          </Col>
                                                        </Col>
                                                        <Col sm="6">
                                                          <Col sm="12">
                                                            <FormLabel>
                                                              {" "}
                                                              State{" "}
                                                            </FormLabel>
                                                            <Col sm="12">
                                                              <Input
                                                                type="select"
                                                                defaultValue={
                                                                  updateState
                                                                }
                                                                onChange={(
                                                                  event
                                                                ) =>
                                                                  setUpdateState(
                                                                    event.target
                                                                      .value
                                                                  )
                                                                }
                                                              >
                                                                <option
                                                                  selected
                                                                >
                                                                  Choose your
                                                                  option
                                                                </option>
                                                                {isaddState.map(
                                                                  (data) => (
                                                                    <option>
                                                                      {
                                                                        data.name
                                                                      }
                                                                    </option>
                                                                  )
                                                                )}
                                                              </Input>
                                                            </Col>
                                                          </Col>
                                                          <Col sm="12">
                                                            <FormLabel>
                                                              District
                                                            </FormLabel>
                                                            <Col sm="12">
                                                              <Input
                                                                type="select"
                                                                defaultValue={
                                                                  updateDistrict
                                                                }
                                                                onChange={(
                                                                  event
                                                                ) =>
                                                                  setUpdateDistrict(
                                                                    event.target
                                                                      .value
                                                                  )
                                                                }
                                                              >
                                                                <option
                                                                  selected
                                                                >
                                                                  Choose your
                                                                  option
                                                                </option>
                                                                {isadddist.map(
                                                                  (data) => (
                                                                    <option>
                                                                      {
                                                                        data.name
                                                                      }
                                                                    </option>
                                                                  )
                                                                )}
                                                              </Input>
                                                            </Col>
                                                          </Col>
                                                          <Col sm="12">
                                                            <FormLabel>
                                                              {" "}
                                                              Pin Code
                                                            </FormLabel>
                                                            <Col sm="12">
                                                              <Input
                                                                type="text"
                                                                defaultValue={
                                                                  updatePinCode
                                                                }
                                                                onChange={(
                                                                  event
                                                                ) =>
                                                                  setUpdatePinCode(
                                                                    event.target
                                                                      .value
                                                                  )
                                                                }
                                                              ></Input>
                                                            </Col>
                                                          </Col>
                                                        </Col>
                                                      </Row>
                                                    </Col>
                                                  </Row>
                                                </CardBody>
                                              </Col>
                                              <Col sm="6">
                                                <CardHeader className="bg-transparent">
                                                  Perment adress
                                                </CardHeader>
                                                <Col sm="12" className="pt-2">
                                                  <Col
                                                    sm="12"
                                                    className="form-check"
                                                  >
                                                    <Input type="checkbox"></Input>
                                                    <Label>
                                                      {" "}
                                                      Same as present address
                                                    </Label>
                                                  </Col>
                                                </Col>
                                                <CardBody>
                                                  <Row className="g-2 form">
                                                    <Col sm="12">
                                                      <FormLabel>
                                                        {" "}
                                                        House/Flat No./Building
                                                      </FormLabel>
                                                      <Col sm="12">
                                                        <Input
                                                          type="text"
                                                          placeholder="Enter house no"
                                                          defaultValue={
                                                            updatePermanentHouse
                                                          }
                                                          onChange={(event) =>
                                                            setUpdateParmanentHouse(
                                                              event.target.value
                                                            )
                                                          }
                                                        />
                                                      </Col>
                                                    </Col>
                                                    <Col sm="12">
                                                      <FormLabel>
                                                        {" "}
                                                        Street Details{" "}
                                                      </FormLabel>
                                                      <Col sm="12">
                                                        <Input
                                                          placeholder="Enter street details"
                                                          type="text"
                                                          defaultValue={
                                                            updatParmenentStreet
                                                          }
                                                          onChange={(event) =>
                                                            setUpdateParmenentStreet(
                                                              event.target.value
                                                            )
                                                          }
                                                        />
                                                      </Col>
                                                    </Col>
                                                    <Col sm="12">
                                                      <FormLabel>
                                                        {" "}
                                                        Landmark{" "}
                                                      </FormLabel>
                                                      <Col sm="12">
                                                        <Input
                                                          type="text"
                                                          placeholder="Enter land mark"
                                                          defaultValue={
                                                            updateParmenentLandmark
                                                          }
                                                          onChange={(event) =>
                                                            setparmenentLandmark(
                                                              event.target.value
                                                            )
                                                          }
                                                        />
                                                      </Col>
                                                    </Col>
                                                    <Col sm="12">
                                                      <Row className="g-2 form">
                                                        <Col sm="6">
                                                          <Col sm="12">
                                                            <FormLabel>
                                                              {" "}
                                                              Country
                                                            </FormLabel>
                                                            <Col sm="12">
                                                              <Input
                                                                type="select"
                                                                defaultValue={
                                                                  updateParmanentCountry
                                                                }
                                                                onChange={(
                                                                  event
                                                                ) =>
                                                                  setUpdateParmanentCountry(
                                                                    event.target
                                                                      .value
                                                                  )
                                                                }
                                                              >
                                                                {isaddCount.map(
                                                                  (data) => (
                                                                    <option>
                                                                      {
                                                                        data.name
                                                                      }
                                                                    </option>
                                                                  )
                                                                )}
                                                                {/* {country.map((data) => (
                                                                      <option>{data.name}</option>
                                                                    ))} */}
                                                              </Input>
                                                            </Col>
                                                          </Col>
                                                          <Col sm="12">
                                                            <FormLabel>
                                                              City{" "}
                                                            </FormLabel>
                                                            <Col sm="12">
                                                              <Input
                                                                defaultValue={
                                                                  updateParmenentCity
                                                                }
                                                                onChange={(e) =>
                                                                  setUpdateParmenentCity(
                                                                    e.target
                                                                      .value
                                                                  )
                                                                }
                                                                type="select"
                                                              >
                                                                <option
                                                                  selected
                                                                >
                                                                  choose your
                                                                  option
                                                                </option>
                                                                {isaddcity.map(
                                                                  (data) => (
                                                                    <option>
                                                                      {
                                                                        data.name
                                                                      }
                                                                    </option>
                                                                  )
                                                                )}
                                                              </Input>
                                                            </Col>
                                                          </Col>
                                                          <Col sm="12">
                                                            <FormLabel>
                                                              Taluka
                                                            </FormLabel>
                                                            <Col sm="12">
                                                              <Input
                                                                type="select"
                                                                defaultValue={
                                                                  updateParmenentTaluka
                                                                }
                                                                onChange={(e) =>
                                                                  setUpdateParmenentTaluka(
                                                                    e.target
                                                                      .value
                                                                  )
                                                                }
                                                              >
                                                                <option
                                                                  selected
                                                                >
                                                                  choose your
                                                                  option
                                                                </option>
                                                                {isaddtaluka.map(
                                                                  (data) => (
                                                                    <option>
                                                                      {
                                                                        data.name
                                                                      }
                                                                    </option>
                                                                  )
                                                                )}
                                                              </Input>
                                                            </Col>
                                                          </Col>
                                                        </Col>
                                                        <Col sm="6">
                                                          <Col sm="12">
                                                            <FormLabel>
                                                              State
                                                            </FormLabel>
                                                            <Col sm="12">
                                                              <Input
                                                                defaultValue={
                                                                  updateParmanentState
                                                                }
                                                                onChange={(e) =>
                                                                  setUpdateParmentState(
                                                                    e.target
                                                                      .value
                                                                  )
                                                                }
                                                                type="select"
                                                              >
                                                                <option
                                                                  selected
                                                                >
                                                                  choose your
                                                                  option
                                                                </option>
                                                                {isaddState.map(
                                                                  (data) => (
                                                                    <option>
                                                                      {
                                                                        data.name
                                                                      }
                                                                    </option>
                                                                  )
                                                                )}
                                                              </Input>
                                                            </Col>
                                                          </Col>
                                                          <Col sm="12">
                                                            <FormLabel>
                                                              {" "}
                                                              District
                                                            </FormLabel>
                                                            <Col sm="12">
                                                              <Input
                                                                defaultValue={
                                                                  UpdateDistrictParmenent
                                                                }
                                                                onChange={(e) =>
                                                                  setUpdateDistrictParment(
                                                                    e.target
                                                                      .value
                                                                  )
                                                                }
                                                                type="select"
                                                              >
                                                                <option
                                                                  selected
                                                                >
                                                                  choose your
                                                                  option
                                                                </option>
                                                                {isadddist.map(
                                                                  (data) => (
                                                                    <option>
                                                                      {
                                                                        data.name
                                                                      }
                                                                    </option>
                                                                  )
                                                                )}
                                                              </Input>
                                                            </Col>
                                                          </Col>
                                                          <Col sm="12">
                                                            <FormLabel>
                                                              Pin Code
                                                            </FormLabel>
                                                            <Col sm="12">
                                                              <Input
                                                                defaultValue={
                                                                  updateParmanentPinCode
                                                                }
                                                                onChange={(e) =>
                                                                  setUpdateParmanentPinCode(
                                                                    e.target
                                                                      .value
                                                                  )
                                                                }
                                                                type="text"
                                                              ></Input>
                                                            </Col>
                                                          </Col>
                                                        </Col>
                                                      </Row>
                                                    </Col>
                                                  </Row>
                                                </CardBody>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </CardBody>
                                        <CardFooter>
                                          <Col sm="12">
                                            <Row className="g-2 form">
                                              <Col sm="6" className="text-end">
                                                <Button
                                                  className="btn-outline-primary bg-white text-priamry"
                                                  onClick={
                                                    PersonalAddressDetail
                                                  }
                                                >
                                                  Cancel
                                                </Button>
                                              </Col>
                                              <Col sm="6">
                                                <Button
                                                  type="submit"
                                                  onClick={UpdateSubmited}
                                                >
                                                  Submit
                                                </Button>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </CardFooter>
                                      </Card>
                                    </>
                                  )}
                                </Col>
                              </Form>
                            </Row>
                            <Row className="g-2 form">
                              <Form className="needs-validation">
                                <Card>
                                  <CardBody>
                                    <Col sm="12" className="border-bottom">
                                      <Row className="g-2 form">
                                        <Col sm="10" className="form-check">
                                          <Input type="checkbox" />
                                          <FormLabel>
                                            Additional Details
                                          </FormLabel>
                                        </Col>
                                        <Col
                                          sm="2"
                                          className="text-end"
                                          onClick={AdditionalDetail}
                                        >
                                          <a className="text-primary"> Edit</a>
                                        </Col>
                                      </Row>
                                    </Col>
                                    {isAdditionalDetail && (
                                      <>
                                        <Col sm="12">
                                          <Row className="g-2 form">
                                            <Col sm="3">
                                              <FormLabel>Gender</FormLabel>
                                              <Col sm="12">
                                                <b>
                                                  {changeIndicator &&
                                                    nomination
                                                      .additionalNomineeResponseDto
                                                      ?.gender}
                                                  {!changeIndicator &&
                                                    updateGender}
                                                </b>
                                              </Col>
                                            </Col>
                                            <Col sm="3">
                                              <FormLabel>
                                                Date Of Birth
                                              </FormLabel>
                                              <Col sm="12">
                                                <b>
                                                  {changeIndicator &&
                                                    formatDate(
                                                      nomination
                                                        .additionalNomineeResponseDto
                                                        ?.dob
                                                    )}
                                                  {!changeIndicator &&
                                                    updateDoB}
                                                </b>
                                              </Col>
                                            </Col>
                                            <Col sm="3">
                                              <FormLabel>Education</FormLabel>
                                              <Col sm="12">
                                                <b>
                                                  {changeIndicator &&
                                                    nomination
                                                      .additionalNomineeResponseDto
                                                      ?.education}
                                                  {!changeIndicator &&
                                                    updateEducation}
                                                </b>
                                              </Col>
                                            </Col>
                                            <Col sm="3">
                                              <FormLabel>Profession</FormLabel>
                                              <Col sm="12">
                                                <b>
                                                  {changeIndicator &&
                                                    nomination
                                                      .additionalNomineeResponseDto
                                                      ?.profession}
                                                  {!changeIndicator &&
                                                    updateProfession}
                                                </b>
                                              </Col>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="12">
                                          <Row className="g-2 form">
                                            <Col sm="3">
                                              <FormLabel>Nationality</FormLabel>
                                              <Col sm="12">
                                                <b>
                                                  {changeIndicator &&
                                                    nomination
                                                      .additionalNomineeResponseDto
                                                      ?.nationality}
                                                  {!changeIndicator &&
                                                    updateNationality}
                                                </b>
                                              </Col>
                                            </Col>
                                            <Col sm="3">
                                              <FormLabel>
                                                Social Category
                                              </FormLabel>
                                              <Col sm="12">
                                                <b>
                                                  {changeIndicator &&
                                                    nomination
                                                      .additionalNomineeResponseDto
                                                      ?.socialCategoryOfInvitee}
                                                  {!changeIndicator &&
                                                    updateSocialCat}
                                                </b>
                                              </Col>
                                            </Col>
                                            <Col sm="3">
                                              <FormLabel>
                                                Religion practiced
                                              </FormLabel>
                                              <Col sm="12">
                                                <b>
                                                  {" "}
                                                  {changeIndicator &&
                                                    nomination
                                                      .additionalNomineeResponseDto
                                                      ?.religion}
                                                  {!changeIndicator &&
                                                    updateReligionPrac}
                                                </b>
                                              </Col>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </>
                                    )}
                                    {!isAdditionalDetail && (
                                      <>
                                        <Card>
                                          <CardBody>
                                            <Col sm="12">
                                              <Row className="g-2 form">
                                                <Col sm="3">
                                                  <FormLabel>Gender</FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      type="select"
                                                      className="form-select"
                                                      defaultValue={
                                                        updateGender
                                                      }
                                                      onChange={(e) =>
                                                        setUpdateGender(
                                                          e.target.value
                                                        )
                                                      }
                                                    >
                                                      <option
                                                        selected
                                                        disabled
                                                        value=""
                                                      >
                                                        {" "}
                                                        Choose your option
                                                      </option>
                                                      <option>Male</option>
                                                      <option>Female</option>
                                                      <option>
                                                        Transgender
                                                      </option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                                <Col sm="3">
                                                  <FormLabel>
                                                    Date of Birth
                                                  </FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      defaultValue={updateDoB}
                                                      onChange={(e) =>
                                                        setUpdateDoB(
                                                          e.target.value
                                                        )
                                                      }
                                                      type="date"
                                                    />
                                                  </Col>
                                                </Col>
                                                <Col sm="3">
                                                  <FormLabel>
                                                    Education
                                                  </FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      type="text"
                                                      className="form-select"
                                                      defaultValue={
                                                        updateEducation
                                                      }
                                                      onChange={(e) =>
                                                        setUpdateEducation
                                                      }
                                                    >
                                                      {/* <option selected disabled value="">
                                              Choose your option{" "}
                                            </option>
                                            <option>MBA</option>
                                            <option>Dr.</option>
                                            <option>Msc.</option> */}
                                                    </Input>
                                                  </Col>
                                                </Col>
                                                <Col sm="3">
                                                  <FormLabel>
                                                    Profession
                                                  </FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      type="text"
                                                      className="form-select"
                                                      required
                                                      defaultValue={
                                                        updateProfession
                                                      }
                                                      onChange={(e) =>
                                                        setUpdateProfession(
                                                          e.target.value
                                                        )
                                                      }
                                                    >
                                                      {/* <option selected disabled value="">
                                              Choose your option
                                            </option>
                                            <option>Service</option>
                                            <option>Bussiness</option> */}
                                                    </Input>
                                                  </Col>
                                                </Col>
                                              </Row>
                                            </Col>
                                            <Col sm="12">
                                              <Row className="g-2 form">
                                                <Col sm="3">
                                                  <FormLabel>
                                                    Nationality
                                                  </FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      type="select"
                                                      className="form-select"
                                                      required
                                                      defaultValue={
                                                        updateNationality
                                                      }
                                                      onChange={(e) =>
                                                        setUpdateNationality(
                                                          e.target.value
                                                        )
                                                      }
                                                    >
                                                      <option
                                                        selected
                                                        disabled
                                                        value=""
                                                      >
                                                        Choose your option{" "}
                                                      </option>
                                                      <option>India</option>
                                                      <option>japan</option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                                <Col sm="3">
                                                  <FormLabel>
                                                    Social Category
                                                  </FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      type="select"
                                                      className="form-select"
                                                      required
                                                      defaultValue={
                                                        updateSocialCat
                                                      }
                                                      onChange={(e) =>
                                                        setUpdateCocialCat(
                                                          e.target.value
                                                        )
                                                      }
                                                    >
                                                      <option
                                                        selected
                                                        disabled
                                                        value=""
                                                      >
                                                        choose Your Option
                                                      </option>
                                                      <option>
                                                        Other Bahujan
                                                      </option>
                                                      <option>Sc</option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                                <Col sm="3">
                                                  <FormLabel>
                                                    Religion practiced
                                                  </FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      type="select"
                                                      className="form-control"
                                                      required
                                                      defaultValue={
                                                        updateReligionPrac
                                                      }
                                                      onChange={(e) =>
                                                        setUpdateReligionPrac(
                                                          e.target.value
                                                        )
                                                      }
                                                    >
                                                      <option
                                                        selected
                                                        disabled
                                                        value=""
                                                      >
                                                        {" "}
                                                        Choose your option
                                                      </option>
                                                      <option>Atheist</option>
                                                      <option>B</option>
                                                      <option>C</option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                              </Row>
                                            </Col>
                                          </CardBody>
                                          <CardFooter className="bg-white">
                                            <Col sm="12">
                                              <Row className="g-2 form">
                                                <Col
                                                  sm="6"
                                                  className="text-end"
                                                >
                                                  <Button className="bg-white border-secondary text-secondary ">
                                                    Cancel
                                                  </Button>
                                                </Col>
                                                <Col sm="6">
                                                  <Button
                                                    type="submit"
                                                    onClick={UpdateSubmited}
                                                  >
                                                    Submit
                                                  </Button>
                                                </Col>
                                              </Row>
                                            </Col>
                                          </CardFooter>
                                        </Card>
                                      </>
                                    )}
                                  </CardBody>
                                </Card>
                              </Form>
                            </Row>
                          </CardBody>
                          <CardFooter>
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="4">&nbsp;</Col>
                                <Col sm="8">
                                  <Row className="g-2 form">
                                    <Col sm="4">
                                      <Button className="bg-white text-secondary border-secondary">
                                        Cancel
                                      </Button>
                                    </Col>
                                    <Col sm="4">
                                      <Button
                                        onClick={handleRejectNomination}
                                        className="bg-warning border-warning text-white"
                                      >
                                        Reject
                                      </Button>
                                    </Col>
                                    <Col sm="4">
                                      <Button
                                        className="bg-success border-success text-white"
                                        onClick={handleApproveNomination}
                                      >
                                        Approve
                                      </Button>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Col>
                          </CardFooter>
                        </Card>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Col>
          </Col>
        </Col>
        {/* Add comment model */}
        <Col sm="12">
          <Modal show={isaddComment} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Reason for rejection</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Col sm="12">Provide some information for future reference</Col>
              <Col sm="12">
                <textarea
                  className="v-100 col-sm-12"
                  onPointerLeave="type your rejection comments here "
                ></textarea>
              </Col>
              <Col sm="12">256 characters only</Col>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                cancel
              </Button>
              <Button variant="primary" onClick={handleDoneShow}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>

        {/* comment done  */}
        <Col sm="12">
          <Modal show={iscommentdone} onHide={handleDoneClose}>
            <Modal.Body>
              <Col
                sm="12"
                className="d-flex justify-content-center align-items-center h-100 font-weight-bold"
              >
                <img
                  src={SuccessIcon}
                  alt="My Image"
                  className="h-4 w-4"
                  style={{ height: "40%", width: "40%" }}
                />
              </Col>
              <Col
                sm="12"
                className="d-flex justify-content-center align-items-center h-100 font-weight-bold"
              >
                submission successfully
              </Col>
            </Modal.Body>
            <Modal.Footer>
              <Col className="d-flex justify-content-center align-items-center">
                <Button variant="primary" onClick={handleDoneClose}>
                  ok
                </Button>
              </Col>
            </Modal.Footer>
          </Modal>
        </Col>
      </Desktop>

      <Mobile>
        <Col className="section">
          <Col className="container-fluid px-0 ">
            <Col className="form-control  border-0">
              <Col className="col-12">
                <Row className="g-2 form">
                  <Col className="col-12 form-group">
                    <Row className="g-2 form">
                      <Col className="col-8">Review Nominated Details</Col>
                      <Col className="col-4 text-end">
                        <Link to="/auth/login/reviewnomination">
                          <Button>Back</Button>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                  <hr />
                  <Col className="col-12 form-control p-0 border-0 bg-light form-group">
                    <Row className="g-2 form">
                      <Col className="col-12">
                        <Accordion
                          defaultActiveKey="0"
                          className="bg-transparent"
                        >
                          <Accordion.Item
                            eventKey="0"
                            className="bg-transparent"
                          >
                            <Accordion.Header className="bg-transparent">
                              <Col className="col-12">
                                <Row className="g-2 form">
                                  <Col className="col-4">Refered by</Col>
                                  <Col className="col-8">
                                    <Row className="g-2 form">
                                      <Col className="col-8 text-primary">
                                        Mr. Prafull Bhagat
                                      </Col>
                                      <Col className="col-4">(123456)</Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                            </Accordion.Header>
                            <Accordion.Body className="bg-light px-1">
                              <Row className="g-2 form">
                                <Col className="col-12">
                                  <Row className="g-2 form">
                                    <Col className="col-4">
                                      <FormLabel>Know as</FormLabel>
                                      <Col className="col-12">Friend</Col>
                                    </Col>
                                    <Col className="col-4">
                                      <FormLabel>Know from</FormLabel>
                                      <Col className="col-12">05-10 years</Col>
                                    </Col>
                                    <Col className="col-4">
                                      <FormLabel>Appeal shared</FormLabel>
                                      <Col className="col-12">yes</Col>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col className="p-2 col-12">&nbsp;</Col>
                                <Col className="col-12 border-bottom">
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      Introductory Details
                                    </Col>
                                    <Col
                                      className="col-2"
                                      onClick={introductoryDetails}
                                    >
                                      Edit
                                    </Col>
                                  </Row>
                                </Col>
                                {isintroductoryDetails && (
                                  <Col className="col-12 bg-light">
                                    <Row className="g-2 form">
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="4">
                                            <FormLabel>
                                              Introductory type
                                            </FormLabel>
                                            <Col className="12">Online</Col>
                                          </Col>
                                          <Col className="4">
                                            <FormLabel>M21 Wing</FormLabel>
                                            <Col className="col-12">
                                              Technology
                                            </Col>
                                          </Col>
                                          <Col className="4">
                                            <FormLabel>
                                              Special introductory drive
                                            </FormLabel>
                                            <Col className="col-12">None</Col>
                                          </Col>
                                        </Row>
                                      </Col>
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-6">
                                            <FormLabel>
                                              Prefered language
                                            </FormLabel>
                                            <Col className="col-12">
                                              English, Hindi
                                            </Col>
                                          </Col>
                                          <Col className="col-6">
                                            <FormLabel>
                                              Upcoming introductory
                                            </FormLabel>
                                            <Col className="col-12">None</Col>
                                          </Col>
                                        </Row>
                                      </Col>
                                      <Col className="col-12">
                                        <FormLabel>Comments</FormLabel>
                                        <Col className="col-12">
                                          During his college years, Rancho was
                                          shown to have a brilliant personal
                                          philosophy, especially in terms of
                                          education.
                                        </Col>
                                      </Col>
                                    </Row>
                                  </Col>
                                )}
                                {!isintroductoryDetails && (
                                  <>
                                    <Col className="section">
                                      <Col className="container-fluid p-0">
                                        <Col className="bg-light form-group  form-control border-0 p-0">
                                          <Row className="g-2 form">
                                            <Col className="col-12">
                                              <Row className="g-2 form">
                                                <Col className="col-4">
                                                  <FormLabel>
                                                    Introductory type
                                                  </FormLabel>
                                                  <Col className="col-12">
                                                    <Input type="select">
                                                      <option>Online</option>
                                                      <option>Offline</option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                                <Col className="col-4">
                                                  <FormLabel>
                                                    M21 wing
                                                  </FormLabel>
                                                  <Col className="col-12">
                                                    <Input type="select">
                                                      <option>Art</option>
                                                      <option>
                                                        Technology
                                                      </option>
                                                      <option>Engg.</option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                                <Col className="col-4">
                                                  <FormLabel>
                                                    Special introductory drive
                                                  </FormLabel>
                                                  <Col className="col-12">
                                                    <Input type="select">
                                                      <option>None</option>
                                                      <option>
                                                        option one
                                                      </option>
                                                      <option>
                                                        option two
                                                      </option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                              </Row>
                                            </Col>
                                            <Col className="col-12">
                                              <Row className="g-2 form">
                                                <Col className="col-6">
                                                  <FormLabel>
                                                    Prefered language
                                                  </FormLabel>
                                                  <Col className="col-12">
                                                    <Input type="select">
                                                      <option>Hindi</option>
                                                      <option>English</option>
                                                      <option>Marathi</option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                                <Col className="col-6">
                                                  <FormLabel>
                                                    Upcoming introductory
                                                  </FormLabel>
                                                  <Col className="col-12">
                                                    <Input type="select">
                                                      <option>None</option>
                                                      <option>
                                                        Option one
                                                      </option>
                                                      <option>
                                                        Option two
                                                      </option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                              </Row>
                                            </Col>
                                            <Col className="col-12">
                                              <FormLabel>Comments</FormLabel>
                                              <Col className="col-12">
                                                <Input
                                                  type="textarea"
                                                  placeholder="Enter your comments"
                                                />
                                              </Col>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Col>
                                    </Col>
                                  </>
                                )}
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="p-1">&nbsp;</Col>
                  <Col className="col-12 ">
                    <Accordion>
                      <Accordion.Item>
                        <Accordion.Header>
                          <Col className="col-12">
                            <h4>nominated Person Details</h4>
                          </Col>
                        </Accordion.Header>
                        <Accordion.Body className="px-2">
                          <Col className="">
                            <Col className="container-fluid">
                              <Row className="g-2 form">
                                <Col className="col-12 border-bottom">
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <FormLabel>Name</FormLabel>
                                    </Col>
                                    <Col
                                      className="col-2 text-end"
                                      onClick={NominatedPersonName}
                                    >
                                      Edit
                                    </Col>
                                  </Row>
                                </Col>
                                {isviewName && (
                                  <Col className="col-12">
                                    <FormLabel>Saba Anjum Karim</FormLabel>
                                  </Col>
                                )}
                                {!isviewName && (
                                  <Col className="col-12">
                                    <Input
                                      type="text"
                                      placeholder="Enter your name"
                                    />
                                  </Col>
                                )}
                                <Col className="col-12 border-bottom">
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <FormLabel>Contact Details</FormLabel>
                                    </Col>
                                    <Col
                                      className="col-2 text-end"
                                      onClick={ContactDetails}
                                    >
                                      Edit
                                    </Col>
                                  </Row>
                                </Col>
                                {isContactDetails && (
                                  <>
                                    <Col className="col-12">
                                      <Row className="g-2 form">
                                        <Col className="col-12">
                                          <FormLabel>Mobile Number</FormLabel>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-8">
                                              +91 9876 543 210
                                            </Col>
                                            <Col className="col-4">
                                              <FormLabel>Primary</FormLabel>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12 form-check">
                                          <Input type="checkbox" />
                                          <FormLabel>
                                            whatsapp number too
                                          </FormLabel>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-12 form-control form-group p-0 border-0">
                                      <Col className="col-12">
                                        <FormLabel>Email</FormLabel>
                                        <Row className="g-2 form">
                                          <Col className="col-12">
                                            <Row className="g-2 form">
                                              <Col className="col-6">
                                                <FormLabel>
                                                  Saba@gmail.com
                                                </FormLabel>
                                              </Col>
                                              <Col className="col-6">
                                                <FormLabel>Primary</FormLabel>
                                              </Col>
                                            </Row>
                                          </Col>
                                          <Col className="col-12">
                                            <Row className="g-2 form">
                                              <Col className="col-6">
                                                <FormLabel>
                                                  Saba@gmail.com
                                                </FormLabel>
                                              </Col>
                                              <Col className="col-6">
                                                <FormLabel>Alternate</FormLabel>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Col>
                                  </>
                                )}
                                {!isContactDetails && (
                                  <>
                                    <Col className="col-12 form-control p-0 border-0 form-group">
                                      <Col className="Container-fluid">
                                        <Row className="g-2 form">
                                          <Col className="col-12">
                                            <FormLabel>Mobile number</FormLabel>
                                          </Col>
                                          <Col className="col-12">
                                            <Row className="g-2 form">
                                              <Col className="col-6">
                                                <Input
                                                  type="text"
                                                  placeholder="Enter your mobile number"
                                                />
                                              </Col>
                                              <Col className="col-6">
                                                <Input type="select">
                                                  <option>Primary</option>
                                                  <option>Alternate</option>
                                                </Input>
                                              </Col>
                                            </Row>
                                          </Col>
                                          <Col className="col-12"></Col>
                                        </Row>
                                      </Col>
                                    </Col>
                                    <Col className="col-12 form-control form-group p-0 border-0">
                                      <Col className="col-12">
                                        <FormLabel>Email</FormLabel>
                                        <Row className="g-2 form">
                                          <Col className="col-12">
                                            <Row className="g-2 form">
                                              <Col className="col-6">
                                                <Input
                                                  type="email"
                                                  placeholder="Enter your email"
                                                />
                                              </Col>
                                              <Col className="col-6">
                                                <Input type="select">
                                                  <option>Primary</option>
                                                  <option>Alternate</option>
                                                </Input>
                                              </Col>
                                            </Row>
                                          </Col>
                                          <Col className="col-12">
                                            <Row className="g-2 form">
                                              <Col className="col-6">
                                                <Input
                                                  type="email"
                                                  placeholder="Enter your email"
                                                />
                                              </Col>
                                              <Col className="col-6">
                                                <Input type="select">
                                                  <option>Primary</option>
                                                  <option>Alternate</option>
                                                </Input>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Col>
                                  </>
                                )}
                                <Col className="col-12 border-bottom">
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <FormLabel>Address Detail</FormLabel>
                                    </Col>
                                    <Col
                                      className="col-2 text-end"
                                      onClick={PersonalAddressDetail}
                                    >
                                      Edit
                                    </Col>
                                  </Row>
                                </Col>
                                {isPersonalAddressShow && (
                                  <>
                                    <Col className="form-control form-group border-0 p-0">
                                      <Col className="container-fluid ">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-12">
                                              <Row className="g-2 form">
                                                <Col className="col-12">
                                                  <FormLabel>
                                                    Present address
                                                  </FormLabel>
                                                </Col>
                                                <Col className="col-12">
                                                  <p>
                                                    Flat no. 1891 Bharat Bhavan
                                                    Near Victory Tower 14 Main
                                                    Road, 02nd Sector, Vijay
                                                    Nagar, Bangalore, Karnataka
                                                    560100
                                                  </p>
                                                </Col>
                                              </Row>
                                            </Col>
                                            <Col className="col-12">
                                              <Row className="g-2 form">
                                                <Col className="col-12">
                                                  <FormLabel>
                                                    Permanent address
                                                  </FormLabel>
                                                </Col>
                                                <Col className="col-12">
                                                  <p>
                                                    Flat no. 1891 Bharat Bhavan
                                                    Near Victory Tower 14 Main
                                                    Road, 02nd Sector, Vijay
                                                    Nagar, Bangalore, Karnataka
                                                    560100
                                                  </p>
                                                </Col>
                                              </Row>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Col>
                                    </Col>
                                  </>
                                )}
                                {!isPersonalAddressShow && (
                                  <>
                                    <Col className="form-control form-group border-0 p-0">
                                      <Col className="container-fluid p-0">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-12">
                                              <Accordion>
                                                <Accordion.Item>
                                                  <Accordion.Header>
                                                    Present address
                                                  </Accordion.Header>
                                                  <Accordion.Body className="p-1">
                                                    <Col className="form-control form-group border-0 p-0">
                                                      <Col className="container-fluid">
                                                        <Row className="g-2 form">
                                                          <Col className="col-12">
                                                            <FormLabel>
                                                              House/ Flast
                                                              No./Building
                                                            </FormLabel>
                                                            <Col className="col-12">
                                                              <Input
                                                                type="text"
                                                                placeholder="Enter house/flat no./buling address here"
                                                                className="rounded-0"
                                                              />
                                                            </Col>
                                                          </Col>
                                                          <Col className="col-12">
                                                            <FormLabel>
                                                              Street Details
                                                            </FormLabel>
                                                            <Col className="col-12">
                                                              <Input
                                                                type="text"
                                                                placeholder="Enter street deatil here"
                                                                className="rounded-0"
                                                              />
                                                            </Col>
                                                          </Col>
                                                          <Col className="col-12">
                                                            <FormLabel>
                                                              Landmark
                                                            </FormLabel>
                                                            <Col className="col-12">
                                                              <Input
                                                                type="text"
                                                                placeholder="Enter landmark here"
                                                                className="rounded-0"
                                                              />
                                                            </Col>
                                                          </Col>
                                                          <Col className="col-12">
                                                            <Row className="g-2 form">
                                                              <Col className="col-6">
                                                                <FormLabel>
                                                                  Country
                                                                </FormLabel>
                                                                <Col className="col-12">
                                                                  <Input type="select">
                                                                    <option>
                                                                      India
                                                                    </option>
                                                                    <option>
                                                                      Japan
                                                                    </option>
                                                                    <option>
                                                                      U.S.A
                                                                    </option>
                                                                  </Input>
                                                                </Col>
                                                              </Col>
                                                              <Col className="col-6">
                                                                <FormLabel>
                                                                  State
                                                                </FormLabel>
                                                                <Col className="col-12">
                                                                  <Input type="select">
                                                                    <option>
                                                                      India
                                                                    </option>
                                                                    <option>
                                                                      Japan
                                                                    </option>
                                                                    <option>
                                                                      U.S.A
                                                                    </option>
                                                                  </Input>
                                                                </Col>
                                                              </Col>
                                                            </Row>
                                                          </Col>
                                                          <Col className="col-12">
                                                            <Row className="g-2 form">
                                                              <Col className="col-6">
                                                                <FormLabel>
                                                                  City
                                                                </FormLabel>
                                                                <Col className="col-12">
                                                                  <Input type="select">
                                                                    <option>
                                                                      India
                                                                    </option>
                                                                    <option>
                                                                      Japan
                                                                    </option>
                                                                    <option>
                                                                      U.S.A
                                                                    </option>
                                                                  </Input>
                                                                </Col>
                                                              </Col>
                                                              <Col className="col-6">
                                                                <FormLabel>
                                                                  District
                                                                </FormLabel>
                                                                <Col className="col-12">
                                                                  <Input type="select">
                                                                    <option>
                                                                      India
                                                                    </option>
                                                                    <option>
                                                                      Japan
                                                                    </option>
                                                                    <option>
                                                                      U.S.A
                                                                    </option>
                                                                  </Input>
                                                                </Col>
                                                              </Col>
                                                            </Row>
                                                          </Col>
                                                          <Col className="col-12">
                                                            <Row className="g-2 form">
                                                              <Col className="col-6">
                                                                <FormLabel>
                                                                  Taluka
                                                                </FormLabel>
                                                                <Col className="col-12">
                                                                  <Input type="select">
                                                                    <option>
                                                                      India
                                                                    </option>
                                                                    <option>
                                                                      Japan
                                                                    </option>
                                                                    <option>
                                                                      U.S.A
                                                                    </option>
                                                                  </Input>
                                                                </Col>
                                                              </Col>
                                                              <Col className="col-6">
                                                                <FormLabel>
                                                                  Pin/Zip code
                                                                </FormLabel>
                                                                <Col className="col-12">
                                                                  <Input type="select">
                                                                    <option>
                                                                      India
                                                                    </option>
                                                                    <option>
                                                                      Japan
                                                                    </option>
                                                                    <option>
                                                                      U.S.A
                                                                    </option>
                                                                  </Input>
                                                                </Col>
                                                              </Col>
                                                            </Row>
                                                          </Col>
                                                        </Row>
                                                      </Col>
                                                    </Col>
                                                  </Accordion.Body>
                                                </Accordion.Item>
                                              </Accordion>
                                            </Col>
                                            <Col className="col-12 p-1">
                                              &nbsp;
                                            </Col>
                                            <Col className="col-12">
                                              <Accordion>
                                                <Accordion.Item>
                                                  <Accordion.Header>
                                                    Permanent address
                                                  </Accordion.Header>
                                                  <Accordion.Body className="p-1">
                                                    <Col className="form-control form-group border-0 p-0">
                                                      <Col className="container-fluid">
                                                        <Row className="g-2 form">
                                                          <Col className="col-12">
                                                            <FormLabel>
                                                              House/ Flast
                                                              No./Building
                                                            </FormLabel>
                                                            <Col className="col-12">
                                                              <Input
                                                                type="text"
                                                                placeholder="Enter house/flat no./buling address here"
                                                                className="rounded-0"
                                                              />
                                                            </Col>
                                                          </Col>
                                                          <Col className="col-12">
                                                            <FormLabel>
                                                              Street Details
                                                            </FormLabel>
                                                            <Col className="col-12">
                                                              <Input
                                                                type="text"
                                                                placeholder="Enter street deatil here"
                                                                className="rounded-0"
                                                              />
                                                            </Col>
                                                          </Col>
                                                          <Col className="col-12">
                                                            <FormLabel>
                                                              Landmark
                                                            </FormLabel>
                                                            <Col className="col-12">
                                                              <Input
                                                                type="text"
                                                                placeholder="Enter landmark here"
                                                                className="rounded-0"
                                                              />
                                                            </Col>
                                                          </Col>
                                                          <Col className="col-12">
                                                            <Row className="g-2 form">
                                                              <Col className="col-6">
                                                                <FormLabel>
                                                                  Country
                                                                </FormLabel>
                                                                <Col className="col-12">
                                                                  <Input type="select">
                                                                    <option>
                                                                      India
                                                                    </option>
                                                                    <option>
                                                                      Japan
                                                                    </option>
                                                                    <option>
                                                                      U.S.A
                                                                    </option>
                                                                  </Input>
                                                                </Col>
                                                              </Col>
                                                              <Col className="col-6">
                                                                <FormLabel>
                                                                  State
                                                                </FormLabel>
                                                                <Col className="col-12">
                                                                  <Input type="select">
                                                                    <option>
                                                                      India
                                                                    </option>
                                                                    <option>
                                                                      Japan
                                                                    </option>
                                                                    <option>
                                                                      U.S.A
                                                                    </option>
                                                                  </Input>
                                                                </Col>
                                                              </Col>
                                                            </Row>
                                                          </Col>
                                                          <Col className="col-12">
                                                            <Row className="g-2 form">
                                                              <Col className="col-6">
                                                                <FormLabel>
                                                                  City
                                                                </FormLabel>
                                                                <Col className="col-12">
                                                                  <Input type="select">
                                                                    <option>
                                                                      India
                                                                    </option>
                                                                    <option>
                                                                      Japan
                                                                    </option>
                                                                    <option>
                                                                      U.S.A
                                                                    </option>
                                                                  </Input>
                                                                </Col>
                                                              </Col>
                                                              <Col className="col-6">
                                                                <FormLabel>
                                                                  District
                                                                </FormLabel>
                                                                <Col className="col-12">
                                                                  <Input type="select">
                                                                    <option>
                                                                      India
                                                                    </option>
                                                                    <option>
                                                                      Japan
                                                                    </option>
                                                                    <option>
                                                                      U.S.A
                                                                    </option>
                                                                  </Input>
                                                                </Col>
                                                              </Col>
                                                            </Row>
                                                          </Col>
                                                          <Col className="col-12">
                                                            <Row className="g-2 form">
                                                              <Col className="col-6">
                                                                <FormLabel>
                                                                  Taluka
                                                                </FormLabel>
                                                                <Col className="col-12">
                                                                  <Input type="select">
                                                                    <option>
                                                                      India
                                                                    </option>
                                                                    <option>
                                                                      Japan
                                                                    </option>
                                                                    <option>
                                                                      U.S.A
                                                                    </option>
                                                                  </Input>
                                                                </Col>
                                                              </Col>
                                                              <Col className="col-6">
                                                                <FormLabel>
                                                                  Pin/Zip code
                                                                </FormLabel>
                                                                <Col className="col-12">
                                                                  <Input type="select">
                                                                    <option>
                                                                      India
                                                                    </option>
                                                                    <option>
                                                                      Japan
                                                                    </option>
                                                                    <option>
                                                                      U.S.A
                                                                    </option>
                                                                  </Input>
                                                                </Col>
                                                              </Col>
                                                            </Row>
                                                          </Col>
                                                        </Row>
                                                      </Col>
                                                    </Col>
                                                  </Accordion.Body>
                                                </Accordion.Item>
                                              </Accordion>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Col>
                                    </Col>
                                  </>
                                )}
                                <Col className="col-12 border-bottom">
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      Additional Details
                                    </Col>
                                    <Col
                                      className="col-2 text-end"
                                      onClick={AdditionalDetail}
                                    >
                                      Edit
                                    </Col>
                                  </Row>
                                </Col>
                                {isAdditionalDetail && (
                                  <>
                                    <Col className="col-12">
                                      <Row className="g-2 form">
                                        <Col className="col-3">
                                          <FormLabel>Gender</FormLabel>
                                          <Col className="col-12">Male</Col>
                                        </Col>
                                        <Col className="col-3">
                                          <FormLabel>Date of birth</FormLabel>
                                          <Col className="col-12">
                                            <b>DD-MM-YYYY</b>
                                          </Col>
                                        </Col>
                                        <Col className="col-3">
                                          <FormLabel>Education</FormLabel>
                                          <Col className="col-12">MBA</Col>
                                        </Col>
                                        <Col className="col-3">
                                          <FormLabel>Profession</FormLabel>
                                          <Col className="col-12">Service</Col>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-12">
                                      <Row className="g-2 form">
                                        <Col className="col-4">
                                          <FormLabel>Nationality</FormLabel>
                                          <Col className="col-12">Indian</Col>
                                        </Col>
                                        <Col className="col-4">
                                          <FormLabel>Social category</FormLabel>
                                          <Col className="col-12">
                                            Other Bahujan
                                          </Col>
                                        </Col>
                                        <Col className="col-4">
                                          <FormLabel>
                                            Religion practiced
                                          </FormLabel>
                                          <Col className="col-12">Atheist</Col>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </>
                                )}
                                {!isAdditionalDetail && (
                                  <>
                                    <Col className="col-12">
                                      <Row className="g-2 form">
                                        <Col className="col-3">
                                          <FormLabel>Gender</FormLabel>
                                          <Col className="col-12">
                                            <Input type="select">
                                              <option>Male</option>
                                              <option>Female</option>
                                              <option>Transgender</option>
                                            </Input>
                                          </Col>
                                        </Col>
                                        <Col className="col-3">
                                          <FormLabel>Date of birth</FormLabel>
                                          <Col className="col-12">
                                            <Input
                                              className=""
                                              type="date"
                                              placeholder="DD-MM-YYYy"
                                            />
                                          </Col>
                                        </Col>
                                        <Col className="col-3">
                                          <FormLabel>Education</FormLabel>
                                          <Col className="col-12">
                                            <Input type="select">
                                              <option>MBA</option>
                                              <option>BA</option>
                                              <option>Engg</option>
                                            </Input>
                                          </Col>
                                        </Col>
                                        <Col className="col-3">
                                          <FormLabel>Profession</FormLabel>
                                          <Col className="col-12">
                                            <Input type="select">
                                              <option>Service</option>
                                              <option>Bussiness</option>
                                              <option>Self employee</option>
                                            </Input>
                                          </Col>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-12">
                                      <Row className="g-2 form">
                                        <Col className="col-4">
                                          <FormLabel>Nationality</FormLabel>
                                          <Col className="col-12">
                                            <Input className="" type="select">
                                              <option>India</option>
                                              <option>Japan</option>
                                              <option>USA</option>
                                            </Input>
                                          </Col>
                                        </Col>
                                        <Col className="col-4">
                                          <FormLabel>Social Catagory</FormLabel>
                                          <Col className="col-12">
                                            <Input type="select">
                                              <option>Bahujan</option>
                                              <option>SC</option>
                                              <option>ST</option>
                                            </Input>
                                          </Col>
                                        </Col>
                                        <Col className="col-4">
                                          <FormLabel>
                                            Religion practiced
                                          </FormLabel>
                                          <Col className="col-12">
                                            <Input type="select">
                                              <option>Atheist</option>
                                              <option>B</option>
                                              <option>C</option>
                                            </Input>
                                          </Col>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </>
                                )}
                              </Row>
                            </Col>
                          </Col>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Col>
        </Col>
      </Mobile>
    </>
  );
};
export default ViewNominationRn;
