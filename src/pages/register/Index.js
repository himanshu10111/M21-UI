import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "reactstrap";
import { RegisterHeader } from "../../component/header/RegisterHeader";
import AdditionalDetails from "./tabs/AdditionalDetails";
import AddressDetails from "./tabs/AddressDetails";
import OrganizationMapping from "./tabs/OrganizationMapping";
import Register from "./tabs/Register";
import SetPassword from "./tabs/SetPassword";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const Index = () => {
  React.useEffect(() => {
    document.body.classList.add("bg-body-form");
    return () => {
      document.body.classList.remove("bg-body-form");
    };
  }, []);

  //state for steps
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    iAm: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    building: "",
    street: "",
    country: "",
    state: "",
    city: "",
    district: "",
    taluka: "",
    zipCode: "",
    m21Wing: "",
    nRC: "",
    sRC: "",
    dRC: "",
    tRC: "",
    cRC:"",
    currentResponsibilities: "",
    gender: "",
    dateOfBirth: "",
    education: "",
    profession: "",
    password: "",
    confirmPassword: "",
    // countryForParmanent: "",
    // stateForParmanent: "",
    // cityForParmanent: "",
    // districtForParmanent: "",
    // talukaForParmanent: "",
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
  const renderComponents = (step) => {
    switch (step) {
      // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 1:
        return (
          <div>
            <Register
              nextStep={nextStep}
              handleFormData={handleInputData}
              values={formData}
            />
          </div>
        );
      // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 2:
        return (
          <div>
            <AddressDetails
              nextStep={nextStep}
              prevStep={prevStep}
              changeInputData={changeInputData}
              handleFormData={handleInputData}
              values={formData}
            />
          </div>
        );
      // case 3 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 3:
        return (
          <div>
            <OrganizationMapping
              nextStep={nextStep}
              prevStep={prevStep}
              changeInputData={changeInputData}
              handleFormData={handleInputData}
              values={formData}
            />
          </div>
        );
      // case 4 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 4:
        return (
          <div>
            <AdditionalDetails
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={handleInputData}
              values={formData}
            />
          </div>
        );
      // case 5 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 5:
        return (
          <div>
            <SetPassword
              prevStep={prevStep}
              handleFormData={handleInputData}
              values={formData}
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
      <div className="">
        <Desktop>
          <Col sm="12">
            <Col sm="12" className="p-4 ">
              &nbsp;
            </Col>
            <Container>
              <Row>
                <Col sm="3">&nbsp;</Col>
                <Col sm="8">
                  <RegisterHeader stepSelected={step} />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col sm="12" className="">
            <Col>{renderComponents(step)}</Col>
          </Col>
          <Col sm="12" className="p-4">
            &nbsp;
          </Col>
        </Desktop>
      </div>

      <div>
        <Mobile>
          <Col sm="12" className="border-0">
            <Col sm="12">
              <RegisterHeader stepSelected={step} />
            </Col>

            <Col sm="12">
              <Col>{renderComponents(step)}</Col>
            </Col>
          </Col>
        </Mobile>
      </div>
    </>
  );

  // javascript switch case to show different form in each step
};

export default Index;
