import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { CalendarDays, Clock, CheckCircle, ArrowLeft, User, Mail, Video, Phone, MessageCircle } from 'lucide-react';

function ScheduleConsultation() {
  const navigate = useNavigate();
  const cardRef = useRef();

  useEffect(() => {
    gsap.fromTo(cardRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 });
  }, []);

  const [slot, setSlot] = useState('10:00');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().slice(0, 10);
  });
  const [meetingType, setMeetingType] = useState('video');
  const [duration, setDuration] = useState('60');

  const timeSlots = [
    { value: '09:00', label: '9:00 AM - 10:00 AM', available: true },
    { value: '10:00', label: '10:00 AM - 11:00 AM', available: true },
    { value: '11:00', label: '11:00 AM - 12:00 PM', available: false },
    { value: '14:00', label: '2:00 PM - 3:00 PM', available: true },
    { value: '15:00', label: '3:00 PM - 4:00 PM', available: true },
    { value: '16:00', label: '4:00 PM - 5:00 PM', available: true },
    { value: '17:00', label: '5:00 PM - 6:00 PM', available: false }
  ];

  const meetingTypes = [
    { value: 'video', label: 'Video Call', icon: Video, description: 'Google Meet/Zoom' },
    { value: 'phone', label: 'Phone Call', icon: Phone, description: 'Direct phone consultation' },
    { value: 'chat', label: 'Chat Session', icon: MessageCircle, description: 'Text-based consultation' }
  ];

  const handleConfirm = () => {
    gsap.to(cardRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.5,
      onComplete: () => {
        alert('Your consultation has been scheduled!');
        navigate('/home');
      }
    });
  };

  const expert = {
    name: 'Srilaksmi Drisala',
    email: 'srilaksmi@innomart.com',
    specialization: 'IP Law, Patents, Licensing'
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">Schedule Consultation</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Choose your preferred date, time, and meeting type for your expert consultation
            </p>
          </div>

          {/* Expert Info */}
          <div className="bg-blue-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">{expert.name}</h3>
                <p className="text-sm sm:text-base text-gray-600">{expert.specialization}</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Mail className="w-4 h-4 mr-2" />
              {expert.email}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column - Scheduling */}
            <div className="space-y-6">
              {/* Date Selection */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3 text-sm sm:text-base">
                  <CalendarDays className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-600" />
                  Select Date
                </label>
                <input
                  type="date"
                  value={date}
                  min={new Date().toISOString().slice(0, 10)}
                  max={(() => {
                    const maxDate = new Date();
                    maxDate.setDate(maxDate.getDate() + 30);
                    return maxDate.toISOString().slice(0, 10);
                  })()}
                  onChange={e => setDate(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                />
              </div>

              {/* Time Slot Selection */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3 text-sm sm:text-base">
                  <Clock className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                  Available Time Slots
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {timeSlots.map(timeSlot => (
                    <button
                      key={timeSlot.value}
                      onClick={() => timeSlot.available && setSlot(timeSlot.value)}
                      disabled={!timeSlot.available}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm sm:text-base ${
                        slot === timeSlot.value
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : timeSlot.available
                          ? 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 text-gray-700'
                          : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {timeSlot.label}
                      {!timeSlot.available && (
                        <span className="block text-xs text-red-500 mt-1">Booked</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Meeting Type Selection */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3 text-sm sm:text-base">
                  Meeting Type
                </label>
                <div className="space-y-3">
                  {meetingTypes.map(type => {
                    const Icon = type.icon;
                    return (
                      <label
                        key={type.value}
                        className={`flex items-center cursor-pointer p-4 border-2 rounded-xl transition-all duration-200 ${
                          meetingType === type.value
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 bg-white hover:border-blue-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="meetingType"
                          value={type.value}
                          checked={meetingType === type.value}
                          onChange={e => setMeetingType(e.target.value)}
                          className="sr-only"
                        />
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-800 text-sm sm:text-base">{type.label}</div>
                          <div className="text-xs sm:text-sm text-gray-500">{type.description}</div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Summary */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Appointment Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600">Expert</span>
                  <span className="text-sm sm:text-base font-semibold text-gray-800">{expert.name}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600">Date</span>
                  <span className="text-sm sm:text-base font-semibold text-gray-800">
                    {new Date(date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600">Time</span>
                  <span className="text-sm sm:text-base font-semibold text-gray-800">
                    {timeSlots.find(s => s.value === slot)?.label}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600">Duration</span>
                  <span className="text-sm sm:text-base font-semibold text-gray-800">60 minutes</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600">Meeting Type</span>
                  <span className="text-sm sm:text-base font-semibold text-gray-800">
                    {meetingTypes.find(t => t.value === meetingType)?.label}
                  </span>
                </div>
                
                <div className="border-t border-gray-300 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-base sm:text-lg font-bold text-gray-800">Total Cost</span>
                    <span className="text-lg sm:text-xl font-bold text-blue-600">₹2,500</span>
                  </div>
                </div>
              </div>

              {/* Confirmation Button */}
              <button
                onClick={handleConfirm}
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Confirm Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleConsultation;
