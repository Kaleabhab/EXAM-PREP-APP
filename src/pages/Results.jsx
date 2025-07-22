import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiClock, FiBarChart2, FiBookOpen, FiShare2, FiDownload } from 'react-icons/fi';
import StatChart from '../components/StatChart';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

const Results = () => {
  // Sample data - replace with actual quiz results
  const quizResults = {
    title: "JavaScript Fundamentals",
    score: 8,
    total: 10,
    timeTaken: "4:32",
    dateCompleted: "May 15, 2023",
    passingScore: 7,
    category: "Programming",
    performanceByTopic: [
      { topic: "Variables", correct: 5, total: 5 },
      { topic: "Functions", correct: 3, total: 3 },
      { topic: "Loops", correct: 0, total: 2 }
    ],
    percentile: 85,
    timeSpent: {
      planning: 15,
      coding: 65,
      reviewing: 20
    }
  };

  const passed = quizResults.score >= quizResults.passingScore;
  const percentage = Math.round((quizResults.score / quizResults.total) * 100);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Results</h1>
        <p className="text-lg text-gray-600">
          {passed ? "Congratulations! You passed!" : "Keep practicing! You'll get it next time!"}
        </p>
      </div>

      {/* Result Summary Card */}
      <motion.div 
        whileHover={{ y: -2 }}
        className={`bg-white rounded-xl shadow-lg overflow-hidden mb-8 border-l-4 ${
          passed ? 'border-green-500' : 'border-orange-500'
        }`}
      >
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 bg-blue-100 text-blue-800">
                {quizResults.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{quizResults.title}</h2>
              <p className="text-gray-600">Completed on {quizResults.dateCompleted}</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={passed ? "#10B981" : "#F59E0B"}
                    strokeWidth="3"
                    strokeDasharray={`${percentage}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-3xl font-bold">{percentage}%</span>
                    <p className="text-sm text-gray-500">Score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center">
                <FiAward className="text-blue-500 mr-2" />
                <span className="text-sm text-gray-600">Result</span>
              </div>
              <p className={`text-lg font-medium mt-1 ${
                passed ? 'text-green-600' : 'text-orange-600'
              }`}>
                {passed ? 'Passed' : 'Try Again'}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center">
                <FiBarChart2 className="text-blue-500 mr-2" />
                <span className="text-sm text-gray-600">Score</span>
              </div>
              <p className="text-lg font-medium mt-1">
                {quizResults.score}/{quizResults.total}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center">
                <FiClock className="text-blue-500 mr-2" />
                <span className="text-sm text-gray-600">Time</span>
              </div>
              <p className="text-lg font-medium mt-1">{quizResults.timeTaken}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center">
                <FiBookOpen className="text-blue-500 mr-2" />
                <span className="text-sm text-gray-600">Percentile</span>
              </div>
              <p className="text-lg font-medium mt-1">Top {quizResults.percentile}%</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Performance Breakdown */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Performance Breakdown</h2>
        
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-800 mb-4">By Topic</h3>
          <div className="space-y-4">
            {quizResults.performanceByTopic.map((topic, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">{topic.topic}</span>
                  <span className="text-gray-600">
                    {topic.correct}/{topic.total} ({Math.round((topic.correct/topic.total)*100)}%)
                  </span>
                </div>
                <ProgressBar 
                  current={topic.correct} 
                  total={topic.total} 
                  color={topic.correct === topic.total ? 'green' : topic.correct === 0 ? 'red' : 'blue'}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Time Distribution</h3>
          <div className="h-64">
            <StatChart 
              data={Object.values(quizResults.timeSpent)} 
              labels={Object.keys(quizResults.timeSpent)} 
              type="pie"
            />
          </div>
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Next Steps</h3>
          <p className="text-gray-700 mb-4">
            {passed 
              ? "You're doing great! Consider advancing to more challenging material."
              : "Review these topics and try again when you're ready."}
          </p>
          <div className="space-y-3">
            <Button variant="primary" fullWidth>
              {passed ? 'Continue Learning' : 'Retake Quiz'}
            </Button>
            <Button variant="outline" fullWidth>
              Review Answers
            </Button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Share Your Achievement</h3>
          <p className="text-gray-700 mb-4">
            {passed
              ? "Celebrate your success by sharing your results with others!"
              : "Share your progress and ask for help from the community."}
          </p>
          <div className="flex space-x-3">
            <Button variant="outline">
              <FiShare2 className="mr-2" /> Share
            </Button>
            <Button variant="outline">
              <FiDownload className="mr-2" /> Download
            </Button>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Recommended For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <h4 className="font-medium mb-2">Advanced JavaScript</h4>
            <p className="text-sm text-gray-600 mb-3">Master advanced concepts</p>
            <Button variant="text" size="sm">Explore</Button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <h4 className="font-medium mb-2">React Patterns</h4>
            <p className="text-sm text-gray-600 mb-3">Learn professional techniques</p>
            <Button variant="text" size="sm">Explore</Button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <h4 className="font-medium mb-2">Debugging Techniques</h4>
            <p className="text-sm text-gray-600 mb-3">Solve problems effectively</p>
            <Button variant="text" size="sm">Explore</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Results;