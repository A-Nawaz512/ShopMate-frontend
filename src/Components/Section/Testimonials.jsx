import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Ali Raza",
      review:
        "Excellent quality products! I bought a set of electrical tools and they were delivered on time. Highly recommended!",
      rating: 5,
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg", // pexels image
    },
    {
      id: 2,
      name: "Sara Ahmed",
      review:
        "Affordable prices and the best customer support. They guided me so well before I placed my order.",
      rating: 4,
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
    {
      id: 3,
      name: "Usman Khan",
      review:
        "Fast delivery and the product packaging was top-notch. Definitely buying again!",
      rating: 5,
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
  ];

  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-orange-600 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mb-12">
          Trusted by thousands of happy customers across the country.
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-orange-500"
              />
              {/* Name */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>
              {/* Review */}
              <p className="text-gray-600 text-sm mb-4">"{item.review}"</p>
              {/* Rating */}
              <div className="flex justify-center text-orange-500">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
