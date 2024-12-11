import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight, FaTimes } from "react-icons/fa"; // React Icons
import BookingForm from "./BookingForm"; // Assuming BookingForm is the modal component

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative bg-gradient-to-r from-yellow-500 to-gray-200 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
            <motion.img
              src="/assets/images/Destinations/cta.jpg"
              alt="Explore Uttar Pradesh"
              className="object-cover w-full h-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Ready to explore Uttar Pradesh and its wonders?
              </h2>
              <p className="text-gray-600 mb-6 text-base lg:text-lg">
                Discover the rich culture, ancient temples, vibrant cities, and
                the beauty of Uttar Pradesh. Embark on an unforgettable journey
                through the heart of India and create lifelong memories.
              </p>
              <motion.button
                onClick={openModal}
                className="inline-block bg-black text-white py-3 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote <FaArrowRight className="inline ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stripes/Decoration using React Icons */}
      <div className="absolute inset-x-0 bottom-0 py-4 mt-0 bg-white flex justify-center">
        <div className="flex space-x-6">
          <motion.div
            className="text-yellow-500"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaMapMarkerAlt className="w-12 h-12 md:w-16 md:h-16" />
          </motion.div>
          <motion.div
            className="text-yellow-500"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FaMapMarkerAlt className="w-12 h-12 md:w-16 md:h-16" />
          </motion.div>
          <motion.div
            className="text-yellow-500"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <FaMapMarkerAlt className="w-12 h-12 md:w-16 md:h-16" />
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 focus:outline-none hover:bg-gray-300 z-50"
            >
              <FaTimes className="text-gray-600 w-5 h-5" />
            </button>
            <BookingForm closeModal={closeModal} />
          </div>
        </div>
      )}
    </section>
  );
};

export default CallToAction;
