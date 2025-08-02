import React from 'react';

const Select = ({ 
  value, 
  onChange, 
  options, 
  color = 'violet',
  className = '',
}) => {
  const colorClasses = {
    violet: 'focus:ring-violet-500 text-violet-500',
    blue: 'focus:ring-blue-500 text-blue-500',
    cyan: 'focus:ring-cyan-500 text-cyan-500',
    teal: 'focus:ring-teal-500 text-teal-500',
    amber: 'focus:ring-amber-500 text-amber-500',
    green: 'focus:ring-green-500 text-green-500',
    red: 'focus:ring-red-500 text-red-500',
  };

  const selectedOption = options.find(option => option.value === value);
  const Icon = selectedOption?.icon;

  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`block w-full px-4 py-2 pr-10 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 ${colorClasses[color]} ${className}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {Icon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <Icon size={18} className={colorClasses[color].split(' ')[1]} />
        </div>
      )}
    </div>
  );
};

export default Select;