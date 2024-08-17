import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleSignUp = () => {
    // Handle Google Sign Up logic here
    console.log("Google Sign Up");
  };

  const handleFacebookSignUp = () => {
    // Handle Facebook Sign Up logic here
    console.log("Facebook Sign Up");
  };

  const handleEmailSignUp = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
    } else {
      // Handle Email Sign Up logic here
      console.log("Email Sign Up", { name, email, password });
      setError('');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <div className="space-y-4">
          <button 
            onClick={handleGoogleSignUp} 
            className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Sign Up with Google
          </button>
          <button 
            onClick={handleFacebookSignUp} 
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Sign Up with Facebook
          </button>
        </div>
        <div className="mt-6">
          <form onSubmit={handleEmailSignUp}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
            >
              Sign Up with Email
            </button>
          </form>
        </div>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
