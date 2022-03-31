import React from 'react'
import { GenZOrBrandBtn } from '../../components/Buttons/GenZOrBrand/Styles'
import { ClientsContainer, ClientsGridContainer, ClientsHeader, CrowIcon, GenZButtonContainer, HereAsAHeader } from './Styles'

function Clients() {
  return (
    <ClientsContainer>
      <HereAsAHeader>I'm here as a...</HereAsAHeader>
      <GenZButtonContainer>
        <GenZOrBrandBtn>Gen Z</GenZOrBrandBtn>
        <GenZOrBrandBtn>Brand</GenZOrBrandBtn>
      </GenZButtonContainer>
      <ClientsHeader>Clients</ClientsHeader>
      <ClientsGridContainer>
        <CrowIcon />
        <CrowIcon />
        <CrowIcon />
        <CrowIcon />
        <CrowIcon />
        <CrowIcon />
        <CrowIcon />
        <CrowIcon />
      </ClientsGridContainer>
    </ClientsContainer>
  )
}

export default Clients