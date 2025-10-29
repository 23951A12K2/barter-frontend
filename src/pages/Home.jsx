import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import CategoryButtons from "../components/CategoryButtons";
import ProductGrid from "../components/ProductGrid";
import { fetchAllProducts } from "../api/api";

export default function Home() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchAllProducts()
      .then((data) => {
        const itemsArray = Array.isArray(data) ? data : [];
        setItems(itemsArray);
        setFilteredItems(itemsArray);
      })
      .catch((err) => {
        console.error("fetchAllProducts error:", err);
        setItems([]);
        setFilteredItems([]);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let filtered = items;

    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCondition !== "all") {
      filtered = filtered.filter((item) => item.condition === selectedCondition);
    }

    setFilteredItems(filtered);
  }, [searchTerm, selectedCondition, items]);

  return (
    <>
      <Hero />
      <CategoryButtons />
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Products</h2>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search by name, description, or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition shadow-sm"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition shadow-sm bg-white"
              >
                <option value="all">All Conditions</option>
                <option value="New">New</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Used">Used</option>
              </select>
            </div>

            {(searchTerm || selectedCondition !== "all") && (
              <div className="flex items-center gap-2 text-sm text-gray-600 animate-fadeIn">
                <span>Showing {filteredItems.length} of {items.length} items</span>
                {(searchTerm || selectedCondition !== "all") && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCondition("all");
                    }}
                    className="text-teal-600 hover:text-teal-700 font-medium"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xl text-gray-600">No items found</p>
            <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
          </div>
        ) : (
          <ProductGrid items={filteredItems} />
        )}
      </section>
    </>
  );
}
