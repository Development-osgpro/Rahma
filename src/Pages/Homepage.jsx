import React, { useState, useRef, useEffect } from 'react'
import SLider from "react-slick"

// import navbar and footer
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Zoom from 'react-img-zoom'
import supportlogo from '../Assets/images/unnamed.jpg'


// importing some testing images
import hand from '../Assets/images/handimg.png'
import mainHeroimg from '../Assets/images/hero-main-img.png'
import testImg from '../Assets/images/test-12.jpg'
import testImage from '../Assets/images/imagetest-01.jpg'
import afterImg from "../Assets/images/after-before-slider-01.jpg"
import beforeImg from "../Assets/images/after-before-slider-02.jpg"
import child from "../Assets/images/child.jpg"
import bulls from '../Assets/svgs/all-icons/bulls.svg'
import girl from '../Assets/images/girlmage.jpg'
import support3 from '../Assets/images/supportedBy-03.jpg'
import support4 from '../Assets/images/supportedBy-04.jpg'
import pngTestIMage from '../Assets/images/orphan.png'

import { FreeMode, Pagination, Navigation } from "swiper";
// importing hero svgs
import { ReactComponent as HeroSvgicon2 } from '../Assets/svgs/all-icons/icon-02.svg'
import { ReactComponent as HeroSvgicon3 } from '../Assets/svgs/all-icons/newIcons-06.svg'
import { ReactComponent as HeroSvgicon4 } from '../Assets/svgs/all-icons/newIcons-07.svg'
import { ReactComponent as HeroSvgicon5 } from '../Assets/svgs/all-icons/newIcons-08.svg'
import { ReactComponent as HeroSvgicon6 } from '../Assets/svgs/all-icons/newIcons-09.svg'
import { ReactComponent as HeroSvgicon7 } from '../Assets/svgs/all-icons/icon-07.svg'
import { ReactComponent as HeroSvgicon8 } from '../Assets/svgs/all-icons/newIcons-10.svg'
import { ReactComponent as HeroSvgicon9 } from '../Assets/svgs/all-icons/newIcons-11.svg'
import { ReactComponent as HeroSvgicon10 } from '../Assets/svgs/all-icons/newIcons-12.svg'
import { ReactComponent as HeroSvgicon11 } from '../Assets/svgs/all-icons/icon-11.svg'

import { ReactComponent as Icon1 } from '../Assets/svgs/all-icons/socialIcons-05.svg'
import { ReactComponent as Icon2 } from '../Assets/svgs/all-icons/socialIcons-06.svg'
import { ReactComponent as Icon3 } from '../Assets/svgs/all-icons/socialIcons-07.svg'
import { ReactComponent as Icon4 } from '../Assets/svgs/all-icons/socialIcons-08.svg'

// importing framer motion 
import { motion } from "framer-motion"
import { Swiper, SwiperSlide  } from "swiper/react";
import ModalVideo from 'react-modal-video'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

// importing swiper js 
// import "swiper/css/free-mode";
// importing mui 
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
// import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
// import SpeedDialAction from '@mui/material/SpeedDialAction';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';

// importing the map
import MapChart from '../MapChart'
import { ReactComponent as Map1icon } from '../Assets/svgs/all-icons/map-icons-01.svg'
import { ReactComponent as Map2icon } from '../Assets/svgs/all-icons/map-icons-02.svg'
import MapComponent from '../MapJs/MapComponent'
import DonateBtnAndsocialMedia from '../Components/DonateBtnAndsocialMedia'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'

import SwiperCore, { Autoplay } from 'swiper'
import ChartComponent from '../Components/ChartComponent'

const Homepage = () => {

    SwiperCore.use([Autoplay])
    const [clicked, setClicked] = useState(false)
    const [clickedInfo, setClickedInfo] = useState(false)
    const [showMapInfo, setShowMapInfo] = useState(false)
    const [countyName, setCountyName] = useState('')
    console.log(showMapInfo)

    useEffect(() => {

        const US = document.getElementById('US')
        const JO = document.getElementById('JO')
        const LB = document.getElementById('LB')
        const PS = document.getElementById('PS')
        const SY = document.getElementById('SY')
        const TR = document.getElementById('TR')
        const YE = document.getElementById('YE')
        const ML = document.getElementById('ML')
        const GH = document.getElementById('GH')
        const CM = document.getElementById('CM')
        const TD = document.getElementById('TD')
        const SD = document.getElementById('SD')
        const KE = document.getElementById('KE')
        const SL = document.getElementById('SL')

        var AllCOUNTRYS = [US, JO, LB, PS, SY, TR, YE, ML, GH, TD, CM, SD, KE, SL]

        AllCOUNTRYS.forEach(country => {

            country.addEventListener('click', () => {
                AllCOUNTRYS.forEach(ele => {
                    ele.classList.remove("active");
                })
                country.classList.add("active")
            })

            country.onclick = () => {
                console.log(country.getAttribute('data-name'))
                setClicked(true)
                console.log(clicked)
                setTimeout(() => {
                    setShowMapInfo(true)
                    setClickedInfo(true)
                }, 1000);
                setCountyName(country.getAttribute('data-name'))
            }
        })
    }, [])

    useEffect(() => {
        setClickedInfo(false)
        setTimeout(() => {
            setClickedInfo(true)
        }, 500);
    }, [countyName])
    

    // all map variants
    const MapContainerAnimate = {
        hidden: { width: `${100}%`},
        visible: {
            width: `${55}%`,
            transition: { duration : 1, ease: 'easeInOut', },
        }
    }

    const maph1animation = {
        hidden: { opacity: 0 , y: -50},
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration : 1, ease: 'easeInOut', },
        }
    }

    const mapbuttonanimation = {
        hidden: { opacity: 0 , y: 50},
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration : 1, ease: 'easeInOut', },
        }
    }
    
    const mapContextAnimation1 = {
        hidden: { opacity: 0 , x: 100},
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration : .2, ease: 'easeInOut', },
        }
    }

    const mapContextAnimation2 = {
        hidden: { opacity: 0 , x: 100},
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration : .4, ease: 'easeInOut', },
        }
    }

    const mapContextAnimation3 = {
        hidden: { opacity: 0 , x: 100},
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration : .6, ease: 'easeInOut', },
        }
    }

    const mapContextAnimation4 = {
        hidden: { opacity: 0 , x: 100},
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration : .8, ease: 'easeInOut', },
        }
    }

    // framer motion variants
    const HandimageVariants = {
        hidden: { opacity: 0 , y: 200},
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration : 2, ease: 'easeInOut', },
        }
    }

    // framer motion variants
    const RightimageVariants = {
        hidden: { opacity: 0 , x: 100},
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration : 3},
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
        hidden: { opacity: 0 , y: -50},
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration : 1 ,ease: 'easeInOut' },
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

    // // handle all hero animations
    const mainRightImage = useRef();
    const mainH4Title = useRef();
    const handImage = useRef();
    const [iconId, setIconId] = useState(1)
    const [handleAnimate, setHandleAnimate] = useState(true)
    const [handleAnimateClick, setHandleAnimateClick] = useState(false)

    const handleIconClick = (id) => {
        setIconId(id)
        if (id === 1) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-environment-rightImage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-environment-h4")
            handImage.current.src = handImage.current.getAttribute("data-environment-handImage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 2) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-protection-rightImage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-protection-h4")
            handImage.current.src = handImage.current.getAttribute("data-protection-handImage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 3) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-shelter-rightImage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-shelter-h4")
            handImage.current.src = handImage.current.getAttribute("data-shelter-handImage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 4) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-nutrition-rightImage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-nutrition-h4")
            handImage.current.src = handImage.current.getAttribute("data-nutrition-handImage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 5) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-orphan-sponsorship-rightImage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-orphan-sponsorship-h4")
            handImage.current.src = handImage.current.getAttribute("data-orphan-sponsorship-handImage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 6) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-food-rightImage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-food-h4")
            handImage.current.src = handImage.current.getAttribute("data-food-handImage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 7) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-health-rightImage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-health-h4")
            handImage.current.src = handImage.current.getAttribute("data-health-handImage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 8) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-education-rightImage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-education-h4")
            handImage.current.src = handImage.current.getAttribute("data-environment-handImage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 9) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-w-a-s-h-rightImage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-w-a-s-h-h4")
            handImage.current.src = handImage.current.getAttribute("data-w-a-s-h-handImage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 10) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-non-food-items-rightImage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-non-food-items-h4")
            handImage.current.src = handImage.current.getAttribute("data-non-food-items-handImage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        }
    }

    const [content, setContent] = useState("");
    const [videoIsOpen, setVideoIsOpen] = useState(false)

    // map importing
    const Testcomp = ({ content }) => {
        return (
            <h1 style={{ position: "absolute", top: "0", left: "0" }}>
                {content}
            </h1>
        )
    }

    const FIRST_IMAGE = {
        imageUrl: afterImg
    };
    const SECOND_IMAGE = {
        imageUrl: beforeImg
    };

    const [windosY, setWindowY] = useState()
    window.addEventListener('scroll', () => {
        setWindowY(window.scrollY)
    })

    // campaigns
    const [slideIndex, setSlideIndex] = useState(null)
    const camp_h2 = useRef()
    const camp_p_first = useRef()
    const camp_p_second = useRef()
    const camp_p_third = useRef()
    const camp_p_country = useRef()
    const camp_p_date = useRef()

    const handleCampaignsSlideChanges = () => {
        if(slideIndex === 0) {
            camp_h2.current.textContent = camp_h2.current.getAttribute('data-h2-camp-one')
        } else if (slideIndex === 1) {
            camp_h2.current.textContent = camp_h2.current.getAttribute('data-h2-camp-tow')
        }
    }
    handleCampaignsSlideChanges()

    return (
        <>
            <NavBar />
                {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
                <div className="homepage">
                    <div className="hero-section">
                        <div className='animation-screen'>
                            <div className='container'>
                                <div className='donate-now'>       
                                    <motion.h4
                                    variants={TextHeroVariants}
                                    initial='hidden'
                                    animate={handleAnimate ? 'visible' : 'heddin'}
                                    ref={mainH4Title}
                                    data-environment-h4={'BEST CHARITY FOR REFUGEES THAT’S MAKING A DIFFERENCE!'}
                                    data-protection-h4={'lorem lorem lorem lorem lorem lorem lorem lorem 1111'}
                                    data-shelter-h4={'lorem lorem lorem lorem lorem lorem lorem lorem 2222'}
                                    data-nutrition-h4={'lorem lorem lorem lorem lorem lorem lorem lorem 3333'}
                                    data-orphan-sponsorship-h4={'lorem lorem lorem lorem lorem lorem lorem lorem 4444'}
                                    data-food-h4={'lorem lorem lorem lorem lorem lorem lorem lorem 5555'}
                                    data-health-h4={'lorem lorem lorem lorem lorem lorem lorem lorem 6666'}
                                    data-education-h4={'lorem lorem lorem lorem lorem lorem lorem lorem 7777'}
                                    data-w-a-s-h-h4={'lorem lorem lorem lorem lorem lorem lorem lorem 8888'}
                                    data-non-food-items-h4={'lorem lorem lorem lorem lorem lorem lorem lorem 99999'}
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
                                <div className='hero-hand-img'>       
                                    <motion.img
                                    variants={HandimageVariants}
                                    initial='hidden'
                                    animate={handleAnimate ? 'visible' : 'heddin'}
                                    src={hand} 
                                    ref={handImage}
                                    data-environment-handImage={hand}
                                    data-protection-handImage={pngTestIMage}
                                    data-shelter-handImage={testImg}
                                    data-nutrition-handImage={testImg}
                                    data-orphan-sponsorship-handImage={testImg}
                                    data-food-handImage={testImg}
                                    data-health-handImage={testImg}
                                    data-education-handImage={testImg}
                                    data-w-a-s-h-handImage={testImg}
                                    data-non-food-items-handImage={testImg}
                                    alt="hero middle img"
                                    />
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
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                freeMode={false}
                                modules={[FreeMode]}
                                className="mySwiper"
                                simulateTouch={false}
                            >
                                <SwiperSlide>
                                    <div className={iconId === 1 ? "boxbeforestyle environment active" : "environment box-style"} onClick={() => (handleIconClick(1),  setHandleAnimate(false))} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon2 />
                                        </div>
                                        <p>Environment</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={iconId === 2 ? "boxbeforestyle protection active" : "protection box-style"} onClick={() => (handleIconClick(2),  setHandleAnimate(false))} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon3 />
                                        </div>
                                        <p>Protection</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={iconId === 3 ? "boxbeforestyle shelter active" : "shelter box-style"} onClick={() => handleIconClick(3)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon4 />
                                        </div>
                                        <p>Shelter</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={iconId === 4 ? "boxbeforestyle nutrition active" : "nutrition box-style"} onClick={() => handleIconClick(4)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon5 />
                                        </div>
                                        <p>Nutrition</p>
                                    </div>
                                </SwiperSlide>  
                                <SwiperSlide>
                                    <div className={iconId === 5 ? "boxbeforestyle orphan-sponsorship active" : "orphan-sponsorship box-style"} onClick={() => handleIconClick(5)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon6 />
                                        </div>
                                        <p>Orphan 
                                        sponsorship</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={iconId === 6 ? "boxbeforestyle food active" : "food box-style"} onClick={() => handleIconClick(6)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon7 />
                                        </div>
                                        <p>Food</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={iconId === 7 ? "boxbeforestyle health active" : "health box-style"} onClick={() => handleIconClick(7)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon8 />
                                        </div>
                                        <p>Health</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={iconId === 8 ? "boxbeforestyle education active" : "education box-style"} onClick={() => handleIconClick(8)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon9 />
                                        </div>
                                        <p>Education</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={iconId === 9 ? "boxbeforestyle w-a-s-h active" : "w-a-s-h box-style"} onClick={() => handleIconClick(9)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon10 />
                                        </div>
                                        <p>W.A.S.H</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={iconId === 10 ? "boxbeforestyle non-food-items active" : "non-food-items box-style"} onClick={() => handleIconClick(10)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon11 />
                                        </div>
                                        <p>Non-Food Items</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            {/* <SLider {...settings}>
                                <div>
                                    <div className={iconId === 1 ? "boxbeforestyle environment active" : "environment box-style"} onClick={() => (handleIconClick(1),  setHandleAnimate(false))} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon2 />
                                        </div>
                                        <p>Environment</p>
                                    </div>
                                </div>
                                <div>
                                    <div className={iconId === 2 ? "boxbeforestyle protection active" : "protection box-style"} onClick={() => (handleIconClick(2),  setHandleAnimate(false))} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon3 />
                                        </div>
                                        <p>Protection</p>
                                    </div>
                                </div>
                                <div>
                                    <div className={iconId === 3 ? "boxbeforestyle shelter active" : "shelter box-style"} onClick={() => handleIconClick(3)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon4 />
                                        </div>
                                        <p>Shelter</p>
                                    </div>
                                </div>
                                <div>
                                    <div className={iconId === 4 ? "boxbeforestyle nutrition active" : "nutrition box-style"} onClick={() => handleIconClick(4)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon5 />
                                        </div>
                                        <p>Nutrition</p>
                                    </div>
                                </div>  
                                <div>
                                    <div className={iconId === 5 ? "boxbeforestyle orphan-sponsorship active" : "orphan-sponsorship box-style"} onClick={() => handleIconClick(5)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon6 />
                                        </div>
                                        <p>Orphan 
                                        sponsorship</p>
                                    </div>
                                </div>
                                <div>
                                    <div className={iconId === 6 ? "boxbeforestyle food active" : "food box-style"} onClick={() => handleIconClick(6)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon7 />
                                        </div>
                                        <p>Food</p>
                                    </div>
                                </div>
                                <div>
                                    <div className={iconId === 7 ? "boxbeforestyle health active" : "health box-style"} onClick={() => handleIconClick(7)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon8 />
                                        </div>
                                        <p>Health</p>
                                    </div>
                                </div>
                                <div>
                                    <div className={iconId === 8 ? "boxbeforestyle education active" : "education box-style"} onClick={() => handleIconClick(8)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon9 />
                                        </div>
                                        <p>Education</p>
                                    </div>
                                </div>
                                <div>
                                    <div className={iconId === 9 ? "boxbeforestyle w-a-s-h active" : "w-a-s-h box-style"} onClick={() => handleIconClick(9)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon10 />
                                        </div>
                                        <p>W.A.S.H</p>
                                    </div>
                                </div>
                                <div>
                                    <div className={iconId === 10 ? "boxbeforestyle non-food-items active" : "non-food-items box-style"} onClick={() => handleIconClick(10)} id='donate-option'>
                                        <div>
                                            <div className='circle'></div>
                                            <HeroSvgicon11 />
                                        </div>
                                        <p>Non-Food Items</p>
                                    </div>
                                </div>
                            </SLider> */}
                        </div>
                    </div>

                    <div className="aboutus-section">
                        <div className="container">
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

                    <div className="best_moment">
                        <div className="container">
                            <h1>BEST MOMENT IN OUR LIFE</h1>
                            <p><i class="fa-solid fa-chevron-right"></i></p>
                            <ReactBeforeSliderComponent
                                firstImage={FIRST_IMAGE}
                                secondImage={SECOND_IMAGE}
                            />
                        </div>
                    </div>

                    <div className="our-causes">
                        <div className="container">
                            <div className='our-text'>
                                <h4>OUR CAUSES</h4>
                                <h1 className='h1-styles'>SUPPORT OUR <span>CAUSE</span></h1>
                            </div>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                                breakpoints={{
                                    // when window width is >= 640px
                                    280: {
                                        slidesPerView: 1
                                    },
                                    // when window width is >= 768px
                                    768: {
                                        slidesPerView: 2
                                    },
                                    // when window width is >= 992px
                                    992: {
                                        slidesPerView: 3
                                    },
                                }}
                            >
                                <SwiperSlide className='the-swiper-slide'>
                                    <div className='cause'>
                                        <div className='image-holder'>
                                            <img src={beforeImg} alt="children img" />
                                            <span>Protection</span>
                                        </div>
                                        <div className='context'>
                                            <h4>SAVE THE CHILDREN FROM</h4>
                                            <p>WE ARE A NON-PROFIT
                                            ORGANISATION IN USA THAT WORKS
                                            TOWARDS SUPPORTING
                                            UNDERPRIVILEGED CHILDREN REACH
                                            THEIR FULL POTENTIAL - PHYSICAL,
                                            </p>
                                            <hr />
                                            <Box width={300}>
                                                <Slider defaultValue={20} aria-label="Always visible" valueLabelDisplay="on" disabled={true}/>
                                            </Box>
                                            <div className='raised-goal'>
                                                <p>RAISED : $900 </p>
                                                <p>GOAL : $900</p>
                                            </div>
                                            <div className='heddin-massage'>
                                                <p>When you go to sleep remember who has 
                                                nowhere to sleep
                                                </p>        
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='the-swiper-slide'>
                                    <div className='cause'>
                                        <div className='image-holder'>
                                            <img src={afterImg} alt="children img" />
                                            <span>Protection</span>
                                        </div>
                                        <div className='context'>
                                            <h4>SAVE THE CHILDREN FROM</h4>
                                            <p>WE ARE A NON-PROFIT
                                            ORGANISATION IN USA THAT WORKS
                                            TOWARDS SUPPORTING
                                            UNDERPRIVILEGED CHILDREN REACH
                                            THEIR FULL POTENTIAL - PHYSICAL,
                                            </p>
                                            <hr />
                                            <Box width={300}>
                                                <Slider defaultValue={50} aria-label="Always visible" valueLabelDisplay="on" disabled={true}/>
                                            </Box>
                                            <div className='raised-goal'>
                                                <p>RAISED : $900 </p>
                                                <p>GOAL : $900</p>
                                            </div>
                                            <div className='heddin-massage'>
                                                <p>When you go to sleep remember who has 
                                                nowhere to sleep
                                                </p>        
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='the-swiper-slide'>
                                    <div className='cause'>
                                        <div className='image-holder'>
                                            <img src={testImage} alt="children img" />
                                            <span>Protection</span>
                                        </div>
                                        <div className='context'>
                                            <h4>SAVE THE CHILDREN FROM</h4>
                                            <p>WE ARE A NON-PROFIT
                                            ORGANISATION IN USA THAT WORKS
                                            TOWARDS SUPPORTING
                                            UNDERPRIVILEGED CHILDREN REACH
                                            THEIR FULL POTENTIAL - PHYSICAL,
                                            </p>
                                            <hr />
                                            <Box width={300}>
                                                <Slider defaultValue={80} aria-label="Always visible" valueLabelDisplay="on" disabled={true}/>
                                            </Box>
                                            <div className='raised-goal'>
                                                <p>RAISED : $900 </p>
                                                <p>GOAL : $900</p>
                                            </div>
                                            <div className='heddin-massage'>
                                                <p>When you go to sleep remember who has 
                                                nowhere to sleep
                                                </p>        
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='the-swiper-slide'>
                                    <div className='cause'>
                                        <div className='image-holder'>
                                            <img src={testImage} alt="children img" />
                                            <span>Protection</span>
                                        </div>
                                        <div className='context'>
                                            <h4>SAVE THE CHILDREN FROM</h4>
                                            <p>WE ARE A NON-PROFIT
                                            ORGANISATION IN USA THAT WORKS
                                            TOWARDS SUPPORTING
                                            UNDERPRIVILEGED CHILDREN REACH
                                            THEIR FULL POTENTIAL - PHYSICAL,
                                            </p>
                                            <hr />
                                            <Box width={300}>
                                                <Slider defaultValue={80} aria-label="Always visible" valueLabelDisplay="on" disabled={true}/>
                                            </Box>
                                            <div className='raised-goal'>
                                                <p>RAISED : $900 </p>
                                                <p>GOAL : $900</p>
                                            </div>
                                            <div className='heddin-massage'>
                                                <p>When you go to sleep remember who has 
                                                nowhere to sleep
                                                </p>        
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                    <div className="campaingns">
                        <div className="container">
                            <section className='campaingns-container'>
                                <div className='campaingns-img-slider'>
                                    <h3>CAMPAIGNS</h3>
                                    <Swiper
                                        cssMode={true}
                                        navigation={true}
                                        pagination={true}
                                        mousewheel={true}
                                        keyboard={true}
                                        modules={[Pagination, Navigation]}
                                        className="mySwiper"
                                        onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
                                    >
                                        <SwiperSlide><img src={child} alt="child img" /></SwiperSlide>
                                        <SwiperSlide><img src={child} alt="child img" /></SwiperSlide>
                                        <SwiperSlide><img src={child} alt="child img" /></SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className='context'>
                                    <img src={bulls} alt="small bulls img" />
                                    <h2
                                        data-h2-camp-one='WEALTH AND HEALTH 111'
                                        data-h2-camp-tow='WEALTH AND HEALTH 222'
                                        ref={camp_h2}
                                    >WEALTH AND HEALTH</h2>
                                    <p
                                        data-first-p-camp-one='MONTREAL, QC. 111'
                                        data-first-p-camp-tow='MONTREAL, QC. 222'
                                        ref={camp_p_first}
                                    >MONTREAL, QC.</p>
                                    <p
                                        data-second-p-camp-one='WEALTH AND HEALTH 111'
                                        data-second-p-camp-tow='WEALTH AND HEALTH 222'
                                        ref={camp_p_second}
                                    >Donec varius sodales orci. Class aptent taciti
                                    sociosqu torquent, per inceptos himenaeos.
                                    End of content. Aenean arcu viverra varius
                                    sodales sociosqu torquent, per inceptos
                                    himenaeos.</p>
                                    <p
                                        data-third-p-camp-one='Aenean arcu viverra varius sodales sociosqu
                                                                torquent, per inceptos himenaeos.Donec
                                                                varius sodales orci. Class aptent taciti
                                                                sociosqu torquent, per inceptos himenaeos.
                                                                End of content. 111'
                                        data-third-p-camp-tow='Aenean arcu viverra varius sodales sociosqu
                                                                torquent, per inceptos himenaeos.Donec
                                                                varius sodales orci. Class aptent taciti
                                                                sociosqu torquent, per inceptos himenaeos.
                                                                End of content. 222'
                                        ref={camp_p_third}
                                    >Aenean arcu viverra varius sodales sociosqu
                                    torquent, per inceptos himenaeos.Donec
                                    varius sodales orci. Class aptent taciti
                                    sociosqu torquent, per inceptos himenaeos.
                                    End of content.</p>
                                    <div>
                                        <div>
                                            <p
                                                data-country-p-camp-one='JORDAN 111'
                                                data-country-p-camp-tow='JORDAN 222'
                                                ref={camp_p_country}
                                            ><i class="fa-solid fa-location-dot"></i> JORDAN</p>
                                            <p
                                                data-date-p-camp-one='26 Oct at 3:32 pm 111'
                                                data-date-p-camp-tow='26 Oct at 3:32 pm 222'
                                                ref={camp_p_date}
                                            ><i class="fa-solid fa-calendar-days"></i> 26 Oct at 3:32 pm</p>
                                        </div>
                                        <button>Learn More</button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="our-latest-news">
                        <div className="container">
                            <div>
                                <h1 className='h1-styles'>OUR LATEST <span>NEWS</span></h1>
                            </div>
                            <section className='our-latest'>
                                <div className='context'>
                                    <h6>“SKILLS OF EVALUATING FOREIGN
                                    FUNDING” COURSES HELD IN
                                    JORDAN</h6>
                                    <span><span>JORDAN</span> - 26 Oct at 3:32 pm</span>
                                    <p>Rahma Worldwide collaborated with
                                    the Department of Foreign Societies
                                    at the Jordanian 
                                    Ministry of Social Development, held
                                    a workshop entitled “Skills of
                                    Evaluating Foreign Funding”
                                    which revolved around the
                                    legislation and governing foreign 
                                    funding and the mechanism 
                                    of its application for organizations
                                    operating in Jordan. Rahma
                                    Worldwide’s Representative
                                    in Jordan…</p>
                                    <figure></figure>
                                </div>
                                <div className="img-slider">
                                    <Swiper
                                        cssMode={true}
                                        navigation={true}
                                        pagination={true}
                                        mousewheel={true}
                                        keyboard={true}
                                        modules={[Navigation, Pagination]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide><img src={girl} alt="child img" /></SwiperSlide>
                                        <SwiperSlide><img src={girl} alt="child img" /></SwiperSlide>
                                        <SwiperSlide><img src={girl} alt="child img" /></SwiperSlide>
                                    </Swiper>
                                    <button><i class="fa-solid fa-arrow-right"></i> READ MORE</button>
                                </div>
                                <div className='social-media-filter'>
                                <div className='social-media'>
                                    <div className='social-icons'>
                                        <div><i className="fa-brands fa-facebook-f"></i></div>
                                        <div><i className="fa-brands fa-twitter"></i></div>
                                        <div><i className="fa-brands fa-instagram"></i></div>
                                        <div><i className="fa-brands fa-youtube"></i></div>
                                    </div>
                                        <div className='social-box'>
                                            <img src={child} alt="img"/>
                                            <div>
                                                <div>
                                                    <span>SYRIA</span>
                                                    <br />
                                                    <b>Agricultural Nursery Project Continues in Syria</b>
                                                    <p>Rahma Worldwide collaborated with the Department of Foreign 
                                                    Societies at the Jordanian Ministry of Social Development, 
                                                    held a workshop entitled “Skills of Evaluating Foreign Funding” 
                                                    which revolved</p>
                                                </div>
                                                <div>
                                                    <span>26 Oct at 3:32 pm</span>
                                                    <button><i class="fa-solid fa-arrow-right-long"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='social-box'>
                                            <img src={child} alt="img"/>
                                            <div>
                                                <div>
                                                    <span>SYRIA</span>
                                                    <br />
                                                    <b>Agricultural Nursery Project Continues in Syria</b>
                                                    <p>Rahma Worldwide collaborated with the Department of Foreign 
                                                    Societies at the Jordanian Ministry of Social Development, 
                                                    held a workshop entitled “Skills of Evaluating Foreign Funding” 
                                                    which revolved </p>
                                                </div>
                                                <div>
                                                    <span>26 Oct at 3:32 pm</span>
                                                    <button><i class="fa-solid fa-arrow-right-long"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='social-box'>
                                            <img src={child} alt="img"/>
                                            <div>
                                                <div>
                                                    <span>SYRIA</span>
                                                    <br />
                                                    <b>Agricultural Nursery Project Continues in Syria</b>
                                                    <p>Rahma Worldwide collaborated with the Department of Foreign 
                                                    Societies at the Jordanian Ministry of Social Development, 
                                                    held a workshop entitled “Skills of Evaluating Foreign Funding” 
                                                    which revolved </p>
                                                </div>
                                                <div>
                                                    <span>26 Oct at 3:32 pm</span>
                                                    <button><i class="fa-solid fa-arrow-right-long"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="map-world"  style={{position: 'relative'}}>
                        <div className="container">
                            <div>
                                <h3>WORLD MAP SHOWS SOME OF OUR CURRENT</h3>
                                <h4>WORK AROUND THE WORLD</h4>
                                <h5>RAHMA WORLDWIDE HAS DIFFERENT PROGRAMS IMPLEMENTED IN EACH COUNTRY.
                                THEIR HUMANITARIAN AID REACHES VARIOUS COUNTRIES INCLUDING:</h5>
                                <h5>UNITED STATES – AFRICA – JORDAN – LEBANON – PALESTINE – SYRIA – TURKEY – YEMEN</h5>
                            </div>
                            <section className='map'>
                                <motion.div
                                variants={MapContainerAnimate}
                                initial={'hidden'}
                                animate={clicked ? 'visible' : 'hidden'}
                                className='the-map'
                                id='MapContainer'
                                >
                                    <MapComponent />
                                    <div className='video'>
                                        <ModalVideo channel='youtube' autoplay isOpen={videoIsOpen} videoId="X9uLXfjpzho" onClose={() => setVideoIsOpen(false)} />
                                        <button className="btn-primary" onClick={()=> setVideoIsOpen(true)}><i className="fa-solid fa-circle-play"></i></button>
                                        <h6><span>Watch</span> demo <br /> video</h6>
                                    </div>
                                </motion.div>
                                {showMapInfo ?
                                <div 
                                className='map-context'>
                                <motion.h1
                                variants={maph1animation}
                                initial={'hidden'}
                                animate={clickedInfo ? 'visible' : 'hidden'}>{countyName}</motion.h1>
                                <motion.div
                                variants={mapContextAnimation1}
                                initial={'hidden'}
                                animate={clickedInfo ? 'visible' : 'hidden'}
                                >
                                    <div className='the-svg'>
                                        <HeroSvgicon2 />
                                    </div>
                                    <div>
                                        <h5>2514</h5>
                                        <h5>2514</h5>
                                    </div>
                                    <div>
                                        <Map1icon />
                                        <Map2icon />
                                    </div>
                                    <div>
                                        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</p>
                                        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                variants={mapContextAnimation2}
                                initial={'hidden'}
                                animate={clickedInfo ? 'visible' : 'hidden'}>
                                    <div className='the-svg'>
                                        <HeroSvgicon2 />
                                    </div>
                                    <div>
                                        <h5>2514</h5>
                                        <h5>2514</h5>
                                    </div>
                                    <div>
                                        <Map1icon />
                                        <Map2icon />
                                    </div>
                                    <div>
                                        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</p>
                                        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                variants={mapContextAnimation3}
                                initial={'hidden'}
                                animate={clickedInfo ? 'visible' : 'hidden'}>
                                    <div className='the-svg'>
                                        <HeroSvgicon2 />
                                    </div>
                                    <div>
                                        <h5>2514</h5>
                                        <h5>2514</h5>
                                    </div>
                                    <div>
                                        <Map1icon />
                                        <Map2icon />
                                    </div>
                                    <div>
                                        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</p>
                                        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                variants={mapContextAnimation4}
                                initial={'hidden'}
                                animate={clickedInfo ? 'visible' : 'hidden'}>
                                    <div className='the-svg'>
                                        <HeroSvgicon2 />
                                    </div>
                                    <div>
                                        <h5>2514</h5>
                                        <h5>2514</h5>
                                    </div>
                                    <div>
                                        <Map1icon />
                                        <Map2icon />
                                    </div>
                                    <div>
                                        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</p>
                                        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</p>
                                    </div>
                                </motion.div>
                                <motion.button
                                variants={mapbuttonanimation}
                                initial={'hidden'}
                                animate={clickedInfo ? 'visible' : 'hidden'}><i class="fa-solid fa-arrow-right-long"></i></motion.button>
                            </div> : ''}
                            </section>
                        </div>
                    </div>

                    <div className="supported-by">
                        <div className="container">
                            <p><i class="fa-solid fa-chevron-right"></i></p>
                            <div className='first-support'>
                                <img src={support3} alt="" />
                                <div>
                                    <h4>GOLD SEAL OF TRANSPARENCY AWARD</h4>
                                    <p>
                                        THE 2019 GUIDESTAR GOLD SEAL OF TRANSPARENCY
                                        GIVEN TO RAHMA. WE HOLD THE TRUST OF OUR DONORS
                                        IN HIGH REGARD. THIS SEAL DEMONSTRATES OUR
                                        COMMITMENT TO PROVIDING THE MOST UP-TO-DATE
                                        INFORMATION ABOUT THE WORK WE DO.
                                    </p>
                                </div>
                            </div>

                            <div className='secound-support'>
                                <img src={support4} alt="" />
                                <div>
                                    <h4>STATE OF MICHIGAN’S CHARITABLE SOLICITATION</h4>
                                    <p>
                                    RAHMA WORLDWIDE FOR AID & DEVELOPMENT IS
                                    PROUD
                                    TO RECEIVE THE OFFICIAL CHARITABLE SOLICITATION
                                    REGISTRATION FROM THE STATE OF MICHIGAN’S
                                    DEPARTMENT OF THE ATTORNEY GENERAL.
                                    </p>
                                </div>
                            </div>

                            <div className='third-support'>
                                <img src={supportlogo} alt="" />
                                <div>
                                    <h4>CHARITY NAVIGATOR</h4>
                                    <p>Your Guide To Intllingent Giving</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <ChartComponent />
            <Footer />
        </>
    )
}

export default Homepage