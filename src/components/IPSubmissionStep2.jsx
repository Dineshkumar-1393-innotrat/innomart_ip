import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useIP } from '../context/IPContext.jsx';
import { ArrowLeft, ArrowRight, FileText, Upload, Home, X } from 'lucide-react';
import homepageImage from '../assets/homepage-image.png';

function IPSubmissionStep2() {
  const navigate = useNavigate();
  const { state, dispatch } = useIP();

  // ensure step2Data has: { technicalSpecs: '', detailedDescription: '', documents: [] }
  const [formData, setFormData] = useState({
    technicalSpecs: state.step2Data.technicalSpecs || '',
    detailedDescription: state.step2Data.detailedDescription || '',
    documents: state.step2Data.documents || []
  });

  const formRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8 }
    );
  }, []);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // when user selects files, append them to existing list
  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      documents: [...prev.documents, ...newFiles]
    }));
    e.target.value = '';
  };

  const handleRemoveFile = (indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      documents: prev.documents.filter((_, index) => index !== indexToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // extra guard: all fields must be filled
    if (!formData.technicalSpecs.trim()) {
      alert('Technical Specifications is required.');
      return;
    }
    if (!formData.detailedDescription.trim()) {
      alert('Detailed Description is required.');
      return;
    }
    if (!formData.documents || formData.documents.length === 0) {
      alert('Please upload at least one supportive document.');
      return;
    }

    dispatch({ type: 'SET_STEP2_DATA', payload: formData });
    gsap.to(formRef.current, {
      opacity: 0,
      x: -30,
      duration: 0.5,
      onComplete: () => navigate('/ip-submission/step3')
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleHome = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen relative overflow-hidden p-4">
      {/* Background Image with Low Opacity */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${homepageImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80" />

      {/* Content */}
      <div ref={formRef} className="relative z-10 max-w-2xl mx-auto py-12">
        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/50 rounded-lg transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>

          <button
            onClick={handleHome}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/50 rounded-lg transition-all duration-200"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-gray-800">
                Technical Details
              </h2>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                Step 2 of 3
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-2/3" />
            </div>
            <p className="text-gray-600 text-sm">
              Provide the technical details about your intellectual property
              assets
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Technical Specifications (required) */}
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <FileText className="w-5 h-5 mr-2" />
                Technical Specifications
                <span className="ml-1 text-red-500">*</span>
              </label>
              <textarea
                name="technicalSpecs"
                value={formData.technicalSpecs}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                placeholder="Describe the technical features of your IP"
                required
              />
            </div>

            {/* Detailed Description (required) */}
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <FileText className="w-5 h-5 mr-2" />
                Detailed Description
                <span className="ml-1 text-red-500">*</span>
              </label>
              <textarea
                name="detailedDescription"
                value={formData.detailedDescription}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                placeholder="Provide a detailed description"
                required
              />
            </div>

            {/* Supportive Documents (required) */}
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <Upload className="w-5 h-5 mr-2" />
                Supportive Documents
                <span className="ml-1 text-red-500">*</span>
              </label>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                // cannot use `required` directly for multi-step reuse, so validate in handleSubmit
                className="w-full px-4 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer cursor-pointer"
              />

              {formData.documents && formData.documents.length > 0 && (
                <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Selected files:
                  </p>
                  <ul className="space-y-2">
                    {formData.documents.map((file, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between text-sm text-gray-700 bg-white border border-gray-200 rounded-lg px-3 py-2"
                      >
                        <span className="flex items-center">
                          <FileText className="w-4 h-4 mr-2 text-blue-500" />
                          {file.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(index)}
                          className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700"
                        >
                          <X className="w-3 h-3" />
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              Next Step <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IPSubmissionStep2;



// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { useIP } from '../context/IPContext.jsx';
// import { ArrowLeft, ArrowRight, FileText, Upload, Home } from 'lucide-react';
// import homepageImage from '../assets/homepage-image.png';

// function IPSubmissionStep2() {
//   const navigate = useNavigate();
//   const { state, dispatch } = useIP();
//   const [formData, setFormData] = useState(state.step2Data);
//   const formRef = useRef();

//   useEffect(() => {
//     gsap.fromTo(formRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8 });
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, documents: Array.from(e.target.files) });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch({ type: 'SET_STEP2_DATA', payload: formData });
//     gsap.to(formRef.current, {
//       opacity: 0,
//       x: -30,
//       duration: 0.5,
//       onComplete: () => navigate('/ip-submission/step3')
//     });
//   };

//   const handleBack = () => {
//     navigate(-1);
//   };

//   const handleHome = () => {
//     navigate('/home'); // Navigate to /home route
//   };

//   return (
//     <div className="min-h-screen relative overflow-hidden p-4">
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
//       <div ref={formRef} className="relative z-10 max-w-2xl mx-auto py-12">
//         {/* Navigation Buttons */}
//         <div className="flex items-center justify-between mb-8">
//           <button
//             onClick={handleBack}
//             className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/50 rounded-lg transition-all duration-200"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             <span className="font-medium">Back</span>
//           </button>
          
//           <button
//             onClick={handleHome}
//             className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/50 rounded-lg transition-all duration-200"
//           >
//             <Home className="w-5 h-5" />
//             <span className="font-medium">Home</span>
//           </button>
//         </div>

//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           <div className="mb-8">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-3xl font-bold text-gray-800">Technical Details</h2>
//               <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Step 2 of 3</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
//               <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-2/3"></div>
//             </div>
//             <p className="text-gray-600 text-sm">Provide the technical details about your intellectual property assets</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2">
//                 <FileText className="w-5 h-5 mr-2" /> Technical Specifications
//               </label>
//               <textarea
//                 name="technicalSpecs"
//                 value={formData.technicalSpecs}
//                 onChange={handleInputChange}
//                 rows={3}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                 placeholder="Describe the technical features of your IP"
//                 required
//               />
//             </div>

//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2">
//                 <FileText className="w-5 h-5 mr-2" /> Detailed Description
//               </label>
//               <textarea
//                 name="detailedDescription"
//                 value={formData.detailedDescription}
//                 onChange={handleInputChange}
//                 rows={5}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                 placeholder="Provide a detailed description"
//                 required
//               />
//             </div>

//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2">
//                 <Upload className="w-5 h-5 mr-2" /> Supportive Documents
//               </label>
//               <input
//                 type="file"
//                 multiple
//                 onChange={handleFileChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer cursor-pointer"
//               />
//               {formData.documents && formData.documents.length > 0 && (
//                 <div className="mt-3 p-3 bg-gray-50 rounded-lg">
//                   <p className="text-sm font-medium text-gray-700 mb-2">Selected files:</p>
//                   <ul className="space-y-1">
//                     {formData.documents.map((file, i) => (
//                       <li key={i} className="text-sm text-gray-600 flex items-center">
//                         <FileText className="w-4 h-4 mr-2 text-blue-500" />
//                         {file.name}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold flex items-center justify-center shadow-lg hover:shadow-xl"
//             >
//               Next Step <ArrowRight className="w-5 h-5 ml-2" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default IPSubmissionStep2;

