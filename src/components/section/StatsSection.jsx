import React from "react";
import { motion } from 'framer-motion';
//import { Link } from 'react-router-dom';
//import { FiArrowRight, FiAward, FiBook, FiBarChart2, FiCheckCircle, FiUsers } from 'react-icons/fi';

const Stats = () => {
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
    );
};

export default Stats;