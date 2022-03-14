import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import logo from '../Assets/images/logo.png'
import MHAlogo from '../Assets/images/mha-logo-02.png'

const NavBar = () => {
    return (
        <>
            <div className='rahma-nav'>
                <div className='email-phone'>
                    <div className="container">
                        <div className="container col-10">
                            <a href="mailto: info@rahmaww.org">
                            <i className="fa-solid fa-envelope"></i> info@rahmaww.org</a>
                            <a href="tel: (248) 566 3111">
                            <i className="fa-solid fa-phone-volume"></i> (248) 566 3111</a>
                        </div>
                    </div>
                </div>

                <div className='prand-links'>
                    <div className="container">
                        <Navbar bg="light" expand="lg">
                            <Container fluid className='col-10'>
                                <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
                                <div className='donate-btn'>
                                    <button>Donate</button>
                                    <img src={MHAlogo} alt="" />
                                </div>                            
                                <Navbar.Toggle aria-controls="navbarScroll"/>
                                <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Our Work</Nav.Link>
                                    <Nav.Link href="#action2">Where We Work</Nav.Link>
                                    <Nav.Link href="#action2">Programs</Nav.Link>
                                    <Nav.Link href="#action2">About Us</Nav.Link>
                                    <Nav.Link href="#action2">Success Stories</Nav.Link>
                                    <Nav.Link href="#action2">Contact</Nav.Link>
                                </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar