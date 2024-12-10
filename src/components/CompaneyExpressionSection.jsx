import React from "react";
import CountUp from "react-countup";

const CompanyImpression = () => {
  const stats = [
    { label: "Satisfied Clients", value: 250, suffix: "+" },
    { label: "Total Rent cars", value: 1538 },
    { label: "Years of Build", value: 28, suffix: "+" },
    { label: "Total Tourist", value: 386, suffix: "k" },
  ];

  return (
    <section className="relative bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Section: Stats */}
          <div className="grid grid-cols-2 gap-6 z-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                  <CountUp
                    end={stat.value}
                    duration={3}
                    suffix={stat.suffix || ""}
                  />
                </h2>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Right Section: Title with Background Image */}
          <div
            className="relative h-96 w-full flex flex-col items-start justify-center text-left bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&h=720")`,
            }}
          >
            <div className="bg-black bg-opacity-50 p-8 rounded-lg">
              <h5 className="text-green-500 font-semibold text-lg">
                Popular Activities
              </h5>
              <h1 className="text-4xl font-bold text-white leading-snug">
                Company Impression
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyImpression;
