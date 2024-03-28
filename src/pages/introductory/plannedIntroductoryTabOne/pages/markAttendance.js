import React, { useState, useEffect} from "react";
import { Button, Card, Col, FormLabel, Row, Dropdown} from 'react-bootstrap';
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody, CardFooter, Input } from "reactstrap";
import Popover from "react-bootstrap/Popover";
import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import SettingImg from '../../../../assets/img/Settings2.png';
import Modal from 'react-bootstrap/Modal';
import SuccessIcon from "../../../../assets/img/success.jpg";
import { useParams, useNavigate} from "react-router-dom";

const MarkAttendance = () => {
  const [isaddComment, setIsAddComment] = useState(false);
  const [iscommentdone, setIsCommentDone] = useState(false);

  const [attendees, setAttendees] = useState([]);
    const [comments, setComments] = useState({}); 
    const [attendanceStatus, setAttendanceStatus] = useState([]);
    const [meetingId, setMeetingId] = useState('');
    const [fetchDataFlag, setFetchDataFlag] = useState(true);
    const navigate = useNavigate();
    // const { id } = useParams();

  const handleClose = () => setIsAddComment(false);
  const handleShow = () => setIsAddComment(true)

  const [totalAttendees, setTotalAttendees] = useState(0);
  const handleDoneClose = () => {
    setIsCommentDone(false);
    navigate('/auth/login/introductory');
  }
  const handleDoneShow = () => {
    setIsAddComment(false);
    setIsCommentDone(true)
  }

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

  const onSubmitAttendance = () => {

    const attendeesData = attendees.map((attendee) => ({
      nomineeId: attendee.id,
      status: attendanceStatus[attendee.id] === 1 ? 2 : 1,
      comment: comments[attendee.id] || '',
    }));

    console.log("Response Body",attendeesData)
    console.log("id ",id);

    fetch(`${BaseURL}/api/introductory/${id}/attendance`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(attendeesData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Attendance submitted successfully", data);
        handleShow(); 
      })
      .catch((error) => {
        console.error("Error submitting attendance", error);
      });
      console.log("-----------------Attendance done---------");
  };

  const MeetingAttendanceTable = () => {
    const { id } = useParams();

    useEffect(() => {
      if(fetchDataFlag){
        console.log("UserEffect Running");
        fetch(`${BaseURL}/api/nomination/nominee-details/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",

                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((res) => res.json())
            .then((data) => {
              // Modify the data structure to include attendee IDs
              const attendeesWithIDs = data.map((attendee) => ({
                ...attendee,
                id: attendee.nomineeId, // Assuming 'nomineeId' is the ID field
              }));
              setAttendees(attendeesWithIDs);
              setFetchDataFlag(false);
              setTotalAttendees(data.length);
              if (data && data.length > 0) {
                setMeetingId(data[0].meetingId); // Assuming meetingId is available in the data
              }
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
            });
          }
    }, [id, fetchDataFlag]);

  const handleToggleAttendance = (attendeeId) => {
    setAttendanceStatus((prevStatus) => {
      const updatedStatus = { ...prevStatus };
      updatedStatus[attendeeId] = updatedStatus[attendeeId] === 2 ? 1 : 2;
      console.log(`Updated status for attendee ${attendeeId} to ${updatedStatus[attendeeId]}`);
      return updatedStatus;
    });
  };

    return (
      <>
        <Table>
          <thead className="bg-light">
            <tr>
              <th>Attendees Name</th>
              <th>Phone</th>
              <th>District</th>
              <th>State</th>
              <th>M21 wing</th>
              <th>Refered By</th>
              <th>Status</th>
              <th>Attendance</th>
              <th>Comments</th>
              <th>share Form</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Button className="border-outerline-secondary bg-white text-secondary">Add Name</Button>
              </td>
              <td>
                <Button className="border-outerline-secondary bg-white text-secondary">Phone Number</Button>
              </td>
              <td>
                <Button className="border-outerline-secondary bg-white text-secondary">District Name</Button>
              </td>
              <td>
                <Button className="border-outerline-secondary bg-white text-secondary">State Name</Button>
              </td>
              <td>
                <Button className="border-outerline-secondary bg-white text-secondary">Wing Name</Button>
              </td>
              <td>
                <Button className="border-outerline-secondary bg-white text-secondary">Refered by</Button>
              </td>
              <td>
                <Button className="border-outerline-secondary bg-white text-secondary">Confirm</Button>
              </td>
              <td>
                <Button className="border-outerline-secondary bg-white text-secondary">Attened</Button>
              </td>
              <td>
                <Input placeholder="type your comments here" />
              </td>
              <td>
                <Button>+</Button>
              </td>
            </tr>
            {
            attendees.map((attendee) => (
            <tr key={attendee.id}>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popover}
              >
                <td>{attendee.firstName}&nbsp;{attendee.lastName}</td>
              </OverlayTrigger>
              <td>{attendee.mobileNumber}</td>
              <td>{attendee.district}</td>
              <td>{attendee.state}</td>
              <td>{attendee.m21Wing}</td>
              <td>Prafull</td>
              <td>{attendee.status=== 1 ? "Confirm" : attendee.status===0 ? "Tentative" : attendee.status=== 2 ? "Unavailable": "Not interested"}</td>
              <td><Button
                className={`border-outerliner-secondary ${
                  attendanceStatus[attendee.id] === 1
                    ? 'bg-success text-white'
                  :  'bg-white text-secondary'
                }`}
                onClick={() => handleToggleAttendance(attendee.id)}
              >
                {attendanceStatus[attendee.id] === 1 ? 'Attened' : 'Attended'}
              </Button></td>
              <td>
                <Input className="rounded-0" 
                  placeholder="type your comments here" 
                    value={comments[attendee.id] || ''}
                    onChange={(event) => {
                      const newComments = { ...comments };
                      newComments[attendee.id] = event.target.value;
                      setComments(newComments);
                    }}
              /></td>
              <td></td>
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
            })

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
      <Col sm='12' className="p-3">

        <Card className="border-0 rounded-0">
          <CardHeader className="border-0 rounded-0">
            <Col sm='12'>
              <Row className="g-2 form">
                <Col sm='6'>Live Introductory</Col>
              </Row>
            </Col>
          </CardHeader>
          <CardBody>
            <Col sm='12'>
              <Row className="g-2 form">
                <Col sm='12' className="form-control">
                  <Row className="g-2 form">
                    <Col sm='12'>
                      <label className="text-uppercase">{introductory.id}</label>
                    </Col>
                    <Col sm='12'>
                      <Row className="g-2 form">
                        <Col sm='2'>
                          <FormLabel>introductory type</FormLabel>
                          <Col sm='12' className="fw-bold">{introductory.type}</Col>
                        </Col>
                        <Col sm='2'>
                          <FormLabel>M21 wing</FormLabel>
                          <Col sm='12' className="fw-bold">{introductory.m21Type}</Col>
                        </Col>
                        <Col sm='2'>
                          <FormLabel>Special introductory deive</FormLabel>
                          <Col sm='12' className="fw-bold">{introductory.specialIntroductoryDrive}</Col>
                        </Col>
                        <Col sm='2'>
                          <FormLabel>Language </FormLabel>
                          <Col sm='12' className="fw-bold">{introductory.meetingLanguage}</Col>
                        </Col>
                        <Col sm='2'>
                          <FormLabel>introductory level </FormLabel>
                          <Col sm='12' className="fw-bold">{introductory.introductoryLevel}</Col>
                        </Col>

                      </Row>
                    </Col>
                    <Col sm='12'>
                      <Row className="g-2 form">
                        <Col sm='2'>
                          <FormLabel>
                            Meeting date & time
                          </FormLabel>
                          <Col sm='12' className="fw-bold">
                            {formatDate(introductory.date)}<br />
                              {introductory.fromTime}AM - {introductory.toTime}PM
                          </Col>
                        </Col>
                        <Col sm='2'>
                          <FormLabel>Location</FormLabel>
                          <Col sm='12' className="fw-bold">
                            {introductory.location} 
                          </Col>
                        </Col>
                        <Col sm='2'>
                          <FormLabel>introductory 1</FormLabel>
                          <Col sm='12' className="fw-bold">{introductory.introducer1}</Col>
                        </Col>
                        <Col sm='2'>
                          <FormLabel>introductory 2</FormLabel>
                          <Col sm='12' className="fw-bold">{introductory.introducer2}</Col>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col sm='12' className="p-3">
                  <Row className="g-2 form">
                    <Col sm='6'>
                      <input
                        type="text"
                        placeholder="Search member by name, phone, email, location"
                        className="border rounded-5 form-control pr-5"
                        style={{
                          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L19.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`, // Add the search icon as background image
                          backgroundPosition: 'right 5px center', // Adjust the position of the icon
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '24px 24px', // Adjust the size of the icon
                        }}
                      >
                      </input>
                    </Col>
                    <Col sm="3"></Col>
                    <Col sm='3'>
                      <Button className="rounded-5 fs-10">share participant feedback form</Button>
                    </Col>
                  </Row>
                </Col>
                <Col sm='12' className="bg-light p-2">
                  <Row>
                    <Col sm='6'>
                    {totalAttendees} attendee added | 1 attened
                    </Col>
                    <Col sm='6' className="text-end">
                      <img src={SettingImg} />
                    </Col>
                  </Row>
                </Col>

                <Col sm='12' className="">
                  <Row className="g-2 form">
                    <MeetingAttendanceTable />
                  </Row>
                </Col>
              </Row>
            </Col>

          </CardBody>
          <CardFooter>
            <Col sm='12'>
              <Row className="g-2 form">
                <Col sm='9'>
                  <Button className="border-outerline-primary rounded-1 bg-white text-primary text-uppercase">cancel</Button>
                </Col>
                <Col sm='1'>
                  <Button className="border-outerline-primary rounded-1 bg-white text-primary text-uppercase">save</Button>
                </Col>
                <Col sm='2'>
                  <Button className="border-0 rounded-1 text-uppercase" onClick={onSubmitAttendance}>submit</Button>
                </Col>
              </Row>
            </Col>
          </CardFooter>
        </Card>

      </Col>

      {/* Add comment model */}
      <Col sm='12'>
        <Modal show={isaddComment} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Attendance taker comments</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Col sm='12'>Provide some information for future reference</Col>
            <Col sm='12'>

              <textarea className="v-100 col-sm-12" onPointerLeave='type your comments here '></textarea>
            </Col>
            <Col sm='12'>256 characters only</Col>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleDoneShow}>
              Done
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>

      {/* comment done  */}
      <Col sm='12'>
        <Modal show={iscommentdone} onHide={handleDoneClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Col sm="12"
              className="d-flex justify-content-center align-items-center h-100 font-weight-bold">
              <img src={SuccessIcon} alt="My Image"
                className="h-40 w-40"
              />
            </Col>
            <Col sm="12"
              className="d-flex justify-content-center align-items-center h-100 font-weight-bold"
            >submission successfully</Col>
          </Modal.Body>
          <Modal.Footer>
            <Col sm='3'></Col>
            <Col sm='7'>
              <Button variant="primary" onClick={handleDoneClose}>
                ok
              </Button>
            </Col>

          </Modal.Footer>
        </Modal>
      </Col>
    </>
  )
}

export default MarkAttendance;