import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import Profile from "../../assets/img/Profile-Pic.png";
import { useMediaQuery } from 'react-responsive';

import MobileProfileSideBar from './MobileProfileSideBar';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 })
  return isMobile ? children : null
}
const ProfilePage = () => {
  return (
    <>
      <Desktop>
        <Col lg="12" className="">
          <Col className='container-fluid'>
          <Row>
          <Col lg="2" className="bg-secondary  p-2  ">
            <Col sm="12" className="text-dark p-2 fs-5">
              <dt>My Profile</dt>
            </Col>
            <Col sm="12" className="border-bottom pb-3">
              <Col sm="12" className="p-0">
                <img src={Profile} className="w-75" />
              </Col>
              <label className="text-center">
                <b className="fs-5">Prafull Bhagat</b>
                <br />
                M21-1234356346
                <br />
                <small>m21-member ID</small>{" "}
              </label>
            </Col>
            <Col lg="12" className=" p-2">
              <Link to="/p/a" className="text-decoration-none text-dark small">
                Personal Details
              </Link>
            </Col>
            <Col lg="12" className="p-2">
              <Link to="/p/m" className="text-decoration-none text-dark small">
                M21 Organization
              </Link>
            </Col>
            <Col lg="12" className="p-2">
              <Link to="/p/s" className="text-decoration-none text-dark small">
                Social Contribution
              </Link>
            </Col>
            <Col lg="12" className="p-2">
              <Link to="/p/h" className="text-decoration-none text-dark small">
                Health Details
              </Link>
            </Col>
          </Col>
          <Col lg="10" className="px-0">
            <Outlet />
          </Col>
          </Row>
          </Col>
        </Col>
      </Desktop>
      <Mobile>
        <Col sm="12" className="bg-white">
          <Card className="bg-white border-0">
            <CardHeader className="bg-white alert-link ROW">
            
            </CardHeader>
            <CardBody>
              <Col className="border-bottom d-flex pb-3 col-12">
                <Col className="p-0 col-4">
                  <img src={Profile} className="w-75" />
                </Col>
                <label className="text-center">
                  <b className="fs-5">Prafull Bhagat</b>
                  <br />
                  M21-1234
                  <br />{" "}
                </label>
              </Col>
            </CardBody>
          </Card>

          <Col lg="12" className="float-end">
            <Outlet />
          </Col>

          <Col sm="12">
            
            <MobileProfileSideBar/>
          </Col>
        </Col>
      </Mobile>
    </>
  );
}

export default ProfilePage;