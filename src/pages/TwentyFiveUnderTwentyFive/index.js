import React from 'react'
import { LearnMoreBtn } from '../../components/Buttons/LearnMore/Styles'
import { TwentyFiveContainer, InnerTwentyFiveContainer, TwentyFiveHeader, Description } from './Styles'

function TwentyFiveUnderTwentyFive() {
    return (
    <TwentyFiveContainer>
        <TwentyFiveHeader>25 Under 25</TwentyFiveHeader>
        <InnerTwentyFiveContainer>
            <Description>Not limited by industry or skill level, we showcase 25 talented Gen Zers each year with the intent of creating cross-boundary relationships and partnerships. </Description>
            <LearnMoreBtn>Learn More</LearnMoreBtn>
        </InnerTwentyFiveContainer>
    </TwentyFiveContainer>
    )
}

export default TwentyFiveUnderTwentyFive
