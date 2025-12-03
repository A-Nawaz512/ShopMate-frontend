import React from "react";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-4">ShopMate</h2>
          <p className="text-gray-400 text-sm">
            Your trusted destination for high-quality electrical products at
            unbeatable prices. We bring power to your life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="#" className="hover:text-orange-400">About</a></li>
            <li><a href="#" className="hover:text-orange-400">Products</a></li>
            <li><a href="#" className="hover:text-orange-400">Services</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-orange-400">FAQs</a></li>
            <li><a href="#" className="hover:text-orange-400">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-400" /> Bahawalpur, Punjab, Pakistan
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-400" /> +92 314 8084741
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-400" /> support@shopmate.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-orange-400"><Facebook /></a>
            <a href="#" className="hover:text-orange-400"><Twitter /></a>
            <a href="#" className="hover:text-orange-400"><Instagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ShopMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
