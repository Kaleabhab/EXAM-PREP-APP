// src/components/SubjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const colorMap = {
  Beginner: 'from-green-400 to-blue-400',
  Intermediate: 'from-purple-400 to-pink-400',
  Advanced: 'from-orange-400 to-red-400'
};

const iconColors = {
  Beginner: 'text-blue-500',
  Intermediate: 'text-purple-500',
  Advanced: 'text-orange-500'
};

export const ExamCard = ({ title, description, icon, level, examId }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/exams/${examId}/years`);
  };

  return (
    <motion.div
      onClick={handleClick}
      className={`p-6 rounded-xl cursor-pointer bg-gradient-to-br ${colorMap[level]} shadow-lg hover:shadow-xl transition-all duration-300`}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="backdrop-blur-sm bg-white/20 p-4 rounded-lg">
        <div className="flex items-start gap-4">
          <div className={`text-4xl ${iconColors[level]} p-3 rounded-full bg-white/20`}>
            {icon}
          </div>
          <div>
            <div className="flex justify-between items-start">
              <h4 className="font-bold text-xl text-white">{title}</h4>
              <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white">
                {level}
              </span>
            </div>
            <p className="text-white/90 text-sm mt-2">{description}</p>
          </div>
        </div>

        <motion.div className="mt-4 flex justify-between items-center">
          <span className="text-white text-sm font-medium">Start Learning</span>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const SubjectCard = ({ title, description, icon, level, courseId, completed = 0, total = 1 }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/courses/${courseId}/chapters`);
  };

  const progressPercentage = Math.round((completed / total) * 100);

  return (
    <motion.div
      onClick={handleClick}
      className={`p-6 rounded-xl cursor-pointer bg-gradient-to-br ${colorMap[level]} shadow-lg hover:shadow-xl transition-all duration-300`}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="backdrop-blur-sm bg-white/20 p-4 rounded-lg">
        <div className="flex items-start gap-4">
          <div className={`text-4xl ${iconColors[level]} p-3 rounded-full bg-white/20`}>
            {icon}
          </div>
          <div>
            <div className="flex justify-between items-start">
              <h4 className="font-bold text-xl text-white">{title}</h4>
              <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white">
                {level}
              </span>
            </div>
            <p className="text-white/90 text-sm mt-2">{description}</p>
          </div>
        </div>



         {/* Progress Bar Section */}
        {total > 0 && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-white/90 font-medium">
                {completed} of {total} completed
              </span>
              <span className="text-sm text-white font-bold">
                {progressPercentage}%
              </span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-3">
              <div
                className={`h-3 rounded-full ${completed === total ? 'bg-green-400' : 'bg-blue-400'}`}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        )}

        

        <motion.div className="mt-4 flex justify-between items-center">
         <span className="text-white text-sm font-medium">
            {completed === total && total !== 0 ? 'Completed' : 'Start Learning'}
          </span>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SubjectCard;
