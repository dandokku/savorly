import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiClock, FiChevronLeft, FiChevronRight } from "react-icons/fi";

function DailySpecials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const specials = [
    {
      id: 1,
      name: "Truffle Risotto",
      description: "Creamy Arborio rice with wild mushrooms and black truffle",
      image: "/specials/risotto.jpg",
    },
    {
      id: 2,
      name: "Lobster Thermidor",
      description: "Fresh Maine lobster baked with brandy cream sauce",
      image: "/specials/lobster.jpg",
    },
    {
      id: 3,
      name: "Chocolate Soufflé",
      description: "Warm French-style soufflé with vanilla bean ice cream",
      image: "/specials/souffle.jpg",
    },
  ];

  // Countdown timer for "today only" offer
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const difference = endOfDay - now;
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === specials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? specials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
            Today's Specials
          </h2>
          <p className="text-gray-600">
            Available for a limited time only
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden relative h-96">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-xl shadow-lg p-6 w-full">
                  {/* Dish Image */}
                  <div className="md:w-1/2 h-64 md:h-full rounded-lg overflow-hidden">
                    <img
                      src={specials[currentIndex].image}
                      alt={specials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Dish Details */}
                  <div className="md:w-1/2 text-left space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {specials[currentIndex].name}
                    </h3>
                    <p className="text-gray-600">
                      {specials[currentIndex].description}
                    </p>

                    {/* Countdown Timer */}
                    <div className="flex items-center gap-2 text-amber-600">
                      <FiClock className="h-5 w-5" />
                      <span className="font-medium">
                        Available today only! Ends in:{" "}
                        {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                      </span>
                    </div>

                    {/* CTA Button */}
                    <button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300">
                      Reserve for Tonight
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-amber-100 transition-colors"
          >
            <FiChevronLeft className="h-6 w-6 text-amber-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-md hover:bg-amber-100 transition-colors"
          >
            <FiChevronRight className="h-6 w-6 text-amber-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default DailySpecials;