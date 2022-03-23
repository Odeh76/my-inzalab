import styled from "styled-components";


export const MainHeader = styled.h1`
    color: ${props => props.theme.color};
    font-family: var(--lato);
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 1rem;


    // Mobile max-width: 640px
    @media only screen and (max-width: 40em) {
        font-size: 2rem;
    } 
`
