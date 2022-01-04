import styled from 'styled-components'
import inzalabLogoDesktop from '../../assets/img/inzalabLogoDesktop.png'
import inzalab from '../../assets/img/inzaLab.png'


export const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 960px;
    margin: 0 auto;
`


export const HomeImage = styled.div`
    background-image: url(${inzalabLogoDesktop});
    width: 100%;
    height: 80%;
    background-repeat: no-repeat;
    background-position: center center;
    border: 0;
`

export const Logo = styled.div`
    background-image: url(${inzalab});
    width: 100%;
    height: 150px;
    position: absolute;
    background-repeat: no-repeat;
    background-position: center center;
    top: 250px;
    margin-left: 60px;
`