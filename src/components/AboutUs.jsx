import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  return (
    <section className="bg-gray-200 text-black py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap -mx-6">
          {/* Left Image Section */}
          <div className="w-full lg:w-1/2 px-6">
            <ImageSection />
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-1/2 px-6">
            <ContentSection />
          </div>
        </div>
      </div>
    </section>
  );
};

const ImageSection = () => (
  <motion.div
    className="relative space-y-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="relative">
      <img
        src="/assets/images/Taj 2.jpg"
        alt="Taj Mahal"
        className="rounded-lg shadow-lg"
      />
    </div>
  </motion.div>
);

const ContentSection = () => (
  <motion.div
    className="space-y-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <HeaderSection />
    <IconBoxes />
    <ButtonWithProfile />
  </motion.div>
);

const HeaderSection = () => (
  <div>
    <span className="text-gray-600 uppercase font-semibold tracking-wider">
      Explore Uttar Pradesh
    </span>
    <h2 className="text-3xl font-bold mt-2">
      Discover the best of{" "}
      <span className="text-gray-600">Uttar Pradesh</span>
    </h2>
    <p className="text-gray-700 mt-4">
      Welcome to Uttar Pradesh – a land of rich heritage, stunning
      architecture, and vibrant culture. Join us as we explore the famous
      temples, historical landmarks, and breathtaking natural beauty.
    </p>
  </div>
);

const IconBoxes = () => (
  <motion.div
    className="flex flex-wrap -mx-3 mt-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.4 }}
  >
    <div className="w-full sm:w-1/2 px-3 mb-4">
      <IconBox
        icon={<FaMapMarkedAlt className="w-8 h-8 text-gray-600" />}
        title="Explore Historic Landmarks"
        description="Visit the Taj Mahal, Fatehpur Sikri, and other iconic sites that tell the stories of Uttar Pradesh."
      />
    </div>
    <div className="w-full sm:w-1/2 px-3 mb-4">
      <IconBox
        icon={<FaUserAlt className="w-8 h-8 text-gray-600" />}
        title="Personalized Travel Plans"
        description="Customized travel experiences designed to meet your interests and give you a deeper understanding of Uttar Pradesh."
      />
    </div>
  </motion.div>
);

const IconBox = ({ icon, title, description }) => (
  <motion.div
    className="bg-white text-black shadow-lg p-4 rounded-lg flex items-start space-x-4"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div>{icon}</div>
    <div>
      <h6 className="text-lg font-semibold">
        <a href="#" className="hover:underline">
          {title}
        </a>
      </h6>
      <p className="text-sm mt-2">{description}</p>
    </div>
  </motion.div>
);

const ButtonWithProfile = () => (
  <motion.div
    className="flex items-center mt-6 space-x-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.6 }}
  >
    <Link
      to={"/about"}
      className="bg-gray-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 transition"
    >
      More about us
    </Link>
    <div className="flex items-center space-x-3">
      <img
        src="\assets\images\logo\file.png"
        alt="Travel Expert"
        className="w-14 h-14 rounded-full shadow"
      />
      <div>
        <p className="text-sm font-bold">Fahad Ali</p>
        <span className="block text-gray-500 text-sm">Founder & Ceo</span>
      </div>
    </div>
  </motion.div>
);

export default AboutUsSection;
