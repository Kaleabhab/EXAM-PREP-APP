import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import Timer from '../components/Timer';
import QuizSummaryCard from '../components/QuizSummaryCard';
import exams from '../data/exams';

const Question = () => {
  const { examId, year, unitIndex } = useParams();
  const parsedUnitIndex = parseInt(unitIndex, 10) - 1;
  const unitId = parsedUnitIndex + 1; // Unit ID for localStorage keys

  const selectedExam = exams.find((exam) => exam.id === parseInt(examId, 10));

  if (!selectedExam) {
    return (
      <div className="p-6 text-center text-red-600">
        Invalid Exam ID.
        <br />
        <Link to="/exams" className="text-blue-600 underline mt-4 inline-block">
          ⬅ Back to Exams
        </Link>
      </div>
    );
  }

  const unitName = selectedExam.units?.[parsedUnitIndex];

  if (!unitName) {
    return (
      <div className="p-6 text-center text-red-600">
        Invalid Unit Index.
        <br />
        <Link to={`/exams/${examId}/year/${year}`} className="text-blue-600 underline mt-4 inline-block">
          ⬅ Back to Units
        </Link>
      </div>
    );
  }

  // Normalize quiz data to ensure consistent property names
  const quizData = selectedExam.questions
    .filter((q) => q.year === year && q.unit === unitName)
    .map((q) => ({
      ...q,
      correctAnswer: q.correctAnswer || q.correctanswer, // Handle both cases
    }));

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [revealedAnswers, setRevealedAnswers] = useState([]);

  // New state to hold previous quiz result loaded from localStorage
  const [previousResult, setPreviousResult] = useState(null);

  // Load previous quiz result from localStorage on component mount or when unitName changes
  useEffect(() => {
    const savedResult = localStorage.getItem(`quizResult_${unitName}`);
    if (savedResult) {
      setPreviousResult(JSON.parse(savedResult));
    }
  }, [unitName]);

  // Save quiz result to localStorage when quiz is completed
  useEffect(() => {
    if (quizCompleted) {
      const resultData = {
        title: `You finished the ${unitName} Quiz!`,
        score: calculateScore(),
        total: quizData.length,
        timeTaken: timeTaken,
        completedAt: new Date().toISOString(),
      };
      // Save result per unit and per year
      localStorage.setItem(`quizResult_${unitName}`, JSON.stringify(resultData));
      localStorage.setItem(`quizResult_${year}`, JSON.stringify(resultData));

      // Mark unit as completed (using unitId)
      const completionKey = `quizCompletion_${examId}_${year}`;
      const savedData = JSON.parse(localStorage.getItem(completionKey) || '{}');
      savedData[unitId] = true;
      localStorage.setItem(completionKey, JSON.stringify(savedData));

      setPreviousResult(resultData); // Update state with the latest result
    }
  }, [quizCompleted, unitName, year, examId, unitId, timeTaken, quizData.length]); // Runs when quizCompleted changes

  const handleSelectOption = (option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = option;
    setSelectedOptions(newSelectedOptions);
    setRevealedAnswers([...revealedAnswers, currentQuestionIndex]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowAnswers(false);
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
    setShowAnswers(false);
    setRevealedAnswers([]);
  };

  const calculateScore = () => {
    return quizData.reduce((score, question, index) => {
      return score + (selectedOptions[index] === question.correctAnswer ? 1 : 0);
    }, 0);
  };

  if (quizData.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">No questions found</h2>
        <p>Year: {year}, Unit: {unitName}</p>
        <Link
          to={`/exams/${examId}/chapters/${year}`}
          className="text-blue-600 underline mt-4 inline-block"
        >
          ⬅ Back to Units
        </Link>
      </div>
    );
  }

  if (!quizStarted && previousResult) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-screen p-4"
      >
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-semibold mb-4">Previous Result</h2>
          <p className="mb-2">{previousResult.title}</p>
          <p className="mb-2">
            Score: {previousResult.score} / {previousResult.total}
          </p>
          <p className="mb-6">Time taken: {previousResult.timeTaken} seconds</p>
          <button
            onClick={() => setQuizStarted(true)}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all"
          >
            Retry Quiz
          </button>
        </div>
      </motion.div>
    );
  }

  if (quizCompleted) {
    return (
      <QuizSummaryCard
        title={`You finished the ${unitName} Quiz!`}
        score={calculateScore()}
        total={quizData.length}
        timeTaken={timeTaken}
        onRetry={handleRetry}
      />
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto p-4">
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

      <ProgressBar currentQuestion={currentQuestionIndex + 1} totalQuestions={quizData.length} />

      <QuestionCard
        question={currentQuestion.question}
        options={currentQuestion.options}
        selectedOption={selectedOptions[currentQuestionIndex]}
        onSelect={handleSelectOption}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={quizData.length}
        correctAnswer={currentQuestion.correctAnswer}
        showResult={
          showAnswers || quizCompleted || revealedAnswers.includes(currentQuestionIndex)
        }
      />

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setShowAnswers(!showAnswers)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
        >
          {showAnswers ? 'Hide Answer' : 'Show Answer'}
        </button>

        <button
          onClick={handleNextQuestion}
          disabled={!selectedOptions[currentQuestionIndex]}
          className={`px-6 py-2 rounded-lg font-medium ${
            selectedOptions[currentQuestionIndex]
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          } transition`}
        >
          {currentQuestionIndex === quizData.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </motion.div>
  );
};

export default Question;
