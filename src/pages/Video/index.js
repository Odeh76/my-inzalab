import React from 'react'
import { ArrowDown, IconContainer, LevelUpArrow, PlayText, VideoContainer } from './Styles'
import ReactPlayer from 'react-player/lazy'



const videoUrl = 'https://www.youtube.com/watch?v=ci27hxo9PL8'


function Video() {
    return (
        <VideoContainer
        initial="hidden" 
        whileInView="visible" 
        viewport={{once: true}} 
        transition={{duration: 0.75}} 
        variants={{visible: {opacity: 1, scale: 1}, hidden: {scale: 0, opacity: 0}}}
        >
            <ReactPlayer controls height={400} width={'100%'} url={videoUrl} />
        <IconContainer>
            <ArrowDown />
            <LevelUpArrow />
            <PlayText>Play</PlayText>
        </IconContainer>
        </VideoContainer>
    )
}

export default Video
