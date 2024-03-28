import React, { useState } from "react";
import {
  Button,
  Card,
  Form,
  FormGroup,
  FormLabel,
  Row,
  Modal,
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useNavigate } from "react-router-dom";
import { CardBody, CardFooter, Col, Input } from "reactstrap";

import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const AdditionalDetails = ({
  nextStep,
  prevStep,
  handleFormData,
  closeTab,
  values,
}) => {
  const BaseURL = process.env.REACT_APP_BASE_URL;
  const Navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const {
    Gender,
    dob,
    Education,
    Profession,
    Nationality,
    SCI,
    RegPraInvi,
    houseNo,
    streetdetails,
    Country,
    State,
    City,
    District,
    Taluka,
    PinZip,
    KnownAsOne,
    KnownAsTwo,
    KnownAsThree,
    introType,
    m21wing,
    splintrodrive,
    prelangguest,
    upcomingintro,
    comment,
    firstName,
    lastName,
    MobileNo,
    Email,
    AltEmail,
  } = values;

  // Function to open the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close the modal only when the "OK" button is clicked
  const closeOnOk = () => {
    setShowModal(false);
    closeTab();
  };

  const SubmitForm = (e) => {
    e.preventDefault();

    const m21MemberId = localStorage.getItem("m21MeetingId");
    console.log("member id", m21MemberId);
    const AdditionalNominee = {
      gender: Gender,
      dob: dob,
      education: Education,
      profession: Profession,
      nationality: Nationality,
      social_category_of_invitee: SCI,
      religion: RegPraInvi,
    };

    const addressNominee = {
      house: houseNo,
      street: streetdetails,
      country: Country,
      state: State,
      city: City,
      district: District,
      taluka: Taluka,
      pinCode: PinZip,
    };
    const IntroductoryNominee = {
      introductoryType: introType,
      m21Wing: m21wing,
      specialIntroductoryDrive: splintrodrive,
      preferredLanguageByGuest: prelangguest,
      upcomingIntroductory: upcomingintro,
      comment: comment,
    };
    const InviteeDetails = {
      firstName: firstName,
      lastName: lastName,
      mobile: MobileNo,
      email: Email,
      alternateEmailId: AltEmail,
    };

    const ReferedDetails = {
      KnowAs: KnownAsOne,
      KnowFrom: KnownAsTwo,
      AppealSharedWithInvitee: KnownAsThree,
      "M21MemberID": m21MemberId,
    };

    const responsebody = {
      "additional-nominee": AdditionalNominee,
      "address-nominee": addressNominee,
      "introductory-nominee": IntroductoryNominee,
      "invitee-details": InviteeDetails,
      "Refered-details": ReferedDetails,
    };
    console.log("response body", responsebody);
    openModal();
    const res = fetch(`${BaseURL}/api/introductory/nomination`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responsebody),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <Desktop>
        <Col className="section">
          <Col className="g-2 from  py-3 px-5">
            <Row>
              <Form onSubmit={SubmitForm}>
                <FormGroup>
                  <Card className="border-0">
                    <CardHeader className="border-0 bg-white px-0 ">
                      <h5>Additional details</h5>
                    </CardHeader>
                    <CardBody className="border-0 px-0">
                      <Row className="g-2 form">
                        <Col sm="12" className="form-label pt-2">
                          <Row>
                            <Col sm="4">
                              <FormLabel>
                                <sub>Gender</sub>
                                <sup className="text-danger">*</sup>
                              </FormLabel>
                              <Col sm="12">
                                <Input
                                  type="select"
                                  name="Gender"
                                  defaultValue={values.Gender}
                                  onChange={handleFormData("Gender")}
                                  size="sm"
                                  className="rounded-0"
                                >
                                  <option value="" selected>
                                    Choose your option
                                  </option>
                                  <option>Male</option>
                                  <option>Female</option>
                                </Input>
                              </Col>
                            </Col>
                            <Col sm="4">
                              <FormLabel>
                                <sub>Date of birth</sub>{" "}
                                <sup className="text-danger">*</sup>
                              </FormLabel>
                              <Col sm="12">
                                <Input
                                  type="date"
                                  className="rounded-0"
                                  size="sm"
                                  name="dob"
                                  placeholder="DD-MM-YYYY"
                                  defaultValue={values.dob}
                                  onChange={handleFormData("dob")}
                                />
                              </Col>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="12" className="pt-2">
                          <Row>
                            <Col sm="4">
                              <FormLabel>
                                <sub>Education</sub>
                                <sup className="text-danger">*</sup>
                              </FormLabel>
                              <Col sm="12">
                                <Input
                                  type="select"
                                  name="Education"
                                  defaultValue={values.Education}
                                  onChange={handleFormData("Education")}
                                  size="sm"
                                  className="rounded-0"
                                >
                                  <option value="" selected disabled>Choose your option</option>
                                  <option>Ma</option>
                                  <option>M.C.A</option>
                                </Input>
                              </Col>
                            </Col>
                            <Col sm="4">
                              <FormLabel>
                                <sub>Profession</sub>{" "}
                                <sup className="text-danger">*</sup>
                              </FormLabel>
                              <Col sm="12">
                                <Input
                                  type="select"
                                  className="rounded-0"
                                  size="sm"
                                  name="Profession"
                                  defaultValue={values.Profession}
                                  onChange={handleFormData("Profession")}
                                >
                                  <option vlaue="" selected disabled>Choose your option</option>
                                  <option>Doctor</option>
                                  <option>Engineer</option>
                                  <option>Teacher</option>
                                </Input>
                              </Col>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="12" className="pt-2">
                          <Row>
                            <Col sm="4">
                              <FormLabel>
                                <sub>Nationality</sub>{" "}
                                <sup className="text-danger">*</sup>
                              </FormLabel>
                              <Col sm="12">
                                <Input
                                  type="select"
                                  className="rounded-0"
                                  size="sm"
                                  name="Nationality"
                                  defaultValue={values.Nationality}
                                  onChange={handleFormData("Nationality")}
                                >
                                  <option vlaue="" selected disabled>Choose your option</option>
                                  <option>India</option>
                                  <option>England</option>
                                </Input>
                              </Col>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="12" className="pt-3">
                          <Row>
                            <Col sm="4">
                              <FormLabel>
                                <sub>Social category of invitee</sub>
                                <sup className="text-danger">*</sup>
                              </FormLabel>
                              <Col sm="12">
                                <Input
                                  type="select"
                                  name="SCI"
                                  defaultValue={values.SCI}
                                  onChange={handleFormData("SCI")}
                                  size="sm"
                                  className="rounded-0"
                                >
                                  <option value="" selected disabled>Choose your option</option>
                                  <option>None</option>
                                  <option>None</option>
                                </Input>
                              </Col>
                            </Col>
                            <Col sm="4">
                              <FormLabel>
                                <sub>Religion practiced by invitee</sub>{" "}
                                <sup className="text-danger">*</sup>
                              </FormLabel>
                              <Col sm="12">
                                <Input
                                  type="select"
                                  className="rounded-0"
                                  size="sm"
                                  name="RegPraInvi"
                                  defaultValue={values.RegPraInvi}
                                  onChange={handleFormData("RegPraInvi")}
                                >
                                  <option vlaue="" selected>
                                    Choose your option
                                  </option>
                                  <option>None</option>
                                  <option>None</option>
                                </Input>
                              </Col>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="border-0 pt-2 bg-white">
                      <Col sm="12" className="pt-4">
                        <Col lg="12" className="p-3">
                          <Row>
                            <Col lg="8">
                              <Button
                                onClick={prevStep}
                                size="lg"
                                className="col-sm-3 rounded-0 text-white figure-caption "
                              >
                                Previous
                              </Button>
                            </Col>
                            <Col sm="4">
                              <Row>
                                <Col sm="6">
                                  <Button
                                    size="lg"
                                    className="btn-outline-secondary bg-white rounded-0 text-black figure-caption"
                                  >
                                    Cancel
                                  </Button>
                                </Col>
                                <Col sm="6">
                                  <Button
                                    size="lg"
                                    type="submit"
                                    className="col-sm-12 rounded-0 figure-caption text-white"
                                  >
                                    Submit
                                  </Button>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Col>
                    </CardFooter>
                  </Card>
                </FormGroup>
              </Form>
            </Row>
          </Col>
          <Col sm="12">
            <Modal show={showModal} onHide={closeOnOk}>
              <Modal.Header>
                <Modal.Title>
                  Thanks for providing information.
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Col sm="12">
                  We are thanking you for spending valuable time for referring
                  new contact, your contribution will support us to grow faster.
                </Col>
              </Modal.Body>
              <Modal.Footer>
                <Col sm="12" className="text-center fw-bold">
                  Yours in mission
                </Col>
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
      </Desktop>

      <Mobile>
        <Col className="section">
          <Col className="container-fluid">
            <Col className="form-control form-group border-0">
              <Row className="g-2 form">
                <Form onSubmit={SubmitForm}>
                  <Card>
                    <CardHeader>
                      <h5>Additional details</h5>
                    </CardHeader>
                    <CardBody>
                      <Col className="col-12">
                        <Row className="g-2 form">
                          <Col className="col-12">
                            <Row className="g-2 form">
                              <Col className="col-6">
                                <FormLabel>Gender</FormLabel>
                                <Col className="col-12">
                                  <Input
                                    type="select"
                                    name="Gender"
                                    defaultValue={values.Gender}
                                    onChange={handleFormData("Gender")}
                                    size="sm"
                                    className="rounded-0"
                                  >
                                    <option>M</option>
                                    <option>F</option>
                                    <option>T</option>
                                  </Input>
                                </Col>
                              </Col>
                              <Col className="col-6">
                                <FormLabel> Date of birth</FormLabel>
                                <Col className="col-12">
                                  <Input type="Date" className="rounded-0" />
                                </Col>
                              </Col>
                            </Row>
                          </Col>
                          <Col className="col-12">
                            <Row className="g-2 form">
                              <Col className="col-6">
                                <FormLabel>Education</FormLabel>
                                <Col className="col-12">
                                  <Input
                                    type="select"
                                    name="Education"
                                    defaultValue={values.Education}
                                    onChange={handleFormData("Education")}
                                    size="sm"
                                    className="rounded-0"
                                  >
                                    <option>MBBS</option>
                                    <option>LLB</option>
                                    <option>B.E</option>
                                  </Input>
                                </Col>
                              </Col>
                              <Col className="col-6">
                                <FormLabel>Profession</FormLabel>
                                <Col>
                                  <Input
                                    type="select"
                                    className="rounded-0"
                                    size="sm"
                                    name="Profession"
                                    defaultValue={values.Profession}
                                    onChange={handleFormData("Profession")}
                                  >
                                    <option>Doctor</option>
                                    <option>Engineer</option>
                                    <option>Lawyer</option>
                                  </Input>
                                </Col>
                              </Col>
                            </Row>
                          </Col>
                          <Col className="col-12">
                            <Row className="g-2 form">
                              <FormLabel>Nationality</FormLabel>
                              <Col className="col-12">
                                <Input
                                  type="select"
                                  className="rounded-0"
                                  size="sm"
                                  name="Nationality"
                                  defaultValue={values.Nationality}
                                  onChange={handleFormData("Nationality")}
                                >
                                  <option>Indian</option>
                                  <option>China</option>
                                  <option>Japan</option>
                                </Input>
                              </Col>
                            </Row>
                          </Col>
                          <Col className="col-12">
                            <Row className="g-2 form">
                              <FormLabel>Social category of invitee</FormLabel>
                              <Col className="col-12">
                                <Input
                                  type="select"
                                  name="SCI"
                                  defaultValue={values.SCI}
                                  onChange={handleFormData("SCI")}
                                  size="sm"
                                  className="rounded-0"
                                >
                                  <option>A</option>
                                  <option>B</option>
                                  <option>C</option>
                                </Input>
                              </Col>
                            </Row>
                          </Col>
                          <Col className="col-12">
                            <Row className="col-12">
                              <FormLabel>
                                Religion practiced by invitee
                              </FormLabel>
                              <Col className="col-12">
                                <Input
                                  type="select"
                                  className="rounded-0"
                                  size="sm"
                                  name="RegPraInvi"
                                  defaultValue={values.RegPraInvi}
                                  onChange={handleFormData("RegPraInvi")}
                                >
                                  <option>D</option>
                                  <option>E</option>
                                  <option>F</option>
                                </Input>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </CardBody>
                    <CardFooter>
                      <Col className="col-12">
                        <Row className="g-2 form">
                          <Col className="col-4">
                            <Button className="rounded-0" onClick={prevStep}>
                              Previous
                            </Button>
                          </Col>
                          <Col className="col-4 text-center">
                            <Button className="bg-white text-primary rounded-0">
                              Cancel
                            </Button>
                          </Col>
                          <Col className="col-4">
                            <Button
                              type="submit"
                              className="bg-primary rounded-0"
                            >
                              Submit
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </CardFooter>
                  </Card>
                </Form>
              </Row>
            </Col>
          </Col>

          <Col className=""></Col>
          <Col className="m-3"></Col>
          <Col className="m-3"></Col>
          <Col className="m-3">
            <Col lg="12">
              <Row>
                <Col lg="4"></Col>
                <Col lg="4"></Col>
              </Row>
            </Col>
          </Col>
          <Col className="m-3">
            <Col lg="12">
              <Row>
                <Col lg="8"></Col>
                <Col></Col>
                <Col></Col>
              </Row>
            </Col>
          </Col>
        </Col>
      </Mobile>
    </>
  );
};
export default AdditionalDetails;
