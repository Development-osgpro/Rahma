import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import headerImg from "../Assets/images/ourwork-bg.jpg"
import orphanBg from "../Assets/images/orphan_bg.jpg"
import orphanContent from "../Assets/images/orphan_sponsorship_content.png"
import { useDispatch, useSelector } from 'react-redux'
import { getHomeData } from '../Redux/home'
import ModalVideo from 'react-modal-video'
import { Accordion } from 'react-bootstrap'
import ChartComponent from '../Components/ChartComponent'
import DonateBtnAndsocialMedia from '../Components/DonateBtnAndsocialMedia'

const ProgramsPage = ({ history }) => {

    const dispatch = useDispatch()

    const homeData = useSelector(state => state.getHomeData)
    const { loading, data, error } = homeData

    const [videoIsOpen, setVideoIsOpen] = useState(false)

    const [windosY, setWindowY] = useState()
    window.addEventListener('scroll', () => {
        setWindowY(window.scrollY)
    })

    useEffect(() => {
        dispatch(getHomeData())
    }, [dispatch])
    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : data ? (
                <>
                    <NavBar history={history} />
                    {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
                    <section className="programsPage-header">
                        <h1>PROGRAMS</h1>
                        <img className='' src={headerImg} />
                    </section>

                    <section className="programsPage-body">
                        <h1>RAHMA INTERNATIONAL ACADEMY</h1>
                        <div className="container">
                            <div className="row row1">
                                <div className="col-md-6">
                                    <div className="videoDiv">
                                        <iframe className="videoBox videoBox1" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                                    </div>
                                    {/* <button className="btn-primary programs-video-cta" onClick={() => setVideoIsOpen(true)}><i className="fa-solid fa-circle-play"></i></button> */}
                                </div>
                            </div>
                            <div className="row row2">
                                    <p>RAHMA INTERNATIONAL ACADEMY OFFERS THE HIGHEST QUALITY EDUCATION AND CHALLENGING
                                    PROGRAMS FOR A WORLDWIDE COMMUNITY THAT AIMS AT CREATING A WELL-EDUCATED, MORE
                                    PEACEFUL WORLD. RAHMA INTERNATIONAL ACADEMY KNOWS NO BORDERS. WE GO BEYOND BORDERS
                                    TO MAKE THE BEST EDUCATION IN THE WORLD WITHIN REACH. OUR INSTRUCTORS ARE CAREFULLY
                                    CHOSEN AMONGST THE BEST OF SCHOLARS, SCIENTISTS, AND PROFESSIONALS IN THEIR RESPECTIVE
                                    FIELDS. THE GRADUATES OF RAHMA INTERNATIONAL ACADEMY ARE THOSE WHO MAKE A SIGNIFICANT
                                    CONTRIBUTION TO SOCIETY; LOCALLY, NATIONALLY, AND INTERNATIONALLY.</p>
                            </div>

                            <div className="row row3">
                                <h1 className='h1-styles'>PROGRAMS <span>OFFERED</span></h1>

                                <div className="row">
                                    <div className="col-md-6"><p>HANDS-ON/VOCATIONAL TRAINING</p></div>
                                    <div className="col-md-6"><p>HANDS-ON/VOCATIONAL TRAINING</p></div>
                                    <div className="col-md-6"><p>HANDS-ON/VOCATIONAL TRAINING</p></div>
                                    <div className="col-md-6"><p>HANDS-ON/VOCATIONAL TRAINING</p></div>
                                    <div className="col-md-6"><p>HANDS-ON/VOCATIONAL TRAINING</p></div>
                                    <div className="col-md-6"><p>HANDS-ON/VOCATIONAL TRAINING</p></div>
                                    <div className="col-md-6"><p>HANDS-ON/VOCATIONAL TRAINING</p></div>
                                    <div className="col-md-6"><p>HANDS-ON/VOCATIONAL TRAINING</p></div>
                                    <div className="col-md-6"><p>HANDS-ON/VOCATIONAL TRAINING</p></div>
                                    <div className="col-md-6"><p>HANDS-ON/VOCATIONAL TRAINING</p></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <section className="orphan-section">
                        <div className="section-header">
                            <img src={orphanBg} />
                            <div className='container'>
                                <div className="row">
                                    <h1>ORPHAN SPONSORSHIP</h1>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={orphanContent} />
                                    </div>
                                    <div className="col-md-7">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                                            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                                            recusandae alias error harum maxime adipisci amet laborum.</p>
                                        <button>Orphan Sponsorship</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                        <section className="orphans">
                            <img src={orphanBg} alt="" />
                            <div className="container">
                                <div className='orphan_sponsorship'>
                                    <h1>ORPHAN SPONSORSHIP</h1>
                                    <div>
                                        <div>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sunt magnam voluptatum .</p>
                                            <img src={orphanContent} alt="" />
                                        </div>
                                        <p>
                                            LOREM IPSUM, DIZGI VE BASKI ENDÜSTRISINDE KULLANILAN
                                            MIGIR METINLERDIR. LOREM IPSUM, ADI BILINMEYEN BIR
                                            MATBAACININ BIR HURUFAT NUMUNE KITABI OLUŞTURMAK
                                            ÜZERE BIR YAZI GALERISINI ALARAK KARIŞTIRDIĞI
                                            1500'LERDEN BERI ENDÜSTRI STANDARDI SAHTE METINLER
                                            OLARAK KULLANILMIŞTIR. BEŞYÜZ YIL BOYUNCA VARLIĞINI
                                            SÜRDÜRMEKLE KALMAMIŞ, AYNI ZAMANDA PEK DEĞIŞMEDEN
                                            ELEKTRONIK DIZGIYE DE SIÇRAMIŞTIR
                                        </p>
                                    </div>
                                    <button>Orphan Sponsorship</button>
                                </div>
                            </div>
                        </section>

                        <section className="programsPage-body">
                            <h1>MENTAL HEALTH & WELLNESS</h1>
                            <div className="container">
                                <div className="row row1">
                                    <div className="col-md-6">
                                        <div className="videoDiv">
                                            <iframe className="videoBox videoBox1" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                                        </div>
                                        {/* <button className="btn-primary programs-video-cta" onClick={() => setVideoIsOpen(true)}></button> */}
                                    </div>
                                </div>
                                <div className="row row2">
                                    <p>RAHMA INTERNATIONAL ACADEMY OFFERS THE HIGHEST QUALITY EDUCATION AND CHALLENGING
                                        PROGRAMS FOR A WORLDWIDE COMMUNITY THAT AIMS AT CREATING A WELL-EDUCATED, MORE
                                        PEACEFUL WORLD. RAHMA INTERNATIONAL ACADEMY KNOWS NO BORDERS. WE GO BEYOND BORDERS
                                        TO MAKE THE BEST EDUCATION IN THE WORLD WITHIN REACH. OUR INSTRUCTORS ARE CAREFULLY
                                        CHOSEN AMONGST THE BEST OF SCHOLARS, SCIENTISTS, AND PROFESSIONALS IN THEIR RESPECTIVE
                                        FIELDS. THE GRADUATES OF RAHMA INTERNATIONAL ACADEMY ARE THOSE WHO MAKE A SIGNIFICANT
                                        CONTRIBUTION TO SOCIETY; LOCALLY, NATIONALLY, AND INTERNATIONALLY.</p>
                                </div>

                                <div className="row row3">
                                    <h1 className='h1-styles'>PROGRAMS <span>OFFERED</span></h1>

                                    <Accordion className="Accordion" style={{ borderRadius: '10px', marginBottom: '5rem'}}>
                                        <Accordion.Item eventKey='prgjerpgerpgoj' style={{ borderRadius: '10px', width: "100%" , margin: '0.5rem'}}>
                                            <Accordion.Header style={{ fontSize: "28px", borderRadius: '10px', width: "100%" }}><h4 style={{ color: "gray", letterSpacing: "0", textAlign: 'left', fontWeight: '300' }}>Covid-19 Effort</h4></Accordion.Header>
                                            <Accordion.Body style={{ borderRadius: '10px', width: "100%" }}>
                                                <p style={{ letterSpacing: "0", width: "100%", textAlign: "left" }}>LOREM IPSUM, DIZGI VE BASKI ENDÜSTRISINDE KULLANILAN MIGIR METINLERDIR. LOREM IPSUM,
                                                    ADI BILINMEYEN BIR MATBAACININ BIR HURUFAT NUMUNE KITABI OLUŞTURMAK ÜZERE BIR YAZI
                                                    GALERISINI ALARAK KARIŞTIRDIĞI 1500'LERDEN BERI ENDÜSTRI STANDARDI SAHTE METINLER</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </section>
                        <ChartComponent bgColor="#e3e3e3"/>
                    <Footer />
                </>
            ) : (
                <div>{error}</div>
            )}
        </>
    )
}

export default ProgramsPage