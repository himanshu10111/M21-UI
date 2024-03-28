import React from "react";
import { Card, Input,Col, Row,CardHeader  } from "reactstrap";


const introductoryHeader=({stepSelected})=>{
    return(
        <>
       <Card className="border-0 rounded-0">
        <CardHeader className="border-bottom rounded-0 bg-white p-5 py-2">
          <Col sm='12'>
            <Row>
       
                 <Col className="form-check">
                   <Input type='checkbox' className='rounded-5 box-shadow-0' checked={stepSelected >= 1} />
                   <label className="form-check-label pt-1"><sup>Introductory basic details</sup> </label> 
                </Col>
                <Col className="p-0">
                  <Col className="form-check p-0">
                     <Input type={stepSelected == 2 ? 'radio' : 'checkbox'} className='rounded-5' disabled checked={stepSelected >= 2} />
                     <label className="form-check-label pt-1"><sup> Introductory venue details</sup></label>
                  </Col>
            </Col>
            </Row>
          </Col>
        </CardHeader>
       </Card>
        </>
    )
}


export default introductoryHeader;