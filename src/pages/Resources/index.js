import React from 'react'
import { ResourcesDescription, ResourcesHeader, ResourcesContainer, ImageContainer, ResourcesImages } from './Styles'

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
        </ResourcesContainer>
        </>
    )
}

export default Resources 
