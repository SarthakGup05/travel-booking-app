import React, { useState } from "react";
import { useParams } from "react-router-dom";
import listingsData from "../data/listing.js";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCheckCircle,
  FaRegHeart,
} from "react-icons/fa";
import Modal from "../utils/Modal.jsx";
import BookingForm from "../utils/BookingForm.jsx";
import CustomBanner from "../utils/CostomBnr.jsx";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

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
        {/* Section: Title */}
        <section className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            {listing.name}
          </h1>
          <p className="text-lg text-gray-600">
             {listing.description}
          </p>
        </section>

        {/* Image Gallery */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Main Feature Image */}
            <div className="md:col-span-2 row-span-2">
              <motion.img
                src={listing.images[0]}
                alt={`${listing.name} - Main Image`}
                className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
              />
            </div>

            {/* Smaller Images */}
            {listing.images.slice(1).map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image}
                  alt={`${listing.name} - Image ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Place Highlights Section */}
        <section className="bg-gray-50 rounded-lg p-6 shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Place Highlights</h2>
          <ul className="space-y-3">
            {listing.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3" />
                <p className="text-gray-700 text-md leading-relaxed">{highlight}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Modal for Booking Form */}
        {isModalOpen && (
          <Modal onClose={toggleModal}>
            <BookingForm closeModal={toggleModal} />
          </Modal>
        )}

        {/* Things to Do Section */}
        <section className="p-6 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Things to Do</h2>
          </div>

          {/* Grid Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
            }}
          >
            {listing.activities.map((activity, index) => (
              <motion.div
                key={index}
                className="relative bg-white shadow-md rounded-lg overflow-hidden"
                variants={cardVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <img
                  src={`/assets/images/activities/${index + 1}.jpg`}
                  alt={activity}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">
                  <FaRegHeart className="text-gray-500 hover:text-red-500 cursor-pointer" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">{activity}</h3>
                  <p className="text-gray-600 text-sm mt-2">Activity</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Custom Banner */}
        <CustomBanner
          title="Bigger Group? Get special offers up to 50% Off!"
          subtitle="We create unforgettable adventures, customised for your group."
          buttonText="Get A Callback"
          gradient="linear-gradient(to right, #fda085, #f6d365)"
        />
      </motion.div>
    </>
  );
};

export default ListingDetail;
