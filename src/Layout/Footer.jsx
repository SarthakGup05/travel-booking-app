import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Company Info */}
          <div className="flex flex-col items-start space-y-2">
            <img 
              src="/assets/images/logo/file.png" 
              alt="Company Logo" 
              className="w-20" 
            />
            <p className="text-sm text-gray-600 text-center font-semibold mb-2">MSJF Travels</p>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>msjftour@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span>+91 +91 9198887992, +91  9838587992</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span> D-217 B, Vibhuti Khand, Gomti Nagar, Lucknow-226010</span>
            </div>
            <div className="text-sm font-medium">
              <p>GST No: 09FUYPA8702A1ZI</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xl font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline" to="/about">
                  About Us
                </Link>
              </li>
              {/* <li>
              <a className="hover:underline" href="#tour-packages">
                  Tour Packages
                </a>
              </li> */}
              {/* <li>
              <a className="hover:underline" href="#destinations">
                  Destinations
                </a>
              </li> */}
              <li>
              <Link className="hover:underline" to="/taxi">
                  Taxis
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="text-xl font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/msjftravels/profilecard/?igsh=MWw5ZHJscmxldGVkcA==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-black hover:text-gray-700"
              >
                <FaInstagram size={24} />
              </a>
              <a 
                href="https://www.facebook.com/share/L5zCqZy2qdDBCcvu/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-black hover:text-gray-700"
              >
                <FaFacebook size={24} />
              </a>
              <a 
                href="https://wa.me/9198887992" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-black hover:text-gray-700"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto text-center">
          <p>© 2024 MSJF Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
