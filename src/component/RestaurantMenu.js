import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { Menu_API } from "../utils/constant";
import { mockRestaurantMenu } from "../utils/mockData";
import { mockMenu } from "../utils/mockMenu";
import MenuAccordion from "./MenuAccordion";

const RestaurantMenu = () => {
  const [resinfo, setResInfo] = useState(null);

  const [openIndex, setOpenIndex] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    const restaurant = mockRestaurantMenu().find(
      (res) => res.restaurant.id === resId
    );

    setResInfo(restaurant);
  }, [resId]);

  if (resinfo === null) return <Shimmer />;

  // destructure restaurant info from mock data
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    address,
    locality,
  } = resinfo.restaurant;

  // get the menu array
  const menuItems = resinfo.menu;

  //Accordion
   const { categories } = mockMenu;
  


  return (
    <div className="menu mx-auto mt-5 w-6/12">
      <div className="p-4">
        <h1 className="font-bold my-2 text-2xl">{name}</h1>
      </div>
      <div className="border border-gray-100 rounded-2xl shadow-gray-200 shadow-2xl p-4">
        <h3 className="font-semibold text-lg/7">
          ⭐{avgRating}
          <span className="mx-4"></span>• {costForTwo}
        </h3>
        <h3 className="my-2 text-amber-800 font-medium">
          {cuisines.join(", ")}
        </h3>
        <h3 className="my-2 font-medium">⏱ {deliveryTime}</h3>
        <h4 className="my-2 font-medium">
          Location: {locality}, {address.city}
        </h4>
        <h2>Menu</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.name} - {"₹"}
              {item.price}
            </li>
          ))}
        </ul>
      </div>

      {categories.map((category, index) => (
        <MenuAccordion
          key={category.title}
          title={category.title}
          items={category.itemCards}
         showItems={index === openIndex} // this for showitems (accordion body) when accordion is open
            setOpenIndex ={() => setOpenIndex (openIndex === index ? null : index)} // this for open and close accordion on click thatswhy it passed in hadelclicl
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
