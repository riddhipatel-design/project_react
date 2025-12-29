import { useState, useContext, useRef, useEffect  } from "react";
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { LiaTrademarkSolid } from "react-icons/lia";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { GrCart } from "react-icons/gr";
import { GrStatusGoodSmall } from "react-icons/gr";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart?.items || []);

  // Calculate total quantity
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  // Ref for the menu
  const menuRef = useRef();

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <header className="sticky top-0 z-50 bg-[#f6f7f2] shadow-md border-b border-black/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* LOGO */}
        <Link
          to="/"
          aria-label="Go to homepage"
          className="flex items-center gap-1 py-4 hover:scale-105"
        >
          <IoFastFoodOutline className="text-4xl text-amber-600" />
          <LiaTrademarkSolid className="text-3xl text-amber-700 -mt-3" />
          <span className="sr-only">TM Food</span>
        </Link>

        {/* Hamburger button */}
        <button
          className="md:hidden text-2xl"
          aria-controls="main-navigation"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* NAV */}
        <nav
         ref={menuRef}
          id="main-navigation"
          className={`
    absolute md:static top-full left-0 w-full md:w-auto
    bg-[#f6f7f2] md:bg-transparent
    ${isMenuOpen ? "block" : "hidden"}
    md:block transition-all duration-200
  `}>
          <ul className="flex items-center gap-6 text-gray-700 font-medium flex-col md:flex-row md:gap-6 px-6 md:px-0 py-4 md:py-0">
            <li className="flex items-center relative group">
         
  <span
    role="status"
    aria-label={onlineStatus ? "Online" : "Offline"}
    tabIndex={0}
    className="inline-flex items-center"
  >
    <GrStatusGoodSmall
      className={onlineStatus ? "text-green-600" : "text-red-600"}
    />
  </span>

  <span
    role="tooltip"
    className="
      absolute left-1/2 -translate-x-1/2 top-full mt-1
      whitespace-nowrap text-xs text-white bg-black
      px-2 py-1 rounded
      opacity-0 group-hover:opacity-100
      group-focus-within:opacity-100
      transition
    "
  >
    {onlineStatus ? "Online" : "Offline"}
  </span>


            </li>
            <li>
              <Link
                className="hover:text-amber-600"
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-amber-600" to="/offers">
                Offers
              </Link>
            </li>
            <li>
              <Link className="hover:text-amber-600" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:text-amber-600" to="/grocery">
                Grocery
              </Link>
            </li>

            <li className="relative">
              <Link to="/cart" aria-label="View cart">
                <GrCart className="text-2xl hover:text-amber-600 font-bold" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 flex justify-center items-center rounded-full font-bold text-xs text-white bg-[#CF112C] w-5 h-5">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>

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

            {/* <li className="text-sm text-gray-500">{loggedInUser}</li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
