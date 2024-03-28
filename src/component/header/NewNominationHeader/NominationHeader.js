import React from "react";

import { Card, Input, CardHeader, Col, Row } from "reactstrap";

import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const NominationHeader = ({ stepSelected  }) => {

  return (
    <div>
      <Desktop>
        <Card className="border-0 rounded-0">
          <CardHeader className="border-bottom rounded-0 bg-white p-5 py-2">
            <Col sm="12">
              <Row>
                <Col>
                  <Col className="form-check">
                    <Input
                      type="checkbox"
                      className="rounded-5 box-shadow-0"
                      checked={stepSelected >= 1}
                    />
                    <label className="form-check-label pt-1">
                      <sup>Refered by</sup>{" "}
                    </label>
                  </Col>
                </Col>
                <Col className="p-0">
                  <Col className="form-check p-0">
                    <Input
                      type={stepSelected == 2 ? "radio" : "checkbox"}
                      className="rounded-5"
                      disabled
                      checked={stepSelected >= 2}
                    />
                    <label className="form-check-label pt-1">
                      <sup> Introduction details</sup>
                    </label>
                  </Col>
                </Col>
                <Col className="pe-0">
                  <Col className="form-check">
                    <Input
                      type={stepSelected == 3 ? "radio" : "checkbox"}
                      className="rounded-5"
                      disabled
                      checked={stepSelected >= 3}
                    />
                    <label className="form-check-label pt-1">
                      <sup> Invitee details</sup>{" "}
                    </label>
                  </Col>
                </Col>
                <Col>
                  <Col className="form-check">
                    <Input
                      type={stepSelected == 4 ? "radio" : "checkbox"}
                      className="rounded-5"
                      disabled
                      checked={stepSelected >= 4}
                    />
                    <label className="form-check-label pt-1">
                      <sup>Address details</sup>{" "}
                    </label>
                  </Col>
                </Col>
                <Col className="p-0">
                  <Col className="form-check">
                    <Input
                      type={stepSelected == 5 ? "radio" : "checkbox"}
                      className="rounded-5"
                      disabled
                      checked={stepSelected >= 5}
                    />
                    <label className="form-check-label pt-1">
                      {" "}
                      <sup>Additional details</sup>{" "}
                    </label>
                  </Col>
                </Col>
              </Row>
            </Col>
          </CardHeader>
        </Card>
      </Desktop>
      <Mobile>
        <Card className="border-0 rounded-0">
          <CardHeader className="border-bottom rounded-0 bg-white px-2 py-2">
            <Col className="col-12 text-center">
              <Row>
                <Col>
                  <Col className="">
                    <Input
                      type="checkbox"
                      className="rounded-5 box-shadow-0"
                      checked={stepSelected >= 1}
                    />
                    <label className="form-check-label pt-1">
                      <sup>Refered by</sup>{" "}
                    </label>
                  </Col>
                </Col>
                <Col className="p-0">
                  <Col className=" p-0">
                    <Input
                      type={stepSelected == 2 ? "radio" : "checkbox"}
                      className="rounded-5"
                      disabled
                      checked={stepSelected >= 2}
                    />
                    <label className="form-check-label pt-1">
                      <sup> Introduction details</sup>
                    </label>
                  </Col>
                </Col>
                <Col className="pe-0">
                  <Col className="">
                    <Input
                      type={stepSelected == 3 ? "radio" : "checkbox"}
                      className="rounded-5"
                      disabled
                      checked={stepSelected >= 3}
                    />
                    <label className="form-check-label pt-1">
                      <sup> Invitee details</sup>{" "}
                    </label>
                  </Col>
                </Col>
                <Col>
                  <Col className="">
                    <Input
                      type={stepSelected == 4 ? "radio" : "checkbox"}
                      className="rounded-5"
                      disabled
                      checked={stepSelected >= 4}
                    />
                    <label className="form-check-label pt-1">
                      <sup>Address details</sup>{" "}
                    </label>
                  </Col>
                </Col>
                <Col className="p-0">
                  <Col className="">
                    <Input
                      type={stepSelected == 5 ? "radio" : "checkbox"}
                      className="rounded-5"
                      disabled
                      checked={stepSelected >= 5}
                    />
                    <label className="form-check-label pt-1">
                      {" "}
                      <sup>Additional details</sup>{" "}
                    </label>
                  </Col>
                </Col>
              </Row>
            </Col>
          </CardHeader>
        </Card>
      </Mobile>
    </div>
  );
};

export default NominationHeader;
