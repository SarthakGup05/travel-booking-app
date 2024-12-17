import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const thingsToDo = [
  {
    id: 1,
    name: "Sarnath",
    image: "/path-to-your-image/sarnath.jpg",
    rating: 3066,
    category: "Religious Sites, Points of Interest & Landmarks",
  },
  {
    id: 2,
    name: "Ganges River",
    image: "/path-to-your-image/ganges-river.jpg",
    rating: 5041,
    category: "Bodies of Water",
  },
  {
    id: 3,
    name: "Dasaswamedh Ghat",
    image: "/path-to-your-image/dasaswamedh-ghat.jpg",
    rating: 2000,
    category: "Points of Interest & Landmarks",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ThingsToDoSection = () => {
  return (
    <section className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Things to do</h2>
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
        {thingsToDo.map((item) => (
          <motion.div
            key={item.id}
            className="relative bg-white shadow-md rounded-lg overflow-hidden"
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            {/* Image Section */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-52 object-cover"
            />

            {/* Favorite Icon */}
            <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">
              <FaRegHeart className="text-gray-500 hover:text-red-500 cursor-pointer" />
            </div>

            {/* Details */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              <div className="flex items-center mt-2">
                <span className="text-green-500 font-bold mr-1">●●●●●</span>
                <span className="text-gray-500 text-sm">{item.rating}</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">{item.category}</p>
            </div>

            {/* Badge */}
            <div className="absolute bottom-4 left-4 bg-green-200 text-green-700 text-xs font-bold py-1 px-2 rounded-full">
              2024
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ThingsToDoSection;
