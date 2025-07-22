import React from 'react';
import { motion } from 'framer-motion';

const AnswerOption = ({ option, isSelected, onSelect, isCorrect, showResult }) => {
  const getBackgroundColor = () => {
    if (!showResult) return isSelected ? 'bg-blue-100 border-blue-400' : 'bg-white';
    if (isCorrect) return 'bg-green-100 border-green-400';
    if (isSelected && !isCorrect) return 'bg-red-100 border-red-400';
    return 'bg-white';
  };

  const getTextColor = () => {
    if (!showResult) return 'text-gray-800';
    if (isCorrect) return 'text-green-800';
    if (isSelected && !isCorrect) return 'text-red-800';
    return 'text-gray-500';
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${getBackgroundColor()} ${getTextColor()}`}
      onClick={onSelect}
    >
      <div className="flex items-center">
        <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center 
          ${isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
          {isSelected && <div className="w-2 h-2 rounded-full bg-white"></div>}
        </div>
        <span className="text-lg">{option}</span>
      </div>
    </motion.div>
  );
};

export default AnswerOption;