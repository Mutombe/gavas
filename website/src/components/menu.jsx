import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flame,
  Leaf,
  Beef,
  Fish,
  Utensils,
  Coffee,
  Droplets,
  X,
  Plus,
  Minus,
  ShoppingCart,
  MessageCircle,
} from "lucide-react";
import { MdStarPurple500 } from "react-icons/md";
import { LiaUtensilsSolid } from "react-icons/lia";
import { LuSalad } from "react-icons/lu";
import { FiChevronsUp } from "react-icons/fi";
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("stews");
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState("");

  const categories = [
    {
      id: "stews",
      name: "Stews",
      icon: <Flame className="w-6 h-6" />,
      color: "from-red-500 to-red-700",
      bgImage:
        "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400&q=80",
    },
    {
      id: "grills",
      name: "Grills",
      icon: <Beef className="w-6 h-6" />,
      color: "from-orange-500 to-orange-700",
      bgImage:
        "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&q=80",
    },
    {
      id: "combos",
      name: "Combos",
      icon: <LiaUtensilsSolid className="w-6 h-6" />,
      color: "from-amber-500 to-amber-700",
      bgImage:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
    },
    {
      id: "starches",
      name: "Starches",
      icon: <Coffee className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-700",
      bgImage:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
    },
    {
      id: "salads",
      name: "Salads",
      icon: <LuSalad className="w-6 h-6" />,
      color: "from-green-500 to-green-700",
      bgImage:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
    },
    {
      id: "drinks",
      name: "Drinks",
      icon: <Droplets className="w-6 h-6" />,
      color: "from-blue-500 to-blue-700",
      bgImage:
        "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=400&q=80",
    },
  ];

  const menuItems = {
    stews: [
      {
        name: "Vegetarian",
        price: 5,
        description: "Garden-fresh vegetable stew",
        image: "/14.jpg",
        ingredients: ["Mixed vegetables", "Tomatoes", "Onions", "Local spices"],
      },
      {
        name: "Goat Stew",
        price: 10,
        description: "Tender goat meat in rich sauce",
        image: "/23.jpg",
        ingredients: ["Goat meat", "Tomatoes", "Onions", "Traditional herbs"],
      },
      {
        name: "Liver and Kidney",
        price: 10,
        description: "Traditional offal preparation",
        image: "/77.jpg",
        ingredients: ["Liver", "Kidney", "Onions", "Peppers"],
      },
      {
        name: "Beef Bones",
        price: 12,
        description: "Hearty bone-in beef stew",
        image: "/2.jpg",
        ingredients: ["Beef bones", "Vegetables", "Rich broth"],
      },
      {
        name: "Pork Bones",
        price: 12,
        description: "Succulent pork in savory broth",
        image: "/2.jpg",
        ingredients: ["Pork bones", "Tomatoes", "Herbs", "Spices"],
      },
      {
        name: "Hanga",
        price: 15,
        description: "Premium traditional stew",
        image: "/28.jpg",
        ingredients: [
          "Premium cuts",
          "Traditional preparation",
          "Secret spices",
        ],
      },
      {
        name: "Maguru",
        price: 10,
        description: "Cow feet delicacy",
        image: "/17.jpg",
        ingredients: ["Cow feet", "Vegetables", "Rich gravy"],
      },
      {
        name: "Beef Stew",
        price: 10,
        description: "Classic beef preparation",
        image: "/36.jpg",
        ingredients: ["Premium beef", "Vegetables", "Traditional sauce"],
      },
      {
        name: "Oxtail",
        price: 20,
        description: "Slow-cooked oxtail perfection",
        image: "/1.jpg",
        ingredients: ["Oxtail", "Rich gravy", "Slow-cooked to perfection"],
      },
      {
        name: "Road Runner",
        price: 10,
        description: "Traditional chicken stew",
        image: "/15.jpg",
        ingredients: ["Free-range chicken", "Vegetables", "Local herbs"],
      },
    ],
    grills: [
      {
        name: "Pork Chop",
        price: 18,
        description: "Juicy grilled pork chop",
        image:
          "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
        ingredients: [
          "Premium pork chop",
          "Special marinade",
          "Grilled to order",
        ],
      },
      {
        name: "Pork Ribs",
        price: 25,
        description: "Fall-off-the-bone ribs",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
        ingredients: ["Full rack ribs", "BBQ glaze", "House seasoning"],
      },
      {
        name: "Boerewors",
        price: 10,
        description: "South African-style sausage",
        image:
          "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80",
        ingredients: ["Traditional sausage", "Grilled perfectly"],
      },
      {
        name: "Half Chicken",
        price: 12,
        description: "Perfectly grilled half chicken",
        image:
          "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80",
        ingredients: ["Half chicken", "Peri-peri marinade", "Charcoal grilled"],
      },
      {
        name: "T-Bone",
        price: 18,
        description: "Premium T-bone steak",
        image:
          "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=800&q=80",
        ingredients: [
          "Premium T-bone",
          "Grilled to preference",
          "House seasoning",
        ],
      },
      {
        name: "Quarter Chicken",
        price: 8,
        description: "Grilled chicken quarter",
        image:
          "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80",
        ingredients: ["Chicken quarter", "Signature marinade", "Flame-grilled"],
      },
      {
        name: "Whole Kariba Bream",
        price: 15,
        description: "Fresh fish from Lake Kariba",
        image:
          "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80",
        ingredients: ["Whole bream", "Lemon & herbs", "Grilled fresh"],
      },
    ],
    combos: [
      {
        name: "Mutongi Gava",
        price: 25,
        description: "Our signature combo platter",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
        ingredients: ["Sadza", "Mixed meats", "Vegetables", "Signature sauce"],
      },
      {
        name: "Muyera Shumba",
        price: 30,
        description: "The hunter's feast",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80",
        ingredients: ["Premium selection", "Multiple proteins", "Full spread"],
      },
      {
        name: "Machikichori",
        price: 18,
        description: "Perfect family combo",
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
        ingredients: ["Family portions", "Variety of sides", "Complete meal"],
      },
      {
        name: "Staple Diet",
        price: 18,
        description: "Traditional complete meal",
        image:
          "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
        ingredients: ["Sadza", "Meat", "Vegetables", "Traditional sides"],
      },
      {
        name: "Chefs Choice",
        price: 15,
        description: "Today's special selection",
        image:
          "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
        ingredients: [
          "Chef's selection",
          "Daily special",
          "Seasonal ingredients",
        ],
      },
      {
        name: "Hodzeko",
        price: 4,
        description: "Side combo",
        image:
          "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
        ingredients: ["Assorted sides", "Perfect addition"],
      },
    ],
    starches: [
      {
        name: "Rice Dovi",
        price: 2,
        description: "Rice with peanut butter sauce",
        image:
          "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80",
        ingredients: ["Rice", "Peanut butter sauce", "Traditional preparation"],
      },
      {
        name: "Mhunga",
        price: 2,
        description: "Finger millet porridge",
        image:
          "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80",
        ingredients: ["Finger millet", "Traditional recipe"],
      },
      {
        name: "Mapfunde",
        price: 2,
        description: "Bambara nuts",
        image:
          "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=800&q=80",
        ingredients: ["Bambara nuts", "Perfectly prepared"],
      },
      {
        name: "White Sadza",
        price: 2,
        description: "Traditional maize meal",
        popular: true,
        image:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
        ingredients: ["Fine maize meal", "Traditionally cooked"],
      },
      {
        name: "Zviyo",
        price: 2,
        description: "Sorghum meal",
        image:
          "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80",
        ingredients: ["Sorghum", "Traditional method"],
      },
      {
        name: "Chips",
        price: 3,
        description: "Hand-cut fries",
        image:
          "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80",
        ingredients: ["Fresh potatoes", "Hand-cut", "Crispy golden"],
      },
    ],
    salads: [
      {
        name: "Green Salad",
        price: 6,
        description: "Fresh garden greens",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        ingredients: ["Mixed greens", "Fresh vegetables", "House dressing"],
      },
      {
        name: "Chicken Salad",
        price: 10,
        description: "Grilled chicken with greens",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
        ingredients: ["Grilled chicken", "Mixed greens", "Special dressing"],
      },
    ],
    drinks: [
      {
        name: "Juices",
        price: 2,
        description: "Fresh fruit juices",
        image:
          "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&q=80",
        ingredients: ["Fresh fruits", "No added sugar"],
      },
      {
        name: "Minute Maid",
        price: 2,
        description: "Bottled juice",
        image:
          "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&q=80",
        ingredients: ["Minute Maid brand", "Various flavors"],
      },
      {
        name: "Soft Drinks",
        price: 2,
        description: "Various sodas",
        image:
          "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=800&q=80",
        ingredients: ["Coca-Cola", "Fanta", "Sprite", "Other sodas"],
      },
      {
        name: "Water x 2",
        price: 1,
        description: "Bottled water (2 bottles)",
        image:
          "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
        ingredients: ["Purified water", "2 bottles"],
      },
      {
        name: "Beer",
        price: 2,
        description: "Local and imported",
        image:
          "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80",
        ingredients: ["Various brands", "Local & imported"],
      },
      {
        name: "Wines",
        price: 15,
        description: "Selection of wines",
        image:
          "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
        ingredients: ["Red & white wines", "Premium selection"],
      },
    ],
  };

  const handleOrderNow = (item) => {
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
    <div className="min-h-screen pt-20">
      {/* Hero Section with Single Clear Food Image */}
      <section className="relative py-20 overflow-hidden">
        {/* Single Hero Food Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80"
            alt="Gava's Restaurant Food"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/70 via-[#df2531]/65 to-[#8B0000]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-sm text-sm font-semibold">
              DAILY: 11:30 AM - 10:00 PM
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our Menu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Traditional Zimbabwean flavors crafted with locally-sourced
            ingredients
          </motion.p>
        </div>
      </section>

      {/* Category Navigation with Background Images */}
      <section className="sticky top-20 z-40 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Fade indicators for scroll 
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            */}
            {/* Scrollable container */}
            <div className="flex overflow-x-auto gap-3 py-4 px-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative flex items-center space-x-2 px-6 py-3 rounded-sm font-semibold whitespace-nowrap transition-all overflow-hidden flex-shrink-0 ${
                    activeCategory === category.id
                      ? "scale-105 shadow-xl"
                      : "hover:scale-105 shadow-md"
                  }`}
                >
                  {/* Background Image - with proper coverage */}
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-sm"
                    style={{ backgroundImage: `url(${category.bgImage})` }}
                  />
                  {/* Colored Overlay - with proper coverage */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      category.color
                    } rounded-sm ${
                      activeCategory === category.id
                        ? "opacity-90"
                        : "opacity-70"
                    }`}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex items-center space-x-2 text-white">
                    {category.icon}
                    <span>{category.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items with Food Images */}
      <section className="py-16 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-[#8B0000] mb-2 capitalize">
                  {categories.find((c) => c.id === activeCategory)?.name}
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-[#df2531] to-yellow-400 rounded-sm"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems[activeCategory].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="relative group cursor-pointer"
                  >
                    {item.featured && (
                      <div className="absolute -top-3 -right-3 z-10">
                        <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-sm text-xs font-bold shadow-lg">
                          SIGNATURE
                        </div>
                      </div>
                    )}
                    {item.popular && (
                      <div className="absolute -top-3 -right-3 z-10">
                        <div className="bg-gradient-to-br from-green-400 to-green-600 text-white px-3 py-1 rounded-sm text-xs font-bold shadow-lg">
                          POPULAR
                        </div>
                      </div>
                    )}

                    <div className="relative bg-white rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all h-[420px] ">
                      {/* Full Background Food Image */}
                      <div className="absolute inset-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>

                      {/* Content Container */}
                      <div className="relative h-full flex flex-col justify-between p-6">
                        {/* Top Section - Price Badge with Local Opacity */}
                        <div className="flex justify-end">
                          <div className="relative">
                            <div className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-sm -z-10 transform scale-110" />
                            <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-sm shadow-lg">
                              <span className="text-2xl font-bold text-[#df2531]">
                                ${item.price}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Section - Item Details with Localized Opacity */}
                        <div className="relative">
                          {/* Localized dark overlay behind text */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent -z-10 rounded-sm transform scale-110 -translate-y-4" />

                          <div className="space-y-3">
                            {/* Item Name */}
                            <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                              {item.name}
                            </h3>

                            {/* Rating */}
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <MdStarPurple500
                                  key={i}
                                  className="text-yellow-400"
                                />
                              ))}
                            </div>

                            {/* Description */}
                            <p className="text-white/90 text-sm drop-shadow line-clamp-2">
                              {item.description}
                            </p>

                            {/* Order Button */}
                            <button
                              onClick={() => handleOrderNow(item)}
                              className="w-full bg-gradient-to-r from-[#8B0000] to-[#df2531] text-white px-6 py-3 rounded-sm font-bold hover:from-[#df2531] hover:to-[#8B0000] transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl"
                            >
                              <ShoppingCart className="w-5 h-5" />
                              <span>Order Now</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Order Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
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

      {/* Note Section */}
      <section className="py-12 bg-gradient-to-r from-[#8B0000] to-[#df2531] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Fresh • Local • Authentic
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              All our ingredients are sourced from local, independent farmers to
              ensure the highest quality and freshness. Our traditional stews
              are prepared by expert chefs who have perfected their craft over
              generations.
            </p>
            <a
              href="tel:+263772381863"
              className="inline-block bg-white text-[#8B0000] px-8 py-3 rounded-sm font-bold hover:bg-yellow-300 transition-all transform hover:scale-105"
            >
              Call to Order: +263 772381863
            </a>
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

export default Menu;
