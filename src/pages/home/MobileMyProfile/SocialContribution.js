import React from "react";
import { Button, Card, Col, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardBody, CardHeader, Row } from "reactstrap";

const SocialContribution = () => {
  return (
    <>
      <Col className="section">
        <Col className="container-fluid">
          <Row className="g-3 form">
            <Card className="border-0 p-1">
              <CardHeader className="bg-white border-0 border-bottom">
                <Col className="col-12">
                  <Row className="g-2 form">
                    <Col className="col-10">
                      <b>My Profile :</b>Social Contribution
                    </Col>
                    <Col className="col-2">
                      <Link to="/auth/login/profile">
                        <Button className="bg-white text-secondary border-secondary">
                          Back
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </CardHeader>
              <CardHeader className="bg-white border-0 border-bottom">
                <Col className="col-12">
                  <Row className="g-2 form">
                    <Col className="col-9 pe-0">
                      <FormLabel>
                        My past experience with social
                        <br /> organization/social movements
                      </FormLabel>
                    </Col>
                    <Col className="col-3 px-0 text-primary">Add/Edit</Col>
                  </Row>
                </Col>
              </CardHeader>
              <Col className="col-12 p-2">&nbsp;</Col>
              <Col className="col-12">
                <Row className="g-2 form">
                  <CardBody className="shadow">
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-6">
                              <FormLabel>Position heki</FormLabel>
                              <Col className="col-12">Volunteer</Col>
                            </Col>
                            <Col className="col-6">
                              <FormLabel>Organization name</FormLabel>
                              <Col className="col-12">Amar Prauas Gosthi</Col>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="col-12">
                          <FormLabel>Organization address</FormLabel>
                          <Col className="col-12">
                            Vill. Uttar Kanchanpur, PO. Janaki Bazar,
                            <br />
                            PS Algapur, Dist. Hailakandi, PIN 788801
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                  </CardBody>
                  <CardBody className="shadow">
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-6">
                          <FormLabel>Position held</FormLabel>
                          <Col className="col-12">
                            <b>Administrative Manager</b>
                          </Col>
                        </Col>
                        <Col className="col-6">
                          <FormLabel>Organization name</FormLabel>
                          <Col className="col-12">
                            <b>Aagaz Educational And Welfare Trust</b>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="col-12">
                      <FormLabel>Organization address</FormLabel>
                      <Col className="col-12">
                        <b>
                          F4465 Darshan Vihar, Sector-68 Mohali,
                          <br /> Punjab. , Pin code- 160062
                        </b>
                      </Col>
                    </Col>
                  </CardBody>
                </Row>
              </Col>
            </Card>

            <Card className="border-0 p-1">
              <CardHeader className="bg-white border-0">
                <Row className="g-2 form">
                  <Col className="col-9">
                    <b>My social voluntarism</b>
                  </Col>
                  <Col className="col-3 text-primary">Add/Edit</Col>
                </Row>
              </CardHeader>
              <Row className="g-2 form">
                <CardBody className="shadow">
                  <Col className="col-12">
                    <Row className="g-2 form">
                      <Col className="col-12">
                        <Row className="g-2 form">
                          <Col className="col-6">
                            <FormLabel>Project name</FormLabel>
                            <Col className="col-12">Save India</Col>
                          </Col>
                          <Col className="col-6">
                            <FormLabel>Position held</FormLabel>
                            <Col className="col-12">Volunteer</Col>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="col-12">
                        <Row className="g-2 form">
                          <FormLabel>Organization name</FormLabel>
                          <Col className="col-12">
                            <b>Amar Prayas Gosthi</b>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="col-12">
                        <Row className="g-2 form">
                          <FormLabel>Organization address</FormLabel>
                          <Col className="col-12">
                            <b>
                              Vill. Uttar Kanchanpur, PO. Janaki Bazar,
                              <br />
                              PS Algapur, Dist. Hailakandi, PIN 788801
                            </b>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </CardBody>
                <CardBody className="shadow">
                  <Col className="col-12">
                    <Row className="g-2 form">
                      <Col className="col-12">
                        <Row className="g-2 form">
                          <Col className="col-6">
                            <FormLabel>Project name</FormLabel>
                            <Col className="col-12">
                              <b>tree & me</b>
                            </Col>
                          </Col>
                          <Col className="col-6">
                            <FormLabel>Position held</FormLabel>
                            <Col className="col-12">Administrative Manager</Col>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="col-12">
                        <Row className="g-2 form">
                          <FormLabel>Organization name</FormLabel>
                          <Col className="col-12">
                            <b>Aagaz Educational And Welfare Trust</b>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="col-12">
                        <Row className="g-2 form">
                          <FormLabel>Organization address</FormLabel>
                          <Col className="col-12">
                            <b>
                              F4465 Darshan Vihar, Sector-68 Mohali,
                              <br /> Punjab. , Pin code- 160062
                            </b>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </CardBody>
              </Row>
            </Card>
          </Row>
        </Col>
      </Col>
    </>
  );
};

export default SocialContribution;

// import React, { useState } from "react";
// import { Form, ModalBody } from "react-bootstrap";
// import { Modal, Button } from "react-bootstrap";
// import { Card } from "react-bootstrap";
// import { CardBody, Input, Col, Row } from "reactstrap";
// import MobileProfileSideBar from "../../../component/sidebar/MobileProfileSideBar";

// const SocialContribution = () => {
//     const [lgShowAdd1, setLgShowAdd1] = useState(false);
//     const [lgShowAddvolunt, setLgShowAddvolunt] = useState(false);

//     return (
//         <>
//             <Col sm="12" className="small">
//                 <Form>
//                     <Card className="border-0">
//                         <CardBody>
//                             <Col sm="12" className="p-3">
//                                 <h5>Social Contribution</h5>
//                             </Col>
//                             <Col sm="12" className="p-3">
//                                 <Col sm="12" className="border-bottom p-2">
//                                     <Row>
//                                         <Col sm="8" className="p-0">
//                                             My past experience with social organization/social movements
//                                         </Col>
//                                         <Col
//                                             sm="2"
//                                             className="text-end text-primary"
//                                             role="button"
//                                             onClick={() => setLgShowAdd1(true)}
//                                         >
//                                             Add
//                                         </Col>

//                                         <Col
//                                             sm="2"
//                                             className="p-0 text-primary"
//                                         >
//                                             Edit
//                                         </Col>
//                                     </Row>
//                                 </Col>
//                                 <Col sm="12" className="p-2">
//                                     <Row>
//                                         <Col sm="3">
//                                             <Col sm="12" className="small">
//                                                 {" "}
//                                                 Position held
//                                             </Col>
//                                             <Col sm="12" className="bold">
//                                                 <b>Volunteer</b>{" "}
//                                             </Col>
//                                         </Col>
//                                         <Col sm="3">
//                                             <Col sm="12" className="small">
//                                                 {" "}
//                                                 Organization Name
//                                             </Col>
//                                             <Col sm="12" className="bold">
//                                                 <b>Amar Prayas Gosthi</b>{" "}
//                                             </Col>
//                                         </Col>
//                                         <Col sm="3">
//                                             <Col sm="12" className="small">
//                                                 {" "}
//                                                 Organization address
//                                             </Col>
//                                             <Col sm="12" className="bold">
//                                                 <b>Vill. Uttar Kanchanpur, PO. Janaki Bazar, PS Algapur, Dist. Hailakandi, PIN 788801</b>{" "}
//                                             </Col>
//                                         </Col>
//                                         <Col sm='3'></Col>
//                                     </Row>
//                                     &nbsp;
//                                     <Row>
//                                         <Col sm="3">
//                                             <Col sm="12" className="bold">
//                                                 <b>Administrative Manager</b>{" "}
//                                             </Col>
//                                         </Col>
//                                         <Col sm="3">
//                                             <Col sm="12" className="bold">
//                                                 <b>Aagaz Educational And Welfare Trust</b>{" "}
//                                             </Col>
//                                         </Col>
//                                         <Col sm='3'>
//                                             <Col sm='12' className="bold">
//                                                 <b>F4465 Darshan Vihar, Sector-68 Mohali, Punjab. , Pin code- 160062</b>
//                                             </Col>
//                                         </Col>
//                                         <Col sm='3'></Col>
//                                     </Row>
//                                 </Col>
//                             </Col>
//                             <Col sm="12" className="border-bottom p-2">
//                                 <Row>
//                                     <Col sm="10" className="p-0 ">
//                                         My social voluntarism
//                                     </Col>
//                                     <Col sm="2" className="p-0 text-primary"
//                                         role="button"
//                                         onClick={() => setLgShowAddvolunt(true)}
//                                     >
//                                         Edit
//                                     </Col>
//                                 </Row>
//                             </Col>
//                             <Col sm="12" className="p-2">
//                                 <Row>
//                                     <Col sm="2">
//                                         <Col sm="12" className="small">
//                                             {" "}
//                                             Project name
//                                         </Col>
//                                         <Col sm="12" className="bold">
//                                             <b>Save India</b>{" "}
//                                         </Col>
//                                     </Col>
//                                     <Col sm="2">
//                                         <Col sm="12" className="small">
//                                             {" "}
//                                             Position Held
//                                         </Col>
//                                         <Col sm="12" className="bold">
//                                             <b>Volunteer</b>{" "}
//                                         </Col>
//                                     </Col>
//                                     <Col sm="2">
//                                         <Col sm="12" className="small">
//                                             {" "}
//                                             Organization Name
//                                         </Col>
//                                         <Col sm="12" className="bold">
//                                             <b>Amar Prayas Gosthi</b>{" "}
//                                         </Col>
//                                     </Col>
//                                     <Col sm="3">
//                                         <Col sm="12" className="small">
//                                             {" "}
//                                             Address
//                                         </Col>
//                                         <Col sm="12" className="bold">
//                                             <b>Vill. Uttar Kanchanpur, PO. Janaki Bazar, PS Algapur, Dist. Hailakandi, PIN 788801</b>{" "}
//                                         </Col>
//                                     </Col>
//                                     <Col sm='3'></Col>
//                                 </Row>
//                                 &nbsp;
//                                 <Row>
//                                     <Col sm="2">
//                                         <Col sm="12" className="bold">
//                                             <b>Tree & Me</b>{" "}
//                                         </Col>
//                                     </Col>
//                                     <Col sm="2">
//                                         <Col sm="12" className="bold">
//                                             <b>Volunteer</b>{" "}
//                                         </Col>
//                                     </Col>
//                                     <Col sm="2">
//                                         <Col sm="12" className="bold">
//                                             <b>Amar Prayas Gosthi</b>{" "}
//                                         </Col>
//                                     </Col>
//                                     <Col sm="3">
//                                         <Col sm="12" className="bold">
//                                             <b>Vill. Uttar Kanchanpur, PO. Janaki Bazar, PS Algapur, Dist. Hailakandi, PIN 788801</b>{" "}
//                                         </Col>
//                                     </Col>
//                                     <Col sm='3'></Col>
//                                 </Row>
//                             </Col>
//                         </CardBody>
//                     </Card>
//                 </Form>
//             </Col>
//             <Col sm="12">
//                 <Modal
//                     size="lg"
//                     show={lgShowAdd1}
//                     onHide={() => setLgShowAdd1(false)}
//                     aria-labelledby="example-modal-sizes-title-lg"
//                 >
//                     <Modal.Body className="bg-white" >
//                         <Card className="p-4 bg-secondary">
//                             <Modal.Header>
//                                 <Modal.Title id="example-modal-sizes-title-lg small bg-light border-bottom">
//                                     <h5>My past experience with social organization/social movements</h5>
//                                 </Modal.Title>
//                             </Modal.Header>
//                             &nbsp;
//                             <Col sm='12' className="p-2 bg-white shadow-sm p-3 mb-5">
//                                 <Row>
//                                     <Col sm='4' className="p-2 ">
//                                         <Col sm='12' className="p-0">Position held<sup style={{ color: "red" }}>*</sup></Col>
//                                         <Col sm='12' className="p-0">
//                                             <Input className='rounded-0' type='select' placeholder="State">
//                                                 <option>Select Position</option>
//                                                 <option>1</option>
//                                                 <option>2</option>
//                                                 <option>3</option>
//                                             </Input>
//                                         </Col>
//                                     </Col>
//                                     <Col sm='8' className="p-2">
//                                         <Col sm='12' className="p-0">Organization name<sup style={{ color: "red" }}>*</sup></Col>
//                                         <Col sm='12' className="p-0">
//                                             <Input className='rounded-0' type='select' placeholder="Organization">
//                                                 <option>Select Organization</option>
//                                                 <option>1</option>
//                                                 <option>2</option>
//                                                 <option>3</option>
//                                             </Input>
//                                         </Col>
//                                     </Col>
//                                 </Row>
//                                 <Col sm='12' className="p-2 bg-white">
//                                     <Row>
//                                         <Col sm='12' className="p-3"><b>Organization Address</b></Col>
//                                         <Col sm='4' className="p-3">
//                                             <Col sm='12' className="p-0">Address Line 1<sup style={{ color: "red" }}>*</sup></Col>
//                                             <Col sm='12' className="p-0"><Input className='rounded-0' placeholder="Enter Address" /></Col>
//                                         </Col>
//                                         <Col sm='8' className="p-3">
//                                             <Col sm='12' className="p-0">Address Line 2<sup style={{ color: "red" }}>*</sup></Col>
//                                             <Col sm='12' className="p-0"><Input className='rounded-0' placeholder="Enter Address" /></Col>
//                                         </Col>
//                                     </Row>
//                                 </Col>
//                                 <Col sm='12' className="p-2 bg-white">
//                                     <Row>
//                                         <Col sm='4' className="p-3">
//                                             <Col sm='12' className="p-0">Country<sup style={{ color: "red" }}>*</sup></Col>
//                                             <Col sm='12' className="p-0"><Input className='rounded-0' type='select' placeholder="Country">
//                                                 <option>Select Country</option>
//                                                 <option>1</option>
//                                                 <option>2</option>
//                                                 <option>3</option>
//                                             </Input></Col>
//                                         </Col>
//                                         <Col sm='4' className="p-3">
//                                             <Col sm='12' className="p-0">State<sup className="text-danger">*</sup></Col>
//                                             <Col sm='12' className="p-0"><Input className='rounded-0' type='select' placeholder="State">
//                                                 <option>Select State</option>
//                                                 <option>1</option>
//                                                 <option>2</option>
//                                                 <option>3</option>
//                                             </Input></Col>
//                                         </Col>
//                                         <Col sm='4' className="p-3">
//                                             <Col sm='12' className="p-0">City</Col>
//                                             <Col sm='12' className="p-0">
//                                                 <Input className='rounded-0' type='select' placeholder="City">
//                                                     <option>Select City</option>
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                 </Input></Col>
//                                         </Col>
//                                     </Row>
//                                 </Col>
//                                 <Col sm='12' className="p-2 bg-white">
//                                     <Row>
//                                         <Col sm='4' className="p-3">
//                                             <Col sm='12' className="p-0">District</Col>
//                                             <Col sm='12' className="p-0">
//                                                 <Input className='rounded-0' type='select' placeholder="District">
//                                                     <option>Select District</option>
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                 </Input>
//                                             </Col>
//                                         </Col>
//                                         <Col sm='4' className="p-3">
//                                             <Col sm='12' className="p-0">Taluka</Col>
//                                             <Col sm='12' className="p-0">
//                                                 <Input className='rounded-0' type='select' placeholder="Taluka">
//                                                     <option>Select Taluka</option>
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                 </Input>
//                                             </Col>
//                                         </Col>
//                                         <Col sm='4' className="p-3">
//                                             <Col sm='12' className="p-0">Pin/Zip Code<sup className="text-danger"> *</sup></Col>
//                                             <Col sm='12' className="p-0">
//                                                 <Input className='rounded-0' type='select' placeholder="Pincode">
//                                                     <option>Select Pincode</option>
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                 </Input>
//                                             </Col>
//                                         </Col>
//                                     </Row>
//                                 </Col>
//                             </Col>

//                         </Card>
//                         &nbsp;
//                         <Col sm='12' className="text-end">
//                             <Button className='rounded-1' variant="outline-primary">Add Education</Button>
//                         </Col>
//                         <Col sm='12'>
//                             <Row>
//                                 <Col sm='3'>&nbsp;</Col>
//                                 <Col sm='3' className="text-end"><Button className='rounded-1'>Cancel</Button></Col>
//                                 <Col sm='3' className="text-start"><Button className='rounded-1'>Save</Button></Col>
//                                 <Col sm='3'>&nbsp;</Col>
//                             </Row>
//                         </Col>
//                     </Modal.Body>
//                 </Modal>
//             </Col>
//             <Col sm='12'>
//                 <Modal
//                     size="lg"
//                     show={lgShowAddvolunt}
//                     onHide={() => setLgShowAddvolunt(false)}
//                     aria-labelledby="example-modal-sizes-title-lg"
//                 >
//                     <Modal.Body className="bg-white" >
//                         <Card className="p-4 bg-secondary">
//                             <Modal.Header>
//                                 <Modal.Title id="example-modal-sizes-title-lg small bg-light border-bottom">
//                                     <h5>My Social Voluntarism</h5>
//                                 </Modal.Title>
//                             </Modal.Header>
//                             &nbsp;
//                             <Col sm='12' className="p-2 bg-white shadow-sm p-3 mb-5">
//                                 <Row>
//                                     <Col sm='4' className="p-2 ">
//                                         <Col sm='12' className="p-0">Position held<sup style={{ color: "red" }}>*</sup></Col>
//                                         <Col sm='12' className="p-0">
//                                             <Input className='rounded-0' type='select' placeholder="State">
//                                                 <option>Select Position</option>
//                                                 <option>1</option>
//                                                 <option>2</option>
//                                                 <option>3</option>
//                                             </Input>
//                                         </Col>
//                                     </Col>
//                                     <Col sm='4' className="p-2">
//                                         <Col sm='12' className="p-0">Organization name<sup style={{ color: "red" }}>*</sup></Col>
//                                         <Col sm='12' className="p-0">
//                                             <Input className='rounded-0' type='select' placeholder="Organization">
//                                                 <option>Select Organization</option>
//                                                 <option>1</option>
//                                                 <option>2</option>
//                                                 <option>3</option>
//                                             </Input>
//                                         </Col>
//                                     </Col>
//                                     <Col sm='4' className="p-2">
//                                         <Col sm='12' className="p-0">Position name<sup style={{ color: "red" }}>*</sup></Col>
//                                         <Col sm='12' className="p-0">
//                                             <Input className='rounded-0' placeholder="Position Name">
//                                             </Input>
//                                         </Col>
//                                     </Col>
//                                 </Row>
//                                 <Col sm='12' className="p-2 bg-white">
//                                     <Row>
//                                         <Col sm='12' className="p-3"><b>Organization Address</b></Col>
//                                         <Col sm='4' className="p-3">
//                                             <Col sm='12' className="p-0">Address Line 1<sup style={{ color: "red" }}>*</sup></Col>
//                                             <Col sm='12' className="p-0"><Input className='rounded-0' placeholder="Enter Address" /></Col>
//                                         </Col>
//                                         <Col sm='8' className="p-3">
//                                             <Col sm='12' className="p-0">Address Line 2<sup style={{ color: "red" }}>*</sup></Col>
//                                             <Col sm='12' className="p-0"><Input className='rounded-0' placeholder="Enter Address" /></Col>
//                                         </Col>
//                                     </Row>
//                                 </Col>
//                                 <Col sm='12' className="p-2 bg-white">
//                                     <Row>
//                                         <Col sm='4' className="p-3">
//                                             <Col sm='12' className="p-0">Country<sup style={{ color: "red" }}>*</sup></Col>
//                                             <Col sm='12' className="p-0"><Input className='rounded-0' type='select' placeholder="Country">
//                                                 <option>Select Country</option>
//                                                 <option>1</option>
//                                                 <option>2</option>
//                                                 <option>3</option>
//                                             </Input></Col>
//                                         </Col>
//                                         <Col sm='4' className="p-3">
//                                             <Col sm='12' className="p-0">State<sup className="text-danger">*</sup></Col>
//                                             <Col sm='12' className="p-0"><Input className='rounded-0' type='select' placeholder="State">
//                                                 <option>Select State</option>
//                                                 <option>1</option>
//                                                 <option>2</option>
//                                                 <option>3</option>
//                                             </Input></Col>
//                                         </Col>
//                                         <Col sm='4' className="p-3">
//                                             <Col sm='12' className="p-0">City</Col>
//                                             <Col sm='12' className="p-0">
//                                                 <Input className='rounded-0' type='select' placeholder="City">
//                                                     <option>Select City</option>
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                 </Input></Col>
//                                         </Col>
//                                     </Row>
//                                 </Col>
//                                 <Col sm='12' className="p-2 bg-white">
//                                     <Row>
//                                         <Col sm='4' className="p-3">
//                                             <Col sm='12' className="p-0">District</Col>
//                                             <Col sm='12' className="p-0">
//                                                 <Input className='rounded-0' type='select' placeholder="District">
//                                                     <option>Select District</option>
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                 </Input>
//                                             </Col>
//                                         </Col>
//                                         <Col sm='4' className="p-3">
//                                             <Col sm='12' className="p-0">Taluka</Col>
//                                             <Col sm='12' className="p-0">
//                                                 <Input className='rounded-0' type='select' placeholder="Taluka">
//                                                     <option>Select Taluka</option>
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                 </Input>
//                                             </Col>
//                                         </Col>
//                                         <Col sm='4' className="p-3">
//                                             <Col sm='12' className="p-0">Pin/Zip Code<sup className="text-danger"> *</sup></Col>
//                                             <Col sm='12' className="p-0">
//                                                 <Input className='rounded-0' type='select' placeholder="Pincode">
//                                                     <option>Select Pincode</option>
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                 </Input>
//                                             </Col>
//                                         </Col>
//                                     </Row>
//                                 </Col>
//                             </Col>

//                         </Card>
//                         &nbsp;
//                         <Col sm='12' className="text-end">
//                             <Button className='rounded-1' variant="outline-primary">Add Education</Button>
//                         </Col>
//                         <Col sm='12'>
//                             <Row>
//                                 <Col sm='3'>&nbsp;</Col>
//                                 <Col sm='3' className="text-end"><Button className='rounded-1'>Cancel</Button></Col>
//                                 <Col sm='3' className="text-start"><Button className='rounded-1'>Save</Button></Col>
//                                 <Col sm='3'>&nbsp;</Col>
//                             </Row>
//                         </Col>
//                     </Modal.Body>
//                 </Modal>
//             </Col>
//             <Col sm="12">
//                 <MobileProfileSideBar/>
//             </Col>
//         </>
//     );
// };

// export default SocialContribution
