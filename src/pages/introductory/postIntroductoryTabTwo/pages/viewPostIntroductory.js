import React,{useEffect,useState} from "react";
import {
  Button,
  Card,
  Col,
  Dropdown,
  FormLabel,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { CardBody, CardFooter, CardHeader, Form, Input } from "reactstrap";
import settingimg from "../../../../assets/img/Settings2.png";
const ViewPostIntroductory = () => {

  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [totalAttendeesCount, setTotalAttendeesCount] = useState(0);
  const [successAttendeesCount, setSuccessAttendeesCount] = useState(0);
  const [secondaryAttendeesCount, setSecondaryAttendeesCount] = useState(0);
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

  const PostIntroductoryTable = () => {
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
          const successAttendees = data.filter((attendee) => attendee.status === 2);
          setSuccessAttendeesCount(successAttendees.length);
          const secondaryAttendees = data.filter((attendee) => attendee.status !== 2);
          setSecondaryAttendeesCount(secondaryAttendees.length);
          console.log(data);
        });
    }, [id]);

    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Attendance Name</th>
              <th>Phone No.</th>
              <th>Distrit</th>
              <th>State</th>
              <th>M21 Wing</th>
              <th>Refered by</th>
              <th>Status</th>
              <th>Attendance</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
          {Attendees.map((attendee) => (
            <tr key={attendee.id}>
              <td className="text-primary">{attendee.firstName} {attendee.lastName}</td>
              <td>{attendee.mobileNumber}</td>
              <td>{attendee.district}</td>
              <td>{attendee.state}</td>
              <td>{attendee.m21Wing}</td>
              <td>Prafull</td>
              <td>Confirm</td>
              <td>
                <Button  className={`btn ${attendee.status === 2 ? 'btn-success' : 'btn-secondary'}`}>
                  {attendee.status===2 ? 'Attened':'Attended'}
                </Button>
              </td>
              <td>
                <Input disabled placeholder={attendee.comment}></Input>
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
      </>
    );
  };

  return (
    <>
      <Col className="section p-4">
        <Col className="container-fluid">
          <Col sm="10">
            <Card className="border-0 rounded-0 shadow">
              <CardHeader className="bg-white">
                <Col sm="12">
                  <Row className="g-2 form">
                    <Col sm="3" className="text-center">
                      <Col className="form-control bg-transparent form-group border-0 fw-bold fs-4">
                        Post introductory
                      </Col>
                    </Col>
                    <Col sm="4" className="text-start">
                      <Button className="rounded-5">Review Introductory</Button>
                    </Col>
                    <Col sm="5" className="text-end">
                      <Dropdown>
                        <Dropdown.Toggle variant="secondary">
                          Download reports
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header className="mt-n4">Raw data</Dropdown.Header>
                          &nbsp;<Dropdown.Item>Excel Raw data(xlsx)</Dropdown.Item>
                          &nbsp;<Dropdown.Item>CSV Report (csv)</Dropdown.Item>
                          <Dropdown.Header>Report with Charts</Dropdown.Header>
                          &nbsp;<Dropdown.Item>Microsoft Word</Dropdown.Item>
                          &nbsp;<Dropdown.Item>Excel with Charts</Dropdown.Item>
                          &nbsp;<Dropdown.Item>Powerpoint</Dropdown.Item>
                          &nbsp;<Dropdown.Item>Adobe PDF</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                </Col>
              </CardHeader>
              <CardBody>
                <Row className="g-2 form">
                  <Col className="form-control form-group bg-light" sm="12">
                    <Row className="g-2 form">
                      <Col sm="12">
                        <h5>{introductory.id}</h5>
                      </Col>
                      <Col sm="12">
                        <Row className="g-2 form">
                          <Col sm="2">
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
                          <Col sm="2">
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
                            <Col sm="12" className="fw-bold">{introductory.introductoryLevel}</Col>
                          </Col>
                        </Row>
                      </Col>
                      <Col sm="12">
                        <Row className="g-2 form">
                          <Col sm="2">
                            <FormLabel>Meeting Date & Time</FormLabel>
                            <Col sm="12" className="fw-bold">
                            {formatDate(introductory.date)}
                                <br /> {introductory.fromTime} AM - {introductory.toTime}Pm
                            </Col>
                          </Col>
                          <Col sm="2">
                            <FormLabel>Location</FormLabel>
                            <Col sm="12" className="fw-bold">
                                {introductory.location}
                            </Col>
                          </Col>
                          <Col sm="2">
                            <FormLabel>Introducer 1</FormLabel>
                            <Col sm="12" className="fw-bold">
                              {introductory.introducer1}
                            </Col>
                          </Col>
                          <Col sm="2">
                            <FormLabel>Introducer 2</FormLabel>
                            <Col sm="12" className="fw-bold">
                              {introductory.introducer2}
                            </Col>
                          </Col>
                          <Col sm="2">
                            <FormLabel>Attendance mark by</FormLabel>
                            <Col sm="12" className="fw-bold">                      
                                Name Surname
                                <br />
                                (M21 ID:1234)
                            </Col>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="12" className="p-2">
                    &nbsp;
                  </Col>
                  <Col sm="8">
                    <Input className="col-sm-12 rounded-5"
                    placeholder="Search attendees by name, phone, email, location"></Input>
                  </Col>
                  <Col
                    sm="12"
                    className="form-group form-control bg-light border-0"
                  >
                    <Row className="g-2 form">
                      <Col sm="10">
                        <Row className="g-2 form">
                          <Col sm="4">{totalAttendeesCount} Attendance added |</Col>
                          <Col sm="4">{successAttendeesCount} attened |</Col>
                          <Col sm="4">{secondaryAttendeesCount} not attended</Col>
                        </Row>
                      </Col>
                      <Col sm='1'></Col>
                      <Col sm="1" className="text-end">
                        <img src={settingimg} />
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="12">
                    <Card className="shadow rounded-0">
                      <PostIntroductoryTable />
                    </Card>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <Col sm="12">
                  <Row className="g-2 form">
                    <Col sm="6">
                      <Link to="/introductory">
                        <Button className="bg-white text-secondary border-secondary">
                          Cancel
                        </Button>
                      </Link>
                    </Col>
                    <Col sm="6" className="text-end">
                      <Button>Review Introductory</Button>
                    </Col>
                  </Row>
                </Col>
              </CardFooter>
            </Card>
          </Col>
        </Col>
      </Col>
    </>
  );
};

export default ViewPostIntroductory;
