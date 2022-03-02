import React from 'react'
import { Layout } from '../../components'
import { NominateBtn } from '../../components/Buttons/Nominate/Styles'
import { ContentContainer, ContentContainer2, FeaturingBtn, FeaturingHeader, FounderContainer, FounderDescription, FounderNameHeader, GridContainer, GridImages, TwentyFiveIPContainer, TwentyFiveIPMainContentImage, TwentyFiveIPMainHeader, TwentyFiveIPMainImage, TwentyFiveIPMainImageContainer, ViewProfileBtn, WorkImage, WorkImageContainer } from './Styles'



function TwentyFiveUnderTwentyFiveIP () {
    return (
        <>
        <Layout>
            <TwentyFiveIPContainer>
                <TwentyFiveIPMainImage />
                <TwentyFiveIPMainHeader>25 Under 25</TwentyFiveIPMainHeader>
                <NominateBtn>Nominate</NominateBtn>
            </TwentyFiveIPContainer>
        <ContentContainer>
            <FounderContainer>
                <FeaturingHeader>Featuring</FeaturingHeader>
                <FeaturingBtn>Et Netus, 21</FeaturingBtn>
                <FounderNameHeader>Founder of XYZ company</FounderNameHeader>
                <FounderDescription>Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc.</FounderDescription>
                <FounderDescription>Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc.</FounderDescription>
                <FounderDescription>Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc.</FounderDescription>
                <ViewProfileBtn>View Profile</ViewProfileBtn>
            </FounderContainer>
            <WorkImageContainer>
                <WorkImage />
                <WorkImage />
            </WorkImageContainer>
            <TwentyFiveIPMainImageContainer>
                <TwentyFiveIPMainContentImage />
            </TwentyFiveIPMainImageContainer>
        </ContentContainer>
        <GridContainer>
            <GridImages />
            <GridImages />
            <GridImages />
            <GridImages />
            <GridImages />
            <GridImages />
        </GridContainer>
        <ContentContainer2>
            <FounderContainer>
                <FeaturingHeader>Featuring</FeaturingHeader>
                <FeaturingBtn>Et Netus, 21</FeaturingBtn>
                <FounderNameHeader>Founder of XYZ company</FounderNameHeader>
                <FounderDescription>Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc.</FounderDescription>
                <FounderDescription>Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc.</FounderDescription>
                <FounderDescription>Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc.</FounderDescription>
                <ViewProfileBtn>View Profile</ViewProfileBtn>
            </FounderContainer>
            <WorkImageContainer>
                <WorkImage />
                <WorkImage />
            </WorkImageContainer>
            <TwentyFiveIPMainImageContainer>
                <TwentyFiveIPMainContentImage />
            </TwentyFiveIPMainImageContainer>
        </ContentContainer2>
        </Layout>
        </>
    )
}

export default TwentyFiveUnderTwentyFiveIP 