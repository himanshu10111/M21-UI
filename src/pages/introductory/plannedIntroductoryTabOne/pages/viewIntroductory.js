import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CloseButton,
  Container,
  FormLabel,
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link, useParams } from "react-router-dom";
import { CardBody, CardFooter, Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";

const ViewIntroductory = () => {
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

  const navigate = useNavigate();
  const handleIntroductoryClick = (id) => {
    navigate(`/auth/login/introductory/addattendees/${id}`);
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

  return (
    <>
      <section>
        <Container>
          <Col sm="12" className="p-4">
            <Row className="g-2 form">
              <Col sm="2">&nbsp;</Col>
              <Col sm="8">
                <Card className="border-0 shadow rounded-0">
                  <CardHeader className="p-4 border-0">
                    <Col sm="12">
                      <Row className="g-2 form">
                        <Col sm="8">
                          <Col sm="12">
                            <h2>Introductory Meeting details</h2>
                          </Col>
                          <Col sm="12" className="text-uppercase">
                            <Row>
                              <Col sm="4" className="pe-0">
                                is_sn_dn_yyyymmdd
                              </Col>
                              <Col sm="4" className="text-success">
                                {introductory.status === 1
                                  ? "Approve"
                                  : introductory.status === 0
                                  ? "Reject"
                                  : "New"}
                              </Col>
                            </Row>
                          </Col>
                        </Col>
                        <Col sm="4" className="text-end">
                          <Link to="/introductory">
                            {" "}
                            <CloseButton />
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                  </CardHeader>
                  <CardBody className="border-0">
                    <Row className="g-2 form">
                      <Col sm="12" className="form-control">
                        <Col sm="12" className="">
                          <Row className="g-2 form">
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="6">
                                  <FormLabel>submitted by</FormLabel>
                                  <Col sm="12" className="fw-bold">
                                    Name Surname(M21ID)
                                  </Col>
                                </Col>
                                <Col sm="6">
                                  <FormLabel>submitted date</FormLabel>
                                  <Col sm="12" className="fw-bold">
                                    {formatDate(introductory.date)}
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col sm="12" className="border-bottom pt-2"></Col>
                          </Row>
                        </Col>
                        <Col sm="12">
                          <Row>
                            <Col sm="3">
                              <FormLabel>Introductory type</FormLabel>
                              <Col sm="12" className="fw-bold">
                                {introductory.type}
                              </Col>
                            </Col>
                            <Col sm="2">
                              <FormLabel>M21 wing</FormLabel>
                              <Col sm="12" className="fw-bold">
                                {introductory.m21Type}
                              </Col>
                            </Col>
                            <Col sm="3">
                              <FormLabel>Special introductory drive</FormLabel>
                              <Col sm="12" className="fw-bold">
                                {introductory.specialIntroductoryDrive}
                              </Col>
                            </Col>
                            <Col sm="2">
                              <FormLabel>Language</FormLabel>
                              <Col sm="12" className="fw-bold">
                                {introductory.meetingLanguage}
                              </Col>
                            </Col>
                            <Col sm="2">
                              <FormLabel>Introductory level</FormLabel>
                              <Col sm="12" className="fw-bold">
                                {introductory.introductoryLevel}
                              </Col>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="12">
                          <Row className="g-2 form">
                            <Col sm="6">
                              <FormLabel>Meeting date and time</FormLabel>
                              <Col sm="12" className="fw-bold">
                                {formatDate(introductory.date)} | {introductory.fromTime} AM
                                - {introductory.toTime} PM
                              </Col>
                            </Col>
                            <Col sm="6">
                              <FormLabel> Location</FormLabel>
                              <Col sm="12" className="fw-bold">
                                {introductory.location}
                              </Col>
                            </Col>
                          </Row>
                        </Col>
                      </Col>
                      <Col sm="12" className="form-control">
                        <Row className="g-2 form">
                          <Col sm="12">
                            <Row>
                              <Col sm="6">
                                <FormLabel>introductor 1</FormLabel>
                                <Col sm="12" className="fw-bold">
                                  {introductory.introducer1}
                                </Col>
                              </Col>
                              <Col sm="6">
                                <FormLabel>introductor 2</FormLabel>
                                <Col sm="12" className="fw-bold">
                                  {introductory.introducer2}
                                </Col>
                              </Col>
                            </Row>
                          </Col>
                          <Col sm="12">
                            <FormLabel>Comment</FormLabel>
                            <Col sm="12" className="fw-bold">
                              {introductory.comment}
                            </Col>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="border-0 bg-white">
                    <Col sm="12">
                      <Row className="g-2 form">
                        {introductory.status === 1 ? ( // If status is approved
                          <>
                            <Col sm="6">
                              <Button className="border-outline-primary rounded-0 bg-white text-primary">
                                Cancel
                              </Button>
                            </Col>
                            <Col sm="6" className="text-end">
                              <Button className="rounded-0"
                                onClick={() =>handleIntroductoryClick(introductory.id)}>
                                Add attendees
                              </Button>
                            </Col>
                          </>
                        ) : introductory.status === 0 ? ( // If status is rejected
                          <Col sm="12" className="text-end">
                            <Button className="border-outline-primary rounded-0 bg-white text-primary">
                              Close
                            </Button>
                          </Col>
                        ) : null}
                      </Row>
                    </Col>
                  </CardFooter>
                </Card>
              </Col>
              <Col sm="2">&nbsp;</Col>
            </Row>
          </Col>
        </Container>
      </section>
    </>
  );
};

export default ViewIntroductory;
