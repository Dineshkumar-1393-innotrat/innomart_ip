import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const statusTimeline = [
  {
    title: 'IP Uploaded',
    date: 'Oct 18 2025, 12:15pm',
    description: 'Your IP documentation has been uploaded successfully into a secure platform.',
    status: 'completed',
  },
  {
    title: 'AI Evaluation',
    date: 'Oct 19 2025, 02:05pm',
    description: 'AI processing completed. Estimated value – ₹23,000 to ₹25,000.',
    status: 'completed',
  },
  {
    title: 'Under Legal Review',
    date: 'In Progress',
    description: 'Our legal team is reviewing your IP for compliance and verification.',
    status: 'in-progress',
  },
  {
    title: 'Approved/Revision Requested',
    date: 'Pending',
    description: 'Final approval or revision request will be communicated soon.',
    status: 'approved',
  },
];

function IPStatusDetail() {
  const navigate = useNavigate();
  const { ipId } = useParams();
  const isApproved = statusTimeline.some((step) => step.status === 'approved');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 text-sm sm:text-base hover:underline"
          >
            &larr; Back
          </button>
          <button
            onClick={() => navigate(`/contact-ip-experts/${ipId}`)}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact IP Experts
          </button>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">IP Listing Status</h1>
          <p className="text-sm sm:text-base text-gray-600">Track the progress of your intellectual property listing.</p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 sm:p-7 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-sm font-semibold text-blue-900">IP ID – #{ipId}</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">Under Legal Review</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Title Of Intellectual Property</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Description of IP – "IP" can refer to Internet Protocol or Intellectual Property, depending on the context.
            Internet Protocol (IP) is a set of rules and standards for sending data over networks, while an IP address is
            the unique numerical label assigned to devices. On the other hand, Intellectual Property (IP) encompasses creations
            of the mind, such as inventions, literary and artistic works, designs, symbols, names, and images used in commerce.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">Listing Progress</h3>
          <div className="relative">
            <div className="absolute left-4 top-4 bottom-4 border-l-2 border-gray-200" aria-hidden="true"></div>
            <div className="space-y-6 sm:space-y-8">
              {statusTimeline.map((step, index) => (
                <div key={step.title} className="relative pl-12 sm:pl-14">
                  <div
                    className={`absolute left-0 top-1.5 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold shadow-md ${
                      step.status === 'completed'
                        ? 'bg-blue-600'
                        : step.status === 'in-progress'
                        ? 'bg-yellow-400 text-yellow-900'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <h4 className="text-lg font-semibold text-gray-800">{step.title}</h4>
                      <span className="text-xs font-medium text-gray-500">{step.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-end gap-3">
          <button
            onClick={() => isApproved && navigate('/sell-product')}
            disabled={!isApproved}
            className={`px-5 sm:px-8 py-3 rounded-lg font-semibold text-sm sm:text-base transition-transform transform ${
              isApproved
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Proceed To Sell
          </button>
        </div>
      </div>
    </div>
  );
}

export default IPStatusDetail;
