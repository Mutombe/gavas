import React from "react";
import { motion } from "framer-motion";
import {
  Music,
  Calendar,
  Clock,
  DollarSign,
  Users,
  Baby,
  Palette,
  Sparkles,
} from "lucide-react";
import { MdStarPurple500 } from "react-icons/md";
import { FiChevronsUp } from "react-icons/fi";

const Entertainment = () => {
  const musicDays = [
    {
      day: "Friday",
      time: "1:00 PM - 5:00 PM",
      description:
        "Kick off your weekend with live traditional and contemporary Zimbabwean music",
      gradient: "from-purple-500 to-purple-700",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    },
    {
      day: "Sunday",
      time: "1:00 PM - 5:00 PM",
      description:
        "Perfect Sunday afternoon vibes with local talent and great food",
      gradient: "from-blue-500 to-blue-700",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    },
  ];

  const features = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "No Cover Charge",
      description: "Enjoy live music free of charge - just come hungry!",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Local Artists",
      description: "Supporting and showcasing Zimbabwean musical talent",
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Family Friendly",
      description: "Jumping castle available on weekends for the kids",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Art Exhibitions",
      description: "Regular showcases of local artists and performers",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&q=80"
            alt="Live Music Performance"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 via-[#8B0000]/85 to-[#df2531]/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center text-white"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Music className="w-20 h-20 text-yellow-300 drop-shadow-lg" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">Live Vibes</h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Experience the rhythm of Zimbabwe with live music every Friday and
              Sunday
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
              Music Schedule
            </h2>
            <p className="text-gray-600 text-lg">
              Mark your calendar for our weekly performances
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {musicDays.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-sm blur-xl`}
                ></div>

                {/* Card with Background Image */}
                <div className="relative rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={event.image}
                      alt={`${event.day} Live Music`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content with Semi-transparent Background */}
                  <div className="relative z-10 bg-white/90 backdrop-blur-md p-8">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${event.gradient} rounded-sm mb-6 shadow-lg`}
                    >
                      <Calendar className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      {event.day}
                    </h3>

                    <div className="flex items-center space-x-3 mb-4 text-gray-600">
                      <Clock className="w-5 h-5" />
                      <span className="text-lg font-semibold">
                        {event.time}
                      </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {event.description}
                    </p>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-sm p-4 border border-green-200">
                      <div className="flex items-center space-x-2 text-green-800 font-semibold">
                        <Sparkles className="w-5 h-5" />
                        <span>FREE Entry - No Cover Charge</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
              Entertainment Features
            </h2>
            <p className="text-gray-600 text-lg">
              More than just music - a complete experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#df2531] to-[#ff4444] text-white rounded-full mb-6 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Local Talent Section with Background Image */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80"
            alt="Local Musicians"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/90 via-[#df2531]/90 to-purple-900/90" />

          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "conic-gradient(from 0deg, transparent, white, transparent)",
              }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Music className="w-16 h-16 mx-auto mb-6 text-yellow-300 drop-shadow-lg" />

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Supporting Local Talent
            </h2>

            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Gava's commitment to the promotion of Zimbabwean products goes far
              beyond our focus on traditional food. Local musicians perform at
              the restaurant on Fridays and Sundays; we do not charge our
              customers for this service, but rather feel it is our chance to
              give something back to the community that continues to support us.
            </p>

            <p className="text-xl text-white/90 leading-relaxed mb-8">
              At the same time, we are able to give local musicians a platform
              to showcase their talents. Similarly, Gava's has hosted several
              art exhibitions and performances over the past two years. We
              believe strongly in the promotion of locally grown, Zimbabwean
              products – be they food, music or art.
            </p>

            {/* Family Fun Card with Background */}
            <div className="relative overflow-hidden rounded-sm">
              {/* Card Background Image */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
                  alt="Family Entertainment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
              </div>

              <div className="relative z-10 p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">
                  Family Fun on Weekends
                </h3>
                <p className="text-white/90 text-lg">
                  On the weekends, we offer a jumping castle to keep the little
                  ones entertained while you enjoy great food and live music.
                  It's a complete family experience!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-stone-100 to-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#8B0000] to-[#df2531] rounded-sm p-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us This Weekend!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience live music, delicious food, and the vibrant atmosphere
              that makes Gava's special
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+263772381863"
                className="bg-white text-[#8B0000] px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105"
              >
                Call to Reserve
              </a>
              <a
                href="/join-the-family"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-[#8B0000] transition-all transform hover:scale-105"
              >
                Book Online
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

export default Entertainment;
