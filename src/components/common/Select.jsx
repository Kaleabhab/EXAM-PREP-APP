import React from 'react';

const Select = ({ 
  value, 
  onChange, 
  options, 
  icon: Icon,
  color = 'violet',
  className = '',
  ...props 
}) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={`block w-full px-4 py-2 pr-8 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-${color}-500 ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {Icon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <Icon size={18} className={`text-${color}-500`} />
        </div>
      )}
    </div>
  );
};

export default Select;