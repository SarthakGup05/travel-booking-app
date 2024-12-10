import React from "react";
import { FaShieldAlt, FaMapMarkedAlt, FaWalking, FaMountain } from "react-icons/fa";

const ExtraFeatures = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-green-600 text-lg font-semibold">Popular Activities</h2>
          <h1 className="text-4xl font-bold text-gray-800">Extra Features</h1>
        </div>
        <div className="flex flex-wrap items-center -mx-6">
          {/* Left Decorative Box */}
          <div className="w-full lg:w-1/3 px-6 mb-8 lg:mb-0">
            <img
              src="/assets/images/graphics/vactor.png"
              alt="Decorative"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Feature Cards */}
          <div className="w-full lg:w-2/3 px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <FeatureCard
                icon={<FaShieldAlt className="w-8 h-8 text-green-500" />}
                title="Safety First Always"
                description="Ensuring the highest safety standards for a worry-free travel experience."
              />
              <FeatureCard
                icon={<FaMapMarkedAlt className="w-8 h-8 text-yellow-500" />}
                title="Trusted Travel Guide"
                description="Expert guides to take you through the best destinations with ease."
              />
              <FeatureCard
                icon={<FaWalking className="w-8 h-8 text-blue-500" />}
                title="Personalized Trips"
                description="Tailored experiences to match your interests and travel preferences."
              />
              <FeatureCard
                icon={<FaMountain className="w-8 h-8 text-orange-500" />}
                title="Adventure & Climbing"
                description="For the thrill-seekers, conquer the most exciting trails and peaks."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4">
    <div className="p-4 bg-gray-100 rounded-full">{icon}</div>
    <div>
      <h5 className="text-lg font-semibold text-gray-800">{title}</h5>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  </div>
);

export default ExtraFeatures;
