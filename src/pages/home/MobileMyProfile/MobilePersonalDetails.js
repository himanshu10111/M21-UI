import React, { useState } from "react";
import {
  Button,
  Col,

  FormLabel,
  Row,
  Accordion,
  Form,
  CloseButton,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input, Card, CardBody, CardHeader, CardFooter } from "reactstrap";
import AddressDetailsMobileView from "../../../component/locationDetails/AddressDetailsComponentMobileView";

const MobilePersonalDetails = () => {
  const [isName, setIsName] = useState(1);
  const MyNameShow = () => {
    setIsName((current) => !current);
  };

  const [isConatact, setIsContact] = useState(1);
  const MyContactShow = () => {
    setIsContact((current) => !current);
  };

  const [isAdditionalDetails, setIsAdditionalDetails] = useState(1);
  const PersonalAdditionalDetails = () => {
    setIsAdditionalDetails((current) => !current);
  };

  const [isEducation, setIsEducation] = useState(1);
  const PersonalEducationalDetails = () => {
    setIsEducation((current) => !current);
  };

  const [isJobDetails, setIsJobDetails] = useState(1);
  const PersonalJobDetails = () => {
    setIsJobDetails((current) => !current);
  };

  const [isDiversityDetails, setIsDiversityDetails] = useState(1);
  const PersonalDiversityDetails = () => {
    setIsDiversityDetails((current) => !current);
  };

  const [houseNo, setHouseNo] = useState("");
  const [streetdetails, setStreetDetails] = useState("");
  const [Country, setCountry] = useState("");
  const [isState, setState] = useState("");
  const [isCity, setIsCity] = useState("");
  const [isDistrict, setIsDistrict] = useState("");
  const [isTaluka, setIsTaluka] = useState("");
  const [isPinZip, setIsPinZip] = useState("");


  //personal details name var
  const [personalDetailTitle, setPersonalDetailTitle] = useState('');
  const [personalDetailFirstName, setPersonalDetailFirstName] = useState('');
  const [personalDetailLastName, setPersonalDetailLastName] = useState('');


  //personal details contact var
  const [personalDetailMobilNo, setPersoanlDetailMobilNo] = useState('');
  const [perMobilAltOrPri, setPerMobilAltOrPri] = useState('');

  // email var
  const [perFirstEmail, setPerFirstEmail] = useState('');
  const [perSecondEmail, setPerSecondEmail] = useState('');
  const [perFirstEmailAltOrPri, setFirstPerEmailAltOrPri] = useState('');
  const [perSecondEmailAltOrPri, setPerSecondEmailAltOrPri] = useState('');

  //email validator var
  const [emailValidator, setEmailValidator] = useState('ValidEmail');

  const ValidateEmail = () => {
    if (!perFirstEmail.includes('@')) {
      setEmailValidator('InValidEmail')
    } else {
      setEmailValidator("ValidEmail")
    }

    if (!perSecondEmail.includes('@')) {
      setEmailValidator('InValidEmailSecond');
    }
    else {
      setEmailValidator("ValidEmail")
    }
  }

  //dropdown var mobile number
  const [interNationalMobileCode, setInterNationalMobileCode] = useState('');
  //button color change var

  const BtnBlue = 'primary';
  const BtnSecondary = "secondary";

  //Name details submit handler
  const PersonalDetailNameInfoHandler = (e) => {
    e.preventDefault()
  }

  const CancelPersonalNameInformation = () => {
    setIsName((current) => !current);
    setPersonalDetailTitle("");
    setPersonalDetailFirstName('');
    setPersonalDetailLastName("");


  }

  //cancel contact details
  const CancelConatactDDetail = () => {
    setIsContact((current) => !current);
    setPersoanlDetailMobilNo('');
    setPerMobilAltOrPri('');
    setPerFirstEmail("");
    setPerSecondEmail('');
    setFirstPerEmailAltOrPri('');
    setPerSecondEmailAltOrPri('');
  }
  //whatsapp number too handler
  const [changeCheckedStatus, setChangeCheckedStatus] = useState('Checked');

  //display alternate mobile number if not whatsapp number

  const [whatsappNumber, setWhatsappNumber] = useState(false);

  //whatsapp value holder var
  const [whatsappValueHolder, setWhatsappValueHolder] = useState('');


  const ChangeCheckedStatus = () => {
    setChangeCheckedStatus('UnChecked');
    setWhatsappNumber(true);
  }

  const CancelWhatsappNumber = () => {
    setChangeCheckedStatus('Checked');
    setWhatsappNumber((current) => !current)
  }


  return (
    <>
      <Col className="section">
        <Col className="col-12 ">
          <Col className="container-fluid">
            <Card className="p-0 border-0">
              <Row className="g-2 form">
                <CardHeader className="bg-transparent">
                  <Col className="col-12">
                    <Row className="g-2 form">
                      <Col className="col-8">
                        <label className="font-size-14 fw-bold Ri-text-color-main-menu">My Profile:</label>
                        <label className="font-size-14 fw-normal Ri-text-color-main-menu">Personal Details</label>
                      </Col>
                      <Col className="col-4 text-end">
                        <Link to="/auth/login/profile">
                          <Button className="bg-white text-secondary">Back</Button>
                        </Link>
                      </Col>
                    </Row>

                  </Col>
                </CardHeader>
                <CardBody>
                  <Row className="g-2 form">



                    <Col className="col-12 border-bottom">
                      <Row className="g-2 form">
                        <Col className="col-10">
                          <FormLabel className="font-size-12 Ri-text-head-mob fw-bold ">Name</FormLabel>
                        </Col>
                        <Col className="col-2" onClick={MyNameShow}>
                          <label className="Ri-edit-mob-text-color font-size-12 fw-normal">

                            Edit
                          </label>
                        </Col>
                      </Row>
                    </Col>
                    {isName && (
                      <Col className="col-12 form-control form-group border-0">
                        <FormLabel
                          className="Ri-text-color-sub-menu font-size-13 fw-bold"
                        >
                          {personalDetailTitle} {personalDetailFirstName} {personalDetailLastName}
                        </FormLabel>
                      </Col>
                    )}
                    {!isName && (
                      <Col className="col-12 px-0 form-control form-group border-0">
                        <>
                          <Col className="section">
                            <Card className="">
                              <Form onSubmit={PersonalDetailNameInfoHandler}>
                                <CardHeader>
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-10">
                                        <FormLabel
                                          className="font-size-14 fw-bold Ri-text-color-main-menu"
                                        >Name Details</FormLabel>
                                      </Col>

                                      <Col className="col-2 text-end"><CloseButton onClick={MyNameShow} /></Col>
                                    </Row>

                                  </Col>

                                </CardHeader>
                                <CardBody>
                                  <Row className="g-3 form">
                                    <Col className="col-8">
                                      <FormLabel className="font-size-11 fw-normal Ri-text-head-mob">
                                        Title <sup className="text-danger font-size-12">*</sup>
                                      </FormLabel>
                                      <Col className="col-12 form-group">
                                        <Form.Select
                                          type='select'
                                          defaultValue={personalDetailTitle}
                                          onChange={(e) => setPersonalDetailTitle(e.target.value)}
                                          size='sm'
                                          required
                                        >
                                          <option selected disabled value=''>Choose your title</option>
                                          <option>Mr.</option>
                                          <option>Mrs.</option>
                                        </Form.Select>
                                      </Col>
                                    </Col>
                                    <Col className="col-12 form-group">
                                      <Row className=" form">
                                        <FormLabel
                                          className="font-size-11 fw-normal Ri-text-head-mob">
                                          First Name <sup className="text-danger font-size-12">*</sup>
                                        </FormLabel>
                                        <Col className="col-12 form-group">
                                          <Form.Control
                                            type='text'
                                            placeholder="Enter your name"
                                            defaultValue={personalDetailFirstName}
                                            onChange={(e) => setPersonalDetailFirstName(e.target.value)}
                                            size="sm"
                                            required />
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-12 form-group ">
                                      <Row className=" form">
                                        <FormLabel className="font-size-11 fw-normal Ri-text-head-mob">Last Name</FormLabel>
                                        <Col className="col-12">
                                          <Form.Control
                                            type='text'
                                            placeholder="Enter your last name"
                                            defaultValue={personalDetailLastName}
                                            onChange={(e) => setPersonalDetailLastName(e.target.value)}
                                            size="sm" />
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </CardBody>
                                <CardFooter>
                                  <Col className="col-12 form-group">
                                    <Row className="g-2 form">
                                      <Col className="col-6 text-end">
                                        <Button
                                          onClick={CancelPersonalNameInformation}
                                          className="
                                                    btn-outline-primary
                                                     bg-white 
                                                      text-uppercase
                                                       
                                                        text-primary 
                                                        font-size-12
                                                        fw-bold
                                                        ">Cancel</Button>
                                      </Col>
                                      <Col className="col-6 text-start">
                                        <Button
                                          className="font-size-12 fw-bold  text-uppercase"
                                          disabled={
                                            personalDetailTitle !== "" &&
                                              personalDetailFirstName !== "" &&
                                              personalDetailLastName !== "" ? false : true
                                          }
                                          variant={
                                            personalDetailTitle !== "" &&
                                              personalDetailFirstName !== "" &&
                                              personalDetailLastName !== "" ? BtnBlue : BtnSecondary
                                          }
                                          type="submit"

                                        >

                                          save
                                        </Button>
                                      </Col>
                                    </Row>
                                  </Col>
                                </CardFooter>
                              </Form>

                            </Card>
                          </Col>

                        </>
                      </Col>
                    )}
                    <Col className="col-12 border-bottom">
                      <Row className="g-2 form">
                        <Col className="col-10">
                          <FormLabel className="font-size-12 fw-bold Ri-text-head-mob">

                            Contact Details
                          </FormLabel>
                        </Col>
                        <Col className="col-2" onClick={MyContactShow}>
                          <label type='button' className="Ri-edit-mob-text-color  font-size-12 fw-normal">

                            Edit
                          </label>
                        </Col>
                      </Row>
                    </Col>
                    {isConatact && (
                      <>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-12">
                              <FormLabel
                                className="font-size-11 fw-normal Ri-text-head-mob">
                                Mobile Number
                              </FormLabel>
                            </Col>
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-8">
                                  <FormLabel className="font-size-13 fw-bold Ri-text-color-sub-menu">
                                    {personalDetailMobilNo}
                                  </FormLabel>

                                </Col>
                                <Col className="col-4">
                                  <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">

                                    {perMobilAltOrPri}
                                  </FormLabel>
                                </Col>
                              </Row>
                            </Col>
                            {whatsappNumber && (
                              <>
                                <Col className="col-12 form-group">
                                  <Row className="g-2 form">
                                    <Col className="col-12 form">
                                      <InputGroup>
                                        <Dropdown>
                                          <Dropdown.Toggle size='sm' className="
                                          rounded-0 bg-secondary
                                          ">+91</Dropdown.Toggle>
                                          <Dropdown.Menu>
                                            <Dropdown.Item>1</Dropdown.Item>
                                            <Dropdown.Item>2</Dropdown.Item>
                                            <Dropdown.Item>3</Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                        <Form.Control
                                          type="text"
                                          placeholder="Enter your whatsapp number"
                                          defaultValue={whatsappValueHolder}
                                          onChange={(e) => setWhatsappValueHolder(e.target.value)}
                                          className="rounded-0"
                                          size='sm'
                                          isValid={
                                            whatsappValueHolder !== "" ?
                                              whatsappValueHolder >= '0' && whatsappValueHolder <= "9" ?
                                                whatsappValueHolder.length === 10 ?
                                                  true : false : false : false
                                          }
                                          isInvalid={
                                            whatsappValueHolder !== "" ?
                                              whatsappValueHolder >= 'a' &&
                                                whatsappValueHolder <= 'z' ? true :
                                                whatsappValueHolder.length > 10 ? true : false
                                              : false
                                          }

                                        />
                                      </InputGroup>

                                    </Col>
                                    <Col className="col-12 form">
                                      <Row className="g-2 form">
                                        <Col className="col-6 text-end">
                                          <Button
                                            onClick={CancelWhatsappNumber}
                                            className="btn-outline-primary
                                                     bg-white 
                                                      text-uppercase
                                                        text-primary 
                                                        font-size-12
                                                        fw-bold">Cancel</Button>
                                        </Col>
                                        <Col className="col-6">
                                          <Button className="font-size-12 text-uppercase fw-bold">
                                            Save
                                          </Button>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>

                              </>
                            )}
                            <Col className="col-12 form-check">
                              <Input checked={
                                changeCheckedStatus === "Checked" ? true : false
                              }
                                onClick={ChangeCheckedStatus}
                                type="checkbox" />
                              <FormLabel
                                className="font-size-11 fw-normal Ri-text-color-main-menu">
                                whatsapp Number too
                              </FormLabel>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-12">
                              <FormLabel className="font-size-11 fw-normal Ri-text-head-mob">Email</FormLabel>
                            </Col>
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-8">
                                  <FormLabel className="font-size-13 fw-bold Ri-text-color-sub-menu">Saba@gmail.com</FormLabel>
                                </Col>
                                <Col className="col-4">
                                  <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">

                                    Primary
                                  </FormLabel>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-8">
                                  <FormLabel className="font-size-13 fw-bold Ri-text-color-sub-menu">Saba@gmail.com</FormLabel>
                                </Col>
                                <Col className="col-4">

                                  <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                    Alternate
                                  </FormLabel>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </>
                    )}
                    {!isConatact && (
                      <>
                        <Card className="px-0">
                          <CardHeader>
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-10">
                                  <FormLabel className="font-size-14 fw-bold Ri-text-color-main-menu">Contact Details</FormLabel>
                                </Col>
                                <Col className="col-2 text-end">
                                  <CloseButton onClick={MyContactShow} />
                                </Col>
                              </Row>
                            </Col>
                          </CardHeader>
                          <CardBody className="px-0">
                            <Col className="col-12 form-control form-group border-0">
                              <Row className=" form">
                                <Col className="col-12">
                                  <FormLabel
                                    className="font-size-11 fw-normal Ri-text-head-mob"
                                  >Mobile Number
                                  </FormLabel>
                                </Col>
                                <Col className="col-12">
                                  <Row className="g-2  form">
                                    <Col className="col-8">
                                      <InputGroup>
                                        <Dropdown>
                                          <Dropdown.Toggle size='sm'
                                            className="bg-secondary rounded-0">+91</Dropdown.Toggle>
                                          <Dropdown.Menu>
                                            <Dropdown.Item>1</Dropdown.Item>
                                            <Dropdown.Item>2</Dropdown.Item>
                                            <Dropdown.Item>3</Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                        <Form.Control
                                          type="text"
                                          placeholder="Enter your mobile number"
                                          className="rounded-0"
                                          size='sm'
                                          defaultValue={personalDetailMobilNo}
                                          onChange={(e) => setPersoanlDetailMobilNo(e.target.value)}
                                          isValid={personalDetailMobilNo !== "" ?
                                            personalDetailMobilNo >= "0" && personalDetailMobilNo <= "9" ?
                                              personalDetailMobilNo.length === 10 ?
                                                true : false : false : false
                                          }
                                          isInvalid={
                                            personalDetailMobilNo !== "" ?
                                              personalDetailMobilNo >= "a" &&
                                                personalDetailMobilNo <= "z" ||
                                                personalDetailMobilNo >= 'A' &&
                                                personalDetailMobilNo <= "Z" ?

                                                true : personalDetailMobilNo >= '0' && personalDetailMobilNo <= '9' ?
                                                  personalDetailMobilNo.length > 10 ? true : false : false : false
                                          }
                                        />
                                      </InputGroup>

                                    </Col>
                                    <Col className="col-4">
                                      <Form.Select
                                        size="sm"
                                        className="rounded-0"
                                        type="select"
                                        defaultValue={perMobilAltOrPri}
                                        onChange={(e) => setPerMobilAltOrPri(e.target.value)}
                                      >
                                        <option selected disabled value=''>Choose your option</option>
                                        <option>Primary</option>
                                        <option>Alternate</option>
                                      </Form.Select>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="form-control form-group border-0">

                              <Col className="col-12">
                                <FormLabel className="font-size-11 fw-normal Ri-text-head-mob">Email</FormLabel>
                              </Col>
                              <Row className="g-2 form">
                                <Col className="col-12">
                                  <Row className="g-2 form">
                                    <Col className="col-8">
                                      <Form.Control
                                        defaultValue={perFirstEmail}
                                        onChange={(e) => setPerFirstEmail(e.target.value)}
                                        className="rounded-0"
                                        type="email"
                                        placeholder="Enter your email id"
                                        isValid={perFirstEmail.includes('@') ? true : false}
                                        isInvalid={
                                          emailValidator === "InValidEmail" ? true :
                                            perFirstEmail === " " ? true : false
                                        }
                                        size='sm'
                                        required
                                      />
                                    </Col>
                                    <Col className="col-4">
                                      <Form.Select
                                        defaultValue={perFirstEmailAltOrPri}
                                        onChange={(e) => setFirstPerEmailAltOrPri}
                                        className="rounded-0"
                                        type="select">
                                        <option selected disabled value=''>
                                          Choose your option
                                        </option>
                                        <option>Alternate</option>
                                        <option>Primary</option>
                                      </Form.Select>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col className="col-12">
                                  <Row className="g-2 form">
                                    <Col className="col-8">
                                      <Form.Control
                                        defaultValue={perSecondEmail}
                                        onChange={(e) => setPerSecondEmail(e.target.value)}
                                        type="email"
                                        className="rounded-0"
                                        isValid={
                                          perSecondEmail.includes('@') ? true : false
                                        }
                                        isInvalid={
                                          emailValidator === "InValidEmailSecond" ? true :
                                            perSecondEmail === " " ? true : false
                                        }
                                        placeholder="Enter your email id" />
                                    </Col>
                                    <Col className="col-4">
                                      <Form.Select
                                        defaultValue={perSecondEmailAltOrPri}
                                        onChange={(e) => setPerSecondEmailAltOrPri(e.target.value)}
                                        className="rounded-0"
                                        type="select">
                                        <option selected disabled value=''>
                                          Choose your option
                                        </option>
                                        <option>Alternate</option>
                                        <option>Primary</option>
                                      </Form.Select>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>


                            </Col>
                          </CardBody>
                          <CardFooter>
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-6 text-end">
                                  <Button
                                    className="btn-outline-primary
                                                     bg-white 
                                                      text-uppercase
                                                        text-primary 
                                                        font-size-12
                                                        fw-bold"
                                    onClick={CancelConatactDDetail}
                                  >
                                    Cancel
                                  </Button>
                                </Col>
                                <Col className="col-6">
                                  <Button

                                    className="font-size-12 text-uppercase fw-bold"
                                    onClick={ValidateEmail} type='submit'
                                    disabled={
                                      personalDetailMobilNo !== "" &&
                                        perFirstEmail !== "" &&
                                        perSecondEmail !== "" ? false : true
                                    }
                                    variant={
                                      personalDetailMobilNo !== "" &&
                                        perFirstEmail !== "" &&
                                        perSecondEmail !== "" ? BtnBlue : BtnSecondary
                                    }
                                  >
                                    Save
                                  </Button>
                                </Col>
                              </Row>
                            </Col>
                          </CardFooter>
                        </Card>

                      </>
                    )}




                    <AddressDetailsMobileView />


                    <Col className="col-12 border-bottom">
                      <Row className="g-2 form">
                        <Col className="col-10">
                          <FormLabel className="font-size-12 fw-bold Ri-text-head-mob">
                            Additional Details
                          </FormLabel>
                        </Col>
                        <Col className="col-2" onClick={PersonalAdditionalDetails}>
                          <FormLabel className="Ri-edit-mob-text-color font-size-12 fw-normal ">

                            Edit
                          </FormLabel>
                        </Col>
                      </Row>
                    </Col>
                    {isAdditionalDetails && (
                      <>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-3">
                              <FormLabel className="font-size-11 fw-normal Ri-text-head-mob">Gender</FormLabel>
                              <Col className="col-12">
                                <FormLabel className="font-size-13 fw-bold Ri-text-color-sub-menu ">
                                  Male
                                </FormLabel>
                              </Col>
                            </Col>
                            <Col className="col-4">
                              <FormLabel className="font-size-11 fw-normal Ri-text-head-mob">Date of Birth</FormLabel>
                              <Col className="col-12">
                                <FormLabel className="font-size-13 fw-bold Ri-text-color-sub-menu ">

                                  DD-MM-YYYY
                                </FormLabel>
                              </Col>
                            </Col>
                            <Col className="col-2">
                              <FormLabel className="font-size-11 fw-normal Ri-text-head-mob">Education</FormLabel>
                              <Col className="col-12">
                                <FormLabel className="font-size-13 fw-bold Ri-text-color-sub-menu ">
                                  MBA
                                </FormLabel>
                              </Col>
                            </Col>
                            <Col className="col-2">
                              <FormLabel className="font-size-11 fw-normal Ri-text-head-mob">
                                Profession</FormLabel>
                              <Col className="col-12">
                                <FormLabel className="font-size-13 fw-bold Ri-text-color-sub-menu ">
                                  Service
                                </FormLabel>
                              </Col>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="col-12">
                          <Row className="col-12">
                            <Col className="col-4">
                              <FormLabel>Nationality</FormLabel>
                              <Col className="col-12">Indian</Col>
                            </Col>
                            <Col className="col-4 px-0">
                              <FormLabel>Social category</FormLabel>
                              <Col className="col-12">Other Bahujan</Col>
                            </Col>
                            <Col className="col-4 px-0">
                              <FormLabel>Religion practiced</FormLabel>
                              <Col className="col-12">Atheist</Col>
                            </Col>
                          </Row>
                        </Col>
                      </>
                    )}
                    {!isAdditionalDetails && (
                      <>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-3">
                              <FormLabel>Gender</FormLabel>
                              <Col className="col-12">
                                <Input type="select">
                                  <option>Choose your option</option>
                                  <option>Mr.</option>
                                  <option>Mrs.</option>
                                </Input>
                              </Col>
                            </Col>
                            <Col className="col-3">
                              <FormLabel>Date of Birth</FormLabel>
                              <Col className="col-12">
                                <Input type="date" />
                              </Col>
                            </Col>
                            <Col className="col-3">
                              <FormLabel>Education</FormLabel>
                              <Col className="col-12">
                                <Input type="select">
                                  <option>Choose your option</option>
                                  <option>MBA</option>
                                  <option>Msc.</option>
                                  <option>Bsc.</option>
                                </Input>
                              </Col>
                            </Col>
                            <Col className="col-3">
                              <FormLabel>Profession</FormLabel>
                              <Col className="col-12">
                                <Input type="select">
                                  <option>Choose your option</option>
                                  <option>Service</option>
                                  <option>Business</option>
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
                                <Input type="select">
                                  <option>Choose your option</option>
                                  <option>India</option>
                                  <option>Japan</option>
                                </Input>
                              </Col>
                            </Col>
                            <Col className="col-4 ps-0 pe-0">
                              <FormLabel>Social Category</FormLabel>
                              <Col className="col-12">
                                <Input type="select">
                                  <option>Choose your option</option>
                                  <option>Other Bahujan</option>
                                  <option>Sc</option>
                                </Input>
                              </Col>
                            </Col>
                            <Col className="col-4 px-py-0">
                              <FormLabel>Religion practice</FormLabel>
                              <Input type="select">
                                <option>Choose your option</option>
                                <option>Atheist</option>
                                <option>Daily</option>
                              </Input>
                            </Col>
                          </Row>
                        </Col>
                      </>
                    )}
                    <Col className="col-12 border-bottom">
                      <Row className="g-2 form">
                        <Col className="col-10">
                          <FormLabel>Education Details</FormLabel>
                        </Col>
                        <Col className="col-2" onClick={PersonalEducationalDetails}>
                          Edit
                        </Col>
                      </Row>
                    </Col>
                    {isEducation && (
                      <>
                        <Col className="form-check  col-12">
                          <Input type="checkbox" />
                          <FormLabel>I am Student</FormLabel>
                        </Col>

                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-6">
                              <FormLabel>Education level</FormLabel>
                            </Col>
                            <Col className="col-6">
                              <FormLabel>School/Board/University</FormLabel>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-6">10th</Col>
                            <Col className="col-6">
                              Milind Higher Secondary School, Nagpur, Maharashtra
                            </Col>
                          </Row>
                        </Col>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-6">12th</Col>
                            <Col className="col-6">
                              Milind Higher Secondary School, Nagpur, Maharashtra
                            </Col>
                          </Row>
                        </Col>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-6">B.E(Mechanical)</Col>
                            <Col className="col-6">NIT, Nagpur, Maharashtra</Col>
                          </Row>
                        </Col>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-6">MBA(Finace)</Col>
                            <Col className="col-6">
                              Milind Higher Secondary School, Nagpur, Maharashtra
                            </Col>
                          </Row>
                        </Col>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-6">PhD(Finance)</Col>
                            <Col className="col-6">
                              <Row className="g-2 form">
                                <Col className="col-12">
                                  Milind Higher Secondary School, Nagpur, Maharashtra
                                </Col>
                                <Col className="col-12">Currentlypursuing</Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </>
                    )}

                    {!isEducation && (
                      <>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-6">
                              <Input
                                type="text"
                                placeholder="Enter your education "
                              />
                            </Col>
                            <Col className="col-6">
                              <Input
                                type="textarea"
                                placeholder="Enter the address "
                              />
                            </Col>
                          </Row>
                        </Col>
                      </>
                    )}
                    <Col className="col-12 border-bottom">
                      <Row className="g-2 form">
                        <Col className="col-10">
                          <FormLabel>Job Details</FormLabel>
                        </Col>
                        <Col className="col-2" onClick={PersonalJobDetails}>
                          Edit
                        </Col>
                      </Row>
                    </Col>
                    {isJobDetails && (
                      <>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-4">
                              <FormLabel>Occupation</FormLabel>
                              <Col className="col-12">Service</Col>
                            </Col>
                            <Col className="col-4">
                              <FormLabel>Company/Business name</FormLabel>
                              <Col className="col-12">
                                Informatica Business Solutions Private Limited
                              </Col>
                            </Col>
                            <Col className="col-4">
                              <FormLabel>Designation</FormLabel>
                              <Col className="col-12">Senior Software Enginee</Col>
                            </Col>
                          </Row>
                        </Col>
                      </>
                    )}
                    {!isJobDetails && (
                      <>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-4">
                              <FormLabel>Occupation</FormLabel>
                              <Col className="col-12">
                                <Input type="select">
                                  <option>Choose your option</option>
                                  <option>Service</option>
                                  <option>Business</option>
                                </Input>
                              </Col>
                            </Col>
                            <Col className="col-4">
                              <FormLabel>Company/Business name</FormLabel>
                              <Col className="col-12">
                                <Input
                                  type="textarea"
                                  placeholder="Enter the company/Business name"
                                />
                              </Col>
                            </Col>
                            <Col className="col-4">
                              <FormLabel>Designation</FormLabel>
                              <Input
                                type="text"
                                placeholder="Enter your designation"
                              />
                            </Col>
                          </Row>
                        </Col>
                      </>
                    )}
                    <Col className="col-12 border-bottom">
                      <Row className="g-2 form">
                        <Col className="col-10">
                          <FormLabel>Diversity Details</FormLabel>
                        </Col>
                        <Col className="col-2" onClick={PersonalDiversityDetails}>
                          Edit
                        </Col>
                      </Row>
                    </Col>
                    {isDiversityDetails && (
                      <>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-6">
                              <FormLabel>Social Category</FormLabel>
                              <Col className="col-12">Other Bahujan</Col>
                            </Col>
                            <Col className="col-6">
                              <FormLabel>Religion practiced</FormLabel>
                              <Col className="col-12">Atheist</Col>
                            </Col>
                          </Row>
                        </Col>
                      </>
                    )}

                    {!isDiversityDetails && (
                      <>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-6">
                              <FormLabel>Social Category</FormLabel>
                              <Input type="select">
                                <option>Choose your option</option>
                                <option>Other Bahujan</option>
                                <option>SC</option>
                              </Input>
                            </Col>
                            <Col className="col-6">
                              <FormLabel>Religion practiced</FormLabel>
                              <Input type="select">
                                <option>choose your option</option>
                                <option>Atheist</option>
                                <option>Daily</option>
                              </Input>
                            </Col>
                          </Row>
                        </Col>
                      </>
                    )}
                  </Row>
                </CardBody>
              </Row>
            </Card>

          </Col>
        </Col>
      </Col>
      <Col className="col-12 p-3">&nbsp;</Col>
    </>
  );
};
export default MobilePersonalDetails;

// import React, { useState } from 'react'
// import { Button, Modal, Card, Col, Form } from 'react-bootstrap';
// import { Input, Row, CardBody } from 'reactstrap';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { InputGroup } from 'react-bootstrap';
// const MobilePersonalDetails = (props) => {
//     const [lgShowEdit1, setLgShowEdit1] = useState(false);
//     const [lgShowEdit2, setLgShowEdit2] = useState(false);
//     const [lgShowEdit3, setLgShowEdit3] = useState(false);
//     const [lgShowEdit4, setLgShowEdit4] = useState(false);
//     const [lgShowEdit5, setLgShowEdit5] = useState(false);
//     const [lgShowEdit6, setLgShowEdit6] = useState(false);
//     const [lgShowEdit7, setLgShowEdit7] = useState(false);

//     return (
//         <>
//             <Col sm="12" className='small'>
//                 <Form>
//                     <Card className='border-0 vh-100 overflow-scroll overflow-hidden '>
//                         <CardBody>
//                             <Col className='p-3'>
//                                 <h5>Personal Details a</h5>
//                             </Col>
//                             <Col sm='12' className="border-bottom p-0">
//                                 <Row>
//                                     <Col sm="11" className=' figure-caption form-text'>Name</Col>
//                                     <Col className='float-end text-primary p-0 '
//                                         sm="1"
//                                         role="button"
//                                         onClick={() => setLgShowEdit1(true)}
//                                     ><small>Edit</small>
//                                     </Col>
//                                 </Row>
//                             </Col>
//                             <Col className='bg-light form-text fs-6'>
//                                 <Row className='p-4 '>
//                                     <Col sm='12'>
//                                         <b>Mr.Praful Bhagat a</b>
//                                     </Col>
//                                 </Row>
//                             </Col>

//                             <Col sm='12' className="p-2 border-bottom p-0">
//                                 <Row>
//                                     <Col sm="11" >
//                                         <small>Contact Details</small>
//                                     </Col>
//                                     <Col className='float-end text-primary'
//                                         sm="1"
//                                         role="button"
//                                         onClick={() => setLgShowEdit2(true)}
//                                     ><small>Edit</small>
//                                     </Col>
//                                 </Row>
//                                 <Col sm='12' className='p-2'>
//                                     <Row>
//                                         <Col sm='4'><small>Mobile Number</small></Col>
//                                         <Col sm='4'><small>Email</small></Col>
//                                         <Col sm='4'></Col>
//                                     </Row>
//                                 </Col>
//                                 <Col sm='12' className='p-2 '>
//                                     <Row>
//                                         <Col sm='4'>
//                                             <b>+91 9586984526</b> &nbsp;
//                                             <sub>Primary</sub><br />
//                                             <Input type='checkbox' /> <small className='text-start ps-0 pt-1 pb-1'>  whatsapp number too</small>

//                                         </Col>
//                                         <Col sm='4'>
//                                             <b>prafullbhagat@gmail.com</b> <br />
//                                             <b>prafullbhagat@gmail.com</b>
//                                         </Col>
//                                         <Col sm='4'>
//                                             <sub>Primary   </sub><br />
//                                             <sub>alternate</sub>
//                                         </Col>
//                                     </Row>
//                                 </Col>
//                             </Col>
//                             &nbsp;
//                             <Col sm='12'>
//                                 <Row className=' border-bottom p-0' >
//                                     <Col sm='11'>
//                                         <h6>Address Details</h6>
//                                     </Col>
//                                     <Col className=' float-end text-primary'
//                                         sm="1"
//                                         role="button"
//                                         onClick={() => setLgShowEdit3(true)}
//                                     ><small>Edit</small></Col>
//                                 </Row>
//                             </Col>
//                             <Col sm='12' className='p-2'>
//                                 <Row>
//                                     <Col sm='4'>Present Address</Col>
//                                     <Col sm='4'>Permanant Address</Col>
//                                     <Col sm='4'></Col>
//                                 </Row>
//                             </Col>
//                             <Col sm='12' className='p-2'>
//                                 <Row>
//                                     <Col sm='4'>
//                                         <b>
//                                             Flat no. 1891<br />
//                                             Bharat Bhavan<br />
//                                             Near Victory Tower<br />
//                                             14 Main Road, 02nd Sector,<br />
//                                             Vijay Nagar, Bangalore, Karnataka<br />
//                                             560100 <br />
//                                         </b>
//                                     </Col>
//                                     <Col sm='4'>
//                                         <b>
//                                             Flat no. 1891<br />
//                                             Bharat Bhavan<br />
//                                             Near Victory Tower<br />
//                                             14 Main Road, 02nd Sector,<br />
//                                             Vijay Nagar, Bangalore, Karnataka<br />
//                                             560100<br />
//                                         </b>
//                                     </Col>
//                                     <Col sm='4'></Col>
//                                 </Row>
//                             </Col>
//                             &nbsp;
//                             <Col>
//                                 <Row>
//                                     <Col sm='11 ' className='border-bottom p-2'>
//                                         <h6>Additional Details</h6>
//                                     </Col>
//                                     <Col className='float-end text-primary'
//                                         sm="1"
//                                         role="button"
//                                         onClick={() => setLgShowEdit4(true)}
//                                     ><small>Edit</small></Col>
//                                 </Row>
//                             </Col>
//                             <Col sm='12' className='p-0'>
//                                 <Row>
//                                     <Col sm='4'>Gender</Col>
//                                     <Col sm='4'>Date of Birth</Col>
//                                     <Col sm='4'></Col>
//                                 </Row>
//                             </Col>
//                             <Col sm='12' className='p-1'>
//                                 <Row>
//                                     <Col sm='4'>
//                                         <b>Male</b>
//                                     </Col>
//                                     <Col sm='4'>
//                                         <b>DD-MM-YYYY</b>
//                                     </Col>
//                                     <Col sm='4'></Col>
//                                 </Row>
//                             </Col>
//                             &nbsp;
//                             <Col>
//                                 <Row>
//                                     <Col sm='11' className='border-bottom p-0'>
//                                         <h6>Educational Details</h6>
//                                     </Col>
//                                     <Col className='float-end text-primary'
//                                         sm="1"
//                                         role="button"
//                                         onClick={() => setLgShowEdit5(true)}
//                                     ><small>Edit</small></Col>
//                                     <Col sm="1">&nbsp;</Col>
//                                     <Col sm="1" className="p-0"></Col>
//                                 </Row>
//                                 <input className="p-0 form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
//                                 <label className="p-0 form-check-label" for="flexCheckChecked"></label><b>I am Student</b>
//                             </Col>
//                             <Col className='p-0'>
//                                 <Row className='p-2'>
//                                     <Col>Educational Level</Col>
//                                     <Col>School/Board/Education</Col>
//                                 </Row>
//                             </Col>
//                             <Col className='p-2'>
//                                 <Row>
//                                     <Col> <b>10th</b> </Col>
//                                     <Col><b>Milind Higher Secondary School, Nagpur, Maharashtra</b></Col>
//                                 </Row>
//                                 <Row>
//                                     <Col> <b>12th</b> </Col>
//                                     <Col><b>Milind Higher Secondary School, Nagpur, Maharashtra</b></Col>
//                                 </Row>
//                                 <Row>
//                                     <Col> <b>B. E. (Mechanical)</b> </Col>
//                                     <Col><b>NIT, Nagpur, Maharashtra</b></Col>
//                                 </Row>
//                                 <Row>
//                                     <Col> <b>MBA (Finance)</b> </Col>
//                                     <Col><b>Milind University, Nagpur, Maharashtra</b></Col>
//                                 </Row>
//                                 <Row>
//                                     <Col> <b>PhD (Finance)</b> </Col>
//                                     <Col><b>Milind University, Nagpur, Maharashtra</b></Col>
//                                 </Row>
//                             </Col>
//                             &nbsp;
//                             <Col>
//                                 <Row className='p-0 border-bottom'>
//                                     <Col sm='11'>
//                                         <h6>Job Details</h6>
//                                     </Col>
//                                     <Col className='p-1 float-end text-primary small'
//                                         sm="1"
//                                         role="button"
//                                         onClick={() => setLgShowEdit6(true)}
//                                     >Edit</Col>
//                                     <Col sm="1">&nbsp;</Col>
//                                     <Col sm="1" className="p-0"></Col>
//                                 </Row>
//                             </Col>
//                             <Col className='p-2'>
//                                 <Row>
//                                     <Col><small>Occupation</small></Col>
//                                     <Col><small>Company/Business Name</small></Col>
//                                     <Col><small>Designation</small></Col>
//                                 </Row>
//                             </Col>
//                             <Col className='p-2'>
//                                 <Row>
//                                     <Col><small> <b>Service</b> </small></Col>
//                                     <Col><small>Informatica Business Solutions Private Limited</small></Col>
//                                     <Col><small>Senior Software Engineer</small></Col>
//                                 </Row>
//                                 <Row>
//                                     <Col> <small><b>Business</b></small> </Col>
//                                     <Col><small>Bharat Supermarket</small></Col>
//                                     <Col><small>Owner</small></Col>
//                                 </Row>
//                                 <Row>
//                                     <Col> <small><b>Freelancer</b></small> </Col>
//                                     <Col><small>Optimizer extensions</small></Col>
//                                     <Col><small>Developer</small></Col>
//                                 </Row>
//                                 &nbsp;
//                                 <Row className='p-2 small'>
//                                     <Col> Area of work </Col>
//                                 </Row>
//                                 <Row>
//                                     <Col className='small'><b>Homemaker</b></Col>
//                                     <Col className='small'>
//                                         “Homemaking is a passion you can pass on from generation to generation.”<br /> ― Elizabeth George
//                                     </Col>
//                                 </Row>
//                                 <Row>
//                                     <Col className='p-2 small'>
//                                         <Row >
//                                             <Col sm='11' className='border-bottom'>
//                                                 <h6>Diversity Details</h6>
//                                             </Col>
//                                             <Col className='float-end text-primary'
//                                                 sm="1"
//                                                 role="button"
//                                                 onClick={() => setLgShowEdit7(true)}
//                                             >Edit</Col>
//                                             <Col sm="1">&nbsp;</Col>
//                                             <Col sm="1" className="p-0"></Col>
//                                         </Row>
//                                     </Col>
//                                 </Row>
//                                 <Row>
//                                     <Col>Social Category</Col>
//                                     <Col>Religion practiced</Col>
//                                 </Row>
//                                 <Row>
//                                     <Col><b>Other Bahujan</b></Col>
//                                     <Col><b>Atheist</b></Col>
//                                 </Row>
//                             </Col>
//                         </CardBody>
//                     </Card>
//                 </Form>
//             </Col>
//             <Col sm="12" className='small'>
//                 <Modal
//                     size="lg"
//                     show={lgShowEdit1}
//                     onHide={() => setLgShowEdit1(false)}
//                     aria-labelledby="example-modal-sizes-title-lg"
//                 >
//                     <Modal.Body >
//                         <Col className="p-2">
//                             <Card className="bg-light small">
//                                 <Modal.Header closeButton >
//                                     <Modal.Title id="example-modal-sizes-title-lg bg-light">
//                                         Name
//                                     </Modal.Title>
//                                 </Modal.Header>
//                                 <Col sm='12' className="p-1">
//                                     <Row>
//                                         <Col sm='4' className="p-3">
//                                             <Col sm='12' className='p-2'>
//                                                 <Col sm='12' className="p-0">Title<sup className='text-danger'> *</sup></Col>
//                                                 <Col sm='12' className='p-0'> <Input className='rounded-0' type='select' placeholder="Mr." /></Col>
//                                             </Col>
//                                             {/* <Col lg="2" className='p-0 ps-2'>

//                                                 <Col xs='12' className='p-2 pt-1 pb-1'>
//                                                     <Col>
//                                                         <small>Title</small>
//                                                         <sup className='text-danger'> *</sup>
//                                                     </Col>
//                                                 </Col>
//                                                 <Col lg="12" className="rounded-0">
//                                                     <Input
//                                                         name="iAm"
//                                                         type="select"
//                                                         defaultValue={iAm}
//                                                         onChange={handleFormData("iAm")}
//                                                         className="rounded-0"
//                                                     >
//                                                         <option>Mr</option>
//                                                         <option>Mrs</option>
//                                                     </Input>
//                                                 </Col>
//                                             </Col> */}
//                                             <Col sm='12' className="p-0">
//                                             </Col>
//                                         </Col>
//                                         <Col sm='4' className="p-3">
//                                             <Col sm='12' className='p-2'>
//                                                 <Col sm='12' className="p-0 small">First Name<sup className='text-danger'> *</sup></Col>
//                                                 <Col sm='12' className="p-0"><Input className='rounded-0' placeholder="First Name" /></Col>
//                                             </Col>
//                                         </Col>
//                                         <Col sm='4' className="p-3">
//                                             <Col sm='12' className="p-0">Last Name<sup className='text-danger'> *</sup></Col>
//                                             <Col sm='12' className="p-0"><Input className='rounded-0' placeholder="Last Name" /></Col>
//                                         </Col>
//                                     </Row>
//                                 </Col>
//                                 <Col sm='12' className='p-0'>
//                                     <Row>
//                                         <Col sm='3'>&nbsp;</Col>
//                                         <Col sm='3' className="text-end"><Button>Cancel</Button></Col>
//                                         <Col sm='3' className="text-start"><Button>Save</Button></Col>
//                                         <Col sm='3'>&nbsp;</Col>
//                                         &nbsp;
//                                     </Row>
//                                 </Col>
//                             </Card>
//                         </Col>
//                     </Modal.Body>
//                 </Modal>
//             </Col>
//             <Col>
//                 <Modal
//                     size="lg"
//                     show={lgShowEdit2}
//                     onHide={() => setLgShowEdit2(false)}
//                     aria-labelledby="example-modal-sizes-title-lg"
//                 >
//                     <Modal.Body>
//                         <Col className="p-2">
//                             <Card className="bg-light small">
//                                 <Modal.Header closeButton >
//                                     <Modal.Title id="example-modal-sizes-title-lg">
//                                         <small>Contact Details</small>
//                                     </Modal.Title>
//                                 </Modal.Header>
//                                 <Col sm='12' className="p-2">
//                                     <Row>
//                                         <Col sm='6' className="p-2">
//                                             <Col sm='12'>
//                                                 <Row>
//                                                     <Col sm='9' className='m-0 small'>My mobile number <sup className='text-danger'> *</sup></Col>
//                                                     <Col sm='3' className='m-0 small'><small>Primary</small></Col>
//                                                 </Row>
//                                                 <Col sm='11' className="m-0 small">
//                                                     <InputGroup className="mb-0">
//                                                         <DropdownButton
//                                                             type="number"
//                                                             variant="outline-dark"
//                                                             title="+91"
//                                                             id="input-group-dropdown-1"
//                                                         >
//                                                             <Dropdown.Item href="#">+92</Dropdown.Item>
//                                                             <Dropdown.Item href="#">+93</Dropdown.Item>
//                                                             <Dropdown.Item href="#">+94</Dropdown.Item>
//                                                             <Dropdown.Item href="#">+95</Dropdown.Item>
//                                                         </DropdownButton>
//                                                         <Form.Control aria-label=" "
//                                                             placeholder='Enter your mobile number'
//                                                             className='rounded-0'
//                                                         />
//                                                     </InputGroup>
//                                                 </Col>
//                                                 <Col sm='12' className='m-0'>
//                                                     <Input type='checkbox' /> <small className='text-start'>  whatsapp number too</small>
//                                                 </Col>
//                                                 &nbsp;
//                                             </Col>
//                                             &nbsp;
//                                             <Col sm='12' className='p-0'>
//                                                 <Row>
//                                                     <Col sm='9' className='m-0 small'>My mobile number <sup className='text-danger'> *</sup></Col>
//                                                     <Col sm='3' className='m-0 small'><small>Alternate</small></Col>
//                                                 </Row>
//                                                 <Col sm='11' className="m-0 small">
//                                                     <InputGroup className="mb-3">
//                                                         <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
//                                                         <Form.Control
//                                                             className='rounded-0'
//                                                             placeholder="9876543210"
//                                                             aria-label="Username"
//                                                             aria-describedby="basic-addon1"
//                                                         />
//                                                     </InputGroup></Col>
//                                             </Col>
//                                         </Col>
//                                         <Col sm='6' className='p-2'>
//                                             <Col sm='12'>
//                                                 <Row>
//                                                     <Col sm='10' className='m-0 small'>My email ID<sup className='text-danger'> *</sup></Col>
//                                                     <Col sm='2' className='m-0 small'><small>Primary</small></Col>
//                                                 </Row>
//                                                 <Col sm='12' className="m-0 small"><Input className='rounded-0' placeholder="Enter your email id here" /></Col>
//                                                 &nbsp;
//                                             </Col>
//                                             &nbsp;
//                                             <Col sm='12'>
//                                                 &nbsp;
//                                                 <Row>
//                                                     <Col sm='10' className='m-0 small'>My alternate Email ID</Col>
//                                                     <Col sm='2' className='m-0 small'><small>Primary</small></Col>
//                                                 </Row>
//                                                 <Col sm='12' className="m-0 small"><Input className='rounded-0' placeholder="Enter your email id here" /></Col>
//                                                 &nbsp;
//                                             </Col>
//                                         </Col>
//                                     </Row>
//                                 </Col>
//                                 {/* <Col sm='12' className='p-0'>
//                                     <Row>
//                                         <Col sm='6' className="p-3">
//                                             <Col sm='12'>
//                                                 <Row>
//                                                     <Col sm='9' className='m-0 small'>Email ID <sup className='text-danger'> *</sup></Col>
//                                                     <Col sm='3' className='m-0'><small>Primary</small></Col>
//                                                 </Row>
//                                                 <Col sm='12' className="m-0 small"><Input className='rounded-0' placeholder="Enter your email id here" /></Col>
//                                                 &nbsp;
//                                             </Col>
//                                             &nbsp;
//                                             <Col sm='12'>
//                                                 <Row>
//                                                     <Col sm='9' className='m-0'>My alternate email ID</Col>
//                                                     <Col sm='3' className='m-0'><small>Alternate</small></Col>
//                                                 </Row>
//                                                 <Col sm='12' className="m-0 small"><Input className='rounded-0' placeholder="Enter your email id here" /></Col>
//                                             </Col>
//                                         </Col>
//                                     </Row>
//                                 </Col> */}
//                                 <Col sm='12'>
//                                     <Row>
//                                         <Col sm='3'>&nbsp;</Col>
//                                         <Col sm='3' className="text-end"><Button>Cancel</Button></Col>
//                                         <Col sm='3' className="text-start"><Button>Save</Button></Col>
//                                         <Col sm='3'>&nbsp;</Col>
//                                         &nbsp;
//                                     </Row>
//                                 </Col>
//                             </Card>
//                         </Col >
//                     </Modal.Body >
//                 </Modal >
//             </Col >
//             <Col>
//                 <Modal
//                     size="lg"
//                     show={lgShowEdit3}
//                     onHide={() => setLgShowEdit3(false)}
//                     aria-labelledby="example-modal-sizes-title-lg"
//                 >

//                     <Modal.Body>
//                         <Col className="p-2">
//                             <Card className="bg-light">
//                                 <Modal.Header closeButton>
//                                     <Modal.Title id="example-modal-sizes-title-lg">
//                                         Address Details
//                                     </Modal.Title>
//                                 </Modal.Header>
//                                 <Col sm='12' className="p-2 small">
//                                     <Row>
//                                         <Col sm='6' className="p-2">
//                                             <Col sm='12' className=" m-0"><b>Present Address</b></Col>&nbsp;
//                                             <Col sm='12'>House/Flat No./Building <sup className='text-danger'> *</sup></Col>
//                                             <Col sm='11' className=" m-0"><Input className='rounded-0' placeholder="House/Flat No./Building" /></Col>
//                                             <Col sm='12'>Street Details <sup className='text-danger'> *</sup></Col>
//                                             <Col sm='11' className="m-0"><Input className='rounded-0' placeholder="Street Details" /></Col>
//                                             <Col sm='12'>Landmark <sup className='text-danger'> *</sup></Col>
//                                             <Col sm='11' className="m-0"><Input className='rounded-0' placeholder="Landmark" /></Col>
//                                             <Col sm='12'>
//                                                 <Row>
//                                                     <Col sm='6'>
//                                                         <Col sm='12'>Country <sup className='text-danger'> *</sup></Col>
//                                                         <Col sm='10' className="m-0">
//                                                             <Input className='rounded-0 small' type='select' placeholder="Country">
//                                                                 <option className='small'>Select Country</option>
//                                                                 <option>1</option>
//                                                                 <option>2</option>
//                                                                 <option>3</option>
//                                                                 <option>4</option>
//                                                             </Input>
//                                                         </Col>
//                                                         <Col sm='12'>City <sup className='text-danger'> *</sup></Col>
//                                                         <Col sm='10' className="m-0">
//                                                             <Input className='rounded-0' type='select' placeholder="City">
//                                                                 <option>Select City</option>
//                                                                 <option>1</option>
//                                                                 <option>2</option>
//                                                                 <option>3</option>
//                                                             </Input>
//                                                         </Col>
//                                                         <Col sm='12'>Taluka <sup className='text-danger'> *</sup></Col>
//                                                         <Col sm='10' className="m-0">
//                                                             <Input className='rounded-0' type='select' placeholder="Taluka">
//                                                                 <option>Select Taluka</option>
//                                                                 <option>1</option>
//                                                                 <option>2</option>
//                                                                 <option>3</option>
//                                                             </Input>
//                                                         </Col>
//                                                     </Col>
//                                                     <Col sm='6'>
//                                                         <Col sm='12'>State <sup className='text-danger'> *</sup></Col>
//                                                         <Col sm='10' className="m-0">
//                                                             <Input className='rounded-0' type='select' placeholder="State">
//                                                                 <option>Select State</option>
//                                                                 <option>1</option>
//                                                                 <option>2</option>
//                                                                 <option>3</option>
//                                                                 <option>4</option>
//                                                             </Input>
//                                                         </Col>
//                                                         <Col sm='12'>District <sup className='text-danger'> *</sup></Col>
//                                                         <Col sm='10' className="m-0">
//                                                             <Input className='rounded-0' type='select' placeholder="City">
//                                                                 <option>Select City</option>
//                                                                 <option>1</option>
//                                                                 <option>2</option>
//                                                                 <option>3</option>
//                                                                 <option>4</option>
//                                                             </Input>
//                                                         </Col>
//                                                         <Col sm='12'>Pin/Zip Code <sup className='text-danger'> *</sup></Col>
//                                                         <Col sm='9' className="m-0">
//                                                             <Input className='rounded-0' type='select' placeholder="Pincode">
//                                                                 <option>Select Pincode</option>
//                                                                 <option>1</option>
//                                                                 <option>2</option>
//                                                                 <option>3</option>
//                                                             </Input>
//                                                         </Col>
//                                                     </Col>
//                                                 </Row>
//                                             </Col>
//                                         </Col>
//                                         <Col sm='6' className="p-0">
//                                             <Col sm='12' className="m-3"><b>Present Address</b></Col>&nbsp;
//                                             <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
//                                             <label className="form-check-label" for="defaultCheck1">&nbsp;
//                                                 <b>Same as Present Address</b>
//                                             </label>&nbsp;
//                                             <Col sm='11' className="m-0"><Input className='rounded-0' placeholder="House/Flat No./Building" /></Col>
//                                             <Col sm='12'>Street Details <sup className='text-danger'> *</sup></Col>
//                                             <Col sm='11' className="m-0"><Input className='rounded-0' placeholder="Street Details" /></Col>
//                                             <Col sm='12'>Landmark <sup className='text-danger'> *</sup></Col>
//                                             <Col sm='11' className="m-0"><Input className='rounded-0' placeholder="Street Details" /></Col>
//                                             <Col sm='12'>
//                                                 <Row>
//                                                     <Col sm='6'>
//                                                         <Col sm='12'>Country <sup className='text-danger'> *</sup></Col>
//                                                         <Col sm='10' className="m-0">
//                                                             <Input className='rounded-0 small' type='select' placeholder="Country">
//                                                                 <option>Select Country</option>
//                                                                 <option>1</option>
//                                                                 <option>2</option>
//                                                                 <option>3</option>
//                                                             </Input>
//                                                         </Col>
//                                                         <Col sm='12'>City <sup className='text-danger'> *</sup></Col>
//                                                         <Col sm='10' className="m-0">
//                                                             <Input className='rounded-0' type='select' placeholder="City">
//                                                                 <option>Select City</option>
//                                                                 <option>1</option>
//                                                                 <option>2</option>
//                                                                 <option>3</option>
//                                                             </Input>
//                                                         </Col>
//                                                         <Col sm='12'>Taluka <sup className='text-danger'> *</sup></Col>
//                                                         <Col sm='10' className="m-0">
//                                                             <Input className='rounded-0' type='select' placeholder="Taluka">
//                                                                 <option>Select Taluka</option>
//                                                                 <option>1</option>
//                                                                 <option>2</option>
//                                                                 <option>3</option>
//                                                             </Input>
//                                                         </Col>
//                                                     </Col>
//                                                     <Col sm='6'>
//                                                         <Col sm='12'>State <sup className='text-danger'> *</sup></Col>
//                                                         <Col sm='10' className="m-0">
//                                                             <Input className='rounded-0' type='select' placeholder="State">
//                                                                 <option>Select State</option>
//                                                                 <option>1</option>
//                                                                 <option>2</option>
//                                                                 <option>3</option>
//                                                                 <option>4</option>
//                                                             </Input>
//                                                         </Col>
//                                                         <Col sm='12'>District <sup className='text-danger'> *</sup></Col>
//                                                         <Col sm='10' className="m-0">
//                                                             <Input className='rounded-0' type='select' placeholder="City">
//                                                                 <option>Select District</option>
//                                                                 <option>1</option>
//                                                                 <option>2</option>
//                                                                 <option>3</option>
//                                                                 <option>4</option>
//                                                             </Input>
//                                                         </Col>
//                                                         <Col sm='12'>Pin/Zip Code <sup className='text-danger'> *</sup></Col>
//                                                         <Col sm='9' className="m-0">
//                                                             <Input className='rounded-0' type='select' placeholder="Pincode">
//                                                                 <option>Select Pincode</option>
//                                                                 <option>1</option>
//                                                                 <option>2</option>
//                                                                 <option>3</option>
//                                                             </Input>
//                                                         </Col>
//                                                     </Col>
//                                                 </Row>
//                                             </Col>
//                                         </Col>
//                                     </Row>
//                                 </Col>
//                                 <Col sm='12'>
//                                     <Row>
//                                         <Col sm='3'>&nbsp;</Col>
//                                         <Col sm='3' className="text-end"><Button>Cancel</Button></Col>
//                                         <Col sm='3' className="text-start"><Button>Save</Button></Col>
//                                         <Col sm='3'>&nbsp;</Col>
//                                     </Row>
//                                 </Col>
//                                 &nbsp;
//                             </Card>
//                         </Col>
//                     </Modal.Body>
//                 </Modal>
//             </Col>
//             <Col>
//                 <Modal
//                     size="lg"
//                     show={lgShowEdit4}
//                     onHide={() => setLgShowEdit4(false)}
//                     aria-labelledby="example-modal-sizes-title-lg"
//                 >

//                     <Modal.Body >
//                         <Col sm="12" className="p-3 border-bottom">
//                             <Col className="p-1">
//                                 <Card className="bg-light">
//                                     <Modal.Header >
//                                         <Modal.Title id="example-modal-sizes-title-lg">
//                                             Additional Details
//                                         </Modal.Title>
//                                     </Modal.Header>
//                                     <Col sm='12' className="p-2">
//                                         <Row>
//                                             <Col sm='4' className="p-2">
//                                                 <Col sm='6' className="m-0 p-0">Gender<sup className='text-danger'> *</sup></Col>
//                                                 <Col sm='12' className="m-0 p-0">
//                                                     <Input className='rounded-0' type='select' placeholder="Choose your option" >
//                                                         <option>Choose your option</option>
//                                                         <option>male</option>
//                                                         <option>female</option>
//                                                         <option>Other</option>
//                                                     </Input>
//                                                 </Col>
//                                             </Col>

//                                             <Col sm='4' className="p-2">
//                                                 <Col sm='12' className="m-0">Date of Birth<sup className='text-danger'> *</sup></Col>
//                                                 <Col sm='12' className="m-0"><Input className='rounded-0' type='date' placeholder=" DD-MM-YYYY *" /></Col>
//                                             </Col>
//                                         </Row>
//                                     </Col>
//                                     <Col sm='12'>
//                                         <Row>
//                                             <Col sm='3'>&nbsp;</Col>
//                                             <Col sm='3' className="text-end"><Button>Cancel</Button></Col>
//                                             <Col sm='3' className="text-start"><Button>Save</Button></Col>
//                                             <Col sm='3'>&nbsp;</Col>
//                                         </Row>
//                                     </Col>
//                                     &nbsp;
//                                 </Card>
//                             </Col>
//                         </Col>
//                     </Modal.Body>
//                 </Modal>
//             </Col>
//             <Col>
//                 <Modal
//                     size="lg"
//                     show={lgShowEdit5}
//                     onHide={() => setLgShowEdit5(false)}
//                     aria-labelledby="example-modal-sizes-title-lg"
//                 >
//                     <Modal.Header className='bg-light' closeButton>
//                         <Modal.Title id="example-modal-sizes-title-lg">
//                             Educational Details
//                         </Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body className="bg-light">
//                         <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
//                         <label className="form-check-label" for="defaultCheck1">
//                             <b> I am Student</b>
//                         </label>
//                         <Col className="p-2">
//                             <Card className="bg-white rounded-0">
//                                 <Col sm='12' className="p-2" closeButton>
//                                     <input className="form-check-input p-1" type="checkbox" value="" id="defaultCheck1" />
//                                     <label className="form-check-label" for="defaultCheck1">
//                                         Currently Persuing
//                                     </label>
//                                     <Row>
//                                         <Col sm='4' className="p-1">
//                                             <Col sm='12' className="p-1">Education </Col>
//                                             <Col sm='12' className="p-1">
//                                                 <Input className='rounded-0' type='select' placeholder="Education">
//                                                     <option>Choose your option</option>
//                                                     <option>B.A</option>
//                                                     <option>B.Sc.</option>
//                                                     <option>B.E.</option>
//                                                     <option>B.Tech.</option>
//                                                 </Input>
//                                             </Col>
//                                         </Col>
//                                         <Col sm='4' className="p-1">
//                                             <Col sm='12' className="p-1">University/School/Board </Col>
//                                             <Col sm='12' className="p-1"><Input className='rounded-0' placeholder="University/School/Board" /></Col>
//                                         </Col>
//                                         <Col sm='4' className="p-1">
//                                             <Col sm='12' className="p-1">Year of passing </Col>
//                                             <Col sm='12' className="p-1"><Input className='rounded-0' type='date' placeholder="DD-MM-YYYY" /></Col>
//                                         </Col>
//                                     </Row>
//                                     <Row>
//                                         <Col sm='3' className="p-1">
//                                             <Col sm='12' className="p-1">Country </Col>
//                                             <Col sm='12' className="p-1">
//                                                 <Input className='rounded-0 small' type='select' placeholder="Country">
//                                                     <option>Select Country</option>
//                                                     <option>India</option>
//                                                     <option>Nepal</option>
//                                                     <option>Sri Lanka</option>
//                                                 </Input>
//                                             </Col>
//                                         </Col>
//                                         <Col sm='3' className="p-1">
//                                             <Col sm='12' className="p-1">State </Col>
//                                             <Col sm='12' className="p-1">
//                                                 <Input className='rounded-0' type='select' placeholder="State">
//                                                     <option>Select State</option>
//                                                     <option>Maharashtra</option>
//                                                     <option>Gujarat</option>
//                                                     <option>Goa</option>
//                                                     <option>Karnataka</option>
//                                                 </Input>
//                                             </Col>
//                                         </Col>
//                                         <Col sm='3' className="p-1">
//                                             <Col sm='12' className="p-1">City </Col>
//                                             <Col sm='12' className="p-1">
//                                                 <Input className='rounded-0' type='select' placeholder="City">
//                                                     <option>Select City</option>
//                                                     <option>Pune</option>
//                                                     <option>Nagpur</option>
//                                                     <option>Mumbai</option>
//                                                     <option>Nashik</option>
//                                                 </Input>
//                                             </Col>
//                                         </Col>
//                                     </Row>
//                                 </Col>
//                             </Card>
//                             &nbsp;
//                             <Card className="bg-white rounded-0" closeButton>
//                                 <Col sm='12' className="p-2">
//                                     <input className="form-check-input p-1" type="checkbox" value="" id="defaultCheck1" />
//                                     <label className="form-check-label" for="defaultCheck1">
//                                         Currently Persuing
//                                     </label>
//                                     <Row>
//                                         <Col sm='4' className="p-1">
//                                             <Col sm='12' className="p-1">Education </Col>
//                                             <Col sm='12' className="p-1">
//                                                 <Input className='rounded-0' type='select' placeholder="Education">
//                                                     <option>Choose your option</option>
//                                                     <option>B.A</option>
//                                                     <option>B.Sc.</option>
//                                                     <option>B.E.</option>
//                                                     <option>B.Tech.</option>
//                                                 </Input>
//                                             </Col>
//                                         </Col>
//                                         <Col sm='4' className="p-1">
//                                             <Col sm='12' className="p-1">University/School/Board </Col>
//                                             <Col sm='12' className="p-1"><Input className='rounded-0' placeholder="University/School/Board" /></Col>
//                                         </Col>
//                                         <Col sm='4' className="p-1">
//                                             <Col sm='12' className="p-1">Year of passing </Col>
//                                             <Col sm='12' className="p-1"><Input className='rounded-0' type='date' placeholder="DD-MM-YYYY" /></Col>
//                                         </Col>
//                                     </Row>
//                                     <Row>
//                                         <Col sm='3' className="p-1">
//                                             <Col sm='12' className="p-1">Country </Col>
//                                             <Col sm='12' className="p-1">
//                                                 <Input className='rounded-0 small' type='select' placeholder="Country">
//                                                     <option>Select Country</option>
//                                                     <option>India</option>
//                                                     <option>Nepal</option>
//                                                     <option>Sri Lanka</option>
//                                                 </Input>
//                                             </Col>
//                                         </Col>
//                                         <Col sm='3' className="p-1">
//                                             <Col sm='12' className="p-1">State </Col>
//                                             <Col sm='12' className="p-1">
//                                                 <Input className='rounded-0' type='select' placeholder="State">
//                                                     <option>Select State</option>
//                                                     <option>Maharashtra</option>
//                                                     <option>Gujarat</option>
//                                                     <option>Goa</option>
//                                                     <option>Karnataka</option>
//                                                 </Input>
//                                             </Col>
//                                         </Col>
//                                         <Col sm='3' className="p-1">
//                                             <Col sm='12' className="p-1">City </Col>
//                                             <Col sm='12' className="p-1">
//                                                 <Input className='rounded-0' type='select' placeholder="City">
//                                                     <option>Select City</option>
//                                                     <option>Pune</option>
//                                                     <option>Nagpur</option>
//                                                     <option>Mumbai</option>
//                                                     <option>Nashik</option>
//                                                 </Input>
//                                             </Col>
//                                         </Col>
//                                     </Row>
//                                 </Col>
//                             </Card>
//                             &nbsp;
//                             <Col sm='12'>
//                                 <Row>
//                                     <Col sm='9'>&nbsp;</Col>
//                                     <Col sm='3'><Button size='sm' type='' variant="outline-primary" className='float-end'>Add Education</Button>{' '}</Col>
//                                 </Row>
//                                 <Row>
//                                     <Col sm='3'>&nbsp;</Col>
//                                     <Col sm='3' className="text-end"><Button>Cancel</Button></Col>
//                                     <Col sm='3' className="text-start"><Button>Save</Button></Col>
//                                     <Col sm='3'>&nbsp;</Col>
//                                 </Row>
//                             </Col>
//                             &nbsp;
//                         </Col>
//                     </Modal.Body>
//                 </Modal>
//             </Col>
//             <Col>
//                 <Modal
//                     size="lg"
//                     show={lgShowEdit6}
//                     onHide={() => setLgShowEdit6(false)}
//                     aria-labelledby="example-modal-sizes-title-lg"
//                 >
//                     <Modal.Body>
//                         <Col sm="12" className="p-3 border-bottom">
//                             <Col className="p-1">
//                                 <Card className="bg-light">
//                                     <Modal.Header closeButton >
//                                         <Modal.Title id="example-modal-sizes-title-lg">
//                                             Job Details
//                                         </Modal.Title>
//                                     </Modal.Header>
//                                     <Col sm='12' className="p-2 small">
//                                         <input className="form-check-input p-1" type="checkbox" value="" id="defaultCheck1" />
//                                         <label className="form-check-label" for="defaultCheck1">
//                                             I am Homemaker
//                                         </label>
//                                         <Col sm='12' className='p-2 bg-white rounded-0 shadow-sm p-3 mb-5'>
//                                             <Row>
//                                                 <Col sm='3' className="p-2 small">
//                                                     <Col sm='12' className="m-0 p-0">Occupation<sup className='text-danger'> *</sup></Col>
//                                                     <Col sm='12' className="m-0 p-0">
//                                                         <Input className='rounded-0' type='select' placeholder="Occupation">
//                                                             <option>Choose your option</option>
//                                                             <option>Lawyer</option>
//                                                             <option>Doctor</option>
//                                                             <option>Engineer</option>
//                                                             <option>Entrepreneur</option>
//                                                         </Input>
//                                                     </Col>
//                                                 </Col>
//                                                 <Col sm='5' className="p-2 small">
//                                                     <Col sm='12' className="m-0">Company/Business name<sup className='text-danger'> *</sup></Col>
//                                                     <Col sm='12' className="m-0"><Input className='rounded-0' placeholder="Enter company/busines name" /></Col>
//                                                 </Col>
//                                                 <Col sm='3' className="p-2 small">
//                                                     <Col sm='12' className="m-0">Designation</Col>
//                                                     <Col sm='12' className="m-0"><Input className='rounded-0' placeholder="Enter designation" /></Col>
//                                                 </Col>
//                                             </Row>
//                                             <Col sm='12' className='p-2 bg-white rounded-0'>
//                                                 <Row>
//                                                     <Col sm='3' className="p-2">
//                                                         <Col sm='12' className="m-0 p-0">Country</Col>
//                                                         <Col sm='12' className="m-0 p-0">
//                                                             <Input className='rounded-0 small' type='select' placeholder="Country">
//                                                                 <option>Select Country</option>
//                                                                 <option>India</option>
//                                                                 <option>Nepal</option>
//                                                                 <option>Sri Lanka</option>
//                                                             </Input>
//                                                         </Col>
//                                                     </Col>
//                                                     <Col sm='3' className="p-2">
//                                                         <Col sm='12' className="m-0">State</Col>
//                                                         <Col sm='12' className="m-0">
//                                                             <Input className='rounded-0' type='select' placeholder="State">
//                                                                 <option>Select State</option>
//                                                                 <option>Maharashtra</option>
//                                                                 <option>Gujarat</option>
//                                                                 <option>Goa</option>
//                                                                 <option>Karnataka</option>
//                                                             </Input>
//                                                         </Col>
//                                                     </Col>
//                                                     <Col sm='3' className="p-2">
//                                                         <Col sm='12' className="m-0">City</Col>
//                                                         <Col sm='12' className="m-0">
//                                                             <Input className='rounded-0' type='select' placeholder="City">
//                                                                 <option>Select City</option>
//                                                                 <option>Pune</option>
//                                                                 <option>Nagpur</option>
//                                                                 <option>Mumbai</option>
//                                                                 <option>Nashik</option>
//                                                             </Input>
//                                                         </Col>
//                                                     </Col>
//                                                 </Row>
//                                             </Col>
//                                         </Col>
//                                         <Col sm='12'>
//                                             <Row>
//                                                 <Col sm='9'></Col>
//                                                 <Col sm='3'><Button size='sm' type='' variant="outline-primary" className='float-end small'>Add Education</Button>{' '}</Col>
//                                             </Row>
//                                             <Row>
//                                                 <Col sm='3'>&nbsp;</Col>
//                                                 <Col sm='3' className="text-end"><Button>Cancel</Button></Col>
//                                                 <Col sm='3' className="text-start"><Button>Save</Button></Col>
//                                                 <Col sm='3'>&nbsp;</Col>
//                                             </Row>
//                                         </Col>
//                                     </Col>
//                                     &nbsp;
//                                 </Card>
//                             </Col>
//                         </Col>
//                     </Modal.Body>
//                 </Modal>
//             </Col>
//             <Col>
//                 <Modal
//                     size="lg"
//                     show={lgShowEdit7}
//                     onHide={() => setLgShowEdit7(false)}
//                     aria-labelledby="example-modal-sizes-title-lg"
//                 >

//                     <Modal.Body>
//                         <Col sm="12" className="p-3 border-bottom">
//                             <Col className="p-1">
//                                 <Card className="bg-light">
//                                     <Modal.Header closeButton>
//                                         <Modal.Title id="example-modal-sizes-title-lg">
//                                             Diversity Details
//                                         </Modal.Title>
//                                     </Modal.Header>
//                                     <Col sm='12' className="p-2">
//                                         <Row>
//                                             <Col sm='4' className="p-2">
//                                                 <Col sm='12' className="m-0 p-0 small">Social category<sup className='text-danger'> *</sup></Col>
//                                                 <Col sm='12' className="m-0 p-0">
//                                                     <Input className='rounded-0' type='select' placeholder="Category">
//                                                         <option className='small'>Choose Your Option</option>
//                                                         <option>Primary Group</option>
//                                                         <option>Secondary Group</option>
//                                                         <option>In-Group</option>
//                                                         <option>Out-Group</option>
//                                                         <option>Formal Group</option>
//                                                         <option>Informal Group</option>
//                                                     </Input>
//                                                 </Col>
//                                             </Col>
//                                             <Col sm='4' className="p-2">
//                                                 <Col sm='12' className="m-0 small">Religion practiced<sup className='text-danger'> *</sup></Col>
//                                                 <Col sm='12' className="m-0">
//                                                     <Input className='rounded-0' type='select' placeholder="Category">
//                                                         <option className='small'>Choose Your Option</option>
//                                                         <option>1</option>
//                                                         <option>2</option>
//                                                         <option>3</option>

//                                                     </Input>
//                                                 </Col>
//                                             </Col>
//                                             <Col>&nbsp;</Col>
//                                         </Row>
//                                     </Col>
//                                     <Col sm='12'>
//                                         <Row>
//                                             <Col sm='3'>&nbsp;</Col>
//                                             <Col sm='3' className="text-end"><Button>Cancel</Button></Col>
//                                             <Col sm='3' className="text-start"><Button>Save</Button></Col>
//                                             <Col sm='3'>&nbsp;</Col>
//                                         </Row>
//                                     </Col>
//                                     &nbsp;
//                                 </Card>
//                             </Col>
//                         </Col>
//                     </Modal.Body>
//                 </Modal>
//             </Col>
//         </>
//     )
// }

// export default MobilePersonalDetails;
