import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { QuizProvider } from './context/QuizContext';
import { ThemeProvider } from './context/ThemeContext'; // ✅ import the ThemeContext

const App = () => {
  return (
    <ThemeProvider> {/* ✅ Wrap with ThemeProvider */}
      <AuthProvider>
        <QuizProvider>
          <AppRoutes />
        </QuizProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
