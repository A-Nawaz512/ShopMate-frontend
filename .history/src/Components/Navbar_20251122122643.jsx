import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import BillPage from "./app/Bill";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [cart, setCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItem = useSelector((item) => item.Cart);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="text-2xl font-bold">
            <span className="text-orange-600">Shop</span>
            <span className="text-gray-800">Mate</span>
          </div>

          {cart && <BillPage />}

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-orange-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-orange-600 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-orange-600 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-600 transition">
                Contact
              </Link>
            </li>

            {/* NEW — Auth Buttons */}
            <li>
              <Link
                to="/login"
                className="px-4 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="px-4 py-1.5 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition"
              >
                Sign Up
              </Link>
            </li>
          </ul>

          {/* Cart + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <div
              onClick={() => setCart(!cart)}
              className="relative text-gray-700 hover:text-orange-600 cursor-pointer"
            >
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                {cartItem.length}
              </span>
              <ShoppingCart size={24} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700 hover:text-orange-600"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-600 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-600 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-600 transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-600 transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-600 transition"
              >
                Contact
              </Link>
            </li>

            {/* NEW — Auth Buttons (Mobile) */}
            <li>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block text-center px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="block text-center px-4 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
