// pages/Home.jsx
import React from 'react';
//import { motion } from 'framer-motion';
//import { Link } from 'react-router-dom';
//import { FiArrowRight, FiAward, FiBook, FiBarChart2, FiCheckCircle, FiUsers } from 'react-icons/fi';
import HeroSection from '../components/section/HeroSection';
import About from '../components/section/AboutSection';
import Stats from '../components/section/StatsSection';
import Testimonial from '../components/section/TestimonalisSection';


const Home = () => {

  
  return (
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 min-h-screen">

      
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <About />
      {/* Stats Section */}
      <Stats />

      {/* Testimonials Section */}
      <Testimonial />
    </div>
  );
};

export default Home;