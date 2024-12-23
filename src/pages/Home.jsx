import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Trigger animations only once
    });
  }, []);

  return (
    <>
      <div data-aos="fade-up">
        <Hero />
      </div>
      <div data-aos="fade-right">
        <AboutUsSection />
      </div>
      <div data-aos="fade-out">
        <ServiceSlider />
      </div>
      <div data-aos="zoom-in">
        <ExtraFeatures />
      </div>
      <div data-aos="fade-up" id="destinations">
        <TopDestinations />
      </div>
      <div data-aos="zoom-in-up">
        <CallToAction />
      </div>
      <div data-aos="fade-right">
        <CompanyImpression />
      </div>
      <div data-aos="fade-up" className="overflow-hidden" id="tour-packages">
        <TourPlaces />
      </div>
      <div data-aos="fade-in">
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
