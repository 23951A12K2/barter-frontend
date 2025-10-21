import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { fetchProductsByCategory } from "../api/api";

export default function CategoryPage() {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!category) return;
    fetchProductsByCategory(category)
      .then((data) => setItems(Array.isArray(data) ? data : []))
      .catch((err) => {
        console.error("fetchProductsByCategory error:", err);
        setItems([]);
      });
  }, [category]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 capitalize mb-2">{category}</h2>
          <p className="text-gray-600">Browse available {category} for trade</p>
        </div>
      </div>
      <ProductGrid items={items} />
    </div>
  );
}
