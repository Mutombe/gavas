import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { MdStarPurple500 } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1a1a1a] via-[#2d0000] to-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-20 h-14 flex items-center justify-center">
                <img src="/logo.png" alt="Gava's Logo" className="w-20 h-10" />
              </div>
              <div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Traditional Zimbabwean food at its finest. Come for the food, stay for the atmosphere.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#df2531]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/taste-tradition" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/live-vibes" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Entertainment
                </Link>
              </li>
              <li>
                <Link to="/feast-your-event" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Catering Services
                </Link>
              </li>
              <li>
                <Link to="/join-the-family" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Reserve a Table
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#df2531]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-[#df2531] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Belgravia Sports Club,<br />2nd St Ext, Harare, Zimbabwe
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-[#df2531] flex-shrink-0" />
                <a href="tel:+263772381863" className="text-gray-400 hover:text-white transition-colors">
                  +263 772381863
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Clock className="w-5 h-5 text-[#df2531] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Daily: 11:30 AM - 10:00 PM
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#df2531]">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#df2531] rounded-full"></span>
                <span>Dine-In Experience</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#df2531] rounded-full"></span>
                <span>Home Delivery</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#df2531] rounded-full"></span>
                <span>Live Entertainment</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#df2531] rounded-full"></span>
                <span>Event Catering</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#df2531] rounded-full"></span>
                <span>Al Fresco Dining</span>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#df2531] rounded-full flex items-center justify-center hover:bg-[#ff3545] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#df2531] rounded-full flex items-center justify-center hover:bg-[#ff3545] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#df2531] rounded-full flex items-center justify-center hover:bg-[#ff3545] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Gava's Restaurant. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;