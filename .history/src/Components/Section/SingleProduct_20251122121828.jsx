import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct,increaseQty, decreaseQty } from "../app/CartSlice";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useParams } from "react-router-dom";

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


const SingleProduct = () => {

    const dispatch = useDispatch()

    const data = useSelector((state)=>state.Cart)

    // console.log(data);
    

   const {id} = useParams()

   console.log(id);
   

   const clickedProduct = products.find((item)=>{
    return item.id ===  Number(id)
   })

   const incQTY = data.find((item)=>{
    return item.id ===  Number(id)
   })

   console.log("wel",clickedProduct);
   

   if(!incQTY){

    return 

   }




  return (
    <div className="bg-gray-50 py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.img
            src={`${incQTY.image}?auto=compress&cs=tinysrgb&h=400`}
            alt={incQTY.name}
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-800">{incQTY.name}</h1>
          <p className="text-orange-500 text-2xl font-semibold mt-3">
            ${incQTY.price}
          </p>
          <p className="text-gray-500 mt-2">
            📦 In Stock:{" "}
            <span className="font-medium text-gray-700">k</span>
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mt-6">
            <button
            onClick={()=>dispatch(decreaseQty(incQTY))}
              className="bg-gray-200 text-lg font-bold w-10 h-10 rounded-full hover:bg-gray-300"
            >
              –
            </button>
            <span className="text-xl font-medium">{incQTY.qty}</span>
            <button
            onClick={()=>dispatch(increaseQty(incQTY))}
              className="bg-gray-200 text-lg font-bold w-10 h-10 rounded-full hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <motion.button
            onClick={()=>dispatch(addProduct(incQTY))}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </motion.button>

          {/* Description */}
          <p className="mt-6 text-gray-600 leading-relaxed">
            This {incQTY.name} is designed with high-quality materials and
            advanced technology to ensure durability and performance. Perfect
            for your lifestyle needs.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SingleProduct;
