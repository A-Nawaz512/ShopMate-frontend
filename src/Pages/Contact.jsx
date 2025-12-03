import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-orange-600">Contact</span> Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600">
              Have questions or need assistance? We're here to help! Reach out
              to us via phone, email, or visit our office.
            </p>

            <div className="flex items-center space-x-4">
              <Phone className="text-orange-600" />
              <span className="text-gray-700">+92 314 8084741</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-orange-600" />
              <span className="text-gray-700">support@shopmate.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-orange-600" />
              <span className="text-gray-700">Bahawalpur, Punjab, Pakistan</span>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-semibold py-2 rounded-lg hover:bg-orange-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
