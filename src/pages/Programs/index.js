import React from 'react'
import { LearnMoreBtn } from '../../components/Buttons/LearnMore/Styles'
import { Description, InnerProgramsContainer, ProgramsContainer, ProgramsHeader, ProgramsMainImage } from './Styles'



function Programs () {
    return (
        <>
        <ProgramsContainer>
        <ProgramsHeader>Programs</ProgramsHeader>
        <InnerProgramsContainer>
            <Description>Not limited by industry or skill level, we showcase 25 talented Gen Zers each year with the intent of creating cross-boundary relationships and partnerships. </Description>
            <LearnMoreBtn>Learn More</LearnMoreBtn>
        </InnerProgramsContainer>
        <ProgramsMainImage />
        </ProgramsContainer>
        </>
            
    )
}

export default Programs 
