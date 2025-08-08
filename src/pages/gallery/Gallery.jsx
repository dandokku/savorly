import React, { useState } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const galleryImages = [
  {
    src: "/gallery/food1.jpg",
    alt: "Dish 1",
    category: "food",
  },
  {
    src: "/gallery/interior1.jpg",
    alt: "Interior 1",
    category: "interior",
  },
  {
    src: "/gallery/bar1.jpg",
    alt: "Bar 1",
    category: "bar",
  },
  {
    src: "/gallery/event1.jpg",
    alt: "Event 1",
    category: "events",
  },
  {
    src: "/team/elena.jpg",
    alt: "Chef Elena",
    category: "team",
  },
  {
    src: "/team/marcus.jpg",
    alt: "Marcus Chen",
    category: "team",
  },
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
