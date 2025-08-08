import React from "react";
import { FiAward, FiHeart, FiFeather, FiUsers } from "react-icons/fi";

function About() {
  const team = [
    {
      name: "Nneka Obi",
      role: " Head Chef & Founder",
      bio: "Over a decade of hospitality experience across Lagos and London",
      funFact: "Speaks four languages fluently",
      image: "https://images.unsplash.com/photo-1488905971602-47901d26961b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxDaGVmfGVufDB8fDB8fHww",
    },
    {
      name: "David Okoro",
      role: "Restaurant Manager",
      bio: "Creates Afrocentric cocktails with native herbs and spices",
      funFact: "Invented the best-selling ‘Zobo Royale’ cocktail",
      image: "https://images.unsplash.com/photo-1723083467031-b5dae65ba6c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fENoZWZ8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Chef Elena Rodriguez",
      role: "Sommelier",
      bio: "James Beard Award nominee, trained in Barcelona and Tokyo",
      funFact: "Collects vintage cookbooks",
      image:
        "https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hlZnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Marcus Chen",
      role: "Sous Chef",
      bio: "Specializes in farm-to-table Asian fusion",
      funFact: "Grows rare chili peppers",
      image:
        "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hlZnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Amina Yusuf",
      role: "Pastry Chef",
      bio: "Studied at Le Cordon Bleu, expert in French-African desserts",
      funFact: "Once baked a 7-tier wedding cake for a royal family",
      image:
        "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fENoZWZ8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Luca Moretti",
      role: "Mixologist ",
      bio: "Certified Level 3 Sommelier with a passion for local Nigerian wines",
      funFact: "Can identify wines blindfolded by scent alone",
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hlZnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const suppliers = [
    {
      name: "Green Valley Farms",
      relationship: "Since 2018",
      detail: "Organic vegetables delivered twice weekly",
    },
    {
      name: "Coastal Seafood Co.",
      relationship: "Since 2019",
      detail: "Sustainable day-boat catches",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a humble family kitchen to an award-winning dining experience
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-amber-100 transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12 md:space-y-0">
              {[
                {
                  year: "2015",
                  title: "The Beginning",
                  content:
                    "Founded as a weekend pop-up with just 4 tables in a local market",
                },
                {
                  year: "2017",
                  title: "First Location",
                  content:
                    "Opened our 20-seat bistro with a $10,000 Kickstarter campaign",
                },
                {
                  year: "2020",
                  title: "Pandemic Pivot",
                  content:
                    "Launched community meal program serving 5,000+ meals to frontline workers",
                },
                {
                  year: "2023",
                  title: "Present Day",
                  content:
                    "Recognized as 'Best New Restaurant' by City Magazine",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  } mb-12`}
                >
                  <div
                    className={`md:w-1/2 p-6 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:order-last"
                    }`}
                  >
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                  <div
                    className={`md:w-1/2 p-6 flex ${
                      index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                    } items-center`}
                  >
                    <div className="bg-amber-600 text-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-lg">
                      {item.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mb-20 bg-amber-50 rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Our Philosophy
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiFeather className="h-8 w-8 text-amber-600" />,
                title: "Sustainable Sourcing",
                content:
                  "We work with 12 local farms practicing regenerative agriculture",
              },
              {
                icon: <FiHeart className="h-8 w-8 text-amber-600" />,
                title: "Slow Food Ethos",
                content:
                  "Every dish celebrates traditional techniques with modern flair",
              },
              {
                icon: <FiUsers className="h-8 w-8 text-amber-600" />,
                title: "Community First",
                content:
                  "10% of profits fund culinary training for underserved youth",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Supplier Relationships */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-8">
            Our Partners
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {suppliers.map((supplier, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {supplier.name}
                </h3>
                <p className="text-amber-600 text-sm mb-2">
                  {supplier.relationship}
                </p>
                <p className="text-gray-600">{supplier.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Meet the Family
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-6">
                  <div className="text-white text-center">
                    <p className="font-medium mb-1">Fun Fact:</p>
                    <p>{member.funFact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chef Spotlight */}
        <div className="bg-gray-900 text-white rounded-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3">
              <img
                src="/team/elena-portrait.jpg"
                alt="Chef Elena Rodriguez"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-2/3 p-8 md:p-12">
              <div className="flex items-center mb-4">
                <FiAward className="h-6 w-6 text-amber-400 mr-2" />
                <span className="text-sm font-medium">HEAD CHEF SPOTLIGHT</span>
              </div>
              <h2 className="text-3xl font-serif font-bold mb-6">
                Elena Rodriguez
              </h2>
              <blockquote className="text-xl italic mb-8 border-l-4 border-amber-400 pl-6">
                "Cooking is storytelling on a plate - every ingredient has a
                journey worth honoring."
              </blockquote>
              <div className="prose prose-invert text-gray-300">
                <p>
                  After training under 3-Michelin-star chefs in Europe, Chef
                  Elena returned home to create Savorly as a love letter to
                  seasonal ingredients. Her signature dish, the "Market
                  Tasting", changes daily based on what local producers bring
                  that morning.
                </p>
                <p className="mt-4">
                  When not in the kitchen, she leads our culinary apprenticeship
                  program for at-risk youth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
