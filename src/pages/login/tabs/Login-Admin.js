import React, { useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  FormGroup,
  FormLabel,
  InputGroup,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Col, Input, Label, Row } from "reactstrap";
import OtpInput from "otp-input-react";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [MobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");

  const [otpValid, setOtpValid] = useState(1);

  //OTP button bg color changes
  const [bgBlueForOtpButton, setBgBlueForOtpButton] = useState("secondary");
  const [bgChangeDarkToBlue, setBgChangeDarkToBlue] = useState("primary");

  const [isShown, setIsShown] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  const mobileNumberResponse = {
    recipientMobileNumber: MobileNumber,
  };

  const displayNone = () => {
    console.log("Got call to send otp");

    if (MobileNumber.length < 10) {
      setErrorMessage("the enter mobile number is less then 10 digit");
    } else {
      if (MobileNumber === "") {
        setErrorMessage("Please enter your mobile number 10 digit");
      }
      if (MobileNumber.length === 10) {
        setOtpValid((current) => !current);
        return;
      }

      // setIsShown((current) => !current);
      // }
      else {
        fetch(`${BaseURL}/api/org/otp`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mobileNumberResponse),
        });
        console
          .log("Mobile number send by API", mobileNumberResponse)
          .then((response) => {
            if (response.status === 200) {
              console.log("response", response);
              return response.json();
            } else {
              throw new Error("Failed to send OTP");
            }
          })
          .then((data) => {
            // setSignInMessage('OTP sent. Check your mobile.');
            console.log(data);
          });
        setIsShown(false);
      }
    }
  };

  const handleResendOtpClick = () => {
    displayNone();
    // setIsShown(false);
  };

  const OnlyNumberCheck = () => {
    if (
      (MobileNumber >= "a" && MobileNumber <= "z") ||
      (MobileNumber >= "A" && MobileNumber <= "Z")
    ) {
      setErrorMessage("you have enter alphabet");
    } else {
      setErrorMessage("");
    }
  };

  const responseBody = {
    recipientMobileNumber: MobileNumber,
    "otp ": otp,
  };

  const MobileOtpSubmitHandler = (e) => {
    console.log("Function got call verify otp");
    e.preventDefault();

    fetch(`${BaseURL}/api/org/verify-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(responseBody),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Sign in successful!");
        navigate("/auth/login/nomination");
      });
  };

  const SignInToNavigate = () => {};

  const CountryCodes = {
    codeList: 5,
  };

  const genrateCountryCode = () => {
    const arryCountryCode = [];
    for (let i = 0; i < CountryCodes.codeList; i++) {
      arryCountryCode.push(i);
    }
    return arryCountryCode.map((value, key) => {
      return (
        <Dropdown.Item key={key} value={value}>
          {value}
        </Dropdown.Item>
      );
    });
  };

  return (
    <>
      <Col className="section">
        <Form onSubmit={MobileOtpSubmitHandler}>
          <Row className="g-2 form">
            <Col sm="12">
              <FormLabel for="fname" className="font-size-11 fw-normal">
                {" "}
                Mobile number:
              </FormLabel>
              <Col sm="12">
                <InputGroup size="sm">
                  <Dropdown>
                    <Dropdown.Toggle className="border-secondary rounded-0 bg-secondary">
                      +91
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>{genrateCountryCode()}</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form.Control
                    defaultValue={MobileNumber}
                    placeholder=" Enter your mobile number:"
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="rounded-0"
                    // onKeyUp={OnlyNumberCheck}
                    size="sm"
                    maxLength="10"
                    minLength="10"
                  />
                </InputGroup>
              </Col>
              <Col sm="12">
                <Col sm="12" className="bg-danger text-white position-absolute">
                  {errorMessage}
                </Col>
              </Col>
            </Col>
            <Col sm="12">
              {!otpValid && (
                <>
                  <Col sm="12">
                    <Row className="g-2 form">
                      <Col sm="12" className="d-flex">
                        <Col md="12">
                          <OtpInput
                            value={otp}
                            onChange={setOtp}
                            OTPLength={6}
                            inputStyle="otp-block"
                            isInputNum
                            AutoFocus
                          />
                        </Col>
                        {/* <Col md="2">
                          <Input type="text" className="rounded-0" 
                          maxLength="1"/>
                        </Col>
                        <Col md="2">
                          <Input type="text" className="rounded-0" 
                          maxLength="1"/>
                        </Col>
                        <Col md="2">
                          <Input type="text" className="rounded-0" 
                          maxLength="1"/>
                        </Col>
                        <Col md="2">
                          <Input type="text" className="rounded-0" 
                          maxLength="1"/>
                        </Col>*/}
                      </Col>
                      <Col sm="12" className="form-group">
                        <Row className="g-2 form">
                          <Col sm="8">&nbsp;</Col>
                          <Col sm="4">
                            <Label
                              type="button"
                              onClick={handleResendOtpClick}
                              className="title-text-color font-size-13 fw-normal"
                            >
                              Resend OTP
                            </Label>
                          </Col>
                        </Row>
                      </Col>
                      <Col sm="12" className="p-2">
                        &nbsp;
                      </Col>
                      <Col sm="12" className="">
                        <Container>
                          <Row className="justify-content-center d-flex">
                            <Button
                              className="M21-btn font-size-12 fw-bold p-2  text-uppercase"
                              type="submit"
                            >
                              Sign In S
                            </Button>
                          </Row>
                        </Container>
                      </Col>

                      <Col sm="12" className=" font-size-11 fw-normal ">
                        By clicking sign up you are agree to our
                        <span className="title-text-color px-1 ">
                          Terms of use
                        </span>
                        and acknowledging the
                        <span className="title-text-color px-1">
                          Privacy Policy
                        </span>
                      </Col>
                    </Row>
                  </Col>
                </>
              )}
              {/* <Input
                                type="text"
                                placeholder=""
                                onChange={e => setOtp(e.target.value)}
                                className="rounded-0"
                            /> */}
            </Col>

            <Col lg="12">
              <Container>
                <Row className="justify-content-center d-flex">
                  <Button
                    onClick={displayNone}
                    style={{ display: isShown ? "block" : "none" }}
                    //type="submit"
                    className="col-sm-7 
                     text-white
                      border-light
                       font-size-12
                       fw-normal
                        rounded-5
                         text-uppercase "
                    // color="primary"
                    variant={
                      MobileNumber !== "" && MobileNumber.trim().length === 10
                        ? bgChangeDarkToBlue
                        : bgBlueForOtpButton
                    }
                    disabled={
                      MobileNumber !== "" && MobileNumber.trim().length === 10
                        ? false
                        : true
                    }
                  >
                    GeT OTP P
                  </Button>
                </Row>
              </Container>
            </Col>
            <Col sm="12" className="lh-1">
              <Container>
                <Row
                  className="figure-caption justify-content-center text-center "
                  style={{ display: isShown ? "flex" : "none" }}
                >
                  <Col sm="8">
                    <Label className="font-size-11 fw-normal Ri-text-color-sub-menu">
                      You will receive an OTP on your registered mobile number
                    </Label>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Col
            sm="12"
            className="p-5"
            style={{ display: isShown ? "flex" : "none" }}
          >
            &nbsp;
          </Col>
        </Form>
      </Col>
    </>
  );
};

export default LoginAdmin;
