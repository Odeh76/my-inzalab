import React from 'react'
import { Layout } from '../../components'
import { GridImages } from '../TwentyFiveUnderTwentyFiveIP/Styles'
import { ITOsCurrentInsidersGrid, ITOsCurrentInsidersHeader, ITOsHonoreeContainer, ITOsHonoreeDescription, ITOsHonoreeHeader, ITOsHonoreeJobTitle, ITOsHonoreeMainImage, ITOsHonoreeName, ITOsHonoreeProfileContainer, ITOsHonoreeViewProfileBtn, ITOsInsiderOfTheMonth, ITOsMainHeader, ITOsMainImage, ITOsPastInsidersHeader, ITOsYellowDivider } from './Styles'




function MeetTheITOs () {
    return (
        <Layout>
            <ITOsMainImage />
            <ITOsYellowDivider />
            <ITOsMainHeader><span>Meet</span> The ITOs</ITOsMainHeader>
            <ITOsHonoreeHeader>Honoree</ITOsHonoreeHeader>
            <ITOsHonoreeContainer>
                <ITOsHonoreeMainImage />
                <ITOsInsiderOfTheMonth>Insider <span>of the</span> month</ITOsInsiderOfTheMonth>
            </ITOsHonoreeContainer>
            <ITOsHonoreeProfileContainer>
                <ITOsHonoreeName>Nulla Portittor, 19</ITOsHonoreeName>
                <ITOsHonoreeJobTitle>Social Media Advertising</ITOsHonoreeJobTitle>
                <ITOsHonoreeDescription>
                    Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna.
                    Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna
                </ITOsHonoreeDescription>
                <ITOsHonoreeViewProfileBtn>
                    View Profile
                </ITOsHonoreeViewProfileBtn>
            </ITOsHonoreeProfileContainer>
            <ITOsCurrentInsidersHeader>
                Current Insiders
            </ITOsCurrentInsidersHeader>
            <ITOsCurrentInsidersGrid>
                <GridImages />
                <GridImages />
                <GridImages />
                <GridImages />
            </ITOsCurrentInsidersGrid>
            <ITOsPastInsidersHeader>
                Past Insiders
            </ITOsPastInsidersHeader>
            <ITOsCurrentInsidersGrid>
                <GridImages />
                <GridImages />
                <GridImages />
                <GridImages />
                <GridImages />
                <GridImages />
                <GridImages />
                <GridImages />
            </ITOsCurrentInsidersGrid>
        </Layout>
    )
}

export default MeetTheITOs 
