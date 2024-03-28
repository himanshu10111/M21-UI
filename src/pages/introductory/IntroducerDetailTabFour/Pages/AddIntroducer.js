import React, { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Dropdown,
  FormLabel,
  Row,
  Table,
} from "react-bootstrap";
import { CardBody, CardFooter, Input } from "reactstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Trashicon from "../../../../assets/img/trash-can-regular.svg";

import { useMediaQuery } from "react-responsive";
import { Form, Link } from "react-router-dom";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const BaseURL = process.env.REACT_APP_BASE_URL;

const AddUserTable = () => {
  const [rowFormData, setRowFormData] = useState([]);

  useEffect(() => {
    fetch(`${BaseURL}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRowFormData(data);
        console.log("Row form data", data);
      });
  }, []);
  return (
    <>
      <Col sm="12">
        <Table striped hover className="col-sm-12">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Name surname</th>
              <th>Mobile number</th>
              <th>M21 wing</th>
              <th>Language</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <Input type="checkbox" />
              </th>
              <td>Name surname</td>
              <td>9876 321 321</td>
              <td>Technology</td>
              <td>Drug</td>
              <td>Level 1</td>
            </tr>
            <tr>
              <th>
                <Input type="checkbox" />
              </th>
              <td>Name surname</td>
              <td>9876 321 321</td>
              <td>Technology</td>
              <td>Drug</td>
              <td>Level 1</td>
            </tr>
            <tr>
              <th>
                <Input type="checkbox" />
              </th>
              <td>Name surname</td>
              <td>9876 321 321</td>
              <td>Technology</td>
              <td>Drug</td>
              <td>Level 1</td>
            </tr>
            <tr>
              <th>
                <Input type="checkbox" />
              </th>
              <td>Name surname</td>
              <td>9876 321 321</td>
              <td>Technology</td>
              <td>Drug</td>
              <td>Level 1</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </>
  );
};

const AddUserIntroductoryFacilitator = (e) => {
  // e.preventDefault()
  const [isSelectDropdown, setIsSelectDropdown] = useState(true);

  const MultiSelect = () => {
    setIsSelectDropdown((current) => !current);
  };

  const [apiCallId, setApiCallId] = useState(null);

  const CollectTheKeyFromTableFirst = (id) => {
    // const [holdeKeyForApproval, setHoldKeyForApproval]=useState([])
    console.log("Pass the id to funtion", id);
    CollectTheKeyFromTablesecond(id);
  };

  const CollectTheKeyFromTablesecond = (id) => {
    console.log("this function got ID from 1st ", id);

    fetch(`${BaseURL}/api/members/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("ID of raw form data table", data);
        // CollectTheKeyFromTableThird(id)
        setApiCallId(id);
        console.log("Got id hold in varibale", apiCallId);
      });
  };

  const CollectTheKeyFromTableThird = () => {
    console.log("Got id from second", apiCallId);

    if (apiCallId !== null) {
      fetch(`${BaseURL}/api/members/member-approval/status/1/id/${apiCallId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",

          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // setHoldKeyForApproval(data)
          console.log("Key selected from table", apiCallId);
          // CollectTheKeyFromTablesecond(id)
        });
    }
  };

  const IntroductoyAddedListTable = (id) => {
    const [rowFormData, setRowFormData] = useState([]);

    useEffect(() => {
      fetch(`${BaseURL}/api/members/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",

          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setRowFormData(data);
          console.log("Row form data", data);
        });
    }, []);

    return (
      <>
        <Table striped hover>
          <thead>
            <tr>
              <th>
                <Input type="checkbox" />
              </th>
              <th>
                <b>Introducer Name</b>
              </th>
              <th>
                <b>Phone No.</b>
              </th>
              <th>
                <b>E-mail</b>
              </th>
              <th>
                <b>Language</b>
              </th>
              <th>
                <b>Level</b>
              </th>
              <th>
                <b>M21 Wing</b>
              </th>
              <th>
                <b>
                  Active <br />
                  Inactive
                </b>
              </th>
              <th>
                <b>Action</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td>
                <label className="text-primary">Saba Anjum Karim</label>
              </td>
              <td>98765 321 321</td>
              <td>sak@gmail.com</td>
              <td>English</td>
              <td>Level 1</td>
              <td>Technology</td>
              <td>
                <Button variant="success">Active</Button>
              </td>
              <td>
                <label className="col-sm-2">
                  <img src={Trashicon} type="button" width="" />
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td>
                <label className="text-primary">Saba Anjum Karim</label>
              </td>
              <td>98765 321 321</td>
              <td>sak@gmail.com</td>
              <td>English</td>
              <td>Level 1</td>
              <td>Technology</td>
              <td>
                <Button variant="success">Active</Button>
              </td>
              <td>
                <label className="col-sm-2">
                  <img src={Trashicon} type="button" width="" />
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td>
                <label className="text-primary">Saba Anjum Karim</label>
              </td>
              <td>98765 321 321</td>
              <td>sak@gmail.com</td>
              <td>English</td>
              <td>Level 1</td>
              <td>Technology</td>
              <td>
                <Button variant="success">Active</Button>
              </td>
              <td>
                <label className="col-sm-2">
                  <img src={Trashicon} type="button" width="" />
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td>
                <label className="text-primary">Saba Anjum Karim</label>
              </td>
              <td>98765 321 321</td>
              <td>sak@gmail.com</td>
              <td>English</td>
              <td>Level 1</td>
              <td>Technology</td>
              <td>
                <Button variant="success">Active</Button>
              </td>
              <td>
                <label className="col-sm-2">
                  <img src={Trashicon} type="button" width="" />
                </label>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>

              <td>
                <Button>cancel</Button>
              </td>
              <td>
                <Button>Submit</Button>
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tfoot>
        </Table>
      </>
    );
  };

  return (
    <>
      <Desktop>
        <Col className="container-fluid">
          <Card>
            <CardBody>
              <Col sm="12" className="border-bottom">
                <h5>Add Introducer</h5>
              </Col>
              <Col sm="12">
                <Row className="g-2 form">
                  <Col sm="12">
                    <FormLabel>
                      <b>Select Introducer</b>
                    </FormLabel>
                  </Col>
                  <Col sm="12">
                    <Row className="g-2 form">
                      <Col sm="8">
                        <Input
                          placeholder="
Search attendee name, phone, email, location"
                        />
                        <Col sm="12">
                          <FormLabel>
                            How to select member?{" "}
                            <a className="text-primary">Learn More</a>
                          </FormLabel>
                        </Col>
                        <Col sm="12">
                          {!isSelectDropdown && <AddUserTable />}
                        </Col>
                      </Col>
                      <Col sm="4">
                        <Button onClick={MultiSelect}>Add user</Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="12">
                    <Row className="g-2 form">
                      <Col sm="12" className="bg-light">
                        2 Member added
                      </Col>
                      <Col sm="12">
                        <IntroductoyAddedListTable />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </CardBody>
          </Card>
        </Col>
      </Desktop>
      <Mobile>
        <>
          <Col sm="12" className="section">
            <Col className="container-fluid px-1">
              <Col className="col-12 border-bottom">
                <Row className="g-2 form">
                  <Col className="col-8">
                    <b>Add user</b>
                  </Col>
                  <Col className="col-4">
                    <Link to="/auth/login/membershipmanagement">
                      {" "}
                      <Button className="bg-white text-secondary border-secondary">
                        Back
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col className="col-12">
                <Row className="g-2 form">
                  <Col className="col-6 ps-0">Selectd M21 member</Col>
                  <Col className="col-6 p-0">
                    <small>
                      how to select member?
                      <a className="text-primary">Learn more</a>
                    </small>
                  </Col>
                </Row>
              </Col>
              <Col className="col-12">
                <Input placeholder="Search member name, phone, email,location"></Input>
              </Col>
              <Col className="col-12 form-check">
                <Input type="checkbox" />
                <FormLabel>All</FormLabel>
              </Col>
              <Col className="col-12">
                <Row className="g-2 form">
                  <Card>
                    <CardBody>
                      <Row className="g-2 form">
                        <Col className="col-10 border-end">
                          <Row className="g-2 form">
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-2">
                                  <Input type="checkbox" />
                                </Col>
                                <Col className="col-10">
                                  <small>Saba Anjum Karim</small>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-4">
                                  <small>9876 532 412</small>
                                </Col>
                                <Col className="col-4">
                                  <small>Araria Bihar</small>
                                </Col>
                                <Col className="col-4">
                                  <small>Technology</small>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="col-2 text-center">
                          <Dropdown>
                            <Dropdown.Toggle></Dropdown.Toggle>
                          </Dropdown>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="bg-white">
                      <Col className="col-12">
                        <Row className="g-2 form">
                          <Col className="col-6">
                            <FormLabel>Select Mentor</FormLabel>
                            <Col className="col-12">
                              <Input type="select">
                                <option>Choose your option</option>
                              </Input>
                            </Col>
                          </Col>
                          <Col className="col-6">
                            <Row className="g-2">
                              <Col className="col-12 ">&nbsp;</Col>
                              <Col className="col-12">
                                <Button disabled>Assign M-friend</Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardBody>
                      <Row className="g-2 form">
                        <Col className="col-10 border-end">
                          <Row className="g-2 form">
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-2">
                                  <Input type="checkbox" />
                                </Col>
                                <Col className="col-10">
                                  <small>Saba Anjum Karim</small>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-4">
                                  <small>9876 532 412</small>
                                </Col>
                                <Col className="col-4">
                                  <small>Araria Bihar</small>
                                </Col>
                                <Col className="col-4">
                                  <small>Technology</small>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="col-2 text-center">
                          <Dropdown>
                            <Dropdown.Toggle></Dropdown.Toggle>
                          </Dropdown>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="bg-white">
                      <Col className="col-12">
                        <Row className="g-2 form">
                          <Col className="col-6">
                            <FormLabel>Select Mentor</FormLabel>
                            <Col className="col-12">
                              <Input type="select">
                                <option>Choose your option</option>
                              </Input>
                            </Col>
                          </Col>
                          <Col className="col-6">
                            <Row className="g-2">
                              <Col className="col-12 ">&nbsp;</Col>
                              <Col className="col-12">
                                <Button disabled>Assign M-friend</Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardBody>
                      <Row className="g-2 form">
                        <Col className="col-10 border-end">
                          <Row className="g-2 form">
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-2">
                                  <Input type="checkbox" />
                                </Col>
                                <Col className="col-10">
                                  <small>Saba Anjum Karim</small>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-4">
                                  <small>9876 532 412</small>
                                </Col>
                                <Col className="col-4">
                                  <small>Araria Bihar</small>
                                </Col>
                                <Col className="col-4">
                                  <small>Technology</small>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="col-2 text-center">
                          <Dropdown>
                            <Dropdown.Toggle></Dropdown.Toggle>
                          </Dropdown>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="bg-white">
                      <Col className="col-12">
                        <Row className="g-2 form">
                          <Col className="col-6">
                            <FormLabel>Select Mentor</FormLabel>
                            <Col className="col-12">
                              <Input type="select">
                                <option>Choose your option</option>
                              </Input>
                            </Col>
                          </Col>
                          <Col className="col-6">
                            <Row className="g-2">
                              <Col className="col-12 ">&nbsp;</Col>
                              <Col className="col-12">
                                <Button disabled>Assign M-friend</Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardBody>
                      <Row className="g-2 form">
                        <Col className="col-10 border-end">
                          <Row className="g-2 form">
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-2">
                                  <Input type="checkbox" />
                                </Col>
                                <Col className="col-10">
                                  <small>Saba Anjum Karim</small>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="col-12">
                              <Row className="g-2 form">
                                <Col className="col-4">
                                  <small>9876 532 412</small>
                                </Col>
                                <Col className="col-4">
                                  <small>Araria Bihar</small>
                                </Col>
                                <Col className="col-4">
                                  <small>Technology</small>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="col-2 text-center">
                          <Dropdown>
                            <Dropdown.Toggle></Dropdown.Toggle>
                          </Dropdown>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="bg-white">
                      <Col className="col-12">
                        <Row className="g-2 form">
                          <Col className="col-6">
                            <FormLabel>Select Mentor</FormLabel>
                            <Col className="col-12">
                              <Input type="select">
                                <option>Choose your option</option>
                              </Input>
                            </Col>
                          </Col>
                          <Col className="col-6">
                            <Row className="g-2">
                              <Col className="col-12 ">&nbsp;</Col>
                              <Col className="col-12">
                                <Button disabled>Assign M-friend</Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </CardFooter>
                  </Card>
                </Row>
              </Col>
            </Col>
          </Col>
        </>
      </Mobile>
    </>
  );
};

export default AddUserIntroductoryFacilitator;
