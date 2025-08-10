import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { QuizProvider } from './context/QuizContext';
 // ✅ import the ThemeContext



const App = () => {
  return (
    
      <AuthProvider>
        <QuizProvider>
          <AppRoutes />
        </QuizProvider>
      </AuthProvider>
    
  );
};

export default App;
