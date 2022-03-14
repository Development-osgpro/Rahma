import React from 'react'
import RahmaLogo from '../Assets/images/rahmaLogo.png'

const Footer = () => {
  return (
    <>
        <div className="Footer">
            <div className="container">
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
                        <a href="mailto: info@rahmaww.org">
                        <i className="fa-solid fa-envelope"></i> info@rahmaww.org</a>
                        <br />
                        <a href="tel: (248) 566 3111">
                        <i className="fa-solid fa-phone-volume"></i> (248) 566 3111</a>
                        <br />
                        <a href="">
                        <i class="fa-solid fa-location-dot"></i> 31333 Southfield Rd. STE 100 
                        Beverly Hills, MI 48025
                        </a>
                    </div>

                    <div className='rahma-message'>
                        <img src={RahmaLogo} alt="" />
                        <h6>We’d love to hear from you.</h6>
                        <h6>Just choose the most convenient method and 
                        we’ll get back to you as soon as we can.</h6>
                        <h6>Rahma Worldwide is a 501 (c) (3) 
                        Nonprofit Organization (Tax ID 47-1304361)</h6>
                        <h6>View IRS Letter</h6>
                        <div className='social-icons'>
                            <span><i class="fa-brands fa-facebook-f"></i></span>
                            <span><i class="fa-brands fa-instagram"></i></span>
                            <span><i class="fa-brands fa-twitter"></i></span>
                            <span><i class="fa-brands fa-youtube"></i></span>
                        </div>
                    </div>

                </div>
                <div className='footer-sign-up'>
                    
                </div>
            </div>
        </div>

        <div className='copyright'>
            <p>Copyright © 2022 Rahma Worldwide, All Rights Reserved</p>
        </div>
    </>
  )
}

export default Footer