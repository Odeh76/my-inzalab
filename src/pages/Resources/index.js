import React from 'react'
import { Layout } from '../../components'
import { ResourcesDescription, ResourcesHeader, ResourcesContainer, ImageContainer, ResourcesImages, ResourcesLinksContainer, ResourcesLinks } from './Styles'


function Resources () {
    return (
        <>
        <ResourcesContainer>
            <ResourcesHeader>Resources</ResourcesHeader>
            <ResourcesDescription>A collection of articles, tips, how-tos and stories celebrating Gen Z professional excellence</ResourcesDescription>
            <ImageContainer>
                <ResourcesImages />
                <ResourcesImages />
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
