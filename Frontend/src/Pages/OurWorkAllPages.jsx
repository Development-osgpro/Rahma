import React, {useState} from 'react'
import ChartComponent from '../Components/ChartComponent'
import DonateBtnAndsocialMedia from '../Components/DonateBtnAndsocialMedia'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import ourWorkBg from '../Assets/images/ourwork-bg.jpg'

const OurWorkAllPages = () => {

    const [windosY, setWindowY] = useState()
    window.addEventListener('scroll', () => {
        setWindowY(window.scrollY)
    })

    return (
        <>
            {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
            <NavBar /> 
            <section className='allpagesourwork'>
                <div>
                    <img src={ourWorkBg} alt="our work background" />
                    <h1 className="firsth1">EDUCATION</h1>
                </div>
                <div className="video_section">
                    <div className="container">
                        <h4>Rahma Worldwide launched an educational campaign for refugees 
                        nd displaced children we want you to be part of it!</h4>
                        <video src=""></video>
                    </div>
                </div>
            </section>
            {/* <ChartComponent />
            <Footer /> */}
        </>
    )
}

export default OurWorkAllPages