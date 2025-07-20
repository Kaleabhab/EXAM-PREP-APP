import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [avatar, setAvatar] = useState(user?.avatar || 'https://via.placeholder.com/120');

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword) {
      setMessage('⚠️ Please fill in all password fields.');
    } else {
      setMessage('✅ Password changed successfully!');
      setCurrentPassword('');
      setNewPassword('');
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Simulated upload
      const url = URL.createObjectURL(file);
      setAvatar(url);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow space-y-12">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center">
          <div className="relative group">
            <img
              src={avatar}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-600 dark:border-blue-400"
            />
            <label
              htmlFor="avatarUpload"
              className="absolute bottom-0 left-0 right-0 text-xs text-white bg-black bg-opacity-50 py-1 cursor-pointer opacity-0 group-hover:opacity-100 transition"
            >
              Change Photo
            </label>
            <input
              type="file"
              id="avatarUpload"
              className="hidden"
              accept="image/*"
              onChange={handleAvatarChange}
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-4">
            {user?.name || 'Unknown User'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{user?.email || 'No email provided'}</p>
          <span className="mt-2 inline-block bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-white text-sm px-3 py-1 rounded-full">
            {user?.role || 'Student'}
          </span>
        </div>

        {/* Change Password Form */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Change Password
          </h3>
          {message && <p className="mb-4 text-green-600 dark:text-green-400">{message}</p>}
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Current Password
              </label>
              <input
                type="password"
                className="mt-1 w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                New Password
              </label>
              <input
                type="password"
                className="mt-1 w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
