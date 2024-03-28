import React from 'react'
import { FormLabel, Nav, Navbar, Row } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom'
import { Card, CardBody, CardFooter, CardHeader, Col, Container } from 'reactstrap'
import MyNomination from '../../assets/img/MyNominationImg.png';
import M21Brand from '../../assets/img/Frame.png'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 501 });
    return isDesktop ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 500 });
    return isMobile ? children : null;
  };

const HomeSideBar = () => {
    return (
        <>
        <Desktop>
        <div>
            <Col lg="12" className=' border-0 vh-100'>
                <Col className='border-0  radius-0'>
                    <Col className='border-0  radius-0'>
                        <Col className='card bg-transparent vh-100' >
                          <CardBody>
                            <Col sm='12'>
                             <Navbar >
                              <Container>
                                <Navbar.Brand href="/nomination" className='title-text-color'>
                                <img src={MyNomination} className='pe-3' />
                                My Nomination
                                </Navbar.Brand>
                              </Container>
                             </Navbar>
                             
                            </Col>
                            <Col sm='12'></Col>
                            <Col sm='12'></Col>
                          </CardBody>
                         {/* <CardBody>
                         <Nav variant="pills"  className="flex-column">
                          <Navbar.Brand>
                            <img src={M21Brand} className='w-50'/>
                          </Navbar.Brand>
      <Nav.Item className=''>
     
        <Nav.Link href="/nomination" className='border-0 form-check rounded-0 title-text-color'>
        <Col sm=''><img src={MyNomination} className='pe-3' /><FormLabel> My Nomination</FormLabel></Col>
         
          </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/"  className='border-0  rounded-0 title-text-color' >My M-friends</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/"  className='border-0 rounded-0 title-text-color'>
          Reports
        </Nav.Link>
      </Nav.Item>
    </Nav>
                         </CardBody> */}
                         <CardFooter>
                          <Nav variant='pills'  >
                            <Nav.Item >
                              <Nav.Link className='title-text-color border-0'>Participant Feedback</Nav.Link>
                              
                              
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link className='title-text-color border-0'>Download Forms</Nav.Link>
                            </Nav.Item>
                          </Nav>
                         </CardFooter>
                               
                        </Col>
                    </Col>
                </Col>
            </Col>
        </div>
        </Desktop>

        <Mobile></Mobile>
        </>
        
    )
}

export default HomeSideBar