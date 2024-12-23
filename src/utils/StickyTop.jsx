import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

const StickyTop = () => {
  return (
    <div className="header-top-wrap flex flex-wrap justify-between items-center gap-y-2 px-3 py-1 bg-gray-800 text-white text-sm">
      {/* Contact Section */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex items-center space-x-1">
          <FaEnvelope className="text-base" />
          <span>Info@Webmail.Com</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaPhone className="text-base" />
          <span>+91 9838587992</span>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex items-center gap-x-2">
        <span className="hidden md:inline font-medium">Follow Us:</span>
        <ul className="flex space-x-3">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-all duration-300 text-base"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-all duration-300 text-base"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
          {/* <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-all duration-300 text-base"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default StickyTop;
