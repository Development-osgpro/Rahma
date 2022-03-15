import React from 'react'
import hand from '../Assets/images/handimg.png'
import mainHeroimg from '../Assets/images/hero-main-img.png'

const Homepage = () => {
    return (
        <>
            <div className="homepage">
                <div className="hero-section">
                    <div className='animation-screen'>
                        <div className='container'>
                            <div className="container col-10">
                                <div>       
                                    <h4>BEST CHARITY FOR REFUGEES
                                    THAT’S MAKING A DIFFERENCE!</h4>
                                    <button>DONATE NOW</button>
                                    <div>
                                        <a href='https://www.facebook.com/RahmaWorldwide/' target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                                        <a href='https://www.instagram.com/rahmaworldwide/' target="_blank"><i class="fa-brands fa-instagram"></i></a>
                                        <a href='https://twitter.com/rahmaworldwide' target="_blank"><i class="fa-brands fa-twitter"></i></a>
                                        <a href='https://www.youtube.com/c/RahmaWorldwide' target="_blank"><i class="fa-brands fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className='hero-hand-img'>       
                                <img src={hand} alt=""/>
                            </div>
                            <div className='hero-main-img'>  
                                <div></div>     
                                <img src={mainHeroimg} alt="" />
                            </div>
                    </div>

                    <div className='animation-remotecontrol'>
                        <div className='environment'></div>
                        <div className='protection'></div>
                        <div className='shelter'></div>
                        <div className='nutrition'></div>
                        <div className='orphan-sponsorship'></div>
                        <div className='food'></div>
                        <div className='health'></div>
                        <div className='education'></div>
                        <div className='w-a-s-h'></div>
                        <div className='non-Food-Items'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage