import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of electrical products do you sell?",
      answer:
        "We offer a wide range of electrical items including LED bulbs, extension boards, wiring tools, and more.",
    },
    {
      question: "Do you provide delivery across Pakistan?",
      answer:
        "Yes, we provide fast and reliable delivery services across all major cities in Pakistan.",
    },
    {
      question: "Can I return or exchange a product?",
      answer:
        "Absolutely. We offer easy returns and exchanges within 7 days of purchase, provided the product is unused and in original packaging.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email or SMS to monitor your delivery status.",
    },
    {
      question: "Do you offer bulk discounts?",
      answer:
        "Yes, we provide special discounts for bulk purchases. Please contact our sales team for more details.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-orange-600 text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Have questions? We’ve got answers!
        </p>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 hover:text-orange-600 transition"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-180 text-orange-600" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
