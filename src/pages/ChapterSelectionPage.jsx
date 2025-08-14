import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowLeft, 
  FiBookOpen, 
  FiChevronRight, 
  FiClock, 
  FiAward,
  FiBarChart2,
  FiDownload,
  FiBookmark
} from 'react-icons/fi';
import courses from '../data/courses';
import exams from '../data/exams';
import { useEffect, useState } from 'react';

const ChapterSelectionPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [progress, setProgress] = useState(0);

  const course = courses.find(c => c.id === parseInt(courseId));

  // Calculate progress when component mounts or course changes
  useEffect(() => {
    if (course) {
      const savedProgress = localStorage.getItem(`course-${courseId}-progress`);
      if (savedProgress) {
        setProgress(parseInt(savedProgress));
      }
    }
  }, [courseId, course]);

  if (!course) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center p-6"
      >
        <div className="max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
            Course Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
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

  // Enhanced chapter data with progress tracking
  const chaptersWithDetails = course.chapters.map((chapter, index) => {
    const chapterProgress = localStorage.getItem(`chapter-${courseId}-${index+1}-progress`) || 0;
    return {
      id: index + 1,
      title: chapter,
      duration: `${Math.floor(Math.random() * 30) + 15} min`,
      completed: parseInt(chapterProgress) === 100,
      progress: parseInt(chapterProgress),
      hasExam: exams.some(exam => exam.courseId === course.id && exam.chapter === index + 1)
    };
  });

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Save to localStorage or API
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    if (isBookmarked) {
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks.filter(id => id !== course.id)));
    } else {
      localStorage.setItem('bookmarks', JSON.stringify([...bookmarks, course.id]));
    }
  };

  const completedChapters = chaptersWithDetails.filter(c => c.completed).length;
  const totalChapters = chaptersWithDetails.length;
  const completionPercentage = Math.round((completedChapters / totalChapters) * 100);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Course Header */}
        <div className="flex items-start mb-8">
          <button
            onClick={() => navigate(-1)}
            className="mr-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Go back"
          >
            <FiArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="text-3xl mr-3">{course.icon}</span>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {course.title}
                </h1>
              </div>
              <button
                onClick={toggleBookmark}
                className={`p-2 rounded-full ${isBookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'}`}
                aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
              >
                <FiBookmark fill={isBookmarked ? 'currentColor' : 'none'} />
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              {course.description || 'Master the fundamentals with this comprehensive course'}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                {course.level}
              </span>
              {course.tags?.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold dark:text-white">Course Progress</h3>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {completionPercentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
            </div>
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="text-sm text-gray-500 dark:text-gray-400">Chapters</div>
                <div className="font-bold dark:text-white">{totalChapters}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 dark:text-gray-400">Completed</div>
                <div className="font-bold dark:text-white">
                  {completedChapters}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 dark:text-gray-400">Exams</div>
                <div className="font-bold dark:text-white">
                  {exams.filter(e => e.courseId === course.id).length}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters List */}
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
              <FiBookOpen className="mr-2" />
              Course Chapters
            </h2>
            <button 
              onClick={() => navigate(`/courses/${courseId}/resources`)}
              className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              <FiDownload className="mr-1" /> Download Resources
            </button>
          </div>
          
          <AnimatePresence>
            {chaptersWithDetails.map((chapter) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(`/courses/${courseId}/chapters/${chapter.id}`)}
                className={`group p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 cursor-pointer transition-all ${
                  chapter.completed ? 'border-l-4 border-l-green-500 dark:border-l-green-400' : ''
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <h3 className="font-medium text-lg mr-2 dark:text-white">
                        {chapter.id}. {chapter.title}
                      </h3>
                      {chapter.completed && (
                        <span className="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full flex items-center">
                          <FiAward className="mr-1" /> Completed
                        </span>
                      )}
                      {chapter.hasExam && (
                        <span className="text-xs px-2 py-0.5 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full flex items-center ml-2">
                          <FiBarChart2 className="mr-1" /> Has Exam
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <FiClock className="mr-1" />
                      <span>{chapter.duration}</span>
                      {!chapter.completed && chapter.progress > 0 && (
                        <span className="ml-3 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full">
                          {chapter.progress}% viewed
                        </span>
                      )}
                    </div>
                  </div>
                  <FiChevronRight className="text-gray-400 group-hover:text-blue-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Course Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => navigate(`/courses/${courseId}/chapters/1`)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            Start First Chapter
          </button>
          <button
            onClick={() => navigate(`/courses/${courseId}/resources`)}
            className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
          >
            Course Resources
          </button>
          <button
            onClick={() => navigate(`/courses/${courseId}/exams`)}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center"
          >
            Take Practice Exams
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChapterSelectionPage;