import { Link, useLocation } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaPinterest, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/cart") return null;

  return (
    <footer className="bg-[#f0f0f5] border-t border-black/10 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-600">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <IoFastFoodOutline className="text-2xl text-amber-600" />
          <span className="font-medium text-gray-700">TM Food</span>
        </div>

        {/* Footer Navigation */}
        <nav aria-label="Footer information">
          <ul className="flex flex-wrap justify-center gap-4">

            {/* Clickable links */}
            <li>
              <Link to="/offers" className="hover:text-amber-600">
                Offers
              </Link>
            </li>
            <li>
              <Link to="/grocery" className="hover:text-amber-600">
                Grocery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-600">
                Contact
              </Link>
            </li>

            {/* Placeholder info labels */}
            <li className="text-gray-400 cursor-default" aria-hidden="true">
              Help & Support
            </li>
            <li className="text-gray-400 cursor-default" aria-hidden="true">
              Terms & Policies
            </li>
          </ul>
        </nav>

        {/* Social Icons (decorative) */}
        <div
          className="flex gap-3 text-gray-500"
          aria-label="Social media icons (not linked)"
        >
          <FaInstagram className="text-lg opacity-70" aria-hidden="true" />
          <FaFacebook className="text-lg opacity-70" aria-hidden="true" />
          <FaLinkedin className="text-lg opacity-70" aria-hidden="true" />
          <FaTwitter className="text-lg opacity-70" aria-hidden="true" />
          <FaPinterest className="text-lg opacity-70" aria-hidden="true" />
        </div>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500 text-center pb-4">
        © {new Date().getFullYear()} TM Food. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
