import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormLabel,
  Modal,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CardBody, CardFooter, Input, Label } from "reactstrap";
import { useMediaQuery } from "react-responsive";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useState } from "react";


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const SetPassword = ({ prevStep, handleFormData, values }) => {
  const BaseURL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  const {
    iAm, firstName, lastName, mobileNumber, WhatsappMobileNumber,
    email, building, street, country, state, city, district,
    taluka, zipCode, m21Wing, nRC, sRC, dRC, tRC,
    currentResponsibilities, gender, dateOfBirth, education,
    profession, password, confirmPassword,
  } = values;

  const [bgBlueForOtpButton, setBgBlueForOtpButton] = useState("secondary");
  const [bgChangeDarkToBlue, setBgChangeDarkToBlue] = useState("primary");

  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    navigate("/");
  };

  const [errorPasswordNotMatch, setErrorPasswordNotMatch] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
const [passwordMatch, setPasswordMatch] = useState(false);

const validatePassword = (password) => {
  if (
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) &&
    password.length > 7 &&
    /[\d+$]/.test(password)
  ) {
    setErrorPassword(false);
    setPasswordStrength('');
  } else {
    setErrorPassword(true);
    setPasswordStrength(
      'Password requires at least one capital letter, one special character, and 8 characters'
    );
  }
};

const handlePasswordChange = (e) => {
  const password = e.target.value;
  validatePassword(password);
  handleFormData('password')(e); // Update form data
};

const handleConfirmPasswordChange = (e) => {
  const confirmPassword = e.target.value;
  if (values.password !== confirmPassword) {
    setPasswordMatch(true);
    setErrorPasswordNotMatch('Passwords do not match');
  } else {
    setPasswordMatch(false);
    setErrorPasswordNotMatch('');
  }
  handleFormData('confirmPassword')(e); // Update form data
};

  const SubmitForm = (e) => {

    e.preventDefault();
      
      const credential = {
        username: values.email,
        i_am: values.iAm,
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        mobile: values.mobileNumber,
        mobile_alternate: values.whatsapp_mobile_number,
        password: values.password,
      };
      const basicDetails = {
        i_am: values.iAm,
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        mobile: values.mobileNumber,
        whatsapp_mobile_number: values.whatsapp_mobile_number,
      };
      const addressDetails = {
        house: values.building,
        street: values.street,
        country: values.country,
        state: values.state,
        city: values.city,
        district: values.district,
        taluka: values.taluka,
        pinZipCode: values.zipCode,
        "permanent_house": values.buildingForPermanent,
        "permanent_street": values.streetForPermanent,
        "permanent_country": values.countryForParmanent,
        "permanent_state": values.stateForParmanent,
        "permanent_city": values.cityForParmanent,
        "permanent_district": values.districtForParmanent,
        "permanent_taluka": values.talukaForParmanent,
        "permanent_pinZipCode": values.zipCodeForParmanent,
      };
      const orgDetails = {
        m21Wing: values.m21Wing,
        nRC: values.nRC,
        sRC: values.sRC,
        dRC: values.dRC,
        tRC: values.tRC,
        crc: values.cRC,
        currentResponsibilities: values.currentResponsibilities,
      };
      const additionalDetails = {
        gender: values.gender,
        dateOfBirth: values.dateOfBirth,
        bloodDate: values.bloodDate,
        bloodType: values.bloodType,
        education: values.education,
        profession: values.profession,
        passingYear: values.pasingYear,
        university: values.university,
      };
      const responsebody = {
        "basic-details": basicDetails,
        "address-details": addressDetails,
        "org-details": orgDetails,
        "additional-details": additionalDetails,
        credential: credential,
      };
      console.log("response body",responsebody);
      const res = fetch(`${BaseURL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(responsebody),
      })
        .then((response) => response.json())
        .then((user) => {
          console.log(user);
        });
      console.log("Signup************", res);
      openModal();

      // --------------------sending Enail to registered user-----------------------
      const msg = "Thanks for providing your information We'll review information shared by you and if we confirm it, you'll be able to access your account within approximately 24/48 hours.";
      const sendto = basicDetails.email;

      const responseD = {
        sendto,
        msg,
      };
      const resp = fetch(`${BaseURL}/api/mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(responseD),
      })
        // .then((response) => response.json())
        .then((response) => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error("Email request failed");
          }
        })
        .then((user) => {
          console.log("Mail send to user", user);
        });
      console.log("Mail send successfully.....", resp);
  };
  return (
    <>
      <div className="setpassword">
        <Desktop>
          <Container>
            <Col lg="12">
              <Row>
                <Col lg="3">&nbsp;</Col>
                <Col lg="8">
                  <Card className="border-0 shadow">
                    <Form onSubmit={SubmitForm}>
                      <Col sm="12" className="px-5">
                        <CardHeader className="border-0 px-1 bg-white">
                          <Col sm="12" className="">
                            <Label className="font-size-16 fw-bold Ri-text-color-sub-menu">
                              Set Password{" "}
                            </Label>

                          </Col>
                        </CardHeader>
                        <CardBody className=" border-0 pt-0 px-0">
                          <Col className="form-control pt-5 px-0 border-0 ">
                            <Row className="g-2 form">
                              <Col sm="12" className="pb-3">
                                <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                  Password<sup className="text-danger">*</sup>
                                </FormLabel>
                                <Col lg="6">
                                  <Form.Control
                                    name="password"
                                    type="password"
                                    // maxLength="8"
                                    // minLength="8"
                                    defaultValue={values.password}
                                    onChange={handleFormData("password")}
                                    onKeyUp={handlePasswordChange}
                                    className="rounded-0 figure-caption"
                                    required
                                    size="sm"
                                    isValid={
                                      values.password !== "" ?
                                        /[A-Z]/.test(values.password) &&
                                          /[a-z]/.test(values.password) &&
                                          /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(values.password) &&
                                          values.password.length > 7 &&
                                          /[\d+$]/.test(values.password) ? true : false : false
                                    }
                                  />
                                </Col>
                                <sub className="font-size-10 fw-normal">
                                  Use 8 or more characters with a mix of
                                  letters, numbers and symbols
                                </sub>
                                {passwordStrength && <div style={{ color: 'red' }}>{passwordStrength}</div>}
                              </Col>
                              <Col className="p-2">&nbsp;</Col>
                              <Col sm="12" className=" pb-2">
                                <Col>
                                  <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                    Confirm Password
                                    <sup className="text-danger">*</sup>
                                  </FormLabel>
                                  <Col lg="6">
                                    <Input
                                      name="confirmPassword"
                                      type="password"
                                      // maxLength="8"
                                      // minLength="8"
                                      defaultValue={values.confirmPassword}
                                      onChange={handleFormData("confirmPassword")}
                                      onKeyUp={handleConfirmPasswordChange}
                                      className="rounded-0 figure-caption"
                                      required
                                      size="sm"
                                    />
                                    {errorPasswordNotMatch && <div style={{ color: 'red' }}>{errorPasswordNotMatch}</div>}
                                  </Col>
                                </Col>
                              </Col>
                              <Col className="p-4">&nbsp;</Col>
                            </Row>
                          </Col>
                        </CardBody>
                      </Col>
                      <CardFooter className="border-0 py-4 bg-white">
                        <Col sm="12">
                          <Col lg="12" className="">
                            <Row>
                              <Col lg="8">
                                <Button
                                  size="lg"
                                  className="btn-outline-secondary 
                                  col-sm-3
                                  bg-white
                                   rounded-2 text-black font-size-11 fw-bold"
                                >
                                  Cancel
                                </Button>
                              </Col>

                              <Col sm="2">
                                <Button
                                  onClick={prevStep}
                                  size="lg"
                                  className="col-sm-12 rounded-2 text-white font-size-11 fw-bold "
                                >
                                  Previous
                                </Button>
                              </Col>
                              <Col sm="2">
                                <Button
                                  size="lg"
                                  type="submit"
                                  className="col-sm-12 rounded-2 font-size-11 fw-bold text-white"
                                  onClick={openModal}
                                  disabled={values.password==="" || values.confirmPassword==="" || errorPassword || passwordMatch}
                                >
                                  submit
                                </Button>
                              </Col>
                            </Row>
                          </Col>
                        </Col>
                      </CardFooter>
                    </Form>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col sm='12'>
              <Modal show={showModal} onHide={closeModal}>
                <Modal.Header>
                  <Modal.Title>Thanks for providing your information.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Col sm='12'>We'll review information shared by you and if we confirm it,
                    you'll be able to accesss your account within approximately
                    24/48 hours.</Col>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={closeModal} className="d-block mx-auto">
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Container>
        </Desktop>
      </div>

      <div className="setpassword">
        <Mobile>
          <Col lg="12" className="col-12">
            <Col lg="12" className="col-12">
              <Card className="border-0 rounded-0">
                <Form onSubmit={SubmitForm}>
                  <CardHeader className="bg-transparent">
                    <FormLabel className="font-size-14 fw-normal Ri-text-color-main-menu">
                      Set Password
                    </FormLabel>
                  </CardHeader>
                  <CardBody>
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-12">


                          <Col lg="3" className=" col-12">
                            <FormLabel className="font-size-11 fw-normal text-uppercase">

                              Password  <sup className="text-danger font-size-12">*</sup>
                            </FormLabel>
                            <Form.Control
                              className="rounded-0"
                              name="password"
                              type="password"
                              defaultValue={values.password}
                              placeholder="password"
                              onChange={handleFormData("password")}
                              required
                              size='sm'
                              isValid={
                                values.password !== "" ?
                                  /[A-Z]/.test(values.password) &&
                                    /[a-z]/.test(values.password) &&
                                    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(values.password) &&
                                    values.password.length > 7 &&
                                    /[\d+$]/.test(values.password) ? true : false : false
                              }

                            />
                            <label className="font-size-10 fw-normal text-muted">
                              Use 8 or more characters with a mix of letters,
                              numbers and symbols
                            </label>
                          </Col>
                          <Col className="col-12">
                            <Col sm="12">
                              <Col
                                sm="8"
                                className="bg-danger text-white position-absolute"
                              >
                                {passwordStrength}
                              </Col>
                            </Col>
                          </Col>
                        </Col>
                        <Col className="col-12 ">
                          <Col>



                            <Col lg="3" className="col-12">
                              <FormLabel className="font-size-11 Ri-text-color-sub-menu fw-normal text-uppercase">
                                Confirm Password<sup className="text-danger font-size-12">*</sup>
                              </FormLabel>
                              <Form.Control
                                className="rounded-0"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm password"
                                defaultValue={values.confirmPassword}
                                onChange={handleFormData("confirmPassword")}
                                required
                                isValid={
                                  values.confirmPassword !== "" &&
                                    values.confirmPassword === values.password ?
                                    true : false
                                }
                              />
                            </Col>
                            <Col sm="6" className="">
                              <Col
                                sm="6"
                                className=" bg-danger text-white position-absolute"
                              >
                                {errorPasswordNotMatch}
                              </Col>
                            </Col>
                          </Col>
                        </Col>
                      </Row>

                      <Col className="p-4">&nbsp;</Col>
                    </Col>


                  </CardBody>
                  <CardFooter>
                    <Col lg="12" className="col-12">
                      <Row className="g-2 form">

                        <Col lg="6" className="col-6">
                          <Button color="primary" onClick={prevStep}>
                            previous
                          </Button>

                        </Col>
                        <Col className="col-6">
                          <Row className="g-2 form">
                            <Col lg="1" className="col-6">
                              <Button variant="outline-dark">Cancel</Button>
                            </Col>
                            <Col lg="1" className="col-6">
                              <Button
                                disabled={
                                  values.confirmPassword !== "" &&
                                    values.password !== "" &&
                                    values.confirmPassword === values.password ?
                                    false : true
                                }
                                variant={
                                  values.confirmPassword !== "" &&
                                    values.password !== "" &&
                                    values.confirmPassword === values.password
                                    ?
                                    bgChangeDarkToBlue
                                    : bgBlueForOtpButton
                                }
                                type="submit">
                                Submit
                              </Button>
                            </Col>
                          </Row>
                        </Col>

                      </Row>
                    </Col>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Col>
        </Mobile>
      </div>
    </>
  );
};
export default SetPassword;
