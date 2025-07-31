import React from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiAward, FiBook, FiBarChart2, FiCheckCircle, FiUsers } from 'react-icons/fi';

const HeroSection = () => {
    return (
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
    );
};

export default HeroSection;