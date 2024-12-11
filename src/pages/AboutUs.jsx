import React from 'react'
import Banner from '../utils/Banner'
import bg from '/assets/images/black bg.jpg'
import AboutUsSection from '../components/AboutUs'
import CompanyImpression from '../components/CompaneyExpressionSection'
import ContactUs from '../components/ContactUsSection'

const AboutUs = () => {
  return (
    <>
    <Banner image={bg} title='About Us'/>
    <AboutUsSection/>
    <CompanyImpression/>
    <ContactUs/>
    </>
  )
}

export default AboutUs