import React from 'react';
import { useNavigate } from 'react-router-dom';

const mockIPs = Array.from({ length: 12 }).map((_, index) => ({
  id: index + 1,
  title: `Intellectual Property Title ${index + 1}`,
  description:
    'Description of IP – “IP” can refer to internet protocol or intellectual property, depending on the context. Intellectual property (IP) is a set of rules and standards for sending data over networks, while an IP address is the unique numeric identifier for each device.',
  status: index % 3 === 0 ? 'Approved' : index % 3 === 1 ? 'Under Review' : 'Awaiting Payment',
}));

function LegalReviewStatus() {
  const navigate = useNavigate();

  const handleShowStatus = (ipId) => {
    navigate(`/legal-review-status/${ipId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6 sm:mb-8 text-sm sm:text-base"
        >
          &larr; Back
        </button>

        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">IP Legal Review Status</h1>
          <p className="text-sm sm:text-base text-gray-600">
            Track the review progress of all your submitted intellectual properties.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockIPs.map((ip) => (
            <div
              key={ip.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-200"
            >
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{ip.title}</h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-5">
                  {ip.description}
                </p>
              </div>
              <div className="mt-auto">
                <span
                  className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full mb-4 ${
                    ip.status === 'Approved'
                      ? 'bg-green-100 text-green-700'
                      : ip.status === 'Under Review'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {ip.status}
                </span>
                <button
                  onClick={() => handleShowStatus(ip.id)}
                  className="w-full bg-blue-600 text-white rounded-lg py-2 sm:py-3 font-semibold text-sm sm:text-base hover:bg-blue-700 transition-all duration-200"
                >
                  Show Status
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-10 text-gray-500">
          <button className="px-3 py-1 rounded-full hover:bg-gray-200">&lt;</button>
          <button className="px-3 py-1 rounded-full bg-blue-600 text-white">1</button>
          <button className="px-3 py-1 rounded-full hover:bg-gray-200">2</button>
          <button className="px-3 py-1 rounded-full hover:bg-gray-200">3</button>
          <button className="px-3 py-1 rounded-full hover:bg-gray-200">&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default LegalReviewStatus;
