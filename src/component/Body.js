import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

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
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );

  const RestaurantCardWithDiscount = withDiscountLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body flex flex-col items-center w-full py-7 min-h-screen px-4">
      <div className="mb-6 text-center">
  <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
    Order food & groceries
  </h1>
  <p className="text-gray-500 mt-1">
    Discover best restaurants with TM.
  </p>
</div>
  <div className="filter flex flex-wrap items-center gap-3 mb-6">

  <div className="search flex items-center gap-2">
    <input
      type="text"
      data-testid = "searchInput"
      className="
        px-3 py-2 w-72 rounded-lg
        border border-gray-400
        focus:border-sky-400 focus:ring-1 focus:ring-sky-300
        outline-none
      "
      placeholder="Search restaurants or cuisines"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />

    <button
      className="
        px-4 py-2 rounded-lg
        bg-[#0e405b] text-white
        hover:bg-sky-600
        transition
      "
      onClick={() => {
        const filteredRestaurent = listOfRestaurant.filter(
          (res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
            res.info.cuisines.join(" ").toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurent(filteredRestaurent);
      }}
    >
      Search
    </button>
  </div>

  <button
    className="
      px-4 py-2 rounded-lg
      border-2 border-gray-300
      text-gray-700
      hover:bg-gray-100
      transition
    "
    onClick={() => {
      const filteredList = listOfRestaurant.filter(
        (res) => res.info.avgRating > 4.3
      );
      setFilteredRestaurent(filteredList);
    }}
  >
    Top Rated
  </button>

  { /* <div className="flex items-center gap-2">
    <label className="text-gray-600">Username:</label>
    <input
      className="
        px-3 py-2 rounded-lg
        border border-gray-400
        focus:border-sky-400 focus:ring-1 focus:ring-sky-300
        outline-none
      "
      placeholder="Your name"
      value={loggedInUser}
      onChange={(e) => setUserName(e.target.value)}
    />
  </div> */}

</div>

      <div className="res-container justify-center gap-6 max-w-[1400px] mx-auto mt-6">
        {filteredRestaurent.map((restaurant) => (
          <Link
            className="link-wrapper"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info?.aggregatedDiscountInfoV3 ? (
              <RestaurantCardWithDiscount resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
