import styled from "styled-components"
import { MainHeader } from '../../components/Headers/MainHeaders/Styles';
import twentyFiveMainImage from '../../assets/img/boyWithGlasses.png'
import { motion } from 'framer-motion/dist/framer-motion'


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

export const ProgramsContainer = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 64px;
    margin-bottom: 80px;

    // Mobile max-width: 640px
@media only screen and (max-width: 40em) {
  flex-direction: column-reverse;
  align-items: flex-start;
  margin: 0;
} 
`

export const ProgramsHeader = styled(MainHeader)`
position: absolute;
transform: rotate(90deg);
right: 0;
height: 620px;

// Mobile max-width: 640px
@media only screen and (max-width: 40em) { 
  height: 320px;
  top: 60px;
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