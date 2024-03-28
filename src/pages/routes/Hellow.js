import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Col } from 'reactstrap';

const Hellow = () => {
  return (
   <>
    hi
   {/* <Col lg='12'>
    <Col lg='2' className='bg-primary float-start'>
    <Link to='/p/a'><Col lg='12'> link 1</Col></Link> 
    <Col lg='12'> link 2</Col>
    <Col lg='12'> link 3</Col>
    <Col lg='12'> link 4</Col>
    <Col lg='12'> link 5</Col>

    </Col>
    <Col lg='12'>
        <Outlet/>
    </Col>
   </Col> */}
   </>
  )
}

export default Hellow;