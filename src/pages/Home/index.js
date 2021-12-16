import React from 'react'
import styled from 'styled-components'
import { WelcomeTo, RestartAlphabet } from '../../components/Headers/SecondaryHeaders/Styles'
import Posts from '../../components/Posts'
import About from '../About'




const imageUrl = 'http://www.inzalabcontent.com/wp-content/uploads/2021/12/homePageLogoDesktop.png'

export const HomeImage = styled.img`
    background-image: url(${imageUrl});
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-position: center center;
`




function Home() {
    return (
        <>
        <WelcomeTo>Welcome to</WelcomeTo>
        <HomeImage />
        <RestartAlphabet>Let's restart the alphabet</RestartAlphabet>
        <About />
        <Posts />
        </>
    )
}

export default Home
