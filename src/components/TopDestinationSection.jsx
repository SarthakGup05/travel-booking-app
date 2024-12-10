import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const destinations = [
  {
    name: "Varanasi",
    image: "/assets/images/Destinations/Varnasi.jpg",
    description: "The spiritual capital of India, known for its sacred ghats.",
  },
  {
    name: "Agra",
    image: "/assets/images/Destinations/TAJ.jpg",
    description: "Home to the iconic Taj Mahal, a symbol of love.",
  },
  {
    name: "Lucknow",
    image: "/assets/images/Destinations/Lucknow.jpg",
    description: "The City of Nawabs, famous for its kebabs and heritage.",
  },
  {
    name: "Ayodhya",
    image: "/assets/images/Destinations/Ayodhya.jpg",
    description: "The birthplace of Lord Rama and a city of temples.",
  },
  {
    name: "Mathura",
    image: "/assets/images/Destinations/Mathura.jpg",
    description: "The birthplace of Lord Krishna, filled with devotion.",
  },
];

const TopDestinations = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    const isDesktop = window.innerWidth >= 1024;
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Top Destinations</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
            Explore the charm of Uttar Pradesh’s top destinations, from cultural hubs to spiritual havens.
          </p>
  
          {isDesktop ? (
            // Desktop: Slider
            <Slider {...settings}>
              {destinations.map((destination, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-lg overflow-hidden shadow-lg bg-white mx-4 hover:shadow-2xl transform transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-56 object-cover transition-transform duration-500 ease-in-out"
                  />
                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 hover:opacity-40 transition-opacity duration-300"></div>
  
                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
                    <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                    <p className="text-sm mb-4">{destination.description}</p>
                  </div>
                </motion.div>
              ))}
            </Slider>
          ) : (
            // Small Screens: Grid Layout
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {destinations.map((destination, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transform transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
                    <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                    <p className="text-sm mb-4">{destination.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
        <p className="text-sm font-medium  text-gray-600 text-center  mx-auto p-9">
        Explore our top destinations voted by more than 100,000+ customers around the world
          </p>
      </section>
    );
  };
  
  export default TopDestinations;
