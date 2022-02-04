import styled from 'styled-components'
import { FaRegPlayCircle, FaArrowDown, FaLevelUpAlt } from 'react-icons/fa'


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
    background-color: green;
`
export const LevelUpArrow = styled(FaLevelUpAlt)`
    font-size: 4rem;
    position: absolute;
    right: 0;
    margin-right: 64px;
`

export const PlayIcon = styled(FaRegPlayCircle)``

export const PlayText = styled.div`
    font-family: var(--lato);
    font-size: 4rem;
    position: absolute;
    right: 0;
    margin-right: 128px;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 1rem;
`


export const VideoContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`