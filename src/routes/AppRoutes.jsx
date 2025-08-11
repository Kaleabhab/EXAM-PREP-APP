// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';

import Login from '../pages/Login';
import Register from '../pages/Register';
import ResetPassword from '../pages/ResetPassword';
import Home from '../pages/Home';
import Quiz from '../pages/Quiz';
import Results from '../pages/Results';
import Profile from '../pages/Profile';
import Courses from '../pages/Courses';
import Progress from '../pages/Progress';
import Exams from '../pages/Exams';
import Settings from '../pages/Settings';
import SettingsPage from '../pages/Settings';
import ChapterSelectionPage from '../pages/ChapterSelectionPage';
//import { ExamChapterSelectionPage } from '../pages/ChapterSelectionPage';
import YearPage from '../pages/YearSelection';
//import UnitSelectionPage from '../pages/UnitSelection';
//import unitSelectionPage from '../pages/UnitSelection';
import UnitSelectionPage from '../pages/UnitSelection';
import Question from '../pages/QuestionPage';
import ChapterDisplayPage from "../pages/ChapterDisplayPage";

import PrivateRoute from './PrivateRoute';

const AppRoutes = () => (
  <Router>
    <Routes>
      {/* Public (auth) routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      {/* Protected main routes */}
      <Route
        element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/quizzes" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="exams" element={<Exams /> } />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/settings" element={<SettingsPage /> } />
        <Route path="/courses/:courseId/chapters" element={<ChapterSelectionPage />} />
                <Route path="/exams/:examId/years" element={<YearPage />} />
         {/* <Route path="/exams/:examId/year/:yearTitle" element={<ExamChapterSelectionPage />} /> */}    
         <Route path="/exams/:examId/year/:year" element={<UnitSelectionPage />} />
        <Route path="/exams/:examId/year/:year/unit/:unitIndex" element={<Question />} />
        <Route path="/courses/:courseId/chapters/:chapterIndex" element={<ChapterDisplayPage />} />

      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;
