import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SubjectCard from '../components/SubjectCard';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FiAward, FiBook, FiCheckCircle, FiClock } from 'react-icons/fi';

export const courses = [
  {
    id: 1,
    title: "Intro to Web Dev",
    description: "Build your first website with HTML, CSS & JavaScript",
    level: "Beginner",
    icon: "🌐",
    color: "blue",
    route: "/courses/1/chapters",
    completed: 3,
    total: 10,
    chapters: ["Intro to HTML", "Styling with CSS", "JavaScript Basics"]
  },
  {
    id: 2,
    title: "React Fundamentals",
    description: "Master components, hooks, and state management",
    level: "Intermediate",
    icon: "⚛️",
    color: "purple",
    route: "/courses/2/chapters",
    completed: 3,
    total: 10,
    chapters: ["JSX & Components", "React Hooks", "State Management"]
  },
  {
    id: 3,
    title: "JavaScript Mastery",
    description: "Deep dive into ES6+ and advanced concepts",
    level: "Advanced",
    icon: "📜",
    color: "orange",
    route: "/courses/3/chapters",
    completed: 3,
    total: 10,
    chapters: ["ES6+", "Async JS", "Design Patterns"]
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Create beautiful, intuitive interfaces",
    level: "Beginner",
    icon: "🎨",
    color: "green",
    route: "/courses/4/chapters",
    completed: 3,
    total: 10,
    chapters: ["UX Principles", "Wireframing", "Design Systems"]
  },
  {
    id: 5,
    title: "Node.js Backend",
    description: "Build robust server applications",
    level: "Intermediate",
    icon: "🔙",
    color: "pink",
    route: "/courses/5/chapters",
    completed: 3,
    total: 10,
    chapters: ["Node Basics", "Express.js", "APIs & Middleware"]
  },
  {
    id: 6,
    title: "Database Design",
    description: "Learn SQL and relational databases",
    level: "Intermediate",
    icon: "🗃️",
    color: "indigo",
    route: "/courses/6/chapters",
    completed: 3,
    total: 10,
    chapters: ["SQL Basics", "Normalization", "Joins & Queries"]
  },
];

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate(); 
  
  const filters = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  
  const filteredCourses = activeFilter === 'All' 
    ? courses 
    : courses.filter(course => course.level === activeFilter);

     const totalCourses = courses.length;
  const completedCourses = courses.filter(course => course.completed === course.total).length;
  const inProgressCourses = totalCourses - completedCourses;
  const overallProgress = Math.round(
    courses.reduce((sum, course) => sum + (course.completed / course.total), 0) / 
    totalCourses * 100
  );
  const { user } = useAuth();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Our Courses</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interactive learning experiences for every skill level
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map(filter => (
            <motion.button
              key={filter}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCourses.map((course) => (
  <SubjectCard
    key={course.id}
    title={course.title}
    description={course.description}
    icon={course.icon}
    level={course.level}
    courseId={course.id} // Required for navigation
    completed={course.completedChapters || 0} // fallback to 0 if undefined
    total={course.totalChapters || 1}         // avoid division by 0
  />
))}
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
