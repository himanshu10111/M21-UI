import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CloseButton,
  Col,
  Dropdown,
  DropdownButton,
  FormLabel,
  OverlayTrigger,
  Pagination,
  Popover,
  Row,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import { CardBody, Input } from "reactstrap";
import SettingImg from "../../assets/img/Settings2.png";

//img section
import DocumentFile from "../../assets/img/doctext.png";
import MemberImg from "../../assets/img/latter.png";
import { Link } from "react-router-dom";
import ImgOfMyFriend from "../../assets/img/u6611.png";
import ChatImgMyFriend from "../../assets/img/u6763.png";
import {
  NumberOfRow,
  endIndex,
  startIndex,
} from "../../component/numberOfRowTable/NumberOfRow";

const MyMFriendTable = () => {
  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [nominees, setNominee] = useState([]);
  const [search, setSearch] = useState("");

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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = NumberOfRow;

  const filteredNominees = filterNominees();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = nominees.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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

  return (
    <>
      <Table striped hover>
        <thead>
          <tr>
            <th>
              <Input type="checkbox" />
            </th>
            <th>Member Name n</th>
            <th>&nbsp;</th>
            <th>Phone No.</th>
            <th>District</th>
            <th>State</th>
            <th>Assigned by</th>
            <th>
              Active/
              <br />
              Inactive
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {itemsToDisplay.map((nominee) => (
            <tr key={nominee.id}>
              <td>
                <Input type="checkbox" />
              </td>
              <td>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={EntryDetailscard}
                >
                  <a className="text-primary">
                    {nominee.firstName} &nbsp; {nominee.lastName}
                  </a>
                </OverlayTrigger>
              </td>
              <td>
                <img src={DocumentFile} />
              </td>
              <td>{nominee.mobileNumber}</td>
              <td> {nominee.district}</td>
              <td> {nominee.state}</td>
              <td></td>
              <td>
                <Button variant="success">Active</Button>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="bg-transparent text-primary border-0"
                  >
                    Select
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>View</Dropdown.Item>
                    <Dropdown.Item>Remove</Dropdown.Item>
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

const EntryDetailscard = (
  <Popover id="MyMFirendPopover" className="popover-custom-size">
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
                    <Col sm="6">
                      <FormLabel>Name</FormLabel>
                    </Col>
                    <Col sm="6">Saba Karim</Col>
                  </Row>
                </Col>
                <Col sm="12" className="form-group">
                  <Row className="g-2 form">
                    <Col sm="6">
                      <FormLabel>Phone</FormLabel>
                    </Col>
                    <Col sm="6">
                      <FormLabel>9876 542 153</FormLabel>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12" className="form-group">
                  <Row className="g-2 form">
                    <Col sm="6">
                      <FormLabel>Email</FormLabel>
                    </Col>
                    <Col sm="6">
                      <FormLabel>sabakarima@gmail.com</FormLabel>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12" className="form-group">
                  <Row className="g-2 form">
                    <Col sm="6">
                      <FormLabel>Occupation</FormLabel>
                    </Col>
                    <Col sm="6">
                      <FormLabel>Soial worker</FormLabel>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12" className="form-group">
                  <Row className="g-2 form">
                    <Col sm="6">
                      <FormLabel>Address</FormLabel>
                    </Col>
                    <Col sm="6">
                      <FormLabel>121/123,Lal chowk,</FormLabel>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12" className="form-group">
                  <Row className="g-2 form">
                    <Col sm="6">
                      <FormLabel>Tehsil</FormLabel>
                    </Col>
                    <Col sm="6">
                      <FormLabel>Dondi Luhara</FormLabel>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12" className="form-group">
                  <Row className="g-2 form">
                    <Col sm="6">
                      <FormLabel>District</FormLabel>
                    </Col>
                    <Col sm="6">
                      <FormLabel>Durg</FormLabel>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12" className="form-group">
                  <Row className="g-2 form">
                    <Col sm="6">
                      <FormLabel>History</FormLabel>
                    </Col>
                    <Col sm="6">
                      <FormLabel>New</FormLabel>
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

const AssignByCard = (
  <Popover className="popover-custom-size">
    <Popover.Body>
      <Col sm="12">
        <Row className="g-2 form">
          <Col sm="12">
            <FormLabel>Assignee Details</FormLabel>
          </Col>
          <Col sm="12">
            <Row className="g-2 form">
              <Col sm="4">
                <img src={MemberImg} className="w-100" />
              </Col>
              <Col sm="8">
                <Row className="g-2 form">
                  <Col sm="12">
                    <Row className="g-2 form">
                      <Col sm="6">
                        <FormLabel>Name</FormLabel>
                      </Col>
                      <Col sm="6">
                        <FormLabel>Ravikumar</FormLabel>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="12">
                    <Row className="g-2 form">
                      <Col sm="6">
                        <FormLabel>M21 ID</FormLabel>
                      </Col>
                      <Col sm="6">
                        <FormLabel>12345</FormLabel>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="12">
                    <Row className="g-2 form">
                      <Col sm="6">
                        <FormLabel>Email</FormLabel>
                      </Col>
                      <Col sm="6">
                        <FormLabel>Sabakarima@gmail.com</FormLabel>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Popover.Body>
  </Popover>
);

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
const AssignMFFiendCard = (
  <Popover className="popover-custom-size">
    <Popover.Header>Member Details</Popover.Header>
    <Popover.Body>
      <Row className="g-2 form">
        <Col sm="12">
          <Row className="g-2 form">
            <Col sm="4">
              <img src={MemberImg} className="w-25" />
            </Col>
            <Col sm="8">
              <Row className="g-2 form">
                <Col sm="12">
                  <Row className="g-2 form">
                    <Col sm="6">
                      <FormLabel>Name</FormLabel>
                    </Col>
                    <Col sm="6">
                      <FormLabel>Ravikumar</FormLabel>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12">
                  <Row className="g-2 form">
                    <Col sm="6">
                      <FormLabel>M21 ID</FormLabel>
                    </Col>
                    <Col sm="6">1234</Col>
                  </Row>
                </Col>
                <Col sm="12">
                  <Row className="g-2 form">
                    <Col sm="6">
                      <FormLabel>Phone</FormLabel>
                    </Col>
                    <Col sm="6">9875 415 632</Col>
                  </Row>
                </Col>
                <Col sm="12">
                  <Row className="g-2 form">
                    <Col sm="6">
                      <FormLabel>Email</FormLabel>
                    </Col>
                    <Col sm="6">sabakarim@gmail.com</Col>
                  </Row>
                </Col>
                <Col sm="12"></Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Popover.Body>
  </Popover>
);

const AssignMFriendDocCard = (
  <Popover className="popover-custom-size">
    <Popover.Header>
      <Col sm="12">
        <Row className="g-2 form">
          <Col sm="10">Feedback Summary</Col>
          <Col sm="2">
            <CloseButton />
          </Col>
        </Row>
      </Col>
    </Popover.Header>
    <Popover.Body>
      Lorem ipsum dolor sit amet, consectur adipiscing elit. Aenean euismod
      bibendum laoreet. Proin gravida dolor amet lacus accumsan et viverra justo
      commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
      magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
      luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien
      nunc eget.
    </Popover.Body>
  </Popover>
);
const AssignMFriendRejectCard = (
  <Popover className="popover-custom-size">
    <Popover.Header>
      <Col sm="12">
        <Row className="g-2 form">
          <Col sm="10">Rejection comment</Col>
          <Col sm="2">
            <CloseButton />
          </Col>
        </Row>
      </Col>
    </Popover.Header>
    <Popover.Body>
      Lorem ipsum dolor sit amet, consectur adipiscing elit. Aenean euismod
      bibendum laoreet. Proin gravida dolor amet lacus accumsan et viverra justo
      commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
      magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
      luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien
      nunc eget.
    </Popover.Body>
  </Popover>
);

const AssignMFriendTable = () => {
  return (
    <>
      <Table striped hover>
        <thead>
          <tr>
            <th>
              <Input type="checkbox" />
            </th>
            <th>Member Name</th>
            <th>Phone No.</th>
            <th>District</th>
            <th>M21 Wing</th>
            <th>
              Active/
              <br />
              Inactive
            </th>
            <th>Assigned to</th>
            <th>&nbsp;</th>
            <th>State</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Input type="checkbox" />
            </td>
            <td>
              <a className="text-primary"> Saba Anjum Karim</a>
            </td>
            <td>9875 642 153</td>
            <td>District name</td>
            <td>Technology</td>
            <td>New joinee</td>

            <td>Ruchi Bagde</td>
            <td>&nbsp;</td>
            <td>Awaiting</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle className="bg-transparent text-black border-0">
                  {" "}
                  Select
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Remove</Dropdown.Item>
                  <Dropdown.Item>Send reminder</Dropdown.Item>
                  <Dropdown.Item>Request feedback</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td>
              <Input type="checkbox" />
            </td>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={EntryDetailscard}
            >
              <td>
                <a className="text-primary">Saba Anjum Karim</a>
              </td>
            </OverlayTrigger>

            <td>9875 624 183</td>
            <td>District name</td>
            <td>Art. Media</td>
            <td>
              <Button variant="success" size="sm">
                Active
              </Button>
            </td>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={AssignMFFiendCard}
            >
              <td>Kishor</td>
            </OverlayTrigger>
            <td>
              <img src={DocumentFile} />
            </td>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={AssignMFriendRejectCard}
            >
              <td>
                <a className="text-danger">Rejected</a>
              </td>
            </OverlayTrigger>

            <td>
              <Dropdown>
                <Dropdown.Toggle className="bg-transparent text-black border-0">
                  {" "}
                  Select
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Remove</Dropdown.Item>
                  <Dropdown.Item>Send reminder</Dropdown.Item>
                  <Dropdown.Item>Request feedback</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td>
              <Input type="checkbox" />
            </td>
            <td>
              <a className="text-primary">Saba Anjum Karim</a>
            </td>
            <td>9875 624 183</td>
            <td>District name</td>
            <td>Art. Media</td>
            <td>
              <Button variant="success" size="sm">
                Active
              </Button>
            </td>
            <td>Kishor</td>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={AssignMFriendDocCard}
            >
              <td>
                <img src={DocumentFile} />
              </td>
            </OverlayTrigger>

            <td>
              <a className="text-success">Accepted</a>
            </td>
            <td>
              <Dropdown>
                <Dropdown.Toggle className="bg-transparent text-black border-0">
                  {" "}
                  Select
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Remove</Dropdown.Item>
                  <Dropdown.Item>Send reminder</Dropdown.Item>
                  <Dropdown.Item>Request feedback</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td>
              <Input type="checkbox" />
            </td>
            <td>
              <a className="text-primary">Saba Anjum Karim</a>
            </td>
            <td>9875 624 183</td>
            <td>District name</td>
            <td>Art. Media</td>
            <td>
              <Button variant="success" size="sm">
                Active
              </Button>
            </td>
            <td>Kishor</td>
            <td>
              <img src={DocumentFile} />
            </td>
            <td>
              <a className="text-success">Accepted</a>
            </td>
            <td>
              <Dropdown>
                <Dropdown.Toggle className="bg-transparent text-black border-0">
                  {" "}
                  Select
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Remove</Dropdown.Item>
                  <Dropdown.Item>Send reminder</Dropdown.Item>
                  <Dropdown.Item>Request feedback</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

const MyMFriend = () => {
  const [isSelectDropdown, setIsSelectDropdown] = useState(true);
  const AssignToSelect = () => {
    setIsSelectDropdown((current) => !current);
  };

  const NewJoineeTable = () => {
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
              <td>
                <a className="text-praimary">Saba Anjum Karim</a>
              </td>
              <td>9876 452 631</td>
              <td>District Name</td>
              <td>State Name</td>
              <td>Arts</td>
              <td>
                <Input type="select" required onClick={AssignToSelect}>
                  <option selected disabled value="">
                    Select Member
                  </option>
                </Input>
              </td>

              <td>
                <Button variant="secondary">Assign</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  };
  useEffect(() => {
    // const MyfirstConst = document
    //   .querySelector("#setting")
    //   .setAttribute("class", "bg-warning");
    // const MySecondConst = document.querySelector("#blankCol");
    // MySecondConst.innerHTML = "i came from js code";
  }, []);

  return (
    <>
      <Col className="section">
        <Col className="container-fluid">
          <Row className="g-2 form">
            <Col sm="12" className="form-group">
              <Card>
                <CardBody>
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="M-Friends Assigned to me">
                      <Card className="border-0">
                        <CardBody>
                          <Row className="g-2 form">
                            <Col sm="12" className="form-group">
                              <Row className="g-2 form">
                                <Col sm="8" className="form-group">
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
                                <Col sm="4" className="form-group">
                                  <Link to="/auth/login/mymfriend/addmymfriend">
                                    <Button className="text-uppercase">
                                      Add m21 Friend
                                    </Button>
                                  </Link>
                                </Col>
                              </Row>
                            </Col>
                            <Col
                              sm="12"
                              id="setting"
                              className="form-group bg-light"
                            >
                              <Row className="g-2 form">
                                <Col sm="10" id="blankCol">
                                  &nbsp;
                                </Col>
                                <Col sm="2" className="text-end">
                                  <img src={SettingImg} />
                                </Col>
                              </Row>
                            </Col>
                            <Col sm="12" className="form-group">
                              <MyMFriendTable />
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab eventKey="tab1" title="Assign M-Friend">
                      <Tabs
                        defaultActiveKey="newjoinee"
                        className="text-center"
                      >
                        <Tab eventKey="blanck" title="">
                          &nbsp
                        </Tab>
                        <Tab eventKey="blancktwo" title="">
                          &nbsp
                        </Tab>
                        <Tab eventKey="blanckthree" title="">
                          &nbsp
                        </Tab>
                        <Tab eventKey="blanckfour" title="">
                          &nbsp
                        </Tab>
                        <Tab eventKey="blanckfive" title="">
                          &nbsp
                        </Tab>
                        <Tab eventKey="blancksix" title="">
                          &nbsp
                        </Tab>
                        <Tab eventKey="blanckseven" title="">
                          &nbsp
                        </Tab>
                        <Tab eventKey="newjoinee" title="New joinee">
                          <Card className="border-0">
                            <CardBody>
                              <Row className="g-2 form">
                                <Col sm="8" className="form-group">
                                  <Input
                                    className="col-sm-8"
                                    placeholder="Search member by name, phone, email,location"
                                  />
                                </Col>
                                <Col sm="12" className="form-group bg-light">
                                  <Row className="g-2 form">
                                    <Col sm="8">&nbsp;</Col>
                                    <Col sm="4" className="text-end">
                                      <img src={SettingImg} />
                                    </Col>
                                  </Row>
                                </Col>
                                <Col sm="12">
                                  <NewJoineeTable />
                                </Col>
                                <Col sm="12">
                                  <Row className="g-2 form">
                                    <Col sm="1">&nbsp;</Col>
                                    <Col sm="8">
                                      {!isSelectDropdown && (
                                        <>
                                          <Card>
                                            <CardBody>
                                              <Col sm="12" className="">
                                                <Input type="text" />
                                              </Col>
                                              <Card>
                                                <AddUserTable />
                                              </Card>
                                            </CardBody>
                                          </Card>
                                        </>
                                      )}
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Tab>
                        <Tab eventKey="assignmfriend" title="Assigned M-Friend">
                          <Card className="border-0">
                            <CardBody>
                              <Row className="g-2 form">
                                <Col className="" sm="12">
                                  <Row className="g-2 form">
                                    <Col sm="10">
                                      <Input
                                        type="text"
                                        placeholder="Search memeber by name, phone,emial,location"
                                      />
                                    </Col>
                                    <Col sm="2">
                                      <Link to="/auth/login/mymfriend/assignmfriend">
                                        <Button>Assign M21 Friend</Button>
                                      </Link>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col sm="12" className="bg-light">
                                  <Row className="g-2 form">
                                    <Col sm="10">&nbsp;</Col>
                                    <Col sm="2">
                                      <img src={SettingImg} />
                                    </Col>
                                  </Row>
                                </Col>
                                <Col sm="12" className="form-group">
                                  <AssignMFriendTable />
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Tab>
                      </Tabs>
                    </Tab>
                    <Tab eventKey="tab3" title="My M-Friend">
                      <Card>
                        <CardBody>
                          <Row className="g-2 form">
                            <Col sm="12">
                              <Row className="g-2 form">
                                <Col sm="2">
                                  <Row className="g-2 form">
                                    <Col sm="12">
                                      <img src={ImgOfMyFriend} />
                                    </Col>
                                    <Col sm="12">
                                      <Row className="g-2 form">
                                        <Col sm="6">
                                          m21 ID
                                          <br />
                                          <b>12345</b>
                                        </Col>
                                        <Col sm="6">
                                          <Button variant="success">
                                            Active
                                          </Button>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col sm="10">
                                  <Row className="g-2 form">
                                    <Col
                                      sm="12"
                                      className="form-group form-control border-0"
                                    >
                                      <FormLabel>Name</FormLabel>
                                    </Col>
                                    <hr />
                                    <Col sm="12" className="form-group">
                                      <Row className="g-2 form">
                                        <Col sm="6">
                                          <Row className="g-2 form">
                                            <Col sm="4">
                                              <FormLabel>
                                                <h4>Tanweer Hasan</h4>
                                              </FormLabel>
                                            </Col>
                                            <Col sm="2" className="text-center">
                                              <Col
                                                sm="12"
                                                className=" border rounded-5"
                                              >
                                                <Row className="g-2 form-check">
                                                  <Col sm="2">
                                                    <Input type="radio" />
                                                  </Col>
                                                  <Col sm="10">Online</Col>
                                                </Row>
                                              </Col>
                                            </Col>
                                            <Col
                                              sm="1"
                                              className="border rounded-5"
                                            >
                                              <Row className="g-2 form">
                                                <Col
                                                  sm="12"
                                                  className="text-center pt-2"
                                                >
                                                  <img
                                                    src={ChatImgMyFriend}
                                                    className="w-50"
                                                  />
                                                </Col>
                                              </Row>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="6">&nbsp;</Col>
                                      </Row>
                                    </Col>
                                    <Col sm="12" className="form-group">
                                      <FormLabel>Contact Details</FormLabel>
                                    </Col>
                                    <hr />
                                    <Col sm="12" className="form-group">
                                      <Row className="g-2 form">
                                        <Col sm="4">
                                          <Row className="g-2 form">
                                            <Col sm="12">
                                              <FormLabel>
                                                Mobile Number
                                              </FormLabel>
                                            </Col>
                                            <Col sm="12">
                                              <FormLabel>
                                                +91 9876 412 532
                                              </FormLabel>
                                            </Col>
                                            <Col sm="12" className="form-check">
                                              <Input type="checkbox" />
                                              <FormLabel>
                                                Whatsapp Number too
                                              </FormLabel>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="4">
                                          <Row className="g-2 form">
                                            <Col sm="12">
                                              <FormLabel>emial</FormLabel>
                                            </Col>
                                            <Col sm="12">
                                              <b>prafullbhagat@gmail.com</b>
                                            </Col>
                                            <Col sm="12">
                                              <b>prafull@gmail.com</b>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="4">
                                          <Row className="g-2 form">
                                            <Col sm="12">&nbsp;</Col>
                                            <Col sm="12">
                                              <FormLabel>Primary</FormLabel>
                                            </Col>
                                            <Col sm="12">
                                              <FormLabel>Alternate</FormLabel>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col sm="12" className="form-group">
                                      <FormLabel>Address Details</FormLabel>
                                    </Col>
                                    <hr />
                                    <Col sm="12" className="form-group">
                                      <Row className="g-2 form">
                                        <Col sm="6">
                                          <Row className="g-2 form">
                                            <Col sm="12">
                                              <FormLabel>
                                                present address
                                              </FormLabel>
                                            </Col>
                                            <Col sm="12">
                                              <b>
                                                Flat no. 1891
                                                <br />
                                                Bharat Bhavan
                                                <br />
                                                Near Victory Tower
                                                <br />
                                                14 Main Road, 02nd Sector,
                                                <br />
                                                Vijay Nagar, Bangalore,
                                                Karnataka
                                                <br />
                                                560100
                                              </b>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="6">
                                          <Row className="g-2 form">
                                            <Col sm="12">
                                              <FormLabel>
                                                permanent address
                                              </FormLabel>
                                            </Col>
                                            <Col sm="12">
                                              <b>
                                                Flat no. 1891
                                                <br />
                                                Bharat Bhavan
                                                <br />
                                                Near Victory Tower
                                                <br />
                                                14 Main Road, 02nd Sector,
                                                <br />
                                                Vijay Nagar, Bangalore,
                                                Karnataka
                                                <br />
                                                560100
                                              </b>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col sm="12" className="form-group">
                                      Additional Details
                                    </Col>
                                    <hr />
                                    <Col sm="12" className="form-group">
                                      <Row className="g-2 form">
                                        <Col sm="6" className="form-group">
                                          <Row className="g-2 form">
                                            <Col sm="12">
                                              <FormLabel>Gender</FormLabel>
                                            </Col>
                                            <Col sm="12">
                                              <b>Male</b>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="6">
                                          <Row className="g-2 form">
                                            <Col sm="12">
                                              <FormLabel>
                                                Date of birth
                                              </FormLabel>
                                            </Col>
                                            <Col sm="12">
                                              <FormLabel>
                                                <b>DD-MM-YYYY</b>
                                              </FormLabel>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>

                                    <Col sm="12" className="form-group">
                                      <FormLabel>Education Details</FormLabel>
                                    </Col>
                                    <hr />
                                    <Col sm="12" className="form-group">
                                      <Row className="g-2 form">
                                        <Col sm="6">
                                          <Row className="g-2 form">
                                            <Col sm="12">
                                              <Row className="g-2 form">
                                                <Col
                                                  sm="4"
                                                  className="form-group"
                                                >
                                                  <FormLabel>
                                                    <b>B.E(Mechanical)</b>
                                                  </FormLabel>
                                                </Col>
                                                <Col
                                                  sm="6"
                                                  className="form-group"
                                                >
                                                  <FormLabel>
                                                    NIT,Nagpur Maharashtra
                                                  </FormLabel>
                                                </Col>
                                              </Row>
                                            </Col>
                                            <Col sm="12">
                                              <Row className="g-2 form">
                                                <Col
                                                  sm="4"
                                                  className="form-group"
                                                >
                                                  <FormLabel>
                                                    <b>MBA(Finance)</b>
                                                  </FormLabel>
                                                </Col>
                                                <Col
                                                  sm="6"
                                                  className="form-group"
                                                >
                                                  <FormLabel>
                                                    MIlind University, Nagpur
                                                    Maharashtra
                                                  </FormLabel>
                                                </Col>
                                              </Row>
                                            </Col>
                                            <Col sm="12">
                                              <Row className="g-2 form">
                                                <Col
                                                  sm="4"
                                                  className="form-group"
                                                >
                                                  <FormLabel>
                                                    <b>PhD(Finance)</b>
                                                  </FormLabel>
                                                </Col>
                                                <Col
                                                  sm="6"
                                                  className="form-group"
                                                >
                                                  <FormLabel>
                                                    MIlind University, Nagpur
                                                    Maharashtra
                                                  </FormLabel>
                                                </Col>
                                              </Row>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="4">&nbsp;</Col>
                                      </Row>
                                    </Col>
                                    <Col sm="12" className="form-group">
                                      <FormLabel>Job Details</FormLabel>
                                    </Col>
                                    <hr />
                                    <Col sm="12" className="form-group">
                                      <Row className="g-2 form">
                                        <Col sm="4">
                                          <Row className="g-2 form">
                                            <Col sm="12">
                                              <FormLabel>Occupation</FormLabel>
                                            </Col>
                                            <Col sm="12">
                                              <FormLabel>
                                                <b>Service</b>
                                              </FormLabel>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="4">
                                          <Row className="g-2 form">
                                            <Col sm="12">
                                              <FormLabel>
                                                Company/Bussiness name
                                              </FormLabel>
                                            </Col>
                                            <Col sm="12">
                                              <FormLabel>
                                                informatica Bussiness Solutions
                                                Private Limited
                                              </FormLabel>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="4">
                                          <Row className="g-2 form">
                                            <Col sm="12">
                                              <FormLabel>Designation</FormLabel>
                                            </Col>
                                            <Col sm="12">
                                              <FormLabel>
                                                Senior Software Engineer
                                              </FormLabel>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col sm="12">Diversity Details</Col>
                                    <hr />
                                    <Col sm="12" className="form-group">
                                      <Row className="g-2 form">
                                        <Col sm="4">
                                          <Row className="g-2 form">
                                            <Col sm="12">
                                              <FormLabel>Nationality</FormLabel>
                                            </Col>
                                            <Col sm="12">
                                              <b>Indiam</b>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="4">
                                          <Row className="g-2 form">
                                            <Col sm="12">
                                              <FormLabel>
                                                {" "}
                                                Religion practiced
                                              </FormLabel>
                                            </Col>
                                            <Col sm="12">
                                              <FormLabel>
                                                <b>Atheist</b>
                                              </FormLabel>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col sm="4">
                                          <Row className="g-2 form">
                                            <Col sm="12">
                                              <FormLabel>
                                                Social Category
                                              </FormLabel>
                                            </Col>
                                            <Col sm="12">
                                              <FormLabel>
                                                <b>Other Bhujan</b>
                                              </FormLabel>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Col>
    </>
  );
};

export default MyMFriend;
