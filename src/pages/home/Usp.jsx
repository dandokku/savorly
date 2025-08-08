import React from "react";
import { FiClock, FiAward, FiFeather, FiUser } from "react-icons/fi";

function USP() {
  const features = [
    {
      icon: <FiUser className="h-6 w-6" />,
      title: "Chef-crafted",
      desc: "Seasonal menus curated by our award-winning chef"
    },
    {
      icon: <FiFeather className="h-6 w-6" />,
      title: "Locally-sourced",
      desc: "Ingredients from trusted regional producers"
    },
    {
      icon: <FiClock className="h-6 w-6" />,
      title: "Open late",
      desc: "Night owls welcome till midnight daily"
    },
    {
      icon: <FiAward className="h-6 w-6" />,
      title: "Wine excellence",
      desc: "Sommelier-selected award-winning pairings"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto h-12 w-12 flex items-center justify-center bg-amber-100 text-amber-600 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default USP;