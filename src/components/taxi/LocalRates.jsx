import React from "react";

const LocalTravelRatesTable = () => {
  const travelRates = [
    { type: "Sedan", fixed: "8 Hrs / 80 KM", rate: "₹1600", extraKm: "₹12", extraHour: "₹120" },
    { type: "Hatchback", fixed: "8 Hrs / 80 KM", rate: "₹1600", extraKm: "₹12", extraHour: "₹120" },
    { type: "SUVs", fixed: "8 Hrs / 80 KM", rate: "₹2000", extraKm: "₹17", extraHour: "₹300" },
    { type: "MUVs", fixed: "8 Hrs / 80 KM", rate: "₹1800", extraKm: "₹13", extraHour: "₹100" },
  ];

  return (
    <div className="bg-white py-10 px-6 md:px-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Local Travel Rates
      </h2>
      <p className="text-gray-600 mb-8">
        Check out our local travel options with fixed hourly and kilometer packages.
        Flexible rates for extra hours or kilometers ensure your journey is seamless.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-yellow-500">
            <tr>
              <th className="px-6 py-3 text-left text-white font-medium uppercase">
                Car Type
              </th>
              <th className="px-6 py-3 text-left text-white font-medium uppercase">
                Fixed Hours & KM
              </th>
              <th className="px-6 py-3 text-left text-white font-medium uppercase">
                Rates 
              </th>
              <th className="px-6 py-3 text-left text-white font-medium uppercase">
                Extra (per km)
              </th>
              <th className="px-6 py-3 text-left text-white font-medium uppercase">
                Extra (per hr)
              </th>
            </tr>
          </thead>
          <tbody>
            {travelRates.map((travel, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } border-b border-gray-200`}
              >
                <td className="px-6 py-4 text-gray-700 font-medium">
                  {travel.type}
                </td>
                <td className="px-6 py-4 text-gray-600">{travel.fixed}</td>
                <td className="px-6 py-4 text-gray-600">{travel.rate}</td>
                <td className="px-6 py-4 text-gray-600">{travel.extraKm}</td>
                <td className="px-6 py-4 text-gray-600">{travel.extraHour}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LocalTravelRatesTable;
