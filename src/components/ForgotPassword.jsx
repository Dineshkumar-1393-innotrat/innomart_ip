// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Mail, Lock } from 'lucide-react';
// import panaImage from '../assets/pana.png'; // left illustration

// function ForgotPassword() {
//   const navigate = useNavigate();

//   const [step, setStep] = useState('request'); // 'request' | 'verify'
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [timer, setTimer] = useState(0); // seconds

//   // countdown for resend OTP
//   useEffect(() => {
//     if (!otpSent || timer <= 0) return;
//     const id = setInterval(() => setTimer((t) => t - 1), 1000);
//     return () => clearInterval(id);
//   }, [otpSent, timer]);

//   const handleSendOtp = async (e) => {
//     e.preventDefault();
//     // TODO: call backend API to send OTP to email
//     // await api.post('/auth/forgot-password', { email });
//     setOtpSent(true);
//     setTimer(60);          // 60 seconds countdown
//     setStep('verify');     // move to OTP + reset section
//   };

//   const handleResendOtp = async () => {
//     if (timer > 0) return;
//     // TODO: call backend resend endpoint
//     // await api.post('/auth/resend-otp', { email });
//     setOtp('');
//     setTimer(60);
//     setOtpSent(true);
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     if (newPassword !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }
//     // TODO: verify OTP and reset password with backend
//     // await api.post('/auth/reset-password', { email, otp, newPassword });
//     alert('Password reset successful. Please login with your new password.');
//     navigate('/login');
//   };

//   const formatTime = (s) => {
//     const mm = String(Math.floor(s / 60)).padStart(2, '0');
//     const ss = String(s % 60).padStart(2, '0');
//     return `${mm}:${ss}`;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center">
//       <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden">
        
//         {/* Left illustration */}
//         <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-12">
//           <div className="w-full max-w-md">
//             <img
//               src={panaImage}
//               alt="Forgot password illustration"
//               className="w-full h-auto object-contain"
//             />
//           </div>
//         </div>

//         {/* Right content */}
//         <div className="w-full lg:w-1/2 p-8 sm:p-12">
//           <button
//             type="button"
//             onClick={() => navigate(-1)}
//             className="text-sm text-gray-500 hover:text-gray-700 mb-4"
//           >
//             ← Back
//           </button>

//           <div className="mb-6">
//             <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
//               Forgot Password
//             </h1>
//             <p className="text-sm sm:text-base text-gray-500 mt-2">
//               No worries, we&apos;ll send you reset instructions.
//             </p>
//           </div>

//           {/* Step 1: enter email */}
//           {step === 'request' && (
//             <form onSubmit={handleSendOtp} className="space-y-6">
//               <div>
//                 <label className="text-sm font-medium text-gray-700">Email ID</label>
//                 <div className="relative mt-1">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="xyz@gmail.com"
//                     className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                     required
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
//               >
//                 Send OTP
//               </button>
//             </form>
//           )}

//           {/* Step 2: OTP + new password */}
//           {step === 'verify' && (
//             <form onSubmit={handleResetPassword} className="space-y-6">
//               <div>
//                 <label className="text-sm font-medium text-gray-700">Email ID</label>
//                 <input
//                   type="email"
//                   value={email}
//                   disabled
//                   className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-100 text-gray-600 text-sm"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-gray-700">Enter OTP</label>
//                 <input
//                   type="text"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   placeholder="Enter OTP sent to your email"
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
//                   required
//                 />
//                 {otpSent && (
//                   <div className="mt-2 text-xs text-gray-600 flex items-center gap-2">
//                     <span>OTP sent successfully!</span>
//                     {timer > 0 && <span>{formatTime(timer)}</span>}
//                     <button
//                       type="button"
//                       onClick={handleResendOtp}
//                       disabled={timer > 0}
//                       className={`ml-2 underline ${
//                         timer > 0 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600'
//                       }`}
//                     >
//                       Resend OTP
//                     </button>
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-gray-700">
//                   New Password
//                 </label>
//                 <div className="relative mt-1">
//                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <input
//                     type="password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     placeholder="Enter new password"
//                     className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-gray-700">
//                   Confirm Password
//                 </label>
//                 <div className="relative mt-1">
//                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <input
//                     type="password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     placeholder="Re‑enter new password"
//                     className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                     required
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
//               >
//                 Reset Password
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ForgotPassword;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import panaImage from '../assets/Pana.png';

function ForgotPassword() {
  const navigate = useNavigate();

  // steps: request (enter email) -> verify (otp, then password)
  const [step, setStep] = useState('request'); // 'request' | 'verify'
  const [otpVerified, setOtpVerified] = useState(false);

  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0); // seconds left to resend

  // countdown timer
  useEffect(() => {
    if (!otpSent || timer <= 0) return;
    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [otpSent, timer]);

  const formatTime = (s) => {
    const mm = String(Math.floor(s / 60)).padStart(2, '0');
    const ss = String(s % 60).padStart(2, '0');
    return `${mm}:${ss}`;
  };

  // step 1: send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    // TODO: call backend to send OTP to this email
    // await api.post('/auth/forgot-password', { email });

    setOtpSent(true);
    setTimer(60);
    setStep('verify');
  };

  // step 2a: verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp.trim()) {
      alert('Please enter OTP');
      return;
    }

    // TODO: verify OTP with backend
    // await api.post('/auth/verify-otp', { email, otp });

    setOtpVerified(true); // show password fields
  };

  // step 2b: reset password (after OTP verification)
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // TODO: call backend to actually reset password
    // await api.post('/auth/reset-password', { email, otp, newPassword });

    alert('Password reset successful. Please login with your new password.');
    navigate('/login');
  };

  const handleResendOtp = async () => {
    if (timer > 0 || otpVerified) return;

    // TODO: call backend to resend OTP
    // await api.post('/auth/resend-otp', { email });

    setOtp('');
    setOtpSent(true);
    setTimer(60);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden">

        {/* Left illustration */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-12">
          <div className="w-full max-w-md">
            <img
              src={panaImage}
              alt="Forgot password illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right panel */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-sm text-gray-500 hover:text-gray-700 mb-4"
          >
            ← Back
          </button>

          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Forgot Password
            </h1>
            <p className="text-sm sm:text-base text-gray-500 mt-2">
              No worries, we&apos;ll send you reset instructions.
            </p>
          </div>

          {/* STEP 1: Enter email and send OTP */}
          {step === 'request' && (
            <form onSubmit={handleSendOtp} className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700">Email ID</label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="xyz@gmail.com"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Send OTP
              </button>
            </form>
          )}

          {/* STEP 2: OTP first, then password after verification */}
          {step === 'verify' && (
            <form
              onSubmit={otpVerified ? handleResetPassword : handleVerifyOtp}
              className="space-y-6"
            >
              {/* Email (readonly) */}
              <div>
                <label className="text-sm font-medium text-gray-700">Email ID</label>
                <input
                  type="email"
                  value={email}
                  disabled
                  className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-100 text-gray-600 text-sm"
                />
              </div>

              {/* OTP */}
              <div>
                <label className="text-sm font-medium text-gray-700">Enter OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP sent to your email"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                  disabled={otpVerified}
                />
                {otpSent && (
                  <div className="mt-2 text-xs text-gray-600 flex items-center gap-2">
                    <span>OTP sent successfully!</span>
                    {timer > 0 && <span>{formatTime(timer)}</span>}
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      disabled={timer > 0 || otpVerified}
                      className={`ml-2 underline ${
                        timer > 0 || otpVerified
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-blue-600'
                      }`}
                    >
                      Resend OTP
                    </button>
                  </div>
                )}
              </div>

              {/* Password fields: only after OTP verified */}
              {otpVerified && (
                <>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      New Password
                    </label>
                    <div className="relative mt-1">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <div className="relative mt-1">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Re-enter new password"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                {otpVerified ? 'Reset Password' : 'Verify OTP'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
