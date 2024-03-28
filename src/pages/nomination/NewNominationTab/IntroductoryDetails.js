import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  Input,
  Row,
} from "reactstrap";
import Button from "react-bootstrap/Button";
import { FormGroup } from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import { useMediaQuery } from "react-responsive";
import { Tooltip, OverlayTrigger } from 'react-bootstrap';


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const IntroductoryDetails = ({
  nextStep,
  prevStep,
  handleFormData,
  values,
}) => {

  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [meetings, setMeeting] = useState([]);
  const [orgMap, setOrgMap] = useState([]);

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
      })

    fetch(`${BaseURL}/api/org/wings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => setOrgMap(data));

  }, []);


  const SubmitForm = (e) => {
    e.preventDefault();

    nextStep();
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayOfWeek}, ${day} ${month} ${year}`;
  };

  function formatTime(timeString) {
    if (typeof timeString !== "string" || timeString.trim() === "") {
      return "Invalid Time"; // or handle the error as needed
    }
    const timeComponents = timeString.split(':');
    if (timeComponents.length !== 3) {
      return "Invalid Time"; // or handle the error as needed
    }

    const hours = timeComponents[0];
    const minutes = timeComponents[1];
    const formattedTime = `${hours}:${minutes}`;

    return formattedTime;
  };


  const specialIntroDriveTooltip = (
    <Tooltip id="specialIntroDriveTooltip" className="bg-white">
      <label>Special introductory drive </label>
      <sub>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</sub>
    </Tooltip>
  );

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
                      <h5> Introductory Details</h5>
                    </CardHeader>
                    <CardBody className="border-0 px-0">
                      <Row className="g-2 form">
                        <Col sm="12" className="form-label mb-4">
                          <Row>
                            <Col sm="4">
                              <label className="small form-label">
                                Introductory type{" "}
                                <sup className="text-danger">*</sup>
                              </label>
                              <Col sm="12">
                                <Input
                                  type="select"
                                  className="rounded-0"
                                  name="introType"
                                  defaultValue={values.introType}
                                  onChange={handleFormData("introType")}
                                  required
                                  size="sm"
                                >
                                  <option value="" selected disabled>
                                    {" "}
                                    Choose your option
                                  </option>
                                  <option>Online</option>
                                  <option>Offline</option>
                                </Input>
                              </Col>
                            </Col>
                            <Col
                              sm="8"
                              className=" p-2 bg-secondary figure-caption"
                            >
                              <label className="">Online Introductory</label>

                              <Col className="lh-1">
                                <sub>
                                  Online introductory is video conference
                                  meeting, that requires good intern et
                                  connection and zoom app on mobile or laptop.
                                  Online introductory is for 3 hours.
                                  Participant is expected to attend complete
                                  session.
                                </sub>
                              </Col>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="12">
                          <Row>
                            <Col sm="5">
                              <label className="form-label">
                                <sub>M21 Wing</sub>
                                <sup className="text-danger">*</sup>
                              </label>
                              <Col sm="12">
                                <Input
                                  type="select"
                                  className="rounded-0"
                                  name="m21wing"
                                  defaultValue={values.m21wing}
                                  onChange={handleFormData("m21wing")}
                                  required
                                  size="sm"
                                >
                                  <option selected disabled value=''>Select organization/wing</option>
                                  {orgMap.map((data) => (
                                    <option>{data.m21Wing} </option>
                                  ))}
                                </Input>
                              </Col>
                            </Col>
                            <Col sm="3">
                              <label className="form-label">
                                <sub>Special introduction drive</sub>
                                <sup>
                                  {" "}
                                  {/* <FontAwesomeIcon icon={faCircleInfo} onClick={handleModalShow} /> */}
                                  <OverlayTrigger
                                    placement="right"
                                    overlay={specialIntroDriveTooltip}
                                    trigger="click"
                                    rootClose
                                  >
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </OverlayTrigger>

                                </sup>
                              </label>
                              <Col sm="12">
                                <Input
                                  type="select"
                                  className="rounded-0"
                                  name="splintrodrive"
                                  defaultValue={values.splintrodrive}
                                  onChange={handleFormData("splintrodrive")}
                                  required
                                  size="sm"
                                >
                                  <option value="" selected disabled>
                                    Select introduction Wing{" "}
                                  </option>
                                  <option>None</option>
                                  <option>Womens</option>
                                  <option>Special(High Potential)</option>
                                </Input>
                              </Col>
                            </Col>
                            <Col sm="4">
                              <Col className="form-label">
                                <sub>Preferred language by guest</sub>
                                <sup className="text-danger">*</sup>
                              </Col>
                              <Col>
                                <Input
                                  type="select"
                                  className="rounded-0"
                                  name="prelangguest"
                                  defaultValue={values.prelangguest}
                                  onChange={handleFormData("prelangguest")}
                                  required
                                  size="sm"
                                >
                                  <option value="" selected disabled>
                                    Choose your option
                                  </option>
                                  <option>English</option>
                                  <option>Marathi</option>
                                  <option>Hindi</option>
                                </Input>
                              </Col>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="12">
                          <Col sm="6">
                            <label className="form-label">
                              <sub>Upcoming introductory</sub>
                              <sup className="text-danger">*</sup>
                            </label>
                            <Col>
                              <Input
                                type="select"
                                className="rounded-0"
                                name="upcomingintro"
                                defaultValue={values.upcomingintro}
                                onChange={handleFormData("upcomingintro")}
                                required
                                size="sm"
                              >
                                <option value="" selected disabled>
                                  Choose your option
                                </option>
                                {
                                  meetings.map((meeting) => (
                                    <option>
                                      {meeting.m21Type}&nbsp;{formatDate(meeting.date)}&nbsp;{meeting.fromTime}AM - {meeting.toTime}PM
                                    </option>
                                  ))}
                              </Input>
                            </Col>
                          </Col>
                        </Col>
                        <Col sm="12">
                          <label className="form-label">Comments</label>
                          <Col sm="9">
                            <Input
                              type="textarea"
                              className="rounded-0"
                              name="comment"
                              placeholder="Type here"
                              defaultValue={values.comment}
                              onChange={handleFormData("comment")}
                              required
                            />
                          </Col>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="border-0 bg-white">
                      <Col sm="12" className="pt-1">
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
                                    disabled={values.introType !=="" &&
                                  values.m21Wing !=="" && 
                                values.prelangguest !=="" &&
                              values.upcomingintro !== "" &&
                              values.comment !=="" ?
                            false : true }
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
                </FormGroup>
              </Form>
            </Row>
          </Col>
        </Col>
      </Desktop>
      <Mobile>
        <Col className="section">
          <Col className="col-12">
            <Card className="border-0">
              <Form onSubmit={SubmitForm}>
                <CardHeader className="bg-white bg-white border-bottom-0 px-5 ">
                  <Col className="form-label">
                    <h5> Introductory Details</h5>
                  </Col>
                </CardHeader>
                <CardBody className="">
                  <Row className="g-2 form pt-2">
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-12">
                          <Col lg="12" className="form-label">
                            <sub>Introductory type</sub>
                            <sup className="text-danger">*</sup>
                          </Col>
                          <Col lg="12">
                            <Input
                              type="select"
                              className="rounded-0"
                              name="introType"
                              defaultValue={values.introType}
                              onChange={handleFormData("introType")}
                              required
                              size="sm"
                            >
                              <option value="" selected>
                                choose your option
                              </option>
                              <option>A</option>
                              <option>B</option>
                              <option>c</option>
                            </Input>
                          </Col>
                        </Col>
                        <Col className="col-12">
                          <Col className="bg-secondary p-2">
                            <Row className="lh-1">
                              <Col className="col-12 figure-caption from-label border-0">
                                <sub>Online Introductory</sub>
                              </Col>
                              <Col className="col-12  figure-caption from-label">
                                <sub>
                                  Online introductory is video conference
                                  meeting, that requires good intern et
                                  connection and zoom app on mobile or laptop.
                                  Online introductory is for 3 hours.
                                  Participant is expected to attend complete
                                  session.
                                </sub>
                              </Col>
                            </Row>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-12">
                          <Col className="form-label">
                            <sub>M21 Wing</sub>
                            <sup className="text-danger">*</sup>
                          </Col>
                          <Col>
                            <Input
                              type="select"
                              className="rounded-0"
                              name="m21wing"
                              defaultValue={values.m21wing}
                              onChange={handleFormData("m21wing")}
                              required
                              size="sm"
                            >
                              <option value="" selected>
                                choose your option
                              </option>
                              <option>A</option>
                              <option>B</option>
                              <option>C</option>
                            </Input>
                          </Col>
                        </Col>
                        <Col className="col-12">
                          <Col className="form-label">
                            <sub>Special introductory drive</sub>
                            <sub>
                              <FontAwesomeIcon icon={faCircleInfo} />
                            </sub>
                          </Col>
                          <Col>
                            <Input
                              type="select"
                              className="rounded-0"
                              name="splintrodrive"
                              defaultValue={values.splintrodrive}
                              onChange={handleFormData("splintrodrive")}
                              required
                              size="sm"
                            >
                              <option value="" selected>
                                Select the options
                              </option>
                              <option>none</option>
                            </Input>
                          </Col>
                        </Col>
                        <Col className="col-12">
                          <Col className="form-label">
                            <sub>Preferred language by guest</sub>
                            <sup className="text-danger">*</sup>
                          </Col>
                          <Col>
                            <Input
                              type="select"
                              className="rounded-0"
                              name="prelangguest"
                              defaultValue={values.prelangguest}
                              onChange={handleFormData("prelangguest")}
                              required
                              size="sm"
                            >
                              <option value="" selected>
                                Select your options
                              </option>
                              <option>none</option>
                            </Input>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="col-12">
                      <Col className="form-label">
                        <sub>Upcoming introductory</sub>
                        <sup className="text-danger">*</sup>
                      </Col>
                      <Col className="col-12">
                        <Input
                          type="select"
                          className="rounded-0"
                          name="upcmeintro"
                          defaultValue={values.upcmeintro}
                          onChange={handleFormData("upcmeintro")}
                          required
                          size="sm"
                        >
                          <option value="" selected>
                            Select your options
                          </option>
                          <option>None</option>
                        </Input>
                      </Col>
                    </Col>
                    <Col className="col-12">
                      <Col className="form-label">
                        <sub> Comments</sub>
                      </Col>
                      <Col className="col-10">
                        <Input type="textarea" className="rounded-0" required />
                      </Col>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter className="border-0 bg-white">
                  <Col className="col-12">
                    <Col className="p-3 col-12">
                      <Row>
                        <Col className="col-4">
                          <Button
                            onClick={prevStep}
                            size="lg"
                            className=" rounded-0 text-white figure-caption "
                          >
                            Previous
                          </Button>
                        </Col>

                        <Col className="col-4">
                          <Button
                            size="lg"
                            className="btn-outline-secondary bg-white rounded-0 text-black figure-caption"
                          >
                            Cancel
                          </Button>
                        </Col>
                        <Col className="col-4">
                          <Button
                            size="lg"
                            type="submit"
                            onClick={SubmitForm}
                            className="col-12 rounded-0 figure-caption text-white"
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
        </Col>
      </Mobile>
    </>
  );
};

export default IntroductoryDetails;
