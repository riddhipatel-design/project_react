export const mockMenu = {
  restaurantInfo: {
    id: "51684",
    name: "Burger King",
    cuisines: ["Burgers", "American", "Fast Food"],
    avgRating: "4.2",
    costForTwo: "₹350 for two",
    deliveryTime: "32 mins",
    locality: "Satellite",
  },

  categories: [
    // 1️⃣ RECOMMENDED
    {
      title: "Recommended",
      itemCards: [
        {
          id: "101",
          name: "Whopper Jr.",
          price: 149,
          description: "Flame grilled patty with signature BK sauce.",
        },
        {
          id: "102",
          name: "Veg Whopper",
          price: 199,
          description: "Large vegetable patty with fresh veggies and mayo.",
        },
        {
          id: "103",
          name: "BK Fries",
          price: 89,
          description: "Crispy and golden French fries.",
        },
      ],
    },

    // 2️⃣ BURGERS
    {
      title: "Burgers",
      itemCards: [
        {
          id: "201",
          name: "Chicken Whopper",
          price: 229,
          description: "Iconic flame-grilled chicken burger with toppings.",
        },
        {
          id: "202",
          name: "Paneer Royale",
          price: 199,
          description: "Paneer patty with rich creamy sauce.",
        },
        {
          id: "203",
          name: "Crispy Chicken Burger",
          price: 159,
          description: "Crispy chicken patty with mayo.",
        },
      ],
    },

    // 3️⃣ SNACKS & SIDES
    {
      title: "Snacks & Sides",
      itemCards: [
        {
          id: "301",
          name: "Peri Peri Fries",
          price: 109,
          description: "Fries sprinkled with spicy peri-peri seasoning.",
        },
        {
          id: "302",
          name: "Cheesy Tots",
          price: 129,
          description: "Cheese-filled potato bites.",
        },
        {
          id: "303",
          name: "Paneer Strips",
          price: 149,
          description: "Crispy paneer strips with dip.",
        },
      ],
    },

    // 4️⃣ BEVERAGES
    {
      title: "Beverages",
      itemCards: [
        {
          id: "401",
          name: "Coca Cola (300ml)",
          price: 49,
          description: "Chilled refreshing soft drink.",
        },
        {
          id: "402",
          name: "Chocolate Shake",
          price: 129,
          description: "Creamy chocolate thick shake.",
        },
        {
          id: "403",
          name: "Cold Coffee",
          price: 119,
          description: "Iced coffee with sweet milk cream.",
        },
      ],
    },

    // 5️⃣ DESSERTS
    {
      title: "Desserts",
      itemCards: [
        {
          id: "501",
          name: "Chocolate Mousse Cup",
          price: 79,
          description: "Smooth and rich chocolate mousse.",
        },
        {
          id: "502",
          name: "Sundae Cup",
          price: 99,
          description: "Vanilla ice cream topped with chocolate sauce.",
        },
        {
          id: "503",
          name: "Brownie Fantasy",
          price: 149,
          description: "Warm chocolate brownie with fudge.",
        },
      ],
    },

    // 6️⃣ KING DEALS
    {
      title: "King Saver Combos",
      itemCards: [
        {
          id: "601",
          name: "Crispy Veg Combo",
          price: 199,
          description: "Crispy veg burger + fries + coke.",
        },
        {
          id: "602",
          name: "Whopper Meal",
          price: 299,
          description: "Whopper + fries + drink.",
        },
        {
          id: "603",
          name: "Double Patty Meal",
          price: 349,
          description: "Double patty burger + fries + drink.",
        },
      ],
    },
  ],
};
