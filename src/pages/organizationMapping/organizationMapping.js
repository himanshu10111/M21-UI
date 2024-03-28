import React, { useState, useEffect } from "react";
import {
  Button,
  Dropdown,
  FormLabel,
  Pagination,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardHeader, CardBody, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import PlaceholderLoading from "../../component/placeholder/placeholder";
import { NumberOfRow } from "../../component/numberOfRowTable/NumberOfRow";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const OrgnizationMapping = () => {
  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [registers, setRegister] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BaseURL}/api/auth/getall/register/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRegister(data);
        setLoading(false);
      });
  }, []);

  const OrganizationMappingTable = () => {
    const navigate = useNavigate();
    const handleRegisterClick = (id) => {
      navigate(`/auth/login/orgnizationmapping/viewregistration/${id}`);
    };

    const handleApprove = (id) => {
      const responseBody = {
        userId: id,
        status: 1,
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
          setRegister((prevRegisters) =>
            prevRegisters.map((register) =>
              register.id === id ? { ...register, status: 1 } : register
            )
          );
        })
        .catch((error) => {
          console.error("Error approve record:", error);
        });
    };

    const handleReject = (id) => {
      const responseBody = {
        userId: id,
        status: 0,
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
          setRegister((prevRegisters) =>
            prevRegisters.map((register) =>
              register.id === id ? { ...register, status: 0 } : register
            )
          );
        })
        .catch((error) => {
          console.error("Error rejecting record:", error);
        });
    };

    const handleDelete = (id) => {
      fetch(`${BaseURL}/api/auth/delete/user/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",

          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => {
          if (res.ok) {
            setRegister((prevRegisters) =>
              prevRegisters.filter((register) => register.id !== id)
            );
            return res.text();
          } else {
            throw new Error(`Request failed with status: ${res.status}`);
          }
        })
        .then((data) => {
          console.log(data);
        });
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = NumberOfRow;
    // const filteredMeetings = filterMeetings();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = registers.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    const TableDisplay = () => {
      return (
        <>
          <Table striped hover>
            <thead>
              <tr>
                <th>
                  <Input type="checkbox" />
                </th>
                <th>Member Name w</th>
                <th>Member Id</th>
                <th>Phone No.</th>
                <th>M21 Wing</th>
                <th>District</th>
                <th>State</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {itemsToDisplay.map((register) => (
                <tr key={register.id}>
                  <td>
                    <Input type="checkbox" />
                  </td>
                  <td>
                    {" "}
                    {register.firstName} &nbsp; {register.lastName}
                  </td>
                  <td> {register.id} </td>
                  <td> {register.mobileNumber}</td>
                  <td> {register.m21Wing}</td>
                  <td> {register.district}</td>
                  <td> {register.taluka}</td>
                  <td>
                    {register.userrole === 1
                      ? "User"
                      : register.userrole === 3
                      ? "Admin"
                      : ""}
                  </td>
                  <td
                    className={
                      register.status === 1
                        ? "text-success"
                        : register.status === 0
                        ? "text-danger"
                        : "text-black"
                    }
                  >
                    {register.status === 1
                      ? "Approve"
                      : register.status === 0
                      ? "Reject"
                      : "New"}
                  </td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle className="bg-transparent text-dark border-0">
                        Select
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => handleRegisterClick(register.id)}
                        >
                          View
                        </Dropdown.Item>
                        <Dropdown.Item>Edit</Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleApprove(register.id)}
                        >
                          Approve
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleReject(register.id)}
                        >
                          Reject
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDelete(register.id)}
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
              { length: Math.ceil(registers.length / itemsPerPage) },
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
              disabled={
                currentPage === Math.ceil(registers.length / itemsPerPage)
              }
            />
          </Pagination>
        </>
      );
    };

    return (
      <>
        <Col sm="12">
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
            <Col sm="6" className="text-end">
              <Link to="/auth/login/orgnizationmapping/adduser">
                <Button>Add User</Button>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col sm="12">
          <Row className="g-2 form">
            <Col sm="12">
              <TableDisplay />
            </Col>
          </Row>
        </Col>
      </>
    );
  };

  return (
    <>
      <Desktop>
        <Col className="section">
          <Col sm="12" className="container-fluid p-2">
            <Row className="g-2 form">
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <Col sm="12">
                    <Row className="g-2 form">
                      <Tabs defaultActiveKey="home">
                        <Tab eventKey="home" title="Review organiztion mapping">
                          {loading ? (
                            <PlaceholderLoading />
                          ) : (
                            <OrganizationMappingTable />
                          )}
                        </Tab>
                        {/* <Tab eventKey="tab2" title="tab 1">
                          tab two
                        </Tab>
                        <Tab eventKey="tab3" title="tab 2">
                          tab three
                        </Tab> */}
                      </Tabs>
                    </Row>
                  </Col>
                </CardBody>
              </Card>
            </Row>
          </Col>
        </Col>
      </Desktop>
      <Mobile>
        <>
          <Col className="col-12 form-control">
            <Row className="g-2 form">
              <Col className="col-12">
                <Row className="g-2 form">
                  <Col className="col-8">Organization Mapping</Col>
                  <Col className="col-4">
                    <Link to="/auth/login/orgnizationmapping/adduser">
                      <Button>Add User</Button>
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
                              <Dropdown.Item href="/auth/login/orgnizationmapping/viewregistration">
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

export default OrgnizationMapping;
