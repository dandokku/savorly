import React from "react";
import { FiClock, FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

function ContactPage() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Adjusted for mobile */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-600">We'd love to hear from you</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
          {/* Left Column - Info */}
          <div className="space-y-6 md:space-y-8 w-full">
            {/* Google Map Embed - Mobile height adjustment */}
            <div className="h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-sm">
              <iframe
                title="Savorly Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.21520917933!2d-73.98784492426672!3d40.74844097138935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1712345678901"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            
            {/* Directions Button - Full width on mobile */}
            <a
              href="https://maps.google.com?q=Savorly+Restaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors"
            >
              <FiMapPin className="mr-2" />
              Get Directions
            </a>

            {/* Contact Info - Stacked on mobile */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <FiClock className="h-5 w-5 md:h-6 md:w-6 text-amber-600 mt-0.5" />
                <div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-1 md:mb-2">Hours</h3>
                  <ul className="text-sm md:text-base text-gray-600 space-y-1">
                    <li>Tuesday - Thursday: 5PM - 10PM</li>
                    <li>Friday - Saturday: 5PM - 11PM</li>
                    <li>Sunday: 10AM - 3PM (Brunch)</li>
                    <li className="text-red-500">Closed on Mondays</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <FiPhone className="h-5 w-5 md:h-6 md:w-6 text-amber-600 mt-0.5" />
                <div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-1 md:mb-2">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-sm md:text-base text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <FiMail className="h-5 w-5 md:h-6 md:w-6 text-amber-600 mt-0.5" />
                <div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-1 md:mb-2">Email</h3>
                  <a
                    href="mailto:hello@savorly.com"
                    className="text-sm md:text-base text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    hello@savorly.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media - Centered on mobile */}
            <div className="text-center sm:text-left">
              <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2 md:mb-3">Follow Us</h3>
              <div className="flex justify-center sm:justify-start gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5 md:h-6 md:w-6" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok className="h-5 w-5 md:h-6 md:w-6" />
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full">
            <div className="bg-gray-50 rounded-xl p-5 md:p-8">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4 md:mb-6">Send a Message</h2>
              
              <form className="space-y-4 md:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 md:px-4 md:py-2 text-sm md:text-base border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 md:px-4 md:py-2 text-sm md:text-base border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                    Reason for Contact
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    className="w-full px-3 py-2 md:px-4 md:py-2 text-sm md:text-base border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="reservation">Reservation Question</option>
                    <option value="private">Private Event</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 md:px-4 md:py-2 text-sm md:text-base border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 md:py-3 px-4 rounded-md text-sm md:text-base font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <FiSend className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Newsletter Signup - Adjusted padding */}
            <div className="mt-6 md:mt-8 bg-amber-50 rounded-xl p-5 md:p-6 border border-amber-100">
              <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-2 md:mb-3">
                Get Our Specials & Updates First
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                Join our newsletter for exclusive offers and seasonal menus
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-md text-sm md:text-base font-medium transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;