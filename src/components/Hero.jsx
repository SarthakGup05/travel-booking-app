import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?adventure,nature')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl px-6 md:px-0">
          <h2 className="text-lg md:text-2xl text-yellow-400 font-semibold mb-4">
            Explore the World
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Adventure Awaits<br />
            <span className="text-yellow-400">
              <Typewriter
                options={{
                  strings: ["Camping", "Travel"],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                }}
              />
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Discover breathtaking destinations and embark on a journey of exploration and adventure. Start your story with us.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="#"
              className="bg-yellow-400 text-black px-8 py-3 rounded-md font-medium text-lg hover:bg-yellow-500 transition"
            >
              Let’s Get Started
            </a>
            <a
              href="https://www.youtube.com/watch?v=n9LgeoJE4EI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white text-lg hover:text-yellow-400 transition"
            >
              <div className="w-12 h-12 bg-white bg-opacity-25 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-5.197-2.998a1 1 0 00-1.555.832v5.996a1 1 0 001.555.832l5.197-2.998a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12c0 4.971-4.029 9-9 9s-9-4.029-9-9 4.029-9 9-9 9.029 4.029 9 9z"
                  />
                </svg>
              </div>
              <span>Watch Video</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
