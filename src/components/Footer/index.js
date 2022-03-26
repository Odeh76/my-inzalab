import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SubscribeButton } from '../Buttons/Subscribe/Styles';
import { NewsLetterHeader } from '../Headers/SecondaryHeaders/Styles';
import { FooterContainer, FooterFacebookLink, FooterIconContainer, FooterInstagramLink, FooterLeftImage, FooterLink, FooterLinkArrow, FooterRightImage, FooterTwitterLink, FooterYoutubeLink, LeftFooterContainer, NewsLetterContainer, NewsLetterInput, RightFooterContainer } from './Styles';

function Footer() {
  return (  
      <FooterContainer
        initial="hidden" 
        whileInView="visible" 
        viewport={{once: true}} 
        transition={{duration: 0.75}} 
        variants={{visible: {opacity: 1, scale: 1}, hidden: {scale: 0, opacity: 0}}}
      >
          <LeftFooterContainer>
            <FooterLeftImage />
              <NewsLetterContainer>
                <NewsLetterHeader>Newsletter</NewsLetterHeader>
                <NewsLetterInput placeholder='Email' />
                <SubscribeButton>Subscribe</SubscribeButton>
            <FooterIconContainer>
                <FooterInstagramLink as={FaInstagram} to="/" />
                <FooterTwitterLink as={FaTwitter} to="/" />
                <FooterFacebookLink as={FaFacebook} to="/" />
                <FooterYoutubeLink as={FaYoutube} to="/" />
            </FooterIconContainer>
              </NewsLetterContainer>
          </LeftFooterContainer>
          <RightFooterContainer>
              <FooterRightImage />
              <FooterLink to="/"><FooterLinkArrow />Home</FooterLink>
              <FooterLink to="twentyfiveundertwentyfive"><FooterLinkArrow />25 Under 25</FooterLink>
              <FooterLink to="programs"><FooterLinkArrow />Programs</FooterLink>
              <FooterLink to="resources"><FooterLinkArrow />Resources</FooterLink>
              <FooterLink to="meettheitos"><FooterLinkArrow />Meet The ITOs</FooterLink>
              <FooterLink to="contact"><FooterLinkArrow />Contact</FooterLink>
          </RightFooterContainer>
      </FooterContainer>
      ) 

}

export default Footer;
