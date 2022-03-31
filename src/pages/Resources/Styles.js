import styled from 'styled-components';
import { MainHeader } from '../../components/Headers/MainHeaders/Styles';
import resourcesPhoneImage from '../../assets/img/resourcesPhoneImage.png'
import resourcesMainImageTwoPeople from '../../assets/img/resourcesMainImageTwoPeople.svg'
import { motion } from 'framer-motion/dist/framer-motion'

export const ResourcesContainer = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
    
    // Mobile max-width: 640px
    @media only screen and (max-width: 40em) {
      margin: 0;
    }
    
    // Tablet screens min-width 641px and max-width 1024px
      @media only screen and (min-width: 40.063em) and (max-width: 64em) { 
    }
`

export const ResourcesDescription = styled.div`
    font-family: var(--lato);
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 16px;

    // Tablet screens min-width 641px and max-width 1024px
    @media only screen and (min-width: 40.063em) and (max-width: 64em) { 
      width: 60%;
  }
`

export const ImageContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 16px;

    // Mobile max-width: 640px
    @media only screen and (max-width: 40em) { 
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 16px;
    }
    
    // Tablet screens min-width 641px and max-width 1024px
      @media only screen and (min-width: 40.063em) and (max-width: 64em) { 
        display: flex;
        flex-direction: column;
        width: 60%;
    }
`

export const ResourcesLinks = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid var(--blackMain);
    color: var(--blackMain);
    width: 100%;
    height: 96px;
    font-family: var(--lato);
    font-size: 1.5rem;
    background: none;
    font-weight: 500;
`
export const ResourcesLinksContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    margin-top: 32px;

    // Mobile max-width: 640px
    @media only screen and (max-width: 40em) { 
      grid-template-columns: repeat(1, 1fr);
    }
    
    // Tablet screens min-width 641px and max-width 1024px
      @media only screen and (min-width: 40.063em) and (max-width: 64em) { 
      grid-template-columns: repeat(1, 1fr);
        width: 60%;
    }
`

export const ResourcesImage = styled.img`
    width: 100%;
    height: 400px;
    background-image: url(${resourcesPhoneImage});
    display: block;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

`

export const ResourcesImage2 = styled(ResourcesImage)`
    background-image: url(${resourcesMainImageTwoPeople})
`


export const ResourcesHeader = styled(MainHeader)`
`

