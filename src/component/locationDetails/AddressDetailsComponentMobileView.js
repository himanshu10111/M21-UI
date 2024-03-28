import React from "react";
import { useState } from "react";
import { Button, Card, Col, Form, FormLabel } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import { CardBody, CardFooter, CardHeader, Input, Row } from "reactstrap";

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 500 });
    return isMobile ? children : null;
};
const AddressDetailsMobileView = () => {

    //Present address var part
    //var for house/flat/building 
    const [presentHouseDetail, setPresentHouseDetails] = useState('');

    //var for street details
    const [presentStreetDetail, setPresentStreetDetail] = useState('');

    //var landmark details
    const [presentLandMarkDetails, setPresentLandMarkDetail] = useState('');

    //var country details
    const [presentCountryList, setPresentCountryList] = useState('');

    //var state details
    const [presentStateList, setPresentStateList] = useState('');

    //var city details
    const [presentCityList, setPresentCityList] = useState('');

    //var district details
    const [presentDistrictList, setPresentDistrictList] = useState('');

    //var taluka details
    const [presentTalukaList, setPresentTalukaList] = useState('');

    //var Pin/zip list
    const [presentPinList, setPresentPinList] = useState('');

    //Permanent address var part start

    //house details
    const [permanentHouseDetails, setPermanentHouseDetails] = useState('');
    //street details
    const [permanentStreetDetails, setPermanentStreetDetails] = useState('');
    //landmark details
    const [permenantLandmarkDetails, setPermanentLandmarkDetails] = useState('');
    //country list
    const [permenantCountryList, setPermanentCountryList] = useState('');

    //state list

    const [permanentStateList, setPermanentStateList] = useState('');

    //city list
    const [permanentCityList, setPermanentCityList] = useState('');

    //district list
    const [permanentDistrictList, setPermanentDistrictList] = useState('');
    //taluka list

    const [permanentTalukaList, setPermanentTalukaList] = useState('');

    //pin details

    const [permanentPinDetail, setPermanentPinDetail] = useState('')

    //Arry part
    const countryListArry = ["Choose your country", "India", "U.S", "Japan", "Russia"];
    const stateList = ["Choose your state", "Maharastra", "Goa", "U.P", "Tamil Nadu"];
    const cityList = ["Choose your city", "Pune", "Mumbai", "Nashik", "Nagpur"];
    const talukaList = ["Choose your taluka", "Haveli", "Maval", "Mulshi", "Shirur"]
    const districtList = ["Choose your district", "Nagpur", "Nashik", "Sangli", "Satara"]



    //fun for select opration
    const DisplayAddressdetails = (arryHolder, valueHolder) => {
        return arryHolder.map((value, key) => {
            return (
                <option key={key} selected={value == valueHolder} value={value}>{value}</option>
            )
        });

    }

    //copy value from present address to permanent address
    const CopyValueFun = () => {
        setPermanentHouseDetails(presentHouseDetail);
        setPermanentStreetDetails(presentStreetDetail);
        setPermanentLandmarkDetails(presentLandMarkDetails);
        setPermanentCountryList(presentCountryList);
        setPermanentStateList(presentStateList);
        setPermanentCityList(presentCityList);
        setPermanentDistrictList(presentDistrictList);
        setPermanentTalukaList(presentTalukaList);
        setPermanentPinDetail(presentPinList);

    }

    const AddressDetailsSubmitHandler = (e) => {
        e.preventDefault();
    }

    //button color handler var
    const BtnBlue = "primary"
    const BtnSecondary = "secondary"


    //Cancel button fun 
    const [addressDetailsDisplay, setAddressDetailsDisplay] = useState(true);


    const [isAddress, setIsAddress] = useState(1);
    const PersonalAddress = () => {
        setIsAddress((current) => !current);
    };

    const CancelBtnFun = () => {
        setIsAddress((current) => !current);
        setPresentHouseDetails('');
        setPresentStreetDetail('');
        setPresentLandMarkDetail('');
        setPresentCountryList('');
        setPresentStateList('');
        setPresentCityList('');
        setPresentDistrictList('');
        setPresentTalukaList('');
        setPresentPinList('');
        setPermanentHouseDetails('');
        setPermanentStreetDetails('');
        setPermanentLandmarkDetails('');
        setPermanentCountryList('');
        setPermanentStateList('');
        setPermanentCityList('');
        setPermanentDistrictList('');
        setPermanentTalukaList('');
        setPermanentPinDetail('');
    }


    return (
        <>
            <Mobile>
                <Col className="col-12 border-bottom">
                    <Row className="g-2 form">
                        <Col className="col-10">
                            <FormLabel className="font-size-12 fw-bold Ri-text-head-mob">
                                Address Details
                            </FormLabel>
                        </Col>
                        <Col className="col-2" onClick={PersonalAddress}>
                            <FormLabel className="Ri-edit-mob-text-color font-size-12 fw-normal">

                                Edit
                            </FormLabel>
                        </Col>
                    </Row>
                </Col>


                {isAddress && (
                    <>
                        <Col className="col-12">
                            <Row className="g-2 form">
                                <Col className="col-12">
                                    <Row className="g-2 form">
                                        <Col className="col-12">
                                            <FormLabel className="font-size-11 fw-normal Ri-text-head-mob">
                                                Present Address
                                            </FormLabel>
                                        </Col>
                                        <Col className="col-8">
                                            <FormLabel className="font-size-13 fw-bold Ri-text-color-sub-menu">

                                                Flat no. 1891 Bharat Bhavan Near Victory Tower 14
                                                Main Road, 02nd Sector, Vijay Nagar, Bangalore,
                                                Karnataka 560100
                                            </FormLabel>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="col-12">
                                    <Row className="g-2 form">
                                        <Col className="col-12">
                                            <FormLabel className="font-size-11 fw-normal Ri-text-head-mob">Permanant Address</FormLabel>
                                        </Col>
                                        <Col className="col-8">
                                            <FormLabel className="font-size-13 fw-bold Ri-text-color-sub-menu">

                                                Flat no. 1891 Bharat Bhavan Near Victory Tower 14
                                                Main Road, 02nd Sector, Vijay Nagar, Bangalore,
                                                Karnataka 560100
                                            </FormLabel>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </>
                )}
                {!isAddress && (
                    <>
                        <Col className="section">
                            <Card className="border-0">
                                <Form onSubmit={AddressDetailsSubmitHandler}>

                                    <CardHeader className="bg-transparent">
                                        <FormLabel className="font-size-14 fw-bold Ri-text-color-main-menu">

                                            Present Address
                                        </FormLabel>
                                    </CardHeader>
                                    <CardBody>
                                        {/* Persent address part */}
                                        <Col className="col-12">
                                            <Row className="g-2 form">
                                                <Col className="col-12">
                                                    <Row className="g-2 form">
                                                        <Col className="col-12">
                                                            <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                                                                House/Flat No./Building<sup className="text-danger">*</sup>

                                                            </FormLabel>

                                                            <Col className="col-12">
                                                                <Form.Control
                                                                    type="text"
                                                                    defaultValue={presentHouseDetail}
                                                                    onChange={(e) => setPresentHouseDetails(e.target.value)}
                                                                    size='sm'
                                                                    placeholder="Enter house details"
                                                                    required
                                                                />
                                                            </Col>
                                                        </Col>
                                                        <Col className="col-12">
                                                            <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                                                                Street Details<sup className="text-danger">*</sup>
                                                            </FormLabel>
                                                            <Col className="col-12">
                                                                <Form.Control
                                                                    type="text"
                                                                    defaultValue={presentStreetDetail}
                                                                    onChange={(e) => setPresentStreetDetail(e.target.value)}
                                                                    size="sm"
                                                                    placeholder="Enter Street Details"
                                                                    required
                                                                />
                                                            </Col>
                                                        </Col>
                                                        <Col className="col-12">
                                                            <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                                                                Landmark
                                                            </FormLabel>
                                                            <Col className="col-12">
                                                                <Form.Control
                                                                    type="text"
                                                                    defaultValue={presentLandMarkDetails}
                                                                    onChange={(e) => setPresentLandMarkDetail(e.target.value)}
                                                                    size="sm"
                                                                    placeholder="Enter Landmark Details"

                                                                />
                                                            </Col>
                                                        </Col>

                                                    </Row>
                                                </Col>
                                                <Col className="col-12">
                                                    <Row className="g-2 form">
                                                        <Col className="col-6">
                                                            <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">Country <sup className="text-danger">*</sup></FormLabel>
                                                            <Col className="col-12">
                                                                <Form.Select
                                                                    type="select"
                                                                    size="sm"
                                                                    defaultValue={presentCountryList}
                                                                    onChange={(e) => setPresentCountryList(e.target.value)}
                                                                    required
                                                                >

                                                                    {DisplayAddressdetails(countryListArry, presentCountryList)}
                                                                </Form.Select>
                                                            </Col>
                                                        </Col>
                                                        <Col className="col-6">
                                                            <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                                                                State<sup className="text-danger">*</sup>
                                                            </FormLabel>
                                                            <Col className="col-12">
                                                                <Form.Select
                                                                    type='select'
                                                                    defaultValue={presentStateList}
                                                                    onChange={(e) => setPresentStateList(e.target.value)}
                                                                    size="sm"
                                                                    required
                                                                >
                                                                    {DisplayAddressdetails(stateList, presentStateList)}
                                                                </Form.Select>
                                                            </Col>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col className="col-12">
                                                    <Row className="g-2 form">
                                                        <Col className="col-6">
                                                            <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">City<sup className="text-danger">*</sup></FormLabel>
                                                            <Col className="col-12">
                                                                <Form.Select
                                                                    type="select"
                                                                    size='sm'
                                                                    defaultValue={presentCityList}
                                                                    onChange={(e) => setPresentCityList(e.target.value)}
                                                                    required
                                                                >
                                                                    {DisplayAddressdetails(cityList, presentCityList)}
                                                                </Form.Select>
                                                            </Col>
                                                        </Col>
                                                        <Col className="col-6">
                                                            <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">District<sup className="text-danger">*</sup></FormLabel>
                                                            <Col className="col-12">
                                                                <Form.Select
                                                                    type="select"
                                                                    size='sm'
                                                                    defaultValue={presentDistrictList}
                                                                    onChange={(e) => setPresentDistrictList(e.target.value)}
                                                                    required
                                                                >
                                                                    {DisplayAddressdetails(districtList, presentDistrictList)}
                                                                </Form.Select>
                                                            </Col>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col className="col-12">
                                                    <Row className="g-2 form">
                                                        <Col className="col-6">
                                                            <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">Taluka<sup className="text-danger">*</sup></FormLabel>
                                                            <Col className="col-12">
                                                                <Form.Select
                                                                    type="select"
                                                                    size='sm'
                                                                    defaultValue={presentTalukaList}
                                                                    onChange={(e) => setPresentTalukaList(e.target.value)}
                                                                    required
                                                                >
                                                                    {DisplayAddressdetails(talukaList, presentTalukaList)}
                                                                </Form.Select>
                                                            </Col>
                                                        </Col>
                                                        <Col className="col-6">
                                                            <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">Pin/Zip Code</FormLabel>
                                                            <Col className="col-12">
                                                                <Form.Control
                                                                    size="sm"
                                                                    type='text'
                                                                    defaultValue={presentPinList}
                                                                    onChange={(e) => setPresentPinList(e.target.value)}
                                                                    required
                                                                    placeholder="Enter Your area code"
                                                                />
                                                            </Col>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                        {/* same as permanent address clicl part */}
                                        <Col className="col-12">
                                            <Row className="g-2 form">
                                                <Col className="form-control border-0">
                                                    <FormLabel className="forn-size-14 fw-bold Ri-text-color-main-menu">Permanent Address</FormLabel>
                                                    <Col className="col-12 form-check">
                                                        <Input onClick={CopyValueFun} type="checkbox" />
                                                        <FormLabel>Same as present address</FormLabel>
                                                    </Col>
                                                </Col>
                                            </Row>
                                        </Col>
                                        {/* Permanent address part */}
                                        <Col className="col-12">
                                            <Row className="g-2 form">
                                                <Col className="col-12">
                                                    <Row className="g-2 form">
                                                        <Col className="col-12">
                                                            <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                                                                House/Flat No./Building<sup className="text-danger">*</sup>

                                                            </FormLabel>

                                                            <Col className="col-12">
                                                                <Form.Control
                                                                    type="text"
                                                                    defaultValue={permanentHouseDetails}
                                                                    onChange={(e) => setPermanentHouseDetails(e.target.value)}
                                                                    size='sm'
                                                                    placeholder="Enter house details"

                                                                />
                                                            </Col>
                                                        </Col>
                                                        <Col className="col-12">
                                                            <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                                                                Street Details<sup className="text-danger">*</sup>
                                                            </FormLabel>
                                                            <Col className="col-12">
                                                                <Form.Control
                                                                    type="text"
                                                                    defaultValue={permanentStreetDetails}
                                                                    onChange={(e) => setPermanentStreetDetails(e.target.value)}
                                                                    size="sm"
                                                                    placeholder="Enter Street Details"

                                                                />
                                                            </Col>
                                                        </Col>
                                                        <Col className="col-12">
                                                            <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                                                                Landmark
                                                            </FormLabel>
                                                            <Col className="col-12">
                                                                <Form.Control
                                                                    type="text"
                                                                    defaultValue={permenantLandmarkDetails}
                                                                    onChange={(e) => setPermanentLandmarkDetails(e.target.value)}
                                                                    size="sm"
                                                                    placeholder="Enter Landmark Details"

                                                                />
                                                            </Col>
                                                        </Col>

                                                    </Row>
                                                </Col>
                                                <Col className="col-12">
                                                    <Row className="g-2 form">
                                                        <Col className="col-6">
                                                            <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">Country <sup className="text-danger">*</sup></FormLabel>
                                                            <Col className="col-12">
                                                                <Form.Select
                                                                    type="select"
                                                                    size="sm"
                                                                    defaultValue={permenantCountryList}
                                                                    onChange={(e) => setPermanentCountryList(e.target.value)}

                                                                >
                                                                    {DisplayAddressdetails(countryListArry, permenantCountryList)}
                                                                </Form.Select>
                                                            </Col>
                                                        </Col>
                                                        <Col className="col-6">
                                                            <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">
                                                                State<sup className="text-danger">*</sup>
                                                            </FormLabel>
                                                            <Col className="col-12">
                                                                <Form.Select
                                                                    type='select'
                                                                    defaultValue={permanentStateList}
                                                                    onChange={(e) => setPermanentStateList(e.target.value)}
                                                                    size="sm"

                                                                >
                                                                    {DisplayAddressdetails(stateList, permanentStateList)}
                                                                </Form.Select>
                                                            </Col>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col className="col-12">
                                                    <Row className="g-2 form">
                                                        <Col className="col-6">
                                                            <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">City<sup className="text-danger">*</sup></FormLabel>
                                                            <Col className="col-12">
                                                                <Form.Select
                                                                    type="select"
                                                                    size='sm'
                                                                    defaultValue={permanentCityList}
                                                                    onChange={(e) => setPermanentCityList(e.target.value)}

                                                                >
                                                                    {DisplayAddressdetails(cityList, permanentCityList)}
                                                                </Form.Select>
                                                            </Col>
                                                        </Col>
                                                        <Col className="col-6">
                                                            <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">District<sup className="text-danger">*</sup></FormLabel>
                                                            <Col className="col-12">
                                                                <Form.Select
                                                                    type="select"
                                                                    size='sm'
                                                                    defaultValue={permanentDistrictList}
                                                                    onChange={(e) => setPermanentDistrictList(e.target.value)}

                                                                >
                                                                    {DisplayAddressdetails(districtList, permanentDistrictList)}
                                                                </Form.Select>
                                                            </Col>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col className="col-12">
                                                    <Row className="g-2 form">
                                                        <Col className="col-6">
                                                            <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">Taluka<sup className="text-danger">*</sup></FormLabel>
                                                            <Col className="col-12">
                                                                <Form.Select
                                                                    type="select"
                                                                    size='sm'
                                                                    defaultValue={permanentTalukaList}
                                                                    onChange={(e) => setPermanentTalukaList(e.target.value)}

                                                                >
                                                                    {DisplayAddressdetails(talukaList, permanentTalukaList)}
                                                                </Form.Select>
                                                            </Col>
                                                        </Col>
                                                        <Col className="col-6">
                                                            <FormLabel className="font-size-10 fw-normal Ri-text-color-sub-menu">Pin/Zip Code</FormLabel>
                                                            <Col className="col-12">
                                                                <Form.Control
                                                                    size="sm"
                                                                    type='text'
                                                                    defaultValue={permanentPinDetail}
                                                                    onChange={(e) => setPermanentPinDetail(e.target.value)}

                                                                    placeholder="Enter Your area code"
                                                                />
                                                            </Col>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </CardBody>
                                    <CardFooter className="bg-transparent">
                                        <Col className="col-12 form">
                                            <Row className="g-2 form">
                                                <Col className="col-6 text-end">
                                                    <Button className="btn-outline-primary
                                                     bg-white 
                                                      text-uppercase
                                                        text-primary 
                                                        font-size-12
                                                        fw-bold"
                                                        onClick={CancelBtnFun}
                                                    >Cancel</Button>
                                                </Col>
                                                <Col className="col-6">
                                                    <Button
                                                        type="submit"
                                                        className="font-size-12 text-uppercase fw-bold"
                                                        disabled={
                                                            presentHouseDetail !== "" &&
                                                                presentStreetDetail !== "" &&
                                                                presentLandMarkDetails !== "" &&
                                                                presentCountryList !== "" &&
                                                                presentStateList !== "" &&
                                                                presentCityList !== "" &&
                                                                presentDistrictList !== "" &&
                                                                presentTalukaList !== "" &&
                                                                presentPinList !== "" ? false : true
                                                        }
                                                        variant={
                                                            presentHouseDetail !== "" &&
                                                                presentStreetDetail !== "" &&
                                                                presentLandMarkDetails !== "" &&
                                                                presentCountryList !== "" &&
                                                                presentStateList !== "" &&
                                                                presentCityList !== "" &&
                                                                presentDistrictList !== "" &&
                                                                presentTalukaList !== "" &&
                                                                presentPinList !== "" ? BtnBlue : BtnSecondary
                                                        }
                                                    >Save</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </CardFooter>
                                </Form>
                            </Card>
                        </Col>
                    </>
                )}

            </Mobile>

        </>
    )
}

export default AddressDetailsMobileView;
