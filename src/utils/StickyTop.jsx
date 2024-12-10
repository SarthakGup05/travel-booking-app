import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope } from "react-icons/fa";

const StickyTop = () => {
  return (
    <div className="header-top-wrap flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-3 bg-gray-800 text-white">
      {/* Right Section */}
      <div className="header-top-right flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 items-center">
        <div className="flex items-center space-x-2">
          <i className="text-lg">
            <FaEnvelope />
          </i>
          <span>Info@Webmail.Com</span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="text-lg">
            <FaPhone />
          </i>
          <span>684 555-0102 490</span>
        </div>
      </div>

      {/* Left Section */}
      <div className="header-top-left flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0">
        <span className="font-medium">Follow Us :</span>
        <ul className="flex space-x-3">
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-500 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </li>
         
          <li>
            <a
              href="#"
              className="text-white hover:text-pink-500 transition"
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
