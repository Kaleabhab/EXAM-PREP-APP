import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiBookOpen, FiChevronRight, FiClock, FiAward } from 'react-icons/fi';
import exams from '../data/exams';

const YearPage = () => {
  const { examId, yearTitle } = useParams();
  const navigate = useNavigate();

  const exam = exams.find(c => c.id === parseInt(examId));

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

  // Generate year data with progress
  const yearsList = exam.years.map((year, index) => {
    // Load completion data for this year
    const savedDataJSON = localStorage.getItem(`quizCompletion_${examId}_${year}`);
    const savedData = savedDataJSON ? JSON.parse(savedDataJSON) : {};
    
    // Calculate progress for this year
    const totalUnits = exam.units.length;
    const completedUnits = Object.values(savedData).filter(Boolean).length;
    const yearProgress = totalUnits > 0 ? (completedUnits / totalUnits) * 100 : 0;

    return {
      id: index + 1,
      title: year,
      duration: `${Math.floor(Math.random() * 30) + 15} min`,
      completed: yearProgress === 100,
      progress: yearProgress
    };
  });

  const completedYears = yearsList.filter(y => y.completed).length;
  const progressPercent = (completedYears / yearsList.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Course Header */}
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

        {/* Progress Overview */}
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
                <div className="text-sm text-gray-500">Years</div>
                <div className="font-bold">{yearsList.length}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500">Completed</div>
                <div className="font-bold">{completedYears}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <FiBookOpen className="mr-2" />
            Course Years
          </h2>

          <AnimatePresence>
            {yearsList.map((year) => (
              <motion.div
                key={year.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(`/exams/${examId}/year/${year.title}`)}
                className={`p-5 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 cursor-pointer transition-all ${
                  year.completed ? 'border-l-4 border-l-green-500' : ''
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <h3 className="font-medium text-lg mr-2">{year.title}</h3>
                      {year.completed && (
                        <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full flex items-center">
                          <FiAward className="mr-1" /> Completed
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <FiClock className="mr-1" />
                      <span>{year.duration}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${year.progress}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {Math.round(year.progress)}% complete
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
            onClick={() => navigate(`/exams/${examId}/year/${yearsList[0]?.title}`)}
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            Start First Year
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

export default YearPage;