import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { Progress } from '@nextui-org/progress';
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
      transition={{ duration: 0.4, type: 'spring' }}
    >
      <Card className="w-full p-6 shadow-lg">
        <CardHeader className="flex flex-col items-start gap-2">
          <Progress 
            size="sm" 
            value={(currentQuestion/totalQuestions)*100} 
            classNames={{
              base: "w-full",
              track: "bg-default-200",
              indicator: "bg-gradient-to-r from-blue-500 to-purple-500"
            }}
          />
          <span className="text-sm font-medium text-blue-600">
            Question {currentQuestion} of {totalQuestions}
          </span>
        </CardHeader>
        
        <CardBody>
          <motion.h3 
            className="text-xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {question}
          </motion.h3>
          
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {options.map((option, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <AnswerOption
                  option={option}
                  isSelected={selectedOption === option}
                  onSelect={() => onSelect(option)}
                  isCorrect={correctAnswer === option}
                  showResult={showResult}
                />
              </motion.div>
            ))}
          </motion.div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default QuestionCard;