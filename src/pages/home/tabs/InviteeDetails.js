import React from 'react'
import { Button, Col, Form, Input, Row } from 'reactstrap'
import PopUp from '../../../component/header/PopUp/PopUp'
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';

const InviteeDetails = ({ nextStep, prevStep }) => {
    const SubmitForm = (e) => {
        e.preventDefault();

        nextStep();
    }
    return (
        <Col lg="12" className='small'>
            <Form onSubmit={SubmitForm}>
                <Col className='m-3'><PopUp /></Col>
                <Col className='m-3 p-2'><h5>New nomination details</h5></Col>
                <Col className='m-3'>
                    <Col lg="12">
                        <Row>
                            <Col lg="2">
                                <Col lg="12" className='p-2'>Title <sup className='text-danger'>*</sup></Col>
                                <Col lg="12" className='p-2'>
                                    <Input type='select' className='rounded-0'>
                                        <option>Mr</option>
                                        <option>Mrs</option>
                                    </Input>
                                </Col>
                            </Col>
                            <Col lg="4">
                                <Col lg="12" className='p-2'>First Name <sup className='text-danger'>*</sup></Col>
                                <Col lg="12" className='p-2'>
                                    <Input type='text' placeholder='Enter first name here' className='rounded-0' required />
                                </Col>
                            </Col>
                            <Col lg="4">
                                <Col lg="12" className='p-2'>Last Name</Col>
                                <Col lg="12" className='p-2'>
                                    <Input type='text' placeholder='Enter last name here' className='rounded-0'required />
                                </Col>
                            </Col>
                        </Row>
                    </Col>
                </Col>
                <Col className='m-3'>
                    <Col lg="12" className='p-2'>My mobile number  <sup className='text-danger'>*</sup></Col>
                    <Col lg="4" className='p-2'>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                id="basic-addon1"
                                className="p-0 rounded-0"
                            >
                                <Dropdown className="p-0">
                                    <Dropdown.Toggle
                                        variant=""
                                        id="dropdown-basic"
                                        className="p-1"
                                    >
                                        +91
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="col-sm-1">
                                        <Dropdown.Item href="#/action-1" className="col-sm-1"  >
                                            01
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className="col-sm-1" >
                                            02
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="col-sm-1">
                                            03
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </InputGroup.Text>
                            <Input type='number' placeholder='Enter your mobile number' className='rounded-0' required />
                        </InputGroup>
                        <Col lg='12'>
                            <Row>
                                <Col lg='1'>
                                    <Input type="checkbox"></Input>
                                </Col>
                                <Col>
                                    <small>Whatsap number too.</small>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                </Col>
                <Col className='m-3'>
                    <Col lg="12">
                        <Row>
                            <Col lg="5">
                                <Col lg="10" className='p-2'>My email id</Col>
                                <Col lg="10" className='p-2'>
                                    <Input type='emali' placeholder='Enter your emial id here' className='rounded-0' required />
                                </Col>
                            </Col>
                            <Col lg="5">
                                <Col lg="10" className='p-2'>Alternate email id</Col>
                                <Col lg="10" className='p-2'>
                                    <Input type='email' placeholder='Enter your emial id here' className='rounded-0' required/>
                                </Col>
                            </Col>
                        </Row>
                    </Col>
                </Col>
                <Col className='m-3 pt-5'>
                    <Col lg="12" className='m-3'>
                        <Row>
                            <Col lg="8"><Button color='primary' onClick={prevStep}>Previous</Button></Col>
                            <Col><Button outline color="secondary">Cancel</Button></Col>
                            <Col><Button color='primary'>Next</Button></Col>
                        </Row>
                    </Col>
                </Col>
            </Form>
        </Col>
    )
}

export default InviteeDetails