import { MainHeader } from '../../components/Headers/MainHeaders/Styles';
import styled from 'styled-components'
import programsIPMainImage from '../../assets/img/programsIPMainImage.svg'
import submissionsThumbnail from '../../assets/img/submissionThumbnail.svg'
import { SecondaryHeader } from '../../components/Headers/SecondaryHeaders/Styles';
import topPickOne from '../../assets/img/topPickOne.svg'
import topPickTwo from '../../assets/img/topPickTwo.svg'
import topPickThree from '../../assets/img/topPickThree.svg'
import { LearnMoreBtn } from '../../components/Buttons/LearnMore/Styles';
import { ResetDefaultButtonStyles } from '../../components/Buttons/ResetDefaultButtonStyles/Styles';
import { FaPlus } from 'react-icons/fa'


export const DesignContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    // Tablet screens max-width 1024px
    @media only screen and (max-width: 64em) {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
`

export const HowItWorksHeader = styled(MainHeader)`
    font-size: 2rem;
    letter-spacing: 0.5rem;
    font-weight: 700;
    margin-left: 64px;

    // Tablet screens max-width 1024px
    @media only screen and (max-width: 64em) {
        display: none;
    }
    
`

export const HowItWorksDescription = styled.p`
    font-family: var(--lato);
    font-weight: 500;
    font-size: 1.5rem;
    margin-left: 64px;

    // Tablet screens max-width 1024px
    @media only screen and (max-width: 64em) {
        display: none;
    }

`

export const DesignDescription = styled.p`
    font-family: var(--lato);
    max-width: 300px;
`

export const HowItWorksContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;

    // Tablet screens max-width 1024px
@media only screen and (max-width: 64em) {
    width: 100%;
}
`

export const InnerInnerContainer = styled.div`
    display: flex;

    // Tablet screens max-width 1024px
@media only screen and (max-width: 64em) {
    width: 100%;
    flex-direction: column;
}
`

export const ProgramsIPContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;

    // Tablet screens max-width 1024px
    @media only screen and (max-width: 64em) {
        flex-wrap: wrap;
    }
`
export const ProgramsIPHeader = styled(MainHeader)`
    text-orientation: upright;
    writing-mode: vertical-lr;
`

export const ProgramsIPMainImage = styled.img`
height: 100%;
width: 400px;
background-image: url(${programsIPMainImage});
background-position: center center;
background-repeat: no-repeat;
background-size: cover;

// Tablet screens max-width 1024px
@media only screen and (max-width: 64em) {
    width: 75%;
}
`

export const PrizeHeader = styled(SecondaryHeader)`
    font-size: 1.5rem;
    text-transform: capitalize;
    `
export const InstructionsHeader = styled(SecondaryHeader)`
    font-size: 1.5rem;
    text-transform: capitalize;
    `
export const DeadlineHeader = styled(SecondaryHeader)`
    font-size: 1.5rem;
    text-transform: capitalize;
`

export const VideoContainer = styled.div`
    display: flex;
    position: relative;

    // Tablet screens max-width 1024px
@media only screen and (max-width: 64em) {
    flex-direction: column;;
}
`

export const VideoInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`

export const VideoHeader = styled(MainHeader)`
    writing-mode: vertical-lr;
    text-orientation: upright;
    background-color: var(--yellow);
    font-weight: 700;
    letter-spacing: 0.5rem;
    width: 15%;
    display: flex;
    align-items: center;
    margin: 0;

    // Tablet screens max-width 1024px
@media only screen and (max-width: 64em) {
    width: 100%;
    height: 60px;
    writing-mode: horizontal-tb;
    justify-content: space-between;
}
`

export const VideoImage = styled.img`
height: 100%;
width: 40%;
background-image: url(${programsIPMainImage});
background-position: center center;
background-repeat: no-repeat;
background-size: cover;

// Tablet screens max-width 1024px
@media only screen and (max-width: 64em) {
    width: 100%;
    height: 300px;
}
`

export const PhotoHeader = styled(VideoHeader)``
export const PhotoImage = styled(VideoImage)``
export const DesignHeader = styled(VideoHeader)`
    margin-left: 16px;
`
export const DesignImage = styled(VideoImage)`
    height: 300px;
`

export const YellowVector = styled.div`    
height: 300px;
background-color: var(--yellow);
clip-path: polygon(0 0, 100% 0, 60% 100%, 0% 100%);
font-family: var(--lato);
font-weight: 500;
font-size: 1.5rem;
display: flex;
align-items: center;
div {
    max-width: 300px;
    margin-left: 64px;
}

// Tablet and Mobile max-width: 1024px
@media only screen and (max-width: 64em) {
    display: none;

    div {
        display: none;
    }
}
`

// Top Picks
export const TopBoxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    // Tablet and Mobile max-width: 1024px
@media only screen and (max-width: 64em) {
    flex-direction: column;
}
`

export const TopBoxInnerContainer = styled.div`
    width: 32.2%;

    // Tablet and Mobile max-width: 1024px
    @media only screen and (max-width: 64em) {
        width: 100%;
    }
`

export const TopBoxHeader = styled.h1`
width: 100%;
height: 64px;
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
font-family: var(--lato);
text-transform: uppercase;

// Mobile and tablet max-width: 1024px
@media only screen and (max-width: 64em) {
    height: 58px;
    letter-spacing: 0.5rem;
}
`

export const TopOneImage = styled.img`
    width: 100%;
    height: 200px;
    background-image: url(${topPickOne});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`

export const TopTwoImage = styled(TopOneImage)`
    background-image: url(${topPickTwo});
`
export const TopThreeImage = styled(TopOneImage)`
    background-image: url(${topPickThree});
`

export const TopVideoHeader = styled(SecondaryHeader)``
export const TopDesignHeader = styled(SecondaryHeader)``
export const TopPhotoHeader = styled(SecondaryHeader)``

export const TopSubmissionTitleHeader = styled(SecondaryHeader)`
    text-transform: capitalize;
    font-size: 1.5rem;
`

export const TopSubmissionAuthorHeader = styled(SecondaryHeader)`
    text-transform: capitalize;
    font-size: 1.2rem;
`
export const TopSubmissionDescription = styled.p`
    font-family: var(--lato);
`

export const ViewSubmissionButton = styled(LearnMoreBtn)`
    height: 64px;
    font-weight: 700;
`


// All Submissions

export const AllHeader = styled(MainHeader)`


// Tablet screens max-width 1024px
@media only screen and (max-width: 64em) {
    letter-spacing: 0.3rem;
}

`

export const SubmissionsGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    // Tablet screens max-width 1024px
    @media only screen and (max-width: 64em) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const SubmissionsGridImage = styled.img`
    width: 100%;
    height: 260px;
    background-image: url(${submissionsThumbnail});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const ViewMoreButton = styled(ResetDefaultButtonStyles)`
    text-transform: uppercase;
    letter-spacing: 0.75rem;
    width: 100%;
    height: 96px;
    font-family: var(--lato);
    border: 1px solid var(--blackMain);
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5rem;
    div {
        width: 32px;
    }
`

export const PlusIcon = styled(FaPlus)``

