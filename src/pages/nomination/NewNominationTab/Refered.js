import React, { useState, useEffect } from "react";
import {
  Card, CardBody, CardFooter, 
  CardHeader, Col, Input, Row,
} from "reactstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormGroup, FormLabel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";

import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const Refered = ({ nextStep, handleFormData, values }) => {
  const SubmitForm = (e) => {
    e.preventDefault();
    
    nextStep();
  };

  const [Profiles, setProfile] = useState([]);
  const BaseURL = process.env.REACT_APP_BASE_URL;

  const callProfileId = () => {
    const storedUsername = localStorage.getItem("username");
    console.log("Local variable:", storedUsername);

    fetch(`${BaseURL}/api/profile/user/${storedUsername}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data[0].id);
        console.log("Profile data from refered:", data[0].id);
      });
  };
  useEffect(() => {
    callProfileId();
  }, []);

  return (
    <>
      <Desktop>
        <Col className="section">
          <Col className="g-2 from  py-3 px-5">
            <Row>
              <Form onSubmit={SubmitForm}>
                <FormGroup>
                  <Card className="border-0">
                    <CardHeader className="border-0 bg-white px-0 ">
                      <h5>Refered By</h5>
                    </CardHeader>
                    <CardBody className="border-0 px-0">
                      <Row className="g-2 form">
                        <Col sm="12" className="form-label mb-4">
                          <Col sm="12" className="justify-center p-2 bg-light">
                            <label className="form-label">
                              <sub>M21 Member ID </sub>
                              <sup className="text-danger">*</sup>
                            </label>
                            <Row>
                              <Col sm="5">
                                <Input
                                  type="text"
                                  name="M21Member"
                                  defaultValue={Profiles}
                                  onChange={handleFormData("M21Member")}
                                  placeholder="Enter Member Id"
                                  className="rounded-0"
                                  size="sm"
                                  required
                                  readOnly
                                ></Input>
                              </Col>
                              <Col>
                                <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'green' }} />
                              </Col>
                            </Row>
                          </Col>
                        </Col>
                        <Col sm="12">
                          <p>
                            <Col sm="12">
                              <dt className="fst-normal">
                                How do you know the invitee ?
                              </dt>
                            </Col>
                            <Col sm="12">
                              <sub>
                                Before proceeding further please provide
                                following details
                              </sub>
                            </Col>
                          </p>
                        </Col>
                        <Col sm="12">
                          <Row>
                            <Col sm="4">
                              <label className="small form-label">
                                Know form <sup className="text-danger">*</sup>
                              </label>
                              <Input
                                type="select"
                                name="knownAsOne"
                                defaultValue={values.KnownAsOne}
                                onChange={handleFormData("KnownAsOne")}
                                placeholder="Select the option"
                                className="rounded-0"
                                required
                                size="sm"
                              >
                                <option value="" selected disabled>Select relation</option>
                                <option>Friend</option>
                                <option>Relative</option>
                              </Input>
                              <label className="small">
                                {" "}
                                How do you know invitee
                              </label>
                            </Col>
                            <Col sm="4">
                              <label className="small form-label">
                                Know as <sup className="text-danger">*</sup>
                              </label>
                              <Input
                                type="select"
                                name="KnownAsTwo"
                                defaultValue={values.KnownAsTwo}
                                onChange={handleFormData("KnownAsTwo")}
                                required
                                placeholder="choose your option"
                                className="rounded-0"
                                size="sm"
                              >
                                <option value="" selected disabled>Select relation</option>
                                <option>Friend</option>
                                <option>Relative</option>
                              </Input>
                              <label className="small">
                                {" "}
                                Number of year you know invitee
                              </label>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="12">
                          <Row>
                            <Col sm="4">
                              <label className="small form-label">
                                Appeal Shared with invitee?{" "}
                                <sup className="text-danger">*</sup>
                              </label>
                              <Input
                                type="select"
                                name="KnownAsThree"
                                defaultValue={values.KnownAsThree}
                                onChange={handleFormData("KnownAsThree")}
                                placeholder="choose your option"
                                required
                                size="sm"
                              >
                                <option value="" selected disabled>Select relation</option>
                                <option>Friend</option>
                                <option>Relative</option>
                              </Input>

                            </Col>
                            <Col sm="3">
                              <label className="text-primary" style={{ paddingTop: '40px' }}>
                                Download form
                              </label>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="border-0 bg-white">
                      <Col sm="12" className="p-3">
                        <Row>
                          <Col sm="8">&nbsp;</Col>
                          <Col sm="4">
                            <Row>
                              <Col sm="6">
                                <Button
                                  size="lg"
                                  className="btn-outline-secondary bg-white rounded-0 text-black figure-caption"
                                >
                                  &nbsp;Cancel&nbsp;
                                </Button>
                              </Col>
                              <Col sm="6">
                                <Button
                                  size="lg"
                                  type="submit"
                                  className="col-sm-12 rounded-0 figure-caption text-white"
                                  disabled={values.KnownAsOne !== "" &&
                                    values.KnownAsTwo !== "" && values.KnownAsThree !== ""
                                    ? false : true}
                                >
                                  &nbsp;Next&nbsp;
                                </Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </CardFooter>
                  </Card>
                </FormGroup>
              </Form>
            </Row>
          </Col>
        </Col>
      </Desktop>
      <Mobile>
        <Col className="section">
          <Col className="col-12">
            <Row className="g-2 form">
              <Form onSubmit={SubmitForm}>
                <Card className="border-0">
                  <CardHeader className="border-0 bg-white">
                    <Col className="col-12 border-bottom">Refered by</Col>
                  </CardHeader>
                  <CardBody>
                    <Col className="col-12 form-control bg-light">
                      <Row className="g-2 form">
                        <Col className="col-12">
                          <FormLabel>M21 Member ID</FormLabel>
                        </Col>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-10">
                              <Input
                                type="text"
                                name="M21Member"
                                defaultValue={values.M21Member}
                                onChange={handleFormData("M21Member")}
                                placeholder="Enter Member Id"
                                className="rounded-0"
                                size="sm"
                                required
                              ></Input>
                            </Col>
                            <Col className="col-2">
                              <FontAwesomeIcon icon={faCircleCheck} />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="col-12 p-1">&nbsp;</Col>
                    <Col className="col-12">
                      <h5>How do you know the invitee?</h5>
                    </Col>
                    <Col className="col-12">
                      Before proceeding further please provide following details
                    </Col>
                    <Col className="col-12">
                      <FormLabel>Know as</FormLabel>
                      <Col className="col-12">
                        <Input
                          type="select"
                          name="KnownAsTwo"
                          defaultValue={values.KnownAsTwo}
                          onChange={handleFormData("KnownAsTwo")}
                          required
                          placeholder="choose your option"
                          className="rounded-0"
                          size="sm"
                        >
                          <option>Friend</option>
                          <option>Employee</option>
                          <option>Relative</option>
                        </Input>
                      </Col>
                      <Col className="col-12">How do you know Invitee</Col>
                    </Col>
                    <Col className="col-12">
                      <Col className="col-12">
                        <FormLabel>Known from</FormLabel>
                      </Col>
                      <Col className="col-12">
                        <Input
                          type="select"
                          name="knownAsOne"
                          defaultValue={values.KnownAsOne}
                          onChange={handleFormData("KnownAsOne")}
                          placeholder="Select the option"
                          className="rounded-0"
                          required
                          size="sm"
                        >
                          <option>Friend</option>
                          <option>Relative</option>
                          <option>Member</option>
                        </Input>
                      </Col>
                      <Col className="col-12">
                        Number of years you know invitee
                      </Col>
                    </Col>
                    <Col className="col-12">
                      <FormLabel>Appeal Shared with invitee?</FormLabel>
                      <Row className="g-2 form">
                        <Col className="col-8">
                          <Input
                            type="select"
                            name="KnownAsThree"
                            defaultValue={values.KnownAsThree}
                            onChange={handleFormData("KnownAsThree")}
                            placeholder="choose your option"
                            required
                            size="sm"
                          >
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                          </Input>
                        </Col>
                        <Col className="col-4 text-primary">
                          <FormLabel>Download Form</FormLabel>
                        </Col>
                      </Row>
                    </Col>
                  </CardBody>
                  <CardFooter className="bg-white">
                    <Col className="p-3 col-12">
                      <Row>
                        <Col className="col-4">&nbsp;</Col>
                        <Col className="col-8">
                          <Row>
                            <Col className="col-6">
                              <Button
                                size="lg"
                                className="btn-outline-secondary bg-white rounded-0 text-black figure-caption"
                              >
                                Cancel
                              </Button>
                            </Col>
                            <Col className="col-6">
                              <Button
                                size="lg"
                                type="submit"
                                onClick={SubmitForm}
                                className="col-12 rounded-0 figure-caption text-white"
                              >
                                Next
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </CardFooter>
                </Card>
              </Form>
            </Row>
          </Col>
        </Col>
      </Mobile>
    </>

    // <Col className="section">
    //   <Col sm="12">
    //     <Card className="border-0">
    //       <Form onSubmit={SubmitForm}>
    //         <CardHeader className="bg-white bg-white border-bottom-0 px-5">
    //           <Col className="form-label ">
    //             <h5>Refered By</h5>
    //           </Col>
    //         </CardHeader>
    //         <CardBody className="p-5 py-0">
    //           <Row className="g-2 form pt-2">
    //             <Col sm="12 mb-3">
    //               <Col sm="12" className="bg-secondary p-3">
    //                 <label className="form-label">M21 Member ID</label>

    //                 <Col sm="5">
    //                   <Input

    //                   />
    //                 </Col>
    //               </Col>
    //             </Col>

    //             <Col sm="12" className="p-2">

    //                 <Col sm="12">
    //                   <dt className="fst-normal">
    //                     How do you know the invitee ?
    //                   </dt>
    //                 </Col>
    //                 <Col sm="12">
    //                   <sub>
    //                     Before proceeding further please provide following
    //                     details
    //                   </sub>
    //                 </Col>

    //             </Col>
    //             <Col sm="12">
    //               <Row>
    //                 <Col sm="4">
    //                   <Col className="form-label">
    //                     <label className="small"> Know as</label>
    //                     <sup className="text-danger">*</sup>
    //                   </Col>

    //                   <Col>
    //                     <Form.Select

    //                     >
    //                       <option selected value="">
    //                         Select the option
    //                       </option>
    //                       <option>Relative</option>
    //                       <option>Friend</option>
    //                     </Form.Select>
    //                   </Col>
    //                   <Col className="lh-1">
    //                     <sub>How do you know Invitee</sub>
    //                   </Col>
    //                 </Col>
    //                 <Col sm="4">
    //                   <Col className="form-label">
    //                     <sub>Know from</sub>
    //                     <sup className="text-danger">*</sup>
    //                   </Col>

    //                   <Input

    //                   >
    //                     <option selected value="">
    //                       Select the option
    //                     </option>
    //                     <option>Relative</option>
    //                     <option>Friend</option>
    //                   </Input>
    //                   <Col className="lh-1">
    //                     <sub>Number of years you know invitee</sub>
    //                   </Col>
    //                 </Col>
    //               </Row>
    //             </Col>

    //             <Col sm="12" className=" mt-3 pb-1">
    //               <Row>
    //                 <Col sm="4">
    //                   <Col className="form-label">
    //                     <sub>Appeal Shared with invitee?</sub>
    //                     <sup className="text-danger">*</sup>
    //                   </Col>
    //                   <Input

    //                   >
    //                     <option selected value="">
    //                       Select the option
    //                     </option>
    //                     <option>Relative</option>
    //                     <option>Friend</option>
    //                   </Input>
    //                 </Col>
    //                 <Col className="" sm="4">
    //                   <Col sm="12">&nbsp;</Col>
    //                   <label className="mt-3 text-primary">Download Form</label>
    //                 </Col>
    //               </Row>
    //             </Col>

    //           </Row>
    //         </CardBody>
    //         <CardFooter className="border-0 bg-white">
    //         <Col sm="12" className="p-3">
    //               <Row>

    //               <Col sm='8'>&nbsp;</Col>
    //               <Col sm='4'>
    //                 <Row>

    //                 <Col sm="6">
    //                   <Button
    //                     size="lg"
    //                     className="btn-outline-secondary bg-white rounded-0 text-black figure-caption"
    //                   >

    //                     Cancel
    //                   </Button>
    //                 </Col>
    //                 <Col sm="6">
    //                   <Button size="lg"  type='submit' className="col-sm-12 rounded-0 figure-caption text-white">
    //                     Next
    //                   </Button>
    //                 </Col>
    //                 </Row>
    //               </Col>

    //               </Row>
    //          </Col>
    //         </CardFooter>
    //       </Form>
    //     </Card>
    //   </Col>
    // </Col>
  );
};

export default Refered;
