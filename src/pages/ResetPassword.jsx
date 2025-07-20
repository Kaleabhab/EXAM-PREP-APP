import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { verifyPasswordResetCode, confirmPasswordReset } from 'firebase/auth';
import { auth } from '../firebase';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const oobCode = searchParams.get('oobCode');

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (oobCode) {
      verifyPasswordResetCode(auth, oobCode)
        .then((email) => setEmail(email))
        .catch(() => setError('Invalid or expired password reset link.'));
    }
  }, [oobCode]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      return setError('Passwords do not match.');
    }

    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setMessage('Password has been reset. Redirecting to login...');
      setTimeout(() => navigate('/login'), 2500);
    } catch (err) {
      setError('Error resetting password: ' + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-semibold text-center">Reset Your Password</h2>
      {email && <p className="text-sm text-gray-600 text-center">Resetting password for: {email}</p>}
      {message && <p className="text-green-600 text-sm text-center">{message}</p>}
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="New password"
          className="w-full px-4 py-2 border rounded"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm new password"
          className="w-full px-4 py-2 border rounded"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Set New Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
