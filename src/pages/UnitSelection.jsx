import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiBookOpen, FiChevronRight, FiClock, FiAward } from 'react-icons/fi';
import exams from '../data/exams';

const UnitSelectionPage = () => {
  const { examId, yearTitle } = useParams();
  const navigate = useNavigate();

  const exam = exams.find(c => c.id === parseInt(examId));

  const [chaptersList, setChaptersList] = useState([]);

  useEffect(() => {
    if (!exam) {
      setChaptersList([]);
      return;
    }

    // Load completion data from localStorage
    const savedDataJSON = localStorage.getItem(`quizCompletion_${examId}_${yearTitle}`);
    const savedData = savedDataJSON ? JSON.parse(savedDataJSON) : {};

    // Load results for each unit to calculate progress
    const updatedChapters = exam.units.map((unit, index) => {
      const unitId = index + 1;
      const resultJSON = localStorage.getItem(`quizResult_${unit}`);
      const result = resultJSON ? JSON.parse(resultJSON) : null;
      
      const progress = result ? (result.score / result.total) * 100 : 0;

      return {
        id: unitId,
        title: unit,
        duration: `${Math.floor(Math.random() * 30) + 15} min`,
        completed: !!savedData[unitId],
        progress: progress
      };
    });

    setChaptersList(updatedChapters);
  }, [exam, examId, yearTitle]);

  if (!exam) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center p-6"
      >
        <div className="max-w-md p-8 bg-white rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Course Not Found</h2>
          <p className="text-gray-600 mb-6">
            The course you're looking for doesn't exist or may have been removed.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mx-auto"
          >
            <FiArrowLeft className="mr-2" />
            Go Back
          </button>
        </div>
      </motion.div>
    );
  }

  const completedCount = chaptersList.filter(c => c.completed).length;
  const progressPercent = chaptersList.length > 0 ? (completedCount / chaptersList.length) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-start mb-8">
          <button
            onClick={() => navigate(-1)}
            className="mr-4 p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-3">{exam.icon}</span>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{exam.title}</h1>
            </div>
            <p className="text-gray-600">
              {exam.description || 'Master the fundamentals with this comprehensive exam'}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="mb-4 sm:mb-0 w-full sm:w-auto">
              <h3 className="text-lg font-semibold mb-1">Exam Progress</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <div className="text-center">
                <div className="text-sm text-gray-500">Units</div>
                <div className="font-bold">{chaptersList.length}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500">Completed</div>
                <div className="font-bold">{completedCount}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Unit List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <FiBookOpen className="mr-2" />
            Units
          </h2>

          <AnimatePresence>
            {chaptersList.map((unit) => (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  navigate(`/exams/${examId}/year/${yearTitle}/unit/${unit.id}`)
                }
                className={`p-5 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 cursor-pointer transition-all ${
                  unit.completed ? 'border-l-4 border-l-green-500' : ''
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <h3 className="font-medium text-lg mr-2">{unit.title}</h3>
                      {unit.completed && (
                        <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full flex items-center">
                          <FiAward className="mr-1" /> Completed
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <FiClock className="mr-1" />
                      <span>{unit.duration}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${unit.progress}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {Math.round(unit.progress)}% complete
                    </div>
                  </div>
                  <FiChevronRight className="text-gray-400" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <button
            onClick={() => navigate(`/exams/${examId}/year/${yearTitle}/unit/1`)}
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            Start First Unit
          </button>
          <button
            onClick={() => navigate(`/exam/${examId}/resources`)}
            className="flex-1 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center"
          >
            Course Resources
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default UnitSelectionPage;