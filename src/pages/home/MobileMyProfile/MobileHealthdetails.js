import React from "react";
import { useState } from "react";
import { Button, Card, Col, FormLabel, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardBody, CardHeader, Input } from "reactstrap";

const HealthDetails = () => {
  const [isContactDetails, setIsContactDetails] = useState(1);
  const EmergencyContact = () => {
    setIsContactDetails((current) => !current);
  };

  const [isBloodGroup, setIsBloodGroup] = useState(1);
  const BloodGroupDetails = () => {
    setIsBloodGroup((current) => !current);
  };

  const [isCovidVaccine, setIsCovidVaccine] = useState(1);
  const CovidVaccineDetails = () => {
    setIsCovidVaccine((current) => !current);
  };

  const [isInsuranceDeatils, setIsInsuranceDetails] = useState(1);
  const MyInsuranceDetail = () => {
    setIsInsuranceDetails((current) => !current);
  };
  return (
    <>
      <Col className="section">
        <Col className="container-fluid">
          <Row classNameg-2 form>
            <Card className="border-0 ">
              <Row className="g-2 form">
                <CardHeader className="bg-white border-0 border-bottom">
                  <Row className="g-2 form">
                    <Col className="col-10">
                      <b>My Profile:</b> Health Details
                    </Col>
                    <Col className="col-2">
                      <Link to="/auth/login/profile">
                        <Button className="bg-white text-secondary border-secondary">
                          Back
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </CardHeader>
                <Col className="col-12 border-bottom">
                  <Row className="g-2 form">
                    <Col className="col-9">Emergency contact details</Col>
                    <Col
                      className="col-3 text-primary"
                      onClick={EmergencyContact}
                    >
                      Add Edit
                    </Col>
                  </Row>
                </Col>
                {isContactDetails && (
                  <CardBody className="shadow rounded-3">
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-4">
                          <FormLabel>Person name</FormLabel>
                          <Col className="col-12">
                            <b>Bharat Kumar</b>
                          </Col>
                        </Col>
                        <Col className="col-3">
                          <FormLabel>Relation</FormLabel>
                          <Col className="col-12">
                            <b>Brother</b>
                          </Col>
                        </Col>
                        <Col className="col-5">
                          <FormLabel>Contact number</FormLabel>
                          <Col className="col-12">
                            <b>+91 9873 654 321</b>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                  </CardBody>
                )}
                {!isContactDetails && (
                  <CardBody className="shadow rounded-3">
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-12">
                          <FormLabel>Person name</FormLabel>
                          <Col className="col-12">
                            <Input type="text" placeholder="Enter your name" />{" "}
                          </Col>
                        </Col>
                        <Col className="col-12">
                          <FormLabel>Relation</FormLabel>
                          <Col className="col-12">
                            <Input
                              type="text"
                              placeholder="Enter your relation"
                            />
                          </Col>
                        </Col>
                        <Col className="col-12">
                          <FormLabel>Contact Number</FormLabel>
                          <Col className="col-12">
                            <Input
                              type="text"
                              placeholder="Enter mobile number"
                            />
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                  </CardBody>
                )}
                <Col className="col-12 p-1">&nbsp;</Col>
                <Col className="col-12 border-bottom">
                  <Row className="g-2 form">
                    <Col className="col-10">Blood group details</Col>
                    <Col className="col-2" onClick={BloodGroupDetails}>
                      Edit
                    </Col>
                  </Row>
                </Col>
                {isBloodGroup && (
                  <>
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-6">
                          <FormLabel>Blood type</FormLabel>
                          <Col className="col-12">
                            <b>AB+</b>
                          </Col>
                        </Col>
                        <Col className="col-6">
                          <FormLabel>Last blood donation date</FormLabel>
                          <Col className="col-12">
                            <b>DD-MM-YYYY</b>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                  </>
                )}
                {!isBloodGroup && (
                  <>
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-6">
                          <FormLabel>Blood type</FormLabel>
                          <Col className="col-12">
                            <Input type="select">
                              <option>Choose your option</option>
                              <option>AB+</option>
                              <option>B+</option>
                              <option>A+</option>
                            </Input>
                          </Col>
                        </Col>
                        <Col className="col-6">
                          <FormLabel>Last blood donation date</FormLabel>
                          <Col className="col-12">
                            <Input type="date" />
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                  </>
                )}
                <Col className="col-12 p-1">&nbsp;</Col>
                <Col className="col-12 border-bottom">
                  <Row className="g-2 form">
                    <Col className="col-10">Covid vaccine status</Col>
                    <Col className="col-2" onClick={CovidVaccineDetails}>
                      Edit
                    </Col>
                  </Row>
                </Col>
                {isCovidVaccine && (
                  <>
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-3">&nbsp;</Col>
                            <Col className="col-3">
                              <FormLabel>Number of dose</FormLabel>
                            </Col>
                            <Col className="col-3">
                              <FormLabel>Vaccine name</FormLabel>
                            </Col>
                            <Col className="col-3">
                              <FormLabel>Date of dose</FormLabel>{" "}
                            </Col>
                          </Row>
                        </Col>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-3">
                              <Input type="checkbox" />
                            </Col>
                            <Col className="col-3">Dose 1</Col>
                            <Col className="col-3">Covishield</Col>
                            <Col className="col-3">DD-MM-YYYY</Col>
                          </Row>
                        </Col>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-3">
                              <Input type="checkbox" />
                            </Col>
                            <Col className="col-3">Dose 2</Col>
                            <Col className="col-3">Covishield</Col>
                            <Col className="col-3">DD-MM-YYYY</Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </>
                )}
                {!isCovidVaccine && (
                  <>
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-3">&nbsp;</Col>
                            <Col className="col-3">Number of dose</Col>
                            <Col className="col-3">Vaccine name</Col>
                            <Col className="col-3">Date of dose</Col>
                          </Row>
                        </Col>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-1">
                              <Input type="checkbox" />
                            </Col>
                            <Col className="col-4">
                              <Input type="select">
                                <option>Dose 1</option>
                                <option>Dose 2</option>
                              </Input>
                            </Col>
                            <Col className="col-4">
                              <Input type="select">
                                <option>Covishield</option>
                                <option>Sputnick</option>
                                <option>Covaccine</option>
                              </Input>
                            </Col>
                            <Col className="col-3">
                              <Input type="date" />
                            </Col>
                          </Row>
                        </Col>
                        <Col className="col-12">
                          <Row className="g-2 form">
                            <Col className="col-1">
                              <Input type="checkbox" />
                            </Col>
                            <Col className="col-4">
                              <Input type="select">
                                <option>Dose 1</option>
                                <option>Dose 2</option>
                              </Input>
                            </Col>
                            <Col className="col-4">
                              <Input type="select">
                                <option>Covishield</option>
                                <option>Sputnick</option>
                                <option>Covaccine</option>
                              </Input>
                            </Col>
                            <Col className="col-3">
                              <Input type="date" />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </>
                )}
                <Col className="col-12 p-1">&nbsp;</Col>
                <Col className="col-12 border-bottom">
                  <Row className="g-2 form">
                    <Col className="col-10"> My insurance Detials</Col>
                    <Col className="col-2" onClick={MyInsuranceDetail}>
                      Edit
                    </Col>
                  </Row>
                </Col>
                {isInsuranceDeatils && (
                  <>
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Card className="border-0">
                          <Row className="g-2 form">
                            <CardBody className="shadow">
                              <Col className="col-12">
                                <Row className="g-2 form">
                                  <Col className="col-6">
                                    <FormLabel>insurance number</FormLabel>
                                    <Col className="col-12">
                                      <b>007</b>
                                    </Col>
                                  </Col>
                                  <Col className="col-6">
                                    <FormLabel>insurance type</FormLabel>
                                    <Col className="col-12">
                                      <b>Health insurance</b>
                                    </Col>
                                  </Col>
                                </Row>
                              </Col>
                              <Col className="col-12">
                                <Row className="g-2 form">
                                  <Col className="col-6">
                                    <FormLabel>Expiry date</FormLabel>
                                    <Col className="col-12">
                                      <b>DD-MM-YYYY</b>
                                    </Col>
                                  </Col>
                                  <Col className="col-6">
                                    <FormLabel>Organization address</FormLabel>
                                    <Col className="col-12">
                                      <b>LIC Health Insurance</b>
                                    </Col>
                                  </Col>
                                </Row>
                              </Col>
                            </CardBody>
                            <CardBody className="shadow">
                              <Col className="col-12">
                                <Row className="g-2 form">
                                  <Col className="col-6">
                                    <FormLabel>insurance number</FormLabel>
                                    <Col className="col-12">
                                      <b>AB345B21</b>
                                    </Col>
                                  </Col>
                                  <Col className="col-6">
                                    <FormLabel>insurance type</FormLabel>
                                    <Col className="col-12">
                                      <b>Health insurance</b>
                                    </Col>
                                  </Col>
                                </Row>
                              </Col>
                              <Col className="col-12">
                                <Row className="g-2 form">
                                  <Col className="col-6">
                                    <FormLabel>Expiry date</FormLabel>
                                    <Col className="col-12">
                                      <b>DD-MM-YYYY</b>
                                    </Col>
                                  </Col>
                                  <Col className="col-6">
                                    <FormLabel>Organization address</FormLabel>
                                    <Col className="col-12">
                                      <b>MAX Life</b>
                                    </Col>
                                  </Col>
                                </Row>
                              </Col>
                            </CardBody>
                          </Row>
                        </Card>
                      </Row>
                    </Col>
                  </>
                )}
                {!isInsuranceDeatils && (
                  <>
                    <Col className="col-12">
                      <Row className="g-2 form">
                        <Card className="border-0">
                          <Row className="g-2 form">
                            <CardBody>
                              <Col className="col-12">
                                <Row className="g-2 form">
                                  <Col className="col-6">
                                    <FormLabel>insurance number</FormLabel>
                                    <Col className="col-12">
                                      <Input
                                        type="text"
                                        placeholder="Enter insurance number"
                                      />
                                    </Col>
                                  </Col>
                                  <Col className="col-6">
                                    <FormLabel>Insurance type</FormLabel>
                                    <Col className="col-12">
                                      <Input
                                        type="text"
                                        placeholder="Enter insurance number "
                                      />
                                    </Col>
                                  </Col>
                                </Row>
                              </Col>
                              <Col className="col-12">
                                <Row className="g-2 form">
                                  <Col className="col-6">
                                    <FormLabel>Expiry date</FormLabel>
                                    <Col className="col-12">
                                      <Input type="date" />
                                    </Col>
                                  </Col>
                                  <Col className="col-6">
                                    <FormLabel>Organization address</FormLabel>
                                    <Input type="textarea"></Input>
                                  </Col>
                                </Row>
                              </Col>
                            </CardBody>
                          </Row>
                        </Card>
                      </Row>
                    </Col>
                  </>
                )}
              </Row>
            </Card>
          </Row>
        </Col>
      </Col>
    </>
  );
};

export default HealthDetails;

// import React, { useState } from "react";
// import { Form } from "react-bootstrap";
// import { Modal, Button } from "react-bootstrap";
// import { Card } from "react-bootstrap";
// import { CardBody, CardFooter, Col, Input, Row } from "reactstrap";
// import MobileProfileSideBar from "../../../component/sidebar/MobileProfileSideBar";
// const Healthdetails = () => {

//   const [lgShowEditHealth, setLgShowEditHealth] = useState(false);
//   const [lgShowEditBG, setLgShowEditBG] = useState(false);
//   const [lgShowAdd1, setLgShowAdd1] = useState(false);
//   const [lgShowMyinsu, setLgShowMyinsu] = useState(false);
//   const [lgShowEditVaccine, setlgShowEditVaccine] = useState(false);
//   const [lgShowEditInsur, setlgShowEditInsur] = useState(false);
//   const [lgShowEditUpdate, setlgShowEditUpdate] = useState(false);
//   const [lgShowEditUpdate2, setlgShowEditUpdate2] = useState(false);

//   return (
//     <>
//       <Col sm="12" className="small">
//         <Form>
//           <Card className="border-0">
//             <CardBody>
//               <Col sm="12" className="p-3">
//                 <h5>Health Details</h5>
//               </Col>
//               <Col sm="12" className="p-3">
//                 <Col sm="12" className="border-bottom p-2">
//                   <Row>
//                     <Col sm="10" className="p-0">
//                       Emergency contact details
//                     </Col>
//                     <Col
//                       sm="1"
//                       className="text-end text-primary"
//                       role="button"
//                       onClick={() => setLgShowAdd1(true)}
//                     >
//                       Add
//                     </Col>

//                     <Col
//                       sm="1"
//                       className="p-0 text-primary"
//                       role="button"
//                       onClick={() => setLgShowEditHealth(true)}

//                     >
//                       Edit
//                     </Col>
//                   </Row>
//                 </Col>
//                 <Col sm="12" className="p-2">
//                   <Row>
//                     <Col sm="4">
//                       <Col sm="12" className="small">
//                         {" "}
//                         Person name
//                       </Col>
//                       <Col sm="12" className="bold">
//                         <b>Bharat Kumar</b>{" "}
//                       </Col>
//                     </Col>
//                     <Col sm="4">
//                       <Col sm="12" className="small">
//                         {" "}
//                         Relation
//                       </Col>
//                       <Col sm="12" className="bold">
//                         <b>Brother</b>{" "}
//                       </Col>
//                     </Col>
//                     <Col sm="4">
//                       <Col sm="12" className="small">
//                         {" "}
//                         Contact number
//                       </Col>
//                       <Col sm="12" className="bold">
//                         <b>+91 8899774455</b>{" "}
//                       </Col>
//                     </Col>
//                   </Row>
//                 </Col>
//                 {/*Start of blood group details  */}
//                 <Col sm="12" className="border-bottom p-2">
//                   <Row>
//                     <Col sm="11" className="p-0">
//                       Blood group details
//                     </Col>
//                     <Col sm="1" className="p-0 text-primary"
//                       role="button"
//                       onClick={() => setLgShowEditBG(true)}
//                     >
//                       Edit
//                     </Col>
//                   </Row>
//                 </Col>
//                 <Col sm="12" className="p-2">
//                   <Row>
//                     <Col sm="4">
//                       <Col sm="12" className="small">
//                         {" "}
//                         Blood type
//                       </Col>
//                       <Col sm="12" className="bold">
//                         <b>AB+</b>{" "}
//                       </Col>
//                     </Col>
//                     <Col sm="4">
//                       <Col sm="12" className="small">
//                         {" "}
//                         Last blood donation date
//                       </Col>
//                       <Col sm="12" className="bold">
//                         <b>DD-MM-YYYY</b>{" "}
//                       </Col>
//                     </Col>
//                   </Row>
//                 </Col>
//                 {/* End of blood group details */}
//                 {/* start of covid vaccine status */}
//                 <Col sm="12" className="border-bottom p-2">
//                   <Row>
//                     <Col sm="10" className="p-0">
//                       Covid vaccine status
//                     </Col>

//                     <Col sm="1">&nbsp;</Col>
//                     <Col
//                       sm="1"
//                       className="p-0 text-primary"
//                       role="button"
//                       onClick={() => setlgShowEditVaccine(true)}
//                     >
//                       Edit
//                     </Col>
//                   </Row>
//                 </Col>
//                 <Col sm="12" className="p-2">
//                   <Col sm="2" className="border-1  rounded-5">
//                     <Input
//                       placeholder="i am Covid safe"
//                       className="border-success text-center rounded-5"
//                     />
//                   </Col>
//                 </Col>
//                 <Col sm="12" className="p-2">
//                   <Col sm="12">
//                     <Row>
//                       <Col sm="3">&nbsp;</Col>
//                       <Col sm="3" className="small">
//                         {" "}
//                         Number of dose
//                       </Col>
//                       <Col sm="3" className="small">
//                         {" "}
//                         Vaccine name
//                       </Col>
//                       <Col sm="3" className="small">
//                         Date of dose
//                       </Col>
//                     </Row>
//                   </Col>
//                   <Col sm="12">
//                     <Row>
//                       <Col sm="3">
//                         {" "}
//                         <Input type="checkbox" />{" "}
//                       </Col>
//                       <Col sm="3">Dose 1</Col>
//                       <Col sm="3">Covishield</Col>
//                       <Col sm="3">DD-mm-yyyyy</Col>
//                     </Row>
//                   </Col>
//                   <Col sm="12">
//                     <Row>
//                       <Col sm="3">
//                         {" "}
//                         <Input type="checkbox" />{" "}
//                       </Col>
//                       <Col sm="3">Dose 2</Col>
//                       <Col sm="3">Covishield</Col>
//                       <Col sm="3">DD-mm-yyyyy</Col>
//                     </Row>
//                   </Col>
//                 </Col>
//                 {/* end of covid vaccine status */}

//                 {/* start of insurance details */}
//                 <Col sm="12" className="border-bottom p-2">
//                   <Row>
//                     <Col sm="10" className="p-0">
//                       My insurance details
//                     </Col>

//                     <Col sm="1">&nbsp;</Col>
//                     <Col sm="1" className="p-0 text-primary"
//                       role="button"
//                       onClick={() => setlgShowEditInsur(true)}
//                     >
//                       Edit
//                     </Col>
//                   </Row>
//                 </Col>

//                 <Col sm="12" className="p-2">
//                   <Col sm="12">
//                     <Row>
//                       <Col sm="3" className="small">
//                         insurance number
//                       </Col>
//                       <Col sm="3" className="small">
//                         {" "}
//                         insurance type
//                       </Col>
//                       <Col sm="3" className="small">
//                         {" "}
//                         Expiry date
//                       </Col>
//                       <Col sm="3" className="small">
//                         insurance company name
//                       </Col>
//                     </Row>
//                   </Col>
//                   <Col sm="12">
//                     <Row>
//                       <Col sm="3"> 007 </Col>
//                       <Col sm="3">Health insurance</Col>
//                       <Col sm="3">DD-MM-YYYY</Col>
//                       <Col sm="3">LIC Health insurance</Col>
//                     </Row>
//                   </Col>
//                   <Col sm="12">
//                     <Row>
//                       <Col sm="3"> 123 </Col>
//                       <Col sm="3">Health insurance</Col>
//                       <Col sm="3">DD-MM-YYYY</Col>
//                       <Col sm="3">LIC Health insurance</Col>
//                     </Row>
//                   </Col>
//                 </Col>
//                 {/* end of insurance deails */}
//               </Col>
//             </CardBody>
//           </Card>
//         </Form>
//       </Col>
//       <Col sm="12" className="small">
//         <Modal
//           size="lg"
//           show={lgShowAdd1}
//           onHide={() => setLgShowAdd1(false)}
//           aria-labelledby="example-modal-sizes-title-lg"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="example-modal-sizes-title-lg">
//               Health Detials
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body className="bg-light">
//             <Col sm="12" className="p-3 border-bottom">
//               Emergency contact
//             </Col>
//             <Col sm="12" className="p-4">
//               <Button className="btn-primary">Add details</Button>
//             </Col>
//             <Col sm="12" className="pt-3 pb-2 ps-4 border-bottom">
//               <Row>
//                 <Col sm="9" className=" p-0 pt-4">
//                   Covid vaccine status
//                 </Col>
//                 <Col sm="3" className="text-end pt-2">
//                   <Button>Add details</Button>
//                 </Col>
//               </Row>
//             </Col>
//             <Col sm="12" className="p-4">
//               No data yet
//             </Col>

//             <Col sm="12" className="pt-3 pb-2 ps-4 border-bottom">
//               <Row>
//                 <Col sm="9" className=" p-0 pt-4">
//                   My health insurance
//                 </Col>
//                 <Col
//                   sm="3"
//                   className="text-end text-primary pt-4"
//                   role="button"
//                   onClick={() => setLgShowMyinsu(true)}
//                 >
//                   <small>Add</small>
//                 </Col>
//               </Row>
//             </Col>
//             <Col sm="12" className="p-4">
//               No data yet
//             </Col>
//           </Modal.Body>
//         </Modal>
//       </Col>
//       <Col sm="12" className="small">
//         <Modal
//           size="lg"
//           show={lgShowEditHealth}
//           onHide={() => setLgShowEditHealth(false)}
//           aria-labelledby="example-modal-sizes-title-lg"
//         >
//           <Modal.Body className="bg-light">
//             <Col className="p-2">
//               <Card className="bg-light">
//                 <Modal.Header closeButton>
//                   <Modal.Title id="example-modal-sizes-title-lg">
//                     Health Detials
//                   </Modal.Title>
//                 </Modal.Header>
//                 <Col sm='12' className="p-2 bg-white shadow-ms">
//                   <Row>
//                     <Col sm='4' className="p-2">
//                       <Col sm='12' className="p-1">Person Name<sup className='text-danger'> *</sup></Col>
//                       <Col sm='12' className="p-1"><Input className='rounded-0' placeholder="Mr." /></Col>
//                     </Col>
//                     <Col sm='4' className="p-2">
//                       <Col sm='12' className="p-1">Relation<sup className='text-danger'> *</sup></Col>
//                       <Col sm='12' className="p-1">
//                         <Input className='rounded-0' type='select' placeholder="Name">
//                           <option>Choose Option</option>
//                           <option>1</option>
//                           <option>2</option>
//                           <option>3</option>
//                         </Input>

//                       </Col>
//                     </Col>
//                     <Col sm='4' className="p-2">
//                       <Col sm='12' className="p-1">Contact Number<sup className='text-danger'> *</sup></Col>
//                       <Col sm='12' className="p-1"><Input className='rounded-0' placeholder=" " /></Col>
//                     </Col>
//                   </Row>
//                 </Col>
//                     <Col sm='12'>
//                       <Row>
//                         <Col sm='9'>&nbsp;</Col>
//                         <Col sm='3'><Button size='sm' type='' variant="outline-primary" className='float-end'>Add Education</Button>{' '}</Col>
//                       </Row>
//                       <Row>
//                         <Col sm='3'>&nbsp;</Col>
//                         <Col sm='3' className="text-end"><Button className='rounded-1'>Cancel</Button></Col>
//                         <Col sm='3' className="text-start"><Button className='rounded-1'>Save</Button></Col>
//                         <Col sm='3'>&nbsp;</Col>
//                       </Row>
//                     </Col>

//               &nbsp;
//               </Card>
//             </Col>
//           </Modal.Body>
//         </Modal>
//       </Col>
//       <Modal
//         size="lg"
//         show={lgShowEditBG}
//         onHide={() => setLgShowEditBG(false)}
//         aria-labelledby="example-modal-sizes-title-lg"
//       >
//         <Modal.Body className="bg-white">
//           <Col className="p-2">
//             <Card className="bg-light">
//               <Modal.Header closeButton>
//                 <Modal.Title id="example-modal-sizes-title-lg border-bottom">
//                   <small>Blood Group Details</small>
//                 </Modal.Title>
//               </Modal.Header>
//               <Col sm='12' className="p-2">
//                 <Row>
//                   <Col sm='4' className="p-3">
//                     <Col sm='12' className="p-1">Blood Type<sup className='text-danger'> *</sup></Col>
//                     <Col sm='12' className="p-1">
//                       <Input className='rounded-0' type='select' placeholder="Type">
//                         <option>Choose Option</option>
//                         <option>1</option>
//                         <option>2</option>
//                         <option>3</option>
//                       </Input>
//                     </Col>
//                   </Col>
//                   <Col sm='5' className="p-3">
//                     <Col sm='12' className="p-1">Last Blood Donation Date<sup className='text-danger'> *</sup></Col>
//                     <Col sm='12' className="p-1"><Input className='rounded-0' type="date" placeholder="DD-MM-YYYY" /></Col>
//                   </Col>
//                   <Col sm='3'>&nbsp;</Col>
//                 </Row>
//               </Col>
//               <Col sm='12'>
//                 <Row>
//                   <Col sm='3'>&nbsp;</Col>
//                   <Col sm='3' className="text-end"><Button className='rounded-1'>Cancel</Button></Col>
//                   <Col sm='3' className="text-start"><Button className='rounded-1'>Save</Button></Col>
//                   <Col sm='3'>&nbsp;</Col>
//                 </Row>
//               </Col>
//               &nbsp;
//             </Card>
//           </Col>
//         </Modal.Body>
//       </Modal>
//       <Col sm="12">
//         <Modal
//           size="lg"
//           show={lgShowMyinsu}
//           onHide={() => setLgShowMyinsu(false)}
//           aria-labelledby="example-modal-sizes-title-lg"
//           className="border-0"
//         >
//           <Col sm='12' className="p-4 ">

//             <Card className="p-4 bg-secondary ">
//               <Modal.Header closeButton>
//                 <Modal.Title id="example-modal-sizes-title-lg">
//                   My health insurance
//                 </Modal.Title>
//               </Modal.Header>
//               <Modal.Body className="bg-light">
//                 <Col className="p-2">
//                   <Card className="bg-light">
//                     <Col sm='12' className="p-2">
//                       <Row>
//                         <Col sm='4' className="p-3">
//                           <Col sm='12' className="p-3">Insurance number<sup className='text-danger'> *</sup></Col>
//                           <Col sm='12' className="p-3"><Input className='rounded-0' placeholder="Enter your insurance number" /></Col>
//                         </Col>
//                         <Col sm='4' className="p-3">
//                           <Col sm='12' className="p-3">Insurance type<sup className='text-danger'> *</sup></Col>
//                           <Col sm='12' className="p-3">
//                             <Input className='rounded-0' type='select' placeholder="Type">
//                               <option>Select Type</option>
//                               <option>1</option>
//                               <option>2</option>
//                               <option>3</option>
//                             </Input>
//                           </Col>
//                         </Col>
//                         <Col sm='4' className="p-3">
//                           <Col sm='12' className="p-3">Expiry date<sup className='text-danger'> *</sup></Col>
//                           <Col sm='12' className="p-3"><Input className='rounded-0' placeholder="dd-mm-yyyy" /></Col>
//                         </Col>
//                       </Row>
//                     </Col>
//                     <Col sm='8' className="p-3">
//                       <Col sm='12' className="p-3">
//                         Insurance company name<sup className='text-danger'> *</sup>
//                       </Col>
//                       <Col sm='12' className="p-3">
//                         <Input className='rounded-0' type='select' placeholder="Name">
//                           <option>Choose Option</option>
//                           <option>1</option>
//                           <option>2</option>
//                           <option>3</option>
//                         </Input>

//                       </Col>
//                     </Col>
//                     <CardFooter>
//                       <Col sm='12' className="text-end">
//                         <Button className='rounded-1'>Add Insurance</Button>
//                       </Col>
//                       <Col sm='12'>
//                         <Row>
//                           <Col sm='3'>&nbsp;</Col>
//                           <Col sm='3' className="text-end"><Button className='rounded-1'>Cancel</Button></Col>
//                           <Col sm='3' className="text-start"><Button className='rounded-1'>Save</Button></Col>
//                           <Col sm='3'>&nbsp;</Col>
//                         </Row>
//                       </Col>
//                     </CardFooter>
//                   </Card>
//                 </Col>
//               </Modal.Body>
//             </Card>
//           </Col>
//         </Modal>
//       </Col>
//       <Col sm="12" >
//         <Modal
//           size="lg"
//           show={lgShowEditVaccine}
//           onHide={() => setlgShowEditVaccine(false)}
//           aria-labelledby="example-modal-sizes-title-lg"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="example-modal-sizes-title-lg">
//               Covid Vaccine Status
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body className="bg-light">
//             <Col sm='12'>
//               <Row>
//                 <Col sm='5'>Update Your Covid Vaccine Status</Col>
//                 <Col sm='1'
//                   className="p-0 btn btn-primary rounded-1"
//                   role="button"
//                   onClick={() => setlgShowEditUpdate2(true)}
//                 >
//                   <small><b>Update</b></small></Col>
//                 <Col sm='6'>&nbsp;</Col>
//               </Row>
//             </Col>

//           </Modal.Body>
//         </Modal>
//       </Col>
//       <Col sm="12">
//         <Modal
//           size="lg"
//           show={lgShowEditInsur}
//           onHide={() => setlgShowEditInsur(false)}
//           aria-labelledby="example-modal-sizes-title-lg"
//         >
//           <Modal.Body>
//             <Col sm="12" className="p-3 border-bottom ">
//               <Col className="p-1">
//                 <Card className="bg-light rounded-1">
//                   <Modal.Header closeButton >
//                     <Modal.Title id="example-modal-sizes-title-lg">
//                       <small>My health Insurance</small>
//                     </Modal.Title>
//                   </Modal.Header>
//                   <Col sm='12' className="p-3">
//                     <Card className="bg-white rounded-0 shadow-sm p-3 mb-5">
//                       <Col sm='12' className="p-2 small">
//                         <Col sm='12' className='p-2 rounded-0'>
//                           <Row>
//                             <Col sm='4' className="p-2 small">
//                               <Col sm='12' className="m-0 p-0">Insurance number<sup className='text-danger'> *</sup></Col>
//                               <Col sm='12' className="m-0 p-0"><Input className='rounded-0 small' placeholder="Enter your insurance number" /></Col>
//                             </Col>
//                             <Col sm='4' className="p-2 small">
//                               <Col sm='12' className="m-0">Insurance type<sup className='text-danger'> *</sup></Col>
//                               <Col sm='12' className="m-0">
//                                 <Input className='rounded-0' type='select' placeholder="Name">
//                                   <option>Choose Option</option>
//                                   <option>1</option>
//                                   <option>2</option>
//                                   <option>3</option>
//                                 </Input>

//                               </Col>
//                             </Col>
//                             <Col sm='3' className="p-2 small">
//                               <Col sm='12' className="m-0">Expiry date <sup className="text-danger"> *</sup></Col>
//                               <Col sm='12' className="m-0"><Input className='rounded-0' type="DATE" placeholder="Enter designation" /></Col>
//                             </Col>
//                           </Row>
//                         </Col>
//                         <Col sm='12' className='p-2 bg-white rounded-0'>
//                           <Row>
//                             <Col sm='12' className="p-2">
//                               <Col sm='4' className="m-0 p-0">Insurance company name<sup className="text-danger"> *</sup></Col>
//                               <Col sm='8' className="m-0 p-0"><Input className='rounded-0' type='select' placeholder="Name">
//                                 <option>Choose Option</option>
//                                 <option>1</option>
//                                 <option>2</option>
//                                 <option>3</option>
//                               </Input>
//                               </Col>
//                             </Col>
//                           </Row>
//                         </Col>
//                       </Col>
//                     </Card>
//                     <Col sm='12'>
//                       <Row>
//                         <Col sm='9'></Col>
//                         <Col sm='3'><Button size='sm' type='' variant="outline-primary" className='float-end small'>Add Education</Button>{' '}</Col>
//                       </Row>
//                       <Row>
//                         <Col sm='3'>&nbsp;</Col>
//                         <Col sm='3' className="text-end"><Button>Cancel</Button></Col>
//                         <Col sm='3' className="text-start"><Button bsStyle="primary">Save</Button></Col>
//                         <Col sm='3'>&nbsp;</Col>
//                       </Row>
//                     </Col>
//                   </Col>
//                   &nbsp;
//                 </Card>
//               </Col>
//             </Col>
//           </Modal.Body>
//         </Modal>
//       </Col>
//       <Col sm='12'>
//         <Modal
//           size="lg"
//           show={lgShowEditUpdate}
//           onHide={() => setlgShowEditUpdate(false)}
//           aria-labelledby="example-modal-sizes-title-lg"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="example-modal-sizes-title-lg">
//               Covid Vaccine Status
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body className="bg-light">
//             <Col className="p-2">
//               <Card className="bg-light">
//                 <Col sm='12' className="p-2">
//                   <Row>
//                     <Col sm='5' className="p-3">
//                       <Col sm='12' className="p-3">Have You Taken Covid Vaccine?</Col>
//                     </Col>
//                     <Col sm='7' className="p-3">
//                       <Col sm='12' className="p-3 form-goup-row">
//                         <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
//                         <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked"
//                           sm="3"
//                           role="button"
//                           onClick={() => setlgShowEditUpdate2(true)}
//                         >update
//                         </label>
//                       </Col>
//                     </Col>
//                     <Col sm='12'>
//                       <Row>
//                         <Col sm='3'>&nbsp;</Col>
//                         <Col sm='3' className="text-end"><Button className='rounded-1'>Cancel</Button></Col>
//                         <Col sm='3' className="text-start"><Button className='rounded-1'>Save</Button></Col>
//                         <Col sm='3'>&nbsp;</Col>
//                       </Row>
//                     </Col>
//                   </Row>
//                 </Col>
//               </Card>
//             </Col>
//           </Modal.Body>
//         </Modal>
//       </Col>
//       <Col sm='12'>
//         <Modal
//           size="lg"
//           show={lgShowEditUpdate2}
//           onHide={() => setlgShowEditUpdate2(false)}
//           aria-labelledby="example-modal-sizes-title-lg"
//           className="border-0"
//         >
//           <Col sm='12' className="p-4 ">

//             <Card className="p-4 bg-secondary ">
//               <Modal.Header closeButton>
//                 <Modal.Title id="example-modal-sizes-title-lg">
//                   Covid Vaccine Status
//                 </Modal.Title>
//               </Modal.Header>
//               &nbsp;
//               Have You Taken Vaccine?
//               <Modal.Body className="bg-secondary">
//                 <Col className="p-2">
//                   <Card className="bg-white border-0 shadow p-3 mb-5">
//                     <Col sm='12' className="p-2">
//                       <Row>
//                         {/* <Col sm='6' className="p-4">
//                           <Col sm='12' className="p-0">Have You Taken Covid Vaccine ?</Col>
//                         </Col>
//                         <Col sm='6' className="p-4">
//                           <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
//                           <label className="form-check-label text-end pt-0" for="flexSwitchCheckChecked" /> Yes
//                         </Col> */}
//                       </Row>
//                     </Col>
//                     <Col sm='12' className="p-3">
//                       <Row>
//                         <Col sm='4' className="p-2 shadow-sm">
//                           <Row>
//                             <Col sm='2'>&nbsp;</Col>
//                             <Col sm='10'>

//                               Number of Dose
//                             </Col>
//                           </Row>
//                           <Col sm='6'>
//                             <Input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                             <label className="form-check-label" for="flexCheckDefault"> Dose 1</label>
//                           </Col>
//                         </Col>
//                         <Col sm='4' className="p-2">
//                           Vaccine Name
//                           <Input className='rounded-0' type='select' placeholder="Name">
//                             <option>Choose Option</option>
//                             <option>1</option>
//                             <option>2</option>
//                           </Input>

//                         </Col>
//                         <Col sm='4' className="p-2">
//                           Date
//                           <Input className='rounded-0' type='date' placeholder="DD-MM-YYYY" />
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col sm='4' className="p-2">
//                           <Col sm='6'>
//                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                             <label className="form-check-label" for="flexCheckDefault" /> Dose 2
//                           </Col>
//                         </Col>
//                         <Col sm='4' className="p-2">
//                           <Input className='rounded-0' type='select' placeholder="Name">
//                             <option>Choose Option</option>
//                             <option>1</option>
//                             <option>2</option>
//                           </Input>

//                         </Col>
//                         <Col sm='4' className="p-2">
//                           <Input className='rounded-0' type='date' placeholder="disable" />
//                         </Col>
//                       </Row>
//                     </Col>
//                   </Card>
//                   <Col sm='12'>
//                     <Row>
//                       <Col sm='3'>&nbsp;</Col>
//                       <Col sm='3' className="text-end"><Button className='rounded-1'>Cancel</Button></Col>
//                       <Col sm='3' className="text-start"><Button className='rounded-1'>Save</Button></Col>
//                       <Col sm='3'>&nbsp;</Col>
//                     </Row>
//                   </Col>
//                 </Col>
//               </Modal.Body>
//             </Card>
//           </Col>
//         </Modal>
//       </Col>
//       <Col sm="12">
//         <MobileProfileSideBar/>
//       </Col>
//     </>
//   );
// };

// export default Healthdetails;
