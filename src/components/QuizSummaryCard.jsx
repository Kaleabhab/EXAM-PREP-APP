import React from 'react';

const QuizSummaryCard = ({ title, score, total }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="font-bold">{title}</h3>
      <p>Score: {score}/{total}</p>
    </div>
  );
};

export default QuizSummaryCard;