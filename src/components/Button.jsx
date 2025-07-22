import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  className = '',
  ...props
}) => {
  // Variant styles
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
    text: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-blue-500',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  };

  // Size styles
  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  // Disabled state
  const disabledStyles = 'opacity-60 cursor-not-allowed';
  const loadingStyles = 'relative text-transparent';

  return (
    <motion.button
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      className={`
        inline-flex items-center justify-center rounded-md font-medium
        focus:outline-none focus:ring-2 focus:ring-offset-2
        transition-all duration-150 ease-in-out
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? disabledStyles : ''}
        ${loading ? loadingStyles : ''}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {startIcon && !loading && (
        <span className="mr-2 flex items-center">{startIcon}</span>
      )}
      
      <span>{children}</span>
      
      {endIcon && !loading && (
        <span className="ml-2 flex items-center">{endIcon}</span>
      )}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'outline', 'text', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  className: PropTypes.string
};

export default Button;