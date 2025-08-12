import { useState, type ChangeEvent } from 'react';
import { Eye, EyeOff, Mail, Lock, User, StickyNote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    navigate('/notes');
    console.log('Form submitted:', formData);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log('Google sign-in clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-slate-900 dark:to-zinc-900 flex items-center justify-center p-4 transition-all duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-amber-400 dark:bg-amber-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 dark:bg-orange-700 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-400 dark:bg-yellow-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/20 dark:border-gray-700/50 transition-all duration-500">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl mb-4 shadow-lg">
            <StickyNote className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            BitNotes
          </h1>
          <p className="text-sm mt-3 font-medium italic text-amber-700/80 dark:text-amber-300/80 transition-colors duration-300">
            "Save your thoughts, one bit at a time — BitNotes."
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-4 transition-colors duration-300">
            {isLogin
              ? 'Welcome back! Sign in to your notes.'
              : 'Create your account and start noting.'}
          </p>
        </div>

        {/* Auth Toggle */}
        <div className="flex mb-8 bg-gray-100 dark:bg-gray-800 rounded-2xl p-1 transition-colors duration-300">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 px-4 rounded-xl cursor-pointer text-sm font-semibold transition-all duration-300 ${
              isLogin
                ? 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-md'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 px-4 rounded-xl cursor-pointer text-sm font-semibold transition-all duration-300 ${
              !isLogin
                ? 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-md'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {!isLogin && (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400 dark:text-gray-500 transition-colors duration-300" />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-0 rounded-2xl focus:bg-white dark:focus:bg-gray-700 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all duration-300 text-gray-800 dark:text-gray-100 placeholder-gray-500"
                required={!isLogin}
              />
            </div>
          )}

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400 dark:text-gray-500 transition-colors duration-300" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-0 rounded-2xl focus:bg-white dark:focus:bg-gray-700 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all duration-300 text-gray-800 dark:text-gray-100 placeholder-gray-500"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400 dark:text-gray-500 transition-colors duration-300" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pl-12 pr-12 py-4 bg-gray-50 dark:bg-gray-800 border-0 rounded-2xl focus:bg-white dark:focus:bg-gray-700 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all duration-300 text-gray-800 dark:text-gray-100 placeholder-gray-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" />
              )}
            </button>
          </div>

          {isLogin && (
            <div className="text-right">
              <a
                href="#"
                className="text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors"
              >
                Forgot Password?
              </a>
            </div>
          )}

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r cursor-pointer from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="flex-1 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"></div>
          <span className="px-4 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900/80 transition-colors duration-300">
            or
          </span>
          <div className="flex-1 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"></div>
        </div>

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex cursor-pointer items-center justify-center gap-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold py-4 rounded-2xl transition-all duration-300 hover:shadow-md group"
        >
          <svg
            className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
            viewBox="0 0 24 24"
          >
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-amber-600 hover:text-amber-700 font-semibold transition-colors"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500 transition-colors duration-300">
            By continuing, you agree to our{' '}
            <a
              href="#"
              className="text-amber-600 hover:text-amber-700 transition-colors"
            >
              Terms
            </a>{' '}
            and{' '}
            <a
              href="#"
              className="text-amber-600 hover:text-amber-700 transition-colors"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
