import React, { useEffect, useState } from 'react'
import {ReactComponent as Map} from './Map.svg'
import { motion } from "framer-motion"

const MapComponent = () => {

    useEffect(() => {
        var mousePosition;
        var offset = [0,0];
        var isDown = true;

        var circle = document.getElementById("mapHovercircle");
        circle.style.position = "absolute";
        circle.style.left = "0px";
        circle.style.top = "0px";
        
        document.body.appendChild(circle);
        
        circle.addEventListener('mouseover', function(e) {
            isDown = true;
            offset = [
                circle.offsetLeft - e.clientX,
                circle.offsetTop - e.clientY
            ];
        }, true);
        
        document.addEventListener('mousemove', function(event) {
            event.preventDefault();
            if (isDown) {
                mousePosition = {
                    x : event.clientX,
                    y : event.clientY
                };
                circle.style.left = (mousePosition.x + offset[0]) + 'px';
                circle.style.top  = (mousePosition.y + offset[1]) + 'px';
            }
        }, true);

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

        // const circle = document.getElementById('mapHovercircle')

        AllCOUNTRYS.forEach(country => {
            country.addEventListener('mouseover', () => {
            })
            country.addEventListener('mouseleave', () => {
            })
        })
    }, [])

    return (
        <>  
            <div className="MapContainer">
                <Map />
                <div className='mapHovercircle' id='mapHovercircle'>
                    <div className='mapHovercircle1'>
                        <div className='mapHovercircle2'>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}   

export default MapComponent



// AllCOUNTRYS.forEach(country => {
//     country.addEventListener('mouseover', (e) => {

//         console.log(country.getAttribute('data-name'))
//         country.style.position = 'relative'
//         var displayName = document.getElementById('onMouseName')
//         displayName.textContent = country.getAttribute('data-name')
//         displayName.style.position = "absolute"
//         displayName.style.display = "block"
//         displayName.style.width = "100px";
//         displayName.style.height = "100px";
//         displayName.style.background = "red";
//         displayName.style.color = "blue";
//         displayName.style.zIndex = "2000";
//         var mousePosition;
//         var isDown = true;
//         var offset = [0, 0];

//         isDown = true;

//         offset = [
//             displayName.offsetLeft - e.clientX,
//             displayName.offsetTop - e.clientY
//         ];

//         country.addEventListener("mouseleave", () => {
//             isDown = false
//             displayName.style.display = 'none'
//         })

//         country.addEventListener("mousemove", (event) => {
//             event.preventDefault();
//             if (isDown) {
//                 mousePosition = {
//                     x : event.clientX,
//                     y : event.clientY
//                 };
//                 displayName.style.left = (mousePosition.x + offset[0]) + 'px';
//                 displayName.style.top  = (mousePosition.y + offset[1]) + 'px';
//             }
//         })
//     })
// });