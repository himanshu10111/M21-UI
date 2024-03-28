import React, { useState,useEffect } from "react";
import {
  Button,
  Card,
  Col,
  FormLabel,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { CardBody, CardFooter, CardHeader, Input } from "reactstrap";
import settingimg from "../../../../assets/img/Settings2.png";
import Docfile from "../../../../assets/img/doctext.png";
import { Link, useParams } from "react-router-dom";
import SuccessIcon from "../../../../assets/img/success.jpg";

const ReviewIntroductory = () => {

  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [totalAttendeesCount, setTotalAttendeesCount] = useState(0);
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
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayOfWeek}, ${day} ${month} ${year}`;
  };

  const [Attendees, setAttendees] = useState([]);
    useEffect(() => {
      fetch(`${BaseURL}/api/introductory/nominee/attendance/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAttendees(data);
          setTotalAttendeesCount(data.length);
          console.log(data);
        });
    }, [id]);

    const handleAssignToChange = (index, value) => {
      const updatedAttendees = [...Attendees];
      updatedAttendees[index].assignTo = value;
      setAttendees(updatedAttendees);
    };
  
    const handleApproveChange = (index, checked) => {
      const updatedAttendees = [...Attendees];
      updatedAttendees[index].approveAsM21Member = checked;
      setAttendees(updatedAttendees);
    };
  
    const handleAddToGroupChange = (index, checked) => {
      const updatedAttendees = [...Attendees];
      updatedAttendees[index].addToGroup = checked;
      setAttendees(updatedAttendees);
    };
  
    const handleSubmit = () => {
      const requestBody = Attendees.map((attendee) => ({
        nomineeId: attendee.nomineeId,
        assignTo: attendee.assignTo,
        approveAsM21Member: attendee.approveAsM21Member || false,
        addToGroup: attendee.addToGroup || false,
      }));
      console.log("Request body:",requestBody);
      fetch(`${BaseURL}/api/introductory/save-attendies-review/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(requestBody),
      })
        .then((res) => res.json())
        .then((response) => {
          console.log("Data sent successfully:", response);
        })
        .catch((error) => {
          console.error("Error sending data:", error);
        });
    };
  
  const ReviewIntroductory = () => {
    

    return (
      <Table striped hover>
        <thead>
          <tr>
            <th>Attendance Name</th>
            <th>&nbsp;</th>
            <th>Refered by</th>
            <th>Assign to</th>
            <th>Status</th>
            <th>Comments</th>
            <th>
              Approve as
              <br /> m21 member
            </th>
            <th>
              Add to
              <br /> Group
            </th>
          </tr>
        </thead>
        <tbody>
        {Attendees.map((attendee,index) => (
          <tr key={index} key={attendee.nomineeId}>
            <td className="text-primary">{attendee.firstName} {attendee.lastName}</td>
            <td>
              <img src={Docfile} alt="docfile img"/>
            </td>
            <td>Prafull</td>
            <td>
              <Input type="select"
              value={Attendees[index].assignTo}
              onChange={(e) => handleAssignToChange(index, e.target.value)} >
                <option>Select</option>
                <option>No follow up member assigned</option>
                <option>Follow up member assigned</option>
                <option>In-progress</option>
                <option>Submitted</option>
              </Input>
            </td>
            <td>
              <Input type="select" disabled>
                <option>Select</option>
                <option>No follow up member assigned</option>
                <option>Follow up member assigned</option>
                <option>In-progress</option>
                <option>Submitted</option>
              </Input>
            </td>
            <td>
              <Input placeholder="type your comments here " disabled 
              value={attendee.comment}/>
            </td>
            <td>
              <Input type="checkbox" 
              name="approveAsM21Member"
              checked={Attendees[index].approveAsM21Member}
              onChange={(e) => handleApproveChange(index, e.target.checked)} />
            </td>
            <td>
              <Input type="checkbox" 
              name="addToGroup"
              checked={Attendees[index].addToGroup}
              onChange={(e) => handleAddToGroupChange(index, e.target.checked)} />
            </td>
          </tr>
        ))}
        </tbody>
      </Table>
    );
  };

  const [showOne, setshowOne] = useState(0);
  const handleClose = () => setshowOne(0);
  const handleShow = () => setshowOne(1);

  const [showTwo, setShowTwo] = useState(0);
  const handleCloseTwo = () => {
    setShowTwo(0);
  };
  const handleShowTwo = () => {
    setShowTwo(1);
    setshowOne(0);
  };

  
  return (
    <>
      <Col className="section p-4">
        <Col className="container-fluid ">
          <Col className="form-control rounded-0 shadow ">
            <Col className="form-group">
              <Col sm="12">
                <Row className="g-2 form">
                  <Card>
                    <CardHeader className="bg-white border-0">
                      <h5>Review Introductory</h5>
                    </CardHeader>
                    <CardBody>
                      <Row className="g-2 form">
                        <Col className="form-control bg-light">
                          <Row className="g-2 form">
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="2">
                                  <FormLabel>Introductory type</FormLabel>
                                  <Col sm="12" className="fw-bold mt-n10">{introductory.type}</Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>M21 Wing</FormLabel>
                                  <Col sm="12" className="fw-bold mt-n10">
                                  {introductory.m21Type}
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>
                                    Special introductory drive
                                  </FormLabel>
                                  <Col sm="12" className="fw-bold mt-n10">
                                    {introductory.specialIntroductoryDrive}
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>Language</FormLabel>
                                  <Col sm="12" className="fw-bold mt-n10">
                                    {introductory.meetingLanguage}
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>Introductory level</FormLabel>
                                  <Col sm="12" className="fw-bold mt-n10">
                                    {introductory.introductoryLevel}
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="2">
                                  <FormLabel>Meeting Date & Time</FormLabel>
                                  <Col sm="12" className="fw-bold mt-n10">
                                      {formatDate(introductory.date)}
                                      <br />
                                      {introductory.fromTime} AM - {introductory.toTime} pm
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>Location</FormLabel>
                                  <Col sm="12" className="fw-bold mt-n10">
                                      {introductory.location}
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>Introductory 1</FormLabel>
                                  <Col sm="12" className="fw-bold mt-n10">
                                    {introductory.introducer1}
                                  </Col>
                                </Col>

                                <Col sm="2">
                                  <FormLabel>Introductory 2</FormLabel>
                                  <Col sm="12" className="fw-bold mt-n10">
                                  {introductory.introducer2}
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>Attened mark by</FormLabel>
                                  <Col sm="12" className="fw-bold mt-n10">
                                      Name Surname
                                      <br />
                                      (M21 ID: 1234)
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="12" className="p-2">
                          &nbsp;
                        </Col>
                        <Col sm="12">
                          <Row className="g-2 form">
                            <Input placeholder="Search attendees by name, phone, email, location" />
                          </Row>
                        </Col>
                        <Col sm="12" className="p-1">
                          &nbsp;
                        </Col>
                        <Col sm="12" className="form-control bg-light">
                          <Row className="g-2 form">
                            <Col sm="6" className="text-start">
                              {totalAttendeesCount} attended
                            </Col>
                            <Col sm="6" className="text-end">
                              <img src={settingimg} alt="setting img"/>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="12">
                          <Card className="shadow">
                            <ReviewIntroductory />
                            <CardFooter className="bg-white border-0">
                              <Col sm="12">
                                <Row className="g-2 form">
                                  <Col sm="8">
                                    <Link to="/auth/login/introductory">
                                      <Button className="bg-white text-secondary border-secondary">
                                        Cancel
                                      </Button>
                                    </Link>
                                  </Col>
                                  <Col sm="4">
                                    <Row>
                                      <Col sm="6" className="text-end ">
                                        <Button className="bg-white text-secondary border-secondary"
                                        onClick={handleSubmit}>
                                          Save
                                        </Button>
                                      </Col>
                                      <Col sm="6">
                                        <Button onClick={handleShow}>
                                          Submit
                                        </Button>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                            </CardFooter>
                          </Card>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Row>
              </Col>
            </Col>
          </Col>
        </Col>
      </Col>

      <Modal show={showOne} onHide={handleClose}>
        <Modal.Header className="fw-bold fs-20">Approve as M21 member</Modal.Header>
        <Modal.Body className="text-left">
          Are your sure you want to approve selected attendee as M21 members?
        </Modal.Body>
        <Modal.Footer>
          <Col sm="12">
            <Row>
              <Col sm='4'></Col>
              <Col sm="2">
                <Button>&nbsp;No&nbsp;</Button>
              </Col>
              <Col sm="2">
                <Button onClick={handleShowTwo}>&nbsp;Yes&nbsp;</Button>
              </Col>
            </Row>
          </Col>
        </Modal.Footer>
      </Modal>

      <Modal show={showTwo} onHide={handleCloseTwo}>
        <Modal.Body>
        <Col sm="12"
              className="d-flex justify-content-center align-items-center h-100 font-weight-bold">
              <img src={SuccessIcon} alt="success img" 
              className="h-4 w-4" 
              />
              </Col>
              <Col sm="12"
              className="d-flex justify-content-center align-items-center h-100 font-weight-bold"
              >submission successfully</Col>
        </Modal.Body>
        <Modal.Footer>
          <Col sm="12">
            <Row>
            <Col sm='5'></Col>
              <Col sm="3">
                <Button onClick={handleCloseTwo}>&nbsp;ok&nbsp;</Button>
              </Col>
            </Row>
          </Col>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReviewIntroductory;
