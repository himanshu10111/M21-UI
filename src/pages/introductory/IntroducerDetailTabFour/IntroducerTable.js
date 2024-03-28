import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  Pagination,
  Placeholder,
  Row,
  Table,
} from "react-bootstrap";
import { Card, CardBody, Input } from "reactstrap";
import SettingIcon from "../../../assets/img/Settings2.png";
import { useNavigate } from "react-router-dom";
import PlaceholderLoading from "../../../component/placeholder/placeholder";
import { NumberOfRow } from "../../../component/numberOfRowTable/NumberOfRow";

const IntroducerTable = () => {
  const BaseURL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
        console.log(data);
      }, 20000);
  }, []);
  const TableIntroducer = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = meetings.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    return (
      <>
        <Table striped>
          <thead>
            <tr>
              <th>
                <Input type="checkbox" />
              </th>
              <th>Facilitator Name A</th>
              <th>Meeting ID</th>
              <th>Phone No.</th>
              <th>M21 Wing</th>
              <th>Language</th>
              <th>Level</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {itemsToDisplay.map((meeting) => (
              <tr key={meeting.id}>
                <td>
                  <Input type="checkbox" />
                </td>
                <td></td>
                <td>{meeting.id}</td>
                <td>3534546454</td>
                <td>{meeting.m21Type}</td>
                <td>{meeting.meetingLanguage}</td>
                <td>{meeting.introductoryLevel}</td>
                <td>Available</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="bg-transparent border-0 text-dark"
                    >
                      Select
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/auth/login/introductory/viewintroducerdetail">
                        View
                      </Dropdown.Item>
                      <Dropdown.Item href="">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
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
      </>
    );
  };

  const navigateToAddFacility = () => {
    navigate("/auth/login/introductory/addIntroducer");
  };

  return (
    <>
      <Col sm="12" className="p-2">
        <Card className="border-0 rounded-0">
          <CardBody className="border-0 rounded-0">
            <Col sm="12">
              <Row className="g-2 form">
                <Col sm="5">
                  <Input
                    type="text"
                    placeholder="Search memeber by name, phone, email, location"
                    className="rounded-5"
                  />
                </Col>
                <Col sm="4"></Col>
                <Col sm="3">
                  <Button className="rounded-5" onClick={navigateToAddFacility}>
                    ADD FACILITATOR
                  </Button>
                </Col>
                <Col sm="12" className="bg-light p-2">
                  <Row className="g-2 form">
                    <Col sm="10">&nbsp;</Col>
                    <Col sm="2">
                      <Row className="g-2 form">
                        <Col sm="6"></Col>
                        <Col sm="6">
                          <img src={SettingIcon} role="button" />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                {loading ? (
                  <PlaceholderLoading />
                ) : (
                  <Col sm="12">
                    <TableIntroducer />
                  </Col>
                )}
              </Row>
            </Col>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default IntroducerTable;
