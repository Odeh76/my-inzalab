import styled from 'styled-components';
import aboutImage from '../../assets/img/aboutImage.png'
import aboutImage2 from '../../assets/img/aboutImage2.png'
import { MainHeader } from '../../components/Headers/MainHeaders/Styles';


export const AdvertisingWord = styled.div`
  font-family: var(--lato);
  position: absolute;
  text-orientation: upright;
  writing-mode: vertical-lr;
  color: var(--mustard);
  font-size: 3.5rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-left: -12px;
  letter-spacing: 0.4rem;
  margin-top: 72px;
`


export const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-left: 4em;
  position: relative;
`

export const Authentic = styled(MainHeader)`
  
`

export const AboutImage = styled.img`
  background-image: url(${aboutImage});
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center center;
`

export const AboutImage2  = styled.img`
  background-image: url(${aboutImage2});
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center center;
`

export const InnerImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
`



export const Typography = styled.div`
    font-family: var(--lato);
    width: 60%;
    text-align: justify;
    font-size: 1.5rem;
    margin-top: 32px;
`

  
  export const InnerAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  margin-top: 84px;
  width: 50%;

  // Mobile max-width: 640px
@media only screen and (max-width: 40em) { 
  width: 100%;
  position: relative;

} 
`