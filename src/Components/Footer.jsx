import React from 'react'
import RahmaLogo from '../Assets/images/rahmaLogo.png'

const Footer = () => {

    var year = new Date().getFullYear()

    return (
        <>
            <div className="Footer">
                <div className='container'>
                <div className="container col-10">
                    <div className='footer-children'>
                        <div className='usful-links'>
                            <ul>
                                <li>Home</li>
                                <li>Our Work</li>
                                <li>Where We Work</li>
                                <li>News</li>
                                <li>Programs</li>
                                <li>About Us</li>
                            </ul>
                        </div>

                        <div className='contact'>
                            <h5>Contact</h5>
                            <br />
                            <a href="mailto:info@rahmaww.org">
                            <i className="fa-solid fa-envelope"></i> info@rahmaww.org</a>
                            <br />
                            <a href="tel:+2485663111">
                            <i className="fa-solid fa-phone-volume"></i> +(248) 566 3111</a>
                            <br />
                            <a href="">
                            <i class="fa-solid fa-location-dot"></i> 31333 Southfield Rd. STE 100 
                            Beverly Hills, MI 48025
                            </a>
                        </div>

                        <div className='rahma-message'>
                            <img src={RahmaLogo} alt="" />
                            <h5>We’d love to hear from you.</h5>
                            <h5>Just choose the most convenient method and 
                            we’ll get back to you as soon as we can.</h5>
                            <h5>Rahma Worldwide is a 501 (c) (3) 
                            Nonprofit Organization (Tax ID 47-1304361)</h5>
                            <h5>View IRS Letter</h5>
                            <div className='social-icons'>
                                <a href='https://www.facebook.com/RahmaWorldwide/' target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href='https://www.instagram.com/rahmaworldwide/' target="_blank"><i class="fa-brands fa-instagram"></i></a>
                                <a href='https://twitter.com/rahmaworldwide' target="_blank"><i class="fa-brands fa-twitter"></i></a>
                                <a href='https://www.youtube.com/c/RahmaWorldwide' target="_blank"><i class="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                        </div>

                        <div className='footer-sign-up'>
                            <h2>Sign up for our Newsletter</h2>
                            <form action="">
                                <input type="text" placeholder='Name'/>
                                <input type="email" placeholder='Email'/>
                                <input type="submit" placeholder='Subscribe'/>
                            </form>
                        </div>
                </div>
            </div>
            </div>

            <div className='copyright'>
                <p>Copyright © {year} Rahma Worldwide, All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer