import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useUser } from '../context/UserContext.jsx';
import { Plus, Brain, Target, Award, LogOut } from 'lucide-react';

function HomeScreen() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const heroRef = useRef();
  const featuresRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(featuresRef.current,
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, delay: 0.5 }
    );
  }, []);

  const handleListNewIP = () => {
    gsap.to(heroRef.current, {
      scale: 0.95,
      opacity: 0.8,
      duration: 0.3,
      onComplete: () => navigate('/goal-selection')
    });
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  const features = [
    { icon: Brain, title: 'AI-Powered Analysis', desc: 'Advanced algorithms evaluate your IP' },
    { icon: Target, title: 'Market Insights', desc: 'Get comprehensive market analysis' },
    { icon: Award, title: 'Expert Consultation', desc: 'Connect with industry experts' }
  ];

  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-sm px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            INNOMART
          </h1>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="text-sm sm:text-base text-gray-600 hidden sm:block">
              Welcome, {state.userData.name || 'User'}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 sm:hidden">
              {state.userData.name || 'User'}
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center px-2 sm:px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
              title="Logout"
            >
              <LogOut className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
          In The Age Of Intelligence,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Let AI Be The Strategist
          </span>
          <br />
          That Evaluates You
        </h2>

        <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          Transform your intellectual property into valuable assets with our AI-powered evaluation platform
        </p>

        <button
          onClick={handleListNewIP}
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-base sm:text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
        >
          <Plus className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
          List New IP
        </button>
      </div>

      <div className="bg-gray-50 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  ref={el => featuresRef.current[index] = el}
                  className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
