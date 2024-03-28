import React, { useEffect, useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Card, Col, Row, Input, CardBody } from "reactstrap";
import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Button, Dropdown, FormLabel } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import PlaceholderLoading from "../../component/placeholder/placeholder";
import Pagination from "react-bootstrap/Pagination";
import { NumberOfRow } from "../../component/numberOfRowTable/NumberOfRow.js";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const ReviewNomination = () => {
  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [nominees, setNominee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = NumberOfRow;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filterNominees = () => {
    return nominees.filter((nominee) => {
      return (
        search === '' || // No search query, return all items
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
        setLoading(false);
        console.log(data);
      });
  }, []);

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

    const navigate = useNavigate();
    const handleNominationClick = (id) => {
      navigate(`/auth/login/reviewnomination/viewnomination/${id}`);
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

    const handleRejectNomination = (nomineeId) => {
      if (!nomineeId) {
        console.error("Invalid nominee ID");
        return;
      }
      // Update the local state immediately
      setNominee((prevNominees) =>
        prevNominees.map((nominee) =>
          nominee.id === nomineeId
            ? { ...nominee, status: 0 } // Update the status to 0 (Reject)
            : nominee
        )
      );

      const responsebody = {
        id: parseInt(nomineeId, 10),
        status: 0, // Reject
      };

      fetch(`${BaseURL}/api/setStatus`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(responsebody),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Request failed with status: ${res.status}`);
          }
          return res.text(); // Change this to res.text() to handle the response body as text
        })
        .then((data) => {
          console.log("Received response", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      console.log("********Nominee Rejected******");
    };

    const handleApproveNomination = (nomineeId) => {
      if (!nomineeId) {
        console.error("Invalid nominee ID");
        return;
      }
      // Update the local state immediately
      setNominee((prevNominees) =>
        prevNominees.map((nominee) =>
          nominee.id === nomineeId
            ? { ...nominee, status: 1 } // Update the status to 0 (Approve)
            : nominee
        )
      );

      const responsebody = {
        id: parseInt(nomineeId, 10),
        status: 1, //Approve
      };

      fetch(`${BaseURL}/api/setStatus`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(responsebody),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Request failed with status: ${res.status}`);
          }
          return res.text(); // Change this to res.text() to handle the response body as text
        })
        .then((data) => {
          console.log("Received response", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      console.log("********Nominee Approved******");
    };

    
  
  return (
    <Col sm="12" className="bg-white">
      <Table striped>
        <thead>
          <tr>
            <th>
              <Input type="checkbox" />
            </th>
            <th>Member Name</th>
            <th>Phone No.</th>
            <th>District</th>
            <th>State</th>
            <th>M21 Wing</th>
            <th>Refered by</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
              itemsToDisplay.map( (nominee) =>(
          <tr key={nominee.id}>
            <td>
              <Input type="checkbox" />
            </td>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <td> { nominee.firstName} &nbsp; {nominee.lastName}</td>
            </OverlayTrigger>
            <td> { nominee.mobileNumber}</td>
            <td> { nominee.district}</td>
            <td> { nominee.state}</td>
            <td> { nominee.m21Wing}</td>
            <td>Self</td>
            <td className={nominee.status===1 ? "text-success" : nominee.status===0 ? "text-danger" : "text-black"}>
                      {nominee.status === 1 ? 'Approve' 
                      : nominee.status === 0 ? 'Reject' 
                      : 'New'}</td>
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
                        onClick={() => handleNominationClick(nominee.id)}
                      >
                        View
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleEditNominationClick(nominee.id)}
                      >
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleApproveNomination(nominee.id)}
                      >
                        Approve
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleRejectNomination(nominee.id)}
                      >
                        Reject
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleDeleteNomination(nominee.id)}
                      >
                        Delete
                      </Dropdown.Item>
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

  return (
    <>
      <Desktop>
        <Col className="section">
          <Col className="form-contorl">
            <Card>
              <Col sm="12">
                <Tabs
                  defaultActiveKey="home"
                  className="mb-3"
                  id="uncontrolled-tab-example"
                >
                  <Tab eventKey="home" title="Review nominations">
                    <Card>
                      <CardBody>
                        <Row className="g-2 form">
                          <Col sm="12">
                            <Row className="g-2 form">
                              <Col sm="12" className="form-group">
                                <Row className="g-2 form">
                                  <Col sm="8">
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
                                    onChange={(e)=> setSearch(e.target.value)}
                                    ></input>
                                  </Col>
                                  <Col sm="4">
                                    <Button>New Nomination</Button>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                          <Col sm="12">
                            {loading ? (
                              <PlaceholderLoading />
                            ) : (
                              <AllTableDisplay />
                            )}
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Tab>
                  {/* <Tab eventKey="tab2" title="tab 2">
                    Reviw nomination
                  </Tab>
                  <Tab eventKey="tab3" title="tab 3">
                    Reviw nomination
                  </Tab> */}
                </Tabs>
              </Col>
            </Card>
          </Col>
        </Col>
      </Desktop>
      <Mobile>
        <>
          <Col className="col-12 form-control">
            <Row className="g-2 form">
              <Col className="col-12">
                <Row className="g-2 form">
                  <Col className="col-6">Review Nonimations</Col>
                  <Col className="col-6">
                    <Link to="">
                      <Button>New Nomination</Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col className="col-12">
                <Input></Input>
              </Col>
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
                                <Col className="col-6">
                                  <FormLabel>Saba Anjum karim</FormLabel>
                                </Col>
                                <Col className="col-4 text-success text-end">
                                  New
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
                              <Dropdown.Item href="/auth/login/reviewnomination/viewnomination">
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
                                <Col className="col-6">
                                  <FormLabel>Saba Anjum karim</FormLabel>
                                </Col>
                                <Col className="col-4 text-danger text-end">
                                  Rejected
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
                                <Col className="col-6">
                                  <FormLabel>Saba Anjum karim</FormLabel>
                                </Col>
                                <Col className="col-4 text-success text-end">
                                  Approved
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
                </Row>
              </Col>
            </Row>
          </Col>
        </>
      </Mobile>
    </>
  );
};

export default ReviewNomination;
