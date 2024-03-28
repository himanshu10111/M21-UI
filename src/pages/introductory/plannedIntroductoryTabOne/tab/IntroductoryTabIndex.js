import React, { useState } from "react";
import { Col } from "react-bootstrap";
import IntroductoryHeader from "../../../../component/header/intorductoryHeader/introductoryHeader";
import IntroductoryBasicDetail from "./introductoryBasicDetail";
import IntroductoryVanueDetail from "./introductoryVenuDetail";

const IntroductoryTabIndex = ({ closeTab }) => {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({});

  const handleInputData = (input) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const handleFormChecked = (input) => (e) => {
    const { checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: checked,
    }));
  };

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };
  const createIntroductoryMeeting = (step) => {
    switch (step) {
      case 1:
        return (
          <div>
            <IntroductoryBasicDetail
              nextStep={nextStep}
              values={formData}
              handleFormData={handleInputData}
              handleFormChecked={handleFormChecked}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <IntroductoryVanueDetail
              nextStep={nextStep}
              prevStep={prevStep}
              values={formData}
              handleFormData={handleInputData}
              closeTab={closeTab}
              handleFormChecked={handleFormChecked}
            />
          </div>
        );
      default:
        return <div className="App"></div>;
    }
  };

  return (
    <>
      <Col sm="12">
        <IntroductoryHeader stepSelected={step} />
      </Col>
      <Col sm="12">{createIntroductoryMeeting(step)}</Col>
    </>
  );
};

export default IntroductoryTabIndex;
