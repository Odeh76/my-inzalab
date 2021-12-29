import React from 'react'
import styled from 'styled-components'
import { WelcomeTo, RestartAlphabet } from '../../components/Headers/SecondaryHeaders/Styles'
import Posts from '../../components/Posts'
import About from '../About'
import inzalabLogoDesktop from '../../assets/img/inzalabLogoDesktop.png'
import inzalab from '../../assets/img/inzaLab.png'

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
    height: 80%;
    background-repeat: no-repeat;
    background-position: center center;
    border: 0;
    position: absolute;
    top: 0;
    margin-left: 48px;
`


function Home() {
    return (
        <>
        <Container>
            <WelcomeTo>Welcome to</WelcomeTo>
            <Logo />
            <HomeImage />
            <RestartAlphabet>Let's restart the alphabet</RestartAlphabet>
            <About />
            <Posts />
        </Container>
        </>
    )
}

export const Container = styled.div`
    width: 100%;
    height: 85vh;
    max-width: 960px;
    margin: auto;
`

export default Home
