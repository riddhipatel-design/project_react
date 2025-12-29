const offersData = [
  {
    id: 1,
    title: "Flat 50% OFF",
    description: "On orders above ₹299",
    tag: "Limited Time",
    color: "bg-red-100 text-red-700",
  },
  {
    id: 2,
    title: "Free Delivery",
    description: "No delivery charge today",
    tag: "Today Only",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    title: "Meals Under ₹199",
    description: "Healthy & budget friendly",
    tag: "Popular",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: 4,
    title: "Grocery Deals",
    description: "Up to 30% off on groceries",
    tag: "New",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 5,
    title: "Weekend Special",
    description: "Extra 20% off this weekend",
    tag: "Weekend",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 6,
    title: "Combo Offers",
    description: "Save more with meal combos",
    tag: "Best Value",
    color: "bg-teal-100 text-teal-700",
  },
];


const Offers = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Current Offers
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offersData.map((offer) => (
          <div
            key={offer.id}
            className="border border-black/10 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition"
          >
            <span
              className={`inline-block text-xs font-semibold px-2 py-1 rounded mb-3 ${offer.color}`}
            >
              {offer.tag}
            </span>

            <h2 className="text-lg font-medium text-gray-800">
              {offer.title}
            </h2>

            <p className="text-sm text-gray-600 mt-1">
              {offer.description}
            </p>

            <button
              className="mt-4 text-sm font-medium text-amber-600 hover:underline"
              aria-label={`View restaurants for ${offer.title}`}
            >
              View Restaurants →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
