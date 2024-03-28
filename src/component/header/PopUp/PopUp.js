import React from 'react'
import { Card, CardHeader, Col, Row } from 'reactstrap'

const PopUp = () => {
    return (
        <div>
            <Card className='border-0'>
                <CardHeader className='bottom-border-0' >
                    <Row>
                        <Col><input type="radio" /> Refered by</Col>
                        <Col><input type="radio" /> Introduction details</Col>
                        <Col><input type="radio" /> Invitee details</Col>
                        <Col><input type="radio" /> Address details</Col>
                        <Col><input type="radio" /> Additional details</Col>
                    </Row>
                </CardHeader>
            </Card>
        </div>
    )
}

export default PopUp