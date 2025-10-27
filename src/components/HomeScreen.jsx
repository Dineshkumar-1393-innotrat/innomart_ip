// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { useUser } from '../context/UserContext.jsx';
// import { Plus, Brain, Target, Award, LogOut } from 'lucide-react';
// import Navbar from './Navbar.jsx';
// import InnovationForm from './InnovationForm.jsx';
// function HomeScreen() {
//   const navigate = useNavigate();
//   const { state, dispatch } = useUser();
//   const heroRef = useRef();
//   const featuresRef = useRef([]);

//   useEffect(() => {
//     gsap.fromTo(heroRef.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//     );

//     gsap.fromTo(featuresRef.current,
//       { opacity: 0, y: 20, scale: 0.9 },
//       { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, delay: 0.5 }
//     );
//   }, []);

//   const handleListNewIP = () => {
//     gsap.to(heroRef.current, {
//       scale: 0.95,
//       opacity: 0.8,
//       duration: 0.3,
//       onComplete: () => navigate('/goal-selection')
//     });
//   };

//   const handleLogout = () => {
//     dispatch({ type: 'LOGOUT' });
//     navigate('/');
//   };

//   const features = [
//     { icon: Brain, title: 'AI-Powered Analysis', desc: 'Advanced algorithms evaluate your IP' },
//     { icon: Target, title: 'Market Insights', desc: 'Get comprehensive market analysis' },
//     { icon: Award, title: 'Expert Consultation', desc: 'Connect with industry experts' }
//   ];

//   return (
//     <div className="min-h-screen">
//       <Navbar title={`Welcome, ${state.userData.name || 'User'}`} />

//       <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 text-center">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
//           The next great asset isn't just created—it's enlisted. 
//           <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//             In the age of intelligence,
//           </span>
//           <br />
//           let AI be the strategist that 
// evaluates your IP's true battlefield potential
//         </h2>

//         <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
//           Transform your intellectual property into valuable assets with our AI-powered evaluation platform
//         </p>

//         <button
//           onClick={handleListNewIP}
//           className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-base sm:text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
//         >
//           <Plus className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
//           List New IP
//         </button>
//       </div>
//     <InnovationForm/>
//       <div className="bg-gray-50 py-8 sm:py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {features.map((feature, index) => {
//               const IconComponent = feature.icon;
//               return (
//                 <div
//                   key={index}
//                   ref={el => featuresRef.current[index] = el}
//                   className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
//                     <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
//                   </div>
//                   <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{feature.title}</h3>
//                   <p className="text-sm sm:text-base text-gray-600">{feature.desc}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomeScreen;

// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { useUser } from '../context/UserContext.jsx';
// import { Plus } from 'lucide-react';
// import Navbar from './Navbar.jsx';
// import InnovationForm from './InnovationForm.jsx';

// function HomeScreen() {
//   const navigate = useNavigate();
//   const { state, dispatch } = useUser();
//   const heroRef = useRef();

//   useEffect(() => {
//     gsap.fromTo(heroRef.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//     );
//   }, []);

//   const handleListNewIP = () => {
//     gsap.to(heroRef.current, {
//       scale: 0.95,
//       opacity: 0.8,
//       duration: 0.3,
//       onComplete: () => navigate('/goal-selection')
//     });
//   };

//   const handleLogout = () => {
//     dispatch({ type: 'LOGOUT' });
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen">
//       <Navbar title={`Welcome, ${state.userData.name || 'User'}`} />

//       <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 text-center">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
//           The next great asset isn't just created—it's enlisted. 
//           <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//             In the age of intelligence,
//           </span>
//           <br />
//           let AI be the strategist that evaluates your IP's true battlefield potential
//         </h2>

//         <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
//           Transform your intellectual property into valuable assets with our AI-powered evaluation platform
//         </p>

//         <button
//           onClick={handleListNewIP}
//           className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-base sm:text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
//         >
//           <Plus className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
//           List New IP
//         </button>
//       </div>

//       <InnovationForm/>
//     </div>
//   );
// }

// export default HomeScreen;


// responsive home screen with innovation form

// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { useUser } from '../context/UserContext.jsx';
// import { Plus } from 'lucide-react';
// import Navbar from './Navbar.jsx';
// import InnovationForm from './InnovationForm.jsx';
// import InnoIPHome from './InnoIPHome.jsx';

// function HomeScreen() {
//   const navigate = useNavigate();
//   const { state, dispatch } = useUser();
//   const heroRef = useRef();

//   useEffect(() => {
//     gsap.fromTo(heroRef.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//     );
//   }, []);

//   const handleListNewIP = () => {
//     gsap.to(heroRef.current, {
//       scale: 0.95,
//       opacity: 0.8,
//       duration: 0.3,
//       onComplete: () => navigate('/goal-selection')
//     });
//   };

//   const handleLogout = () => {
//     dispatch({ type: 'LOGOUT' });
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen">
//       <Navbar title={`Welcome, ${state.userData.name || 'User'}`} />

//       <div ref={heroRef} className="max-w-3xl mx-auto px-3 sm:px-4 py-6 sm:py-10 text-center">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-5 leading-tight">
//           The next great asset isn't just created—it's enlisted.
//           <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//             In the age of intelligence,
//           </span>
//           <br />
//           let AI be the strategist that evaluates your IP's true battlefield potential
//         </h2>

//         <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-5 sm:mb-8 max-w-2xl mx-auto px-2">
//           Transform your intellectual property into valuable assets with our AI-powered evaluation platform
//         </p>

//         <button
//           onClick={handleListNewIP}
//           className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm sm:text-base font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
//         >
//           <Plus className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//           List New IP
//         </button>
//       </div>
//       <InnoIPHome />
//       <div className="mx-auto px-3">
//         <InnovationForm />
//       </div>
//     </div>
//   );
// }

// export default HomeScreen;


import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useUser } from "../context/UserContext.jsx";
import { Plus } from "lucide-react";
import Navbar from "./Navbar.jsx";
import InnovationForm from "./InnovationForm.jsx";
import InnoIPHome from "./InnoIPHome.jsx";

function HomeScreen() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const heroRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  const handleListNewIP = () => {
    gsap.to(heroRef.current, {
      scale: 0.95,
      opacity: 0.8,
      duration: 0.3,
      onComplete: () => navigate("/goal-selection"),
    });
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };



  return (
    <div className="min-h-screen bg-white">
      <Navbar title={`Welcome, ${state.userData.name || "User"}`} />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 sm:py-14 md:py-20"
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
          font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 
          leading-snug sm:leading-snug md:leading-tight lg:leading-tight max-w-5xl"
        >
          The next great asset isn't just created—it's enlisted.
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            In the age of intelligence,
          </span>
          <br className="hidden sm:block" />
          let AI be the strategist that evaluates your IP's true battlefield
          potential
        </h2>

        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl 
          text-gray-600 mb-6 sm:mb-8 md:mb-10 
          max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed sm:leading-relaxed md:leading-loose"
        >
          Transform your intellectual property into valuable assets with our
          AI-powered evaluation platform.
        </p>

        <button
          onClick={handleListNewIP}
          className="inline-flex items-center justify-center 
          px-5 sm:px-7 md:px-8 py-3 sm:py-4 
          bg-gradient-to-r from-blue-600 to-purple-600 text-white 
          rounded-full text-sm sm:text-base md:text-lg font-semibold 
          hover:from-blue-700 hover:to-purple-700 
          transform hover:scale-105 transition-all duration-200 
          shadow-lg hover:shadow-2xl"
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2" />
          List New IP
        </button>
      </section>
{/* <section
  ref={heroRef}
  className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden px-6"
>
  
  <div className="absolute inset-0 bg-gradient-to-br from-[#dbeafe] via-white to-[#ede9fe]"></div>

  
  <div className="absolute -top-24 -left-32 w-[40rem] h-[40rem] bg-blue-400/40 rounded-full blur-[160px] animate-pulse"></div>
  <div className="absolute bottom-0 -right-32 w-[45rem] h-[45rem] bg-purple-400/40 rounded-full blur-[180px] animate-pulse"></div>
  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[35rem] h-[35rem] bg-indigo-400/30 rounded-full blur-[140px] animate-pulse"></div>

  
  <div className="relative z-10 backdrop-blur-xl bg-white/50 border border-white/30 shadow-[0_8px_50px_rgba(0,0,0,0.08)] rounded-3xl 
                  p-8 sm:p-12 md:p-16 max-w-5xl mx-auto">
    <h2
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight"
    >
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        The next great asset
      </span>
      isn’t just created — it’s <span className="text-blue-700">enlisted.</span>
    </h2>

    <p
      className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed"
    >
      Let AI be the strategist that evaluates your IP’s true battlefield potential.  
      Transform your intellectual property into powerful, revenue-generating assets.
    </p>

    <button
      onClick={handleListNewIP}
      className="inline-flex items-center justify-center gap-2 px-8 py-4 
                 text-white font-semibold text-lg rounded-full
                 bg-gradient-to-r from-blue-600 to-purple-600 
                 hover:from-blue-700 hover:to-purple-700 
                 transition-all duration-300 transform hover:scale-105 
                 shadow-lg hover:shadow-2xl"
    >
      <Plus className="w-6 h-6" />
      List New IP
    </button>
  </div>
</section> */}

      {/* Image Grid */}
      <InnoIPHome />

      {/* Innovation Form */}
      <div className="mx-auto px-3 sm:px-6 md:px-10 py-8 sm:py-10">
        <InnovationForm />
      </div>
    </div>
  );
}

export default HomeScreen;
