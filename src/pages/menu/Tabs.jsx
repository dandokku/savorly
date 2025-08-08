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
      {
    id: 5,
    name: "Burrata Caprese",
    category: "starters",
    price: "$16",
    description: "Creamy burrata with heirloom tomatoes and balsamic glaze",
    dietary: ["vegetarian", "gf"],
    image: "https://plus.unsplash.com/premium_photo-1693077054280-f76e22eb8f5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnVycmF0YSUyMENhcHJlc2V8ZW58MHx8MHx8fDA%3D",
    popular: true
  },
  {
    id: 6,
    name: "Duck Confit Tacos",
    category: "mains",
    price: "$26",
    description: "Slow-cooked duck, pickled onions, cilantro crema",
    dietary: [],
    image: "https://plus.unsplash.com/premium_photo-1695582868702-5b0f91584d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RHVjayUyMENvbmZpdCUyMFRhY29zfGVufDB8fDB8fHww"
  },
  {
    id: 7,
    name: "Miso Glazed Eggplant",
    category: "mains",
    price: "$20",
    description: "Japanese-style eggplant with sesame seeds",
    dietary: ["vegan"],
    image: "https://images.unsplash.com/photo-1540961845746-c5c2964bb9d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWlzbyUyMEdsYXplZCUyMEVnZ3BsYW50JTIwZGlzaHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 8,
    name: "Lobster Ravioli",
    category: "mains",
    price: "$34",
    description: "Homemade pasta filled with lobster and mascarpone",
    dietary: [],
    image: "https://plus.unsplash.com/premium_photo-1664206964048-26b7a0ebf093?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TG9ic3RlciUyMFJhdmlvbGl8ZW58MHx8MHx8fDA%3D",
    popular: true
  },
  {
    id: 9,
    name: "Charred Broccolini",
    category: "sides",
    price: "$9",
    description: "Lemon, garlic, chili flakes",
    dietary: ["vegan", "gf"],
    image: "https://images.unsplash.com/photo-1550409174-a8ea3586299c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENoYXJyZWQlMjBCcm9jY29saW5pfGVufDB8fDB8fHww"
  },
  {
    id: 10,
    name: "Beef Tartare",
    category: "starters",
    price: "$18",
    description: "Hand-cut tenderloin, capers, cured yolk",
    dietary: [],
    image: "https://images.unsplash.com/photo-1445979323117-80453f573b71?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fEJlZWYlMjBUYXJ0YXJlfGVufDB8fDB8fHww"
  },
  {
    id: 11,
    name: "Smoked Mushroom Risotto",
    category: "mains",
    price: "$24",
    description: "Porcini, shiitake, and smoked gouda",
    dietary: ["vegetarian", "gf"],
    image: "https://plus.unsplash.com/premium_photo-1693011116424-d0d78afb0498?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fFNtb2tlZCUyME11c2hyb29tJTIwUmlzb3R0b3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 12,
    name: "Vanilla Bean Panna Cotta",
    category: "desserts",
    price: "$11",
    description: "Silky smooth, topped with berry compote",
    dietary: ["gf"],
    image: "https://images.unsplash.com/photo-1637783226061-6d3e55c26cdc?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fCUyMlZhbmlsbGElMjBCZWFuJTIwUGFubmElMjBDb3R0YSUyMnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 13,
    name: "Espresso Martini",
    category: "drinks",
    price: "$15",
    description: "Vodka, espresso, coffee liqueur",
    dietary: [],
    image: "https://images.unsplash.com/photo-1608546912771-87acdbfc11f4?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 14,
    name: "Spicy Tuna Tartare",
    category: "starters",
    price: "$17",
    description: "Ahi tuna, avocado, sesame crackers",
    dietary: [],
    image: "https://images.unsplash.com/photo-1616587894096-f0f45cb1e6d2?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 15,
    name: "Zucchini Fritters",
    category: "starters",
    price: "$12",
    description: "Served with mint yogurt dip",
    dietary: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1586190442349-1c0fa2e77f05?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 16,
    name: "Grilled Lamb Chops",
    category: "mains",
    price: "$32",
    description: "Rosemary and garlic marinade",
    dietary: ["gf"],
    image: "https://images.unsplash.com/photo-1598514982846-f2a7f9ebf019?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 17,
    name: "Avocado Toast",
    category: "starters",
    price: "$10",
    description: "Sourdough, chili flakes, lemon zest",
    dietary: ["vegan"],
    image: "https://images.unsplash.com/photo-1617196034208-f8b9fa9c5a51?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 18,
    name: "Coconut Mojito",
    category: "drinks",
    price: "$13",
    description: "Rum, mint, lime, coconut milk",
    dietary: ["vegan", "gf"],
    image: "https://images.unsplash.com/photo-1632501600634-0e781f1c505d?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 19,
    name: "Pistachio Baklava",
    category: "desserts",
    price: "$10",
    description: "Flaky phyllo layers with pistachio and honey",
    dietary: [],
    image: "https://images.unsplash.com/photo-1627471488746-e331fcb9d6cf?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 20,
    name: "Grilled Asparagus",
    category: "sides",
    price: "$8",
    description: "Charred with lemon butter",
    dietary: ["vegetarian", "gf"],
    image: "https://images.unsplash.com/photo-1607974089931-2d1b3c1c6e55?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 21,
    name: "Seared Scallops",
    category: "mains",
    price: "$30",
    description: "Served with corn puree and microgreens",
    dietary: ["gf"],
    image: "https://images.unsplash.com/photo-1633261259776-60ed9e726c30?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 22,
    name: "Thai Basil Chicken",
    category: "mains",
    price: "$22",
    description: "Spicy stir-fried chicken with jasmine rice",
    dietary: [],
    image: "https://images.unsplash.com/photo-1603281425238-5f161cc80b18?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 23,
    name: "Lemongrass Iced Tea",
    category: "drinks",
    price: "$6",
    description: "Refreshing herbal blend with a citrus kick",
    dietary: ["vegan", "gf"],
    image: "https://images.unsplash.com/photo-1590080875965-cfe200fba9a4?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 24,
    name: "Crème Brûlée",
    category: "desserts",
    price: "$11",
    description: "Classic custard with a caramelized sugar top",
    dietary: ["gf"],
    image: "https://images.unsplash.com/photo-1603133872878-684f149b50db?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 25,
    name: "Stuffed Bell Peppers",
    category: "mains",
    price: "$21",
    description: "Quinoa, lentils, tomato glaze",
    dietary: ["vegan", "gf"],
    image: "https://images.unsplash.com/photo-1613145998226-0dabead2e9ee?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 26,
    name: "Ricotta Pancakes",
    category: "desserts",
    price: "$14",
    description: "Served with maple syrup and berry compote",
    dietary: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1554109489-46f7a2c871e0?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 27,
    name: "Crispy Brussels Sprouts",
    category: "sides",
    price: "$9",
    description: "Balsamic glaze and parmesan",
    dietary: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1570183547270-6233f1f0a7da?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 28,
    name: "Charcuterie Board",
    category: "starters",
    price: "$25",
    description: "Cured meats, cheeses, nuts, and fruits",
    dietary: [],
    image: "https://images.unsplash.com/photo-1604908177087-b3b50ef62ef2?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 29,
    name: "Rosemary Lemonade",
    category: "drinks",
    price: "$7",
    description: "House-made lemonade infused with rosemary",
    dietary: ["vegan", "gf"],
    image: "https://images.unsplash.com/photo-1630494244010-535d2ff5f924?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 30,
    name: "Vegan Cheesecake",
    category: "desserts",
    price: "$13",
    description: "Cashew-based with berry swirl",
    dietary: ["vegan"],
    image: "https://images.unsplash.com/photo-1605470427795-21c4b5fddfaa?w=500&auto=format&fit=crop&q=60"
  }
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