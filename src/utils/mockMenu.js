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
          imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/11/20/5cdc0592-60c5-4111-8a5d-bd6561dea768_52ca8d02-9b38-4c5b-b81b-2466febf03ab.jpg",
        },
        {
          id: "102",
          name: "Veg Whopper",
          price: 199,
          description: "Large vegetable patty with fresh veggies and mayo.",
          imageId:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/11/20/b1e902e7-ef9e-4a2d-8b65-52ca66574937_cb6912fe-d217-4e35-89ef-af51f7b91a11.jpg"
        },
        {
          id: "103",
          name: "BK Fries",
          price: 89,
          description: "Crispy and golden French fries.",
          imageId:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/23/5a275756-e3eb-4286-a188-1e19b792ae1c_690db299-28ee-40ba-aba5-fc3c98552407.jpg"
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
          imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/11/20/2ea3296b-2776-42b2-b3f7-ba17b0fbd43c_363816e0-8fbb-4fb6-8dbb-12d55d80b954.jpg"
        },
        {
          id: "202",
          name: "Paneer Royale",
          price: 199,
          description: "Paneer patty with rich creamy sauce.",
          imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/11/20/4389cb8d-93e5-4dd5-8013-73a927dd6b31_622133db-f6cc-4f88-ba37-118df0b143ce.jpg"
        },
        {
          id: "203",
          name: "Crispy Chicken Burger",
          price: 159,
          description: "Crispy chicken patty with mayo.",
          imageId:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/11/20/2ea3296b-2776-42b2-b3f7-ba17b0fbd43c_363816e0-8fbb-4fb6-8dbb-12d55d80b954.jpg"
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
          imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/3408bb90-e96a-42e3-abe2-0381dd1230d1_08dadded-e4ce-4be6-8ff9-0935033d8887.jpg"
        },
        {
          id: "302",
          name: "Paneer Royale Wrap",
          price: 129,
          description: "Cheese-filled potato bites.",
          imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/28/0c99f01d-ed64-4c03-b689-b4559ad8c1a2_c1efd372-6fdb-427d-956e-dfd762138f2b.jpg"
        },
        {
          id: "303",
          name: "Veg Pizza Puff",
          price: 149,
          description: "Crispy savoury pastry with a filling of tomato sauce with corn, carrots, bell peppers, peas and mozzarella.",
          imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/ee5f25e0-5f74-4daf-908a-38f6c8c23f14_35543521-018a-41fc-b967-92858b42c608.jpg"
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
          imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/4/c9494d62-a7f7-4976-9d1f-df89dd26b183_6853c1b4-f67d-42ba-a02e-076d9bfbc5a4.jpg"
        },
        {
          id: "402",
          name: "Chocolate Shake",
          price: 129,
          description: "Creamy chocolate thick shake.",
          imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/cddbd1f0-c2fc-4af3-a108-b482cc0027e2_0564277b-594b-4aa9-a7cd-6796803092fc.jpg"
        },
        {
          id: "403",
          name: "Cold Coffee",
          price: 119,
          description: "Iced coffee with sweet milk cream.",
          imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/cb0437d2-713a-4f0a-86e0-d4c09522fb47_4c9ccd82-0b11-4103-a334-a9ddea879c49.jpg"
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
          imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/0562e11f-f0c2-41c0-95c9-cc27a981b0aa_836f2ab2-d019-46d3-9d33-1a2450c653f0.jpg"
        },
        {
          id: "502",
          name: "Sundae Cup",
          price: 99,
          description: "Vanilla ice cream topped with chocolate sauce.",
          imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/7/17/a645e88a-c645-4526-a2ad-ba7efcbf8fbd_60a3bced-21d8-47fd-a179-75487aece375.png"
        },
        {
          id: "503",
          name: "Choco-Lava Cup",
          price: 149,
          description: "Melty Chocolate Filled In Cupcake.",
          imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/648dcd9f-1b47-4186-ab21-309aec43b5ce_63287661-1294-4538-862e-a82d0069d503.jpg"
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
          imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/11/20/e1b67656-a09d-4385-a207-05d3c801736e_315b2548-137c-4c4f-836c-3fa4704979d7.jpg"
        },
        {
          id: "602",
          name: "Whopper Meal",
          price: 299,
          description: "Whopper + fries + drink.",
          imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/11/20/66fb90b0-752c-4528-b258-0488d2ef80e7_7dae9f2a-1d45-4a05-8843-4c8e62477a11.jpg"
        },
        {
          id: "603",
          name: "Double Patty Meal",
          price: 349,
          description: "Double patty burger + fries + drink.",
          imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/11/20/966239d4-53a0-4c02-b7db-e612aac1cfc9_2b749c0c-813c-4dbb-9137-8a92570d4ccc.jpg"
        },
         {
          id: "604",
          name: "Paneer Whopper Deluxe.",
          price: 349,
          description: "Reg. Size premium glaze bun with 7 layers of taste with Crunchy Paneer patty",
          imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/7/5/2192c3e7-7351-451a-8d6f-16cb27df212a_89f44cc6-1325-4715-8245-3cc87b38bdf8.jpg"
        },
        {
          id: "605",
          name: "Veg Puff Meal.",
          price: 349,
          description: "Veg Puff + fries + drink.",
          imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/23/35b029f1-b617-42b0-a742-37d4b2047ff4_66f74e81-91b2-4189-9f2e-da21e342fab2.jpg"
        }
      ],
    },
  ],
};
