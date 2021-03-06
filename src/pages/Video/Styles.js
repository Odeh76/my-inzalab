import styled from 'styled-components'
import { FaRegPlayCircle, FaArrowDown, FaLevelUpAlt } from 'react-icons/fa'
import { motion } from 'framer-motion/dist/framer-motion'


export const ArrowDown = styled(FaArrowDown)`
    font-size: 4rem;
    width: 32px;
    height: 32px;

    // Mobile 640px
    @media only screen and (max-width: 40em) {
        display: none;
    }
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 64px;
`
export const LevelUpArrow = styled(FaLevelUpAlt)`
    font-size: 4rem;
    position: absolute;
    right: 40px;
`

export const PlayIcon = styled(FaRegPlayCircle)``

export const PlayText = styled.div`
    font-family: var(--lato);
    font-size: 4rem;
    position: absolute;
    right: 90px;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 1rem;
`


export const VideoContainer = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`