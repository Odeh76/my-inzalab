import React from 'react'
import { HomeContainer, Logo, HomeImage } from './Styles'
import { WelcomeTo, RestartAlphabet, WeAreGenZ } from '../../components/Headers/SecondaryHeaders/Styles'
import About from '../About'
import Video from '../Video'
import TwentyFiveUnderTwentyFive from '../TwentyFiveUnderTwentyFive'
import Programs from '../Programs'
import Resources from '../Resources'
import Insiders from '../Insiders'
import Clients from '../Clients'
import { Layout } from '../../components'
// import Posts from '../../components/Posts'
import { motion } from 'framer-motion/dist/framer-motion'





function Home() {
    return (
        <Layout>
            <HomeContainer>
                <WelcomeTo>Welcome to</WelcomeTo>
                <Logo as={motion.div} animate={{rotateZ: 360}} transition={{duration: 0.5}} />
                <HomeImage />
                <WeAreGenZ>We're Gen Z.</WeAreGenZ>
                <RestartAlphabet>Let's restart the alphabet</RestartAlphabet>
            </HomeContainer>
            <Video />
            <About />
            <Clients />
            <TwentyFiveUnderTwentyFive />
            <Programs />
            <Resources />
            <Insiders />
        </Layout>
    )
}



export default Home
