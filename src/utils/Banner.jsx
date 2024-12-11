import React from 'react';

const Banner = ({ 
  image, 
  overlayColor = 'bg-black bg-opacity-50', 
  title = '', 
  subtitle = '', 
  textColor = 'text-white', 
  textPosition = 'center' // Options: 'center', 'left', 'right'
}) => {
  // Dynamic text alignment class
  const textAlignment = {
    center: 'text-center justify-center items-center',
    left: 'text-left justify-start items-center',
    right: 'text-right justify-end items-center'
  };

  return (
    <div className="relative w-full h-80">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Overlay */}
      <div className={`${overlayColor} absolute top-0 left-0 w-full h-full z-10`}></div>

      {/* Text Content */}
      <div
        className={`absolute z-20 inset-0 flex flex-col ${textAlignment[textPosition]} px-4 md:px-10`}
      >
        {title && (
          <h1 className={`text-3xl md:text-5xl font-bold ${textColor} mb-2`}>{title}</h1>
        )}
        {subtitle && (
          <p className={`text-lg md:text-2xl ${textColor}`}>{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default Banner;