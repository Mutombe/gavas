import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  TrendingUp,
  Award,
  ThumbsUp,
  ExternalLink,
} from "lucide-react";
import { MdStarPurple500 } from "react-icons/md";
import { LiaAwardSolid } from "react-icons/lia";
import { FiChevronsUp } from "react-icons/fi";

const Reviews = () => {
  const reviews = [
    {
      name: "Winnie",
      rating: 5,
      review:
        "Great service and hours of operation have been amazing. I live in USA - but enjoyed my homely meals for the last 2 weeks and great waiters as well. Will definitely be coming back.",
      location: "USA",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "Edius",
      rating: 5,
      review: "Great ambience and live music on a lazy Sunday afternoon.",
      location: "Harare",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      name: "Memory",
      rating: 5,
      review: "The traditional food is prepared by experts!!! Was impressed.",
      location: "Zimbabwe",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    },
    {
      name: "Mis Jane",
      rating: 5,
      review:
        "Very cosy, friendly atmosphere, good customer service and the food was very delicious. Clean toilets 💯 keep up the good standards. Special thanks to Nokuthula who served us.",
      location: "Harare",
      avatar:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80",
    },
  ];

  const stats = [
    { icon: <MdStarPurple500 />, value: "4.8/5", label: "Average Rating" },
    { icon: <TrendingUp />, value: "10K+", label: "Happy Customers" },
    { icon: <LiaAwardSolid />, value: "Top 5", label: "In Harare" },
    { icon: <ThumbsUp />, value: "95%", label: "Recommend Us" },
  ];

  const highlights = [
    "Authentic Traditional Cuisine",
    "Friendly & Professional Staff",
    "Live Music Entertainment",
    "Clean & Comfortable Atmosphere",
    "Fresh Local Ingredients",
    "Excellent Value for Money",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/35.jpg"
            alt="Happy Customers"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/85 via-[#df2531]/85 to-orange-600/85" />

          {/* Pattern Overlay */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 2px, transparent 2px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <MdStarPurple500 className="w-8 h-8 fill-yellow-300 text-yellow-300 drop-shadow-lg" />
                </motion.div>
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              What They Say
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Real experiences from our valued customers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-sm p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#df2531] to-[#ff4444] text-white rounded-xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#8B0000] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid with Profile Pictures */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
              Customer Testimonials
            </h2>
            <p className="text-gray-600 text-lg">
              Hear what our guests have to say about their experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#df2531] to-[#ff4444] opacity-100 transition-opacity rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-stone-50 to-white rounded-sm p-8  shadow-2xl transition-all border border-gray-100">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#df2531] to-[#ff4444] rounded-sm flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <MdStarPurple500
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    "{review.review}"
                  </p>

                  {/* Author with Profile Picture */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <div className="font-bold text-gray-800 text-lg">
                        {review.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {review.location}
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-14 h-14 rounded-sm overflow-hidden ring-4 ring-white shadow-lg">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Verified Badge */}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-sm flex items-center justify-center ring-2 ring-white">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tripadvisor CTA with Background Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="relative inline-flex flex-col items-center rounded-sm overflow-hidden shadow-2xl">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                  alt="Tripadvisor Reviews"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/95 to-[#df2531]/95" />
              </div>

              <div className="relative z-10 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  More Reviews on Tripadvisor
                </h3>
                <p className="text-white/90 mb-6 max-w-md">
                  Check out hundreds of reviews from our satisfied customers on
                  Tripadvisor
                </p>
                <a
                  href="https://www.tripadvisor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white text-[#8B0000] px-8 py-4 rounded-sm font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
                >
                  <span>Visit Tripadvisor</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-stone-100 to-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
              Why Customers Love Us
            </h2>
            <p className="text-gray-600 text-lg">
              The most mentioned highlights from our reviews
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-sm p-6 shadow-md hover:shadow-xl transition-all flex items-center space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-sm flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 font-semibold">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/34.png"
            alt="Gava's Restaurant Food"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/90 via-[#df2531]/90 to-purple-900/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <MdStarPurple500 className="w-16 h-16 mx-auto mb-6 text-yellow-300 fill-yellow-300 drop-shadow-lg" />

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Experience It Yourself
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made Gava's their
              favorite dining destination
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/join-the-family"
                className="bg-white text-[#8B0000] px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl"
              >
                Book Your Table
              </a>
              <a
                href="tel:+263772381863"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-[#8B0000] transition-all transform hover:scale-105"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-[#1a1a1a] via-[#2d0000] to-[#1a1a1a] text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition z-40"
      >
        <FiChevronsUp size={28} />
      </motion.button>
    </div>
  );
};

export default Reviews;
