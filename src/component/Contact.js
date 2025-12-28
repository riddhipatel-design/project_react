const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Contact Us
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
        <form className="space-y-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Message */}
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
