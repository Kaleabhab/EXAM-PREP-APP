import React from 'react';

const LoadingSkeleton = ({ lines = 3, variant = 'default' }) => {
  const variants = {
    default: 'h-4 bg-gray-200 rounded',
    card: 'h-24 bg-gray-100 rounded-lg',
    avatar: 'h-10 w-10 bg-gray-200 rounded-full'
  };

  return (
    <div className="animate-pulse space-y-3 w-full">
      {[...Array(lines)].map((_, i) => (
        <div 
          key={i} 
          className={variants[variant]}
          style={{ width: i === lines - 1 ? '80%' : '100%' }}
        />
      ))}
    </div>
  );
};

export default LoadingSkeleton;