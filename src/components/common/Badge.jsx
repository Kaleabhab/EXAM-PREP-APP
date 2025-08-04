import React from "react";
const Badge = ({ 
  content, 
  color = 'danger', 
  size = 'md', 
  shape = 'circle', 
  placement = 'top-right',
  children 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4 text-xs',
    md: 'h-5 w-5 text-sm',
    lg: 'h-6 w-6 text-base',
  };

  const colorClasses = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-purple-500 text-white',
    success: 'bg-green-500 text-white',
    danger: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-black',
    pink: 'bg-pink-500 text-white',
  };

  const shapeClasses = {
    circle: 'rounded-full',
    rectangle: 'rounded-md',
  };

  const placementClasses = {
    'top-right': 'top-0 right-0 transform translate-x-1/2 -translate-y-1/2',
    'top-left': 'top-0 left-0 transform -translate-x-1/2 -translate-y-1/2',
    'bottom-right': 'bottom-0 right-0 transform translate-x-1/2 translate-y-1/2',
    'bottom-left': 'bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2',
  };

  return (
    <div className="relative inline-block">
      {children}
      {content && (
        <span
          className={`absolute ${placementClasses[placement]} ${sizeClasses[size]} ${colorClasses[color]} ${shapeClasses[shape]} flex items-center justify-center font-bold shadow-lg`}
        >
          {content}
        </span>
      )}
    </div>
  );
};

export default Badge;