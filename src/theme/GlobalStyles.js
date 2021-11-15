import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const lightTheme = {
  color: "var(--yellow)",
  background: "var(--yellow)",
  font: "var(--lato)"
};

export const darkTheme = {
  color: "var(--red)",
  background: "var(--red)",
  font: "var(--lato)"
};


export const GlobalStyles = createGlobalStyle`
    ${normalize}

    :root {
        --blackMain: #000000;
        --faded: #f7f7f7;
        --yellow: rgba(255, 222, 89, 0.8);
        --lato: Lato;
        --whiteMain: #ffffff;
        --red: rgba(255, 87, 87, 0.8);
        --mustard: rgba(238, 201, 77, 1);
        --gray: #808080;
        --mobileHeaderFS: 3rem;
        --desktopHeaderFS: 5rem;
        --desktopTextFS: 5rem;
      }
      
      ::-webkit-scrollbar {
        display: none;
      }
      
      
      // Mobile max-width: 640px
      @media only screen and (max-width: 40em) { } 
      
      // Tablet screens min-width 641px and max-width 1024px
      @media only screen and (min-width: 40.063em) and (max-width: 64em) { }
      
      // Laptop screens min-width 1025px and max-width: 1440px;
      @media only screen and (min-width: 64.063em) and (max-width: 90em) { } 
      
      // Desktops and largest screens min-width 1441px
      @media only screen and (min-width: 90.063em) { }
      
  
`