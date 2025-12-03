import React from "react";

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "20% Off on LED Bulbs",
      desc: "Brighten your home with energy-saving LED bulbs at discounted prices.",
      img: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg",
      discount: "20% OFF",
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free",
      desc: "Exclusive deal on extension boards – grab yours today!",
      img: "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg",
      discount: "B1G1 FREE",
    },
    {
      id: 3,
      title: "Flat 30% Off on Tools",
      desc: "High-quality electrical tool kits available at unbeatable prices.",
      img: "https://images.pexels.com/photos/4792479/pexels-photo-4792479.jpeg",
      discount: "30% OFF",
    },
  ];

  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-orange-600 mb-4">
          Special Offers & Discounts
        </h2>
        <p className="text-gray-600 mb-12">
          Grab the hottest deals before they’re gone!
        </p>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={offer.img}
                alt={offer.title}
                className="w-full h-56 object-cover"
              />
              {/* Discount Badge */}
              <span className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-1 text-sm font-semibold rounded-full">
                {offer.discount}
              </span>
              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{offer.desc}</p>
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
