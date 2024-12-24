import React from "react";
import CabBookingForm from "./CabBookingForm";

const Header = () => {
  return (
    <div className="relative bg-black text-white font-bold">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left: Booking Form */}
        <CabBookingForm />

        {/* Right: Hero Image */}
        <div className="relative">
          <img
            src="\assets\images\graphics\cab cover.jpg" // Replace with your image URL
            alt="Taxi ride"
            className="w-full h-[300px] sm:h-[400px] md:h-[520px] sm:w-[600px] md:w-[900px] object-cover rounded-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
