<<<<<<< HEAD
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaGoogle,
  FaGithub,
  FaFacebook,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
=======
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
>>>>>>> df5358023ecca555f414de334c9ad24adfb8740a

const Login = () => {
  const { login, signInWithGoogle, signInWithGithub, signInWithFacebook, resetPassword } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
<<<<<<< HEAD
      const userCredential = await login(email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        setError('Please verify your email before logging in.');
        setLoading(false);
        return;
      }

=======
      await login(email, password);
>>>>>>> df5358023ecca555f414de334c9ad24adfb8740a
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed.');
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setError('');
    setLoading(true);
    
    try {
<<<<<<< HEAD
      let userCredential;
      switch (provider) {
        case 'Google':
          userCredential = await signInWithGoogle();
          break;
        case 'GitHub':
          userCredential = await signInWithGithub();
          break;
        case 'Facebook':
          userCredential = await signInWithFacebook();
          break;
        default:
          throw new Error('Unsupported provider');
      }

      // Optionally check email verification for social providers if needed
=======
      await signInWithGoogle();
>>>>>>> df5358023ecca555f414de334c9ad24adfb8740a
      navigate('/');
    } catch (err) {
      setError(err.message || `${provider} sign-in failed.`);
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-md mx-auto mt-10 p-6"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back</h1>
        <p className="text-gray-600">Sign in to your account</p>
      </div>

      {error && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm"
        >
          {error}
        </motion.div>
      )}

      {/* Social Login Buttons */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSocialLogin('Google')}
          className="flex items-center justify-center p-3 bg-red-50 text-red-500 rounded-lg shadow"
          aria-label="Login with Google"
          disabled={loading}
        >
          <FaGoogle className="text-xl" />
        </motion.button>

        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSocialLogin('GitHub')}
          className="flex items-center justify-center p-3 bg-gray-800 text-white rounded-lg shadow"
          aria-label="Login with GitHub"
          disabled={loading}
        >
          <FaGithub className="text-xl" />
        </motion.button>

        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSocialLogin('Facebook')}
          className="flex items-center justify-center p-3 bg-blue-600 text-white rounded-lg shadow"
          aria-label="Login with Facebook"
          disabled={loading}
        >
          <FaFacebook className="text-xl" />
        </motion.button>
      </div>

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 text-sm">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Email/Password Login */}
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

        <div className="relative">
          <FaLock className="absolute left-3 top-3.5 text-gray-400" />
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Password"
            required
            disabled={loading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
            disabled={loading}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => navigate('/reset-password')}
            className="text-sm text-purple-600 hover:text-purple-800 hover:underline"
            disabled={loading}
          >
            Forgot password?
          </button>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-lg font-medium disabled:opacity-70"
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </motion.button>
      </form>

      {/* Register Prompt */}
      <div className="mt-6 text-center">
        <button
          onClick={() => navigate('/register')}
          className="text-sm text-gray-600 hover:text-gray-800 hover:underline flex items-center justify-center mx-auto"
          disabled={loading}
        >
          Don&apos;t have an account? Register <FaArrowRight className="ml-1" />
        </button>
      </div>
    </motion.div>
  );
};

export default Login;