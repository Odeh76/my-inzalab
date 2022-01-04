import React from 'react'
import { ArrowDown, IconContainer, LevelUpArrow, PlayText, VideoContainer } from './Styles'
import ReactPlayer from 'react-player/lazy'



const videoUrl = 'https://www.youtube.com/watch?v=ci27hxo9PL8'


function Video() {
    return (
        <VideoContainer>
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
