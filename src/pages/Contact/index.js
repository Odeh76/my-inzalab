import React from 'react'
import { Layout } from '../../components'
import { AdvertiseWithUs, ContactUsHeader, Descriptions, GeneralInquiries, ProgramsHeader, InquiriesContainer, YellowDivider } from './Styles'

function ContactUs() {
    return (
        <>
        <Layout>
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
        </Layout>
        </>
    )
}

export default ContactUs
