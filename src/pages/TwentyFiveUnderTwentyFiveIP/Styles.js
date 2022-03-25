import styled from 'styled-components'
import twentyFiveIPMainImage from '../../assets/img/twentyfiveundertwentyfivemainimage.svg'
import workImage from '../../assets/img/twentyfiveundertwentyfiveipworkimage.svg'
import twentyFiveIPMainContentImage from '../../assets/img/twentyfiveundertwentyfiveipmainimage.svg'
import twentyFiveIPGridImage from '../../assets/img/twentyfiveundertwentyfiveipgridimage.svg'
import { WhatIsInzaLab } from '../../components/Buttons/ArticleLinks/ArticleLinksStyles'
import { LearnMoreBtn } from '../../components/Buttons/LearnMore/Styles'
import { MainHeader } from '../../components/Headers/MainHeaders/Styles'



export const ContentContainer = styled.div`
    display: flex;
    gap: 16px;

    // max-width: 992px
    @media only screen and (max-width: 62em) { 
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const ContentContainer2 = styled(ContentContainer)`
    flex-direction: row-reverse;

    // max-width: 992px
    @media only screen and (max-width: 62em) { 
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }    
`

export const FeaturingHeader = styled(MainHeader)`
    

`

export const FeaturingBtn = styled(WhatIsInzaLab)`
    color: var(--yellow);
    text-transform: uppercase;
    font-weight: 900;
    font-size: 3rem;
`

export const FounderContainer = styled.div`
    width: 40%;

    // max-width: 992px
    @media only screen and (max-width: 62em) { 
        width: 100%;
    }    
`

export const FounderDescription = styled.p`
    font-family: var(--lato);
    font-size: 1rem;
`

export const FounderNameHeader = styled.h6`
    font-family: var(--lato);
    font-weight: 700;
    font-size: 1.5rem;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 1rem;

    // max-width: 640px
    @media only screen and (max-width: 40em) { 
        grid-template-columns: repeat(1, 1fr);
    }
    // Tablet screens min-width 641px and max-width 1024px
    @media only screen and (min-width: 40.063em) and (max-width: 64em) {
        grid-template-columns: repeat(2, 1fr);
     }


`

export const GridImages = styled.img`
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url(${twentyFiveIPGridImage})
`



export const ViewProfileBtn = styled(LearnMoreBtn)`
    font-weight: 700;
`

export const TwentyFiveIPContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`


export const TwentyFiveIPMainHeader = styled(MainHeader)`
`

export const TwentyFiveIPMainImage = styled.img`
    background-image: url(${twentyFiveIPMainImage});
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    // Mobile max-width: 640px
    @media only screen and (max-width: 40em) {
    } 
`

export const TwentyFiveIPMainContentImage = styled.img`
    background-image: url(${twentyFiveIPMainContentImage});
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    // Mobile max-width: 640px
    @media only screen and (max-width: 40em) {
    } 
`

export const TwentyFiveIPMainImageContainer = styled.div`
    width: 40%;
`

export const WorkImage = styled.img`
    width: 100%;
    height: 40%;
    background-image: url(${workImage})
`

export const WorkImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 20%;
    gap: 1rem;
`