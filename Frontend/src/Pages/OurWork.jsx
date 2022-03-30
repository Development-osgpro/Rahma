import React, {useState} from 'react'
import NavBar from '../Components/NavBar'
import ourWorkBg from '../Assets/images/ourwork-bg.jpg'
import Footer from '../Components/Footer'
import ChartComponent from '../Components/ChartComponent'
import DonateBtnAndsocialMedia from '../Components/DonateBtnAndsocialMedia'

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

import { Link } from 'react-router-dom'

const OurWork = () => {

    const [windosY, setWindowY] = useState()
    window.addEventListener('scroll', () => {
        setWindowY(window.scrollY)
    })

    return (
        <>
            <NavBar />
            {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
            <section className='ourWorkPage'>
                <div>
                    <img src={ourWorkBg} alt="our work background" />
                    <h1 className="firsth1">Our Work</h1>
                </div>
                <div className="container">
                    <div className="work-items">
                        <h4>THESE ARE A FEW OF OUR MOST RECENT PROGRAMS. EACH AND EVERY YEAR, WE CARRY OUT
                        MORE THAN 1000 PROGRAMS ACROSS VARIOUS COUNTRIES, INVOLVING PEOPLE OF EVERY
                        AGE, INTEREST AND NEED.</h4>
                        <div className='items'>
                            <Link to='/all_our_work'>
                                <HeroSvgicon2 />
                                <p>Non-Food Items</p>
                            </Link>
                            <Link to='/all_our_work'>
                                <HeroSvgicon3 />
                                <p>W.A.S.H</p>
                            </Link>
                            <Link to='/all_our_work'>
                                <HeroSvgicon4 />
                                <p>Education</p>
                            </Link>
                            <Link to='/all_our_work'>
                                <HeroSvgicon5 />
                                <p>Health</p>
                            </Link>
                            <Link to='/all_our_work'>
                                <HeroSvgicon6 />
                                <p>Education</p>
                            </Link>
                            <Link to='/all_our_work'>
                                <HeroSvgicon7 />
                                <p>Seasonal 
                                    Campaigns
                                </p>
                            </Link>
                            <Link to='/all_our_work'>
                                <HeroSvgicon8 />
                                <p>Environment</p>
                            </Link>
                            <Link to='/all_our_work'>
                                <HeroSvgicon9 />
                                <p>Shelter</p>
                            </Link>
                            <Link to='/all_our_work'>
                                <HeroSvgicon10 />
                                <p>Nutrition</p>
                            </Link>
                            <Link to='/all_our_work'>
                                <HeroSvgicon11 />
                                <p>food security</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className="seasonal_campaigns">
                <div className="container">
                    <h1 className='h1-styles'>SEASONAL <span>CAMPAIGNS</span></h1>
                    <p className="seasonal-p">WE RUN VARIOUS CAMPAIGNS FOR EACH SEASON AND RELIGIOUS
                    HOLIDAYS AND EVENTS SUCH AS WINTER WARMING CAMPAIGNS FOR
                    REFUGEES, UDHIYA, RAMADAN AND ZAKAAT CAMPAIGNS AND MORE</p>
                    <div className='seasonal_campaigns_box'>
                        <div>
                            <img src={ourWorkBg} alt="" />
                            <h5>BACK TO SCHOOL CAMPAIGN</h5>
                            <p>RAHMA WORLDWIDE HAVE BEGUN A NEW PROJECT
                            IN YEMEN, TITLED THE “BACK TO SCHOOL
                            CAMPAIGN”. RAHMA BEGAN PREPARATION FOR
                            DISTRIBUTION OF SCHOOL BAGS TO THOUSANDS OF
                            STUDENTS THROUGHOUT YEMEN.</p>
                        </div>
                        <div>
                            <img src={ourWorkBg} alt="" />
                            <h5>UDHIYA CAMPAIGN</h5>
                            <p>WE AIM TO REACH MORE PEOPLE IN DIFFERENT
                            PLACES OF THE WORLD;SYRIA, LEBANON, GAZA
                            STRIP, YEMEN, IRAQ, TURKEY, AND WEST AFRICA.
                            WE INVITE YOU TO SHARE THE JOYS OF EID BY
                            DONATING YOUR MEAT TODAY.</p>
                        </div>
                        <div>
                            <img src={ourWorkBg} alt="" />
                            <h5>RAMADAN CAMPAIGN</h5>
                            <p>THE PROPHET & MESSENGER OF GOD
                            RAMADAN HAS CAME, A MONTH OF BLESSING,
                            IN WHICH GOD COVERS YOU WITH BLESSING,
                            FOR HE SENDS DOWN MERCY, DECREASES SINS
                            AND ANSWERS PRAYERS.</p>
                        </div>
                        <div>
                            <img src={ourWorkBg} alt="" />
                            <h5>WARM THE CHILDREN</h5>
                            <p>AS THE WINTER MONTHS APPROACH, OUR WARM
                            THE CHILDREN CAMPAIGN IS OUR HIGHEST
                            PRIORITY SO WE ARE ABLE TO RECEIVE OUR
                            WINTER-KIT RESOURCES AND HAVE THEM SENT TO
                            THE FAMILIES IN TIME.</p>
                        </div>
                        <div>
                            <img src={ourWorkBg} alt="" />
                            <h5>ZAKAT FOR THE NEEDY</h5>
                            <p>YOUR ZAKAT IS POWERFUL. WE USE IT AS A VEHICLE
                            FOR SOCIAL CHANGE. OUR LIFE’S WORK HAS BEEN
                            TO CHANNEL THE SPIRIT OF ZAKAT INTO A GLOBAL
                            VISION FOR GIVING. REST ASSURED THAT OUR
                            RESOURCES ARE HERE TO HELP YOU GIVE YOUR
                            ZAKAT.</p>
                        </div>
                        <div>
                            <img src={ourWorkBg} alt="" />
                            <h5>REFUGEE ASSISTANCE</h5>
                            <p>IN RESPONSE TO THE INFLUX OF REFUGEES ISSUED
                            FOR RESETTLEMENT IN THE UNITED STATES, OUR RRF
                            TEAM IN THE US KNEW THAT WE NEEDED TO AID
                            THOSE WHO HAVE FLED FOR THEIR BASIC SAFETY.</p>
                        </div>
                    </div>
                </div>
            </div>
            <ChartComponent />
            <Footer />
        </>
    )
}

export default OurWork