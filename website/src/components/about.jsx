import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Heart,
  Users,
  Award,
  Leaf,
  Music,
  ChefHat,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { MdStarPurple500 } from "react-icons/md";
import { LiaAwardSolid } from "react-icons/lia";
import { LuSalad } from "react-icons/lu";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { ImHappy } from "react-icons/im";
import { FiChevronsUp } from "react-icons/fi";

const About = () => {
  const values = [
    {
      icon: <ImHappy className="w-8 h-8" />,
      title: "Passion",
      description:
        "Every dish is prepared with love and dedication to authentic Zimbabwean cuisine",
      link: "/taste-tradition",
      linkText: "View Our Menu",
    },
    {
      icon: <LuSalad className="w-8 h-8" />,
      title: "Local Sourcing",
      description:
        "Supporting local farmers and using only the freshest ingredients",
      link: "/taste-tradition",
      linkText: "Our Ingredients",
    },
    {
      icon: <LiaPeopleCarrySolid className="w-8 h-8" />,
      title: "Community",
      description: "Creating a welcoming space where everyone feels at home",
      link: "/join-the-family",
      linkText: "Join Us",
    },
    {
      icon: <LiaAwardSolid className="w-8 h-8" />,
      title: "Excellence",
      description:
        "Committed to maintaining the highest standards in food and service",
      link: "/join-the-family",
      linkText: "Reserve Table",
    },
  ];

  const milestones = [
    {
      year: "2008",
      event: "Gava's Opens",
      description: "Started our journey at Belgravia Sports Club",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    },
    {
      year: "2012",
      event: "Top 5 Restaurant",
      description:
        "Ranked among Harare's top traditional cuisine establishments",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    },
    {
      year: "2015",
      event: "Expanded Menu",
      description: "Added extensive grill options to complement our stews",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    },
    {
      year: "2018",
      event: "Live Music Program",
      description: "Launched weekly entertainment supporting local artists",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    },
    {
      year: "2020",
      event: "Catering Services",
      description: "Extended our reach through corporate catering",
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    },
    {
      year: "2025",
      event: "Community Landmark",
      description: "Celebrated as a cornerstone of Zimbabwean dining",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    },
  ];

  const achievements = [
    {
      icon: <Trophy />,
      title: "Award-Winning",
      description: "Top traditional restaurant in Harare",
      link: "/our-story",
      linkText: "Our Story",
    },
    {
      icon: <ChefHat />,
      title: "Expert Chefs",
      description: "Generations of culinary expertise",
      link: "/taste-tradition",
      linkText: "View Menu",
    },
    {
      icon: <Music />,
      title: "Cultural Hub",
      description: "Supporting local artists and musicians",
      link: "/join-the-family",
      linkText: "Book Table",
    },
    {
      icon: <Users />,
      title: "10,000+ Customers",
      description: "Served with pride and excellence",
      link: "/join-the-family",
      linkText: "Join Us",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/34.png"
            alt="Gava's Restaurant"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/60 via-[#df2531]/55 to-[#8B0000]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-sm mb-6">
              <span className="font-semibold">Since 2008</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Story</h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Where tradition meets passion, and every meal tells a story
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#df2531] to-[#ff4444] rounded-sm opacity-20 blur-2xl"></div>

                {/* Find Us At Card with Background Image */}
                <div className="relative bg-white rounded-sm overflow-hidden shadow-2xl">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                      alt="Belgravia Sports Club"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative z-10 p-8 bg-white/50 backdrop-blur-sm">
                    <div className="flex items-center space-x-3 mb-6">
                      <MapPin className="w-8 h-8 text-[#df2531]" />
                      <h2 className="text-3xl font-bold text-[#8B0000]">
                        Our Location
                      </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Nestled on the bowling green at Belgravia Sports Club,
                      Gava's offers a unique dining experience in one of
                      Harare's most prestigious locations.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Al Fresco dining is available under large tents and
                      umbrellas on the grass, providing a perfect outdoor
                      atmosphere. For those who prefer indoor dining, our
                      restaurant is tastefully decorated with paintings by local
                      artists, creating an authentic Zimbabwean ambiance.
                    </p>

                    {/* Find Us At Section with Background */}
                    <div className="relative overflow-hidden rounded-sm">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src="/28.jpg"
                          alt="Location"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#8B0000]/75" />
                      </div>

                      <div className="relative z-10 text-white p-6">
                        <p className="font-semibold mb-2">Find Us At:</p>
                        <p>Belgravia Sports Club</p>
                        <p>2nd St Ext, Harare</p>
                        <p className="mt-2 text-yellow-300">
                          Daily: 11:30 AM - 10:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-[#8B0000] mb-6">
                Traditional Cuisine, Modern Excellence
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg">
                Gava's serves traditional Zimbabwean cuisine, with our signature
                Sadza and Stew being the centerpiece of our menu. We also offer
                an extensive grill menu featuring premium meats and fresh fish
                from Lake Kariba.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                We source our ingredients from local, independent farmers to
                ensure high quality and freshness. The restaurant is fully
                licensed and serves a variety of beers, wines, and spirits to
                complement your meal.
              </p>

              {/* Why Locals Love Us with Background Image */}
              <div className="relative overflow-hidden rounded-sm">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="/2.jpg"
                    alt="Traditional Food"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/75 to-[#df2531]/95" />
                </div>

                <div className="relative z-10 text-white p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Why Locals Love Us
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Gava's has built up a large and loyal clientele, and
                    currently ranks as one of Harare's top traditional cuisine
                    establishments. We attract a wide range of patrons, from
                    locals through to expats and visitors. Gava's is the first
                    stop for tourists visiting Zimbabwe who wish to experience
                    traditional Zimbabwean cuisine at its finest.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section with Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#df2531] to-[#ff4444] text-white rounded-sm mb-6 transform rotate-45 group-hover:rotate-[60deg] transition-transform duration-300">
                  <div className="transform -rotate-45 group-hover:-rotate-[60deg] transition-transform duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 mb-4">{value.description}</p>

                {/* Link with Icon */}
                <Link
                  to={value.link}
                  className="inline-flex items-center space-x-2 text-[#df2531] hover:text-[#8B0000] font-semibold transition-colors group/link"
                >
                  <span>{value.linkText}</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section with Glassmorphism */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image for Timeline Section */}
        <div className="absolute inset-0">
          <img
            src="/31.jpg"
            alt="Restaurant Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-100/55 to-stone-200/55" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 text-lg">
              Milestones that shaped Gava's into what it is today
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#df2531] via-[#ff4444] to-[#df2531]"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    {/* Glassmorphism Card with Background Image */}
                    <div className="relative rounded-sm overflow-hidden group hover:shadow-2xl transition-shadow">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={milestone.image}
                          alt={milestone.event}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Glassmorphism Effect */}
                      <div className="relative z-10 bg-white/80 backdrop-blur-md border border-white/40 p-6 shadow-lg">
                        <div className="text-3xl font-bold text-[#df2531] mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {milestone.event}
                        </h3>
                        <p className="text-gray-700">{milestone.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
                    <div className="w-6 h-6 bg-[#df2531] rounded-sm border-4 border-white shadow-lg z-10"></div>
                  </div>

                  <div className="w-full md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-[#8B0000] to-[#df2531] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-white/80 text-lg">
              Recognition and achievements we're proud of
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md rounded-sm p-8 border border-white/20 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-sm mb-6 group-hover:bg-white/30 transition-colors">
                  <div className="text-white">{achievement.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-white/80 mb-4">{achievement.description}</p>

                {/* Link with Icon */}
                <Link
                  to={achievement.link}
                  className="inline-flex items-center space-x-2 text-yellow-300 hover:text-yellow-200 font-semibold transition-colors group/link"
                >
                  <span>{achievement.linkText}</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
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

export default About;
