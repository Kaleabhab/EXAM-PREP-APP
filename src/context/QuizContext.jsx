// Placeholder for QuizContext.jsx
import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const selectAnswer = (questionIndex, answer) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  const resetQuiz = () => {
    setQuizData([]);
    setCurrentQuestion(0);
    setAnswers({});
  };

  return (
    <QuizContext.Provider value={{
      quizData,
      setQuizData,
      currentQuestion,
      setCurrentQuestion,
      answers,
      selectAnswer,
      resetQuiz
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
