import { MainHeader } from '../../components/Headers/MainHeaders/Styles'
import styled, { css } from 'styled-components'
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

// Form
export const FormGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`

export const WrapperGrid = styled.div`
    display: flex;
    flex-direction: column;
`
export const FirstNameHeader = styled(SecondaryHeader)`
`
export const FirstNameInput = styled.input``
export const LastNameHeader = styled(SecondaryHeader)``
export const LastNameInput = styled.input``
export const EmailAddressHeader = styled(SecondaryHeader)``
export const EmailAddressInput = styled.input``
export const PhoneNumberHeader = styled(SecondaryHeader)``
export const PhoneNumberInput = styled.input``
export const CompanyNameHeader = styled(SecondaryHeader)``
export const CompanyNameInput = styled.input``
export const GenZOrBrandInput = styled.input``
export const GenZOrBrandHeader = styled(SecondaryHeader)``
export const QueryTypeHeader = styled(SecondaryHeader)`
    float: left;
`
export const QueryTypeInput = styled.input`
    width: 98%;
`
export const MessageHeader = styled(SecondaryHeader)`
    float: left;
`
export const MessageInput = styled.input`
    width: 98%;
    height: 200px;
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
