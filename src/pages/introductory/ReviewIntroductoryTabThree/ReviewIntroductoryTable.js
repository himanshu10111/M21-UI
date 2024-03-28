import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Dropdown,
  Row,
  Table,
  Modal,
  Pagination,
} from "react-bootstrap";
import { Card, CardBody, CardFooter, CardHeader, Input } from "reactstrap";
import SettingIcon from "../../../assets/img/Settings2.png";
import { useNavigate } from "react-router-dom";
import { NumberOfRow } from "../../../component/numberOfRowTable/NumberOfRow";

const ReviewIntroductoryTable = () => {
  const [search, setSearch] = useState("");

  const TableReviewIntroductory = () => {
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
        });
    }, []);

    const handleIntroductoryClick = (id) => {
      navigate(`/auth/login/introductory/review/${id}`);
    };

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

    const onApproveClick = (meetingId) => {
      const responsebody = {
        meetingId: parseInt(meetingId, 10),
        status: 1, //Approve
      };

      fetch(`${BaseURL}/api/introductory-meetings/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(responsebody),
      })
        .then((res) => res.json())
        .then((data) => {
          setMeetings((meetings) =>
            meetings.map((meeting) =>
              meeting.id === meetingId
                ? { ...meeting, status: 1 } // Update the status to "Approve"
                : meeting
            )
          );
        });
    };

    const onRejectClick = (meetingId) => {
      const requestBody = {
        meetingId: parseInt(meetingId, 10),
        status: 0, //Reject
      };

      fetch(`${BaseURL}/api/introductory-meetings/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(requestBody),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Recieved response", data);
          setMeetings((meetings) =>
            meetings.map((meeting) =>
              meeting.id === meetingId
                ? { ...meeting, status: 0 } // Update the status to "Reject"
                : meeting
            )
          );
        });
      console.log("********Reviewed introductory Rejected******");
    };

    const generateDropdownItems = (meeting) => {
      const items = [];

      items.push(
        <Dropdown.Item
          key="review"
          onClick={() => handleIntroductoryClick(meeting.id)}
        >
          Review
        </Dropdown.Item>
      );

      if (meeting.status === 0 || meeting.status === 1) {
        items.push(
          <Dropdown.Item key="approve" href="#" disabled>
            Approve
          </Dropdown.Item>,
          <Dropdown.Item key="sendBack" href="#" disabled>
            Send back
          </Dropdown.Item>,
          <Dropdown.Item key="reject" href="#" disabled>
            Reject
          </Dropdown.Item>
        );
      } else {
        // Show these options when status is other than 1 or 0
        items.push(
          <Dropdown.Item
            key="approve"
            onClick={() => onApproveClick(meeting.id)}
          >
            Approve
          </Dropdown.Item>,
          <Dropdown.Item key="sendBack" href="#">
            Send back
          </Dropdown.Item>,
          <Dropdown.Item key="reject" onClick={() => onRejectClick(meeting.id)}>
            Reject
          </Dropdown.Item>
        );
      }

      items.push(
        <Dropdown.Item key="delete" onClick={() => handleShow(meeting.id)}>
          Delete
        </Dropdown.Item>
      );

      return items;
    };

    const filterMeetings = () => {
      return meetings.filter((meeting) => {
        return (
          search === "" || // No search query, return all items
          meeting.m21Type.toLowerCase().includes(search.toLowerCase()) ||
          meeting.meetingLanguage
            .toLowerCase()
            .includes(search.toLowerCase()) ||
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
                    : meeting.status === 2
                    ? "Send back"
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
                      {generateDropdownItems(meeting)}
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

  const BaseURL = process.env.REACT_APP_BASE_URL;
  const [meetingToDelete, setMeetingToDelete] = useState(null);
  const [meetings, setMeetings] = useState([]);

  const handleShow = (id) => {
    setMeetingToDelete(id);
  };

  const handleDeleteMeeting = () => {
    if (meetingToDelete) {
      fetch(`${BaseURL}/api/auth/delete/introductory/${meetingToDelete}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => {
          if (res.ok) {
            console.log("Meeting deleted successfully");
            // Remove the deleted meeting from the state
            setMeetings(
              meetings.filter((meeting) => meeting.id !== meetingToDelete)
            );
          } else {
            console.error("Error deleting meeting");
          }
        })
        .catch((error) => {
          console.error("Error deleting meeting", error);
        });
    }

    // Close the modal
    setMeetingToDelete(null);
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
                    onChange={(e) => setSearch(e.target.value)}
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
                  <TableReviewIntroductory />
                </Col>
              </Row>
            </Col>
          </CardBody>
        </Card>
      </Col>
      <Modal show={!!meetingToDelete} onHide={() => setMeetingToDelete(null)}>
        <Modal.Header className="fw-bold fs-5">Delete Detail</Modal.Header>
        <Modal.Body className="text-left">
          Are you sure you want to delete this meeting detail?
        </Modal.Body>
        <Modal.Footer>
          <Col sm="12">
            <Row>
              <Col sm="4"></Col>
              <Col sm="2">
                <Button onClick={() => setMeetingToDelete(null)}>
                  &nbsp;No&nbsp;
                </Button>
              </Col>
              <Col sm="2">
                <Button onClick={handleDeleteMeeting}>&nbsp;Yes&nbsp;</Button>
              </Col>
            </Row>
          </Col>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReviewIntroductoryTable;
