import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CloseButton,
  Col,
  Dropdown,
  FormLabel,
  InputGroup,
  Row,
  Modal,
} from "react-bootstrap";
import { CardBody, CardHeader, Input, InputGroupText } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";

const EditNominationState = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [m21Wing, setM21Wing] = useState("");
  const [specialIntroType, setSpecialIntroType] = useState();
  const [preferredLanguage, setPreferredLanguage] = useState();
  const [upcomingIntro, setUpcomingIntro] = useState();
  const [comments, setComments] = useState();
  const [title, setTitle] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [emailId, setEmailId] = useState();
  const [alternateEmailId, setAlternateEmailId] = useState();
  const [house, setHouse] = useState();
  const [street, setStreet] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [district, setDistrict] = useState();
  const [taluka, setTaluka] = useState();
  const [pincode, setPinCode] = useState();
  const [gender, setGender] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [education, setEducation] = useState();
  const [profession, setProfession] = useState();
  const [nationality, setNationality] = useState();
  const [socialCategory, setSocialCategory] = useState();
  const [religion, setReligion] = useState();

  const BaseURL = process.env.REACT_APP_BASE_URL;
  const Navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetch(`${BaseURL}/api/nomination/details/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSelectedValue(data.introductoryDetailsResponse.introductoryType);
        setM21Wing(data.introductoryDetailsResponse.m21Wing);
        setSpecialIntroType(
          data.introductoryDetailsResponse.specialIntroductoryDrive
        );
        setPreferredLanguage(
          data.introductoryDetailsResponse.preferredLanguageByGuest
        );
        setUpcomingIntro(data.introductoryDetailsResponse.upcomingIntroductory);
        setComments(data.introductoryDetailsResponse.comments);
        setTitle(data.inviteeResponseDto.title);
        setFirstName(data.inviteeResponseDto.firstName);
        setLastName(data.inviteeResponseDto.lastName);
        setMobileNumber(data.inviteeResponseDto.mobile);
        setEmailId(data.inviteeResponseDto.email);
        setAlternateEmailId(data.inviteeResponseDto.alternateEmailId);
        setHouse(data.addressNomineeResponseDto.house);
        setStreet(data.addressNomineeResponseDto.street);
        setCountry(data.addressNomineeResponseDto.country);
        setState(data.addressNomineeResponseDto.state);
        setCity(data.addressNomineeResponseDto.city);
        setDistrict(data.addressNomineeResponseDto.district);
        setTaluka(data.addressNomineeResponseDto.taluka);
        setPinCode(data.addressNomineeResponseDto.pinCode);
        setGender(data.additionalNomineeResponseDto.gender);
        const dobDate = new Date(data.additionalNomineeResponseDto.dob);
        const formattedDOB = dobDate.toISOString().split("T")[0];
        setDateOfBirth(formattedDOB);
        setEducation(data.additionalNomineeResponseDto.education);
        setProfession(data.additionalNomineeResponseDto.profession);
        setNationality(data.additionalNomineeResponseDto.nationality);
        setSocialCategory(
          data.additionalNomineeResponseDto.socialCategoryOfInvitee
        );
        setReligion(data.additionalNomineeResponseDto.religion);
      });
  }, [id]);

  const [meetings, setMeeting] = useState([]);
  const [orgMap, setOrgMap] = useState([]);
  const [isaddCount, setIsAddcount] = useState([]);
  const [isaddState, setIsAddState] = useState([]);
  const [isadddist, setIsAddDist] = useState([]);
  const [isaddtaluka, setIsAddTaluka] = useState([]);
  const [isaddcity, setIsAddCity] = useState([]);
  useEffect(() => {
    fetch(`${BaseURL}/api/auth/getall/introductory/metting`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMeeting(data);
        console.log(data);
      });

    fetch(`${BaseURL}/api/org/wings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => setOrgMap(data));

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

  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close the modal only when the "OK" button is clicked
  const closeOnOk = () => {
    setShowModal(false);
    Navigate("/auth/login/reviewnomination");
  };

  const SubmitForm = (e) => {
    e.preventDefault();

    const AdditionalNominee = {
      gender: gender,
      dob: dateOfBirth,
      education: education,
      profession: profession,
      nationality: nationality,
      social_category_of_invitee: socialCategory,
      religion: religion,
    };

    const addressNominee = {
      house: house,
      street: street,
      country: country,
      state: state,
      city: city,
      district: district,
      taluka: taluka,
      pinCode: pincode,
    };
    const IntroductoryNominee = {
      introductoryType: selectedValue,
      m21Wing: m21Wing,
      specialIntroductoryDrive: specialIntroType,
      preferredLanguageByGuest: preferredLanguage,
      upcomingIntroductory: upcomingIntro,
      comments: comments,
    };
    const InviteeDetails = {
      firstName: firstName,
      lastName: lastName,
      mobile: mobileNumber,
      email: emailId,
      alternateEmailId: alternateEmailId,
    };

    const responsebody = {
      "additional-nominee": AdditionalNominee,
      "address-nominee": addressNominee,
      "introductory-nominee": IntroductoryNominee,
      "invitee-details": InviteeDetails,
    };
    openModal();
    const res = fetch(`${BaseURL}/api/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responsebody),
    })
      .then((res) => {
        console.log("Response status:", res.status);
        return res.text(); // Try reading the response as text first
      })
      .then((data) => {
        console.log("Response data as text:", data);
        console.log("edit page update API", responsebody);
        console.log("updated variable in", selectedValue);
        // Attempt to parse text as JSON here
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayOfWeek}, ${day} ${month} ${year}`;
  };
  return (
    <>
      <Col className="section p-2">
        <Col className="container-fluid">
          <Col className="form-control border-0 rounded-0">
            <Col className="form-group">
              <Card className="border-0">
                <CardHeader className="bg-white">
                  <Col sm="12">
                    <Row className="g-2 form">
                      <Col className="" sm="10">
                        <b>
                          <h4>Introductory Details</h4>
                        </b>
                      </Col>
                      <Col sm="2" className="text-end">
                        <CloseButton />
                      </Col>
                    </Row>
                  </Col>
                </CardHeader>
                <CardBody>
                  <Row className="g-2 form">
                    <Col sm="12" className="form-group">
                      <Col sm="3">
                        <FormLabel>
                          Introductory type <sub className="text-danger">*</sub>
                        </FormLabel>
                        <Col sm="12">
                          <Input
                            type="select"
                            className="form-select"
                            name="introType"
                            onChange={(event) =>
                              setSelectedValue(event.target.value)
                            }
                            value={selectedValue}
                          >
                            <option value="">Choose your option</option>
                            <option>Online</option>
                            <option>Offline</option>
                          </Input>
                        </Col>
                      </Col>
                    </Col>
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="4">
                          <FormLabel>
                            M21 Wing <sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col sm="12">
                            <Input
                              type="select"
                              className="form-select"
                              value={m21Wing}
                              onChange={(event) =>
                                setM21Wing(event.target.value)
                              }
                            >
                              <option value="">Choose your option</option>
                              {orgMap.map((data) => (
                                <option>{data.m21Wing} </option>
                              ))}
                            </Input>
                          </Col>
                        </Col>
                        <Col sm="4">
                          <FormLabel>
                            Special introductory type{" "}
                            <sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col sm="12">
                            <Input
                              type="select"
                              className="form-control"
                              value={specialIntroType}
                              onChange={(event) =>
                                setSpecialIntroType(event.target.value)
                              }
                            >
                              <option selected disabled value="">
                                Choose your option
                              </option>
                              <option>None</option>
                              <option>Womens</option>
                              <option>High Potential</option>
                            </Input>
                          </Col>
                        </Col>
                        <Col sm="4">
                          <FormLabel>
                            Preferred language by guest
                            <sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col sm="12">
                            <Input
                              className="form-select"
                              type="select"
                              value={preferredLanguage}
                              onChange={(event) =>
                                setPreferredLanguage(event.target.value)
                              }
                            >
                              <option selected disabled value="">
                                Choose your option
                              </option>
                              <option>English</option>
                              <option>Hindi</option>
                              <option>Marathi</option>
                            </Input>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="4">
                          <FormLabel>
                            Upcoming introductory
                            <sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col sm="12">
                            <Input
                              type="select"
                              className="form-select"
                              value={upcomingIntro}
                              onChange={(event) =>
                                setUpcomingIntro(event.target.value)
                              }
                            >
                              <option selected disabled value="">
                                choose your option
                              </option>
                              {meetings.map((meeting) => (
                                <option>
                                  <table>
                                    <tr>
                                      <td>{meeting.m21Type} &nbsp;</td>
                                      <td>{formatDate(meeting.date)} &nbsp;</td>
                                      <td>
                                        {meeting.fromTime}AM - {meeting.toTime}
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
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="6">
                          <FormLabel>Comments</FormLabel>
                          <Col sm="12">
                            <Input
                              type="textarea"
                              placeholder="Type here"
                              name="comment"
                              value={comments}
                              onChange={(event) =>
                                setComments(event.target.value)
                              }
                              className="rounded-0 figure-caption"
                              size="sm"
                            />
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="p-2 form-group">
                      &nbsp;
                    </Col>
                    <Col sm="12" className="form-group">
                      <b>
                        <h4>new nomination details</h4>
                      </b>
                    </Col>
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="4" className="form-group">
                          <FormLabel>
                            Title <sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col sm="12">
                            <Input
                              required
                              type="select"
                              className="form-select"
                              value={title}
                              onChange={(event) => setTitle(event.target.value)}
                            >
                              <option selected disabled value="">
                                {" "}
                                Choose your option
                              </option>
                              <option>Mr.</option>
                              <option>Ms.</option>
                              <option>Mrs.</option>
                            </Input>
                          </Col>
                        </Col>
                        <Col sm="4" className="form-group">
                          <FormLabel>
                            First name A <sup className="text-danger">*</sup>{" "}
                          </FormLabel>
                          <Col sm="12">
                            <Input
                              type="text"
                              className="form-control"
                              value={firstName}
                              onChange={(event) =>
                                setFirstName(event.target.value)
                              }
                            />
                          </Col>
                        </Col>
                        <Col sm="4" className="from-group">
                          <FormLabel>Last name</FormLabel>
                          <Col sm="12">
                            <Input
                              type="text"
                              className="form-control"
                              value={lastName}
                              onChange={(event) =>
                                setLastName(event.target.value)
                              }
                            />
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="12" className="form-group">
                          <FormLabel>My mobile number</FormLabel>
                        </Col>
                        <Col sm="4" className="form-group">
                          <InputGroup>
                            <InputGroupText>
                              <Dropdown className="bg-transparent">
                                <Dropdown.Toggle className="bg-transparent text-black border-0">
                                  +91
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item>+91</Dropdown.Item>
                                  <Dropdown.Item>+1</Dropdown.Item>{" "}
                                  <Dropdown.Item>+92</Dropdown.Item>{" "}
                                  <Dropdown.Item>+93</Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </InputGroupText>
                            <Input
                              placeholder="Enter mobile number"
                              value={mobileNumber}
                              onChange={(event) =>
                                setMobileNumber(event.target.value)
                              }
                            />
                          </InputGroup>
                        </Col>
                        <Col sm="12" className="form-group form-check">
                          <Input type="checkbox" />
                          <FormLabel>Whatsapp number too</FormLabel>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="4">
                          <FormLabel>My email id</FormLabel>
                          <Col sm="12">
                            <Input
                              type="text"
                              required
                              placeholder="Enter Email Id"
                              value={emailId}
                              onChange={(event) =>
                                setEmailId(event.target.value)
                              }
                            />
                          </Col>
                        </Col>
                        <Col sm="4">
                          <FormLabel>Alternate email Id</FormLabel>
                          <Col sm="12">
                            <Input
                              type="text"
                              required
                              placeholder="Enter alternate email id"
                              value={alternateEmailId}
                              onChange={(event) =>
                                setAlternateEmailId(event.target.value)
                              }
                            />
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="p-2 form-group">
                      &nbsp;
                    </Col>
                    <Col sm="12" className="form-group">
                      <h4>
                        <b>Address details</b>
                      </h4>
                    </Col>
                    <Col className="form-control bg-light" sm="12">
                      <Card className="border-0 ">
                        <CardBody className="bg-light">
                          <CardHeader className="bg-transparent border-0">
                            Present address
                          </CardHeader>
                          <Row className="g-2 form">
                            <Col sm="12" className="form-group">
                              <Row className="g-2 form">
                                <Col sm="6" className="form-group">
                                  <FormLabel>House/Flat No./Building</FormLabel>
                                  <Col sm="12" className="form-group">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter first name here"
                                      value={house}
                                      onChange={(event) =>
                                        setHouse(event.target.value)
                                      }
                                    />
                                  </Col>
                                </Col>
                                <Col sm="6" className="form-group">
                                  <FormLabel>Street details</FormLabel>
                                  <Col sm="12" className="form-grop">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter last name here"
                                      value={street}
                                      onChange={(event) =>
                                        setStreet(event.target.value)
                                      }
                                    />
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col sm="12" className="form-group">
                              <Row className="g-2 form">
                                <Col sm="4" className="form-group">
                                  <FormLabel>
                                    Country<sup className="text-danger">*</sup>
                                  </FormLabel>
                                  <Col sm="12" className="form-group">
                                    <Input
                                      type="select"
                                      className="form-select"
                                      required
                                      value={country}
                                      onChange={(event) =>
                                        setCountry(event.target.value)
                                      }
                                    >
                                      <option value="">
                                        choose your option
                                      </option>
                                      {isaddCount.map((data) => (
                                        <>
                                          <option>{data.name}</option>
                                          setIsIndia(dat.name)
                                        </>
                                      ))}
                                    </Input>
                                  </Col>
                                </Col>
                                <Col sm="4" className="form-group">
                                  <FormLabel>
                                    State<sup className="text-danger">*</sup>
                                  </FormLabel>
                                  <Col sm="12" className="form-group">
                                    <Input
                                      type="select"
                                      className="form-select"
                                      required
                                      value={state}
                                      onChange={(event) =>
                                        setState(event.target.value)
                                      }
                                    >
                                      <option value="">
                                        choose your option
                                      </option>
                                      {isaddState.map((data) => (
                                        <option key={data.id}>
                                          {data.name}
                                        </option>
                                      ))}
                                    </Input>
                                  </Col>
                                </Col>
                                <Col sm="4" className="form-group">
                                  <FormLabel>
                                    City<sup className="text-danger">*</sup>
                                  </FormLabel>
                                  <Col sm="12" className="form-group">
                                    <Input
                                      type="select"
                                      className="form-select"
                                      required
                                      value={city}
                                      onChange={(event) =>
                                        setCity(event.target.value)
                                      }
                                    >
                                      <option selected value="">
                                        choose your option
                                      </option>
                                      {isaddcity.map((data) => (
                                        <option>{data.name}</option>
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
                                    District<sup className="text-danger">*</sup>
                                  </FormLabel>
                                  <Col sm="12" className="form-group">
                                    <Input
                                      type="select"
                                      className="form-select"
                                      required
                                      value={district}
                                      onChange={(event) =>
                                        setDistrict(event.target.value)
                                      }
                                    >
                                      <option selected disabled value="">
                                        choose your option
                                      </option>
                                      {isadddist.map((data) => (
                                        <option>{data.name}</option>
                                      ))}
                                    </Input>
                                  </Col>
                                </Col>
                                <Col sm="4" className="form-group">
                                  <FormLabel>
                                    Taluka<sup className="text-danger">*</sup>
                                  </FormLabel>
                                  <Col sm="12" className="form-group">
                                    <Input
                                      type="select"
                                      className="form-select"
                                      required
                                      value={taluka}
                                      onChange={(event) =>
                                        setTaluka(event.target.value)
                                      }
                                    >
                                      <option selected disabled value="">
                                        choose your option
                                      </option>
                                      {isaddtaluka.map((data) => (
                                        <option>{data.name}</option>
                                      ))}
                                    </Input>
                                  </Col>
                                </Col>
                                <Col sm="4" className="form-group">
                                  <FormLabel>
                                    Pin/Zip<sup className="text-danger">*</sup>
                                  </FormLabel>
                                  <Col sm="12" className="form-group">
                                    <Input
                                      type="text"
                                      placeholder="enter pin/zip code here"
                                      value={pincode}
                                      onChange={(event) =>
                                        setPinCode(event.target.value)
                                      }
                                    />
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="12" className="form-control bg-light">
                      <FormLabel>Permanent address</FormLabel>
                      <Col sm="12" className="form-check form-group">
                        <Input type="checkbox" />
                        <FormLabel>Same as present address</FormLabel>
                      </Col>
                    </Col>
                    <Col sm="12" className="p-2 form-group">
                      &nbsp;
                    </Col>
                    <Col sm="12" className="form-group">
                      <h4>
                        <b>Additional details</b>
                      </h4>
                    </Col>
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="6" className="form-group">
                          <FormLabel>
                            Gender<sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col sm="12" className="form-group">
                            <Input
                              type="select"
                              className="form-select"
                              required
                              value={gender}
                              onChange={(event) =>
                                setGender(event.target.value)
                              }
                            >
                              <option selected value="">
                                Choose your Option
                              </option>
                              <option>Male</option>
                              <option>female</option>
                            </Input>{" "}
                          </Col>
                        </Col>
                        <Col sm="6" className="form-group">
                          <FormLabel>Date of birth</FormLabel>
                          <Col sm="12" className="form-group">
                            <Input
                              type="date"
                              value={dateOfBirth}
                              onChange={(event) =>
                                setDateOfBirth(event.target.value)
                              }
                            />
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="6" className="form-group">
                          <FormLabel>Education</FormLabel>
                          <Col sm="12" className="form-group">
                            <Input
                              type="select"
                              className="form-select"
                              required
                              value={education}
                              onChange={(event) =>
                                setEducation(event.target.value)
                              }
                            >
                              <option selected disabled value="">
                                Choose your option
                              </option>
                              <option>MBA</option>
                              <option>MSc</option>
                            </Input>
                          </Col>
                        </Col>
                        <Col sm="6" className="form-group">
                          <FormLabel>Profession</FormLabel>
                          <Col sm="12" className="form-group">
                            <Input
                              type="select"
                              className="form-select"
                              required
                              value={profession}
                              onChange={(event) =>
                                setProfession(event.target.value)
                              }
                            >
                              <option selected disabled value="">
                                Choose your option
                              </option>
                              <option>Dr</option>
                              <option>Service</option>
                            </Input>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="6" className="form-group">
                          <FormLabel>Nationality</FormLabel>
                          <Col sm="12" className="form-group">
                            <Input
                              type="select"
                              className="form-select"
                              required
                              value={nationality}
                              onChange={(event) =>
                                setNationality(event.target.value)
                              }
                            >
                              <option selected disabled value="">
                                Choose your option
                              </option>
                              <option>India</option>
                              <option>Japan</option>
                            </Input>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="6" className="form-group">
                          <FormLabel>Social category of invitee</FormLabel>
                          <Col sm="12" className="form-group">
                            <Input
                              type="select"
                              className="form-select"
                              required
                              value={socialCategory}
                              onChange={(event) =>
                                setSocialCategory(event.target.value)
                              }
                            >
                              <option selected disabled value="">
                                Choose your option
                              </option>
                              <option>A</option>
                              <option>B</option>
                            </Input>
                          </Col>
                        </Col>
                        <Col sm="6" className="form-group">
                          <FormLabel>Religion practiced by invitee</FormLabel>
                          <Col sm="12" className="form-group">
                            <Input
                              type="select"
                              className="form-select"
                              required
                              value={religion}
                              onChange={(event) =>
                                setReligion(event.target.value)
                              }
                            >
                              <option selected disabled value="">
                                Choose your option
                              </option>
                              <option>A</option>
                              <option>B</option>
                            </Input>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="p-2 form-group">
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={SubmitForm}
                      >
                        Update
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Col>
        </Col>
        <Col sm="12">
          <Modal show={showModal} onHide={closeOnOk}>
            <Modal.Body>
              <Col sm="12">Nominee Details Updated Successfull..!!</Col>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                className="d-block mx-auto"
                onClick={closeOnOk}
              >
                Ok
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Col>
    </>
  );
};

export default EditNominationState;
