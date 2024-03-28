import React, { useState,useEffect } from "react";
import { Card, Container, FormLabel,Dropdown, Button } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody, CardFooter,Col, Row,Input } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import SettingImg from '../../../../assets/img/Settings2.png';
import SearchIcon from "../../../../assets/img/Search.png";
const AddAttendess = ()=>{
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

      const [selectedAttendees, setSelectedAttendees] = useState([]);
      const [selectedNominees, setSelectedNominees] = useState([]);
      const [isSelectDropdown, setIsSelectDropdown] = useState(false);

      const BaseURL = process.env.REACT_APP_BASE_URL;
      const [introductory,setIntroductory]=useState([]);
      const {id} = useParams();
      useEffect(()=>{
          
        fetch(`${BaseURL}/api/auth/get/introductory/metting/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
    
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setIntroductory(data);
            console.log(data);
          })
        
      },[id]);
  
      const [nominees,setNominee]=useState([]);
      const [meetingId, setMeetingId] =useState([]);
      useEffect(()=>{
          
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
          })
      },[]);

      useEffect(()=>{
        fetch(`${BaseURL}/api/nomination/nominee-details/${id}`,{
          method:"GET",
          headers:{
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => res.json())
        .then((data)=> {
          setSelectedAttendees(data);
          console.log("data:",data.status);
          // setMemberStatus(data.status);
      })
      },[id]);


      const handleSelectNominee = (nominee) => {
        setSelectedNominees((prevNominees) => [...prevNominees, nominee]);
      };
    
      // Function to add all selected nominees to the table when "Add attendee" is clicked
      // const handleAddAttendeesToTable = () => {
      //   setSelectedAttendees(selectedNominees);
      //   setIsSelectDropdown(false);
      // };
    //   const handleAddAttendeesToTable = () => {
    //     // Filter out duplicates from newly selected attendees
    //     const filteredSelectedAttendees = selectedAttendees.filter(newAttendee => !selectedNominees.some(existingAttendee => existingAttendee.id === newAttendee.id));
    
    //     // Merge newly selected attendees with existing ones
    //     const updatedAttendees = [...selectedNominees, ...filteredSelectedAttendees];
    
    //     // Update state with merged list
    //     setSelectedAttendees(updatedAttendees);
    //     setIsSelectDropdown(false); // Close dropdown after adding attendees
    // };
    const handleAddAttendeesToTable = () => {
      // Check if the selected nominee is already present in the selectedAttendees state array
      const isAlreadyAdded = selectedAttendees.some(attendee => selectedNominees.some(nominee => attendee.id === nominee.id));
  
      // If the nominee is not already added, add it to the table
      if (!isAlreadyAdded) {
          // Merge newly selected nominees with existing ones
          const updatedAttendees = [...selectedAttendees, ...selectedNominees];
  
          // Update state with merged list
          setSelectedAttendees(updatedAttendees);
      }
  
      setIsSelectDropdown(false); // Close dropdown after adding attendees
  };
  
  
    

      const [memberStatus, setMemberStatus] = useState({});
      const handleMemberStatusChange = (memberId, selectedValue) => {
        console.log(`Updating status for memberId ${memberId} to ${selectedValue}`);
        const statusMap = {
          Confirm: 1,
          Tentative: 0,
          Unavailable: 2,
          "Not interested": 3,
        };
        setMemberStatus((prevState) => ({
          ...prevState,
          [memberId]: statusMap[selectedValue],
        }));
      };

      const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const dayOfWeek = daysOfWeek[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
    
        return `${dayOfWeek}, ${day} ${month} ${year}`;
      };
      const handleSubmit = () => {
        const dataToSend = selectedAttendees.map((attendee) => ({
          meetingId: id, 
          memberId: attendee.id, 
          status: memberStatus[attendee.id]
        }));
    
        fetch(`${BaseURL}/api/meeting/member/save`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(dataToSend),
        })
          .then((res) => res.json())
          .then((response) => {
            console.log("Data sent successfully:", response);
          })
          .catch((error) => {
            console.error("Error sending data:", error);
          });
          navigate('/auth/login/introductory');
      };


    const AddAttendessTable= ({ attendees }) =>{
        return(
            <>
            <Table>
        <thead className="bg-light">
          <tr>
            <th>
              <Input type="checkbox" />
            </th>
            <th>Attendees Name</th>
            <th>Phone</th>
            <th>District</th>
            <th>State</th>
            <th>M21 wing</th>
            <th>Refered By</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {attendees.map((attendee, index) => (
              <tr key={index} >
            <td>
              <Input type="checkbox" />
            </td>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <td>{attendee.firstName} {attendee.lastName}</td>
            </OverlayTrigger>
            <td>{attendee.mobileNumber}</td>
            <td>{attendee.district} </td>
            <td> {attendee.state}</td>
            <td>{attendee.m21Wing}</td>
            <td>Prafull</td>
            <td><Input type="select"
            onChange={(e) =>
              handleMemberStatusChange(attendee.id, e.target.value)
            }
            value={memberStatus[attendee.id] === 1
              ? "Confirm"
              : memberStatus[attendee.id] === 0
              ? "Tentative"
              : memberStatus[attendee.id] === 2
              ? "Unavailable"
              : "Not interested"}
            >
                <option value="Confirm">Confirm</option>
                <option value="Tentative">Tentative</option>
                <option value="Unavailable">Unavailable</option>
                <option value="Not interested">Not interested</option>
                </Input></td>
            <td>
              <Dropdown>
                 <Dropdown.Toggle id='dropdown-basic' className="bg-transparent border-0 text-dark">
                    Select
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/auth/login/introductory/viewmeeting">View</Dropdown.Item>
                  
                  <Dropdown.Item>Delete</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
              </td>
          </tr>
        ))}
        </tbody>
      </Table>
            </>
        )
    }

const MultiSelect=()=>{
setIsSelectDropdown((current)=>!current);
};

    return(
        <>
        <section>
            <Container>
                <Col sm='12' className='p-4'>
                <Card className="border-0 shadow rounded-0">
                    <CardHeader className="border-0 fw-bold">Add attendees</CardHeader>
                    <CardBody>
                        <Row className="g-2 form">
                        <Col sm='12' className="p-2 form-control">
                            <Row className='g-2 form ps-5'>
                                <Col sm='12'>{introductory.id}</Col>
                                <Col sm='12'>
                                    <Row>
                                        <Col sm='2'>
                                            <FormLabel>Introductory type</FormLabel>
                                            <Col sm='12' className="fw-bold mt-n10">{introductory.type}</Col>
                                        </Col>
                                        <Col sm='2'>
                                            <FormLabel>M21 wing</FormLabel>
                                            <Col sm='12' className="fw-bold mt-n10">{introductory.m21Type}</Col>
                                        </Col>
                                        <Col sm='3'>
                                        <FormLabel>Special introductory drive</FormLabel>
                                            <Col sm='12' className="fw-bold mt-n10">{introductory.specialIntroductoryDrive}</Col>
                                        </Col>
                                        <Col sm='2'>
                                        <FormLabel>Language</FormLabel>
                                            <Col sm='12' className="fw-bold mt-n10">{introductory.meetingLanguage}</Col>
                                        </Col>
                                        <Col sm='3'>
                                        <FormLabel>Introductory level</FormLabel>
                                            <Col sm='12' className="fw-bold mt-n10">{introductory.introductoryLevel}</Col>
                                        </Col>
                                    </Row>
                                    &nbsp;
                                    <Row>
                                        <Col sm='3'>
                                            <FormLabel>Meeting Date & Time</FormLabel>
                                            <Col sm='12' className="fw-bold mt-n10">{formatDate(introductory.date)} <br></br> {introductory.fromTime} AM - {introductory.toTime} PM</Col>
                                        </Col>
                                        <Col sm='2'>
                                            <FormLabel>Location</FormLabel>
                                            <Col sm='12' className="fw-bold mt-n10">{introductory.location}</Col>
                                        </Col>
                                        <Col sm='3'>
                                        <FormLabel>Introducer 1</FormLabel>
                                            <Col sm='12' className="fw-bold mt-n10">{introductory.introducer1}</Col>
                                        </Col>
                                        <Col sm='2'>
                                        <FormLabel>Introducer 2</FormLabel>
                                            <Col sm='12' className="fw-bold mt-n10">{introductory.introducer2}</Col>
                                        </Col>
                                        <Col sm="2"></Col>
                                    </Row>
                                </Col>
                                &nbsp;
                                <Col sm='12' className="p-2">
                                  <Row>
                                    <Col sm="1"></Col>
                                    <Col sm="11" className="fw-bold mt-n10">Select attendee</Col>
                                  </Row>
                                  <Row>
                                  <Col sm="1"></Col>
                                    <Col sm='7' className="position-relative">
                                      <Input type="text" onClick={MultiSelect}/>
                                      {isSelectDropdown && (
                                         <Col sm='12'
                                          className="border bg-white position-absolute" 
                                         type='input'>
                                          <Row className="g-2 form">
                                            <Col sm='12'>
                                            {
                                            nominees.map( (nominee) =>(
                                              <Row className="g-2 form">
                                              <Col sm='1'>
                                                <Input type="checkbox"
                                                  onClick={() =>handleSelectNominee(nominee)}>
                                                </Input></Col>
                                            <Col sm='3'>{ nominee.firstName}</Col>
                                            <Col sm='3'> {nominee.lastName}</Col>
                                              </Row>
                                            ))}
                                            </Col>
                                          </Row>
                                          </Col>
                                      )}
                                    </Col>
                                    <Col sm='4'>
                                      <Button onClick={handleAddAttendeesToTable}>Add attendee</Button>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col sm='12' className="bg-light p-2">
                                  <Row>
                                    <Col sm='10'>
                                      No attendee added yet
                                    </Col>
                                    <Col sm='1' className="text-end">
                                      <img src={SettingImg}/>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col sm='12'>
                                <AddAttendessTable attendees={selectedAttendees} />
                                </Col>
                            </Row>
                        </Col>
                        </Row>
                    </CardBody>
                    <CardFooter className="border-0">
                      <Col sm='12'>
                        <Row className="g-2 form">
                          <Col sm='6'>
                            <Button className="border-outerline-primary rounded-0 text-primary bg-white text-uppercase">cancel </Button>
                          </Col>
                          <Col sm='6' className="text-end">
                              <Button className="bg-primary rounded-0  text-uppercase" onClick={handleSubmit}>submit</Button>
                          </Col>
                        </Row>
                      </Col>
                    </CardFooter>
                </Card>
                </Col>             
            </Container>
        </section>
        </>
    )
}

export default AddAttendess;