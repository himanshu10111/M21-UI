import React, { useEffect, useState } from "react";
import {
  Accordion,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CloseButton,
  Container,
  Dropdown,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  InputGroup,
  Tab,
  Tabs,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import {
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Input,
  Label,
  Row,
} from "reactstrap";
import MyProfile from "../../../assets/img/MyProfile.png";
import FailuerAlertNotification from "../../../component/alertNotification/parentAlert/failuerAlert";
import AlertNotificationSuccess from "../../../component/alertNotification/parentAlert/successtAlert";

import MilestoneDot from "../../../assets/img/Ellipse118.png";

const Select = ({ options, value, title, handleSelectChange }) => {
  return (
    <Input
      type="select"
      name="title"
      value={value ? value : ""}
      onChange={handleSelectChange}
    >
      <option value="" disabled selected hidden>
        {title}
      </option>
      {options.length > 0 &&
        options.map((e) => (
          <option key={e.id} value={e.id}>
            {e.name}
          </option>
        ))}
    </Input>
  );
};

const MyProfileindex = () => {
  const BaseURL = process.env.REACT_APP_BASE_URL;

  const [style, setStyle] = useState("title-text-color");
  const TabColorDark = () => {
    setStyle("text-dark");
  };

  /**
   * comman function for all toggle oprations
   */
  let first;
  let second;
  const [isshowmoduel, setIsShowModuel] = useState(true);
  const FnHideShow = (item) => {
    if (item === "first") {
      setIsShow((current) => !current);
    } else if (item === "second") {
      setIsContactShow((current) => !current);
    }
  };

  // Start of personal details tap
  const [isShow, setIsShow] = useState(true);
  const PersonalDetailsName = () => {
    setIsShow((current) => !current);
  };

  const [isContactShow, setIsContactShow] = useState(true);
  const ContactDetails = () => {
    setIsContactShow((current) => !current);
  };


  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    fetch(`${BaseURL}/api/profile/userAddress/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAddresses(data.object);
        setHouseNumber(addresses.house);
        setStreetDetails(addresses.street);
        setCountry(addresses.country);
        setIsDistrict(addresses.district);
        setIsState(addresses.state);
        setCity(addresses.city);
        setTaluka(addresses.taluka);
        setPin(addresses.pinZipCode);
        setPerHouseNumber(addresses.permanentHouse);
        setPerStreetDetails(addresses.permanentStreet);
        setPerCountry(addresses.permanentCountry);
        setPerState(addresses.permanentState);
        setPerDistrict(addresses.permanentDistrict);
        setPerCity(addresses.permanentCity);
        setPerTaluka(addresses.permanentTaluka);
        setPerPin(addresses.permanentPinZipCode);
        console.log("Addresses: ",addresses);
      });
  }, []);

  //Address details submit handler
  const ProfileAddressDetails = (e) => {
    e.preventDefault();

    const responseBody = {
      "house": houseNumber,
      "street": streetDetails,
      "country": country,
      "city": city,
      "state": isstate,
      "district": isdistrict,
      "taluka": taluka,
      "pinZipCode": pin,
      "permanent_house": perHouseNumber,
      "permanent_street": perStreetDetails,
      "permanent_country": perCountry,
      "permanent_district": isPerDistrict,
      "permanent_taluka": perTaluka,
      "permanent_pinZipCode": perPin,
      "permanent_city": perCity,
      "permanent_state": isPerState
    };
    const res = fetch(`${BaseURL}/api/update/AddressDetails/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responseBody),
    })
      .then((response) => response.json())
    // .then((user) => {
    //   console.log(user);
    // });
    PersonalAddressDetail();
  };

  const [isPersonalAddressShow, setIsPersonalAddressShow] = useState(true);
  const PersonalAddressDetail = () => {
    setIsPersonalAddressShow((current) => !current);
  };

  //-----------------------------------Update Additional details submit handler------
  const ProfileAdditionalDetails = (e) => {
    e.preventDefault();
    const responseBody = {
      "gender": gender,
      "dateOfBirth": dateofbirth
    };

    e.preventDefault();
    const res = fetch(`${BaseURL}/api/user/update-additional-details/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responseBody),
    })
      .then((response) => response.json())
    // .then((user) => {
    //   console.log(user);
    // });
    AdditionalDetailCloseCancel();
  };
  //Additional details close cancel opration

  const [isAdditionalDetail, setIsAdditionalDetail] = useState(true);

  const AdditionalDetailCloseCancel = () => {
    setIsAdditionalDetail((current) => !current);
  };
  // Educational details close cancel fun

  // Education details
  const [iseducation, setIsEducation] = useState("");
  const [isinstitute, setIsInstitute] = useState("");
  const [isyrpass, setIsYrPass] = useState("");
  const [iseducountry, setIsEduCountry] = useState("");
  const [isedustate, setIsEduState] = useState("");
  const [iseducity, setIsEduCity] = useState("");

  const [isEducationalDetail, setIsEducationalDetail] = useState(true);
  const EducationalDetail = () => {
    setIsEducationalDetail((current) => !current);
  };

  //Job details
  const [isoccupation, setIsOccupation] = useState("");
  const [iscomapnyname, setIsComapnyName] = useState("");
  const [isdesignation, setIsDesignation] = useState("");
  const [jobCountry, setJobCountry] = useState("");
  const [jobState, setJobState] = useState("");
  const [jobCity, setJobCity] = useState("");

  // Job details close cancel part

  const [isJobdetails, setIsJobdetails] = useState(true);
  const JobDetails = () => {
    setIsJobdetails((current) => !current);
  };

  // divercity details
  const [issoccatagory, setIsSocCatagory] = useState("");
  const [isregional, setIsRegional] = useState("");

  //Divercity details close cancel part
  const [isDivercityDetail, setIsDivercityDeatil] = useState(true);
  const DivercityDetail = () => {
    setIsDivercityDeatil((current) => !current);
  };
  // end of Personal details

  // Start of M21 Organization tap

  // const [isShowMyJourney, setIsShowMyJourney] = useState(true);
  // const MyM21Journey = () => {
  //   setIsShowMyJourney((current) => !current);
  // };

  const [isMyOrganizationMap, setIsMyOrganizationMap] = useState(true);
  const MyOrganization = () => {
    setIsMyOrganizationMap((current) => !current);
  };

  const [isMyExpertise, setIsMyExpertise] = useState(true);
  const MyExpertise = () => {
    setIsMyExpertise((current) => !current);
  };

  const [isAreaOfInterest, setIsAreaOfInterest] = useState(true);
  const MyAreaOfInterest = () => {
    setIsAreaOfInterest((current) => !current);
  };

  // start of Social contribution tap

  const [socialAddressOne, setSocialAddressOne] = useState("");
  const [socialAddressTwo, setSocialAddressTwo] = useState("");
  const [socialCountry, setSocialCountry] = useState("");
  const [socialState, setSocialState] = useState("");
  const [socialCity, setSocialCity] = useState("");
  const [socialTaluka, setSocialTaluka] = useState("");
  const [socialDistrict, setSocialDistrict] = useState("");
  const [socialPin, setSocialPin] = useState("");
  const [issocpositionheld, setSocPOsitionHeld] = useState("");
  const [issocorgname, setIsSocOrgName] = useState("");

  const [isSocialContribution, setIsSocialcontribution] = useState(true);
  const Socialcontribution = () => {
    setIsSocialcontribution((current) => !current);
  };

  //start social voluntarism

  const [isorganiztionname, setIsOrganizationName] = useState("");
  const [isprojectname, setIsProjectName] = useState("");
  const [ispositionheld, setIsPositionHeld] = useState("");
  const [socialVoluntarismAddOne, setSocialVoluntarismAddOne] = useState("");
  const [socialVoluntarismAddTwo, setSocialVoluntarismTwo] = useState("");
  const [socialCountryVoluntry, setSocialCountryVoluntry] = useState("");
  const [socialStateVoluntry, SetSocialStateVoluntry] = useState("");
  const [socialVoluntryCity, setSocialVoluntryCity] = useState("");
  const [socialVoluntryDistrict, setSocialVoluntryDistrict] = useState("");
  const [socialVoluntryTaluka, setSocialVoluntryTaluka] = useState("");
  const [socialVoluntryPin, setSocialVoluntryPin] = useState("");

  const [isSocialVoluntarism, setIsSocialVoluntarism] = useState(true);
  const SocialVoluntarism = () => {
    setIsSocialVoluntarism((current) => !current);
  };

  // start of health detail tap

  const [isemergencyrelation, setIsEmergencyRelation] = useState("");
  const [isemergencypername, setIsEmergencyPerName] = useState("");
  const [emerContactNumber, setEmerContactNumber] = useState("");

  const [isEmergencyNo, setIsEmergencyNo] = useState(true);
  const EmergencyContactDetail = () => {
    setIsEmergencyNo((current) => !current);
  };

  const EmergencyContactDetailAdd = () => {
    setIsEmergencyNo((current) => !current);
  };

  const EmergencyContactDetailEdit = () => {
    setIsEmergencyNo((current) => !current);
  };

  //error message for alphabet entery
  const [errorMessageForHealthContact, setErrorMessageForHealthContact] =
    useState("");

  const CheckValidationForNumber = () => {
    if (
      (emerContactNumber >= "a" && emerContactNumber <= "z") ||
      (emerContactNumber >= "A" && emerContactNumber <= "Z")
    ) {
      setErrorMessageForHealthContact("You had enter alphabet");
    } else {
      setErrorMessageForHealthContact("");
    }
  };

  //health details value holder
  const [bloodGroup, setBloodGroup] = useState("");
  const [bloodDonateDate, setBloodDonateDate] = useState("");

  // health details close cancle part
  const [isBloodGroup, setIsBloodGroup] = useState(true);
  const BloodGroupDetail = () => {
    setIsBloodGroup((current) => !current);
  };

  const BloodGroupDetailAdd = () => {
    setIsBloodGroup((current) => !current);
  };
  const BloodGroupDetailEdit = () => {
    setIsBloodGroup((current) => !current);
  };

  const [bloodDataApiHolder, setBloodDataApiHolder] = useState("");
  const [bloodDetails, setBloodDetails] = useState("");
  useEffect(() => {
    fetch(`${BaseURL}/api/user/blood-details/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBloodDetails(data.object);
        setBloodGroup(bloodDetails.bloodType);
        // const dobDate = new Date(bloodDetails.bloodDate);
        // const formattedDOB = dobDate.toISOString().split("T")[0];
        setBloodDonateDate(formatDate(bloodDetails.bloodDate));
      });
  }, []);

  const BloodGroupDetailsubmitHandler = (e) => {
    e.preventDefault();
    const BloodDetailsHolder = {
      bloodType: bloodGroup,
      bloodDate: bloodDonateDate,
    };

    fetch(`${BaseURL}/api/save/user-blood-details/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(BloodDetailsHolder),
    })
      .then((res) => res.json())
    // .then((data) => {
    // });
    BloodGroupDetail();
  };

  // covid vaccine status
  const [isvaccinename, setIsVaccineName] = useState("");
  const [secondVaccineName, setSecondVaccineName] = useState("");
  const [isvaccinedate, setIsVaccineDate] = useState("");
  const [secondVaccineDate, setSecondVaccineDate] = useState("");

  const [enableDoseOne, setEnableDoneOne] = useState(true);
  const [enableDoseTwo, setEnableDoseTwo] = useState(true);
  const [isVaccineStatusUpdate, setIsVaccineStatusUpdate] = useState(false);
  const [isVaccineStatus, setIsvaccineStatus] = useState(false);

  const [isConvidStatus, setIsCovidStatus] = useState(true);

  const [stateManageForDoseOne, setStateManageForDoseOne] = useState(true);
  const [stateManageForDoseTwo, setStateManageForDoseTwo] = useState(true);

  const [disabledVacciceSelectOne, setDisabledVaccineSelectOne] =
    useState(true);
  const [disabledVaccineSelectTwo, setDisabledVaccineSelectTwo] =
    useState(true);

  const [makeCheckBoxOneChecked, setMakeCheckBoxOneChecked] = useState(true);
  const [makeCheckBoxTwoChecked, setMakeCheckBoxTwoChecked] = useState(true);

  const [selectDisableOpr, setSelectDisableOpr] = useState("AmFilledUp");

  const EditVaccineDoseOne = () => {
    if (isvaccinename !== "" && isvaccinedate !== "") {
      setSelectDisableOpr("FirstVaccineEntryFillUp");
    }

    setIsVaccineName(isvaccinename);
    setSecondVaccineName(secondVaccineName);
    // setDisabledVaccineSelectTwo(false);
    // setMakeCheckBoxOneChecked(false)
  };
  const EditVaccineDoseTwo = () => {
    if (secondVaccineName !== "" && secondVaccineDate !== "") {
      setSelectDisableOpr("SecondVaccineEntryFillup");
    }
    setIsVaccineName(isvaccinename);
    setSecondVaccineName(secondVaccineName);
    // setDisabledVaccineSelectOne(false);
    // setMakeCheckBoxTwoChecked(false)
  };

  //vaccine close button
  const CovidStatus = (e) => {
    e.preventDefault();

    setIsCovidStatus((current) => !current);

    // if (isvaccinename !== "" &&
    //   isvaccinedate !== "" &&
    //   secondVaccineName !== "" &&
    //   secondVaccineDate !== "") {
    //   setStateManageForDoseOne((current) => current);
    //   setStateManageForDoseTwo((current) => current);
    // } if (isvaccinename !== "" &&
    //   isvaccinedate !== "" &&
    //   secondVaccineName === "" &&
    //   secondVaccineDate === "") {
    //   // setStateManageForDoseOne((current) => current);
    //   setStateManageForDoseTwo((current) => current);
    // }

    // if (isvaccinename !== "" && isvaccinedate !== "") {

    //   setStateManageForDoseOne((current) => current);

    //   if (secondVaccineName === "" && secondVaccineDate === "") {
    //     setStateManageForDoseTwo((current) => current);
    //   }
    // } else {
    //   setStateManageForDoseOne((current) => !current);
    // }
    // if (secondVaccineName !== "" && secondVaccineDate !== "") {
    //   setStateManageForDoseTwo((current) => !current);
    // } else if (secondVaccineName === "" && secondVaccineDate === "") {
    //   setStateManageForDoseTwo((current) => current);
    // } else {
    //   setStateManageForDoseTwo((current) => !current);
    // }
  };
  //vaccine cancel button
  const CovidCancelButton = () => {
    // setSecondVaccineName("");
    // setIsVaccineName("");
    // setIsVaccineDate("");
    // setSecondVaccineDate("");
    setIsCovidStatus((current) => !current);
    setStateManageForDoseOne((current) => current);
    setStateManageForDoseTwo((current) => current);
  };

  const CovidStatusAdd = () => {
    if (selectDisableOpr === "FirstVaccineEntryFillUp") {
      if (isvaccinename !== "" && isvaccinedate !== "") {
        setIsVaccineName(isvaccinename);
        setIsVaccineDate(isvaccinedate);
        setSelectDisableOpr("AmDisabled");
      }
      if (isvaccinename === "" && isvaccinedate === "") {
        setIsVaccineName("");
        setIsVaccineDate("");
        setSelectDisableOpr("AmEmpty");
      }
    }
    if (isvaccinename !== "" && isvaccinedate !== "") {
      setSelectDisableOpr("AmDisabled");
      if (secondVaccineName === "" && secondVaccineDate === "") {
        setEnableDoseTwo(false);
      } else {
        setEnableDoseTwo(true);
      }
    }

    setIsCovidStatus((current) => !current);
    setIsvaccineStatus((current) => !current);
    setIsVaccineStatusUpdate((current) => !current);
  };

  const CovidStatusEdit = () => {
    if (
      selectDisableOpr === "FirstVaccineEntryFillUp" &&
      selectDisableOpr === "SecondVaccineEntryFillup"
    ) {
      if (
        isvaccinename !== "" &&
        isvaccinedate !== "" &&
        secondVaccineName !== "" &&
        secondVaccineDate !== ""
      ) {
        setIsVaccineName(isvaccinename);
        setIsVaccineDate(isvaccinedate);
        setIsVaccineDate(isvaccinedate);
        setSecondVaccineDate(secondVaccineDate);
        setEnableDoneOne(false);
        setEnableDoseTwo(false);
      }
    }
    if (selectDisableOpr === "FirstVaccineEntryFillUp") {
      if (isvaccinename !== "" && isvaccinedate !== "") {
        setSelectDisableOpr("FirstVaccineEntryFillUp");
        setIsVaccineName(isvaccinename);
        setIsVaccineDate(isvaccinedate);
        setIsCovidStatus((current) => !current);
        setIsvaccineStatus((current) => !current);
        setIsVaccineStatusUpdate((current) => !current);
        setStateManageForDoseTwo((current) => !current);
      }
    }
    if (selectDisableOpr === "SecondVaccineEntryFillup") {
      if (secondVaccineName !== "" && secondVaccineDate !== "") {
        setSelectDisableOpr("SecondVaccineEntryFillup");
        setIsCovidStatus((current) => !current);
      }
    }

    // setSelectDisableOpr("AmEmpty")
    // setIsVaccineName(isvaccinename);
    // setSecondVaccineName(secondVaccineName);
    // setIsVaccineDate(isvaccinedate);
    // setSecondVaccineDate(secondVaccineDate);
    // setIsCovidStatus((current) => !current);
    // setIsvaccineStatus((current) => !current);
    // setIsVaccineStatusUpdate((current) => !current);
  };

  const [defaultCheckBoxActive, setDefaultCheckBoxActive] = useState(true);
  const [defaultCheckBoxTwoActive, setDefaultCheckBoxTwoActive] =
    useState(true);

  const EnableStateDoseOne = (e) => {
    setStateManageForDoseOne((current) => !current);
    setEnableDoneOne(false);
    setDefaultCheckBoxActive(false);
  };

  const EnableStateDosTwo = () => {
    if (isvaccinename === "" && isvaccinedate === "") {
      setEnableDoseTwo(true);
    } else {
      setStateManageForDoseTwo((current) => !current);
      setEnableDoseTwo(false);
      setDefaultCheckBoxTwoActive(false);
    }
  };

  const VaccineStatus = (e) => {
    e.preventDefault();
    setIsvaccineStatus((current) => !current);
  };

  const VaccineStatusUpdate = () => {
    setIsVaccineStatusUpdate((current) => !current);
  };
  const [isInsurance, setIsInsurance] = useState(true);
  const InsuranceDetail = () => {
    setIsInsurance((current) => !current);
  };

  // const [isReSocialContribution, setIsReSocialcontribution] = useState(true);
  // const ReSocialContribution = () => {
  //   setIsReSocialcontribution((current) => !current);
  //   setIsSocialcontribution((current) => !current);
  //   isSocialContribution((current)=>current);
  // };

  //personal details
  const [selectGender, setSelectGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [altMobilenumber, setAltmobileNumber] = useState("");
  const [altEmailId, setAltEmailId] = useState("");

  //present address details
  const [houseNumber, setHouseNumber] = useState("");
  const [streetDetails, setStreetDetails] = useState("");
  const [landMark, setLandMark] = useState("");
  const [country, setCountry] = useState("");
  const [isstate, setIsState] = useState("");
  const [isdistrict, setIsDistrict] = useState("");
  const [city, setCity] = useState("");
  const [taluka, setTaluka] = useState("");
  const [pin, setPin] = useState("");

  //permanent address detais
  const [perHouseNumber, setPerHouseNumber] = useState("");
  const [perStreetDetails, setPerStreetDetails] = useState("");
  const [perLandMark, setPerLandMark] = useState("");
  const [perCountry, setPerCountry] = useState("");
  const [isPerState, setPerState] = useState("");
  const [isPerDistrict, setPerDistrict] = useState("");
  const [perCity, setPerCity] = useState("");
  const [perTaluka, setPerTaluka] = useState("");
  const [perPin, setPerPin] = useState("");

  //Additional details
  const [dateofbirth, setDataOfBirth] = useState("");
  const [gender, setGender] = useState("");

  const [isInsurancenumber, setIsInsuranceNumber] = useState("");
  const [isinsurancetype, setIsInsuranceType] = useState("");
  const [isinsuranceexpire, setIsInsuranceExpire] = useState("");
  const [isinsurancecompname, SetIsInsuranceCompName] = useState("");

  const [divercityApiHolder, setDivercityApiHolder] = useState([]);
  useEffect(() => {
    fetch(`${BaseURL}/api/user-diversity-details/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDivercityApiHolder(data.object);
        setIsSocCatagory(divercityApiHolder.socialCategory);
        setIsRegional(divercityApiHolder.religionPracticed);
      });
  }, []);

  const divercitySubmitHandler = (e) => {
    e.preventDefault();
    const divercityDetials = {
      "socialCategory": issoccatagory,
      "religionPracticed": isregional,
    };

    fetch(`${BaseURL}/api/user/update-diversity/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(divercityDetials),
    })
      .then((res) => res.json())
    // .then((data) => {
    //   console.log(data);
    // });
    DivercityDetail();
  };

  //job update
  const [occupationProfile, setOccupationProfile] = useState(false);
  const [companyNameProfile, setCompanyNameProfile] = useState("");
  const [designationProfile, setDesignationProfile] = useState("");

  // -------------------------------------Job Details----------------------------

  const [jobDetail, setJobDetails] = useState([
    {
      isoccupation: '',
      iscomapnyname: '',
      isdesignation: '',
      jobCountry: '',
      jobState: '',
      jobCity: '',
    },
  ]);

  const addJobSection = () => {
    setJobDetails([...jobDetail,
    {
      isoccupation: '',
      iscomapnyname: '',
      isdesignation: '',
      jobCountry: '',
      jobState: '',
      jobCity: ''
    }]);
  };

  const removeJobSection = (index) => {
    const updatedJobDetails = [...jobDetail];
    updatedJobDetails.splice(index, 1);
    setJobDetails(updatedJobDetails);
  };

  const handleJobFieldChange = (index, field, value) => {
    const updatedJobDetails = [...jobDetail];
    updatedJobDetails[index][field] = value;
    setJobDetails(updatedJobDetails);
  };

  const [jobDetailHandler, setjobDetailHandler] = useState([])
  useEffect(() => {
    fetch(`${BaseURL}/api/user/job-details/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setjobDetailHandler(data);
      });
  }, []);

  const jobDetailSubmitHandler = (e) => {
    e.preventDefault();

    const jobDetails = jobDetail.map((detail) => {
      return {
        profession: detail.isoccupation,
        companyName: detail.iscomapnyname,
        designation: detail.isdesignation,
        country: detail.jobCountry,
        state: detail.jobState,
        city: detail.jobCity
      };
    });
    fetch(`${BaseURL}/api/user/update-job-details/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(jobDetails),
    })
      .then((res) => res.json())
    // .then((data) => {
    //   console.log("after fetch", data);
    // });
    JobDetails();
  };

  const id = localStorage.getItem("ProfileId");
  // -------------------------------------------------------------------------------------
  // Logic for update Education details
  const [isNewEducation, setNewEducation] = useState(false);
  const [educationDetails, setEducationDetails] = useState([
    {
      education: "",
      university: "",
      passing: "",
      country: "",
      state: "",
      city: "",
    },
  ]);

  const addEducationSection = () => {
    setEducationDetails([
      ...educationDetails,
      {
        education: "",
        university: "",
        passing: "",
        country: "",
        state: "",
        city: "",
      },
    ]);
    setNewEducation(true);
  };

  // Function to remove an education section
  const removeEducationSection = (index) => {
    const updatedEducationDetails = [...educationDetails];
    updatedEducationDetails.splice(index, 1);
    setEducationDetails(updatedEducationDetails);
  };

  // Function to handle changes in the form fields
  const handleFieldChange = (index, field, value) => {
    const updatedEducationDetails = [...educationDetails];
    updatedEducationDetails[index][field] = value;
    setEducationDetails(updatedEducationDetails);
  };

  const educationSubmitHandler = (e) => {
    e.preventDefault();

    const year = new Date(isyrpass).getFullYear();

    const educationData = educationDetails.map((detail) => {
      const year = new Date(detail.passing).getFullYear();
      return {
        education: detail.education,
        university: detail.university,
        passing: year,
        country: detail.country,
        state: detail.state,
        city: detail.city,
      };
    });

    fetch(`${BaseURL}/api/user/update-and-save/education/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(educationData),
    })
      .then((res) => res.json())
    // .then((data) => {
    //   console.log("after fetch", data);
    // });
  };

  const [educationDetail, setEducationDetail] = useState([]);
  useEffect(() => {
    fetch(`${BaseURL}/api/user-education/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEducationDetail(data);
      });
  }, []);
  // --------------------------------------social SocialVoluntarism--------------------------------------------------------------

  const [voluntarismApiHolder, setVoluntarismApiHolder] = useState([]);
  const [socialVoluntarismSections, setSocialVoluntarismSections] = useState([
    {
      isprojectname: '',
      ispositionheld: '',
      isorganiztionname: '',
      socialVoluntarismAddOne: '',
      socialVoluntarismAddTwo: '',
      socialCountryVoluntry: '',
      socialStateVoluntry: '',
      socialVoluntryCity: '',
      socialVoluntryDistrict: '',
      socialVoluntryTaluka: '',
      socialVoluntryPin: '',
    },
  ]);

  const addSocialSection = () => {
    setSocialVoluntarismSections([...socialVoluntarismSections, {
      isprojectname: '',
      ispositionheld: '',
      isorganiztionname: '',
      socialVoluntarismAddOne: '',
      socialVoluntarismAddTwo: '',
      socialCountryVoluntry: '',
      socialStateVoluntry: '',
      socialVoluntryCity: '',
      socialVoluntryDistrict: '',
      socialVoluntryTaluka: '',
      socialVoluntryPin: '',
    }]);
  };

  const removeSocialSection = (index) => {
    const updatedSections = [...socialVoluntarismSections];
    updatedSections.splice(index, 1);
    setSocialVoluntarismSections(updatedSections);
  };

  const handleSocialInputChange = (index, field, value) => {
    const updatedSections = [...socialVoluntarismSections];
    updatedSections[index][field] = value;
    setSocialVoluntarismSections(updatedSections);
  };


  useEffect(() => {
    fetch(`${BaseURL}/api/user/voluntarism-details/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setVoluntarismApiHolder(data);
      });
  }, []);

  const socialVoluntarismsubmitHandler = (e) => {
    e.preventDefault();
    const socialVoluntarismData = socialVoluntarismSections.map(section => ({
      projectName: section.isprojectname,
      positionHeld: section.ispositionheld,
      organizationName: section.isorganiztionname,
      addressLine1: section.socialVoluntarismAddOne,
      addressLine2: section.socialVoluntarismAddTwo,
      country: section.socialCountryVoluntry,
      state: section.socialStateVoluntry,
      city: section.socialVoluntryCity,
      district: section.socialVoluntryDistrict,
      taluka: section.socialVoluntryTaluka,
      pinZip: section.socialVoluntryPin
    }));

    fetch(
      `${BaseURL}/api/user/update-and-save/voluntarism/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(socialVoluntarismData),
      }
    )
      .then((res) => res.json())
    // .then((data) => {
    //   console.log("data from social ex:", data);
    // });
    SocialVoluntarism();
  };

  //.....................My past ex with social organization...............
  const [pastExSocialHolder, setPastExSocialHolder] = useState([]);
  const [socialContributions, setSocialContributions] = useState([
    {
      issocpositionheld: "",
      issocorgname: "",
      socialAddressOne: "",
      socialAddressTwo: "",
      socialCountry: "",
      socialState: "",
      socialCity: "",
      socialDistrict: "",
      socialTaluka: "",
      socialPin: "",
    },
  ]);

  const addSocialContributionSection = () => {
    setSocialContributions([
      ...socialContributions,
      {
        issocpositionheld: "",
        issocorgname: "",
        socialAddressOne: "",
        socialAddressTwo: "",
        socialCountry: "",
        socialState: "",
        socialCity: "",
        socialDistrict: "",
        socialTaluka: "",
        socialPin: "",
      },
    ]);
  };

  const removeSocialContributionSection = (index) => {
    const updatedSocialContributions = [...socialContributions];
    updatedSocialContributions.splice(index, 1);
    setSocialContributions(updatedSocialContributions);
  };

  const handleSocialFieldChange = (index, field, value) => {
    const updatedSocialContributions = [...socialContributions];
    updatedSocialContributions[index][field] = value;
    setSocialContributions(updatedSocialContributions);
  };

  useEffect(() => {
    fetch(`${BaseURL}/api/user/past-experience/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPastExSocialHolder(data);
      });
  }, []);

  const socialOrganizationMovementHandler = (e) => {
    e.preventDefault();

    const pastExperiences = socialContributions.map(contribution => ({
      position_held: contribution.issocpositionheld,
      organization: contribution.issocorgname,
      address_line_1: contribution.socialAddressOne,
      address_line_2: contribution.socialAddressTwo,
      country: contribution.socialCountry,
      state: contribution.socialState,
      city: contribution.socialCity,
      district: contribution.socialDistrict,
      taluka: contribution.socialTaluka,
      pin_zip: contribution.socialPin,
    }));

    fetch(`${BaseURL}/api/user/update-and-save/experience/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(pastExperiences),
    })
      .then((res) => res.json())
    // .then((data) => {
    //   console.log("data from social ex", data);
    // });
    Socialcontribution();
  };

  //........edit past ex with social contribution.........
  const [editFormPastEx, setEditFormPastEx] = useState(true);
  const [displayEditForm, setDisplayEditForm] = useState([]);

  const [socialAddOneEdit, setSocialAddressOneEdit] = useState([]);
  const [socialAddTwoEdit, setSocialAddressTwoEdit] = useState("");
  const [socialCountryEdit, setSocialCountryEdit] = useState("");
  const [socialStateEdit, setSocialStateEdit] = useState("");
  const [socialCityEdit, setSocialCityEdit] = useState("");
  const [socialTalukaEdit, setSocialTalukaEdit] = useState("");
  const [socialDistrictEdit, setSocialDistrictEdit] = useState("");
  const [socialPinEdit, setSocialPinEdit] = useState("");
  const [socialPositionHeldEdit, setSocPOsitionHeldEdit] = useState([]);
  const [socialOrgNameEdit, setIsSocOrgNameEdit] = useState("");

  const SocialcontributionEdit = () => {

    setEditFormPastEx(false);
    setIsSocialcontribution(true);
    setIsSocialcontribution(false);

    fetch(`${BaseURL}/api/user/past-experience/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const valueHolder = data[3];
        setDisplayEditForm(data);
        data.forEach((entry, index) => {
          console.log("entry of each", entry.addressLine1 || "");
        });
        // data.forEach((entry, index) => {
        //   setSocialAddressOneEdit((prevValue) => {
        //     return (
        //       prevValue + (prevValue ? ", " : "") + (entry.addressLine1 || "")
        //     );
        //   });

        // Set state values for each input field based on the array index
        // setSocialAddressOneEdit((prevValues) => ({
        //   ...prevValues,
        //   [index]: entry.addressLine1 || "",
        // }));

        // Repeat this pattern for other input fields
        //});
        // setSocialAddressTwoEdit(data.displayEditForm.addressLine2);
        // setSocialCountryEdit(data.displayEditForm.country);
        // setSocialStateEdit(displayEditForm.state);
        // setSocialCityEdit(displayEditForm.city);
        // setSocialTalukaEdit(displayEditForm.taluka);
        // setSocialDistrictEdit(displayEditForm.district);
        // setSocialPinEdit(data.displayEditForm.pinZip);
        // setSocPOsitionHeldEdit(data.positionHeld);
        // setIsSocOrgNameEdit(data.PastExperience.organization);
      });
  };

  const EditFormSocialExSubmit = (e) => {
    e.preventDefault();

    const PastExperienceHolder = {
      position_held: socialPositionHeldEdit,
      organization: socialOrgNameEdit,
      address_line_1: socialAddOneEdit,
      address_line_2: socialAddTwoEdit,
      country: socialCountryEdit,
      state: socialStateEdit,
      city: socialCityEdit,
      district: socialDistrictEdit,
      taluka: socialTalukaEdit,
      pin_zip: socialPinEdit,
    };
    const PastExperience = [PastExperienceHolder];

    fetch(`${BaseURL}/api/user/update-and-save/experience/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(PastExperience),
    })
      .then((res) => res.json())
    // .then((data) => {
    //   console.log("data from social ex edited form", PastExperience);
    // });
  };

  //...............health detail.............

  const healthdetail = (e) => {
    e.preventDefault();

    const emergencyContactDetails = {
      person_name: isemergencypername,
      relation: isemergencyrelation,
      contact_Number: parseInt(emerContactNumber),
    };

    fetch(`${BaseURL}/api/profile/user/update-emergency-contact/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(emergencyContactDetails),
    })
      .then((res) => res.json())
    // .then((text) => {
    //   console.log("after data fetch", text);
    // });
    EmergencyContactDetail();
  };

  const [emergencyContact, setEmergencyContact] = useState([]);
  useEffect(() => {
    fetch(`${BaseURL}/api/user/emergency-contact/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEmergencyContact(data[0]);
        setIsEmergencyPerName(emergencyContact.personName);
        setIsEmergencyRelation(emergencyContact.relation);
        setEmerContactNumber(emergencyContact.contactNumber);
      });
  }, []);

  // ----------------------------------------vaccine details------------------------------

  const [vaccineApiHolder, setVaccineApiHolder] = useState([]);
  useEffect(() => {
    fetch(`${BaseURL}/api/user/vaccine-status/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setVaccineApiHolder(data);
      });
  }, []);

  const convidVaccineStatus = (e) => {
    e.preventDefault();

    const vaccineStatus = [];

    if (makeCheckBoxOneChecked) {
      vaccineStatus.push({
        vaccineName: isvaccinename,
        dateOfDose: isvaccinedate,
        numberOfDose: "dose 1"
      });
    }
    if (makeCheckBoxTwoChecked) {
      vaccineStatus.push({
        vaccineName: secondVaccineName,
        dateOfDose: secondVaccineDate,
        numberOfDose: "dose 2"
      });
    }
    fetch(`${BaseURL}/api/user/update-vaccine-status/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(vaccineStatus),
    })
      .then((res) => res.json())
    // .then((data) => {
    //   console.log("after fetch data", data);
    // });
    CovidCancelButton();
  };

  // ------------------------------------------Insurance Details-----------------
  const [displayInsuranceHodler, setDisplayInsuranceHolder] = useState([]);
  const [insuranceSections, setInsuranceSections] = useState([{
    isInsurancenumber: '',
    isinsurancetype: '',
    isinsuranceexpire: '',
    isinsurancecompname: ''
  }]);

  const addInsuranceSection = () => {
    setInsuranceSections([...insuranceSections, {
      isInsurancenumber: '',
      isinsurancetype: '',
      isinsuranceexpire: '',
      isinsurancecompname: ''
    }]);
  };

  const removeInsuranceSection = (index) => {
    const updatedSections = [...insuranceSections];
    updatedSections.splice(index, 1);
    setInsuranceSections(updatedSections);
  };

  const handleInputChange = (index, fieldName, value) => {
    const updatedSections = [...insuranceSections];
    updatedSections[index][fieldName] = value;
    setInsuranceSections(updatedSections);
  };


  useEffect(() => {
    fetch(`${BaseURL}/api/user/insurance-details/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((resInsurance) => resInsurance.json())
      .then((data) => {
        setDisplayInsuranceHolder(data);
      });
  }, []);

  const insuranceDetails = (e) => {
    e.preventDefault();

    const insuranceData = insuranceSections.map((section) => {
      return {
        insuranceNumber: section.isInsurancenumber,
        insuranceType: section.isinsurancetype,
        expiryDate: section.isinsuranceexpire,
        insuranceCompanyName: section.isinsurancecompname,
      };
    });

    fetch(`${BaseURL}/api/user/update-and-save/insurance/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(insuranceData),
    })
      .then((res) => res.json())
    // .then((data) => {
    //   console.log("after fetch data", data);
    // });
    InsuranceDetail();
  };
  // -------------------------------Area of interest---------------------------------------
  const [isareaeducation, setIsAreaEducation] = useState('');
  const [isarealabor, setIsLabor] = useState('');
  const [isareaagricultural, setIsAreaAgricultural] = useState('');
  const [isareafinace, setIsAreaFinace] = useState('');
  const [isareawork, setIsAreaWOrk] = useState('');
  const [isareaother, setIsAreaOther] = useState('');
  const [areaofInterest, setAreaOfInterest] = useState([]);

  useEffect(() => {
    fetch(`${BaseURL}/api/area-of-interest/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAreaOfInterest(data);
        setIsAreaOther(data[0].other || '');
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const areaOfInterest = (e) => {
    e.preventDefault();

    // Create an array to hold the selected areas of interest
    let selectedInterests = [];
    if (isareaeducation) selectedInterests.push("Education");
    if (isarealabor) selectedInterests.push("Labor reforms");
    if (isareaagricultural) selectedInterests.push("Agricultural reforms");
    if (isareafinace) selectedInterests.push("Finace");
    if (isareawork) selectedInterests.push("Work Force");

    // Prepare the payload with the selected interests and the 'other' field
    const areaOfInterestPayload = {
      areaOfInterest: selectedInterests,
      other: isareaother,
    };

    // Send the updated payload to the server
    fetch(`${BaseURL}/api/user/saveAreaOfInterest/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(areaOfInterestPayload),
    })
      .then((res) => res.json())
    // .then((data) => {
    //   console.log("data after fetch", data);
    // });
    MyAreaOfInterest();
  };

  // ---------------------------------------------------------------------------------------------

  const [isArt1, setIsArt1] = useState('');
  const [isArt2, setIsArt2] = useState('');
  const [isArt3, setIsArt3] = useState('');
  const [isArt4, setIsArt4] = useState('');
  const [isTech1, setIsTech1] = useState('');
  const [isTech2, setIsTech2] = useState('');
  const [isTech3, setIsTech3] = useState('');
  const [isTech4, setIsTech4] = useState('');
  const [isLabel1, setIsLabel1] = useState('');
  const [isLabel2, setIsLabel2] = useState('');
  const [isLabel3, setIsLabel3] = useState('');
  const [isLabel4, setIsLabel4] = useState('');
  const [isOtherExpertise, setIsOtherExpertise] = useState('');

  const myExpertise = (e) => {
    e.preventDefault();

    // Create an array to hold the selected areas of interest
    let selectedArtExpertise = [];
    if (isArt1) selectedArtExpertise.push("Art-1");
    if (isArt2) selectedArtExpertise.push("Art-2");
    if (isArt3) selectedArtExpertise.push("Art-3");
    if (isArt4) selectedArtExpertise.push("Art-4");

    let selectedTechExpertise = [];
    if (isTech1) selectedTechExpertise.push("Tech-1");
    if (isTech2) selectedTechExpertise.push("Tech-2");
    if (isTech3) selectedTechExpertise.push("Tech-3");
    if (isTech4) selectedTechExpertise.push("Tech-4");

    let selectedLabelExpertise = [];
    if (isLabel1) selectedLabelExpertise.push("Label-1");
    if (isLabel2) selectedLabelExpertise.push("Label-2");
    if (isLabel3) selectedLabelExpertise.push("Label-3");
    if (isLabel4) selectedLabelExpertise.push("Label-4");

    // Prepare the payload with the selected interests and the 'other' field
    const myExpertisePayload = {
      art: selectedArtExpertise,
      technology: selectedTechExpertise,
      label: selectedLabelExpertise,
      other: isOtherExpertise,
    };

    // Send the updated payload to the server
    fetch(`${BaseURL}/api/my-expertise/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(myExpertisePayload),
    })
      .then((res) => res.json())
    // .then((data) => {
    //   console.log("data after fetch", data);
    // });
    MyExpertise();
  };

  const [isExpertise, setIsExpertise] = useState([]);

  useEffect(() => {
    fetch(`${BaseURL}/api/my-expertise/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsExpertise(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  // ---------------------------------------------------------------------------------------------------------
  // Address GET arry api for all country city...
  const [isaddCount, setIsAddcount] = useState([]);
  const [isaddState, setIsAddState] = useState([]);
  const [isaddcity, setIsAddCity] = useState([]);
  const [isadddist, setIsAddDist] = useState([]);
  const [isaddtaluka, setIsAddTaluka] = useState([]);

  // PErsonal job details GEt arry
  const [ispersonaljobdetails, setIsPersonalJobDetail] = useState([]);

  // social GET API arry
  const [issociexp, setIsSociExp] = useState([]);

  const [selectedCountryId, setSelectedCountryId] = useState([]);
  const [selectedStateId, setSelectedStateId] = useState([]);

  const [iscountryid, setIsCountryId] = useState([]);
  const [isstatecountryid, setIsStateCountryId] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetch(`${BaseURL}/api/org/countries`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => setIsAddcount(data));

    fetch(`${BaseURL}/api/org/states`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAddState(data);
      });

    fetch(`${BaseURL}/api/org/district`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAddDist(data);
      });

    fetch(`${BaseURL}/api/org/city`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => setIsAddCity(data));

    fetch(`${BaseURL}/api/org/taluka`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => setIsAddTaluka(data));
  }, []);

  React.useEffect(
    (e) => {
      const newStates = selectedStateId.filter((x) => {
        console.log(
          "4",
          x,
          typeof x.countryId,
          typeof iscountryid,
          x.countryId,
          iscountryid
        );
        return x.countryId === iscountryid;
      });
      setStates(newStates);
    },

    [iscountryid]
  );

  // Dropdown select country->state-..etc

  const handleCountryChange = (e) => {
    setIsStateCountryId([]);
    setIsCountryId(Number(e.target.value));
  };

  const handleStateChange = (e) => {
    selectedStateId(e.target.value);
    isstatecountryid(e.target.value);
  };

  //Alert notification section start

  useEffect(() => { }, []);

  const [alertMessageHolder, setalertMessageHolder] = useState("");

  const PersonalDEtails = (e) => {
  };
  const [firstNameAlert, setfirstNameAlert] = useState(1);
  const [firstFailuerAlertName, setFirstFailuerAlertName] = useState(1);
  const [refreshProfile, setRefreshProfile] = useState(false);
  const SubmitPersonalDetails = (e) => {
    if (firstName !== "") {
      setfirstNameAlert((prevState) => !prevState);
    }
    if (firstName === "") {
      setFirstFailuerAlertName((prevState) => !prevState);
    }
    const responseBody = {
      i_am: selectGender,
      first_name: firstName,
      last_name: lastName,
    };

    e.preventDefault();
    const res = fetch(`${BaseURL}/api/update/userName/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responseBody),
    })
      .then((response) => response.json())
    FnHideShow("first");
  };

  const updateContactDetails = (e) => {
    const responseBody = {
      alternate_email: altEmailId,
      mobile_alternate: altMobilenumber,
    };

    e.preventDefault();
    const res = fetch(`${BaseURL}/api/update/userContactDetails/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responseBody),
    })
      .then((response) => response.json())
    // .then((user) => {
    //   console.log(user);
    // });
    FnHideShow("second");
  };
  const SuccessAlertNotification = () => {
    const personalDetails = [
      {
        id: "PersonalInfo",
        title: "First Name Enter Succesfully",
      },
    ];

    return (
      <>
        <AlertNotificationSuccess title={personalDetails[0].title} />
      </>
    );
  };
  const FailuerAlertNotificationDetails = () => {
    const FailuerPersonalDetails = [
      { id: "FailPersonalDEtails", title: "Enter Correct Formate" },
    ];
    return (
      <>
        <FailuerAlertNotification title={FailuerPersonalDetails[0].title} />
      </>
    );
  };
  //password value onchange value handler

  const [userPasswordEdit, setUserPasswordEdit] = useState("");
  const [cPasswordEdit, setCPasswordEdit] = useState("");

  // Password error message
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  //Password match test message
  const [passwordMatchState, setPasswordMatchState] = useState("");

  //Empty Password field

  const [passwordFirstFieldEmpty, setPasswordFirstFieldEmpty] = useState("");
  const [passwordSecondFieldEmpty, setPasswordSecondFieldEmpty] = useState("");

  //---------------------------------------------------------------------
  //Logic for reset password
  const FunToAwakeErrorMessageForPassword = (e) => {
    e.preventDefault();
    if (
      setUserPasswordEdit !== setCPasswordEdit &&
      userPasswordEdit !== cPasswordEdit
    ) {
      setPasswordErrorMessage("Password field does not match");
    } else {
      if (
        /[A-Z]/.test(userPasswordEdit) &&
        /[a-z]/.test(userPasswordEdit) &&
        /[\d+$]/.test(userPasswordEdit) &&
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(userPasswordEdit) &&
        userPasswordEdit.length > 7
      ) {
        setPasswordErrorMessage("Password Match");
      } else {
        setPasswordErrorMessage("Passwrod strength not enough");
      }
    }
    const responseBody = {
      password: userPasswordEdit,
      confirmPassword: cPasswordEdit,
    };
    fetch(`${BaseURL}/api/resetPassword/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(responseBody),
    })
      .then((res) => res.json())
    // .then((data) => {
    //   console.log("data after fetch", data);
    // });
  };
  //----------------------------------------------------------------------
  const Navigate = useNavigate();
  const CancelPersonalDetails = () => {
    Navigate("/auth/login/userprofile");
  };

  const CloseOpration = () => {
    setIsShow((current) => !current);
  };

  //Input validator only for number enter with error message

  const [errorMessageValidation, setErrorMessageValidation] = useState("");

  const OnlyNumber = new RegExp(/[\d+$]/);

  const ValidationForPhoneNumber = () => {
    if (mobileNumber >= "0" && mobileNumber <= "9") {
      setErrorMessageValidation("");
    } else {
      setErrorMessageValidation("you had enter wrong input");
    }
  };

  const [errorMessageValidationAlt, setErrorMessageValidationAlt] =
    useState("");
  const ValidationForAltPhoneNumber = () => {
    if (altMobilenumber >= "0" && altMobilenumber <= "9") {
      setErrorMessageValidationAlt("");
    } else {
      setErrorMessageValidationAlt("you had enter wrong input");
    }
  };

  const [buttonBlueBg, setButtonBlueBg] = useState("primary");
  const [buttonSecondarybg, setButtonSecondaryBg] = useState("secondary");

  const [errorMessageForEmail, setErrorMessageForEmail] = useState("");

  const ProfileContactDetails = (e) => {
    e.preventDefault();
    // if (!altEmailId.includes("@") && altEmailId !== '') {

    //   setErrorMessageForEmail("This is not a valid email id")
    // } else {
    //   setErrorMessageForEmail('')
    // }
  };
  //dropdown country state and etc fun part
  //select value copy to other part

  const SelectDropDownOptions = (selectOptionList, selectedValue) => {
    return selectOptionList.map((value, key) => {
      return (
        <option key={key} selected={value == selectedValue} value={value}>
          {value}
        </option>
      );
    });
  };

  const CopyPresentToPermanent = () => {
    setPerStreetDetails(streetDetails);
    setPerLandMark(landMark);
    setPerHouseNumber(houseNumber);
    setPerCountry(country);
    setPerState(isstate);
    setPerDistrict(isdistrict);
    setPerCity(city);
    setPerTaluka(taluka);
    setPerPin(pin);
  };

  const [Profiles, setProfile] = useState([]);
  const [shouldFetchProfile, setShouldFetchProfile] = useState(true);


  const callProfile = () => {
    const storedUsername = localStorage.getItem("username");

    fetch(`${BaseURL}/api/profile/user/${storedUsername}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setShouldFetchProfile(false);
        const profileData = data[0];
        setSelectGender(profileData.iam);
        setFirstName(profileData.firstname);
        setLastName(profileData.lastname);
        setMobileNumber(profileData.mobile);
        setEmailId(profileData.email);
        setGender(profileData.gender);
        setAltEmailId(profileData.alternateEmail);
        const dobDate = new Date(profileData.dob);
        const formattedDOB = dobDate.toISOString().split("T")[0];
        setDataOfBirth(formattedDOB);
      });
  };

  useEffect(() => {
    callProfile();
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  //PUT API holder
  const [jobPutHolder, setJobPutHolder] = useState("");

  const UpdateJobDetails = () => { };

  return (
    <>
      <Col className="section py-3 px-0 ">
        <Col className="container-fluid">
          <Col className="Ri-container ">
            <Row className="g-2 form">
              <Card className=" border-0">
                <CardBody className="bg-profile">
                  {Profiles.map((profile) => (
                    <Col sm="12" className="  px-3">
                      <Col sm="12" className="text-end ">
                        Close
                      </Col>
                      <Col sm="12">
                        <Row className="g-2 form">
                          <Col sm="2">
                            <Col sm="12">
                              <h3>My Profile</h3>
                            </Col>
                            <Col sm="12">
                              <img src={MyProfile} alt="MyProfile" />
                            </Col>
                            <Col sm="12" className="p-2">
                              <b>
                                {profile.firstname} {profile.lastname}
                              </b>
                            </Col>
                            <Col sm="12">M21 Member ID</Col>
                            <Col sm="12">M21-{profile.id}</Col>
                          </Col>
                          <Col
                            sm="10"
                            className="shadow bg-white vh-100 overflow-scroll "
                          >
                            <Card className="border-0">
                              <CardBody className="border-0">
                                <Tabs
                                  defaultActiveKey="PersonalDetails"
                                  id="uncontrolled-tab-example"
                                >
                                  {/* tab one personal details */}
                                  <Tab
                                    eventKey="PersonalDetails"
                                    // className={style}
                                    title={
                                      <Col
                                        onClick={TabColorDark}
                                        className="fs-5  fst-normal fw-normal "
                                        id="PersonalDetails"
                                        style={{ color: style.color }}
                                      >
                                        Personal Details
                                      </Col>
                                    }
                                  >
                                    {isShow && (
                                      <>
                                        <Card className="border-0">
                                          <CardBody>
                                            <Row className="g-2 form">
                                              <Col
                                                sm="12"
                                                className="border-bottom"
                                              >
                                                <Row>
                                                  <Col
                                                    sm="2"
                                                    className="text-uppercase"
                                                  >
                                                    <FormLabel className="font-size-12 fw-normal ">
                                                      Name
                                                    </FormLabel>
                                                  </Col>
                                                  <Col
                                                    sm="3"
                                                    className="font-size-14"
                                                  >
                                                    {profile.iam}.{" "}
                                                    {profile.firstname}{" "}
                                                    {profile.lastname}
                                                  </Col>
                                                  <Col
                                                    sm="7"
                                                    className="text-end"
                                                  >
                                                    <Label
                                                      type="button"
                                                      className=" font-size-10 title-text-color fw-bold text-uppercase col-sm-1"
                                                      onClick={() =>
                                                        FnHideShow("first")
                                                      }
                                                    >
                                                      Edit
                                                    </Label>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </Row>
                                          </CardBody>
                                        </Card>
                                      </>
                                    )}

                                    {!isShow && (
                                      <>
                                        <Col sm="12" className="p-1">
                                          &nbsp;
                                        </Col>
                                        {alertMessageHolder}
                                        <Card className="">
                                          <Form onSubmit={SubmitPersonalDetails}>
                                            <CardHeader>
                                              <Col
                                                sm="12"
                                                className="form-group"
                                              >
                                                <Row className="g-2 form">
                                                  <Col
                                                    sm="8"
                                                    className="form-group "
                                                  >
                                                    <FormLabel className="form-control mb-0 font-size-12 fw-normal bg-transparent border-0">
                                                      Name
                                                    </FormLabel>
                                                  </Col>
                                                  <Col
                                                    sm="4"
                                                    className="text-end form-group"
                                                  >
                                                    <CloseButton
                                                      onClick={() => FnHideShow("first")}
                                                    />
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardHeader>
                                            <CardBody>
                                              <Col sm="12">
                                                <Col className="border-0">
                                                  <Col sm="12">
                                                    <Row className="g-2 form">
                                                      <Col sm="4">
                                                        <Col sm="12">
                                                          <FormLabel className="font-size-12 fw-normal">
                                                            Title
                                                          </FormLabel>
                                                        </Col>
                                                        <Col sm="12">
                                                          <Input
                                                            name="Iam"
                                                            type="select"
                                                            className="rounded-0"

                                                            value={selectGender}
                                                            onChange={(e) => setSelectGender(e.target.value)}
                                                            required
                                                            size="sm"
                                                          >
                                                            <option
                                                              selected
                                                              disabled
                                                              value=""
                                                            >
                                                              Choose your option
                                                            </option>
                                                            <option>Mr</option>
                                                            <option>Ms</option>
                                                            <option>Mrs</option>
                                                          </Input>
                                                        </Col>
                                                      </Col>
                                                      <Col
                                                        sm="4"
                                                        className="position-absolute alertNotification"
                                                      >
                                                        {/* {!firstNameAlert && (
                                                          <SuccessAlertNotification />
                                                        )}
                                                        {!firstFailuerAlertName && (
                                                          <FailuerAlertNotificationDetails />
                                                        )} */}
                                                      </Col>
                                                      <Col sm="4">
                                                        <FormLabel className="font-size-12 fw-normal">
                                                          First Name
                                                        </FormLabel>
                                                        <Col sm="12">
                                                          <Form.Control
                                                            required
                                                            type="text"
                                                            className="rounded-0"
                                                            placeholder="Enter Your first name"
                                                            value={firstName}
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                            size="sm"
                                                            isValid={
                                                              firstName !== "" &&
                                                                firstName.length >= "2"
                                                                ? true
                                                                : false
                                                            }
                                                            isInvalid={
                                                              firstName >= "0" &&
                                                                firstName <= "9"
                                                                ? true
                                                                : false
                                                            }
                                                          />
                                                        </Col>
                                                      </Col>
                                                      <Col sm="4">
                                                        <FormLabel className="font-size-12 fw-normal">
                                                          Last Name
                                                        </FormLabel>
                                                        <Col sm="12">
                                                          <Form.Control
                                                            required
                                                            placeholder="Enter your last name"
                                                            type="text"
                                                            defaultValue={lastName}
                                                            onChange={(event) => setLastName(event.target.value)}
                                                            size="sm"
                                                            className="rounded-0"
                                                            isValid={
                                                              lastName !== "" &&
                                                                lastName.length >= "2"
                                                                ? true
                                                                : false
                                                            }
                                                            isInvalid={
                                                              lastName >= "0" &&
                                                                lastName <= "9"
                                                                ? true
                                                                : false
                                                            }
                                                          />
                                                        </Col>
                                                      </Col>
                                                    </Row>
                                                  </Col>
                                                </Col>
                                              </Col>
                                            </CardBody>
                                            <CardFooter>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col
                                                    sm="6"
                                                    className="text-end"
                                                  >
                                                    <Button
                                                      className="btn-outline-primary bg-white text-uppercase text-primary font-size-12 fw-bold"
                                                      onClick={() =>
                                                        FnHideShow("first")
                                                      }
                                                    >
                                                      Cancel
                                                    </Button>
                                                  </Col>
                                                  <Col sm="6">
                                                    <Button
                                                      type="submit"
                                                      onClick={SubmitPersonalDetails}
                                                      className="font-size-12 fw-bold  text-uppercase"
                                                      disabled={
                                                        selectGender !== "" &&
                                                          firstName !== "" &&
                                                          lastName !== ""
                                                          ? false
                                                          : true
                                                      }
                                                      variant={
                                                        selectGender !== "" &&
                                                          firstName !== "" &&
                                                          lastName !== ""
                                                          ? buttonBlueBg
                                                          : buttonSecondarybg
                                                      }
                                                    >
                                                      Save
                                                    </Button>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardFooter>
                                          </Form>
                                        </Card>
                                        <Col sm="12" className="p-1">
                                          &nbsp;
                                        </Col>
                                      </>
                                    )}

                                    {isContactShow && (
                                      <>
                                        <Card className="border-0">
                                          <CardBody>
                                            <Col
                                              sm="12"
                                              className="border-bottom"
                                            >
                                              <Row className="g-2 form">
                                                <Col
                                                  sm="12"
                                                  className="form-group"
                                                >
                                                  <Row className="g-2 form">
                                                    <Col sm="2">
                                                      <FormGroup>
                                                        <FormLabel className="text-uppercase font-size-12 fw-normal">
                                                          Contact details
                                                        </FormLabel>
                                                      </FormGroup>
                                                    </Col>
                                                    <Col
                                                      sm="2"
                                                      className="form-group"
                                                    >
                                                      <FormGroup>
                                                        <FormLabel className="text-uppercase font-size-10 fw-normal">
                                                          mobile number
                                                        </FormLabel>
                                                      </FormGroup>
                                                    </Col>
                                                    <Col sm="2">
                                                      <FormGroup>
                                                        <FormLabel className="text-uppercase font-size-10 fw-normal">
                                                          &nbsp;
                                                        </FormLabel>
                                                      </FormGroup>
                                                    </Col>
                                                    <Col sm="3">
                                                      <FormGroup>
                                                        <FormLabel className="text-uppercase font-size-10 fw-normal">
                                                          email
                                                        </FormLabel>
                                                      </FormGroup>
                                                    </Col>
                                                    <Col sm="2">
                                                      <FormGroup>
                                                        <FormLabel className="text-uppercase font-size-10 fw-normal">
                                                          &nbsp;
                                                        </FormLabel>
                                                      </FormGroup>
                                                    </Col>
                                                    <Col
                                                      sm="1"
                                                      className="text-end"
                                                    >
                                                      <FormGroup
                                                        onClick={() =>
                                                          FnHideShow("second")
                                                        }
                                                      >
                                                        <FormLabel
                                                          type="button"
                                                          className="text-uppercase title-text-color font-size-10 fw-bold"
                                                        >
                                                          edit
                                                        </FormLabel>
                                                      </FormGroup>
                                                    </Col>
                                                  </Row>
                                                </Col>
                                                <Col
                                                  sm="12"
                                                  className="form-group"
                                                >
                                                  <Row className="g-2 form">
                                                    <Col
                                                      sm="2"
                                                      className="form-group"
                                                    >
                                                      &nbsp;
                                                    </Col>
                                                    <Col
                                                      sm="2"
                                                      className="form-group"
                                                    >
                                                      <Row className="g-2 form">
                                                        <Col sm="12">
                                                          <FormGroup>
                                                            <FormLabel className="font-size-12  fw-normal">
                                                              +91{" "}
                                                              {profile.mobile}
                                                            </FormLabel>
                                                          </FormGroup>
                                                        </Col>
                                                        {/* <Col sm='12' className="form-group">
          <FormGroup>
            <Col sm='12' className="form-check">
              <Input type="checkbox"/>
              <FormLabel className="font-size-12  fw-normal">Whatsapp number too </FormLabel>
            </Col>            
          </FormGroup>
        </Col>        */}
                                                      </Row>
                                                    </Col>
                                                    <Col
                                                      sm="2"
                                                      className="form-group"
                                                    >
                                                      <FormGroup>
                                                        <FormLabel className=" font-size-10 fw-normal ">
                                                          Priamry
                                                        </FormLabel>
                                                      </FormGroup>
                                                    </Col>
                                                    <Col
                                                      sm="3"
                                                      className="form-group title-text-color font-size-12 fw-normal"
                                                    >
                                                      {profile.email}
                                                    </Col>
                                                    <Col
                                                      sm="2"
                                                      className="form-group font-size-10 fw-normal"
                                                    >
                                                      Primary
                                                    </Col>
                                                  </Row>
                                                </Col>
                                                <Col
                                                  sm="12"
                                                  className="form-group"
                                                >
                                                  <Row className="g-2 form">
                                                    <Col sm="2">&nbsp;</Col>
                                                    <Col sm="3">
                                                      <FormGroup>
                                                        <Col
                                                          sm="12"
                                                          className="form-check"
                                                        >
                                                          <Input type="checkbox" />
                                                          <FormLabel className="font-size-12 fw-normal">
                                                            Whatsapp number too
                                                          </FormLabel>
                                                        </Col>
                                                      </FormGroup>
                                                    </Col>
                                                    <Col sm="1">&nbsp;</Col>
                                                    <Col sm="3">
                                                      <FormGroup>
                                                        <FormLabel className="font-size-12 title-text-color fw-normal">
                                                          {profile.alternateEmail}
                                                        </FormLabel>
                                                      </FormGroup>
                                                    </Col>
                                                    <Col sm="1">
                                                      <FormGroup>
                                                        <FormLabel className="font-size-10 fw-normal">
                                                          Alternate
                                                        </FormLabel>
                                                      </FormGroup>
                                                    </Col>
                                                  </Row>
                                                </Col>
                                              </Row>
                                            </Col>
                                          </CardBody>
                                        </Card>
                                      </>
                                    )}

                                    {!isContactShow && (
                                      <>
                                        <Col sm="12" className="p-1">
                                          &nbsp;
                                        </Col>
                                        <Card>
                                          <Form
                                            onSubmit={ProfileContactDetails}
                                          >
                                            <CardHeader>
                                              <Col
                                                sm="12"
                                                className="form-group"
                                              >
                                                <Row className="g-2 form">
                                                  <Col
                                                    sm="8"
                                                    className="form-group "
                                                  >
                                                    <FormLabel className="form-control mb-0 font-size-12 fw-normal bg-transparent border-0">
                                                      Contact Details
                                                    </FormLabel>
                                                  </Col>
                                                  <Col
                                                    sm="4"
                                                    className=" text-end form-group"
                                                  >
                                                    <CloseButton
                                                      onClick={() =>
                                                        FnHideShow("second")
                                                      }
                                                    />
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardHeader>
                                            <CardBody>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col sm="6">
                                                    <Col sm="12">
                                                      <Row className="g-2 form">
                                                        <Col sm="6">
                                                          <FormLabel className="font-size-12 fw-normal">
                                                            My Mobile Number
                                                          </FormLabel>
                                                        </Col>
                                                        <Col sm="6">
                                                          <FormGroup>
                                                            <FormLabel className="font-size-12 fw-normal">
                                                              primary
                                                            </FormLabel>
                                                          </FormGroup>
                                                        </Col>
                                                      </Row>
                                                    </Col>
                                                    <Col sm="12">
                                                      <InputGroup hasValidation>
                                                        <Dropdown>
                                                          <Dropdown.Toggle
                                                            size="sm"
                                                            className="bg-secondary"
                                                          >
                                                            +91
                                                          </Dropdown.Toggle>
                                                          <Dropdown.Menu>
                                                            <Dropdown.Item>
                                                              1
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                              2
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                              3
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                              4
                                                            </Dropdown.Item>
                                                          </Dropdown.Menu>
                                                        </Dropdown>
                                                        <Form.Control
                                                          required
                                                          type="text"
                                                          placeholder="Enter your mobile number"
                                                          className="rounded-0"
                                                          value={mobileNumber}
                                                          onChange={(event) => setMobileNumber(event.target.value)}
                                                          // onKeyDownCapture={
                                                          //   (e) =>
                                                          //    e.key >= "a" &&
                                                          //    e.key <= "z"
                                                          //    ? e.preventDefault()
                                                          //     : null}
                                                          onKeyUp={ValidationForPhoneNumber}
                                                          size="sm"
                                                          maxLength="10"
                                                          minLength="10"
                                                          isValid={
                                                            mobileNumber.length ===
                                                              10 &&
                                                              setMobileNumber !==
                                                              ""
                                                              ? true
                                                              : false
                                                          }
                                                          isInvalid={
                                                            mobileNumber !== "" &&
                                                              mobileNumber.trim().length <= 9
                                                              ? true
                                                              : false
                                                          }
                                                          disabled={true}
                                                        />
                                                      </InputGroup>
                                                    </Col>
                                                    <Col sm="12" className="">
                                                      <Col
                                                        sm="6"
                                                        className="text-white position-absolute bg-danger rounded-2 text-center "
                                                      >
                                                        {errorMessageValidation}
                                                      </Col>
                                                    </Col>
                                                    <Col
                                                      sm="12"
                                                      className="form-check"
                                                    >
                                                      <Input type="checkbox" />
                                                      <label className="font-size-12 fw-normal">
                                                        Whatsapp number too
                                                      </label>
                                                    </Col>
                                                  </Col>
                                                  <Col sm="6">
                                                    <Col sm="12">
                                                      <Row className="g-2 form">
                                                        <Col sm="6">
                                                          <FormLabel className="font-size-12 fw-normal">
                                                            My emial ID
                                                          </FormLabel>
                                                        </Col>
                                                        <Col
                                                          sm="6"
                                                          className="font-size-12 fw-normal"
                                                        >
                                                          primary
                                                        </Col>
                                                      </Row>
                                                    </Col>
                                                    <Col sm="12">
                                                      <Form.Control
                                                        required
                                                        type="email"
                                                        placeholder="Enter your email id"
                                                        defaultValue={emailId}
                                                        onChange={(event) => setEmailId(event.target.value)}
                                                        size="sm"
                                                        className="rounded-0"
                                                        isValid={
                                                          emailId !== "" &&
                                                            emailId.includes("@")
                                                            ? true
                                                            : false
                                                        }
                                                        isInvalid={
                                                          emailId !== "" &&
                                                            !emailId.includes("@")
                                                            ? true
                                                            : false
                                                        }
                                                        disabled={true}
                                                      />
                                                    </Col>
                                                  </Col>
                                                </Row>
                                              </Col>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col sm="6">
                                                    <Col sm="12">
                                                      <Row className="g-2 form">
                                                        <Col sm="6">
                                                          <FormLabel className="font-size-12 fw-normal">
                                                            My Mobile Number
                                                          </FormLabel>
                                                        </Col>
                                                        <Col
                                                          sm="6"
                                                          className="font-size-12 fw-normal"
                                                        >
                                                          Alternate
                                                        </Col>
                                                      </Row>
                                                    </Col>
                                                    <Col sm="12">
                                                      <InputGroup>
                                                        <Dropdown>
                                                          <Dropdown.Toggle
                                                            size="sm"
                                                            className="bg-secondary"
                                                          >
                                                            +91
                                                          </Dropdown.Toggle>
                                                          <Dropdown.Menu>
                                                            <Dropdown.Item>
                                                              1
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                              2
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                              3
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                              4
                                                            </Dropdown.Item>
                                                          </Dropdown.Menu>
                                                        </Dropdown>
                                                        <Form.Control
                                                          required
                                                          type="text"
                                                          placeholder="Enter your mobile number"
                                                          defaultValue={
                                                            altMobilenumber
                                                          }
                                                          onChange={(event) => setAltmobileNumber(event.target.value)}
                                                          onKeyUp={ValidationForAltPhoneNumber}
                                                          size="sm"
                                                          className="rounded-0"
                                                          maxLength="10"
                                                          minLength="10"
                                                          isValid={
                                                            altMobilenumber.length === 10 &&
                                                              setAltEmailId !== ""
                                                              ? true
                                                              : false
                                                          }
                                                          isInvalid={
                                                            altMobilenumber !== "" &&
                                                              altMobilenumber.trim()
                                                                .length <= 9
                                                              ? true
                                                              : false
                                                          }
                                                        />
                                                      </InputGroup>
                                                    </Col>
                                                    <Col sm="12">
                                                      <Col
                                                        sm="6"
                                                        className="position-absolute text-center text-white bg-danger"
                                                      >
                                                        {errorMessageValidationAlt}
                                                      </Col>
                                                    </Col>
                                                  </Col>
                                                  <Col sm="6">
                                                    <Col sm="12">
                                                      <Row className="g-2 form">
                                                        <Col sm="6">
                                                          <FormLabel className="font-size-12 fw-normal">
                                                            My emial ID
                                                          </FormLabel>
                                                        </Col>
                                                        <Col
                                                          sm="6"
                                                          className="font-size-12 fw-normal"
                                                        >
                                                          Alternate
                                                        </Col>
                                                      </Row>
                                                    </Col>
                                                    <Col sm="12">
                                                      <Form.Control
                                                        type="email"
                                                        placeholder="Enter your email id"
                                                        value={altEmailId}
                                                        onChange={(event) => setAltEmailId(event.target.value)}
                                                        size="sm"
                                                        isValid={
                                                          altEmailId !== "" &&
                                                            altEmailId.includes("@")
                                                            ? true
                                                            : false
                                                        }
                                                        isInvalid={
                                                          altEmailId !== "" &&
                                                            !altEmailId.includes("@")
                                                            ? true
                                                            : false
                                                        }
                                                      />
                                                    </Col>
                                                    <Col sm="12">
                                                      <Col
                                                        sm="6"
                                                        className="position-absolute bg-danger text-white text-center"
                                                      >
                                                        {errorMessageForEmail}
                                                      </Col>
                                                    </Col>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardBody>
                                            <CardFooter>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col
                                                    sm="6"
                                                    className="text-end"
                                                  >
                                                    <Button
                                                      onClick={() =>
                                                        FnHideShow("second")
                                                      }
                                                      className="btn-outline-primary font-size-12 fw-bold  text-uppercase bg-white text-primary"
                                                    >
                                                      Cancel
                                                    </Button>
                                                  </Col>
                                                  <Col sm="6">
                                                    <Button
                                                      className="font-size-12 fw-bold  text-uppercase"
                                                      type="submit"
                                                      disabled={
                                                        altEmailId !== "" &&
                                                          altMobilenumber !==
                                                          "" &&
                                                          emailId !== "" &&
                                                          mobileNumber !== ""
                                                          ? false
                                                          : true
                                                      }
                                                      variant={
                                                        altEmailId !== "" &&
                                                          altMobilenumber !==
                                                          "" &&
                                                          emailId !== "" &&
                                                          mobileNumber !== ""
                                                          ? buttonBlueBg
                                                          : buttonSecondarybg
                                                      }
                                                      onClick={updateContactDetails}
                                                    >
                                                      Save
                                                    </Button>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardFooter>
                                          </Form>
                                        </Card>
                                        <Col sm="12" className="p-1">
                                          &nbsp;
                                        </Col>
                                      </>
                                    )}

                                    {isPersonalAddressShow && (
                                      <>
                                        <Card className="border-0">
                                          <CardBody>
                                            <Col
                                              sm="12"
                                              className="border-bottom"
                                            >
                                              <Row className="g-2 form">
                                                <Col
                                                  sm="12"
                                                  className="form-group"
                                                >
                                                  <Row className="g-2 form">
                                                    <Col
                                                      sm="2"
                                                      className="text-uppercase font-size-12 fw-normal"
                                                    >
                                                      Address Details
                                                    </Col>
                                                    <Col
                                                      sm="4"
                                                      className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu "
                                                    >
                                                      {" "}
                                                      persent address
                                                    </Col>
                                                    <Col
                                                      sm="5"
                                                      className="font-size-10 fw-normal text-uppercase  Ri-text-color-sub-menu "
                                                    >
                                                      Perment address
                                                    </Col>

                                                    <Col
                                                      sm="1"
                                                      type="button"
                                                      onClick={
                                                        PersonalAddressDetail
                                                      }
                                                      className="font-size-10 fw-bold text-uppercase text-end title-text-color "
                                                    >
                                                      edit
                                                    </Col>
                                                  </Row>
                                                </Col>
                                                <Col
                                                  sm="12"
                                                  className="form-group"
                                                >
                                                  <Row className="g-2 form">
                                                    <Col
                                                      sm="2"
                                                      className="form-group"
                                                    >
                                                      &nbsp;
                                                    </Col>
                                                    <Col
                                                      sm="4"
                                                      className="font-size-12 fw-normal Ri-text-color-main-menu"
                                                    >
                                                      <FormLabel>
                                                      {addresses.house} <br />{" "}
                                                        {addresses.street}
                                                        <br />
                                                        {addresses.district}{" "}
                                                        <br />
                                                        {addresses.country},<br />
                                                        {addresses.pinZipCode}
                                                      </FormLabel>
                                                    </Col>
                                                    <Col
                                                      sm="5"
                                                      className="font-size-12 fw-normal Ri-text-color-main-menu"
                                                    >
                                                      <FormLabel>
                                                        {addresses.permanentHouse} <br />{" "}
                                                        {addresses.permanentStreet}
                                                        <br />
                                                        {addresses.permanentDistrict}{" "}
                                                        <br />
                                                        {addresses.permanentCountry},<br />
                                                        {addresses.permanentPinZipCode}
                                                      </FormLabel>
                                                    </Col>
                                                  </Row>
                                                </Col>
                                              </Row>
                                            </Col>
                                          </CardBody>
                                        </Card>
                                      </>
                                    )}

                                    {!isPersonalAddressShow && (
                                      <>
                                        <Col sm="12" className="p-1">
                                          &nbsp;
                                        </Col>
                                        <Card
                                          onFocus={() => isPersonalAddressShow}
                                        >
                                          <Form
                                            onSubmit={ProfileAddressDetails}
                                          >
                                            <CardHeader>
                                              <Col
                                                sm="12"
                                                className="form-group"
                                              >
                                                <Row className="g-2 form">
                                                  <Col
                                                    sm="6"
                                                    className="form-group"
                                                  >
                                                    <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                      Present address
                                                    </FormLabel>
                                                  </Col>
                                                  <Col
                                                    sm="5"
                                                    className="form-group ps-2"
                                                  >
                                                    <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                      Permanent address
                                                    </FormLabel>
                                                  </Col>
                                                  <Col
                                                    sm="1"
                                                    className="form-group text-end"
                                                  >
                                                    <CloseButton
                                                      onClick={
                                                        PersonalAddressDetail
                                                      }
                                                    />
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardHeader>
                                            <CardBody>
                                              <Col
                                                sm="12"
                                                className="form-group"
                                              >
                                                <Row className="g-2 form">
                                                  <Col
                                                    sm="12"
                                                    className="form-group"
                                                  >
                                                    <Row className="g-2 form">
                                                      <Col
                                                        sm="6"
                                                        className="form-group"
                                                      >
                                                        &nbsp;
                                                      </Col>
                                                      <Col
                                                        sm="6"
                                                        className="form-group form-check"
                                                      >
                                                        <Input
                                                          type="checkbox"
                                                          onClick={
                                                            CopyPresentToPermanent
                                                          }
                                                        />
                                                        <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-main-menu">
                                                          Same as present
                                                          address
                                                        </FormLabel>
                                                      </Col>
                                                    </Row>
                                                  </Col>
                                                  <Col
                                                    sm="12"
                                                    className="form-group"
                                                  >
                                                    <Row className="g-2 form">
                                                      {/* present address details */}
                                                      <Col
                                                        sm="6"
                                                        className="form-group"
                                                      >
                                                        <Card>
                                                          <CardBody>
                                                            <Row className="g-2 form">
                                                              <Col
                                                                sm="12"
                                                                className="form-group"
                                                              >
                                                                <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                                  House/Flat
                                                                  No./Building
                                                                </FormLabel>
                                                                <Col sm="12">
                                                                  <Form.Control
                                                                    type="text"
                                                                    required
                                                                    placeholder="Enter house no"
                                                                    defaultValue={houseNumber}
                                                                    onChange={(event) => setHouseNumber(event.target.value)}
                                                                    className="rounded-0"
                                                                    size="sm"
                                                                    isValid={
                                                                      houseNumber !==
                                                                        ""
                                                                        ? true
                                                                        : false
                                                                    }
                                                                  />
                                                                </Col>
                                                              </Col>
                                                              <Col
                                                                sm="12"
                                                                className="form-group"
                                                              >
                                                                <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                                  Street Details
                                                                </FormLabel>
                                                                <Col sm="12">
                                                                  <Form.Control
                                                                    type="text"
                                                                    required
                                                                    placeholder="Enter street details"
                                                                    defaultValue={
                                                                      streetDetails
                                                                    }
                                                                    onChange={(
                                                                      event
                                                                    ) =>
                                                                      setStreetDetails(
                                                                        event
                                                                          .target
                                                                          .value
                                                                      )
                                                                    }
                                                                    className="rounded-0"
                                                                    size="sm"
                                                                    isValid={
                                                                      streetDetails !==
                                                                        ""
                                                                        ? true
                                                                        : false
                                                                    }
                                                                  />
                                                                </Col>
                                                              </Col>
                                                              <Col
                                                                sm="12"
                                                                className="form-group"
                                                              >
                                                                <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                                  Landmark
                                                                </FormLabel>
                                                                <Col sm="12">
                                                                  <Form.Control
                                                                    type="text"
                                                                    required
                                                                    placeholder="Enter land mark"
                                                                    defaultValue={landMark}
                                                                    onChange={(event) => setLandMark(event.target.value)}
                                                                    className="rounded-0"
                                                                    size="sm"
                                                                    isValid={
                                                                      landMark !==
                                                                        ""
                                                                        ? true
                                                                        : false
                                                                    }
                                                                  />
                                                                </Col>
                                                              </Col>
                                                              <Col
                                                                sm="12"
                                                                className="form-group"
                                                              >
                                                                <Row className="g-2 form">
                                                                  <Col sm="6">
                                                                    <Col sm="12">
                                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                                        Country
                                                                      </FormLabel>
                                                                      <Col sm="12">
                                                                        <Form.Select
                                                                          required
                                                                          type="select"
                                                                          value={country}
                                                                          onChange={(event) => setCountry(event.target.value)}
                                                                          className="rounded-0"
                                                                          size="sm"
                                                                        >
                                                                          <option selected>Choose your option</option>
                                                                          {isaddCount.map(
                                                                            (data) => (<option>{data.name}</option>)
                                                                          )}
                                                                        </Form.Select>
                                                                      </Col>
                                                                    </Col>
                                                                    <Col sm="12">
                                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                                        City
                                                                      </FormLabel>
                                                                      <Col sm="12">
                                                                        <Form.Select
                                                                          required
                                                                          type="select"
                                                                          value={
                                                                            city
                                                                          }
                                                                          onChange={(
                                                                            event
                                                                          ) =>
                                                                            setCity(
                                                                              event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          }
                                                                          size="sm"
                                                                        >
                                                                          <option selected>Choose your option </option>
                                                                          {isaddcity.map(
                                                                            (data) => (<option>{data.name}</option>)
                                                                          )}
                                                                        </Form.Select>
                                                                      </Col>
                                                                    </Col>
                                                                    <Col sm="12">
                                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                                        Taluka
                                                                      </FormLabel>
                                                                      <Col sm="12">
                                                                        <Form.Select
                                                                          type="select"
                                                                          value={
                                                                            taluka
                                                                          }
                                                                          onChange={(
                                                                            event
                                                                          ) =>
                                                                            setTaluka(
                                                                              event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          }
                                                                          className="rounded-0"
                                                                          size="sm"
                                                                        >
                                                                          <option selected>Choose your option</option>
                                                                          {isaddtaluka.map(
                                                                            (data) => (<option>{data.name}</option>)
                                                                          )}
                                                                        </Form.Select>
                                                                      </Col>
                                                                    </Col>
                                                                  </Col>
                                                                  <Col sm="6">
                                                                    <Col sm="12">
                                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                                        State
                                                                      </FormLabel>
                                                                      <Col sm="12">
                                                                        <Form.Select
                                                                          type="select"
                                                                          value={isstate}
                                                                          onChange={(event) => setIsState(event.target.value)}
                                                                          className="rounded-0"
                                                                          size="sm"
                                                                        >
                                                                          <option selected>Choose your option </option>
                                                                          {isaddState.map(
                                                                            (data) => (<option>{data.name}</option>)
                                                                          )}
                                                                        </Form.Select>
                                                                      </Col>
                                                                    </Col>
                                                                    <Col sm="12">
                                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                                        District
                                                                      </FormLabel>
                                                                      <Col sm="12">
                                                                        <Form.Select
                                                                          type="select"
                                                                          value={isdistrict}
                                                                          onChange={(event) => setIsDistrict(event.target.value)}
                                                                          className="rounded-0"
                                                                          size="sm"
                                                                        >
                                                                          <option selected>Choose your option</option>
                                                                          {isadddist.map((data) => (
                                                                            <option>{data.name}</option>
                                                                          ))}
                                                                        </Form.Select>
                                                                      </Col>
                                                                    </Col>
                                                                    <Col sm="12">
                                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                                        Pin Code
                                                                      </FormLabel>
                                                                      <Col sm="12">
                                                                        <Form.Control
                                                                          type="text"
                                                                          defaultValue={pin || ""}
                                                                          onChange={(event) => setPin(event.target.value)}
                                                                          placeholder="Enter your area pin/zip code"
                                                                          maxLength="6"
                                                                          minLength="6"
                                                                          className="rounded-0"
                                                                          size="sm"
                                                                          isValid={pin && pin.length === 6}
                                                                          isInvalid={pin && (pin.length <= 5 && pin !== "")}
                                                                        />
                                                                      </Col>
                                                                    </Col>
                                                                  </Col>
                                                                </Row>
                                                              </Col>
                                                            </Row>
                                                          </CardBody>
                                                        </Card>
                                                      </Col>
                                                      {/* Permenant address details */}
                                                      <Col
                                                        sm="6"
                                                        className="form-group"
                                                      >
                                                        <Card>
                                                          <CardBody>
                                                            <Row className="g-2 form">
                                                              <Col
                                                                sm="12"
                                                                className="form-group"
                                                              >
                                                                <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                                  House/Flat
                                                                  No./Building
                                                                </FormLabel>
                                                                <Col sm="12">
                                                                  <Form.Control
                                                                    type="text"
                                                                    required
                                                                    placeholder="Enter house no"
                                                                    defaultValue={perHouseNumber}
                                                                    onChange={(event) => setPerHouseNumber(event.target.value)}
                                                                    className="rounded-0"
                                                                    size="sm"
                                                                    isValid={
                                                                      perHouseNumber !==
                                                                        ""
                                                                        ? true
                                                                        : false
                                                                    }
                                                                  />
                                                                </Col>
                                                              </Col>
                                                              <Col
                                                                sm="12"
                                                                className="form-group"
                                                              >
                                                                <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                                  Street Details
                                                                </FormLabel>
                                                                <Col sm="12">
                                                                  <Form.Control
                                                                    type="text"
                                                                    required
                                                                    placeholder="Enter street details"
                                                                    defaultValue={perStreetDetails}
                                                                    onChange={(event) => setPerStreetDetails(event.target.value)}
                                                                    className="rounded-0"
                                                                    size="sm"
                                                                    isValid={
                                                                      perStreetDetails !==
                                                                        ""
                                                                        ? true
                                                                        : false
                                                                    }
                                                                  />
                                                                </Col>
                                                              </Col>
                                                              <Col
                                                                sm="12"
                                                                className="form-group"
                                                              >
                                                                <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                                  Landmark
                                                                </FormLabel>
                                                                <Col sm="12">
                                                                  <Form.Control
                                                                    type="text"
                                                                    required
                                                                    placeholder="Enter land mark"
                                                                    defaultValue={
                                                                      perLandMark
                                                                    }
                                                                    onChange={(
                                                                      event
                                                                    ) =>
                                                                      setPerLandMark(
                                                                        event
                                                                          .target
                                                                          .value
                                                                      )
                                                                    }
                                                                    className="rounded-0"
                                                                    size="sm"
                                                                    isValid={
                                                                      perLandMark !==
                                                                        ""
                                                                        ? true
                                                                        : false
                                                                    }
                                                                  />
                                                                </Col>
                                                              </Col>
                                                              <Col
                                                                sm="12"
                                                                className="form-group"
                                                              >
                                                                <Row className="g-2 form">
                                                                  <Col sm="6">
                                                                    <Col sm="12">
                                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                                        Country
                                                                      </FormLabel>
                                                                      <Col sm="12">
                                                                        <Form.Select
                                                                          required
                                                                          type="select"
                                                                          value={
                                                                            perCountry
                                                                          }
                                                                          onChange={(
                                                                            event
                                                                          ) =>
                                                                            setPerCountry(
                                                                              event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          }
                                                                          className="rounded-0"
                                                                          size="sm"
                                                                        >
                                                                          <option selected>Choose your option</option>
                                                                          {isaddCount.map(
                                                                            (data) => (<option>{data.name}</option>)
                                                                          )}
                                                                        </Form.Select>
                                                                      </Col>
                                                                    </Col>
                                                                    <Col sm="12">
                                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                                        City
                                                                      </FormLabel>
                                                                      <Col sm="12">
                                                                        <Form.Select
                                                                          required
                                                                          type="select"
                                                                          value={
                                                                            perCity
                                                                          }
                                                                          onChange={(
                                                                            event
                                                                          ) =>
                                                                            setPerCity(
                                                                              event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          }
                                                                          size="sm"
                                                                        >
                                                                          <option selected>Choose your option </option>
                                                                          {isaddcity.map(
                                                                            (data) => (<option>{data.name}</option>)
                                                                          )}
                                                                        </Form.Select>
                                                                      </Col>
                                                                    </Col>
                                                                    <Col sm="12">
                                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                                        Taluka
                                                                      </FormLabel>
                                                                      <Col sm="12">
                                                                        <Form.Select
                                                                          type="select"
                                                                          value={
                                                                            perTaluka
                                                                          }
                                                                          onChange={(
                                                                            event
                                                                          ) =>
                                                                            setPerTaluka(
                                                                              event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          }
                                                                          className="rounded-0"
                                                                          size="sm"
                                                                        >
                                                                          <option selected>Choose your option</option>
                                                                          {isaddtaluka.map(
                                                                            (data) => (<option>{data.name}</option>)
                                                                          )}
                                                                        </Form.Select>
                                                                      </Col>
                                                                    </Col>
                                                                  </Col>
                                                                  <Col sm="6">
                                                                    <Col sm="12">
                                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                                        State
                                                                      </FormLabel>
                                                                      <Col sm="12">
                                                                        <Form.Select
                                                                          type="select"
                                                                          value={
                                                                            isPerState
                                                                          }
                                                                          onChange={(
                                                                            event
                                                                          ) =>
                                                                            setPerState(
                                                                              event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          }
                                                                          className="rounded-0"
                                                                          size="sm"
                                                                        >
                                                                          <option selected>Choose your option </option>
                                                                          {isaddState.map(
                                                                            (data) => (<option>{data.name}</option>)
                                                                          )}
                                                                        </Form.Select>
                                                                      </Col>
                                                                    </Col>
                                                                    <Col sm="12">
                                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                                        District
                                                                      </FormLabel>
                                                                      <Col sm="12">
                                                                        <Form.Select
                                                                          type="select"
                                                                          value={
                                                                            isPerDistrict
                                                                          }
                                                                          onChange={(
                                                                            event
                                                                          ) =>
                                                                            setPerDistrict(
                                                                              event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          }
                                                                          className="rounded-0"
                                                                          size="sm"
                                                                        >
                                                                          <option selected>Choose your option</option>
                                                                          {isadddist.map((data) => (
                                                                            <option>{data.name}</option>
                                                                          ))}
                                                                        </Form.Select>
                                                                      </Col>
                                                                    </Col>
                                                                    <Col sm="12">
                                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                                        Pin Code
                                                                      </FormLabel>
                                                                      <Col sm="12">
                                                                        <Form.Control
                                                                          type="text"
                                                                          defaultValue={perPin || ""}
                                                                          onChange={(event) => setPerPin(event.target.value)}
                                                                          placeholder="Enter your area pin/zip code"
                                                                          maxLength="6"
                                                                          minLength="6"
                                                                          className="rounded-0"
                                                                          size="sm"
                                                                          isValid={(perPin && perPin.length === 6) || false}
                                                                          isInvalid={(perPin && perPin.length <= 5 && perPin !== "") || false}
                                                                        />
                                                                      </Col>
                                                                    </Col>
                                                                  </Col>
                                                                </Row>
                                                              </Col>
                                                            </Row>
                                                          </CardBody>
                                                        </Card>
                                                      </Col>
                                                    </Row>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardBody>
                                            <CardFooter>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col
                                                    sm="6"
                                                    className="text-end"
                                                  >
                                                    <Button
                                                      onClick={
                                                        PersonalAddressDetail
                                                      }
                                                      className="btn-outline-primary  text-uppercase font-size-11 fw-bold bg-white text-priamry"
                                                    >
                                                      Cancel
                                                    </Button>
                                                  </Col>
                                                  <Col sm="6">
                                                    <Button
                                                      className="font-size-11  text-uppercase fw-bold"
                                                      type="submit"
                                                      onClick={ProfileAddressDetails}
                                                      disabled={
                                                        perHouseNumber !==
                                                          " " &&
                                                          perStreetDetails !==
                                                          "" &&
                                                          // perLandMark !== "" &&
                                                          perCountry !== "" &&
                                                          isPerState !== "" &&
                                                          isPerDistrict !== "" &&
                                                          perCity !== "" &&
                                                          perTaluka !== "" &&
                                                          perPin !== "" &&
                                                          houseNumber !== "" &&
                                                          streetDetails !== "" &&
                                                          // landMark !== "" &&
                                                          country !== "" &&
                                                          isstate !== "" &&
                                                          isdistrict !== "" &&
                                                          city !== "" &&
                                                          taluka !== "" &&
                                                          pin !== ""
                                                          ? false
                                                          : true
                                                      }
                                                      variant={
                                                        perHouseNumber !==
                                                          " " &&
                                                          perStreetDetails !==
                                                          "" &&
                                                          // perLandMark !== "" &&
                                                          perCountry !== "" &&
                                                          isPerState !== "" &&
                                                          isPerDistrict !== "" &&
                                                          perCity !== "" &&
                                                          perTaluka !== "" &&
                                                          perPin !== "" &&
                                                          houseNumber !== "" &&
                                                          streetDetails !== "" &&
                                                          // landMark !== "" &&
                                                          country !== "" &&
                                                          isstate !== "" &&
                                                          isdistrict !== "" &&
                                                          city !== "" &&
                                                          taluka !== "" &&
                                                          pin !== ""
                                                          ? buttonBlueBg
                                                          : buttonSecondarybg
                                                      }
                                                    >
                                                      Save
                                                    </Button>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardFooter>
                                          </Form>
                                        </Card>
                                        <Col sm="12" className="p-1">
                                          &nbsp;
                                        </Col>
                                      </>
                                    )}
                                    {isAdditionalDetail && (
                                      <>
                                        <Card className="border-0">
                                          <Form
                                            onSubmit={ProfileAdditionalDetails}
                                          >
                                            <CardBody>
                                              <Col
                                                sm="12"
                                                className="border-bottom"
                                              >
                                                <Row className="g-2 form">
                                                  <Col
                                                    sm="12"
                                                    className="form-group"
                                                  >
                                                    <Row className="g-2 form">
                                                      <Col sm="2">
                                                        <FormLabel className="text-uppercase font-size-12 fw-normal Ri-text-color-sub-menu">
                                                          Additional Detail
                                                        </FormLabel>
                                                      </Col>
                                                      <Col sm="4">
                                                        <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                          Gender
                                                        </FormLabel>
                                                      </Col>
                                                      <Col sm="5">
                                                        <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                          Date of birth
                                                        </FormLabel>
                                                      </Col>
                                                      <Col
                                                        sm="1"
                                                        onClick={AdditionalDetailCloseCancel}
                                                        type="button"
                                                        className="font-size-10 fw-bold text-uppercase text-end title-text-color "
                                                      >
                                                        Edit
                                                      </Col>
                                                    </Row>
                                                  </Col>
                                                  {/* <Col
                                                    sm="12"
                                                    className="form-group"
                                                  ></Col> */}
                                                  <Row className="g-2 form">
                                                    <Col sm="2">&nbsp;</Col>
                                                    <Col sm="4">
                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                        {profile.gender}
                                                      </FormLabel>
                                                    </Col>
                                                    <Col sm="5">
                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                        {" "}
                                                        {formatDate(profile.dob)}
                                                      </FormLabel>
                                                    </Col>
                                                  </Row>
                                                </Row>
                                              </Col>
                                            </CardBody>
                                          </Form>
                                        </Card>
                                      </>
                                    )}
                                    {!isAdditionalDetail && (
                                      <>
                                        <Col sm="12" className="form-group p-1">
                                          &nbsp;
                                        </Col>
                                        <Card className="border">
                                          <Form
                                            onSubmit={ProfileAdditionalDetails}
                                          >
                                            <CardHeader className="">
                                              <Col
                                                sm="12"
                                                className="form-group"
                                              >
                                                <Row className="g-2 form">
                                                  <Col sm="10" className="">
                                                    <FormLabel className="mb-0 form-group text-uppercase font-size-12 fw-normal Ri-text-color-sub-menu">
                                                      Additional Detail
                                                    </FormLabel>
                                                  </Col>
                                                  <Col
                                                    sm="2"
                                                    className="form-group text-end"
                                                  >
                                                    <CloseButton
                                                      onClick={AdditionalDetailCloseCancel}
                                                    />
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardHeader>
                                            <CardBody>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col sm="6">
                                                    <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                      Gender
                                                    </FormLabel>
                                                    <Col sm="12">
                                                      <Form.Select
                                                        placeholder="Enter your genter"
                                                        type="select"
                                                        defaultValue={gender}
                                                        onChange={(e) => setGender(e.target.value)}
                                                        size="sm"
                                                        className="rounded-0"
                                                      >
                                                        <option
                                                          selected
                                                          disabled
                                                          value=""
                                                        >
                                                          Choose title
                                                        </option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                      </Form.Select>
                                                    </Col>
                                                  </Col>
                                                  <Col sm="6">
                                                    <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                      Date of birth
                                                    </FormLabel>
                                                    <Col sm="12">
                                                      <Form.Control
                                                        defaultValue={dateofbirth}
                                                        onChange={(e) => setDataOfBirth(e.target.value)}
                                                        max="2005-12-31"
                                                        type="date"
                                                        size="sm"
                                                        className="rounded-0"
                                                      />
                                                    </Col>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardBody>
                                            <CardFooter>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col
                                                    sm="6"
                                                    className="text-end"
                                                  >
                                                    <Button
                                                      onClick={
                                                        AdditionalDetailCloseCancel
                                                      }
                                                      className="btn-outline-primary font-size-11 fw-bold text-primary bg-white text-uppercase"
                                                    >
                                                      Cancel
                                                    </Button>
                                                  </Col>
                                                  <Col sm="6">
                                                    <Button
                                                      type="submit"
                                                      className="font-size-11 fw-bold text-uppercase"
                                                      disabled={
                                                        selectGender !== "" &&
                                                          dateofbirth !== ""
                                                          ? false
                                                          : true
                                                      }
                                                      variant={
                                                        selectGender !== "" &&
                                                          dateofbirth !== ""
                                                          ? buttonBlueBg
                                                          : buttonSecondarybg
                                                      }
                                                      onClick={ProfileAdditionalDetails}
                                                    >
                                                      save
                                                    </Button>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardFooter>
                                          </Form>
                                        </Card>
                                        <Col sm="12" className="form-group p-1">
                                          &nbsp;
                                        </Col>
                                      </>
                                    )}
                                    <Form onSubmit={educationSubmitHandler}>
                                      {isEducationalDetail && (
                                        <>
                                          <Card className="border-0">
                                            <CardBody>
                                              <Col
                                                sm="12"
                                                className="border-bottom"
                                              >
                                                <Col
                                                  sm="12"
                                                  className="form-group"
                                                >
                                                  <Row className="g-2 form">
                                                    <Col
                                                      sm="2"
                                                      className="form-group text-uppercase font-size-12 fw-normal"
                                                    >
                                                      {" "}
                                                      educational detail
                                                    </Col>
                                                    <Col
                                                      sm="5"
                                                      className="form-group form-check mt-0"
                                                    >
                                                      <Input type="checkbox" />
                                                      <FormLabel className="font-size-12 fw-normal ">
                                                        I am student
                                                      </FormLabel>
                                                    </Col>
                                                    <Col
                                                      sm="4"
                                                      className="form-group"
                                                    >
                                                      &nbsp;
                                                    </Col>
                                                    <Col
                                                      sm="1"
                                                      className="form-group text-uppercase text-end font-size-10 fw-bold title-text-color"
                                                      type="button"
                                                      onClick={EducationalDetail}
                                                    >
                                                      Edit
                                                    </Col>
                                                  </Row>
                                                </Col>
                                                <Col
                                                  sm="12"
                                                  className="form-group"
                                                >
                                                  <Row className="g-2 form">
                                                    <Col sm="2">&nbsp;</Col>
                                                    <Col sm="3">
                                                      <FormLabel className="font-size-10 text-uppercase Ri-text-color-sub-menu fw-normal">
                                                        Education Level
                                                      </FormLabel>
                                                    </Col>
                                                    <Col sm="1">&nbsp;</Col>
                                                    <Col sm="5">
                                                      <FormLabel className="font-size-10 text-uppercase Ri-text-color-sub-menu fw-normal">
                                                        School/Board/University
                                                      </FormLabel>
                                                    </Col>
                                                  </Row>
                                                  {educationDetail.map((educations) => (
                                                    <Row className="g-2 form" key={educations.id}> {/* Add a key for list items */}
                                                      <Col sm="2">&nbsp;</Col>
                                                      <Col sm="3">
                                                        <Row className="g-1 form">
                                                          <Col
                                                            sm="12"
                                                            className="font-size-12 fw-normal Ri-text-color-main-menu"
                                                          >
                                                            {educations.education}
                                                          </Col>
                                                        </Row>
                                                      </Col>
                                                      <Col sm="1">&nbsp;</Col>
                                                      <Col sm="5">
                                                        <Row className="g-1 form">
                                                          <Col
                                                            sm="12"
                                                            className="font-size-12 fw-normal Ri-text-color-main-menu"
                                                          >
                                                            {educations.university}, {educations.city}, {educations.state}
                                                          </Col>
                                                        </Row>
                                                      </Col>
                                                    </Row>
                                                  ))}
                                                </Col>
                                                <Col
                                                  sm="12"
                                                  className="form-group p-1"
                                                >
                                                  &nbsp;
                                                </Col>
                                              </Col>
                                            </CardBody>
                                          </Card>
                                        </>
                                      )}
                                      {!isEducationalDetail && (
                                        <>
                                          <Col
                                            sm="12"
                                            className="form-group p-1"
                                          >
                                            &nbsp;
                                          </Col>
                                          <Card>
                                            <CardHeader>
                                              <Row>
                                                <Col className="ms-auto  font-size-12 fw-normal">
                                                  <FormLabel className="mt-2 text-uppercase">
                                                    Education details
                                                  </FormLabel>
                                                </Col>
                                                <CloseButton
                                                  onClick={EducationalDetail}
                                                />
                                              </Row>
                                            </CardHeader>
                                            <CardBody>
                                              <Col
                                                sm="12"
                                                className="form-check"
                                              >
                                                <Input type="checkbox" />
                                                <label className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                  I'm Student
                                                </label>
                                              </Col>
                                              {educationDetails.map(
                                                (educationDetail, index) => (
                                                  <Col
                                                    sm="12"
                                                    key={index}
                                                    className="form-control"
                                                  >
                                                    <Row>
                                                      <Col
                                                        sm="11"
                                                        className="form-check"
                                                      >
                                                        <Input type="checkbox"></Input>
                                                        <label className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                          Currently pursuing
                                                        </label>
                                                      </Col>
                                                      <Col sm="1">
                                                        <Button
                                                          onClick={() =>
                                                            removeEducationSection(index)}
                                                          className="btn-outline-primary font-size-11 text-uppercase fw-bold bg-white text-primary"
                                                        >
                                                          -
                                                        </Button>
                                                      </Col>
                                                    </Row>
                                                    <Row className="g-2 form">
                                                      <Col sm="4">
                                                        <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                          Education
                                                        </FormLabel>
                                                        <Col sm="12">
                                                          <Input
                                                            value={educationDetail.education}
                                                            onChange={(e) => handleFieldChange(index, "education", e.target.value)}
                                                            type="select"
                                                            size="sm"
                                                            className="rounded-0"
                                                          >
                                                            <option
                                                              selected
                                                              disabled
                                                              value=""
                                                            >
                                                              Choose your option
                                                            </option>
                                                            <option>B.A.</option>
                                                            <option>B. Tech</option>
                                                            <option>B.Com</option>
                                                            <option>B.Sc.</option>
                                                            <option>MCA</option>
                                                          </Input>
                                                        </Col>
                                                      </Col>
                                                      <Col sm="4">
                                                        <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                          University/Board/School
                                                        </FormLabel>
                                                        <Col sm="12">
                                                          <Input
                                                            value={educationDetail.university}
                                                            onChange={(e) =>
                                                              handleFieldChange(index, "university", e.target.value)}
                                                            type="select"
                                                            size="sm"
                                                            className="rounded-0"
                                                          >
                                                            <option
                                                              selected
                                                              disabled
                                                              value=""
                                                            >
                                                              Choose your option
                                                            </option>
                                                            <option>Pune university</option>
                                                            <option>goa university</option>
                                                          </Input>
                                                        </Col>
                                                      </Col>
                                                      <Col sm="4">
                                                        <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                          Year of passing
                                                        </FormLabel>
                                                        <Col sm="12">
                                                          <Input
                                                            value={educationDetail.passing}
                                                            onChange={(e) => handleFieldChange(index, "passing", e.target.value)}
                                                            type="date"
                                                            size="sm"
                                                            className="rounded-0"
                                                          />
                                                        </Col>
                                                      </Col>
                                                    </Row>
                                                    <Row className="g-2 form">
                                                      <Col sm="4">
                                                        <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                          Country
                                                        </FormLabel>
                                                        <Col sm="12">
                                                          <Input
                                                            // defaultValue={ iseducountry}
                                                            // onChange={(e) =>setIsEduCountry( e.target.value) }
                                                            value={
                                                              educationDetail.country
                                                            }
                                                            onChange={(e) =>
                                                              handleFieldChange(
                                                                index,
                                                                "country",
                                                                e.target.value
                                                              )
                                                            }
                                                            type="select"
                                                            size="sm"
                                                            className="rounded-0"
                                                          >
                                                            <option>
                                                              Chosse your option
                                                            </option>
                                                            {isaddCount.map(
                                                              (data) => (
                                                                <option>
                                                                  {data.name}
                                                                </option>
                                                              )
                                                            )}
                                                          </Input>
                                                        </Col>
                                                      </Col>
                                                      <Col sm="4">
                                                        <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                          State
                                                        </FormLabel>
                                                        <Col sm="12">
                                                          <Input
                                                            // defaultValue={
                                                            //   isedustate
                                                            // }
                                                            // onChange={(e) => setIsEduState(e.target.value)}
                                                            value={
                                                              educationDetail.state
                                                            }
                                                            onChange={(e) =>
                                                              handleFieldChange(
                                                                index,
                                                                "state",
                                                                e.target.value
                                                              )
                                                            }
                                                            type="select"
                                                            className="rounded-0"
                                                            size="sm"
                                                          >
                                                            <option
                                                              selected
                                                              disabled
                                                              value=""
                                                            >
                                                              Choose your option
                                                            </option>
                                                            <option>
                                                              Maharashtra
                                                            </option>
                                                            <option>Goa</option>
                                                            <option>
                                                              U.P.
                                                            </option>
                                                            /
                                                            {isaddState.map(
                                                              (data) => (
                                                                <option>
                                                                  {data.name}{" "}
                                                                </option>
                                                              )
                                                            )}
                                                          </Input>
                                                        </Col>
                                                      </Col>
                                                      <Col sm="4">
                                                        <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                          City
                                                        </FormLabel>
                                                        <Col sm="12">
                                                          <Input
                                                            // defaultValue={iseducity}
                                                            // onChange={(e) =>
                                                            //   setIsEduCity(
                                                            //     e.target.value
                                                            //   )
                                                            // }
                                                            value={
                                                              educationDetail.city
                                                            }
                                                            onChange={(e) =>
                                                              handleFieldChange(
                                                                index,
                                                                "city",
                                                                e.target.value
                                                              )
                                                            }
                                                            type="select"
                                                            size="sm"
                                                            className="rounded-0"
                                                          >
                                                            <option
                                                              selected
                                                              disabled
                                                              value=""
                                                            >
                                                              Choose your
                                                              options
                                                            </option>
                                                            {isaddcity.map(
                                                              (data) => (
                                                                <option>
                                                                  {data.name}
                                                                </option>
                                                              )
                                                            )}
                                                          </Input>
                                                        </Col>
                                                      </Col>
                                                    </Row>
                                                  </Col>
                                                ))}
                                              <Col sm="12">
                                                <Row>
                                                  <Col sm="10"></Col>
                                                  <Col sm="2">
                                                    <Button
                                                      onClick={addEducationSection}
                                                      className="btn-outline-primary font-size-11 text-uppercase fw-bold bg-white text-primary"
                                                    >
                                                      Add Education
                                                    </Button>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardBody>
                                            <CardFooter>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col
                                                    sm="6"
                                                    className="text-end"
                                                  >
                                                    <Button
                                                      onClick={
                                                        EducationalDetail
                                                      }
                                                      className="btn-outline-primary font-size-11 text-uppercase fw-bold bg-white text-primary"
                                                    >
                                                      Cancel
                                                    </Button>
                                                  </Col>
                                                  <Col sm="6">
                                                    <Button
                                                      type="submit"
                                                      className="font-size-11 fw-bold text-uppercase"
                                                      // disabled={iseducity !== "" &&
                                                      //   isedustate !== "" &&
                                                      //   iseducountry !== "" &&
                                                      //   isyrpass !== "" &&
                                                      //   iseducation !== "" &&
                                                      //   isinstitute !== "" ? false : true

                                                      // }
                                                      variant={
                                                        iseducity !== "" &&
                                                          isedustate !== "" &&
                                                          iseducountry !== "" &&
                                                          isyrpass !== "" &&
                                                          iseducation !== "" &&
                                                          isinstitute !== ""
                                                          ? buttonBlueBg
                                                          : buttonSecondarybg
                                                      }

                                                    >
                                                      save
                                                    </Button>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardFooter>
                                          </Card>
                                          <Col
                                            sm="12"
                                            className="form-group p-1"
                                          >
                                            &nbsp;
                                          </Col>
                                        </>
                                      )}
                                    </Form>

                                    <Form onSubmit={jobDetailSubmitHandler}>
                                      {isJobdetails && (
                                        <>
                                          <Card className="border-0">
                                            <CardBody>
                                              <Col
                                                sm="12"
                                                className="border-bottom"
                                              >
                                                <Row className="g-2 form">
                                                  <Col sm="2">
                                                    <FormLabel className="font-size-12 text-uppercase fw-normal Ri-text-color-main-menu">
                                                      job details
                                                    </FormLabel>
                                                  </Col>
                                                  <Col sm="3">
                                                    <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                      Occupation
                                                    </FormLabel>
                                                  </Col>
                                                  <Col sm="1">&nbsp;</Col>
                                                  <Col sm="3">
                                                    <FormLabel className="font-size-10  text-uppercase fw-normal Ri-text-color-sub-menu">
                                                      company/bussines name
                                                    </FormLabel>
                                                  </Col>
                                                  <Col sm="2">
                                                    <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                      designation
                                                    </FormLabel>
                                                  </Col>
                                                  <Col
                                                    sm="1"
                                                    onClick={JobDetails}
                                                    className="text-end"
                                                  >
                                                    <FormLabel
                                                      type="button"
                                                      className="font-size-10 text-uppercase  fw-bold title-text-color"
                                                    >
                                                      Edit
                                                    </FormLabel>
                                                  </Col>
                                                </Row>
                                                {jobDetailHandler.map((item) => (
                                                  <>
                                                    <Row className="g-2 form">
                                                      <Col sm="2">&nbsp;</Col>
                                                      <Col sm="3">
                                                        <Col
                                                          sm="12"
                                                          className="form-group"
                                                        >
                                                          <FormLabel className="font-size-12  fw-normal Ri-text-color-main-menu">
                                                            {item.profession}
                                                          </FormLabel>
                                                        </Col>
                                                      </Col>
                                                      <Col sm="1">&nbsp;</Col>
                                                      <Col sm="3">
                                                        <Col
                                                          sm="12"
                                                          className="form-group"
                                                        >
                                                          <FormLabel className="font-size-12  fw-normal Ri-text-color-main-menu">
                                                            {item.companyName}
                                                          </FormLabel>
                                                        </Col>
                                                      </Col>
                                                      <Col sm="2">
                                                        <Col
                                                          sm="12"
                                                          className="form-group"
                                                        >
                                                          <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                            {item.designation}
                                                          </FormLabel>
                                                        </Col>
                                                      </Col>
                                                    </Row>
                                                  </>
                                                ))}
                                              </Col>
                                            </CardBody>
                                          </Card>
                                        </>
                                      )}

                                      {!isJobdetails && (
                                        <>
                                          <Card>
                                            <CardHeader>
                                              <Row>
                                                <Col className="ms-suto ">
                                                  <FormLabel className="text-uppercase font-size-12 fw-normal Ri-text-color-main-menu">
                                                    job details
                                                  </FormLabel>
                                                </Col>
                                                <CloseButton
                                                  onClick={JobDetails}
                                                />
                                              </Row>
                                            </CardHeader>
                                            <CardBody>
                                              <Col
                                                sm="11"
                                                className="form-check">
                                                <Input type="checkbox" />
                                                <label className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                  I'm homemaker
                                                </label>
                                              </Col>
                                              {jobDetail.map((detail, index) => (
                                                <><Row className="g-2 form" key={index}>
                                                  <Col sm="11"> </Col>
                                                  <Col sm="1">
                                                    <Button
                                                      onClick={() => removeJobSection(index)}
                                                      className="btn-outline-primary font-size-11 text-uppercase fw-bold bg-white text-primary"
                                                    >
                                                      -
                                                    </Button>
                                                  </Col>
                                                  <Col sm="12">
                                                    <Row className="g-2 form">
                                                      <Col sm="4">
                                                        <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                          Occupation
                                                        </FormLabel>
                                                        <Col sm="12">
                                                          <Input
                                                            value={detail.isoccupation}
                                                            onChange={(e) => handleJobFieldChange(index, "isoccupation", e.target.value)}
                                                            type="select"
                                                            size="sm"
                                                            className="rounded-0"
                                                          >
                                                            <option
                                                              selected
                                                              disabled
                                                              value=""
                                                            >
                                                              Choose your option
                                                            </option>
                                                            <option>Doc</option>
                                                            <option>Engg</option>
                                                          </Input>
                                                        </Col>
                                                      </Col>
                                                      <Col sm="4">
                                                        <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                          Company/Bussiness name
                                                        </FormLabel>
                                                        <Col sm="12">
                                                          <Input
                                                            value={detail.iscomapnyname}
                                                            onChange={(e) => handleJobFieldChange(index, "iscomapnyname", e.target.value)}
                                                            type="select"
                                                            size="sm"
                                                            className="rounded-0"
                                                          >
                                                            <option
                                                              selected
                                                              disabled
                                                              value=""
                                                            >
                                                              Choose your option
                                                            </option>
                                                            <option>pvt.ltd </option>
                                                            <option>IT </option>
                                                          </Input>
                                                        </Col>
                                                      </Col>
                                                      <Col sm="4">
                                                        <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                          Designation
                                                        </FormLabel>
                                                        <Col sm="12">
                                                          <Input
                                                            defaultValue={detail.isdesignation}
                                                            onChange={(e) => handleJobFieldChange(index, "isdesignation", e.target.value)}
                                                            type="select"
                                                            size="sm"
                                                            className="rounded-0"
                                                          >
                                                            <option
                                                              selected
                                                              disabled
                                                              value=""
                                                            >
                                                              Choose your option
                                                            </option>
                                                            <option>manager </option>
                                                            <option>C.E.O </option>
                                                          </Input>
                                                        </Col>
                                                      </Col>
                                                    </Row>
                                                  </Col>
                                                  <Row className="g-2 form">
                                                    <Col sm="4">
                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                        Country
                                                      </FormLabel>
                                                      <Col sm="12">
                                                        <Input
                                                          value={detail.jobCountry}
                                                          onChange={(e) => handleJobFieldChange(index, "jobCountry", e.target.value)}
                                                          type="select"
                                                          size="sm"
                                                          className="rounded-0"
                                                        >
                                                          <option>
                                                            Chosse your option
                                                          </option>
                                                          {isaddCount.map((data) => (
                                                            <option>{data.name} </option>
                                                          ))}
                                                        </Input>
                                                      </Col>
                                                    </Col>
                                                    <Col sm="4">
                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                        State
                                                      </FormLabel>
                                                      <Col sm="12">
                                                        <Input

                                                          value={detail.jobState}
                                                          onChange={(e) => handleJobFieldChange(index, "jobState", e.target.value)}
                                                          type="select"
                                                          className="rounded-0"
                                                          size="sm"
                                                        >
                                                          <option
                                                            selected
                                                            disabled
                                                            value=""
                                                          >
                                                            Choose your option
                                                          </option>
                                                          {isaddState.map((data) => (
                                                            <option>{data.name}</option>
                                                          ))}
                                                        </Input>
                                                      </Col>
                                                    </Col>
                                                    <Col sm="4">
                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                        City
                                                      </FormLabel>
                                                      <Col sm="12">
                                                        <Input
                                                          value={detail.jobCity}
                                                          onChange={(e) => handleJobFieldChange(index, "jobCity", e.target.value)}
                                                          type="select"
                                                          size="sm"
                                                          className="rounded-0"
                                                        >
                                                          <option
                                                            selected
                                                            disabled
                                                            value=""
                                                          >
                                                            Choose your options
                                                          </option>
                                                          {isaddcity.map((data) => (
                                                            <option>{data.name}</option>
                                                          ))}
                                                        </Input>
                                                      </Col>
                                                    </Col>
                                                  </Row>
                                                </Row></>
                                              ))}
                                              <Row className="g-2 form">
                                                <Col sm="12">
                                                  <Row>
                                                    <Col sm="10"></Col>
                                                    <Col sm="2">
                                                      <Button
                                                        onClick={addJobSection}
                                                        className="btn-outline-primary font-size-11 text-uppercase fw-bold bg-white text-primary"
                                                      >
                                                        Add Job
                                                      </Button>
                                                    </Col>
                                                  </Row>
                                                </Col>
                                              </Row>
                                            </CardBody>
                                            <CardFooter>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col
                                                    sm="6"
                                                    className="text-end"
                                                  >
                                                    <Button
                                                      onClick={JobDetails}
                                                      className="btn-outline-primary font-size-11 fw-bold text-uppercase bg-white text-primary"
                                                    >
                                                      Cancel
                                                    </Button>
                                                  </Col>
                                                  <Col sm="6">
                                                    <Button
                                                      type="submit"
                                                      className="font-size-11 fw-bold text-uppercase"
                                                      disabled={
                                                        isoccupation !== "" &&
                                                          iscomapnyname !== "" &&
                                                          isdesignation !== "" &&
                                                          jobCountry !== "" &&
                                                          jobState !== "" &&
                                                          jobCity !== ""
                                                          ? true
                                                          : false
                                                      }
                                                      variant={
                                                        isoccupation !== "" &&
                                                          iscomapnyname !== "" &&
                                                          isdesignation !== "" &&
                                                          jobCountry !== "" &&
                                                          jobState !== "" &&
                                                          jobCity !== ""
                                                          ? buttonBlueBg
                                                          : buttonSecondarybg
                                                      }
                                                      onClick={jobDetailSubmitHandler}
                                                    >
                                                      save
                                                    </Button>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardFooter>
                                          </Card>
                                        </>
                                      )}
                                    </Form>
                                    <Form onSubmit={divercitySubmitHandler}>
                                      {isDivercityDetail && (
                                        <>
                                          <Card className="border-0">
                                            <CardBody>
                                              <Col className="border-bottom">
                                                <Col sm="12">
                                                  <Row className="g-2 form">
                                                    <Col sm="2">
                                                      <FormLabel className="font-size-12 fw-normal text-uppercase Ri-text-color-sub-menu ">
                                                        divercity deatils
                                                      </FormLabel>
                                                    </Col>
                                                    <Col sm="3">
                                                      <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu ">
                                                        social category
                                                      </FormLabel>
                                                    </Col>
                                                    <Col sm="1">&nbsp;</Col>
                                                    <Col sm="3">
                                                      <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu ">
                                                        religion practiced
                                                      </FormLabel>
                                                    </Col>
                                                    {/* <Col sm="2">
                                                      <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu ">
                                                        designation
                                                      </FormLabel>
                                                    </Col> */}
                                                    <Col
                                                      sm="3"
                                                      className="text-end "
                                                      onClick={DivercityDetail}
                                                    >
                                                      <FormLabel
                                                        className="text-uppercase font-size-10 fw-bold title-text-color"
                                                        type="button"
                                                      >
                                                        Edit
                                                      </FormLabel>
                                                    </Col>
                                                  </Row>
                                                </Col>
                                                <>
                                                  <Col sm="12">
                                                    <Row className="g-2 form">
                                                      <Col sm="2">
                                                        &nbsp;
                                                      </Col>
                                                      <Col sm="3">
                                                        <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">

                                                          {divercityApiHolder ? divercityApiHolder.socialCategory : ""}
                                                        </FormLabel>
                                                      </Col>
                                                      <Col sm="1">
                                                        &nbsp;
                                                      </Col>
                                                      <Col sm="3">
                                                        <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                          {divercityApiHolder ? divercityApiHolder.religionPracticed : ""}
                                                        </FormLabel>
                                                      </Col>
                                                      {/* <Col sm="2">
                                                            <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                              Senior software
                                                              engg
                                                            </FormLabel>
                                                          </Col> */}
                                                    </Row>
                                                  </Col>
                                                </>
                                              </Col>
                                            </CardBody>
                                          </Card>
                                        </>
                                      )}

                                      {!isDivercityDetail && (
                                        <>
                                          <Card>
                                            <CardHeader>
                                              <Row>
                                                <Col className="ms-auto ">
                                                  <FormLabel className="font-size-12 fw-normal  Ri-text-color-sub-menu text-uppercase">
                                                    divercity details
                                                  </FormLabel>
                                                </Col>

                                                <CloseButton
                                                  onClick={DivercityDetail}
                                                />
                                              </Row>
                                            </CardHeader>
                                            <CardBody>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col sm="6">
                                                    <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu text-uppercase">
                                                      social category
                                                    </FormLabel>
                                                    <Col sm="12">
                                                      <Input
                                                        value={issoccatagory}
                                                        onChange={(e) => setIsSocCatagory(e.target.value)}
                                                        type="select"
                                                        size="sm"
                                                        className="rounded-0"
                                                      >
                                                        <option
                                                          selected
                                                          disabled
                                                          value=""
                                                        >Choose your option</option>
                                                        <option>a</option>
                                                        <option>b</option>
                                                        <option>c</option>
                                                      </Input>
                                                    </Col>
                                                  </Col>
                                                  <Col sm="6">
                                                    <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu">
                                                      Religion practiced
                                                    </FormLabel>
                                                    <Col sm="12">
                                                      <Input
                                                        value={isregional}
                                                        onChange={(e) => setIsRegional(e.target.value)}
                                                        type="select"
                                                        className="rounded-0"
                                                        size="sm"
                                                      >
                                                        <option
                                                          selected
                                                          disabled
                                                          value=""
                                                        >Choose your option</option>
                                                        <option>Hindu</option>
                                                        <option>Muslim </option>
                                                        <option>Sikh </option>
                                                      </Input>
                                                    </Col>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardBody>
                                            <CardFooter>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col
                                                    sm="6"
                                                    className="text-end"
                                                  >
                                                    <Button
                                                      onClick={DivercityDetail}
                                                      className="btn-outline-primary text-uppercase fw-bold font-size-11 bg-white text-primary"
                                                    >
                                                      Cancel
                                                    </Button>
                                                  </Col>
                                                  <Col sm="6">
                                                    <Button
                                                      className="font-size-11 text-uppercase fw-bold"
                                                      type="submit"
                                                      disabled={
                                                        issoccatagory !== "" &&
                                                          isregional !== ""
                                                          ? false
                                                          : true
                                                      }
                                                      variant={
                                                        issoccatagory !== "" &&
                                                          isregional !== ""
                                                          ? buttonBlueBg
                                                          : buttonSecondarybg
                                                      }
                                                    >
                                                      save
                                                    </Button>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardFooter>
                                          </Card>
                                        </>
                                      )}
                                    </Form>

                                    <Form
                                      onSubmit={FunToAwakeErrorMessageForPassword}
                                    >
                                      <Col className="section">
                                        <Col sm="12" className="form-group">
                                          <Row className="g-2 form">
                                            <Col
                                              sm="2"
                                              className="form-group font-size-12 fw-normal Ri-text-color-sub-menu"
                                            >
                                              Password change
                                            </Col>
                                            <Col sm="10" className="form-group">
                                              <Row className="g-2 form">
                                                <Col
                                                  sm="12"
                                                  className="form-group"
                                                >
                                                  <Col className="form-control border-0 bg-transparent">
                                                    <Row className="g-2 form">
                                                      <Col
                                                        sm="12"
                                                        className="form-group"
                                                      >
                                                        <FormGroup>
                                                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu text-uppercase">
                                                            Password
                                                          </FormLabel>

                                                          <Col
                                                            sm="12"
                                                            className="form-group"
                                                          >
                                                            <Row className="g-2 form">
                                                              <Col
                                                                sm="8"
                                                                className="form-group"
                                                              >
                                                                <Form.Control
                                                                  type="password"
                                                                  maxLength="16"
                                                                  defaultValue={
                                                                    userPasswordEdit
                                                                  }
                                                                  onChange={(
                                                                    e
                                                                  ) =>
                                                                    setUserPasswordEdit(
                                                                      e.target
                                                                        .value
                                                                    )
                                                                  }
                                                                  size="sm"
                                                                  className="rounded-0"
                                                                />
                                                              </Col>
                                                            </Row>
                                                          </Col>
                                                          <Col sm="12">
                                                            <small className="font-size-10 fw-normal Ri-text-color-sub-menu">
                                                              Use 8 or more
                                                              characters with a
                                                              mix of letters,
                                                              numbers and
                                                              symbols
                                                            </small>
                                                          </Col>
                                                          <Col
                                                            sm="12"
                                                            className="form-group"
                                                          >
                                                            <Col
                                                              sm="6"
                                                              className="position-absolute bg-danger text-white px-2"
                                                            >
                                                              {
                                                                passwordErrorMessage
                                                              }
                                                              {
                                                                passwordFirstFieldEmpty
                                                              }
                                                            </Col>
                                                          </Col>
                                                          <Col
                                                            sm="12"
                                                            className="form-group p-2"
                                                          >
                                                            &nbsp;
                                                          </Col>

                                                          <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu text-uppercase">
                                                            Confirm password
                                                          </FormLabel>
                                                          <Col
                                                            sm="8"
                                                            className="form-group"
                                                          >
                                                            <Form.Control
                                                              value={
                                                                cPasswordEdit
                                                              }
                                                              onChange={(e) =>
                                                                setCPasswordEdit(
                                                                  e.target.value
                                                                )
                                                              }
                                                              type="password"
                                                              className="rounded-0"
                                                              size="sm"
                                                            />
                                                          </Col>
                                                        </FormGroup>
                                                      </Col>
                                                      <Col
                                                        sm="12"
                                                        className="form-group"
                                                      >
                                                        {passwordMatchState}
                                                      </Col>
                                                      <Col
                                                        sm="12"
                                                        className="form-group"
                                                      >
                                                        <Col
                                                          sm="6"
                                                          className="position-absolute bg-danger text-white px-2"
                                                        >
                                                          {passwordErrorMessage}
                                                          {
                                                            passwordSecondFieldEmpty
                                                          }
                                                        </Col>
                                                      </Col>
                                                    </Row>
                                                  </Col>
                                                </Col>
                                                <Col
                                                  sm="12"
                                                  className="form-group"
                                                >
                                                  <Row className="g-2 form">
                                                    <Col
                                                      sm="12"
                                                      className="form-group"
                                                    >
                                                      <Row className="g-2 form">
                                                        <Col
                                                          sm="6"
                                                          className="text-end"
                                                        >
                                                          <Button className="bg-white font-size-11 fw-bold  text-uppercase text-secondary border-secondary ">
                                                            Cancel
                                                          </Button>
                                                        </Col>
                                                        <Col
                                                          sm="6"
                                                          className="text-start"
                                                        >
                                                          <Button
                                                            type="submit"
                                                            className="font-size-11 fw-bold  text-uppercase"
                                                            disabled={
                                                              userPasswordEdit !==
                                                                "" &&
                                                                cPasswordEdit !==
                                                                ""
                                                                ? false
                                                                : true
                                                            }
                                                            variant={
                                                              userPasswordEdit !==
                                                                "" &&
                                                                cPasswordEdit !==
                                                                ""
                                                                ? buttonBlueBg
                                                                : buttonSecondarybg
                                                            }
                                                          >
                                                            Save
                                                          </Button>
                                                        </Col>
                                                      </Row>
                                                    </Col>
                                                  </Row>
                                                </Col>
                                              </Row>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Col>
                                    </Form>

                                    <Col sm="12" className="p-5">
                                      &nbsp;
                                    </Col>
                                  </Tab>
                                  {/* tab two M21 organiztion */}
                                  <Tab
                                    className={style}
                                    eventKey="profile"
                                    title={
                                      <Col
                                        onClick={TabColorDark}
                                        className="fs-5 fst-normal fw-normal "
                                      >
                                        M21 Organization
                                      </Col>
                                    }
                                  >
                                    <Card className="border-0">
                                      <CardBody className="border-0">
                                        <Row className="g-2 form">
                                          <Col
                                            sm="12"
                                            className="border-bottom"
                                          >
                                            <Row className="g-2 form">
                                              <Col sm="12">
                                                <Row>
                                                  <Col sm="2">
                                                    <FormLabel className="font-size-12 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                      My M21 journey
                                                    </FormLabel>
                                                  </Col>

                                                  <Col sm="3">
                                                    <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu text-uppercase">
                                                      Introductory type
                                                    </FormLabel>
                                                    <Col>
                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                        Offline/in person
                                                      </FormLabel>
                                                    </Col>
                                                  </Col>
                                                  <Col sm="3">
                                                    <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu text-uppercase">
                                                      Introductory Date
                                                    </FormLabel>

                                                    <Col>
                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                        DD-MM-YYYY
                                                      </FormLabel>
                                                    </Col>
                                                  </Col>
                                                  <Col sm="3">
                                                    <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu text-uppercase">
                                                      Location
                                                    </FormLabel>

                                                    <Col sm="12">
                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                        Bangalore, Karnataka
                                                      </FormLabel>
                                                    </Col>
                                                  </Col>
                                                </Row>
                                              </Col>
                                              <Col sm="12" className="">
                                                <Row className="">
                                                  <Col sm="2">&nbsp;</Col>
                                                  <Col sm="3">
                                                    <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                      Introductory type
                                                    </FormLabel>

                                                    <Col sm="12">
                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                        Offline/in person
                                                      </FormLabel>
                                                    </Col>
                                                  </Col>
                                                  <Col sm="3">
                                                    <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                      Introductory Date
                                                    </FormLabel>

                                                    <Col>
                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                        DD-MM-YYYY
                                                      </FormLabel>
                                                    </Col>
                                                  </Col>
                                                  <Col sm="3">
                                                    <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                      Location
                                                    </FormLabel>

                                                    <Col sm="12">
                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                        Bangalore, Karnataka
                                                      </FormLabel>
                                                    </Col>
                                                  </Col>
                                                </Row>
                                              </Col>
                                              <Col sm="12" className="pb-3">
                                                <Row>
                                                  <Col sm="12">
                                                    <Accordion defaultActiveKey="0">
                                                      <Accordion.Item eventKey="0">
                                                        <Accordion.Header className="bg-light">
                                                          My M21 milestone
                                                        </Accordion.Header>
                                                        <Accordion.Body className="bg-light">
                                                          <Col
                                                            sm="12"
                                                            className="form-group "
                                                          >
                                                            <Row className="g-2 form">
                                                              <Col
                                                                sm="12"
                                                                className="form-group "
                                                              >
                                                                <Col
                                                                  sm="12"
                                                                  className="form-group position-absolute"
                                                                >
                                                                  <Row className="g-2 form ">
                                                                    <Col
                                                                      sm="2"
                                                                      className="form-group mt-1 ps-0"
                                                                    >
                                                                      <img
                                                                        src={MilestoneDot}
                                                                        alt="milestone"
                                                                      />
                                                                    </Col>
                                                                    <Col
                                                                      sm="2"
                                                                      className="form-group mt-1 ps-0"
                                                                    >
                                                                      <img
                                                                        src={MilestoneDot}
                                                                        alt="milestone"
                                                                      />
                                                                    </Col>
                                                                    <Col
                                                                      sm="2"
                                                                      className="form-group mt-1 ps-0"
                                                                    >
                                                                      <img
                                                                        src={MilestoneDot}
                                                                        alt="milestone"
                                                                      />
                                                                    </Col>
                                                                    <Col
                                                                      sm="2"
                                                                      className="form-group mt-1 ps-0"
                                                                    >
                                                                      <img
                                                                        src={MilestoneDot}
                                                                        alt="milestone"
                                                                      />
                                                                    </Col>
                                                                    <Col
                                                                      sm="2"
                                                                      className="form-group mt-1 ps-0"
                                                                    >
                                                                      <img
                                                                        src={MilestoneDot}
                                                                        alt="milestone"
                                                                      />
                                                                    </Col>
                                                                    <Col
                                                                      sm="2"
                                                                      className="form-group mt-1 ps-0"
                                                                    >
                                                                      <img
                                                                        src={MilestoneDot}
                                                                        alt="milestone"
                                                                      />
                                                                    </Col>
                                                                  </Row>
                                                                </Col>
                                                              </Col>

                                                              <hr className="col-sm-12" />
                                                            </Row>
                                                          </Col>
                                                          <Col
                                                            sm="12"
                                                            className="form-group"
                                                          >
                                                            <Row className="g-2 form">
                                                              <Col
                                                                sm="2"
                                                                className="form-group font-size-11 fw-normal Ri-text-color-sub-menu text-uppercase"
                                                              >
                                                                Dd-Mm-yyy
                                                              </Col>
                                                              <Col
                                                                sm="2"
                                                                className="form-group font-size-11 fw-normal Ri-text-color-sub-menu text-uppercase ps-3"
                                                              >
                                                                Dd-Mm-yyy
                                                              </Col>
                                                              <Col
                                                                sm="2"
                                                                className="form-group font-size-11 fw-normal Ri-text-color-sub-menu text-uppercase ps-4"
                                                              >
                                                                Dd-Mm-yyy
                                                              </Col>
                                                              <Col
                                                                sm="2"
                                                                className="form-group font-size-11 fw-normal Ri-text-color-sub-menu text-uppercase  ps-5"
                                                              >
                                                                Dd-Mm-yyy
                                                              </Col>
                                                              <Col
                                                                sm="2"
                                                                className="form-group font-size-11 fw-normal Ri-text-color-sub-menu text-uppercase  ps-5"
                                                              >
                                                                Dd-Mm-yyy
                                                              </Col>
                                                              <Col
                                                                sm="2"
                                                                className="form-group font-size-11 fw-normal Ri-text-color-sub-menu text-uppercase  ps-5"
                                                              >
                                                                Dd-Mm-yyy
                                                              </Col>
                                                            </Row>
                                                          </Col>
                                                          <Col
                                                            sm="12"
                                                            className="form-group"
                                                          >
                                                            <Row className="g-2 form">
                                                              <Col
                                                                sm="2"
                                                                className="form-group font-size-12 fw-normal Ri-text-color-main-menu "
                                                              >
                                                                Introductory
                                                                done
                                                              </Col>
                                                              <Col
                                                                sm="2"
                                                                className="form-group font-size-12 fw-normal Ri-text-color-main-menu  ps-3"
                                                              >
                                                                Introductory
                                                                done
                                                              </Col>
                                                              <Col
                                                                sm="2"
                                                                className="form-group font-size-12 fw-normal Ri-text-color-main-menu  ps-4"
                                                              >
                                                                Became DRC
                                                                memeber
                                                              </Col>
                                                              <Col
                                                                sm="2"
                                                                className="form-group font-size-12 fw-normal Ri-text-color-main-menu   ps-5"
                                                              >
                                                                Training of
                                                                Introducer
                                                              </Col>
                                                              <Col
                                                                sm="2"
                                                                className="form-group font-size-12 fw-normal Ri-text-color-main-menu   ps-5"
                                                              >
                                                                Became
                                                                Introducer
                                                              </Col>
                                                              <Col
                                                                sm="2"
                                                                className="form-group font-size-12 fw-normal Ri-text-color-main-menu   ps-5"
                                                              >
                                                                Organized
                                                                introductory
                                                              </Col>
                                                            </Row>
                                                          </Col>
                                                        </Accordion.Body>
                                                      </Accordion.Item>
                                                    </Accordion>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </Row>
                                      </CardBody>
                                    </Card>

                                    <Card className="border-0">
                                      <CardBody className="border-0">
                                        <Row className="g-2 form">
                                          <Col sm="2">
                                            <FormLabel className="font-size-12 fw-normal Ri-text-color-sub-menu">
                                              My Organization Mapping
                                            </FormLabel>
                                          </Col>
                                          <Col sm="2">
                                            <Col sm="12">
                                              <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                M21 wing
                                              </FormLabel>
                                            </Col>
                                            <Col sm="12">
                                              <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                {profile.m21wing}
                                              </FormLabel>
                                            </Col>
                                          </Col>
                                          <Col sm="2">
                                            <Col sm="12">
                                              <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                Country/NRc
                                              </FormLabel>
                                            </Col>
                                            <Col sm="12">
                                              <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                {profile.nrcCountyr}
                                              </FormLabel>
                                            </Col>
                                          </Col>
                                          <Col sm="2">
                                            <Col sm="12">
                                              <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                State/SRC
                                              </FormLabel>
                                            </Col>
                                            <Col sm="12">
                                              <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                {profile.nrcState}
                                              </FormLabel>
                                            </Col>
                                          </Col>
                                          <Col sm="2">
                                            <Col sm="12">
                                              <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                District
                                              </FormLabel>
                                            </Col>
                                            <Col sm="12">
                                              <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                {profile.nrcDistrict}
                                              </FormLabel>
                                            </Col>
                                          </Col>
                                          <Col sm="2" className="p-0">
                                            <Col sm="12">
                                              <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                Current responsibilites
                                              </FormLabel>
                                            </Col>
                                            <Col sm="12">
                                              <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                {profile.currentResponsibility}
                                              </FormLabel>
                                            </Col>
                                          </Col>
                                        </Row>
                                        <Col
                                          sm="12"
                                          className="border-bottom pt-2"
                                        >
                                          &nbsp;
                                        </Col>
                                      </CardBody>
                                    </Card>

                                    {isMyExpertise && (
                                      <>
                                        <Card className="border-0">
                                          <CardBody className="border-0">
                                            <Col sm="12">
                                              <Row className="g-2 form">
                                                <Col sm="11">
                                                  <FormLabel className="font-size-12 fw-normal text-uppercase Ri-text-color-sub-menu">
                                                    My expertise
                                                  </FormLabel>
                                                </Col>
                                                <Col
                                                  sm="1"
                                                  type="button"
                                                  className="text-center font-size-10 fw-bold text-uppercase title-text-color"
                                                  onClick={MyExpertise}
                                                >
                                                  Edit
                                                </Col>
                                              </Row>
                                            </Col>
                                            <Col
                                              sm="12"
                                              className="border-bottom pt-0 mb-2"
                                            ></Col>
                                            <Col sm="12" className="d-flex align-items-center flex-wrap mb-2">
                                              {isExpertise.map((expertise, index) => (
                                                <><FormLabel key={index} className="font-size-12 fw-normal Ri-text-color-main-menu me-3 mb-2">
                                                  {expertise.art}
                                                </FormLabel>
                                                  <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu me-3 mb-2">
                                                    {expertise.technology}
                                                  </FormLabel>
                                                  <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu me-3 mb-2">
                                                    {expertise.label}
                                                  </FormLabel></>
                                              ))}
                                              {isExpertise[0]?.other && (
                                                <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                  {isExpertise[0]?.other}
                                                </FormLabel>
                                              )}
                                            </Col>
                                          </CardBody>
                                        </Card>
                                      </>
                                    )}
                                    {!isMyExpertise && (
                                      <>
                                        <Card>
                                          <CardHeader>
                                            <Col sm="12" className="form-group">
                                              <Row className="g-2 form">
                                                <Col className="ms-auto font-size-14 fw-normal Ri-text-color-main-menu ">
                                                  My expertise
                                                </Col>
                                                <CloseButton
                                                  onClick={MyExpertise}
                                                />
                                              </Row>
                                            </Col>
                                          </CardHeader>
                                          <CardBody>
                                            <Col sm="12">
                                              <Row className="g-2 form">
                                                <Col
                                                  sm="12"
                                                  className="form-control"
                                                >
                                                  <Col
                                                    sm="12"
                                                    className="font-size-12 fw-normal Ri-text-color-sub-menu text-uppercase"
                                                  >
                                                    Art
                                                  </Col>
                                                  <Col
                                                    sm="12"
                                                    className="form-check"
                                                  >
                                                    <Row className="g-2 form">
                                                      <Col sm="2">
                                                        <Input type="checkbox"
                                                          checked={isArt1}
                                                          onChange={(e) => setIsArt1(e.target.checked)} />
                                                        <label className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                          Art-1
                                                        </label>
                                                      </Col>
                                                      <Col sm="2">
                                                        <Input type="checkbox"
                                                          checked={isArt2}
                                                          onChange={(e) => setIsArt2(e.target.checked)} />
                                                        <label className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                          Art-2
                                                        </label>
                                                      </Col>
                                                      <Col sm="2">
                                                        <Input type="checkbox"
                                                          checked={isArt3}
                                                          onChange={(e) => setIsArt3(e.target.checked)} />
                                                        <label className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                          Art-3
                                                        </label>
                                                      </Col>
                                                      <Col sm="2">
                                                        <Input type="checkbox"
                                                          checked={isArt4}
                                                          onChange={(e) => setIsArt4(e.target.checked)} />
                                                        <label className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                          Art-4
                                                        </label>
                                                      </Col>
                                                    </Row>
                                                  </Col>
                                                </Col>
                                                <Col
                                                  sm="12"
                                                  className="form-control"
                                                >
                                                  <Col
                                                    sm="12"
                                                    className="font-size-12 fw-normal Ri-text-color-sub-menu text-uppercase"
                                                  >
                                                    Technology
                                                  </Col>
                                                  <Col
                                                    sm="12"
                                                    className="form-check"
                                                  >
                                                    <Row className="g-2 form">
                                                      <Col sm="2">
                                                        <Input type="checkbox"
                                                          checked={isTech1}
                                                          onChange={(e) => setIsTech1(e.target.checked)} />
                                                        <label className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                          Technology-1
                                                        </label>
                                                      </Col>
                                                      <Col sm="2">
                                                        <Input type="checkbox"
                                                          checked={isTech2}
                                                          onChange={(e) => setIsTech2(e.target.checked)} />
                                                        <label className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                          Technology-2
                                                        </label>
                                                      </Col>
                                                      <Col sm="2">
                                                        <Input type="checkbox"
                                                          checked={isTech3}
                                                          onChange={(e) => setIsTech3(e.target.checked)} />
                                                        <label className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                          Technolog-3
                                                        </label>
                                                      </Col>
                                                      <Col sm="2">
                                                        <Input type="checkbox"
                                                          checked={isTech4}
                                                          onChange={(e) => setIsTech4(e.target.checked)} />
                                                        <label className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                          Technology-4
                                                        </label>
                                                      </Col>
                                                    </Row>
                                                  </Col>
                                                </Col>
                                                <Col
                                                  sm="12"
                                                  className="form-control"
                                                >
                                                  <Col
                                                    sm="12"
                                                    className="font-size-12 fw-normal Ri-text-color-sub-menu text-uppercase"
                                                  >
                                                    Label
                                                  </Col>
                                                  <Col
                                                    sm="12"
                                                    className="form-check"
                                                  >
                                                    <Row className="g-2 form">
                                                      <Col sm="2">
                                                        <Input type="checkbox"
                                                          checked={isLabel1}
                                                          onChange={(e) => setIsLabel1(e.target.checked)} />
                                                        <label className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                          Label-1
                                                        </label>
                                                      </Col>
                                                      <Col sm="2">
                                                        <Input type="checkbox"
                                                          checked={isLabel2}
                                                          onChange={(e) => setIsLabel2(e.target.checked)} />
                                                        <label className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                          Label-2
                                                        </label>
                                                      </Col>
                                                      <Col sm="2">
                                                        <Input type="checkbox"
                                                          checked={isLabel3}
                                                          onChange={(e) => setIsLabel3(e.target.checked)} />
                                                        <label className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                          Label-3
                                                        </label>
                                                      </Col>
                                                      <Col sm="2">
                                                        <Input type="checkbox"
                                                          checked={isLabel4}
                                                          onChange={(e) => setIsLabel4(e.target.checked)} />
                                                        <label className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                          Label-4
                                                        </label>
                                                      </Col>
                                                    </Row>
                                                  </Col>
                                                </Col>
                                                <Col sm="12">
                                                  <Row className="g-2 form">
                                                    <Col
                                                      sm="12"
                                                      className="font-size-12 fw-normal Ri-text-color-sub-menu text-uppercase"
                                                    >
                                                      Other
                                                    </Col>
                                                    <Col sm="12">
                                                      <Input
                                                        className="rounded-0"
                                                        size="sm"
                                                        type="text"
                                                        value={isOtherExpertise}
                                                        onChange={(e) => setIsOtherExpertise(e.target.value)}
                                                      />
                                                    </Col>
                                                  </Row>
                                                </Col>
                                              </Row>
                                            </Col>
                                          </CardBody>
                                          <CardFooter>
                                            <Col sm="12">
                                              <Row className="g-2 form">
                                                <Col
                                                  sm="6"
                                                  className="text-end"
                                                >
                                                  <Button
                                                    onClick={MyExpertise}
                                                    className="btn-outline-primary font-size-11 text-uppercase fw-bold bg-white text-primary"
                                                  >
                                                    Cancel
                                                  </Button>
                                                </Col>
                                                <Col sm="6">
                                                  <Button
                                                    className="font-size-11 text-uppercase fw-bold"
                                                    type="submit"
                                                    onClick={myExpertise}
                                                  >
                                                    save
                                                  </Button>
                                                </Col>
                                              </Row>
                                            </Col>
                                          </CardFooter>
                                        </Card>
                                      </>
                                    )}
                                    <Form onSubmit={areaOfInterest}>
                                      {isAreaOfInterest && (
                                        <Card className="border-0">
                                          <CardBody>
                                            <Col sm="12">
                                              <Row className="g-2 form">
                                                <Col sm="11">
                                                  <FormLabel className="font-size-12 fw-normal text-uppercase Ri-text-color-sub-menu">
                                                    My area of interest
                                                  </FormLabel>
                                                </Col>
                                                <Col
                                                  sm="1"
                                                  type="button"
                                                  className="text-center font-size-10 fw-bold text-uppercase title-text-color"
                                                  onClick={MyAreaOfInterest}
                                                >
                                                  Edit
                                                </Col>
                                              </Row>
                                            </Col>
                                            <Col
                                              sm="12"
                                              className="border-bottom pt-0 mb-2"
                                            ></Col>
                                            <Col sm="12" className="d-flex align-items-center flex-wrap mb-2">
                                              {areaofInterest.map((interest, index) => (
                                                <FormLabel key={index} className="font-size-12 fw-normal Ri-text-color-main-menu me-3 mb-2">
                                                  {interest.area_of_interest}
                                                </FormLabel>
                                              ))}
                                              {areaofInterest[0]?.other && (
                                                <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                  {areaofInterest[0]?.other}
                                                </FormLabel>
                                              )}
                                            </Col>
                                          </CardBody>
                                        </Card>
                                      )}

                                      {!isAreaOfInterest && (
                                        <Card>
                                          <CardHeader>
                                            <Row>
                                              <Col className="ms-auto font-size-14 fw-normal Ri-text-color-main-menu text-uppercase">
                                                {" "}
                                                My Area of interest
                                              </Col>
                                              <CloseButton
                                                onClick={MyAreaOfInterest}
                                              />
                                            </Row>
                                          </CardHeader>
                                          <CardBody>
                                            <Col sm="12">
                                              <Row className="g-2 form">
                                                <Col sm="12" className="">
                                                  <Col
                                                    sm="12"
                                                    className="form-check"
                                                  >
                                                    <Row className="g-2 form">
                                                      <Col sm="2">
                                                        <Input
                                                          checked={isareaeducation}
                                                          onChange={(e) => setIsAreaEducation(e.target.checked)}
                                                          type="checkbox"
                                                        />
                                                        <label className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                          Education
                                                        </label>
                                                      </Col>
                                                      <Col sm="2">
                                                        <Input
                                                          checked={isarealabor}
                                                          onChange={(e) => setIsLabor(e.target.checked)}
                                                          type="checkbox"
                                                        />
                                                        <label className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                          Labor reforms
                                                        </label>
                                                      </Col>
                                                      <Col sm="3">
                                                        <Input
                                                          value={isareaagricultural}
                                                          onChange={(e) => setIsAreaAgricultural(e.target.checked)}
                                                          type="checkbox"
                                                        />
                                                        <label className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                          Agricultural reforms
                                                        </label>
                                                      </Col>
                                                      <Col sm="2">
                                                        <Input
                                                          value={isareafinace}
                                                          onChange={(e) => setIsAreaFinace(e.target.checked)}
                                                          type="checkbox"
                                                        />
                                                        <label className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                          Finace
                                                        </label>
                                                      </Col>
                                                      <Col sm="2">
                                                        <Input
                                                          value={isareawork}
                                                          onChange={(e) => setIsAreaWOrk(e.target.checked)}
                                                          type="checkbox"
                                                        />
                                                        <label className="font-size-12 fw-normal Ri-text-color-main-menu ">
                                                          Work Force
                                                        </label>
                                                      </Col>
                                                    </Row>
                                                  </Col>
                                                </Col>
                                                <Col sm="12">
                                                  <Row className="g-2 form">
                                                    <Col
                                                      sm="12"
                                                      className="font-size-12 fw-normal Ri-text-color-sub-menu "
                                                    >
                                                      Other
                                                    </Col>
                                                    <Col sm="12">
                                                      <Input
                                                        value={isareaother}
                                                        onChange={(e) => setIsAreaOther(e.target.value)}
                                                        size="sm"
                                                        className="rounded-0"
                                                      />
                                                    </Col>
                                                  </Row>
                                                </Col>
                                              </Row>
                                            </Col>
                                          </CardBody>
                                          <CardFooter>
                                            <Col sm="12">
                                              <Row className="g-2 form">
                                                <Col
                                                  sm="6"
                                                  className="text-end"
                                                >
                                                  <Button
                                                    onClick={MyAreaOfInterest}
                                                    className="btn-outline-primary text-uppercase font-size-11 fw-bold bg-white text-primary"
                                                  >
                                                    Cancel
                                                  </Button>
                                                </Col>
                                                <Col sm="6">
                                                  <Button
                                                    type="submit"
                                                    className="text-uppercase font-size-11 fw-bold"
                                                  >
                                                    save
                                                  </Button>
                                                </Col>
                                              </Row>
                                            </Col>
                                          </CardFooter>
                                        </Card>
                                      )}
                                    </Form>
                                  </Tab>

                                  {/* tab 3 social contribution */}
                                  <Tab
                                    className={style}
                                    eventKey="social"
                                    title={
                                      <Col
                                        onClick={TabColorDark}
                                        className="fs-5  fst-normal fw-normal "
                                      >
                                        Social Contribution
                                      </Col>
                                    }
                                  >
                                    <Form
                                      onSubmit={
                                        socialOrganizationMovementHandler
                                      }
                                    >
                                      {isSocialContribution && (
                                        <Card className="border-0">
                                          <CardBody className="border-0">
                                            <Col sm="12">
                                              <Row className="g-2 form">
                                                <Col sm="12">
                                                  <Row className="g-2 form">
                                                    <Col sm="2">
                                                      <FormLabel className="font-size-12 text-uppercase pt-2 fw-normal Ri-text-color-sub-menu ">
                                                        My past experience with
                                                        social organization/
                                                        social movements
                                                      </FormLabel>
                                                    </Col>
                                                    <Col sm="2">
                                                      <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu ">
                                                        Position held
                                                      </FormLabel>
                                                      {/* {issociexp.length &&
                                                      issociexp.map(
                                                        (data) => (
                                                          <Col sm="12">
                                                            {
                                                              data.positionHeld
                                                            }
                                                          </Col>
                                                        )
                                                      )} */}
                                                    </Col>
                                                    <Col sm="2">
                                                      <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu ">
                                                        Organization Name
                                                      </FormLabel>
                                                    </Col>
                                                    <Col sm="4">
                                                      <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu ">
                                                        Organization address
                                                      </FormLabel>
                                                    </Col>
                                                    <Col sm="2" type="button">
                                                      <Row>
                                                        <Col
                                                          sm="6"
                                                          className="text-end text-uppercase font-size-10 fw-bold title-text-color"
                                                          onClick={
                                                            Socialcontribution
                                                          }
                                                        >
                                                          Add
                                                        </Col>
                                                        <Col
                                                          sm="6"
                                                          onClick={
                                                            SocialcontributionEdit
                                                          }
                                                          className="text-uppercase font-size-10 fw-bold title-text-color"
                                                        >
                                                          Edit
                                                        </Col>
                                                      </Row>
                                                    </Col>
                                                  </Row>
                                                </Col>
                                                {pastExSocialHolder.map((item) => (
                                                  <>
                                                    <Col sm="12">
                                                      <Row className="g-2 form">
                                                        <Col sm="2">
                                                          <FormLabel>
                                                            &nbsp;
                                                          </FormLabel>
                                                        </Col>
                                                        <Col sm="2">
                                                          <Col sm="12">
                                                            <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                              {item.positionHeld}
                                                            </FormLabel>
                                                          </Col>
                                                        </Col>
                                                        <Col sm="2">
                                                          <Col sm="12">
                                                            <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                              {item.organization}
                                                            </FormLabel>
                                                          </Col>
                                                        </Col>
                                                        <Col sm="4">
                                                          <Col sm="12">
                                                            <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                              {item.addressLine1}, {item.addressLine2}
                                                              <br />
                                                              {item.city}, {item.district}
                                                              <br />
                                                              {item.state}
                                                              {item.country}
                                                              Pin code-{item.pinZip}
                                                              <br />
                                                            </FormLabel>
                                                          </Col>
                                                        </Col>
                                                      </Row>
                                                    </Col>
                                                  </>
                                                ))}
                                                <Col
                                                  sm="12"
                                                  className="border-bottom"
                                                >
                                                  &nbsp;
                                                </Col>
                                              </Row>
                                            </Col>
                                          </CardBody>
                                        </Card>
                                      )}
                                      {!isSocialContribution && (
                                        <>
                                          <Col
                                            sm="12"
                                            className="form-group p-1"
                                          >
                                            &nbsp;
                                          </Col>
                                          <Card>
                                            <CardHeader>
                                              <Row>
                                                <Col className="ms-auto">
                                                  <FormLabel className="font-size-14 fw-normal Ri-text-color-main-menu ">
                                                    My past experience with
                                                    social organization/social
                                                    movements
                                                  </FormLabel>
                                                </Col>
                                                <CloseButton
                                                  onClick={Socialcontribution}
                                                />
                                              </Row>
                                            </CardHeader>
                                            <CardBody>
                                              <Row className="g-2 form">
                                                {socialContributions.map((contribution, index) => (
                                                  <><Col sm="12" key={index}>
                                                    <Row className="g-2 form">
                                                      <Col sm="4">
                                                        <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu">
                                                          Position held
                                                        </FormLabel>
                                                        <Form.Control
                                                          type="text"
                                                          placeholder="Enter Position"
                                                          className="rounded-0"
                                                          size="sm"
                                                          value={contribution.issocpositionheld}
                                                          onChange={(e) => handleSocialFieldChange(index, 'issocpositionheld', e.target.value)}
                                                          isValid={issocpositionheld !==
                                                            ""
                                                            ? true
                                                            : false} />
                                                      </Col>
                                                      <Col sm="7">
                                                        <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu">
                                                          Organization name
                                                        </FormLabel>
                                                        <Form.Control
                                                          type="text"
                                                          placeholder="Enter organization name"
                                                          className="rounded-0"
                                                          value={contribution.issocorgname}
                                                          onChange={(e) => handleSocialFieldChange(index, 'issocorgname', e.target.value)}
                                                          size="sm"
                                                          isValid={issocorgname !== ""
                                                            ? true
                                                            : false} />
                                                      </Col>
                                                      <Col sm="1">
                                                        <Button
                                                          onClick={() =>
                                                            removeSocialContributionSection(index)}
                                                          className="btn-outline-primary font-size-11 text-uppercase fw-bold bg-white text-primary"
                                                        >
                                                          -
                                                        </Button>
                                                      </Col>
                                                    </Row>
                                                  </Col><Col sm="12">
                                                      <FormLabel className="font-size-14 text-uppercase fw-normal Ri-text-color-main-menu">
                                                        Organization address
                                                      </FormLabel>
                                                    </Col><Col sm="12">
                                                      <Row className="g-2 form">
                                                        <Col sm="6">
                                                          <FormLabel className="font-size-11 fw-normal  Ri-text-color-sub-menu">
                                                            Address line 1
                                                          </FormLabel>
                                                          <Form.Control
                                                            type="text"
                                                            placeholder="Enter Address"
                                                            className="rounded-0"
                                                            size="sm"
                                                            value={contribution.socialAddressOne}
                                                            onChange={(e) => handleSocialFieldChange(index, 'socialAddressOne', e.target.value)}
                                                            isValid={socialAddressOne !==
                                                              ""
                                                              ? true
                                                              : false} />
                                                        </Col>
                                                        <Col sm="6">
                                                          <FormLabel className="font-size-11 fw-normal  Ri-text-color-sub-menu">
                                                            Address line 2
                                                          </FormLabel>
                                                          <Form.Control
                                                            type="text"
                                                            placeholder="Enter Address"
                                                            className="rounded-0"
                                                            size="sm"
                                                            value={contribution.socialAddressTwo}
                                                            onChange={(e) => handleSocialFieldChange(index, 'socialAddressTwo', e.target.value)}
                                                            isValid={socialAddressTwo !==
                                                              ""
                                                              ? true
                                                              : false} />
                                                        </Col>
                                                      </Row>
                                                    </Col><Col sm="12">
                                                      <Row className="g-2 form">
                                                        <Col sm="4">
                                                          <FormLabel className="font-size-11  fw-normal Ri-text-color-sub-menu">
                                                            Country
                                                          </FormLabel>
                                                          <Input
                                                            value={contribution.socialCountry}
                                                            onChange={(e) => handleSocialFieldChange(index, 'socialCountry', e.target.value)}
                                                            type="select"
                                                            size="sm"
                                                          >
                                                            <option
                                                              selected
                                                              disabled
                                                              value=""
                                                            >
                                                              Choose country
                                                            </option>

                                                            <option>India</option>
                                                            <option>Japan</option>
                                                            <option>U.S</option>
                                                            {/* {isaddCount.map(
    (data) => (
      <option>
        {data.countryName}
      </option>
    )
  )} */}
                                                          </Input>
                                                        </Col>
                                                        <Col sm="4">
                                                          <FormLabel className="font-size-11  fw-normal Ri-text-color-sub-menu">
                                                            state
                                                          </FormLabel>
                                                          <Input
                                                            value={contribution.socialState}
                                                            onChange={(e) => handleSocialFieldChange(index, 'socialState', e.target.value)}
                                                            size="sm"
                                                            className="rounded-0"
                                                            type="select"
                                                          >
                                                            <option
                                                              selected
                                                              disabled
                                                              value=""
                                                            >
                                                              Choose state
                                                            </option>
                                                            <option>
                                                              Maharashtra
                                                            </option>
                                                            <option>Goa</option>
                                                            <option>U.P</option>
                                                            {/* {isaddState.map(
    (data) => (
      <option>
        {data.stateName}
      </option>
    )
  )} */}
                                                          </Input>
                                                        </Col>
                                                        <Col sm="4">
                                                          <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu ">
                                                            City
                                                          </FormLabel>
                                                          <Input
                                                            defaultValue={contribution.socialCity}
                                                            onChange={(e) => handleSocialFieldChange(index, 'socialCity', e.target.value)}
                                                            size="sm"
                                                            className="rounded-0"
                                                            type="select"
                                                          >
                                                            <option
                                                              selected
                                                              disabled
                                                              value=""
                                                            >
                                                              Choose city
                                                            </option>
                                                            <option>Mumbai</option>
                                                            <option>Pune</option>
                                                            <option>Nashik</option>
                                                            {/* {isaddcity.map(
    (data) => (
      <option>
        {data.cityName}
      </option>
    )
  )} */}
                                                          </Input>
                                                        </Col>
                                                      </Row>
                                                    </Col><Col sm="12">
                                                      <Row className="g-2 form">
                                                        <Col sm="4">
                                                          <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu ">
                                                            District
                                                          </FormLabel>
                                                          <Input
                                                            value={contribution.socialDistrict}
                                                            onChange={(e) => handleSocialFieldChange(index, 'socialDistrict', e.target.value)}
                                                            size="sm"
                                                            className="rounded-0"
                                                            type="select"
                                                          >
                                                            <option
                                                              selected
                                                              disabled
                                                              value=""
                                                            >
                                                              Choose District
                                                            </option>
                                                            <option>Satara</option>
                                                            <option>Pune</option>
                                                            <option>Nashik</option>
                                                            {/* {isadddist.map(
    (data) => (
      <option>
        {
          data.districtName
        }
      </option>
    )
  )} */}
                                                          </Input>
                                                        </Col>
                                                        <Col sm="4">
                                                          <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu ">
                                                            Taluka
                                                          </FormLabel>
                                                          <Input
                                                            value={contribution.socialTaluka}
                                                            onChange={(e) => handleSocialFieldChange(index, 'socialTaluka', e.target.value)}
                                                            size="sm"
                                                            className="rounded-0"
                                                            type="select"
                                                          >
                                                            <option
                                                              selected
                                                              disabled
                                                              value=""
                                                            >
                                                              Choose taluka
                                                            </option>
                                                            <option>Pune</option>
                                                            <option>Satara</option>
                                                            <option>Haveli</option>
                                                            {/* {isaddtaluka.map(
    (data) => (
      <option>
        {data.name}
      </option>
    )
  )} */}
                                                          </Input>
                                                        </Col>
                                                        <Col sm="4">
                                                          <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu ">
                                                            Pin/Zip
                                                          </FormLabel>
                                                          <Form.Control
                                                            onChange={(e) => handleSocialFieldChange(index, 'socialPin', e.target.value)}
                                                            value={contribution.socialPin}
                                                            className="rounded-0"
                                                            size="sm"
                                                            placeholder="Enter your pin/zip"
                                                            type="text"
                                                            maxLength="6"
                                                            minLength="6" />
                                                        </Col>
                                                      </Row>
                                                    </Col></>
                                                ))}
                                                <Col
                                                  sm="12"
                                                  className="text-end"
                                                >
                                                  <ButtonGroup
                                                    className="me-2"
                                                    aria-label="First group"
                                                    onClick={addSocialContributionSection}
                                                  >
                                                    <Button className="outline-primary border-end-0 bg-white text-primary">
                                                      +
                                                    </Button>
                                                    <Button className="outline-primary font-size-13 fw-normal border-start-0 bg-white text-primary">
                                                      Add experience
                                                    </Button>
                                                  </ButtonGroup>
                                                </Col>
                                              </Row>
                                              <Row>

                                              </Row>
                                            </CardBody>
                                            <CardFooter>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col
                                                    sm="6"
                                                    className="text-end"
                                                  >
                                                    <Button
                                                      onClick={Socialcontribution}
                                                      className="btn-outline-primary font-size-11 text-uppercase fw-bold bg-white text-primary"
                                                    >
                                                      Cancel
                                                    </Button>
                                                  </Col>
                                                  <Col sm="6">
                                                    <Button
                                                      disabled={
                                                        issocpositionheld !== "" &&
                                                          issocorgname !== "" &&
                                                          socialAddressOne !== "" &&
                                                          socialAddressTwo !== "" &&
                                                          socialCountry !== "" &&
                                                          socialState !== "" &&
                                                          socialCity !== "" &&
                                                          socialPin !== "" &&
                                                          socialDistrict !== "" &&
                                                          socialTaluka !== ""
                                                          ? true
                                                          : false
                                                      }
                                                      variant={
                                                        issocpositionheld !==
                                                          "" &&
                                                          issocorgname !== "" &&
                                                          socialAddressOne !==
                                                          "" &&
                                                          socialAddressTwo !==
                                                          "" &&
                                                          socialCountry !== "" &&
                                                          socialState !== "" &&
                                                          socialCity !== "" &&
                                                          socialPin !== "" &&
                                                          socialDistrict !== "" &&
                                                          socialTaluka !== ""
                                                          ? buttonBlueBg
                                                          : buttonSecondarybg
                                                      }
                                                      type="submit"
                                                      className="font-size-11 text-uppercase fw-bold"
                                                      onClick={socialOrganizationMovementHandler}
                                                    >
                                                      save
                                                    </Button>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardFooter>
                                          </Card>
                                          <Col
                                            sm="12"
                                            className="form-group p-1"
                                          >
                                            &nbsp;
                                          </Col>
                                        </>
                                      )}
                                      {!editFormPastEx && (
                                        <>
                                          {displayEditForm.map((item) => (
                                            <>
                                              <Col
                                                sm="12"
                                                className="form-group p-1"
                                              >
                                                &nbsp;
                                              </Col>
                                              <Form
                                                onSubmit={
                                                  EditFormSocialExSubmit
                                                }
                                              >
                                                <Card>
                                                  <CardHeader>
                                                    <Row>
                                                      <Col className="ms-auto">
                                                        <FormLabel className="font-size-14 fw-normal Ri-text-color-main-menu ">
                                                          My past experience
                                                          with social
                                                          organization/social
                                                          movements
                                                        </FormLabel>
                                                      </Col>
                                                      <CloseButton
                                                        onClick={
                                                          Socialcontribution
                                                        }
                                                      />
                                                    </Row>
                                                  </CardHeader>
                                                  <CardBody>
                                                    <Row className="g-2 form">
                                                      <Col sm="12">
                                                        <Row className="g-2 form">
                                                          <Col sm="4">
                                                            <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu">
                                                              Position held
                                                            </FormLabel>
                                                            <Form.Control
                                                              type="text"
                                                              // placeholder={
                                                              //   issocpositionheld ===
                                                              //   ""
                                                              //     ? item.positionHeld
                                                              //     : "Enter Position"
                                                              // }
                                                              placeholder="Enter Position"
                                                              className="rounded-0"
                                                              size="sm"
                                                              defaultValue={
                                                                item.positionHeld

                                                                // socialPositionHeldEdit ===
                                                                // ""
                                                                //   ? ""
                                                                //   : item.positionHeld
                                                              }
                                                              onChange={(e) =>
                                                                setSocPOsitionHeldEdit(
                                                                  e.target.value
                                                                )
                                                              }
                                                              isValid={
                                                                socialPositionHeldEdit !==
                                                                  ""
                                                                  ? true
                                                                  : false
                                                              }
                                                            />
                                                          </Col>
                                                          <Col sm="8">
                                                            <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu">
                                                              Organization name
                                                            </FormLabel>
                                                            <Form.Control
                                                              type="text"
                                                              placeholder="Enter organization name"
                                                              className="rounded-0"
                                                              defaultValue={
                                                                item.organization
                                                                // socialOrgNameEdit
                                                              }
                                                              onChange={(e) =>
                                                                setIsSocOrgNameEdit(
                                                                  e.target.value
                                                                )
                                                              }
                                                              size="sm"
                                                              isValid={
                                                                socialOrgNameEdit !==
                                                                  ""
                                                                  ? true
                                                                  : false
                                                              }
                                                            />
                                                          </Col>
                                                        </Row>
                                                      </Col>
                                                      <Col sm="12">
                                                        <FormLabel className="font-size-14 text-uppercase fw-normal Ri-text-color-main-menu">
                                                          Organization address
                                                        </FormLabel>
                                                      </Col>
                                                      <Col sm="12">
                                                        <Row className="g-2 form">
                                                          <Col sm="6">
                                                            <FormLabel className="font-size-11 fw-normal  Ri-text-color-sub-menu">
                                                              Address line 1
                                                            </FormLabel>
                                                            <Form.Control
                                                              type="text"
                                                              placeholder="Enter Address"
                                                              className="rounded-0"
                                                              size="sm"
                                                              defaultValue={
                                                                // socialAddOneEdit
                                                                item.addressLine1
                                                              }
                                                              onChange={(e) =>
                                                                setSocialAddressOneEdit(
                                                                  e.target.value
                                                                )
                                                              }
                                                              isValid={
                                                                socialAddOneEdit !==
                                                                  ""
                                                                  ? true
                                                                  : false
                                                              }
                                                            />
                                                          </Col>
                                                          <Col sm="6">
                                                            <FormLabel className="font-size-11 fw-normal  Ri-text-color-sub-menu">
                                                              Address line 2
                                                            </FormLabel>
                                                            <Form.Control
                                                              type="text"
                                                              placeholder="Enter Address"
                                                              className="rounded-0"
                                                              size="sm"
                                                              defaultValue={
                                                                item.addressLine2
                                                                // socialAddTwoEdit
                                                              }
                                                              onChange={(e) =>
                                                                setSocialAddressTwoEdit(
                                                                  e.target.value
                                                                )
                                                              }
                                                              isValid={
                                                                socialAddTwoEdit !==
                                                                  ""
                                                                  ? true
                                                                  : false
                                                              }
                                                            />
                                                          </Col>
                                                        </Row>
                                                      </Col>
                                                      <Col sm="12">
                                                        <Row className="g-2 form">
                                                          <Col sm="4">
                                                            <FormLabel className="font-size-11  fw-normal Ri-text-color-sub-menu">
                                                              Country
                                                            </FormLabel>
                                                            <Input
                                                              defaultValue={
                                                                item.country
                                                                // socialCountryEdit
                                                              }
                                                              onChange={(e) =>
                                                                setSocialCountryEdit(
                                                                  e.target.value
                                                                )
                                                              }
                                                              type="select"
                                                              size="sm"
                                                            >
                                                              <option
                                                                selected
                                                                disabled
                                                                value=""
                                                              >
                                                                Choose country
                                                              </option>

                                                              <option>
                                                                India
                                                              </option>
                                                              <option>
                                                                Japan
                                                              </option>
                                                              <option>
                                                                U.S
                                                              </option>
                                                              {/* {isaddCount.map(
                                                        (data) => (
                                                          <option>
                                                            {data.countryName}
                                                          </option>
                                                        )
                                                      )} */}
                                                            </Input>
                                                          </Col>
                                                          <Col sm="4">
                                                            <FormLabel className="font-size-11  fw-normal Ri-text-color-sub-menu">
                                                              state
                                                            </FormLabel>
                                                            <Input
                                                              defaultValue={
                                                                item.state
                                                                // socialStateEdit
                                                              }
                                                              onChange={(e) =>
                                                                setSocialStateEdit(
                                                                  e.target.value
                                                                )
                                                              }
                                                              size="sm"
                                                              className="rounded-0"
                                                              type="select"
                                                            >
                                                              <option
                                                                selected
                                                                disabled
                                                                value=""
                                                              >
                                                                Choose state
                                                              </option>
                                                              <option>
                                                                Maharashtra
                                                              </option>
                                                              <option>
                                                                Goa
                                                              </option>
                                                              <option>
                                                                U.P
                                                              </option>
                                                              {/* {isaddState.map(
                                                        (data) => (
                                                          <option>
                                                            {data.stateName}
                                                          </option>
                                                        )
                                                      )} */}
                                                            </Input>
                                                          </Col>
                                                          <Col sm="4">
                                                            <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu ">
                                                              City
                                                            </FormLabel>
                                                            <Input
                                                              defaultValue={
                                                                item.city
                                                              }
                                                              onChange={(e) =>
                                                                setSocialCityEdit(
                                                                  e.target.value
                                                                )
                                                              }
                                                              size="sm"
                                                              className="rounded-0"
                                                              type="select"
                                                            >
                                                              <option
                                                                selected
                                                                disabled
                                                                value=""
                                                              >
                                                                Choose city
                                                              </option>
                                                              <option>
                                                                Mumbai
                                                              </option>
                                                              <option>
                                                                Pune
                                                              </option>
                                                              <option>
                                                                Nashik
                                                              </option>
                                                              {/* {isaddcity.map(
                                                        (data) => (
                                                          <option>
                                                            {data.cityName}
                                                          </option>
                                                        )
                                                      )} */}
                                                            </Input>
                                                          </Col>
                                                        </Row>
                                                      </Col>
                                                      <Col sm="12">
                                                        <Row className="g-2 form">
                                                          <Col sm="4">
                                                            <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu ">
                                                              District
                                                            </FormLabel>
                                                            <Input
                                                              defaultValue={
                                                                item.district
                                                                // socialDistrictEdit
                                                              }
                                                              onChange={(e) =>
                                                                setSocialDistrictEdit(
                                                                  e.target.value
                                                                )
                                                              }
                                                              size="sm"
                                                              className="rounded-0"
                                                              type="select"
                                                            >
                                                              <option
                                                                selected
                                                                disabled
                                                                value=""
                                                              >
                                                                Choose District
                                                              </option>
                                                              <option>
                                                                Satara
                                                              </option>
                                                              <option>
                                                                Pune
                                                              </option>
                                                              <option>
                                                                Nashik
                                                              </option>
                                                              {/* {isadddist.map(
                                                        (data) => (
                                                          <option>
                                                            {
                                                              data.districtName
                                                            }
                                                          </option>
                                                        )
                                                      )} */}
                                                            </Input>
                                                          </Col>
                                                          <Col sm="4">
                                                            <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu ">
                                                              Taluka
                                                            </FormLabel>
                                                            <Input
                                                              defaultValue={
                                                                item.taluka
                                                                // socialTalukaEdit
                                                              }
                                                              onChange={(e) =>
                                                                setSocialTalukaEdit(
                                                                  e.target.value
                                                                )
                                                              }
                                                              size="sm"
                                                              className="rounded-0"
                                                              type="select"
                                                            >
                                                              <option
                                                                selected
                                                                disabled
                                                                value=""
                                                              >
                                                                Choose taluka
                                                              </option>
                                                              <option>
                                                                Pune
                                                              </option>
                                                              <option>
                                                                Satara
                                                              </option>
                                                              <option>
                                                                Haveli
                                                              </option>
                                                              {/* {isaddtaluka.map(
                                                        (data) => (
                                                          <option>
                                                            {data.name}
                                                          </option>
                                                        )
                                                      )} */}
                                                            </Input>
                                                          </Col>
                                                          <Col sm="4">
                                                            <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu ">
                                                              Pin/Zip
                                                            </FormLabel>
                                                            <Form.Control
                                                              onChange={(e) =>
                                                                setSocialPinEdit(
                                                                  e.target.value
                                                                )
                                                              }
                                                              value={
                                                                item.pinZip
                                                                // socialPinEdit
                                                              }
                                                              className="rounded-0"
                                                              size="sm"
                                                              placeholder="Enter your pin/zip"
                                                              type="text"
                                                              maxLength="6"
                                                              minLength="6"
                                                            // isValid={
                                                            //   socialPin.length >=
                                                            //     6 &&
                                                            //   socialPin !== ""
                                                            //     ? true
                                                            //     : false
                                                            // }
                                                            // isInvalid={
                                                            //   socialPin != "" &&
                                                            //   socialPin.length <=
                                                            //     5
                                                            //     ? true
                                                            //     : false
                                                            // }
                                                            />
                                                          </Col>
                                                        </Row>
                                                      </Col>
                                                      <Col
                                                        sm="12"
                                                        className="text-end"
                                                      >
                                                        <ButtonGroup
                                                          className="me-2"
                                                          aria-label="First group"
                                                        >
                                                          <Button className="outline-primary border-end-0 bg-white text-primary">
                                                            +
                                                          </Button>
                                                          <Button className="outline-primary font-size-13 fw-normal border-start-0 bg-white text-primary">
                                                            Add experience
                                                          </Button>
                                                        </ButtonGroup>
                                                      </Col>
                                                    </Row>
                                                  </CardBody>
                                                  <CardFooter>
                                                    <Col sm="12">
                                                      <Row className="g-2 form">
                                                        <Col
                                                          sm="6"
                                                          className="text-end"
                                                        >
                                                          <Button
                                                            onClick={
                                                              Socialcontribution
                                                            }
                                                            className="btn-outline-primary font-size-11 text-uppercase fw-bold bg-white text-primary"
                                                          >
                                                            Cancel
                                                          </Button>
                                                        </Col>
                                                        <Col sm="6">
                                                          <Button
                                                            // disabled={
                                                            //   issocpositionheld !==
                                                            //     "" &&
                                                            //   issocorgname !==
                                                            //     "" &&
                                                            //   socialAddressOne !==
                                                            //     "" &&
                                                            //   socialAddressTwo !==
                                                            //     "" &&
                                                            //   socialCountry !==
                                                            //     "" &&
                                                            //   socialState !==
                                                            //     "" &&
                                                            //   socialCity !== "" &&
                                                            //   socialPin !== "" &&
                                                            //   socialDistrict !==
                                                            //     "" &&
                                                            //   socialTaluka !== ""
                                                            //     ? false
                                                            //     : true
                                                            // }
                                                            // variant={
                                                            //   issocpositionheld !==
                                                            //     "" &&
                                                            //   issocorgname !==
                                                            //     "" &&
                                                            //   socialAddressOne !==
                                                            //     "" &&
                                                            //   socialAddressTwo !==
                                                            //     "" &&
                                                            //   socialCountry !==
                                                            //     "" &&
                                                            //   socialState !==
                                                            //     "" &&
                                                            //   socialCity !== "" &&
                                                            //   socialPin !== "" &&
                                                            //   socialDistrict !==
                                                            //     "" &&
                                                            //   socialTaluka !== ""
                                                            //     ? buttonBlueBg
                                                            //     : buttonSecondarybg
                                                            // }
                                                            onClick={
                                                              EditFormSocialExSubmit
                                                            }
                                                            // type="submit"
                                                            className="font-size-11 text-uppercase fw-bold"
                                                          >
                                                            save
                                                          </Button>
                                                        </Col>
                                                      </Row>
                                                    </Col>
                                                  </CardFooter>
                                                </Card>
                                              </Form>
                                              <Col
                                                sm="12"
                                                className="form-group p-1"
                                              >
                                                &nbsp;
                                              </Col>
                                            </>
                                          ))}
                                        </>
                                      )}
                                    </Form>

                                    <Form
                                      onSubmit={socialVoluntarismsubmitHandler}
                                    >
                                      {isSocialVoluntarism && (
                                        <Card className="border-0">
                                          <CardBody className="border-0">
                                            <Row className="g-2 form">
                                              <Col
                                                sm="12"
                                                className="form-group"
                                              >
                                                <Row className="g-2 form">
                                                  <Col
                                                    sm="2"
                                                    className="form-group"
                                                  >
                                                    <FormLabel className="font-size-12 fw-normal Ri-text-color-sub-menu text-uppercase">
                                                      My social Voluntarism
                                                    </FormLabel>
                                                  </Col>
                                                  <Col
                                                    sm="2"
                                                    className="form-group mt-0"
                                                  >
                                                    <FormLabel className="font-size-10 text-uppercase Ri-text-color-sub-menu fw-normal">
                                                      Project name
                                                    </FormLabel>
                                                  </Col>
                                                  <Col
                                                    sm="2"
                                                    className="form-group mt-0"
                                                  >
                                                    <FormLabel className="font-size-10 text-uppercase Ri-text-color-sub-menu fw-normal">
                                                      Position held
                                                    </FormLabel>
                                                  </Col>
                                                  <Col
                                                    sm="2"
                                                    className="form-group mt-0"
                                                  >
                                                    <FormLabel className="font-size-10 text-uppercase Ri-text-color-sub-menu fw-normal">
                                                      Organization name
                                                    </FormLabel>
                                                  </Col>
                                                  <Col
                                                    sm="3"
                                                    className="form-group mt-0"
                                                  >
                                                    <FormLabel className="font-size-10 text-uppercase Ri-text-color-sub-menu fw-normal">
                                                      Address
                                                    </FormLabel>
                                                  </Col>
                                                  <Col
                                                    sm="1"
                                                    type="button"
                                                    onClick={SocialVoluntarism}
                                                    className="mt-0"
                                                  >
                                                    <FormLabel
                                                      type="button"
                                                      className="font-size-10 fw-bold text-uppercase title-text-color"
                                                    >
                                                      Edit
                                                    </FormLabel>
                                                  </Col>
                                                </Row>
                                              </Col>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  {voluntarismApiHolder.map(
                                                    (item) => (
                                                      <>
                                                        <Col sm="2">&nbsp;</Col>
                                                        <Col sm="2">
                                                          <Col sm="12">
                                                            <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                              {item.projectName}
                                                            </FormLabel>
                                                          </Col>
                                                        </Col>
                                                        <Col sm="2">
                                                          <Col sm="12">
                                                            <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                              {item.positionHeld}
                                                            </FormLabel>
                                                          </Col>
                                                        </Col>
                                                        <Col sm="2">
                                                          <Col sm="12">
                                                            <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                              {item.organizationName}
                                                            </FormLabel>
                                                          </Col>
                                                        </Col>
                                                        <Col sm="3">
                                                          <Col sm="12">
                                                            <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                              {item.addressLine1}, {item.addressLine2}
                                                              <br />
                                                              {item.city}, {item.district}
                                                              <br />
                                                              {item.state}, {item.pinZip}
                                                              <br />
                                                            </FormLabel>
                                                          </Col>
                                                        </Col>
                                                      </>
                                                    )
                                                  )}
                                                </Row>
                                              </Col>
                                            </Row>
                                            <Col
                                              sm="12"
                                              className="border-bottom"
                                            >
                                              &nbsp;
                                            </Col>
                                          </CardBody>
                                        </Card>
                                      )}
                                      {!isSocialVoluntarism && (
                                        <Card>
                                          <CardHeader>
                                            <Row>
                                              <Col className="ms-auto">
                                                <FormLabel className="font-size-14 fw-normal Ri-text-color-main-menu">
                                                  My social voluntarism
                                                </FormLabel>
                                              </Col>
                                              <CloseButton
                                                onClick={SocialVoluntarism}
                                              />
                                            </Row>
                                          </CardHeader>
                                          <CardBody>
                                            <Row className="g-2 form">
                                              {socialVoluntarismSections.map((section, index) => (
                                                <><Col sm="12" key={index}>
                                                  <Row className="g-2 form">
                                                    <Col sm="4">
                                                      <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                                        Project name
                                                      </FormLabel>
                                                      <Form.Control
                                                        type="text"
                                                        placeholder="Enter Position"
                                                        className="rounded-0"
                                                        value={section.isprojectname}
                                                        onChange={(e) => handleSocialInputChange(index, 'isprojectname', e.target.value)}
                                                        size="sm"
                                                        isValid={isprojectname !== ""
                                                          ? true
                                                          : false} />
                                                    </Col>
                                                    <Col sm="4">
                                                      <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                                        Position held
                                                      </FormLabel>
                                                      <Form.Control
                                                        type="text"
                                                        placeholder="Enter Position"
                                                        className="rounded-0"
                                                        value={section.ispositionheld}
                                                        onChange={(e) => handleSocialInputChange(index, 'ispositionheld', e.target.value)}
                                                        size="sm"
                                                        isValid={ispositionheld !== ""
                                                          ? true
                                                          : false} />
                                                    </Col>
                                                    <Col sm="3">
                                                      <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                                        Organization name
                                                      </FormLabel>
                                                      <Form.Control
                                                        type="text"
                                                        placeholder="Enter organization name"
                                                        className="rounded-0"
                                                        value={section.isorganiztionname}
                                                        onChange={(e) => handleSocialInputChange(index, 'isorganiztionname', e.target.value)}
                                                        size="sm"
                                                        isValid={isorganiztionname !== ""
                                                          ? true
                                                          : false} />
                                                    </Col>
                                                    <Col sm="1">
                                                      <Button
                                                        onClick={() => removeSocialSection(index)}
                                                        className="btn-outline-primary font-size-11 text-uppercase fw-bold bg-white text-primary"
                                                      >
                                                        -
                                                      </Button>
                                                    </Col>
                                                  </Row>
                                                </Col><Col sm="12">
                                                    <FormLabel className="font-size-14 fw-normal Ri-text-color-main-menu">
                                                      Organization adress
                                                    </FormLabel>
                                                  </Col><Col sm="12">
                                                    <Row className="g-2 form">
                                                      <Col sm="6">
                                                        <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                                          Address line 1
                                                        </FormLabel>
                                                        <Form.Control
                                                          type="text"
                                                          placeholder="Enter Address"
                                                          className="rounded-0"
                                                          size="sm"
                                                          Value={section.socialVoluntarismAddOne}
                                                          onChange={(e) => handleSocialInputChange(index, 'socialVoluntarismAddOne', e.target.value)}
                                                          isValid={socialVoluntarismAddOne !== ""
                                                            ? true
                                                            : false} />
                                                      </Col>
                                                      <Col sm="6">
                                                        <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu">
                                                          Address line 2
                                                        </FormLabel>
                                                        <Form.Control
                                                          value={section.socialVoluntarismAddTwo}
                                                          onChange={(e) => handleSocialInputChange(index, 'socialVoluntarismAddTwo', e.target.value)}
                                                          size="sm"
                                                          isValid={socialVoluntarismAddTwo !== ""
                                                            ? true
                                                            : false}
                                                          type="text"
                                                          placeholder="Enter Address"
                                                          className="rounded-0" />
                                                      </Col>
                                                    </Row>
                                                  </Col><Col sm="12">
                                                    <Row className="g-2 form">
                                                      <Col
                                                        sm="4"
                                                        className="form-group">
                                                        <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu ">
                                                          Country
                                                        </FormLabel>
                                                        <Form.Select
                                                          value={section.socialCountryVoluntry}
                                                          onChange={(e) => handleSocialInputChange(index, 'socialCountryVoluntry', e.target.value)}
                                                          size="sm"
                                                          className="rounded-0"
                                                        >
                                                          <option
                                                            selected
                                                            disabled
                                                            value=""
                                                          >
                                                            Choose your country
                                                          </option>
                                                          <option>India</option>
                                                          <option>Japan</option>
                                                          <option>U.S</option>
                                                          {/* {isaddCount.map((data)=>(
      <option>{data.name}</option>

    ))} */}
                                                        </Form.Select>
                                                      </Col>
                                                      <Col
                                                        sm="4"
                                                        className="form-group"
                                                      >
                                                        <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu ">
                                                          State
                                                        </FormLabel>
                                                        <Form.Select
                                                          value={section.socialStateVoluntry}
                                                          onChange={(e) => handleSocialInputChange(index, 'socialStateVoluntry', e.target.value)}
                                                          size="sm"
                                                          className="rounded-0"
                                                        >
                                                          <option selected disabled value=""
                                                          >
                                                            Choose your state
                                                          </option>
                                                          <option> Maharashtra</option>
                                                          <option>U.P</option>
                                                          <option>Goa</option>
                                                          {/* {isaddState.map((data)=>(
  <option>{data.stateName}</option>
))}  */}
                                                        </Form.Select>
                                                      </Col>
                                                      <Col
                                                        sm="4"
                                                        className="form-group"
                                                      >
                                                        <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu ">
                                                          City
                                                        </FormLabel>
                                                        <Form.Select
                                                          defaultValue={section.socialVoluntryCity}
                                                          onChange={(e) => handleSocialInputChange(index, 'socialVoluntryCity', e.target.value)}
                                                          size="sm"
                                                          className="rounded-0"
                                                        >
                                                          <option
                                                            selected
                                                            disabled
                                                            value=""
                                                          >
                                                            Choose your city
                                                          </option>
                                                          <option>Pune</option>
                                                          <option>Nashik</option>
                                                          <option>Mumbai</option>
                                                          {/* {isaddcity.map((data) => (
    <option>
      {data.name}
    </option>
  ))} */}
                                                        </Form.Select>
                                                      </Col>
                                                    </Row>
                                                  </Col><Col sm="12">
                                                    <Row className="g-2 form">
                                                      <Col sm="4">
                                                        <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu ">
                                                          District
                                                        </FormLabel>

                                                        <Form.Select
                                                          value={section.socialVoluntryDistrict}
                                                          onChange={(e) => handleSocialInputChange(index, 'socialVoluntryDistrict', e.target.value)}
                                                          size="sm"
                                                          className="rounded-0"
                                                        >
                                                          <option
                                                            selected
                                                            disabled
                                                            value=""
                                                          >
                                                            Choose your district
                                                          </option>
                                                          <option>Satara</option>
                                                          <option>Nashik</option>
                                                          <option>Pune</option>
                                                        </Form.Select>

                                                        {/* <Input type="select">
    <option>
      Choose District
    </option>
    {isadddist.map((data) => (
      <option>
        {data.name}
      </option>
    ))}
  </Input> */}
                                                      </Col>
                                                      <Col sm="4">
                                                        <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu ">
                                                          Taluka
                                                        </FormLabel>
                                                        {/* <Input type="select">
    <option>
      Choose taluka
    </option>
    {isaddtaluka.map(
      (data) => (
        <option>
          {data.name}
        </option>
      )
    )}
  </Input> */}
                                                        <Form.Select
                                                          defaultValue={section.socialVoluntryTaluka}
                                                          onChange={(e) => handleSocialInputChange(index, 'socialVoluntryTaluka', e.target.value)}
                                                          size="sm"
                                                          className="rounded-0"
                                                        >
                                                          <option
                                                            selected
                                                            disabled
                                                            value=""
                                                          >
                                                            Choose your taluka
                                                          </option>
                                                          <option>Haveli</option>
                                                          <option>Nashik</option>
                                                          <option>Satara</option>
                                                        </Form.Select>
                                                      </Col>
                                                      <Col sm="4">
                                                        <FormLabel className="font-size-11 fw-normal Ri-text-color-sub-menu ">
                                                          Pin/Zip
                                                        </FormLabel>
                                                        <Form.Control
                                                          defaultValue={section.socialVoluntryPin}
                                                          onChange={(e) => handleSocialInputChange(index, 'socialVoluntryPin', e.target.value)}
                                                          size="sm"
                                                          className="rounded-0"
                                                          maxLength="6"
                                                          minLength="6"
                                                          placeholder="Enter your Pin/Zip"
                                                          isValid={socialVoluntryPin.length >=
                                                            6 &&
                                                            socialVoluntryPin !== ""
                                                            ? true
                                                            : false}
                                                          type="text" />
                                                      </Col>
                                                    </Row>
                                                  </Col></>
                                              ))}
                                              <Col sm="12" className="text-end">
                                                <ButtonGroup
                                                  onClick={addSocialSection}
                                                  className="me-2"
                                                  aria-label="First group"
                                                >
                                                  <Button className="outline-primary border-end-0 bg-white text-primary">
                                                    +
                                                  </Button>
                                                  <Button className="outline-primary font-size-11 fw-normal  border-start-0 bg-white text-primary">
                                                    Add experience
                                                  </Button>
                                                </ButtonGroup>
                                              </Col>
                                            </Row>
                                          </CardBody>
                                          <CardFooter>
                                            <Col sm="12">
                                              <Row className="g-2 form">
                                                <Col
                                                  sm="6"
                                                  className="text-end"
                                                >
                                                  <Button
                                                    onClick={SocialVoluntarism}
                                                    className="
                                                 btn-outline-primary
                                                  bg-white
                                                  font-size-11
                                                  fw-bold

                                                   text-primary"
                                                  >
                                                    Cancel
                                                  </Button>
                                                </Col>
                                                <Col sm="6">
                                                  <Button
                                                    className="font-size-11 fw-bold "
                                                    type="submit"
                                                    disabled={
                                                      isorganiztionname != "" &&
                                                        isprojectname != "" &&
                                                        ispositionheld != "" &&
                                                        socialVoluntarismAddOne != "" &&
                                                        socialVoluntarismAddTwo != "" &&
                                                        socialCountryVoluntry != "" &&
                                                        socialStateVoluntry != "" &&
                                                        socialVoluntryCity != "" &&
                                                        socialVoluntryDistrict != "" &&
                                                        socialVoluntryTaluka != "" &&
                                                        socialVoluntryPin != ""
                                                        ? true
                                                        : false
                                                    }
                                                    variant={
                                                      isorganiztionname != "" &&
                                                        isprojectname != "" &&
                                                        ispositionheld != "" &&
                                                        socialVoluntarismAddOne !=
                                                        "" &&
                                                        socialVoluntarismAddTwo !=
                                                        "" &&
                                                        socialCountryVoluntry !=
                                                        "" &&
                                                        socialStateVoluntry !=
                                                        "" &&
                                                        socialVoluntryCity !=
                                                        "" &&
                                                        socialVoluntryDistrict !=
                                                        "" &&
                                                        socialVoluntryTaluka !=
                                                        "" &&
                                                        socialVoluntryPin != ""
                                                        ? buttonBlueBg
                                                        : buttonSecondarybg
                                                    }
                                                  >
                                                    save
                                                  </Button>
                                                </Col>
                                              </Row>
                                            </Col>
                                          </CardFooter>
                                        </Card>
                                      )}
                                    </Form>
                                  </Tab>
                                  {/* tab 4 health details  */}
                                  <Tab
                                    className={style}
                                    eventKey="Health"
                                    title={
                                      <Col
                                        onClick={TabColorDark}
                                        className="fs-5 fst-normal fw-normal"
                                      >
                                        Health Details
                                      </Col>
                                    }
                                  >
                                    <Form onSubmit={healthdetail}>
                                      {isEmergencyNo && (
                                        <Card className="border-0">
                                          <CardBody className="border-0">
                                            <Col sm="12">
                                              <Row className="g-2 form">
                                                <Col
                                                  sm="11"
                                                  className="form-group"
                                                >
                                                  <Row className="g-2 form">
                                                    <Col
                                                      sm="3"
                                                      className="form-group"
                                                    >
                                                      <FormLabel className="font-size-12 mt-2 fw-normal text-uppercase Ri-text-color-sub-menu ">
                                                        Emergency contact
                                                        details
                                                      </FormLabel>
                                                    </Col>
                                                    <Col
                                                      sm="3"
                                                      className="form-group"
                                                    >
                                                      <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu ">
                                                        person name
                                                      </FormLabel>
                                                    </Col>
                                                    <Col
                                                      sm="3"
                                                      className="form-group"
                                                    >
                                                      <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu ">
                                                        relation
                                                      </FormLabel>
                                                    </Col>
                                                    <Col
                                                      sm="3"
                                                      className="form-group"
                                                    >
                                                      <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu ">
                                                        Contact details
                                                      </FormLabel>
                                                    </Col>
                                                  </Row>
                                                </Col>
                                                <Col
                                                  sm="1"
                                                  className="form-group"
                                                >
                                                  <Row className="g-2  form">
                                                    <Col
                                                      sm="6"
                                                      className="form-group"
                                                    >
                                                      <FormLabel>
                                                        <Button
                                                          onClick={EmergencyContactDetailAdd}
                                                          className="bg-transparent border-0 pe-0 font-size-10 fw-bold text-uppercase title-text-color "
                                                        >
                                                          Add
                                                        </Button>
                                                      </FormLabel>
                                                    </Col>
                                                    <Col
                                                      sm="6"
                                                      className="form-group"
                                                    >
                                                      <FormLabel>
                                                        <Button
                                                          onClick={EmergencyContactDetailEdit}
                                                          disabled={
                                                            isemergencyrelation !== "" &&
                                                              isemergencypername !== "" &&
                                                              emerContactNumber !== ""
                                                              ? false
                                                              : true
                                                          }
                                                          className="bg-transparent border-0 pe-0 font-size-10 fw-bold text-uppercase title-text-color "
                                                        >
                                                          edit
                                                        </Button>
                                                      </FormLabel>
                                                    </Col>
                                                  </Row>
                                                </Col>
                                              </Row>
                                            </Col>
                                            <Col sm="12" className="form-group">
                                              <Col sm="11">
                                                <Row className="g-2 form">
                                                  <Col
                                                    sm="3"
                                                    className="form-group"
                                                  >
                                                    &nbsp;
                                                  </Col>
                                                  <Col
                                                    sm="3"
                                                    className="form-group "
                                                  >
                                                    <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                      {emergencyContact ? emergencyContact.personName : ''}
                                                    </FormLabel>
                                                  </Col>
                                                  <Col
                                                    sm="3"
                                                    className="form-group  "
                                                  >
                                                    <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                      {emergencyContact ? emergencyContact.relation : ''}
                                                    </FormLabel>
                                                  </Col>
                                                  <Col
                                                    sm="3"
                                                    className="form-group"
                                                  >
                                                    <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                      {emergencyContact ? emergencyContact.contactNumber : ''}
                                                    </FormLabel>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </Col>
                                            <Col
                                              sm="12"
                                              className="border-bottom"
                                            >
                                              &nbsp;
                                            </Col>
                                          </CardBody>
                                        </Card>
                                      )}
                                      {!isEmergencyNo && (
                                        <>
                                          <Col
                                            sm="12"
                                            className="form-group p-1"
                                          >
                                            &nbsp;
                                          </Col>
                                          <Card>
                                            <CardHeader>
                                              <Row>
                                                <Col className="ms-auto font-size-14 fw-normal Ri-text-color-main-menu">
                                                  Emergency contact
                                                </Col>
                                                <CloseButton
                                                  onClick={EmergencyContactDetail}
                                                />
                                              </Row>
                                            </CardHeader>
                                            <CardBody>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col sm="4">
                                                    <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                                                      Person name
                                                    </FormLabel>
                                                    <Col sm="12">
                                                      <Form.Control
                                                        type="text"
                                                        placeholder="Enter person name"
                                                        value={isemergencypername}
                                                        onChange={(e) => setIsEmergencyPerName(e.target.value)}
                                                        size="sm"
                                                        className="rounded-0"
                                                        isValid={
                                                          isemergencypername === ""
                                                            ? false
                                                            : true
                                                        }
                                                        isInvalid={
                                                          isemergencypername >= "0" &&
                                                            isemergencypername <= "9"
                                                            ? true
                                                            : false
                                                        }
                                                      />
                                                    </Col>
                                                  </Col>
                                                  <Col sm="4">
                                                    <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                                                      Relation
                                                    </FormLabel>
                                                    <Col sm="12">
                                                      <Form.Select
                                                        value={isemergencyrelation}
                                                        onChange={(e) => setIsEmergencyRelation(e.target.value)}
                                                        type="select"
                                                        size="sm"
                                                        className="rounded-0"
                                                      >
                                                        <option>
                                                          Choose your options
                                                        </option>
                                                        <option>Brother</option>
                                                        <option>Sister</option>
                                                      </Form.Select>
                                                    </Col>
                                                  </Col>
                                                  <Col sm="4">
                                                    <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                                                      Contact number
                                                    </FormLabel>
                                                    <Col sm="12">
                                                      <InputGroup>
                                                        <Dropdown>
                                                          <Dropdown.Toggle
                                                            size="sm"
                                                            variant="secondary"
                                                            className="rounded-0"
                                                          >
                                                            +91
                                                          </Dropdown.Toggle>
                                                          <Dropdown.Menu>
                                                            <Dropdown.Item>
                                                              1
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                              2
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                              3
                                                            </Dropdown.Item>
                                                          </Dropdown.Menu>
                                                        </Dropdown>
                                                        <Form.Control
                                                          size="sm"
                                                          type="text"
                                                          placeholder="Enter Contact number"
                                                          value={emerContactNumber}
                                                          onChange={(e) => setEmerContactNumber(e.target.value)}
                                                          onKeyUp={CheckValidationForNumber}
                                                          className="rounded-0"
                                                          maxLength="10"
                                                          minLength="10"
                                                          isValid={
                                                            /[\d+$]/.test(
                                                              emerContactNumber
                                                            ) &&
                                                              emerContactNumber.length ===
                                                              10
                                                              ? true
                                                              : false
                                                          }
                                                          // isValid={emerContactNumber >= '0' && emerContactNumber <= "9" ? true : false}
                                                          isInvalid={
                                                            (emerContactNumber >= "a" &&
                                                              emerContactNumber <= "z") ||
                                                              (emerContactNumber >= "A" &&
                                                                emerContactNumber <= "Z")
                                                              ? true
                                                              : false
                                                          }
                                                        />
                                                      </InputGroup>
                                                    </Col>
                                                    <Col
                                                      sm="12"
                                                      className="form-group">
                                                      <Col
                                                        sm="12"
                                                        className="rounded-2 bg-danger text-center text-white"
                                                      >
                                                        {errorMessageForHealthContact}
                                                      </Col>
                                                    </Col>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardBody>
                                            <CardFooter>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col
                                                    sm="6"
                                                    className="text-end"
                                                  >
                                                    <Button
                                                      onClick={EmergencyContactDetail}
                                                      className="btn-outline-primary font-size-11 fw-bold  bg-white text-primary"
                                                    >
                                                      Cancel
                                                    </Button>
                                                  </Col>
                                                  <Col sm="6">
                                                    <Button
                                                      disabled={
                                                        isemergencypername !== "" &&
                                                          isemergencyrelation !== "" &&
                                                          emerContactNumber !== ""
                                                          ? false
                                                          : true
                                                      }
                                                      variant={
                                                        isemergencypername !== "" &&
                                                          isemergencyrelation !== "" &&
                                                          emerContactNumber !== ""
                                                          ? buttonBlueBg
                                                          : buttonSecondarybg
                                                      }
                                                      className="font-size-11 fw-bold"
                                                      type="submit"
                                                      onClick={healthdetail}
                                                    >
                                                      save
                                                    </Button>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardFooter>
                                          </Card>
                                          <Col
                                            sm="12"
                                            className="form-group p-1"
                                          >
                                            &nbsp;
                                          </Col>
                                        </>
                                      )}
                                    </Form>
                                    <Form
                                      onSubmit={BloodGroupDetailsubmitHandler}
                                    >
                                      {isBloodGroup && (
                                        <>
                                          <Card className="border-0 border-bottom">
                                            <CardBody className="border-0">
                                              <Row className="g-2 form">
                                                <Col sm="3">
                                                  <FormLabel className="font-size-12 fw-normal Ri-text-color-sub-menu text-uppercase">
                                                    Blood group detail
                                                  </FormLabel>
                                                </Col>
                                                <Col sm="3">
                                                  <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu">
                                                    Blood Type
                                                  </FormLabel>
                                                  <Col sm="12">
                                                    <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                      {bloodDetails.bloodType}
                                                    </FormLabel>
                                                  </Col>
                                                </Col>

                                                <Col sm="4">
                                                  <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu">
                                                    Last Blood donation date
                                                  </FormLabel>
                                                  <Col sm="12">
                                                    <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                      {formatDate(bloodDetails.bloodDate)}
                                                    </FormLabel>
                                                  </Col>
                                                </Col>
                                                <Col sm="2" className="text-end">
                                                  <Button
                                                    onClick={BloodGroupDetailAdd}
                                                    className="bg-transparent border-0 pe-0 font-size-10 fw-bold text-uppercase title-text-color">
                                                    Edit
                                                  </Button>
                                                </Col>
                                              </Row>
                                            </CardBody>
                                          </Card>
                                        </>
                                      )}
                                      {!isBloodGroup && (
                                        <>
                                          <Card>
                                            <CardHeader>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col sm="10">
                                                    <FormLabel className="ms-auto font-size-14 fw-normal Ri-text-color-main-menu">
                                                      Blood group details
                                                    </FormLabel>
                                                  </Col>
                                                  <Col
                                                    sm="2"
                                                    className="text-end"
                                                  >
                                                    <CloseButton
                                                      onClick={BloodGroupDetail}
                                                    />
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardHeader>
                                            <CardBody>
                                              <Row className="g-2 form">
                                                <Col sm="6">
                                                  <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu ">
                                                    Blood type
                                                  </FormLabel>
                                                  <Col sm="12">
                                                    <Form.Select
                                                      value={bloodGroup}
                                                      onChange={(e) => setBloodGroup(e.target.value)}
                                                      size="sm"
                                                      className="rounded-0"
                                                      type="select"
                                                    >
                                                      <option
                                                        selected
                                                        disabled
                                                        value=""
                                                      >
                                                        Choose your blood group
                                                      </option>
                                                      <option>A+</option>
                                                      <option>B+</option>
                                                    </Form.Select>
                                                  </Col>
                                                </Col>
                                                <Col sm="6">
                                                  <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu ">
                                                    Last blood donation date
                                                  </FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      value={bloodDonateDate}
                                                      onChange={(e) => setBloodDonateDate(e.target.value)}
                                                      className="rounded-0"
                                                      size="sm"
                                                      type="date"
                                                    />
                                                  </Col>
                                                </Col>
                                              </Row>
                                            </CardBody>
                                            <CardFooter>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col
                                                    sm="6"
                                                    className="text-end"
                                                  >
                                                    <Button
                                                      onClick={BloodGroupDetail}
                                                      className="btn-outline-primary font-size-11 fw-bold text-uppercase bg-white text-primary"
                                                    >
                                                      Cancel
                                                    </Button>
                                                  </Col>
                                                  <Col sm="6">
                                                    <Button
                                                      type="submit"
                                                      className="font-size-11 fw-bold text-uppercase"
                                                      disabled={
                                                        bloodDonateDate !==
                                                          "" &&
                                                          bloodGroup !== ""
                                                          ? false
                                                          : true
                                                      }
                                                      variant={
                                                        bloodDonateDate !==
                                                          "" &&
                                                          bloodGroup !== ""
                                                          ? buttonBlueBg
                                                          : buttonSecondarybg
                                                      }
                                                      onClick={BloodGroupDetailsubmitHandler}
                                                    >
                                                      save
                                                    </Button>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </CardFooter>
                                          </Card>
                                        </>
                                      )}
                                    </Form>

                                    <Form onSubmit={convidVaccineStatus}>
                                      {isConvidStatus && (
                                        <Card className="border-0 border-bottom">
                                          <CardBody className="border-0">
                                            <Row className="g-2 form">
                                              <Col sm="11">
                                                <FormLabel className="font-size-12 fw-normal  Ri-text-color-sub-menu ">
                                                  Covid vaccine status
                                                </FormLabel>
                                              </Col>
                                              <Col
                                                sm="1"
                                                className="text-end"
                                              >
                                                <FormLabel>
                                                  <Button
                                                    onClick={CovidStatusAdd}
                                                    disabled={
                                                      isvaccinename !== "" &&
                                                        secondVaccineName !== "" &&
                                                        isvaccinedate !== "" &&
                                                        secondVaccineDate !== ""
                                                        ? true
                                                        : false
                                                    }
                                                    className="border-0 pe-0 bg-transparent font-size-10 fw-bold text-uppercase title-text-color "
                                                  >
                                                    Edit
                                                  </Button>
                                                </FormLabel>
                                              </Col>
                                              <Col
                                                sm="12"
                                                className="border-bottom pt-0 mb-1"
                                              ></Col>
                                              <Col sm="12" className="">
                                                <Row className="g-2 form">
                                                  <Col
                                                    sm="2"
                                                    className=" text-center text-success border-success border rounded-5"
                                                  >
                                                    I'm covid safe
                                                  </Col>
                                                </Row>
                                              </Col>
                                              <Col sm="12">
                                                <Row className="g-2 form">
                                                  <Col sm="1"></Col>
                                                  <Col sm="3">
                                                    <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu ">
                                                      Number of dose
                                                    </FormLabel>
                                                  </Col>
                                                  <Col sm="3">
                                                    <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu ">
                                                      Vaccine name
                                                    </FormLabel>
                                                  </Col>
                                                  <Col sm="3">
                                                    <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu ">
                                                      Date of dose
                                                    </FormLabel>
                                                  </Col>
                                                </Row>
                                              </Col>
                                              <Col>
                                                <Row className="g-2 form">
                                                  {vaccineApiHolder.map((vaccine, index) => (
                                                    <><Col sm="1" key={index}>
                                                      <FormLabel>
                                                        <Input
                                                          onClick={EditVaccineDoseOne}
                                                          type="checkbox"
                                                          checked={true}
                                                        />
                                                      </FormLabel>
                                                    </Col><Col sm="3">
                                                        <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                          {vaccine.numberOfDose}
                                                        </FormLabel>
                                                      </Col><Col sm="3">
                                                        <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                          {vaccine.vaccineName}
                                                        </FormLabel>
                                                      </Col><Col sm="5">
                                                        <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                          {formatDate(vaccine.dateOfDose)}
                                                        </FormLabel>
                                                      </Col></>
                                                  ))}
                                                </Row>
                                              </Col>
                                            </Row>
                                          </CardBody>
                                        </Card>
                                      )}
                                      {!isConvidStatus && (
                                        <>
                                          <Card>
                                            <CardHeader>
                                              <Row>
                                                <Col className="ms=auto">
                                                  <FormLabel className="font-size-14 fw-normal Ri-text-color-main-menu">
                                                    Covid vaccine status
                                                  </FormLabel>
                                                </Col>

                                                <CloseButton
                                                  onClick={CovidStatus}
                                                />
                                              </Row>
                                            </CardHeader>
                                            <CardBody>
                                              <Row className="g-2 form">
                                                <Col sm="6">
                                                  <FormLabel className="font-size-12 fw-normal Ri-text-color-sub-menu">
                                                    Update your covid vaccine status
                                                  </FormLabel>
                                                </Col>
                                                <Col sm="6">
                                                  <Button
                                                    size="sm"
                                                    className="font-size-11 fw-bold text-uppercase"
                                                    onClick={VaccineStatus}
                                                  >
                                                    Update
                                                  </Button>
                                                </Col>
                                              </Row>
                                              <Col sm="12" className="p-1">
                                                &nbsp;
                                              </Col>
                                            </CardBody>
                                          </Card>

                                          {!isVaccineStatus && (
                                            <Card>
                                              <CardHeader>
                                                <FormLabel className="font-size-14 fw-normal Ri-text-color-main-menu">
                                                  Covid vaccine status
                                                </FormLabel>
                                              </CardHeader>
                                              <CardBody>
                                                <Row className="g-2 form">
                                                  <Col sm="6">
                                                    <FormLabel className="font-size-12 fw-normal Ri-text-color-sub-menu">
                                                      Have you taken the covid vaccine
                                                    </FormLabel>
                                                  </Col>
                                                  <Col sm="6">
                                                    <Form.Check
                                                      type="switch"
                                                      onClick={VaccineStatusUpdate}
                                                    />
                                                  </Col>
                                                </Row>
                                              </CardBody>
                                            </Card>
                                          )}
                                          <Col
                                            sm="12"
                                            className="form-group p-1"
                                          >
                                            &nbsp;
                                          </Col>
                                          {!isVaccineStatusUpdate && (
                                            <Card>
                                              <CardBody>
                                                <Row className="g-2 form">
                                                  <Col sm="1"></Col>
                                                  <Col sm="3">
                                                    <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                                                      Number of dose
                                                    </FormLabel>
                                                    <Col sm="12">
                                                      <Input
                                                        disabled={
                                                          selectDisableOpr === "AmDisabled"
                                                            ? true
                                                            : false
                                                        }
                                                        checked={
                                                          defaultCheckBoxActive === false ||
                                                            makeCheckBoxOneChecked === false
                                                            ? true
                                                            : false
                                                        }
                                                        onClick={EnableStateDoseOne}
                                                        type="checkbox"
                                                      />
                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-sub-menu">
                                                        &nbsp;&nbsp;Dose 1
                                                      </FormLabel>
                                                    </Col>
                                                    <Col sm="12">
                                                      <Input
                                                        disabled={
                                                          selectDisableOpr === "AmDisabled"
                                                            ? true
                                                            : false
                                                        }
                                                        checked={
                                                          defaultCheckBoxTwoActive === false ||
                                                            makeCheckBoxTwoChecked === false
                                                            ? true
                                                            : false
                                                        }
                                                        onClick={EnableStateDosTwo}
                                                        type="checkbox"
                                                      />
                                                      <FormLabel className="font-size-12 fw-normal Ri-text-color-sub-menu">
                                                        &nbsp;&nbsp;Dose 2
                                                      </FormLabel>
                                                    </Col>
                                                  </Col>
                                                  {/* <Col sm="2">
                                                    <Row className="g-2 form">
                                                      <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                                                        Number of dose
                                                      </FormLabel>
                                                      <Col sm="12">Dose 1</Col>
                                                      <Col sm="12">Dose 2</Col>
                                                    </Row>
                                                  </Col> */}
                                                  <Col sm="4">
                                                    <Row className="g-2 form">
                                                      <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                                                        Vaccine name
                                                      </FormLabel>
                                                      <Col sm="12">
                                                        <Input
                                                          value={isvaccinename}
                                                          onChange={(e) => setIsVaccineName(e.target.value)}
                                                          type="select"
                                                          size="sm"
                                                          disabled={
                                                            selectDisableOpr === "AmDisabled"
                                                              ? true
                                                              : selectDisableOpr === "SecondVaccineEntryFillup"
                                                                ? true
                                                                : enableDoseOne === false
                                                                  ? false
                                                                  : true
                                                          }
                                                        >
                                                          <option selected disabled value="">
                                                            Choose the vaccine
                                                          </option>
                                                          <option> Covishield </option>
                                                          <option>Covaccine</option>
                                                        </Input>
                                                      </Col>
                                                      <Col sm="12">
                                                        <Input
                                                          value={secondVaccineName}
                                                          onChange={(e) => setSecondVaccineName(e.target.value)}
                                                          disabled={
                                                            selectDisableOpr === "FirstVaccineEntryFillUp"
                                                              ? true
                                                              : enableDoseTwo === false
                                                                ? false
                                                                : true
                                                          }
                                                          type="select"
                                                          size="sm"
                                                        >
                                                          <option selected disabled value="">
                                                            Choose the vaccine
                                                          </option>
                                                          <option>Covishield</option>
                                                          <option>Covaccine</option>
                                                        </Input>
                                                      </Col>
                                                    </Row>
                                                  </Col>
                                                  <Col sm="4">
                                                    <Row className="g-2 form">
                                                      <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                                                        Date
                                                      </FormLabel>
                                                      <Col sm="12">
                                                        <Input
                                                          value={isvaccinedate}
                                                          onChange={(e) => setIsVaccineDate(e.target.value)}
                                                          type="date"
                                                          disabled={
                                                            selectDisableOpr === "AmDisabled"
                                                              ? true
                                                              : selectDisableOpr === "SecondVaccineEntryFillup"
                                                                ? true
                                                                : enableDoseOne === false
                                                                  ? false
                                                                  : true
                                                          }
                                                          size="sm"
                                                        />
                                                      </Col>
                                                      <Col sm="12">
                                                        <Input
                                                          value={secondVaccineDate}
                                                          onChange={(e) => setSecondVaccineDate(e.target.value)}
                                                          size="sm"
                                                          disabled={
                                                            selectDisableOpr === "FirstVaccineEntryFillUp"
                                                              ? true
                                                              : enableDoseTwo === false
                                                                ? false
                                                                : true
                                                          }
                                                          type="date"
                                                        />
                                                      </Col>
                                                    </Row>
                                                  </Col>
                                                </Row>
                                              </CardBody>
                                              <CardFooter>
                                                <Col sm="12">
                                                  <Row className="g-2 form">
                                                    <Col
                                                      sm="6"
                                                      className="text-end"
                                                    >
                                                      <Button
                                                        onClick={CovidCancelButton}
                                                        className="btn-outline-primary text-uppercase font-size-11 fw-bold  title-text-color bg-white text-primary"
                                                      >
                                                        Cancel
                                                      </Button>
                                                    </Col>
                                                    <Col sm="6">
                                                      <Button
                                                        disabled={
                                                          isvaccinename !== "" ||
                                                            secondVaccineName !== "" ||
                                                            isvaccinedate !== "" ||
                                                            secondVaccineDate !== ""
                                                            ? false
                                                            : true
                                                        }
                                                        variant={
                                                          isvaccinename !== "" ||
                                                            secondVaccineName !== "" ||
                                                            isvaccinedate !== "" ||
                                                            secondVaccineDate !== ""
                                                            ? buttonBlueBg
                                                            : buttonSecondarybg
                                                        }
                                                        className="font-size-11 fw-bold  text-uppercase"
                                                        type="submit"
                                                        onClick={convidVaccineStatus}
                                                      >
                                                        save
                                                      </Button>
                                                    </Col>
                                                  </Row>
                                                </Col>
                                              </CardFooter>
                                            </Card>
                                          )}
                                          <Col
                                            sm="12"
                                            className="form-group p-1"
                                          >
                                            &nbsp;
                                          </Col>
                                        </>
                                      )}
                                    </Form>

                                    <Form onSubmit={insuranceDetails}>
                                      {isInsurance && (
                                        <Card className="border-0">
                                          {/* Heading */}
                                          <CardBody>
                                            <Row className="g-2 form">
                                              <Col sm="2">
                                                <FormLabel className="font-size-12 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                  My insurance detail
                                                </FormLabel>
                                              </Col>
                                              <Col sm="2">
                                                <FormLabel className="font-size-10 px-0 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                  Insurance number
                                                </FormLabel>
                                              </Col>
                                              <Col sm="2">
                                                <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu">
                                                  Insurance type
                                                </FormLabel>
                                              </Col>
                                              <Col sm="2">
                                                <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu">
                                                  Expiry date
                                                </FormLabel>
                                              </Col>
                                              <Col sm="3">
                                                <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu">
                                                  Insurance company name
                                                </FormLabel>
                                              </Col>
                                              <Col sm="1">
                                                <FormLabel
                                                  type="button"
                                                  onClick={InsuranceDetail}
                                                  className="font-size-10 fw-bold text-uppercase title-text-color"
                                                >
                                                  Edit
                                                </FormLabel>
                                              </Col>
                                            </Row>
                                            {displayInsuranceHodler.map((item, index) => (
                                              <Row className="g-2 form" key={index}>
                                                <Col sm="2"></Col>
                                                <Col sm="2">
                                                  <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                    {item.insuranceNumber}
                                                  </FormLabel>
                                                </Col>
                                                <Col sm="2">
                                                  <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                    {item.insuranceType}
                                                  </FormLabel>
                                                </Col>
                                                <Col sm="2">
                                                  <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                    {formatDate(item.expiryDate)}
                                                  </FormLabel>
                                                </Col>
                                                <Col sm="3">
                                                  <FormLabel className="font-size-12 fw-normal Ri-text-color-main-menu">
                                                    {item.insuranceCompanyName}
                                                  </FormLabel>
                                                </Col>
                                              </Row>
                                            ))}
                                          </CardBody>

                                          {/* Data */}

                                        </Card>
                                      )}

                                      {!isInsurance && (
                                        <Card>
                                          <CardHeader>
                                            <Row>
                                              <Col className="ms-auto">
                                                <FormLabel className="font-size-14 fw-normal Ri-text-color-main-menu">
                                                  My health insurance
                                                </FormLabel>
                                              </Col>
                                              <CloseButton
                                                onClick={InsuranceDetail}
                                              />
                                            </Row>
                                          </CardHeader>
                                          <CardBody>
                                            {insuranceSections.map((section, index) => (
                                              <><Row className="g-2 form" key={index}>
                                                <Col sm="4">
                                                  <FormLabel className="font-size-10 fw-normal text-uppercase Ri-text-color-sub-menu">
                                                    Insurance Number
                                                  </FormLabel>
                                                  <Col sm="12">
                                                    <Form.Control
                                                      value={section.isInsurancenumber}
                                                      onChange={(e) => handleInputChange(index, 'isInsurancenumber', e.target.value)}
                                                      type="text"
                                                      size="sm"
                                                      className="rounded-0"
                                                      placeholder="Enter the insurance number"
                                                      isValid={isInsurancenumber !== ""
                                                        ? true
                                                        : false} />
                                                  </Col>
                                                </Col>
                                                <Col sm="4">
                                                  <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                    Insurance type
                                                  </FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      value={section.isinsurancetype}
                                                      onChange={(e) => handleInputChange(index, 'isinsurancetype', e.target.value)}
                                                      type="select"
                                                      size="sm"
                                                      className="rounded-0"
                                                    >
                                                      <option
                                                        selected
                                                        disabled
                                                        value=""
                                                      >
                                                        Choose your insurance type
                                                      </option>
                                                      <option>
                                                        Health insurance
                                                      </option>
                                                      <option>
                                                        Insurance
                                                      </option>
                                                    </Input>
                                                  </Col>
                                                </Col>
                                                <Col sm="3">
                                                  <FormLabel className="font-size-10 text-uppercase fw-normal Ri-text-color-sub-menu">
                                                    Expiry date
                                                  </FormLabel>
                                                  <Col sm="12">
                                                    <Input
                                                      value={section.isinsuranceexpire}
                                                      onChange={(e) => handleInputChange(index, 'isinsuranceexpire', e.target.value)}
                                                      type="date"
                                                      size="sm"
                                                      className="rounded-0" />
                                                  </Col>
                                                </Col>
                                                <Col sm="1">
                                                  <Button
                                                    onClick={() => removeInsuranceSection(index)}
                                                    className="btn-outline-primary font-size-11 text-uppercase fw-bold bg-white text-primary"
                                                  >
                                                    -
                                                  </Button>
                                                </Col>
                                              </Row><Col sm="12" className="pt-1">
                                                  <Row className="g-2 form">
                                                    <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu text-uppercase">
                                                      Insurance company name
                                                    </FormLabel>
                                                    <Col sm="12">
                                                      <Input
                                                        value={section.isinsurancecompname}
                                                        onChange={(e) => handleInputChange(index, 'isinsurancecompname', e.target.value)}
                                                        type="text" />
                                                    </Col>
                                                  </Row>
                                                </Col></>
                                            ))}
                                          </CardBody>
                                          <Col
                                            sm="12"
                                            className="text-end"
                                          >
                                            <ButtonGroup
                                              className="me-2"
                                              aria-label="First group"
                                              onClick={addInsuranceSection}
                                            >
                                              <Button className="outline-primary border-end-0 bg-white text-primary">
                                                +
                                              </Button>
                                              <Button className="outline-primary font-size-13 fw-normal border-start-0 bg-white text-primary">
                                                Add experience
                                              </Button>
                                            </ButtonGroup>
                                          </Col>
                                          <CardFooter>
                                            <Col sm="12">
                                              <Row className="g-2 form">
                                                <Col
                                                  sm="6"
                                                  className="text-end"
                                                >
                                                  <Button
                                                    onClick={InsuranceDetail}
                                                    className="btn-outline-primary font-size-11 fw-bold text-uppercase bg-white text-primary"
                                                  >
                                                    Cancel
                                                  </Button>
                                                </Col>
                                                <Col sm="6">
                                                  <Button
                                                    disabled={
                                                      isInsurancenumber !== "" &&
                                                        isinsurancetype !== "" &&
                                                        isinsuranceexpire !== "" &&
                                                        isinsurancecompname !== ""
                                                        ? true
                                                        : false
                                                    }
                                                    variant={
                                                      isInsurancenumber !==
                                                        "" &&
                                                        isinsurancetype !== "" &&
                                                        isinsuranceexpire !==
                                                        "" &&
                                                        isinsurancecompname !== ""
                                                        ? buttonBlueBg
                                                        : buttonSecondarybg
                                                    }
                                                    className="font-size-11 fw-bold text-uppercase"
                                                    type="submit"
                                                    onClick={insuranceDetails}
                                                  >
                                                    save
                                                  </Button>
                                                </Col>
                                              </Row>
                                            </Col>
                                          </CardFooter>
                                        </Card>
                                      )}
                                    </Form>
                                  </Tab>
                                </Tabs>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </Col>
                    </Col>
                  ))}
                </CardBody>
              </Card>
            </Row>
          </Col>
        </Col>
      </Col>
    </>
  );
};

export default MyProfileindex;
