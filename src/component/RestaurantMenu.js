import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { Menu_API } from "../utils/constant";
import { mockRestaurantMenu } from "../utils/mockData";
import { mockMenu } from "../utils/mockMenu";
import MenuAccordion from "./MenuAccordion";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const RestaurantMenu = () => {
  const [resinfo, setResInfo] = useState(null);

  const [openIndex, setOpenIndex] = useState(null);

  const { resId } = useParams();

 const fetchRestaurantInfo = async () => {
  const data = await fetch(
    "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0120338&lng=72.51075399999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();

  const cardWithRestaurants = json?.data?.cards?.find(
    (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );

  const list =
    cardWithRestaurants?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || [];

  const selectedRestaurant = list.find(
    (res) => res.info.id === resId
  );

  setResInfo(selectedRestaurant?.info);
};

useEffect(() => {
  fetchRestaurantInfo();
}, [resId]);

  if (resinfo === null) return <Shimmer />;

  // destructure restaurant info from mock data
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    externalRatings,
    locality,
  } = resinfo;

  

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
        <h3 className="my-2 font-medium">⏱ {resinfo?.sla.deliveryTime} mins</h3>
        <h4 className="my-2 font-medium">
          Location: {locality}
        </h4>
       
      </div>
      <div className="my-3 text-2xl from-neutral-700 font-semibold flex justify-center">
    <h2>Menu</h2><MdOutlineRestaurantMenu className="text-3xl from-neutral-700 font-semibold pt-2"/>
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
