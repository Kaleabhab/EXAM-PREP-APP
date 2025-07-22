import React from 'react';
import { motion } from 'framer-motion';

const colorMap = {
  Beginner: 'from-green-400 to-blue-400',
  Intermediate: 'from-purple-400 to-pink-400',
  Advanced: 'from-orange-400 to-red-400'
};

const iconColors = {
  Beginner: 'text-blue-500',
  Intermediate: 'text-purple-500',
  Advanced: 'text-orange-500'
};

const SubjectCard = ({ title, description, icon, level, onClick }) => {
  return (
    <motion.div 
      className={`p-6 rounded-xl cursor-pointer bg-gradient-to-br ${colorMap[level]} shadow-lg hover:shadow-xl transition-all duration-300`}
      onClick={onClick}
      whileHover={{ 
        y: -8,
        scale: 1.02
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="backdrop-blur-sm bg-white/20 p-4 rounded-lg">
        <div className="flex items-start gap-4">
          <div className={`text-4xl ${iconColors[level]} p-3 rounded-full bg-white/20`}>
            {icon}
          </div>
          <div>
            <div className="flex justify-between items-start">
              <h4 className="font-bold text-xl text-white">{title}</h4>
              <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white">
                {level}
              </span>
            </div>
            <p className="text-white/90 text-sm mt-2">{description}</p>
          </div>
        </div>
        
        <motion.div 
          className="mt-4 flex justify-between items-center"
          whileHover={{ x: 2 }}
        >
          <span className="text-white text-sm font-medium">Start Learning</span>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SubjectCard;