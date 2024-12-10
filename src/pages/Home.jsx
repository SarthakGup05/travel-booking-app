import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Header";
import AboutUsSection from "../components/AboutUs";
import ServiceSlider from "../components/ServiceSection";
import ExtraFeatures from "../components/ExtraFeatureSection";
import TopDestinations from "../components/TopDestinationSection";
import CallToAction from "../utils/Cta";
import CompanyImpression from "../components/CompaneyExpressionSection";
import TourPlaces from "../components/TourPlacesSection";
import ContactUs from "../components/ContactUsSection";
import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <>
    
      <Hero />
      <AboutUsSection/>
      <ServiceSlider/>
      <ExtraFeatures/>
      <TopDestinations/>
      <CallToAction/>
      <CompanyImpression/>
      <TourPlaces/>
      <ContactUs/>
      
    </>
  );
};

export default Home;
