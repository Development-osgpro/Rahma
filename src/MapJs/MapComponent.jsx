import React, { useEffect, useState } from 'react'
import {ReactComponent as Map} from './Map.svg'
import { motion } from "framer-motion"
import useMouse from '@react-hook/mouse-position'

const MapComponent = () => {

    // const [clicked, setClicked] = useState(false)

    // const MapContainerAnimate = {
    //     hidden: { opacity: 1 , width: `${100}%`},
    //     visible: {
    //         opacity: 1,
    //         width: `${70}%`,
    //         transition: { duration : 1, ease: 'easeInOut', },
    //     }
    // }


    // useEffect(() => {

    //     const circle = document.getElementById('mapHovercircle')
    //     const mapContainer = document.getElementById('MapContainer')
    //     const US = document.getElementById('US')
    //     const JO = document.getElementById('JO')
    //     const LB = document.getElementById('LB')
    //     const PS = document.getElementById('PS')
    //     const SY = document.getElementById('SY')
    //     const TR = document.getElementById('TR')
    //     const YE = document.getElementById('YE')
    //     const ML = document.getElementById('ML')
    //     const GH = document.getElementById('GH')
    //     const CM = document.getElementById('CM')
    //     const TD = document.getElementById('TD')
    //     const SD = document.getElementById('SD')
    //     const KE = document.getElementById('KE')
    //     const SL = document.getElementById('SL')

    //     var AllCOUNTRYS = [US, JO, LB, PS, SY, TR, YE, ML, GH, TD, CM, SD, KE, SL]

    //     AllCOUNTRYS.forEach(country => {

    //         country.onclick = () => {
    //             console.log(country.getAttribute('data-name'))
    //             mapContainer.style.width = '70%'
    //             setClicked(true)
    //         }
    //     })


    // }, [])

    return (
        <>  
            <div 
            // variants={MapContainerAnimate}
            // initial={'hidden'}
            // animate={clicked ? 'visible' : 'hidden'}
            className="MapContainer">
                <Map />
                {/* <div className='mapHovercircle' id='mapHovercircle'>
                    <div className='mapHovercircle1'>
                        <div className='mapHovercircle2'>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}   

export default MapComponent