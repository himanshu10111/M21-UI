import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Dropdown,
  Row,
  Table,
  Accordion,
  Carousel,
  Pagination,
} from "react-bootstrap";
import { Card, CardBody, CardFooter, CardHeader, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import SettingIcon from "../../../assets/img/Settings2.png";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import UpdatePreferences from "./updatePreferences";
import UpdateAvailabilty from "./updateAvailability";
import PlaceholderLoading from "../../../component/placeholder/placeholder";
import { NumberOfRow } from "../../../component/numberOfRowTable/NumberOfRow";

const MyFacilitatorTable = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [meetings, setMeeting] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = NumberOfRow;

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
        setLoading(false);
        console.log(data);
      });
  }, []);
  const TableFacilitator = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = meetings.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
    return (
      <>
        <Table striped>
          <thead>
            <tr>
              <th>
                <Input type="checkbox" />
              </th>
              <th>Meeting ID</th>
              <th>Type</th>
              <th>Date & Time</th>
              <th>Language</th>
              <th>Location</th>
              <th>Level</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {itemsToDisplay.map((meeting) => (
              <tr key={meeting.id}>
                <td>
                  <Input type="checkbox" />
                </td>
                <td>{meeting.id}</td>
                <td>{meeting.m21Type}</td>
                <td>
                  {meeting.date}
                  <br />
                  {meeting.fromTime}AM - {meeting.toTime}PM
                </td>
                <td>{meeting.meetingLanguage}</td>
                <td>{meeting.location}</td>
                <td>{meeting.introductoryLevel}</td>
                <td className="text-danger">New</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="bg-transparent border-0 text-dark"
                    >
                      Select
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/auth/login/introductory/viewfacility">
                        View
                      </Dropdown.Item>
                      <Dropdown.Item href="">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </Table>
        <Pagination>
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {Array.from(
            { length: Math.ceil(meetings.length / itemsPerPage) },
            (_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            )
          )}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(meetings.length / itemsPerPage)}
          />
        </Pagination>
      </>
    );
  };

  const UpdatePreferences = () => {
    navigate("/auth/log/introductory/updatepreferences");
  };
  const UpdateAvailabilty = () => {
    navigate("/auth/log/introductory/updateavailability");
  };

  return (
    <>
      <Col sm="12" className="p-2">
        <Card className="border-0 rounded-0">
          <CardBody className="border-0 rounded-0">
            <Col sm="12">
              <Row className="g-2 form">
                <Col sm="8"></Col>
                <Col sm="2">
                  <Button className="rounded-5" onClick={UpdatePreferences}>
                    UPDATE PREFERENCES
                  </Button>
                </Col>
                <Col sm="2">
                  <Button className="rounded-5" onClick={UpdateAvailabilty}>
                    UPDATE AVAILABILITY
                  </Button>
                </Col>
              </Row>
              &nbsp;
              <Col sm="12">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <AccordionBody className="h-50">
                      <Carousel
                        variant="dark"
                        indicators={false}
                        fade
                        slide={false}
                      >
                        <Carousel.Item className="">
                          <Row>
                            <Col sm="1">&nbsp;</Col>
                            <Col sm="10">
                              <Row>
                                <Col sm="3">
                                  <Card className="">
                                    <CardBody className="p-1">
                                      <Row className="g-2 form">
                                        <Col sm="12" className="p-2">
                                          <Row className="g-2 form">
                                            <Col
                                              sm="12"
                                              className="text-primary small"
                                            >
                                              <b>IM_INDIA_20211231</b>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="12">
                                          Fri, 31-12-2021 | 10:00 AM to 01:00 PM
                                        </Col>
                                        <Col sm="12">
                                          Online:{" "}
                                          <a className="text-primary small">
                                            <u>Zoom meeting details</u>
                                          </a>
                                        </Col>
                                      </Row>
                                    </CardBody>
                                  </Card>
                                </Col>
                                <Col sm="3">
                                  <Card className="">
                                    <CardBody className="p-1">
                                      <Row className="g-2 form">
                                        <Col sm="12" className="p-2">
                                          <Row className="g-2 form">
                                            <Col
                                              sm="12"
                                              className="text-primary small"
                                            >
                                              <b>IM_MH_20211231</b>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="12">
                                          Fri, 31-12-2021 | 10:00 AM to 01:00 PM
                                        </Col>
                                        <Col sm="12">
                                          Online:{" "}
                                          <a className="text-primary small">
                                            <u>Zoom meeting details</u>
                                          </a>
                                        </Col>
                                      </Row>
                                    </CardBody>
                                  </Card>
                                </Col>
                                <Col sm="3">
                                  <Card className="">
                                    <CardBody className="p-1">
                                      <Row className="g-2 form">
                                        <Col sm="12" className="p-2">
                                          <Row className="g-2 form">
                                            <Col
                                              sm="12"
                                              className="text-primary small"
                                            >
                                              <b>IM_NAG_20211231</b>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="12">
                                          Fri, 31-12-2021 | 10:00 AM to 01:00 PM
                                        </Col>
                                        <Col sm="12">
                                          Online:{" "}
                                          <a className="text-primary small">
                                            <u>Zoom meeting details</u>
                                          </a>
                                        </Col>
                                      </Row>
                                    </CardBody>
                                  </Card>
                                </Col>
                                <Col sm="3">
                                  <Card className="">
                                    <CardBody className="p-1">
                                      <Row className="g-2 form">
                                        <Col sm="12" className="p-2">
                                          <Row className="g-2 form">
                                            <Col
                                              sm="12"
                                              className="text-primary small"
                                            >
                                              <b>IM_NAG_20211231</b>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="12">
                                          Fri, 31-12-2021 | 10:00 AM to 01:00 PM
                                        </Col>
                                        <Col sm="12">
                                          Online:{" "}
                                          <a className="text-primary small">
                                            <u>Zoom meeting details</u>
                                          </a>
                                        </Col>
                                      </Row>
                                    </CardBody>
                                  </Card>
                                </Col>
                              </Row>
                            </Col>
                            <Col sm="1">&nbsp;</Col>
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="">
                          <Row>
                            <Col sm="1">&nbsp;</Col>
                            <Col sm="10">
                              <Row>
                                <Col sm="4">
                                  <Card className="">
                                    <CardBody className="p-1">
                                      <Row className="g-2 form">
                                        <Col sm="12" className="p-2">
                                          <Row className="g-2 form">
                                            <Col
                                              sm="12"
                                              className="text-primary small"
                                            >
                                              <b>IM_INDIA_20211231</b>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="12">
                                          Fri, 31-12-2021 | 10:00 AM to 01:00 PM
                                        </Col>
                                        <Col sm="12">
                                          Online:{" "}
                                          <a className="text-primary small">
                                            <u>Zoom meeting details</u>
                                          </a>
                                        </Col>
                                      </Row>
                                    </CardBody>
                                  </Card>
                                </Col>
                                <Col sm="4">
                                  <Card className="">
                                    <CardBody className="p-1">
                                      <Row className="g-2 form">
                                        <Col sm="12" className="p-2">
                                          <Row className="g-2 form">
                                            <Col
                                              sm="12"
                                              className="text-primary small"
                                            >
                                              <b>IM_INDIA_20211231</b>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="12">
                                          Fri, 31-12-2021 | 10:00 AM to 01:00 PM
                                        </Col>
                                        <Col sm="12">
                                          Online:{" "}
                                          <a className="text-primary small">
                                            <u>Zoom meeting details</u>
                                          </a>
                                        </Col>
                                      </Row>
                                    </CardBody>
                                  </Card>
                                </Col>
                                <Col sm="4">
                                  <Card className="">
                                    <CardBody className="p-1">
                                      <Row className="g-2 form">
                                        <Col sm="12" className="p-2">
                                          <Row className="g-2 form">
                                            <Col
                                              sm="12"
                                              className="text-primary small"
                                            >
                                              <b>IM_INDIA_20211231</b>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="12">
                                          Fri, 31-12-2021 | 10:00 AM to 01:00 PM
                                        </Col>
                                        <Col sm="12">
                                          Online:{" "}
                                          <a className="text-primary small">
                                            <u>Zoom meeting details</u>
                                          </a>
                                        </Col>
                                      </Row>
                                    </CardBody>
                                  </Card>
                                </Col>
                              </Row>
                            </Col>
                            <Col sm="1">&nbsp;</Col>
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="">
                          <Row>
                            <Col sm="1">&nbsp;</Col>
                            <Col sm="10">
                              <Row>
                                <Col sm="4">
                                  <Card className="">
                                    <CardBody className="p-1">
                                      <Row className="g-2 form">
                                        <Col sm="12" className="p-2">
                                          <Row className="g-2 form">
                                            <Col
                                              sm="12"
                                              className="text-primary small"
                                            >
                                              <b>IM_INDIA_20211231</b>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="12">
                                          Fri, 31-12-2021 | 10:00 AM to 01:00 PM
                                        </Col>
                                        <Col sm="12">
                                          Online:{" "}
                                          <a className="text-primary small">
                                            <u>Zoom meeting details</u>
                                          </a>
                                        </Col>
                                      </Row>
                                    </CardBody>
                                  </Card>
                                </Col>
                                <Col sm="4">
                                  <Card className=" ">
                                    <CardBody className="p-1">
                                      <Row className="g-2 form">
                                        <Col sm="12" className="p-2">
                                          <Row className="g-2 form">
                                            <Col
                                              sm="12"
                                              className="text-primary small"
                                            >
                                              <b>IM_INDIA_20211231</b>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="12">
                                          Fri, 31-12-2021 | 10:00 AM to 01:00 PM
                                        </Col>
                                        <Col sm="12">
                                          Online:{" "}
                                          <a className="text-primary small">
                                            <u>Zoom meeting details</u>
                                          </a>
                                        </Col>
                                      </Row>
                                    </CardBody>
                                  </Card>
                                </Col>
                                <Col sm="4">
                                  <Card className=" ">
                                    <CardBody className="p-1">
                                      <Row className="g-2 form">
                                        <Col sm="12" className="p-2">
                                          <Row className="g-2 form">
                                            <Col
                                              sm="12"
                                              className="text-primary small"
                                            >
                                              <b>IM_INDIA_20211231</b>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="12">
                                          Fri, 31-12-2021 | 10:00 AM to 01:00 PM
                                        </Col>
                                        <Col sm="12">
                                          Online:{" "}
                                          <a className="text-primary small">
                                            <u>Zoom meeting details</u>
                                          </a>
                                        </Col>
                                      </Row>
                                    </CardBody>
                                  </Card>
                                </Col>
                              </Row>
                            </Col>
                            <Col sm="1">&nbsp;</Col>
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </AccordionBody>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Row>
                <Col sm="12" className="bg-light p-2">
                  <Row className="g-2 form">
                    <Col sm="10">&nbsp;</Col>
                    <Col sm="2">
                      <Row className="g-2 form">
                        <Col sm="6"></Col>
                        <Col sm="6">
                          <img src={SettingIcon} role="button" />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12">
                  {loading ? <PlaceholderLoading /> : <TableFacilitator />}
                </Col>
              </Row>
            </Col>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default MyFacilitatorTable;
