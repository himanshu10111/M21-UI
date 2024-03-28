import React from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CardBody, Col, Form, Input } from 'reactstrap'
import { Header } from '../../../component/header/Header'
import PopUp from '../../../component/header/PopUp/PopUp'

const AdditionalDetails = ({ nextStep, prevStep }) => {
  const SubmitForm = (e) => {
    e.preventDefault();

    nextStep();
  }
  return (
    <Col lg="12">
      <Col className='m-3'><PopUp /></Col>
      <Col className='m-3 p-2'><h5>Additional details</h5></Col>
      <Col className='m-3'>
        <Col lg="12">
          <Row>
            <Col lg="4">
              <Col className='p-2'>Gender</Col>
              <Col className='p-2'>
                <Input type='select' className='rounded-0 '>
                  <option>Select your option</option>
                  <option>M</option>
                  <option>F</option>
                  <option>T</option>
                </Input>
              </Col>
            </Col>
            <Col lg="3">
              <Col className='p-2'>Date of birth</Col>
              <Col className='p-2'>
                <Input type='Date' className='rounded-0' />
              </Col>
            </Col>
          </Row>
        </Col>
      </Col>
      <Col className='m-3'>
        <Col lg="12">
          <Row>
            <Col lg="4">
              <Col className='p-2'>Education</Col>
              <Col className='p-2'>
                <Input type='select' className='rounded-0'>
                  <option>Select your option</option>
                  <option>MBBS</option>
                  <option>LLB</option>
                  <option>B.E</option>
                </Input>
              </Col>
            </Col>
            <Col lg="4">
              <Col className='p-2'>Profession</Col>
              <Col className='p-2'>
                <Input type='select' className='rounded-0'>
                  <option>Select your option</option>
                  <option>Doctor</option>
                  <option>Engineer</option>
                  <option>Lawyer</option>
                </Input>
              </Col>
            </Col>
          </Row>
        </Col>
      </Col>
      <Col className='m-3'>
        <Col lg="12">
          <Row>
            <Col lg="4">
              <Col className='p-2'>Nationality</Col>
              <Col className='p-2'>
                <Input type='select' className='rounded-0'>
                  <option>Select your option</option>
                  <option>Indian</option>
                  <option>China</option>
                  <option>Japan</option>
                </Input>
              </Col>
            </Col>
          </Row>
        </Col>
      </Col>
      <Col className='m-3'>
        <Col lg="12">
          <Row>
            <Col lg="4">
              <Col className='p-2'>Social category of invitee</Col>
              <Col className='p-2'>
                <Input type='select' className='rounded-0'>
                  <option>Select your option</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </Input>
              </Col>
            </Col>
            <Col lg="4">
              <Col className='p-2'>Religion practiced by invitee</Col>
              <Col className='p-2'>
                <Input type='select' className='rounded-0'>
                  <option>Select your option</option>
                  <option>D</option>
                  <option>E</option>
                  <option>F</option>
                </Input>
              </Col>
            </Col>
          </Row>
        </Col>
      </Col>
      <Col className='m-3 pt-5'>
        <Col lg="12">
          <Row>
            <Col lg="8"><Button onClick={prevStep}>Previous</Button></Col>
            <Col><Button variant="outline-secondary">Cancel</Button></Col>
            <Col><Button className='bg-primary' onClick={SubmitForm}>Submit</Button></Col>
          </Row>
        </Col>
      </Col>
    </Col>
  )
}
export default AdditionalDetails;