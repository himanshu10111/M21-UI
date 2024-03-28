import React, { useState } from "react";
import AddressDetails from "./AddressDetails";
import IntroductoryDetails from "./IntroductoryDetails";
import NewNominationDetails from "./NewNominationDetails";
import Refered from "./Refered";
import AdditionalDetails from "./AdditionalDetails";
import { Col } from "reactstrap";
import NominationHeader from "../../../component/header/NewNominationHeader/NominationHeader";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};


const NominationTab = ({closeTab}) => {
  //state for steps
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    M21Member: "",
    KnownAsOne: "",
    KnownAsTwo: "",
    KnownAsThree: "",
    introType: "",
    m21wing: "",
    splintrodrive: "",
    prelangguest: "",
    prelangguest: "",
    InvtiTitle: "",
    firstName: "",
    lastName: "",
    MobileNo: "",
    Email: "",
    AltEmail: "",
    houseNo: "",
    streetdetails: "",
    Country: "",
    State: "",
    City: "",
    District: "",
    Taluka: "",
    PinZip: "",
    Gender: "",
    Education: "",
    Profession: "",
    Nationality: "",
    SCI: "",
    RegPraInvi: "",
  });

  const changeInputData = (key, inputValue) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: inputValue,
    }));
  };

  const handleInputData = (input) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
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

  // javascript switch case to show different form in each step
  const nominationRenderComponent = (step) => {
    switch (step) {
      // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 1:
        return (
          <div>
            <Refered
              nextStep={nextStep}
              values={formData}
              handleFormData={handleInputData}
            />
          </div>
        );
      // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 2:
        return (
          <div>
            <IntroductoryDetails
              nextStep={nextStep}
              prevStep={prevStep}
              values={formData}
              handleFormData={handleInputData}
            />
          </div>
        );
      // case 3 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 3:
        return (
          <div>
            <NewNominationDetails
              nextStep={nextStep}
              prevStep={prevStep}
              values={formData}
              handleFormData={handleInputData}
            />
          </div>
        );
      // case 4 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 4:
        return (
          <div>
            <AddressDetails
              nextStep={nextStep}
              prevStep={prevStep}
              values={formData}
              handleFormData={handleInputData}
              changeInputData={changeInputData}
            />
          </div>
        );
      // case 5 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 5:
        return (
          <div>
            <AdditionalDetails
              prevStep={prevStep}
              values={formData}
              handleFormData={handleInputData}
              closeTab={closeTab}
            />
          </div>
        );
      // default case to show nothing
      default:
        return <div className="App"></div>;
    }
  };

  return (
    <>
      <Desktop>
        <Col sm="12">
          <NominationHeader stepSelected={step} />
        </Col>
        <Col sm="12">{nominationRenderComponent(step)}</Col>
      </Desktop>

      <Mobile>
        <Col className="col-12">
          <NominationHeader stepSelected={step} />
        </Col>
        <Col className="col-12">{nominationRenderComponent(step)}</Col>
      </Mobile>
    </>
  );
};

export default NominationTab;
