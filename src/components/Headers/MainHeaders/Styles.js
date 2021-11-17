import styled from "styled-components";


export const MainHeader = styled.h1`
    color: var(--blackMain);
    font-family: var(--lato);
    font-size: 3.5rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 1rem;


    // Mobile max-width: 640px
    @media only screen and (max-width: 40em) { 
        font-size: 2rem;
        letter-spacing: 0.3rem;
    } 
`
export const Authentic = styled(MainHeader)``
export const Programs = styled(MainHeader)``
export const TwentyFiveUnderTwentyFive = styled(MainHeader)``
export const Resources = styled(MainHeader)``
export const Insiders = styled(MainHeader)``
export const Advertising = styled(MainHeader)`
    text-orientation: upright;
    writing-mode: vertical-rl;
    color: var(--yellow);
    position: relative;
    right: 10px;
    bottom: 10px;
`