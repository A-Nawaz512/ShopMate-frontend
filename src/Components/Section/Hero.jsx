import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className=" py-16 px-6 bg- text-center md:text-left md:flex md:items-center md:justify-center md:gap-5">
      {/* Text */}
      <div className="max-w-lg">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-orange-600"
        >
          Power Up Your Lifestyle ⚡
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-lg text-gray-700"
        >
          Explore the best electronic gadgets at unbeatable prices.  
          Free shipping on your first order!
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-orange-600 text-white font-medium rounded-lg shadow-md hover:bg-orange-700 transition"
        >
          Shop Now
        </motion.button>
      </div>

      {/* Hero Image */}
      <motion.img
        src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg"
        alt="Electronics"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-8 md:mt-0 rounded-lg shadow-lg w-[450px] h-auto"
      />
    </section>
  );
};

export default HeroSection;
