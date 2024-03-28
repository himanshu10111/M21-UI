import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Card, Col, Form, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

import NominationTab from "../home/NewNominationTab/NominationTabIndex";
import SearchIcon from "../../assets/img/Search.png";

import SettingIcon from "../../assets/img/Settings2.png";

const Nomination = (args) => {
  const [model, setModel] = useState(false);

  const toggle = () => setModel(!model);
  return (
    <div>
      <Col lg="12" className="form-control bg-transparent border-0">
        <Card className="bg-transparent border-0">
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab
              title="My Nomination"
              eventKey="home"
              className="bg-transparent"
            >
              <Col className="section">
                <Col className="container-fluid">
                  <Col className="form-control bg-transparent border-0">
                    <Form>
                      <Col className="form-contend">
                        <Col sm="12">
                          <Row>
                            <Col sm="5">
                              <Button
                                onClick={toggle}
                                className="border-0 M21-btn"
                              >
                                New Nomination
                              </Button>
                            </Col>
                            <Col sm="4">
                              <Col
                                sm="12"
                                className="border rounded-5 text-end form-control "
                                contentEditable="true"
                              >
                                <img
                                  src={SearchIcon}
                                  className="col-sm-1 ps-2 "
                                  role="button"
                                />
                              </Col>
                            </Col>
                            <Col sm="2">
                              <Col
                                sm="12"
                                className="border rounded-5 bg-black text-end form-control "
                                contentEditable="true"
                              ></Col>
                            </Col>
                            <Col sm="1">
                              <img src={SettingIcon} role="button" />
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="12">
                          <Modal
                            className="modal-lg"
                            isOpen={model}
                            toggle={toggle}
                            {...args}
                          >
                            <ModalHeader
                              toggle={toggle}
                              className="border-bottom-0 px-5 pt-4 pb-2 "
                            >
                              <label className=" col-sm-12">
                                <h3>New Nomination</h3>
                              </label>
                            </ModalHeader>
                            <Col lg="12">
                              <ModalBody className="p-0">
                                <NominationTab />
                              </ModalBody>
                            </Col>
                          </Modal>
                        </Col>
                      </Col>
                    </Form>
                  </Col>
                </Col>
              </Col>
            </Tab>
            <Tab eventKey="profile" title="Tab-1" className="bg-transparent">
              hello
            </Tab>
          </Tabs>
        </Card>
        {/* <Card>
          <Col lg="10">
            <Col>
              <Col className='m-3 '> <b>My Nominations </b></Col>
            </Col>
            <Col className='start-end m-3' lg="12">
              <Row>
                <Col lg="9">&nbsp;</Col>
                <Col >
                  <Button onClick={toggle} className='btn btn-primary start-end'>New Nomination</Button>
                  <Col>                    
                    <Modal className='modal-lg' isOpen={model} toggle={toggle} {...args}>
                      <ModalHeader toggle={toggle} className="border-bottom-0 px-5 pt-4 pb-2  bg-secondary">
                        <label className=' col-sm-12'>

                        <h3>New Nomination</h3> 
                        </label>
                      
                      
                      </ModalHeader>
                        <Col lg="12">
                      <ModalBody className='p-0'>
                       
                        <NominationTab/>
                      </ModalBody>
                        </Col>
                    
                    </Modal>
                  </Col>
                </Col>
              </Row>
            </Col>
            <Col className='bg-secondary m-3' lg="12">
              <Row>
                <Col lg="10">&nbsp;</Col>
                <Col className='text-white'>setting icon</Col>
              </Row>
            </Col>
            <Col className='m-3'>
              <Table >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
              </Table>
            </Col>
          </Col>
        </Card> */}
      </Col>
    </div>
  );
};

export default Nomination;
