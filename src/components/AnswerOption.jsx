import React from 'react';
import { CircularProgress } from '@nextui-org/progress';

const ProgressBar = ({ current, total, color = 'primary' }) => {
  const percent = Math.round((current / total) * 100);
  
  return (
    <div className="flex items-center gap-4">
      <CircularProgress
        aria-label="Quiz progress"
        size="lg"
        value={percent}
        color={color}
        showValueLabel={true}
        classNames={{
          value: "text-lg font-bold"
        }}
      />
      <div className="flex-1">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progress</span>
          <span>{current}/{total}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;