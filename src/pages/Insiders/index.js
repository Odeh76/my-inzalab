import React from 'react'
import { LearnMoreBtn } from '../../components/Buttons/LearnMore/Styles'
import { Description, InsidersContainer, InsidersHeader, InnerInsidersContainer, InsidersMainImage } from './Styles'




function Insiders () {
    return (
        <>
        <InsidersContainer
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        transition={{duration: 0.75}}
        variants={{visible: {opacity: 1, x:0}, hidden: {opacity: 0, x:100}}}
        >
            <InsidersHeader>Insiders</InsidersHeader>
            <InnerInsidersContainer>
                <Description>Insider Trends Officers provide insights about the media consumption habits of Gen Z-ers to drive research into marketing and advertising for a younger audience.</Description>
                <LearnMoreBtn>Learn More</LearnMoreBtn>
            </InnerInsidersContainer>
            <InsidersMainImage />
        </InsidersContainer>
        </>
    )
}

export default Insiders 
