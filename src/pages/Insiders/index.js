import React from 'react'
import { LearnMoreBtn } from '../../components/Buttons/LearnMore/Styles'
import { Description, InsidersContainer, InsidersHeader, InsidersInnerContainer, InsidersMainImage } from './Styles'




function Insiders () {
    return (
        <InsidersContainer>
            <InsidersHeader>Insiders</InsidersHeader>
            <InsidersInnerContainer>
                <Description>Insider Trends Officers provide insights about the media consumption habits of Gen Z-ers to drive research into marketing and advertising for a younger audience.</Description>
                <LearnMoreBtn>Learn More</LearnMoreBtn>
            </InsidersInnerContainer>
            <InsidersMainImage />
        </InsidersContainer>
    )
}

export default Insiders 
