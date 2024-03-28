import React from 'react'
import { Card, CloseButton, Col, Container, InputGroup, Nav, NavItem, NavLink, Row } from 'react-bootstrap'
import { CardBody, CardHeader, Input } from 'reactstrap'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 501 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 500 })
    return isMobile ? children : null
}

export const Header = ({ stepSelected }) => {
    return (
        <>
            <div className='header shadow'>
                <Desktop>
                    {/* <Container> */}
                    <Col lg="12">
                        <Card className='border-0 rounded-0' >
                            <CardHeader lg="12" className='pt-4 pb-1 border-0' >
                                <Row>
                                    <Col lg="11" className='p-0 ps-5 pb-2 fw-normal'>
                                        <h3>
                                            Register yourself to Introductory Application
                                        </h3>
                                    </Col>
                                    <Col sm="1" className='text-end'>
                                        <Link to='/'>
                                        <CloseButton />
                                        </Link>
                                         
                                        </Col>
                                </Row>
                                <Nav className='p-2 ms-4' >
                                    <NavItem className='px-1' >
                                        <Input type='checkbox' className='rounded-5 box-shadow-0' checked={stepSelected >= 1} />
                                    </NavItem>
                                    <NavItem className='px-1 figure-caption'>Basic Item</NavItem>
                                    <NavItem className='px-1'><Input type={stepSelected == 2 ? 'radio' : 'checkbox'} className='rounded-5' disabled checked={stepSelected >= 2} /></NavItem>
                                    <NavItem className='px-1 figure-caption'>Address Detials</NavItem>
                                    <NavItem className='px-1'><Input type={stepSelected == 3 ? 'radio' : 'checkbox'} className='rounded-5' disabled checked={stepSelected >= 3} /></NavItem>
                                    <NavItem className='px-1 figure-caption'>Organization mapping</NavItem>
                                    <NavItem className='px-1'>
                                        <Input type={stepSelected == 4 ? 'radio' : 'checkbox'} className='rounded-5' disabled checked={stepSelected >= 4} />
                                    </NavItem>
                                    <NavItem className='px-1 figure-caption'>Additional details</NavItem>
                                    <NavItem className='px-1'><Input type={stepSelected == 5 ? 'radio' : 'checkbox'} className='rounded-5' disabled checked={stepSelected >= 5} /></NavItem>
                                    <NavItem className='px-1 figure-caption'>Set password</NavItem>
                                </Nav>

                            </CardHeader>
                        </Card>
                    </Col>
                    {/* </Container> */}
                </Desktop>
            </div>
            <div>
                <Mobile>
                    {/* <Container> */}
                    <Col lg="12">
                        <Card className='border-0 rounded-0' >
                            <CardHeader lg="12" className='pt-4 pb-1 border-0' >
                                <Col lg="12" className='d-flex'>
                                    
                                        <Col lg="11" className='p-0 float-start pb-2 fw-normal'>
                                            <h6> Register yourself to Introductory Application </h6>
                                        </Col>
                                        <Col sm="1" className='text-end '>
                                            <Link to='/'>
                                        <CloseButton />
                                        </Link></Col>
                                   
                                </Col>

                                <Col sm='12' className='Nav '>
                                    <Col sm='10'>
                                        <Row>
                                            <Col>
                                                <Col sm='2' className='NavItem mx-2 ' align-items='center'>
                                                    <Input type='checkbox' className='rounded-5 box-shadow-0' checked={stepSelected >= 1} />
                                                    <Col className='NavItem figure-caption'>Basic <br/> Item</Col>
                                                </Col>
                                            </Col>

                                            <Col className='p-0'>
                                                <Col sm='2' className='NavItem'>
                                                    <Input type={stepSelected == 2 ? 'radio' : 'checkbox'} className='rounded-5' disabled checked={stepSelected >= 2} />
                                                    <Col className='NavItem figure-caption'> Address Detials</Col>
                                                </Col>
                                            </Col>

                                            <Col className='p-0'>
                                                <Col sm='2' className='NavItem'>
                                                    <Input type={stepSelected == 3 ? 'radio' : 'checkbox'} className='rounded-5' disabled checked={stepSelected >= 3} />
                                                    <Col className='NavItem figure-caption'>Organization mapping</Col>
                                                </Col>
                                            </Col>

                                            <Col className='p-0'>
                                                <Col sm='2' className='NavItem'>
                                                    <Input type={stepSelected == 4 ? 'radio' : 'checkbox'} className='rounded-5' disabled checked={stepSelected >= 4} />
                                                    <Col className='NavItem figure-caption'>Additional details</Col>
                                                </Col>
                                            </Col>

                                            <Col className='p-0'>
                                                <Col sm='2' className='NavItem'>
                                                    <Input type={stepSelected == 5 ? 'radio' : 'checkbox'} className='rounded-5' disabled checked={stepSelected >= 5} />
                                                    <Col className='NavItem figure-caption'>Set password</Col>
                                                </Col>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Col>
                            </CardHeader>
                        </Card>
                    </Col>
                    {/* </Container> */}
                </Mobile>
            </div>
        </>
    )
}  