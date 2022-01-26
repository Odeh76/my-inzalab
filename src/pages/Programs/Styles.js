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
`

export const ProgramsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 64px;
    margin-bottom: 64px;

    // Mobile max-width: 640px
    @media only screen and (max-width: 40em) { 
    flex-direction: column;
    } 
`

export const ProgramsHeader = styled(MainHeader)`
position: absolute;
transform: rotate(90deg);
right: 0;
height: 720px;
`

export const InnerProgramsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 40%;
    height: 600px;

    // Mobile max-width: 640px
    @media only screen and (max-width: 40em) { 

    } 
`

export const Description = styled.div`
font-family: var(--lato);
width: 100%;
`