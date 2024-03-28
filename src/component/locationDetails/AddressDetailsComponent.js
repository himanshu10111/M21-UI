import React from "react";
import { useState } from "react";
import { Col, Form, FormLabel, Row } from "react-bootstrap";


const AddressDetails = () => {
    const countryListArry = ["Choose your country", "India", "U.S", "Japan", "Russia"];
    const stateList = ["Choose your state", "Maharastra", "Goa", "U.P", "Tamil Nadu"];
    const cityList = ["Choose your city", "Pune", "Mumbai", "Nashik", "Nagpur"];
    const talukaList = ["Choose your taluka", "Haveli", "Maval", "Mulshi", "Shirur"]
    const districtList = ["Choose your district", "Nagpur", "Nashik", "Sangli", "Satara"]


    const [countryListHolder, setCountryListHolder] = useState([]);
    const [stateListHolder, setStateListHolder] = useState('');
    const [cityListHolder, setCityListHolder] = useState('');
    const [talukaListHolder, setTalukaListHolder] = useState('');
    const [districtListHolder, setDistrictListHolder] = useState('')


    const DisplayAddressdetails = (arryHolder, valueHolder) => {
        return arryHolder.map((value, key) => {
            return (
                <option key={key} selected={value == valueHolder} value={value}>{value}</option>
            )
        });

    }

    return (
        <>
            <Col className="section">
                <Col sm='12' className="form-group">
                    <Row className="g-2 form">
                        <Col sm='4' className="form-group">
                            <FormLabel>
                                Country
                            </FormLabel>
                            <sup>*</sup>
                            <Col sm='12' className="form-group">
                                <Form.Select
                                    type='select'
                                    name='country'
                                    defaultValue={countryListHolder}
                                    onChange={(e) => setCountryListHolder(e.target.value)}
                                    size='sm'
                                >
                                    {DisplayAddressdetails(countryListArry, countryListHolder)}
                                </Form.Select>
                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Col>
        </>
    )
}

export default AddressDetails;