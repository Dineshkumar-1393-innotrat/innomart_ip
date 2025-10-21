import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useUser } from '../context/UserContext.jsx';
import { Building2, Rocket, Users } from 'lucide-react';

function UserTypeSelection() {
  const navigate = useNavigate();
  const { dispatch } = useUser();
  const containerRef = useRef();
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(cardsRef.current,
      { opacity: 0, scale: 0.8, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 0.3, ease: "back.out(1.7)" }
    );
  }, []);

  const handleUserTypeSelect = (userType) => {
    dispatch({ type: 'SET_USER_TYPE', payload: userType });
    gsap.to(containerRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => navigate('/signup')
    });
  };

  const userTypes = [
    {
      type: 'Institutions',
      icon: Building2,
      description: 'Academic institutions and research organizations',
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: 'Startup',
      icon: Rocket,
      description: 'Growing companies and entrepreneurs',
      color: 'from-purple-500 to-purple-600'
    },
    {
      type: 'Innovators',
      icon: Users,
      description: 'Individual inventors and creators',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">INNOMART</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 px-4">
          So We Can Get You To The Right Place, Which Sounds Most Like You?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {userTypes.map((userType, index) => {
            const IconComponent = userType.icon;
            return (
              <div
                key={userType.type}
                ref={el => cardsRef.current[index] = el}
                onClick={() => handleUserTypeSelect(userType.type)}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r ${userType.color} flex items-center justify-center`}>
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{userType.type}</h3>
                <p className="text-sm sm:text-base text-gray-600">{userType.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserTypeSelection;
