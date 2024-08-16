/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from "react";
import { NavLink } from "react-router-dom";

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold">
              Logo
            </NavLink>
          </div>
          {/* Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              activeClassName="text-gray-300"
              className="hover:text-gray-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              activeClassName="text-gray-300"
              className="hover:text-gray-300"
            >
              All Products
            </NavLink>
            <NavLink
              to="/contacts"
              activeClassName="text-gray-300"
              className="hover:text-gray-300"
            >
              Contacts
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="text-gray-300"
              className="hover:text-gray-300"
            >
              About
            </NavLink>
          </div>
          {/* SignIn/SignOut Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
              Sign In
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Sign Out
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden">
          <NavLink
            to="/"
            activeClassName="text-gray-300"
            className="block px-4 py-2 text-sm hover:bg-gray-700"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            activeClassName="text-gray-300"
            className="block px-4 py-2 text-sm hover:bg-gray-700"
          >
            All Products
          </NavLink>
          <NavLink
            to="/contacts"
            activeClassName="text-gray-300"
            className="block px-4 py-2 text-sm hover:bg-gray-700"
          >
            Contacts
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-gray-300"
            className="block px-4 py-2 text-sm hover:bg-gray-700"
          >
            About
          </NavLink>
          <div className="border-t border-gray-700"></div>
          <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700">
            Sign In
          </button>
          <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700">
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default navbar;
