import React,{useState} from "react";
import { Button, Card, Form, FormLabel, Modal } from "react-bootstrap";
import { CardBody, CardFooter, CardHeader, Input, Row, Col } from "reactstrap";

const IntroductoryVanueDetail = ({ nextStep, prevStep, closeTab, handleFormData, values }) => {

    const BaseURL = process.env.REACT_APP_BASE_URL;
    const {
        introType,
        m21Wing,
        introDrive,
        meetLang,
        introLevel,
        country,
        state,
        district,
        tehshil,
        introDate,
        introTimeFrom,
        introTimeTo,
        meetLocation,
        comment
    } = values;

    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
      };
    
      // Function to close the modal only when the "OK" button is clicked
      const closeOnOk = () => {
        setShowModal(false);
      };
    
      const SubmitHandler = (event) => {
        event.preventDefault();
        // Open the modal
        openModal();

    };

    const handleSubmitForReview = () => {
        closeOnOk();

        const responsebody = {
            introductorytype: values.introType,
            m21_type: values.m21Wing,
            special_introductory_drive: values.introDrive,
            meeting_language: values.meetLang,
            introductory_level: values.introLevel,
            country: values.country,
            state: values.state,
            district: values.district,
            tehsil: values.tehshil,
            date: values.introDate,
            fromTime: values.introTimeFrom,
            toTime: values.introTimeTo,
            location: values.meetLocation,
            comment: values.comment
        }
        const res = fetch(`${BaseURL}/api/auth/save/introductory/metting`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(responsebody),
        })
            .then((res) => res.json())
            .then((data) => {
                closeTab();
                console.log("This is meeting data", data);
            });
        console.log("********Introductory Meeting******", res);
    };

    return (
        <>
            <Card>
                <Form>
                    <CardHeader>
                        Introductory venue details
                    </CardHeader>
                    <CardBody>
                        <Col sm='12'>
                            <Row className="g-2 form">
                                <Col sm='12'>
                                    <Row className='g-2 form'>
                                        <Col sm='4'>
                                            <FormLabel>Introductory date</FormLabel>
                                            <Input
                                                name="introDate"
                                                type="date"
                                                defaultValue={values.introDate}
                                                onChange={handleFormData("introDate")}
                                                className="rounded-0 figure-caption"
                                                size="sm"

                                            />
                                        </Col>
                                        <Col sm='8'>
                                            <FormLabel>Introductory time</FormLabel>
                                            <Row className='g-2 form'>
                                                <Col sm='6'>
                                                    <Input type="time"
                                                        name="introTimeFrom"
                                                        defaultValue={values.introTimeFrom}
                                                        onChange={handleFormData("introTimeFrom")}
                                                        className="rounded-0 figure-caption"

                                                        size="sm" />
                                                </Col>
                                                {/* <col sm='2'>To</col> */}
                                                <Col sm='6'>
                                                    <Input type="time"
                                                        name="introTimeTo"
                                                        defaultValue={values.introTimeTo}
                                                        onChange={handleFormData("introTimeTo")}
                                                        className="rounded-0 figure-caption"

                                                        size="sm" />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm='12'>
                                    <FormLabel>Meeting location</FormLabel>
                                    <Input type="text" placeholder="Enter meeting location here"
                                        name="meetLocation"
                                        defaultValue={values.meetLocation}
                                        onChange={handleFormData("meetLocation")}
                                        className="rounded-0 figure-caption"

                                        size="sm" />
                                </Col>
                                <Col sm='12'>
                                    <FormLabel>Comment</FormLabel>
                                    <Input type="textarea" placeholder="Type here"
                                        name="comment"
                                        defaultValue={values.comment}
                                        onChange={handleFormData("comment")}
                                        className="rounded-0 figure-caption"
                                        size="sm" />
                                </Col>
                            </Row>
                        </Col>

                    </CardBody>
                    <CardFooter>
                        <Row className="g-2 form">
                            <Col sm='6'>
                                <Button
                                    size="lg"
                                    type="submit"
                                    className="btn-outline-secondary bg-white rounded-0 text-black figure-caption"
                                >Cancel</Button>
                            </Col>
                            <Col sm='6' className="text-end">
                                <Button
                                    size="lg"
                                    type="submit"
                                    className=" rounded-0 figure-caption text-white"
                                    onClick={prevStep}
                                >Previous</Button> &nbsp;
                                <Button
                                    size="lg"
                                    type="submit"
                                    className=" rounded-0 figure-caption text-white"
                                    onClick={SubmitHandler}
                                >Send for review</Button>
                            </Col>
                        </Row>
                    </CardFooter>
                </Form>
            </Card>
            <Col sm='12'>
              <Modal show={showModal} onHide={closeOnOk}>
                <Modal.Header>
                  <Modal.Title>Send for review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Col sm='12'>Are you sure you want to send this introductory
                  meeting detail for review?</Col>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" className="d-block mx-auto" onClick={closeOnOk}>
                    No
                  </Button>
                  <Button variant="primary" className="d-block mx-auto" onClick={handleSubmitForReview}>
                    Yes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
        </>
    )
}

export default IntroductoryVanueDetail;