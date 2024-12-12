import React, { useState } from "react";
import { useParams } from "react-router-dom";
import listingsData from "../data/listing.js";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaStar,
  FaCheckCircle,
  FaUmbrellaBeach,
} from "react-icons/fa";

import Modal from "../utils/Modal.jsx";
import BookingForm from "../utils/BookingForm.jsx";

const ListingDetail = () => {
  const { id } = useParams();
  const listing = listingsData.find((item) => item.id === parseInt(id));
  

  if (!listing) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-center text-red-500 text-xl">Listing not found!</p>
      </div>
    );
  }

  // Function to open the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <motion.div
        className="max-w-7xl mx-auto p-4 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Section: Title and Main Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Image Gallery */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {listing.name}
            </h1>
            <div className="grid grid-cols-2 gap-2">
              {listing.images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`${listing.name} - Image ${index + 1}`}
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-slate-50 rounded-lg  p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                About {listing.name}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {listing.description}
              </p>
            </div>
            <div className="mt-6 text-center">
              <motion.button
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md text-md shadow-md mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={toggleModal} // Open the modal when clicked

              >
                Get Quote
              </motion.button>
            </div>
          </div>
        </section>

        {/* Section: Pricing, Amenities, and Activities */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Pricing */}
          <motion.div
            className="bg-slate-50 rounded-lg p-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              <FaRupeeSign className="text-yellow-500 mr-2" />
              Price
            </h3>
            <div className="flex items-center">
              <FaRupeeSign className="text-yellow-500 text-sm" />
              <p className="text-md font-semibold text-yellow-600 ml-2">
                {listing.pricePerNight} per night
              </p>
            </div>
          </motion.div>

          {/* Amenities */}
          <motion.div
            className="bg-slate-50 rounded-lg shadow-md p-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Amenities
            </h3>
            <ul className="space-y-1 text-sm text-gray-600">
              {listing.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center">
                  <FaCheckCircle className="text-green-400 mr-2" />
                  {amenity}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Things to Do */}
          <motion.div
            className="bg-slate-50 rounded-lg shadow-md p-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              <FaUmbrellaBeach className="text-blue-500 mr-2" />
              Things to Do
            </h3>
            <ul className="space-y-1 text-sm text-gray-600">
              {listing.activities.map((activity, index) => (
                <li key={index} className="flex items-center">
                  <FaStar className="text-yellow-500 mr-2" />
                  {activity}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* Modal for Booking Form */}
        {isModalOpen && (
        <Modal onClose={toggleModal}>
          <BookingForm closeModal={toggleModal} />
        </Modal>
      )}
      </motion.div>
    </>
  );
};

export default ListingDetail;
