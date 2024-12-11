import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose} // Use the onClose prop here
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 focus:outline-none hover:bg-gray-300 z-50"
        >
          <FaTimes className="text-gray-600 w-5 h-5 z-50" />
        </button>
        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
