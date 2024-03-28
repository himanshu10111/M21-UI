import React from 'react'
import { Button, Card, CardHeader, Col, Form, Input, Row } from 'reactstrap'
import PopUp from '../../../component/header/PopUp/PopUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const IntroductoryDetails = ({ nextStep, prevStep }) => {
    const SubmitForm = (e) => {
        e.preventDefault();

        nextStep();
    }
    return (
        <Col lg="12">
            <Form onSubmit={SubmitForm}>
                <Col className='m-3'><PopUp /></Col>
                <Col className='m-3 p-2'><h5> Introductory Details</h5></Col>
                <Col className='m-3'>
                    <Col lg="12">
                        <Row>
                            <Col lg="4">
                                <Col lg="12" className='p-2'>Introductory type <sup className='text-danger'>*</sup></Col>
                                <Col lg="12" className='p-2'>
                                    <Input type='select' className='rounded-0 text-muted'>
                                        <option >choose your option</option>
                                    </Input>
                                </Col>
                            </Col>
                            <Col lg="8">
                                <Card className='border-0 '>
                                    <CardHeader className='border-0'>
                                        {/* <Col lg="12">Online Introductory</Col> */}
                                        <Col>
                                            <sub>
                                                Online Introductory<br />
                                                Online introductory is video conference meeting,
                                                that requires good internet connection and zoom
                                                app on mobile or laptop. Online introductory is
                                                for 3 hours. Participant is expected to attend complete session.
                                            </sub>
                                        </Col>
                                    </CardHeader>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Col>
                <Col className='m-3'>
                    <Row>
                        <Col>
                            <Col className='p-2'>M21 Wing <sup className='text-danger'>*</sup></Col>
                            <Col className='p-2'>
                                <Input type='select' className='rounded-0 text-muted '>
                                    <option>choose your option</option>
                                </Input>
                            </Col>
                        </Col>
                        <Col>
                            <Col className='p-2'>Special introductory drive <FontAwesomeIcon icon={faCircleInfo} /></Col>
                            <Col className='p-2'>
                                <Input type='select' className='rounded-0 text-muted '>
                                    <option>none</option>
                                </Input>
                            </Col>
                        </Col>
                        <Col>
                            <Col className='p-2'>Preferred language by guest <sup className='text-danger'>*</sup></Col>
                            <Col className='p-2'>
                                <Input type='select' className='rounded-0 text-muted'>
                                    <option>none</option>
                                </Input>
                            </Col>
                        </Col>
                    </Row>
                </Col>
                <Col className='m-3'>
                    <Col className='p-2'>Upcoming introductory <sup className='text-danger'>*</sup></Col>
                    <Col lg="5" className='p-2'>
                        <Input type='select' className='rounded-0 text-muted'>
                            <option >None</option>
                        </Input>
                    </Col>
                </Col>
                <Col className='m-3'>
                    <Col className='p-2'>Comments</Col>
                    <Col lg="7" className='p-2'>
                        <Input type='textarea' placeholder='text here'/>
                    </Col>
                </Col>
                <Col>
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

export default IntroductoryDetails