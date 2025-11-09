export const mockRestaurantMenu = () => [
  {
    restaurant: {
      id: "37650",
      name: "Pizza Hut",
      cuisines: ["Pizzas", "Italian", "Fast Food"],
      avgRating: 4.2,
      deliveryTime: "25-35 min",
      costForTwo: "₹400 for two",
       locality: "Prahlad Nagar",
      image:
        "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=800",
      address: {
        city: "Ahmedabad",
        state: "Gujarat",
      },
    },
    menu: [
      {
        id: "1001",
        name: "Veggie Supreme Pizza",
        description:
          "Crispy crust topped with bell peppers, olives, onions & tomatoes",
        price: 599,
        image:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Pizzas",
      },
      {
        id: "1002",
        name: "Chicken Pepperoni Pizza",
        description: "Classic pepperoni + extra cheese on golden crust",
        price: 699,
        image:
          "https://images.pexels.com/photos/2092903/pexels-photo-2092903.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Pizzas",
      },
      {
        id: "1003",
        name: "Garlic Bread Sticks",
        description: "Soft bread sticks with garlic butter & herbs",
        price: 249,
        image:
          "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Sides",
      },
      {
        id: "1004",
        name: "Chocolate Lava Cake",
        description:
          "Warm chocolate cake with molten centre, served with vanilla ice-cream",
        price: 199,
        image:
          "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Desserts",
      },
    ],
  },

  {
    restaurant: {
      id: "36974",
      name: "Domino's Pizza",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.5,
      costForTwo: "₹400 for two",
      deliveryTime: "25–30 mins",
      area: "Prahlad Nagar",
      locality: "Venus Atlantis Business Park",
      isVeg: true,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/567d2593-9bce-4654-8a1f-d4e6744b641f_36974.JPG",
      address: {
        city: "Ahmedabad",
        state: "Gujarat",
      },
      badges: [
        { description: "bolt!", image: "android/static-assets/icons/big_rx.png" },
        { description: "Delivery!", image: "Rxawards/_CATEGORY-Pizza.png" },
        { description: "Pure Veg", image: "v1695133679/badges/Pure_Veg111.png" },
      ],
      discount: {
        header: "ITEMS",
        subHeader: "AT ₹55",
      },
    },
    menu: [
      {
        id: "D001",
        name: "Margherita Pizza",
        description:
          "Classic delight with 100% real mozzarella cheese and signature tomato sauce.",
        price: 249,
        image:
          "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Pizzas",
      },
      {
        id: "D002",
        name: "Farmhouse Pizza",
        description:
          "Loaded with golden corn, mushrooms, capsicum, and fresh tomatoes.",
        price: 449,
        image:
          "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Pizzas",
      },
      {
        id: "D003",
        name: "Garlic Breadsticks",
        description:
          "Soft, buttery breadsticks with garlic seasoning — the perfect side.",
        price: 149,
        image:
          "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Sides",
      },
      {
        id: "D004",
        name: "Choco Lava Cake",
        description:
          "Warm, gooey chocolate cake with a molten center. A must-try dessert!",
        price: 119,
        image:
          "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Desserts",
      },
    ],
  },

  {
    restaurant: {
      id: "675031",
      name: "Olio - The Wood Fired Pizzeria",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.2,
      costForTwo: "₹300 for two",
      deliveryTime: "30–35 mins",
      area: "ELLIS BRIDGE",
      locality: "Ambawadi",
      isVeg: true,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/68041e6f-8596-41ed-a047-b5b8046cd66b_675031.JPG",
      address: {
        city: "Ahmedabad",
        state: "Gujarat",
      },
      badges: [{ description: "Gourmet", image: "newg.png" }],
      discount: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
    },
    menu: [
      {
        id: "O001",
        name: "Classic Margherita",
        description:
          "Wood-fired thin crust pizza with tomato sauce, mozzarella, and basil.",
        price: 279,
        image:
          "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Pizzas",
      },
      {
        id: "O002",
        name: "Spicy Veggie Supreme",
        description:
          "Loaded with onions, capsicum, olives, and jalapeños on a crispy crust.",
        price: 349,
        image:
          "https://images.pexels.com/photos/8032907/pexels-photo-8032907.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Pizzas",
      },
      {
        id: "O003",
        name: "Creamy Alfredo Pasta",
        description:
          "Penne pasta tossed in a rich and creamy Alfredo sauce with veggies.",
        price: 299,
        image:
          "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Pastas",
      },
      {
        id: "O004",
        name: "Tiramisu Cup",
        description:
          "Classic Italian dessert layered with mascarpone and coffee-soaked sponge.",
        price: 159,
        image:
          "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Desserts",
      },
    ],
  },
  {
  restaurant: {
    id: "37687",
    name: "McDonald's",
    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.5,
    costForTwo: "₹400 for two",
    deliveryTime: "10-15 mins",
    area: "Prahlad Nagar",
    locality: "Prahlad Nagar",
    isVeg: false,
    image:
      "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: {
      city: "Ahmedabad",
      state: "Gujarat",
    },
    badges: [
      { description: "bolt!", image: "android/static-assets/icons/big_rx.png" },
      { description: "Delivery!", image: "Rxawards/_CATEGORY-Burger.png" },
    ],
    discount: {
      header: "ITEMS",
      subHeader: "AT ₹119",
    },
  },
  menu: [
    {
      id: "M001",
      name: "McAloo Tikki Burger",
      description: "Aloo patty with special sauces and fresh vegetables.",
      price: 129,
      category: "Burgers",
      image:
        "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "M002",
      name: "Chicken McGrill",
      description: "Grilled chicken patty with lettuce and special sauce.",
      price: 199,
      category: "Burgers",
      image:
        "https://images.pexels.com/photos/1580460/pexels-photo-1580460.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "M003",
      name: "French Fries",
      description: "Crispy golden fries, lightly salted.",
      price: 99,
      category: "Sides",
      image:
        "https://images.pexels.com/photos/1580461/pexels-photo-1580461.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "M004",
      name: "Chocolate Sundae",
      description: "Creamy vanilla ice cream topped with chocolate sauce.",
      price: 79,
      category: "Desserts",
      image:
        "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ],
},
{
  restaurant: {
    id: "384986",
    name: "La Pino'z Pizza",
    cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    avgRating: 4.5,
    costForTwo: "₹400 for two",
    deliveryTime: "15-20 mins",
    area: "Prahlad Nagar",
    locality: "Prahlad Nagar",
    isVeg: true,
    image:
      "https://images.pexels.com/photos/2255925/pexels-photo-2255925.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: {
      city: "Ahmedabad",
      state: "Gujarat",
    },
    badges: [
      { description: "bolt!", image: "android/static-assets/icons/big_rx.png" },
      { description: "Delivery!", image: "Rxawards/_CATEGORY-Pizza.png" },
      { description: "Pure Veg", image: "v1695133679/badges/Pure_Veg111.png" },
    ],
    discount: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹199",
      discountTag: "FLAT DEAL",
    },
  },
  menu: [
    {
      id: "LP001",
      name: "Margherita Pizza",
      description:
        "Classic delight with 100% real mozzarella cheese and tomato sauce.",
      price: 299,
      category: "Pizzas",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "LP002",
      name: "Farmhouse Pizza",
      description: "Loaded with mushrooms, bell peppers, and golden corn.",
      price: 399,
      category: "Pizzas",
      image:
        "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "LP003",
      name: "Garlic Breadsticks",
      description: "Soft, buttery breadsticks with garlic seasoning.",
      price: 149,
      category: "Sides",
      image:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "LP004",
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center and vanilla ice-cream.",
      price: 199,
      category: "Desserts",
      image:
        "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ],
},
{
  restaurant: {
    id: "41119",
    name: "Burger King",
    cuisines: ["Burgers", "American"],
    avgRating: 4.3,
    costForTwo: "₹350 for two",
    deliveryTime: "10-15 mins",
    area: "Prahlad Nagar",
    locality: "Venus Atlantis",
    isVeg: false,
    image:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: {
      city: "Ahmedabad",
      state: "Gujarat",
    },
    badges: [
      { description: "bolt!", image: "android/static-assets/icons/rx_5_10_min.png" },
      { description: "Delivery!", image: "Rxawards/_CATEGORY-Burger.png" },
    ],
    discount: {
      header: "ITEMS",
      subHeader: "AT ₹55",
    },
  },
  menu: [
    {
      id: "BK001",
      name: "Whopper",
      description: "Flame-grilled beef patty with fresh lettuce, tomato, and onion.",
      price: 249,
      category: "Burgers",
      image:
        "https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "BK002",
      name: "Veggie Whopper",
      description: "Crispy veggie patty with fresh vegetables and signature sauce.",
      price: 199,
      category: "Burgers",
      image:
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "BK003",
      name: "French Fries",
      description: "Crispy golden potato fries, perfect side for any burger.",
      price: 99,
      category: "Sides",
      image:
        "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "BK004",
      name: "Chocolate Sundae",
      description: "Creamy vanilla ice-cream topped with rich chocolate sauce.",
      price: 129,
      category: "Desserts",
      image:
        "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ],
},
{
  restaurant: {
    id: "40827",
    name: "Subway",
    cuisines: ["Sandwich", "Salads", "Wrap", "Healthy Food"],
    avgRating: 4.3,
    costForTwo: "₹350 for two",
    deliveryTime: "15-20 mins",
    area: "Satellite",
    locality: "Prahlad Nagar",
    isVeg: true,
    image:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: {
      city: "Ahmedabad",
      state: "Gujarat",
    },
    badges: [
      { description: "bolt!", image: "android/static-assets/icons/big_rx.png" },
    ],
    discount: {},
  },
  menu: [
    {
      id: "S001",
      name: "Veggie Delight Sandwich",
      description: "Fresh veggies with your choice of sauces on freshly baked bread.",
      price: 149,
      category: "Sandwiches",
      image:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "S002",
      name: "Chicken Tandoori Wrap",
      description: "Grilled chicken with veggies wrapped in a soft tortilla.",
      price: 199,
      category: "Wraps",
      image:
        "https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "S003",
      name: "Caesar Salad",
      description: "Fresh lettuce, croutons, and Caesar dressing with optional chicken.",
      price: 129,
      category: "Salads",
      image:
        "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "S004",
      name: "Chocolate Chip Cookie",
      description: "Soft baked cookie loaded with chocolate chips.",
      price: 49,
      category: "Desserts",
      image:
        "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ],
},
{
  restaurant: {
    id: "38773",
    name: "Cafe Coffee Day",
    cuisines: [
      "Beverages",
      "Cafe",
      "Snacks",
      "Desserts",
      "Burgers",
      "Ice Cream",
      "Bakery",
      "Fast Food",
    ],
    avgRating: 4.1,
    costForTwo: "₹400 for two",
    deliveryTime: "30-35 mins",
    area: "Ellisbridge",
    locality: "Law Garden",
    isVeg: true,
    image:
      "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: {
      city: "Ahmedabad",
      state: "Gujarat",
    },
    badges: [],
    discount: {
      header: "ITEMS",
      subHeader: "AT ₹99",
    },
  },
  menu: [
    {
      id: "C001",
      name: "Cappuccino",
      description: "Rich espresso with steamed milk foam, a classic favorite.",
      price: 149,
      category: "Beverages",
      image:
        "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "C002",
      name: "Chicken Burger",
      description: "Juicy chicken patty with lettuce, tomato, and mayo in a soft bun.",
      price: 199,
      category: "Burgers",
      image:
        "https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "C003",
      name: "Chocolate Brownie",
      description: "Rich and fudgy chocolate brownie with nuts.",
      price: 99,
      category: "Desserts",
      image:
        "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "C004",
      name: "Veg Sandwich",
      description: "Fresh veggies with mayo on multigrain bread.",
      price: 129,
      category: "Snacks",
      image:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ],
},
{
  restaurant: {
    id: "233245",
    name: "McDonald's",
    cuisines: ["Burgers", "Beverages", "Desserts"],
    avgRating: 4.4,
    costForTwo: "₹400 for two",
    deliveryTime: "10-15 mins",
    area: "Prahlad Nagar",
    locality: "Prahlad Nagar",
    isVeg: false,
    image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: { city: "Ahmedabad", state: "Gujarat" },
  },
  menu: [
    { id: "MDG001", name: "Big Mac", description: "Classic burger with two beef patties, cheese, lettuce, pickles, and special sauce.", price: 199, category: "Burgers", image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: "MDG002", name: "McFlurry", description: "Vanilla ice cream with chocolate pieces.", price: 129, category: "Desserts", image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ],
},

{
  restaurant: {
    id: "37942",
    name: "KFC",
    cuisines: ["Burgers", "Chicken", "Fast Food"],
    avgRating: 4.3,
    costForTwo: "₹350 for two",
    deliveryTime: "15-20 mins",
    area: "Prahlad Nagar",
    locality: "Prahlad Nagar",
    isVeg: false,
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: { city: "Ahmedabad", state: "Gujarat" },
  },
  menu: [
    { id: "KFC001", name: "Original Recipe Chicken", description: "Classic fried chicken with secret spices.", price: 299, category: "Chicken", image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: "KFC002", name: "Zinger Burger", description: "Spicy fried chicken burger with lettuce and mayo.", price: 199, category: "Burgers", image: "https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ],
},

{
  restaurant: {
    id: "40846",
    name: "Hocco Eatery",
    cuisines: ["Fast Food", "Snacks", "Beverages"],
    avgRating: 4.0,
    costForTwo: "₹300 for two",
    deliveryTime: "20-25 mins",
    area: "Prahlad Nagar",
    locality: "Prahlad Nagar",
    isVeg: true,
    image: "https://images.pexels.com/photos/2255925/pexels-photo-2255925.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: { city: "Ahmedabad", state: "Gujarat" },
  },
  menu: [
    { id: "HE001", name: "Veg Burger", description: "Soft bun with veggie patty, lettuce, and sauces.", price: 129, category: "Burgers", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: "HE002", name: "French Fries", description: "Crispy golden fries.", price: 99, category: "Sides", image: "https://images.pexels.com/photos/1580461/pexels-photo-1580461.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ],
},

{
  restaurant: {
    id: "158457",
    name: "New York Waffles & Dinges",
    cuisines: ["Desserts", "Waffles", "Beverages"],
    avgRating: 4.2,
    costForTwo: "₹350 for two",
    deliveryTime: "20-25 mins",
    area: "Prahlad Nagar",
    locality: "Prahlad Nagar",
    isVeg: true,
    image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: { city: "Ahmedabad", state: "Gujarat" },
  },
  menu: [
    { id: "NY001", name: "Classic Waffle", description: "Crispy golden waffles with maple syrup.", price: 199, category: "Desserts", image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: "NY002", name: "Chocolate Waffle", description: "Waffle with chocolate drizzle and cream.", price: 249, category: "Desserts", image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ],
},
{
  restaurant: {
    id: "353709",
    name: "Marky Momos",
    cuisines: ["Momos", "Chinese", "Fast Food"],
    avgRating: 4.1,
    costForTwo: "₹250 for two",
    deliveryTime: "20-25 mins",
    area: "Prahlad Nagar",
    locality: "Prahlad Nagar",
    isVeg: true,
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: { city: "Ahmedabad", state: "Gujarat" },
  },
  menu: [
    { id: "MM001", name: "Veg Momos", description: "Steamed momos stuffed with fresh vegetables.", price: 129, category: "Momos", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: "MM002", name: "Chicken Momos", description: "Steamed momos stuffed with chicken and spices.", price: 149, category: "Momos", image: "https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ],
},

{
  restaurant: {
    id: "59956",
    name: "Shakti - The Sandwich Shop",
    cuisines: ["Sandwiches", "Fast Food", "Beverages"],
    avgRating: 4.2,
    costForTwo: "₹300 for two",
    deliveryTime: "15-20 mins",
    area: "Prahlad Nagar",
    locality: "Prahlad Nagar",
    isVeg: true,
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: { city: "Ahmedabad", state: "Gujarat" },
  },
  menu: [
    { id: "SS001", name: "Veg Sandwich", description: "Fresh veggies with sauces on multigrain bread.", price: 129, category: "Sandwiches", image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: "SS002", name: "Grilled Chicken Sandwich", description: "Grilled chicken with lettuce and mayo in a soft bun.", price: 149, category: "Sandwiches", image: "https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ],
},

{
  restaurant: {
    id: "395374",
    name: "McDonald's Gourmet Burger Collection",
    cuisines: ["Burgers", "Beverages", "Desserts"],
    avgRating: 4.3,
    costForTwo: "₹450 for two",
    deliveryTime: "10-15 mins",
    area: "Prahlad Nagar",
    locality: "Prahlad Nagar",
    isVeg: false,
    image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: { city: "Ahmedabad", state: "Gujarat" },
  },
  menu: [
    { id: "MG001", name: "Gourmet Beef Burger", description: "Juicy beef patty with gourmet sauces.", price: 249, category: "Burgers", image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: "MG002", name: "Gourmet Veggie Burger", description: "Crispy veggie patty with gourmet sauces.", price: 199, category: "Burgers", image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ],
},

{
  restaurant: {
    id: "833992",
    name: "ENSO - Sourdough Pizza by Nomad",
    cuisines: ["Pizzas", "Italian", "Fast Food"],
    avgRating: 4.4,
    costForTwo: "₹500 for two",
    deliveryTime: "30-35 mins",
    area: "Prahlad Nagar",
    locality: "Prahlad Nagar",
    isVeg: true,
    image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: { city: "Ahmedabad", state: "Gujarat" },
  },
  menu: [
    { id: "EN001", name: "Classic Margherita", description: "Sourdough pizza with tomato sauce, mozzarella, and basil.", price: 299, category: "Pizzas", image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: "EN002", name: "Veggie Supreme", description: "Loaded with peppers, olives, onions & tomatoes.", price: 349, category: "Pizzas", image: "https://images.pexels.com/photos/8032907/pexels-photo-8032907.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ],
},

{
  restaurant: {
    id: "833943",
    name: "Nomad Pizza - Traveller Series",
    cuisines: ["Pizzas", "Italian", "Fast Food"],
    avgRating: 4.3,
    costForTwo: "₹400 for two",
    deliveryTime: "25-30 mins",
    area: "Prahlad Nagar",
    locality: "Prahlad Nagar",
    isVeg: true,
    image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: { city: "Ahmedabad", state: "Gujarat" },
  },
  menu: [
    { id: "NP001", name: "Traveller Margherita", description: "Classic pizza with tomato, mozzarella & basil.", price: 299, category: "Pizzas", image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: "NP002", name: "Pepperoni Pizza", description: "Loaded with pepperoni and cheese.", price: 399, category: "Pizzas", image: "https://images.pexels.com/photos/2092903/pexels-photo-2092903.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ],
},

{
  restaurant: {
    id: "675032",
    name: "Crusto's - Cheese Burst Pizza By Olio",
    cuisines: ["Pizzas", "Italian"],
    avgRating: 4.2,
    costForTwo: "₹350 for two",
    deliveryTime: "20-25 mins",
    area: "Prahlad Nagar",
    locality: "Prahlad Nagar",
    isVeg: true,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: { city: "Ahmedabad", state: "Gujarat" },
  },
  menu: [
    { id: "CR001", name: "Cheese Burst Margherita", description: "Cheesy pizza with rich tomato sauce.", price: 299, category: "Pizzas", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: "CR002", name: "Cheese Burst Veggie", description: "Cheese overload with veggies.", price: 349, category: "Pizzas", image: "https://images.pexels.com/photos/8032907/pexels-photo-8032907.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ],
},

{
  restaurant: {
    id: "36322",
    name: "Momoman",
    cuisines: ["Momos", "Fast Food"],
    avgRating: 4.0,
    costForTwo: "₹250 for two",
    deliveryTime: "20-25 mins",
    area: "Prahlad Nagar",
    locality: "Prahlad Nagar",
    isVeg: true,
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: { city: "Ahmedabad", state: "Gujarat" },
  },
  menu: [
    { id: "MO001", name: "Veg Momos", description: "Steamed momos with fresh veggies.", price: 129, category: "Momos", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: "MO002", name: "Chicken Momos", description: "Steamed momos with chicken filling.", price: 149, category: "Momos", image: "https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ],
},

{
  restaurant: {
    id: "390261",
    name: "The Brooklyn Creamery - Healthy Ice Cream",
    cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
    avgRating: 4.5,
    costForTwo: "₹300 for two",
    deliveryTime: "15-20 mins",
    area: "Prahlad Nagar",
    locality: "Prahlad Nagar",
    isVeg: true,
    image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: { city: "Ahmedabad", state: "Gujarat" },
  },
  menu: [
    { id: "BC001", name: "Vegan Ice Cream", description: "Healthy vegan ice cream with almond milk.", price: 149, category: "Desserts", image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: "BC002", name: "Chocolate Fudge", description: "Rich chocolate ice cream dessert.", price: 179, category: "Desserts", image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ],
},

{
  restaurant: {
    id: "833981",
    name: "Mexican Burritos By Nomad",
    cuisines: ["Mexican", "Fast Food", "Burritos"],
    avgRating: 4.3,
    costForTwo: "₹350 for two",
    deliveryTime: "20-25 mins",
    area: "Prahlad Nagar",
    locality: "Prahlad Nagar",
    isVeg: true,
    image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: { city: "Ahmedabad", state: "Gujarat" },
  },
  menu: [
    { id: "MB001", name: "Veg Burrito", description: "Loaded burrito with beans, rice, and veggies.", price: 199, category: "Burritos", image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: "MB002", name: "Chicken Burrito", description: "Burrito stuffed with chicken, beans, and rice.", price: 249, category: "Burritos", image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ],
},
{
  restaurant: {
    id: "56241",
    name: "Honest",
    cuisines: ["Fast Food", "Healthy", "Snacks"],
    avgRating: 4.2,
    costForTwo: "₹300 for two",
    deliveryTime: "20-25 mins",
    area: "Prahlad Nagar",
    locality: "Prahlad Nagar",
    isVeg: true,
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: { city: "Ahmedabad", state: "Gujarat" },
  },
  menu: [
    { id: "H001", name: "Honest Veg Burger", description: "Veggie patty with lettuce, tomato, and sauces.", price: 149, category: "Burgers", image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: "H002", name: "Honest Sandwich", description: "Fresh vegetables and sauces in multigrain bread.", price: 129, category: "Sandwiches", image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ],
},

{
  restaurant: {
    id: "168666",
    name: "Cake Bonzer Bites",
    cuisines: ["Bakery", "Desserts", "Cakes"],
    avgRating: 4.3,
    costForTwo: "₹350 for two",
    deliveryTime: "25-30 mins",
    area: "Ellisbridge",
    locality: "Law Garden",
    isVeg: true,
    image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: { city: "Ahmedabad", state: "Gujarat" },
  },
  menu: [
    { id: "CB001", name: "Chocolate Cake Slice", description: "Rich chocolate cake with creamy frosting.", price: 149, category: "Cakes", image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: "CB002", name: "Red Velvet Cake", description: "Classic red velvet cake with cream cheese frosting.", price: 199, category: "Cakes", image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ],
},

{
  restaurant: {
    id: "192381",
    name: "McCafe by McDonald's",
    cuisines: ["Cafe", "Beverages", "Desserts"],
    avgRating: 4.1,
    costForTwo: "₹300 for two",
    deliveryTime: "10-15 mins",
    area: "Prahlad Nagar",
    locality: "Prahlad Nagar",
    isVeg: true,
    image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: { city: "Ahmedabad", state: "Gujarat" },
  },
  menu: [
    { id: "MC001", name: "Cappuccino", description: "Classic cappuccino with milk froth.", price: 149, category: "Beverages", image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: "MC002", name: "Chocolate Muffin", description: "Moist chocolate muffin with chocolate chips.", price: 99, category: "Desserts", image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ],
},
{
  restaurant: {
    id: "47788",
    name: "The Westend Hotel (Mayflower)",
    cuisines: ["North Indian", "Chinese", "Continental", "Desserts"],
    avgRating: 4.2,
    costForTwo: "₹450 for two",
    deliveryTime: "30-40 mins",
    area: "Ellisbridge",
    locality: "Law Garden",
    isVeg: false,
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: { city: "Ahmedabad", state: "Gujarat" },
  },
  menu: [
    {
      id: "W001",
      name: "Paneer Butter Masala",
      description: "Soft paneer cubes in creamy tomato gravy with spices.",
      price: 299,
      category: "North Indian",
      image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "W002",
      name: "Veg Hakka Noodles",
      description: "Stir-fried noodles with fresh vegetables and sauces.",
      price: 199,
      category: "Chinese",
      image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "W003",
      name: "Grilled Chicken",
      description: "Tender chicken grilled with herbs and spices.",
      price: 349,
      category: "Continental",
      image: "https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "W004",
      name: "Chocolate Brownie",
      description: "Rich chocolate brownie served with ice cream.",
      price: 149,
      category: "Desserts",
      image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ],
}
];
