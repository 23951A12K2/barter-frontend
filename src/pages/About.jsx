export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">About BarterHub</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            The Community Barter System helps users exchange electronics, books, and clothes
            with others in their neighborhood. It's a sustainable way to reuse valuable items,
            reduce waste, and build a connected community.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold text-lg mb-2">Eco-Friendly</h3>
              <p className="text-gray-600 text-sm">Reduce waste by giving items a second life</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold text-lg mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Connect with neighbors and build relationships</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-lg mb-2">Save Money</h3>
              <p className="text-gray-600 text-sm">Trade without spending any money</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
