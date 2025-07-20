// Placeholder for AuthLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Welcome to ExamPrep</h1>
          <p className="text-sm text-gray-500">Login or Register to get started</p>
        </div>
        <Outlet /> {/* This renders the nested auth page: Login, Register, etc. */}
      </div>
    </div>
  );
};

export default AuthLayout;
