import React, { useRef, useState } from 'react'
import { Button, Col, Form, FormControl } from 'react-bootstrap';
import { Input } from 'reactstrap';

const LoginIndex = ({ values }) => {

  const [enterName, setEnterName] = useState('');

  const nameInputchangeHandler = (event) => {
    setEnterName(event.target.value);
  };

  const loginIndexFormHandler = (event) => {
    event.preventDefault();

    console.log(enterName);
    console.log('hellow from form submit');
  };

  return (
    <>
      <Form onSubmit={loginIndexFormHandler}>
        <Col className='form-control' >
          <Input type="text" id="name" defaultValue={enterName}
            onChange={nameInputchangeHandler}></Input>
        </Col>
        <Col className="form-actions">
          <Button type='submit'>submit</Button>
        </Col>
      </Form>
    </>
  )
}

export default LoginIndex;