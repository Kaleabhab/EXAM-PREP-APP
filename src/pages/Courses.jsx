// pages/Courses.jsx
import React from 'react';

const courses = [
  {
    id: 1,
    title: "Intro to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
    level: "Beginner",
  },
  {
    id: 2,
    title: "React Fundamentals",
    description: "Understand components, hooks, and state management in React.",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "JavaScript Mastery",
    description: "Deep dive into ES6+, async programming, and real-world problem solving.",
    level: "Advanced",
  },
  {
    id: 4,
    title: "UI/UX Design Principles",
    description: "Explore how to design intuitive and beautiful user interfaces.",
    level: "Beginner",
  },
];

const Courses = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">Available Courses</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">{course.title}</h2>
              <p className="text-gray-700 mb-3">{course.description}</p>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4">
                {course.level}
              </span>
              <div>
                <a
                  href={`/courses/${course.id}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Start Course
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
