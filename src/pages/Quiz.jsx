import React, { useState } from 'react';
import { motion } from 'framer-motion';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import Timer from '../components/Timer';
import QuizSummaryCard from '../components/QuizSummaryCard';
import quizData from '../data/quiz';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  // Sample quiz data
  

  const handleSelectOption = (option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions([]);
    setQuizCompleted(false);
    setTimeTaken(0);
    setQuizStarted(true);
  };

  const calculateScore = () => {
    return quizData.reduce((score, question, index) => {
      return score + (selectedOptions[index] === question.correctAnswer ? 1 : 0);
    }, 0);
  };

  if (!quizStarted) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-screen p-4"
      >
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Challenge</h1>
          <p className="text-gray-600 mb-6">
            Test your knowledge with {quizData.length} questions. You'll have {quizData.length * 30} seconds to complete the quiz!
          </p>
          <button
            onClick={() => setQuizStarted(true)}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all"
          >
            Start Quiz
          </button>
        </div>
      </motion.div>
    );
  }

  if (quizCompleted) {
    return (
      <QuizSummaryCard
        title="Quiz Completed!"
        score={calculateScore()}
        total={quizData.length}
        timeTaken={timeTaken}
        onRetry={handleRetry}
      />
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto p-4"
    >
      <div className="flex justify-between items-center mb-6">
        <Timer 
          initialTime={quizData.length * 30} 
          onTimeUp={() => setQuizCompleted(true)}
          onTick={(time) => setTimeTaken(quizData.length * 30 - time)}
        />
        <div className="text-sm font-medium text-gray-600">
          Score: {calculateScore()}/{quizData.length}
        </div>
      </div>

      <ProgressBar 
        currentQuestion={currentQuestionIndex + 1} 
        totalQuestions={quizData.length} 
      />

      <QuestionCard
        question={currentQuestion.question}
        options={currentQuestion.options}
        selectedOption={selectedOptions[currentQuestionIndex]}
        onSelect={handleSelectOption}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={quizData.length}
        correctAnswer={currentQuestion.correctAnswer}
        showResult={false}
      />

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleNextQuestion}
          disabled={!selectedOptions[currentQuestionIndex]}
          className={`px-6 py-2 rounded-lg font-medium ${selectedOptions[currentQuestionIndex] ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'} transition`}
        >
          {currentQuestionIndex === quizData.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </motion.div>
  );
};

export default Quiz;