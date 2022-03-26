import React from 'react'
import { Layout } from '../../components'
import { AdvertiseWithUs, ContactUsHeader, Descriptions, GeneralInquiries, ProgramsHeader, InquiriesContainer, YellowDivider, FirstNameHeader, FirstNameInput, LastNameInput, EmailAddressHeader, EmailAddressInput, PhoneNumberHeader, PhoneNumberInput, CompanyNameHeader, CompanyNameInput, GenZOrBrandHeader, GenZOrBrandInput, QueryTypeHeader, QueryTypeInput, MessageHeader, MessageInput, LastNameHeader, FormGrid, WrapperGrid } from './Styles'

function ContactUs() {
    return (
        <>
        <Layout>
            {/* Contact and Inquiries */}
            <ContactUsHeader>
                Contact Us
            </ContactUsHeader>
            <InquiriesContainer>
                <GeneralInquiries>General Inquiries</GeneralInquiries>
                <Descriptions>Please fill out the form below and one of our ITOs will contact you soon.</Descriptions>
                <ProgramsHeader>Programs</ProgramsHeader>
                <Descriptions>To nominate someone for 25 Under 25, please use this <span>FORM</span></Descriptions>
                <AdvertiseWithUs>Advertise with us</AdvertiseWithUs>
                <Descriptions>Interested in working together? If you are a brand and have questions on how we can work together, please email Quynh Nguyen at quynh@creativedigitalagency.com or via the contact form below.We would love to hear from you! <span>Email</span></Descriptions>
            </InquiriesContainer>
            <YellowDivider />

            {/* Form */}
            <FormGrid>
            <WrapperGrid>
            <FirstNameHeader>First Name</FirstNameHeader>
            <FirstNameInput />
            </WrapperGrid>
            <WrapperGrid>
            <LastNameHeader>Last Name</LastNameHeader>
            <LastNameInput />
            </WrapperGrid>
            <WrapperGrid>
            <EmailAddressHeader>E-mail Address</EmailAddressHeader>
            <EmailAddressInput />
            </WrapperGrid>
            <WrapperGrid>
            <PhoneNumberHeader>Phone Number</PhoneNumberHeader>
            <PhoneNumberInput />
            </WrapperGrid>
            <WrapperGrid>
            <CompanyNameHeader>Company</CompanyNameHeader>
            <CompanyNameInput />
            </WrapperGrid>
            <WrapperGrid>
            <GenZOrBrandHeader>I'm here as a</GenZOrBrandHeader>
            <GenZOrBrandInput />
            </WrapperGrid>
            </FormGrid>
            <QueryTypeHeader>Query Type</QueryTypeHeader>
            <QueryTypeInput />
            <MessageHeader>Message</MessageHeader>
            <MessageInput />
        </Layout>
        </>
    )
}

export default ContactUs
