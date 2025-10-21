import React from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentSuccess() {
  const navigate = useNavigate();

  const handleCheckStatus = () => {
    navigate('/legal-review-status');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-10 sm:p-16 text-center max-w-xl w-full">
        <div className="w-56 sm:w-64 mx-auto mb-8">
          <img
            src="https://cdn.dribbble.com/users/922931/screenshots/3474349/media/9cbda52d9b33f733e6fe26d53c4cba4c.png?compress=1&resize=800x600&vertical=top"
            alt="Payment Success"
            className="w-full h-auto object-contain"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
          Payment Successfully Done!
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-8">
          Thank you for completing the payment. You can now track the status of your IP legal review.
        </p>
        <button
          onClick={handleCheckStatus}
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md"
        >
          Check Status
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccess;
