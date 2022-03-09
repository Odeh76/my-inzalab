import { MainHeader } from '../../components/Headers/MainHeaders/Styles';
import styled from 'styled-components'
import programsIPMainImage from '../../assets/img/programsIPMainImage.svg'


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

export const VideoContainer = styled.div`
    display: flex;
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
`

export const VideoImage = styled.img`
height: 100%;
width: 85%;
background-image: url(${programsIPMainImage});
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
`

export const PhotoHeader = styled(VideoHeader)``
export const PhotoImage = styled(VideoImage)``
export const DesignHeader = styled(VideoHeader)``
export const DesignImage = styled(VideoImage)`
    height: 400px;
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