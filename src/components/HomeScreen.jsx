

// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { gsap } from "gsap";
// import { useUser } from "../context/UserContext.jsx";
// import { Plus } from "lucide-react";
// import Navbar from "./Navbar.jsx";
// import InnovationForm from "./InnovationForm.jsx";
// import InnoIPHome from "./InnoIPHome.jsx";

// function HomeScreen() {
//   const navigate = useNavigate();
//   const { state, dispatch } = useUser();
//   const heroRef = useRef();

//   useEffect(() => {
//     gsap.fromTo(
//       heroRef.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//     );
//   }, []);

//   const handleListNewIP = () => {
//     gsap.to(heroRef.current, {
//       scale: 0.95,
//       opacity: 0.8,
//       duration: 0.3,
//       onComplete: () => navigate("/goal-selection"),
//     });
//   };

//   const handleLogout = () => {
//     dispatch({ type: "LOGOUT" });
//     navigate("/");
//   };



//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar title={`Welcome, ${state.userData.name || "User"}`} />

//       {/* Hero Section */}
//       <section
//         ref={heroRef}
//         className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 sm:py-14 md:py-20"
//       >
//         <h2
//           className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
//           font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 
//           leading-snug sm:leading-snug md:leading-tight lg:leading-tight max-w-5xl"
//         >
//           The next great asset isn't just created—it's enlisted.
//           <br className="hidden sm:block" />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//             In the age of intelligence,
//           </span>
//           <br className="hidden sm:block" />
//           let AI be the strategist that evaluates your IP's true battlefield
//           potential
//         </h2>

//         <p
//           className="text-base sm:text-lg md:text-xl lg:text-2xl 
//           text-gray-600 mb-6 sm:mb-8 md:mb-10 
//           max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed sm:leading-relaxed md:leading-loose"
//         >
//           Transform your intellectual property into valuable assets with our
//           AI-powered evaluation platform.
//         </p>

//         <button
//           onClick={handleListNewIP}
//           className="inline-flex items-center justify-center 
//           px-5 sm:px-7 md:px-8 py-3 sm:py-4 
//           bg-gradient-to-r from-blue-600 to-purple-600 text-white 
//           rounded-full text-sm sm:text-base md:text-lg font-semibold 
//           hover:from-blue-700 hover:to-purple-700 
//           transform hover:scale-105 transition-all duration-200 
//           shadow-lg hover:shadow-2xl"
//         >
//           <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2" />
//           List New IP
//         </button>
//       </section>
// {/* <section
//   ref={heroRef}
//   className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden px-6"
// >
  
//   <div className="absolute inset-0 bg-gradient-to-br from-[#dbeafe] via-white to-[#ede9fe]"></div>

  
//   <div className="absolute -top-24 -left-32 w-[40rem] h-[40rem] bg-blue-400/40 rounded-full blur-[160px] animate-pulse"></div>
//   <div className="absolute bottom-0 -right-32 w-[45rem] h-[45rem] bg-purple-400/40 rounded-full blur-[180px] animate-pulse"></div>
//   <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[35rem] h-[35rem] bg-indigo-400/30 rounded-full blur-[140px] animate-pulse"></div>

  
//   <div className="relative z-10 backdrop-blur-xl bg-white/50 border border-white/30 shadow-[0_8px_50px_rgba(0,0,0,0.08)] rounded-3xl 
//                   p-8 sm:p-12 md:p-16 max-w-5xl mx-auto">
//     <h2
//       className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight"
//     >
//       <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//         The next great asset
//       </span>
//       isn’t just created — it’s <span className="text-blue-700">enlisted.</span>
//     </h2>

//     <p
//       className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed"
//     >
//       Let AI be the strategist that evaluates your IP’s true battlefield potential.  
//       Transform your intellectual property into powerful, revenue-generating assets.
//     </p>

//     <button
//       onClick={handleListNewIP}
//       className="inline-flex items-center justify-center gap-2 px-8 py-4 
//                  text-white font-semibold text-lg rounded-full
//                  bg-gradient-to-r from-blue-600 to-purple-600 
//                  hover:from-blue-700 hover:to-purple-700 
//                  transition-all duration-300 transform hover:scale-105 
//                  shadow-lg hover:shadow-2xl"
//     >
//       <Plus className="w-6 h-6" />
//       List New IP
//     </button>
//   </div>
// </section> */}

//       {/* Image Grid */}
//       <InnoIPHome />

//       {/* Innovation Form */}
//       <div className="mx-auto px-3 sm:px-6 md:px-10 py-8 sm:py-10">
//         <InnovationForm />
//       </div>
//     </div>
//   );
// }

// export default HomeScreen;


//07-11-25
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useUser } from "../context/UserContext.jsx";
import { Plus } from "lucide-react";
import Navbar from "./Navbar.jsx";
import InnovationForm from "./InnovationForm.jsx";
import Footer from "./Footer.jsx";
import homepageImage from "../assets/homepage-image.png";
import uploadIcon from "../assets/upload.png";
import validationIcon from "../assets/validation.png";
import reportIcon from "../assets/report.png";
import sellIcon from "../assets/sell.png";
import expertsImage from "../assets/second fold image_experts.png";
import logo from "../assets/logo.png";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function HomeScreen() {
  const navigate = useNavigate();
  const { state } = useUser();
  const heroRef = useRef();
  const heroImageRef = useRef();
  const heroContentRef = useRef();
  const expertsImageRef = useRef();
  const stepIconsRef = useRef([]);

  useEffect(() => {
    // Hero section fade in (on load)
    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Hero background image zoom effect (on load)
    gsap.fromTo(
      heroImageRef.current,
      { scale: 1.2, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 2, 
        ease: "power3.out" 
      }
    );

    // Hero content animation with ScrollTrigger
    gsap.fromTo(
      heroContentRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroContentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Step icons staggered animation
    gsap.fromTo(
      stepIconsRef.current,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: stepIconsRef.current[0],
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Experts image animation on scroll
    gsap.fromTo(
      expertsImageRef.current,
      { opacity: 0, x: -50, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: expertsImageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const handleImageHover = () => {
    gsap.to(expertsImageRef.current, {
      scale: 1.05,
      rotation: 2,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleImageLeave = () => {
    gsap.to(expertsImageRef.current, {
      scale: 1,
      rotation: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleStepIconHover = (index) => {
    gsap.to(stepIconsRef.current[index], {
      scale: 1.15,
      rotation: 5,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleStepIconLeave = (index) => {
    gsap.to(stepIconsRef.current[index], {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleListNewIP = () => {
    navigate("/goal-selection");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Navbar title={<img src={logo} alt="logo" className="h-8" />} />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] text-center w-full overflow-hidden"
      >
        {/* Background Image */}
        <div 
          ref={heroImageRef}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${homepageImage})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            imageRendering: "crisp-edges",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        
        {/* Content */}
        <div ref={heroContentRef} className="relative z-10 max-w-5xl mx-auto py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 md:mb-10 leading-tight drop-shadow-2xl">
            Stop letting your innovation gather dust on a shelf. The market for your idea is waiting
          </h1>
          <button
            onClick={handleListNewIP}
            className="inline-flex items-center justify-center px-7 sm:px-8 md:px-10 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-semibold bg-white text-blue-600 rounded-full shadow-2xl hover:bg-blue-50 hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <Plus className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            List New IP
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-800">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { step: "Step 1", icon: uploadIcon, label: "Upload & AI Scan" },
            { step: "Step 2", icon: validationIcon, label: "Legal Expert Validation" },
            { step: "Step 3", icon: reportIcon, label: "Receive Your Comprehensive Report" },
            { step: "Step 4", icon: sellIcon, label: "List & Sell Your Asset" }
          ].map(({ step, icon, label }, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div 
                ref={(el) => (stepIconsRef.current[i] = el)}
                className="w-20 h-20 mb-4 overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onMouseEnter={() => handleStepIconHover(i)}
                onMouseLeave={() => handleStepIconLeave(i)}
              >
                <img 
                  src={icon} 
                  alt={label} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-lg font-semibold mt-2 text-gray-800">{step}</div>
              <div className="text-sm mt-2 text-gray-600 leading-relaxed">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition & Form */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Left Side - Image */}
          <div className="w-full  md:w-5/12 flex items-center justify-center">
            <div className="relative w-full max-w-md md:max-w-lg overflow-hidden rounded-2xl">
              <img 
                ref={expertsImageRef}
                src={expertsImage} 
                alt="Expert Team" 
                className="w-full h-auto shadow-xl object-cover cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
                style={{ aspectRatio: '4/5' }}
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageLeave}
              />
            </div>
          </div>
          
          {/* Right Side - Content & Form */}
          <div className="w-full md:w-7/12 flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-center md:text-left">
             "Upload Your IP, Consult an Expert, Unlock Its Value."
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-6 leading-relaxed text-center md:text-left">
              <span className="block text-gray-800 font-medium">
                We provide the pathway to monetize your intellectual property.
              </span>
              <span className="block mt-1">
                Leverage our unique dual-assessment platform  <span />
                <span />
                <span className="font-semibold text-blue-600"> cutting-edge AI analysis </span>
                with
                <span className="font-semibold text-purple-600"> verified legal expertise</span>.
              </span>
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
              <InnovationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomeScreen;
