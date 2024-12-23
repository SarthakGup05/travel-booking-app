import React from "react";

const TermsAndConditions = () => {
  const terms = [
    {
      title: "Time & Distance Calculation",
      description: "Calculated from Garage to Garage.",
    },
    {
      "title": "Night Charges",
      "description": "Applicable between 10 PM and 6 AM  ₹300."
    },
    
    {
      title: "Additional Costs",
      description: "Parking, toll, and taxes are extra and added to the bill.",
    },
    {
      title: "Fuel Charges",
      description: "Included in the final bill.",
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
          Terms & Conditions
        </h1>
        <ul className="space-y-6">
          {terms.map((term, index) => (
            <li key={index} className="flex items-start">
              <div className="w-6 h-6 flex-shrink-0 rounded-full bg-black flex items-center justify-center text-white font-bold mr-4">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">
                  {term.title}
                </h3>
                <p className="text-gray-600 mt-1">{term.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;
