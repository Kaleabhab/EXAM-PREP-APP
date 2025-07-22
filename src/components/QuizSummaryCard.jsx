import React from 'react';
import { motion } from 'framer-motion';

const QuizSummaryCard = ({ title, score, total, timeTaken, onRetry }) => {
  const percentage = Math.round((score / total) * 100);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto text-center"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
        <div 
          className={`h-4 rounded-full ${percentage >= 70 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-4xl font-bold mb-2">
        <span className="text-blue-600">{score}</span>
        <span className="text-gray-400">/{total}</span>
      </p>
      <p className="text-gray-600 mb-6">{percentage}% Correct</p>
      {timeTaken && (
        <p className="text-gray-500 mb-6">Time taken: {timeTaken} seconds</p>
      )}
      <button
        onClick={onRetry}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Try Again
      </button>
    </motion.div>
  );
};

export default QuizSummaryCard;