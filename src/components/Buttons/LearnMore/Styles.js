import styled from "styled-components";
import { ResetDefaultButtonStyles } from "../ResetDefaultButtonStyles/Styles";




export const LearnMoreBtn = styled(ResetDefaultButtonStyles)`
    background-color: var(--yellow);
    width: 100%;
    height: 90px;
    font-family: var(--lato);
    text-transform: uppercase;

    // Mobile max-width: 640px
@media only screen and (max-width: 40em) { 
    height: 56px;
} 
`