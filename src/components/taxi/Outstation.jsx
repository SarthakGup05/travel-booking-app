import React from "react";

const OutstationJourneyRatesTable = () => {
  const outstationRates = [
    { type: "Sedan", minJourney: "250 KM", ratePerKm: "₹10.5" },
    // { type: "Hatchback", minJourney: "250 KM", ratePerKm: "₹10.5" },
    { type: "SUVs", minJourney: "250 KM", ratePerKm: "₹17" },
    { type: "MUVs", minJourney: "250 KM", ratePerKm: "₹14" },
  ];

  return (
    <div className="bg-white py-10 px-6 md:px-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Outstation Journey Rates
      </h2>
      <p className="text-gray-600 mb-8">
        Explore our outstation travel rates with a minimum journey requirement
        and competitive pricing per kilometer for a comfortable and economical
        journey.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-yellow-500">
            <tr>
              <th className="px-6 py-3 text-left text-white font-medium uppercase">
                Cab Type
              </th>
              <th className="px-6 py-3 text-left text-white font-medium uppercase">
                Minimum Journey Per Day
              </th>
              <th className="px-6 py-3 text-left text-white font-medium uppercase">
                Rates Per KM
              </th>
            </tr>
          </thead>
          <tbody>
            {outstationRates.map((journey, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } border-b border-gray-200`}
              >
                <td className="px-6 py-4 text-gray-700 font-medium">
                  {journey.type}
                </td>
                <td className="px-6 py-4 text-gray-600">{journey.minJourney}</td>
                <td className="px-6 py-4 text-gray-600">{journey.ratePerKm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OutstationJourneyRatesTable;
