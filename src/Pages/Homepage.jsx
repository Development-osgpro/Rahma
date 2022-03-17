import React, { useState, useRef, useEffect } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import hand from '../Assets/images/handimg.png'
import mainHeroimg from '../Assets/images/hero-main-img.png'
import testImg from '../Assets/images/test-12.jpg'
import testImage from '../Assets/images/imagetest-01.jpg'
import { ReactComponent as HeroSvgicon2 } from '../Assets/svgs/hero-icons/icon-02.svg'
import { ReactComponent as HeroSvgicon3 } from '../Assets/svgs/hero-icons/icon-03.svg'
import { ReactComponent as HeroSvgicon4 } from '../Assets/svgs/hero-icons/icon-04.svg'
import { ReactComponent as HeroSvgicon5 } from '../Assets/svgs/hero-icons/icon-05.svg'
import { ReactComponent as HeroSvgicon6 } from '../Assets/svgs/hero-icons/icon-06.svg'
import { ReactComponent as HeroSvgicon7 } from '../Assets/svgs/hero-icons/icon-07.svg'
import { ReactComponent as HeroSvgicon8 } from '../Assets/svgs/hero-icons/icon-08.svg'
import { ReactComponent as HeroSvgicon9 } from '../Assets/svgs/hero-icons/icon-09.svg'
import { ReactComponent as HeroSvgicon10 } from '../Assets/svgs/hero-icons/icon-10.svg'
import { ReactComponent as HeroSvgicon11 } from '../Assets/svgs/hero-icons/icon-11.svg'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import ModalVideo from 'react-modal-video'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

import afterImg from "../Assets/images/after-before-slider-01.jpg"
import beforeImg from "../Assets/images/after-before-slider-02.jpg"

const Homepage = () => {

    const FIRST_IMAGE = {
        imageUrl: afterImg
    };
    const SECOND_IMAGE = {
        imageUrl: beforeImg
    };

    // framer motion variants
    const HandimageVariants = {
        hidden: { opacity: 0 , y: 100},
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration : 1.5, ease: 'easeInOut', },
        }
    }

    // framer motion variants
    const RightimageVariants = {
        hidden: { opacity: 0 , x: 100},
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration : 1.5},
        }
    }

    const RightimageVariants1 = {
        hidden: { opacity: 0},
        visible: {
            opacity: 1,
            transition: { duration : 1.5},
        }
    }

    // framer motion variants
    const TextHeroVariants = {
        hidden: { opacity: 0 , x: -100},
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration : 3 },
        }
    }

    // framer motion variants
    const buttonHeroVariants = {
        hidden: { opacity: 0 , y: -100},
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration : 1, },
        }
    }

    const facebookHeroVariants = {
        hidden: { opacity: 0 , y: 25},
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration : .1, ease: 'easeInOut', },
        }
    }

    // framer motion variants
    const instaHeroVariants = {
        hidden: { opacity: 0 , y: 50},
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration : .2, ease: 'easeInOut', },
        }
    }

    // framer motion variants
    const twitterHeroVariants = {
        hidden: { opacity: 0 , y: 75},
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration : .3 },
        }
    }

    // framer motion variants
    const youtubeHeroVariants = {
        hidden: { opacity: 0 , y: 100},
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration : .4, ease: 'easeInOut', },
        }
    }

    // handle all hero animations
    const mainRightImage = useRef();
    const mainH4Title = useRef();
    const [iconId, setIconId] = useState(1)
    const [handleAnimate, setHandleAnimate] = useState(true)
    const [handleAnimateClick, setHandleAnimateClick] = useState(false)

    const handleIconClick = (id) => {
        setIconId(id)
        if (id === 1) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-environment-rightImage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-environment-h4")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 2) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-protection-rightImage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-protection-h4")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 3) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-shelter-rightImage")
        } else if (id === 4) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-nutrition-rightImage")
        } else if (id === 5) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-orphan-sponsorship-rightImage")
        } else if (id === 6) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-food-rightImage")
        } else if (id === 7) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-health-rightImage")
        } else if (id === 8) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-education-rightImage")
        } else if (id === 9) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-w-a-s-h-rightImage")
        } else if (id === 10) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-non-food-items-rightImage")
        }
    }

    const [videoIsOpen, setVideoIsOpen] = useState(false)

    return (
        <>
            <NavBar />
                <div className="homepage">
                    <div className="hero-section">
                        <div className='animation-screen'>
                            <div className='container'>
                                <div className="container col-10">
                                    <div className='donate-now'>       
                                        <motion.h4
                                        variants={TextHeroVariants}
                                        initial='hidden'
                                        animate={handleAnimate ? 'visible' : 'heddin'}
                                        ref={mainH4Title}
                                        data-environment-h4={'BEST CHARITY FOR REFUGEES THAT’S MAKING A DIFFERENCE!'}
                                        data-protection-h4={'lorem lorem lorem lorem lorem lorem lorem lorem'}
                                        >BEST CHARITY FOR REFUGEES
                                        THAT’S MAKING A DIFFERENCE!</motion.h4>
                                        <motion.button
                                        variants={buttonHeroVariants}
                                        initial='hidden'
                                        animate='visible'
                                        >DONATE NOW</motion.button>
                                        <div> 
                                            <motion.a 
                                            variants={facebookHeroVariants}
                                            initial='hidden'
                                            animate='visible'
                                            href='https://www.facebook.com/RahmaWorldwide/' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-facebook-f"></i></motion.a>
                                            <motion.a 
                                            variants={instaHeroVariants}
                                            initial='hidden'
                                            animate='visible'
                                            href='https://www.instagram.com/rahmaworldwide/' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-instagram"></i></motion.a>
                                            <motion.a 
                                            variants={twitterHeroVariants}
                                            initial='hidden'
                                            animate='visible'
                                            href='https://twitter.com/rahmaworldwide' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-twitter"></i></motion.a>
                                            <motion.a 
                                            variants={youtubeHeroVariants}
                                            initial='hidden'
                                            animate='visible'
                                            href='https://www.youtube.com/c/RahmaWorldwide' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-youtube"></i></motion.a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className='hero-hand-img'>       
                                    <motion.img
                                    variants={HandimageVariants}
                                    src={hand} 
                                    initial='hidden'
                                    animate={handleAnimate ? 'visible' : 'heddin'}
                                    alt="hero middle img"/>
                                </div>
                                <div className='hero-main-img'>  
                                    <div></div>     
                                    <motion.img 
                                    variants={handleAnimateClick ? RightimageVariants1 : RightimageVariants}
                                    initial='hidden'
                                    animate={handleAnimate ? 'visible' : 'heddin'}
                                    src={mainHeroimg} 
                                    ref={mainRightImage}
                                    data-environment-rightImage={mainHeroimg}
                                    data-protection-rightImage={testImg}
                                    data-shelter-rightImage={testImg}
                                    data-nutrition-rightImage={testImg}
                                    data-orphan-sponsorship-rightImage={testImg}
                                    data-food-rightImage={testImg}
                                    data-health-rightImage={testImg}
                                    data-education-rightImage={testImg}
                                    data-w-a-s-h-rightImage={testImg}
                                    data-non-food-items-rightImage={testImg}
                                    alt="hero right img" />
                                </div>
                        </div>
                    </div>
                    <div className='animation-remotecontrol'>
                        <div className="container">
                            <div className="container col-10">
                                <div className={iconId === 1 ? "environment active" : "environment box-style"} onClick={() => (handleIconClick(1),  setHandleAnimate(false))} id='donate-option'>
                                    <div>
                                        <div className='circle'></div>
                                        <HeroSvgicon2 />
                                    </div>
                                    <p>Environment</p>
                                </div>
                                <div className={iconId === 2 ? "protection active" : "protection box-style"} onClick={() => (handleIconClick(2),  setHandleAnimate(false))} id='donate-option'>
                                    <div>
                                        <div className='circle'></div>
                                        <HeroSvgicon3 />
                                    </div>
                                    <p>Protection</p>
                                </div>
                                <div className={iconId === 3 ? "shelter active" : "shelter box-style"} onClick={() => handleIconClick(3)} id='donate-option'>
                                    <div>
                                        <div className='circle'></div>
                                        <HeroSvgicon4 />
                                    </div>
                                    <p>Shelter</p>
                                </div>
                                <div className={iconId === 4 ? "nutrition active" : "nutrition box-style"} onClick={() => handleIconClick(4)} id='donate-option'>
                                    <div>
                                        <div className='circle'></div>
                                        <HeroSvgicon5 />
                                    </div>
                                    <p>Nutrition</p>
                                </div>
                                <div className={iconId === 5 ? "orphan-sponsorship active" : "orphan-sponsorship box-style"} onClick={() => handleIconClick(5)} id='donate-option'>
                                    <div>
                                        <div className='circle'></div>
                                        <HeroSvgicon6 />
                                    </div>
                                    <p>Orphan 
                                    sponsorship</p>
                                </div>
                                <div className={iconId === 6 ? "food active" : "food box-style"} onClick={() => handleIconClick(6)} id='donate-option'>
                                    <div>
                                        <div className='circle'></div>
                                        <HeroSvgicon7 />
                                    </div>
                                    <p>Food</p>
                                </div>
                                <div className={iconId === 7 ? "health active" : "health box-style"} onClick={() => handleIconClick(7)} id='donate-option'>
                                    <div>
                                        <div className='circle'></div>
                                        <HeroSvgicon8 />
                                    </div>
                                    <p>Health</p>
                                </div>
                                <div className={iconId === 8 ? "education active" : "education box-style"} onClick={() => handleIconClick(8)} id='donate-option'>
                                    <div>
                                        <div className='circle'></div>
                                        <HeroSvgicon9 />
                                    </div>
                                    <p>Education</p>
                                </div>
                                <div className={iconId === 9 ? "w-a-s-h active" : "w-a-s-h box-style"} onClick={() => handleIconClick(9)} id='donate-option'>
                                    <div>
                                        <div className='circle'></div>
                                        <HeroSvgicon10 />
                                    </div>
                                    <p>W.A.S.H</p>
                                </div>
                                <div className={iconId === 10 ? "non-food-items active" : "non-food-items box-style"} onClick={() => handleIconClick(10)} id='donate-option'>
                                    <div>
                                        <div className='circle'></div>
                                        <HeroSvgicon11 />
                                    </div>
                                    <p>Non-Food Items</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="aboutus-section">
                        <div className="container">
                            <div className="container col-10">
                                <div className='about'>
                                    <div className='about-text-video'>
                                        <h1 className='h1-styles'>ABOUT <span>US</span></h1>
                                        <h4>YOUR SUPPORT CAN <br />
                                        HELP US A LOT</h4>
                                        <p>WE ARE A NON-PROFIT ORGANISATION IN USA THAT WORKS TOWARDS
                                        SUPPORTING UNDERPRIVILEGED CHILDREN REACH THEIR FULL POTENTIAL
                                        - PHYSICAL, MENTAL AS WELL AS EMOTIONAL.</p>
                                        <ul>
                                            <li><i className="fa-solid fa-check"></i> IF YOU WANT TO CHANGE THE WORLD</li>
                                            <li><i className="fa-solid fa-check"></i> KEEP THE SAME CLEANER FOR EVERY VISIT</li>
                                            <li><i className="fa-solid fa-check"></i> ONE-OFF, WEEKLY OR FORTNIGHTLY VISITS</li>
                                        </ul>
                                        <div className='video'>
                                            <ModalVideo channel='youtube' autoplay isOpen={videoIsOpen} videoId="X9uLXfjpzho" onClose={() => setVideoIsOpen(false)} />
                                            <button className="btn-primary" onClick={()=> setVideoIsOpen(true)}><i className="fa-solid fa-circle-play"></i></button>
                                            <h6><span>Watch</span> demo <br /> video</h6>
                                        </div>
                                    </div>
                                    <div className='about-images'>
                                        <div><img src={testImg} alt="img" /></div>
                                        <div><img src={mainHeroimg} alt="img" /></div>
                                        <div><img src={testImage} alt="img" /></div>
                                    </div>
                                </div>
                                <div className='success-stories'>
                                    <div className='success-stories-text'>
                                        <h1>SUCCESS STORIES</h1>
                                        <p>Sed ut perspiciatis, unde omnis iste natus
                                        error sit voluptatem accusantium
                                        doloremque laudantium, totam rem aperiam
                                        eaque ipsa, quae ab illo inventore veritatis et
                                        quasi architecto beatae vitae dicta sunt,</p>
                                        <button>Read More <i class="fa-solid fa-angles-right"></i></button>
                                    </div>
                                    <div className='success-stories-video'>
                                        <div>
                                            <video controls >
                                                <source src="https://www.youtube.com/watch?v=X9uLXfjpzho" type="video/mp4"/>
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="best_moment">
                        <div className="container">
                            <div className="container col-10">
                                <h1>BEST MOMENT IN OUR LIFE</h1>
                                <p><i class="fa-solid fa-chevron-right"></i></p>
                                <ReactBeforeSliderComponent
                                    firstImage={FIRST_IMAGE}
                                    secondImage={SECOND_IMAGE}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Homepage