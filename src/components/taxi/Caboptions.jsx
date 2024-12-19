import React from "react";

const CabOptions = () => {
  const cabData = [
    {
      type: "Sedan",
      models: "Etios, Amaze, Dzire, Aura etc.",
      passengers: "4 Pax",
      ideal: "Comfortable trips with small families",
    },
    {
      type: "Hatchback",
      models: "Nexon",
      passengers: "4 Pax",
      ideal: "Budget trips over short distances",
    },
    {
      type: "SUVs and MUVs",
      models: "Innova, Crysta and Ertiga",
      passengers: "6-7 Pax",
      ideal: "Premium trips with large families",
    },
  ];

  return (
    <div className="bg-white py-10 px-6 md:px-10 lg:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
        Discover the Cab Options
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
        Choose from our wide range of cab options for your travel needs.
        Comfortable, safe, and reliable rides for every occasion.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead>
            <tr className="bg-yellow-500 text-white">
              <th className="p-4 border border-gray-300">Car Type</th>
              <th className="p-4 border border-gray-300">Models Include</th>
              <th className="p-4 border border-gray-300">Passengers</th>
              <th className="p-4 border border-gray-300">Ideal For</th>
            </tr>
          </thead>
          <tbody>
            {cabData.map((cab, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="p-4 border border-gray-300">{cab.type}</td>
                <td className="p-4 border border-gray-300">{cab.models}</td>
                <td className="p-4 border border-gray-300">{cab.passengers}</td>
                <td className="p-4 border border-gray-300">{cab.ideal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CabOptions;
