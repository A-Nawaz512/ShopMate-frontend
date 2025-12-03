import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../Components/app/CartSlice";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    quantity: 20,
    image: "https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg",
    qty: 1,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 99.99,
    quantity: 15,
    image: "https://images.pexels.com/photos/277406/pexels-photo-277406.jpeg",
    qty: 1,
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 75.0,
    quantity: 10,
    image: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
    qty: 1,
  },
  {
    id: 4,
    name: "DSLR Camera",
    price: 499.99,
    quantity: 5,
    image: "https://images.pexels.com/photos/51383/camera-lens-lens-camera-photography-51383.jpeg",
    qty: 1,
  },
  {
    id: 5,
    name: "Laptop",
    price: 899.99,
    quantity: 8,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    qty: 1,
  },
  {
    id: 6,
    name: "Gaming Console",
    price: 399.0,
    quantity: 12,
    image: "https://images.pexels.com/photos/845255/pexels-photo-845255.jpeg",
    qty: 1,
  },
  {
    id: 7,
    name: "Sunglasses",
    price: 59.99,
    quantity: 25,
    image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
    qty: 1,
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 45.0,
    quantity: 30,
    image: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg",
    qty: 1,
  },
  {
    id: 9,
    name: "Backpack",
    price: 39.99,
    quantity: 18,
    image: "https://images.pexels.com/photos/748043/pexels-photo-748043.jpeg",
    qty: 1,
  },
  {
    id: 10,
    name: "Fitness Tracker",
    price: 79.99,
    quantity: 22,
    image: "https://images.pexels.com/photos/4039444/pexels-photo-4039444.jpeg",
    qty: 1,
  },
];


const updatedProducts = products.map((product) => ({
  ...product,
  qty: 1,
}));

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Products = () => {
  const data = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-50 py-12 px-6 lg:px-20">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-orange-600 text-center mb-12"
      >
        Our Products
      </motion.h1>

      {/* Product Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {updatedProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            {/* Product Image */}
            <motion.img
              src={`${product.image}?auto=compress&cs=tinysrgb&h=200`}
              alt={product.name}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Product Details */}
            <div className="p-5 flex flex-col h-full">
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {product.name}
              </h3>
              <p className="text-orange-500 font-bold text-lg mt-1">
                ${product.price}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                📦 In Stock:{" "}
                <span className="font-medium text-gray-700">
                  {product.quantity}
                </span>
              </p>

              {/* Button */}
              <Link to={`/products/${product.id}`}>
              <motion.button
              onClick={()=>dispatch(addProduct(product))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="mt-4 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium transition"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Products;
