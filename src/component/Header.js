import { Logo_url } from "../utils/constant.js";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus.js";


const Header = () => {
    const [btnName, setBtnName] = useState ("Login");

    const onlineStatus = useOnlineStatus();

  return (
    <div className="header bg-amber-50 shadow">
      <div className="logo-container">
        <img
          className="logo"
          src={ Logo_url }
          alt="App Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status: {onlineStatus? "🟢" : "🔴" }
          </li>
          <li><Link to= "/">Home</Link></li>
          <li><Link to= "/about">About Us</Link></li>
          <li><Link to= "/contact">Contact Us</Link></li>
          <li><Link to= "/grocery">Grocery</Link></li>
          <li>Cart</li>
          <li><button className="login-btn" onClick={() => 
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
          }>
            {btnName}
          </button> </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;