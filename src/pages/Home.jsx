import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Mock data for featured courses/quizzes
  const featuredItems = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      category: "Programming",
      progress: 75,
      emoji: "👨‍💻"
    },
    {
      id: 2,
      title: "History Masterclass",
      category: "Humanities",
      progress: 30,
      emoji: "🏛️"
    },
    {
      id: 3,
      title: "Data Science Basics",
      category: "Science",
      progress: 10,
      emoji: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              <span className="block">Learn Without</span>
              <span className="block text-yellow-300">Limits</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-blue-100">
              The smartest way to study with interactive courses, quizzes, and personalized learning paths.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/register"
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Start Learning Free
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/quizzes"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-gray-900 transform hover:scale-105 flex items-center justify-center"
              >
                Explore Quizzes
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 origin-top-left"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600">10K+</div>
              <div className="mt-2 text-gray-600">Active Learners</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-600">500+</div>
              <div className="mt-2 text-gray-600">Courses</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600">1M+</div>
              <div className="mt-2 text-gray-600">Questions Solved</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600">95%</div>
              <div className="mt-2 text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Transform Your Learning Experience
          </h2>
          <p className="text-xl text-gray-600">
            Smart tools designed to help you learn faster and remember longer.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Adaptive Quizzes</h3>
              <p className="text-gray-600">
                Our AI adjusts question difficulty based on your performance for optimal learning.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed Analytics</h3>
              <p className="text-gray-600">
                Track your progress with beautiful charts and actionable insights.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Spaced Repetition</h3>
              <p className="text-gray-600">
                Our system reminds you to review material at optimal intervals for better retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Progress Section */}
      <section className="bg-gray-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Continue Your Learning Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pick up where you left off or discover new challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <div key={item.id} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition duration-300">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.category}</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                  <div 
                    className="bg-yellow-400 h-2.5 rounded-full" 
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-300">{item.progress}% complete</p>
                <button className="mt-4 text-yellow-400 hover:text-yellow-300 font-medium flex items-center">
                  Continue
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Ready to transform your learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students achieving their goals with our platform.
          </p>
          <Link
            to="/register"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;