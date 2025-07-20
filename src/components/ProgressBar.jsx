import React from 'react';

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const percent = (currentQuestion / totalQuestions) * 100;
  return (
    <div className="w-full bg-gray-200 rounded h-3">
      <div
        className="bg-blue-500 h-3 rounded"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
