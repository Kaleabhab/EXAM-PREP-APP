// Placeholder for AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Quiz from '../pages/Quiz';
import Results from '../pages/Results';
import Profile from '../pages/Profile';
import { AuthContext } from '../context/AuthContext';

const Routes = () => (
  <Router>
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  </Router>
);

export default Routes;





AuthContext
// Placeholder for AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
