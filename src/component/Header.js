import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { CardBody, CardHeader, Input } from 'reactstrap'

export const Header = () => {
    return (
        <div className='header'>
            <Col lg="12">
                <Card className='border-0 rounded-0'>
                    <CardHeader lg="12" className='pt-4 pb-1 border-0' >
                        <Col lg="12" className='p-0 ps-5 pb-2'><h5><b>Register yourself to Introductory Application</b></h5></Col>
                        <Col lg="12" className='p-0'>
                            <Col className='d-flex pb-3'>
                                <Col lg="2" className='p-0'>
                                    <Row>
                                        <Col lg="1" className='p-0'><Input type="radio" /></Col>
                                        <Col className='fs-6'>Basic details</Col>
                                    </Row>
                                </Col>
                                <Col lg="2" className=''>
                                    <Row>
                                        <Col lg="1" ><Input type="radio" /></Col>
                                        <Col className='fs-6 '>Address details</Col>
                                    </Row>
                                </Col>
                                <Col lg="3" className='p-0'>
                                    <Row>
                                        <Col lg="1" className=''><Input type="radio" /></Col>
                                        <Col className='fs-6'>Organization mapping</Col>
                                    </Row>
                                </Col>
                                <Col lg="3" className='p-0'>
                                    <Row>
                                        <Col lg="1" className='p-0'><Input type="radio" /></Col>
                                        <Col className='fs-6'>Additional details</Col>
                                    </Row>
                                </Col>
                                <Col lg="2" className='p-0'>
                                    <Row>
                                        <Col lg="1" className='p-0'><Input type="radio" /></Col>
                                        <Col className='fs-6'>Set password</Col>
                                    </Row>
                                </Col>
                            </Col>
                        </Col>
                    </CardHeader>
                </Card>
            </Col>
        </div>
    )
}
