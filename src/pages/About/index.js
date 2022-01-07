import React from 'react'
import ForAndByGenZ from '../../components/Buttons/ForAndByGenZ'
import { Authentic, AboutContainer, AboutImage, AboutImage2, AdvertisingWord, InnerAboutContainer, InnerImageContainer, Typography } from './Styles'



function About() {

    return (
        <>
        <AboutContainer>
            <InnerImageContainer>
            <Authentic>Authentic</Authentic>
            <AdvertisingWord>Dvertisin</AdvertisingWord>
                <AboutImage />
                <AboutImage2 />
            </InnerImageContainer>
            <InnerAboutContainer>
            <ForAndByGenZ />
            <Typography>
                InZa Lab is a Gen Z talent program created by Creative Digital Agency (CDA). In order to keep up with rapid changes in generational trends, we provide a platform for the Generation Z members to showcase creativity, insights and talents.
            </Typography>
            <Typography>
                In Korean, “insa” is slang for an insider, someone who is plugged into the cultural zeitgeist of what’s trending. With inZa Lab, we are giving the insiders, Gen Zers themselves, a platform to write their own stories - Creating Gen Z Content by Gen Z.  
            </Typography>
            </InnerAboutContainer>
        </AboutContainer>
        </>
    )
}



export default About
