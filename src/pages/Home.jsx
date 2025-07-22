// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow">
            Welcome to <span className="text-yellow-300">EduPlatform</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Unlock your potential with interactive quizzes, courses, and progress tracking.
          </p>
          <Link
            to="/quizzes"
            className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-full transition duration-300 shadow-lg hover:scale-105 inline-block"
          >
            🚀 Get Started
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose <span className="text-blue-600">EduPlatform</span>?
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Whether you're a student or lifelong learner, EduPlatform offers tools to help you grow, test
            your knowledge, and track your progress—all in one place.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div className="text-blue-600 text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-2">Interactive Quizzes</h3>
              <p className="text-gray-600">
                Test yourself in real-time with diverse question types and instant feedback.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div className="text-indigo-600 text-3xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">Course Library</h3>
              <p className="text-gray-600">
                Explore topics at your pace with structured, easy-to-follow lessons and resources.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div className="text-green-600 text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600">
                Stay motivated by monitoring your learning journey, achievements, and scores.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;