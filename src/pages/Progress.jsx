import React from 'react';
import useAuth from '../hooks/useAuth';

const sampleProgress = [
  { id: 1, title: "Intro to Web Development", completed: 8, total: 10 },
  { id: 2, title: "React Fundamentals", completed: 5, total: 12 },
  { id: 3, title: "JavaScript Mastery", completed: 10, total: 10 },
  { id: 4, title: "UI/UX Design Principles", completed: 3, total: 8 },
];

const Progress = () => {
  const { user } = useAuth();

  // Replace sampleProgress with real user progress from context/api when ready

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          {user?.name ? `${user.name}'s` : "Your"} Learning Progress
        </h1>

        {sampleProgress.length === 0 ? (
          <p className="text-center text-gray-600">No progress yet. Start a course or quiz!</p>
        ) : (
          <div className="space-y-6">
            {sampleProgress.map(({ id, title, completed, total }) => {
              const progressPercent = Math.round((completed / total) * 100);

              return (
                <div key={id}>
                  <div className="flex justify-between mb-1">
                    <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
                    <span className="text-sm text-gray-600">{progressPercent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-blue-600 h-4 rounded-full"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {completed} of {total} completed
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Progress;
