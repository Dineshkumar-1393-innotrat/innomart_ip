// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { useIP } from '../context/IPContext.jsx';
// import { ArrowLeft, ArrowRight, Briefcase, CheckCircle } from 'lucide-react';

// function IPSubmissionStep3() {
//   const navigate = useNavigate();
//   const { state, dispatch } = useIP();
//   const [formData, setFormData] = useState(state.step3Data);
//   const formRef = useRef();

//   useEffect(() => {
//     gsap.fromTo(formRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8 });
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleIndustriesChange = (e) => {
//     setFormData({ ...formData, targetIndustries: e.target.value.split(',').map(v => v.trim()) });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch({ type: 'SET_STEP3_DATA', payload: formData });
//     gsap.to(formRef.current, {
//       opacity: 0,
//       x: -30,
//       duration: 0.5,
//       onComplete: () => navigate('/ai-evaluation')
//     });
//   };

//   const developmentStages = ['Prototype', 'Product-Ready'];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
//       <div ref={formRef} className="max-w-2xl mx-auto py-12">
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center text-gray-600 hover:text-gray-800 mb-8"
//         >
//           <ArrowLeft className="w-5 h-5 mr-2" /> Back
//         </button>
//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           <div className="mb-8">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-3xl font-bold text-gray-800">Commercialisation Info</h2>
//               <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Step 3 of 3</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-full"></div>
//             </div>
//                         <p className=" w-full text-sm sm:text-base text-gray-800">provide the commercialization details about your intellectual property assets</p>

//           </div>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2">
//                 <Briefcase className="w-5 h-5 mr-2" /> Target Industries
//               </label>
//               <input
//                 type="text"
//                 name="targetIndustries"
//                 value={formData.targetIndustries.join(', ')}
//                 onChange={handleIndustriesChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                 placeholder="e.g., Healthcare, Manufacturing"
//                 required
//               />
//             </div>
//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2">
//                 <CheckCircle className="w-5 h-5 mr-2" /> Development Stage
//               </label>
//               <select
//                 name="developmentStage"
//                 value={formData.developmentStage}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                 required
//               >
//                 <option value="">Select Stage</option>
//                 {developmentStages.map(stage => (
//                   <option key={stage} value={stage}>{stage}</option>
//                 ))}
//               </select>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold flex items-center justify-center"
//             >
//               Submit IP <ArrowRight className="w-5 h-5 ml-2" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default IPSubmissionStep3;


import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useIP } from '../context/IPContext.jsx';
import { ArrowLeft, ArrowRight, Briefcase, CheckCircle } from 'lucide-react';

function IPSubmissionStep3() {
  const navigate = useNavigate();
  const { state, dispatch } = useIP();
  const [formData, setFormData] = useState({
    targetIndustries: state.step3Data?.targetIndustries || '',
    physicalHardware: state.step3Data?.physicalHardware || 'Yes',
    productFeature: state.step3Data?.productFeature || '',
    category: state.step3Data?.category || '',
    description: state.step3Data?.description || '',
    uploadDocuments: state.step3Data?.uploadDocuments || null,
    uploadPhoto: state.step3Data?.uploadPhoto || null,
    goToMarket: state.step3Data?.goToMarket || '',
    developmentStage: state.step3Data?.developmentStage || '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    gsap.fromTo(formRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8 });
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleIndustriesChange = (e) => {
    setFormData({ ...formData, targetIndustries: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_STEP3_DATA', payload: formData });
    setShowSuccess(true);

    setTimeout(() => {
      gsap.to(formRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.5,
        onComplete: () => navigate('/ai-evaluation')
      });
    }, 1400); // Show success for 1.4sec
  };

  const developmentStages = ['Prototype', 'Pre-Production', 'General Available'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div ref={formRef} className="max-w-2xl mx-auto py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back
        </button>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-gray-800">Commercialization Info</h2>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Step 3 of 3</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-full"></div>
            </div>
            <p className="w-full text-sm sm:text-base text-gray-800 mt-2">Provide The Commercialization Details About Your Intellectual Property Assets</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Target Industries */}
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                Target Industries For Your IP <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="targetIndustries"
                value={formData.targetIndustries}
                onChange={handleIndustriesChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Intellectual Property Title"
                required
              />
            </div>

            {/* Physical Hardware */}
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                Is This IP Associated With Physical Hardware (Embedded Products) <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                name="physicalHardware"
                value={formData.physicalHardware}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Product Feature, Category, Description */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <input
                type="text"
                name="productFeature"
                value={formData.productFeature}
                onChange={handleInputChange}
                placeholder="Product/Feature *"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                placeholder="Category *"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Upload Document (pdf/jpg) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Upload Supportive Documents *</label>
                <input
                  type="file"
                  name="uploadDocuments"
                  accept=".jpg,.pdf"
                  onChange={handleInputChange}
                  className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Upload Photo Of Your Product/Feature *</label>
                <input
                  type="file"
                  name="uploadPhoto"
                  accept=".jpg,.png"
                  onChange={handleInputChange}
                  className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
            </div>

            {/* Go To Market Plan */}
            <div>
              <label className="block text-xs text-gray-500 mb-1">Go-to Market Plan</label>
              <input
                type="text"
                name="goToMarket"
                value={formData.goToMarket}
                onChange={handleInputChange}
                placeholder="Enter Market Access Experience"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Development Stage */}
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                Stage Of Development <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                name="developmentStage"
                value={formData.developmentStage}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select</option>
                {developmentStages.map(stage => (
                  <option key={stage} value={stage}>{stage}</option>
                ))}
              </select>
            </div>
            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="border border-blue-700 text-blue-700 bg-white px-4 py-2 rounded hover:bg-blue-100 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 font-semibold"
              >
                Submit
              </button>
            </div>
            {showSuccess && (
              <div className="mt-6 text-center">
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded font-semibold inline-block">
                  Perfect! We've Received And Started Evaluating Your IP...
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default IPSubmissionStep3;
