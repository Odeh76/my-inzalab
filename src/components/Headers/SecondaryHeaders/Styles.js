import styled from 'styled-components'

export const SecondaryHeader = styled.h6`
    font-family: var(--lato);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const WelcomeTo = styled(SecondaryHeader)`
    position: relative;
    top: 40px;
`
export const RestartAlphabet = styled(SecondaryHeader)`
    font-size: 1rem !important;
`
export const WeAreGenZ = styled(SecondaryHeader)`
    font-size: 2rem !important;
    color: var(--mustard) !important;
    text-transform: none;
    font-weight: 700;
`