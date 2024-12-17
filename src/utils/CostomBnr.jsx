import React, {useState} from "react";
import BookingForm from "./BookingForm";
import Modal from "./Modal";

const CustomBanner = ({
  title = "Default Title",
  subtitle = "Default Subtitle",
  buttonText = "Click Me",
  images = [
    "https://via.placeholder.com/300x200?text=Default+Image+1",
    "https://via.placeholder.com/300x200?text=Default+Image+2",
  ],
  gradient,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <section className="w-full rounded-lg overflow-hidden shadow-lg">
        <div
          className={`flex flex-col lg:flex-row items-center justify-between p-6 md:p-8 lg:p-10`}
          style={{
            background:
              gradient || "linear-gradient(to right, #fda085, #f6d365)",
          }}
        >
          {/* Left Content */}
          <div className="flex-1 text-left text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">{title}</h2>
            <p className="text-md lg:text-lg mb-5">{subtitle}</p>
            <button
              className="bg-white text-orange-500 font-medium px-5 py-2 rounded-md shadow hover:bg-gray-200 transition-all"
              onClick={toggleModal}
            >
              {buttonText}
            </button>
          </div>

          {/* Right Image Section */}
          {/* <div className="flex-1 grid grid-cols-2 gap-2 md:gap-4 mt-6 lg:mt-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Banner Image ${index + 1}`}
            className="w-full h-32 md:h-48 rounded-lg object-cover shadow-md"
          />
        ))}
      </div> */}
        </div>
      </section>
      {/* Modal for Booking Form */}
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <BookingForm closeModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default CustomBanner;
