import React, { useEffect, useState } from "react";
import { Button, Card, Form, FormLabel } from "react-bootstrap";

import { CardBody, CardHeader, CardFooter, Col, Row, Input } from "reactstrap";

const IntroductoryBasicDetail = ({
  nextStep,
  handleFormData,
  values,
  handleFormChecked,
}) => {
  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [orgMap, setOrgMap] = useState([]);
  const [isaddCount, setIsAddcount] = useState([]);
  const [isaddState, setIsAddState] = useState([]);
  const [isadddist, setIsAddDist] = useState([]);
  const [isaddtaluka, setIsAddTaluka] = useState([]);

  useEffect(() => {
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

  const IntroBasicDetailHandler = (event) => {
    event.preventDefault();
    nextStep();
  };

  return (
    <>
      <Card>
        <Form onSubmit={IntroBasicDetailHandler}>
          <CardHeader>Introductory Basic Detail</CardHeader>
          <CardBody>
            <Col sm="12">
              <Row className="g-2 form">
                <Col sm="12">
                  <Row className="g-2 form">
                    <Col sm="3">
                      <FormLabel>Introductory Type</FormLabel>
                      <Input
                        type="select"
                        name="introType"
                        defaultValue={values.introType}
                        onChange={handleFormData("introType")}
                        className="rounded-0 figure-caption"
                        required
                        size="sm"
                      >
                        <option>Choose your option</option>
                        <option>Online</option>
                        <option>Offline</option>
                      </Input>
                    </Col>
                    <Col sm="3">
                      <FormLabel>M21 Wing</FormLabel>
                      <Input
                        type="select"
                        name="m21Wing"
                        defaultValue={values.m21Wing}
                        onChange={handleFormData("m21Wing")}
                        className="rounded-0 figure-caption"
                        required
                        size="sm"
                      >
                        <option>Choose your option</option>
                        {orgMap.map((data) => (
                          <option>{data.m21Wing} </option>
                        ))}
                      </Input>
                    </Col>
                    <Col sm="3">
                      <FormLabel>Special introductory drive</FormLabel>
                      <Input
                        type="select"
                        name="introDrive"
                        defaultValue={values.introDrive}
                        onChange={handleFormData("introDrive")}
                        className="rounded-0 figure-caption"
                        required
                        size="sm"
                      >
                        <option>Choose your option</option>
                        <option>None</option>
                        <option>Womens</option>
                        <option>Special(High potential)</option>
                      </Input>
                    </Col>
                    <Col sm="3">
                      <FormLabel>Meeting Language</FormLabel>
                      <Input
                        type="select"
                        name="meetLang"
                        defaultValue={values.meetLang}
                        onChange={handleFormData("meetLang")}
                        className="rounded-0 figure-caption"
                        required
                        size="sm"
                      >
                        <option>Choose your option</option>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Marathi</option>
                      </Input>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12">
                  <b>introductory level</b>
                </Col>
                <Col sm="12">
                  <Row className="g-2 form">
                    <Col sm="3">
                      <Col className="form-check">
                        <Form.Check
                          type="checkbox"
                          name="introLevel"
                          defaultValue={values.introLevel}
                          onChange={handleFormChecked("introLevel")}
                          className="rounded-0 figure-caption"
                          size="sm"
                        />
                        Country
                        <br />
                        <sub>Introductory on Country level</sub>
                      </Col>
                    </Col>
                    <Col sm="3">
                      <Col className="form-check">
                        <Form.Check
                          type="checkbox"
                          name="introLevel"
                          defaultValue={values.introLevel}
                          onChange={handleFormChecked("introLevel")}
                          className="rounded-0 figure-caption"
                          size="sm"
                        />
                        SRC/state
                        <br />
                        <sub>Introductory on State level</sub>
                      </Col>
                    </Col>
                    <Col sm="3">
                      <Col className="form-check">
                        <Form.Check
                          type="checkbox"
                          name="introLevel"
                          defaultValue={values.introLevel}
                          onChange={handleFormChecked("introLevel")}
                          className="rounded-0 figure-caption"
                          size="sm"
                        />
                        DRC/District
                        <br />
                        <sub>Introductory on District level</sub>
                      </Col>
                    </Col>
                    <Col sm="3">
                      <Col className="form-check">
                        <Form.Check
                          type="checkbox"
                          name="introLevel"
                          defaultValue={values.introLevel}
                          onChange={handleFormChecked("introLevel")}
                          className="rounded-0 figure-caption"
                          size="sm"
                        />
                        TRC/Tehshil
                        <br />
                        <sub>Introductory on Tehshil level</sub>
                      </Col>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12">
                  <Row className="g-2 form">
                    <Col sm="3">
                      <FormLabel>Country</FormLabel>
                      <Input
                        type="select"
                        name="country"
                        defaultValue={values.country}
                        onChange={handleFormData("country")}
                        className="rounded-0 figure-caption"
                        size="sm"
                      >
                        <option selected disabled value="">
                          Select Country
                        </option>
                        {isaddCount.map((data) => (
                          <>
                            <option>{data.name}</option>
                            setIsIndia(dat.name)
                          </>
                        ))}
                      </Input>
                    </Col>
                    <Col sm="3">
                      <FormLabel>State</FormLabel>
                      <Input
                        type="select"
                        name="state"
                        defaultValue={values.state}
                        onChange={handleFormData("state")}
                        className="rounded-0 figure-caption"
                        size="sm"
                      >
                        <option>Choose your option</option>
                        {isaddState.map((data) => (
                          <option>{data.name}</option>
                        ))}
                      </Input>
                    </Col>
                    <Col sm="3">
                      <FormLabel>District</FormLabel>
                      <Input
                        type="select"
                        name="district"
                        defaultValue={values.district}
                        onChange={handleFormData("district")}
                        className="rounded-0 figure-caption"
                        size="sm"
                      >
                        <option>Choose your option</option>
                        {isadddist.map((data) => (
                          <option>{data.name}</option>
                        ))}
                      </Input>
                    </Col>
                    <Col sm="3">
                      <FormLabel>Tehshil</FormLabel>
                      <Input
                        type="select"
                        name="tehshil"
                        defaultValue={values.tehshil}
                        onChange={handleFormData("tehshil")}
                        className="rounded-0 figure-caption"
                        size="sm"
                      >
                        <option>Select Taluka</option>
                        {isaddtaluka.map((data) => (
                          <option>{data.name}</option>
                        ))}
                      </Input>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </CardBody>
          <CardFooter>
            <Col sm="12">
              <Row className="g-2 form">
                <Col sm="6">
                  <Button
                    size="lg"
                    className="btn-outline-secondary bg-white rounded-0 text-black figure-caption"
                  >
                    Cancel
                  </Button>
                </Col>
                <Col sm="6" className="text-end">
                  <Button
                    size="lg"
                    type="submit"
                    className=" rounded-0 figure-caption text-white"
                  >
                    Next
                  </Button>
                </Col>
              </Row>
            </Col>
          </CardFooter>
        </Form>
      </Card>
    </>
  );
};

export default IntroductoryBasicDetail;
