import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const StickyTop = () => {
  return (
    <div className="header-top-wrap grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-0 px-4 md:px-6 py-2 bg-gray-800 text-white">
      {/* Right Section */}
      <div className="header-top-right flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 text-center md:text-left">
        <div className="flex items-center space-x-2 text-sm md:text-base">
          <FaEnvelope className="text-lg" />
          <span>Info@Webmail.Com</span>
        </div>
        <div className="flex items-center space-x-2 text-sm md:text-base">
          <FaPhone className="text-lg" />
          <span>+91 9838587992</span>
        </div>
      </div>

      {/* Left Section */}
      <div className="header-top-left flex flex-col md:flex-row items-center justify-center md:justify-end space-y-3 md:space-y-0 md:space-x-4">
        <span className="font-medium text-sm md:text-base">Follow Us:</span>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-500 transition-all duration-300 text-lg"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-pink-500 transition-all duration-300 text-lg"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StickyTop;
