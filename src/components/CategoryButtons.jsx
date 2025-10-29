import React from "react";
import { Link } from "react-router-dom";

export default function CategoryButtons() {
  const categories = [
    { name: "electronics", icon: "📱", color: "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200", description: "Phones, laptops & more" },
    { name: "books", icon: "📚", color: "bg-green-50 hover:bg-green-100 text-green-700 border-green-200", description: "Novels, textbooks & comics" },
    { name: "clothes", icon: "👕", color: "bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200", description: "Fashion & accessories" }
  ];

  return (
    <div id="categories" className="max-w-7xl mx-auto px-6 my-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Browse by Category</h2>
        <p className="text-gray-600 text-lg">Discover items across different categories</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <Link key={cat.name} to={`/category/${cat.name}`}>
            <div
              className={`px-8 py-6 rounded-2xl ${cat.color} border-2 font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scaleIn`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl">{cat.icon}</span>
                <div>
                  <span className="text-xl font-bold block">{cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}</span>
                  <span className="text-sm opacity-75">{cat.description}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
