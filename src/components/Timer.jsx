import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Timer = ({ initialTime, onTimeUp, isRunning = true }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (!isRunning) return;
    
    if (time <= 0) {
      onTimeUp();
      return;
    }
    
    const interval = setInterval(() => setTime(t => t - 1), 1000);
    return () => clearInterval(interval);
  }, [time, isRunning]);

  // Calculate percentage for radial progress
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (time / initialTime) * circumference;

  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-12 h-12">
        <svg className="w-full h-full" viewBox="0 0 50 50">
          <circle
            className="text-gray-200"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="25"
            cy="25"
          />
          <circle
            className={`${time <= 10 ? 'text-red-500' : 'text-blue-500'}`}
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="25"
            cy="25"
            transform="rotate(-90 25 25)"
          />
        </svg>
        <span className={`absolute inset-0 flex items-center justify-center font-bold ${time <= 10 ? 'text-red-600' : 'text-gray-700'}`}>
          {time}
        </span>
      </div>
      <span className="text-gray-600">seconds left</span>
    </div>
  );
};

export default Timer;