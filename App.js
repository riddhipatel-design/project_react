import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1600w/canva-yellow-and-brown-kitchen-food-logo-JrzZUwc_CLQ.jpg"
          alt="App Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


const RestaurantCard = (props) => {
  const {resData} = props;
  const {image, name, cuisine, rating, deliveryTime} = resData
  return (
   <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={image}
        alt={name}
        width="200"
        height="150"
      />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>⭐ {rating}</h4>
      <h4>⏱ {deliveryTime}</h4>
    </div>
  );
};

const resList = [
  {
    id: 1,
    name: "Bombay Spice",
    cuisine: "Indian",
    rating: 4.6,
    deliveryTime: "30-40 min",
    priceRange: "$$",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    name: "Mama Mia Pizza",
    cuisine: "Italian",
    rating: 4.3,
    deliveryTime: "25-35 min",
    priceRange: "$$",
    image:
      "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    name: "Dragon Wok",
    cuisine: "Chinese",
    rating: 4.5,
    deliveryTime: "20-30 min",
    priceRange: "$",
    image:
      "https://images.pexels.com/photos/2092903/pexels-photo-2092903.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    name: "Green Bowl",
    cuisine: "Healthy / Salad",
    rating: 4.2,
    deliveryTime: "15-25 min",
    priceRange: "$$",
    image:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.4,
    deliveryTime: "20-30 min",
    priceRange: "$",
    image:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    name: "Sushi World",
    cuisine: "Japanese",
    rating: 4.7,
    deliveryTime: "30-45 min",
    priceRange: "$$$",
    image:
      "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 7,
    name: "Burger Hub",
    cuisine: "Fast Food",
    rating: 4.1,
    deliveryTime: "15-20 min",
    priceRange: "$",
    image:
      "https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 8,
    name: "Curry Leaf",
    cuisine: "South Indian",
    rating: 4.8,
    deliveryTime: "25-35 min",
    priceRange: "$$",
    image:
      "https://images.pexels.com/photos/1117863/pexels-photo-1117863.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 9,
    name: "Falafel House",
    cuisine: "Middle Eastern",
    rating: 4.3,
    deliveryTime: "20-25 min",
    priceRange: "$",
    image:
      "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 10,
    name: "French Cravings",
    cuisine: "French",
    rating: 4.6,
    deliveryTime: "30-40 min",
    priceRange: "$$$",
    image:
      "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
        <RestaurantCard key={restaurant.id} resData={restaurant} />
      ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
