import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

// You can replace this with an actual illustration component or an <img> tag
const LoginIllustration = () => (
  <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-100 p-12">
    {/* Placeholder for illustration - you can use an SVG or an image here */}
    <div className="w-full max-w-sm">
        <p className='text-center'>Login Illustration</p>
    </div>
  </div>
);

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden">
        
        <LoginIllustration />

        <div className="w-full lg:w-1/2 p-8 sm:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Login</h1>
            <p className="text-gray-500 mt-2">"Where Ideas Meet Impact."</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="xx@gmail.com"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="create your password"
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            <div className="text-right">
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Login
            </button>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Don't Have An Account? <a href="/signup" onClick={(e) => {e.preventDefault(); navigate('/signup')}} className="text-blue-600 font-semibold hover:underline">Signup</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
