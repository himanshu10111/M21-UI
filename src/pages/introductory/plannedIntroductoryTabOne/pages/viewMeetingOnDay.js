import React, { useState, useEffect } from "react";
import { Button, Card, Col, FormLabel, Row, Dropdown } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody, CardFooter, Input } from "reactstrap";
import Popover from "react-bootstrap/Popover";
import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import SettingImg from "../../../../assets/img/Settings2.png";
import { useParams, useNavigate } from "react-router-dom";

const ViewMeetingOnDay = () => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Introductory Details</Popover.Header>
      <Popover.Body>
        <Col sm="12">
          <Row className="g-2 form">
            <Col sm="6">
              <Col sm="12">Submitted by</Col>
              <Col sm="12">Submitted date</Col>
              <Col sm="12">Introductory Type</Col>
              <Col sm="12">M21 Wing</Col>
              <Col sm="12">Special introductory drive</Col>
              <Col sm="12">Introductory level</Col>
              <Col sm="12">Meeting date & time</Col>
              <Col sm="12">Meeting date & time</Col>
              <Col sm="12">Language</Col>
              <Col sm="12">Location</Col>
            </Col>
            <Col sm="6">
              <Col sm="12">Prafull bhagat(M21 ID:12345)</Col>
              <Col sm="12">DD-MM-YYYY</Col>
              <Col sm="12">Online</Col>
              <Col sm="12">Technology</Col>
              <Col sm="12">Women</Col>
              <Col sm="12">Country- india</Col>
              <Col sm="12">Fri, 31 Dec 2021</Col>
              <Col sm="12">10:00 AM to 1:00Pm</Col>
              <Col sm="12">English</Col>
              <Col sm="12">Zoom meeting link</Col>
            </Col>
          </Row>
        </Col>
      </Popover.Body>
    </Popover>
  );

  const [totalAttendees, setTotalAttendees] = useState(0);

  const ViewMeetingTable = () => {
    const [attendees, setAttendees] = useState([]);
    const { id } = useParams();
    useEffect(() => {
      fetch(`${BaseURL}/api/nomination/nominee-details/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",

          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAttendees(data);
          setTotalAttendees(data.length);
          console.log(data);
        });
    }, [id]);
    console.log("Attendees", attendees)
    return (
      <>
        <Table>
          <thead className="bg-light">
            <tr>
              <th>
                <Input type="checkbox" />
              </th>
              <th>Attendees Name</th>
              <th>Phone</th>
              <th>District</th>
              <th>State</th>
              <th>M21 wing</th>
              <th>Refered By</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendees.map((attendee) => (
              <tr>
                <td>
                  <Input type="checkbox" />
                </td>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popover}
                >
                  <td>
                    {" "}
                    {attendee.firstName}&nbsp; {attendee.lastName}
                  </td>
                </OverlayTrigger>
                <td> {attendee.mobileNumber} </td>
                <td> {attendee.district} </td>
                <td> {attendee.state} </td>
                <td> {attendee.m21Wing} </td>
                <td>Prafull</td>
                <td>{attendee.status=== 1 ? "Confirm" : attendee.status===0 ? "Tentative" : attendee.status=== 2 ? "Unavailable": "Not interested"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  };

  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [introductory, setIntroductory] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`${BaseURL}/api/auth/get/introductory/metting/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIntroductory(data);
        console.log(data);
      });
  }, [id]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
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

  const navigate = useNavigate();
  const handleMarkAttendeeClick = (id) => {
    navigate(`/auth/login/introductory/meetingattendance/${id}`);
  };
  return (
    <>
      <Col sm="12" className="p-3">
        <Card className="border-0 rounded-0">
          <CardHeader className="border-0 rounded-0">
            <Col sm="12">
              <Row className="g-2 form">
                <Col sm="5" className="fw-bold fs-20">
                  View Planned Introductory Details
                </Col>
                <Col
                  sm="2"
                  className="bg-primary rounded-4 text-center text-white me-40"
                >
                  Mark attendance
                </Col>
                <Col sm="5"></Col>
              </Row>
            </Col>
          </CardHeader>
          <CardBody>
            <Col sm="12">
              <Row className="g-2 form">
                <Col sm="12" className="form-control">
                  <Row className="g-2 form">
                    <Col sm="12">
                      <label
                        className="text-uppercase fs-20"
                      >
                        {introductory.id}
                      </label>
                    </Col>
                    <Col></Col>
                    <Col sm="12">
                      <Row className="g-2 form">
                        <Col sm="2">
                          <FormLabel>introductory type</FormLabel>
                          <Col sm="12" className=" fw-bold mt-n10">
                            {introductory.type}
                          </Col>
                        </Col>
                        <Col sm="2">
                          <FormLabel>M21 wing</FormLabel>
                          <Col sm="12" className="fw-bold mt-n10">
                            {introductory.m21Type}
                          </Col>
                        </Col>
                        <Col sm="2">
                          <FormLabel>Special introductory deive</FormLabel>
                          <Col sm="12" className="fw-bold mt-n10">
                            {introductory.specialIntroductoryDrive}
                          </Col>
                        </Col>
                        <Col sm="2">
                          <FormLabel>Language </FormLabel>
                          <Col sm="12" className="fw-bold mt-n10">
                            {introductory.meetingLanguage}
                          </Col>
                        </Col>
                        <Col sm="2">
                          <FormLabel>introductory level </FormLabel>
                          <Col sm="12" className="fw-bold mt-n10">
                            {introductory.introductoryLevel}
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12">
                      <Row className="g-2 form">
                        <Col sm="2">
                          <FormLabel>Meeting date & time</FormLabel>
                          <Col sm="12" className="fw-bold mt-n10">
                            {formatDate(introductory.date)}
                              <br />
                              {introductory.fromTime}AM - {introductory.toTime}PM
                          </Col>
                        </Col>
                        <Col sm="2">
                          <FormLabel>Location</FormLabel>
                          <Col sm="12" className="fw-bold mt-n10">
                            {introductory.location} 
                          </Col>
                        </Col>
                        <Col sm="2">
                          <FormLabel>introductory 1</FormLabel>
                          <Col sm="12" className="fw-bold mt-n10">
                            {introductory.introducer1}
                          </Col>
                        </Col>
                        <Col sm="2">
                          <FormLabel>introductory 2</FormLabel>
                          <Col sm="12" className="fw-bold mt-n10">
                            {introductory.introducer2}
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12" className="p-3"></Col>
                <Col
                  sm="12"
                  className="p-2"
                >
                  <Row>
                    <Col sm="6">{totalAttendees} attendee added</Col>
                    <Col sm="6" className="text-end">
                      <img src={SettingImg} />
                    </Col>
                  </Row>
                </Col>

                <Col sm="12" className="">
                  <Row className="g-2 form">
                    <ViewMeetingTable />
                  </Row>
                </Col>
              </Row>
            </Col>
          </CardBody>
          <CardFooter>
            <Col sm="12">
              <Row className="g-2 form">
                <Col sm="9"></Col>
                <Col sm="1">
                  <Button className="border-outerline-primary rounded-0 bg-white text-primary text-uppercase">
                    cancel
                  </Button>
                </Col>
                <Col sm="2">
                  <Button
                    className="border-0 rounded-0"
                    onClick={() => handleMarkAttendeeClick(introductory.id)}
                  >
                    Mark Attendance
                  </Button>
                </Col>
              </Row>
            </Col>
          </CardFooter>
        </Card>
      </Col>
    </>
  );
};

export default ViewMeetingOnDay;
