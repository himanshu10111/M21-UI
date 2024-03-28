import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Input,
  Row,
} from "reactstrap";
import {
  Form,
  Button,
  FormLabel,
  FormGroup,
} from "react-bootstrap";

import { useMediaQuery } from "react-responsive";
import CardHeader from "react-bootstrap/esm/CardHeader";
import AddressDetailsMobileView from "../../../component/locationDetails/AddressDetailsComponentMobileView.js";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const AddressDetails = ({
  nextStep,
  prevStep,
  // handleFormData,
  values,
  changeInputData,
}) => {
  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [isaddCount, setIsAddcount] = useState([]);
  const [isaddState, setIsAddState] = useState([]);
  const [isadddist, setIsAddDist] = useState([]);
  const [isaddtaluka, setIsAddTaluka] = useState([]);
  const [isaddcity, setIsAddCity] = useState([]);

  //var landmark details
  const [presentLandMarkDetails, setPresentLandMarkDetail] = useState("");

  const [permenantLandmarkDetails, setPermanentLandmarkDetails] = useState("");

  //next button color code

  const [bgBlueForOtpButton, setBgBlueForOtpButton] = useState("secondary");
  const [bgChangeDarkToBlue, setBgChangeDarkToBlue] = useState("primary");

  // Next button variant changer function part
  const [checkAllValueEnter, setCheckAllValueEnter] = useState(false);

  //after uncheck permenant checkbox
  const [statusOfPermanentEntry, setStatusOfPermanentEntry] = useState(1);

  //copy dropdown value decider

  // const [verifyClicked, setVerifyClick] = useState(false);

  //permanent address entry copy
  const [countryForParmanent, setCountryForParmanent] = useState([]);
  const [stateForParmanent, setStateForParmanent] = useState([]);
  const [cityForParmanent, setCityForParmanent] = useState([]);
  const [districtForParmanent, setDistrictForParmanent] = useState([]);
  const [talukaForParmanent, setTalukaForParmanent] = useState([]);
 
  // Permenant adress check box
 const [checkBoxStatus, setCheckedBoxStatus] = useState(false);

  const PermenantCheckBox = () => {
    setCheckedBoxStatus((prevStatus) => !prevStatus);
    if (!checkBoxStatus) {
      // If checkbox is checked, copy the address
      changeInputData("buildingForPermanent", values.building);
      changeInputData("streetForPermanent", values.street);
      changeInputData("countryForParmanent", formValues.country.name);
      changeInputData("stateForParmanent", formValues.state.name);
      changeInputData("cityForParmanent", formValues.city.name);
      changeInputData("districtForParmanent", formValues.district.name);
      changeInputData("talukaForParmanent", formValues.taluka.name);
      changeInputData("zipCodeForParmanent", values.zipCode);
    } else {
      // If checkbox is unchecked, clear the copied text
      changeInputData("buildingForPermanent", "");
      changeInputData("streetForPermanent", "");
      changeInputData("countryForParmanent", "");
      changeInputData("stateForParmanent", "");
      changeInputData("cityForParmanent", "");
      changeInputData("districtForParmanent", "");
      changeInputData("talukaForParmanent", "");
      changeInputData("zipCodeForParmanent", "");
    }
  };


  //form validation variables
  const [validated, setValidated] = useState(false);

  const [formValues, setFormValues] = useState({
    country: { id: '', name: '' },
    state: { id: '', name: '' },
    district: { id: '', name: '' },
    city: { id: '', name: '' },
    taluka: { id: '', name: '' },
    countryForParmanent: { id: '', name: '' },
    stateForParmanent: { id: '', name: '' },
    districtForParmanent: { id: '', name: '' },
    cityForParmanent: { id: '', name: '' },
    talukaForParmanent: { id: '', name: '' },
  });

  useEffect(() => {
    fetch(`${BaseURL}/api/org/countries`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => setIsAddcount(data));
  }, []);

  const handleFormData = (fieldName) => (event) => {
    const { id, name } = event.target.value;
    setFormValues(prev => ({ ...prev, [fieldName]: { id, name } }));
    changeInputData(fieldName, name);

    if(fieldName === 'building' || fieldName === 'street' || fieldName === 'zipCode' || fieldName === 'buildingForPermanent' || fieldName === 'streetForPermanent' || fieldName === 'zipCodeForParmanent')
    {
      const { value } = event.target;
      setFormValues(prev => ({ ...prev, [fieldName]: value }));
      changeInputData(fieldName, value);
    }

    // If country field changes, fetch states for the selected country
    if (fieldName === "country") {
      fetch(`${BaseURL}/api/org/statecountry/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAddState(data)
          console.log("State:", data);
        }
        );
    }

    if (fieldName === "state") {
      fetch(`${BaseURL}/api/org/districtstate/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAddDist(data)
          console.log("districts:", data);
        }
        );
    }

    if (fieldName === "district") {
      fetch(`${BaseURL}/api/org/talukadistrict/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAddTaluka(data)
          console.log("taluka:", data);
        }
        );
    }

    if (fieldName === "district") {
      fetch(`${BaseURL}/api/org/citydistirct/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("City Data:", data);
          setIsAddCity(data);
        });      
    }
  };

  const SubmitForm = (e) => {
    e.preventDefault();

    nextStep();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      // e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    changeInputData('house',values.building);
    changeInputData('street',values.street);
    changeInputData('country',formValues.country.name);
    changeInputData('state',formValues.state.name);
    changeInputData('city',formValues.city.name);
    changeInputData('district',formValues.district.name);
    changeInputData('taluka',formValues.taluka.name);
    changeInputData('pinZipCode',values.zipCode);
    changeInputData('buildingForPermanent',values.buildingForPermanent);
    changeInputData('streetForPermanent',values.streetForPermanent);
    changeInputData('countryForParmanent',formValues.countryForParmanent.name);
    changeInputData('stateForParmanent',formValues.stateForParmanent.name);
    changeInputData('cityForParmanent',formValues.cityForParmanent.name);
    changeInputData('districtForParmanent',formValues.districtForParmanent.name);
    changeInputData('talukaForParmanent',formValues.talukaForParmanent.name);
    changeInputData('zipCodeForParmanent',values.zipCodeForParmanent);

  };

  const [open, setOpen] = useState(false);

  const [open1, setOpen1] = useState(true);

  const SelectDropDownOptions = (selectOptionList, selectedValue) => {
    return selectOptionList.map((value, key) => {
      return (
        <option key={key} selected={value === selectedValue} value={value}>
          {value}
        </option>
      );
    });
  };

  return (
    <>
      <div className="address">
        <Desktop>
          <Container>
            <Col lang="12">
              <Row>
                <Col lg="3">&nbsp;</Col>
                <Col lg="8">
                  <Card className="shadow border-0 rounded-0">
                    <Form onSubmit={SubmitForm}>
                      <Col sm="12" className="px-5">
                        <CardHeader className="border-0 px-1 pb-4 bg-white">
                          <Col sm="12">
                            <b className="alert-link font-size-16 fw-bold">
                              Address Details
                            </b>
                          </Col>
                        </CardHeader>
                        <CardBody className="pt-0 px-0">
                          <Row className="g-2 form">
                            <Col className=" form-control mb-2 bg-light">
                              <Row className="g-2 ">
                                <label className="fw-semibold font-size-14 form-label ">
                                  Present address
                                </label>
                                <Col lg="12" className="form-group">
                                  <Row className="g-2 form">
                                    <Col lg="6" className="form-group">
                                      <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                        House/Flat No./Building
                                      </FormLabel>
                                      <Col lg="12">
                                        <Form.Control
                                          name="building"
                                          value={values.building}
                                          type="text"
                                          onChange={handleFormData("building")}
                                          className="rounded-0 figure-caption"
                                          placeholder="Enter house/flat no./building name here"
                                          required
                                          minLength="4"
                                          size="sm"
                                          isValid={
                                            values.building === ""
                                              ? false
                                              : true
                                          }
                                        // onKeyUp={AllInputValueCheckFillUp}
                                        />
                                      </Col>
                                    </Col>
                                    <Col lg="6" className="form-group">
                                      <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                        Street details
                                      </FormLabel>
                                      <Col lg="12">
                                        <Form.Control
                                          name="street"
                                          value={values.street}
                                          type="text"
                                          onChange={handleFormData("street")}
                                          className="rounded-0 figure-caption"
                                          placeholder="Enter street details here"
                                          required
                                          size="sm"
                                          isValid={
                                            values.street === "" ? false : true
                                          }
                                        // onKeyUp={AllInputValueCheckFillUp}
                                        />
                                      </Col>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col lg="12" className="form-group">
                                  <Row className="g-2 form">
                                    <Col lg="4" className="">
                                      <Col lg="12">
                                        <FormGroup>
                                          <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                            Country{" "}
                                            <sup className="text-danger">*</sup>
                                          </FormLabel>
                                        </FormGroup>
                                        <Input
                                          name="country"
                                          type="select"
                                          defaultValue={values.country}
                                          onChange={(event) => {
                                            const id = event.target.value;
                                            const name = event.target.options[event.target.selectedIndex].text;
                                            const enhancedEvent = {
                                              target: {
                                                name: event.target.name,
                                                value: { id, name },
                                              },
                                            };
                                            handleFormData("country")(enhancedEvent);
                                          }}
                                          className="rounded-0 figure-caption"
                                          placeholder="Select Country"
                                          required
                                          size="sm"
                                        >
                                          <option selected disabled value=''>Select country</option>
                                          {isaddCount.map((country) => (
                                            <>
                                              <option key={country.id} value={country.id}>{country.name}</option>
                                              {/* setIsIndia(dat.name) */}
                                            </>
                                          ))}
                                        </Input>
                                      </Col>
                                    </Col>
                                    <Col sm="4">
                                      {/*original value of state */}

                                      <Form.Group>
                                        <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                          State
                                        </FormLabel>
                                        <Input
                                          name="state"
                                          type="select"
                                          defaultValue={values.state}
                                          onChange={(event) => {
                                            const id = event.target.value;
                                            const name = event.target.options[event.target.selectedIndex].text;
                                            const enhancedEvent = {
                                              target: {
                                                name: event.target.name,
                                                value: { id, name },
                                              },
                                            };
                                            handleFormData("state")(enhancedEvent);
                                          }}
                                          className="rounded-0 figure-caption"
                                          placeholder="Select State"
                                          required
                                          size="sm"
                                        >
                                          <option selected disabled value=''>Select state</option>
                                          {isaddState.map((state) => (
                                            <option key={state.id} value={state.id}>{state.name}</option>
                                          ))}
                                        </Input>
                                      </Form.Group>
                                    </Col>
                                    <Col lg="4" className="">
                                      <Col lg="12">
                                        <FormGroup>
                                          <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                            City
                                            <sup className="text-danger">*</sup>
                                          </FormLabel>
                                          <Input
                                          name="city"
                                          type="select"
                                          defaultValue={values.city}
                                          onChange={(event) => {
                                            const id = event.target.value;
                                            const name = event.target.options[event.target.selectedIndex].text;
                                            const enhancedEvent = {
                                              target: {
                                                name: event.target.name,
                                                value: { id, name },
                                              },
                                            };
                                            handleFormData("city")(enhancedEvent);
                                          }}
                                          className="rounded-0 figure-caption"
                                          placeholder="Select city"
                                          required
                                          size="sm"
                                        >
                                          <option selected disabled value=''>Select city</option>
                                          {isaddcity.map((city) => (
                                            <option key={city.id} value={city.id}>{city.name}</option>
                                          ))}
                                        </Input>
                                        </FormGroup>
                                      </Col>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col lg="12" className="form-group">
                                  <Row className="g-2 form">
                                    <Col lg="4" className="">
                                      <FormGroup>
                                        <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                          District
                                          <sup className="text-danger">*</sup>
                                        </FormLabel>
                                        <Input
                                          name="district"
                                          type="select"
                                          defaultValue={values.district}
                                          onChange={(event) => {
                                            const id = event.target.value;
                                            const name = event.target.options[event.target.selectedIndex].text;
                                            const enhancedEvent = {
                                              target: {
                                                name: event.target.name,
                                                value: { id, name },
                                              },
                                            };
                                            handleFormData("district")(enhancedEvent);
                                          }}
                                          placeholder="Select district"
                                          className="rounded-0 figure-caption"
                                          required
                                          size="sm"
                                        >
                                          <option selected disabled value=''>Select district</option>
                                          {isadddist.map((district) => (
                                            <option key={district.id} value={district.id}>{district.name}</option>
                                          ))}
                                        </Input>
                                      </FormGroup>
                                      <FormLabel></FormLabel>
                                    </Col>
                                    <Col lg="4" className="">
                                      <FormGroup>
                                        <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                          Taluka
                                        </FormLabel>
                                        <Input
                                          name="taluka"
                                          type="select"
                                          defaultValue={values.taluka}
                                          onChange={(event) => {
                                            const id = event.target.value;
                                            const name = event.target.options[event.target.selectedIndex].text;
                                            const enhancedEvent = {
                                              target: {
                                                name: event.target.name,
                                                value: { id, name },
                                              },
                                            };
                                            handleFormData("taluka")(enhancedEvent);
                                          }}
                                          className="rounded-0 figure-caption"
                                          placeholder="Select Taluka"
                                          size="sm"
                                        >
                                          <option selected disabled value=''>Select Taluka</option>
                                          {isaddtaluka.map((taluka) => (
                                            <option key={taluka.id} value={taluka.id}>{taluka.name}</option>
                                          ))}
                                        </Input>
                                      </FormGroup>
                                    </Col>
                                    <Col lg="4" className="">
                                      <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                        {" "}
                                        Pin/Zip Code
                                      </FormLabel>

                                      <Col lg="12">
                                        <Form.Control
                                          name="zipCode"
                                          type="text"
                                          value={values.zipCode}
                                          onChange={handleFormData("zipCode")}
                                          className="rounded-0 figure-caption"
                                          placeholder="Enter Pin/Zip code here"
                                          required
                                          size="sm"
                                          maxLength="6"
                                          minLength={6}
                                          isValid={
                                            values.zipCode === "" ? false : true
                                          }
                                        // onKeyUp={AllInputValueCheckFillUp}
                                        />
                                      </Col>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Col>
                            <Col sm="12" className="form-control bg-light pt-2">
                              <FormLabel className=" font-size-14 fw-normal">
                                Permanent address
                              </FormLabel>
                              <Col className="form-check">
                                <Input
                                  type="checkbox"
                                  // onClick={PermenantCheckBox}
                                  checked={checkBoxStatus}
                                  onChange={PermenantCheckBox}
                                />
                                <label>Same as present address</label>
                              </Col>
                            </Col>
                            <Col sm="12" className="form-group g-2">
                              &nbsp;
                            </Col>

                            <Col sm="12" className="form-group">
                              <Col className="form-control bg-light">
                                <Row className="g-2 form">
                                  <Col lg="12" className="form-group">
                                    <Row className="g-2 form">
                                      <Col lg="6">
                                        <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                          House/Flat No./Building
                                        </FormLabel>
                                        <Col lg="12">
                                          <Input
                                            name="buildingForPermanent"
                                            defaultValue={values.buildingForPermanent}
                                            type="text"
                                            onChange={handleFormData("buildingForPermanent")}
                                            className="rounded-0 figure-caption"
                                            placeholder="Enter house/flat no./building name here"
                                            size="sm"
                                          // onKeyUp={AllInputValueCheckFillUp}
                                          />
                                        </Col>
                                      </Col>
                                      <Col lg="6">
                                        <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                          Street details
                                        </FormLabel>
                                        <Col lg="12">
                                          <Input
                                            name="streetForPermanent"
                                            defaultValue={values.streetForPermanent}
                                            type="text"
                                            onChange={handleFormData("streetForPermanent")}
                                            className="rounded-0 figure-caption"
                                            placeholder="Enter street details here"
                                            size="sm"
                                          // onKeyUp={AllInputValueCheckFillUp}
                                          />
                                        </Col>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col lg="12" className=" form-group">
                                    <Row className="g-2 form">
                                      <Col lg="4" className="">
                                        <FormGroup>
                                          <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                            Country
                                            <sup className="text-danger">*</sup>
                                          </FormLabel>
                                          <Input
                                          name="countryForParmanent"
                                          type="select"
                                          defaultValue={values.countryForParmanent}
                                          onChange={(event) => {
                                            const id = event.target.value;
                                            const name = event.target.options[event.target.selectedIndex].text;
                                            const enhancedEvent = {
                                              target: {
                                                name: event.target.name,
                                                value: { id, name },
                                              },
                                            };
                                            handleFormData("countryForParmanent")(enhancedEvent);
                                          }}
                                          className="rounded-0 figure-caption"
                                          placeholder="Select Country"
                                          required
                                          size="sm"
                                        >
                                          <option selected disabled value=''>Select country</option>
                                          {isaddCount.map((country) => (
                                            <>
                                              <option key={country.id} value={country.id}>{country.name}</option>
                                              {/* setIsIndia(dat.name) */}
                                            </>
                                          ))}
                                        </Input>
                                        </FormGroup>
                                      </Col>
                                      <Col lg="4" className="">
                                        <Col lg="12">
                                          {/*copy from original state here */}

                                          <Form.Group>
                                            <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                              State
                                            </FormLabel>
                                            <Input
                                          name="stateForParmanent"
                                          type="select"
                                          defaultValue={values.stateForParmanent}
                                          onChange={(event) => {
                                            const id = event.target.value;
                                            const name = event.target.options[event.target.selectedIndex].text;
                                            const enhancedEvent = {
                                              target: {
                                                name: event.target.name,
                                                value: { id, name },
                                              },
                                            };
                                            handleFormData("stateForParmanent")(enhancedEvent);
                                          }}
                                          className="rounded-0 figure-caption"
                                          placeholder="Select State"
                                          required
                                          size="sm"
                                        >
                                          <option selected disabled value=''>Select state</option>
                                          {isaddState.map((state) => (
                                            <option key={state.id} value={state.id}>{state.name}</option>
                                          ))}
                                        </Input>
                                          </Form.Group>
                                        </Col>
                                      </Col>
                                      <Col lg="4" className="">
                                        <FormGroup>
                                          <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                            {" "}
                                            City
                                            <sup className="text-danger">*</sup>
                                          </FormLabel>
                                          <Input
                                          name="cityForParmanent"
                                          type="select"
                                          defaultValue={values.cityForParmanent}
                                          onChange={(event) => {
                                            const id = event.target.value;
                                            const name = event.target.options[event.target.selectedIndex].text;
                                            const enhancedEvent = {
                                              target: {
                                                name: event.target.name,
                                                value: { id, name },
                                              },
                                            };
                                            handleFormData("cityForParmanent")(enhancedEvent);
                                          }}
                                          className="rounded-0 figure-caption"
                                          placeholder="Select city"
                                          required
                                          size="sm"
                                        >
                                          <option selected disabled value=''>Select city</option>
                                          {isaddcity.map((city) => (
                                            <option key={city.id} value={city.id}>{city.name}</option>
                                          ))}
                                        </Input>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col lg="12" className="form-group">
                                    <Row className="g-2 form">
                                      <Col lg="4" className="">
                                        <FormGroup>
                                          <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                            District{" "}
                                            <sup className="text-danger">*</sup>
                                          </FormLabel>
                                          <Input
                                          name="districtForParmanent"
                                          type="select"
                                          defaultValue={values.districtForParmanent}
                                          onChange={(event) => {
                                            const id = event.target.value;
                                            const name = event.target.options[event.target.selectedIndex].text;
                                            const enhancedEvent = {
                                              target: {
                                                name: event.target.name,
                                                value: { id, name },
                                              },
                                            };
                                            handleFormData("districtForParmanent")(enhancedEvent);
                                          }}
                                          placeholder="Select district"
                                          className="rounded-0 figure-caption"
                                          required
                                          size="sm"
                                        >
                                          <option selected disabled value=''>Select district</option>
                                          {isadddist.map((district) => (
                                            <option key={district.id} value={district.id}>{district.name}</option>
                                          ))}
                                        </Input>
                                        </FormGroup>
                                      </Col>
                                      <Col lg="4" className="">
                                        <FormGroup>
                                          <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                            {" "}
                                            Taluka{" "}
                                          </FormLabel>
                                          <Input
                                            name="talukaForParmanent"
                                            type="select"
                                            value={values.talukaForParmanent}
                                            onChange={(event) => {
                                              const id = event.target.value;
                                              const name = event.target.options[event.target.selectedIndex].text;
                                              const enhancedEvent = {
                                                target: {
                                                  name: event.target.name,
                                                  value: { id, name },
                                                },
                                              };
                                              handleFormData("talukaForParmanent")(enhancedEvent);
                                            }}
                                            className="rounded-0 figure-caption"
                                            placeholder="Select Taluka"
                                            size="sm"
                                          // onKeyUp={AllInputValueCheckFillUp}
                                          >
                                            <option selected disabled value=''>Select Taluka</option>
                                          {isaddtaluka.map((taluka) => (
                                            <option key={taluka.id} value={taluka.id}>{taluka.name}</option>
                                          ))}
                                          </Input>
                                        </FormGroup>
                                      </Col>
                                      <Col lg="4" className="">
                                        <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                          {" "}
                                          Pin/Zip Code
                                        </FormLabel>

                                        <Col lg="12">
                                          <Input
                                            name="zipCodeForParmanent"
                                            type="text"
                                           value={values.zipCodeForParmanent}
                                            onChange={handleFormData("zipCodeForParmanent")}
                                            className="rounded-0 figure-caption"
                                            placeholder="Enter Pin/Zip code here"
                                            size="sm"
                                            maxLength="6"
                                          minLength={6}
                                          isValid={
                                            values.zipCodeForParmanent === "" ? false : true
                                          }
                                          // onKeyUp={AllInputValueCheckFillUp}
                                          />
                                        </Col>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                            </Col>
                          </Row>
                        </CardBody>
                      </Col>
                      <CardFooter className="border-0 py-4 bg-white">
                        <Col sm="12">
                          <Col lg="12" className="">
                            <Row>
                              <Col lg="8">
                                <Button
                                  size="lg"
                                  className="btn-outline-secondary col-sm-3 bg-white rounded-0 text-black font-size-11 fw-bold"
                                >
                                  Cancel
                                </Button>
                              </Col>

                              <Col sm="2">
                                <Button
                                  onClick={prevStep}
                                  size="lg"
                                  className="col-sm-12  rounded-0 text-white font-size-11 fw-bold "
                                >
                                  Previous
                                </Button>
                              </Col>
                              <Col sm="2">
                                <Button
                                  size="lg"
                                  // onClick={nextStep}
                                  type="submit"
                                  className="col-sm-12 rounded-0 font-size-11 fw-bold text-white"
                                  disabled={
                                    values.building !== "" &&
                                      values.street !== "" &&
                                      values.country !== "" &&
                                      values.state !== "" &&
                                      values.city !== "" &&
                                      values.district !== "" &&
                                      values.taluka !== "" &&
                                      values.zipCode !== "" &&
                                      values.streetForPermanent !== "" &&
                                      values.countryForParmanent !== "" &&
                                      values.stateForParmanent !== "" &&
                                      values.cityForParmanent !== "" &&
                                      values.districtForParmanent !== "" &&
                                      values.buildingForPermanent !== "" &&
                                      values.talukaForParmanent !== "" &&
                                      values.zipCodeForParmanent !== ""
                                      ? false
                                      : true
                                  }
                                  variant={
                                    values.building !== "" &&
                                      values.street !== "" &&
                                      values.country !== "" &&
                                      values.state !== "" &&
                                      values.city !== "" &&
                                      values.district !== "" &&
                                      values.taluka !== "" &&
                                      values.zipCode !== "" &&
                                      values.buildingForPermanent !== "" &&
                                      values.streetForPermanent !== "" &&
                                      values.countryForParmanent !== "" &&
                                      values.stateForParmanent !== "" &&
                                      values.cityForParmanent !== "" &&
                                      values.districtForParmanent !== "" &&
                                      values.talukaForParmanent !== "" &&
                                      values.zipCodeForParmanent !== ""
                                      ? bgChangeDarkToBlue
                                      : bgBlueForOtpButton
                                  }
                                >
                                  Next
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
          </Container>
        </Desktop>
      </div>
      <div className="address small">
        <Mobile>
          <Form onSubmit={SubmitForm}>
            <Card>
              <CardHeader>
                <FormLabel className="font-size-14 fw-bold Ri-text-color-main-menu">
                  Present Address
                </FormLabel>
              </CardHeader>
              <CardBody>
                {/* Persent address part */}
                <Col className="col-12">
                  <Row className="g-2 form">
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-12">
                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                            House/Flat No./Building
                            <sup className="text-danger">*</sup>
                          </FormLabel>

                          <Col className="col-12">
                            <Form.Control
                              name="building"
                              defaultValue={values.building}
                              type="text"
                              onChange={handleFormData("building")}
                              className="rounded-0 figure-caption"
                              placeholder="Enter house/flat no./building name here"
                              required
                              minLength="4"
                              size="sm"
                              isValid={values.building === "" ? false : true}
                            // onKeyUp={AllInputValueCheckFillUp}
                            />
                          </Col>
                        </Col>
                        <Col className="col-12">
                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                            Street Details<sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col className="col-12">
                            <Form.Control
                              name="street"
                              defaultValue={values.street}
                              type="text"
                              onChange={handleFormData("street")}
                              className="rounded-0 figure-caption"
                              placeholder="Enter street details here"
                              required
                              size="sm"
                              isValid={values.street === "" ? false : true}
                            // onKeyUp={AllInputValueCheckFillUp}
                            />
                          </Col>
                        </Col>
                        <Col className="col-12">
                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                            Landmark
                          </FormLabel>
                          <Col className="col-12">
                            <Form.Control
                              type="text"
                              defaultValue={presentLandMarkDetails}
                              onChange={(e) =>
                                setPresentLandMarkDetail(e.target.value)
                              }
                              size="sm"
                              placeholder="Enter Landmark Details"
                            />
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-6">
                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                            Country <sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col className="col-12">
                            <Form.Select
                              name="country"
                              type="select"
                              defaultValue={values.country}
                              onChange={handleFormData("country")}
                              className="rounded-0 figure-caption"
                              required
                              size="sm"
                            // onKeyUp={AllInputValueCheckFillUp}
                            >
                              <option selected disabled>Select country</option>
                                          {isaddCount.map((country) => (
                                            <>
                                              <option key={country.id} value={country.id}>{country.name}</option>
                                              {/* setIsIndia(dat.name) */}
                                            </>
                                          ))}
                            </Form.Select>
                          </Col>
                        </Col>
                        <Col className="col-6">
                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                            State<sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col className="col-12">
                            <Form.Select
                              name="state"
                              type="select"
                              defaultValue={values.state}
                              onChange={handleFormData("state")}
                              placeholder="Select State"
                              required
                              // onKeyUp={AllInputValueCheckFillUp}
                              className="rounded-0 figure-caption"
                              size="sm"
                            >
                              {/* {SelectDropDownOptions(
                                stateNameArry,
                                values.state
                              )} */}
                              <option>Chosse your option</option>
                              {isaddState.map((data) => (
                                <option>{data.name}</option>
                              ))}
                            </Form.Select>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-6">
                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                            City<sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col className="col-12">
                            <Form.Select
                              name="city"
                              type="select"
                              defaultValue={values.city}
                              onChange={handleFormData("city")}
                              className="rounded-0 figure-caption"
                              placeholder="Select City"
                              required
                              size="sm"
                            // onKeyUp={AllInputValueCheckFillUp}
                            >
                              {/* {SelectDropDownOptions(
                                cityNameArry,
                                values.city
                              )} */}
                              <option>Chosse your option</option>
                              {isaddcity.map((data) => (
                                <option>{data.name}</option>
                              ))}
                            </Form.Select>
                          </Col>
                        </Col>
                        <Col className="col-6">
                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                            District<sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col className="col-12">
                            <Form.Select
                              name="district"
                              type="select"
                              defaultValue={values.district}
                              onChange={handleFormData("district")}
                              className="rounded-0 figure-caption"
                              placeholder="Select District"
                              required
                              size="sm"
                            // onKeyUp={AllInputValueCheckFillUp}
                            >
                              {/* {SelectDropDownOptions(
                                districtNameArry,
                                values.district
                              )} */}
                              <option>Select district</option>
                              {isadddist.map((data) => (
                                <option>{data.name}</option>
                              ))}
                            </Form.Select>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-6">
                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                            Taluka<sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col className="col-12">
                            <Form.Select
                              name="taluka"
                              type="select"
                              defaultValue={values.taluka}
                              onChange={handleFormData("taluka")}
                              className="rounded-0 figure-caption"
                              placeholder="Select Taluka"
                              required
                              size="sm"
                            // onKeyUp={AllInputValueCheckFillUp}
                            >
                              {/* {SelectDropDownOptions(
                                talukaNameArry,
                                values.taluka
                              )} */}
                              <option>Select Taluka</option>
                              {isaddtaluka.map((data) => (
                                <option>{data.name}</option>
                              ))}
                            </Form.Select>
                          </Col>
                        </Col>
                        <Col className="col-6">
                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                            Pin/Zip Code
                          </FormLabel>
                          <Col className="col-12">
                            <Form.Control
                              name="zipCode"
                              type="text"
                              defaultValue={values.zipCode}
                              onChange={handleFormData("zipCode")}
                              className="rounded-0 figure-caption"
                              placeholder="Enter Pin/Zip code here"
                              required
                              size="sm"
                              minLength="6"
                              maxLength="6"
                            // isValid={
                            //   values.zipCode.length === 6 ? true : false
                            // }
                            // onKeyUp={AllInputValueCheckFillUp}
                            />
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                {/* same as permanent address click part */}
                <Col className="col-12">
                  <Row className="g-2 form">
                    <Col className="form-control border-0">
                      <FormLabel className="forn-size-14 fw-bold Ri-text-color-main-menu">
                        Permanent Address
                      </FormLabel>
                      <Col className="col-12 form-check">
                        <Input
                          type="checkbox"
                          onClick={PermenantCheckBox}
                        // checked={checkBoxStatus}
                        />
                        <label>Same as permanent address</label>
                      </Col>
                    </Col>
                  </Row>
                </Col>
                {/* Permanent address part */}
                <Col className="col-12">
                  <Row className="g-2 form">
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-12">
                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                            House/Flat No./Building
                            <sup className="text-danger">*</sup>
                          </FormLabel>

                          <Col className="col-12">
                            <Input
                              name="building"
                              defaultValue={values.buildingForPermanent}
                              type="text"
                              onChange={handleFormData("buildingForPermanent")}
                              className="rounded-0 figure-caption"
                              placeholder="Enter house/flat no./building name here"
                              required
                              size="sm"
                            // onKeyUp={AllInputValueCheckFillUp}
                            />
                          </Col>
                        </Col>
                        <Col className="col-12">
                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                            Street Details<sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col className="col-12">
                            <Input
                              name="street"
                              defaultValue={values.streetForPermanent}
                              type="text"
                              onChange={handleFormData("streetForPermanent")}
                              className="rounded-0 figure-caption"
                              placeholder="Enter street details here"
                              required
                              size="sm"
                            // onKeyUp={AllInputValueCheckFillUp}
                            />
                          </Col>
                        </Col>
                        <Col className="col-12">
                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                            Landmark
                          </FormLabel>
                          <Col className="col-12">
                            <Form.Control
                              type="text"
                              defaultValue={permenantLandmarkDetails}
                              onChange={(e) =>
                                setPermanentLandmarkDetails(e.target.value)
                              }
                              size="sm"
                              placeholder="Enter Landmark Details"
                            />
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-6">
                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                            Country <sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col className="col-12">
                            <Form.Select
                              name="countryForParmanent"
                              type="select"
                              defaultValue={values.countryForParmanent}
                              onChange={handleFormData("countryForParmanent")}
                              placeholder="Select Country"
                              className="rounded-0 figure-caption"
                              required
                              size="sm"
                            // onKeyUp={AllInputValueCheckFillUp}
                            >
                              <option selected>Select Country</option>
                              {isaddCount.map((data) => (
                                <>
                                  <option>{data.name}</option>
                                  setIsIndia(dat.name)
                                </>
                              ))}
                            </Form.Select>
                          </Col>
                        </Col>
                        <Col className="col-6">
                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                            State<sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col className="col-12">
                            <Form.Select
                              name="stateForParmanent"
                              type="select"
                              defaultValue={values.stateForParmanent}
                              onChange={handleFormData("stateForParmanent")}
                              className="rounded-0 figure-caption"
                              placeholder="Select State"
                              required
                              size="sm"
                            // onKeyUp={AllInputValueCheckFillUp}
                            >
                              <option>Chosse your option</option>
                              {isaddState.map((data) => (
                                <option>{data.name}</option>
                              ))}
                            </Form.Select>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-6">
                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                            City<sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col className="col-12">
                            <Form.Select
                              name="cityForParmanent"
                              type="select"
                              defaultValue={values.cityForParmanent}
                              onChange={handleFormData("cityForParmanent")}
                              className="rounded-0 figure-caption"
                              placeholder="Select City"
                              required
                              size="sm"
                            // onKeyUp={AllInputValueCheckFillUp}
                            >
                              <option>Select city</option>
                              {isaddcity.map((data) => (
                                <option>{data.name}</option>
                              ))}
                            </Form.Select>
                          </Col>
                        </Col>
                        <Col className="col-6">
                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                            District<sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col className="col-12">
                            <Form.Select
                              name="districtForParmanent"
                              type="select"
                              defaultValue={values.districtForParmanent}
                              onChange={handleFormData("districtForParmanent")}
                              className="rounded-0 figure-caption"
                              placeholder="Select District"
                              required
                              size="sm"
                            // onKeyUp={AllInputValueCheckFillUp}
                            >
                              <option>Select district</option>
                              {isadddist.map((data) => (
                                <option>{data.name}</option>
                              ))}
                            </Form.Select>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-6">
                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                            Taluka<sup className="text-danger">*</sup>
                          </FormLabel>
                          <Col className="col-12">
                            <Input
                              name="talukaForParmanent"
                              type="select"
                              defaultValue={values.talukaForParmanent}
                              onChange={handleFormData("talukaForParmanent")}
                              className="rounded-0 figure-caption"
                              placeholder="Select Taluka"
                              required
                              size="sm"
                            // onKeyUp={AllInputValueCheckFillUp}
                            >
                              <option>Select taluka</option>
                              {isaddtaluka.map((data) => (
                                <option>{data.name}</option>
                              ))}
                            </Input>
                          </Col>
                        </Col>
                        <Col className="col-6">
                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                            Pin/Zip Code
                          </FormLabel>
                          <Col className="col-12">
                            <Input
                              name="zipCodeForParmanent"
                              type="text"
                              defaultValue={values.zipCodeForParmanent}
                              onChange={handleFormData("zipCodeForParmanent")}
                              className="rounded-0 figure-caption"
                              placeholder="Enter Pin/Zip code here"
                              required
                              size="sm"
                            // onKeyUp={AllInputValueCheckFillUp}
                            />
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </CardBody>
              <CardFooter className="bg-transparent">
                <Col className=" ">
                  <Col lg="12" className="col-12 ">
                    <Row className="g-2 form">
                      <Col className="text-start col-6">
                        <Button
                          variant="primary"
                          className="text-uppercase font-size-11 fw-bold"
                          onClick={prevStep}
                        >
                          Previous
                        </Button>
                      </Col>
                      <Col className="col-6">
                        <Row className="g-2 form">
                          <Col className="col-6">
                            <Button variant="outline-dark text-uppercase fw-bold font-size-11">
                              Cancel
                            </Button>
                          </Col>
                          <Col className="col-6">
                            <Button
                              className="font-size-11 fw-bold text-uppercase"
                              type="submit"
                              disabled={
                                values.building !== "" &&
                                  values.street !== "" &&
                                  values.country !== "" &&
                                  values.state !== "" &&
                                  values.city !== "" &&
                                  values.district !== "" &&
                                  values.taluka !== "" &&
                                  values.zipCode !== "" &&
                                  values.streetForPermanent !== "" &&
                                  values.countryForParmanent !== "" &&
                                  values.stateForParmanent !== "" &&
                                  values.cityForParmanent !== "" &&
                                  values.districtForParmanent !== "" &&
                                  values.buildingForPermanent !== "" &&
                                  values.talukaForParmanent !== "" &&
                                  values.zipCodeForParmanent !== ""
                                  ? false
                                  : true
                              }
                              variant={
                                values.building !== "" &&
                                  values.street !== "" &&
                                  values.country !== "" &&
                                  values.state !== "" &&
                                  values.city !== "" &&
                                  values.district !== "" &&
                                  values.taluka !== "" &&
                                  values.zipCode !== "" &&
                                  values.buildingForPermanent !== "" &&
                                  values.streetForPermanent !== "" &&
                                  values.countryForParmanent !== "" &&
                                  values.stateForParmanent !== "" &&
                                  values.cityForParmanent !== "" &&
                                  values.districtForParmanent !== "" &&
                                  values.talukaForParmanent !== "" &&
                                  values.zipCodeForParmanent !== ""
                                  ? bgChangeDarkToBlue
                                  : bgBlueForOtpButton
                              }
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
          </Form>
        </Mobile>
      </div>
    </>
  );
};
export default AddressDetails;

{
  /* <Card className="">
              <Form onSubmit={SubmitForm}>
                <CardHeader className="bg-transparent">
                  <Col className="col-12 ">
                    <FormLabel className="font-size-14 fw-bold Ri-text-color-main-menu">

                      Address Details
                    </FormLabel>

                  </Col>
                </CardHeader>
                <CardBody>

                  <Row className="g-2 form">


                    <Col className="col-12">
                      <Card className="">
                        <CardHeader>
                          <Col>
                            <Row className="g-2 form">
                              <Col className="col-12 ">
                                <h6>
                                  <label
                                    onClick={() => setOpen1(!open1)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open1}
                                    className="font-size-14 fw-bold Ri-text-color-main-menu"
                                  >
                                    Permanent Address
                                  </label>
                                </h6>
                              </Col>
                            </Row>
                          </Col>
                        </CardHeader>
                        <CardBody>
                          <Row className="g-2 form">
                            <Collapse in={open1}>
                              <div>
                                <Col lg="12" className="">

                                  <Col lg="6">
                                    <Col lg="6" className="p-1">
                                      House/Flat No./Building
                                      <sup className="text-danger">*</sup>
                                    </Col>
                                    <Col lg="6">
                                      <Input
                                        className="rounded-0"
                                        name="building"
                                        defaultValue={values.building}
                                        type="text"
                                        placeholder="Enter First name here"
                                        onChange={handleFormData("building")}
                                        required
                                      />
                                    </Col>
                                  </Col>
                                  <Col lg="6">
                                    <Col lg="6" className="p-1">
                                      Street details
                                      <sup className="text-danger">*</sup>
                                    </Col>
                                    <Col lg="6">
                                      <Input
                                        className="rounded-0"
                                        name="street"
                                        defaultValue={values.street}
                                        type="text"
                                        placeholder="Enter Street name here"
                                        onChange={handleFormData("street details")}
                                        required
                                      />
                                    </Col>
                                  </Col>
                                  <Col lg="6">
                                    <Col lg="6" className="p-1">
                                      Landmark
                                    </Col>
                                    <Col lg="6">
                                      <Input
                                        className="rounded-0"
                                        name="Landmark"
                                        defaultValue={values.landmark}
                                        type="text"
                                        onChange={handleFormData("landmark")}
                                        placeholder="Enter landmark name here"
                                      />
                                    </Col>
                                  </Col>
                                </Col>
                                <InputGroup>
                                  <Col>
                                    <Col sm="6" className="p-2">
                                      <Col className="p-2">
                                        Country<sup className="text-danger">*</sup>
                                      </Col>
                                      <Input
                                        className="rounded-0"
                                        name="country"
                                        type="select"
                                        defaultValue={values.country}
                                        onChange={handleFormData("country")}
                                        required
                                      >
                                        <option selected>Select Country</option>
                                        <option>India</option>
                                      </Input>
                                    </Col>
                                  </Col>
                                  <Col>
                                    <Col sm="6" className="p-2">
                                      <Col className="p-2">
                                        State<sup className="text-danger">*</sup>
                                      </Col>
                                      <Input
                                        className="rounded-0"
                                        name="state"
                                        type="select"
                                        defaultValue={values.state}
                                        onChange={handleFormData("state")}
                                        required
                                      >
                                        <option selected>Select state</option>
                                        <option>Maharashtra</option>
                                      </Input>
                                    </Col>
                                  </Col>
                                </InputGroup>
                                <InputGroup>
                                  <Col>
                                    <Col sm="6" className="p-2">
                                      <Col className="p-2">City</Col>
                                      <Col>
                                        <Input
                                          className="rounded-0"
                                          name="city"
                                          type="select"
                                          defaultValue={values.city}
                                          onChange={handleFormData("city")}
                                        >
                                          <option selected>Select city</option>
                                          <option>pune</option>
                                          <option>mumbai</option>
                                        </Input>
                                      </Col>
                                    </Col>
                                  </Col>
                                  <Col>
                                    <Col sm="6" className="p-2">
                                      <Col className="p-2">District</Col>
                                      <Col>
                                        <Input
                                          className="rounded-0"
                                          name="district"
                                          type="select"
                                          defaultValue={values.district}
                                          onChange={handleFormData("district")}
                                        >
                                          <option>Select Districts</option>
                                          <option>Pune</option>
                                        </Input>
                                      </Col>
                                    </Col>
                                  </Col>
                                </InputGroup>
                                <InputGroup>
                                  <Col>
                                    <Col sm="6" className="p-2">
                                      <Col sm="6" className="p-2">
                                        Taluka
                                      </Col>
                                      <Col sm="6">
                                        <Input
                                          className="rounded-0"
                                          name="taluka"
                                          type="select"
                                          defaultValue={values.taluka}
                                          onChange={handleFormData("taluka")}
                                        >
                                          <option selected>Select Taluka</option>
                                          <option>pune</option>
                                          <option>mumbai</option>
                                        </Input>
                                      </Col>
                                    </Col>
                                  </Col>
                                  <Col>
                                    <Col sm="6" className="p-2">
                                      <Col sm="6" className="p-2">
                                        Pin/Zip Code
                                      </Col>
                                      <Col sm="6">
                                        <Input
                                          className="rounded-0"
                                          name="zipcode"
                                          type="number"
                                          placeholder="411016"
                                          defaultValue={values.zipCode}
                                          onChange={handleFormData("zipcode")}
                                        ></Input>
                                      </Col>
                                    </Col>
                                  </Col>
                                </InputGroup>
                              </div>
                            </Collapse>
                          </Row>
                        </CardBody>

                      </Card>
                    </Col>
                    <Col>&nbsp;</Col>
                    <Col className="col-12">
                      <Card className="p-1">
                        <Col lg="12" className="p-2">
                          <InputGroup className="d-flex">
                            <Col>
                              <Col>
                                <Col lg="1" className="d-flex my-2 mx-1 ">
                                  <h6>
                                    <b
                                      onClick={() => setOpen(!open)}
                                      aria-controls="permanentadd"
                                      aria-expanded={open}
                                    >
                                      Permanent Address
                                    </b>
                                  </h6>
                                </Col>
                              </Col>
                            </Col>
                            <Col lg="6" className="float-lg-right my-1 m-2">
                              <a>
                                <i
                                  className="fa fa-chevron-down"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </Col>
                          </InputGroup>

                          <InputGroup className="d-flex">
                            <Col>
                              <Col>
                                <Col lg="1" className="d-flex my-2 mx-2 ">
                                  <Input type="checkbox"></Input>
                                  &nbsp;&nbsp;&nbsp;
                                  <a>
                                    <b>Same as present address</b>
                                  </a>
                                </Col>
                              </Col>
                            </Col>
                            <Col lg="6" className="float-lg-right my-2 m-2"></Col>
                          </InputGroup>
                        </Col>

                        <Collapse in={open}>
                          <div id="permanentadd">
                            <Col lg="12" className="p-1">
                              <Col lg="6">
                                <Col lg="6" className="p-1">
                                  House/Flat No./Building
                                  <sup className="text-danger">*</sup>
                                </Col>
                                <Col lg="6">
                                  <Input
                                    className="rounded-0"
                                    name="building"
                                    defaultValue={values.building}
                                    type="text"
                                    placeholder="Enter your House no."
                                    onChange={handleFormData("building")}
                                    required
                                  />
                                </Col>
                              </Col>
                              <Col lg="6">
                                <Col lg="6" className="p-1">
                                  Street details
                                  <sup className="text-danger">*</sup>
                                </Col>
                                <Col lg="6">
                                  <Input
                                    className="rounded-0"
                                    name="street"
                                    defaultValue={values.street}
                                    type="text"
                                    placeholder="Enter street details."
                                    onChange={handleFormData("street")}
                                    required
                                  />
                                </Col>
                              </Col>
                              <Col lg="6">
                                <Col lg="6" className="p-1">
                                  Landmark
                                </Col>
                                <Col lg="6">
                                  <Input
                                    className="rounded-0"
                                    name="landmark"
                                    defaultValue={values.landmark}
                                    type="text"
                                    placeholder="Enter Landmark."
                                    onChange={handleFormData("landmark")}
                                  />
                                </Col>
                              </Col>
                            </Col>
                            <InputGroup>
                              <Col>
                                <Col sm="6" className="p-2">
                                  <Col className="p-2">
                                    Country<sup className="text-danger">*</sup>
                                  </Col>
                                  <Input
                                    className="rounded-0"
                                    name="country"
                                    type="select"
                                    defaultValue={values.country}
                                    onChange={handleFormData("country")}
                                  >
                                    <option selected>Select Country</option>
                                    <option>India</option>
                                  </Input>
                                </Col>
                              </Col>

                              <Col>
                                <Col sm="6" className="p-2">
                                  <Col className="p-2">
                                    State<sup className="text-danger">*</sup>
                                  </Col>
                                  <Input
                                    className="rounded-0"
                                    name="state"
                                    type="select"
                                    defaultValue={values.state}
                                    onChange={handleFormData("State")}
                                    required
                                  >
                                    <option selected>Select state</option>
                                    <option>Maharashtra</option>
                                  </Input>
                                </Col>
                              </Col>
                            </InputGroup>

                            <InputGroup>
                              <Col>
                                <Col sm="6" className="p-2">
                                  <Col className="p-2">City</Col>
                                  <Col sm="12">
                                    <Input
                                      className="rounded-0"
                                      name="city"
                                      type="select"
                                      defaultValue={values.city}
                                      onChange={handleFormData("city")}
                                    >
                                      <option selected>Select city</option>
                                      <option>pune</option>
                                      <option>mumbai</option>
                                    </Input>
                                  </Col>
                                </Col>
                              </Col>

                              <Col>
                                <Col sm="6" className="p-2">
                                  <Col className="p-2">District</Col>
                                  <Col>
                                    <Input
                                      className="rounded-0"
                                      name="district"
                                      type="select"
                                      defaultValue={values.district}
                                      onChange={handleFormData("district")}
                                    >
                                      <option>Select District</option>
                                      <option>Pune</option>
                                    </Input>
                                  </Col>
                                </Col>
                              </Col>
                            </InputGroup>

                            <InputGroup>
                              <Col>
                                <Col sm="6" className="p-2">
                                  <Col className="p-2">Taluka</Col>
                                  <Col sm="12">
                                    <Input
                                      className="rounded-0"
                                      name="taluka"
                                      type="select"
                                      defaultValue={values.taluka}
                                      onChange={handleFormData("taluka")}
                                    >
                                      <option>Select Taluka</option>
                                      <option>Pune</option>
                                    </Input>
                                  </Col>
                                </Col>
                              </Col>
                              <Col>
                                <Col sm="6" className="p-2">
                                  <Col className="p-2">
                                    Pin/Zip Code
                                    <sup className="text-danger">*</sup>
                                  </Col>
                                  <Col sm="12">
                                    <Input
                                      className="rounded-0"
                                      name="zipCode"
                                      type="text"
                                      defaultValue={values.zipCode}
                                      onChange={handleFormData("zipCode")}
                                    />
                                  </Col>
                                </Col>
                              </Col>
                            </InputGroup>
                          </div>
                        </Collapse>
                      </Card>
                    </Col>

                  </Row>
                </CardBody>
               
              </Form>
            </Card> */
}
