import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBrain, FaBookOpen, FaChartLine, FaRocket, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-600 text-white py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <motion.div 
          initial="hidden"
          animate="show"
          variants={container}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <motion.h1 variants={item} className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Welcome to <span className="text-yellow-300 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-200">EduPlatform</span>
          </motion.h1>
          <motion.p variants={item} className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Unlock your potential with interactive quizzes, courses, and progress tracking.
          </motion.p>
          <motion.div variants={item}>
            <Link
              to="/quizzes"
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-gray-900 bg-yellow-300 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative flex items-center">
                <FaRocket className="mr-2 group-hover:animate-bounce" />
                Get Started
                <FaArrowRight className="ml-2 transition-all duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">EduPlatform</span>?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Whether you're a student or lifelong learner, EduPlatform offers tools to help you grow, test
              your knowledge, and track your progress—all in one place.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-blue-600 text-4xl mb-6">
                  <FaBrain className="group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Interactive Quizzes</h3>
                <p className="text-gray-600 mb-4">
                  Test yourself in real-time with diverse question types and instant feedback.
                </p>
                <Link to="/quizzes" className="text-blue-600 font-medium inline-flex items-center group-hover:underline">
                  Explore quizzes <FaArrowRight className="ml-1 transition-all group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-indigo-600 text-4xl mb-6">
                  <FaBookOpen className="group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Course Library</h3>
                <p className="text-gray-600 mb-4">
                  Explore topics at your pace with structured, easy-to-follow lessons and resources.
                </p>
                <Link to="/courses" className="text-indigo-600 font-medium inline-flex items-center group-hover:underline">
                  Browse courses <FaArrowRight className="ml-1 transition-all group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-green-600 text-4xl mb-6">
                  <FaChartLine className="group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
                <p className="text-gray-600 mb-4">
                  Stay motivated by monitoring your learning journey, achievements, and scores.
                </p>
                <Link to="/dashboard" className="text-green-600 font-medium inline-flex items-center group-hover:underline">
                  View dashboard <FaArrowRight className="ml-1 transition-all group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to boost your learning?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl mb-8 opacity-90"
          >
            Join thousands of learners who are already achieving their goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              to="/signup"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative">
                Start Learning Now
                <FaArrowRight className="ml-2 inline transition-all duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;