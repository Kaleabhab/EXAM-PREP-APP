// Placeholder for Results.jsx
import React from 'react';
import QuizSummaryCard from '../components/QuizSummaryCard';

const Results = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Results</h2>
      <QuizSummaryCard title="Math Basics" score={8} total={10} />
    </div>
  );
};

export default Results;
