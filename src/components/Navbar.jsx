import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b py-4 shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold text-teal-600 hover:text-teal-700 transition-all duration-300 hover:scale-105">
          BarterHub
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link
            to="/"
            className={`hover:text-teal-600 transition-colors relative group ${isActive('/') ? 'text-teal-600' : ''}`}
          >
            Home
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-teal-600 transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link
            to="/category/electronics"
            className={`hover:text-teal-600 transition-colors relative group ${location.pathname.startsWith('/category') ? 'text-teal-600' : ''}`}
          >
            Categories
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-teal-600 transition-all duration-300 ${location.pathname.startsWith('/category') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link
            to="/about"
            className={`hover:text-teal-600 transition-colors relative group ${isActive('/about') ? 'text-teal-600' : ''}`}
          >
            About
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-teal-600 transition-all duration-300 ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/add"
            className="bg-teal-600 text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-teal-700 hover:shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Add Item
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-teal-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 px-6 pb-4 space-y-3 animate-fadeIn">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 px-4 rounded-lg transition-colors ${isActive('/') ? 'bg-teal-50 text-teal-600' : 'hover:bg-gray-50'}`}
          >
            Home
          </Link>
          <Link
            to="/category/electronics"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 px-4 rounded-lg transition-colors ${location.pathname.startsWith('/category') ? 'bg-teal-50 text-teal-600' : 'hover:bg-gray-50'}`}
          >
            Categories
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 px-4 rounded-lg transition-colors ${isActive('/about') ? 'bg-teal-50 text-teal-600' : 'hover:bg-gray-50'}`}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
