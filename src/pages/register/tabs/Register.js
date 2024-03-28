import React, { useState } from "react";
import {
  Card,
  Col,
  Container,
  Form,
  FormLabel,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CardBody, CardFooter, Input, InputGroupText } from "reactstrap";
import { Button } from "react-bootstrap";
import OtpInput from "otp-input-react";

import Collapse from "react-bootstrap/Collapse";
import { Dropdown, FormGroup } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useMediaQuery } from "react-responsive";
import AlertNotificationSuccess from "../../../component/alertNotification/parentAlert/successtAlert";
import FailuerAlertNotification from "../../../component/alertNotification/parentAlert/failuerAlert";
import NotifySuccess from "../../../component/toast/Toast.js";

import OtpSendIcon from "../../../assets/img/u823.png";
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};
// main function start here...
const Register = ({ nextStep, handleFormData, values }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [checkMobileNumber, setCheckMobileNumber] = useState(1);
  const [agreeCheckBox, setAgreeCheckBox] = useState("");
  //form validation variables
  const [validated, setValidated] = useState(false);

  const BaseURL = process.env.REACT_APP_BASE_URL;

  const BgGetOtp = document.querySelector("#bgGetOtp");

  const [bgBlueForOtpButton, setBgBlueForOtpButton] = useState("secondary");
  const [bgChangeDarkToBlue, setBgChangeDarkToBlue] = useState("primary");
  const [otpButtonStatus, setOtpButtonStatus] = useState(1);

  // valid inValid manual implementation section

  const [inputInValid, setInputInValid] = useState("");
  const [validTitleSelect, setValidTitleSelect] = useState("");
  const [validFirstName, setValidFirstName] = useState("");
  const [validLastName, setValidLastName] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const [validMobileNumber, setValidMobileNumber] = useState("");

  // OTP module
  const [open, setOpen] = useState(false);

  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [showVarifiedOtp, setShowVarifiedOtp] = useState(false);

  //make other mobile input box enable or disable

  const [statusOtherMobileNo, setStatusOtherMobileNo] = useState(1);
  const SecondMobileNumberStatus = () => {
    setStatusOtherMobileNo((current) => !current);
    setCheckMobileNumber((prevState) => !prevState);
  };

  //Enable Next button function part
  const [checkAllValueEnter, setCheckAllValueEnter] = useState(false);

  const AgreeCheckBoxFun = () => {
    if (
      values.iAm !== "" &&
      values.firstName.trim() !== "" &&
      values.lastName !== "" &&
      values.mobileNumber !== "" &&
      values.email !== ""
    ) {
      setCheckAllValueEnter(true);
    }
  };

  // mobile number input value fix to ten digit

  const SubmitForm = (e) => {
    e.preventDefault();
    nextStep();
  };

  // Alert Message for wrong entry
  const [errorMessageMobileNo, SetErrorMessageMobileNo] = useState(1);
  const [errorMessageForTenNo, setErrorMessageTenNo] = useState(1);

  const CheckEnterValue = () => {
    let count = 0;
    if (
      (values.mobileNumber >= "a" && values.mobileNumber <= "z") ||
      (values.mobileNumber >= "A" && values.mobileNumber <= "Z")
    ) {
      setInputInValid(1);
      SetErrorMessageMobileNo((prevState) => !prevState);
    }
    if (values.mobileNumber >= "0" && values.mobileNumber <= "9") {
      setInputInValid(0);
      SetErrorMessageMobileNo(true);
    }
    checkEmailorNumber(values.mobileNumber);
  };

  const [otpBtnVanish, setOtpBtnVanish] = useState(1);
  const [otpSendSuccessIcon, setOtpSendSuccessIcon] = useState(1);

  const otpget = () => {
    if (values.mobileNumber !== "") {
      setInputInValid(0);
      setMobileNumber(values.mobileNumber);
    }
    if (values.mobileNumber === "") {
      setInputInValid(1);
    }

    fetch(`${BaseURL}/api/org/otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipientMobileNumber: values.mobileNumber }),
    })
      .then((response) => {
        if (response.status === 200) {
          const contentType = response.headers.get('Content-Type');
          if (contentType && contentType.includes('application/json')) {
            return response.json();
          } else {
            // Read response as text for non-JSON responses
            return response.text();
          }
        } else {
          throw new Error('Failed to send OTP');
        }
      })
      .then((data) => {
        if (typeof data === 'object') {
          console.log(data);
        } else {
          console.log('Non-JSON response:', data);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    setShowOtpScreen(true);
  };

  const verifyOtp = () => {
    const responseBody = {
      "recipientMobileNumber": mobileNumber,
      "otp": otp
    };
    fetch(`${BaseURL}/api/org/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(responseBody),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("OTP verification successful. Status:", response.status);
          setShowOtpScreen(false);
          setShowVarifiedOtp(false);
          const contentType = response.headers.get('Content-Type');

          if (contentType && contentType.includes('application/json')) {
            return response.json();
          } else {
            console.log("Response is not JSON. Reading as text.");
            return response.text(); // Read response as text
          }
        } else {
          console.error('Failed to send OTP. Status:', response.status);
          throw new Error('Failed to send OTP');
        }
      })
      .then((data) => {
        if (typeof data === 'object') {
          console.log(data);
        } else {
          console.log('Response is not JSON. Text response:', data);
        }
      })
      .catch((error) => {
        console.error('Error in fetch:', error);
      });
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [errorMobileMessage, setMobileErrorMessage] = useState('');
  const [mobileError, setMobileError] = useState(false);
const [emailError, setEmailError] = useState(false);

  const checkEmailorNumber = (data) => {

    const res = fetch(`${BaseURL}/api/auth/checkUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "mobile": data }),
    })
    .then((response) => response.json())
      .then((user) => {
        if (user.statusCode == 200) {
          setMobileError(false);
          setMobileErrorMessage("");
        }
        else {
          setMobileError(true);
          setMobileErrorMessage(user.message);
        }
      });
  };

  const checkEmail = (data) => {

    const res = fetch(`${BaseURL}/api/auth/checkUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "email": data }),
    })
    .then((response) => response.json())
      .then((user) => {
        if (user.statusCode == 200) {
          setEmailError(false);
          setErrorMessage("");
        }
        else {
          setEmailError(true);
          setErrorMessage(user.message);
        }
      });
  };

  const Navigate = useNavigate();

  const BasicDetailCancel = () => {
    Navigate("/auth/login");
  };

  const [enterValidinput, SetEnterValidInput] = useState("");
  const [enterMobileNo, setEnterMobileNo] = useState("");

  const CheckForValidInput = () => {
    if (
      (enterMobileNo >= "a" && enterMobileNo <= "z") ||
      (enterMobileNo >= "A" && enterMobileNo <= "Z")
    ) {
      SetEnterValidInput("You had enter alphabet");
    } else {
      SetEnterValidInput("");
    }
    if (/[a-z]/.test(enterMobileNo) || /[A-Z]/.test(enterMobileNo)) {
      SetEnterValidInput("You had enter alphabet");
    }
  };
  const OtpConatinedHandler = () => {
    setShowVarifiedOtp(true);
    setShowOtpScreen(false);
  };

  //varifing Otp part
  const [otpFirstDigit, setOtpFirstDigit] = useState("");
  const [otpSecondDigit, setOtpSecondDigit] = useState("");
  const [otpThriddigit, setOtpThirdDigit] = useState("");
  const [otpFourthDigit, setOtpFourthdigit] = useState("");
  const [otpFivethDigit, setOtpFivethDigit] = useState("");
  const [otpSixthDigit, setOtpSixthDigit] = useState("");

  //Error meassage for otp validation

  const [errorMessageOtp, setErrorMessageOtp] = useState("");

  //mobile and otp input validator
  const [mobileInputError, setMobileInputError] = useState(false);
  //mobile input border change to green

  const [mobileInputBorderSuccess, setMobileInputBorderSuccess] = useState(true);

  // varify otp button onclick fun
  const OtpValidatorHandler = () => {
    if (
      otpFirstDigit !== "" &&
      otpSecondDigit !== "" &&
      otpThriddigit !== "" &&
      otpFourthDigit !== "" &&
      otpFivethDigit !== "" &&
      otpSixthDigit !== ""
    ) {
      if (
        (otpFirstDigit >= "A" && otpFirstDigit <= "Z") ||
        (otpSecondDigit >= "A" && otpSecondDigit <= "Z") ||
        (otpThriddigit >= "A" && otpThriddigit <= "Z") ||
        (otpFourthDigit >= "A" && otpFourthDigit <= "Z") ||
        (otpFivethDigit >= "A" && otpFivethDigit <= "Z") ||
        (otpSixthDigit >= "A" && otpSixthDigit <= "Z")
      ) {
        setErrorMessageOtp("Invalid OTP");
        setMobileInputError(true);
        setShowVarifiedOtp(true);
        setOtpBtnVanish((current) => current);
      } else {
        setErrorMessageOtp("OTP Enter succesfully");
        setMobileInputError(false);
        setShowVarifiedOtp(false);
        setMobileInputBorderSuccess((prevState) => !prevState);
        setOtpBtnVanish((prevState) => !prevState);
        setOtpSendSuccessIcon((prevState) => !prevState);
      }
    } else {
      setErrorMessageOtp("Invalid OTP");
      setMobileInputError(true);
      setShowVarifiedOtp(true);
      setOtpBtnVanish((current) => current);
    }
    console.log("border color test", mobileInputBorderSuccess);
  };

  const CheckInputValidator = (e) => {
    if (
      /[0-9]/.test(
        otpFirstDigit,
        otpSecondDigit,
        otpThriddigit,
        otpFourthDigit,
        otpFivethDigit,
        otpSixthDigit
      )
    ) {
      setErrorMessageOtp("");
    }
  };

  const GetOtpCloseFun = () => {
    //otp modal hide
    setShowVarifiedOtp(false);

    setMobileInputError(true);

    //otp button status handler
    setOtpBtnVanish((prevState) => prevState);
    console.log("state for input inValid", mobileInputError);
  };

  //Mobile view fun part start

  const [openMobileView, setOpenMobileView] = useState(false);
  const [checkMobileNumberMobileView, setCheckMobileNumberMobileView] = useState(1);
  const [statusOtherMobileNoMobileView, setStatusOtherMobileNoMobileView] = useState(1);

  //check if mobile number is filled up then call otp
  const [mobileInputCheckFill, setMobileInputCheckFill] = useState('MobileNumberNotFilled')


  //otp modle for mobile view
  const [showOtpScreenForMobileView, setShowOtpScreenForMobileView] = useState(false)
  const [mobileViewMobileInputInvalide, setMobileViewMobileInputInvalide] = useState(false);
  const [otpGetModalClose, setOtpGetModalClose] = useState('ModalOpen');
  const [showVarifiedOtpForMobileView, setShowVarifiedOtpForMobileView] = useState(false)

  //otp button disable visible opration with correct icon
  const [otpButtonVanish, setOtpButtonVanish] = useState(false);
  const [otpCorrectIconVisible, setOtpCorrectIconVisible] = useState(false);


  //var for button next enabled disabled 
  const [enableNextButton, setEnableNextButton] = useState(false)

  const SecondMobileNumberStatusMobile = () => {
    setStatusOtherMobileNoMobileView((current) => !current);
    setCheckMobileNumberMobileView((prevState) => !prevState);
    setOpenMobileView(!open)
  }

  // Mobile otp button fun
  const otpgetMobileView = () => {
    if (mobileInputCheckFill === "MobileNumberFilled") {
      setShowOtpScreenForMobileView(true)
    }
  }

  //var to hold InValid state in Input of mobile number in Mobile View

  //otp get modal close button fun

  const GetOtpCloseFunForMobileView = () => {
    setShowVarifiedOtpForMobileView(false);
    // setShowOtpScreenForMobileView(false)

    setOtpGetModalClose("ModalClose")
    console.log('Otp modal got close')
    if (otpGetModalClose !== "ModalOpen") {
      setMobileViewMobileInputInvalide(true)
    } else {
      setMobileViewMobileInputInvalide(false)
    }

  }

  //mobile view, enter mobile num input OnKeyUp fun
  const OtpModalCallOnNumberInput = () => {
    setMobileInputCheckFill("MobileNumberFilled")
    if (values.mobileNumber !== "" ? values.mobileNumber.length > 10 : null || otpGetModalClose !== "ModalOpen") {
      setMobileViewMobileInputInvalide(true)
    } else {
      setMobileViewMobileInputInvalide(false)
    }

  }

  //otp genrator fun after number submitted
  const OtpConatinedHandlerForMobileView = () => {
    setShowVarifiedOtpForMobileView(true);
    setShowOtpScreenForMobileView(false);

  }

  //Otp modal close onclick verify button
  const OtpValidatorHandlerForMobileView = () => {
    setShowVarifiedOtpForMobileView(false);
    setMobileViewMobileInputInvalide(false);

    setOtpButtonVanish(true);
    setOtpCorrectIconVisible(true);
  }

  //Mobile next button disabled enabled 
  const EnableNextButton = () => {
    setEnableNextButton(true)
  }
  //Next button background color change 
  const NextButtonPrimary = "primary";
  const NextButtonSecondary = "secondary";
  const [otp, setOtp] = useState('');

  return (
    <>
      <div className="register">
        <Desktop>
          <Col className="section">
            <Container>
              <Col sm="12">
                <Row>
                  <Col sm="3">&nbsp;</Col>
                  <Col sm="8">
                    <Card className="shadow border-0 rounded-0">
                      <Form onSubmit={SubmitForm}>
                        <FormGroup>
                          <Col sm="12" className="px-5">
                            <CardHeader className="border-0 px-1 bg-white">
                              <Col sm="12" className="">
                                <b className="fw-bold font-size-16 Ri-text-color-sub-menu">
                                  Basic details{" "}
                                </b>
                              </Col>
                            </CardHeader>
                            <CardBody className=" border-0 pt-0 px-0">
                              <Col className="form-control  px-0 border-0 ">
                                <Row className="g-4 form">
                                  <Col sm="12" className="">
                                    <Row>
                                      <Col sm="2" className="">
                                        <FormLabel className="font-size-11 Ri-text-color-sub-menu fw-normal">
                                          I am
                                          <sup className="text-danger"> *</sup>
                                        </FormLabel>

                                        <Col sm="12" className="form-group">
                                          <Input
                                            name="iAm"
                                            type="select"
                                            defaultValue={values.iAm}
                                            onChange={handleFormData("iAm")}
                                            className="rounded-0"
                                            size="sm"
                                            required
                                            isValid={
                                              values.iAm === "" ? false : true
                                            }
                                            isInvalid={validTitleSelect}
                                          >
                                            <option
                                              className="font-size-12 fw-normal"
                                              selected
                                              disabled
                                              value=""
                                            >
                                              Choose your title
                                            </option>
                                            <option>Mr</option>
                                            <option>Ms</option>
                                            <option>Mrs</option>
                                          </Input>
                                        </Col>
                                      </Col>
                                      <Col sm="4">
                                        <Form.Group>
                                          <FormLabel className="font-size-11 Ri-text-color-sub-menu fw-normal">
                                            My First Name
                                            <sup className="text-danger">*</sup>
                                          </FormLabel>
                                          <Col sm="12">
                                            <InputGroup>
                                              <Form.Control
                                                name="firstName"
                                                defaultValue={values.firstName}
                                                type="text"
                                                onChange={handleFormData(
                                                  "firstName"
                                                )}
                                                minLength="3"
                                                className="rounded-0"
                                                required
                                                size="sm"
                                                placeholder="Enter your first name"
                                                isValid={
                                                  values.firstName !== "" &&
                                                    values.firstName.trim()
                                                      .length >= 3
                                                    ? true
                                                    : false
                                                }
                                                isInvalid={
                                                  values.firstName !== "" &&
                                                    values.firstName.trim()
                                                      .length <= 2
                                                    ? true
                                                    : false
                                                }
                                              />
                                            </InputGroup>
                                          </Col>
                                        </Form.Group>

                                        <Col sm="12">
                                          {/* {!validfirstName && (
                                 <sub className="text-danger">
                                   Enter Valid First Name
                                 </sub>
                               )} */}
                                        </Col>
                                      </Col>
                                      <Col sm="4" className="">
                                        <FormGroup>
                                          <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                            My Last Name
                                            <sup className="text-danger">*</sup>
                                          </FormLabel>
                                          <Col sm="12">
                                            <InputGroup>
                                              <Form.Control
                                                name="lastName"
                                                defaultValue={values.lastName}
                                                type="text"
                                                onChange={handleFormData(
                                                  "lastName"
                                                )}
                                                minLength="3"
                                                className="rounded-0"
                                                required
                                                size="sm"
                                                placeholder="Enter your last name"
                                                isValid={
                                                  values.lastName !== "" &&
                                                    values.lastName.trim()
                                                      .length >= 3
                                                    ? true
                                                    : false
                                                }
                                                isInvalid={
                                                  values.lastName !== "" &&
                                                    values.lastName.trim()
                                                      .length <= 2
                                                    ? true
                                                    : false
                                                }
                                              ></Form.Control>
                                            </InputGroup>
                                          </Col>
                                        </FormGroup>

                                        <Col sm="12">
                                          {/* {!validlastName && (
                                 <sub className="text-danger">
                                   Enter Valid Last Name
                                 </sub>
                               )} */}
                                        </Col>
                                      </Col>
                                    </Row>
                                  </Col>
                                  {/* {!controlSuccessAlertState && (
                                        <>
                                          <Col
                                            sm="6"
                                            className="position-absolute"
                                          >
                                            <SuccessAlert />
                                          </Col>
                                        </>
                                      )}
                                      {!controlFailuerAler && (
                                        <>
                                          <Col
                                            sm="6"
                                            className="position-absolute"
                                          >
                                            <FailuerAlert />
                                          </Col>
                                        </>
                                      )}
                                      {!stateToast && (
                                        <>
                                          <Col
                                            sm="6"
                                            className="position-absolute"
                                          >
                                            <SuccessToast />
                                          </Col>
                                        </>
                                      )} */}
                                  <Col sm="12" className="">
                                    <Row>
                                      <Col sm="4">
                                        <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                          My mobile number
                                          <sup className="text-danger">*</sup>
                                        </FormLabel>

                                        {/* <Col>
                                          {!enterTenDigitMessage && (
                                            <>
                                              <span className="position-relative">
                                                Plase enter ten digit number
                                              </span>
                                            </>
                                          )}
                                        </Col> */}

                                        <Col sm="12">
                                          <Col
                                            sm="12"
                                            className="position-relative"
                                          >
                                            <InputGroup size="sm" className="">
                                              <Dropdown className="">
                                                <Dropdown.Toggle
                                                  variant=""
                                                  id="dropdown-basic"
                                                  className="border-secondary text-white rounded-0 bg-secondary"
                                                >
                                                  +91
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className="col-sm-1">
                                                  <Dropdown.Item
                                                    href="#/action-1"
                                                    className="col-sm-1"
                                                  >
                                                    01
                                                  </Dropdown.Item>
                                                  <Dropdown.Item
                                                    href="#/action-2"
                                                    className="col-sm-1"
                                                  >
                                                    02
                                                  </Dropdown.Item>
                                                  <Dropdown.Item
                                                    href="#/action-3"
                                                    className="col-sm-1"
                                                  >
                                                    03
                                                  </Dropdown.Item>
                                                </Dropdown.Menu>
                                              </Dropdown>

                                              <Form.Control
                                                size="sm"
                                                disabled={
                                                  values.firstName === "" ||
                                                    values.lastName === ""
                                                    ? true
                                                    : false
                                                }
                                                placeholder="Enter your mobile number"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name="mobileNumber"
                                                defaultValue={values.mobileNumber}
                                                type="text"
                                                onKeyUp={CheckEnterValue}
                                                minLength="10"
                                                maxLength="10"
                                                onChange={handleFormData("mobileNumber")}
                                                className="rounded-0 figure-caption"
                                                required
                                                isValid={
                                                  values.mobileNumber !== "" &&
                                                    values.mobileNumber.trim()
                                                      .length === 10
                                                    ? true
                                                    : false
                                                }
                                                isInvalid={mobileInputError}
                                              />
                                              {errorMobileMessage && <div style={{ color: 'red' }}>{errorMobileMessage}</div>}
                                            </InputGroup>
                                          </Col>

                                          {/* <Col sm='12'>
                                  {!validmobileNumber && (<sub className="text-danger">
                                   Enter Valid Mobile Number
                                 </sub>)} 
                               </Col> */}
                                        </Col>
                                        <Col className="bg-danger" sm="12">
                                          {!errorMessageMobileNo && (
                                            <>
                                              <span className="px-2 form-group border-0 position-absolute bg-danger text-white rounded-5">
                                                you had enter alphabet Plase
                                                enter 10 digit mobile number
                                              </span>
                                            </>
                                          )}
                                        </Col>
                                        <Col>
                                          {!errorMessageForTenNo && (
                                            <span>Not enough number</span>
                                          )}
                                        </Col>
                                      </Col>

                                      <Col sm="4">
                                        {otpBtnVanish && (
                                          <>
                                            <Col sm="12">&nbsp;</Col>
                                            <Col sm="8" className="pt-2">
                                              <Button
                                                disabled={
                                                  values.mobileNumber !== "" &&
                                                    values.mobileNumber.trim()
                                                      .length == 10
                                                    ? false
                                                    : true
                                                }
                                                onClick={() => setShowOtpScreen(true)}
                                                id="bgGetOtp"
                                                variant={
                                                  values.mobileNumber !== "" &&
                                                    values.mobileNumber.trim()
                                                      .length == 10
                                                    ? bgChangeDarkToBlue
                                                    : bgBlueForOtpButton
                                                }
                                                // variant="secondary"
                                                className="
                                                rounded-5 
                                                 col-sm-12
                                                  text-white
                                                  font-size-12 
                                                  fw-normal
                                                   
                                                  border-0"
                                              // style={{
                                              //   background:
                                              //     bgBlueForOtpButton.backgroundColor,
                                              // }}
                                              >
                                                GET OTP
                                              </Button>
                                            </Col>
                                          </>
                                        )}
                                        {!otpSendSuccessIcon && (
                                          <>
                                            <Col sm="12">&nbsp;</Col>
                                            <Col
                                              sm="8"
                                              className="form-control border-0"
                                            >
                                              <Col className="form-group">
                                                <img src={OtpSendIcon} />
                                              </Col>
                                            </Col>
                                          </>
                                        )}
                                      </Col>
                                    </Row>
                                  </Col>

                                  <Col sm="12">
                                    <Row className="g-2 form">
                                      <Col sm="4" className="form-check">
                                        <Input
                                          type="checkbox"
                                          defaultValue={checkMobileNumber}
                                          onChange={handleFormData(
                                            "checkMobileNumber"
                                          )}
                                          onClick={SecondMobileNumberStatus}
                                          className=" "
                                          checked={checkMobileNumber}
                                        />

                                        <label className="font-size-12 fw-normal">
                                          Whatsapp number too.
                                        </label>
                                      </Col>
                                      <Col sm="6">
                                        {!statusOtherMobileNo && (
                                          <>
                                            <Col sm="12">
                                              <FormLabel className="font-size-12 fw-normal">
                                                My Whatsapp mobile number
                                                <sup className="text-danger">
                                                  *
                                                </sup>
                                              </FormLabel>

                                              <Col sm="12">
                                                <Col sm="12" className="">
                                                  <InputGroup className="">
                                                    <Dropdown
                                                      size="sm"
                                                      className="p-0"
                                                    >
                                                      <Dropdown.Toggle
                                                        variant=""
                                                        id="dropdown-basic"
                                                        className="border rounded-0"
                                                      >
                                                        +91
                                                      </Dropdown.Toggle>

                                                      <Dropdown.Menu className="col-sm-1">
                                                        <Dropdown.Item
                                                          href="#/action-1"
                                                          className="col-sm-1"
                                                        >
                                                          01
                                                        </Dropdown.Item>
                                                        <Dropdown.Item
                                                          href="#/action-2"
                                                          className="col-sm-1"
                                                        >
                                                          02
                                                        </Dropdown.Item>
                                                        <Dropdown.Item
                                                          href="#/action-3"
                                                          className="col-sm-1"
                                                        >
                                                          03
                                                        </Dropdown.Item>
                                                      </Dropdown.Menu>
                                                    </Dropdown>

                                                    <Form.Control
                                                      placeholder="Enter your mobile number"
                                                      aria-label="Username"
                                                      aria-describedby="basic-addon1"
                                                      name="WhatsappMobileNumber"
                                                      defaultValue={values.WhatsappMobileNumber}
                                                      size="sm"
                                                      type="text"
                                                      isNumber="true"
                                                      maxLength="10"
                                                      bssize="10"
                                                      onChange={handleFormData("WhatsappMobileNumber")}
                                                      className="rounded-0 figure-caption"
                                                      required
                                                    />
                                                  </InputGroup>
                                                </Col>
                                                {/* <Col sm='12'>
                                  {!validmobileNumber && (<sub className="text-danger">
                                   Enter Valid Mobile Number
                                 </sub>)} 
                               </Col> */}
                                              </Col>
                                            </Col>
                                          </>
                                        )}
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col sm="12" className="">
                                    <FormLabel className="font-size-12 fw-normal">
                                      My email ID
                                      <sup className="text-danger">*</sup>
                                    </FormLabel>

                                    <Col sm="6" className="">
                                      <Form.Control
                                        disabled={
                                          values.firstName === "" ||
                                            values.lastName === "" ||
                                            values.mobileNumber === ""
                                            ? true
                                            : false
                                        }
                                        size="sm"
                                        name="email"
                                        defaultValue={values.email}
                                        type="email"
                                        onChange={handleFormData("email")}
                                        onKeyUp={checkEmail(values.email)}
                                        className="rounded-0"
                                        required
                                        bssize="sm"
                                        placeholder="Enter your email id here "
                                        isInvalid={
                                          values.email !== "" &&
                                            !values.email.includes("@")
                                            ? true
                                            : false
                                        }
                                      // isValid={
                                      //   values.email === "" ? false : true
                                      // }
                                      />
                                      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                                    </Col>
                                  </Col>
                                  <Col sm="12" className="form-check">
                                    <Input
                                      disabled={
                                        values.firstName === "" ||
                                          values.lastName === "" ||
                                          values.mobileNumber === "" ||
                                          values.email === ""
                                          ? true
                                          : false
                                      }
                                      type="checkbox"
                                      defaultValue={values.agreeCheckBox}
                                      className="text-start"
                                      onChange={(e) => {
                                        setAgreeCheckBox(e.target.value);
                                      }}
                                      onClick={AgreeCheckBoxFun}
                                    // checked={checkBoxState}
                                    />

                                    <FormLabel className="lh-1 font-size-12 fw-normal Ri-text-color-main-menu ">
                                      I hereby declare that the information
                                      given in this application is true and
                                      correct to the best of my knowledge and
                                      belief. In case any information given in
                                      this application proves to be false or
                                      incorrect, I shall be responsible for the
                                      consequences
                                    </FormLabel>
                                  </Col>
                                </Row>
                              </Col>
                            </CardBody>
                          </Col>
                          <CardFooter className="bg-white py-4 border-0">
                            <Row>
                              <Col sm="2">
                                <Button
                                  bssize="lg"
                                  className="btn-outline-primary
                               col-sm-12 bg-white  font-size-12 fw-bold rounded-0 text-uppercase rounded-2 text-primary figure-caption"
                                  onClick={BasicDetailCancel}
                                >
                                  Cancel
                                </Button>
                              </Col>
                              <Col sm="8"></Col>

                              <Col sm="2" className="text-end">
                                <Button
                                  disabled={
                                    checkAllValueEnter === false ? true : false ||
                                    mobileError || emailError
                                  }
                                  variant={
                                    checkAllValueEnter === true
                                      ? bgChangeDarkToBlue
                                      : bgBlueForOtpButton
                                  }
                                  bssize="lg"
                                  type="submit"
                                  // onClick={nextStep}
                                  className="col-sm-12 
                                  figure-caption
                                  border-0
                                   rounded-0 text-white
                                    text-uppercase
                                    font-size-11
                                    fw-bold
                                     "
                                >
                                  Next
                                </Button>
                              </Col>
                            </Row>
                          </CardFooter>

                          <Col sm="12" className="form-group">
                            <Row className="g-2 form">
                              <Modal
                                show={showOtpScreen}
                                onHide={() => setShowOtpScreen(false)}
                              >
                                <Modal.Header
                                  closeButton
                                  className="border-0 pb-0"
                                >
                                  <Col sm="10" className="form-group">
                                    <Row className="g-2 form">
                                      <Col sm="9" className="text-end">
                                        <b>OTP verification</b>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Modal.Header>
                                <Modal.Body>
                                  <Row className="g-2 form">
                                    <Col sm="12" className="text-center">
                                      <span>
                                        We will send you an One Time Password
                                        <br />
                                        on this mobile number
                                      </span>
                                    </Col>
                                    <Col sm="12" className="form-group p-2">
                                      &nbsp;
                                    </Col>
                                    <Col sm="12" className="form-group">
                                      <Row className="g-2 form">
                                        <FormGroup>
                                          <Row className="g-2 form">
                                            <Col
                                              sm="12"
                                              className="text-center"
                                            >
                                              <FormLabel>
                                                Enter Mobile Number
                                              </FormLabel>
                                            </Col>

                                            <Col sm="12">

                                              <Form.Control
                                                defaultValue={enterMobileNo}
                                                onChange={(e) => setEnterMobileNo(e.target.value)}
                                                placeholder={values.mobileNumber}
                                                disabled
                                                className="text-center border-bottom rounded-0 border-0"
                                                onKeyUp={CheckForValidInput}
                                              />
                                            </Col>
                                            <Col sm="12">
                                              <Col
                                                sm="9"
                                                className="text-center position-absolute text-white bg-danger">
                                                {enterValidinput}
                                              </Col>
                                            </Col>
                                          </Row>
                                        </FormGroup>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Modal.Body>
                                <Modal.Footer>
                                  <Col sm="12" className="form-group">
                                    <Row className="g-2 form">
                                      <Button
                                        className="text-uppercase"
                                        onClick={() => {
                                          otpget();
                                          setShowOtpScreen(false);
                                          setShowVarifiedOtp(true);
                                        }}
                                      >
                                        GET OTP
                                      </Button>
                                    </Row>
                                  </Col>
                                </Modal.Footer>
                              </Modal>
                              <Modal
                                show={showVarifiedOtp}
                                // onHide={() => setShowVarifiedOtp(false)}
                                onHide={GetOtpCloseFun}
                              >
                                <Modal.Header
                                  closeButton
                                  className="border-0 pb-0"
                                >
                                  <Col sm="10" className="form-group">
                                    <Row className="g-2 form">
                                      <Col sm="9" className="text-end">
                                        <b>OTP verification</b>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Modal.Header>
                                <Modal.Body>
                                  <Row className="g-2 form">
                                    <Col sm="12" className="text-center">
                                      Enter the otp send to
                                    </Col>
                                    <Col sm="12" className="text-center">
                                      {values.mobileNumber}
                                    </Col>
                                    <Col sm="12" className="form-group">
                                      <Row className="g-2 form">
                                        <Col sm="2"></Col>
                                        <Col sm="8">
                                          <OtpInput
                                            value={otp}
                                            onChange={setOtp}
                                            OTPLength={6}
                                            inputStyle="otp-block"
                                            isInputNum
                                            AutoFocus
                                          />
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col
                                      sm="12"
                                      className="form-group text-center"
                                    >
                                      <span>
                                        Didnt receive the OTP?
                                        <label className="text-uppercase text-danger">
                                          Resend otp
                                        </label>
                                      </span>
                                    </Col>
                                    <Col sm="12">
                                      <Col
                                        sm="10"
                                        className="position-absolute text-center text-danger "
                                      >
                                        {errorMessageOtp}
                                      </Col>
                                    </Col>
                                  </Row>
                                </Modal.Body>
                                <Modal.Footer className="border-0">
                                  <Col sm="12">
                                    <Row className="g-2 form">
                                      <Button
                                        className="text-uppercase"
                                        // onClick={OtpValidatorHandler}
                                        onClick={verifyOtp}
                                      >
                                        verify
                                      </Button>
                                    </Row>
                                  </Col>
                                </Modal.Footer>
                              </Modal>
                            </Row>
                          </Col>
                        </FormGroup>
                      </Form>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Col>
        </Desktop>
      </div>

      <div>
        <Mobile>
          <Col sm="12">
            <Card className="border-0">
              <Form onSubmit={SubmitForm}>
                <CardBody>
                  <Row className="g-2 form">
                    <Col className="col-12 border-bottom">
                      <FormLabel className="font-size-14 fw-bold Ri-text-color-main-menu">

                        Basic details
                      </FormLabel>

                    </Col>

                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-12">
                          <Col className="col-12 form-control border-0 font-size-11 fw-normal Ri-text-color-main-menu">
                            I am <sup className="text-danger">*</sup>
                          </Col>
                          <Col sm="12" className="col-12">
                            <Col sm="6" className="col-5">
                              <Input
                                className="rounded-0"
                                name="iAm"
                                type="select"
                                defaultValue={values.iAm}
                                onChange={handleFormData("iAm")}
                                size='sm'
                              >
                                <option selected disabled value="">Select your title</option>
                                <option>Mr</option>
                                <option>Mrs</option>
                              </Input>
                            </Col>
                            <Col sm="4" className=" "></Col>
                          </Col>
                        </Col>
                        <Col sm="3" className=" col-12">
                          <Col sm="12" className="col-12">
                            <FormLabel className="font-size-11 fw-normal Ri-text-color-main-menu">

                              My First Name <sup className="text-danger">*</sup>
                            </FormLabel>
                          </Col>
                          <Col sm="12" className="col-12">
                            <Col>
                              <Input
                                className="rounded-0"
                                name="firstName"
                                defaultValue={values.firstName}
                                type="text"
                                placeholder="Enter your first name here"
                                onChange={handleFormData("firstName")}
                                required
                                size='sm'
                              />
                            </Col>
                          </Col>
                        </Col>
                        <Col className="col-12">
                          <Col sm="12" className="">
                            <FormLabel className="font-size-11 fw-normal Ri-text-color-main-menu">

                              My Last Name
                            </FormLabel>
                          </Col>
                          <Col sm="12" className="p-0">
                            <Input
                              className="rounded-0"
                              name="lastName"
                              defaultValue={values.lastName}
                              type="text"
                              placeholder="Enter your last name here"
                              onChange={handleFormData("lastName")}
                              required
                              size='sm'
                            />
                          </Col>
                        </Col>
                      </Row>

                    </Col>
                    <Col className="col-12">
                      <Col className="col-12">
                        <FormLabel className="font-size-11 fw-normal Ri-text-color-main-menu">

                          My Mobile Number <sup className="text-danger">*</sup>
                        </FormLabel>
                      </Col>
                      <Col className=" col-12">
                        <Row className="g-2 form">
                          <Col className="col-8">
                            <InputGroup>
                              <InputGroupText className="rounded-0">
                                +91
                              </InputGroupText>
                              <Form.Control
                                className="rounded-0"
                                name="mobileNumber"
                                defaultValue={values.mobileNumber}
                                type="number"
                                onChange={handleFormData("mobileNumber")}
                                required
                                disabled={values.lastName !== "" &&
                                  values.firstName !== "" &&
                                  values.iAm !== "" ? false : true

                                }
                                onKeyUp={OtpModalCallOnNumberInput}
                                isValid={values.mobileNumber !== "" ?
                                  values.mobileNumber >= "0" && values.mobileNumber <= "9" ?
                                    values.mobileNumber.length === 10 ? true : false : false : false
                                }
                                isInvalid={
                                  mobileViewMobileInputInvalide
                                }
                              />
                            </InputGroup>
                          </Col>
                          {!otpButtonVanish && (
                            <>
                              <Col className="col-4">
                                <Button
                                  disabled={values.mobileNumber !== "" ?
                                    values.length === 10 ?
                                      true : false : false}
                                  variant={values.mobileNumber != '' ?
                                    values.mobileNumber.length === 10 ?
                                      bgChangeDarkToBlue : bgBlueForOtpButton : bgBlueForOtpButton}
                                  className="font-size-11 fw-bold text-uppercase rounded-5"
                                  onClick={otpgetMobileView}
                                >

                                  GET OTP
                                </Button>
                              </Col>
                            </>
                          )}

                          {otpCorrectIconVisible && (

                            <>
                              <Col className="col-4">
                                <Col className="form-group">
                                  <img src={OtpSendIcon} />
                                </Col>
                              </Col>
                            </>
                          )}

                        </Row>

                      </Col>
                    </Col>
                    <Col sm="12" className="col-12">
                      <Col className=" form-check col-12">

                        <Input
                          type="checkbox"

                          defaultValue={checkMobileNumberMobileView}
                          onChange={handleFormData("checkMobileNumberMobileView")}
                          checked={checkMobileNumberMobileView}
                          aria-controls="whatapp-otp"
                          aria-expanded={openMobileView}
                          onClick={SecondMobileNumberStatusMobile}
                        />

                        <FormLabel className="font-size-11 fw-normal Ri-text-color-main-menu">

                          Whatsap number too<sup className="text-danger">*</sup>
                        </FormLabel>


                      </Col>

                      <Collapse in={openMobileView}>
                        <div id="whatapp-otp">
                          <Col className="p-2">Whatsapp number</Col>
                          <Col className="col-12">
                            <Col className="col-8">
                              <InputGroup>
                                <InputGroupText className="rounded-0">
                                  +91
                                </InputGroupText>
                                <Form.Control
                                  className="rounded-0"
                                  name="mobileNumberWhatsapp"
                                  defaultValue={values.mobileNumberWhatsapp}
                                  type="number"
                                  onChange={handleFormData("mobileNumberWhatsapp")}

                                />
                              </InputGroup>
                            </Col>

                          </Col>
                        </div>
                      </Collapse>
                    </Col>
                    <Col sm="12" className="col-12">
                      <Col sm="12" className="col-12">
                        <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">

                          My Email Id<sup className="text-danger">*</sup>
                        </FormLabel>
                      </Col>
                      <Col sm="4" className="p-1">
                        <Form.Control
                          className="rounded-0"
                          name="email"
                          defaultValue={values.email}
                          type="email"
                          placeholder="Enter your email id here"
                          onChange={handleFormData("email")}
                          required
                          isValid={values.email.includes('@') ? true : false}
                          isInvalid={values.email !== "" ?
                            values.email.includes('@') ?
                              false : true : false}
                          disabled={values.lastName !== "" &&
                            values.firstName !== "" &&
                            values.iAm !== "" &&
                            values.mobileNumber !== "" ? false : true

                          }
                        />
                      </Col>
                    </Col>
                    <Col sm="12" className="col-12 border-bottom">

                      {/* <Col sm="1" className='m-1'><Input type='checkbox' /></Col> */}
                      <Col sm="10" className="col-12 form-check ">
                        <Input type="checkbox"
                          disabled={
                            values.lastName !== "" &&
                              values.firstName !== "" &&
                              values.iAm !== "" &&
                              values.mobileNumber !== "" &&
                              values.email !== "" ? false : true
                          }
                          onClick={EnableNextButton}
                        />
                        <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu" >
                          I hereby declare that the
                          information given in this application is true and
                          correct to the best of my knowledge and belief. In case
                          any information given in this application proves to be
                          false or incorrect, I shall be responsible for the
                          consequences
                        </FormLabel>

                      </Col>

                    </Col>
                    <Col sm="12" className="col-12 ">
                      <Row className="g-2 form">
                        <Col>
                          <Col sm="10" className="col-10 form-group">
                            <Button variant="outline-dark font-size-11 fw-bold text-uppercase">Cancel</Button>
                          </Col>
                        </Col>
                        <Col sm="2" className="col-2 form-group">
                          <Button
                            disabled={enableNextButton === false ? true : false}
                            variant={enableNextButton === false ? NextButtonSecondary : NextButtonPrimary}
                            className="text-uppercase font-size-11 fw-bold"
                            type="submit">
                            Next
                          </Button>
                          <Link to="/address"></Link>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>

                <Col className="col-12 form-group">
                  <Col sm="12" className="form-group">
                    <Row className="g-2 form">
                      <Modal
                        show={showOtpScreenForMobileView}
                        onHide={() => setShowOtpScreenForMobileView(false)}
                      >
                        <Modal.Header
                          closeButton
                          className="border-0 pb-0"
                        >
                          <Col sm="10" className="form-group">
                            <Row className="g-2 form">
                              <Col sm="9" className="text-end">
                                <b>OTP verification</b>
                              </Col>
                            </Row>
                          </Col>
                        </Modal.Header>
                        <Modal.Body>
                          <Row className="g-2 form">
                            <Col sm="12" className="text-center">
                              <span>
                                We will send you an One Time Password
                                <br />
                                on this mobile number
                              </span>
                            </Col>
                            <Col sm="12" className="form-group p-2">
                              &nbsp;
                            </Col>
                            <Col sm="12" className="form-group">
                              <Row className="g-2 form">
                                <FormGroup>
                                  <Row className="g-2 form">
                                    <Col
                                      sm="12"
                                      className="text-center"
                                    >
                                      <FormLabel>
                                        Enter Mobile Number
                                      </FormLabel>
                                    </Col>

                                    <Col sm="12">

                                      <Form.Control
                                        defaultValue={enterMobileNo}
                                        onChange={(e) =>
                                          setEnterMobileNo(
                                            e.target.value
                                          )
                                        }
                                        placeholder={values.mobileNumber}
                                        disabled
                                        className="text-center border-bottom rounded-0 border-0"
                                        onKeyUp={CheckForValidInput}
                                      />
                                    </Col>
                                    <Col sm="12">
                                      <Col
                                        sm="9"
                                        className="text-center position-absolute text-white bg-danger"
                                      >
                                        {enterValidinput}
                                      </Col>
                                    </Col>
                                  </Row>
                                </FormGroup>
                              </Row>
                            </Col>
                          </Row>
                        </Modal.Body>
                        <Modal.Footer>
                          <Col sm="12" className="form-group">
                            <Row className="g-2 form">
                              <Button
                                className="text-uppercase"
                                onClick={OtpConatinedHandlerForMobileView}
                              >
                                GET OTP
                              </Button>
                            </Row>
                          </Col>
                        </Modal.Footer>
                      </Modal>
                      <Modal
                        show={showVarifiedOtpForMobileView}
                        // onHide={() => setShowVarifiedOtp(false)}
                        onHide={GetOtpCloseFunForMobileView}
                      >
                        <Modal.Header
                          closeButton
                          className="border-0 pb-0"
                        >
                          <Col sm="10" className="form-group">
                            <Row className="g-2 form">
                              <Col sm="9" className="text-end">
                                <b>OTP verification</b>
                              </Col>
                            </Row>
                          </Col>
                        </Modal.Header>
                        <Modal.Body>
                          <Row className="g-2 form">
                            <Col sm="12" className="text-center">
                              Enter the otp send to
                            </Col>
                            <Col sm="12" className="text-center">
                              {values.mobileNumber}
                            </Col>
                            <Col sm="12" className="form-group">
                              <Row className="g-2 form">
                                <Col sm="2">
                                  <Form.Control
                                    defaultValue={otpFirstDigit}
                                    onChange={(e) =>
                                      setOtpFirstDigit(e.target.value)
                                    }
                                    minLength="1"
                                    maxLength="1"
                                    onKeyDownCapture={(e) =>
                                      e.key >= "a" && e.key <= "z"
                                        ? e.preventDefault()
                                        : null
                                    }
                                    required
                                    id="firstDigit"
                                    // pattern="[0-9]{1}"
                                    className="text-center border-bottom border-0 rounded-0"
                                  />
                                </Col>
                                <Col sm="2">
                                  <Form.Control
                                    defaultValue={otpSecondDigit}
                                    onChange={(e) =>
                                      setOtpSecondDigit(e.target.value)
                                    }
                                    minLength="1"
                                    maxLength="1"
                                    onKeyDownCapture={(e) =>
                                      e.key >= "a" && e.key <= "z"
                                        ? e.preventDefault()
                                        : null
                                    }
                                    onKeyUpCapture={CheckInputValidator}
                                    required
                                    id="secondDigit"
                                    className="border-bottom text-center  border-0 rounded-0"
                                  />
                                </Col>
                                <Col sm="2">
                                  <Form.Control
                                    defaultValue={otpThriddigit}
                                    onChange={(e) =>
                                      setOtpThirdDigit(e.target.value)
                                    }
                                    minLength="1"
                                    maxLength="1"
                                    onKeyDownCapture={(e) =>
                                      e.key >= "a" && e.key <= "z"
                                        ? e.preventDefault()
                                        : null
                                    }
                                    onKeyUpCapture={CheckInputValidator}
                                    required
                                    className="border-bottom text-center  border-0 rounded-0"
                                  />
                                </Col>
                                <Col sm="2">
                                  <Form.Control
                                    defaultValue={otpFourthDigit}
                                    onChange={(e) =>
                                      setOtpFourthdigit(e.target.value)
                                    }
                                    minLength="1"
                                    maxLength="1"
                                    onKeyDownCapture={(e) =>
                                      e.key >= "a" && e.key <= "z"
                                        ? e.preventDefault()
                                        : null
                                    }
                                    onKeyUpCapture={CheckInputValidator}
                                    required
                                    className="border-bottom text-center  border-0 rounded-0"
                                  />
                                </Col>
                                <Col sm="2">
                                  <Form.Control
                                    defaultValue={otpFivethDigit}
                                    onChange={(e) =>
                                      setOtpFivethDigit(e.target.value)
                                    }
                                    minLength="1"
                                    maxLength="1"
                                    onKeyDownCapture={(e) =>
                                      e.key >= "a" && e.key <= "z"
                                        ? e.preventDefault()
                                        : null
                                    }
                                    onKeyUpCapture={CheckInputValidator}
                                    required
                                    className="border-bottom text-center  border-0 rounded-0"
                                  />
                                </Col>
                                <Col sm="2">
                                  <Form.Control
                                    maxLength="1"
                                    minLength="1"
                                    size="1"
                                    defaultValue={otpSixthDigit}
                                    onChange={(e) =>
                                      setOtpSixthDigit(e.target.value)
                                    }
                                    onKeyUpCapture={CheckInputValidator}
                                    required
                                    onKeyDownCapture={(e) =>
                                      e.key >= "a" && e.key <= "z"
                                        ? e.preventDefault()
                                        : null
                                    }
                                    className="border-bottom text-center  border-0 rounded-0"
                                  />
                                </Col>
                              </Row>
                            </Col>
                            <Col
                              sm="12"
                              className="form-group text-center"
                            >
                              <span>
                                Didnt receive the OTP?
                                <label className="text-uppercase text-danger">
                                  Resend otp
                                </label>
                              </span>
                            </Col>
                            <Col sm="12">
                              <Col
                                sm="10"
                                className="position-absolute text-center text-danger "
                              >
                                {errorMessageOtp}
                              </Col>
                            </Col>
                          </Row>
                        </Modal.Body>
                        <Modal.Footer className="border-0">
                          <Col sm="12">
                            <Row className="g-2 form">
                              <Button
                                className="text-uppercase"
                                onClick={OtpValidatorHandlerForMobileView}
                              >
                                verify
                              </Button>
                            </Row>
                          </Col>
                        </Modal.Footer>
                      </Modal>
                    </Row>
                  </Col>
                </Col>
              </Form>
            </Card>
          </Col>
        </Mobile>
      </div>
    </>
  );
};

export default Register;
