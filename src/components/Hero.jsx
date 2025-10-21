import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Trade Without Money,<br/>
            <span className="text-teal-600">Build Community</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-xl leading-relaxed">
            Connect with neighbors and discover great items to trade. From books to tools and electronics to handmade crafts — find what you need while sharing what you have.
          </p>
          <a href="#categories" className="inline-block mt-8">
            <button className="px-8 py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200">Start Browsing</button>
          </a>
        </div>

        <div className="lg:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/community-hero.jpg"
              alt="community"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
