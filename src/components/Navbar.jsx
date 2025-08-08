import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => setIsOpen(false);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/menu", name: "Menu" },
    { path: "/reservations", name: "Reservations" },
    { path: "/gallery", name: "Gallery" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo (replace with your actual logo) */}
          <Link to="/" className="text-2xl font-serif font-bold text-amber-800">
            Savorly
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`px-1 py-2 text-sm font-medium transition-colors duration-200 ${
                      location.pathname === link.path
                        ? "text-amber-600 border-b-2 border-amber-500"
                        : "text-gray-700 hover:text-amber-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-600 focus:outline-none transition-all duration-300 ease-in-out"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (slides in) */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-95 backdrop-blur-sm">
          <ul className="px-2 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? "bg-amber-50 text-amber-700"
                      : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;