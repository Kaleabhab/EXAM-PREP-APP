import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiBookOpen, FiChevronRight, FiClock, FiAward } from 'react-icons/fi';
import courses from '../data/courses'; // Adjust path as needed
import { exams } from './Exams';

//import { courses } from './Courses';
export const ExamChapterSelectionPage = () => {
  const { examId } = useParams();
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
  };

  // Sample chapter data with additional details
  const chaptersList = exam.units.map((unit, index) => ({
    id: index + 1,
    title: unit,
    duration: `${Math.floor(Math.random() * 30) + 15} min`, // Random duration
    completed: Math.random() > 0.7, // Random completion status
  }));

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
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {exam.title}
              </h1>
            </div>
            <p className="text-gray-600">{exam.description || 'Master the fundamentals with this comprehensive exam'}</p>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-lg font-semibold mb-1">Exam Progress</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${(chaptersList.filter(c => c.completed).length / chaptersList.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-sm text-gray-500">Chapters</div>
                <div className="font-bold">{chaptersList.length}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500">Completed</div>
                <div className="font-bold">
                  {chaptersList.filter(c => c.completed).length}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <FiBookOpen className="mr-2" />
            Course Chapters
          </h2>
          
          <AnimatePresence>
            {chaptersList.map((unit, index) => (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                //onClick={() => navigate(`/course/${courseId}/chapter/${chapter.id}`)}
                onClick={() => navigate(`/exams/${examId}/unit/${index + 1}`)}
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
                    <div className="flex items-center text-sm text-gray-500">
                      <FiClock className="mr-1" />
                      <span>{unit.duration}</span>
                    </div>
                  </div>
                  <FiChevronRight className="text-gray-400" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Course Actions */}
        <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <button
            onClick={() => navigate(`/exam/${examId}/unit`)}
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            Start First Chapter
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



const ChapterSelectionPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = courses.find(c => c.id === parseInt(courseId));

  if (!course) {
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

  // Sample chapter data with additional details
  const chaptersWithDetails = course.chapters.map((chapter, index) => ({
    id: index + 1,
    title: chapter,
    duration: `${Math.floor(Math.random() * 30) + 15} min`, // Random duration
    completed: Math.random() > 0.7, // Random completion status
  }));

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
              <span className="text-3xl mr-3">{course.icon}</span>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {course.title}
              </h1>
            </div>
            <p className="text-gray-600">{course.description || 'Master the fundamentals with this comprehensive course'}</p>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-lg font-semibold mb-1">Course Progress</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${(chaptersWithDetails.filter(c => c.completed).length / chaptersWithDetails.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-sm text-gray-500">Chapters</div>
                <div className="font-bold">{chaptersWithDetails.length}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500">Completed</div>
                <div className="font-bold">
                  {chaptersWithDetails.filter(c => c.completed).length}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <FiBookOpen className="mr-2" />
            Course Chapters
          </h2>
          
          <AnimatePresence>
            {chaptersWithDetails.map((chapter, index) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                //onClick={() => navigate(`/course/${courseId}/chapter/${chapter.id}`)}
                onClick={() => navigate(`/courses/${courseId}/chapters/${index + 1}`)}
                className={`p-5 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 cursor-pointer transition-all ${
                  chapter.completed ? 'border-l-4 border-l-green-500' : ''
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <h3 className="font-medium text-lg mr-2">{chapter.title}</h3>
                      {chapter.completed && (
                        <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full flex items-center">
                          <FiAward className="mr-1" /> Completed
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FiClock className="mr-1" />
                      <span>{chapter.duration}</span>
                    </div>
                  </div>
                  <FiChevronRight className="text-gray-400" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Course Actions */}
        <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <button
            onClick={() => navigate(`/course/${courseId}/chapter/1`)}
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            Start First Chapter
          </button>
          <button
            onClick={() => navigate(`/course/${courseId}/resources`)}
            className="flex-1 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center"
          >
            Course Resources
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChapterSelectionPage;