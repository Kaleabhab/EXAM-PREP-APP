import React from 'react';

const Toast = ({ type = 'success', message }) => {
  const bg = type === 'error' ? 'bg-red-500' : 'bg-green-500';
  return (
    <div className={`${bg} text-white p-3 rounded shadow`}>
      {message}
    </div>
  );
};

export default Toast;
