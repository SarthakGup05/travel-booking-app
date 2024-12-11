import React, { useState } from "react";
import BookingForm from "../utils/BookingForm";
import Modal from "../utils/Modal";
// import Modal from "../utils/Modal"; // Adjust the path based on your folder structure
// import BookingForm from "../utils/BookingForm"; // Adjust the path based on your folder structure

const ContactUs = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to handle modal open/close
  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <section
      className="bg-gray-300 py-12 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/images/black bg.jpg')" }}
    >
      <div className="bg-gray-900 bg-opacity-50 py-12 px-6 rounded-lg shadow-lg max-w-3xl w-full text-center">
        {/* Section Heading */}
        <h1 className="text-4xl font-bold text-white mb-4">Plan Your Dream Journey</h1>
        <p className="text-gray-200 mb-6">
          Ready to start your next adventure? Contact us today to discuss your travel plans.
        </p>
        
        {/* Contact Us Button */}
        <button
          onClick={toggleModal}
          className="bg-black text-white py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition"
        >
          Contact Us
        </button>
      </div>

      {/* Modal with Booking Form */}
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <BookingForm />
        </Modal>
      )}
    </section>
  );
};

export default ContactUs;
