import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Briefcase,
  Users,
  PartyPopper,
  Trophy,
  Building2,
  Heart,
  Phone,
  Mail,
  Send,
} from "lucide-react";
import { MdStarPurple500 } from "react-icons/md";
import { FiChevronsUp } from "react-icons/fi";
const Catering = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guests: "",
    date: "",
    message: "",
  });

  const eventTypes = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Corporate Events",
      description: "Workshops, business meetings, and corporate functions",
      gradient: "from-blue-500 to-blue-700",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: "Private Parties",
      description:
        "Birthday celebrations, anniversaries, and family gatherings",
      gradient: "from-purple-500 to-purple-700",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Sports Days",
      description: "Team building events and sports day catering",
      gradient: "from-green-500 to-green-700",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Weddings",
      description: "Make your special day memorable with authentic cuisine",
      gradient: "from-pink-500 to-pink-700",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "NGO Events",
      description: "Supporting non-profit organizations and community events",
      gradient: "from-orange-500 to-orange-700",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Gatherings",
      description: "Any occasion that brings people together",
      gradient: "from-red-500 to-red-700",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    },
  ];

  const services = [
    "Traditional Zimbabwean stews prepared fresh",
    "On-site grilling with our portable braai stands",
    "Hot food service with bain-marie and chafing dishes",
    "Professional setup and cleanup",
    "Flexible menu options to suit your needs",
    "Experienced catering staff",
    "All serving equipment provided",
    "Delivery within Harare",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Inquiry sent! We'll contact you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      guests: "",
      date: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=80"
            alt="Catering Event"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/85 via-[#df2531]/85 to-orange-600/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-sm mb-6">
              <span className="font-semibold">Corporate & Private Events</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Feast Your Event
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Bringing authentic Zimbabwean cuisine to your special occasions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Types Section with Image Backgrounds */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
              Events We Cater
            </h2>
            <p className="text-gray-600 text-lg">
              Whatever the occasion, we've got you covered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-sm blur-xl`}
                ></div>

                {/* Card with Background Image */}
                <div className="relative rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content with Semi-transparent Background */}
                  <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 hover:bg-white/95 transition-colors">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${type.gradient} rounded-sm mb-6 text-white shadow-lg`}
                    >
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {type.title}
                    </h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
              Our Catering Process
            </h2>
            <p className="text-gray-600 text-lg">
              Professional service from kitchen to your venue
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Preparation",
                description:
                  "Stews are prepared in our restaurant kitchen to ensure authentic flavors and quality",
              },
              {
                step: "02",
                title: "Transportation",
                description:
                  "Food is safely transported to your venue, maintaining optimal temperature",
              },
              {
                step: "03",
                title: "On-Site Service",
                description:
                  "Hot service with bain-marie. Grilled items prepared fresh on-site with our portable braai stands",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="inline-block mb-6">
                    <div className="text-6xl font-bold text-[#df2531] opacity-20">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-[#df2531] to-transparent"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included Section */}
      <section className="py-20 bg-gradient-to-br from-[#8B0000] to-[#df2531] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What's Included
            </h2>
            <p className="text-white/80 text-lg">
              Comprehensive catering service with attention to detail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-sm p-4 border border-white/20"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#8B0000]"
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
                <span className="text-white/90">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-stone-100 to-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
              Request a Quote
            </h2>
            <p className="text-gray-600 text-lg">
              Tell us about your event and we'll get back to you within 24 hours
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="bg-gradient-to-br from-[#8B0000] to-[#df2531] text-white rounded-sm p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

                <div className="space-y-4">
                  <a
                    href="tel:+263772381863"
                    className="flex items-start space-x-3 hover:text-yellow-300 transition-colors"
                  >
                    <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <div className="text-white/80">+263 772381863</div>
                    </div>
                  </a>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-white/80">catering@gavas.co.zw</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-white/80 leading-relaxed">
                      We provide catering services within Harare for events of
                      all sizes. Contact us to discuss your specific
                      requirements.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-sm p-8 shadow-xl space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#df2531] focus:ring-2 focus:ring-[#df2531]/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#df2531] focus:ring-2 focus:ring-[#df2531]/20 outline-none transition-all"
                      placeholder="+263..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#df2531] focus:ring-2 focus:ring-[#df2531]/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#df2531] focus:ring-2 focus:ring-[#df2531]/20 outline-none transition-all"
                    >
                      <option value="">Select event type</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="wedding">Wedding</option>
                      <option value="party">Private Party</option>
                      <option value="sports">Sports Day</option>
                      <option value="ngo">NGO Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Guests *
                    </label>
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      min="1"
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#df2531] focus:ring-2 focus:ring-[#df2531]/20 outline-none transition-all"
                      placeholder="50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#df2531] focus:ring-2 focus:ring-[#df2531]/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#df2531] focus:ring-2 focus:ring-[#df2531]/20 outline-none transition-all resize-none"
                    placeholder="Tell us more about your event, specific menu preferences, location, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#8B0000] to-[#df2531] text-white px-8 py-4 rounded-sm font-bold text-lg hover:from-[#df2531] hover:to-[#ff4444] transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Send Inquiry</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
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

export default Catering;
