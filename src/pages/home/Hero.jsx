import React from "react";
import { Link } from "react-router-dom";
import { FiArrowDown } from "react-icons/fi"; 

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-[11] w-full h-full object-cover"
      >
        <source src='/bgvid.mp4' type="video/mp4" />
      </video>

      {/* Dark overlay for better text contrast */}
      <div className="absolute z-10 inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 animate-fadeIn">
          Where Flavour Meets Art
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto animate-fadeIn delay-100">
          Farm-to-table dining experience in the heart of <span className="font-semibold">Abuja</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn delay-200">
          <Link
            to="/reservations"
            className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-md font-medium transition-colors duration-300 shadow-lg"
          >
            Book a Table
          </Link>
          <Link
            to="/menu"
            className="bg-transparent hover:bg-white hover:text-amber-600 hover:bg-opacity-10 px-6 py-3 border-2 border-white rounded-md font-medium transition-colors duration-300"
          >
            Explore Menu
          </Link>
        </div>

        {/* Scroll indicator (optional) */}
        <div className="mt-16 animate-bounce">
          <FiArrowDown className="mx-auto h-6 w-6" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;