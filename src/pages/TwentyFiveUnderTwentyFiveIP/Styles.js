import styled from 'styled-components'
import twentyFiveMainImage from '../../assets/img/twentyfiveundertwentyfivemainimage.svg'
import twentyFiveMainImageMobile from '../../assets/img/twentyfiveundertwentyfivemainimagemobile.svg'
import { MainHeader } from '../../components/Headers/MainHeaders/Styles'


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
    background-image: url(${twentyFiveMainImage});
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    // Mobile max-width: 640px
    @media only screen and (max-width: 40em) {
    } 
`