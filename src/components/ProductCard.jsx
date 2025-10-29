import React from "react";

export default function ProductCard({ item }) {
  const getConditionColor = (condition) => {
    switch (condition) {
      case "New":
        return "bg-green-100 text-green-700";
      case "Good":
        return "bg-blue-100 text-blue-700";
      case "Fair":
        return "bg-yellow-100 text-yellow-700";
      case "Used":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "electronics":
        return "bg-blue-100 text-blue-700";
      case "books":
        return "bg-green-100 text-green-700";
      case "clothes":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1 animate-scaleIn">
      <div className="w-full h-56 overflow-hidden bg-gray-100 relative">
        <img
          src={item.image_url || "/assets/placeholder.jpg"}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getConditionColor(item.condition)} shadow-sm`}>
            {item.condition}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getCategoryColor(item.category)} shadow-sm`}>
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </span>
          <span className="text-xs text-gray-400">Available</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-teal-600 transition-colors">{item.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">{item.description}</p>
        <button className="w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
          View Details
        </button>
      </div>
    </div>
  );
}
