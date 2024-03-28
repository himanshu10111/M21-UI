import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  Dropdown,
  OverlayTrigger,
  Popover,
  FormLabel,
  Pagination,
} from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {
  Card,
  CardBody,
  Col,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

import NominationTab from "./NewNominationTab/NominationTabIndex.js";
import SearchIcon from "../../assets/img/Search.png";
import MemberImg from "../../assets/img/latter.png";

import SettingIcon from "../../assets/img/Settings2.png";
import { useMediaQuery } from "react-responsive";
import PlaceholderLoading from "../../component/placeholder/placeholder.js";
import { NumberOfRow } from "../../component/numberOfRowTable/NumberOfRow.js";
import { data } from "browserslist";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const Nomination = (args) => {
  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [nominees, setNominee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = NumberOfRow;

  const storedUsername = localStorage.getItem("username");
  useEffect(() => {
    fetch(`${BaseURL}/api/profile/user/${storedUsername}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("m21MeetingId", data[0].id);
        localStorage.setItem("ProfileId", data[0].id);
      });
  }, []);

  const role = String(localStorage.getItem("role"));
  const m21MemberId = localStorage.getItem("m21MeetingId");

  useEffect(() => {
    if (role === 3) {
      fetch(`${BaseURL}/api/nomineeSearchAll`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setNominee(data);
          console.log("All nomanation displayed",data);
          setLoading(false);
        });
    } else {
      fetch(`${BaseURL}/api/nominee/${m21MemberId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setNominee(data);
          setLoading(false);
        });
    }
  }, [role, m21MemberId,loading]);

  const filterNominees = () => {
    return nominees.filter((nominee) => {
      return (
        search === "" || // No search query, return all items
        nominee.firstName.toLowerCase().includes(search.toLowerCase()) ||
        nominee.mobileNumber.includes(search) ||
        nominee.m21Wing.toLowerCase().includes(search.toLowerCase()) ||
        nominee.district.toLowerCase().includes(search.toLowerCase()) ||
        nominee.state.toLowerCase().includes(search.toLowerCase())
      );
    });
  };

  const filteredNominees = filterNominees();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = filteredNominees.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const TableHeader = (
    <thead>
      <tr>
        <th>
          <Input type="checkbox" />
        </th>
        <th>Member Name</th>
        <th>Phone Number</th>
        <th>District</th>
        <th>State</th>
        <th>M21 Wing</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
  );

  const TableNomination = () => {
    const navigate = useNavigate();

    const handleNominationClick = (id) => {
      navigate(`/auth/login/nomination/nominationdetail/${id}`);
    };

    const handleNomineeClick = (nominee, event) => {
      event.preventDefault();
      event.stopPropagation();
      event.setSelectedNominee(nominee);
    };

    const handleEditNominationClick = (id) => {
      navigate(`/auth/login/reviewnomination/editstate/${id}`);
    };

    const handleDeleteNomination = (id) => {
      fetch(`${BaseURL}/api/nominee/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => {
          if (res.ok) {
            setNominee((prevNominees) =>
              prevNominees.filter((nominee) => nominee.id !== id)
            );
            return res.text();
          } else {
            throw new Error(`Request failed with status: ${res.status}`);
          }
        })
        .then((data) => {
          console.log(data);
        });

      console.log("------Nominee Deleted------");
    };

    if (itemsToDisplay.length === 0) {
      // If there are no nominations to display, show "No nominations added yet"
      return (
        <Table striped>
          {TableHeader}
          <tbody>
            <tr>
              <td colSpan="12">No nominations added yet</td>
            </tr>
          </tbody>
        </Table>
      );
    }

    return (
      <>
        <Table striped>
          {TableHeader}
          <tbody>
            {itemsToDisplay.map((nominee) => (
              <tr key={nominee.nomineeId}>
                <td>
                  <Input type="checkbox" />
                </td>
                <td>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={EntryDetailscard(nominee)}
                  >
                    <a
                      className="text-primary"
                      href="#"
                      onClick={(e) => handleNomineeClick(nominee, e)}
                    >
                      {nominee.firstName}&nbsp;{nominee.lastName}
                    </a>
                  </OverlayTrigger>
                </td>
                <td> {nominee.mobileNumber}</td>
                <td> {nominee.district}</td>
                <td> {nominee.state}</td>
                <td> {nominee.m21Wing}</td>
                <td
                  className={
                    nominee.status === 1
                      ? "text-success"
                      : nominee.status === 0
                      ? "text-danger"
                      : "text-black"
                  }
                >
                  {nominee.status === 1
                    ? "Approve"
                    : nominee.status === 0
                    ? "Reject"
                    : "Awaiting"}
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
                      <Dropdown.Item
                        onClick={() => handleNominationClick(nominee.nomineeId)}
                      >
                        View
                      </Dropdown.Item>
                      {nominee.status === 1 ? (
                        <>
                          <Dropdown.Item disabled>Edit</Dropdown.Item>
                          <Dropdown.Item
                            onClick={() =>
                              handleDeleteNomination(nominee.nomineeId)
                            }
                          >
                            Remove/Withdraw
                          </Dropdown.Item>
                          <Dropdown.Item disabled>Send Reminder</Dropdown.Item>
                        </>
                      ) : nominee.status === 0 ? (
                        <>
                          <Dropdown.Item
                            onClick={() =>
                              handleEditNominationClick(nominee.nomineeId)
                            }
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() =>
                              handleDeleteNomination(nominee.nomineeId)
                            }
                          >
                            Remove/Withdraw
                          </Dropdown.Item>
                          <Dropdown.Item disabled>Send Reminder</Dropdown.Item>
                        </>
                      ) : (
                        <>
                          <Dropdown.Item
                            onClick={() =>
                              handleEditNominationClick(nominee.nomineeId)
                            }
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() =>
                              handleDeleteNomination(nominee.nomineeId)
                            }
                          >
                            Remove/Withdraw
                          </Dropdown.Item>
                          <Dropdown.Item>Send Reminder</Dropdown.Item>
                        </>
                      )}
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
      </>
    );
  };

  const EntryDetailscard = (nominee) => {
    if (!nominee) {
      return null; // Return null when no nominee is selected
    }
    return (
      <Popover id="MyNominationPopover" className="popover-custom-size">
        <Popover.Body className="col-sm-12">
          <Row className="g-2 form">
            <Col sm="12">
              <FormLabel>Member Details</FormLabel>
            </Col>
            <Col sm="12">
              <Row className="g-2 form">
                <Col sm="4" className="">
                  <img src={MemberImg} className="w-100" />
                </Col>
                <Col sm="8">
                  <Row className="g-2 form">
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="4">
                          <FormLabel>Name</FormLabel>
                        </Col>
                        <Col sm="8">
                          {nominee.firstName} {nominee.lastName}
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="4">
                          <FormLabel>Phone</FormLabel>
                        </Col>
                        <Col sm="8">
                          <FormLabel>{nominee.mobileNumber}</FormLabel>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="4">
                          <FormLabel>Email</FormLabel>
                        </Col>
                        <Col sm="8">
                          <FormLabel>{nominee.email}</FormLabel>
                        </Col>
                      </Row>
                    </Col>
                    {/* <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="4">
                          <FormLabel>Occupation</FormLabel>
                        </Col>
                        <Col sm="8">
                          <FormLabel>Soial worker</FormLabel>
                        </Col>
                      </Row>
                    </Col> */}
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="4">
                          <FormLabel>Address</FormLabel>
                        </Col>
                        <Col sm="8">
                          <FormLabel>
                            {nominee.house},{nominee.street},{nominee.city}
                          </FormLabel>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="4">
                          <FormLabel>Tehsil</FormLabel>
                        </Col>
                        <Col sm="8">
                          <FormLabel>{nominee.taluka}</FormLabel>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="4">
                          <FormLabel>District</FormLabel>
                        </Col>
                        <Col sm="8">
                          <FormLabel>{nominee.district}</FormLabel>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12" className="form-group">
                      <Row className="g-2 form">
                        <Col sm="4">
                          <FormLabel>History</FormLabel>
                        </Col>
                        <Col sm="8">
                          <FormLabel>
                            {nominee.status === 1
                              ? "Approve"
                              : nominee.status === 0
                              ? "Reject"
                              : "Awaiting"}
                          </FormLabel>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Popover.Body>
      </Popover>
    );
  };
  const [model, setModel] = useState(false);

  const toggle = () => setModel(!model);
  return (
    <>
      <Desktop>
        <div>
          <Col lg="12" className="form-control bg-transparent border-0">
            <Card className="bg-transparent border-0">
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab
                  title="My Nomination"
                  eventKey="home"
                  className="bg-transparent"
                >
                  <Col className="section">
                    <Col className="container-fluid">
                      <Col className="form-control bg-transparent border-0">
                        <Form>
                          <Col className="form-contend">
                            <Col sm="12">
                              <Row>
                                <Col sm="5">
                                  <Button
                                    onClick={toggle}
                                    className="border-0 M21-btn rounded-5"
                                  >
                                    New Nomination
                                  </Button>
                                </Col>
                                <Col sm="5">
                                  <input
                                    type="text"
                                    placeholder="Search member by name, phone, location, M21 Wing"
                                    className="border rounded-5 form-control"
                                    style={{
                                      paddingRight: "30px", // Add some right padding to make space for the icon
                                      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L19.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`, // Add the search icon as background image
                                      backgroundPosition: "right 5px center", // Adjust the position of the icon
                                      backgroundRepeat: "no-repeat",
                                      backgroundSize: "24px 24px", // Adjust the size of the icon
                                    }}
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                  ></input>
                                </Col>
                                <Col sm="2">
                                  <img src={SettingIcon} role="button" />
                                </Col>
                              </Row>
                            </Col>
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
                                    <h3>New Nomination</h3>
                                  </label>
                                </ModalHeader>
                                <Col lg="12">
                                  <ModalBody className="p-0">
                                    <NominationTab closeTab={toggle} />
                                  </ModalBody>
                                </Col>
                              </Modal>
                            </Col>

                            <Col sm="12" className="p-2">
                              <Card className="border-0 rounded-0">
                                <CardBody className="border-0 rounded-0">
                                  {loading ? (
                                    <PlaceholderLoading />
                                  ) : (
                                    <TableNomination />
                                  )}
                                </CardBody>
                              </Card>
                            </Col>
                          </Col>
                        </Form>
                      </Col>
                    </Col>
                  </Col>
                </Tab>
                {/* <Tab
                  eventKey="profile"
                  title="Tab-1"
                  className="bg-transparent"
                >
                  hello
                </Tab> */}
              </Tabs>
            </Card>
          </Col>
        </div>
      </Desktop>
      <Mobile>
        <Col className="section">
          <Col className="container-fluid">
            <Col className="ps-1 pe-1 form-control form-group border-0">
              <Row className="g-2 form">
                <Col className="col-12">
                  <Row>
                    <Col className="col-6">My Nomination</Col>
                    <Col className="col-6">
                      <Button onClick={toggle}> New Nomination</Button>
                    </Col>
                  </Row>
                  <hr />
                </Col>
                <Col className="col-12">
                  <Input type="text" />
                </Col>

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
                        <h3>New Nomination</h3>
                      </label>
                    </ModalHeader>
                    <Col lg="12">
                      <ModalBody className="p-0">
                        <NominationTab />
                      </ModalBody>
                    </Col>
                  </Modal>
                </Col>
                <Col className="col-12">
                  <Row className="g-2 form">
                    <Card className="shadow">
                      <CardBody className="p-0">
                        <Col className="col-12 ps-2 pe-1 form-group form-control border-0">
                          <Row className="g-2 form">
                            <Col className="col-8">
                              <Row className="g-2 form">
                                <Col className=" form-check">
                                  <Input type="checkbox" />
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-12">
                                        Saba Anjum Karim
                                      </Col>
                                      <Col className="col-6">9876 543 210</Col>
                                      <Col className="col-3"> Araria</Col>
                                      <Col className="col-3">Bihar</Col>
                                    </Row>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="col-4">
                              <Row>
                                <Col className="col-8 pe-0">
                                  <Col className="col-12 text-success">
                                    Approved
                                  </Col>
                                  <Col className="col-12">Technology</Col>
                                </Col>
                                <Col className="col-2">
                                  <Dropdown>
                                    <Dropdown.Toggle
                                      variant=""
                                      id="dropdown-basic"
                                    ></Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      <Dropdown.Item href="/auth/login/nomination/nominationdetail">
                                        View/Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        Remove/Withdarw
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        Send Reminder
                                      </Dropdown.Item>
                                      <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </CardBody>
                    </Card>
                    <Card className="shadow">
                      <CardBody className="p-0">
                        <Col className="col-12 ps-2 pe-1 form-group form-control border-0">
                          <Row className="g-2 form">
                            <Col className="col-8">
                              <Row className="g-2 form">
                                <Col className=" form-check">
                                  <Input type="checkbox" />
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-12">
                                        Saba Anjum Karim
                                      </Col>
                                      <Col className="col-6">9876 543 210</Col>
                                      <Col className="col-3"> Araria</Col>
                                      <Col className="col-3">Bihar</Col>
                                    </Row>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="col-4">
                              <Row>
                                <Col className="col-8 pe-0">
                                  <Col className="col-12 text-danger">
                                    Rejected
                                  </Col>
                                  <Col className="col-12">Technology</Col>
                                </Col>
                                <Col className="col-2">
                                  <Dropdown>
                                    <Dropdown.Toggle
                                      variant=""
                                      id="dropdown-basic"
                                    ></Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      <Dropdown.Item href="/auth/login/nomination/nominationdetail">
                                        View/Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        Remove/Withdarw
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        Send Reminder
                                      </Dropdown.Item>
                                      <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </CardBody>
                    </Card>
                    <Card className="shadow">
                      <CardBody className="p-0">
                        <Col className="col-12 ps-2 pe-1 form-group form-control border-0">
                          <Row className="g-2 form">
                            <Col className="col-8">
                              <Row className="g-2 form">
                                <Col className=" form-check">
                                  <Input type="checkbox" />
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-12">
                                        Saba Anjum Karim
                                      </Col>
                                      <Col className="col-6">9876 543 210</Col>
                                      <Col className="col-3"> Araria</Col>
                                      <Col className="col-3">Bihar</Col>
                                    </Row>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="col-4">
                              <Row>
                                <Col className="col-8 pe-0">
                                  <Col className="col-12">Approved</Col>
                                  <Col className="col-12">Technology</Col>
                                </Col>
                                <Col className="col-2">
                                  <Dropdown>
                                    <Dropdown.Toggle
                                      variant=""
                                      id="dropdown-basic"
                                    ></Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      <Dropdown.Item>View/Edit</Dropdown.Item>
                                      <Dropdown.Item>
                                        Remove/Withdarw
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        Send Reminder
                                      </Dropdown.Item>
                                      <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </CardBody>
                    </Card>
                    <Card className="shadow">
                      <CardBody className="p-0">
                        <Col className="col-12 ps-2 pe-1 form-group form-control border-0">
                          <Row className="g-2 form">
                            <Col className="col-8">
                              <Row className="g-2 form">
                                <Col className=" form-check">
                                  <Input type="checkbox" />
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-12">
                                        Saba Anjum Karim
                                      </Col>
                                      <Col className="col-6">9876 543 210</Col>
                                      <Col className="col-3"> Araria</Col>
                                      <Col className="col-3">Bihar</Col>
                                    </Row>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="col-4">
                              <Row>
                                <Col className="col-8 pe-0">
                                  <Col className="col-12">Approved</Col>
                                  <Col className="col-12">Technology</Col>
                                </Col>
                                <Col className="col-2">
                                  <Dropdown>
                                    <Dropdown.Toggle
                                      variant=""
                                      id="dropdown-basic"
                                    ></Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      <Dropdown.Item>View/Edit</Dropdown.Item>
                                      <Dropdown.Item>
                                        Remove/Withdarw
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        Send Reminder
                                      </Dropdown.Item>
                                      <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </CardBody>
                    </Card>
                    <Card className="shadow">
                      <CardBody className="p-0">
                        <Col className="col-12 ps-2 pe-1 form-group form-control border-0">
                          <Row className="g-2 form">
                            <Col className="col-8">
                              <Row className="g-2 form">
                                <Col className=" form-check">
                                  <Input type="checkbox" />
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-12">
                                        Saba Anjum Karim
                                      </Col>
                                      <Col className="col-6">9876 543 210</Col>
                                      <Col className="col-3"> Araria</Col>
                                      <Col className="col-3">Bihar</Col>
                                    </Row>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="col-4">
                              <Row>
                                <Col className="col-8 pe-0">
                                  <Col className="col-12">Approved</Col>
                                  <Col className="col-12">Technology</Col>
                                </Col>
                                <Col className="col-2">
                                  <Dropdown>
                                    <Dropdown.Toggle
                                      variant=""
                                      id="dropdown-basic"
                                    ></Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      <Dropdown.Item>View/Edit</Dropdown.Item>
                                      <Dropdown.Item>
                                        Remove/Withdarw
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        Send Reminder
                                      </Dropdown.Item>
                                      <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </CardBody>
                    </Card>
                    <Card className="shadow">
                      <CardBody className="p-0">
                        <Col className="col-12 ps-2 pe-1 form-group form-control border-0">
                          <Row className="g-2 form">
                            <Col className="col-8">
                              <Row className="g-2 form">
                                <Col className=" form-check">
                                  <Input type="checkbox" />
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-12">
                                        Saba Anjum Karim
                                      </Col>
                                      <Col className="col-6">9876 543 210</Col>
                                      <Col className="col-3"> Araria</Col>
                                      <Col className="col-3">Bihar</Col>
                                    </Row>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="col-4">
                              <Row>
                                <Col className="col-8 pe-0">
                                  <Col className="col-12">Approved</Col>
                                  <Col className="col-12">Technology</Col>
                                </Col>
                                <Col className="col-2">
                                  <Dropdown>
                                    <Dropdown.Toggle
                                      variant=""
                                      id="dropdown-basic"
                                    ></Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      <Dropdown.Item>View/Edit</Dropdown.Item>
                                      <Dropdown.Item>
                                        Remove/Withdarw
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        Send Reminder
                                      </Dropdown.Item>
                                      <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </CardBody>
                    </Card>
                    <Card className="shadow">
                      <CardBody className="p-0">
                        <Col className="col-12 ps-2 pe-1 form-group form-control border-0">
                          <Row className="g-2 form">
                            <Col className="col-8">
                              <Row className="g-2 form">
                                <Col className=" form-check">
                                  <Input type="checkbox" />
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-12">
                                        Saba Anjum Karim
                                      </Col>
                                      <Col className="col-6">9876 543 210</Col>
                                      <Col className="col-3"> Araria</Col>
                                      <Col className="col-3">Bihar</Col>
                                    </Row>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="col-4">
                              <Row>
                                <Col className="col-8 pe-0">
                                  <Col className="col-12">Approved</Col>
                                  <Col className="col-12">Technology</Col>
                                </Col>
                                <Col className="col-2">
                                  <Dropdown>
                                    <Dropdown.Toggle
                                      variant=""
                                      id="dropdown-basic"
                                    ></Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      <Dropdown.Item>View/Edit</Dropdown.Item>
                                      <Dropdown.Item>
                                        Remove/Withdarw
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        Send Reminder
                                      </Dropdown.Item>
                                      <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </CardBody>
                    </Card>
                    <Card className="shadow">
                      <CardBody className="p-0">
                        <Col className="col-12 ps-2 pe-1 form-group form-control border-0">
                          <Row className="g-2 form">
                            <Col className="col-8">
                              <Row className="g-2 form">
                                <Col className=" form-check">
                                  <Input type="checkbox" />
                                  <Col className="col-12">
                                    <Row className="g-2 form">
                                      <Col className="col-12">
                                        Saba Anjum Karim
                                      </Col>
                                      <Col className="col-6">9876 543 210</Col>
                                      <Col className="col-3"> Araria</Col>
                                      <Col className="col-3">Bihar</Col>
                                    </Row>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="col-4">
                              <Row>
                                <Col className="col-8 pe-0">
                                  <Col className="col-12">Approved</Col>
                                  <Col className="col-12">Technology</Col>
                                </Col>
                                <Col className="col-2">
                                  <Dropdown>
                                    <Dropdown.Toggle
                                      variant=""
                                      id="dropdown-basic"
                                    ></Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      <Dropdown.Item>View/Edit</Dropdown.Item>
                                      <Dropdown.Item>
                                        Remove/Withdarw
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        Send Reminder
                                      </Dropdown.Item>
                                      <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </CardBody>
                    </Card>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Col>
        </Col>
      </Mobile>
    </>
  );
};

export default Nomination;
