import styled from "styled-components";
import { ResetDefaultButtonStyles } from "../ResetDefaultButtonStyles/Styles";



export const WhatIsInzaLab = styled(ResetDefaultButtonStyles)`
    font-family: var(--lato);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000000;
    text-transform: uppercase;
    font-weight: 900;
    width: 100%;
    height: 80px;
    position: relative;
    z-index: 3;

   // Mobile max-width: 640px
  @media only screen and (max-width: 40em) { 
    height: 64px;
  }

    
`

export const ForAndByGenZ = styled(ResetDefaultButtonStyles)`
    font-family: var(--lato);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000000;
    justify-content: flex-start;
    width: 100%;
    height: 80px;
    margin-left: -12px;
    
    span {
        text-transform: uppercase;
        font-size: 3.5rem;
        font-weight: 900;
        letter-spacing: 1rem;
    }
    
    div {
        text-transform: uppercase;
        width: 60px;
        font-size: 1.5rem;
        font-weight: 600;
    }

    // Mobile max-width: 640px
    @media only screen and (max-width: 40em) { 
    } 
`