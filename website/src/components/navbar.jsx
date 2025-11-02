import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchModal from './search';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/taste-tradition', label: 'Menu' },
    { path: '/our-story', label: 'About' },
    { path: '/live-vibes', label: 'Entertainment' },
    { path: '/feast-your-event', label: 'Catering' },
    { path: '/what-they-say', label: 'Reviews' },
  ];

  return (
    <>
      {/* Search Modal */}
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#8B0000]/95 backdrop-blur-md shadow-lg' : 'bg-gradient-to-b from-[#8B0000] to-[#8B0000]/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-30 h-20 flex items-center justify-center transform scale-110 transition-transform">
                  <img src="/logo.png" alt="Gava's Logo" className="w-30 h-12" />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-sm text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'bg-white text-[#8B0000]'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button & Search */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+263772381863" className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+263 772381863</span>
              </a>
              
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(true)}
                className="p-2.5 rounded-sm hover:bg-white/20 transition-colors group"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-white group-hover:text-yellow-300 transition-colors" />
              </motion.button>

              <Link
                to="/join-the-family"
                className="bg-white text-[#8B0000] px-6 py-2 rounded-sm font-semibold hover:bg-yellow-300 hover:text-[#8B0000] transition-all transform hover:scale-105"
              >
                Reserve Table
              </Link>
            </div>

            {/* Mobile Search & Menu Buttons */}
            <div className="lg:hidden flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(true)}
                className="text-white p-2 hover:bg-white/20 rounded-sm transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </motion.button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 hover:bg-white/20 rounded-sm transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#8B0000] border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-sm text-sm font-medium transition-all ${
                      location.pathname === link.path
                        ? 'bg-white text-[#8B0000]'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:+263772381863"
                  className="flex items-center space-x-2 px-4 py-3 text-white hover:bg-white/20 rounded-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+263 772381863</span>
                </a>
                <Link
                  to="/join-the-family"
                  className="block text-center bg-white text-[#8B0000] px-6 py-3 rounded-sm font-semibold hover:bg-yellow-300 transition-all"
                >
                  Reserve Table
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;