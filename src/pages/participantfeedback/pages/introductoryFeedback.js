import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  FormLabel,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardBody, CardFooter, CardHeader, Input } from "reactstrap";
import participantImg from "../../../assets/img/u24146.png";
import ThankYouImg from "../../../assets/img/u24562.png";

const IntroductoryFeedback = () => {
  const BaseURL = process.env.REACT_APP_BASE_URL;

  const [isIntroductoryDetail, setIsIntroductoryDetails] = useState(1);
  const [isParticipantForm, setIsPraticipantForm] = useState(1);
  const [isIntroductoryDetailNext, setIsIntroductoryDetailsNext] = useState(1);
  const [isContactDetails, setIsContactDetails] = useState(1);
  const [isAdditionalDetailsNext, setIsAdditionalDetailsNext] = useState(1);
  const [isDivercityDeatils, setIsDivercityDetails] = useState(1);
  const [isFinalComment, setIsFinalComment] = useState(1);
  const [isTankYou, setIsThankYou] = useState(1);

  const IntroductorydetailsNext = () => {
    setIsIntroductoryDetailsNext((current) => !current);
    setIsIntroductoryDetails((current) => !current);
  };

  const DetailsIntroductory = () => {
    setIsIntroductoryDetails((current) => !current);
    setIsPraticipantForm((current) => !current);
  };

  const ContactDetails = () => {
    setIsContactDetails((current) => !current);
    setIsIntroductoryDetailsNext((current) => !current);
  };
  const AdditionaldetailNext = () => {
    setIsAdditionalDetailsNext((current) => !current);
    setIsContactDetails((current) => !current);
  };

  const DivercityDetails = () => {
    setIsDivercityDetails((current) => !current);
    setIsAdditionalDetailsNext((current) => !current);
  };

  const Finalcomment = () => {
    setIsFinalComment((current) => !current);
    setIsDivercityDetails((current) => !current);
  };
  const TankYou = () => {};

  // .....introductory details.....
  const [referredByHolder, setReferredByHolder] = useState("");
  const [introductoryTypeHolder, setIntroductoryTypeHolder] = useState("");
  const [dateHolder, setDateHolder] = useState("");
  const [locationHolder, setLocationHolder] = useState("");

  //.........personal details......
  const [titleHolder, setTitleHolder] = useState("");
  const [firstNameHolder, setFirstNameHolder] = useState("");
  const [lastNameHolder, setLastNameHolder] = useState("");
  const [mobileNumberHolder, setMobileNumberHolder] = useState("");
  const [emailHolder, setEmailHolder] = useState("");

  //..........contact details...........
  const [houseNumber, setHouseNumber] = useState("");
  const [streetDetailHolder, setStreetDetailHolder] = useState("");
  const [countryHolder, setCountryHolder] = useState("");
  const [stateHolder, setStateHolder] = useState("");
  const [cityHolder, setCityHolder] = useState("");
  const [districtHolder, setDistrictHolder] = useState("");
  const [talukaHolder, setTalukaHolder] = useState("");
  const [pinzipHolder, setPinZipHolder] = useState("");

  //........Additional details.........
  const [dateBirthHolder, setDateBirthHolder] = useState("");
  const [educationHolder, setEducationHolder] = useState("");
  const [professionHolder, setProfessionHolder] = useState("");
  const [socialExHolder, setSocialExHolder] = useState("");
  const [fieldExpertiesHolder, setFieldExpertiesHolder] = useState("");
  const [fieldInterstHolder, setFieldInterstHolder] = useState("");

  //..........divercity details..........
  const [genderHolder, setGenderHolder] = useState("");
  const [nationalityHolder, setNationalityHolder] = useState("");
  const [languageHolder, setLanguageHolder] = useState("");
  const [socialCategoryHolder, setSocialCategoryHolder] = useState("");
  const [religionPracHolder, setReligionPracHolder] = useState("");

  //.....final comment.........
  const [checkHolder, setCheckHolder] = useState("");
  const [commentHolder, setCommentHolder] = useState("");

  const introductoryDetails = {
    referredBy: referredByHolder,
    introductoryType: introductoryTypeHolder,
    date: dateHolder,
    locaiton: locationHolder,
  };

  const personalDetails = {
    title: titleHolder,
    firstname: firstNameHolder,
    lastname: lastNameHolder,
    mobile: mobileNumberHolder,
    email: emailHolder,
  };

  const contactDetails = {
    house: houseNumber,
    street: streetDetailHolder,
    country: countryHolder,
    state: stateHolder,
    city: cityHolder,
    district: districtHolder,
    taluka: talukaHolder,
    pincode: pinzipHolder,
  };

  const additionalDetails = {
    dob: dateBirthHolder,
    education: educationHolder,
    profession: professionHolder,
    sociaWorkExperience: socialExHolder,
    fieldOfExpertise: fieldExpertiesHolder,
    fieldOfIntrest: fieldInterstHolder,
  };

  const diversityDetails = {
    gender: genderHolder,
    nationality: nationalityHolder,
    languageKnown: languageHolder,
    socialCatogery: socialCategoryHolder,
    religionPracticed: religionPracHolder,
  };

  const finalComment = {
    comments: checkHolder,
    finalcomments: commentHolder,
  };

  const responsebody = {
    introductoryDetails: introductoryDetails,
    personalDetails: personalDetails,
    contactDetails: contactDetails,
    additionalDetails: additionalDetails,
    diversityDetails: diversityDetails,
    finalComment: finalComment,
  };

  const FeedbackFormSubmit = (e) => {
    console.log("fun got call");
    setIsThankYou((current) => !current);
    setIsFinalComment((current) => !current);

    e.preventDefault();
    fetch(`${BaseURL}/api/feedback/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(responsebody),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("submited data", data);
      });
  };
  const [getIntroductoryType, setGetIntroductoryType] = useState([]);
  const [getLocationHolder, setGetLocationHolder] = useState([]);
  const [getAdditionalDetailEdu, setGetAdditionalDetailEdu] = useState([]);
  const [getProfession, setGetProfession] = useState([]);
  const [getSocialWorkEx, setGetSocialWorkEx] = useState([]);
  const [getFieldEx, setGetFieldEx] = useState([]);
  const [getFieldInter, setGetFieldInter] = useState([]);
  const [getGender, setGetGender] = useState([]);
  const [getNationality, setGetNationality] = useState([]);
  const [getLanguage, setGetLanguage] = useState([]);
  const [getSocialCate, setGetSocailCate] = useState([]);
  const [getReligionPrac, setGetReligionPrac] = useState([]);
  const [getEducationSector, setGetEducationSector] = useState([]);
  const [getUnivercity, setGetUnivercity] = useState([]);

  useEffect(() => {
    fetch(`${BaseURL}/api/data/introductory`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGetIntroductoryType(data);
        console.log("intro type ", getIntroductoryType);
      });

    fetch(`${BaseURL}/api/data/location`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGetLocationHolder(data);
        console.log("location data", getLocationHolder);
      });

    fetch(`${BaseURL}/api/data/education`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGetAdditionalDetailEdu(data);
        console.log("education details", getAdditionalDetailEdu);
      });

    fetch(`${BaseURL}/api/data/profession`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGetProfession(data);
        console.log("Profession data", getProfession);
      });

    fetch(`${BaseURL}/api/data/education-sector`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGetEducationSector(data);
        console.log("data from education sector", getEducationSector);
      });

    fetch(`${BaseURL}/api/data/university`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGetUnivercity(data);
        console.log("data univercity", getUnivercity);
      });

    fetch(`${BaseURL}/api/data/social-work-experience`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGetSocialWorkEx(data);
        console.log("Social ex data", getSocialWorkEx);
      });

    fetch(`${BaseURL}/api/data/field-of-expertise`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGetFieldEx(data);
        console.log("data of field experties", getFieldEx);
      });

    fetch(`${BaseURL}/api/data/field-of-interest`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGetFieldInter(data);
        console.log("data of field interest", getFieldInter);
      });

    fetch(`${BaseURL}/api/data/gender`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGetGender(data);
        console.log("gender data", getGender);
      });

    fetch(`${BaseURL}/api/data/nationality`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGetNationality(data);
        console.log("data nationality", getNationality);
      });

    fetch(`${BaseURL}/api/data/language`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGetLanguage(data);
        console.log("data on language", getLanguage);
      });

    fetch(`${BaseURL}/api/data/social-category`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGetSocailCate(data);
        console.log("data for social catagory", getSocialCate);
      });

    fetch(`${BaseURL}/api/data/religion-practiced`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGetReligionPrac(data);
        console.log("religion prac", getReligionPrac);
      });
  }, []);

  return (
    <>
      <Col className="section">
        <Col className="container-fluid">
          <Row className="g-2 form">
            <Col className="form-control border-0">
              <Row className="g-2 form">
                <Card className="border-0">
                  <CardHeader className="bg-white border-0">
                    <Col sm="12" className="form-group">
                      <h4>Introductory Participant Feedback form</h4>
                    </Col>
                  </CardHeader>
                  <Form onSubmit={FeedbackFormSubmit}>
                    <CardBody>
                      <Row className="g-2 form">
                        <Col sm="12">
                          {isParticipantForm && (
                            <>
                              <CardBody>
                                <Col className="form-control">
                                  <Row className="g-2 form">
                                    <Col sm="8">
                                      <Row className="g-2 form">
                                        <Col sm="12">
                                          <h5>
                                            Thank you for your participation in
                                            our Movement21 introductory meeting.
                                            <br />
                                            <br />
                                            We would be grateful if you could
                                            spare 5 mins or less to sharing your
                                            feedback and let us know how was
                                            your experience with us.
                                          </h5>
                                        </Col>
                                        <Col sm="12">
                                          <Row className="g-2 form">
                                            <Col sm="6">
                                              <p>
                                                Click on start button once you
                                                are ready.
                                              </p>
                                            </Col>
                                            <Col sm="6">
                                              <Button
                                                onClick={DetailsIntroductory}
                                              >
                                                Start
                                              </Button>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col sm="4">
                                      <img src={participantImg} />
                                    </Col>
                                  </Row>
                                </Col>
                              </CardBody>
                              <CardFooter>
                                <Col className="section">
                                  <Row className="g-2 form">
                                    <Col sm="12">
                                      <b>Please note:</b>
                                      <ul>
                                        <li> the link will be active till</li>
                                        <li>
                                          The information gathered will be used
                                          for quality assurance only
                                        </li>
                                        <li>
                                          We value your privacy and do not sell
                                          personal information to third parties
                                        </li>
                                        <li>
                                          You can only submit the survey once.
                                        </li>
                                        <li>
                                          You can save your responses at anytime
                                          and submit the survey for later
                                        </li>
                                      </ul>
                                      We appreciate your time and feedback.
                                    </Col>
                                  </Row>
                                </Col>
                              </CardFooter>
                            </>
                          )}

                          {!isIntroductoryDetail && (
                            <>
                              <Col sm="12" className="section">
                                <Card className="border-0">
                                  <CardHeader className="bg-white border-0">
                                    <b>
                                      <h5>Introductorydetails</h5>
                                    </b>
                                  </CardHeader>
                                  <CardBody>
                                    <Col className="section">
                                      <Col sm="12" className="form-group">
                                        <Row className="g-2 form">
                                          <Col sm="12">
                                            <Row className="g-2 form">
                                              <Col sm="12">
                                                <FormLabel>
                                                  Referred by
                                                  <sup className="text-danger">
                                                    *
                                                  </sup>
                                                </FormLabel>
                                              </Col>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col sm="4">
                                                    <Input
                                                      defaultValue={
                                                        referredByHolder
                                                      }
                                                      onChange={(e) =>
                                                        setReferredByHolder(
                                                          e.target.value
                                                        )
                                                      }
                                                      placeholder="Enter the name"
                                                    />
                                                  </Col>
                                                </Row>
                                              </Col>
                                              <Col sm="12">
                                                <FormLabel>
                                                  <small>
                                                    Name of the person who
                                                    introduced you to
                                                    Movement21.
                                                  </small>
                                                </FormLabel>
                                              </Col>
                                            </Row>
                                          </Col>
                                          <Col sm="12">
                                            <Row className="g-2 form">
                                              <Col sm="4">
                                                <FormLabel>
                                                  Introductory type
                                                  <sup className="text-danger">
                                                    *
                                                  </sup>
                                                </FormLabel>
                                                <Col sm="12">
                                                  <Input
                                                    defaultValue={
                                                      introductoryTypeHolder
                                                    }
                                                    onChange={(e) =>
                                                      setIntroductoryTypeHolder(
                                                        e.target.value
                                                      )
                                                    }
                                                    type="select"
                                                    required
                                                  >
                                                    <option
                                                      selected
                                                      disabled
                                                      value=""
                                                    >
                                                      choose your options
                                                    </option>
                                                    {getIntroductoryType.map(
                                                      (item) => (
                                                        <>
                                                          <option>
                                                            {item}
                                                          </option>
                                                        </>
                                                      )
                                                    )}
                                                  </Input>
                                                </Col>
                                              </Col>
                                              <Col sm="4">
                                                <FormLabel>Date</FormLabel>
                                                <Col sm="12">
                                                  <Input
                                                    defaultValue={dateHolder}
                                                    onChange={(e) =>
                                                      setDateHolder(
                                                        e.target.value
                                                      )
                                                    }
                                                    placeholder="Enter the date of birth "
                                                    type="date"
                                                  />
                                                </Col>
                                              </Col>
                                              <Col sm="4">
                                                <FormLabel>
                                                  Location{" "}
                                                  <sup className="text-danger">
                                                    *
                                                  </sup>
                                                </FormLabel>
                                                <Col sm="12">
                                                  <Input
                                                    defaultValue={
                                                      locationHolder
                                                    }
                                                    onChange={(e) =>
                                                      setLocationHolder(
                                                        e.target.value
                                                      )
                                                    }
                                                    type="select"
                                                    required
                                                  >
                                                    <option
                                                      selected
                                                      disabled
                                                      value=""
                                                    >
                                                      choose your option
                                                    </option>
                                                    {getLocationHolder.map(
                                                      (item) => (
                                                        <>
                                                          <option>
                                                            {item}
                                                          </option>
                                                        </>
                                                      )
                                                    )}
                                                  </Input>
                                                </Col>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Col>
                                  </CardBody>
                                  <CardFooter className="bg-white">
                                    <Col className="section">
                                      <Col className="form-control border-0">
                                        <Col sm="12">
                                          <Row className="g-2 form">
                                            <Col sm="6" className="form-group">
                                              <Button>Save</Button>
                                            </Col>
                                            <Col sm="6" className="form-group">
                                              <Button
                                                onClick={
                                                  IntroductorydetailsNext
                                                }
                                              >
                                                Next
                                              </Button>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Col>
                                    </Col>
                                  </CardFooter>
                                </Card>
                              </Col>
                            </>
                          )}
                          {!isIntroductoryDetailNext && (
                            <>
                              <Col sm="12" className="section">
                                <Card className="border-0">
                                  <CardHeader className="bg-white border-0">
                                    <b>
                                      <h5>Your personal details</h5>
                                    </b>
                                  </CardHeader>
                                  <CardBody>
                                    <Col className="section">
                                      <Col sm="12" className="form-group">
                                        <Row className="g-2 form">
                                          <Col sm="12">
                                            <Row className="g-2 form">
                                              <Col sm="4">
                                                <FormLabel>
                                                  Title
                                                  <sup className="text-danger">
                                                    *
                                                  </sup>
                                                </FormLabel>
                                                <Col sm="12">
                                                  <Input
                                                    defaultValue={titleHolder}
                                                    onChange={(e) =>
                                                      setTitleHolder(
                                                        e.target.value
                                                      )
                                                    }
                                                    type="select"
                                                    required
                                                  >
                                                    <option
                                                      selected
                                                      disabled
                                                      value=""
                                                    >
                                                      choose your options
                                                    </option>
                                                    <option>Mr</option>
                                                    <option>Ms</option>
                                                    <option>Mrs.</option>
                                                  </Input>
                                                </Col>
                                              </Col>
                                              <Col sm="4">
                                                <FormLabel>
                                                  First name
                                                  <sup className="text-danger">
                                                    *
                                                  </sup>
                                                </FormLabel>
                                                <Col sm="12">
                                                  <Input
                                                    defaultValue={
                                                      firstNameHolder
                                                    }
                                                    onChange={(e) =>
                                                      setFirstNameHolder(
                                                        e.target.value
                                                      )
                                                    }
                                                    type="text"
                                                    placeholder="Enter first name here"
                                                    required
                                                  />
                                                </Col>
                                              </Col>
                                              <Col sm="4">
                                                <FormLabel>
                                                  Last name
                                                  <sup className="text-danger">
                                                    *
                                                  </sup>
                                                </FormLabel>
                                                <Col sm="12">
                                                  <Input
                                                    defaultValue={
                                                      lastNameHolder
                                                    }
                                                    onChange={(e) =>
                                                      setLastNameHolder(
                                                        e.target.value
                                                      )
                                                    }
                                                    type="text"
                                                    placeholder="Enter last name here"
                                                    required
                                                  />
                                                </Col>
                                              </Col>
                                            </Row>
                                          </Col>
                                          <Col sm="12">
                                            <Row className="g-2 form">
                                              <Col sm="12">
                                                <FormLabel>
                                                  My mobile number
                                                  <sup className="text-danger">
                                                    *
                                                  </sup>
                                                </FormLabel>
                                              </Col>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col sm="4">
                                                    <InputGroup>
                                                      <InputGroup.Text>
                                                        +91
                                                      </InputGroup.Text>
                                                      <Form.Control
                                                        defaultValue={
                                                          mobileNumberHolder
                                                        }
                                                        onChange={(e) =>
                                                          setMobileNumberHolder(
                                                            e.target.value
                                                          )
                                                        }
                                                        placeholder="Enter your mobile number"
                                                      />
                                                    </InputGroup>
                                                  </Col>
                                                </Row>
                                              </Col>
                                              <Col
                                                sm="12"
                                                className="form-check"
                                              >
                                                <Input type="checkbox" />
                                                <FormLabel>
                                                  Whatsapp number too
                                                </FormLabel>
                                              </Col>
                                            </Row>
                                          </Col>
                                          <Col sm="12" className="form-group">
                                            <Row className="g-2 form">
                                              <FormLabel>My email id</FormLabel>
                                              <Col sm="12">
                                                <Input
                                                  defaultValue={emailHolder}
                                                  onChange={(e) =>
                                                    setEmailHolder(
                                                      e.target.value
                                                    )
                                                  }
                                                  type="email"
                                                  placeholder="Enter your email id here"
                                                />
                                              </Col>
                                            </Row>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Col>
                                  </CardBody>
                                  <CardFooter className="bg-white">
                                    <Col className="section">
                                      <Col className="form-control border-0">
                                        <Col sm="12">
                                          <Row className="g-2 form">
                                            <Col sm="8" className="form-group">
                                              <Button>Save</Button>
                                            </Col>
                                            <Col sm="4" className="form-group">
                                              <Row className="g-2 form">
                                                <Col sm="6">
                                                  <Button>Previous</Button>
                                                </Col>
                                                <Col sm="6">
                                                  <Button
                                                    onClick={ContactDetails}
                                                  >
                                                    Next
                                                  </Button>
                                                </Col>
                                              </Row>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Col>
                                    </Col>
                                  </CardFooter>
                                </Card>
                              </Col>
                            </>
                          )}
                          {!isContactDetails && (
                            <>
                              <Col sm="12" className="section">
                                <Card className="border-0">
                                  <CardHeader className="bg-white border-0">
                                    <b>
                                      <h5>Contact details</h5>
                                    </b>
                                  </CardHeader>
                                  <CardBody>
                                    <Col className="section">
                                      <Col className="form-control bg-light">
                                        <Row className="g-2 form">
                                          <Col sm="12">
                                            <FormLabel>
                                              Present address
                                            </FormLabel>
                                          </Col>
                                          <Col sm="12" className="form-group">
                                            <Row className="g-2 form">
                                              <Col
                                                sm="6"
                                                className="form-group"
                                              >
                                                <FormLabel>
                                                  House/Flat No./ Building
                                                </FormLabel>
                                                <Col sm="12">
                                                  <Input
                                                    defaultValue={houseNumber}
                                                    onChange={(e) =>
                                                      setHouseNumber(
                                                        e.target.value
                                                      )
                                                    }
                                                    type="text"
                                                    placeholder="Enter address here "
                                                    required
                                                  />
                                                </Col>
                                              </Col>
                                              <Col
                                                sm="6"
                                                className="form-group"
                                              >
                                                <FormLabel>
                                                  Street details
                                                </FormLabel>
                                                <Col
                                                  sm="12"
                                                  className="form-group"
                                                >
                                                  <Input
                                                    defaultValue={
                                                      streetDetailHolder
                                                    }
                                                    onChange={(e) =>
                                                      setStreetDetailHolder(
                                                        e.target.value
                                                      )
                                                    }
                                                    type="text"
                                                    placeholder="Enter your Street detail"
                                                    required
                                                  />
                                                </Col>
                                              </Col>
                                            </Row>
                                          </Col>
                                          <Col sm="12" className="form-group">
                                            <Row className="g-2 form">
                                              <Col
                                                className="form-group"
                                                sm="4"
                                              >
                                                <FormLabel>
                                                  Country
                                                  <sub className="text-danger">
                                                    {" "}
                                                    *
                                                  </sub>
                                                </FormLabel>
                                                <Col
                                                  sm="12"
                                                  className="form-group"
                                                >
                                                  <Input
                                                    defaultValue={countryHolder}
                                                    onChange={(e) =>
                                                      setCountryHolder(
                                                        e.target.value
                                                      )
                                                    }
                                                    type="select"
                                                    required
                                                  >
                                                    <option
                                                      selected
                                                      disabled
                                                      value=""
                                                    >
                                                      select country
                                                    </option>
                                                    <option>India </option>
                                                    <option>Japan</option>
                                                  </Input>
                                                </Col>
                                              </Col>
                                              <Col
                                                className="form-group"
                                                sm="4"
                                              >
                                                <FormLabel>
                                                  State
                                                  <sup className="text-danger">
                                                    *
                                                  </sup>
                                                </FormLabel>
                                                <Col
                                                  sm="12"
                                                  className="form-group"
                                                >
                                                  <Input
                                                    defaultValue={stateHolder}
                                                    onChange={(e) =>
                                                      setStateHolder(
                                                        e.target.value
                                                      )
                                                    }
                                                    type="select"
                                                    required
                                                  >
                                                    <option
                                                      selected
                                                      disabled
                                                      value=""
                                                    >
                                                      select state
                                                    </option>
                                                    <option>Maharashtra</option>
                                                    <option>up</option>
                                                  </Input>
                                                </Col>
                                              </Col>
                                              <Col
                                                className="form-group"
                                                sm="4"
                                              >
                                                <FormLabel>
                                                  City
                                                  <sup className="text-danger">
                                                    *
                                                  </sup>
                                                </FormLabel>
                                                <Col
                                                  sm="12"
                                                  className="form-group"
                                                >
                                                  <Input
                                                    defaultValue={cityHolder}
                                                    onChange={(e) =>
                                                      setCityHolder(
                                                        e.target.value
                                                      )
                                                    }
                                                    type="select"
                                                    required
                                                  >
                                                    <option
                                                      selected
                                                      disabled
                                                      value=""
                                                    >
                                                      select city
                                                    </option>
                                                    <option>pune</option>
                                                    <option>mumbai</option>
                                                  </Input>
                                                </Col>
                                              </Col>
                                            </Row>
                                          </Col>
                                          <Col sm="12" className="form-group">
                                            <Row className="g-2 form">
                                              <Col
                                                className="form-group"
                                                sm="4"
                                              >
                                                <FormLabel>
                                                  District
                                                  <sub className="text-danger">
                                                    {" "}
                                                    *
                                                  </sub>
                                                </FormLabel>
                                                <Col
                                                  sm="12"
                                                  className="form-group"
                                                >
                                                  <Input
                                                    defaultValue={
                                                      districtHolder
                                                    }
                                                    onChange={(e) =>
                                                      setDistrictHolder(
                                                        e.target.value
                                                      )
                                                    }
                                                    type="select"
                                                    required
                                                  >
                                                    <option
                                                      selected
                                                      disabled
                                                      value=""
                                                    >
                                                      select District
                                                    </option>
                                                    <option>India </option>
                                                    <option>Japan</option>
                                                  </Input>
                                                </Col>
                                              </Col>
                                              <Col
                                                className="form-group"
                                                sm="4"
                                              >
                                                <FormLabel>
                                                  Taluka
                                                  <sup className="text-danger">
                                                    *
                                                  </sup>
                                                </FormLabel>
                                                <Col
                                                  sm="12"
                                                  className="form-group"
                                                >
                                                  <Input
                                                    defaultValue={talukaHolder}
                                                    onChange={(e) =>
                                                      setTalukaHolder(
                                                        e.target.value
                                                      )
                                                    }
                                                    type="select"
                                                    required
                                                  >
                                                    <option
                                                      selected
                                                      disabled
                                                      value=""
                                                    >
                                                      select Taluka
                                                    </option>
                                                    <option>Maharashtra</option>
                                                    <option>up</option>
                                                  </Input>
                                                </Col>
                                              </Col>
                                              <Col
                                                className="form-group"
                                                sm="4"
                                              >
                                                <FormLabel>
                                                  Pin/Zip Code
                                                  <sup className="text-danger">
                                                    *
                                                  </sup>
                                                </FormLabel>
                                                <Col
                                                  sm="12"
                                                  className="form-group"
                                                >
                                                  <Input
                                                    defaultValue={pinzipHolder}
                                                    onChange={(e) =>
                                                      setPinZipHolder(
                                                        e.target.value
                                                      )
                                                    }
                                                    type="text"
                                                  />
                                                </Col>
                                              </Col>
                                            </Row>
                                          </Col>
                                          <Col
                                            sm="12"
                                            className="form-control bg-light"
                                          >
                                            <Row className="g-2 form">
                                              <Col
                                                sm="12"
                                                className="form-group"
                                              >
                                                <FormLabel>
                                                  Permanent address
                                                </FormLabel>
                                              </Col>
                                              <Col
                                                sm="12"
                                                className="form-group form-check"
                                              >
                                                <Input type="checkbox" />
                                                <FormLabel>
                                                  same as present address
                                                </FormLabel>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Col>
                                  </CardBody>
                                  <CardFooter className="bg-white">
                                    <Col className="section">
                                      <Col sm="12">
                                        <Row className="g-2 form">
                                          <Col sm="8">
                                            <Button>Save</Button>
                                          </Col>
                                          <Col sm="4">
                                            <Row className="g-2 form">
                                              <Col
                                                sm="6"
                                                className="form-group"
                                              >
                                                <Button>Previous</Button>
                                              </Col>
                                              <Col
                                                sm="6"
                                                className="form-group"
                                              >
                                                <Button
                                                  onClick={AdditionaldetailNext}
                                                >
                                                  Next
                                                </Button>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Col>
                                  </CardFooter>
                                </Card>
                              </Col>
                            </>
                          )}
                          {!isAdditionalDetailsNext && (
                            <>
                              <Col sm="12" className="section">
                                <Card className="border-0">
                                  <CardHeader className="bg-white border-0">
                                    <b>
                                      <h5>Additional details</h5>
                                    </b>
                                  </CardHeader>
                                  <CardBody>
                                    <Col className="section">
                                      <Col sm="12" className="form-group">
                                        <Row className="g-2 form">
                                          <Col sm="4" className="form-group">
                                            <FormLabel>Date of birth</FormLabel>
                                            <Col sm="12" className="form-group">
                                              <Input type="date" />
                                            </Col>
                                          </Col>
                                          <Col sm="4" className="form-group">
                                            <FormLabel>
                                              {" "}
                                              Education
                                              <sup className="text-danger">
                                                *
                                              </sup>
                                            </FormLabel>
                                            <Col sm="12" className="form-group">
                                              <Input
                                                defaultValue={educationHolder}
                                                onChange={(e) =>
                                                  setEducationHolder(
                                                    e.target.value
                                                  )
                                                }
                                                type="select"
                                                required
                                              >
                                                <option
                                                  selected
                                                  disabled
                                                  value=""
                                                >
                                                  Choose your option
                                                </option>
                                                {getAdditionalDetailEdu.map(
                                                  (item) => (
                                                    <>
                                                      <option>{item}</option>
                                                    </>
                                                  )
                                                )}
                                              </Input>
                                            </Col>
                                          </Col>
                                          <Col sm="4" className="form-group">
                                            <FormLabel>
                                              Profession
                                              <sup className="text-danger">
                                                *
                                              </sup>
                                            </FormLabel>
                                            <Col sm="12" className="form-group">
                                              <Input
                                                defaultValue={professionHolder}
                                                onChange={(e) =>
                                                  setProfessionHolder(
                                                    e.target.value
                                                  )
                                                }
                                                type="select"
                                                required
                                              >
                                                <option
                                                  selected
                                                  disabled
                                                  value=""
                                                >
                                                  {" "}
                                                  Choose your option
                                                </option>
                                                {getProfession.map((item) => (
                                                  <>
                                                    <option>{item}</option>
                                                  </>
                                                ))}
                                              </Input>
                                            </Col>
                                          </Col>
                                        </Row>
                                      </Col>
                                      <Col sm="12" className="form-group">
                                        <Row className="g-2 form">
                                          <Col sm="4" className="form-group">
                                            <FormLabel>
                                              Social work experience
                                              <sup className="text-danger">
                                                *
                                              </sup>
                                            </FormLabel>
                                            <Col sm="12" className="form-group">
                                              <Input
                                                defaultValue={socialExHolder}
                                                onChange={(e) =>
                                                  setSocialExHolder(
                                                    e.target.value
                                                  )
                                                }
                                                type="select"
                                                required
                                              >
                                                <option
                                                  selected
                                                  disabled
                                                  value=""
                                                >
                                                  {" "}
                                                  Choose your option
                                                </option>
                                                {getSocialWorkEx.map((item) => (
                                                  <>
                                                    <option>{item}</option>
                                                  </>
                                                ))}
                                              </Input>
                                            </Col>
                                            <Col sm="12">
                                              <small>
                                                Area/organisations you are/were
                                                associated with
                                                <br /> and number of years spent
                                              </small>
                                            </Col>
                                          </Col>
                                          <Col sm="4" className="form-group">
                                            <FormLabel>
                                              {" "}
                                              Field of Expertise
                                              <sup className="text-danger">
                                                *
                                              </sup>
                                            </FormLabel>
                                            <Col sm="12" className="form-group">
                                              <Input
                                                defaultValue={
                                                  fieldExpertiesHolder
                                                }
                                                onChange={(e) =>
                                                  setFieldExpertiesHolder(
                                                    e.target.value
                                                  )
                                                }
                                                type="select"
                                                required
                                              >
                                                <option
                                                  selected
                                                  disabled
                                                  value=""
                                                >
                                                  Choose your option
                                                </option>
                                                {getFieldEx.map((item) => (
                                                  <>
                                                    <option>{item}</option>
                                                  </>
                                                ))}
                                              </Input>
                                            </Col>
                                            <Col sm="12" className="form-group">
                                              <small>
                                                Domain you are expert in
                                              </small>
                                            </Col>
                                          </Col>
                                          <Col sm="4" className="form-group">
                                            <FormLabel>
                                              Field of interst
                                              <sup className="text-danger">
                                                *
                                              </sup>
                                            </FormLabel>
                                            <Col sm="12" className="form-group">
                                              <Input
                                                defaultValue={
                                                  fieldInterstHolder
                                                }
                                                onChange={(e) =>
                                                  setFieldInterstHolder(
                                                    e.target.value
                                                  )
                                                }
                                                type="select"
                                                required
                                              >
                                                <option
                                                  selected
                                                  disabled
                                                  value=""
                                                >
                                                  {" "}
                                                  Choose your option
                                                </option>
                                                {getFieldInter.map((item) => (
                                                  <>
                                                    <option>{item}</option>
                                                  </>
                                                ))}
                                              </Input>
                                            </Col>
                                            <Col sm="12">
                                              <small>
                                                Domain you like to work or find
                                                interesting
                                              </small>
                                            </Col>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Col>
                                  </CardBody>
                                  <CardFooter className="bg-white">
                                    <Col className="section">
                                      <Row className="g-2 form">
                                        <Col sm="8">
                                          <Button>save</Button>
                                        </Col>
                                        <Col sm="4">
                                          <Row>
                                            <Col sm="6">
                                              <Button>Previous</Button>
                                            </Col>
                                            <Col sm="6">
                                              <Button
                                                onClick={DivercityDetails}
                                              >
                                                Next
                                              </Button>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </CardFooter>
                                </Card>
                              </Col>
                            </>
                          )}
                          {!isDivercityDeatils && (
                            <>
                              <Col sm="12" className="section">
                                <Card className="border-0">
                                  <CardHeader className="bg-white border-0">
                                    <b>
                                      <h5>Diversity details</h5>
                                    </b>
                                  </CardHeader>
                                  <CardBody>
                                    <Col sm="12" className="form-group">
                                      <Row className="g-2 form">
                                        <Col
                                          sm="12"
                                          className="bg-light form-group"
                                        >
                                          <FormLabel>
                                            For diversity purpose only
                                          </FormLabel>
                                          <Col sm="12">&nbsp;</Col>
                                        </Col>
                                        <Col sm="12">
                                          <FormLabel>
                                            Gender{" "}
                                            <sup className="text-danger">*</sup>
                                          </FormLabel>
                                          <Col sm="12" className="form-group">
                                            <Input
                                              defaultValue={genderHolder}
                                              onChange={(e) =>
                                                setGenderHolder(e.target.value)
                                              }
                                              type="select"
                                              required
                                            >
                                              <option
                                                selected
                                                disabled
                                                value=""
                                              >
                                                Choose your option
                                              </option>
                                              {getGender.map((item) => (
                                                <>
                                                  <option>{item}</option>
                                                </>
                                              ))}
                                            </Input>
                                          </Col>
                                        </Col>
                                        <Col s="12" className="form-group">
                                          <Row className="g-2 form">
                                            <Col sm="3" className="form-group">
                                              <FormLabel>
                                                Nationality
                                                <sup className="text-danger">
                                                  *
                                                </sup>
                                              </FormLabel>
                                              <Col sm="12">
                                                <Input
                                                  defaultValue={
                                                    nationalityHolder
                                                  }
                                                  onChange={(e) =>
                                                    setNationalityHolder(
                                                      e.target.value
                                                    )
                                                  }
                                                  type="select"
                                                  required
                                                >
                                                  <option
                                                    selected
                                                    disabled
                                                    value=""
                                                  >
                                                    Choose your option
                                                  </option>
                                                  {getNationality.map(
                                                    (item) => (
                                                      <>
                                                        <option>{item}</option>
                                                      </>
                                                    )
                                                  )}
                                                </Input>
                                              </Col>
                                            </Col>
                                            <Col sm="3" className="form-group">
                                              <FormLabel>
                                                Language know
                                                <sup className="text-danger">
                                                  *
                                                </sup>
                                              </FormLabel>
                                              <Col
                                                sm="12"
                                                className="form-group"
                                              >
                                                <Input
                                                  defaultValue={languageHolder}
                                                  onChange={(e) =>
                                                    setLanguageHolder(
                                                      e.target.value
                                                    )
                                                  }
                                                  type="select"
                                                  required
                                                >
                                                  <option
                                                    selected
                                                    disabled
                                                    value=""
                                                  >
                                                    Choose your option
                                                  </option>
                                                  {getLanguage.map((item) => (
                                                    <>
                                                      <option>{item}</option>
                                                    </>
                                                  ))}
                                                </Input>
                                              </Col>
                                            </Col>
                                            <Col sm="3" className="form-group">
                                              <FormLabel>
                                                Social category
                                              </FormLabel>
                                              <Col
                                                sm="12"
                                                className="form-group"
                                              >
                                                <Input
                                                  defaultValue={
                                                    socialCategoryHolder
                                                  }
                                                  onChange={(e) =>
                                                    setSocialCategoryHolder(
                                                      e.target.value
                                                    )
                                                  }
                                                  type="select"
                                                  required
                                                >
                                                  <option
                                                    selected
                                                    disabled
                                                    value=""
                                                  >
                                                    choose your option
                                                  </option>
                                                  {getSocialCate.map((item) => (
                                                    <>
                                                      <option>{item}</option>
                                                    </>
                                                  ))}
                                                </Input>
                                              </Col>
                                            </Col>
                                            <Col sm="3" className="form-group">
                                              <FormLabel>
                                                Religion practiced
                                              </FormLabel>
                                              <Col
                                                sm="12"
                                                className="form-group"
                                              >
                                                <Input
                                                  defaultValue={
                                                    religionPracHolder
                                                  }
                                                  onChange={(e) =>
                                                    setReligionPracHolder(
                                                      e.target.value
                                                    )
                                                  }
                                                  type="select"
                                                  required
                                                >
                                                  <option
                                                    selected
                                                    disabled
                                                    value=""
                                                  >
                                                    Choose your option
                                                  </option>
                                                  {getReligionPrac.map(
                                                    (item) => (
                                                      <option>{item}</option>
                                                    )
                                                  )}
                                                </Input>
                                              </Col>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </CardBody>
                                  <CardFooter className="bg-white">
                                    <Col className="section">
                                      <Col sm="12" className="form-group">
                                        <Row className="g-2 form">
                                          <Col sm="8" className="form-group">
                                            <Button>save</Button>
                                          </Col>
                                          <Col sm="4" className="form-group">
                                            <Row className="g-2 form">
                                              <Col
                                                sm="6"
                                                className="form-group"
                                              >
                                                <Button>previous</Button>
                                              </Col>
                                              <Col
                                                sm="6"
                                                className="form-group"
                                              >
                                                <Button onClick={Finalcomment}>
                                                  Next
                                                </Button>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Col>
                                  </CardFooter>
                                </Card>
                              </Col>
                            </>
                          )}
                          {!isFinalComment && (
                            <>
                              <Col sm="12" className="section">
                                <Card className="border-0">
                                  <CardHeader className="bg-white border-0">
                                    <b>
                                      <h5>Final comments</h5>
                                    </b>
                                  </CardHeader>
                                  <CardBody>
                                    <Col className="section">
                                      <Col sm="12" className="form-group">
                                        <Row className="g-2 form">
                                          <Col sm="12" className="form-group">
                                            Based on Introductory Meeting select
                                            your option{" "}
                                            <sup className="text-danger">*</sup>
                                          </Col>
                                          <Col
                                            sm="12"
                                            className="form-group form-check"
                                          >
                                            <Input
                                              name="interseted joining"
                                              defaultValue={checkHolder}
                                              onChange={(e) =>
                                                setCheckHolder(
                                                  "I am interested in joining Movement21"
                                                )
                                              }
                                              type="radio"
                                            />
                                            <FormLabel>
                                              I am interested in joining
                                              Movement21
                                            </FormLabel>
                                          </Col>
                                          <Col
                                            sm="12"
                                            className="form-group form-check"
                                          >
                                            <Input
                                              name="I need some more clarification regarding Movement21"
                                              defaultValue={checkHolder}
                                              onChange={(e) =>
                                                setCheckHolder(
                                                  " I need some more clarification regarding Movement21"
                                                )
                                              }
                                              type="radio"
                                            />
                                            <FormLabel>
                                              I need some more clarification
                                              regarding Movement21
                                            </FormLabel>
                                          </Col>
                                          <Col
                                            sm="12"
                                            className="form-group form-check"
                                          >
                                            <Input
                                              name="I am NOT interested in joining Movement21"
                                              defaultValue={checkHolder}
                                              onChange={(e) =>
                                                setCheckHolder(
                                                  " I am NOT interested in joining Movement21"
                                                )
                                              }
                                              type="radio"
                                            />
                                            <FormLabel>
                                              I am NOT interested in joining
                                              Movement21
                                            </FormLabel>
                                          </Col>
                                        </Row>
                                      </Col>
                                      <Col sm="12" className="form-group">
                                        <FormLabel>comments</FormLabel>
                                        <Col sm="12" className="form-group">
                                          <Input
                                            defaultValue={commentHolder}
                                            onChange={(e) =>
                                              setCommentHolder(e.target.value)
                                            }
                                            type="textarea"
                                          />
                                        </Col>
                                      </Col>
                                    </Col>
                                  </CardBody>
                                  <CardFooter>
                                    <Col className="section">
                                      <Row className="g-2 form">
                                        <Col sm="8">
                                          <Button>save</Button>
                                        </Col>
                                        <Col sm="4">
                                          <Row className="g-2 form">
                                            <Col sm="6">
                                              <Button>previous</Button>
                                            </Col>
                                            <Col sm="6">
                                              <Button type="submit">
                                                submit
                                              </Button>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </CardFooter>
                                </Card>
                              </Col>
                            </>
                          )}
                          {!isTankYou && (
                            <>
                              <Col className="section">
                                <Card>
                                  <CardHeader>
                                    <Row className="g-2 form">
                                      <Col sm="8" className="form-group">
                                        <Row className="g-2 form">
                                          <Col
                                            sm="12"
                                            className="form-group text-center"
                                          >
                                            <Col sm="3">
                                              <img src={ThankYouImg} />
                                            </Col>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </CardHeader>
                                  <CardBody>
                                    <Col className="section">
                                      <Row className="g-2 form">
                                        <Col sm="12" className="form-group">
                                          <p>
                                            <h5>
                                              Thank you for your participation
                                              in Movement21 introductory meeting
                                              and sharing your feedback. Your
                                              feedback is valuable to us.
                                            </h5>
                                          </p>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </CardBody>
                                  <CardFooter>
                                    <Link to="/auth/login/participantfeedback">
                                      <Button>close</Button>
                                    </Link>
                                  </CardFooter>
                                </Card>
                              </Col>
                            </>
                          )}
                        </Col>
                      </Row>
                    </CardBody>
                  </Form>
                </Card>
              </Row>
            </Col>
          </Row>
        </Col>
      </Col>
    </>
  );
};

export default IntroductoryFeedback;
