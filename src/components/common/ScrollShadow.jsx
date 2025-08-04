import React from "react";
const ScrollShadow = ({ children, className = '', color = 'primary', size = 'md' }) => {
  const colorClasses = {
    primary: 'from-blue-100 to-transparent dark:from-blue-900',
    secondary: 'from-purple-100 to-transparent dark:from-purple-900',
    gradient: 'from-pink-100 via-purple-100 to-transparent dark:from-pink-900 dark:via-purple-900',
  };

  const sizeClasses = {
    sm: 'p-1',
    md: 'p-2',
    lg: 'p-4',
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="overflow-y-auto scrollbar-hide max-h-[inherit]">
        {children}
      </div>
      <div className={`absolute top-0 left-0 right-0 h-4 bg-gradient-to-b ${colorClasses[color]} pointer-events-none`} />
      <div className={`absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t ${colorClasses[color]} pointer-events-none`} />
    </div>
  );
};

export default ScrollShadow;