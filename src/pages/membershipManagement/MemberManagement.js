import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Form,
  Tab,
  Tabs,
  Accordion,
  Dropdown,
  FormLabel,
  Pagination,
} from "react-bootstrap";
import { CardBody, Col, Input, Row } from "reactstrap";
import SettingIcon from "../../assets/img/Settings2.png";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";

import { useMediaQuery } from "react-responsive";
import UploadCsvFile from "./Pages/uploadCsvFile";
import { NumberOfRow } from "../../component/numberOfRowTable/NumberOfRow";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const AllTableDisplay = () => {
  // const OptnColor = {
  //   option: checked  {
  //     color: red,
  //   },
  // };

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

  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [nominees, setNominee] = useState([]);

  useEffect(() => {
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
      });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = NumberOfRow;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = nominees.slice(startIndex, endIndex);

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
            <th>Member Id</th>
            <th>Member Name</th>
            <th>Phone No.</th>
            <th>District</th>
            <th>State</th>
            <th>M21 Wing</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {itemsToDisplay.map((nominee) => (
            <tr key={nominee.id}>
              <td>
                <Input type="checkbox" />
              </td>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popover}
              >
                <td>{nominee.id}</td>
              </OverlayTrigger>
              <td>
                {" "}
                {nominee.firstName} &nbsp; {nominee.lastName}
              </td>
              <td> {nominee.mobileNumber}</td>
              <td> {nominee.district}</td>
              <td> {nominee.state}</td>
              <td> {nominee.m21Wing}</td>
              <td>
                <Input type="select">
                  <option className="text-success">Active</option>
                  <option className="text-danger">Inactive</option>
                </Input>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="bg-transparent border-0 text-dark"
                  >
                    Select
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">View</Dropdown.Item>
                    <Dropdown.Item>Edit</Dropdown.Item>
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
          { length: Math.ceil(nominees.length / itemsPerPage) },
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
          disabled={currentPage === Math.ceil(nominees.length / itemsPerPage)}
        />
      </Pagination>
    </Col>
  );
};

const M21WingTab = () => {
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
          <Accordion.Header>Art</Accordion.Header>
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
          <Accordion.Header>Media</Accordion.Header>
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
          <Accordion.Header>People</Accordion.Header>
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

const MemberManagements = () => {
  const [isActiveTab, setIsActiveTab] = useState("tab1");
  const [isActiveTabMobile, setIsActiveTabMobile] = useState("tab1");

  const TabNavItemMobile = ({ id, title, activeTab, setIsActiveTabMobile }) => {
    const handleClickMobile = () => {
      setIsActiveTabMobile(id);
    };
    return (
      <Col
        onClick={handleClickMobile}
        className={activeTab === id ? "active" : ""}
      >
        {title}
      </Col>
    );
  };

  const TabContentMobile = ({ id, activeTab, children }) => {
    return activeTab === id ? (
      <Col className="TabContentMobile">{children}</Col>
    ) : null;
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
    return activeTab === id ? (
      <Col className="TabContent">{children}</Col>
    ) : null;
  };

  const ElementChange = document.querySelector("#firstchild");
  // // ElementChange.innerHTML = "I got changed again";
  // ElementChange.style.backgroundColor = "black";
  // // const varbtn = document.querySelector("#btntoggel");
  // // varbtn.addEventListener("click", () => {
  // //   // ElementChange.classList.toggle("d-none");
  // // });

  // const FnForTog = document.querySelector("#btntog");
  // FnForTog.style.backgroundColor = "red";
  // FnForTog.addEventListener("click", () => {
  //   ElementChange.classList.toggle("bg-primary");
  //   ElementChange.innerHTML = "I got chnaged";
  // });
  return (
    <>
      <Desktop>
        <Col className="container-fluid">
          <Card>
            <CardBody>
              <Col sm="12" className="form-control bg-transparent border-0 ">
                <Card className="bg-transparent border-0">
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab
                      title="Membership Management"
                      eventKey="home"
                      className="bg-transparent"
                    >
                      <Col className="section">
                        <Col className="conatiner-fluid">
                          <Col className="form-control  border-0">
                            <Form>
                              <Col sm="12" className="form-control border-0">
                                <Row className="g-2 form">
                                  <Col sm="6">
                                    <input
                                      type="text"
                                      placeholder="Search member by name, phone, email, location"
                                      className="border rounded-5 form-control"
                                      style={{
                                        paddingRight: "30px", // Add some right padding to make space for the icon
                                        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L19.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`, // Add the search icon as background image
                                        backgroundPosition: "right 5px center", // Adjust the position of the icon
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "24px 24px", // Adjust the size of the icon
                                      }}
                                    ></input>
                                  </Col>
                                  <Col sm="4">
                                    <Link to="/auth/login/membershipmanagement/adduser">
                                      <Button>Add user</Button>
                                    </Link>
                                  </Col>
                                </Row>
                              </Col>

                              <Col sm="12">
                                <Row className="g-2 form">
                                  <Col sm="6">&nbsp;</Col>
                                  <Col sm="3">
                                    <Col
                                      sm="12"
                                      className="form-control border-0"
                                    >
                                      <Row className="g-2 ">
                                        <Col
                                          sm="4"
                                          className="border text-center"
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
                                          sm="4"
                                          className="border text-center"
                                        >
                                          <TabNavItem
                                            sm="12"
                                            id="tab2"
                                            title="M21 Wing"
                                            activeTab={isActiveTab}
                                            setActiveTab={setIsActiveTab}
                                          />
                                        </Col>
                                        <Col
                                          sm="4"
                                          className="border text-center"
                                        >
                                          <TabNavItem
                                            sm="12"
                                            id="tab3"
                                            title="State"
                                            activeTab={isActiveTab}
                                            setActiveTab={setIsActiveTab}
                                          />
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Col>
                                  <Col sm="2" className="text-center">
                                    <Button className="col-sm-12 rounded-5">
                                      Filter
                                    </Button>
                                  </Col>
                                  <Col sm="1" className="text-center">
                                    <Col
                                      sm="12"
                                      className="border-0 form-control"
                                    >
                                      <img src={SettingIcon} />
                                    </Col>
                                  </Col>
                                </Row>
                              </Col>
                              <Col sm="12">
                                <TabContent id="tab1" activeTab={isActiveTab}>
                                  <AllTableDisplay />
                                </TabContent>
                                <TabContent id="tab2" activeTab={isActiveTab}>
                                  <M21WingTab />
                                </TabContent>
                                <TabContent id="tab3" activeTab={isActiveTab}>
                                  <StateTabTable />
                                </TabContent>
                              </Col>
                            </Form>
                          </Col>
                        </Col>
                      </Col>
                    </Tab>
                    <Tab eventKey="Upload CSV file" title="Upload CSV file">
                      <UploadCsvFile />
                    </Tab>
                  </Tabs>
                </Card>
              </Col>
            </CardBody>
          </Card>
        </Col>
      </Desktop>
      <Mobile>
        <Col className="section">
          <Col className="container-fluid">
            <Row className="g-2 form">
              <Col className="col-12 border-bottom">
                <Col className="form-control form-group border-0">
                  <Row className="g-2 ">
                    <Col className="col-8">
                      <b>M21 member management</b>
                    </Col>
                    <Col className="col-4">
                      <Link to="/auth/login/membershipmanagement/adduser">
                        <Button>Add User</Button>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Col>
              <Col className="col-12">
                <Input placeholder="Search member by name, phone, email, location" />
              </Col>
              <Col className="col-12">
                <Col className="col-12">
                  <Row className="g-2 form">
                    <Col className="col-8">
                      <Col className="col-12 form-control border-0">
                        <Row className="g-2 ">
                          <Col className="col-4 border text-center">
                            <TabNavItemMobile
                              className="col-12"
                              id="tab1"
                              title="All"
                              activeTab={isActiveTabMobile}
                              setIsActiveTabMobile={setIsActiveTabMobile}
                            />
                          </Col>
                          <Col className="col-4 border text-center">
                            <TabNavItemMobile
                              className="col-12"
                              id="tab2"
                              title="M21 Wing"
                              activeTab={isActiveTabMobile}
                              setIsActiveTabMobile={setIsActiveTabMobile}
                            />
                          </Col>
                          <Col className=" col-4 border text-center">
                            <TabNavItemMobile
                              className="col-12"
                              id="tab3"
                              title="State"
                              activeTab={isActiveTabMobile}
                              setIsActiveTabMobile={setIsActiveTabMobile}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Col>
                    <Col className=" col-4 text-center">
                      <Button className="col-12 rounded-5">Filter</Button>
                    </Col>
                  </Row>
                </Col>
              </Col>
              <Col className="col-12">
                <Row className="g-2 form">
                  <TabContentMobile id="tab1" activeTab={isActiveTabMobile}>
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Card className="shadow">
                          <CardBody>
                            <Row className="g-2 form">
                              <Col className="col-10">
                                <Row className="lh-1 form">
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-1">
                                        <Input type="checkbox" />
                                      </Col>
                                      <Col className="col-7">
                                        <FormLabel>Saba Anjum karim</FormLabel>
                                      </Col>
                                      <Col className="col-3 text-success text-end">
                                        Active
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-1">&nbsp;</Col>
                                      <Col className="col-4">
                                        <sub>9876 532 412</sub>
                                      </Col>
                                      <Col className="col-4 pe-0">
                                        <sub>Araria,Bihar</sub>
                                      </Col>
                                      <Col className="col-3 pe-0">
                                        <sub>Technology</sub>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                              <Col className="col-2">
                                <Dropdown className="bg-transparent border-0">
                                  <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item href="/auth/login/membershipmanagement/viewmemberdetails">
                                      View
                                    </Dropdown.Item>
                                    <Dropdown.Item>Review</Dropdown.Item>
                                    <Dropdown.Item>Rejected</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        <Card className="shadow">
                          <CardBody>
                            <Row className="g-2 form">
                              <Col className="col-10">
                                <Row className="lh-1 form">
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-1">
                                        <Input type="checkbox" />
                                      </Col>
                                      <Col className="col-7">
                                        <FormLabel>Saba Anjum karim</FormLabel>
                                      </Col>
                                      <Col className="col-3 text-success text-end">
                                        Active
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-1">&nbsp;</Col>
                                      <Col className="col-4">
                                        <sub>9876 532 412</sub>
                                      </Col>
                                      <Col className="col-4 pe-0">
                                        <sub>Araria,Bihar</sub>
                                      </Col>
                                      <Col className="col-3 pe-0">
                                        <sub>Technology</sub>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                              <Col className="col-2">
                                <Dropdown className="bg-transparent border-0">
                                  <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                </Dropdown>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        <Card className="shadow">
                          <CardBody>
                            <Row className="g-2 form">
                              <Col className="col-10">
                                <Row className="lh-1 form">
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-1">
                                        <Input type="checkbox" />
                                      </Col>
                                      <Col className="col-7">
                                        <FormLabel>Saba Anjum karim</FormLabel>
                                      </Col>
                                      <Col className="col-3 text-success text-end">
                                        Active
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-1">&nbsp;</Col>
                                      <Col className="col-4">
                                        <sub>9876 532 412</sub>
                                      </Col>
                                      <Col className="col-4 pe-0">
                                        <sub>Araria,Bihar</sub>
                                      </Col>
                                      <Col className="col-3 pe-0">
                                        <sub>Technology</sub>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                              <Col className="col-2">
                                <Dropdown className="bg-transparent border-0">
                                  <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                </Dropdown>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        <Card className="shadow">
                          <CardBody>
                            <Row className="g-2 form">
                              <Col className="col-10">
                                <Row className="lh-1 form">
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-1">
                                        <Input type="checkbox" />
                                      </Col>
                                      <Col className="col-7">
                                        <FormLabel>Saba Anjum karim</FormLabel>
                                      </Col>
                                      <Col className="col-3 text-success text-end">
                                        Active
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-1">&nbsp;</Col>
                                      <Col className="col-4">
                                        <sub>9876 532 412</sub>
                                      </Col>
                                      <Col className="col-4 pe-0">
                                        <sub>Araria,Bihar</sub>
                                      </Col>
                                      <Col className="col-3 pe-0">
                                        <sub>Technology</sub>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                              <Col className="col-2">
                                <Dropdown className="bg-transparent border-0">
                                  <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                </Dropdown>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        <Card className="shadow">
                          <CardBody>
                            <Row className="g-2 form">
                              <Col className="col-10">
                                <Row className="lh-1 form">
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-1">
                                        <Input type="checkbox" />
                                      </Col>
                                      <Col className="col-7">
                                        <FormLabel>Saba Anjum karim</FormLabel>
                                      </Col>
                                      <Col className="col-3 text-success text-end">
                                        Active
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-1">&nbsp;</Col>
                                      <Col className="col-4">
                                        <sub>9876 532 412</sub>
                                      </Col>
                                      <Col className="col-4 pe-0">
                                        <sub>Araria,Bihar</sub>
                                      </Col>
                                      <Col className="col-3 pe-0">
                                        <sub>Technology</sub>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                              <Col className="col-2">
                                <Dropdown className="bg-transparent border-0">
                                  <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                </Dropdown>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        <Card className="shadow">
                          <CardBody>
                            <Row className="g-2 form">
                              <Col className="col-10">
                                <Row className="lh-1 form">
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-1">
                                        <Input type="checkbox" />
                                      </Col>
                                      <Col className="col-7">
                                        <FormLabel>Saba Anjum karim</FormLabel>
                                      </Col>
                                      <Col className="col-3 text-success text-end">
                                        Active
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-1">&nbsp;</Col>
                                      <Col className="col-4">
                                        <sub>9876 532 412</sub>
                                      </Col>
                                      <Col className="col-4 pe-0">
                                        <sub>Araria,Bihar</sub>
                                      </Col>
                                      <Col className="col-3 pe-0">
                                        <sub>Technology</sub>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                              <Col className="col-2">
                                <Dropdown className="bg-transparent border-0">
                                  <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                </Dropdown>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        <Card className="shadow">
                          <CardBody>
                            <Row className="g-2 form">
                              <Col className="col-10">
                                <Row className="lh-1 form">
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-1">
                                        <Input type="checkbox" />
                                      </Col>
                                      <Col className="col-7">
                                        <FormLabel>Saba Anjum karim</FormLabel>
                                      </Col>
                                      <Col className="col-3 text-success text-end">
                                        Active
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-1">&nbsp;</Col>
                                      <Col className="col-4">
                                        <sub>9876 532 412</sub>
                                      </Col>
                                      <Col className="col-4 pe-0">
                                        <sub>Araria,Bihar</sub>
                                      </Col>
                                      <Col className="col-3 pe-0">
                                        <sub>Technology</sub>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                              <Col className="col-2">
                                <Dropdown className="bg-transparent border-0">
                                  <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                </Dropdown>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Row>
                    </Col>
                  </TabContentMobile>
                  <TabContentMobile id="tab2" activeTab={isActiveTabMobile}>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Art</Accordion.Header>
                        <Accordion.Body className="px-3">
                          <Col className="col-12">
                            <Row className="g-2 form">
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                            </Row>
                          </Col>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Wing Name</Accordion.Header>
                        <Accordion.Body className="px-3">
                          <Col className="col-12">
                            <Row className="g-2 form">
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                            </Row>
                          </Col>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Wing Name</Accordion.Header>
                        <Accordion.Body className="px-3">
                          <Col className="col-12">
                            <Row className="g-2 form">
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                            </Row>
                          </Col>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Wing Name</Accordion.Header>
                        <Accordion.Body className="px-3">
                          <Col className="col-12">
                            <Row className="g-2 form">
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                            </Row>
                          </Col>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>Wing Name</Accordion.Header>
                        <Accordion.Body className="px-3">
                          <Col className="col-12">
                            <Row className="g-2 form">
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                            </Row>
                          </Col>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>Wing Name</Accordion.Header>
                        <Accordion.Body className="px-3">
                          <Col className="col-12">
                            <Row className="g-2 form">
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                            </Row>
                          </Col>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header>Wing Name</Accordion.Header>
                        <Accordion.Body className="px-3">
                          <Col className="col-12">
                            <Row className="g-2 form">
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <Card className="shadow">
                                <CardBody>
                                  <Row className="g-2 form">
                                    <Col className="col-10">
                                      <Row className="lh-1 form">
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">
                                              <Input type="checkbox" />
                                            </Col>
                                            <Col className="col-7">
                                              <FormLabel>
                                                Saba Anjum karim
                                              </FormLabel>
                                            </Col>
                                            <Col className="col-3 text-success text-end">
                                              Active
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col className="col-12">
                                          <Row className="g-2 form">
                                            <Col className="col-1">&nbsp;</Col>
                                            <Col className="col-4">
                                              <sub>9876 532 412</sub>
                                            </Col>
                                            <Col className="col-4 pe-0">
                                              <sub>Araria,Bihar</sub>
                                            </Col>
                                            <Col className="col-3 pe-0">
                                              <sub>Technology</sub>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col className="col-2">
                                      <Dropdown className="bg-transparent border-0">
                                        <Dropdown.Toggle className="bg-transparent border-0 text-black"></Dropdown.Toggle>
                                      </Dropdown>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                            </Row>
                          </Col>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </TabContentMobile>
                  <TabContentMobile id="tab3" activeTab={isActiveTabMobile}>
                    hi three
                  </TabContentMobile>
                </Row>
              </Col>
              {/* <Col className="col-12">
                <Col id="firstchild" className="bg-warning d-inline ">
                  <h2>JavaScript code</h2>
                </Col>
              </Col>
              <Col className="col-12">
                <Button id="btntog">Click me!!!</Button>
              </Col> */}
            </Row>
          </Col>
        </Col>
      </Mobile>
    </>
  );
};

export default MemberManagements;
