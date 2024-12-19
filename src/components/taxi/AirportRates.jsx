import React from "react";

const AirportRatesTable = () => {
  const cabRates = [
    { type: "Sedan", dropRate: "₹1000", receiveRate: "₹1200" },
    { type: "Hatchback", dropRate: "₹1000", receiveRate: "₹1200" },
    { type: "SUVs", dropRate: "₹1300", receiveRate: "₹1500" },
    { type: "MUVs", dropRate: "₹1600", receiveRate: "₹1800" },
  ];

  return (
    <div className="bg-white py-10 px-6 md:px-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Airport Transfer Rates
      </h2>
      <p className="text-gray-600 mb-8">
        Discover the best rates for airport transfers. Select your car type and
        get affordable pricing for drop and receive services.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-yellow-500">
            <tr>
              <th className="px-6 py-3 text-left text-white font-medium uppercase">
                Car Type
              </th>
              <th className="px-6 py-3 text-left text-white font-medium uppercase">
                Drop Rate 
              </th>
              <th className="px-6 py-3 text-left text-white font-medium uppercase">
                Receive Rate 
              </th>
            </tr>
          </thead>
          <tbody>
            {cabRates.map((cab, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } border-b border-gray-200`}
              >
                <td className="px-6 py-4 text-gray-700 font-medium">
                  {cab.type}
                </td>
                <td className="px-6 py-4 text-gray-600">{cab.dropRate}</td>
                <td className="px-6 py-4 text-gray-600">{cab.receiveRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AirportRatesTable;
