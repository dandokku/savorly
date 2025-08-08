import React from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiFacebook, FiTwitter, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

function Footer() {
  const footerLinks = [
    { path: "/", name: "Home" },
    { path: "/menu", name: "Menu" },
    { path: "/reservations", name: "Reservations" },
    { path: "/gallery", name: "Gallery" },
    { path: "/about", name: "About Us" },
    { path: "/contact", name: "Contact" },
  ];

  const socialLinks = [
    { icon: <FiInstagram />, url: "https://instagram.com" },
    { icon: <FiFacebook />, url: "https://facebook.com" },
    { icon: <FiTwitter />, url: "https://twitter.com" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo + Social */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-serif font-bold text-amber-800">
              Savorly
            </Link>
            <p className="text-gray-600">
              Fresh ingredients, unforgettable flavors.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-amber-600 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-amber-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-2 text-gray-500" />
                <span className="text-gray-600">123 Culinary Ave, Foodie City</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2 text-gray-500" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-amber-600">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2 text-gray-500" />
                <a href="mailto:hello@Savorly.com" className="text-gray-600 hover:text-amber-600">
                  hello@Savorly.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500 text-center">
          <p>
            © {new Date().getFullYear()} Savorly. All rights reserved. |{" "}
            <Link to="/privacy" className="hover:text-amber-600">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;