import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp"; // Make sure to replace with your actual logo path

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-lightcream text-black">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Company Logo"
          className="h-36 w-custom-logo mr-3"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-9 ">
        <li>
          <Link to="/" className="navbar-text">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-text">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" className="navbar-text">
            Services
          </Link>
        </li>
        <li>
          <Link to="/services" className="navbar-text">
            Contact Us
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
