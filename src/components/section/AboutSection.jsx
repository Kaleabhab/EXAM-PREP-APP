import React from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiAward, FiBook, FiBarChart2, FiCheckCircle, FiUsers } from 'react-icons/fi';

const About = () => {
    const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
    return (
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
    );
};

export default About;