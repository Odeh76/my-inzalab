import styled from "styled-components"
import { MainHeader } from '../../components/Headers/MainHeaders/Styles';
import twentyFiveMainImage from '../../assets/img/boyWithGlasses.png'

export const TwentyFiveMainImage = styled.img`
  display: block;
  background-image: url(${twentyFiveMainImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 45%;
  height: 626px;

  // Mobile max-width: 640px
@media only screen and (max-width: 40em) {
  width: 90%;
  height: 500px; 
} 
`

export const TwentyFiveContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 64px;
  margin-bottom: 80px;

  // Mobile max-width: 640px
@media only screen and (max-width: 40em) {
  flex-direction: column-reverse;
  align-items: flex-end;
  margin: 0;
} 
`

export const TwentyFiveHeader = styled(MainHeader)`
position: absolute;
transform: rotate(-90deg);
left: 0;
height: 620px;


// Mobile max-width: 640px
@media only screen and (max-width: 40em) {
  height: 350px;
  top: 60px;
  padding-bottom: 24px
} 
`

export const InnerTwentyFiveContainer = styled.div`
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
  align-items: flex-start;
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
