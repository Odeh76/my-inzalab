import meetTheITOsMainImage from '../../assets/img/meettheitosmainimage.svg'
import meetTheITOsHonoreeMainImage from '../../assets/img/meettheitoshonoreemainimage.svg'
import styled from 'styled-components'
import { MainHeader } from '../../components/Headers/MainHeaders/Styles'
import { LearnMoreBtn } from '../../components/Buttons/LearnMore/Styles'
import { GridContainer } from '../TwentyFiveUnderTwentyFiveIP/Styles'


export const ITOsMainImage = styled.img`
    width: 100%;
    height: 250px;
    background-image: url(${meetTheITOsMainImage});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const ITOsYellowDivider = styled.div`
    background-color: var(--yellow);
    width: 100%;
    height: 48px;
    margin-top: -4px;
`

export const ITOsMainHeader = styled(MainHeader)`
    position: absolute;
    top: 140px;
    right: 8px;
    color: var(--whiteMain);

    span {
        color: var(--yellow);
    }
`

export const ITOsHonoreeHeader = styled(MainHeader)`
    font-weight: 700;
    margin-left: 48px;
`

export const ITOsHonoreeContainer = styled.div`
    width: 100%;
    display: flex;
    margin-left: 48px;
    gap: 0.75rem;
`

export const ITOsHonoreeMainImage = styled.img`
    width: 60%;
    height: 250px;
    background-image: url(${meetTheITOsHonoreeMainImage});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const ITOsInsiderOfTheMonth = styled.div`
    width: 30%;
    height: 250px;
    border: 1px solid var(--blackMain);
    text-transform: uppercase;
    font-weight: 700;
    font-family: var(--lato);
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.75rem;

    span {
        text-transform: lowercase;
        letter-spacing: 0.3rem;
    }
`

export const ITOsHonoreeName = styled.h5`
    font-family: var(--lato);
    font-size: 1.5rem;
`

export const ITOsHonoreeJobTitle = styled.h6`
    font-family: var(--lato);
    font-size: 1.3rem;
`

export const ITOsHonoreeDescription = styled.p`
    font-family: var(--lato);
    font-weight: 300;
    font-size: 1rem;
    text-align: justify;
`

export const ITOsHonoreeViewProfileBtn = styled(LearnMoreBtn)`
    height: 60px;
`

export const ITOsHonoreeProfileContainer = styled(ITOsHonoreeContainer)`
    flex-direction: column;
    max-width: 300px;
    gap: 0;
`

export const ITOsCurrentInsidersHeader = styled(ITOsHonoreeHeader)`

`

export const ITOsCurrentInsidersGrid = styled(GridContainer)`
    margin-left: 48px;
`

export const ITOsPastInsidersHeader = styled(ITOsHonoreeHeader)``