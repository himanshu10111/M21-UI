import React, { useState, useEffect } from "react";
import {
  Card,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Form,
  CardBody,
  Input,
  DropdownMenu,
} from "reactstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useNavigate } from "react-router-dom";
import { Accordion, Button, Carousel, Dropdown, InputGroup, Pagination } from "react-bootstrap";
import SearchIcon from "../../assets/img/Search.png";

import SettingIcon from "../../assets/img/Settings2.png";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import IntroductoryTabIndex from "./plannedIntroductoryTabOne/tab/IntroductoryTabIndex";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import PostIntroductoryTable from "./postIntroductoryTabTwo/PostIntroductoryTable";
import ReviewIntroductoryTable from "./ReviewIntroductoryTabThree/ReviewIntroductoryTable";
import IntroducerTable from "./IntroducerDetailTabFour/IntroducerTable";
import MyFacilitatorTable from "./MyFacilitatorTabFour/MyFacilitatorTable";
import { NumberOfRow } from "../../component/numberOfRowTable/NumberOfRow";

const AllTableDisplay = ({ search }) => {

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

  const navigate = useNavigate();
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
        console.log(data);
      })
  }, []);

  const handleIntroductoryClick = (id) => {
    navigate(`/auth/login/introductory/${id}`);
  };

  const handleAddAttendeeClick = (id) => {
    navigate(`/auth/login/introductory/addattendees/${id}`);
  };

  const handleIntroductoryDeleteClick = (id) => {

    fetch(`${BaseURL}/api/auth/delete/introductory/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        if (res.ok) {
          setMeeting((prevMeetings) => prevMeetings.filter((meeting) => meeting.id !== id));
          return res.text();
        } else {
          throw new Error(`Request failed with status: ${res.status}`);
        }
      })
      .then((data) => {
        console.log(data);
      });

    console.log('------Introductory Meeting Deleted------');
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
    const timeComponents = timeString.split(':');
    const hours = timeComponents[0];
    const minutes = timeComponents[1];
    return `${hours}:${minutes}`;
  };

  const filterMeetings = () => {
    return meetings.filter((meeting) => {
      return (
        search === '' || // No search query, return all items
        meeting.m21Type.toLowerCase().includes(search.toLowerCase()) ||
        meeting.meetingLanguage.toLowerCase().includes(search.toLowerCase()) ||
        meeting.location.toLowerCase().includes(search.toLowerCase())
      );
    });
  };

  const filteredMeetings = filterMeetings();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = filteredMeetings.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Col sm="12" className="bg-white">
      <Table striped>
        <thead>
          <tr>
            <th>
              <Input type="checkbox" />
            </th>
            <th>Meeting Id</th>
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
          {
            itemsToDisplay.map((meeting) => (
              <tr key={meeting.id} >
                <td>
                  <Input type="checkbox" />
                </td>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popover}
                >
                  <td>{meeting.id}</td>
                </OverlayTrigger>
                <td>{meeting.m21Type}</td>
                <td>
                  {formatDate(meeting.date)}
                  <br></br>
                  {formatTime(meeting.fromTime)}AM - {formatTime(meeting.toTime)}PM
                </td>
                <td>{meeting.meetingLanguage}</td>
                <td>{meeting.location}</td>
                <td>{meeting.introductoryLevel}</td>
                <td className={meeting.status === 1 ? "text-success" : meeting.status === 0 ? "text-danger" : "text-black"}>{meeting.status === 1 ? 'Approve' : meeting.status === 0 ? 'Reject' : 'New'}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle id='dropdown-basic' className="bg-transparent border-0 text-dark">
                      Select
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleIntroductoryClick(meeting.id)}>View/Edit</Dropdown.Item>
                      <Dropdown.Item>Send reminder</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleAddAttendeeClick(meeting.id)}>Add attendance</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleIntroductoryDeleteClick(meeting.id)}>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
        </tbody>
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
    </Col>
  );
};

const M21WingTab = ({ meetings, dateFormat, handleAddAttendeeClick, handleIntroductoryClick, handleIntroductoryDeleteClick }) => {
  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [orgMap, setOrgMap] = useState([]);
  useEffect(() => {

    fetch(`${BaseURL}/api/org/wings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrgMap(data);
        console.log(data);
      })
  }, []);

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

  return (
    <>
      <Accordion defaultActiveKey="0">
        {orgMap.map((wing, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>{wing.m21Wing}</Accordion.Header>
            <Accordion.Body>
              <Col sm="12" className="bg-white">
                <Table striped>
                  <thead>
                    <tr>
                      <th>
                        <Input type="checkbox" />
                      </th>
                      <th>Meeting Id</th>
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
                    {meetings
                      .filter((meeting) => {
                        const match = meeting.m21Type === wing.m21Wing;
                        return match;
                      })
                      .map((meeting) => (
                        <tr key={meeting.id}>
                          <td>
                            <Input type="checkbox" />
                          </td>
                          <OverlayTrigger
                            trigger="click"
                            placement="bottom"
                            overlay={popover}
                          >
                            <td>{meeting.id}</td>
                          </OverlayTrigger>
                          <td>{meeting.m21Type}</td>
                          <td>
                            {dateFormat(meeting.date)}                      <br />
                            {meeting.fromTime}AM - {meeting.toTime}PM
                          </td>
                          <td>{meeting.meetingLanguage}</td>
                          <td> {meeting.location}</td>
                          <td>{meeting.introductoryLevel}</td>
                          <td className={meeting.status === 1 ? "text-success"
                            : meeting.status === 0 ? "text-danger"
                              : "text-black"}>
                            {meeting.status === 1 ? 'Approve' : meeting.status === 0 ? 'Reject' : 'New'}</td>
                          <td>
                            <Dropdown>
                              <Dropdown.Toggle id='dropdown-basic' className="bg-transparent border-0 text-dark">
                                Select
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item onClick={() => handleIntroductoryClick(meeting.id)}>View/Edit</Dropdown.Item>
                                <Dropdown.Item>Send reminder</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleAddAttendeeClick(meeting.id)}>Add attendance</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleIntroductoryDeleteClick(meeting.id)}>Delete</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Col>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

const StateTabTable = () => {
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

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>STate Name</Accordion.Header>
          <Accordion.Body>
            <Col sm="12" className="bg-white">
              <Table striped>
                <thead>
                  <tr>
                    <th>
                      <Input type="checkbox" />
                    </th>
                    <th>Meeting Id</th>
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
                  <tr>
                    <td>
                      <Input type="checkbox" />
                    </td>
                    <OverlayTrigger
                      trigger="click"
                      placement="bottom"
                      overlay={popover}
                    >
                      <td>IM_INDIA_20211231</td>
                    </OverlayTrigger>
                    <td>Online</td>
                    <td>
                      Fri, 31 Dec 21
                      <br />
                      10:00AM - 01:00PM
                    </td>
                    <td>Hindi</td>
                    <td>Zoom meeting deatils</td>
                    <td>India</td>
                    <td>New</td>
                    <td>Select</td>
                  </tr>
                  <tr>
                    <td>
                      <Input type="checkbox" />
                    </td>
                    <td>IM_MH_Durg_20211231</td>
                    <td>Offline</td>
                    <td>
                      Fri, 31 Dec 21
                      <br />
                      10:00AM - 01:00PM
                    </td>
                    <td>Telgu</td>
                    <td>
                      Hotel The Avalon
                      <br />
                      Malviya Nagar
                    </td>
                    <td>Maharashtra</td>
                    <td className="text-success">Approved</td>
                    <td>Select</td>
                  </tr>
                  <tr>
                    <td>
                      <Input type="checkbox" />
                    </td>
                    <td>IM_NAG(Rural)_20211231</td>
                    <td>Offline</td>
                    <td>
                      Fri, 31 Dec 21
                      <br />
                      10:00AM - 01:00PM
                    </td>
                    <td>Punjabi</td>
                    <td>
                      Hotel The Avalon
                      <br />
                      Malviya Nagar
                    </td>
                    <td>Maharashtra</td>
                    <td className="text-warning">Pending</td>
                    <td>Select</td>
                  </tr>
                  <tr>
                    <td>
                      <Input type="checkbox" />
                    </td>
                    <td>IM_CG_Drug_20211231</td>
                    <td>Offline</td>
                    <td>
                      Fri, 31 Dec 21
                      <br />
                      10:00AM - 01:00PM
                    </td>
                    <td>Kanada</td>
                    <td>
                      Hotel The Avalon
                      <br />
                      Malviya Nagar
                    </td>
                    <td>Maharashtra</td>
                    <td className="text-danger">Rejected</td>
                    <td>Select</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>State Name</Accordion.Header>
          <Accordion.Body>
            <Col sm="12" className="bg-white">
              <Table striped>
                <thead>
                  <tr>
                    <th>
                      <Input type="checkbox" />
                    </th>
                    <th>Meeting Id</th>
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
                  <tr>
                    <td>
                      <Input type="checkbox" />
                    </td>
                    <OverlayTrigger
                      trigger="click"
                      placement="bottom"
                      overlay={popover}
                    >
                      <td>IM_INDIA_20211231</td>
                    </OverlayTrigger>
                    <td>Online</td>
                    <td>
                      Fri, 31 Dec 21
                      <br />
                      10:00AM - 01:00PM
                    </td>
                    <td>Hindi</td>
                    <td>Zoom meeting deatils</td>
                    <td>India</td>
                    <td>New</td>
                    <td>Select</td>
                  </tr>
                  <tr>
                    <td>
                      <Input type="checkbox" />
                    </td>
                    <td>IM_MH_Durg_20211231</td>
                    <td>Offline</td>
                    <td>
                      Fri, 31 Dec 21
                      <br />
                      10:00AM - 01:00PM
                    </td>
                    <td>Telgu</td>
                    <td>
                      Hotel The Avalon
                      <br />
                      Malviya Nagar
                    </td>
                    <td>Maharashtra</td>
                    <td className="text-success">Approved</td>
                    <td>Select</td>
                  </tr>
                  <tr>
                    <td>
                      <Input type="checkbox" />
                    </td>
                    <td>IM_NAG(Rural)_20211231</td>
                    <td>Offline</td>
                    <td>
                      Fri, 31 Dec 21
                      <br />
                      10:00AM - 01:00PM
                    </td>
                    <td>Punjabi</td>
                    <td>
                      Hotel The Avalon
                      <br />
                      Malviya Nagar
                    </td>
                    <td>Maharashtra</td>
                    <td className="text-warning">Pending</td>
                    <td>Select</td>
                  </tr>
                  <tr>
                    <td>
                      <Input type="checkbox" />
                    </td>
                    <td>IM_CG_Drug_20211231</td>
                    <td>Offline</td>
                    <td>
                      Fri, 31 Dec 21
                      <br />
                      10:00AM - 01:00PM
                    </td>
                    <td>Kanada</td>
                    <td>
                      Hotel The Avalon
                      <br />
                      Malviya Nagar
                    </td>
                    <td>Maharashtra</td>
                    <td className="text-danger">Rejected</td>
                    <td>Select</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>State Name</Accordion.Header>
          <Accordion.Body>
            <Col sm="12" className="bg-white">
              <Table striped>
                <thead>
                  <tr>
                    <th>
                      <Input type="checkbox" />
                    </th>
                    <th>Meeting Id</th>
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
                  <tr>
                    <td>
                      <Input type="checkbox" />
                    </td>
                    <OverlayTrigger
                      trigger="click"
                      placement="bottom"
                      overlay={popover}
                    >
                      <td>IM_INDIA_20211231</td>
                    </OverlayTrigger>
                    <td>Online</td>
                    <td>
                      Fri, 31 Dec 21
                      <br />
                      10:00AM - 01:00PM
                    </td>
                    <td>Hindi</td>
                    <td>Zoom meeting deatils</td>
                    <td>India</td>
                    <td>New</td>
                    <td>Select</td>
                  </tr>
                  <tr>
                    <td>
                      <Input type="checkbox" />
                    </td>
                    <td>IM_MH_Durg_20211231</td>
                    <td>Offline</td>
                    <td>
                      Fri, 31 Dec 21
                      <br />
                      10:00AM - 01:00PM
                    </td>
                    <td>Telgu</td>
                    <td>
                      Hotel The Avalon
                      <br />
                      Malviya Nagar
                    </td>
                    <td>Maharashtra</td>
                    <td className="text-success">Approved</td>
                    <td>Select</td>
                  </tr>
                  <tr>
                    <td>
                      <Input type="checkbox" />
                    </td>
                    <td>IM_NAG(Rural)_20211231</td>
                    <td>Offline</td>
                    <td>
                      Fri, 31 Dec 21
                      <br />
                      10:00AM - 01:00PM
                    </td>
                    <td>Punjabi</td>
                    <td>
                      Hotel The Avalon
                      <br />
                      Malviya Nagar
                    </td>
                    <td>Maharashtra</td>
                    <td className="text-warning">Pending</td>
                    <td>Select</td>
                  </tr>
                  <tr>
                    <td>
                      <Input type="checkbox" />
                    </td>
                    <td>IM_CG_Drug_20211231</td>
                    <td>Offline</td>
                    <td>
                      Fri, 31 Dec 21
                      <br />
                      10:00AM - 01:00PM
                    </td>
                    <td>Kanada</td>
                    <td>
                      Hotel The Avalon
                      <br />
                      Malviya Nagar
                    </td>
                    <td>Maharashtra</td>
                    <td className="text-danger">Rejected</td>
                    <td>Select</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <Col onClick={handleClick} className={activeTab === id ? "active" : ""}>
      {title}
    </Col>
  );
};

const TabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? <Col className="TabContent">{children}</Col> : null;
};

const CreateIntroductoryMeeting = (args) => {
  const [search, setSearch] = useState('');
  const [isSelectCheckbox, setIsSelectcheckbox] = useState(false);
  const SelectCheckbox = () => {
    setIsSelectcheckbox((current) => !current);
  }

  const [isActiveTab, setIsActiveTab] = useState("tab1");

  const [model, setModel] = useState(false);

  const toggle = () => setModel(!model);

  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [meetings, setMeeting] = useState([]);

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
  }, []);

  const [attendees, setAttendee] = useState([]);
  const currentDate = new Date();
  const formattedDate = `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getDate().toString().padStart(2, '0')}/${currentDate.getFullYear()}`;

  useEffect(() => {
    fetch(`${BaseURL}/api/auth/get/introductory/metting/bydate?date=${formattedDate}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAttendee(data);
        console.log(data);
      })
  }, []);

  const dateFormat = (dateStr) => {
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
    if (timeString) {
        const timeComponents = timeString.split(':');
        const hours = timeComponents[0];
        const minutes = timeComponents[1];
        return `${hours}:${minutes}`;
    } else {
        return ''; 
    }
}

  const navigate = useNavigate();
  const handleMarkAttendeeClick = (id) => {
    navigate(`/auth/login/introductory/viewmeeting/${id}`)
  };
  return (
    <>
      <Row>
        <Col sm="12">
          &nbsp;
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          &nbsp;&nbsp;
          <Button
            onClick={toggle}
            className="border-0 M21-btn text-uppercase"
          >
            Create Introductory Meeting
          </Button>
        </Col>
      </Row>
      <Col sm="12" className="form-control bg-transparent border-0 ">
        <Card className="bg-transparent border-0">
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">

            <Tab
              eventKey="Tab-3"
              title="Review Introductory"
              className="bg-transparent"
            >
              <ReviewIntroductoryTable />
            </Tab>
            <Tab
              title="Planned Introductory"
              eventKey="home"
              className="bg-transparent"
            >
              <Col className="section">
                <Col className="container-fluid">
                  <Col className="form-control bg-transparent border-0">
                    <Form>
                      <Col className="form-contend">
                        <Row className="g-2">
                          <Col sm="12">
                            <Modal
                              className="modal-lg"
                              isOpen={model}
                              toggle={toggle}
                              {...args}
                            >
                              <ModalHeader
                                toggle={toggle}
                                className="border-bottom-0 px-5 pt-4 pb-2 "
                              >
                                <label className=" col-sm-12">
                                  <h3>New Introductory Request</h3>
                                </label>
                              </ModalHeader>
                              <Col lg="12">
                                <ModalBody className="p-0">
                                  <IntroductoryTabIndex
                                    closeTab={toggle}
                                  />
                                </ModalBody>
                              </Col>
                            </Modal>
                          </Col>
                          <Col sm="12">
                            <Accordion defaultActiveKey="0">
                              <Accordion.Item eventKey="0">
                                <AccordionHeader>
                                  <Col sm="12">
                                    <Row className="g-2 form">
                                      <Col sm="6">Todays Introductory(20)</Col>
                                      <Col sm="6">
                                        <Row className="g-2 form">

                                          <Col sm='2'>M21 Wing</Col>
                                          <Col sm='2'>
                                            <Input type="select">
                                              <option>All</option>
                                              <option>M21 wing</option>
                                            </Input>

                                          </Col>
                                          <Col sm="2">Country</Col>
                                          <Col sm="1">State</Col>
                                          <Col sm="2">District</Col>
                                          <Col sm="2">Tehshil</Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </Col>
                                </AccordionHeader>
                                <AccordionBody className="h-50">
                                  <Carousel variant="dark" indicators={false} fade={false} slide={false}>
                                    {attendees.map((attendee, index) => (
                                      <Carousel.Item key={index}>
                                        <Row>
                                          <Col sm="1">&nbsp;</Col>
                                          {Array.from({ length: 3 }, (_, i) => i).map((offset) => (
                                            index + offset < attendees.length && (
                                              <Col sm="3" key={index + offset}>
                                                <Card className="">
                                                  <CardBody className="p-1">
                                                    <Row className="g-2 form">
                                                      <Col sm="12" className="p-2">
                                                        <Row className="g-2 form">
                                                          <Col sm="6" className="text-primary small">
                                                            <b>{attendees[index + offset].id}</b>
                                                          </Col>
                                                          <Col sm="6">
                                                            <Col sm="12" className="bg-primary rounded-5 text-center text-white"
                                                              onClick={() => handleMarkAttendeeClick(attendees[index + offset].id)}
                                                            >
                                                              Mark attendance
                                                            </Col>
                                                          </Col>
                                                        </Row>
                                                      </Col>
                                                      <Col sm="12">
                                                        {dateFormat(attendees[index + offset].date)} | {formatTime(attendees[index + offset].from_time)} AM to {formatTime(attendees[index + offset].to_time)} PM
                                                      </Col>
                                                      <Col sm="12">
                                                        {attendees[index + offset].type}:&nbsp;
                                                        <a className="text-primary small">
                                                          <u>{attendees[index + offset].location}</u>
                                                        </a>
                                                      </Col>
                                                    </Row>
                                                  </CardBody>
                                                </Card>
                                              </Col>
                                            )
                                          ))}
                                          <Col sm="1">&nbsp;</Col>
                                        </Row>
                                      </Carousel.Item>
                                    ))}
                                  </Carousel>
                                </AccordionBody>
                              </Accordion.Item>
                            </Accordion>
                          </Col>
                          <Col sm="12">
                            &nbsp;&nbsp;
                            <Row>
                              <Col sm="4">
                                <input
                                  type="text"
                                  placeholder="Search member by type, language, location"
                                  className="border rounded-5 form-control pr-5 bg-search-icon"
                                  style={{
                                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L19.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`, // Add the search icon as background image
                                    backgroundPosition: 'right 5px center', // Adjust the position of the icon
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '24px 24px', // Adjust the size of the icon
                                  }}
                                  value={search}
                                  onChange={(e) => setSearch(e.target.value)}
                                >
                                </input>
                              </Col>
                              <Col sm="8"></Col>
                            </Row>
                          </Col>
                          <Col sm="12">
                            <Row className="g-2 form">
                              <Col sm="7"></Col>
                              <Col
                                sm="1"
                                className="bg-white border"
                              >
                                <TabNavItem
                                  sm="12"
                                  id="tab1"
                                  title="All"
                                  activeTab={isActiveTab}
                                  setActiveTab={setIsActiveTab}
                                />
                              </Col>
                              <Col
                                sm="1"
                                className="bg-white border"
                              >
                                <TabNavItem
                                  sm="12"
                                  id="tab2"
                                  title="M21 wing"
                                  activeTab={isActiveTab}
                                  setActiveTab={setIsActiveTab}
                                />
                              </Col>
                              <Col
                                sm="1"
                                className="bg-white border"
                              >
                                <TabNavItem
                                  sm="12"
                                  id="tab3"
                                  title="state"
                                  activeTab={isActiveTab}
                                  setActiveTab={setIsActiveTab}
                                />
                              </Col>
                              <Col sm="1"></Col>
                              <Col sm="1">
                                <img src={SettingIcon} role="button" />
                              </Col>
                            </Row>
                          </Col>

                          <Col sm='12'>
                            <TabContent id="tab1" activeTab={isActiveTab}>
                              <AllTableDisplay search={search} />
                            </TabContent>
                            <TabContent id="tab2" activeTab={isActiveTab}>
                              <M21WingTab meetings={meetings} dateFormat={dateFormat} />
                            </TabContent>
                            <TabContent id="tab3" activeTab={isActiveTab}>
                              <StateTabTable />
                            </TabContent>
                          </Col>

                        </Row>
                      </Col>
                    </Form>
                  </Col>
                </Col>
              </Col>
            </Tab>
            <Tab
              eventKey="Tab-2"
              title="Post Introductry"
              className="bg-transparent"
            >
              <PostIntroductoryTable />
            </Tab>
            <Tab
              eventKey="Tab-4"
              title="Introducer Detail"
              className="bg-transparent"
            >
              <IntroducerTable />
            </Tab>
            <Tab
              eventKey="Tab-5"
              title="My Facilitation"
              className="bg-transparent"
            >
              <MyFacilitatorTable />
            </Tab>
          </Tabs>
        </Card>
      </Col>
    </>
  );
};


export default CreateIntroductoryMeeting;
