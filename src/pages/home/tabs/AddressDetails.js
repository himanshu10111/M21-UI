import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Row } from 'reactstrap'
import { Form } from 'react-bootstrap'
import { Header } from '../../../component/header/Header'
import PopUp from '../../../component/header/PopUp/PopUp'

const AddressDetails = ({ nextStep, prevStep }) => {
    const SubmitForm = (e) => {
        e.preventDefault();

        nextStep();
    }
    return (
        <Col lang='12' className='small'>
            <Form onSubmit={SubmitForm}>
                <Col className='m-3'><PopUp /></Col>
                <Col className='m-3'><h5>Address Details</h5></Col>
                <Col className='m-3'>
                    <Card className='bg-light'>
                        <CardBody>
                            <Col>
                                <Col>Present Address</Col>
                                <Col>
                                    <Col lg="12">
                                        <Row>
                                            <Col>
                                                <Col className='p-2'>House/Flat No./Building</Col>
                                                <Col>
                                                    <Input className='rounded-0' type='text'
                                                        placeholder='enter house/flat/building no'
                                                    />
                                                </Col>
                                            </Col>
                                            <Col>
                                                <Col className='p-2'>Stree details</Col>
                                                <Col>
                                                    <Input className='rounded-0'
                                                        placeholder='enter streat details'
                                                        type='text' />
                                                </Col>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Col>
                            </Col>
                            <Col>
                                <Col lg="12">
                                    <Row>
                                        <Col>
                                            <Col className='p-2'>country <sup className='text-danger'>*</sup></Col>
                                            <Col>
                                                <Input className='rounded-0'
                                                    placeholder='country'
                                                    type='select'>
                                                    <option >Select your option</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </Input>
                                            </Col>
                                        </Col>
                                        <Col>
                                            <Col className='p-2'>State <sup className='text-danger'>*</sup></Col>
                                            <Col>
                                                <Input className='rounded-0'
                                                    placeholder='state'
                                                    type='select'>
                                                    <option >Select your option</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </Input>
                                            </Col>
                                        </Col>
                                        <Col>
                                            <Col className='p-2'>City <sup className='text-danger'>*</sup></Col>
                                            <Col>
                                                <Input className='rounded-0'
                                                    placeholder='city'
                                                    type='select'>
                                                    <option >Select your option</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </Input>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>
                            </Col>
                            <Col>
                                <Col lg="12">
                                    <Row>
                                        <Col>
                                            <Col className='p-2'>District <sup className='text-danger'>*</sup></Col>
                                            <Col>
                                                <Input className='rounded-0'
                                                    placeholder='District'
                                                    type='select'>
                                                    <option >Select your option</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </Input>

                                            </Col>
                                        </Col>
                                        <Col>
                                            <Col className='p-2'>Taluka</Col>
                                            <Col>
                                                <Input className='rounded-0'
                                                    placeholder='Taluka'
                                                    type='select' >
                                                    <option >Select your option</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </Input>
                                            </Col>
                                        </Col>
                                        <Col>
                                            <Col className='p-2'>Pin/Zip Code</Col>
                                            <Col>
                                                <Input className='rounded-0'
                                                    placeholder='Pin/Zip Code'
                                                    type='text' />
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>
                            </Col>
                        </CardBody>
                    </Card>
                </Col>
                <Col className='m-3'>
                    <Card className='bg-light'>
                        <CardBody>
                            <Col>Permenent address</Col>
                            <Col>
                                <Col lg="12" className='d-flex'>
                                    <Col className='float-end p-1'><Input type='checkbox' /></Col>
                                    <Col lg="12" className='p-1'>Same as permanent address</Col>
                                </Col>
                            </Col>
                        </CardBody>
                    </Card>
                </Col>
                <Col className='m-3'>
                    <Col lg="12">
                        <Row>
                            <Col lg="8"><Button  color='primary' onClick={prevStep}>Previous</Button></Col>
                            <Col ><Button outline color="secondary" >Cancel</Button></Col>
                            <Col ><Button color='primary'>Next</Button></Col>
                        </Row>
                    </Col>
                </Col>
            </Form>
        </Col>

    )
}
export default AddressDetails;
