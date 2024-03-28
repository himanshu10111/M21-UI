import React, { useState, useEffect } from "react";
import { Button, Col, Dropdown, Pagination, Row, Table } from "react-bootstrap";
import { Card, CardBody, CardFooter, CardHeader, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import SettingIcon from "../../../assets/img/Settings2.png";
import PlaceholderLoading from "../../../component/placeholder/placeholder";
import { NumberOfRow } from "../../../component/numberOfRowTable/NumberOfRow";

const PostIntroductoryTable = () => {
  const navigate = useNavigate();
  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [meetings, setMeeting] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

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
      });
  }, []);

  const TablePostIntroductory = () => {
    const formatDate = (dateStr) => {
      const date = new Date(dateStr);
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const dayOfWeek = daysOfWeek[date.getDay()];
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();

      return `${dayOfWeek}, ${day} ${month} ${year}`;
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

    const handleIntroductoryViewClick = (id) => {
      navigate(`/auth/login/introductory/viewpostintroductory/${id}`);
    };

    const handleIntroductoryReviewClick = (id) => {
      navigate(`/auth/login/introductory/reviewintroductory/${id}`);
    };

    return (
      <>
        <Table striped>
          <thead>
            <tr>
              <th>
                <Input type="checkbox" />
              </th>
              <th>Meeting ID</th>
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
            {itemsToDisplay.map((meeting) => (
              <tr key={meeting.id}>
                <td>
                  <Input type="checkbox" />
                </td>
                <td>{meeting.id}</td>
                <td>{meeting.m21Type}</td>
                <td>
                  {formatDate(meeting.date)}
                  <br />
                  {meeting.fromTime}AM - {meeting.toTime}PM
                </td>
                <td>{meeting.meetingLanguage}</td>
                <td>{meeting.location}</td>
                <td>{meeting.introductoryLevel}</td>
                <td
                  className={
                    meeting.status === 1
                      ? "text-success"
                      : meeting.status === 0
                      ? "text-danger"
                      : "text-black"
                  }
                >
                  {meeting.status === 1
                    ? "Approve"
                    : meeting.status === 0
                    ? "Reject"
                    : "For Review"}
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
                      <Dropdown.Item onClick={() => handleIntroductoryViewClick(meeting.id)}>
                        View
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleIntroductoryReviewClick(meeting.id)}>
                        Review Introductory
                      </Dropdown.Item>
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

  return (
    <>
      <Col sm="12" className="p-2">
        <Card className="border-0 rounded-0">
          <CardBody className="border-0 rounded-0">
            <Col sm="12">
              <Row className="g-2 form">
                <Col sm="8">
                <input
                  type="text"
                  placeholder="Search member by type, language, location"
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
                <Col sm="12" className="bg-light p-2">
                  <Row className="g-2 form">
                    <Col sm="10">&nbsp;</Col>
                    <Col sm="2">
                      <Row className="g-2 form">
                        <Col sm="6">
                          <Button>Filter</Button>
                        </Col>
                        <Col sm="6">
                          <img src={SettingIcon} role="button" />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12">
                  {loading ? <PlaceholderLoading /> : <TablePostIntroductory />}
                </Col>
              </Row>
            </Col>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default PostIntroductoryTable;
