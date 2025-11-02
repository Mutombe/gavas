import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, FileText, Phone, Utensils, Calendar, Star, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);

  // Searchable content for Gava's Restaurant
  const searchableContent = [
    {
      title: 'Home',
      path: '/',
      description: 'Welcome to Gava\'s Restaurant - Authentic Zimbabwean cuisine',
      keywords: ['home', 'main', 'landing', 'start', 'gavas', 'restaurant'],
      category: 'Page'
    },
    {
      title: 'Menu',
      path: '/taste-tradition',
      description: 'Explore our traditional Zimbabwean menu',
      keywords: ['menu', 'food', 'dishes', 'taste', 'tradition', 'meals'],
      category: 'Page'
    },
    {
      title: 'About Us',
      path: '/our-story',
      description: 'Our story and commitment to authentic cuisine',
      keywords: ['about', 'story', 'history', 'who we are', 'our story'],
      category: 'Page'
    },
    {
      title: 'Entertainment',
      path: '/live-vibes',
      description: 'Live music and entertainment at Gava\'s',
      keywords: ['entertainment', 'music', 'live', 'vibes', 'events', 'shows'],
      category: 'Page'
    },
    {
      title: 'Catering',
      path: '/feast-your-event',
      description: 'Professional catering for your events',
      keywords: ['catering', 'events', 'parties', 'feast', 'celebrations'],
      category: 'Service'
    },
    {
      title: 'Reviews',
      path: '/what-they-say',
      description: 'What our customers say about us',
      keywords: ['reviews', 'testimonials', 'feedback', 'customers', 'ratings'],
      category: 'Page'
    },
    {
      title: 'Reserve Table',
      path: '/join-the-family',
      description: 'Reserve your table at Gava\'s',
      keywords: ['reserve', 'booking', 'table', 'reservation', 'book'],
      category: 'Action'
    },
    // Menu Categories
    {
      title: 'Stews',
      path: '/taste-tradition',
      description: 'Traditional Zimbabwean stews - Goat, Beef, Oxtail & more',
      keywords: ['stews', 'goat', 'beef', 'oxtail', 'liver', 'kidney', 'traditional'],
      category: 'Food'
    },
    {
      title: 'Grills',
      path: '/taste-tradition',
      description: 'Grilled meats - T-bone, Ribs, Chicken, Bream',
      keywords: ['grills', 'bbq', 't-bone', 'ribs', 'chicken', 'fish', 'bream'],
      category: 'Food'
    },
    {
      title: 'Combos',
      path: '/taste-tradition',
      description: 'Signature combo meals - Mutongi Gava, Muyera Shumba',
      keywords: ['combos', 'meals', 'platters', 'mutongi', 'muyera', 'signature'],
      category: 'Food'
    },
    {
      title: 'Sadza & Starches',
      path: '/taste-tradition',
      description: 'Traditional starches - Sadza, Rice, Mhunga',
      keywords: ['sadza', 'starches', 'rice', 'mhunga', 'zviyo', 'sides'],
      category: 'Food'
    },
    {
      title: 'Salads',
      path: '/taste-tradition',
      description: 'Fresh salads and greens',
      keywords: ['salads', 'greens', 'vegetables', 'healthy', 'fresh'],
      category: 'Food'
    },
    {
      title: 'Drinks',
      path: '/taste-tradition',
      description: 'Beverages - Soft drinks, Juices, Beer, Wine',
      keywords: ['drinks', 'beverages', 'beer', 'wine', 'juice', 'soda'],
      category: 'Food'
    },
    // Contact & Location
    {
      title: 'Phone: +263 772 381 863',
      path: 'tel:+263772381863',
      description: 'Call us for reservations and inquiries',
      keywords: ['phone', 'call', 'telephone', 'contact', 'reach'],
      category: 'Contact',
      isExternal: true
    },
    {
      title: 'Opening Hours',
      path: '/',
      description: 'Daily: 11:30 AM - 10:00 PM',
      keywords: ['hours', 'open', 'time', 'schedule', 'when', 'opening'],
      category: 'Info'
    }
  ];

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = searchableContent.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const descriptionMatch = item.description.toLowerCase().includes(query);
        const keywordsMatch = item.keywords.some(keyword => 
          keyword.toLowerCase().includes(query)
        );
        return titleMatch || descriptionMatch || keywordsMatch;
      });
      setSearchResults(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleClose = () => {
    setSearchQuery('');
    setSearchResults([]);
    onClose();
  };

  const handleResultClick = () => {
    handleClose();
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Food':
        return <Utensils className="w-4 h-4" />;
      case 'Service':
        return <Calendar className="w-4 h-4" />;
      case 'Contact':
        return <Phone className="w-4 h-4" />;
      case 'Action':
        return <Star className="w-4 h-4" />;
      case 'Info':
        return <Flame className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Food':
        return 'bg-red-50 text-red-700 group-hover:bg-red-100';
      case 'Service':
        return 'bg-yellow-50 text-yellow-700 group-hover:bg-yellow-100';
      case 'Contact':
        return 'bg-green-50 text-green-700 group-hover:bg-green-100';
      case 'Action':
        return 'bg-orange-50 text-orange-700 group-hover:bg-orange-100';
      case 'Info':
        return 'bg-blue-50 text-blue-700 group-hover:bg-blue-100';
      default:
        return 'bg-gray-50 text-gray-700 group-hover:bg-gray-100';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4 pt-10"
          >
            <div className="bg-white rounded-sm shadow-2xl overflow-hidden border-2 border-[#8B0000]">
              {/* Search Input */}
              <div 
                className="flex items-center gap-3 p-4 border-b-2 border-red-100"
                style={{
                  background: 'linear-gradient(to right, rgba(139, 0, 0, 0.1), rgba(223, 37, 49, 0.1))',
                }}
              >
                <Utensils className="w-5 h-5 flex-shrink-0 text-[#8B0000]" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search menu, services, or information..."
                  className="flex-1 outline-none text-gray-900 placeholder-gray-500 text-lg bg-transparent"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 hover:bg-red-100 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                )}
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-red-100 rounded-sm transition-colors"
                >
                  <X className="w-5 h-5 text-[#8B0000]" />
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {searchQuery.trim() === '' ? (
                  <div className="p-8 text-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{
                        background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.1), rgba(223, 37, 49, 0.1))',
                      }}
                    >
                      <Utensils className="w-8 h-8 text-[#8B0000]" />
                    </div>
                    <p className="text-gray-700 font-semibold mb-2">
                      Start searching...
                    </p>
                    <p className="text-gray-500 text-sm">
                      Try "stews", "grills", "sadza", "reserve", or "catering"
                    </p>
                  </div>
                ) : isSearching ? (
                  <div className="p-8 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      {[0, 0.2, 0.4].map((delay, index) => (
                        <motion.div
                          key={index}
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.3, 0.8],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: delay,
                            ease: "easeInOut",
                          }}
                          className="w-2 h-2 rounded-full"
                          style={{
                            background: 'linear-gradient(to right, #8B0000, #df2531)',
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mt-3">Searching...</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="py-2">
                    {searchResults.map((result, index) => (
                      result.isExternal ? (
                        <a
                          key={index}
                          href={result.path}
                          onClick={handleResultClick}
                          className="flex items-center gap-4 p-4 transition-colors duration-200 group border-b border-gray-100 last:border-0 hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50"
                        >
                          <div className={`p-2.5 rounded-sm transition-colors ${getCategoryColor(result.category)}`}>
                            {getCategoryIcon(result.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-sm font-bold text-[#8B0000] truncate">
                                {result.title}
                              </h3>
                              <span 
                                className="px-2 py-0.5 text-xs font-semibold rounded-full flex-shrink-0"
                                style={{
                                  background: 'rgba(255, 200, 0, 0.2)',
                                  color: '#8B0000',
                                }}
                              >
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 line-clamp-1">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#8B0000] flex-shrink-0 transition-colors" />
                        </a>
                      ) : (
                        <Link
                          key={index}
                          to={result.path}
                          onClick={handleResultClick}
                          className="flex items-center gap-4 p-4 transition-colors duration-200 group border-b border-gray-100 last:border-0 hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50"
                        >
                          <div className={`p-2.5 rounded-sm transition-colors ${getCategoryColor(result.category)}`}>
                            {getCategoryIcon(result.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-sm font-bold text-[#8B0000] truncate">
                                {result.title}
                              </h3>
                              <span 
                                className="px-2 py-0.5 text-xs font-semibold rounded-full flex-shrink-0"
                                style={{
                                  background: 'rgba(255, 200, 0, 0.2)',
                                  color: '#8B0000',
                                }}
                              >
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 line-clamp-1">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#8B0000] flex-shrink-0 transition-colors" />
                        </Link>
                      )
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-700 font-semibold mb-1">No results found</p>
                    <p className="text-gray-500 text-sm">
                      Try searching with different keywords
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {searchQuery.trim() === '' && (
                <div 
                  className="border-t-2 border-red-100 px-4 py-3"
                  style={{
                    background: 'linear-gradient(to right, rgba(139, 0, 0, 0.05), rgba(223, 37, 49, 0.05))',
                  }}
                >
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <kbd className="px-2 py-1 bg-white border-2 border-[#8B0000] rounded text-xs font-semibold text-[#8B0000]">↵</kbd>
                        to select
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd className="px-2 py-1 bg-white border-2 border-[#8B0000] rounded text-xs font-semibold text-[#8B0000]">ESC</kbd>
                        to close
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;