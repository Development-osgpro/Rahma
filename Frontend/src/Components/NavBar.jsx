import React, {useState} from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Dropdown} from 'react-bootstrap'
import logo from '../Assets/images/logo.png'
import MHAlogo from '../Assets/images/mha-logo-02.png'
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {

    const handleTopColor = () => {
        const emailPhone = document.getElementById('email-phone')
        emailPhone.style.transition = 'all .5s ease-in-out'
        emailPhone.style.backgroundColor = '#2b7634'
    }

    const handleTopColorBack = () => {
        const emailPhone = document.getElementById('email-phone')
        emailPhone.style.transition = 'all .5s ease-in-out'
        emailPhone.style.backgroundColor = '#2b3990'
    }

    return (
        <>
            <div className='rahma-nav'>
                <div className='email-phone' id='email-phone'>
                    <div className="container">
                        <a href="mailto:info@rahmaww.org" rel='noopener noreferrer'>
                        <i className="fa-solid fa-envelope"></i> info@rahmaww.org</a>
                        <a href="tel:+2485663111" rel='noopener noreferrer'>
                        <i className="fa-solid fa-phone-volume"></i> +(248) 566 3111</a>
                    </div>
                </div>

                <div className='prand-links'>
                    <div className="container">
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand href="#"><NavLink to='/homepage'><img src={logo} alt="Rahma Logo" /></NavLink></Navbar.Brand>
                            <div className='donate-btn'>
                                <button onMouseOver={() => handleTopColor()} onMouseLeave={() => handleTopColorBack()}>Donate</button>
                                <a href="https://www.mhanational.org/" target='_blank' rel='noopener noreferrer'><img src={MHAlogo} alt="MHA Logo" /></a>
                            </div>                            
                            <Navbar.Toggle aria-controls="navbarScroll"/>
                            <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href=""><NavLink to="/homepage" style={{textDecoration: 'none'}}>Home</NavLink></Nav.Link>
                                <Dropdown className='dropdownMenu'>
                                    <Nav.Link href="/our_work"><NavLink to="/our_work" style={{textDecoration: 'none'}}>OurWork</NavLink></Nav.Link>
                                    {/* <Dropdown.Toggle>
                                        Our Work
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" id='dropdown-item'>Environment</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" id='dropdown-item'>Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" id='dropdown-item'>W.A.S.H</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" id='dropdown-item'>Education</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" id='dropdown-item'>Health</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" id='dropdown-item'>Seasonal Campaigns</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" id='dropdown-item'>Non-Food Items </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" id='dropdown-item'>Protection</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" id='dropdown-item'>Shelter</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" id='dropdown-item'>Nutrition</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" id='dropdown-item'>food security</Dropdown.Item>
                                    </Dropdown.Menu> */}
                                </Dropdown>
                                <Nav.Link href="#action2">Where We Work</Nav.Link>
                                <Dropdown className='dropdownMenu'>
                                    <Dropdown.Toggle>
                                    Programs
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" id='dropdown-item'>Rahma International Academy</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" id='dropdown-item'>Orphan Sponsorship</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" id='dropdown-item'>Meet Our Mental Health</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" id='dropdown-item'>COVID-19 Efforts & Resources</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" id='dropdown-item'>Quick Facts & Statistics</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" id='dropdown-item'>Mental Health Programs</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" id='dropdown-item'>Staying Mentally Healthy</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" id='dropdown-item'>Recovery & Support</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" id='dropdown-item'>Mental Health Tools</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" id='dropdown-item'>B4 Stage 4 Philosophy</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                {/* <Nav.Link href="#action2">About Us</Nav.Link> */}
                                <Nav.Link href="#action2">Success Stories</Nav.Link>
                                <Nav.Link href="#action2">Contact</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar