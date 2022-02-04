import styled from 'styled-components';
import { MainHeader } from '../../components/Headers/MainHeaders/Styles';
import insidersMainImage from '../../assets/img/insidersMainImage.png'


export const Description = styled.div`
    font-family: var(--lato);
    width: 100%;
`


export const InsidersContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 64px;
    min-height: 100vh;

    // Mobile max-width: 640px
    @media only screen and (max-width: 40em) { 
    flex-direction: column;
    } 
`

export const InsidersHeader = styled(MainHeader)`
position: absolute;
transform: rotate(-90deg);
left: 0;
height: 520px;
`

export const InsidersInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 40%;
    height: 626px;

    // Mobile max-width: 640px
    @media only screen and (max-width: 40em) { 

    } 
`

export const InsidersMainImage = styled.img`
    display: block;
    background-image: url(${insidersMainImage});
    background-position: center center;
    background-repeat: no-repeat;
    width: 45%;
    height: 626px;
    background-size: cover;
`