import React from 'react'
import { Col, Container, Row, Form, Button } from "react-bootstrap";

const Contactform = () => {



    return (
        <>
            <Form className="formSection">
                <Form.Group className="mb-3 inputFormName" controlId="exampleForm.ControlInput1">
                    <Form.Label >Name (required) </Form.Label>
                    <Form.Control type="text" placeholder="Full Name" className='inputName' />
                </Form.Group>
                <Form.Group className="mb-3 inputFormEmail" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address (required)</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" className='inputEmail' />
                </Form.Group>
                <Form.Group className="mb-3 inputFormMessage" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Message*</Form.Label>
                    <Form.Control className='inputText' placeholder="Your Message" as="textarea" rows={5} />
                </Form.Group>
                <div className="d-grid gap-2 ">
                    <Button size="lg" variant="primary" type="submit">
                        Send us a message
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default Contactform




