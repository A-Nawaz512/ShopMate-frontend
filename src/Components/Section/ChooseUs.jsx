import React from "react";
import { ShieldCheck, Truck, DollarSign, Headphones } from "lucide-react"; // using lucide-react icons

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Premium Quality",
      desc: "We provide only high-quality electrical products with long-lasting durability.",
      icon: <ShieldCheck className="w-10 h-10 text-orange-600" />,
    },
    {
      id: 2,
      title: "Affordable Prices",
      desc: "Best market prices with guaranteed value for your money.",
      icon: <DollarSign className="w-10 h-10 text-orange-600" />,
    },
    {
      id: 3,
      title: "Fast Delivery",
      desc: "Quick and safe delivery right to your doorstep across the country.",
      icon: <Truck className="w-10 h-10 text-orange-600" />,
    },
    {
      id: 4,
      title: "24/7 Support",
      desc: "Dedicated customer support to assist you anytime you need help.",
      icon: <Headphones className="w-10 h-10 text-orange-600" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-orange-600 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 mb-12">
          Trusted by thousands of customers for delivering quality and value.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-orange-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
