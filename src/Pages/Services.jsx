import React from "react";
import { Wrench, Truck, RefreshCcw, Headphones } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Wrench size={40} className="text-orange-600" />,
    title: "Product Installation",
    desc: "We provide hassle-free installation for all electrical appliances to ensure they work perfectly from day one."
  },
  {
    id: 2,
    icon: <Truck size={40} className="text-orange-600" />,
    title: "Fast Delivery",
    desc: "Get your products delivered to your doorstep quickly and safely with our reliable delivery service."
  },
  {
    id: 3,
    icon: <RefreshCcw size={40} className="text-orange-600" />,
    title: "Easy Returns",
    desc: "Not satisfied with your purchase? Enjoy a smooth return process with 100% customer satisfaction guaranteed."
  },
  {
    id: 4,
    icon: <Headphones size={40} className="text-orange-600" />,
    title: "24/7 Support",
    desc: "Our customer support team is available round the clock to assist you with queries and issues."
  },
];

const Services = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-orange-600">Our</span> Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
