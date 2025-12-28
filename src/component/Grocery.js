const Grocery = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Grocery Store 🛒
      </h1>

      <p className="text-gray-600 mb-6">
        Fresh groceries delivered to your doorstep. Shop daily essentials,
        fruits, vegetables, dairy, and more.
      </p>

      {/* Info banner */}
      <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-8">
        🚚 Free delivery on orders above ₹299 • Fresh & quality assured
      </div>

      {/* Categories */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {[
          "Fruits & Vegetables",
          "Dairy & Eggs",
          "Snacks",
          "Beverages",
          "Staples",
          "Household",
          "Personal Care",
          "Bakery"
        ].map((category) => (
          <div
            key={category}
            className="bg-gray-100 p-4 rounded-lg text-center font-medium cursor-pointer hover:bg-gray-200 transition"
          >
            {category}
          </div>
        ))}
      </div>

      {/* Note about lazy loading */}
      <p className="text-sm text-gray-500 mt-10">
        ℹ️ This page is loaded on demand using <strong>React.lazy</strong> to
        improve app performance.
      </p>
    </div>
  );
};

export default Grocery;
