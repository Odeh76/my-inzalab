import styled from 'styled-components'
import inzalabLogoDesktop from '../../assets/img/inzalabLogoDesktop.png'
import inzalabLogoMobile from '../../assets/img/inzalabLogoMobile.svg'
import inzalab from '../../assets/img/inzaLab.svg'
import inzalabMobile from '../../assets/img/inzalabMobile.svg'




export const HomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export const HomeImage = styled.div`
    background-image: url(${inzalabLogoDesktop});
    width: 100%;
    height: 340px;
    background-repeat: no-repeat;
    background-position: center center;
    border: 0;

    // Mobile max-width: 640px
    @media only screen and (max-width: 40em) {
        background-image: url(${inzalabLogoMobile});
    }
`

export const Logo = styled.div`
    background-image: url(${inzalab});
    width: 550px;
    height: 120px;
    position: absolute;
    background-repeat: no-repeat;
    background-position: center center;
    margin-top: -128px;
    margin-left: 96px;
    
    // Mobile max-width: 640px
    @media only screen and (max-width: 40em) {
        margin-top: -48px;
        margin-left: 32px;
        width: 300px;
        height: 60px;
        background-image: url(${inzalabMobile});
    }


`