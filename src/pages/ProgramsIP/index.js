import React from 'react'
import { Layout } from '../../components'
import { HowItWorksContainer, HowItWorksDescription, HowItWorksHeader, ProgramsIPContainer, ProgramsIPHeader, ProgramsIPMainImage, YellowVector } from './Styles'

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
    </Layout>
  )
}

export default ProgramsIP