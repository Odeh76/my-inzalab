import React from 'react'
import { WelcomeTo, RestartAlphabet, WeAreGenZ } from '../../components/Headers/SecondaryHeaders/Styles'
import About from '../About'
import Video from '../Video'
import { HomeContainer, Logo, HomeImage } from './Styles'
// import Posts from '../../components/Posts'






function Home() {
    return (
        <>
        <HomeContainer>
            <WelcomeTo>Welcome to</WelcomeTo>
            <Logo />
            <HomeImage />
            <WeAreGenZ>We're Gen Z.</WeAreGenZ>
            <RestartAlphabet>Let's restart the alphabet</RestartAlphabet>
        </HomeContainer>
            <Video />
            <About />
        </>
    )
}



export default Home
