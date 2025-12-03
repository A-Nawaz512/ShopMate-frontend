import { motion } from "framer-motion";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone",
      image:
        "https://images.pexels.com/photos/6078126/pexels-photo-6078126.jpeg",
      price: "$499",
    },
    {
      id: 2,
      name: "Laptop",
      image:
        "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      price: "$899",
    },
    {
      id: 3,
      name: "Headphones",
      image:
        "https://images.pexels.com/photos/374777/pexels-photo-374777.jpeg",
      price: "$199",
    },
    {
      id: 4,
      name: "Smartwatch",
      image:
        "https://images.pexels.com/photos/277394/pexels-photo-277394.jpeg",
      price: "$149",
    },
  ];

  return (
    <section className="bg-orange-50 py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-orange-600"
        >
          Featured Products
        </motion.h2>
        <p className="text-gray-600 mt-2">
          Discover our best-selling electronic gadgets
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-orange-600 font-bold mt-2">
                {product.price}
              </p>
              <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                Buy Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
