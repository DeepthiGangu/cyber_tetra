import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Cyber Tetra</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
