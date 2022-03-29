import React from 'react'
import { ResourcesDescription, ResourcesHeader, ResourcesContainer, ImageContainer, ResourcesImage, ResourcesImage2, ResourcesLinksContainer, ResourcesLinks } from './Styles'


function Resources () {
    return (
        <>
        <ResourcesContainer
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        transition={{duration: 0.75}}
        variants={{visible: {opacity: 1, x:0}, hidden: {opacity: 0, x:-100}}}
        >
            <ResourcesHeader>Resources</ResourcesHeader>
            <ResourcesDescription>A collection of articles, tips, how-tos and stories celebrating Gen Z professional excellence</ResourcesDescription>
            <ImageContainer>
                <ResourcesImage />
                <ResourcesImage2 />
            </ImageContainer>
            <ResourcesLinksContainer>
                <ResourcesLinks>2020 Gen Z Consumer Insights</ResourcesLinks>
                <ResourcesLinks>"pharetra massa massa ultricies mi quis hender..."</ResourcesLinks>
                <ResourcesLinks>How does Gen Z feel about the TikTok Ban?</ResourcesLinks>
            </ResourcesLinksContainer>
        </ResourcesContainer>
        </>
    )
}

export default Resources 
