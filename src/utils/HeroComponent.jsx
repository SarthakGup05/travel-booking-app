import React from "react";
import Typewriter from "typewriter-effect";

const Hero = ({ backgroundType, backgroundSrc }) => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Media */}
      {backgroundType === "video" ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundSrc} // Background video URL
          autoPlay={true}
          loop={true}
          muted
        ></video>
      ) : (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundSrc} // Background image URL
          alt="Background"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl px-6 md:px-0">
          <h2 className="text-lg md:text-2xl text-yellow-400 font-semibold mb-4">
            Discover the Heart of India
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience Uttar Pradesh<br />
            <span className="text-yellow-400">
              <Typewriter
                options={{
                  strings: ["Spiritual Serenity", "Cultural Heritage"],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                }}
              />
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Journey through Uttar Pradesh, where history comes alive and spirituality resonates. Visit iconic landmarks and experience timeless traditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
