import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Input, Row } from "reactstrap";
const LoginMember = () => {
    const history = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const MemberLogin = (e) => {
        e.preventDefault()
        if (email === "m21@m21gmail.com" || email === "8975294469" && password === "m21@M21") {
            alert("Login Successfully");
            history('/nomination')

        } else {
            alert("Invalid Login Credential");
        }
    }
    return (
        <>
            <Row>
                <Col>
                    <Col className="p-2"><label for="fname">Email or Mobile number:</label><br /></Col>
                    <Col className="p-2">
                        <Input
                            type=""
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email or Mobile Nu:"
                        />
                    </Col>
                    <Col className="p-2"><label for="fname">Password:</label><br /></Col>
                    <Col className="p-2">
                        <Input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password:"
                        />
                    </Col>
                </Col>
                <Col sm="12" className="">
                    <Row>
                        <Col sm="6" >
                            <Row>
                                <Col sm="1">
                                    <Input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                </Col>
                                <Col sm="9">
                                    <label for="vehicle1"> Keep Me Sign In</label>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="6" className="text-end text-primary">
                            <a>Forgot Password?</a>
                        </Col>
                    </Row>
                </Col>
                <Col sm="12">
                    <div className="text-center">
                        <Link to='homeui'>
                            <Button onClick={MemberLogin} className="my-4 w-100 rounded-5" color="primary" type="button">
                                SIGN IN
                            </Button>
                        </Link>
                    </div>
                </Col>
                <Col sm="12" className="text-center">
                    By clicking sign up you are agree to our <a className="text-primary">Terms of use </a>  and acknowledging the <a className="text-primary"> Privacy Policy</a>
                </Col>

            </Row>

        </>
    );
};

export default LoginMember;