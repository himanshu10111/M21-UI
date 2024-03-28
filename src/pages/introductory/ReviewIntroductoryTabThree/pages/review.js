import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  FormLabel,
  Modal,
  Row,
  Table,
  Dropdown
} from "react-bootstrap";
import { CardBody, CardFooter, CardHeader, Input } from "reactstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import SuccessIcon from "../../../../assets/img/success.jpg";


const Review = ({ handleFormData, values }) => {

  const [showOne, setshowOne] = useState(0);
  const handleClose = () => setshowOne(0);
  const handleShow = () => setshowOne(1);

  const [showTwo, setShowTwo] = useState(0);
  const handleCloseTwo = () => {
    setShowTwo(0);
    Navigate("/auth/login/introductory");
  };
  const handleShowTwo = () => {
    setShowTwo(1);
    setshowOne(0);
  };

  const [showSendOne, setshowSendOne] = useState(0);
  const handleSendClose = () => setshowSendOne(0);
  const handleSendShow = () => setshowSendOne(1);


  const [showSendTwo, setShowSendTwo] = useState(0);
  const handleCloseSendTwo = () => {
    setShowSendTwo(0);
    Navigate("/auth/login/introductory");
  };
  const handleShowSendTwo = () => {
    setShowSendTwo(1);
    setshowSendOne(0);
  };

  const [showRejectOne, setshowRejectOne] = useState(0);
  const handleRejectClose = () => setshowRejectOne(0);
  const handleRejectShow = () => setshowRejectOne(1);

  const [showRejectTwo, setShowRejectTwo] = useState(0);
  const handleCloseRejectTwo = () => {
    setShowRejectTwo(0);
  };
  const handleShowRejectTwo = () => {
    setShowRejectTwo(1);
    setshowRejectOne(0);
  };

  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [introductory, setIntroductory] = useState([]);
  const { id } = useParams();
  const Navigate = useNavigate();
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
        console.log(id);
      })

  }, [id]);

  const [selectedIntroducer1, setSelectedIntroducer1] = useState("");
  const [selectedIntroducer2, setSelectedIntroducer2] = useState("");
  const [comment, setComment] = useState("");

  const onApproveClick = () => {
    const responsebody = {
      id: parseInt(id, 10),
      status: 1,        //Approve
      introducer1: selectedIntroducer1,
      introducer2: selectedIntroducer2,
      comment: comment,
    };
    fetch(`${BaseURL}/api/introductory-meetings/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(responsebody),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("recived response",data);
      });
    console.log("********Reviewed introductory Approved******");
    handleShowTwo();
  };


  const onRejectClick = () => {
    const requestBody = {
      id: parseInt(id, 10),
      introducer1: selectedIntroducer1,
      introducer2: selectedIntroducer2,
      comment: comment,
      status: 0,          //Reject
    };

    fetch(`${BaseURL}/api/introductory-meetings/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
      console.log("********Reviewed introductory Rejected******");
      handleShowRejectTwo();
  };

  const [nominees,setNominee]=useState([]);

  useEffect(()=>{
      
    fetch(`${BaseURL}/api/nomineeSearchAll`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      // .then((data) => setNominee(data));
      .then((data) => {
        setNominee(data);
        console.log(data);
      })
    
  },[]);
  
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
                      <h5>Review Introductory Request</h5><br></br>
                      <h5>IM_INDIA_20211231</h5>
                    </CardHeader>
                    <CardBody>
                      <Row className="g-2 form">
                        <Col className="form-control bg-light">
                          <Row className="g-2 form">
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="2">
                                  <FormLabel>Submitted by</FormLabel>
                                  <Col sm="12" className="fw-bold mt-0">Name Surname(M21D)</Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>Submitted date</FormLabel>
                                  <Col sm="12" className="fw-bold mt-0">
                                    DD-MM-YYYY
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <hr></hr>
                            <Col sm='12'>
                              <Row className="g-2 form">
                                <Col sm="2">
                                  <FormLabel>Introductory type</FormLabel>
                                  <Col sm="12" className="fw-bold mt-0">
                                    {introductory.type}
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>M21 Wing</FormLabel>
                                  <Col sm="12" className="fw-bold mt-0">
                                    {introductory.m21Type}
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>Special introductory drive</FormLabel>
                                  <Col sm="12" className="fw-bold mt-0">
                                    {introductory.specialIntroductoryDrive}
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>Language</FormLabel>
                                  <Col sm="12" className="fw-bold mt-0">
                                    {introductory.meetingLanguage}
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>Introductory level</FormLabel>
                                  <Col sm="12" className="fw-bold mt-0">
                                    {introductory.introductoryLevel}
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="4">
                                  <FormLabel>Meeting Date & Time</FormLabel>
                                  <Col sm="12" className="fw-bold mt-0">
                                    {formatDate(introductory.date)} | {introductory.fromTime} AM - {introductory.toTime} pm
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>Location</FormLabel>
                                  <Col sm="12" className="fw-bold mt-0">
                                    {introductory.location}
                                  </Col>
                                </Col>
                                <Col sm="4">
                                  <FormLabel>Comments</FormLabel>
                                  <Col sm="12" className="fw-bold mt-0">
                                    {introductory.comment}
                                  </Col>
                                </Col>

                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        {/* <Col sm="12" className="p-2">
                          &nbsp;
                        </Col> */}
                        <Col sm="12">
                          <Row className="g-2 form">
                            <FormLabel className="fw-bold mt-0">Add Introducer</FormLabel>
                          </Row>
                        </Col>
                        <Col sm="12" className="p-1">
                          <Row className="g-2 form">
                            <Col sm='3'>
                              <FormLabel>Introducer 1 <sup className="text-danger">*</sup></FormLabel>
                              <Input
                                type="select"
                                name="introducer1"
                                value={selectedIntroducer1}
                                onChange={(e) => setSelectedIntroducer1(e.target.value)}
                                className="rounded-0"
                                required
                                size="sm"
                              >
                                <option value="" disabled>
                                  {" "}
                                  choose your option{" "}
                                </option>
                                {
                                nominees.map( (nominee) =>(
                                <option>{ nominee.firstName} &nbsp; {nominee.lastName}</option>
                                ))}
                              </Input>
                            </Col>
                            <Col sm='3'>
                              <FormLabel>Introducer 2 <sup className="text-danger">*</sup></FormLabel>
                              <Input
                                type="select"
                                name="introducer2"
                                value={selectedIntroducer2}
                                onChange={(e) => setSelectedIntroducer2(e.target.value)}
                                className="rounded-0"
                                required
                                size="sm"
                              >
                                <option value="" selected>
                                  {" "}
                                  choose your option{" "}
                                </option>
                                {
                                nominees.map( (nominee) =>(
                                <option>{ nominee.firstName} &nbsp; {nominee.lastName}</option>
                                ))}
                              </Input>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm='12'>
                          <Row>
                            <Col sm='6'>
                              Comment
                              <textarea
                                className="v-100 col-sm-12 mt-5"
                                name="comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Type here"
                              ></textarea>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm='12'>
                          <Row className="g-2 form">
                            <Col sm="6">
                              <Link to="/introductory">
                                <Button className="bg-white text-secondary border-secondary">
                                  Cancel
                                </Button>
                              </Link>
                            </Col>
                            <Col sm="3" className="text-end ">
                              <Button
                                className="border-secondary bg-primary text-white"
                                onClick={handleShow}
                                >
                                Approve
                              </Button>
                            </Col>
                            <Col sm='1'>
                              <Dropdown className="h-4">
                                <Dropdown.Toggle
                                  id="dropdown-basic"
                                  className="border-0 bg-primary text-white ml-1 h-4"
                                >
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item onClick={handleSendShow}>
                                    Send back
                                  </Dropdown.Item>
                                  <Dropdown.Item onClick={handleRejectShow}>
                                    Reject
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </Col>
                          </Row>
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
        <Modal.Header className="fw-bold fs-5">Approve meeting request</Modal.Header>
        <Modal.Body className="text-left">
          Are you sure you want to approve this meeting request?
        </Modal.Body>
        <Modal.Footer>
          <Col sm="12">
            <Row>
              <Col sm='4'></Col>
              <Col sm="2">
                <Button onClick={handleClose}>&nbsp;No&nbsp;</Button>
              </Col>
              <Col sm="2">
                <Button onClick={onApproveClick}>&nbsp;Yes&nbsp;</Button>
              </Col>
            </Row>
          </Col>
        </Modal.Footer>
      </Modal>

      <Modal show={showTwo} onHide={handleCloseTwo}>
        <Modal.Body>
          <Col sm="12"
            className="d-flex justify-content-center align-items-center h-100 font-weight-bold">
            <img src={SuccessIcon} alt="My Image"
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

      <Modal show={showSendOne} onHide={handleSendClose}>
        <Modal.Header className="fw-bold fs-5">Reason for sending back</Modal.Header>
        <Modal.Body className="text-left">
          Provide some information that can help the assigner
          <Input type='textarea' placeholder='Type your rejection comments here'
            className="h-100" />
          <h6 className="fs-4">256 Characters only</h6>
        </Modal.Body>
        <Modal.Footer>
          <Col sm="12">
            <Row>
              <Col sm='7'></Col>
              <Col sm="2">
                <Button>&nbsp;Cancel&nbsp;</Button>
              </Col>
              <Col sm="3">
                <Button onClick={handleShowSendTwo}>&nbsp;Submit&nbsp;</Button>
              </Col>
            </Row>
          </Col>
        </Modal.Footer>
      </Modal>

      <Modal show={showSendTwo} onHide={handleCloseSendTwo}>
        <Modal.Body>
          <Col sm="12"
            className="d-flex justify-content-center align-items-center h-100 font-weight-bold">
            <img src={SuccessIcon} alt="My Image"
              className="h-4 w-4"
            />
          </Col>
          <Col sm="12"
            className="d-flex justify-content-center align-items-center h-100 font-weight-bold">
              submission successfully</Col>
        </Modal.Body>
        <Modal.Footer>
          <Col sm="12">
            <Row>
              <Col sm='5'></Col>
              <Col sm="3">
                <Button onClick={handleCloseSendTwo}>&nbsp;Ok&nbsp;</Button>
              </Col>
            </Row>
          </Col>
        </Modal.Footer>
      </Modal>

      <Modal show={showRejectOne} onHide={handleRejectClose}>
        <Modal.Header className="fs-5 fw-bold">Reason for rejection</Modal.Header>
        <Modal.Body className="text-left">
          Provide some information that can help the assigner
          <Input type='textarea' placeholder='Type your rejection comments here'
            className="h-100" />
          <h6 className="h-4">256 Characters only</h6>
        </Modal.Body>
        <Modal.Footer>
          <Col sm="12">
            <Row>
              <Col sm='7'></Col>
              <Col sm="2">
                <Button>&nbsp;Cancel&nbsp;</Button>
              </Col>
              <Col sm="3">
                <Button onClick={onRejectClick}>&nbsp;Submit&nbsp;</Button>
              </Col>
            </Row>
          </Col>
        </Modal.Footer>
      </Modal>

      <Modal show={showRejectTwo} onHide={handleCloseSendTwo}>
        <Modal.Body>
          <Col sm="12"
            className="d-flex justify-content-center align-items-center h-100 font-weight-bold">
            <img src={SuccessIcon} alt="My Image"
              className="h-4 w-4"
            />
          </Col>
          <Col sm="12"
          className="d-flex justify-content-center align-items-center h-100 font-weight-bold">
          submission successfully</Col>
        </Modal.Body>
        <Modal.Footer>
          <Col sm="12">
            <Row>
              <Col sm='5'></Col>
              <Col sm="3">
                <Button onClick={handleCloseSendTwo}>&nbsp;Ok&nbsp;</Button>
              </Col>
            </Row>
          </Col>
        </Modal.Footer>
      </Modal>
    </>
  );
};


export default Review;
