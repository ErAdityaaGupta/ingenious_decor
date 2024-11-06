import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 text-center text-sm text-gray-700">
      <p>&copy; 2024 Ingenious Decor Aesthetic. All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="hover:text-gray-900">
          Facebook
        </a>
        <a href="#" className="hover:text-gray-900">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
