import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-b py-4 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold text-teal-600 hover:text-teal-700 transition-colors">BarterHub</Link>

        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
          <Link to="/category/electronics" className="hover:text-teal-600 transition-colors">Categories</Link>
          <Link to="/about" className="hover:text-teal-600 transition-colors">About</Link>
        </div>

        <div className="ml-4">
          <Link to="/add" className="bg-teal-600 text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-teal-700 hover:shadow-lg transition-all duration-200">Add Item</Link>
        </div>
      </div>
    </nav>
  );
}
