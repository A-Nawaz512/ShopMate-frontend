import React from "react";

const About = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-orange-50 py-20 px-6 text-center">
        <h1 className="text-5xl font-bold text-orange-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold text-orange-600">ShopMate</span> — 
          your trusted partner for high-quality electrical products.  
          We are dedicated to providing affordable, reliable, and innovative solutions 
          to power your life.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-orange-50 p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to make premium electrical products accessible to everyone.  
            We aim to deliver quality, safety, and affordability with every purchase.
          </p>
        </div>
        <div className="bg-orange-50 p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To become the leading eCommerce platform for electrical products,  
            recognized for trust, customer satisfaction, and innovation.
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <div className="bg-orange-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Image */}
          <img
            src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg"
            alt="Electrical Products"
            className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
          />
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              At <span className="font-semibold text-orange-600">ShopMate</span>, we believe in 
              powering lives through innovation and quality. With years of experience, we 
              have built strong relationships with trusted suppliers to bring you only the 
              best products.
            </p>
            <p className="text-gray-600">
              Whether you’re a professional electrician or a homeowner, we’re here to meet 
              your needs with reliable products and excellent service.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white border border-orange-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality</h3>
            <p className="text-gray-600 text-sm">
              We never compromise on product quality and customer trust.
            </p>
          </div>
          <div className="bg-white border border-orange-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
            <p className="text-gray-600 text-sm">
              Continuously evolving to bring the latest technology to our customers.
            </p>
          </div>
          <div className="bg-white border border-orange-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Focus</h3>
            <p className="text-gray-600 text-sm">
              Our customers are at the heart of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
