import React, { useState } from 'react'
import { Button, Modal, Card, Col, Form } from 'react-bootstrap';
import { Input, Row, CardBody } from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { InputGroup } from 'react-bootstrap';
const PersonalDetails = () => {
    const [lgShowEdit1, setLgShowEdit1] = useState(false);
    const [lgShowEdit2, setLgShowEdit2] = useState(false);
    const [lgShowEdit3, setLgShowEdit3] = useState(false);
    const [lgShowEdit4, setLgShowEdit4] = useState(false);
    const [lgShowEdit5, setLgShowEdit5] = useState(false);
    const [lgShowEdit6, setLgShowEdit6] = useState(false);
    const [lgShowEdit7, setLgShowEdit7] = useState(false);

    return (
        <>
            <Col sm="12" className='small'>
                <Form>
                    <Card className='border-0'>
                        <CardBody>
                            <Col className='p-3'>
                                <h5>Personal Details</h5>
                            </Col>
                            <Col sm='12' className="border-bottom p-0">
                                <Row>
                                    <Col sm="11" className=' figure-caption form-text'>Name</Col>
                                    <Col className='float-end text-primary p-0 '
                                        sm="1"
                                        role="button"
                                        onClick={() => setLgShowEdit1(true)}
                                    ><small>Edit</small>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className='bg-light form-text fs-6'>
                                <Row className='p-4 '>
                                    <Col sm='12'>
                                        <b>Mr.Praful Bhagat</b>
                                    </Col>
                                </Row>
                            </Col>
                            &nbsp;
                            <Col sm='12' className="p-2 border-bottom p-0">
                                <Row>
                                    <Col sm="11" >
                                        <small>Contact Details</small>
                                    </Col>
                                    <Col className='float-end text-primary'
                                        sm="1"
                                        role="button"
                                        onClick={() => setLgShowEdit2(true)}
                                    ><small>Edit</small>
                                    </Col>
                                </Row>
                                <Col sm='12' className='p-2'>
                                    <Row>
                                        <Col sm='4'><small>Mobile Number</small></Col>
                                        <Col sm='4'><small>Email</small></Col>
                                        <Col sm='4'></Col>
                                    </Row>
                                </Col>
                                <Col sm='12' className='p-2 '>
                                    <Row>
                                        <Col sm='4'>
                                            <b>+91 9586984526</b> &nbsp;
                                            <sub>Primary</sub><br />
                                            <Input type='checkbox' /> <small className='text-start ps-0 pt-1 pb-1'>  whatsapp number too</small>

                                        </Col>
                                        <Col sm='4'>
                                            <b>prafullbhagat@gmail.com</b> <br />
                                            <b>prafullbhagat@gmail.com</b>
                                        </Col>
                                        <Col sm='4'>
                                            <sub>Primary   </sub><br />
                                            <sub>alternate</sub>
                                        </Col>
                                    </Row>
                                </Col>
                            </Col>
                            &nbsp;
                            <Col sm='12'>
                                <Row className=' border-bottom p-0' >
                                    <Col sm='11'>
                                        <h6>Address Details</h6>
                                    </Col>
                                    <Col className=' float-end text-primary'
                                        sm="1"
                                        role="button"
                                        onClick={() => setLgShowEdit3(true)}
                                    ><small>Edit</small></Col>
                                </Row>
                            </Col>
                            <Col sm='12' className='p-2'>
                                <Row>
                                    <Col sm='4'>Present Address</Col>
                                    <Col sm='4'>Permanant Address</Col>
                                    <Col sm='4'></Col>
                                </Row>
                            </Col>
                            <Col sm='12' className='p-2'>
                                <Row>
                                    <Col sm='4'>
                                        <b>
                                            Flat no. 1891<br />
                                            Bharat Bhavan<br />
                                            Near Victory Tower<br />
                                            14 Main Road, 02nd Sector,<br />
                                            Vijay Nagar, Bangalore, Karnataka<br />
                                            560100 <br />
                                        </b>
                                    </Col>
                                    <Col sm='4'>
                                        <b>
                                            Flat no. 1891<br />
                                            Bharat Bhavan<br />
                                            Near Victory Tower<br />
                                            14 Main Road, 02nd Sector,<br />
                                            Vijay Nagar, Bangalore, Karnataka<br />
                                            560100<br />
                                        </b>
                                    </Col>
                                    <Col sm='4'></Col>
                                </Row>
                            </Col>
                            &nbsp;
                            <Col>
                                <Row>
                                    <Col sm='11 ' className='border-bottom p-2'>
                                        <h6>Additional Details</h6>
                                    </Col>
                                    <Col className='float-end text-primary'
                                        sm="1"
                                        role="button"
                                        onClick={() => setLgShowEdit4(true)}
                                    ><small>Edit</small></Col>
                                </Row>
                            </Col>
                            <Col sm='12' className='p-0'>
                                <Row>
                                    <Col sm='4'>Gender</Col>
                                    <Col sm='4'>Date of Birth</Col>
                                    <Col sm='4'></Col>
                                </Row>
                            </Col>
                            <Col sm='12' className='p-1'>
                                <Row>
                                    <Col sm='4'>
                                        <b>Male</b>
                                    </Col>
                                    <Col sm='4'>
                                        <b>DD-MM-YYYY</b>
                                    </Col>
                                    <Col sm='4'></Col>
                                </Row>
                            </Col>
                            &nbsp;
                            <Col>
                                <Row>
                                    <Col sm='11' className='border-bottom p-0'>
                                        <h6>Educational Details</h6>
                                    </Col>
                                    <Col className='float-end text-primary'
                                        sm="1"
                                        role="button"
                                        onClick={() => setLgShowEdit5(true)}
                                    ><small>Edit</small></Col>
                                    <Col sm="1">&nbsp;</Col>
                                    <Col sm="1" className="p-0"></Col>
                                </Row>
                                <input className="p-0 form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                <label className="p-0 form-check-label" for="flexCheckChecked"></label><b>I am Student</b>
                            </Col>
                            <Col className='p-0'>
                                <Row className='p-2'>
                                    <Col>Educational Level</Col>
                                    <Col>School/Board/Education</Col>
                                </Row>
                            </Col>
                            <Col className='p-2'>
                                <Row>
                                    <Col> <b>10th</b> </Col>
                                    <Col><b>Milind Higher Secondary School, Nagpur, Maharashtra</b></Col>
                                </Row>
                                <Row>
                                    <Col> <b>12th</b> </Col>
                                    <Col><b>Milind Higher Secondary School, Nagpur, Maharashtra</b></Col>
                                </Row>
                                <Row>
                                    <Col> <b>B. E. (Mechanical)</b> </Col>
                                    <Col><b>NIT, Nagpur, Maharashtra</b></Col>
                                </Row>
                                <Row>
                                    <Col> <b>MBA (Finance)</b> </Col>
                                    <Col><b>Milind University, Nagpur, Maharashtra</b></Col>
                                </Row>
                                <Row>
                                    <Col> <b>PhD (Finance)</b> </Col>
                                    <Col><b>Milind University, Nagpur, Maharashtra</b></Col>
                                </Row>
                            </Col>
                            &nbsp;
                            <Col>
                                <Row className='p-0 border-bottom'>
                                    <Col sm='11'>
                                        <h6>Job Details</h6>
                                    </Col>
                                    <Col className='p-1 float-end text-primary small'
                                        sm="1"
                                        role="button"
                                        onClick={() => setLgShowEdit6(true)}
                                    >Edit</Col>
                                    <Col sm="1">&nbsp;</Col>
                                    <Col sm="1" className="p-0"></Col>
                                </Row>
                            </Col>
                            <Col className='p-2'>
                                <Row>
                                    <Col><small>Occupation</small></Col>
                                    <Col><small>Company/Business Name</small></Col>
                                    <Col><small>Designation</small></Col>
                                </Row>
                            </Col>
                            <Col className='p-2'>
                                <Row>
                                    <Col><small> <b>Service</b> </small></Col>
                                    <Col><small>Informatica Business Solutions Private Limited</small></Col>
                                    <Col><small>Senior Software Engineer</small></Col>
                                </Row>
                                <Row>
                                    <Col> <small><b>Business</b></small> </Col>
                                    <Col><small>Bharat Supermarket</small></Col>
                                    <Col><small>Owner</small></Col>
                                </Row>
                                <Row>
                                    <Col> <small><b>Freelancer</b></small> </Col>
                                    <Col><small>Optimizer extensions</small></Col>
                                    <Col><small>Developer</small></Col>
                                </Row>
                                &nbsp;
                                <Row className='p-2 small'>
                                    <Col> Area of work </Col>
                                </Row>
                                <Row>
                                    <Col className='small'><b>Homemaker</b></Col>
                                    <Col className='small'>
                                        “Homemaking is a passion you can pass on from generation to generation.”<br /> ― Elizabeth George
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='p-2 small'>
                                        <Row >
                                            <Col sm='11' className='border-bottom'>
                                                <h6>Diversity Details</h6>
                                            </Col>
                                            <Col className='float-end text-primary'
                                                sm="1"
                                                role="button"
                                                onClick={() => setLgShowEdit7(true)}
                                            >Edit</Col>
                                            <Col sm="1">&nbsp;</Col>
                                            <Col sm="1" className="p-0"></Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>Social Category</Col>
                                    <Col>Religion practiced</Col>
                                </Row>
                                <Row>
                                    <Col><b>Other Bahujan</b></Col>
                                    <Col><b>Atheist</b></Col>
                                </Row>
                            </Col>
                        </CardBody>
                    </Card>
                </Form>
            </Col>
            <Col sm="12" className='small'>
                <Modal
                    size="lg"
                    show={lgShowEdit1}
                    onHide={() => setLgShowEdit1(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Body >
                        <Col className="p-2">
                            <Card className="bg-light small">
                                <Modal.Header closeButton >
                                    <Modal.Title id="example-modal-sizes-title-lg bg-light">
                                        Name
                                    </Modal.Title>
                                </Modal.Header>
                                <Col sm='12' className="p-1">
                                    <Row>
                                        <Col sm='4' className="p-3">
                                            <Col sm='12' className='p-2'>
                                                <Col sm='12' className="p-0">Title<sup className='text-danger'> *</sup></Col>
                                                <Col sm='12' className='p-0'> <Input className='rounded-0' type='select' placeholder="Mr." /></Col>
                                            </Col>
                                            {/* <Col lg="2" className='p-0 ps-2'>

                                                <Col xs='12' className='p-2 pt-1 pb-1'>
                                                    <Col>
                                                        <small>Title</small>
                                                        <sup className='text-danger'> *</sup>
                                                    </Col>
                                                </Col>
                                                <Col lg="12" className="rounded-0">
                                                    <Input
                                                        name="iAm"
                                                        type="select"
                                                        defaultValue={values.iAm}
                                                        onChange={handleFormData("iAm")}
                                                        className="rounded-0"
                                                    >
                                                        <option>Mr</option>
                                                        <option>Mrs</option>
                                                    </Input>
                                                </Col>
                                            </Col> */}
                                            <Col sm='12' className="p-0">
                                            </Col>
                                        </Col>
                                        <Col sm='4' className="p-3">
                                            <Col sm='12' className='p-2'>
                                                <Col sm='12' className="p-0 small">First Name<sup className='text-danger'> *</sup></Col>
                                                <Col sm='12' className="p-0"><Input className='rounded-0' placeholder="First Name" /></Col>
                                            </Col>
                                        </Col>
                                        <Col sm='4' className="p-3">
                                            <Col sm='12' className="p-0">Last Name<sup className='text-danger'> *</sup></Col>
                                            <Col sm='12' className="p-0"><Input className='rounded-0' placeholder="Last Name" /></Col>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm='12' className='p-0'>
                                    <Row>
                                        <Col sm='3'>&nbsp;</Col>
                                        <Col sm='3' className="text-end"><Button>Cancel</Button></Col>
                                        <Col sm='3' className="text-start"><Button>Save</Button></Col>
                                        <Col sm='3'>&nbsp;</Col>
                                        &nbsp;
                                    </Row>
                                </Col>
                            </Card>
                        </Col>
                    </Modal.Body>
                </Modal>
            </Col>
            <Col>
                <Modal
                    size="lg"
                    show={lgShowEdit2}
                    onHide={() => setLgShowEdit2(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Body>
                        <Col className="p-2">
                            <Card className="bg-light small">
                                <Modal.Header closeButton >
                                    <Modal.Title id="example-modal-sizes-title-lg">
                                        <small>Contact Details</small>
                                    </Modal.Title>
                                </Modal.Header>
                                <Col sm='12' className="p-2">
                                    <Row>
                                        <Col sm='6' className="p-2">
                                            <Col sm='12'>
                                                <Row>
                                                    <Col sm='9' className='m-0 small'>My mobile number <sup className='text-danger'> *</sup></Col>
                                                    <Col sm='3' className='m-0 small'><small>Primary</small></Col>
                                                </Row>
                                                <Col sm='11' className="m-0 small">
                                                    <InputGroup className="mb-0">
                                                        <DropdownButton
                                                            type="number"
                                                            variant="outline-dark"
                                                            title="+91"
                                                            id="input-group-dropdown-1"
                                                        >
                                                            <Dropdown.Item href="#">+92</Dropdown.Item>
                                                            <Dropdown.Item href="#">+93</Dropdown.Item>
                                                            <Dropdown.Item href="#">+94</Dropdown.Item>
                                                            <Dropdown.Item href="#">+95</Dropdown.Item>
                                                        </DropdownButton>
                                                        <Form.Control aria-label=" "
                                                            placeholder='Enter your mobile number'
                                                            className='rounded-0'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col sm='12' className='m-0'>
                                                    <Input type='checkbox' /> <small className='text-start'>  whatsapp number too</small>
                                                </Col>
                                                &nbsp;
                                            </Col>
                                            &nbsp;
                                            <Col sm='12' className='p-0'>
                                                <Row>
                                                    <Col sm='9' className='m-0 small'>My mobile number <sup className='text-danger'> *</sup></Col>
                                                    <Col sm='3' className='m-0 small'><small>Alternate</small></Col>
                                                </Row>
                                                <Col sm='11' className="m-0 small">
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                                                        <Form.Control
                                                            className='rounded-0'
                                                            placeholder="9876543210"
                                                            aria-label="Username"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </InputGroup></Col>
                                            </Col>
                                        </Col>
                                        <Col sm='6' className='p-2'>
                                            <Col sm='12'>
                                                <Row>
                                                    <Col sm='10' className='m-0 small'>My email ID<sup className='text-danger'> *</sup></Col>
                                                    <Col sm='2' className='m-0 small'><small>Primary</small></Col>
                                                </Row>
                                                <Col sm='12' className="m-0 small"><Input className='rounded-0' placeholder="Enter your email id here" /></Col>
                                                &nbsp;
                                            </Col>
                                            &nbsp;
                                            <Col sm='12'>
                                                &nbsp;
                                                <Row>
                                                    <Col sm='10' className='m-0 small'>My alternate Email ID</Col>
                                                    <Col sm='2' className='m-0 small'><small>Primary</small></Col>
                                                </Row>
                                                <Col sm='12' className="m-0 small"><Input className='rounded-0' placeholder="Enter your email id here" /></Col>
                                                &nbsp;
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>
                                {/* <Col sm='12' className='p-0'>
                                    <Row>
                                        <Col sm='6' className="p-3">
                                            <Col sm='12'>
                                                <Row>
                                                    <Col sm='9' className='m-0 small'>Email ID <sup className='text-danger'> *</sup></Col>
                                                    <Col sm='3' className='m-0'><small>Primary</small></Col>
                                                </Row>
                                                <Col sm='12' className="m-0 small"><Input className='rounded-0' placeholder="Enter your email id here" /></Col>
                                                &nbsp;
                                            </Col>
                                            &nbsp;
                                            <Col sm='12'>
                                                <Row>
                                                    <Col sm='9' className='m-0'>My alternate email ID</Col>
                                                    <Col sm='3' className='m-0'><small>Alternate</small></Col>
                                                </Row>
                                                <Col sm='12' className="m-0 small"><Input className='rounded-0' placeholder="Enter your email id here" /></Col>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col> */}
                                <Col sm='12'>
                                    <Row>
                                        <Col sm='3'>&nbsp;</Col>
                                        <Col sm='3' className="text-end"><Button>Cancel</Button></Col>
                                        <Col sm='3' className="text-start"><Button>Save</Button></Col>
                                        <Col sm='3'>&nbsp;</Col>
                                        &nbsp;
                                    </Row>
                                </Col>
                            </Card>
                        </Col >
                    </Modal.Body >
                </Modal >
            </Col >
            <Col>
                <Modal
                    size="lg"
                    show={lgShowEdit3}
                    onHide={() => setLgShowEdit3(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >

                    <Modal.Body>
                        <Col className="p-2">
                            <Card className="bg-light">
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-lg">
                                        Address Details
                                    </Modal.Title>
                                </Modal.Header>
                                <Col sm='12' className="p-2 small">
                                    <Row>
                                        <Col sm='6' className="p-2">
                                            <Col sm='12' className=" m-0"><b>Present Address</b></Col>&nbsp;
                                            <Col sm='12'>House/Flat No./Building <sup className='text-danger'> *</sup></Col>
                                            <Col sm='11' className=" m-0"><Input className='rounded-0' placeholder="House/Flat No./Building" /></Col>
                                            <Col sm='12'>Street Details <sup className='text-danger'> *</sup></Col>
                                            <Col sm='11' className="m-0"><Input className='rounded-0' placeholder="Street Details" /></Col>
                                            <Col sm='12'>Landmark <sup className='text-danger'> *</sup></Col>
                                            <Col sm='11' className="m-0"><Input className='rounded-0' placeholder="Landmark" /></Col>
                                            <Col sm='12'>
                                                <Row>
                                                    <Col sm='6'>
                                                        <Col sm='12'>Country <sup className='text-danger'> *</sup></Col>
                                                        <Col sm='10' className="m-0">
                                                            <Input className='rounded-0 small' type='select' placeholder="Country">
                                                                <option className='small'>Select Country</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                            </Input>
                                                        </Col>
                                                        <Col sm='12'>City <sup className='text-danger'> *</sup></Col>
                                                        <Col sm='10' className="m-0">
                                                            <Input className='rounded-0' type='select' placeholder="City">
                                                                <option>Select City</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                            </Input>
                                                        </Col>
                                                        <Col sm='12'>Taluka <sup className='text-danger'> *</sup></Col>
                                                        <Col sm='10' className="m-0">
                                                            <Input className='rounded-0' type='select' placeholder="Taluka">
                                                                <option>Select Taluka</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                            </Input>
                                                        </Col>
                                                    </Col>
                                                    <Col sm='6'>
                                                        <Col sm='12'>State <sup className='text-danger'> *</sup></Col>
                                                        <Col sm='10' className="m-0">
                                                            <Input className='rounded-0' type='select' placeholder="State">
                                                                <option>Select State</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                            </Input>
                                                        </Col>
                                                        <Col sm='12'>District <sup className='text-danger'> *</sup></Col>
                                                        <Col sm='10' className="m-0">
                                                            <Input className='rounded-0' type='select' placeholder="City">
                                                                <option>Select City</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                            </Input>
                                                        </Col>
                                                        <Col sm='12'>Pin/Zip Code <sup className='text-danger'> *</sup></Col>
                                                        <Col sm='9' className="m-0">
                                                            <Input className='rounded-0' type='select' placeholder="Pincode">
                                                                <option>Select Pincode</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                            </Input>
                                                        </Col>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Col>
                                        <Col sm='6' className="p-0">
                                            <Col sm='12' className="m-3"><b>Present Address</b></Col>&nbsp;
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label" for="defaultCheck1">&nbsp;
                                                <b>Same as Present Address</b>
                                            </label>&nbsp;
                                            <Col sm='11' className="m-0"><Input className='rounded-0' placeholder="House/Flat No./Building" /></Col>
                                            <Col sm='12'>Street Details <sup className='text-danger'> *</sup></Col>
                                            <Col sm='11' className="m-0"><Input className='rounded-0' placeholder="Street Details" /></Col>
                                            <Col sm='12'>Landmark <sup className='text-danger'> *</sup></Col>
                                            <Col sm='11' className="m-0"><Input className='rounded-0' placeholder="Street Details" /></Col>
                                            <Col sm='12'>
                                                <Row>
                                                    <Col sm='6'>
                                                        <Col sm='12'>Country <sup className='text-danger'> *</sup></Col>
                                                        <Col sm='10' className="m-0">
                                                            <Input className='rounded-0 small' type='select' placeholder="Country">
                                                                <option>Select Country</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                            </Input>
                                                        </Col>
                                                        <Col sm='12'>City <sup className='text-danger'> *</sup></Col>
                                                        <Col sm='10' className="m-0">
                                                            <Input className='rounded-0' type='select' placeholder="City">
                                                                <option>Select City</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                            </Input>
                                                        </Col>
                                                        <Col sm='12'>Taluka <sup className='text-danger'> *</sup></Col>
                                                        <Col sm='10' className="m-0">
                                                            <Input className='rounded-0' type='select' placeholder="Taluka">
                                                                <option>Select Taluka</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                            </Input>
                                                        </Col>
                                                    </Col>
                                                    <Col sm='6'>
                                                        <Col sm='12'>State <sup className='text-danger'> *</sup></Col>
                                                        <Col sm='10' className="m-0">
                                                            <Input className='rounded-0' type='select' placeholder="State">
                                                                <option>Select State</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                            </Input>
                                                        </Col>
                                                        <Col sm='12'>District <sup className='text-danger'> *</sup></Col>
                                                        <Col sm='10' className="m-0">
                                                            <Input className='rounded-0' type='select' placeholder="City">
                                                                <option>Select District</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                            </Input>
                                                        </Col>
                                                        <Col sm='12'>Pin/Zip Code <sup className='text-danger'> *</sup></Col>
                                                        <Col sm='9' className="m-0">
                                                            <Input className='rounded-0' type='select' placeholder="Pincode">
                                                                <option>Select Pincode</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                            </Input>
                                                        </Col>
                                                    </Col>
                                                </Row>
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
            <Col>
                <Modal
                    size="lg"
                    show={lgShowEdit4}
                    onHide={() => setLgShowEdit4(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >

                    <Modal.Body >
                        <Col sm="12" className="p-3 border-bottom">
                            <Col className="p-1">
                                <Card className="bg-light">
                                    <Modal.Header >
                                        <Modal.Title id="example-modal-sizes-title-lg">
                                            Additional Details
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Col sm='12' className="p-2">
                                        <Row>
                                            <Col sm='4' className="p-2">
                                                <Col sm='6' className="m-0 p-0">Gender<sup className='text-danger'> *</sup></Col>
                                                <Col sm='12' className="m-0 p-0">
                                                    <Input className='rounded-0' type='select' placeholder="Choose your option" >
                                                        <option>Choose your option</option>
                                                        <option>male</option>
                                                        <option>female</option>
                                                        <option>Other</option>
                                                    </Input>
                                                </Col>
                                            </Col>

                                            <Col sm='4' className="p-2">
                                                <Col sm='12' className="m-0">Date of Birth<sup className='text-danger'> *</sup></Col>
                                                <Col sm='12' className="m-0"><Input className='rounded-0' type='date' placeholder=" DD-MM-YYYY *" /></Col>
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
                        </Col>
                    </Modal.Body>
                </Modal>
            </Col>
            <Col>
                <Modal
                    size="lg"
                    show={lgShowEdit5}
                    onHide={() => setLgShowEdit5(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header className='bg-light' closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Educational Details
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bg-light">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" for="defaultCheck1">
                            <b> I am Student</b>
                        </label>
                        <Col className="p-2">
                            <Card className="bg-white rounded-0">
                                <Col sm='12' className="p-2" closeButton>
                                    <input className="form-check-input p-1" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" for="defaultCheck1">
                                        Currently Persuing
                                    </label>
                                    <Row>
                                        <Col sm='4' className="p-1">
                                            <Col sm='12' className="p-1">Education </Col>
                                            <Col sm='12' className="p-1">
                                                <Input className='rounded-0' type='select' placeholder="Education">
                                                    <option>Choose your option</option>
                                                    <option>B.A</option>
                                                    <option>B.Sc.</option>
                                                    <option>B.E.</option>
                                                    <option>B.Tech.</option>
                                                </Input>
                                            </Col>
                                        </Col>
                                        <Col sm='4' className="p-1">
                                            <Col sm='12' className="p-1">University/School/Board </Col>
                                            <Col sm='12' className="p-1"><Input className='rounded-0' placeholder="University/School/Board" /></Col>
                                        </Col>
                                        <Col sm='4' className="p-1">
                                            <Col sm='12' className="p-1">Year of passing </Col>
                                            <Col sm='12' className="p-1"><Input className='rounded-0' type='date' placeholder="DD-MM-YYYY" /></Col>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm='3' className="p-1">
                                            <Col sm='12' className="p-1">Country </Col>
                                            <Col sm='12' className="p-1">
                                                <Input className='rounded-0 small' type='select' placeholder="Country">
                                                    <option>Select Country</option>
                                                    <option>India</option>
                                                    <option>Nepal</option>
                                                    <option>Sri Lanka</option>
                                                </Input>
                                            </Col>
                                        </Col>
                                        <Col sm='3' className="p-1">
                                            <Col sm='12' className="p-1">State </Col>
                                            <Col sm='12' className="p-1">
                                                <Input className='rounded-0' type='select' placeholder="State">
                                                    <option>Select State</option>
                                                    <option>Maharashtra</option>
                                                    <option>Gujarat</option>
                                                    <option>Goa</option>
                                                    <option>Karnataka</option>
                                                </Input>
                                            </Col>
                                        </Col>
                                        <Col sm='3' className="p-1">
                                            <Col sm='12' className="p-1">City </Col>
                                            <Col sm='12' className="p-1">
                                                <Input className='rounded-0' type='select' placeholder="City">
                                                    <option>Select City</option>
                                                    <option>Pune</option>
                                                    <option>Nagpur</option>
                                                    <option>Mumbai</option>
                                                    <option>Nashik</option>
                                                </Input>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>
                            </Card>
                            &nbsp;
                            <Card className="bg-white rounded-0" closeButton>
                                <Col sm='12' className="p-2">
                                    <input className="form-check-input p-1" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" for="defaultCheck1">
                                        Currently Persuing
                                    </label>
                                    <Row>
                                        <Col sm='4' className="p-1">
                                            <Col sm='12' className="p-1">Education </Col>
                                            <Col sm='12' className="p-1">
                                                <Input className='rounded-0' type='select' placeholder="Education">
                                                    <option>Choose your option</option>
                                                    <option>B.A</option>
                                                    <option>B.Sc.</option>
                                                    <option>B.E.</option>
                                                    <option>B.Tech.</option>
                                                </Input>
                                            </Col>
                                        </Col>
                                        <Col sm='4' className="p-1">
                                            <Col sm='12' className="p-1">University/School/Board </Col>
                                            <Col sm='12' className="p-1"><Input className='rounded-0' placeholder="University/School/Board" /></Col>
                                        </Col>
                                        <Col sm='4' className="p-1">
                                            <Col sm='12' className="p-1">Year of passing </Col>
                                            <Col sm='12' className="p-1"><Input className='rounded-0' type='date' placeholder="DD-MM-YYYY" /></Col>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm='3' className="p-1">
                                            <Col sm='12' className="p-1">Country </Col>
                                            <Col sm='12' className="p-1">
                                                <Input className='rounded-0 small' type='select' placeholder="Country">
                                                    <option>Select Country</option>
                                                    <option>India</option>
                                                    <option>Nepal</option>
                                                    <option>Sri Lanka</option>
                                                </Input>
                                            </Col>
                                        </Col>
                                        <Col sm='3' className="p-1">
                                            <Col sm='12' className="p-1">State </Col>
                                            <Col sm='12' className="p-1">
                                                <Input className='rounded-0' type='select' placeholder="State">
                                                    <option>Select State</option>
                                                    <option>Maharashtra</option>
                                                    <option>Gujarat</option>
                                                    <option>Goa</option>
                                                    <option>Karnataka</option>
                                                </Input>
                                            </Col>
                                        </Col>
                                        <Col sm='3' className="p-1">
                                            <Col sm='12' className="p-1">City </Col>
                                            <Col sm='12' className="p-1">
                                                <Input className='rounded-0' type='select' placeholder="City">
                                                    <option>Select City</option>
                                                    <option>Pune</option>
                                                    <option>Nagpur</option>
                                                    <option>Mumbai</option>
                                                    <option>Nashik</option>
                                                </Input>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>
                            </Card>
                            &nbsp;
                            <Col sm='12'>
                                <Row>
                                    <Col sm='9'>&nbsp;</Col>
                                    <Col sm='3'><Button size='sm' type='' variant="outline-primary" className='float-end'>Add Education</Button>{' '}</Col>
                                </Row>
                                <Row>
                                    <Col sm='3'>&nbsp;</Col>
                                    <Col sm='3' className="text-end"><Button>Cancel</Button></Col>
                                    <Col sm='3' className="text-start"><Button>Save</Button></Col>
                                    <Col sm='3'>&nbsp;</Col>
                                </Row>
                            </Col>
                            &nbsp;
                        </Col>
                    </Modal.Body>
                </Modal>
            </Col>
            <Col>
                <Modal
                    size="lg"
                    show={lgShowEdit6}
                    onHide={() => setLgShowEdit6(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Body>
                        <Col sm="12" className="p-3 border-bottom">
                            <Col className="p-1">
                                <Card className="bg-light">
                                    <Modal.Header closeButton >
                                        <Modal.Title id="example-modal-sizes-title-lg">
                                            Job Details
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Col sm='12' className="p-2 small">
                                        <input className="form-check-input p-1" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" for="defaultCheck1">
                                            I am Homemaker
                                        </label>
                                        <Col sm='12' className='p-2 bg-white rounded-0 shadow-sm p-3 mb-5'>
                                            <Row>
                                                <Col sm='3' className="p-2 small">
                                                    <Col sm='12' className="m-0 p-0">Occupation<sup className='text-danger'> *</sup></Col>
                                                    <Col sm='12' className="m-0 p-0">
                                                        <Input className='rounded-0' type='select' placeholder="Occupation">
                                                            <option>Choose your option</option>
                                                            <option>Lawyer</option>
                                                            <option>Doctor</option>
                                                            <option>Engineer</option>
                                                            <option>Entrepreneur</option>
                                                        </Input>
                                                    </Col>
                                                </Col>
                                                <Col sm='5' className="p-2 small">
                                                    <Col sm='12' className="m-0">Company/Business name<sup className='text-danger'> *</sup></Col>
                                                    <Col sm='12' className="m-0"><Input className='rounded-0' placeholder="Enter company/busines name" /></Col>
                                                </Col>
                                                <Col sm='3' className="p-2 small">
                                                    <Col sm='12' className="m-0">Designation</Col>
                                                    <Col sm='12' className="m-0"><Input className='rounded-0' placeholder="Enter designation" /></Col>
                                                </Col>
                                            </Row>
                                            <Col sm='12' className='p-2 bg-white rounded-0'>
                                                <Row>
                                                    <Col sm='3' className="p-2">
                                                        <Col sm='12' className="m-0 p-0">Country</Col>
                                                        <Col sm='12' className="m-0 p-0">
                                                            <Input className='rounded-0 small' type='select' placeholder="Country">
                                                                <option>Select Country</option>
                                                                <option>India</option>
                                                                <option>Nepal</option>
                                                                <option>Sri Lanka</option>
                                                            </Input>
                                                        </Col>
                                                    </Col>
                                                    <Col sm='3' className="p-2">
                                                        <Col sm='12' className="m-0">State</Col>
                                                        <Col sm='12' className="m-0">
                                                            <Input className='rounded-0' type='select' placeholder="State">
                                                                <option>Select State</option>
                                                                <option>Maharashtra</option>
                                                                <option>Gujarat</option>
                                                                <option>Goa</option>
                                                                <option>Karnataka</option>
                                                            </Input>
                                                        </Col>
                                                    </Col>
                                                    <Col sm='3' className="p-2">
                                                        <Col sm='12' className="m-0">City</Col>
                                                        <Col sm='12' className="m-0">
                                                            <Input className='rounded-0' type='select' placeholder="City">
                                                                <option>Select City</option>
                                                                <option>Pune</option>
                                                                <option>Nagpur</option>
                                                                <option>Mumbai</option>
                                                                <option>Nashik</option>
                                                            </Input>
                                                        </Col>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Col>
                                        <Col sm='12'>
                                            <Row>
                                                <Col sm='9'></Col>
                                                <Col sm='3'><Button size='sm' type='' variant="outline-primary" className='float-end small'>Add Education</Button>{' '}</Col>
                                            </Row>
                                            <Row>
                                                <Col sm='3'>&nbsp;</Col>
                                                <Col sm='3' className="text-end"><Button>Cancel</Button></Col>
                                                <Col sm='3' className="text-start"><Button>Save</Button></Col>
                                                <Col sm='3'>&nbsp;</Col>
                                            </Row>
                                        </Col>
                                    </Col>
                                    &nbsp;
                                </Card>
                            </Col>
                        </Col>
                    </Modal.Body>
                </Modal>
            </Col>
            <Col>
                <Modal
                    size="lg"
                    show={lgShowEdit7}
                    onHide={() => setLgShowEdit7(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >

                    <Modal.Body>
                        <Col sm="12" className="p-3 border-bottom">
                            <Col className="p-1">
                                <Card className="bg-light">
                                    <Modal.Header closeButton>
                                        <Modal.Title id="example-modal-sizes-title-lg">
                                            Diversity Details
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Col sm='12' className="p-2">
                                        <Row>
                                            <Col sm='4' className="p-2">
                                                <Col sm='12' className="m-0 p-0 small">Social category<sup className='text-danger'> *</sup></Col>
                                                <Col sm='12' className="m-0 p-0">
                                                    <Input className='rounded-0' type='select' placeholder="Category">
                                                        <option className='small'>Choose Your Option</option>
                                                        <option>Primary Group</option>
                                                        <option>Secondary Group</option>
                                                        <option>In-Group</option>
                                                        <option>Out-Group</option>
                                                        <option>Formal Group</option>
                                                        <option>Informal Group</option>
                                                    </Input>
                                                </Col>
                                            </Col>
                                            <Col sm='4' className="p-2">
                                                <Col sm='12' className="m-0 small">Religion practiced<sup className='text-danger'> *</sup></Col>
                                                <Col sm='12' className="m-0">
                                                    <Input className='rounded-0' type='select' placeholder="Category">
                                                        <option className='small'>Choose Your Option</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>

                                                    </Input>
                                                </Col>
                                            </Col>
                                            <Col>&nbsp;</Col>
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
                        </Col>
                    </Modal.Body>
                </Modal>
            </Col>
        </>
    )
}

export default PersonalDetails