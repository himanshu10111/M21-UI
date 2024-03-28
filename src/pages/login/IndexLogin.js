import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Row,
  Col,
  CardFooter,
  Label,
} from "reactstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import LoginAdmin from "./tabs/Login-Admin";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  FormGroup,
  Modal,
  Button,
  FormLabel,
  Form,
  Alert,
  ToastContainer,
  InputGroup,
  FormControl,
} from "react-bootstrap";
// import Services from "../../component/service/Services";
// import NotifyError from '../../component/toast/Toast'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toast, ToastBody, ToastHeader } from "react-bootstrap";

import LoginHeaderImg from "../../assets/img/loginHeader.png";
import { type } from "@testing-library/user-event/dist/type";
import AlertNotificationSuccess from "../../component/alertNotification/parentAlert/successtAlert";
import FailuerAlertNotification from "../../component/alertNotification/parentAlert/failuerAlert";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 500 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const Indexlogin = () => {
  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [password, setPassword] = useState("");
  const [lgForgotPassword, setLgForgotPassword] = useState(false);
  const [lgForgotPasswordMobi, setLgForgotPasswordMobi] = useState(false);
  const [ResetPassword, setResetPassword] = useState(false);
  const [ResetPasswordMobi, setResetPasswordMobi] = useState(false);
  const [lgShowTermOfUse, setLgShowTermOfUse] = useState(false);
  const [lgShowPrivacy, setLgShowPrivacy] = useState(false);
  const [lgShowTermOfUseMobi, setLgShowTermOfUseMobi] = useState(false);
  const [lgShowPrivacyMobi, setLgShowPrivacyMobi] = useState(false);

  const [loginPassword, setLoginPassword] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [showLoader, setLoader] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  const [user, setUser] = useState("");
  const Navigate = useNavigate();

  //Alert notification on user role selection handler
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const [messageHolder, setMessageHolder] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [isLoginBorderColorChange, setLoginBorderColorChange] = useState({
    borderColor: "blue",
  });
  const [isLoginPasswordBorderChange, setLoginPasswordBorderChange] = useState({
    borderColor: "blue",
  });

  const [tabTitleFontSize, setTabTitleFontSize] = useState({
    fontSize: "12px",
    fontWeight: "700",
  });
  useEffect(() => {
    document.body.classList.add("bg-constitution");
    return () => {
      document.body.classList.remove("bg-constitution");
    };
  }, []);

  // useEffect(() => {
  //   if (props.loginResult.fetching) {
  //     setLoader(true);
  //   } else {
  //     setLoader(false);
  //   }
  // });

  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(true);
  const [position, setPosition] = useState("middle-center");
  //form validation variables
  const [validated, setValidated] = useState(false);

  //SIGN IN button active dissable color handelr
  const [signInButtonGray, setSignInButtonGray] = useState("secondary");
  const [signInButtonPrimary, setSignInButtonPrimary] = useState("primary");

  // Password length

  const [enterEightDigit, setEnterEightDigit] = useState([8]);

  //Display error message

  const [loginPasswordLength, setLoginPasswordLength] = useState(1);

  const PasswordLengthEight = () => {
    let i = 8;
    if (loginPassword !== setEnterEightDigit[i]) {
      setLoginPasswordLength(1);
    } else if (loginPassword === setEnterEightDigit[i]) {
      setLoginPasswordLength(0);
    }
  };

  const NotifyError = () => {
    return (
      <>
        <Toast
          className="bg-danger"
          onClose={() => setShowA(false)}
          showA={showA}
          delay={3500}
          autohide
        >
          <ToastHeader className="">
            <b className="me-auto">Login Fail</b>
            <smal>&nbsp;</smal>
          </ToastHeader>
          <ToastBody className="fs-4">Bad credentials</ToastBody>
        </Toast>
      </>
    );
  };
  const NotifySuccess = () => {
    return (
      <>
        <Toast className="bg-success">
          <ToastBody>Congratulation</ToastBody>
        </Toast>
      </>
    );
  };

  // const notify = () => toast("Bad credentials");

  //const for error meassge for password strength
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  // const for error message for email and mobile number entry

  const [emailAndMobileErrorMessage, setEmailAndmobileErrorMessage] =
    useState("");
  const [emailAssignValidation, setEmailAssignValidation] = useState("email");
  const [mobileNumberAssign, setMobileNumberAssign] = useState("text");

  const [checkSpaceEnter, setCheckSpaceEnter] = useState("");

  //forget password Otp verification

  const [forgotPasswordOtp, setForgotPasswordOtp] = useState(false);
  const [resetOtpHolder, setResetOtpHolder] = useState("");

  //forget password

  const [emailMobileOtpHolder, setEmailMobileOtpHolder] = useState("");

  const responseOtp = {
    sendto: emailMobileOtpHolder,
  };

  const SubmitOtpOfEmailMobile = () => {
    console.log("value in input", emailMobileOtpHolder);
    if (emailMobileOtpHolder !== "") {
      setForgotPasswordOtp(true);
      //setResetPassword(true);
      fetch(`${BaseURL}/api/generate-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(responseOtp),
      })
        .then((res) => res.json())
        .then((data) => {
          setEmailMobileOtpHolder(data);
          console.log("Email that recive otp", data);
        });
    } else {
      console.warn("Please enter valid information");
    }
  };

  const verifyResponse = {
    email: emailMobileOtpHolder,
    otp: resetOtpHolder,
  };

  const OtpGotVerified = () => {
    fetch(`${BaseURL}/api/verify-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(verifyResponse),
    }).then((res) => {
      const statusCode = res.status;
      if (statusCode === 200) {
        setResetPassword(true);
      }
      res.json().then((data) => {
        setResetOtpHolder(data);
      });
    });
  };

  //reset Confirm password
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");

  const responseResetPassword = {
    email: emailMobileOtpHolder,
    password: newPassword,
    confirmPassword: repeatNewPassword,
  };

  const ValidateResetPassword = () => {
    fetch(`${BaseURL}/api/auth/resetPassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(responseResetPassword),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status: ${res.status}`);
        }
        return res.text(); // Read the response as text
      })
      .then((text) => {
        console.log("Response Text:", text); // Log the response text
        // Now you can analyze the response text and determine why it's not valid JSON.
      })
      .catch((error) => {
        console.error("Error: " + error.message);
      });
    Navigate("/");
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const loginFormSubmitHandler = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    console.log("************");
    e.preventDefault();

    const logindata = {
      username: loginEmail,
      password: loginPassword,
      userRole: null,
    };

    const radioUser = document.getElementById("userRadio");
    const radioAdmin = document.getElementById("adminRadio");
    if (radioAdmin.checked) {
      logindata.userRole = 3; // Set to 3 for "Admin"
    } else if (radioUser.checked) {
      logindata.userRole = 1; // Set to 1 for "Member"
    }

    // localStorage.setItem("username", logindata.username);

    const res = fetch(`${BaseURL}/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(logindata),
    }).then((response) => {
      const statusCode = response.status,
        success = response.statusCode;

      if (statusCode === 200) {
        response.json().then((data) => {
          localStorage.setItem("role", data.role);
          localStorage.setItem("username", logindata.username);
          Navigate("/auth/login/nomination");
        });
      } else {
        response
          .json()
          .then((user) => {
            if (user.errorMessage) {
              setShowSuccessAlert(true);
              setMessageHolder(user.errorMessage);
              // alert(user.errorMessage);
              return;
            } else {
              setShowB(true);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });

    if ((loginEmail && loginPassword).trim() === "") {
      setValidEmail(false);
      return;
    }
    setValidEmail(true);

    //password strength test
    if (
      /[A-Z]/.test(loginPassword) &&
      /[a-z]/.test(loginPassword) &&
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(loginPassword) &&
      loginPassword.length > 7
    ) {
      setPasswordErrorMessage("");
    } else if (/\s+$/.test(loginPassword)) {
      setPasswordErrorMessage("Password canot have space");
    } else {
      setPasswordErrorMessage(
        "Password should be min 8 characters length of combination special character, capital letter and numbers"
      );
    }
  };

  setTimeout(() => {
    setShowSuccessAlert(false);
  }, 5000);

  const CloseAlertMessage = () => {
    setShowSuccessAlert(false);
  };
  const CheckSpaceBarEnter = (e) => {
    if (/\s+$/.test(loginPassword)) {
      setCheckSpaceEnter("Password Cannot have  blank space");
    } else if (loginPassword.length >= 7) setCheckSpaceEnter("");
    setPasswordErrorMessage("");
  };

  const NavigateToRegister = () => {
    Navigate("/auth/login/register");
  };

  // mobile part started

  const [loginEmailMobile, setLoginEmailMobile] = useState("");
  const [loginPasswordMobile, setLoginPasswordMobile] = useState("");
  const EmailValidator = "email";
  const MobileNumberValidator = "text";
  const [errorMessageHolder, setErrorMessageHolder] = useState("");
  const [errorMessageForPasswordHolder, setErrorMessageForPasswordHolder] =
    useState("");

  const BgBlueOnActive = "M21-btn";
  const BgSecondaryOnDisabled = "m21-btn-disabled";

  const loginFormSubmitHandlerMobile = (e) => {
    e.preventDefault();
    if (loginEmailMobile >= "0" && loginEmailMobile <= "9") {
      if (loginEmailMobile.length < 10) {
        setErrorMessageHolder("You have entered less then 10 digit");
      } else {
        setErrorMessageHolder("");
      }
    }

    if (
      /[a-z]/.test(loginPasswordMobile) &&
      /[A-Z]/.test(loginPasswordMobile) &&
      /[\d+$]/.test(loginPasswordMobile) &&
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(loginPasswordMobile) &&
      loginPasswordMobile.length > 7
    ) {
      setErrorMessageForPasswordHolder("");
    } else {
      setErrorMessageForPasswordHolder(
        "Password should be min 8 characters length of combination special character, capital letter and numbers"
      );
    }
  };

  const EmailOrNumberValidator = () => {
    if (
      (loginEmailMobile >= "a" && loginEmailMobile <= "z") ||
      (loginEmailMobile >= "A" && loginEmailMobile <= "Z")
    ) {
      if (loginEmailMobile.includes("@")) {
        setErrorMessageHolder("");
      } else {
        setErrorMessageHolder("Please add @");
      }
    }
    if (loginEmailMobile >= "0" && loginEmailMobile <= "9") {
      if (loginEmailMobile.length > 10) {
        setErrorMessageHolder("You have enter more then 10 digit");
      } else {
        setErrorMessageHolder("");
      }
    }
  };

  const PasswordValidator = () => {};

  const CollModalForgotPassword = () => {
    setLgForgotPassword(true);
    //setForgotPasswordOtp(true);
  };

  return (
    <>
      <Desktop>
        <Col className="section overflow-scroll vh-100">
          <Col className="container-fluid">
            <Col sm="12" className="position-fixed text-center">
              {/* {showA && <ToastContainer />
                } */}
              <Row>
                <Col sm="12" className="p-5">
                  &nbsp;
                </Col>
                <Col sm="6">
                  {showSuccessAlert && (
                    <FailuerAlertNotification
                      title="select role"
                      onClose={CloseAlertMessage}
                      errorMessage={messageHolder}
                    />
                  )}
                </Col>
                <Col sm="6">&nbsp;</Col>
              </Row>

              {showA && <NotifyError />}
              {!showB && <NotifySuccess />}
            </Col>
            <Col sm="12" className="">
              <Col sm="12" className="p-5">
                &nbsp;
              </Col>

              <Col sm="12" className="">
                <Row>
                  <Col sm="7">&nbsp;</Col>
                  <Col sm="4" className="login-w">
                    <Card className=" shadow border-0 ">
                      <CardHeader className="bg-white py-4 px-0 border-0">
                        <Row className="g-2 form">
                          <Col sm="12" className="form-group">
                            <Row className="g-2 form">
                              <Col sm="1">&nbsp;</Col>
                              <Col sm="10" className=" text-center">
                                <img
                                  className="col-sm-12"
                                  src={LoginHeaderImg}
                                  alt="Sign in to Introductory Application"
                                />
                                {/* Sign in to Introductory Application */}
                              </Col>
                              <Col sm="1">&nbsp;</Col>
                            </Row>
                          </Col>
                        </Row>
                      </CardHeader>
                      <CardHeader
                        className="bg-secondary-light p-2 border-0"
                        style={{ backgroundColor: "#FFD3E0" }}
                      >
                        <div className="btn-wrapper text-center">
                          <Col sm="11">
                            <Row>
                              <Col sm="2" className="form-group">
                                &nbsp;
                              </Col>
                              <Col sm="8" className="form-group">
                                <Row>
                                  <Col sm="4" className=" ps-0">
                                    <span className="font-size-12 fw-bold">
                                      Sign in as
                                    </span>
                                  </Col>
                                  <Col sm="5" className="form-check ">
                                    <Input
                                      type="radio"
                                      id="userRadio"
                                      name="user"
                                      value="userRadioBtn"
                                      className=""
                                    />
                                    <label
                                      for="userRadio"
                                      className="font-size-12 fw-normal"
                                      type="button"
                                    >
                                      Member
                                    </label>
                                  </Col>
                                  <Col sm="3" className="form-check ">
                                    <Input
                                      type="radio"
                                      id="adminRadio"
                                      name="user"
                                      value="adminRadioBtn"
                                      className=""
                                    />
                                    <label
                                      className="font-size-12 fw-normal"
                                      for="adminRadio"
                                      type="button"
                                    >
                                      Admin
                                    </label>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </div>
                      </CardHeader>
                      <CardBody className="px-sm-4 ">
                        <Tabs
                          defaultActiveKey="EnterWithPassword"
                          id="uncontrolled-tab-example"
                          className="mb-3"
                        >
                          <Tab
                            eventKey="EnterWithPassword"
                            className="border-0 border-tab-bottom  "
                            title={
                              <Col className="font-size-12">
                                Enter With Password
                              </Col>
                            }
                            // id='EnterWithPassword'
                          >
                            {/* Login Member start */}

                            <Form
                              noValidate
                              validated={validated}
                              onSubmit={loginFormSubmitHandler}
                            >
                              <FormGroup>
                                <Row className="g-2 form">
                                  <Col className="">
                                    <FormLabel
                                      style={{
                                        color: isLoginBorderColorChange.color,
                                      }}
                                      className="font-size-11 Ri-text-color-sub-menu"
                                    >
                                      Email or Mobile number:
                                    </FormLabel>

                                    <Col sm="12" className="">
                                      <Row className="g-2 form">
                                        <Col sm="12">
                                          <InputGroup hasValidation>
                                            <Form.Control
                                              type={
                                                (loginEmail >= "a" &&
                                                  loginEmail <= "z") ||
                                                (loginEmail >= "A" &&
                                                  loginEmail <= "Z")
                                                  ? emailAssignValidation
                                                  : loginEmail >= "0" &&
                                                    loginEmail <= "9"
                                                  ? mobileNumberAssign
                                                  : false
                                              }
                                              required
                                              defaultValue={loginEmail}
                                              placeholder="Enter your email or mobile number"
                                              id="inputLoginEmailOrNumber"
                                              className="rounded-0"
                                              onChange={(event) =>
                                                setLoginEmail(
                                                  event.target.value
                                                )
                                              }
                                              size="sm"
                                            />
                                          </InputGroup>
                                        </Col>
                                        <Col sm="12">
                                          <Col
                                            sm="12"
                                            className="form-group position-absolute bg-danger text-white"
                                          >
                                            {emailAndMobileErrorMessage}
                                          </Col>
                                        </Col>
                                      </Row>

                                      {/* <Input
                                        type="text"
                                        defaultValue={loginEmail}
                                        placeholder="Email or Mobile No:"
                                        className="rounded-0"
                                        onChange={(event) =>
                                          setLoginEmail(event.target.value)
                                        }
                                        style={{
                                          borderColor:
                                            isLoginBorderColorChange.borderColor,
                                          color: isLoginBorderColorChange.color,
                                        }}
                                        required
                                      /> */}
                                    </Col>
                                    {/* <Col
                                      sm="6"
                                      className="position-absolute bg-danger rounded-5 text-center"
                                    >
                                      {!validEmail && (
                                        <Col className="text-white ">
                                          Enter Valid Email
                                        </Col>
                                      )}
                                    </Col> */}

                                    <FormLabel
                                      for="fname"
                                      className="font-size-11 Ri-text-color-sub-menu "
                                    >
                                      Password :
                                    </FormLabel>

                                    <Col sm="12" className="">
                                      <Row className="g-2 form">
                                        <Col sm="12">
                                          <Input
                                            type="password"
                                            defaultValue={loginPassword}
                                            minLength="8"
                                            maxLength="16"
                                            placeholder="Enter password"
                                            className="rounded-0"
                                            onChange={(event) =>
                                              setLoginPassword(
                                                event.target.value
                                              )
                                            }
                                            size="sm"
                                            id="loginPasswordInput"
                                            onKeyUp={CheckSpaceBarEnter}
                                            // style={{
                                            //   borderColor:
                                            //     isLoginPasswordBorderChange.borderColor,
                                            //   color:
                                            //     isLoginPasswordBorderChange.color,
                                            // }}
                                            required
                                          />
                                        </Col>
                                        <Col sm="12">
                                          <Col
                                            sm="12"
                                            className="form-group position-absolute bg-danger text-white"
                                          >
                                            {/* {!loginPasswordLength && (
                                      <>
                                        <span>Password length not enough</span>
                                      </>
                                    )} */}
                                            {checkSpaceEnter}
                                            {passwordErrorMessage}
                                          </Col>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Col>

                                  <Col
                                    sm="12"
                                    className="form-control border-0"
                                  >
                                    <Row>
                                      <Col sm="6" className="form-check">
                                        <Input
                                          type="checkbox"
                                          id="vehicle1"
                                          name="vehicle1"
                                          value="Bike"
                                        />

                                        <FormLabel
                                          for="vehicle1"
                                          className="font-size-12 fw-normal Ri-text-color-main-menu"
                                        >
                                          Keep Me Sign In
                                        </FormLabel>
                                      </Col>
                                      <Col
                                        sm="6"
                                        className="text-end text-primary"
                                        role="button"
                                        onClick={CollModalForgotPassword}
                                      >
                                        <a className="font-size-12 fw-normal title-text-color text-decoration-none">
                                          Forgot Password?
                                        </a>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col sm="12">
                                    <Col className="text-center">
                                      <Button
                                        className="my-4 w-100 rounded-1 font-size-11 fw-bold text-uppercase "
                                        type="submit"
                                        onClick={loginFormSubmitHandler}
                                        variant={
                                          loginEmail.trim() !== "" &&
                                          loginPassword.trim() !== ""
                                            ? signInButtonPrimary
                                            : signInButtonGray
                                        }
                                        disabled={
                                          loginEmail.trim() !== "" &&
                                          loginPassword.trim() !== ""
                                            ? false
                                            : true
                                        }
                                      >
                                        SIGN IN
                                      </Button>
                                    </Col>
                                  </Col>
                                  <Col
                                    sm="12"
                                    className=" font-size-11 fw-normal "
                                  >
                                    By clicking sign up you are agree to our
                                    <span
                                      className="title-text-color  fw-normal "
                                      onClick={() => setLgShowTermOfUse(true)}
                                      style={{
                                        cursor: "pointer",
                                        paddingRight: "2.59px",
                                        paddingLeft: "2.59px",
                                      }}
                                    >
                                      Terms of use
                                    </span>
                                    and acknowledging the
                                    <span
                                      className="title-text-color  fw-normal"
                                      onClick={() => setLgShowPrivacy(true)}
                                      style={{
                                        cursor: "pointer",
                                        paddingRight: "2.59px",
                                        paddingLeft: "2.59px",
                                      }}
                                    >
                                      Privacy Policy
                                    </span>
                                  </Col>

                                  <Col sm="12">
                                    <Modal
                                      size="lg"
                                      show={lgShowTermOfUse}
                                      onHide={() => setLgShowTermOfUse(false)}
                                      aria-labelledby="example-modal-sizes-title-lg"
                                    >
                                      <Modal.Header
                                        closeButton
                                        className="border-0"
                                      >
                                        <Modal.Title id="example-modal-sizes-title-lg">
                                          Coming Soon...
                                        </Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>...</Modal.Body>
                                    </Modal>
                                  </Col>

                                  <Col sm="12">
                                    <Modal
                                      size="lg"
                                      show={lgForgotPassword}
                                      onHide={() => setLgForgotPassword(false)}
                                      aria-labelledby="example-modal-sizes-title-lg"
                                      className="rounded-0"
                                    >
                                      <Modal.Header
                                        closeButton
                                        className="border-0 bg-secondary rounded-0"
                                      >
                                        <Modal.Title id="example-modal-sizes-title-lg ">
                                          Forgot Password..
                                        </Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body className="rounded-0">
                                        <Col sm="8">
                                          <Col sm="12" className="p-2">
                                            Enter verified User id/Email/Mobile
                                            No.
                                          </Col>
                                          <Col sm="12">
                                            <Row>
                                              <Col sm="9" className="p-2">
                                                <Input
                                                  type="text"
                                                  placeholder="Enter verified User id/Email/Mobile No"
                                                  className="figure-caption"
                                                  defaultValue={
                                                    emailMobileOtpHolder
                                                  }
                                                  onChange={(e) =>
                                                    setEmailMobileOtpHolder(
                                                      e.target.value
                                                    )
                                                  }
                                                />
                                              </Col>
                                              <Col sm="3" className="p-2">
                                                <Button
                                                  onClick={
                                                    SubmitOtpOfEmailMobile
                                                  }
                                                >
                                                  Submit verify otp
                                                </Button>
                                              </Col>
                                            </Row>
                                          </Col>

                                          <Col
                                            sm="8"
                                            className="text-end"
                                            type="button"
                                          >
                                            Send OTP
                                          </Col>
                                        </Col>
                                      </Modal.Body>
                                    </Modal>
                                  </Col>
                                  <Col sm="12">
                                    <Modal
                                      show={forgotPasswordOtp}
                                      onHide={setForgotPasswordOtp}
                                    >
                                      <Modal.Header closeButton>
                                        <Modal.Title>verify otp</Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>
                                        <Col sm="12">
                                          <Row className="g-2 form-group">
                                            <Col sm="12">
                                              <Row className="g-2 form-group">
                                                <FormLabel>
                                                  Enter Otp for verification
                                                </FormLabel>
                                                <Col sm="12">
                                                  <InputGroup hasValidation>
                                                    <Form.Control
                                                      defaultValue={
                                                        resetOtpHolder
                                                      }
                                                      onChange={(e) =>
                                                        setResetOtpHolder(
                                                          e.target.value
                                                        )
                                                      }
                                                      type="text"
                                                    />
                                                  </InputGroup>
                                                  {/* <Input /> */}
                                                </Col>
                                              </Row>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <Button
                                          variant="secondary"
                                          onClick={setForgotPasswordOtp}
                                        >
                                          Close
                                        </Button>
                                        <Button
                                          variant="primary"
                                          onClick={OtpGotVerified}
                                        >
                                          verify otp
                                        </Button>
                                      </Modal.Footer>
                                    </Modal>
                                  </Col>

                                  <Col sm="12">
                                    <Modal
                                      size="lg"
                                      show={ResetPassword}
                                      onHide={() => setResetPassword(false)}
                                      aria-labelledby="example-modal-sizes-title-lg"
                                    >
                                      <Modal.Header
                                        closeButton
                                        className="border-0 bg-secondary"
                                      >
                                        <Modal.Title id="example-modal-sizes-title-lg">
                                          Reset Password
                                        </Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>
                                        <Col sm="12">
                                          <Col sm="12" className="p-2">
                                            Enter New Password
                                          </Col>
                                          <Col sm="8" className="p-2">
                                            <InputGroup hasValidation>
                                              <Form.Control
                                                placeholder="Enter new password"
                                                className="figure-caption"
                                                required
                                                defaultValue={newPassword}
                                                onChange={(e) =>
                                                  setNewPassword(e.target.value)
                                                }
                                                type="password"
                                              />
                                            </InputGroup>
                                          </Col>
                                          <Col sm="12" className="p-2">
                                            Confirm New Password
                                          </Col>
                                          <Col sm="8" className="p-2">
                                            <InputGroup hasValidation>
                                              <Form.Control
                                                placeholder="Enter new password"
                                                className="figure-caption"
                                                required
                                                defaultValue={repeatNewPassword}
                                                onChange={(e) =>
                                                  setRepeatNewPassword(
                                                    e.target.value
                                                  )
                                                }
                                                type={
                                                  showPassword
                                                    ? "text"
                                                    : "password"
                                                }
                                              />
                                              <Button
                                                variant="outline-secondary"
                                                onClick={
                                                  togglePasswordVisibility
                                                }
                                              >
                                                {showPassword ? "Hide" : "Show"}
                                              </Button>
                                            </InputGroup>
                                          </Col>
                                          <Col sm="12" className="text-center">
                                            <Button
                                              onClick={ValidateResetPassword}
                                            >
                                              Submit
                                            </Button>
                                          </Col>
                                        </Col>
                                      </Modal.Body>
                                    </Modal>
                                  </Col>

                                  <Col sm="12">
                                    <Modal
                                      size="lg"
                                      show={lgShowPrivacy}
                                      onHide={() => setLgShowPrivacy(false)}
                                      aria-labelledby="example-modal-sizes-title-lg"
                                    >
                                      <Modal.Header
                                        closeButton
                                        className="border-0"
                                      >
                                        <Modal.Title id="example-modal-sizes-title-lg">
                                          Coming Soon...
                                        </Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>...</Modal.Body>
                                    </Modal>
                                  </Col>
                                </Row>
                              </FormGroup>
                            </Form>

                            {/* Login Member end */}
                          </Tab>
                          <Tab
                            eventKey="EnterOtp"
                            title={
                              <Col id="EnterWith" className="font-size-12">
                                Enter With OTP
                              </Col>
                            }
                            className="border-0 border-tab-bottom "
                          >
                            <LoginAdmin />
                          </Tab>
                        </Tabs>
                      </CardBody>
                      <CardFooter className="border-0 bg-white ">
                        <Col
                          sm="12"
                          className="p-2 text-center font-size-11 fw-normal "
                        >
                          New to this application?
                          <Label
                            onClick={NavigateToRegister}
                            className="px-1 text-decoration-none  title-text-color "
                            type="button"
                          >
                            REGISTER NOW
                          </Label>
                        </Col>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col sm="12" className="p-5">
                &nbsp;
              </Col>
            </Col>
          </Col>
        </Col>
      </Desktop>

      <Mobile>
        <>
          <Col sm="12" className="bg-constitution">
            <div className="">
              <Col sm="4">
                <Card className=" shadow border-0 modal-sm">
                  <CardHeader className="bg-white px-sm-4 border-0">
                    <div className="btn-wrapper">
                      <Col sm="1">&nbsp;</Col>
                      <Col sm="10" className=" text-center">
                        <img
                          className="col-10"
                          src={LoginHeaderImg}
                          alt="Sign in to Introductory Application"
                        />
                        {/* Sign in to Introductory Application */}
                      </Col>
                      <Col sm="1">&nbsp;</Col>
                    </div>
                  </CardHeader>
                  <CardHeader className="bg-light p-2 border-0">
                    <div className="btn-wrapper text-center">
                      <Col sm="12" className="col-12">
                        <Row className="g-2 form">
                          <Col className="col-3">&nbsp;</Col>
                          <Col className="col-3">
                            <span className="font-size-12 fw-bold Ri-text-color-main-menu">
                              Sign in as
                            </span>
                          </Col>
                          <Col className=" col-3 form-check">
                            <Input
                              type="radio"
                              id="Member"
                              name="fav_language"
                              value="Member"
                              className="me-1"
                            />
                            <label
                              for="Member"
                              className="font-size-12 fw-normal Ri-text-color-main-menu"
                            >
                              Member
                            </label>
                          </Col>
                          <Col className=" col-3 form-check">
                            <Input
                              type="radio"
                              id="Admin"
                              name="fav_language"
                              value="Admin"
                              className="me-1"
                            />
                            <label
                              for="Admin"
                              className="font-size-12 fw-normal Ri-text-color-main-menu"
                            >
                              Admin
                            </label>
                          </Col>
                        </Row>
                      </Col>
                    </div>
                  </CardHeader>
                  <CardBody className="px-sm-4 ">
                    <Tabs
                      defaultActiveKey="home"
                      id="uncontrolled-tab-example"
                      className="pb-3 border-0 "
                    >
                      <Tab
                        eventKey="home"
                        className="border-0  border-tab-bottom"
                        title={
                          <>
                            <Col className="col-12">
                              <FormLabel className="font-size-12 fw-bold ">
                                Enter With Password
                              </FormLabel>
                            </Col>
                          </>
                        }
                      >
                        {/* Login Member start */}

                        <Form onSubmit={loginFormSubmitHandlerMobile}>
                          <Row className="g-2 form">
                            <Col md="12" className="">
                              <Row className="g-2 form">
                                <Col md="12">
                                  <label className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                    Email or Mobile number
                                  </label>
                                </Col>
                                <Col md="12" className="">
                                  <Form.Control
                                    type={
                                      (loginEmailMobile >= "a" &&
                                        loginEmailMobile <= "z") ||
                                      (loginEmailMobile >= "A" &&
                                        loginEmailMobile <= "Z")
                                        ? EmailValidator
                                        : MobileNumberValidator
                                    }
                                    defaultValue={loginEmailMobile}
                                    placeholder="Enter your email or mobile number"
                                    className="rounded-0"
                                    onChange={(e) =>
                                      setLoginEmailMobile(e.target.value)
                                    }
                                    size="sm"
                                    required
                                    onKeyUp={EmailOrNumberValidator}
                                    isValid={
                                      loginEmailMobile.includes("@")
                                        ? true
                                        : loginEmailMobile >= "0" &&
                                          loginEmailMobile <= "9"
                                        ? loginEmailMobile.length === 10
                                          ? true
                                          : false
                                        : false
                                    }
                                    isInvalid={
                                      loginEmailMobile !== ""
                                        ? loginEmailMobile >= "0" &&
                                          loginEmailMobile <= "9"
                                          ? loginEmailMobile.length === 10
                                            ? false
                                            : true
                                          : (loginEmailMobile >= "a" &&
                                              loginEmailMobile <= "z") ||
                                            (loginEmailMobile >= "A" &&
                                              loginEmailMobile <= "Z")
                                          ? loginEmailMobile.includes("@")
                                            ? false
                                            : true
                                          : false
                                        : false
                                    }
                                  />
                                  <Col sm="12" className="col-12   ">
                                    <Col
                                      sm="12"
                                      className=" col-12 form-group text-center"
                                    >
                                      <label className=" bg-danger col-10 rounded-2 font-size-12 text-uppercase text-white ">
                                        {errorMessageHolder}
                                      </label>
                                    </Col>
                                  </Col>
                                </Col>

                                <Col md="12" className="">
                                  <label
                                    for="fname"
                                    className="font-size-11 fw-normal Ri-text-color-sub-menu"
                                  >
                                    Password
                                  </label>
                                </Col>
                                <Col md="12" className="">
                                  <Form.Control
                                    type="password"
                                    defaultValue={loginPasswordMobile}
                                    placeholder="Password:"
                                    className="rounded-0"
                                    onChange={(event) =>
                                      setLoginPasswordMobile(event.target.value)
                                    }
                                    required
                                    size="sm"
                                    onKeyUp={PasswordValidator}
                                    isValid={
                                      loginPasswordMobile !== ""
                                        ? /[a-z]/.test(loginPasswordMobile) &&
                                          /[A-z]/.test(loginPasswordMobile) &&
                                          /[\d+$]/.test(loginPasswordMobile) &&
                                          /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
                                            loginPasswordMobile
                                          ) &&
                                          loginPasswordMobile.length >= 8
                                          ? true
                                          : false
                                        : false
                                    }
                                    isInvalid={
                                      loginPasswordMobile !== ""
                                        ? /[a-z]/.test(loginPasswordMobile) &&
                                          /[A-z]/.test(loginPasswordMobile) &&
                                          /[\d+$]/.test(loginPasswordMobile) &&
                                          /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
                                            loginPasswordMobile
                                          ) &&
                                          loginPasswordMobile.length >= 8
                                          ? false
                                          : true
                                        : false
                                    }
                                  />
                                  <Col>
                                    <Col sm="12" className="col-12   ">
                                      <Col
                                        sm="12"
                                        className=" col-12 form-group text-center"
                                      >
                                        <label className=" bg-danger col-10 rounded-2 font-size-12 text-uppercase text-white ">
                                          {errorMessageForPasswordHolder}
                                        </label>
                                      </Col>
                                    </Col>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col className=" col-12">
                              <Row className="g-2 form">
                                <Col className="col-6 form-check">
                                  <Input
                                    type="checkbox"
                                    id="KeepMeSign"
                                    name="vehicle1"
                                    value="Bike"
                                    className="me-2"
                                  />
                                  <label
                                    for="KeepMeSign"
                                    className="font-size-12 
                                    fw-normal
                                     Ri-text-color-main-menu"
                                  >
                                    {" "}
                                    Keep Me Sign In
                                  </label>
                                </Col>
                                <Col
                                  className="text-end text-primary col-6"
                                  onClick={() => setLgForgotPasswordMobi(true)}
                                >
                                  <label className="title-text-color font-size-12 fw-normal ">
                                    {" "}
                                    Forgot Password?
                                  </label>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="col-12">
                              <div
                                className={
                                  loginPasswordMobile !== "" &&
                                  loginEmailMobile !== ""
                                    ? BgBlueOnActive
                                    : BgSecondaryOnDisabled
                                }
                              >
                                <Button
                                  disabled={
                                    loginPasswordMobile !== " " &&
                                    loginEmailMobile !== ""
                                      ? false
                                      : true
                                  }
                                  className=" col-12 py-3 rounded-2 text-uppercase font-size-12 fw-bold"
                                  type="submit"
                                >
                                  SIGN IN
                                </Button>
                              </div>
                            </Col>
                            <Col sm="12" className="text-center font-size-11  ">
                              By clicking sign up you are agree to our
                              <span
                                className="title-text-color  "
                                onClick={() => setLgShowTermOfUseMobi(true)}
                                style={{ paddingLeft: "2.98px" }}
                              >
                                Terms of use{" "}
                              </span>{" "}
                              and acknowledging the
                              <span
                                className="title-text-color  small"
                                onClick={() => setLgShowPrivacyMobi(true)}
                                style={{ paddingLeft: "2.98px" }}
                              >
                                Privacy Policy
                              </span>
                            </Col>
                          </Row>
                          <Col sm="12">
                            <Modal
                              size="lg"
                              show={lgForgotPasswordMobi}
                              onHide={() => setLgForgotPasswordMobi(false)}
                              aria-labelledby="example-modal-sizes-title-lg"
                              className="rounded-0"
                            >
                              <Modal.Header
                                closeButton
                                className="border-0 bg-secondary rounded-0"
                              >
                                <Modal.Title id="example-modal-sizes-title-lg ">
                                  Forgot Password..
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body className="rounded-0">
                                <Col sm="8">
                                  <Col sm="12" className="p-2">
                                    Enter verified User id/Email/Mobile No.
                                  </Col>
                                  <Col sm="12">
                                    <Row>
                                      <Col sm="9" className="p-2">
                                        <Input
                                          type="text"
                                          placeholder="Enter verified User id/Email/Mobile No"
                                          className="figure-caption"
                                        />
                                      </Col>
                                      <Col sm="2" className="p-2">
                                        <Button
                                          onClick={() =>
                                            setResetPasswordMobi(true)
                                          }
                                        >
                                          Submit
                                        </Button>
                                      </Col>
                                    </Row>
                                  </Col>

                                  <Col
                                    sm="8"
                                    className="text-end"
                                    type="button"
                                  >
                                    Send OTP
                                  </Col>
                                </Col>
                              </Modal.Body>
                            </Modal>
                          </Col>

                          <Col sm="12">
                            <Modal
                              size="lg"
                              show={ResetPasswordMobi}
                              onHide={() => setResetPasswordMobi(false)}
                              aria-labelledby="example-modal-sizes-title-lg"
                            >
                              <Modal.Header
                                closeButton
                                className="border-0 bg-secondary"
                              >
                                <Modal.Title id="example-modal-sizes-title-lg">
                                  Reset Password
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <Col sm="12">
                                  <Col sm="12" className="p-2">
                                    Enter New Password
                                  </Col>
                                  <Col sm="8" className="p-2">
                                    <Input
                                      placeholder="Enter new password"
                                      className="figure-caption"
                                    />
                                  </Col>
                                  <Col sm="12" className="p-2">
                                    Confirm New Password
                                  </Col>
                                  <Col sm="8" className="p-2">
                                    <Input
                                      placeholder="Enter new password"
                                      className="figure-caption"
                                    />
                                  </Col>
                                  <Col sm="12" className="text-center">
                                    <Button>Submit</Button>
                                  </Col>
                                </Col>
                              </Modal.Body>
                            </Modal>
                          </Col>

                          <Col sm="12">
                            <Modal
                              size="lg"
                              show={lgShowTermOfUseMobi}
                              onHide={() => setLgShowTermOfUseMobi(false)}
                              aria-labelledby="example-modal-sizes-title-lg"
                            >
                              <Modal.Header closeButton className="border-0">
                                <Modal.Title id="example-modal-sizes-title-lg">
                                  Coming Soon...
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>...</Modal.Body>
                            </Modal>
                          </Col>

                          <Col sm="12">
                            <Modal
                              size="lg"
                              show={lgShowPrivacyMobi}
                              onHide={() => setLgShowPrivacyMobi(false)}
                              aria-labelledby="example-modal-sizes-title-lg"
                            >
                              <Modal.Header closeButton className="border-0">
                                <Modal.Title id="example-modal-sizes-title-lg">
                                  Coming Soon...
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>...</Modal.Body>
                            </Modal>
                          </Col>
                        </Form>

                        {/* Login Member end */}
                      </Tab>
                      <Tab
                        eventKey="profile"
                        title={
                          <>
                            <Col className="col-12">
                              <FormLabel className="font-size-12 fw-bold ">
                                Enter With OTP
                              </FormLabel>
                            </Col>
                          </>
                        }
                        className="border-0 border-tab-bottom"
                      >
                        <LoginAdmin />
                      </Tab>
                    </Tabs>

                    <Col
                      sm="12"
                      className="p-2 text-center font-size-11 fw-normal  "
                    >
                      New to this application?
                      <Link to="/auth/login/register">
                        <span
                          className="title-text-color  text-uppercase"
                          style={{ paddingLeft: "2.98px" }}
                        >
                          REGISTER NOW
                        </span>
                      </Link>
                    </Col>
                  </CardBody>
                </Card>
              </Col>
            </div>
          </Col>
        </>
      </Mobile>
    </>
  );
};

export default Indexlogin;
