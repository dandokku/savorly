import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video (replace with your actual video or image) */}
      <div className="absolute inset-0 z-0">
        {/* Option 1: Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video fails */}
          <img
            src="/hero-fallback.jpg"
            alt="Savorly signature dish"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Option 2: Static image (uncomment if preferred) */}
        {/* <img
          src="/hero-image.jpg"
          alt="Savorly signature dish"
          className="w-full h-full object-cover"
        /> */}

        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
          Welcome to <span className="text-amber-300">Savorly</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-100 mb-8">
          Where every bite tells a story. Farm-to-table dining crafted with passion.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/reservations"
            className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg"
          >
            Reserve a Table
          </Link>
          <Link
            to="/menu"
            className="bg-white hover:bg-gray-100 text-amber-800 font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg"
          >
            Order Now
          </Link>
        </div>
      </div>

      {/* Scroll-down hint (optional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;