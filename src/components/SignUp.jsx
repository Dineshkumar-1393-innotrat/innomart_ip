import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useUser } from '../context/UserContext.jsx';
import { ArrowLeft, Mail, Lock, User, Building } from 'lucide-react';

function SignUp() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const [formData, setFormData] = useState({});
  const formRef = useRef();

  useEffect(() => {
    gsap.fromTo(formRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  const getFormFields = () => {
    switch (state.userType) {
      case 'Startup':
        return [
          { name: 'companyName', label: 'Company Name', icon: Building, type: 'text' },
          { name: 'name', label: 'Primary Person', icon: User, type: 'text' },
          { name: 'email', label: 'Email', icon: Mail, type: 'email' },
          { name: 'username', label: 'Username', icon: User, type: 'text' },
          { name: 'password', label: 'Password', icon: Lock, type: 'password' }
        ];
      case 'Innovators':
        return [
          { name: 'name', label: 'Name', icon: User, type: 'text' },
          { name: 'email', label: 'Email', icon: Mail, type: 'email' },
          { name: 'username', label: 'Username', icon: User, type: 'text' },
          { name: 'password', label: 'Password', icon: Lock, type: 'password' }
        ];
      case 'Institutions':
        return [
          { name: 'institutionName', label: 'Institution Name', icon: Building, type: 'text' },
          { name: 'email', label: 'Email ID', icon: Mail, type: 'email' },
          { name: 'username', label: 'Username', icon: User, type: 'text' },
          { name: 'password', label: 'Password', icon: Lock, type: 'password' }
        ];
      default:
        return [];
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_USER_DATA', payload: formData });
    dispatch({ type: 'LOGIN' });

    gsap.to(formRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.5,
      onComplete: () => navigate('/home')
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div ref={formRef} className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-4 sm:mb-6 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Back
        </button>

        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Sign Up</h2>
          <p className="text-sm sm:text-base text-gray-600">Create your {state.userType} account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {getFormFields().map((field) => {
            const IconComponent = field.icon;
            return (
              <div key={field.name} className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.label}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                  className="w-full pl-8 sm:pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  required
                />
              </div>
            );
          })}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold text-sm sm:text-base"
          >
            Create Account
          </button>
        </form>

        <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
                Already Have An Account? <a href="/login" onClick={(e) => {e.preventDefault(); navigate('/login')}} className="text-blue-600 font-semibold hover:underline">Login</a>
            </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
