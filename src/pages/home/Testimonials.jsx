import React from "react";
import { FiStar, FiExternalLink } from "react-icons/fi";

function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sarah K.",
      avatar: "https://images.unsplash.com/photo-1616776005756-4dca36124bf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2FyYWh8ZW58MHx8MHx8fDA%3D",
      rating: 5,
      quote: "The truffle pasta haunts my dreams - worth every penny!",
      platform: "Google",
      link: "#"
    },
    {
      id: 2,
      name: "Michael T.",
      avatar: "https://plus.unsplash.com/premium_photo-1692243080575-1071970c541b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fE1pY2hhZWx8ZW58MHx8MHx8fDA%3D",
      rating: 4,
      quote: "Impeccable service and the wine pairings were inspired.",
      platform: "Yelp",
      link: "#"
    },
    {
      id: 3,
      name: "Priya M.",
      avatar: "https://images.unsplash.com/photo-1648743856421-5bc9a742ddc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJpeWF8ZW58MHx8MHx8fDA%3D",
      rating: 5,
      quote: "Farm-to-table done right. The scallops melted in my mouth.",
      platform: "Google",
      link: "#"
    },
    {
      id: 4,
      name: "David & Emily",
      avatar: "https://images.unsplash.com/photo-1573023512520-4f10a31b4a07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fERhdmlkJTIwJTI2JTIwRW1pbHl8ZW58MHx8MHx8fDA%3D",
      rating: 5,
      quote: "Our anniversary dinner was pure magic. 10/10!",
      platform: "OpenTable",
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
            Dining Stories
          </h2>
          <p className="text-gray-600">
            What our guests say about us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i}
                    className={`h-5 w-5 ${i < review.rating ? 'text-amber-500 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 italic mb-6">
                "{review.quote}"
              </blockquote>

              {/* Reviewer */}
              <div className="flex items-center">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">{review.name}</p>
                  <a 
                    href={review.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-amber-600 hover:text-amber-700 flex items-center"
                  >
                    {review.platform} review
                    <FiExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to leave review */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition-colors"
          >
            Share Your Experience
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;