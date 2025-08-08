import React, { useState } from "react";
import { FiFilter, FiClock, FiZap, FiFeather } from "react-icons/fi";

function Tabs() {
  // Menu data
  const menuItems = [
    {
      id: 1,
      name: "Truffle Arancini",
      category: "starters",
      price: "$14",
      description: "Crispy risotto balls with black truffle aioli",
      dietary: ["vegetarian"],
      image: "https://images.unsplash.com/photo-1574545190776-9693cc4affc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFRydWZmbGUlMjBBcmFuY2luaXxlbnwwfHwwfHx8MA%3D%3D",
      popular: true
    },
    {
      id: 2,
      name: "Herb-Crusted Salmon",
      category: "mains",
      price: "$28",
      description: "Wild-caught with lemon beurre blanc",
      dietary: ["gf"],
      image: "https://plus.unsplash.com/premium_photo-1714242631274-877e28e62bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGVyYiUyMENydXN0ZWQlMjBTYWxtb258ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 3,
      name: "Chocolate Fondant",
      category: "desserts",
      price: "$12",
      description: "Warm molten center with vanilla ice cream",
      dietary: ["vegetarian"],
      image: "https://images.unsplash.com/photo-1617305855058-336d24456869?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hvY29sYXRlJTIwRm9uZGFudHxlbnwwfHwwfHx8MA%3D%3D",
      popular: true
    },
    {
      id: 4,
      name: "Seasonal Spritz",
      category: "drinks",
      price: "$13",
      description: "Aperol, prosecco, and seasonal fruit",
      dietary: ["vegan", "gf"],
      image: "https://images.unsplash.com/photo-1672206063436-e813a6e19046?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFNlYXNvbmFsJTIwU3ByaXR6fGVufDB8fDB8fHww"
    },
    // Add more items...
  ];

  // State for filters
  const [activeCategory, setActiveCategory] = useState("all");
  const [dietaryFilter, setDietaryFilter] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Dietary options
  const dietaryOptions = [
    { id: "vegetarian", label: "Vegetarian", icon: <FiFeather /> },
    { id: "vegan", label: "Vegan", icon: <FiFeather /> },
    { id: "gf", label: "Gluten-Free", icon: <FiZap /> }
  ];

  // Filter logic
  const filteredItems = menuItems.filter(item => {
    const categoryMatch = activeCategory === "all" || item.category === activeCategory;
    const dietaryMatch = dietaryFilter.length === 0 || 
                        dietaryFilter.some(df => item.dietary.includes(df));
    return categoryMatch && dietaryMatch;
  });

  const toggleDietaryFilter = (filter) => {
    setDietaryFilter(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter) 
        : [...prev, filter]
    );
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">Our Menu</h1>
          <p className="text-gray-600">Seasonal ingredients, crafted with passion</p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {["all", "starters", "mains", "desserts", "drinks"].map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full capitalize text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-amber-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Dietary Filters - Mobile */}
          <div className="md:hidden mb-4">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm font-medium text-gray-700"
            >
              <FiFilter /> Filter by dietary needs
            </button>
            {showFilters && (
              <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                <div className="grid grid-cols-2 gap-3">
                  {dietaryOptions.map(option => (
                    <button
                      key={option.id}
                      onClick={() => toggleDietaryFilter(option.id)}
                      className={`flex items-center gap-2 text-sm px-3 py-2 rounded-full ${
                        dietaryFilter.includes(option.id)
                          ? "bg-amber-100 text-amber-700"
                          : "bg-white text-gray-700"
                      }`}
                    >
                      {option.icon}
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Dietary Filters - Desktop */}
          <div className="hidden md:flex justify-center gap-3">
            {dietaryOptions.map(option => (
              <button
                key={option.id}
                onClick={() => toggleDietaryFilter(option.id)}
                className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full ${
                  dietaryFilter.includes(option.id)
                    ? "bg-amber-100 text-amber-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {option.icon}
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div 
                key={item.id} 
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 z-10">
                    <FiZap className="h-3 w-3" />
                    Popular
                  </div>
                )}

                {/* Dish Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Dish Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                    <p className="text-amber-600 font-medium">{item.price}</p>
                  </div>
                  <p className="text-gray-600 mt-1">{item.description}</p>

                  {/* Dietary Tags */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.dietary?.map(diet => (
                      <span 
                        key={diet} 
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {dietaryOptions.find(o => o.id === diet)?.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No items match your filters. Try adjusting your selection.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Tabs;