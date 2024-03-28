import React from "react";
import {
  Button,
  Card,
  Col,
  Dropdown,
  FormLabel,
  Row,
  Table,
} from "react-bootstrap";
import { CardBody, CardFooter, Form, Input } from "reactstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Trashicon from "../../../assets/img/trash-can-regular.svg";

import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

//Table genrate/pop out off add user button
const AddUserTable = () => {
  return (
    <>
      <Col sm="12">
        <Table striped hover className="col-sm-12">
          <thead>
            <th>&nbsp;</th>
            <th>Name Surname</th>
            <th>Mobile number</th>
            <th>M21 wing</th>
            <th>District Name</th>
            <th>State Name</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td>Name Surename</td>
              <td>9876 635 412</td>
              <td>Technology</td>
              <td>Drug</td>
              <td>Chhattisgarh</td>
            </tr>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td>Name Surename</td>
              <td>9876 635 412</td>
              <td>Technology</td>
              <td>Drug</td>
              <td>Chhattisgarh</td>
            </tr>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td>Name Surename</td>
              <td>9876 635 412</td>
              <td>Technology</td>
              <td>Drug</td>
              <td>Chhattisgarh</td>
            </tr>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td>Name Surename</td>
              <td>9876 635 412</td>
              <td>Technology</td>
              <td>Drug</td>
              <td>Chhattisgarh</td>
            </tr>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td>Name Surename</td>
              <td>9876 635 412</td>
              <td>Technology</td>
              <td>Drug</td>
              <td>Chhattisgarh</td>
            </tr>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td>Name Surename</td>
              <td>9876 635 412</td>
              <td>Technology</td>
              <td>Drug</td>
              <td>Chhattisgarh</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </>
  );
};

//Table genrate/pop out off table select/dropdown to assign
const AssignToTable = () => {
  return (
    <>
      <Col sm="12">
        <Table striped hover className="col-sm-12">
          <thead>
            <th>&nbsp;</th>
            <th>Name Surname</th>
            <th>Mobile number</th>
            <th>M21 wing</th>
            <th>District Name</th>
            <th>State Name</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td>Name Surename</td>
              <td>9876 635 412</td>
              <td>Technology</td>
              <td>Drug</td>
              <td>Chhattisgarh</td>
            </tr>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td>Name Surename</td>
              <td>9876 635 412</td>
              <td>Technology</td>
              <td>Drug</td>
              <td>Chhattisgarh</td>
            </tr>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td>Name Surename</td>
              <td>9876 635 412</td>
              <td>Technology</td>
              <td>Drug</td>
              <td>Chhattisgarh</td>
            </tr>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td>Name Surename</td>
              <td>9876 635 412</td>
              <td>Technology</td>
              <td>Drug</td>
              <td>Chhattisgarh</td>
            </tr>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td>Name Surename</td>
              <td>9876 635 412</td>
              <td>Technology</td>
              <td>Drug</td>
              <td>Chhattisgarh</td>
            </tr>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td>Name Surename</td>
              <td>9876 635 412</td>
              <td>Technology</td>
              <td>Drug</td>
              <td>Chhattisgarh</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>

              <td>
                <Button className="bg-white text-secondary border-secondary">
                  cancel
                </Button>
              </td>
              <td>
                <Button>Select</Button>
              </td>
            </tr>
          </tfoot>
        </Table>
      </Col>
    </>
  );
};

//Main function of this page
const AssignMFriend = () => {
  const [isAssigntoDropdown, setIsAssignToDropdown] = useState(1);

  const AssignToSelect = () => {
    setIsAssignToDropdown((current) => !current);
  };

  //Table genrate by selected entry of add user table
  const MemberAddedListTable = () => {
    return (
      <>
        <Table striped hover>
          <thead>
            <tr>
              <th>
                <Input type="checkbox" />
              </th>
              <th>
                <b>Member Name</b>
              </th>
              <th>
                <b>Phone No.</b>
              </th>

              <th>
                <b>District</b>
              </th>
              <th>
                <b>State</b>
              </th>
              <th>
                <b>M21 Wing</b>
              </th>
              <th>
                <b>
                  Active/ <br />
                  Inactive
                </b>
              </th>
              <th>
                <b>Assigned to</b>
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
              <td className="text-primary">
                <b>Saba Anjum karim</b>
              </td>
              <td>9876 523 412</td>
              <td>District Name</td>
              <td>State Name</td>
              <td>Technology</td>
              <td>
                <Button className="bg-success border-success">Approve</Button>
              </td>
              <td>
                <Input type="select" required onClick={AssignToSelect}>
                  <option selected disabled value="">
                    Select Name
                  </option>
                </Input>
              </td>
              <td>
                <Col sm="2" role="button">
                  <img src={Trashicon} />
                </Col>
              </td>
            </tr>
            {!isAssigntoDropdown && (
              <tr className="position-absolute col-sm-12">
                <td className="col-sm-4">&nbsp;</td>
                <td>
                  <Col sm="12">
                    <Row className="g-2 form">
                      <Col sm="12">
                        <>
                          <Card>
                            <CardBody>
                              <Col sm="12" className="">
                                <Input type="text" />
                              </Col>
                              <Card>
                                <AssignToTable />
                              </Card>
                            </CardBody>
                          </Card>
                        </>
                      </Col>
                    </Row>
                  </Col>
                </td>
              </tr>
            )}
            <tr className=" ">
              <td>
                <Input type="checkbox" />
              </td>
              <td className="text-primary">
                <b>Saba Anjum karim</b>
              </td>
              <td>9876 523 412</td>

              <td>District Name</td>
              <td>State Name</td>
              <td>Technology</td>
              <td>
                <Button className="bg-secondary">Approve</Button>
              </td>
              <td>
                <Input type="select" required onClick={AssignToSelect}>
                  <option selected disabled value="">
                    Select Name
                  </option>
                </Input>
              </td>
              <td>
                <Col sm="2" role="button">
                  <img src={Trashicon} />
                </Col>
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

  const MemberAddedListCol = () => {
    return (
      <>
        <Col sm="12">
          <Row className="g-2 form">
            <Col sm="1">
              <Input type="checkbox" />
            </Col>
            <Col sm="2">
              <FormLabel>Member Name</FormLabel>
            </Col>
            <Col sm="2">
              <FormLabel>Phone no.</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>District</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>State</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>M21 Wing</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>
                Active/
                <br />
                Inactive
              </FormLabel>
            </Col>
            <Col sm="2">
              <FormLabel>Assigned to</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>Action</FormLabel>
            </Col>
          </Row>
        </Col>
        <hr />
        <Col sm="12">
          <Row className="g-2 form">
            <Col sm="1">
              <Input type="checkbox" />
            </Col>
            <Col sm="2">
              <FormLabel className="text-primary">Saba Anjum Karim</FormLabel>
            </Col>
            <Col sm="2">
              <FormLabel>9875 412 653</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>District name</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>State name</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>Arts</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>New joinee</FormLabel>
            </Col>
            <Col sm="2">
              <FormLabel>
                <Input type="select" onClick={AssignToSelect}>
                  <option selected disabled value="">
                    Choose your option
                  </option>
                </Input>
              </FormLabel>
            </Col>
            <Col sm="1"></Col>
          </Row>
        </Col>

        <Col sm="12" className=" position-relative bg-white">
          {!isAssigntoDropdown && <AssignToTable />}
        </Col>

        <Col sm="12" className="">
          <Row className="g-2 form">
            <Col sm="1">
              <Input type="checkbox" />
            </Col>
            <Col sm="2">
              <FormLabel className="text-primary">Saba Anjum Karim</FormLabel>
            </Col>
            <Col sm="2">
              <FormLabel>9875 412 653</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>District name</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>State name</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>Arts</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>New joinee</FormLabel>
            </Col>
            <Col sm="2">
              <FormLabel>
                <Input type="select">
                  <option selected disabled value="">
                    Choose your option
                  </option>
                </Input>
              </FormLabel>
            </Col>
            <Col sm="1"></Col>
          </Row>
        </Col>
        <Col sm="12" className="">
          <Row className="g-2 form">
            <Col sm="1">
              <Input type="checkbox" />
            </Col>
            <Col sm="2">
              <FormLabel className="text-primary">Saba Anjum Karim</FormLabel>
            </Col>
            <Col sm="2">
              <FormLabel>9875 412 653</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>District name</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>State name</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>Arts</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>New joinee</FormLabel>
            </Col>
            <Col sm="2">
              <FormLabel>
                <Input type="select">
                  <option selected disabled value="">
                    Choose your option
                  </option>
                </Input>
              </FormLabel>
            </Col>
            <Col sm="1"></Col>
          </Row>
        </Col>
        <Col sm="12" className="">
          <Row className="g-2 form">
            <Col sm="1">
              <Input type="checkbox" />
            </Col>
            <Col sm="2">
              <FormLabel className="text-primary">Saba Anjum Karim</FormLabel>
            </Col>
            <Col sm="2">
              <FormLabel>9875 412 653</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>District name</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>State name</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>Arts</FormLabel>
            </Col>
            <Col sm="1">
              <FormLabel>New joinee</FormLabel>
            </Col>
            <Col sm="2">
              <FormLabel>
                <Input type="select">
                  <option selected disabled value="">
                    Choose your option
                  </option>
                </Input>
              </FormLabel>
            </Col>
            <Col sm="1"></Col>
          </Row>
        </Col>
      </>
    );
  };

  const [isSelectDropdown, setIsSelectDropdown] = useState(true);

  const MultiSelect = () => {
    setIsSelectDropdown((current) => !current);
  };
  return (
    <>
      <Desktop>
        <Col className="container-fluid">
          <Card>
            <CardBody>
              <Col sm="12" className="border-bottom">
                <h5>Add user</h5>
              </Col>
              <Col sm="12">
                <Row className="g-2 form">
                  <Col sm="12">
                    <FormLabel>
                      <b>Select M21 user</b>
                    </FormLabel>
                  </Col>
                  <Col sm="12">
                    <Row className="g-2 form">
                      <Col sm="8">
                        <Input onClick={MultiSelect} />
                        <Col sm="12">
                          <FormLabel>
                            How to select member?{" "}
                            <a className="text-primary">Learn More</a>
                          </FormLabel>
                        </Col>
                      </Col>
                      <Col sm="4">
                        <Button onClick={MultiSelect}>Add user a</Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="8">{!isSelectDropdown && <AddUserTable />}</Col>
                  <Col sm="12">
                    <Row className="g-2 form">
                      <Col sm="12" className="bg-light">
                        2 Member added
                      </Col>
                      <Col sm="12">
                        <MemberAddedListTable />
                        {/* <MemberAddedListCol /> */}
                      </Col>

                      {/* <Col sm="12">
                        <Row className="g-2 form">
                          <Col sm="1">&nbsp;</Col>
                          <Col sm="8">
                            {!isAssigntoDropdown && (
                              <>
                                <Card>
                                  <CardBody>
                                    <Col sm="12" className="">
                                      <Input type="text" />
                                    </Col>
                                    <Card>
                                      <AssignToTable />
                                    </Card>
                                  </CardBody>
                                </Card>
                              </>
                            )}
                          </Col>
                        </Row>
                      </Col> */}
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

export default AssignMFriend;
