import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CabBookingForm = () => {
  const [tripType, setTripType] = useState("Outstation");
  const [localOption, setLocalOption] = useState("Local Rental");

  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const handleTripTypeChange = (type) => {
    setTripType(type);
  };

  const handleLocalOptionChange = (option) => {
    setLocalOption(option);
  };

  return (
    <div className="bg-gray-100 text-black p-4 sm:p-8 rounded-lg m-4 shadow-lg max-w-screen-lg mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">Book Your Taxi Now</h1>

      {/* Trip Type Buttons */}
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
        <button
          onClick={() => handleTripTypeChange("Outstation")}
          className={`flex-1 ${
            tripType === "Outstation"
              ? "bg-yellow-500 text-white"
              : "border border-gray-300"
          } p-2 rounded-lg hover:bg-yellow-600`}
        >
          Outstation
        </button>
        <button
          onClick={() => handleTripTypeChange("Local / Airport")}
          className={`flex-1 ${
            tripType === "Local / Airport"
              ? "bg-yellow-500 text-white"
              : "border border-gray-300"
          } p-2 rounded-lg hover:bg-yellow-600`}
        >
          Local / Airport
        </button>
      </div>

      {tripType === "Outstation" && (
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
            <div className="flex items-center space-x-2">
              <input type="radio" name="trip" id="round" className="w-4 h-4" />
              <label htmlFor="round" className="text-sm">Round Trip</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" name="trip" id="oneway" className="w-4 h-4" />
              <label htmlFor="oneway" className="text-sm">One Way Trip</label>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter pickup city"
              className="w-full border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Enter destination city"
              className="w-full border p-3 rounded-lg"
            />
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Pickup Date</label>
                <DatePicker
                  selected={pickupDate}
                  onChange={(date) => setPickupDate(date)}
                  className="w-full sm:w-[500px] border p-3 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Return Date</label>
                <DatePicker
                  selected={returnDate}
                  onChange={(date) => setReturnDate(date)}
                  className="w-full sm:w-[500px] border p-3 rounded-lg"
                />
              </div>
            </div>
            <button className="w-full text-left text-sm text-yellow-500">
              + Add More City
            </button>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <span className="text-gray-500">IN +91</span>
              <input
                type="text"
                placeholder="Enter mobile number"
                className="w-full border p-3 rounded-lg"
              />
            </div>
          </form>
        </div>
      )}

      {tripType === "Local / Airport" && (
        <div>
          <div className="flex flex-col space-y-4 mb-4">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="localRental"
                name="localOption"
                value="Local Rental"
                checked={localOption === "Local Rental"}
                onChange={() => handleLocalOptionChange("Local Rental")}
                className="w-4 h-4"
              />
              <label htmlFor="localRental" className="text-sm">Local Rental</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="airportTransfer"
                name="localOption"
                value="Airport Transfer"
                checked={localOption === "Airport Transfer"}
                onChange={() => handleLocalOptionChange("Airport Transfer")}
                className="w-4 h-4"
              />
              <label htmlFor="airportTransfer" className="text-sm">Airport Transfer</label>
            </div>
          </div>

          {localOption === "Local Rental" && (
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter city"
                className="w-full border p-3 rounded-lg"
              />
              <select className="w-full border p-3 rounded-lg">
                <option>8 Hours / 80 Km</option>
              </select>
              <div>
                <label className="block text-sm font-bold mb-2">Pickup Date</label>
                <DatePicker
                  selected={pickupDate}
                  onChange={(date) => setPickupDate(date)}
                  className="w-full sm:w-[480px] border p-3 rounded-lg"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <span className="text-gray-500">IN +91</span>
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  className="w-full border p-3 rounded-lg"
                />
              </div>
            </form>
          )}

          {localOption === "Airport Transfer" && (
            <form className="space-y-4">
              <input
                type="text"
                placeholder="From Airport / To Airport"
                className="w-full border p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Select Airport"
                className="w-full border p-3 rounded-lg"
              />
              <div>
                <label className="block text-sm font-bold mb-2">Pickup Date</label>
                <DatePicker
                  selected={pickupDate}
                  onChange={(date) => setPickupDate(date)}
                  className="w-full sm:w-[500px] border p-3 rounded-lg"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
        
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  className="w-full border p-3 rounded-lg"
                />
              </div>
            </form>
          )}
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-600 mt-4"
      >
        Check Price & Book Cab
      </button>
    </div>
  );
};

export default CabBookingForm;
