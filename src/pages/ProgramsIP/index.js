import React from 'react'
import { Layout } from '../../components'
import { HowItWorksContainer, HowItWorksDescription, HowItWorksHeader, VideoInnerContainer, PhotoHeader, PhotoImage, ProgramsIPContainer, ProgramsIPHeader, ProgramsIPMainImage, VideoContainer, VideoHeader, VideoImage, YellowVector, DesignHeader, DesignImage, InnerInnerContainer, PrizeHeader, InstructionsHeader, DeadlineHeader, DesignContainer, DesignDescription, TopBoxContainer, TopBoxInnerContainer, TopBoxHeader, TopOneImage, TopTwoImage, TopThreeImage, TopVideoHeader, TopDesignHeader, TopPhotoHeader, TopSubmissionTitleHeader, TopSubmissionAuthorHeader, TopSubmissionDescription, ViewSubmissionButton, AllHeader, SubmissionsHeader, SubmissionsGrid, SubmissionsGridImage, ViewMoreButton, PlusIcon } from './Styles'

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
          <VideoHeader>Video <PlusIcon /></VideoHeader>
          <VideoImage />
          </InnerInnerContainer>
          <InnerInnerContainer>
          <PhotoHeader>Photo <PlusIcon /></PhotoHeader>
          <PhotoImage />
          </InnerInnerContainer>
        </VideoInnerContainer>
        <DesignContainer>
        <PrizeHeader>Prize</PrizeHeader>
        <DesignDescription>1st: $2,000 Scholarship Award</DesignDescription>
        <InstructionsHeader>Instructions</InstructionsHeader>
        <DesignDescription>
        Vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet.
        Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus.
        Email your submission to Quynh Nguyen, the inZa Lab Coordinator, at quynh@creativedigitalagency.com no later than the program submission deadline. To be considered, please include the following in your email submission: 
        - Full Name
        - School
        - Age
        </DesignDescription>
        <DeadlineHeader>Deadline</DeadlineHeader>
        <DesignDescription>Due on December 31, 2022</DesignDescription>
        </DesignContainer>
      </VideoContainer>

      {/* Top Picks */}
      <TopBoxContainer>
        <TopBoxInnerContainer>
          <TopBoxHeader>Top 1</TopBoxHeader>
          <TopOneImage />
          <TopVideoHeader>Video</TopVideoHeader>
          <TopSubmissionTitleHeader>Submission Title</TopSubmissionTitleHeader>
          <TopSubmissionAuthorHeader>By Odio Ut</TopSubmissionAuthorHeader>
          <TopSubmissionDescription>
          Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi.
          </TopSubmissionDescription>
          <ViewSubmissionButton>View Submission</ViewSubmissionButton>
        </TopBoxInnerContainer>
        <TopBoxInnerContainer>
          <TopBoxHeader>Top 2</TopBoxHeader>
          <TopTwoImage />
          <TopDesignHeader>Design</TopDesignHeader>
          <TopSubmissionTitleHeader>Submission Title</TopSubmissionTitleHeader>
          <TopSubmissionAuthorHeader>By Odio Ut</TopSubmissionAuthorHeader>
          <TopSubmissionDescription>
          Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi.
          </TopSubmissionDescription>
          <ViewSubmissionButton>View Submission</ViewSubmissionButton>
        </TopBoxInnerContainer>
        <TopBoxInnerContainer>
          <TopBoxHeader>Top 3</TopBoxHeader>
          <TopThreeImage />
          <TopPhotoHeader>Photo</TopPhotoHeader>
          <TopSubmissionTitleHeader>Submission Title</TopSubmissionTitleHeader>
          <TopSubmissionAuthorHeader>By Odio Ut</TopSubmissionAuthorHeader>
          <TopSubmissionDescription>
          Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi.
          </TopSubmissionDescription>
         <ViewSubmissionButton>View Submission</ViewSubmissionButton>
        </TopBoxInnerContainer>
      </TopBoxContainer>

      {/* All Submissions */}

      <AllHeader>All Submissions</AllHeader>
      <SubmissionsGrid>
        <SubmissionsGridImage />
        <SubmissionsGridImage />
        <SubmissionsGridImage />
        <SubmissionsGridImage />
        <SubmissionsGridImage />
        <SubmissionsGridImage />
      </SubmissionsGrid>
      <ViewMoreButton><div>View More</div> <PlusIcon /></ViewMoreButton>
    </Layout>
  )
}


export default ProgramsIP