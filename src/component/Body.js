import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State for restaurant list
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0120338&lng=72.51075399999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    //  Dynamically find the card that actually contains restaurants
    const cardWithRestaurants = json?.data?.cards?.find(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const list =
      cardWithRestaurants?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    console.log(list);

    setListOfRestaurant(list);
    setFilteredRestaurent(list);
  };

const onlineStatus = useOnlineStatus();
if (onlineStatus === false) return <h1>Looks like you are offline!! Please check your internet connection.</h1>


  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body flex flex-col items-center w-full">
      <div className="filter flex items-center gap-2 mb-6">
        <div className="search flex items-center gap-2">
          <input
            type="text"
            className="border border-solid border-black px-2 py-1 rounded w-72 hover:border-blue-500"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
            onClick={() => {
              //filter the restaurent cards and update the UI
              //searchtext
              const filteredRestaurent = listOfRestaurant.filter(
                (res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  res.info.cuisines
                    .join(" ")
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setFilteredRestaurent(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurent(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container justify-center gap-6 max-w-[1400px] mx-auto">
        {filteredRestaurent.map((restaurant) => (
          <Link
            className="link-wrapper"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
