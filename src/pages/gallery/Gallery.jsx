import React, { useState } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const galleryImages = [
  { src: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D", alt: "Dish 1", category: "food" },
  { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D", alt: "Dish 2", category: "food" },
  { src: "https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D", alt: "Dish 3", category: "food" },
  { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D", alt: "Dish 4", category: "food" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D", alt: "Dish 5", category: "food" },

  { src: "https://plus.unsplash.com/premium_photo-1727456097966-6fd708f14ab9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3R1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fHww", alt: "Interior 1", category: "interior" },
  { src: "https://images.unsplash.com/photo-1652189740120-2f9ad284423d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3R1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fHww", alt: "Interior 2", category: "interior" },
  { src: "https://images.unsplash.com/photo-1653259035321-0483c4e44c7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdHVyYW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D", alt: "Interior 3", category: "interior" },

  { src: "https://images.unsplash.com/photo-1723744908732-b1893a47837c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHJlc3R1cmFudCUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D", alt: "Bar 1", category: "bar" },
  { src: "https://images.unsplash.com/photo-1659626672998-675dfa45c5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJlc3R1cmFudCUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D", alt: "Bar 2", category: "bar" },
  { src: "https://images.unsplash.com/photo-1651980909099-ddb028d72855?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdHVyYW50JTIwYmFyfGVufDB8fDB8fHww", alt: "Bar 3", category: "bar" },

  { src: "https://plus.unsplash.com/premium_photo-1723629880162-1deb1dc9e3f7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHJlc3R1cmFudCUyMGV2ZW50fGVufDB8fDB8fHww", alt: "Event 1", category: "events" },
  { src: "https://images.unsplash.com/photo-1705544363579-2116d47ddceb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3R1cmFudCUyMGV2ZW50fGVufDB8fDB8fHww", alt: "Event 2", category: "events" },
  { src: "https://plus.unsplash.com/premium_photo-1722859426539-5e6ed8e9a2f9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdHVyYW50JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D", alt: "Event 3", category: "events" },

  { src: "https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hlZnxlbnwwfHwwfHx8MA%3D%3D", alt: "Elena", category: "team" },
  { src: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hlZnxlbnwwfHwwfHx8MA%3D%3D", alt: "Marcus", category: "team" },
  { src: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fENoZWZ8ZW58MHx8MHx8fDA%3D", alt: "Amina", category: "team" },
  { src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hlZnxlbnwwfHwwfHx8MA%3D%3D", alt: "Luca", category: "team" },

  { src: "https://plus.unsplash.com/premium_photo-1661609668242-39abc38f186c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdHVyYW50JTIwY3VzdG9tZXJzfGVufDB8fDB8fHww", alt: "Happy customers dining", category: "customers" },
  { src: "https://images.unsplash.com/photo-1616538994032-f7619b8bebb5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdHVyYW50JTIwY3VzdG9tZXJzfGVufDB8fDB8fHww", alt: "Group enjoying meal", category: "customers" },
];


function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-amber-600">
          Gallery
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["All", "Food", "Interior", "Bar", "Events", "Team"].map((category) => {
            const key = category.toLowerCase();
            return (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === key
                    ? "bg-amber-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {filteredImages.map((image, index) => (
            <a
              key={index}
              href={image.src}
              className="block overflow-hidden rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover"
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </section>
  );
}

export default Gallery;
