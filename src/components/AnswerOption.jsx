import React from 'react';
import { motion } from 'framer-motion';

const AnswerOption = ({ option, isSelected, onSelect, isCorrect, showResult }) => {
  // Enhanced styling logic
  const getBackgroundColor = () => {
    if (showResult) {
      if (isCorrect) return 'bg-green-50 border-green-400'; // Correct answer
      if (isSelected && !isCorrect) return 'bg-red-50 border-red-400'; // Wrong selected answer
      return 'bg-white border-gray-200'; // Other options
    }
    return isSelected ? 'bg-blue-50 border-blue-400' : 'bg-white border-gray-200';
  };

  const getTextColor = () => {
    if (showResult) {
      if (isCorrect) return 'text-green-700 font-semibold'; // Correct answer
      if (isSelected && !isCorrect) return 'text-red-700'; // Wrong selected answer
      return 'text-gray-500'; // Other options
    }
    return isSelected ? 'text-blue-700' : 'text-gray-700';
  };

  return (
    <motion.div
      whileHover={{ scale: !showResult ? 1.02 : 1 }} // Disable hover effect when showing results
      whileTap={{ scale: !showResult ? 0.98 : 1 }} // Disable tap effect when showing results
      className={`p-4 border-2 rounded-lg transition-all ${getBackgroundColor()} ${getTextColor()} ${
        !showResult ? 'cursor-pointer' : 'cursor-default'
      }`}
      onClick={!showResult ? onSelect : undefined} // Disable click when showing results
    >
      <div className="flex items-center">
        <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center 
          ${showResult && isCorrect ? 'border-green-500 bg-green-500' : 
            isSelected ? 'border-blue-500 bg-blue-500' : 
            'border-gray-300'}`}>
          {(isSelected || (showResult && isCorrect)) && (
            <div className="w-2 h-2 rounded-full bg-white"></div>
          )}
        </div>
        <span className="text-lg">{option}</span>
      </div>
    </motion.div>
  );
};

export default AnswerOption;