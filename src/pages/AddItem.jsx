import React, { useState } from "react";
import { uploadImage, createItem } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function AddItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("electronics");
  const [condition, setCondition] = useState("Good");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !file) {
      alert("Please provide name and an image file.");
      return;
    }

    try {
      setUploading(true);
      // 1) Upload the image file
      const uploadRes = await uploadImage(file); // returns { imageUrl }
      const imageUrl = uploadRes.imageUrl || uploadRes?.data?.imageUrl;
      if (!imageUrl) throw new Error("Upload did not return imageUrl");

      // 2) Create item
      const item = {
        name,
        description,
        category,
        condition,
        image_url: imageUrl
      };
      await createItem(item);

      alert("Item added successfully");
      navigate("/"); // go to home
    } catch (err) {
      console.error("AddItem error:", err);
      alert("Failed to add item. See console for details.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-12">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Add a New Item</h2>
          <p className="text-gray-600">Share items you'd like to trade with the community</p>
        </div>
        <form onSubmit={onSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
          <label className="block mb-5">
            <span className="text-sm font-semibold text-gray-700 mb-2 block">Item Name *</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border-gray-300 border px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              placeholder="e.g., iPhone 12, Harry Potter Collection"
            />
          </label>

          <label className="block mb-5">
            <span className="text-sm font-semibold text-gray-700 mb-2 block">Description</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-lg border-gray-300 border px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition min-h-32"
              placeholder="Describe your item in detail..."
            />
          </label>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700 mb-2 block">Category *</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg border-gray-300 border px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              >
                <option value="electronics">Electronics</option>
                <option value="books">Books</option>
                <option value="clothes">Clothes</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-gray-700 mb-2 block">Condition *</span>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-full rounded-lg border-gray-300 border px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              >
                <option>New</option>
                <option>Good</option>
                <option>Fair</option>
                <option>Used</option>
              </select>
            </label>
          </div>

          <label className="block mb-6">
            <span className="text-sm font-semibold text-gray-700 mb-2 block">Image *</span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full rounded-lg border-gray-300 border px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-teal-50 file:text-teal-700 file:font-semibold hover:file:bg-teal-100"
            />
          </label>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Add Item"}
            </button>
            <button
              type="button"
              onClick={() => { setName(""); setDescription(""); setFile(null); }}
              className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-lg transition"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
