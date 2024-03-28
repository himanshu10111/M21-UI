import React from 'react'
<<<<<<< HEAD
import { Button, Card, CardBody, Col, Input, Row } from 'reactstrap';
import PopUp from '../../../component/header/PopUp/PopUp';
import Form from 'react-bootstrap/Form'

const Refered = ({nextStep, handleFormData, values}) => {
    const SubmitForm = (e) =>{
=======
import { Button, Card, CardBody, Col, Container, Form, Input, Row } from 'reactstrap'
import PopUp from '../../../component/header/PopUp/PopUp'

const Refered = ({ nextStep }) => {
    const SubmitForm = (e) => {
>>>>>>> feature/m-21-register
        e.preventDefault();

        nextStep();
    }
    return (
        <Col lg="12" className='small'>
            <Form onSubmit={SubmitForm}>
                <PopUp />
                <Card className='border-0'>
                    <Col>
                        <Col className='m-3'>
                            <h5>Refered By</h5>
                        </Col>
<<<<<<< HEAD
                        <CardBody>
                            M21 Member ID
                            <Col lg="5">
                                <Input
                                 type='text' 
                                 name='M21Member'
                                 defaultValue={values.M21Member}
                                 onChange={handleFormData("M21Member")} 
                                 placeholder='Enter Member Id'
                                 required
                                 />
                            </Col>
                        </CardBody>
=======
                        <Container className='border-1 my-2'>
                            <CardBody className='bg-light'>
                                <Col className='p-2'> M21 Member ID <sup className='text-danger'>*</sup></Col>
                                <Col lg="5" className='p-2'>
                                    <Input type='number' className='rounded-0 ' />
                                </Col>
                            </CardBody>
                        </Container>
>>>>>>> feature/m-21-register
                    </Col>
                    <Col>
                        <Col lg="12" className='m-3'>
                            <Col lg="12">
                                <h5>How do you know the invitee ?</h5>
                                <p>Before proceeding further please provide following details</p>
                            </Col>
                            <Col>
                                <Row>
                                    <Col lg="4">
                                        <Col className='my-2'>Know as <sup className='text-danger'>*</sup></Col>
                                        <Col>
<<<<<<< HEAD
                                            <Form.Select
                                               type='select'
                                               name="knownAsOne"
                                               defaultValue={values.KnownAsOne}
                                               onChange={handleFormData("KnownAsOne")}
                                               placeholder="Select the option"
                                               required
                                             >
                                                <option selected value="">Select the option</option>
                                                <option >Relative</option>
                                                <option >Friend</option>
                                            </Form.Select>
=======
                                            <Input type='select' className='rounded-0 text-muted'>
                                                <option >choose your option</option>
                                            </Input>
>>>>>>> feature/m-21-register
                                        </Col>
                                        <Col className='text-muted p-0'><small><p >How do you know Invitee</p></small></Col>
                                    </Col>
<<<<<<< HEAD
                                    <Col lg="3">
                                        <Col>Know from</Col>
                                        <Input 
                                        type='select'
                                        name='KnownAsTwo'
                                        defaultValue={values.KnownAsTwo}
                                        onChange={handleFormData("KnownAsTwo")}
                                        required
                                        placeholder='choose your option'
                                         >
                                            <option >Relative</option>
                                            <option >Friend</option>
=======
                                    <Col lg="4">
                                        <Col className='my-2'>Know from <sup className='text-danger'>*</sup></Col>
                                        <Input type='select' className='rounded-0 text-muted'>
                                            <option >choose your option</option>
>>>>>>> feature/m-21-register
                                        </Input>
                                        <Col className='text-muted p-0'><small><p>Number of years you know invitee</p></small></Col>
                                    </Col>
                                </Row>
                            </Col>
                        </Col>
                    </Col>
                    <Col>
                        <Col lg="12" className='m-3'>
                            <Row>
<<<<<<< HEAD
                                <Col lg="3">
                                    <Col>Know from</Col>
                                    <Input
                                     type='select'
                                     name='KnownAsThree'
                                        defaultValue={values.KnownAsThree}
                                        onChange={handleFormData("KnownAsThree")}
                                        placeholder='choose your option'
                                        required
                                     >
                                        <option >Relative</option>
                                        <option >Friend</option>
=======
                                <Col lg="4">
                                    <Col>Appeal Shared with invitee? </Col>
                                    <Input type='select' className='rounded-0 text-muted'>
                                        <option >choose your option</option>
>>>>>>> feature/m-21-register
                                    </Input>
                                </Col>
                                <Col lg='6' className='p-4 text-bottom'>
                                    <Col className='p-1' href=''><a href="#">Download Form</a></Col>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                    <Col>
                        <Col lg="12" className='m-3'>
                            <Row>
                                <Col lg="8">&nbsp;</Col>
                                <Col><Button outline color="secondary"> Cancel</Button></Col>
                                <Col><Button color="primary">Next</Button></Col>
                            </Row>
                        </Col>
                    </Col>
                </Card>
            </Form>
        </Col>

    )
}

export default Refered