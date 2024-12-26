import React from 'react';
import { FaInstagram, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';

const StickyTop = () => {
  return (
    <div className="header-top-wrap flex flex-wrap justify-between items-center gap-y-1 px-2 py-1 bg-gray-800 text-white text-xs sm:text-sm">
      {/* Contact Section */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-y-1 sm:gap-x-3">
        {/* Email - Hidden on Mobile */}
        <div className="hidden sm:flex items-center space-x-1">
          <FaEnvelope className="text-sm" />
          <span>msjftour@gmail.com</span>
        </div>
        {/* Travel Booking */}
        <div className="flex items-center space-x-1">
          <p className="font-mono">Tour Booking:</p>
          <span>+91 9198887992</span>
        </div>
        {/* Taxi Booking */}
        <div className="flex items-center space-x-1">
          <p className="font-mono">Taxi Booking:</p>
          <span>+91  9838587992</span>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex items-center gap-x-2">
        <span className="hidden md:inline font-medium">Follow Us:</span>
        <ul className="flex space-x-2">
          <li>
            <a
              href="https://www.facebook.com/share/L5zCqZy2qdDBCcvu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-all duration-300 text-sm"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/msjftravels/profilecard/?igsh=MWw5ZHJscmxldGVkcA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-all duration-300 text-sm"
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
