import React from 'react'
import { ForAndByGenZ, WhatIsInzaLab } from '../../components/Buttons/ForAndByGenZ/Styles'
import { Authentic, AboutContainer, AboutImage, AboutImage2, AdvertisingWord, InnerAboutContainer, InnerImageContainer, Typography, Typography2 } from './Styles'
// import {FaUserTie, FaHiking, FaMobileAlt, FaRing, FaCodeBranch, FaSmile, FaCat, FaCrow, FaCoffee, FaSpider, FaKey, FaRoad} from 'react-icons/fa'



function About() {

    return (
        <>
        <AboutContainer 
            initial="hidden" 
            whileInView="visible" 
            viewport={{once: true}} 
            transition={{duration: 0.75}} 
            variants={{visible: {opacity: 1, x: 0}, hidden: {opacity: 0, x: 100}}}>
            <InnerImageContainer>
            <Authentic>Authentic</Authentic>
            <AdvertisingWord>Dvertisin</AdvertisingWord>
                <AboutImage />
                <AboutImage2 />
            <ForAndByGenZ><div>For & By</div><span>GenZ</span></ForAndByGenZ>
            </InnerImageContainer>
            <InnerAboutContainer>
            <WhatIsInzaLab><div>What is Inza Lab?</div></WhatIsInzaLab>
            <Typography>
                InZa Lab is a Gen Z talent program created by Creative Digital Agency (CDA). In order to keep up with rapid changes in generational trends, we provide a platform for the Generation Z members to showcase creativity, insights and talents.
            </Typography>
            <Typography2>
                In Korean, “insa” is slang for an insider, someone who is plugged into the cultural zeitgeist of what’s trending. With inZa Lab, we are giving the insiders, Gen Zers themselves, a platform to write their own stories - Creating Gen Z Content by Gen Z.  
            </Typography2>
            </InnerAboutContainer>
        </AboutContainer> 
        </>
    )
}



export default About
