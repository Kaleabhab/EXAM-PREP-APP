// pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiAward, FiBook, FiBarChart2, FiCheckCircle, FiUsers } from 'react-icons/fi';

const Home = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white py-28 px-6 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-blue-400 filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-indigo-500 filter blur-3xl"></div>
        </div>

    <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Welcome to <span className="text-yellow-300 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-400">EduPlatform</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto"
          >
            Master new skills with interactive learning experiences designed for measurable growth.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/quizzes"
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-gray-900 rounded-full shadow-2xl"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-300 to-yellow-400 transition-all duration-300 group-hover:from-yellow-400 group-hover:to-yellow-500"></span>
              <span className="absolute top-0 left-0 w-12 h-12 -mt-1 -ml-1 transition-all duration-200 bg-white opacity-10 rotate-45 group-hover:-translate-x-32 ease"></span>
              <span className="absolute top-0 right-0 w-12 h-12 -mt-1 -mr-1 transition-all duration-200 bg-white opacity-10 rotate-45 group-hover:translate-x-32 ease"></span>
              <span className="relative z-10 flex items-center">
                🚀 Get Started <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="text-center mb-16"
          >
            <motion.span variants={item} className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-600">
              Why Choose Us
            </motion.span>
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Learning Experience</span>
            </motion.h2>
            <motion.p variants={item} className="text-gray-600 text-lg max-w-3xl mx-auto">
              EduPlatform combines cutting-edge technology with proven educational methods to deliver exceptional learning outcomes.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div 
              variants={item}
              className="group relative bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-2xl"></div>
              <div className="text-blue-600 text-4xl mb-6 p-3 inline-flex items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors">
                <FiAward />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Quizzes</h3>
              <p className="text-gray-600 mb-6">
                Engage with adaptive quizzes featuring multiple question types, instant feedback, and detailed explanations.
              </p>
              <Link 
                to="/quizzes" 
                className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
              >
                Explore quizzes <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={item}
              className="group relative bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-2xl"></div>
              <div className="text-purple-600 text-4xl mb-6 p-3 inline-flex items-center justify-center rounded-xl bg-purple-50 group-hover:bg-purple-100 transition-colors">
                <FiBook />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Courses</h3>
              <p className="text-gray-600 mb-6">
                Access structured learning paths with video lessons, readings, and hands-on exercises across various subjects.
              </p>
              <Link 
                to="/courses" 
                className="inline-flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors"
              >
                Browse courses <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={item}
              className="group relative bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-t-2xl"></div>
              <div className="text-green-600 text-4xl mb-6 p-3 inline-flex items-center justify-center rounded-xl bg-green-50 group-hover:bg-green-100 transition-colors">
                <FiBarChart2 />
              </div>
              <h3 className="text-xl font-semibold mb-3">Progress Analytics</h3>
              <p className="text-gray-600 mb-6">
                Visualize your learning journey with detailed analytics, performance trends, and personalized recommendations.
              </p>
              <Link 
                to="/progress" 
                className="inline-flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors"
              >
                View analytics <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={item} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-200">Active Learners</div>
            </motion.div>
            <motion.div variants={item} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Courses & Quizzes</div>
            </motion.div>
            <motion.div variants={item} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Satisfaction Rate</div>
            </motion.div>
            <motion.div variants={item} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Learning Access</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-indigo-100 text-indigo-600">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-indigo-600">Learners Say</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Don't just take our word for it - hear from our community of successful learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4">
                  AS
                </div>
                <div>
                  <h4 className="font-semibold">Alex Smith</h4>
                  <p className="text-gray-500 text-sm">Web Developer</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "EduPlatform's JavaScript course completely transformed my coding skills. The interactive exercises made complex concepts easy to understand."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FiCheckCircle key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                  MJ
                </div>
                <div>
                  <h4 className="font-semibold">Maria Johnson</h4>
                  <p className="text-gray-500 text-sm">UX Designer</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The design courses are incredibly well-structured. I landed my dream job after completing just two courses!"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FiCheckCircle key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-4">
                  TP
                </div>
                <div>
                  <h4 className="font-semibold">Taylor Park</h4>
                  <p className="text-gray-500 text-sm">Student</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The quiz platform helped me ace my exams. Being able to track my progress and identify weak areas was game-changing."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FiCheckCircle key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;