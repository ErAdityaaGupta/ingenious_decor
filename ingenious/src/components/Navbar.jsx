// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.webp"; // Make sure to replace with your actual logo path

// const Navbar = () => {
//   return (
//     <nav className="flex items-center justify-between px-6 py-4 bg-lightcream text-black">
//       {/* Logo */}
//       <div className="flex items-center">
//         <img
//           src={logo}
//           alt="Company Logo"
//           className="h-16 w-custom-logo mr-3"
//           // className="h-28 w-custom-logo2 mr-3"
//         />
//       </div>

//       {/* Navigation Links */}
//       <ul className="flex space-x-9 ">
//         <li>
//           <Link to="/" className="navbar-text">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/portfolio" className="navbar-text">
//             Portfolio
//           </Link>
//         </li>
//         <li>
//           <Link to="/process" className="navbar-text">
//             Our Process
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className="navbar-text">
//             Contact Us
//           </Link>
//         </li>
//         {/* Add more links as needed */}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold">Ingenious Decor</div>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
            <a href="#home" className="block px-3 py-2 text-gray-700">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
