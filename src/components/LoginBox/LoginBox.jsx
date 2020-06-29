import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginBox.css"
function LoginBox(props) {
    return (
        <Row>
            <Col>
                <Form className="Login-Form">
                <center>
                    <Image className="Login-Form-logo" src="https://www.egov.go.th/upload/eservice-thumbnail/img_d05cf3858295d7c8df09e3109072a561.png" rounded />
                </center>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="LoginBox-submit-button">
                        Submit
                </Button>
                </Form></Col>
        </Row>
    )

}
export default LoginBox;


