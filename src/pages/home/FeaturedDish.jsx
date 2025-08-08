import React from "react";
import { FiStar, FiZap, FiLeaf, FiDroplet } from "react-icons/fi";

function FeaturedDishes() {
  const dishes = [
    {
      id: 1,
      name: "Truffle Pasta",
      description: "Handmade tagliatelle with black truffle cream",
      price: "$24",
      image: "/dishes/pasta.jpg",
      badges: ["vegetarian", "chef's pick"],
      ingredients: ["House-made pasta", "Black truffle", "Parmigiano-Reggiano"]
    },
    {
      id: 2,
      name: "Dry-Aged Ribeye",
      description: "28oz prime cut with bone marrow butter",
      price: "$42",
      image: "/dishes/steak.jpg",
      badges: ["signature", "gf"],
      ingredients: ["Dry-aged 28 days", "Local grass-fed beef", "Herb butter"]
    },
    {
      id: 3,
      name: "Seafood Tower",
      description: "Maine lobster, oysters, scallops & prawns",
      price: "$58",
      image: "/dishes/seafood.jpg",
      badges: ["seasonal", "gf"],
      ingredients: ["East Coast lobster", "Pacific oysters", "Dayboat scallops"]
    },
    {
      id: 4,
      name: "Wild Mushroom Risotto",
      description: "Carnaroli rice with foraged mushrooms",
      price: "$22",
      image: "/dishes/risotto.jpg",
      badges: ["vegetarian", "vegan option"],
      ingredients: ["3 mushroom varieties", "Vegetable stock", "White wine"]
    },
    {
      id: 5,
      name: "Chocolate Soufflé",
      description: "Warm with vanilla bean ice cream",
      price: "$14",
      image: "/dishes/souffle.jpg",
      badges: ["signature"],
      ingredients: ["Valrhona chocolate", "Farm eggs", "Tahitian vanilla"]
    },
    {
      id: 6,
      name: "Herb-Crusted Lamb",
      description: "Rack with mint gremolata",
      price: "$36",
      image: "/dishes/lamb.jpg",
      badges: ["gf"],
      ingredients: ["New Zealand lamb", "Fresh herbs", "Lemon zest"]
    }
  ];

  const badgeIcons = {
    "vegetarian": <FiLeaf className="h-4 w-4" />,
    "vegan option": <FiLeaf className="h-4 w-4" />,
    "signature": <FiStar className="h-4 w-4" />,
    "chef's pick": <FiZap className="h-4 w-4" />,
    "gf": <FiDroplet className="h-4 w-4" />,
    "seasonal": <FiDroplet className="h-4 w-4" />
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
            Signature Creations
          </h2>
          <p className="text-gray-600">
            Our most beloved dishes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish) => (
            <div 
              key={dish.id} 
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-80"
            >
              {/* Dish Image */}
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Badges */}
              <div className="absolute top-4 right-4 flex gap-2">
                {dish.badges.map((badge, index) => (
                  <span 
                    key={index}
                    className="flex items-center gap-1 bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-medium text-gray-800"
                  >
                    {badgeIcons[badge]}
                    {badge}
                  </span>
                ))}
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300 group-hover:translate-y-0 translate-y-8">
                <h3 className="text-xl font-bold">{dish.name}</h3>
                <p className="text-sm opacity-90">{dish.description}</p>
                <p className="text-amber-300 font-medium mt-1">{dish.price}</p>
              </div>

              {/* Hover Ingredients */}
              <div className="absolute inset-0 bg-black/80 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white font-medium mb-2">Key Ingredients:</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  {dish.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1 h-1 bg-amber-400 rounded-full mr-2"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
                <button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Add to order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDishes;