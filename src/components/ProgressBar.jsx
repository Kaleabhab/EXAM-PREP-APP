import React from 'react';

const ProgressBar = ({ current, total, color = 'blue', showLabel = true }) => {
  const percent = Math.round((current / total) * 100);
  
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500'
  };

  return (
    <div className="w-full space-y-1">
      {showLabel && (
        <div className="flex justify-between text-xs text-gray-600">
          <span>Progress</span>
          <span>{percent}% ({current}/{total})</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`${colors[color]} h-2.5 rounded-full transition-all duration-300`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;