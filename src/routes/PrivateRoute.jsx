import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const PrivateRoute = ({ 
  children, 
  redirectPath = '/login',
  showLoading = true 
}) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading && showLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500 mb-4"></div>
        <p className="text-gray-600">Checking authentication...</p>
      </motion.div>
    );
  }

  if (!user && !loading) {
    // Pass current location to redirect back after login
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default PrivateRoute;