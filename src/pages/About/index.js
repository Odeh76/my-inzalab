import React from 'react'
import { ForAndByGenZ, WhatIsInzaLab } from '../../components/Buttons/ForAndByGenZ/Styles'
import { ClientsHeader, HereAsA } from '../../components/Headers/SecondaryHeaders/Styles'
import { Authentic, AboutContainer, AboutImage, AboutImage2, AdvertisingWord, InnerAboutContainer, InnerImageContainer, Typography, Typography2, YellowRectangle, ButtonContainer, OptionButton, BrandButton, YellowRectangleClients, ClientsList } from './Styles'
import {FaUserTie, FaHiking, FaMobileAlt, FaRing, FaCodeBranch, FaSmile, FaCat, FaCrow, FaCoffee, FaSpider, FaKey, FaRoad} from 'react-icons/fa'



function About() {

    return (
        <>
        <AboutContainer>
            <InnerImageContainer>
            <Authentic>Authentic</Authentic>
            <AdvertisingWord>Dvertisin</AdvertisingWord>
                <AboutImage />
                <AboutImage2 />
            <ForAndByGenZ><div>For & By</div><span>GenZ</span></ForAndByGenZ>
            </InnerImageContainer>
            <InnerAboutContainer>
        <YellowRectangle />
            <WhatIsInzaLab><div>What is Inza Lab?</div></WhatIsInzaLab>
            <Typography>
                InZa Lab is a Gen Z talent program created by Creative Digital Agency (CDA). In order to keep up with rapid changes in generational trends, we provide a platform for the Generation Z members to showcase creativity, insights and talents.
            </Typography>
            <Typography2>
                In Korean, “insa” is slang for an insider, someone who is plugged into the cultural zeitgeist of what’s trending. With inZa Lab, we are giving the insiders, Gen Zers themselves, a platform to write their own stories - Creating Gen Z Content by Gen Z.  
            </Typography2>
            </InnerAboutContainer>
        </AboutContainer>
        <HereAsA>I'm here as a...</HereAsA>
        <ButtonContainer>
            <OptionButton><div><FaHiking /><FaMobileAlt className="optionMobileIcon" /></div>Gen Z</OptionButton>
            <BrandButton><div><FaUserTie /></div>Brand</BrandButton>
        </ButtonContainer>
        <ClientsHeader>Clients</ClientsHeader>
        <ClientsList>
            <div><FaRing /></div>
            <div><FaCrow /></div>
            <div><FaCodeBranch /></div>
            <div><FaCoffee /></div>
            <div><FaSmile /></div>
            <div><FaSpider /></div>
            <div><FaCat /></div>
            <div><FaKey /></div>
        </ClientsList>
        </>
    )
}



export default About
