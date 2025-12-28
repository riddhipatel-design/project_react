import { IoFastFoodOutline } from "react-icons/io5";
import { LiaTrademarkSolid } from "react-icons/lia";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items)

 // Calculate total quantity
const totalItems = cartItems.reduce(
  (sum, item) => sum + item.quantity,
  0
);

  return (
  <header className="sticky top-0 z-50 bg-[#f6f7f2] shadow-md border-b border-black/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-1 py-4 hover:scale-105">
          <IoFastFoodOutline className="text-4xl text-amber-600" />
          <LiaTrademarkSolid className="text-3xl text-amber-700 -mt-3" />
        </Link>

        {/* NAV */}
        <nav>
          <ul className="flex items-center gap-6 text-gray-700 font-medium">
            <li>
              Status: {onlineStatus ? "🟢" : "🔴"}
            </li>

            <li>
              <Link className="hover:text-amber-600" to="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-amber-600" to="/about">About</Link>
            </li>
            <li>
              <Link className="hover:text-amber-600" to="/contact">Contact</Link>
            </li>
            <li>
              <Link className="hover:text-amber-600" to="/grocery">Grocery</Link>
            </li>

            <li className="relative">
              <Link to="/cart">
  <GrCart className="text-2xl hover:text-amber-600 font-bold" />
  {totalItems > 0 && (
    <span className="absolute -top-2 -right-2 flex justify-center items-center rounded-full font-bold text-xs text-white bg-[#CF112C] w-5 h-5">
      {totalItems}
    </span>
  )}</Link></li>

            <li>
              <button
                className="px-4 py-1.5 rounded-md bg-amber-600 text-white hover:bg-amber-700 transition"
                onClick={() =>
                  setBtnName(btnName === "Login" ? "Logout" : "Login")
                }
              >
                {btnName}
              </button>
            </li>

            <li className="text-sm text-gray-500">
              {loggedInUser}
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
