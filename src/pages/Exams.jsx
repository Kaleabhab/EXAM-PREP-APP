import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SubjectCard from '../components/SubjectCard';
import { useNavigate } from 'react-router-dom';

export const exams = [
  {
    id: 1,
    title: "Intro to Web Dev",
    description: "Build your first website with HTML, CSS & JavaScript",
    level: "Beginner",
    icon: "🌐",
    color: "blue",
    route: "/courses/1/chapters",
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
    chapters: ["SQL Basics", "Normalization", "Joins & Queries"]
  },
];

const Exams = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate(); 
  
  const filters = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  
  const filteredExams = activeFilter === 'All' 
    ? exams 
    : exams.filter(exam => exam.level === activeFilter);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
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
          {filteredExams.map((exam) => (
  <SubjectCard
    key={exam.id}
    title={exam.title}
    description={exam.description}
    icon={exam.icon}
    level={exam.level}
    courseId={exam.id} // Required for navigation
  />
))}
        </motion.div>
      </div>
    </div>
  );
};

export default Exams;
