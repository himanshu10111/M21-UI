import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Modal, Button, } from "react-bootstrap";
import { CardBody, Col, Row, Input } from "reactstrap";
import MobileProfileSideBar from "../../../component/sidebar/MobileProfileSideBar";
const M21Organization = () => {
    const [lgShowEditInterest, setLgShowEditInterest] = useState(false);
    const [lgShowEditExpertise, setLgShowEditExpertise] = useState(false);
    const [lgShowEditMapping, setLgShowEditMapping] = useState(false);
    const [lgShowEditJourney, setLgShowEditJourney] = useState(false);

    return (
        <>
            <Col sm="12" className="small">
                <Form>
                    <Card className="border-0">
                        <CardBody>
                            <Col sm="12" className="p-3">
                                <h5>M21 Organization</h5>
                            </Col>
                            <Col sm="12" className="p-3">
                                <Col sm="12" className="border-bottom p-2">
                                    <Row>
                                        <Col sm="11" className="p-0">
                                            <b>My M21 journey</b>
                                        </Col>
                                        <Col sm="1"
                                            className="p-0 text-primary"
                                            role="button"
                                            onClick={() => setLgShowEditJourney(true)}
                                        >
                                            Edit
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm="12" className="p-2">
                                    <Row>
                                        <Col sm="3">
                                            <Col sm="12" className="small">
                                                {" "}
                                                Introductory type
                                            </Col>
                                            <Col sm="12" className="bold">
                                                <b>Offline/in person</b>{" "}
                                            </Col>
                                        </Col>
                                        <Col sm="3">
                                            <Col sm="12" className="small">
                                                {" "}
                                                Introductory Date
                                            </Col>
                                            <Col sm="12" className="bold">
                                                <b>DD-MM-YYYY</b>{" "}

                                            </Col>
                                        </Col>
                                        <Col sm="3">
                                            <Col sm="12" className="small">
                                                {" "}
                                                Location
                                            </Col>
                                            <Col sm="12" className="bold">
                                                <b>Banglore,Karnataka</b>{" "}
                                            </Col>
                                        </Col>
                                        <Col sm="3">
                                            <Col sm="12" className="small"></Col>
                                        </Col>
                                    </Row>
                                    &nbsp;
                                    <Row>
                                        <Col sm="3">
                                            <Col sm="12" className="small">
                                                {" "}
                                                Introductory type
                                            </Col>
                                            <Col sm="12" className="bold">
                                                <b>Offline/in person</b>{" "}
                                            </Col>
                                        </Col>
                                        <Col sm="3">
                                            <Col sm="12" className="small">
                                                {" "}
                                                Introductory Date
                                            </Col>
                                            <Col sm="12" className="bold">
                                                <b>DD-MM-YYYY</b>{" "}
                                            </Col>
                                        </Col>
                                        <Col sm="3">
                                            <Col sm="12" className="small">
                                                {" "}
                                                Location
                                            </Col>
                                            <Col sm="12" className="bold">
                                                <b>Banglore,Karnataka</b>{" "}
                                            </Col>
                                        </Col>
                                        <Col sm="3">
                                            <Col sm="12" className="small"></Col>
                                        </Col>
                                    </Row>
                                </Col>
                            </Col>
                            <Col sm="12" className="border-bottom p-2">
                                <Row>
                                    <Col sm="11" className="p-0">
                                        My organization mapping
                                    </Col>
                                    <Col sm="1"
                                        className="p-0 text-primary"
                                        role="button"
                                        onClick={() => setLgShowEditMapping(true)}
                                    >
                                        Edit
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm="12" className="p-2">
                                <Row>
                                    <Col sm="2">
                                        <Col sm="12" className="small">
                                            {" "}
                                            M21 Wing
                                        </Col>
                                        <Col sm="12" className="bold">
                                            <b>People</b>{" "}
                                        </Col>
                                    </Col>
                                    <Col sm="2">
                                        <Col sm="12" className="small">
                                            {" "}
                                            Country/NRC
                                        </Col>
                                        <Col sm="12" className="bold">
                                            <b>India</b>{" "}
                                        </Col>
                                    </Col>
                                    <Col sm="2">
                                        <Col sm="12" className="small">
                                            {" "}
                                            State/SRC
                                        </Col>
                                        <Col sm="12" className="bold">
                                            <b>Maharashtra</b>{" "}
                                        </Col>
                                    </Col>
                                    <Col sm="2">
                                        <Col sm="12" className="small">
                                            {" "}
                                            District/DRC
                                        </Col>
                                        <Col sm="12" className="bold">
                                            <b>Nagpur</b>{" "}
                                        </Col>
                                    </Col>
                                    <Col sm='2'>
                                        <Col sm='12' className="bold">
                                            Current responsibilities
                                        </Col>
                                        <Col sm='12' className="small">
                                            <b>Member Of NRC</b>
                                        </Col>
                                    </Col>
                                    <Col sm='2'></Col>
                                </Row>
                            </Col>
                            <Col sm="12" className="border-bottom p-2">
                                <Row>
                                    <Col sm="11" className="p-0">
                                        My Expertise
                                    </Col>
                                    <Col sm="1"
                                        className="p-0 text-primary"
                                        role="button"
                                        onClick={() => setLgShowEditExpertise(true)}

                                    >
                                        Edit
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm="12" className="p-2">
                                <Row>
                                    <Col sm="2">
                                        <Col sm="12" className="bold">
                                            <b>Data Scientist</b>{" "}
                                        </Col>
                                    </Col>
                                    <Col sm="2">
                                        <Col sm="12" className="bold">
                                            <b>Artist</b>{" "}
                                        </Col>
                                    </Col>
                                    <Col sm="2">
                                        <Col sm="12" className="bold">
                                            <b>Educationalist</b>{" "}
                                        </Col>
                                    </Col>
                                    <Col sm="2">
                                        <Col sm="12" className="bold">
                                            <b>Programmer</b>{" "}
                                        </Col>
                                    </Col>
                                    <Col sm='2'></Col>
                                    <Col sm='2'></Col>
                                </Row>
                            </Col>
                            <Col sm="12" className="border-bottom p-2">
                                <Row>
                                    <Col sm="11" className="p-0">
                                        My Area of Interset
                                    </Col>
                                    <Col sm="1"
                                        className="p-0 text-primary"
                                        role="button"
                                        onClick={() => setLgShowEditInterest(true)}

                                    >
                                        Edit
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm="12" className="p-2">
                                <Row>
                                    <Col sm="2">
                                        <Col sm="12" className="bold">
                                            <b>Education</b>{" "}
                                        </Col>
                                    </Col>
                                    <Col sm="2">
                                        <Col sm="12" className="bold">
                                            <b>Labour Reform</b>{" "}
                                        </Col>
                                    </Col>
                                    <Col sm="2">
                                        <Col sm="12" className="bold">
                                            <b>Agriculture Reform</b>{" "}
                                        </Col>
                                    </Col>
                                    <Col sm="2"></Col>
                                    <Col sm='2'></Col>
                                    <Col sm='2'></Col>
                                </Row>
                            </Col>
                        </CardBody>
                    </Card>
                </Form>
            </Col>
            <Col sm="12">
                <Modal
                    size="lg"
                    show={lgShowEditExpertise}
                    onHide={() => setLgShowEditExpertise(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Body className="bg-white">
                        <Col className="p-2 bg-light">
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg border-bottom">
                                    My Expertise
                                </Modal.Title>
                            </Modal.Header>
                            <Card className="p-2 rounded-0 shadow-sm p-1 mb-1 bg-white">
                                <Col sm='12' className="p-1">
                                    <Row>
                                        <Col sm='12'><b>Art</b></Col>
                                        <Col sm='2' className="p-1">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /> Value 1</Col>
                                        </Col>
                                        <Col sm='2' className="p-1">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" />  Value 2</Col>
                                        </Col>
                                        <Col sm='2' className="p-1">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /> Value 3</Col>
                                        </Col>
                                        <Col sm='2' className="p-2">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /> Value 4</Col>
                                        </Col>
                                        <Col sm='2' className="p-2">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /> Value 5</Col>
                                        </Col>
                                        <Col sm='2' className="p-2">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /> Value 6</Col>
                                        </Col>
                                    </Row>
                                </Col>
                            </Card>
                            &nbsp;
                            <Card className="p-2 rounded-0 shadow-sm p-1 mb-1 bg-white">
                                <Col sm='12' className="p-1">
                                    <Row>
                                        <Col sm='12'><b>Technology</b></Col>
                                        <Col sm='2' className="p-1">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /> Value 1</Col>
                                        </Col>
                                        <Col sm='2' className="p-1">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /> Value 2</Col>
                                        </Col>
                                        <Col sm='2' className="p-1">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /> Value 3</Col>
                                        </Col>
                                        <Col sm='2' className="p-2">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /> Value 4</Col>
                                        </Col>
                                        <Col sm='2' className="p-2">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /> Value 5</Col>
                                        </Col>
                                        <Col sm='2' className="p-2">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /> Value 6</Col>
                                        </Col>
                                    </Row>
                                </Col>
                            </Card>
                            <Col sm='12' className="p-3">
                                <Row>
                                    <Col sm='12'>-- -- -- -- --</Col>
                                    <Col sm='12'>-- -- -- -- --</Col>
                                </Row>
                            </Col>
                            <Card className="p-2 rounded-0 shadow-sm p-1 mb-1 bg-white">
                                <Col sm='12' className="p-1">
                                    <Row>
                                        <Col sm='12'><b>Label</b></Col>
                                        <Col sm='2' className="p-1 ">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /><b> Value 1</b></Col>
                                        </Col>
                                        <Col sm='2' className="p-1">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /><b> Value 2</b></Col>
                                        </Col>
                                        <Col sm='2' className="p-1">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /><b> Value 3</b></Col>
                                        </Col>
                                        <Col sm='2' className="p-2">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /><b> Value 4</b></Col>
                                        </Col>
                                        <Col sm='2' className="p-2">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /><b> Value 5</b></Col>
                                        </Col>
                                        <Col sm='2' className="p-2">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /><b> Value 6</b></Col>
                                        </Col>
                                    </Row>
                                </Col>
                            </Card>
                            &nbsp;
                            <Col sm='12' className="bg-light">
                                <Row>
                                    <Col sm='12'>Other</Col>
                                    <Col sm='12'><Input className='rounded-0 border-dark' placeholder="" /></Col>
                                </Row>
                            </Col>
                            &nbsp;
                            <Col sm='12'>
                                <Row>
                                    <Col sm='3'>&nbsp;</Col>
                                    <Col sm='3' className="text-end "><Button>Cancel</Button></Col>
                                    <Col sm='3' className="text-start"><Button>Save</Button></Col>
                                    <Col sm='3'>&nbsp;</Col>
                                </Row>
                            </Col>
                        </Col>
                    </Modal.Body>
                </Modal>
            </Col>
            <Col sm="12">
                <Modal
                    size="lg"
                    show={lgShowEditInterest}
                    onHide={() => setLgShowEditInterest(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >

                    <Modal.Body>
                        <Col className="p-2">
                            <Card className="bg-light">
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-lg">
                                      <small>My Area of Interest</small>
                                    </Modal.Title>
                                </Modal.Header>
                                <Col sm='12' className="p-3">
                                    <Row>
                                        <Col sm='2' className="p-1">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" />Education</Col>
                                        </Col>
                                        <Col sm='3' className="p-1">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" />Labor reforms</Col>
                                        </Col>
                                        <Col sm='3' className="p-1">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" />Agricultural reforms</Col>
                                        </Col>
                                        <Col sm='2' className="p-2">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" />Finance</Col>
                                        </Col>
                                        <Col sm='2' className="p-2">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" />Work Force</Col>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm='12' className="p-2">
                                            <Row>
                                                <Col sm='2'>Other</Col>
                                                <Col sm='10'></Col>
                                            </Row>
                                            <Col sm='12' className="p-1">
                                                <Input className='rounded-0' placeholder=" ">
                                                    <option>Choose Option</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </Input>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm='12'>
                                    <Row>
                                        <Col sm='3'>&nbsp;</Col>
                                        <Col sm='3' className="text-end"><Button>Cancel</Button></Col>
                                        <Col sm='3' className="text-start"><Button>Save</Button></Col>
                                        <Col sm='3'>&nbsp;</Col>
                                    </Row>
                                </Col>
                                &nbsp;
                            </Card>
                        </Col>
                    </Modal.Body>
                </Modal>
            </Col>
            <Col sm="12">
                <Modal
                    size="lg"
                    show={lgShowEditMapping}
                    onHide={() => setLgShowEditMapping(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >

                    <Modal.Body>
                        <Col className="p-2">
                            <Card className="bg-light">
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-lg">
                                        My organization mapping
                                    </Modal.Title>
                                </Modal.Header>
                                <Col sm='12' className="p-3">
                                    <Row>
                                        <Col sm='2' className="p-1">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" />People</Col>
                                        </Col>
                                        <Col sm='2' className="p-1">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" />Art</Col>
                                        </Col>
                                        <Col sm='2' className="p-1">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" />Technology</Col>
                                        </Col>
                                        <Col sm='2' className="p-2">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" />Media</Col>
                                        </Col>
                                        <Col sm='2' className="p-2">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" />Finance</Col>
                                        </Col>
                                        <Col sm='2' className="p-2">
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" />Work Force</Col>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm='12'>
                                    <Row>
                                        <Col sm='3'>&nbsp;</Col>
                                        <Col sm='3' className="text-end"><Button>Cancel</Button></Col>
                                        <Col sm='3' className="text-start"><Button>Save</Button></Col>
                                        <Col sm='3'>&nbsp;</Col>
                                    </Row>
                                </Col>
                                &nbsp;
                            </Card>
                        </Col>
                    </Modal.Body>
                </Modal>
            </Col>
            <Col sm="12">
                <Modal
                    size="lg"
                    show={lgShowEditJourney}
                    onHide={() => setLgShowEditJourney(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >

                    <Modal.Body>
                        <Col className="p-2">
                            <Card className="bg-light">
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-lg" >
                                        My introductory program
                                    </Modal.Title>
                                </Modal.Header>
                                <Col sm='12' className="p-2">
                                    <Row>
                                        <Col sm='3' className="p-3">
                                            <Col sm='12' className="p-0">Introductory Type<sup className='text-danger'> *</sup></Col>
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="radio" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" />  Offline/in person</Col>
                                        </Col>
                                        <Col sm='2' className="p-3">
                                            <Col sm='12' className="p-0">&nbsp;</Col>
                                            <Col sm='12' className=".me-1"><input className="form-check-input" type="radio" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /> Online</Col>
                                        </Col>
                                        <Col sm='5' className="p-3">
                                            <Col sm='6' className="p-0">Introductory Date<sup className='text-danger'> *</sup></Col>
                                            <Col sm='8' className="p-0"><Input className='rounded-0' type="date" placeholder="DD-MM-YYYY" /></Col>
                                        </Col>
                                    </Row>
                                </Col>
                                <Row>
                                    <Col sm='12' className="p-3"><b>Location</b></Col>
                                </Row>
                                <Row>
                                    <Col sm='3' className="p-3 small">
                                        <Col sm='12' className="p-0">Country <sup className='text-danger'> *</sup></Col>
                                        <Col sm='12' className="p-0">
                                            <Input className='rounded-0' type='select' placeholder="Country">
                                                <option>Select Country</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </Input>
                                        </Col>
                                    </Col>
                                    <Col sm='3' className="p-3 small">
                                        <Col sm='12' className="p-0">State <sup className='text-danger'> *</sup></Col>
                                        <Col sm='12' className="p-0">
                                            <Input className='rounded-0' type='select' placeholder="State">
                                                <option>Select State</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </Input>
                                        </Col>
                                    </Col>
                                    <Col sm='3' className="p-3 small">
                                        <Col sm='12' className="p-0">City</Col>
                                        <Col sm='12' className="p-0">
                                            <Input className='rounded-0' type='select' placeholder="City">
                                                <option>Select City</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </Input>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm='3' className="p-3 small">
                                        <Col sm='12' className="p-0">District</Col>
                                        <Col sm='12' className="p-0">
                                            <Input className='rounded-0' type='select' placeholder="District">
                                                <option>Select District</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </Input>
                                        </Col>
                                    </Col>
                                    <Col sm='3' className="p-3 small">
                                        <Col sm='12' className="p-0">Taluka</Col>
                                        <Col sm='12' className="p-0">
                                            <Input className='rounded-0' type='select' placeholder="Taluka">
                                                <option>Select Taluka</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </Input>
                                        </Col>
                                    </Col>
                                    <Col sm='3' className="p-3 small">
                                        <Col sm='12' className="p-0">Pin/Zip Code <sup className='text-danger'> *</sup></Col>
                                        <Col sm='12' className="p-0">
                                            <Input className='rounded-0' type='select' placeholder="Pincode">
                                                <option>Select Pincode</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </Input>
                                        </Col>
                                    </Col>
                                </Row>
                                <Col sm='12'>
                                    <Row>
                                        <Col sm='3'>&nbsp;</Col>
                                        <Col sm='3' className="text-end"><Button>Cancel</Button></Col>
                                        <Col sm='3' className="text-start"><Button>Save</Button></Col>
                                        <Col sm='3'>&nbsp;</Col>
                                    </Row>
                                </Col>
                                &nbsp;
                            </Card>
                        </Col>
                    </Modal.Body>
                </Modal>
            </Col>
            <Col sm="12">
                <MobileProfileSideBar/>
            </Col>
        </>
    )
}

export default M21Organization