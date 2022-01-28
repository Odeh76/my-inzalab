import styled from 'styled-components';
import aboutImage from '../../assets/img/aboutImage.png'
import aboutImage2 from '../../assets/img/aboutImage2.png'
import { MainHeader } from '../../components/Headers/MainHeaders/Styles';
import {FaUserTie, FaHiking, FaMobileAlt, FaRing, FaCodeBranch, FaSmile, FaCat, FaCrow, FaCoffee, FaSpider, FaKey} from 'react-icons/fa'


export const AdvertisingWord = styled.div`
  font-family: var(--lato);
  position: absolute;
  text-orientation: upright;
  writing-mode: vertical-lr;
  color: var(--mustard);
  font-size: 3.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  top: 90px;
  margin-left: -12px;
`


export const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`

export const Authentic = styled.h1`
  font-size: 3.5rem;
  font-family: var(--lato);
  text-transform: uppercase;
  letter-spacing: 1rem;
  font-weight: 900;
  position: relative;
`

export const AboutImage = styled.img`
  background-image: url(${aboutImage});
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin-top: -48px;
  `
  
  export const AboutImage2  = styled.img`
  background-image: url(${aboutImage2});
  width: 100%;
  height: 350px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`


export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;

@media only screen and (max-width: 64em) { 
  flex-direction: column;
}

`

export const ClientsList = styled.ul`
display: grid;
grid-template-columns: repeat(4, 1fr);
align-items: center;
justify-items: center;
list-style: none;
gap: 1rem;
width: 100%;
min-height: 75vh;
div {
  font-size: 5rem;
  padding: 1rem;
}
`

export const OptionButton = styled.button`
 
    font-family: var(--lato) !important;
    font-weight: 900 !important;
    background: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 3rem !important;
    
    div {
        display: flex;
        padding: 1.5rem;
        
    }

    .optionMobileIcon {
        margin-left: -0.59rem;
    }

    // Mobile max-width: 640px
@media only screen and (max-width: 40em) {
    width: 156px;
    height: 128px;
    font-size: 1.5rem;
    position: relative;
    margin: 0 auto 1rem auto;


        div {
            font-size: 3rem;
        }

        .optionMobileIcon {
            margin-left: -1.2rem;
        }


    }

    


// Tablet screens min-width 641px and max-width 1024px
@media only screen and (min-width: 40.063em) and (max-width: 64em) { 
    width: 50%;
    height: 250px;
    font-size: 3rem;

    .optionMobileIcon {
        margin-left: -1.2rem;
    }
}

// Laptop screens min-width 1025px and max-width: 1440px;
@media only screen and (min-width: 64.063em) and (max-width: 90em) { 
    width: 470px;
    height: 388px;
    margin: 0 auto;
    font-size: 3rem;
    div {
        font-size: 5rem;

    }

    .optionMobileIcon {
        margin-left: -2rem;
    }
} 

// Desktops and largest screens min-width 1441px and max-width 1920px
@media only screen and (min-width: 90.063em) and (max-width: 120em) {
    width: 470px;
    height: 388px;
    margin: 0 auto;
    font-size: 3rem;

    div {
        font-size: 5rem;
    }

    .optionMobileIcon {
        margin-left: -2rem;
    }
 }

 // Largest screens
@media only screen and (min-width: 120.063em) { 
    width: 470px;
    height: 388px;
    font-size: 3rem;

    div {
        font-size: 5rem;
    }

    .optionMobileIcon {
        margin-left: -2rem;
    }
}

`

export const BrandButton = styled(OptionButton)`
    
`

export const InnerImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  margin-top: -48px;
  width: 50%;
  gap: 1rem;

  // Mobile max-width: 640px
@media only screen and (max-width: 40em) { 
  width: 100%;
  position: relative;

} 
  
`



export const Typography = styled.div`
    font-family: var(--lato);
    width: 280px;
    text-align: left;
    font-size: 1.5rem;
    margin-top: 32px;
    position: relative;
    z-index: 3;
`


export const Typography2 = styled(Typography)`
  font-size: 1rem;
`

  
  export const InnerAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 50%;

  // Mobile max-width: 640px
@media only screen and (max-width: 40em) { 
  width: 100%;
  position: relative;

} 
`

export const YellowRectangle = styled.div`
-webkit-clip-path: polygon(46% 0, 100% 0%, 59% 100%, 0% 100%);
clip-path: polygon(46% 0, 100% 0%, 59% 100%, 0% 100%);
height: 822.8px;
width: 350px;
position: absolute;
background-color: var(--yellow);
top: 0;
right: 0;
transform: skew(-25deg);
opacity: 0.9;
transform-origin: 0 0;
`

export const YellowRectangleClients = styled.div`
-webkit-clip-path: polygon(46% 0, 100% 0%, 59% 100%, 0% 100%);
clip-path: polygon(46% 0, 100% 0%, 59% 100%, 0% 100%);
height: 400px;
width: 350px;
background-color: var(--yellow);
transform: skew(-20deg);
transform-origin: 0 0;
position: absolute;
left: 350px;
z-index: -1;
`
