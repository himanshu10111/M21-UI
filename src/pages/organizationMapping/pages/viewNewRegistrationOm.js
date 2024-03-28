import React, { useState,useEffect } from "react";
import { Accordion, Button, Card, CloseButton, Col, FormLabel, Row, } from "react-bootstrap";
import { CardBody, CardFooter, CardHeader, Input } from "reactstrap";
import Modal from "react-bootstrap/Modal";
import SuccessIcon from "../../../assets/img/success.jpg";
import { useMediaQuery } from "react-responsive";
import { Link,useParams, useNavigate } from "react-router-dom";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const ViewNewRegistrationDetails = () => {
  const [isaddComment, setIsAddComment] = useState(false);
  const navigate= useNavigate();
  const handleClose = () => setIsAddComment(false);
  const handleShow = () => setIsAddComment(true);

  const [iscommentdone, setIsCommentDone] = useState(false);

  const handleDoneClose = () => {
    setIsCommentDone(false);
    navigate('/auth/login/orgnizationmapping');
  };
  const handleDoneShow = () => {
    handleReject(Registration.id);
    setIsAddComment(false);
    setIsCommentDone(true);
  };

  const BaseURL = process.env.REACT_APP_BASE_URL;
    const [Registration,setRegistration]=useState([]);
    const {id} = useParams();
    useEffect(()=>{
        
      fetch(`${BaseURL}/api/profile/user/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setRegistration(data[0]);
          console.log(data);
        })
      
    },[id]);

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1; // Months are 0-based
      const year = date.getFullYear();
    
      // Ensure leading zeros for single-digit day and month
      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = month < 10 ? `0${month}` : month;
    
      return `${formattedDay}-${formattedMonth}-${year}`;
    };

    const handleApprove = (id) => {
      const responseBody = {
        "userId" : id,
        "status": 1,
      };
  
      fetch(`${BaseURL}/api/auth/updateStatus`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(responseBody),
      })
        .then((res) => res.json())
        .then((response) => {
          console.log("Record approved:", response);
        })
        .catch((error) => {
          console.error("Error Approve record:", error);
        });
    };

    const handleReject = (id) => {
      const responseBody = {
        "userId" : id,
        "status": 0,
      };
  
      fetch(`${BaseURL}/api/auth/updateStatus`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(responseBody),
      })
        .then((res) => res.json())
        .then((response) => {
          console.log("Record rejected:", response);
        })
        .catch((error) => {
          console.error("Error rejecting record:", error);
        });
    };
  return (
    <>
      <Desktop>
        <Col className="section">
          <Col className="container-fluid">
            <Col className="form-control">
              <Col className="form-group">
                <Col sm="12" className="">
                  <Card className="border-0">
                    <CardHeader className="bg-white border-0">
                      <Col sm="12">
                        <Row className="g-2 form">
                          <Col sm="10">
                            Verify New Registration - M21 Member
                          </Col>
                          <Col sm="2" className="text-end">
                            <CloseButton />
                          </Col>
                        </Row>
                      </Col>
                    </CardHeader>
                    <CardBody>
                      <Row className="g-2 form">
                        <Col sm="12" className="form-control">
                          <Row className="g-2 form">
                            <Col sm="12" className="border-bottom">
                              <Row className="g-2 form">
                                <Col sm="4">Name</Col>
                                <Col sm="8" className="text-primary">
                                  Mr. Prafull Bhagat<sub>(123456)</sub>
                                </Col>
                              </Row>
                            </Col>
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="2">
                                  <FormLabel>
                                    <small>M21 member since</small>
                                  </FormLabel>
                                  <Col sm="12">
                                    <b>2 year</b>
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>
                                    <small>introductory date</small>
                                  </FormLabel>
                                  <Col sm="12">
                                    <b>Dd-MM-YYYY</b>
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>
                                    <small>induction date</small>
                                  </FormLabel>
                                  <Col sm="12">
                                    <b>DD-mm-YYYY</b>
                                  </Col>
                                </Col>

                                <Col sm="2">
                                  <FormLabel>
                                    <small>M21 wing</small>
                                  </FormLabel>
                                  <Col sm="12">
                                    <b>Technology</b>
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>
                                    <small>M21 Wing lead</small>
                                  </FormLabel>
                                  <Col sm="12">
                                    <b>Sachin Gaikwad</b>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="4">
                                  <FormLabel>
                                    <small>District</small>
                                  </FormLabel>
                                  <Col sm="12">
                                    <b>Bangalore</b>
                                  </Col>
                                </Col>
                                <Col sm="4">
                                  <FormLabel>
                                    <small>State</small>
                                  </FormLabel>
                                  <Col sm="12">
                                    <b>Karnataka</b>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="12">
                          <Row className="g-2 form">
                            <Col sm="12" className="border-bottom">
                              Name
                            </Col>
                            <Col sm="12">
                              <b>{Registration.iam}. {Registration.firstname} {Registration.lastname}</b>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="12">
                          <Row className="g-2 form">
                            <Col sm="12" className="border-bottom">
                              Contact Details
                            </Col>
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="6">
                                  <Row className="g-2 form">
                                    <Col sm="12">Mobile Number</Col>
                                    <Col sm="12">
                                      <Row className="g-2 form">
                                        <Col sm="6">
                                          <b>+91 {Registration.mobile}</b>
                                        </Col>
                                        <Col sm="6">
                                          <small>Primary</small>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col sm="12" className="form-check">
                                      <Input type="checkbox" />
                                      <FormLabel>Whatsapp number too</FormLabel>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col sm="6">
                                  <Row className="g-2 form">
                                    <Col sm="12">
                                      <small>email</small>
                                    </Col>
                                    <Col sm="12">
                                      <Row className="g-2 form">
                                        <Col sm="6">
                                          {Registration.email}
                                        </Col>
                                        <Col sm="6">Primary</Col>
                                      </Row>
                                    </Col>
                                    <Col sm="12">
                                      <Row className="g-2 form">
                                        <Col sm="6">
                                          {/* prafullbhagat@gmail.com */}
                                        </Col>
                                        <Col sm="6">Alternate</Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="12">
                          <Row className="g-2 form">
                            <Col sm="12" className="border-bottom">
                              Address Details
                            </Col>
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="6">
                                  <FormLabel>Present Address</FormLabel>
                                  <Col sm="12">
                                    {Registration.house}
                                    <br />
                                    {Registration.street}
                                    <br />
                                    {Registration.taluka}, {Registration.district}, {Registration.country}
                                    <br />
                                    {Registration.pinZipCode}
                                    <br />
                                  </Col>
                                </Col>
                                <Col sm="6">
                                  <FormLabel>Permanent address</FormLabel>
                                  <Col sm="12">
                                    {Registration.house}
                                    <br />
                                    {Registration.street}
                                    <br />
                                    {Registration.taluka}, {Registration.district}, {Registration.country}
                                    <br />
                                    {Registration.pinZipCode}
                                    <br />
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="12">
                          <Row className="g-2 form">
                            <Col sm="12" className="border-bottom">
                              My Organization Mapping
                            </Col>
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="2">
                                  <FormLabel>M21 wing</FormLabel>
                                  <Col sm="12">
                                    <b>{Registration.m21wing}</b>
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>Country</FormLabel>
                                  <Col sm="12">
                                    <b>{Registration.nrcCountyr}</b>
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>State/SRC</FormLabel>
                                  <Col sm="12">
                                    <b>{Registration.nrcState}</b>
                                  </Col>
                                </Col>{" "}
                                <Col sm="2">
                                  <FormLabel>District/DRC</FormLabel>
                                  <Col sm="12">
                                    <b>{Registration.nrcDistrict}</b>
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>Taluka/TRC</FormLabel>
                                  <Col sm="12">
                                    <b>{Registration.nrcTaluka}</b>
                                  </Col>
                                </Col>
                                <Col sm="2">
                                  <FormLabel>
                                    Current responsibilities
                                  </FormLabel>
                                  <Col sm="12">
                                    <b>{Registration.currentResponsibility}</b>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="3">
                                  <FormLabel>Gender</FormLabel>
                                  <Col sm="12">
                                    <b>{Registration.gender}</b>
                                  </Col>
                                </Col>
                                <Col sm="3">
                                  <FormLabel>Date of birth</FormLabel>
                                  <Col sm="12">
                                    <b>{formatDate(Registration.dob)}</b>
                                  </Col>
                                </Col>
                                <Col sm="3">
                                  <FormLabel>Education</FormLabel>
                                  <Col sm="12">
                                    <b>{Registration.education}</b>
                                  </Col>
                                </Col>
                                <Col sm="3">
                                  <FormLabel>Profession</FormLabel>
                                  <Col sm="12">
                                    <b>{Registration.profession}</b>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <Col sm="12">
                        <Row className="g-2 form">
                          <Col className="4">&nbsp;</Col>
                          <Col className="8">
                            <Row className="g-2 form">
                              <Col sm="4">
                                <Button className="bg-white border-secondary text-secondary">
                                  Cancel
                                </Button>
                              </Col>
                              <Col sm="4">
                                <Button
                                  className="bg-warning text-white"
                                  onClick={handleShow}
                                >
                                  Reject
                                </Button>
                              </Col>
                              <Col sm="4">
                                <Button className="ng-success text-white"
                                onClick={() => handleApprove(Registration.id)}>
                                  Approve
                                </Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </CardFooter>
                  </Card>
                </Col>
              </Col>
            </Col>
          </Col>
        </Col>
        {/* Add comment model */}
        <Col sm="12">
          <Modal show={isaddComment} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Reason for rejection</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Col sm="12">Provide some information for future reference</Col>
              <Col sm="12">
                <textarea
                  className="v-100 col-sm-12"
                  onPointerLeave="type your rejection comments here "
                ></textarea>
              </Col>
              <Col sm="12">256 characters only</Col>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                cancel
              </Button>
              <Button variant="primary" onClick={handleDoneShow}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>

        {/* comment done  */}
        <Col sm="12">
          <Modal show={iscommentdone} onHide={handleDoneClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Col sm="12"
              className="d-flex justify-content-center align-items-center font-weight-bold">
              <img src={SuccessIcon} alt="My Image"
                style={{ height: '100px', width: '100px' }}

              />
            </Col>
            <Col sm="12"
              className="d-flex justify-content-center align-items-center h-100 font-weight-bold"
            >submission successfully</Col>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleDoneClose} className="mx-auto d-block">
                ok
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Desktop>
      <Mobile>
        <>
          <Col className="section">
            <Col className="container-fluid">
              <Card className="border-0">
                <CardHeader className="bg-white border-bottom">
                  <Col className="col-12">
                    <Row className="g-2 form">
                      <Col className="col-10">
                        <b>Review M21 Member Registration</b>
                      </Col>
                      <Col className="col-2">
                        <Link to="/auth/login/orgnizationmapping">
                          <Button className="bg-white border-secondary text-secondary">
                            Back
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </CardHeader>
                <CardBody className="px-0 border-bottom">
                  <Row className="g-2 form">
                    <Col className="col-12">
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <Col className="col-12">
                              <Row>
                                <Col className="col-4">Refered By</Col>
                                <Col className="col-8">
                                  <a className="text-primary">
                                    <b>Mr. Prafull Bhagat</b>
                                    <sub>(123456)</sub>
                                  </a>
                                </Col>
                              </Row>
                            </Col>
                          </Accordion.Header>
                          <Accordion.Body className="px-2">
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-4">
                                  <FormLabel>
                                    <small>M21 member since</small>
                                  </FormLabel>
                                  <Col className="col-12">
                                    <b>2 year</b>
                                  </Col>
                                </Col>
                                <Col className="col-4">
                                  <FormLabel>
                                    <small>Introductory date</small>
                                  </FormLabel>
                                  <Col className="col-12">
                                    <b>DD-MM-YYYY</b>
                                  </Col>
                                </Col>
                                <Col className="col-4">
                                  <FormLabel>
                                    <small>Induction date</small>
                                  </FormLabel>
                                  <Col className="col-12">
                                    <b>DD-MM-YYYY</b>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-6">
                                  <FormLabel>
                                    <small>M21 wing</small>
                                  </FormLabel>
                                  <Col className="col-12">
                                    <b>Technology</b>
                                  </Col>
                                </Col>
                                <Col className="col-6">
                                  <FormLabel>
                                    <small>M21 Wing lead</small>
                                  </FormLabel>
                                  <Col className="col-12">
                                    <b>Sachin Gaikwad</b>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-6">
                                  <FormLabel>
                                    <small>District</small>
                                  </FormLabel>
                                  <Col className="col-12">
                                    <b>Bangalore</b>
                                  </Col>
                                </Col>
                                <Col className="col-6">
                                  <FormLabel>
                                    <small>State</small>
                                  </FormLabel>
                                  <Col className="col-12">
                                    <b>Karnataka</b>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Col>
                    <Col className="col-12 shadow form-control">
                      <Row className="g-2 form">
                        <Col className="form-group col-12">
                          <Row className="g-2 form">
                            <Col className="col-12">
                              <b>Nominated Person Details</b>
                            </Col>
                            <Col className="col-12 border-bottom">
                              <FormLabel>Name</FormLabel>
                            </Col>
                            <Col className="col-12">
                              <b>Saba Anjum Karim</b>
                            </Col>
                            <Col className="col-12 border-bottom">
                              <FormLabel>Contact Details</FormLabel>
                              <Col className="col-12">
                                <Row className="g-2 form">
                                  <Col className="col-12">
                                    <FormLabel>Mobile Number</FormLabel>
                                  </Col>
                                  <Col className="col-6">
                                    <b>+91 9876 532 412</b>
                                  </Col>
                                  <Col className="col-6">
                                    <small>Primary</small>
                                  </Col>
                                  <Col className="col-12 form-check">
                                    <Input type="checkbox" />
                                    <FormLabel>Whatsapp number too</FormLabel>
                                  </Col>
                                  <Col className="col-12">
                                    <FormLabel>Email</FormLabel>
                                    <Row className="g-2 form">
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-6">
                                            <b>Saba@gmail.com</b>
                                          </Col>
                                          <Col className="col-6">Primary</Col>
                                        </Row>
                                      </Col>
                                      <Col className="col-12">
                                        <Row className="g-2 form">
                                          <Col className="col-6">
                                            <b>Saba@gmail.com</b>
                                          </Col>
                                          <Col className="col-6">Alternate</Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="form-group col-12">
                          <Row className="g-2 form">
                            <Col className="col-12 border-bottom">
                              <FormLabel>Address Details</FormLabel>
                            </Col>
                            <Col className="col-12">
                              <Col className="col-12">
                                <FormLabel>
                                  <small>Present address</small>
                                </FormLabel>
                              </Col>

                              <b>
                                Flat no. 1891
                                <br />
                                Bharat Bhavan
                                <br />
                                Near Victory Tower
                                <br />
                                14 Main Road, 02nd Sector,
                                <br />
                                Vijay Nagar, Bangalore, Karnataka
                                <br />
                                560100
                                <br />
                              </b>
                            </Col>
                            <Col className="col-12">
                              <Col className="col-12">
                                <FormLabel>
                                  <small>Permanent address</small>
                                </FormLabel>
                              </Col>

                              <b>
                                Flat no. 1891
                                <br />
                                Bharat Bhavan
                                <br />
                                Near Victory Tower
                                <br />
                                14 Main Road, 02nd Sector,
                                <br />
                                Vijay Nagar, Bangalore, Karnataka
                                <br />
                                560100
                                <br />
                              </b>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="form-group col-12">
                          <Col className="col-12 border-bottom">
                            <FormLabel>
                              <small>My Organization mapp</small>
                            </FormLabel>
                          </Col>
                          <Col className="col-12">
                            <Row className="g-2 form">
                              <Col className="col-4">
                                <FormLabel>
                                  <sub>M21 Wing</sub>
                                </FormLabel>
                                <Col className="col-12">
                                  <b>Technology</b>
                                </Col>
                              </Col>
                              <Col className="col-3">
                                <FormLabel>
                                  <sub>Country NRC</sub>
                                </FormLabel>
                                <Col className="col-12">
                                  <b>India</b>
                                </Col>
                              </Col>
                              <Col className="col-5">
                                <FormLabel>
                                  <sub>State/SRC</sub>
                                </FormLabel>
                                <Col className="col-12">
                                  <b>Karnataka</b>
                                </Col>
                              </Col>
                            </Row>
                          </Col>
                          <Col className="col-12">
                            <Row className="g-2 form">
                              <Col className="col-4">
                                <FormLabel>
                                  <sub>District/DRC</sub>
                                </FormLabel>
                                <Col className="col-12">
                                  <b>Nagar</b>
                                </Col>
                              </Col>
                              <Col className="col-3">
                                <FormLabel>
                                  <sub>Taluka/TRC</sub>
                                </FormLabel>
                                <Col className="col-12">
                                  <b>---</b>
                                </Col>
                              </Col>
                              <Col className="col-5">
                                <FormLabel>
                                  <sub>Current responsibilities</sub>
                                </FormLabel>
                                <Col className="col-12">
                                  <b>---</b>
                                </Col>
                              </Col>
                            </Row>
                          </Col>
                        </Col>
                        <Col className="form-group col-12">
                          <Col className=" col-12 border-bottom">
                            <FormLabel>
                              <small>Additional Details</small>
                            </FormLabel>
                          </Col>
                          <Col className="col-12">
                            <Row className="g-2 form">
                              <Col className="col-4">
                                <FormLabel>
                                  <small>Gender</small>
                                </FormLabel>
                                <Col className="col-12">
                                  <b>Male</b>
                                </Col>
                              </Col>
                              <Col className="col-4">
                                <FormLabel>
                                  <small>Date of Birth</small>
                                </FormLabel>
                                <Col className="col-12">
                                  <b>DD-MM-YYYY</b>
                                </Col>
                              </Col>
                              <Col className="col-4">
                                <FormLabel>
                                  <small>Education</small>
                                </FormLabel>
                                <Col className="col-12">
                                  <b>MBA</b>
                                </Col>
                              </Col>
                            </Row>
                          </Col>
                          <Col className="col-12">
                            <FormLabel>
                              <small>Profession</small>
                            </FormLabel>
                            <Col className="col-12">
                              <b>Service</b>
                            </Col>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter className="bg-white">
                  <Col className="form-group col-12">
                    <Row className="g-2 form">
                      <Col className="col-6">
                        <Button className="bg-white text-secondary border-secondary">
                          Cancel
                        </Button>
                      </Col>
                      <Col className="col-6">
                        <Row className="g-2 form">
                          <Col className="col-6">
                            <Button className="bg-warning text-white border-warning">
                              Reject
                            </Button>
                          </Col>
                          <Col className="col-6">
                            <Button className="bg-success text-white border-success">
                              Approve
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </CardFooter>
              </Card>
            </Col>
          </Col>
        </>
      </Mobile>
    </>
  );
};

export default ViewNewRegistrationDetails;
