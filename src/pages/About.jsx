export default function About() {
  const features = [
    {
      icon: "🌍",
      title: "Eco-Friendly",
      description: "Reduce waste by giving items a second life and contribute to a sustainable future"
    },
    {
      icon: "🤝",
      title: "Community",
      description: "Connect with neighbors, build relationships, and strengthen local bonds"
    },
    {
      icon: "💰",
      title: "Save Money",
      description: "Trade without spending any money and get what you need without the cost"
    },
    {
      icon: "🔄",
      title: "Circular Economy",
      description: "Participate in a circular economy where resources are reused and recycled"
    },
    {
      icon: "✨",
      title: "Easy to Use",
      description: "Simple interface makes listing and finding items quick and hassle-free"
    },
    {
      icon: "🔒",
      title: "Safe & Secure",
      description: "Trade with confidence in a trusted community marketplace"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-blue-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 animate-fadeIn">
          <div className="inline-block mb-4">
            <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
              Our Mission
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">BarterHub</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 animate-scaleIn">
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 text-center">
            The Community Barter System helps users exchange electronics, books, and clothes
            with others in their neighborhood. It's a sustainable way to reuse valuable items,
            reduce waste, and build a connected community.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
          <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4">How It Works</h3>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-white text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                <span className="pt-1">List items you want to trade</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                <span className="pt-1">Browse available items in your community</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                <span className="pt-1">Connect with neighbors to arrange trades</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</span>
                <span className="pt-1">Complete the trade and build community</span>
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Join Our Community</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Be part of a growing community that values sustainability, connection, and resourcefulness. Every trade makes a difference!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 rounded-full p-2">
                  <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <span className="text-gray-700">Active community members</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 rounded-full p-2">
                  <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Verified and safe trades</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 rounded-full p-2">
                  <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <span className="text-gray-700">Growing trade network</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
