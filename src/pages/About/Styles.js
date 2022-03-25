import styled from 'styled-components';
import aboutImage from '../../assets/img/aboutImage.png'
import { MainHeader } from '../../components/Headers/MainHeaders/Styles';

export const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  margin-bottom: 80px;
`

export const AdvertisingWord = styled.div`
  font-family: var(--lato);
  position: absolute;
  text-orientation: upright;
  writing-mode: vertical-lr;
  color: var(--mustard);
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  top: 80px;
  margin-left: 65px;

  // Mobile max-width: 640px
  @media only screen and (max-width: 40em) { 
    font-size: 2.3rem;
    letter-spacing: 0.3rem;
    margin: 0;
    top: 0;
    margin-left: 32px;
  }
`

  export const Authentic = styled(MainHeader)`

    margin-left: 80px;
    position: relative;
  // Mobile max-width: 640px
  @media only screen and (max-width: 40em) {
    margin: 0;
    font-size: 2rem;
    bottom: 32px;
    margin-left: 36px;
  }
  `

  export const AboutImage = styled.img`
  background-image: url(${aboutImage});
  width: 100%;
  min-height: 250px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin-top: -48px;
  
  // Mobile max-width: 640px
  @media only screen and (max-width: 40em) {
    min-height: 200px; 
  }
  `
  
  export const AboutImage2  = styled(AboutImage)`
  margin: 0;
  
  // Mobile max-width: 640px
  @media only screen and (max-width: 40em) { 
  }
`




export const InnerImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 0;
  top: 0;
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
    margin-bottom: 32px;
    position: relative;
    z-index: 3;

    // Mobile max-width: 640px
    @media only screen and (max-width: 40em) { 
      width: 100%;
      margin-top: 16px;
      margin-bottom: 16px;
      text-align: justify;
    }
`


export const Typography2 = styled(Typography)`
  font-size: 1.2rem;
`

  
  export const InnerAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 0;
  top: 42px;
  height: 100%;
    width: 50%;

  // Mobile max-width: 640px
@media only screen and (max-width: 40em) { 
  position: relative;
  width: 100%;
  align-items: center;

} 
`

export const YellowRectangle = styled.div`
-webkit-clip-path: polygon(46% 0, 100% 0%, 59% 100%, 0% 100%);
clip-path: polygon(46% 0, 100% 0%, 59% 100%, 0% 100%);
height: 100%;
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
