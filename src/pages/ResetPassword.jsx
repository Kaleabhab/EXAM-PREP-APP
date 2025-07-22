import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import {
  FaEnvelope,
  FaArrowLeft,
  FaCheckCircle,
  FaExclamationTriangle,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Password reset error:', err);
      setError(getFriendlyError(err?.code));
    } finally {
      setLoading(false);
    }
  };

  const getFriendlyError = (errorCode) => {
    switch (errorCode) {
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/user-not-found':
        return 'No account found with this email.';
      case 'auth/too-many-requests':
        return 'Too many attempts. Please try again later.';
      default:
        return 'Failed to send reset email. Please try again.';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-md mx-auto mt-20 p-6"
    >
      {isSubmitted ? (
        <div className="text-center">
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
            <FaCheckCircle className="mx-auto text-4xl mb-3" />
            <h2 className="text-xl font-semibold mb-2">Check your email</h2>
            <p>We&apos;ve sent a password reset link to <strong>{email}</strong>.</p>
            <p className="text-sm mt-2 text-green-600">
              If you don&apos;t see it, check your spam folder.
            </p>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="text-sm text-purple-600 hover:text-purple-800 hover:underline flex items-center justify-center mx-auto"
          >
            <FaArrowLeft className="mr-1" /> Back to login
          </button>
        </div>
      ) : (
        <>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Reset Password</h1>
            <p className="text-gray-600">Enter your email to receive a reset link</p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg flex items-start"
            >
              <FaExclamationTriangle className="mt-1 mr-2 flex-shrink-0" />
              <span>{error}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Email address"
                required
                disabled={loading}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-lg font-medium disabled:opacity-70"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/login')}
              className="text-sm text-gray-600 hover:text-gray-800 hover:underline flex items-center justify-center mx-auto"
              disabled={loading}
            >
              <FaArrowLeft className="mr-1" /> Back to login
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default ResetPassword;
