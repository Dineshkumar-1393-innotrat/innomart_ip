// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { useIP } from '../context/IPContext.jsx';
// import { DollarSign, Handshake, TrendingUp, ArrowLeft } from 'lucide-react';

// function GoalSelection() {
//   const navigate = useNavigate();
//   const { dispatch } = useIP();
//   const containerRef = useRef();
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     gsap.fromTo(containerRef.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 0.8 }
//     );

//     gsap.fromTo(cardsRef.current,
//       { opacity: 0, y: 20, scale: 0.9 },
//       { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, delay: 0.3 }
//     );
//   }, []);

//   const handleGoalSelect = (goal) => {
//     dispatch({ type: 'SET_GOAL', payload: goal });

//     gsap.to(containerRef.current, {
//       opacity: 0,
//       y: -20,
//       duration: 0.5,
//       onComplete: () => navigate('/ip-submission/step1')
//     });
//   };

//   const goals = [
//     {
//       title: 'I Would Like To Sell My IP Product',
//       icon: DollarSign,
//       description: 'Complete transfer of intellectual property rights',
//       color: 'from-green-500 to-green-600'
//     },
//     {
//       title: 'I Would Like To License My IP Product To A Company',
//       icon: Handshake,
//       description: 'Grant usage rights while retaining ownership',
//       color: 'from-blue-500 to-blue-600'
//     },
//     {
//       title: 'I Would Like To Sell And License My IP Product',
//       icon: TrendingUp,
//       description: 'Hybrid approach for maximum monetization',
//       color: 'from-purple-500 to-purple-600'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6">
//       <div ref={containerRef} className="max-w-4xl mx-auto py-8 sm:py-12">
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center text-gray-600 hover:text-gray-800 mb-6 sm:mb-8 text-sm sm:text-base"
//         >
//           <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//           Back to Home
//         </button>

//         <div className="text-center mb-8 sm:mb-12">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
//             What's Your Goal?
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
//             Choose how you'd like to monetize your intellectual property
//           </p>
//         </div>

//         <div className="space-y-4 sm:space-y-6">
//           {goals.map((goal, index) => {
//             const IconComponent = goal.icon;
//             return (
//               <div
//                 key={index}
//                 ref={el => cardsRef.current[index] = el}
//                 onClick={() => handleGoalSelect(goal.title)}
//                 className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl cursor-pointer transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
//               >
//                 <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${goal.color} flex items-center justify-center flex-shrink-0`}>
//                   <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{goal.title}</h3>
//                   <p className="text-sm sm:text-base text-gray-600">{goal.description}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GoalSelection;


import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useIP } from '../context/IPContext.jsx';
import { DollarSign, Handshake, TrendingUp, ArrowLeft } from 'lucide-react';

function GoalSelection() {
  const navigate = useNavigate();
  const { dispatch } = useIP();
  const containerRef = useRef();
  const cardsRef = useRef([]);
  const [selectedGoal, setSelectedGoal] = useState(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    );
    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, delay: 0.3 }
    );
  }, []);

  const handleGoalSelect = (goal) => {
    setSelectedGoal(goal.title);
  };

  const handleSubmit = () => {
    if (selectedGoal) {
      dispatch({ type: 'SET_GOAL', payload: selectedGoal });
      gsap.to(containerRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => navigate('/ip-submission/step1')
      });
    } else {
      alert('Please select a goal before submitting.');
    }
  };

  const handleCancel = () => {
    navigate(-1); // Go back to previous page or home
  };

  const goals = [
    {
      title: 'I Would Like To Sell My IP Product',
      icon: DollarSign,
      description: 'Complete transfer of intellectual property rights',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'I Would Like To License My IP Product To A Company',
      icon: Handshake,
      description: 'Grant usage rights while retaining ownership',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'I Would Like To Sell And License My IP Product',
      icon: TrendingUp,
      description: 'Hybrid approach for maximum monetization',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6">
      <div ref={containerRef} className="max-w-4xl mx-auto py-8 sm:py-12">
        <button
          onClick={handleCancel}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6 sm:mb-8 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Back to Home
        </button>

        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            What's Your Goal?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
choose the option which fits your goal ?          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {goals.map((goal, index) => {
            const IconComponent = goal.icon;
            const isSelected = selectedGoal === goal.title;
            return (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                onClick={() => handleGoalSelect(goal)}
                className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl cursor-pointer transform hover:-translate-y-1 transition-all duration-300 border flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 ${
                  isSelected ? 'border-2 border-blue-500 ring-2 ring-blue-100' : 'border-gray-100'
                }`}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${goal.color} flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{goal.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{goal.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Cancel and Submit buttons */}
        <div className="flex justify-end gap-4 mt-10">
          <button
            onClick={handleCancel}
            className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition"
            type="button"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default GoalSelection;
