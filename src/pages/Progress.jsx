import React from 'react';
import { motion } from 'framer-motion';
import useAuth from '../hooks/useAuth';
import { FiAward, FiBook, FiCheckCircle, FiClock } from 'react-icons/fi';

const sampleProgress = [
  { 
    id: 1, 
    title: "Intro to Web Development", 
    completed: 8, 
    total: 10,
    lastAccessed: "2023-05-15",
    category: "Web Development"
  },
  { 
    id: 2, 
    title: "React Fundamentals", 
    completed: 5, 
    total: 12,
    lastAccessed: "2023-05-10",
    category: "Frontend"
  },
  { 
    id: 3, 
    title: "JavaScript Mastery", 
    completed: 10, 
    total: 10,
    lastAccessed: "2023-04-28",
    category: "Programming",
    certified: true
  },
  { 
    id: 4, 
    title: "UI/UX Design Principles", 
    completed: 3, 
    total: 8,
    lastAccessed: "2023-05-01",
    category: "Design"
  },
];

const Progress = () => {
  const { user } = useAuth();

  // Calculate overall progress stats
  const totalCourses = sampleProgress.length;
  const completedCourses = sampleProgress.filter(course => course.completed === course.total).length;
  const inProgressCourses = totalCourses - completedCourses;
  const overallProgress = Math.round(
    sampleProgress.reduce((sum, course) => sum + (course.completed / course.total), 0) / 
    totalCourses * 100
  );

  // Replace sampleProgress with real user progress from context/api when ready

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {user?.name ? `${user.name}'s` : "Your"} Learning Journey
          </h1>
          <p className="text-lg text-gray-600">
            Track your progress and celebrate your achievements
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-50 text-blue-600 mr-4">
                <FiBook className="text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Total Courses</p>
                <p className="text-2xl font-bold">{totalCourses}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-50 text-green-600 mr-4">
                <FiCheckCircle className="text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Completed</p>
                <p className="text-2xl font-bold">{completedCourses}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-50 text-yellow-600 mr-4">
                <FiClock className="text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">In Progress</p>
                <p className="text-2xl font-bold">{inProgressCourses}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-50 text-purple-600 mr-4">
                <FiAward className="text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Overall Progress</p>
                <p className="text-2xl font-bold">{overallProgress}%</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Course Progress List */}
        <motion.div 
          className="bg-white rounded-xl shadow-md overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {sampleProgress.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-600 mb-4">No progress yet. Start a course or quiz!</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Browse Courses
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {sampleProgress.map((course) => {
                const progressPercent = Math.round((course.completed / course.total) * 100);
                const isCompleted = course.completed === course.total;

                return (
                  <motion.div 
                    key={course.id}
                    whileHover={{ backgroundColor: 'rgba(249, 250, 251, 1)' }}
                    className="p-6 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                      <div>
                        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                          {course.title}
                          {course.certified && (
                            <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full flex items-center">
                              <FiAward className="mr-1" /> Certified
                            </span>
                          )}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                          {course.category} • Last accessed: {course.lastAccessed}
                        </p>
                      </div>
                      <span className={`text-lg font-medium ${
                        isCompleted ? 'text-green-600' : 'text-blue-600'
                      }`}>
                        {progressPercent}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div
                        className={`h-3 rounded-full ${
                          isCompleted ? 'bg-green-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500">
                        {course.completed} of {course.total} modules completed
                      </p>
                      {isCompleted ? (
                        <button className="text-sm text-green-600 hover:text-green-800 font-medium flex items-center">
                          View Certificate <FiAward className="ml-1" />
                        </button>
                      ) : (
                        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                          Continue Learning
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* Additional Recommendations */}
        {completedCourses > 0 && (
          <motion.div 
            className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Recommended Next Steps</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-medium mb-2">Advanced JavaScript Patterns</h4>
                <p className="text-sm text-gray-600 mb-3">Take your JS skills to the next level</p>
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  Explore
                </button>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-medium mb-2">React Performance</h4>
                <p className="text-sm text-gray-600 mb-3">Optimize your React applications</p>
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  Explore
                </button>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-medium mb-2">Fullstack Development</h4>
                <p className="text-sm text-gray-600 mb-3">Combine frontend and backend skills</p>
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  Explore
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Progress;