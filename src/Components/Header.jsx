import React from 'react';

const Header = () => (
  <header className="bg-gray-900 text-white p-4">
    <nav className="container mx-auto flex justify-between">
      <div className="text-2xl font-bold">Cyber Tetra</div>
      <ul className="flex space-x-4">
        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
        <li><a href="#services" className="hover:text-gray-400">Services</a></li>
        <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact Us</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
