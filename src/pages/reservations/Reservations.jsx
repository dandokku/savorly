import React, { useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";
import Animated from "../../components/Animated"

function Reservations() {
  // Form state
  // const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    guests: 2,
    date: "",
    time: "",
    occasion: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Mock available times
  const availableTimes = [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
  ];

  const popularTimes = ["12:00 PM", "6:30 PM"];
  const offPeakTimes = ["11:00 AM", "5:00 PM"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto py-16 px-4 text-center">
        <FiCheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Reservation Confirmed!
        </h2>
        <p className="text-gray-600 mb-8">
          We've sent the details to your email.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg text-left mb-8">
          <h3 className="font-medium text-gray-900 mb-4">Your Reservation</h3>
          <div className="space-y-3">
            <p>
              <span className="text-gray-600">Date:</span> {formData.date}
            </p>
            <p>
              <span className="text-gray-600">Time:</span> {formData.time}
            </p>
            <p>
              <span className="text-gray-600">Guests:</span> {formData.guests}
            </p>
            {formData.occasion && (
              <p>
                <span className="text-gray-600">Occasion:</span>{" "}
                {formData.occasion}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center justify-center gap-2">
            Add to Calendar
          </button>
          <button className="px-4 py-2 bg-amber-600 text-white rounded-md flex items-center justify-center gap-2">
            Text Me the Details
          </button>
        </div>
      </div>
    );
  }

  return (
    <Animated animation="fadeInUp">
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
              Make a Reservation
            </h1>
            <p className="text-gray-600">
              Book your table in just a few clicks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Booking Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Guests */}
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Number of Guests
                  </label>
                  <div className="relative">
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "person" : "people"}
                        </option>
                      ))}
                      <option value="9">Larger party (9+)</option>
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                      required
                    />
                    <FiCalendar className="absolute right-3 top-3.5 text-gray-400" />
                  </div>
                </div>

                {/* Time */}
                {formData.date && (
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Time
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, time }))
                          }
                          className={`py-2 px-3 rounded-md text-sm font-medium ${
                            formData.time === time
                              ? "bg-amber-600 text-white"
                              : popularTimes.includes(time)
                              ? "bg-green-100 text-green-800"
                              : offPeakTimes.includes(time)
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-3 text-xs">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                        Popular
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                        Off-peak
                      </div>
                    </div>
                  </div>
                )}

                {/* Occasion */}
                <div>
                  <label
                    htmlFor="occasion"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Special Occasion? (Optional)
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="">None</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="date">Romantic Date</option>
                    <option value="business">Business Meal</option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Additional Notes (Allergies, etc.)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!formData.date || !formData.time || isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? "Reserving..." : "Confirm Reservation"}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Availability Info */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-3">
                  Availability Tips
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <FiClock className="h-4 w-4 text-amber-600 mt-0.5 mr-2" />
                    <span>Weekends book up fast - reserve early</span>
                  </li>
                  <li className="flex items-start">
                    <FiClock className="h-4 w-4 text-amber-600 mt-0.5 mr-2" />
                    <span>10% off for reservations before 5:30 PM</span>
                  </li>
                </ul>
              </div>

              {/* Private Events */}
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
                <h3 className="font-medium text-gray-900 mb-3">
                  Planning an event?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our private dining room seats up to 20 guests with customized
                  menus.
                </p>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                  Inquire About Private Dining
                </button>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-3">Need help?</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Call us directly at{" "}
                  <a
                    href="tel:+1234567890"
                    className="text-amber-600 hover:underline"
                  >
                    (123) 456-7890
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  Or email{" "}
                  <a
                    href="mailto:reservations@savorly.com"
                    className="text-amber-600 hover:underline"
                  >
                    reservations@savorly.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Animated>
  );
}

export default Reservations;
