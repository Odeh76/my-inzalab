import styled from 'styled-components';
import { MainHeader } from '../../components/Headers/MainHeaders/Styles';
import resourcesPhoneImage from '../../assets/img/resourcesPhoneImage.png'

export const ResourcesContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ResourcesDescription = styled.div`
    font-family: var(--lato);
    font-weight: 400;
    font-size: 1.5rem;
`

export const ImageContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 16px;
`

export const ResourcesLinks = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid var(--blackMain);
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
`

export const ResourcesImages = styled.img`
    width: 100%;
    height: 400px;
    background-image: url(${resourcesPhoneImage});

`


export const ResourcesHeader = styled(MainHeader)`
`

