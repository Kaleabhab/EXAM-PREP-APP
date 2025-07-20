// Placeholder for Quiz.jsx
import React from 'react';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import Timer from '../components/Timer';

const Quiz = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Quiz</h2>
      <ProgressBar currentQuestion={1} totalQuestions={10} />
      <QuestionCard
        question="What is 2 + 2?"
        options={['2', '3', '4', '5']}
        selectedOption={2}
        onSelect={() => {}}
      />
      <Timer initialTime={60} onTimeUp={() => alert("Time's up!")} />
    </div>
  );
};

export default Quiz;
