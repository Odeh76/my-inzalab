import styled from "styled-components"
import { LearnMoreBtn } from "../../components/Buttons/LearnMore/Styles";
import { MainHeader } from '../../components/Headers/MainHeaders/Styles';
import twentyFiveMainImage from '../../assets/img/boyWithGlasses.png'


export const ProgramsMainImage = styled.img`
display: block;
background-image: url(${twentyFiveMainImage});
background-position: center center;
background-repeat: no-repeat;
width: 45%;
height: 626px;
background-size: cover;

// Mobile max-width: 640px
@media only screen and (max-width: 40em) { 
  width: 90%;
  height: 500px;
} 
`

export const ProgramsContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 64px;

    // Mobile max-width: 640px
@media only screen and (max-width: 40em) {
  flex-direction: column-reverse;
  align-items: flex-start;
} 
`

export const ProgramsHeader = styled(MainHeader)`
position: absolute;
transform: rotate(90deg);
right: 0;
height: 620px;

// Mobile max-width: 640px
@media only screen and (max-width: 40em) { 
  margin-left: 24px;
  top: 0;
  height: auto;
} 
`

export const InnerProgramsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 40%;
    height: 626px;

    // Mobile max-width: 640px
    @media only screen and (max-width: 40em) { 
      width: 90%;
      height: auto;
    } 
`

export const Description = styled.div`
font-family: var(--lato);
width: 100%;

// Mobile max-width: 640px
  @media only screen and (max-width: 40em) { 
    margin-bottom: 32px;
  } 
`