import styled from "styled-components"
import { Link } from 'react-router-dom'
import {FaBars, FaTimes, FaUserCircle} from 'react-icons/fa'
import navbarLogoLink from '../../assets/img/navbarLogoLink.svg'

export const UserCircle = styled(FaUserCircle)`
display: block;
width: 60px;
min-height: 60px;
padding-top: 16px;
margin: 0 16px;
`


export const Bars = styled(FaBars)`
display: ${({openMenu}) => openMenu ? 'none' : 'block'};
width: 60px;
min-height: 60px;
padding-top: 16px;
cursor: pointer;
margin: 0 16px;
`

export const CloseButton = styled(FaTimes)`
    min-height: 60px;
    width: 60px;
    display: ${({openMenu}) => openMenu ? 'block' : 'none'};
    padding-top: 16px;
    margin: 0 16px;
`



export const Sidebar = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: fixed;
    left: 0;
    z-index: 5;
    background-color: var(--whiteMain);
    width: ${({openMenu}) => openMenu ? '225px' : '100px'};
    font-family: var(--lato);
    
    @media only screen and (max-width: 48em) {
        width: 100%;
        height: ${({openMenu}) => openMenu ? '70%' : '84px'};
        flex-direction: ${({openMenu}) => openMenu ? 'column' : 'row'};
        bottom: 0;
        align-items: ${({openMenu}) => openMenu ? 'flex-start' : 'flex-end'};
        
    } 
`

export const NavbarLogo = styled(Link)`
    display: ${({openMenu}) => openMenu ? 'none' : 'block'};
    background: url(${navbarLogoLink});
    min-height: 80px;
    width: 64px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 16px;

    @media only screen and (max-width: 48em) {
        display: block;

    } 
`

export const NavLink = styled(Link)`
    display: ${({openMenu}) => openMenu ? 'block' : 'none'};
    font-family: var(--lato);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;
    color: var(--blackMain);
    cursor: pointer;
    letter-spacing: 0.05rem;
    padding-top: 16px;
    margin: 0 16px;
    font-weight: 900;

    @media only screen and (max-width: 48em) {
    } 
`

export const NavBorder = styled.div`
    border: 1px solid var(--blackMain);
    width: 100%;
`