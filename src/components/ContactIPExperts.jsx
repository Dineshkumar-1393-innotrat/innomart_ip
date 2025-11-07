import React from 'react';
import { useNavigate } from 'react-router-dom';
import IPLegalExperts from './IPLegalExperts.jsx';

function ContactIPExperts() {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/payment');
  };

  const legalExperts = Array.from({ length: 9 }).map((_, index) => ({
    id: index,
    name: 'Name Of IP Lawyer',
    skills: 'Skills Skills Skills Skills Skills Skills Skills Skills',
    imageUrl: 'https://via.placeholder.com/80'
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto py-8">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 text-sm sm:text-base hover:underline mb-6 flex items-center gap-2"
        >
          &larr; Back
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
            IP Legal Experts
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Choose an expert to review your intellectual property and provide legal consultation
          </p>
        </div>

        <IPLegalExperts experts={legalExperts} onBookAppointment={handleBookAppointment} />
      </div>
    </div>
  );
}

export default ContactIPExperts;
