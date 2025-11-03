import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Utensils,
  Music,
  Truck,
  Calendar,
  Phone,
  Mail,
  Star,
  ChefHat,
  X,
  Plus,
  Minus,
  ShoppingCart,
  MessageCircle,
} from "lucide-react";
import { MdStarPurple500 } from "react-icons/md";
import { LiaUtensilsSolid } from "react-icons/lia";
import { PiPersonSimpleBikeBold } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState("");

  const features = [
    {
      icon: <LiaUtensilsSolid className="w-8 h-8" />,
      title: "Traditional Cuisine",
      description: "Authentic Zimbabwean dishes prepared by expert chefs",
      color: "from-red-500 to-red-700",
      bgImage: "/9.jpeg",
      overlayColor: "from-red-600/90 to-red-800/90",
      link: "/taste-tradition",
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Live Entertainment",
      description: "Local bands every Friday & Sunday, 1PM-5PM",
      color: "from-amber-500 to-orange-600",
      bgImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
      overlayColor: "from-orange-600/90 to-amber-700/90",
      link: "/join-the-family",
    },
    {
      icon: <PiPersonSimpleBikeBold className="w-8 h-8" />,
      title: "Home Delivery",
      description: "Enjoy our meals in the comfort of your home",
      color: "from-blue-500 to-blue-700",
      bgImage: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80",
      overlayColor: "from-blue-600/90 to-blue-800/90",
      link: "/taste-tradition",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Event Catering",
      description: "Full catering services for your special occasions",
      color: "from-green-500 to-green-700",
      bgImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      overlayColor: "from-green-600/90 to-green-800/90",
      link: "/join-the-family",
    },
  ];

  const highlights = [
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Menu Items" },
    { number: "10K+", label: "Happy Customers" },
    { number: "100%", label: "Local Ingredients" },
  ];

  const handleAction = (action) => {
    if (action === "call") {
      window.location.href = "tel:+263785948128";
    } else if (action === "email") {
      window.location.href = "mailto:info@cacz.co.zw";
    } else if (action === "whatsapp") {
      window.location.href =
        "https://wa.me/263785948128?text=Hello!%20I%20would%20like%20to%20place%20an%20order.";
    }
  };

  const handleOrderNow = (item) => {
    console.log("handleOrderNow called with:", item);
    setSelectedItem(item);
    setQuantity(1);
    setSpecialInstructions("");
  };

  const handleWhatsAppOrder = () => {
    const total = selectedItem.price * quantity;
    const message = `Hello Gava's Restaurant! 🍽️

I would like to order:
━━━━━━━━━━━━━━━━━━
📦 *${selectedItem.name}*
💵 Price: $${selectedItem.price}
🔢 Quantity: ${quantity}
💰 Total: $${total}

${
  specialInstructions
    ? `📝 Special Instructions:\n${specialInstructions}\n`
    : ""
}━━━━━━━━━━━━━━━━━━

Please confirm my order. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/263785948128?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Food Mosaic Background */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] via-[#df2531] to-[#ff4444] z-0" />
          
          {/* Food Image Mosaic Grid */}
          <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 p-4 transform -rotate-12 scale-125">
            {[
              // Column 1
              "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
              "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400",
              "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400",
              "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400",
              "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
              "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400",
              "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400",
              "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400",
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
              "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
              // Column 2
              "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
              "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400",
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400",
              "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400",
              "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400",
              "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400",
              "https://images.unsplash.com/photo-1587334274328-64186a80aeee?w=400",
              "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400",
              "/4.jpg",
              // Column 3
              "https://images.unsplash.com/photo-1603073020779-82655f52e48e?w=400",
              "https://images.unsplash.com/photo-1562158147-f9bc98c4ab83?w=400",
              "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
              "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400",
              "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400",
              "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=400",
              "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
              "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
              "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
              // Column 4
              "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400",
              "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400",
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
              "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
              "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400",
              "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400",
              "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
              "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400",
              // Column 5
              "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400",
              "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400",
              "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400",
              "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400",
              "https://images.unsplash.com/photo-1587334274328-64186a80aeee?w=400",
              "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400",
              "https://images.unsplash.com/photo-1585325701165-7133b15b40d6?w=400",
              "https://images.unsplash.com/photo-1603073020779-82655f52e48e?w=400",
              "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
              // Column 6
              "https://images.unsplash.com/photo-1562158147-f9bc98c4ab83?w=400",
              "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
              "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400",
              "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400",
              "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400",
              "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400",
              "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=400",
              "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
              "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
              // Column 7
              "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400",
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
              "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400",
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
              "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
              "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400",
              "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400",
              "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
              "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400",
              // Column 8
              "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400",
              "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400",
              "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400",
              "https://images.unsplash.com/photo-1587334274328-64186a80aeee?w=400",
              "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400",
              "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
              "/1.jpg",
              "/2.jpg",
              "/3.jpg",
              // Column 9
              "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
              "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400",
              "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400",
              "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400",
              "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400",
              "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=400",
              "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
              "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
              "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400",
              // Column 10
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
              "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400",
              "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
              "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400",
              "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400",
              "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
              "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400",
              "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
            ].map((img, index) => (
              <motion.div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: (index % 10) * 0.05,
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: Math.random() * 5 + 3
                }}
              >
                <img
                  src={img}
                  alt="Zimbabwean cuisine"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/85 via-[#df2531]/80 to-[#8B0000]/85 z-10" />
          
          {/* Additional subtle overlay */}
          <div className="absolute inset-0 bg-black/20 z-20" />
          
          {/* Radial gradient for center focus */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/40 z-30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-sm mb-6">
              <span className="text-white font-semibold">
                Est. 2008 • Harare, Zimbabwe
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          >
            <span className="block">Experience</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
              Sadza with Soul
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
          >
            Traditional Zimbabwean cuisine served with passion, accompanied by
            live music and unforgettable atmosphere
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/taste-tradition"
              className="group bg-white text-[#8B0000] px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-2xl"
            >
              <span>Explore Our Menu</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              to="/join-the-family"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-[#8B0000] transition-all transform hover:scale-105 shadow-2xl"
            >
              Reserve Your Table
            </Link>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-sm p-6 border border-white/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                  {item.number}
                </div>
                <div className="text-white/80 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

            {/* Floating Action Elements */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          className="group bg-gradient-to-br from-[#1a1a1a] via-[#2d0000] to-[#1a1a1a] hover:bg-green-300 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("whatsapp")}
        >
          <IoLogoWhatsapp className="w-6 h-6 group-hover:rotate-12 transition-transform text-white" />
        </button>
        <button
          className="group bg-gradient-to-br from-[#1a1a1a] via-[#2d0000] to-[#1a1a1a] hover:bg-green-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("call")}
        >
          <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
        <button
          className="group bg-gradient-to-br from-[#1a1a1a] via-[#2d0000] to-[#1a1a1a] hover:bg-blue-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("email")}
        >
          <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
              Why Choose Gava's?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              More than just a restaurant - an authentic Zimbabwean experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-sm shadow-xl cursor-pointer"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${feature.bgImage})` }}
                  />
                  
                  {/* Colored Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.overlayColor} mix-blend-multiply`} />
                  
                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />
                  </div>

                  {/* Glow Effect on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-30 transition-opacity rounded-sm blur-xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-sm flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:bg-white/30 transition-all border border-white/30"
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                      {feature.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed drop-shadow">
                      {feature.description}
                    </p>
                    
                    {/* Decorative Corner Element */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

{/* Featured Dishes Section */}
      <section className="py-20 bg-gradient-to-br from-[#8B0000] to-[#df2531] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-sm mb-4">
              <ChefHat className="w-5 h-5" />
              <span className="font-semibold">Signature Dishes</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Taste the Tradition
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              From classic sadza to expertly grilled specialties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mutongi Gava",
                price: 25,
                description: "Our signature combo platter with sadza, vegetables, and grilled meat",
                image: "/sig.jpg",
                ingredients: ["Sadza", "Beef", "Vegetables"]
              },
              {
                name: "Oxtail Stew",
                price: 20,
                description: "Slow-cooked to perfection with rich, savory flavors",
                image: "/1.jpg",
                ingredients: ["Oxtail", "Tomatoes", "Herbs"]
              },
              {
                name: "Whole Kariba Bream",
                price: 15,
                description: "Fresh from the lake, grilled to golden perfection",
                image: "/bream.jpg",
                ingredients: ["Bream", "Lemon", "Spices"]
              },
            ].map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative h-[450px] rounded-sm overflow-hidden shadow-2xl"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                  style={{ backgroundImage: `url(${dish.image})` }}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/60 pointer-events-none z-10" />
                
                {/* Top-Left Content */}
                <div className="absolute top-0 left-0 right-0 p-6 z-20">
                  <div className="bg-black/40 backdrop-blur-md rounded-sm p-5 border border-white/10 transform transition-all duration-300 group-hover:bg-black/50 pointer-events-none">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white leading-tight pr-2">
                        {dish.name}
                      </h3>
                      <span className="text-yellow-300 text-2xl font-bold whitespace-nowrap bg-black/30 px-3 py-1 rounded-sm">
                        ${dish.price}
                      </span>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed mb-3">
                      {dish.description}
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-white/70">
                      <span className="bg-white/10 px-2 py-1 rounded-sm">
                        {dish.ingredients.join(" • ")}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Rating & Order Button */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                  <div className="bg-white/95 backdrop-blur-sm rounded-sm p-4 transform transition-all duration-300 group-hover:bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <MdStarPurple500 key={i} className="w-4 h-4 fill-current" />
                        ))}
                        <span className="text-gray-700 text-sm font-semibold ml-2">
                          5.0
                        </span>
                      </div>
                      <button 
                        onClick={(e) => {
                          console.log("Button clicked!", dish.name);
                          e.preventDefault();
                          e.stopPropagation();
                          handleOrderNow(dish);
                        }}
                        className="bg-[#8B0000] text-white px-4 py-2 rounded-sm text-sm font-bold hover:bg-[#a31e1e] transition-colors flex items-center space-x-2 relative z-50"
                      >
                        <span>Order Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 ring-2 ring-yellow-300/0 group-hover:ring-yellow-300/50 rounded-2xl transition-all duration-300 pointer-events-none z-20" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/taste-tradition"
              className="inline-flex items-center space-x-2 bg-white text-[#8B0000] px-8 py-4 rounded-sm font-bold hover:bg-yellow-300 transition-all transform hover:scale-105"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Order Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm pt-24"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-sm max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            >
              {/* Full Background Image */}
              <div className="absolute inset-0">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover opacity-30"
                />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 max-h-[90vh] overflow-y-auto">
                {/* Modal Header with Image */}
                <div className="relative h-64 rounded-t-sm overflow-hidden">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-sm hover:bg-white/30 transition-all"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>

                  {/* Item Name & Price */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                      {selectedItem.name}
                    </h2>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-yellow-300 drop-shadow-lg">
                        ${selectedItem.price}
                      </span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current drop-shadow"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Content with Background */}
                <div className="relative p-8">
                  {/* Semi-transparent white background for content area */}
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-md" />

                  <div className="relative">
                    {/* Description */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        Description
                      </h3>
                      <p className="text-gray-600">
                        {selectedItem.description}
                      </p>
                    </div>

                    {/* Ingredients */}
                    {selectedItem.ingredients && (
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-3">
                          Ingredients
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedItem.ingredients.map((ingredient, index) => (
                            <span
                              key={index}
                              className="bg-gradient-to-r from-red-50 to-orange-50 text-gray-700 px-3 py-1 rounded-sm text-sm border border-red-100"
                            >
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quantity Selector */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-3">
                        Quantity
                      </h3>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="bg-gray-100 hover:bg-gray-200 p-3 rounded-sm transition-colors"
                        >
                          <Minus className="w-5 h-5 text-gray-700" />
                        </button>
                        <span className="text-2xl font-bold text-gray-800 min-w-[3rem] text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="bg-gray-100 hover:bg-gray-200 p-3 rounded-sm transition-colors"
                        >
                          <Plus className="w-5 h-5 text-gray-700" />
                        </button>
                      </div>
                    </div>

                    {/* Special Instructions */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-3">
                        Special Instructions (Optional)
                      </h3>
                      <textarea
                        value={specialInstructions}
                        onChange={(e) => setSpecialInstructions(e.target.value)}
                        placeholder="Any allergies or special requests?"
                        className="w-full border-2 border-gray-200 rounded-sm p-4 focus:border-[#df2531] focus:outline-none transition-colors resize-none bg-white"
                        rows="3"
                      />
                    </div>

                    {/* Total */}
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-sm p-6 mb-6 border border-red-100">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-700">
                          Total Amount:
                        </span>
                        <span className="text-3xl font-bold text-[#df2531]">
                          ${selectedItem.price * quantity}
                        </span>
                      </div>
                    </div>

                    {/* WhatsApp Order Button */}
                    <button
                      onClick={handleWhatsAppOrder}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-sm font-bold transition-all transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl"
                    >
                      <MessageCircle className="w-6 h-6" />
                      <span>Order via WhatsApp</span>
                    </button>

                    <p className="text-center text-gray-500 text-sm mt-4">
                      You'll be redirected to WhatsApp to complete your order
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-stone-100 to-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#8B0000] to-[#df2531] rounded-sm p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "conic-gradient(from 0deg, transparent, white, transparent)",
                }}
              ></motion.div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready for an Authentic Experience?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join us for lunch or dinner, enjoy live music on weekends, and
                taste Zimbabwe's finest traditional cuisine
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/join-the-family"
                  className="bg-white text-[#8B0000] px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105"
                >
                  Book Your Table Now
                </Link>
                <a
                  href="tel:+263772381863"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-[#8B0000] transition-all transform hover:scale-105"
                >
                  Call +263 772381863
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;