import React, { useState } from "react";
import { FiFilter, FiClock, FiZap, FiFeather } from "react-icons/fi";

import Animated from "../../components/Animated"
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
      image:
        "https://images.unsplash.com/photo-1574545190776-9693cc4affc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFRydWZmbGUlMjBBcmFuY2luaXxlbnwwfHwwfHx8MA%3D%3D",
      popular: true,
    },
    {
      id: 2,
      name: "Herb-Crusted Salmon",
      category: "mains",
      price: "$28",
      description: "Wild-caught with lemon beurre blanc",
      dietary: ["gf"],
      image:
        "https://plus.unsplash.com/premium_photo-1714242631274-877e28e62bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGVyYiUyMENydXN0ZWQlMjBTYWxtb258ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      name: "Chocolate Fondant",
      category: "desserts",
      price: "$12",
      description: "Warm molten center with vanilla ice cream",
      dietary: ["vegetarian"],
      image:
        "https://images.unsplash.com/photo-1617305855058-336d24456869?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hvY29sYXRlJTIwRm9uZGFudHxlbnwwfHwwfHx8MA%3D%3D",
      popular: true,
    },
    {
      id: 4,
      name: "Seasonal Spritz",
      category: "drinks",
      price: "$13",
      description: "Aperol, prosecco, and seasonal fruit",
      dietary: ["vegan", "gf"],
      image:
        "https://images.unsplash.com/photo-1672206063436-e813a6e19046?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFNlYXNvbmFsJTIwU3ByaXR6fGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "Burrata Caprese",
      category: "starters",
      price: "$16",
      description: "Creamy burrata with heirloom tomatoes and balsamic glaze",
      dietary: ["vegetarian", "gf"],
      image:
        "https://plus.unsplash.com/premium_photo-1693077054280-f76e22eb8f5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnVycmF0YSUyMENhcHJlc2V8ZW58MHx8MHx8fDA%3D",
      popular: true,
    },
    {
      id: 6,
      name: "Duck Confit Tacos",
      category: "mains",
      price: "$26",
      description: "Slow-cooked duck, pickled onions, cilantro crema",
      dietary: [],
      image:
        "https://plus.unsplash.com/premium_photo-1695582868702-5b0f91584d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RHVjayUyMENvbmZpdCUyMFRhY29zfGVufDB8fDB8fHww",
    },
    {
      id: 7,
      name: "Miso Glazed Eggplant",
      category: "mains",
      price: "$20",
      description: "Japanese-style eggplant with sesame seeds",
      dietary: ["vegan"],
      image:
        "https://images.unsplash.com/photo-1540961845746-c5c2964bb9d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWlzbyUyMEdsYXplZCUyMEVnZ3BsYW50JTIwZGlzaHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 8,
      name: "Lobster Ravioli",
      category: "mains",
      price: "$34",
      description: "Homemade pasta filled with lobster and mascarpone",
      dietary: [],
      image:
        "https://plus.unsplash.com/premium_photo-1664206964048-26b7a0ebf093?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TG9ic3RlciUyMFJhdmlvbGl8ZW58MHx8MHx8fDA%3D",
      popular: true,
    },
    {
      id: 9,
      name: "Charred Broccolini",
      category: "sides",
      price: "$9",
      description: "Lemon, garlic, chili flakes",
      dietary: ["vegan", "gf"],
      image:
        "https://images.unsplash.com/photo-1550409174-a8ea3586299c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENoYXJyZWQlMjBCcm9jY29saW5pfGVufDB8fDB8fHww",
    },
    {
      id: 10,
      name: "Beef Tartare",
      category: "starters",
      price: "$18",
      description: "Hand-cut tenderloin, capers, cured yolk",
      dietary: [],
      image:
        "https://images.unsplash.com/photo-1445979323117-80453f573b71?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fEJlZWYlMjBUYXJ0YXJlfGVufDB8fDB8fHww",
    },
    {
      id: 11,
      name: "Smoked Mushroom Risotto",
      category: "mains",
      price: "$24",
      description: "Porcini, shiitake, and smoked gouda",
      dietary: ["vegetarian", "gf"],
      image:
        "https://plus.unsplash.com/premium_photo-1693011116424-d0d78afb0498?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fFNtb2tlZCUyME11c2hyb29tJTIwUmlzb3R0b3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 12,
      name: "Vanilla Bean Panna Cotta",
      category: "desserts",
      price: "$11",
      description: "Silky smooth, topped with berry compote",
      dietary: ["gf"],
      image:
        "https://images.unsplash.com/photo-1637783226061-6d3e55c26cdc?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fCUyMlZhbmlsbGElMjBCZWFuJTIwUGFubmElMjBDb3R0YSUyMnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 13,
      name: "Espresso Martini",
      category: "drinks",
      price: "$15",
      description: "Vodka, espresso, coffee liqueur",
      dietary: [],
      image:
        "https://images.unsplash.com/photo-1607805043580-a37c1540c5dd?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEVzcHJlc3NvJTIwTWFydGluaXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 14,
      name: "Spicy Tuna Tartare",
      category: "starters",
      price: "$17",
      description: "Ahi tuna, avocado, sesame crackers",
      dietary: [],
      image:
        "https://plus.unsplash.com/premium_photo-1714242629051-b14e10a329c1?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3BpY3klMjBUdW5hJTIwVGFydGFyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 15,
      name: "Zucchini Fritters",
      category: "starters",
      price: "$12",
      description: "Served with mint yogurt dip",
      dietary: ["vegetarian"],
      image:
        "https://plus.unsplash.com/premium_photo-1711648508264-d56a5e253330?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8WnVjY2hpbmklMjBGcml0dGVyc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 16,
      name: "Grilled Lamb Chops",
      category: "mains",
      price: "$32",
      description: "Rosemary and garlic marinade",
      dietary: ["gf"],
      image:
        "https://images.unsplash.com/photo-1495749388945-9d6e4e5b67b1?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JpbGxlZCUyMExhbWIlMjBDaG9wc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 17,
      name: "Avocado Toast",
      category: "starters",
      price: "$10",
      description: "Sourdough, chili flakes, lemon zest",
      dietary: ["vegan"],
      image:
        "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXZvY2FkbyUyMFRvYXN0fGVufDB8fDB8fHww",
    },
    {
      id: 18,
      name: "Coconut Mojito",
      category: "drinks",
      price: "$13",
      description: "Rum, mint, lime, coconut milk",
      dietary: ["vegan", "gf"],
      image:
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29jb251dCUyME1vaml0b3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 19,
      name: "Pistachio Baklava",
      category: "desserts",
      price: "$10",
      description: "Flaky phyllo layers with pistachio and honey",
      dietary: [],
      image:
        "https://images.unsplash.com/photo-1617806501599-f21ee9e8b189?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGlzdGFjaGlvJTIwQmFrbGF2YXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 20,
      name: "Grilled Asparagus",
      category: "sides",
      price: "$8",
      description: "Charred with lemon butter",
      dietary: ["vegetarian", "gf"],
      image:
        "https://images.unsplash.com/photo-1653107509005-8a86a6f0c79c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R3JpbGxlZCUyMEFzcGFyYWd1c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 21,
      name: "Seared Scallops",
      category: "mains",
      price: "$30",
      description: "Served with corn puree and microgreens",
      dietary: ["gf"],
      image:
        "https://plus.unsplash.com/premium_photo-1689596509991-fd47c16f3e7a?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VhcmVkJTIwU2NhbGxvcHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 22,
      name: "Thai Basil Chicken",
      category: "mains",
      price: "$22",
      description: "Spicy stir-fried chicken with jasmine rice",
      dietary: [],
      image:
        "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGhhaSUyMEJhc2lsJTIwQ2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D0",
    },
    {
      id: 23,
      name: "Lemongrass Iced Tea",
      category: "drinks",
      price: "$6",
      description: "Refreshing herbal blend with a citrus kick",
      dietary: ["vegan", "gf"],
      image:
        "https://images.unsplash.com/photo-1547825407-2d060104b7f8?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVtb25ncmFzcyUyMEljZWQlMjBUZWF8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 24,
      name: "Crème Brûlée",
      category: "desserts",
      price: "$11",
      description: "Classic custard with a caramelized sugar top",
      dietary: ["gf"],
      image:
        "https://plus.unsplash.com/premium_photo-1713840471854-8bb5563fa694?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q3IlQzMlQThtZSUyMEJyJUMzJUJCbCVDMyVBOWV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 25,
      name: "Stuffed Bell Peppers",
      category: "mains",
      price: "$21",
      description: "Quinoa, lentils, tomato glaze",
      dietary: ["vegan", "gf"],
      image:
        "https://images.unsplash.com/photo-1673646960062-9aeb2188335f?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3R1ZmZlZCUyMEJlbGwlMjBQZXBwZXJzfGVufDB8fDB8fHww",
    },
    {
      id: 26,
      name: "Ricotta Pancakes",
      category: "desserts",
      price: "$14",
      description: "Served with maple syrup and berry compote",
      dietary: ["vegetarian"],
      image:
        "https://images.unsplash.com/photo-1624695173621-51a04a3a2e8f?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Umljb3R0YSUyMFBhbmNha2VzfGVufDB8fDB8fHww",
    },
    {
      id: 27,
      name: "Crispy Brussels Sprouts",
      category: "sides",
      price: "$9",
      description: "Balsamic glaze and parmesan",
      dietary: ["vegetarian"],
      image:
        "https://plus.unsplash.com/premium_photo-1714303743572-76c3ef6f9dd2?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxDcmlzcHklMjBCcnVzc2VscyUyMFNwcm91dHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 28,
      name: "Charcuterie Board",
      category: "starters",
      price: "$25",
      description: "Cured meats, cheeses, nuts, and fruits",
      dietary: [],
      image:
        "https://images.unsplash.com/photo-1678572823447-45fc146df43c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hhcmN1dGVyaWUlMjBCb2FyZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 29,
      name: "Rosemary Lemonade",
      category: "drinks",
      price: "$7",
      description: "House-made lemonade infused with rosemary",
      dietary: ["vegan", "gf"],
      image:
        "https://plus.unsplash.com/premium_photo-1661539091438-35cd95011635?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Um9zZW1hcnklMjBMZW1vbmFkZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 30,
      name: "Vegan Cheesecake",
      category: "desserts",
      price: "$13",
      description: "Cashew-based with berry swirl",
      dietary: ["vegan"],
      image:
        "https://images.unsplash.com/photo-1642588381432-1390e6c2b762?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmVnYW4lMjBDaGVlc2VjYWtlfGVufDB8fDB8fHww",
    },
  ];

  // State for filters
  const [activeCategory, setActiveCategory] = useState("all");
  const [dietaryFilter, setDietaryFilter] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Dietary options
  const dietaryOptions = [
    { id: "vegetarian", label: "Vegetarian", icon: <FiFeather /> },
    { id: "vegan", label: "Vegan", icon: <FiFeather /> },
    { id: "gf", label: "Gluten-Free", icon: <FiZap /> },
  ];

  // Filter logic
  const filteredItems = menuItems.filter((item) => {
    const categoryMatch =
      activeCategory === "all" || item.category === activeCategory;
    const dietaryMatch =
      dietaryFilter.length === 0 ||
      dietaryFilter.some((df) => item.dietary.includes(df));
    return categoryMatch && dietaryMatch;
  });

  const toggleDietaryFilter = (filter) => {
    setDietaryFilter((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">
            Our Menu
          </h1>
          <p className="text-gray-600">
            Seasonal ingredients, crafted with passion
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          {/* Category Tabs */}
          <Animated animation="fadeInUp">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {["all", "starters", "mains", "desserts", "drinks"].map(
                (category) => (
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
                )
              )}
            </div>
          </Animated>

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
                  {dietaryOptions.map((option) => (
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
            {dietaryOptions.map((option) => (
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
            {filteredItems.map((item) => (
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
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-amber-600 font-medium">{item.price}</p>
                  </div>
                  <p className="text-gray-600 mt-1">{item.description}</p>

                  {/* Dietary Tags */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.dietary?.map((diet) => (
                      <span
                        key={diet}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {dietaryOptions.find((o) => o.id === diet)?.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No items match your filters. Try adjusting your selection.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Tabs;
