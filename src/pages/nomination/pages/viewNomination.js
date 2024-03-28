import React from "react";
import { useState, useEffect } from "react";
import { Accordion, Button, Card, Col, FormLabel, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CardBody, CardFooter, Input, Label } from "reactstrap";
import arrwoDownwardimg from "../../../assets/img/chevrondownward.png";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const ViewNomination = () => {
  const [isintrodetail, setIsIntroDetail] = useState(true);
  const [isnomipersondetail, setIsNominationPersonDetail] = useState(true);
  const [iscontactdetails, setIsContactDetails] = useState(true);
  const [iswhatsappnumber, setIsWhatsAppNumber] = useState(true);
  const [isupdatedwhatsappnum, setIsUpdatedWhatsAppNum] = useState(true);
  const [isaddressdetails, setIsAddressDetails] = useState(true);
  const [houseNumber, setHouseNumber] = useState("");
  const [streetDetails, setStreetDetails] = useState("");
  const [landMark, setLandMark] = useState("");
  const [country, setCountry] = useState("");
  const [isstate, setIsState] = useState("");
  const [isdistrict, setIsDistrict] = useState("");
  const [city, setCity] = useState("");
  const [taluka, setTaluka] = useState("");
  const [pin, setPin] = useState("");
  const [isAdditionalDetail, setIsAdditionalDetail] = useState(true);
  const [isname, setIsName] = useState(true);

  const IntroductoryDetails = () => {
    setIsIntroDetail((current) => !current);
  };

  const NominationDetails = () => {
    setIsNominationPersonDetail((current) => !current);
  };

  const ContactDetails = () => {
    setIsContactDetails((current) => !current);
  };
  const WhatsappNumber = () => {
    setIsWhatsAppNumber((current) => !current);
  };

  const UpdatedwhatsAppNumber = () => {
    setIsUpdatedWhatsAppNum((current) => !current);
    setIsWhatsAppNumber((current) => !current);
  };

  const AddressDetails = () => {
    setIsAddressDetails((current) => !current);
  };

  const AdditionalDetail = () => {
    setIsAdditionalDetail((current) => !current);
  };

  const NominatedName = () => {
    setIsName((current) => !current);
  };

  const [isToggle, setIsToggle] = useState(true);

  const ArrwoUpdownFn = () => {
    // var img = document.getElementById("image");
    // img.setAttribute("class", "rotated-image");

    setIsToggle((prevState) => ({
      isToggle: !prevState.isToggle,
    }));
  };

  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [nomination, setNomination] = useState([]);
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
        setNomination(data);
        console.log(data);
      });
  }, [id]);

  const navigate = useNavigate();
  const DivertToMyNomination = () => {
    navigate("/auth/login/nomination");
  };

  return (
    <>
      <Desktop>
        <Col sm="12" className="p-3">
          <Row className="g-2 form">
            <Col sm="2">&nbsp;</Col>
            <Col sm="10">
              <Card className="border-0 rounded-0">
                <CardHeader className="border-0 rounded-0">
                  View Nomination details
                </CardHeader>
                <CardBody className="border-0 rounded-0">
                  <Col sm="12">
                    <Row className="g-2 form">
                      <Col sm="12" className="form-control">
                        <Row className="g-2 form">
                          <Col sm="12" className="border-bottom">
                            <Row className="g-2 form">
                              <Col sm="3">Refered by</Col>
                              <Col sm="3">Mr. Prafull Bhagat(1234)</Col>
                            </Row>
                          </Col>

                          <Col sm="12">
                            <Row className="g-2 form">
                              <Col sm="3">
                                <FormLabel>Know as</FormLabel>
                                <Col sm="12" className="fw-bold">
                                  {nomination.referedResponseDto?.knowAs}{" "}
                                </Col>
                              </Col>
                              <Col sm="3">
                                <FormLabel>Known from</FormLabel>
                                <Col sm="12" className="fw-bold">
                                  {" "}
                                  {nomination.referedResponseDto?.knowFrom}{" "}
                                </Col>
                              </Col>
                              <Col sm="3">
                                <FormLabel>Appeal Shared</FormLabel>
                                <Col sm="12" className="fw-bold">
                                  {" "}
                                  {
                                    nomination.referedResponseDto
                                      ?.appealSharedWithInvitee
                                  }{" "}
                                </Col>
                              </Col>
                            </Row>
                          </Col>
                          <Col sm="12" className="border-bottom">
                            <Row className="g-2 form">
                              <Col sm="6">Introductory details</Col>
                              <Col
                                sm="6"
                                className="text-end"
                                onClick={IntroductoryDetails}
                              >
                                Edit
                              </Col>
                            </Row>
                          </Col>
                          {isintrodetail && (
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="2">
                                  <FormLabel>Introductory type</FormLabel>
                                  <Col sm="12" className="fw-bold">
                                    {" "}
                                    {
                                      nomination.introductoryDetailsResponse
                                        ?.introductoryType
                                    }{" "}
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>M21 Wing</FormLabel>
                                  <Col sm="12" className="fw-bold">
                                    {" "}
                                    {
                                      nomination.introductoryDetailsResponse
                                        ?.m21Wing
                                    }{" "}
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>
                                    Special introductory drive
                                  </FormLabel>
                                  <Col sm="12" className="fw-bold">
                                    {" "}
                                    {
                                      nomination.introductoryDetailsResponse
                                        ?.specialIntroductoryDrive
                                    }{" "}
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>Prefered language</FormLabel>
                                  <Col sm="12" className="fw-bold">
                                    {" "}
                                    {
                                      nomination.introductoryDetailsResponse
                                        ?.preferredLanguageByGuest
                                    }
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>Umpcoming introductory</FormLabel>
                                  <Col sm="12" className="fw-bold">
                                    {" "}
                                    {
                                      nomination.introductoryDetailsResponse
                                        ?.upcomingIntroductory
                                    }{" "}
                                  </Col>
                                </Col>
                                <Col sm="12">
                                  <Col sm="12">
                                    <FormLabel>Comments</FormLabel>
                                    <Col sm="12">
                                      {
                                        nomination.introductoryDetailsResponse
                                          ?.comments
                                      }
                                    </Col>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                          )}
                          {!isintrodetail && (
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="2">
                                  <FormLabel>Introductory Type</FormLabel>
                                  <Col sm="12">
                                    <Input
                                      type="text"
                                      placeholder="Enter Details"
                                    />
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>M21 Wing</FormLabel>
                                  <Col sm="12">
                                    <Input
                                      type="text"
                                      placeholder="Enter Details"
                                    />
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>
                                    Special introductory drive
                                  </FormLabel>
                                  <Col sm="12">
                                    <Input
                                      type="text"
                                      placeholder="Enter details"
                                    />
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>Prefered language</FormLabel>
                                  <Col sm="12">
                                    <Input
                                      type="text"
                                      placeholder="Enter Details"
                                    />
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>Umpcoming introductory</FormLabel>
                                  <Col sm="12">
                                    <Input
                                      type="text"
                                      placeholder="Enter Details"
                                    />
                                  </Col>
                                </Col>
                                <Col sm="12">
                                  <FormLabel>Comments</FormLabel>
                                  <br />
                                  <textarea
                                    placeholder="Enter your comment"
                                    className="col-sm-12"
                                  ></textarea>
                                </Col>
                              </Row>
                              <CardFooter>
                                <Col sm="12">
                                  <Row className="g-2 form">
                                    <Col sm="6" className="text-end">
                                      <Button className="btn-outline-primary bg-white text-priamry">
                                        Cancel
                                      </Button>
                                    </Col>
                                    <Col sm="6">
                                      <Button type="submit">Save</Button>
                                    </Col>
                                  </Row>
                                </Col>
                              </CardFooter>
                            </Col>
                          )}
                        </Row>
                      </Col>

                      <Col sm="12">
                        <b>Nomination Person Details</b>
                      </Col>
                      <Col sm="12" className="border-bottom">
                        <Row className="g-2 form">
                          <Col sm="6">
                            <FormLabel>Name</FormLabel>
                          </Col>
                          <Col
                            sm="6"
                            className="text-end"
                            onClick={NominationDetails}
                          >
                            Edit
                          </Col>
                        </Row>
                      </Col>
                      <Col sm="12">
                        {isnomipersondetail && (
                          <Col sm="12">
                            <Col sm="12" className="fw-bold">
                              {nomination.inviteeResponseDto?.firstName}&nbsp;{" "}
                              {nomination.inviteeResponseDto?.lastName}
                            </Col>
                          </Col>
                        )}
                        {!isnomipersondetail && (
                          <Col sm="12">
                            <FormLabel>Name</FormLabel>
                            <Col sm="12">
                              <Input type="text" placeholder="enter details" />
                            </Col>
                            <CardFooter>
                              <Col sm="12">
                                <Row className="g-2 form">
                                  <Col sm="6" className="text-end">
                                    <Button className="btn-outline-primary bg-white text-priamry">
                                      Cancel
                                    </Button>
                                  </Col>
                                  <Col sm="6">
                                    <Button type="submit">Save</Button>
                                  </Col>
                                </Row>
                              </Col>
                            </CardFooter>
                          </Col>
                        )}
                      </Col>

                      <Col sm="12" className="border-bottom">
                        <Row className="g-2 form">
                          <Col sm="6">
                            <FormLabel>Contact Details</FormLabel>
                          </Col>
                          <Col sm="6" className="text-end">
                            <Col sm="12" type="button" onClick={ContactDetails}>
                              Edit
                            </Col>
                          </Col>
                        </Row>
                      </Col>
                      {iscontactdetails && (
                        <Col sm="12">
                          <Row className="g-2 form">
                            <Col sm="3">
                              <FormLabel>Mobile Number</FormLabel>
                              <Col sm="12" className="fw-bold">
                                {" "}
                                {nomination.inviteeResponseDto?.mobile}{" "}
                              </Col>
                              {!isupdatedwhatsappnum && (
                                <Col sm="12">+91 9011467392</Col>
                              )}
                              {!iswhatsappnumber && (
                                <Col sm="12">
                                  <Row className="g-2 form">
                                    <Col sm="10">
                                      <Input
                                        type="text"
                                        placeholder="Enter your whatsapp number"
                                      />
                                    </Col>
                                    <Col sm="2">
                                      <Button onClick={UpdatedwhatsAppNumber}>
                                        Submit
                                      </Button>
                                    </Col>
                                  </Row>
                                </Col>
                              )}
                              <Col sm="12" className="form-check">
                                <Input
                                  type="checkbox"
                                  onClick={WhatsappNumber}
                                />
                                <FormLabel>Whatsapp number too</FormLabel>
                              </Col>
                            </Col>
                            <Col sm="3">
                              <Col sm="12">&nbsp;</Col>
                              <FormLabel>Primary</FormLabel>
                            </Col>
                            <Col sm="3">
                              <FormLabel>Email</FormLabel>
                              <Col sm="12" className="fw-bold">
                                {" "}
                                {nomination.inviteeResponseDto?.email}{" "}
                              </Col>
                              <Col sm="12" className="fw-bold">
                                {" "}
                                {
                                  nomination.inviteeResponseDto
                                    ?.alternateEmailId
                                }{" "}
                              </Col>
                            </Col>
                            <Col sm="3">
                              <Col sm="12">&nbsp;</Col>
                              <Col sm="12">Primary</Col>
                              <Col sm="12">Alternate</Col>
                            </Col>
                          </Row>
                        </Col>
                      )}
                      {!iscontactdetails && (
                        <Col sm="12">
                          <Row className="g-2 form">
                            <Col sm="3">
                              <FormLabel>Mobile Number</FormLabel>
                              <Input
                                type="text"
                                placeholder="Enter your mobile number"
                              />
                            </Col>
                            <Col sm="3">
                              <Col sm="12">&nbsp;</Col>
                              <Col sm="12" className="pt-2">
                                <Input type="select">
                                  <option>choose your option</option>
                                  <option>Primary</option>
                                  <option>Alternate</option>
                                </Input>
                              </Col>
                            </Col>
                            <Col sm="3">
                              <FormLabel>Email</FormLabel>
                              <Row className="g-2 form">
                                <Col sm="12">
                                  <Input type=" email" />
                                </Col>
                                <Col sm="12">
                                  <Input type=" email" />
                                </Col>
                              </Row>
                            </Col>
                            <Col sm="3">
                              <Row className="g-2 form">
                                <Col sm="12">&nbsp;</Col>
                                <Col sm="12">
                                  <Input type="select">
                                    <option>choose your option</option>
                                    <option>Primary</option>
                                    <option>Alternate</option>
                                  </Input>
                                </Col>
                                <Col sm="12">
                                  <Input type="select">
                                    <option>choose your option</option>
                                    <option>Primary</option>
                                    <option>Alternate</option>
                                  </Input>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                          <CardFooter>
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="6" className="text-end">
                                  <Button className="btn-outline-primary bg-white text-priamry">
                                    Cancel
                                  </Button>
                                </Col>
                                <Col sm="6">
                                  <Button type="submit">Save</Button>
                                </Col>
                              </Row>
                            </Col>
                          </CardFooter>
                        </Col>
                      )}

                      <Col sm="12" className="border-bottom">
                        <Row className="g-2 form">
                          <Col sm="6">Address Details</Col>
                          <Col
                            sm="6"
                            className="text-end"
                            onClick={AddressDetails}
                          >
                            Edit
                          </Col>
                        </Row>
                      </Col>
                      <Col sm="12">
                        {isaddressdetails && (
                          <Col sm="12">
                            <Row className="g-2 form">
                              <Col sm="6">
                                <FormLabel>Present Address</FormLabel>
                                <Col sm="12" className="fw-bold">
                                  {nomination.addressNomineeResponseDto?.house}
                                  <br />
                                  {nomination.addressNomineeResponseDto?.street}
                                  <br />
                                  {nomination.addressNomineeResponseDto?.city},
                                  &nbsp;
                                  {nomination.addressNomineeResponseDto?.state},
                                  &nbsp;
                                  {
                                    nomination.addressNomineeResponseDto
                                      ?.country
                                  }
                                  <br />
                                  {
                                    nomination.addressNomineeResponseDto
                                      ?.pinCode
                                  }
                                </Col>
                              </Col>
                              <Col sm="6">
                                <FormLabel>Permanent Address</FormLabel>
                                <Col sm="12" className="fw-bold">
                                  {nomination.addressNomineeResponseDto?.house}
                                  <br />
                                  {nomination.addressNomineeResponseDto?.street}
                                  <br />
                                  {nomination.addressNomineeResponseDto?.city},
                                  &nbsp;
                                  {nomination.addressNomineeResponseDto?.state},
                                  &nbsp;
                                  {
                                    nomination.addressNomineeResponseDto
                                      ?.country
                                  }
                                  <br />
                                  {
                                    nomination.addressNomineeResponseDto
                                      ?.pinCode
                                  }
                                </Col>
                              </Col>
                            </Row>
                          </Col>
                        )}

                        {!isaddressdetails && (
                          <>
                            <Card>
                              <CardBody className="bg-light">
                                <Col sm="12">
                                  <Row>
                                    <Col sm="6">
                                      <CardHeader className="bg-transparent">
                                        Present address
                                      </CardHeader>
                                      <Col sm="12" className="pt-2">
                                        <Col sm="12" className="form-check">
                                          &nbsp;
                                        </Col>
                                      </Col>
                                      <CardBody>
                                        <Row className="g-2 form">
                                          <Col sm="12">
                                            <FormLabel>
                                              House/Flat No./Building
                                            </FormLabel>
                                            <Col sm="12">
                                              <Input
                                                type="text"
                                                required
                                                placeholder="Enter house no"
                                                defaultValue={houseNumber}
                                                onChange={(event) =>
                                                  setHouseNumber(
                                                    event.target.value
                                                  )
                                                }
                                                className="rounded-0"
                                              />
                                            </Col>
                                          </Col>
                                          <Col sm="12">
                                            <FormLabel>
                                              Street Details
                                            </FormLabel>
                                            <Col sm="12">
                                              <Input
                                                type="text"
                                                required
                                                placeholder="Enter street details"
                                                defaultValue={streetDetails}
                                                onChange={(event) =>
                                                  setStreetDetails(
                                                    event.target.value
                                                  )
                                                }
                                              />
                                            </Col>
                                          </Col>
                                          <Col sm="12">
                                            <FormLabel>Landmark</FormLabel>
                                            <Col sm="12">
                                              <Input
                                                type="text"
                                                required
                                                placeholder="Enter land mark"
                                                defaultValue={landMark}
                                                onChange={(event) =>
                                                  setLandMark(
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
                                                  <FormLabel>Country</FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      required
                                                      type="select"
                                                      defaultValue={country}
                                                      onChange={(event) =>
                                                        setCountry(
                                                          event.target.value
                                                        )
                                                      }
                                                      className="rounded-0"
                                                    >
                                                      <option>India</option>
                                                      <option>Japan</option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                                <Col sm="12">
                                                  <FormLabel>City</FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      required
                                                      type="select"
                                                      defaultValue={city}
                                                      onChange={(event) =>
                                                        setCity(
                                                          event.target.value
                                                        )
                                                      }
                                                    >
                                                      <option>India</option>
                                                      <option>Japan</option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                                <Col sm="12">
                                                  <FormLabel>Taluka</FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      type="select"
                                                      defaultValue={taluka}
                                                      onChange={(event) =>
                                                        setTaluka(
                                                          event.target.value
                                                        )
                                                      }
                                                      className="rounded-0"
                                                    >
                                                      <option>India</option>
                                                      <option>Japan</option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                              </Col>
                                              <Col sm="6">
                                                <Col sm="12">
                                                  <FormLabel>State</FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      type="select"
                                                      defaultValue={isstate}
                                                      onChange={(event) =>
                                                        setIsState(
                                                          event.target.value
                                                        )
                                                      }
                                                    >
                                                      <option>India</option>
                                                      <option>Japan</option>
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
                                                      defaultValue={isdistrict}
                                                      onChange={(event) =>
                                                        setIsDistrict(
                                                          event.target.value
                                                        )
                                                      }
                                                    >
                                                      <option>India</option>
                                                      <option>Japan</option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                                <Col sm="12">
                                                  <FormLabel>
                                                    Pin Code
                                                  </FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      type="select"
                                                      defaultValue={pin}
                                                      onChange={(event) =>
                                                        setPin(
                                                          event.target.value
                                                        )
                                                      }
                                                    >
                                                      <option>India</option>
                                                      <option>Japan</option>
                                                    </Input>
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
                                        <Col sm="12" className="form-check">
                                          <Input type="checkbox"></Input>
                                          <Label>Same as present address</Label>
                                        </Col>
                                      </Col>
                                      <CardBody>
                                        <Row className="g-2 form">
                                          <Col sm="12">
                                            <FormLabel>
                                              House/Flat No./Building
                                            </FormLabel>
                                            <Col sm="12">
                                              <Input
                                                type="text"
                                                placeholder="Enter house no"
                                                defaultValue={houseNumber}
                                                onChange={(event) =>
                                                  setHouseNumber(
                                                    event.target.value
                                                  )
                                                }
                                              />
                                            </Col>
                                          </Col>
                                          <Col sm="12">
                                            <FormLabel>
                                              Street Details
                                            </FormLabel>
                                            <Col sm="12">
                                              <Input
                                                placeholder="Enter street details"
                                                type="text"
                                                defaultValue={streetDetails}
                                                onChange={(event) =>
                                                  setStreetDetails(
                                                    event.target.value
                                                  )
                                                }
                                              />
                                            </Col>
                                          </Col>
                                          <Col sm="12">
                                            <FormLabel>Landmark</FormLabel>
                                            <Col sm="12">
                                              <Input
                                                type="text"
                                                placeholder="Enter land mark"
                                                defaultValue={landMark}
                                                onChange={(event) =>
                                                  setLandMark(
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
                                                  <FormLabel>Country</FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      type="select"
                                                      defaultValue={country}
                                                      onChange={(event) =>
                                                        setCountry(
                                                          event.target.value
                                                        )
                                                      }
                                                    >
                                                      <option>India</option>
                                                      <option>Japan</option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                                <Col sm="12">
                                                  <FormLabel>City</FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      defaultValue={city}
                                                      onChange={(e) =>
                                                        setCity(e.target.value)
                                                      }
                                                      type="select"
                                                    >
                                                      <option>India</option>
                                                      <option>Japan</option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                                <Col sm="12">
                                                  <FormLabel>Taluka</FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      type="select"
                                                      defaultValue={taluka}
                                                      onChange={(e) =>
                                                        setTaluka(
                                                          e.target.value
                                                        )
                                                      }
                                                    >
                                                      <option>India</option>
                                                      <option>Japan</option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                              </Col>
                                              <Col sm="6">
                                                <Col sm="12">
                                                  <FormLabel>State</FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      defaultValue={isstate}
                                                      onChange={(e) =>
                                                        setIsState(
                                                          e.target.value
                                                        )
                                                      }
                                                      type="select"
                                                    >
                                                      <option>India</option>
                                                      <option>Japan</option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                                <Col sm="12">
                                                  <FormLabel>
                                                    District
                                                  </FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      defaultValue={isdistrict}
                                                      onChange={(e) =>
                                                        setIsDistrict(
                                                          e.target.value
                                                        )
                                                      }
                                                      type="select"
                                                    >
                                                      <option>India</option>
                                                      <option>Japan</option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                                <Col sm="12">
                                                  <FormLabel>
                                                    Pin Code
                                                  </FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      defaultValue={pin}
                                                      onChange={(e) =>
                                                        setPin(e.target.value)
                                                      }
                                                      type="select"
                                                    >
                                                      <option>India</option>
                                                      <option>Japan</option>
                                                    </Input>
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
                                      <Button className="btn-outline-primary bg-white text-priamry">
                                        Cancel
                                      </Button>
                                    </Col>
                                    <Col sm="6">
                                      <Button type="submit">Save</Button>
                                    </Col>
                                  </Row>
                                </Col>
                              </CardFooter>
                            </Card>
                          </>
                        )}
                      </Col>
                      <Col sm="12" className="border-bottom">
                        <Row className="g-2 form">
                          <Col sm="6">
                            <FormLabel>Additional Detail</FormLabel>
                          </Col>
                          <Col
                            sm="6"
                            className="text-end"
                            onClick={AdditionalDetail}
                          >
                            Edit
                          </Col>
                        </Row>
                      </Col>
                      {isAdditionalDetail && (
                        <Col sm="12">
                          <Row className="g-2 form">
                            <Col sm="3">
                              <FormLabel>Gender</FormLabel>
                              <Col sm="12" className="fw-bold">
                                {" "}
                                {
                                  nomination.additionalNomineeResponseDto
                                    ?.gender
                                }{" "}
                              </Col>
                            </Col>
                            <Col sm="3">
                              <FormLabel>Date of birth</FormLabel>
                              <Col sm="12" className="fw-bold">
                                {" "}
                                {
                                  nomination.additionalNomineeResponseDto?.dob
                                }{" "}
                              </Col>
                            </Col>
                            <Col sm="3">
                              <FormLabel>Education</FormLabel>
                              <Col sm="12" className="fw-bold">
                                {" "}
                                {
                                  nomination.additionalNomineeResponseDto
                                    ?.education
                                }{" "}
                              </Col>
                            </Col>
                            <Col sm="3">
                              <FormLabel>Profession</FormLabel>
                              <Col sm="12" className="fw-bold">
                                {" "}
                                {
                                  nomination.additionalNomineeResponseDto
                                    ?.profession
                                }{" "}
                              </Col>
                            </Col>
                          </Row>
                        </Col>
                      )}
                      {!isAdditionalDetail && (
                        <Col sm="12">
                          <Row className="g-2 form">
                            <Col sm="3">
                              <FormLabel>Gender</FormLabel>
                              <Col sm="12">
                                <Input type="select">
                                  <option>Chosse your option</option>
                                  <option>Male</option>
                                  <option>Female</option>
                                  <option>Transgender</option>
                                </Input>
                              </Col>
                            </Col>
                            <Col sm="3">
                              <FormLabel>Date of birth</FormLabel>
                              <Col sm="12">
                                <Input type="date" />
                              </Col>
                            </Col>
                            <Col sm="3">
                              <FormLabel>Education</FormLabel>
                              <Col sm="12">
                                <Input type="select">
                                  <option>Chosse your option</option>
                                  <option>Doctor</option>
                                  <option>Engg</option>
                                </Input>
                              </Col>
                            </Col>
                            <Col sm="3">
                              <FormLabel>Profession</FormLabel>
                              <Col sm="12">
                                <Input type="select">
                                  <option>Chosse your options</option>
                                  <option>Service</option>
                                  <option>Bussiness</option>
                                </Input>
                              </Col>
                            </Col>
                          </Row>
                          <CardFooter>
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="6" className="text-end">
                                  <Button className="btn-outline-primary bg-white text-priamry">
                                    Cancel
                                  </Button>
                                </Col>
                                <Col sm="6">
                                  <Button type="submit">Save</Button>
                                </Col>
                              </Row>
                            </Col>
                          </CardFooter>
                        </Col>
                      )}

                      <Col sm="12">
                        <Row className="g-2 form">
                          <Col sm="4">
                            <FormLabel>Nationality</FormLabel>
                            <Col sm="12" className="fw-bold">
                              {" "}
                              {
                                nomination.additionalNomineeResponseDto
                                  ?.nationality
                              }{" "}
                            </Col>
                          </Col>
                          <Col sm="4">
                            <FormLabel>Social category</FormLabel>
                            <Col sm="12" className="fw-bold">
                              {" "}
                              {
                                nomination.additionalNomineeResponseDto
                                  ?.socialCategoryOfInvitee
                              }{" "}
                            </Col>
                          </Col>
                          <Col sm="4">
                            <FormLabel>Religion practiced</FormLabel>
                            <Col sm="12" className="fw-bold">
                              {" "}
                              {
                                nomination.additionalNomineeResponseDto
                                  ?.religion
                              }{" "}
                            </Col>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </CardBody>
                <CardFooter className="border-0 rounded-0">
                  <Col sm="12" className="text-end">
                    <Button
                      onClick={DivertToMyNomination}
                      className="bg-white text-secondary rounded-0"
                    >
                      Close
                    </Button>
                  </Col>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Col>
      </Desktop>
      <Mobile>
        <Col className="section">
          <Col className="container-fluid ">
            <Col className="form-control  border-0">
              <Col className="col-12">
                <Row className="g-2 form">
                  <Col className="col-12 form-group">
                    <Row className="g-2 form">
                      <Col className="col-8">View Nominated Details</Col>
                      <Col className="col-4 text-end">
                        <Link to="/auth/login/nomination">
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
                            <Accordion.Body className="bg-light">
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
                                      onClick={IntroductoryDetails}
                                    >
                                      Edit
                                    </Col>
                                  </Row>
                                </Col>
                                {isintrodetail && (
                                  <Col className="col-12">
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
                                {!isintrodetail && (
                                  <>
                                    <Col className="section">
                                      <Col className="container-fluid p-0">
                                        <Col className="form-group  form-control border-0 p-0">
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

                      {/* <Col className="col-12">
                        <Row className="g-2 form">
                          <Col className="col-8">
                            <Button onClick={() => setIsToggle(!isToggle)}>
                              click to rotate
                            </Button>
                          </Col>
                          <Col className="col-4">
                            {isToggle && (
                              <img
                                id="image"
                                src={arrwoDownwardimg}
                                alt="arrowdown"
                              />
                            )}
                          </Col>
                        </Row>
                      </Col> */}
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
                        <Accordion.Body>
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
                                      onClick={NominatedName}
                                    >
                                      Edit
                                    </Col>
                                  </Row>
                                </Col>
                                {isname && (
                                  <Col className="col-12">
                                    <FormLabel>Saba Anjum Karim</FormLabel>
                                  </Col>
                                )}
                                {!isname && (
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
                                {iscontactdetails && (
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
                                {!iscontactdetails && (
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
                                      onClick={AddressDetails}
                                    >
                                      Edit
                                    </Col>
                                  </Row>
                                </Col>
                                {isaddressdetails && (
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
                                {!isaddressdetails && (
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

export default ViewNomination;
