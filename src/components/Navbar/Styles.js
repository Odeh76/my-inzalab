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
order: 2;

`

export const BottomUserCircle = styled(FaUserCircle)`

    display: block;
    width: 60px;
    min-height: 60px;
    padding-right: 24px;

@media only screen and (min-width: 64em) {
    display: none;
}
`

export const Bars = styled(FaBars)`
display: ${({openMenu}) => openMenu ? 'none' : 'block'};
width: 60px;
min-height: 60px;
padding-top: 16px;
cursor: pointer;
margin: 0 16px;
`

export const BottomBars = styled(FaBars)`
    display: ${({openMenu}) => openMenu ? 'none' : 'block'};
    width: 60px;
    min-height: 60px;
    cursor: pointer;

@media only screen and (min-width: 64em) {
    display: none;
}
`

export const CloseButton = styled(FaTimes)`
    min-height: 60px;
    width: 60px;
    display: ${({openMenu}) => openMenu ? 'block' : 'none'};
    padding-top: 16px;
    margin: 0 16px;
`

export const BottomCloseButton = styled(FaTimes)`
    min-height: 60px;
    width: 60px;
    display: ${({openMenu}) => openMenu ? 'block' : 'none'};

@media only screen and (min-width: 64em) {
    display: none;
}
`

export const BottomNavBar = styled.nav`
    width: 100%;
    position: fixed;
    z-index: 5;
    background-color: var(--whiteMain);
    bottom: 0;
    
    div {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }

    @media only screen and (min-width: 64em) {
        display: none;
    }
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
    @media only screen and (max-width: 64em) {
        margin: 0;
        padding: 0;
        display: none;        
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
    cursor: pointer;

    @media only screen and (max-width: 48em) {
        display: block;

    } 
`

export const BottomNavbarLogo = styled(Link)`
    display: ${({openMenu}) => openMenu ? 'none' : 'block'};
    background: url(${navbarLogoLink});
    min-height: 80px;
    width: 64px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    


@media only screen and (min-width: 64em) {
    display: none;
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
    margin: 0 16px;
    font-weight: 900;
    padding-top: 16px;

    @media only screen and (max-width: 48em) {
    } 
`


export const NavBorder = styled.div`
    border: 1px solid var(--blackMain);
    width: 100%;
    `
    
export const NavBorderBottom = styled.div`
display: ${({openMenu}) => openMenu ? 'block' : 'none'} !important;
width: 100%;
border: 1px solid var(--blackMain);
`