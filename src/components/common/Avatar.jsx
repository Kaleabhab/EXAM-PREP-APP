import React from 'react';

const Avatar = ({ 
  src, 
  name, 
  size = 'md', 
  color = 'primary', 
  isBordered = false,
  borderColor = 'gray-200',
  className = '',
  onClick,
  ...props 
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-20 h-20 text-xl',
  };

  const colorClasses = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-purple-500 text-white',
    success: 'bg-green-500 text-white',
    danger: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-white',
    pink: 'bg-pink-500 text-white',
    gradient: 'bg-gradient-to-tr from-pink-500 to-yellow-500 text-white',
  };

  const borderClasses = isBordered 
    ? `border-2 border-${borderColor} dark:border-${borderColor}-dark`
    : '';

  const clickableClasses = onClick 
    ? 'cursor-pointer transition-transform hover:scale-105 active:scale-95' 
    : '';

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        ${colorClasses[color]} 
        ${borderClasses}
        ${clickableClasses}
        ${className}
        relative rounded-full flex items-center justify-center font-bold shadow-md
        overflow-hidden select-none
      `}
      onClick={onClick}
      {...props}
    >
      {src ? (
        <img 
          src={src} 
          alt={name || 'Avatar'} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      ) : (
        <span className="font-medium">{name?.charAt(0).toUpperCase() || '?'}</span>
      )}
      
      {/* Fallback if image fails to load */}
      {src && (
        <span className="absolute inset-0 flex items-center justify-center font-medium bg-current">
          {name?.charAt(0).toUpperCase() || '?'}
        </span>
      )}
    </div>
  );
};

export default Avatar;