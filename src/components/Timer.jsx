import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@nextui-org/progress';
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

  return (
    <motion.div 
      className="flex items-center gap-3"
      whileHover={{ scale: 1.05 }}
    >
      <CircularProgress
        aria-label="Time remaining"
        size="lg"
        value={(time / initialTime) * 100}
        color={time <= 10 ? 'danger' : 'primary'}
        showValueLabel={false}
        classNames={{
          svg: "w-14 h-14"
        }}
      />
      <div className="flex flex-col">
        <span className={`text-2xl font-bold ${time <= 10 ? 'text-red-500' : 'text-blue-500'}`}>
          {time}s
        </span>
        <span className="text-sm text-gray-500">remaining</span>
      </div>
    </motion.div>
  );
};

export default Timer;