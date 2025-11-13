
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useIP } from '../context/IPContext.jsx';
import { ArrowLeft, ArrowRight, FileText, Tag, Grid3X3, Home } from 'lucide-react';
import homepageImage from '../assets/homepage-image.png';

function IPSubmissionStep1() {
  const navigate = useNavigate();
  const { state, dispatch } = useIP();
  const [formData, setFormData] = useState(state.step1Data);
  const formRef = useRef();

  useEffect(() => {
    gsap.fromTo(formRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8 }
    );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagsChange = (e) => {
    const tags = e.target.value.split(',').map(tag => tag.trim());
    setFormData({ ...formData, tags });
  };

  const handleNext = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_STEP1_DATA', payload: formData });

    gsap.to(formRef.current, {
      opacity: 0,
      x: -30,
      duration: 0.5,
      onComplete: () => navigate('/ip-submission/step2')
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleHome = () => {
    navigate('/home');
  };

  const categories = [
    'Technology', 'Healthcare', 'Energy', 'Agriculture',
    'Manufacturing', 'Software', 'Biotechnology', 'Other'
  ];

  return (
    <div className="min-h-screen relative overflow-hidden p-4 sm:p-6">
      {/* Background Image with Low Opacity */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${homepageImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: 0.15
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80"></div>
      
      {/* Content */}
      <div ref={formRef} className="relative z-10 max-w-2xl mx-auto py-8 sm:py-12">
        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/50 rounded-lg transition-all duration-200 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-medium">Back</span>
          </button>
          
          <button
            onClick={handleHome}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/50 rounded-lg transition-all duration-200 text-sm sm:text-base"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-medium">Home</span>
          </button>
        </div>

        <div className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-0">Basic Information</h2>
              <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start sm:self-auto">
                Step 1 of 3
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-1/3"></div>
            </div>
            <p className="w-full text-sm sm:text-base text-gray-600">Provide the fundamental details about your intellectual property assets</p>
          </div>

          <form onSubmit={handleNext} className="space-y-4 sm:space-y-6">
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                IP Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter your IP title"
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Abstract
              </label>
              <textarea
                name="abstract"
                value={formData.abstract}
                onChange={handleInputChange}
                rows={4}
                placeholder="Describe your intellectual property"
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 text-sm sm:text-base resize-none"
                required
              />
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                <Tag className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Tags (comma separated)
              </label>
              <input
                type="text"
                value={formData.tags.join(', ')}
                onChange={handleTagsChange}
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 text-sm sm:text-base"
                placeholder="e.g., AI, Machine Learning, Automation"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                <Grid3X3 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 text-sm sm:text-base"
                required
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold flex items-center justify-center text-sm sm:text-base shadow-lg hover:shadow-xl"
            >
              Next Step
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IPSubmissionStep1;

// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { useIP } from '../context/IPContext.jsx';
// import { ArrowLeft, ArrowRight, FileText, Tag, Grid3X3 } from 'lucide-react';
// import homepageImage from '../assets/homepage-image.png';

// function IPSubmissionStep1() {
//   const navigate = useNavigate();
//   const { state, dispatch } = useIP();
//   const [formData, setFormData] = useState(state.step1Data);
//   const formRef = useRef();

//   useEffect(() => {
//     gsap.fromTo(formRef.current,
//       { opacity: 0, x: 30 },
//       { opacity: 1, x: 0, duration: 0.8 }
//     );
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleTagsChange = (e) => {
//     const tags = e.target.value.split(',').map(tag => tag.trim());
//     setFormData({ ...formData, tags });
//   };

//   const handleNext = (e) => {
//     e.preventDefault();
//     dispatch({ type: 'SET_STEP1_DATA', payload: formData });

//     gsap.to(formRef.current, {
//       opacity: 0,
//       x: -30,
//       duration: 0.5,
//       onComplete: () => navigate('/ip-submission/step2')
//     });
//   };

//   const categories = [
//     'Technology', 'Healthcare', 'Energy', 'Agriculture',
//     'Manufacturing', 'Software', 'Biotechnology', 'Other'
//   ];

//   return (
//     <div className="min-h-screen relative overflow-hidden p-4 sm:p-6">
//       {/* Background Image with Low Opacity */}
//       <div 
//         className="absolute inset-0 w-full h-full"
//         style={{
//           backgroundImage: `url(${homepageImage})`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           opacity: 0.15
//         }}
//       />
      
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80"></div>
      
//       {/* Content */}
//       <div ref={formRef} className="relative z-10 max-w-2xl mx-auto py-8 sm:py-12">
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center text-gray-600 hover:text-gray-800 mb-6 sm:mb-8 text-sm sm:text-base"
//         >
//           <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//           Back
//         </button>

//         <div className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 sm:p-8">
//           <div className="mb-6 sm:mb-8">
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-0">Basic Information</h2>
//               <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start sm:self-auto">
//                 Step 1 of 3
//               </span>
              
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-1/3"></div>
//             </div>
//           </div>

//           <form onSubmit={handleNext} className="space-y-4 sm:space-y-6">
//             <div>
//            <p className=" w-full text-sm sm:text-base text-gray-800">provide the fundamental details about your intellectual property assets</p>

//               <label className="flex items-center text-gray-700 font-semibold mb-2 text-sm sm:text-base">
//                 <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//                 IP Title
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 placeholder="Enter your IP title"
//                 className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
//                 required
//               />
//             </div>

//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2 text-sm sm:text-base">
//                 <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//                 Abstract
//               </label>
//               <textarea
//                 name="abstract"
//                 value={formData.abstract}
//                 onChange={handleInputChange}
//                 rows={4}
//                 placeholder="Describe your intellectual property"
//                 className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base resize-none"
//                 required
//               />
//             </div>

//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2 text-sm sm:text-base">
//                 <Tag className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//                 Tags (comma separated)
//               </label>
//               <input
//                 type="text"
//                 value={formData.tags.join(', ')}
//                 onChange={handleTagsChange}
//                 className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
//                 placeholder="e.g., AI, Machine Learning, Automation"
//               />
//             </div>

//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2 text-sm sm:text-base">
//                 <Grid3X3 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//                 Category
//               </label>
//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
//                 required
//               >
//                 <option value="">Select a category</option>
//                 {categories.map(category => (
//                   <option key={category} value={category}>{category}</option>
//                 ))}
//               </select>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold flex items-center justify-center text-sm sm:text-base"
//             >
//               Next Step
//               <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default IPSubmissionStep1;

