import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Layout } from '../../components'
import { HowItWorksContainer, HowItWorksDescription, HowItWorksHeader, VideoInnerContainer, PhotoHeader, PhotoImage, ProgramsIPContainer, ProgramsIPHeader, ProgramsIPMainImage, VideoContainer, VideoHeader, VideoImage, YellowVector, DesignHeader, DesignImage, InnerInnerContainer, PrizeHeader, InstructionsHeader, DeadlineHeader, DesignContainer } from './Styles'

function ProgramsIP() {
  return (
    <Layout>
      <ProgramsIPContainer>
        <ProgramsIPHeader>Programs</ProgramsIPHeader>
        <ProgramsIPMainImage />
        <HowItWorksContainer>
          <YellowVector>
            <div>
              Eget felis eget nunc lobortis mattis aliquam faucibus em
              purus in massa tempor a
              nec feugiat nisl pretiu 
              fusce id velit ut.
            </div>
          </YellowVector>
          <HowItWorksHeader>How it works</HowItWorksHeader>
          <HowItWorksDescription>
          Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi.
          </HowItWorksDescription>
        </HowItWorksContainer>
      </ProgramsIPContainer>
      <VideoContainer>
        <VideoInnerContainer>
          <InnerInnerContainer>
          <VideoHeader>Video <FaPlus /></VideoHeader>
          <VideoImage />
          </InnerInnerContainer>
          <InnerInnerContainer>
          <PhotoHeader>Photo <FaPlus /></PhotoHeader>
          <PhotoImage />
          </InnerInnerContainer>
        </VideoInnerContainer>
        <DesignHeader>Design</DesignHeader>
        <DesignImage />  
        <DesignContainer>
        <PrizeHeader>Prize</PrizeHeader>
        <InstructionsHeader>Instructions</InstructionsHeader>
        <DeadlineHeader>Deadline</DeadlineHeader>
        </DesignContainer>
      </VideoContainer>
    </Layout>
  )
}

export default ProgramsIP