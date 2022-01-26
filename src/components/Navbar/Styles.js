import styled from "styled-components"
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

export const Bars = styled(FaBars)`
    font-size: 2rem;
    display: ${({openMenu}) => openMenu ? 'none' : 'block'};

`

export const CloseButton = styled(FaTimes)`
    font-size: 2rem;
    display: ${({openMenu}) => openMenu ? 'none' : 'block'};

`



export const Sidebar = styled.nav`
    display: ${({open}) => open ? 'none' : 'block'};
    height: 100%;
    position: fixed;
    left: 0;
    z-index: 5;
    background-color: var(--whiteMain);

    @media only screen and (max-width: 48em) {
        width: 100%;
        height: 50%;
        bottom: 0;
    } 
`

export const NavLink = styled(Link)`
    display: flex;
    justify-content: center;
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
        align-items: flex-start;
    } 
`