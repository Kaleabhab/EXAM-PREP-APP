import React from 'react';

const Switch = ({ 
  checked, 
  onChange, 
  color = 'blue',
  className = '',
  ...props 
}) => {
  const colors = {
    blue: 'blue',
    cyan: 'cyan',
    purple: 'purple',
    amber: 'amber',
    teal: 'teal',
    green: 'green',
    red: 'red'
  };

  return (
    <label className={`relative inline-flex items-center cursor-pointer ${className}`}>
      <input 
        type="checkbox" 
        checked={checked}
        onChange={onChange}
        className="sr-only peer" 
        {...props}
      />
      <div className={`w-11 h-6 bg-${colors[color]}-200 dark:bg-${colors[color]}-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-${colors[color]}-600`}></div>
    </label>
  );
};

export default Switch;