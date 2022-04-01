import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import DonateBtnAndsocialMedia from '../Components/DonateBtnAndsocialMedia'
import ChartComponent from '../Components/ChartComponent'
// import navbar and footer
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ImgSection from '../Components/ImgSection'
import { motion } from "framer-motion"
import bost from '../Assets/images/bost-03.jpg'

import heroBg from '../Assets/images/ramadanPageHeroBg-02.png'
import RamadanContext from '../ramadan.js'

import bost1 from '../Assets/images/bost1.jpg'
import bost2 from '../Assets/images/bost2.jpg'
import bost3 from '../Assets/images/bost3.jpg'

import bost4 from '../Assets/images/after-before-slider-01.jpg'
import bost5 from '../Assets/images/after-before-slider-02.jpg'
import bost6 from '../Assets/images/1M5A9432.JPG'

import child from "../Assets/images/child.jpg"

const Ramadan = () => {
    console.log(RamadanContext[0].nameAr)
    // framer motion variants
    const TextHeroVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeInOut' },
        }
    }

      // framer motion variants
    const buttonHeroVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, },
        }
    }

    const facebookHeroVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: .1, ease: 'easeInOut', },
        }
    }

    // framer motion variants
    const instaHeroVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: .2, ease: 'easeInOut', },
        }
    }

    
    // framer motion variants
    const twitterHeroVariants = {
        hidden: { opacity: 0, y: 75 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: .3 },
        }
    }

    // framer motion variants
    const youtubeHeroVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: .4, ease: 'easeInOut', },
        }
    }

    // framer motion variants
    const HandimageVariants = {
        hidden: { opacity: 0, y: 200 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2, ease: 'easeInOut', },
        }
    }

    const [windosY, setWindowY] = useState()
    window.addEventListener('scroll', () => {
        setWindowY(window.scrollY)
    })

    const [TheId, setTheId] = useState(0)

    const [firstDonate, setFirstDonate] = useState(false)
    const [secoundDonate, setSecoundDonate] = useState(false)
    const [thirdDonate, setThirdDonate] = useState(false)

    const handleChange = (e) => {
        setTheId(e)
    }

    const handleChangePrice1 = (e) => {
        setFirstDonate(true)
        setSecoundDonate(false)
        setThirdDonate(false)
    }

    const handleChangePrice2 = (e) => {
        setFirstDonate(false)
        setSecoundDonate(true)
        setThirdDonate(false)
    }

    const handleChangePrice3 = (e) => {
        setFirstDonate(false)
        setSecoundDonate(false)
        setThirdDonate(true)
    }

    var bgColor = {
        backgroundColor: '#2b7634'
    }
    var bgColorblue = {
        backgroundColor: '#2b3990'
    }

    return (
        <>
        <div style={{backgroundColor: '#f3f0ea'}}>

        <NavBar />
            {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
        <div className="ramadanPage">
            <div className="hero-section">
                <div className='animation-screen'>
                    <div className='container'>
                    <div className='donate-now'>  
                        <div className="container">     
                            <motion.h4
                                variants={TextHeroVariants}
                                initial='hidden'
                                animate='visible'
                            >RAMAZAN 2022
                            RAMAZAN 2022</motion.h4>
                            <motion.button
                                variants={buttonHeroVariants}
                                className='donateBtnHomeHero'
                                initial='hidden'
                                style={{width: '220px', height: '70px'}}
                                animate='visible'
                            ><a href="https://rahmaww.donorsupport.co/-/XGDAEUZV"> DONATE NOW</a></motion.button>
                            <div className="links-cont"> 
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
                        <div></div>
                        <motion.img
                            variants={HandimageVariants}
                            initial='hidden'
                            animate='visible'
                            src={heroBg}
                            alt="hero middle img"
                        />
                    </div>
                </div>
            </div>

            </div>
            <section className="ramadan_new_section">
                <div className="container">
                    <h1 className="Maintitle h1-styles">RAMADAN <span>CAMPAIGNS</span></h1>
                    <div className="new_section">
                        <div className="img-buttons">
                            <div className="image_cont">
                                <img src={TheId == 0 ? bost : TheId == 1 ? bost1 : TheId == 2 ? bost2 : TheId == 3 ? bost3 : TheId == 4 ? bost4 : TheId == 5 ? bost5 : TheId == 6 ? bost6 : ''} alt="" />
                            </div>
                            <div className="buttons">
                                <button onClick={() => handleChange(1)}>iftar Meals</button>
                                <button onClick={() => handleChange(2)}>Kitchen Ramadan</button>
                                <button onClick={() => handleChange(3)}>Food Basket</button>
                                <button onClick={() => handleChange(4)}>Food Basket 1</button>
                                <button onClick={() => handleChange(5)}>Food Basket 2</button>
                                <button onClick={() => handleChange(6)}>Food Basket 3</button>
                            </div>
                        </div>
                        
                        <div className="render_data">
                            <h4 style={{textAlign: 'right', marginBottom: '1rem'}}>
                                {TheId == 0 ? RamadanContext[0].name2 : TheId == 1 ? RamadanContext[0].name2 : TheId == 2 ? RamadanContext[0].name3 : TheId == 3 ? RamadanContext[0].name4 : TheId == 4 ? RamadanContext[0].name5 : TheId == 5 ? RamadanContext[0].name6 : TheId == 6 ? RamadanContext[0].name7 : '' }
                            </h4>
                            <h4 style={{textAlign: 'left'}}>
                                {TheId == 0 ? RamadanContext[1].name2 : TheId == 1 ? RamadanContext[1].name2 : TheId == 2 ? RamadanContext[1].name3 : TheId == 3 ? RamadanContext[1].name4 : TheId == 4 ? RamadanContext[1].name5 : TheId == 5 ? RamadanContext[1].name6 : TheId == 6 ? RamadanContext[1].name7 : '' }
                            </h4>
                            <h4 style={{textAlign: 'right', marginBottom: '1rem', color: 'red'}}>
                                {TheId == 0 ? RamadanContext[2].name2 : TheId == 1 ? RamadanContext[2].name2 : TheId == 2 ? RamadanContext[2].name3 : TheId == 3 ? RamadanContext[2].name4 : TheId == 4 ? RamadanContext[2].name5 : TheId == 5 ? RamadanContext[2].name6 : TheId == 6 ? RamadanContext[2].name7 : '' }
                            </h4>
                            <p style={{margin: '1rem 0', }}>
                                {TheId == 0 ? RamadanContext[3].name2 : TheId == 1 ? RamadanContext[3].name2 : TheId == 2 ? RamadanContext[3].name3 : TheId == 3 ? RamadanContext[3].name4 : TheId == 4 ? RamadanContext[3].name5 : TheId == 5 ? RamadanContext[3].name6 : TheId == 6 ? RamadanContext[3].name7 : '' }
                            </p>
                            <button className="price" onClick={handleChangePrice1} style={firstDonate == true ? bgColor : bgColorblue}>10$</button>
                            <button className="price" onClick={handleChangePrice2} style={secoundDonate == true ? bgColor : bgColorblue}>100$</button>
                            <button className="price" onClick={handleChangePrice3} style={thirdDonate == true ? bgColor : bgColorblue}>120$</button>

                            <p>{firstDonate == true ? "1 family" : secoundDonate == true ? "2 family" : thirdDonate == true ? "5 family" : ""}</p>

                            <p style={{margin: '1rem 0'}}>
                                {TheId == 0 ? RamadanContext[4].name2 : TheId == 1 ? RamadanContext[4].name2 : TheId == 2 ? RamadanContext[4].name3 : TheId == 3 ? RamadanContext[4].name4 : TheId == 4 ? RamadanContext[4].name5 : TheId == 5 ? RamadanContext[4].name6 : TheId == 6 ? RamadanContext[4].name7 : '' }
                            </p>
                            <button className="donateBtn">DONATE NOW</button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="MainTitlediv">
                <h1 className="Maintitle center">THE PROPHET & MESSENGER OF </h1> <h1 className="Maintitle center">GOD (PBUH) ONCE SAID</h1>
            </div>
        
            <Container className="textCon" style={{marginBottom: '2rem'}}>

                <div className="videoDiv">
                    <iframe className="videoBox videoBox1" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                </div>
                <div className="videoDiscDiv">
                    <p className="videoDiscHead">RAMADAN HAS COME TO YOU. (IT IS) A MONTH OF BLESSING, IN WHICH GOD COVERS YOU WITH
                        BLESSING, FOR HE SENDS DOWN MERCY, DECREASES SINS AND ANSWERS PRAYERS… IN IT, GOD
                        LOOKS AT YOUR COMPETITION (IN GOOD DEEDS), AND BOASTS ABOUT YOU TO HIS ANGELS. SO
                        SHOW GOD GOODNESS FROM YOURSELVES.</p>
                </div>

                <div className="MainTitlediv">
                    <h1 className="Maintitle h1-styles"><span >RAMADAN</span> MUBARAK FROM
                        RAHMA WORLDWIDE</h1>
                </div>
                <div className="discriptionPaDiv">
                    <p className="discriptionPa">SIX CONSECUTIVE RAMADAN SEASONS HAVE PASSED AND WE ARE WITNESSING THE SEVENTH
                        ONE. YET, THE SITUATION OF THE SYRIAN PEOPLE HASN’T BEEN IMPROVED. IT IS GETTING EVEN
                        WORSE</p>
                    <p className="discriptionPa"> RAMADAN IS AN OPPORTUNITY TO GIVE AND PROVIDE FOR INDIVIDUALS WHO ARE LESS
                        FORTUNATE. AS OUR WORK CONTINUES TO EXPAND, IT’S VITAL TO REFLECT ON WHAT WE’VE
                        ACCOMPLISHED, AND SET OUT NEW CHALLENGES FOR US TO GROW. WE WOULD LIKE TO TAKE A
                        MOMENT TO THANK ALL OF OUR GENEROUS DONORS AND ALL INDIVIDUALS WHO BELIEVE IN
                        OUR MISSION. THIS RAMADAN YOU HAVE AN OPPORTUNITY TO HELP IN DIFFERENT WAYS</p>
                </div>
                <div className="MainTitlediv">
                    <h1 className="Maintitle h1-styles">OUR <span>CHALLENGE</span></h1>
                </div>
                <div className="discriptionPaDiv">
                    <p className="discriptionPa" >OVER THE COURSE OF THESE 30 DAYS, WITH YOUR CONTINUED SUPPORT, WE ARE AIMING TO
                        FEED:</p>
                </div>
                <div className="MainTitlediv">
                    <h1 className="Maintitle"><span className="bluefont">1.5 MILLION</span> REFUGEE BENEFICIARIES.</h1>
                </div>
                <div className="MainTitlediv">
                    <h1 className="Maintitle h1-styles">DELIVER  RAMADAN<span >FOOD BASKETS</span></h1>
                </div>
                <div className="discriptionPaDiv">
                    <p className="discriptionPa" >ANOTHER WAY TO PROVIDE MEALS DURING RAMADAN IS THROUGH OUR FOOD BASKETS
                        PROGRAM. EACH BASKET IS ACCOMMODATED TO FAMILY SIZE. OUR CHALLENGE THIS MONTH IS
                        TO DISTRIBUTE 30,000 BASKETS</p>
                </div>

                <div className="smallTitleDiv">
                    <p className="smallTitlePa">SPONSORING THIS CAMPAIGN FOR THE MONTH OF RAMADAN IS: <span className="bluefont">$120.00</span></p>
                </div>
                <div className="smallTitleDiv">
                    <p className="smallTitlePa">1 RAMADAN FOOD BASKET FOR 1 FAMILY OF FIVE FOR 2 WEEKS: <span className="bluefont">$60.00</span></p>
                </div>
                <div className="smallTitleDiv">
                    <p className="smallTitlePa">1 RAMADAN FOOD BASKET FOR 1 FAMILY OF FIVE FOR 1 WEEKS: <span className="bluefont">$30.00</span></p>
                </div>
                <div className="discriptionPaDiv">
                    <p className="discriptionPa" >ANOTHER WAY TO PROVIDE MEALS DURING RAMADAN IS THROUGH OUR FOOD BASKETS
                        PROGRAM. EACH BASKET IS ACCOMMODATED TO FAMILY SIZE. OUR CHALLENGE THIS MONTH IS
                        TO DISTRIBUTE 30,000 BASKETS</p>
                </div>
                <div className="smallTitleDiv">
                    <p className="smallTitlePa">SPONSORING THIS CAMPAIGN FOR THE MONTH OF RAMADAN IS: <span className="bluefont">$120.00 USD</span></p>
                </div>
                <div className="smallTitleDiv">
                    <p className="smallTitlePa">1 RAMADAN FOOD BASKET FOR 1 FAMILY OF FIVE FOR 4 WEEKS: <span className="bluefont">$120.00</span></p>
                </div>
                <div className="smallTitleDiv">
                    <p className="smallTitlePa">1 RAMADAN FOOD BASKET FOR 1 FAMILY OF FIVE FOR 2 WEEKS: <span className="bluefont">$60.00</span></p>
                </div>
                <div className="smallTitleDiv">
                    <p className="smallTitlePa">1 RAMADAN FOOD BASKET FOR 1 FAMILY OF FIVE FOR 1 WEEKS: <span className="bluefont">$30.00</span></p>
                </div>
            </Container>
            <ChartComponent bgColor="#e3e3e3"/>
            <Footer />
        </div>

        </div>
        </>
    )
}

export default Ramadan