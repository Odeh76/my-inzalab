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
`

export const HowItWorksHeader = styled(MainHeader)`
    font-size: 2rem;
    letter-spacing: 0.5rem;
    font-weight: 700;
    margin-left: 64px;
`

export const HowItWorksDescription = styled.p`
    font-family: var(--lato);
    font-weight: 500;
    font-size: 1.5rem;
    margin-left: 64px;

`

export const DesignDescription = styled.p`
    font-family: var(--lato);
    max-width: 300px;
`

export const HowItWorksContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`

export const InnerInnerContainer = styled.div`
    display: flex;
`

export const ProgramsIPContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
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
`

export const VideoImage = styled.img`
height: 100%;
width: 40%;
background-image: url(${programsIPMainImage});
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
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
`

// Top Picks
export const TopBoxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    // Mobile max-width: 640px
@media only screen and (max-width: 40em) {
    flex-direction: column;
}
`

export const TopBoxInnerContainer = styled.div`
    width: 32.2%;
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

// Mobile max-width: 640px
@media only screen and (max-width: 40em) {
    width: 90%;
    height: 58px;
    margin: auto;
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

export const AllHeader = styled(MainHeader)``

export const SubmissionsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`

export const SubmissionsGridImage = styled.img`
    width: 100%;
    height: 260px;
    background-image: url(${submissionsThumbnail});
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

