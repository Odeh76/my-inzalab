import React from 'react'
import { LearnMoreBtn } from '../../components/Buttons/LearnMore/Styles'
import { TwentyFiveContainer, InnerTwentyFiveContainer, TwentyFiveHeader, Description, TwentyFiveMainImage } from './Styles'

function TwentyFiveUnderTwentyFive() {
    return (
        <>
    <TwentyFiveContainer
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        transition={{duration: 0.75}}
        variants={{visible: {opacity: 1, x:0}, hidden: {opacity: 0, x:-100}}}
    >
        <TwentyFiveHeader>25 Under 25</TwentyFiveHeader>
        <InnerTwentyFiveContainer>
            <Description>Not limited by industry or skill level, we showcase 25 talented Gen Zers each year with the intent of creating cross-boundary relationships and partnerships. </Description>
            <LearnMoreBtn>Learn More</LearnMoreBtn>
        </InnerTwentyFiveContainer>
        <TwentyFiveMainImage />
    </TwentyFiveContainer>
    
        </>
    )
}

export default TwentyFiveUnderTwentyFive
