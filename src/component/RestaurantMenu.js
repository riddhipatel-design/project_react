import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { Menu_API } from "../utils/constant";
import {mockRestaurantMenu} from "../utils/mockData"

const RestaurantMenu = () => {

    const [resinfo, setResInfo] = useState(null);

    const{resId} = useParams();

    //link is not fetching data
const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0120338&lng=72.51075399999999&restaurantId=842354&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    console.log(json);
}

useEffect(() => {
       const restaurant = mockRestaurantMenu().find(
      (res) => res.restaurant.id === resId
    );

    setResInfo(restaurant);
  }, [resId]);

if (resinfo === null) return <Shimmer />;

// destructure restaurant info from mock data
  const { name, cuisines, avgRating, deliveryTime, costForTwo, address, locality } =
    resinfo.restaurant;

  // get the menu array
  const menuItems = resinfo.menu;

  return (
        <div className="menu">
        <h1>{name}</h1>
        <h3>⭐{avgRating}</h3>
         <h3>{cuisines .join(", ")}</h3>
        <h3>{costForTwo}</h3>
        <h3>{deliveryTime}</h3>
      <h4>Location: {locality}, {address.city}
      </h4>
      <h2>Menu</h2>
        <ul>
            {menuItems.map((item) => (
                <li key={item.id}>{item.name} - {"₹"}{item.price}</li>
                ))}
           
        </ul>
        </div>
    )
}

export default RestaurantMenu;