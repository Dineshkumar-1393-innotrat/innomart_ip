import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowLeft, ArrowRight, User, Mail, Link, Star, Clock, Award, Briefcase } from 'lucide-react';

const mockExperts = [
  {
    name: 'Srilaksmi Drisala',
    email: 'srilaksmi@innomart.com',
    linkedin: 'https://linkedin.com/in/srilaksmi',
    portfolio: 'https://innomart.com/expert/srilaksmi',
    specialization: 'IP Law, Patents, Licensing',
    rating: 4.9,
    experience: '12+ years',
    consultations: 450,
    price: '₹2,500/hour',
    availability: 'Available',
    bio: 'Senior IP Attorney with extensive experience in patent prosecution, IP portfolio management, and technology licensing. Specializes in AI, software, and biotechnology patents.',
    achievements: ['Top 1% IP Attorney', '500+ Patents Filed', 'Patent Bar Certified'],
    languages: ['English', 'Hindi', 'Tamil'],
    responseTime: '< 2 hours'
  },
  {
    name: 'Arvind Krishnan',
    email: 'arvind.k@innomart.com',
    linkedin: 'https://linkedin.com/in/arvindkrishnan',
    portfolio: 'https://innomart.com/expert/arvind',
    specialization: 'Technology Law, Commercialization',
    rating: 4.8,
    experience: '8+ years',
    consultations: 320,
    price: '₹2,000/hour',
    availability: 'Available',
    bio: 'Technology commercialization expert with deep knowledge of startup ecosystems, venture capital, and IP monetization strategies. Former startup founder.',
    achievements: ['Ex-Startup Founder', 'VC Advisory Board', 'Tech Transfer Expert'],
    languages: ['English', 'Hindi', 'Kannada'],
    responseTime: '< 4 hours'
  }
];

function ExpertConsultation() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const cardRef = useRef();

  useEffect(() => {
    gsap.fromTo(cardRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 });
  }, []);

  const handleBook = () => {
    gsap.to(cardRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.5,
      onComplete: () => navigate('/payment')
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6">
      <div ref={cardRef} className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6 sm:mb-8 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Back
        </button>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">Expert Consultation</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              Select an expert to book your session or submit for legal/IP review.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {mockExperts.map((expert, i) => (
              <div
                key={expert.email}
                className={`border-2 rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-300 cursor-pointer ${
                  selected === i 
                    ? 'border-blue-600 bg-blue-50 scale-105' 
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-xl'
                }`}
                onClick={() => setSelected(i)}
              >
                {/* Expert Header */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <User className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">{expert.name}</h3>
                      <div className="flex items-center mt-1">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm sm:text-base font-semibold text-gray-700">{expert.rating}</span>
                        <span className="text-xs sm:text-sm text-gray-500 ml-2">({expert.consultations} consultations)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg sm:text-xl font-bold text-green-600">{expert.price}</div>
                    <div className="text-xs sm:text-sm text-green-500">{expert.availability}</div>
                  </div>
                </div>

                {/* Specialization & Experience */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs sm:text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                      {expert.specialization}
                    </span>
                    <span className="text-xs sm:text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">
                      {expert.experience} experience
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {expert.bio}
                </p>

                {/* Achievements */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-700 mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {expert.achievements.map((achievement, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 rounded-md">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-4 sm:mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2 text-purple-500" />
                    {expert.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-green-500" />
                    Response time: {expert.responseTime}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Briefcase className="w-4 h-4 mr-2 text-blue-500" />
                    Languages: {expert.languages.join(', ')}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={expert.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Link className="w-4 h-4 mr-1" />
                    LinkedIn
                  </a>
                  <a 
                    href={expert.portfolio} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-green-600 hover:text-green-800 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Link className="w-4 h-4 mr-1" />
                    Portfolio
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleBook}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
            >
              Book Appointment
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </button>
            
            <button
              onClick={() => navigate('/payment')}
              className="flex-1 bg-white border-2 border-blue-600 text-blue-600 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
            >
              Submit for Legal Review
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertConsultation;
