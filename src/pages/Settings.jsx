// src/pages/Settings.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { motion } from 'framer-motion';

const Settings = () => {
  const { user, logout } = useAuth();
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      await updateProfile(auth.currentUser, {
        displayName,
        // photoURL: you can add this if uploading profile pictures
      });

      setMessage('Profile updated successfully.');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, user.email);
      setMessage('Password reset email sent.');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6 text-center">Account Settings</h2>

      {message && <div className="text-green-600 mb-4">{message}</div>}
      {error && <div className="text-red-600 mb-4">{error}</div>}

      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600">Email (read-only)</label>
          <input
            type="email"
            value={user?.email || ''}
            disabled
            className="w-full bg-gray-100 border border-gray-200 px-4 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600">Display Name</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          {loading ? 'Updating...' : 'Update Profile'}
        </motion.button>
      </form>

      <div className="mt-6 space-y-4 text-center">
        <button
          onClick={handleResetPassword}
          className="text-sm text-blue-600 hover:underline"
        >
          Send Password Reset Email
        </button>
        <br />
        <button
          onClick={handleLogout}
          className="text-sm text-red-600 hover:underline"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Settings;
