import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, MapPin, Send, Info } from 'lucide-react';
import { MdStarPurple500 } from "react-icons/md";

const Reserve = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Reservation request sent! We\'ll confirm via phone within 2 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      specialRequests: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const timeSlots = [
    '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
    '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
    '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM',
    '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#8B0000] via-[#df2531] to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 50%, white 2px, transparent 2px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Calendar className="w-20 h-20 text-yellow-300" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Join the Family
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Reserve your table for an unforgettable dining experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Info Banner */}
      <section className="py-8 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start space-x-4"
          >
            <Info className="w-6 h-6 text-gray-800 flex-shrink-0 mt-1" />
            <div className="text-gray-800">
              <p className="font-semibold mb-1">Booking Recommendations:</p>
              <p className="text-sm">
                Booking in advance is recommended for Friday and Sunday lunch (when we have live music), 
                and for parties of 7 or more guests.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Reservation Section */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-sm p-8 md:p-12 shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000] mb-8">
                  Make a Reservation
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                      <User className="w-4 h-4" />
                      <span>Full Name *</span>
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

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                        <Mail className="w-4 h-4" />
                        <span>Email Address *</span>
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

                    <div>
                      <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                        <Phone className="w-4 h-4" />
                        <span>Phone Number *</span>
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

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>Date *</span>
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#df2531] focus:ring-2 focus:ring-[#df2531]/20 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                        <Clock className="w-4 h-4" />
                        <span>Time *</span>
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#df2531] focus:ring-2 focus:ring-[#df2531]/20 outline-none transition-all"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                      <Users className="w-4 h-4" />
                      <span>Number of Guests *</span>
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#df2531] focus:ring-2 focus:ring-[#df2531]/20 outline-none transition-all"
                    >
                      <option value="">Select number of guests</option>
                      {[...Array(20)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                      <option value="20+">20+ Guests (Call us)</option>
                    </select>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>Special Requests (Optional)</span>
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#df2531] focus:ring-2 focus:ring-[#df2531]/20 outline-none transition-all resize-none"
                      placeholder="Any dietary restrictions, seating preferences, or special occasions..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#8B0000] to-[#df2531] text-white px-8 py-4 rounded-sm font-bold text-lg hover:from-[#df2531] hover:to-[#ff4444] transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <span>Submit Reservation</span>
                    <Send className="w-5 h-5" />
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll confirm your reservation via phone within 2 hours
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-[#8B0000] to-[#df2531] text-white rounded-sm p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <a
                    href="tel:+263772381863"
                    className="flex items-start space-x-3 hover:text-yellow-300 transition-colors group"
                  >
                    <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <div className="text-white/90 group-hover:text-yellow-300">
                        +263 772381863
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Location</div>
                      <div className="text-white/90">
                        Belgravia Sports Club<br />
                        2nd St Ext, Harare<br />
                        Zimbabwe
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Hours</div>
                      <div className="text-white/90">
                        Daily: 11:30 AM - 10:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Music Notice */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-sm p-8 shadow-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-sm flex items-center justify-center">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Live Music Days</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-sm p-4 border border-white/20">
                    <div className="font-semibold mb-1">Friday</div>
                    <div className="text-sm text-white/80">1:00 PM - 5:00 PM</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-sm p-4 border border-white/20">
                    <div className="font-semibold mb-1">Sunday</div>
                    <div className="text-sm text-white/80">1:00 PM - 5:00 PM</div>
                  </div>
                </div>
                <p className="text-sm text-white/80 mt-4">
                  No cover charge - just great music and food!
                </p>
              </div>

              {/* Dining Options */}
              <div className="bg-white rounded-sm p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#8B0000] mb-4">
                  Dining Options
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#df2531] rounded-sm"></div>
                    <span className="text-gray-700">Al Fresco Dining</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#df2531] rounded-sm"></div>
                    <span className="text-gray-700">Indoor Seating</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#df2531] rounded-sm"></div>
                    <span className="text-gray-700">Large Group Tables</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#df2531] rounded-sm"></div>
                    <span className="text-gray-700">Family-Friendly</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
              Find Us
            </h2>
            <p className="text-gray-600 text-lg">
              Located at Belgravia Sports Club in the heart of Harare
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-sm p-4 shadow-2xl overflow-hidden"
          >
            <div className="aspect-video bg-gray-300 rounded-sm flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#8B0000] mx-auto mb-4" />
                <p className="text-gray-700 font-semibold text-lg">
                  Belgravia Sports Club, 2nd St Ext, Harare
                </p>
                <p className="text-gray-600 mt-2">
                  [Google Maps integration would go here]
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reserve;