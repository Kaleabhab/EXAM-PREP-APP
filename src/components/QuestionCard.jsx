import React from 'react';
import { motion } from 'framer-motion';
import AnswerOption from './AnswerOption';

const QuestionCard = ({ 
  question, 
  options, 
  selectedOption, 
  onSelect, 
  currentQuestion, 
  totalQuestions,
  correctAnswer,
  showResult
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md p-6"
    >
      <div className="mb-2 text-sm font-medium text-blue-600">
        Question {currentQuestion} of {totalQuestions}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-6">{question}</h3>
      <div className="space-y-3">
        {options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            isSelected={selectedOption === option}
            onSelect={() => onSelect(option)}
            isCorrect={correctAnswer === option}
            showResult={showResult}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard;