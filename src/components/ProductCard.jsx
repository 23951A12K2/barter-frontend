import React from "react";

export default function ProductCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className="w-full h-56 overflow-hidden bg-gray-100">
        <img
          src={item.image_url || "/assets/placeholder.jpg"}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
            {item.category}
          </span>
          <span className="text-xs font-medium text-gray-500">{item.condition}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{item.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{item.description}</p>
        <button className="w-full py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  );
}
