import { motion } from 'framer-motion/dist/framer-motion'
import styled from 'styled-components'
import { SecondaryHeader } from '../../components/Headers/SecondaryHeaders/Styles'
import { FaCrow } from 'react-icons/fa'
export const ClientsContainer = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ClientsGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    gap: 1rem;
`

export const GenZButtonContainer = styled.div`
    display: flex;
    gap: 1rem;

    // Mobile max-width: 640px
    @media only screen and (max-width: 40em) { 
        flex-direction: column;
        align-items: center;
    } 
`


export const HereAsAHeader = styled(SecondaryHeader)`
    font-size: 1.2rem;
`
export const ClientsHeader = styled(SecondaryHeader)`
    font-size: 1.2rem;
`

export const CrowIcon = styled(FaCrow)`
    font-size: 3rem;
`