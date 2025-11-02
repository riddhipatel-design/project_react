import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State for restaurant list
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  // Function to filter top-rated restaurants
 // const handleFilter = () => {
   // const filteredList = listOfRestaurant.filter((res) => res.rating > 4);
  //  setListOfRestaurant(filteredList);
 // };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.rating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
