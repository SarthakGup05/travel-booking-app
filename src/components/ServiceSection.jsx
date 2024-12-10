import React from "react";
import Slider from "react-slick";
import { FaTaxi, FaUtensils, FaMapMarkedAlt } from "react-icons/fa";

const ServiceSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const services = [
    {
      icon: <FaTaxi size={30} className="text-orange-500" />,
      title: "Outstation Taxis",
      description: "Reliable taxis for outstation trips with comfort and safety.",
    },
    {
      icon: <FaUtensils size={30} className="text-orange-500" />,
      title: "Food & Accommodations",
      description: "Delicious meals and cozy stays for your travel needs.",
    },
    {
      icon: <FaMapMarkedAlt size={30} className="text-orange-500" />,
      title: "Personalized Travel Guide",
      description: "Tailored travel plans for an unforgettable experience.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
          What We Provide
        </h2>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-lg rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto bg-orange-100 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-700">
                  {service.title}
                </h3>
                <p className="text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 p-2 rounded-full shadow-lg cursor-pointer hover:bg-orange-600"
      onClick={onClick}
    >
      <span className="text-white">&rarr;</span>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 p-2 rounded-full shadow-lg cursor-pointer hover:bg-orange-600"
      onClick={onClick}
    >
      <span className="text-white">&larr;</span>
    </div>
  );
};

export default ServiceSlider;
