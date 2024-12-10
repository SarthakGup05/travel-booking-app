import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const TourPlaces = () => {
  // Slick Slider settings
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Example tour places data
  const tourPlaces = [
    {
      id: 1,
      location: "Agra, Uttar Pradesh",
      price: "₹4,999.00",
      duration: "2 days",
      people: "4 Person",
      image:  "/assets/images/Destinations/TAJ.jpg", // Image URL
    },
    {
      id: 2,
      location: "Varanasi, Uttar Pradesh",
      price: "₹6,999.00",
      duration: "3 days",
      people: "6 Person",
      image: "/assets/images/Destinations/Varnasi.jpg",
    },
    {
      id: 3,
      location: "Lucknow, Uttar Pradesh",
      price: "₹5,499.00",
      duration: "2 days",
      people: "5 Person",
      image: "/assets/images/Destinations/Lucknow.jpg",
    },
    {
      id: 4,
      location: "Kanpur, Uttar Pradesh",
      price: "₹3,999.00",
      duration: "1 day",
      people: "3 Person",
      image: "https://source.unsplash.com/400x300/?kanpur",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-green-500 font-semibold uppercase"
          >
            Explore Uttar Pradesh
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-800"
          >
            Discover Amazing Places Around the{" "}
            <span className="text-blue-500 italic">State</span>
          </motion.h2>
        </div>

        {/* Slider */}
        <Slider {...settings} className="mt-8 overflow-hidden">
          {tourPlaces.map((place) => (
            <motion.div
              key={place.id}
              whileHover={{ scale: 1.05 }}
              className="p-4"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Card Image */}
                <img
                  src={place.image}
                  alt={place.location}
                  className="h-48 w-full object-cover"
                />
                {/* Card Header */}
                <div className="p-2 bg-black text-white text-sm font-semibold">
                  Featured
                </div>
                {/* Card Body */}
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-800">
                    From {place.price}
                  </h4>
                  <p className="text-sm text-gray-600">{place.location}</p>
                  <p className="text-sm text-gray-600">Days and nights From</p>
                  <div className="flex items-center justify-between text-gray-600 mt-4">
                    <div className="flex items-center gap-1">
                      <i className="icon-clock"></i>
                      <span>{place.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="icon-person"></i>
                      <span>{place.people}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TourPlaces;
