import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowLeft, CreditCard, Banknote, Smartphone, Shield, CheckCircle } from 'lucide-react';

const paymentMethods = [
  { 
    label: 'Credit Card', 
    value: 'credit', 
    icon: CreditCard,
    description: 'Visa, Mastercard, American Express',
    processingFee: '2.5%'
  },
  { 
    label: 'Debit Card', 
    value: 'debit', 
    icon: CreditCard,
    description: 'All major debit cards',
    processingFee: '1.5%'
  },
  { 
    label: 'Pay Via UPI', 
    value: 'upi', 
    icon: Smartphone,
    description: 'PhonePe, Google Pay, Paytm',
    processingFee: '0%'
  },
  { 
    label: 'Net Banking', 
    value: 'netbank', 
    icon: Banknote,
    description: 'All major banks',
    processingFee: '1%'
  },
  { 
    label: 'Wallet', 
    value: 'wallet', 
    icon: Smartphone,
    description: 'Paytm, Mobikwik, Freecharge',
    processingFee: '0.5%'
  }
];

function PaymentOptions() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('credit');
  const cardRef = useRef();

  useEffect(() => {
    gsap.fromTo(cardRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 });
  }, []);

  const handlePayment = () => {
    gsap.to(cardRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.5,
      onComplete: () => navigate('/payment-success')
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6">
      <div ref={cardRef} className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6 sm:mb-8 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Back
        </button>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">Payment Options</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Complete your payment to book your expert consultation
            </p>
          </div>

          {/* Pricing Breakdown */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Payment Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base text-gray-600">Expert Consultation (1 hour)</span>
                <span className="text-sm sm:text-base font-semibold text-gray-800">₹2,500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base text-gray-600">Platform Fee</span>
                <span className="text-sm sm:text-base font-semibold text-gray-800">₹250</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base text-gray-600">Processing Fee</span>
                <span className="text-sm sm:text-base font-semibold text-gray-800" id="processing-fee">
                  {selected === 'credit' ? '₹62.50' : 
                   selected === 'debit' ? '₹37.50' : 
                   selected === 'upi' ? '₹0' : 
                   selected === 'netbank' ? '₹25' : '₹12.50'}
                </span>
              </div>
              <div className="border-t border-gray-300 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-base sm:text-lg font-bold text-gray-800">Total Amount</span>
                  <span className="text-lg sm:text-xl font-bold text-blue-600" id="total-amount">
                    {selected === 'credit' ? '₹2,812.50' : 
                     selected === 'debit' ? '₹2,787.50' : 
                     selected === 'upi' ? '₹2,750' : 
                     selected === 'netbank' ? '₹2,775' : '₹2,762.50'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Select Payment Method</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {paymentMethods.map(pm => {
                const Icon = pm.icon;
                return (
                  <label 
                    key={pm.value} 
                    className={`flex items-center cursor-pointer p-4 border-2 rounded-xl transition-all duration-200 hover:shadow-md ${
                      selected === pm.value 
                        ? 'border-blue-600 bg-blue-50 scale-105' 
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      className="sr-only"
                      value={pm.value}
                      checked={selected === pm.value}
                      onChange={() => setSelected(pm.value)}
                    />
                    <div className="flex items-center w-full">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 text-sm sm:text-base">{pm.label}</div>
                        <div className="text-xs sm:text-sm text-gray-500">{pm.description}</div>
                        <div className="text-xs text-green-600 font-medium">
                          {pm.processingFee === '0%' ? 'No processing fee' : `${pm.processingFee} processing fee`}
                        </div>
                      </div>
                      {selected === pm.value && (
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {selected === 'upi' && (
            <div className="bg-white border border-blue-100 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 text-center shadow-inner">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Scan Code And Get Payment Done</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Use any UPI-compatible app to scan the QR code below and complete your payment instantly.
              </p>
              <div className="flex flex-col items-center gap-3">
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi%3A%2F%2Fpay%3Fpa%3Dinnomart%40upi%26pn%3DInnomart%2520IP%2520Services%26am%3D2750%26cu%3DINR"
                    alt="UPI QR Code"
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-500">
                  UPI ID: <span className="font-semibold text-gray-700">innomart@upi</span>
                </p>
              </div>
            </div>
          )}

          {/* Security Features */}
          <div className="bg-green-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-center mb-3">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <h4 className="text-sm sm:text-base font-semibold text-green-800">Secure Payment</h4>
            </div>
            <div className="text-xs sm:text-sm text-green-700 space-y-1">
              <div>• 256-bit SSL encryption</div>
              <div>• PCI DSS compliant</div>
              <div>• Money-back guarantee</div>
              <div>• Secure payment gateway</div>
            </div>
          </div>

          {/* Payment Button */}
          <button
            onClick={handlePayment}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
          >
            Pay ₹{selected === 'credit' ? '2,812.50' : 
                   selected === 'debit' ? '2,787.50' : 
                   selected === 'upi' ? '2,750' : 
                   selected === 'netbank' ? '2,775' : '2,762.50'} & Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentOptions;
