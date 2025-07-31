import React from "react";
//import { motion } from 'framer-motion';
//import { Link } from 'react-router-dom';
import { FiArrowRight, FiAward, FiBook, FiBarChart2, FiCheckCircle, FiUsers } from 'react-icons/fi';


const Testimonial = () => {
    return (
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
    );
};


export default Testimonial;