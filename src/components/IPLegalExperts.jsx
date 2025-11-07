// IPLegalExperts.jsx

import React from 'react';

function IPLegalExperts({ experts, onBookAppointment }) {
  return (
    <div className="mt-10">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">IP Legal Experts</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experts.map((expert) => (
          <div key={expert.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src={expert.imageUrl}
              alt={expert.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{expert.name}</h4>
            <p className="text-sm text-gray-600 mb-4">{expert.skills}</p>
            <button
              onClick={onBookAppointment}
              className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IPLegalExperts;
