import React from "react";
import { Link } from "react-router-dom";

export default function CategoryButtons() {
  const categories = [
    { name: "electronics", icon: "📱", color: "bg-blue-50 hover:bg-blue-100 text-blue-700" },
    { name: "books", icon: "📚", color: "bg-green-50 hover:bg-green-100 text-green-700" },
    { name: "clothes", icon: "👕", color: "bg-amber-50 hover:bg-amber-100 text-amber-700" }
  ];

  return (
    <div id="categories" className="max-w-7xl mx-auto px-6 my-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Browse by Category</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {categories.map((cat) => (
          <Link key={cat.name} to={`/category/${cat.name}`}>
            <div className={`px-8 py-4 rounded-xl ${cat.color} font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-3`}>
              <span className="text-2xl">{cat.icon}</span>
              <span>{cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
