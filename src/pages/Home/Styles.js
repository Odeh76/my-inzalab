import styled from 'styled-components'
import inzalabLogoDesktop from '../../assets/img/inzalabLogoDesktop.png'
import inzalab from '../../assets/img/inzaLab.png'

export const AboutContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    max-width: 960px;
    position: relative;
    background-color: green;
`

export const InnerImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`


export const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 960px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    margin-left: 110px;
    margin-top: -80px;
`