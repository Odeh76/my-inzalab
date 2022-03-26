import styled from 'styled-components'
import footerLeftImage from '../../assets/img/footerLeftImage.png'
import footerRightImage from '../../assets/img/footerRightImage.png'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
// import { NewsLetterHeader } from '../Headers/SecondaryHeaders/Styles'
import { motion } from 'framer-motion/dist/framer-motion'


export const FooterContainer = styled(motion.div)`
    width: 100%;
    position: relative;
    min-height: 100vh;
`

export const FooterLink = styled(Link)`
    font-size: 1.5rem;
    color: var(--blackMain);    
    font-family: var(--lato);
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    padding-top: 16px;
    margin-left: 8px;
`

export const FooterLinkArrow = styled(FaArrowRight)`
    margin-right: 8px;
    margin-bottom: -2px;
`

export const FooterLeftImage = styled.img`
    width: 100%;
    background-image: url(${footerLeftImage});
    height: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    
`

export const FooterRightImage = styled(FooterLeftImage)`
    background-image: url(${footerRightImage});
`

export const LeftFooterContainer = styled.div`
    width: 49%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
`
 
export const RightFooterContainer = styled.div`
width: 49%;
height: 100%;
border: 1px solid var(--blackMain);
position: absolute;
right: 0;
top: 0;
display: flex;
flex-direction: column;
align-items: flex-start;
`

export const NewsLetterContainer = styled.div`
    height: 45%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`


export const NewsLetterInput = styled.input`
    width: 98%;
    height: 32px;
    border-bottom: 1px solid var(--blackMain);
    border-top: none;
    border-right: none;
    border-left: none;
`

export const FooterIconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 2rem;
`

export const FooterInstagramLink = styled(Link)`
`
export const FooterTwitterLink = styled(Link)`
`
export const FooterFacebookLink = styled(Link)`
`
export const FooterYoutubeLink = styled(Link)`
`