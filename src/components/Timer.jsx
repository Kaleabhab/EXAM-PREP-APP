// Placeholder for Timer.jsx
import React, { useEffect, useState } from 'react';

const Timer = ({ initialTime, onTimeUp }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time <= 0) {
      onTimeUp();
      return;
    }
    const interval = setInterval(() => setTime(t => t - 1), 1000);
    return () => clearInterval(interval);
  }, [time]);

  return <div>Time left: {time}s</div>;
};

export default Timer;