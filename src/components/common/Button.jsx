import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  icon: Icon,
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'from-indigo-500 to-purple-500',
    secondary: 'from-amber-500 to-pink-500',
    success: 'from-emerald-500 to-teal-500',
    danger: 'from-red-500 to-pink-500',
    info: 'from-blue-500 to-cyan-500',
    warning: 'from-amber-400 to-orange-400'
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-2 rounded-lg w-full bg-gradient-to-r ${variants[variant]} text-white shadow-md ${className}`}
      {...props}
    >
      {Icon && <Icon size={16} className="mr-2" />}
      {children}
    </button>
  );
};

export default Button;