import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { login, signInWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [error, setError] = useState('');
  const [resetMessage, setResetMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed.');
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (err) {
      setError(err.message || 'Google sign-in failed.');
    }
  };

  const handleResetPassword = async () => {
    setResetMessage('');
    if (!resetEmail) {
      setResetMessage('Please enter your email.');
      return;
    }

    try {
      await resetPassword(resetEmail);
      setResetMessage('Password reset link sent to your email.');
    } catch (err) {
      setResetMessage('Error: ' + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow space-y-6">
      <h2 className="text-xl font-semibold text-center">Login</h2>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      <div className="mt-6 bg-gray-50 p-4 rounded border">
        <p className="text-sm text-gray-600 mb-2">
          Forgot your password? Enter your email below to receive a reset link.
        </p>
        <div className="flex space-x-2">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-3 py-2 border rounded"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
          />
          <button
            onClick={handleResetPassword}
            className="bg-yellow-500 text-white px-4 rounded hover:bg-yellow-600"
          >
            Send Link
          </button>
        </div>
        {resetMessage && (
          <p className="mt-2 text-green-600 text-sm">{resetMessage}</p>
        )}
      </div>

      <hr className="my-4" />

      <button
        onClick={handleGoogleLogin}
        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
      >
        Sign in with Google
      </button>

      <div className="text-center text-sm text-gray-500">
        New here?{' '}
        <Link to="/register" className="text-blue-600 hover:underline">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;