import React, { useState, useRef, useEffect } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import hand from '../Assets/images/handimg.png'
import mainHeroimg from '../Assets/images/hero-main-img.png'
import testImg from '../Assets/images/test-12.jpg'
// import svgicon from '../Assets/svgs/icon-02.svg'
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


const Homepage = () => {

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
    const [iconId, setIconId] = useState(1)
    const [handleAnimate, setHandleAnimate] = useState(true)

    const handleIconClick = (id) => {
        setIconId(id)
        if (id === 1) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-environment-image")
            setHandleAnimate(false)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 2) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-protection-image")
            setHandleAnimate(false)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 3) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-shelter-image")
        } else if (id === 4) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-nutrition-image")
        } else if (id === 5) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-orphan-sponsorship-image")
        } else if (id === 6) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-food-image")
        } else if (id === 7) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-health-image")
        } else if (id === 8) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-education-image")
        } else if (id === 9) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-w-a-s-h-image")
        } else if (id === 10) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-non-food-items-image")
        }
    }

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
                                        animate='visible'
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
                                    animate='visible'
                                    alt="hero middle img"/>
                                </div>
                                <div className='hero-main-img'>  
                                    <div></div>     
                                    <motion.img 
                                    variants={RightimageVariants}
                                    initial='hidden'
                                    animate={handleAnimate ? 'visible' : 'heddin'}
                                    src={mainHeroimg} 
                                    ref={mainRightImage}
                                    data-environment-image={mainHeroimg}
                                    data-protection-image={testImg}
                                    data-shelter-image={testImg}
                                    data-nutrition-image={testImg}
                                    data-orphan-sponsorship-image={testImg}
                                    data-food-image={testImg}
                                    data-health-image={testImg}
                                    data-education-image={testImg}
                                    data-w-a-s-h-image={testImg}
                                    data-non-food-items-image={testImg}
                                    alt="hero right img" />
                                </div>
                        </div>
                    </div>
                    <div className='animation-remotecontrol'>
                            <div className="container">
                                <div className="container col-10">
                                    <div className={iconId === 1 ? "environment active" : "environment"} onClick={() => (handleIconClick(1),  setHandleAnimate(false))} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon2 />
                                        </div>
                                        <p>Environment</p>
                                    </div>
                                    <div className={iconId === 2 ? "protection active" : "protection"} onClick={() => (handleIconClick(2),  setHandleAnimate(false))} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon3 />
                                        </div>
                                        <p>Protection</p>
                                    </div>
                                    <div className={iconId === 3 ? "shelter active" : "shelter"} onClick={() => handleIconClick(3)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon4 />
                                        </div>
                                        <p>Shelter</p>
                                    </div>
                                    <div className={iconId === 4 ? "nutrition active" : "nutrition"} onClick={() => handleIconClick(4)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon5 />
                                        </div>
                                        <p>Nutrition</p>
                                    </div>
                                    <div className={iconId === 5 ? "orphan-sponsorship active" : "orphan-sponsorship"} onClick={() => handleIconClick(5)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon6 />
                                        </div>
                                        <p>Orphan sponsorship</p>
                                    </div>
                                    <div className={iconId === 6 ? "food active" : "food"} onClick={() => handleIconClick(6)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon7 />
                                        </div>
                                        <p>Food</p>
                                    </div>
                                    <div className={iconId === 7 ? "health active" : "health"} onClick={() => handleIconClick(7)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon8 />
                                        </div>
                                        <p>Health</p>
                                    </div>
                                    <div className={iconId === 8 ? "education active" : "education"} onClick={() => handleIconClick(8)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon9 />
                                        </div>
                                        <p>Education</p>
                                    </div>
                                    <div className={iconId === 9 ? "w-a-s-h active" : "w-a-s-h"} onClick={() => handleIconClick(9)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon10 />
                                        </div>
                                        <p>W.A.S.H</p>
                                    </div>
                                    <div className={iconId === 10 ? "non-food-items active" : "non-food-items"} onClick={() => handleIconClick(10)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon11 />
                                        </div>
                                        <p>Non-Food Items</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            {/* <Footer /> */}
        </>
    )
}

export default Homepage