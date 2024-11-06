// SimpleNavbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#000000] p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-semibold">
            Aurora
        </Link>

        {/* Burger Icon */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">
            All
          </Link>
          <Link to="/favourites" className="text-white hover:text-gray-200">
            Favourites
          </Link>
          <Link to="/search" className="text-white hover:text-gray-200">
            Search
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link to="/" className="block text-white hover:text-gray-200" onClick={() => setIsOpen(false)}>
            All
          </Link>
          <Link to="/favourites" className="block text-white hover:text-gray-200" onClick={() => setIsOpen(false)}>
            Favourites
          </Link>
          <Link to="/search" className="block text-white hover:text-gray-200" onClick={() => setIsOpen(false)}>
            Search
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;