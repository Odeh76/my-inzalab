import styled from "styled-components"
import { Link } from 'react-router-dom'




export const Sidebar = styled.nav`
    width: 220px;
    height: 100%;
    position: fixed;
    left: 0;
    background-color: var(--whiteMain);

    @media only screen and (max-width: 48em) {
        width: 100%;
        height: 50%;
        bottom: 0;
    } 
`

export const NavLink = styled(Link)`
    font-family: var(--lato);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    font-size: 1.5rem;
    color: var(--blackMain);
    padding-top: 16px;
    cursor: pointer;
    letter-spacing: 0.05rem;
    font-weight: 900;

    @media only screen and (max-width: 48em) {
        align-items: flex-start;
    } 
`