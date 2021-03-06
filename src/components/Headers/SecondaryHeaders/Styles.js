import styled from 'styled-components'

export const SecondaryHeader = styled.h6`
    font-family: var(--lato);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ClientsHeader = styled(SecondaryHeader)`
    font-size: 1rem;
`

export const WelcomeTo = styled(SecondaryHeader)`
`
export const RestartAlphabet = styled(SecondaryHeader)`
    font-size: 1rem;
    position: absolute;
    bottom: 0;
`
export const WeAreGenZ = styled(SecondaryHeader)`
    font-size: 2rem;
    color: var(--mustard) !important;
    text-transform: none;
    font-weight: 700;
`

export const HereAsA = styled(SecondaryHeader)`
    font-size: 1rem;
`

export const NewsLetterHeader = styled(SecondaryHeader)`
    font-size: 1.5rem;
    text-transform: capitalize;
`