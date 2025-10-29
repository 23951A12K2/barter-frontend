import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-10 relative z-10">
        <div className="lg:w-1/2 animate-slideIn">
          <div className="inline-block mb-4">
            <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
              Community Trading Platform
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            Trade Without Money,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Build Community</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg lg:text-xl max-w-xl leading-relaxed">
            Connect with neighbors and discover great items to trade. From books to tools and electronics to handmade crafts — find what you need while sharing what you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="#categories" className="inline-block">
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                Start Browsing
              </button>
            </a>
            <a href="/add" className="inline-block">
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold transition-all duration-200 transform hover:scale-105">
                List an Item
              </button>
            </a>
          </div>
          <div className="flex items-center gap-8 mt-10">
            <div>
              <p className="text-3xl font-bold text-gray-900">500+</p>
              <p className="text-sm text-gray-600">Active Users</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <p className="text-3xl font-bold text-gray-900">1000+</p>
              <p className="text-sm text-gray-600">Items Traded</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <p className="text-3xl font-bold text-gray-900">95%</p>
              <p className="text-sm text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 animate-scaleIn">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 hover:shadow-3xl">
            <img
              src="/assets/community-hero.jpg"
              alt="community"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
