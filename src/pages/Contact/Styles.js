import { MainHeader } from '../../components/Headers/MainHeaders/Styles'
import styled from 'styled-components'
import { SecondaryHeader } from '../../components/Headers/SecondaryHeaders/Styles'
import { motion } from 'framer-motion/dist/framer-motion'


export const ContactUsContainer = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
`

export const ContactUsHeader = styled(MainHeader)`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--yellow);
    height: 180px;
`
export const GeneralInquiries = styled(SecondaryHeader)`
    color: var(--mustard);
`

export const InquiriesContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
export const AdvertiseWithUs = styled(SecondaryHeader)`
    color: var(--mustard);
    `
export const ProgramsHeader = styled(SecondaryHeader)`
    color: var(--mustard);
`
export const Descriptions = styled.p`
    max-width: 200px;
    font-family: var(--lato);
`

export const YellowDivider = styled.div`
    background-color: var(--yellow);
    width: 100%;
    height: 48px;
`
