import React from "react";
import { Users, ShoppingBag, ThumbsUp, Award } from "lucide-react";

const SocialProof = () => {
  const stats = [
    {
      id: 1,
      icon: <Users className="w-10 h-10 text-orange-600" />,
      value: "10,000+",
      label: "Happy Customers",
    },
    {
      id: 2,
      icon: <ShoppingBag className="w-10 h-10 text-orange-600" />,
      value: "5,000+",
      label: "Orders Delivered",
    },
    {
      id: 3,
      icon: <ThumbsUp className="w-10 h-10 text-orange-600" />,
      value: "98%",
      label: "Positive Reviews",
    },
    {
      id: 4,
      icon: <Award className="w-10 h-10 text-orange-600" />,
      value: "15+",
      label: "Years Experience",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-orange-600 mb-4">
          Trusted by Thousands
        </h2>
        <p className="text-gray-600 mb-12">
          Our numbers speak for themselves — here’s why people trust us.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-orange-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center"
            >
              {stat.icon}
              <h3 className="text-3xl font-bold text-gray-800 mt-4">
                {stat.value}
              </h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
