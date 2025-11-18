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


// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { useIP } from '../context/IPContext.jsx';
// import { ArrowLeft, ArrowRight, Briefcase, CheckCircle } from 'lucide-react';
// import homepageImage from '../assets/homepage-image.png';

// function IPSubmissionStep3() {
//   const navigate = useNavigate();
//   const { state, dispatch } = useIP();
//   const [formData, setFormData] = useState({
//     targetIndustries: state.step3Data?.targetIndustries || '',
//     physicalHardware: state.step3Data?.physicalHardware || 'Yes',
//     productFeature: state.step3Data?.productFeature || '',
//     category: state.step3Data?.category || '',
//     description: state.step3Data?.description || '',
//     uploadDocuments: state.step3Data?.uploadDocuments || null,
//     uploadPhoto: state.step3Data?.uploadPhoto || null,
//     goToMarket: state.step3Data?.goToMarket || '',
//     developmentStage: state.step3Data?.developmentStage || '',
//   });
//   const [showSuccess, setShowSuccess] = useState(false);
//   const formRef = useRef();

//   useEffect(() => {
//     gsap.fromTo(formRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8 });
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({ ...formData, [name]: files ? files[0] : value });
//   };

//   const handleIndustriesChange = (e) => {
//     setFormData({ ...formData, targetIndustries: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch({ type: 'SET_STEP3_DATA', payload: formData });
//     setShowSuccess(true);

//     setTimeout(() => {
//       gsap.to(formRef.current, {
//         opacity: 0,
//         x: -30,
//         duration: 0.5,
//         onComplete: () => navigate('/ai-evaluation')
//       });
//     }, 1400); // Show success for 1.4sec
//   };

//   const developmentStages = ['Prototype', 'Pre-Production', 'General Available'];

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
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center text-gray-600 hover:text-gray-800 mb-8"
//         >
//           <ArrowLeft className="w-5 h-5 mr-2" /> Back
//         </button>
//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           <div className="mb-8">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-3xl font-bold text-gray-800">Commercialization Info</h2>
//               <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Step 3 of 3</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-full"></div>
//             </div>
//             <p className="w-full text-sm sm:text-base text-gray-800 mt-2">Provide The Commercialization Details About Your Intellectual Property Assets</p>
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-6">

//             {/* Target Industries */}
//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2">
//                 Target Industries For Your IP <span className="text-red-500 ml-1">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="targetIndustries"
//                 value={formData.targetIndustries}
//                 onChange={handleIndustriesChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter Your Intellectual Property Title"
//                 required
//               />
//             </div>

//             {/* Physical Hardware */}
//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2">
//                 Is This IP Associated With Physical Hardware (Embedded Products) <span className="text-red-500 ml-1">*</span>
//               </label>
//               <select
//                 name="physicalHardware"
//                 value={formData.physicalHardware}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                 required
//               >
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//             </div>

//             {/* Product Feature, Category, Description */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//               <input
//                 type="text"
//                 name="productFeature"
//                 value={formData.productFeature}
//                 onChange={handleInputChange}
//                 placeholder="Product/Feature *"
//                 className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//               <input
//                 type="text"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleInputChange}
//                 placeholder="Category *"
//                 className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//               <input
//                 type="text"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 placeholder="Description"
//                 className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Upload Document (pdf/jpg) */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//               <div>
//                 <label className="block text-xs text-gray-500 mb-1">Upload Supportive Documents *</label>
//                 <input
//                   type="file"
//                   name="uploadDocuments"
//                   accept=".jpg,.pdf"
//                   onChange={handleInputChange}
//                   className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs text-gray-500 mb-1">Upload Photo Of Your Product/Feature *</label>
//                 <input
//                   type="file"
//                   name="uploadPhoto"
//                   accept=".jpg,.png"
//                   onChange={handleInputChange}
//                   className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Go To Market Plan */}
//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Go-to Market Plan</label>
//               <input
//                 type="text"
//                 name="goToMarket"
//                 value={formData.goToMarket}
//                 onChange={handleInputChange}
//                 placeholder="Enter Market Access Experience"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Development Stage */}
//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2">
//                 Stage Of Development <span className="text-red-500 ml-1">*</span>
//               </label>
//               <select
//                 name="developmentStage"
//                 value={formData.developmentStage}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                 required
//               >
//                 <option value="">Select</option>
//                 {developmentStages.map(stage => (
//                   <option key={stage} value={stage}>{stage}</option>
//                 ))}
//               </select>
//             </div>
//             {/* Buttons */}
//             <div className="flex justify-end gap-3 pt-4">
//               <button
//                 type="button"
//                 onClick={() => navigate(-1)}
//                 className="border border-blue-700 text-blue-700 bg-white px-4 py-2 rounded hover:bg-blue-100 font-semibold"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 font-semibold"
//               >
//                 Submit
//               </button>
//             </div>
//             {showSuccess && (
//               <div className="mt-6 text-center">
//                 <div className="bg-green-100 text-green-800 px-4 py-2 rounded font-semibold inline-block">
//                   Perfect! We've Received And Started Evaluating Your IP...
//                 </div>
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default IPSubmissionStep3;


// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { useIP } from '../context/IPContext.jsx';
// import { ArrowLeft, ArrowRight, Briefcase, CheckCircle, Home } from 'lucide-react';
// import homepageImage from '../assets/homepage-image.png';

// function IPSubmissionStep3() {
//   const navigate = useNavigate();
//   const { state, dispatch } = useIP();
//   const [formData, setFormData] = useState({
//     targetIndustries: state.step3Data?.targetIndustries || '',
//     physicalHardware: state.step3Data?.physicalHardware || 'Yes',
//     productFeature: state.step3Data?.productFeature || '',
//     category: state.step3Data?.category || '',
//     description: state.step3Data?.description || '',
//     uploadDocuments: state.step3Data?.uploadDocuments || null,
//     uploadPhoto: state.step3Data?.uploadPhoto || null,
//     goToMarket: state.step3Data?.goToMarket || '',
//     developmentStage: state.step3Data?.developmentStage || '',
//   });
//   const [showSuccess, setShowSuccess] = useState(false);
//   const formRef = useRef();

//   useEffect(() => {
//     gsap.fromTo(formRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8 });
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({ ...formData, [name]: files ? files[0] : value });
//   };

//   const handleIndustriesChange = (e) => {
//     setFormData({ ...formData, targetIndustries: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch({ type: 'SET_STEP3_DATA', payload: formData });
//     setShowSuccess(true);

//     setTimeout(() => {
//       gsap.to(formRef.current, {
//         opacity: 0,
//         x: -30,
//         duration: 0.5,
//         onComplete: () => navigate('/ai-evaluation')
//       });
//     }, 1400); // Show success for 1.4sec
//   };

//   const handleBack = () => {
//     navigate(-1);
//   };

//   const handleHome = () => {
//     navigate('/home');
//   };

//   const developmentStages = ['Prototype', 'Pre-Production', 'General Available'];

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
//               <h2 className="text-3xl font-bold text-gray-800">Commercialization Info</h2>
//               <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Step 3 of 3</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
//               <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-full"></div>
//             </div>
//             <p className="w-full text-sm sm:text-base text-gray-600">Provide The Commercialization Details About Your Intellectual Property Assets</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Target Industries */}
//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2">
//                 Target Industries For Your IP <span className="text-red-500 ml-1">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="targetIndustries"
//                 value={formData.targetIndustries}
//                 onChange={handleIndustriesChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                 placeholder="Enter Your Intellectual Property Title"
//                 required
//               />
//             </div>

//             {/* Physical Hardware */}
//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2">
//                 Is This IP Associated With Physical Hardware (Embedded Products) <span className="text-red-500 ml-1">*</span>
//               </label>
//               <select
//                 name="physicalHardware"
//                 value={formData.physicalHardware}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                 required
//               >
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//             </div>

//             {/* Product Feature, Category, Description */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//               <input
//                 type="text"
//                 name="productFeature"
//                 value={formData.productFeature}
//                 onChange={handleInputChange}
//                 placeholder="Product/Feature *"
//                 className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                 required
//               />
//               <input
//                 type="text"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleInputChange}
//                 placeholder="Category *"
//                 className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                 required
//               />
//               <input
//                 type="text"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 placeholder="Description"
//                 className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//               />
//             </div>

//             {/* Upload Document (pdf/jpg) */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//               <div>
//                 <label className="block text-xs text-gray-500 mb-1">Upload Supportive Documents *</label>
//                 <input
//                   type="file"
//                   name="uploadDocuments"
//                   accept=".jpg,.pdf"
//                   onChange={handleInputChange}
//                   className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer cursor-pointer"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs text-gray-500 mb-1">Upload Photo Of Your Product/Feature *</label>
//                 <input
//                   type="file"
//                   name="uploadPhoto"
//                   accept=".jpg,.png"
//                   onChange={handleInputChange}
//                   className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer cursor-pointer"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Go To Market Plan */}
//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Go-to Market Plan</label>
//               <input
//                 type="text"
//                 name="goToMarket"
//                 value={formData.goToMarket}
//                 onChange={handleInputChange}
//                 placeholder="Enter Market Access Experience"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//               />
//             </div>

//             {/* Development Stage */}
//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2">
//                 Stage Of Development <span className="text-red-500 ml-1">*</span>
//               </label>
//               <select
//                 name="developmentStage"
//                 value={formData.developmentStage}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                 required
//               >
//                 <option value="">Select</option>
//                 {developmentStages.map(stage => (
//                   <option key={stage} value={stage}>{stage}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Buttons */}
//             <div className="flex justify-end gap-3 pt-4">
//               <button
//                 type="button"
//                 onClick={handleBack}
//                 className="border border-blue-700 text-blue-700 bg-white px-6 py-2 rounded-lg hover:bg-blue-50 font-semibold transition-all duration-200"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
//               >
//                 Submit
//               </button>
//             </div>

//             {showSuccess && (
//               <div className="mt-6 text-center">
//                 <div className="bg-green-100 text-green-800 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
//                   <CheckCircle className="w-5 h-5" />
//                   Perfect! We've Received And Started Evaluating Your IP...
//                 </div>
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// // export default IPSubmissionStep3;
// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { useIP } from '../context/IPContext.jsx';
// import { ArrowLeft, ArrowRight, Briefcase, CheckCircle, Home, X, FileText, Image as ImageIcon, Upload } from 'lucide-react';
// import homepageImage from '../assets/homepage-image.png';

// function IPSubmissionStep3() {
//   const navigate = useNavigate();
//   const { state, dispatch } = useIP();
//   const [formData, setFormData] = useState({
//     targetIndustries: state.step3Data?.targetIndustries || '',
//     physicalHardware: state.step3Data?.physicalHardware || 'Yes',
//     productFeature: state.step3Data?.productFeature || '',
//     category: state.step3Data?.category || '',
//     description: state.step3Data?.description || '',
//     developmentStage: state.step3Data?.developmentStage || '',
//     goToMarket: state.step3Data?.goToMarket || '',
//     innovationVideoUrl: state.step3Data?.innovationVideoUrl || '',
//     productionProcess: state.step3Data?.productionProcess || '',
//     qualityStandards: state.step3Data?.qualityStandards || '',
//     // New fields for software status section
//     softwareStatus: state.step3Data?.softwareStatus || '',
//     productName: state.step3Data?.productName || '',
//     softwareCategory: state.step3Data?.softwareCategory || '',
//     softwareDescription: state.step3Data?.softwareDescription || '',
//     setPrice: state.step3Data?.setPrice || '',
//     otherInfo: state.step3Data?.otherInfo || '',
//   });
  
//   // Separate state for multiple file uploads
//   const [uploadedDocuments, setUploadedDocuments] = useState([]);
//   const [uploadedPhotos, setUploadedPhotos] = useState([]);
//   const [uploadedDesignDocs, setUploadedDesignDocs] = useState([]);
//   const [uploadedProductPictures, setUploadedProductPictures] = useState([]);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const formRef = useRef();

//   useEffect(() => {
//     gsap.fromTo(formRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8 });
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleIndustriesChange = (e) => {
//     setFormData({ ...formData, targetIndustries: e.target.value });
//   };

//   // Handle multiple document uploads
//   const handleDocumentsChange = (e) => {
//     const files = Array.from(e.target.files);
//     setUploadedDocuments(prev => [...prev, ...files]);
//     e.target.value = '';
//   };

//   // Handle multiple photo uploads
//   const handlePhotosChange = (e) => {
//     const files = Array.from(e.target.files);
//     setUploadedPhotos(prev => [...prev, ...files]);
//     e.target.value = '';
//   };

//   // Handle design documents upload
//   const handleDesignDocsChange = (e) => {
//     const files = Array.from(e.target.files);
//     setUploadedDesignDocs(prev => [...prev, ...files]);
//     e.target.value = '';
//   };

//   // Handle product pictures upload
//   const handleProductPicturesChange = (e) => {
//     const files = Array.from(e.target.files);
//     setUploadedProductPictures(prev => [...prev, ...files]);
//     e.target.value = '';
//   };

//   // Remove individual document
//   const removeDocument = (index) => {
//     setUploadedDocuments(prev => prev.filter((_, i) => i !== index));
//   };

//   // Remove individual photo
//   const removePhoto = (index) => {
//     setUploadedPhotos(prev => prev.filter((_, i) => i !== index));
//   };

//   // Remove design document
//   const removeDesignDoc = (index) => {
//     setUploadedDesignDocs(prev => prev.filter((_, i) => i !== index));
//   };

//   // Remove product picture
//   const removeProductPicture = (index) => {
//     setUploadedProductPictures(prev => prev.filter((_, i) => i !== index));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Combine form data with uploaded files
//     const completeData = {
//       ...formData,
//       uploadDocuments: uploadedDocuments,
//       uploadPhoto: uploadedPhotos,
//       uploadDesignDocs: uploadedDesignDocs,
//       uploadProductPictures: uploadedProductPictures,
//     };
    
//     dispatch({ type: 'SET_STEP3_DATA', payload: completeData });
//     setShowSuccess(true);

//     setTimeout(() => {
//       gsap.to(formRef.current, {
//         opacity: 0,
//         x: -30,
//         duration: 0.5,
//         onComplete: () => navigate('/ai-evaluation')
//       });
//     }, 1400);
//   };

//   const handleBack = () => {
//     navigate(-1);
//   };

//   const handleHome = () => {
//     navigate('/home');
//   };

//   const developmentStages = ['Prototype', 'Pre-Production', 'General Available'];
//   const softwareStatusOptions = ['Applied', 'Awaiting For Defence', 'Defence Completed', 'Awarded'];

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
//               <h2 className="text-3xl font-bold text-gray-800">Commercialization Info</h2>
//               <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Step 3 of 3</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
//               <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-full"></div>
//             </div>
//             <p className="w-full text-sm sm:text-base text-gray-600">Provide The Commercialization Details About Your Intellectual Property Assets</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Target Industries */}
//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2">
//                 Target Industries For Your IP <span className="text-red-500 ml-1">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="targetIndustries"
//                 value={formData.targetIndustries}
//                 onChange={handleIndustriesChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                 placeholder="Enter Your Intellectual Property Title"
//                 required
//               />
//             </div>

//             {/* Physical Hardware */}
//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2">
//                 Is This IP Associated With Physical Hardware (Embedded Products) <span className="text-red-500 ml-1">*</span>
//               </label>
//               <select
//                 name="physicalHardware"
//                 value={formData.physicalHardware}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//             </div>

//             {/* Stage of Development */}
//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2">
//                 Stage Of Development <span className="text-red-500 ml-1">*</span>
//               </label>
//               <select
//                 name="developmentStage"
//                 value={formData.developmentStage}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                 required
//               >
//                 <option value="">Select</option>
//                 {developmentStages.map(stage => (
//                   <option key={stage} value={stage}>{stage}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Innovation Video URL */}
//             <div>
//               <label className="block text-sm text-gray-700 mb-1">Innovation Video About IP(Optional)</label>
//               <input
//                 type="url"
//                 name="innovationVideoUrl"
//                 value={formData.innovationVideoUrl}
//                 onChange={handleInputChange}
//                 placeholder="Enter video URL"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//               />
//             </div>

//             {/* Software Status Section */}
//             <div className="border-t-2 border-gray-200 pt-6 mt-6">
//               {/* <h3 className="text-xl font-bold text-gray-800 mb-4">Software Status Information</h3> */}
              
//               {/* Software Status Dropdown */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Is This IP Associated With Software Status <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   name="softwareStatus"
//                   value={formData.softwareStatus}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                   required
//                 >
//                   <option value="">Select</option>
//                   {softwareStatusOptions.map(status => (
//                     <option key={status} value={status}>{status}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Product Name, Category, Description Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
//                 <input
//                   type="text"
//                   name="productName"
//                   value={formData.productName}
//                   onChange={handleInputChange}
//                   placeholder="Product Name *"
//                   className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="softwareCategory"
//                   value={formData.softwareCategory}
//                   onChange={handleInputChange}
//                   placeholder="Category *"
//                   className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="softwareDescription"
//                   value={formData.softwareDescription}
//                   onChange={handleInputChange}
//                   placeholder="Description"
//                   className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                 />
//               </div>

//               {/* Upload Design Documents & Pictures */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                 {/* Upload Design Documents */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Upload Design Documents & Supportive Document <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
//                     <Upload className="w-8 h-8 mx-auto mb-1 text-gray-400" />
//                     <p className="text-xs text-gray-600">Multiple files supported</p>
//                     <input
//                       type="file"
//                       multiple
//                       accept=".pdf,.jpg,.png,.doc,.docx"
//                       onChange={handleDesignDocsChange}
//                       className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                     />
//                   </div>
//                   {uploadedDesignDocs.length > 0 && (
//                     <div className="mt-2 text-xs text-gray-600">
//                       <p className="font-medium">Uploaded documents appear here</p>
//                       {uploadedDesignDocs.map((file, index) => (
//                         <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded mt-1">
//                           <span className="truncate flex-1">{file.name}</span>
//                           <button
//                             type="button"
//                             onClick={() => removeDesignDoc(index)}
//                             className="ml-2 text-red-600 hover:text-red-800"
//                           >
//                             <X className="w-3 h-3" />
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Upload Product Pictures */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Upload Pictures Of Your Product <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
//                     <Upload className="w-8 h-8 mx-auto mb-1 text-gray-400" />
//                     <p className="text-xs text-gray-600">Multiple files supported</p>
//                     <input
//                       type="file"
//                       multiple
//                       accept=".jpg,.png,.jpeg"
//                       onChange={handleProductPicturesChange}
//                       className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                     />
//                   </div>
//                   {uploadedProductPictures.length > 0 && (
//                     <div className="mt-2 text-xs text-gray-600">
//                       <p className="font-medium">Uploaded pictures appear here</p>
//                       {uploadedProductPictures.map((file, index) => (
//                         <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded mt-1">
//                           <span className="truncate flex-1">{file.name}</span>
//                           <button
//                             type="button"
//                             onClick={() => removeProductPicture(index)}
//                             className="ml-2 text-red-600 hover:text-red-800"
//                           >
//                             <X className="w-3 h-3" />
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Set Price and Any Other Info */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                 <div>
//                   <label className="block text-sm text-gray-700 mb-1">Set Price (INR)</label> <span className="text-red-500">*</span>
//                   <input
//                     type="text"
//                     name="setPrice"
//                     value={formData.setPrice}
//                     onChange={handleInputChange}
//                     placeholder="Enter price"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm text-gray-700 mb-1">Any Other Info</label> <span className="text-red-500">*</span>
//                   <input
//                     type="text"
//                     name="otherInfo"
//                     value={formData.otherInfo}
//                     onChange={handleInputChange}
//                     placeholder="Enter text"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                   />
//                 </div>
//               </div>
//             </div>

          

//             {/* Go To Market Plan */}
//             <div>
//               <label className="block text-sm text-gray-700 mb-1">Monetise</label>
//               <input
//                 type="text"
//                 name="goToMarket"
//                 value={formData.goToMarket}
//                 onChange={handleInputChange}
//                 placeholder="Enter Market Access Experience"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//               />
//             </div>

//             {/* Buttons */}
//             <div className="flex justify-end gap-3 pt-4">
//               <button
//                 type="button"
//                 onClick={handleBack}
//                 className="border border-blue-700 text-blue-700 bg-white px-6 py-2 rounded-lg hover:bg-blue-50 font-semibold transition-all duration-200"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
//               >
//                 Submit
//               </button>
//             </div>

//             {showSuccess && (
//               <div className="mt-6 text-center">
//                 <div className="bg-green-100 text-green-800 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
//                   <CheckCircle className="w-5 h-5" />
//                   Perfect! We've Received And Started Evaluating Your IP...
//                 </div>
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default IPSubmissionStep3;




// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { useIP } from '../context/IPContext.jsx';
// import { ArrowLeft, Home, X, FileText, ImageIcon, Upload, CheckCircle, Plus } from 'lucide-react';
// import homepageImage from '../assets/homepage-image.png';

// function IPSubmissionStep3() {
//   const navigate = useNavigate();
//   const { state, dispatch } = useIP();
  
//   const [formData, setFormData] = useState({
//     targetIndustries: state.step3Data?.targetIndustries || [''],
//     physicalHardware: state.step3Data?.physicalHardware || '',
//     developmentStage: state.step3Data?.developmentStage || '',
//     innovationVideoUrl: state.step3Data?.innovationVideoUrl || '',
//     hasSoftwareStatus: state.step3Data?.hasSoftwareStatus || '',
//     softwareStatus: state.step3Data?.softwareStatus || '',
//     productName: state.step3Data?.productName || '',
//     softwareCategory: state.step3Data?.softwareCategory || '',
//     softwareDescription: state.step3Data?.softwareDescription || '',
//     setPrice: state.step3Data?.setPrice || '',
//     otherInfo: state.step3Data?.otherInfo || '',
//     monetise: state.step3Data?.monetise || '',
//   });
  
//   const [uploadedDesignDocs, setUploadedDesignDocs] = useState([]);
//   const [uploadedProductPictures, setUploadedProductPictures] = useState([]);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const formRef = useRef();

//   useEffect(() => {
//     gsap.fromTo(formRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8 });
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
    
//     if (name === 'hasSoftwareStatus' && value === 'No') {
//       setFormData(prev => ({ ...prev, softwareStatus: '' }));
//     }
//   };

//   // Handle industry input change
//   const handleIndustryChange = (index, value) => {
//     const updatedIndustries = [...formData.targetIndustries];
//     updatedIndustries[index] = value;
//     setFormData({ ...formData, targetIndustries: updatedIndustries });
//   };

//   // Add new industry field
//   const addIndustryField = () => {
//     setFormData({ 
//       ...formData, 
//       targetIndustries: [...formData.targetIndustries, ''] 
//     });
//   };

//   // Remove industry field
//   const removeIndustryField = (index) => {
//     if (formData.targetIndustries.length > 1) {
//       const updatedIndustries = formData.targetIndustries.filter((_, i) => i !== index);
//       setFormData({ ...formData, targetIndustries: updatedIndustries });
//     }
//   };

//   const handleDesignDocsChange = (e) => {
//     const files = Array.from(e.target.files);
//     setUploadedDesignDocs(prev => [...prev, ...files]);
//     e.target.value = '';
//   };

//   const handleProductPicturesChange = (e) => {
//     const files = Array.from(e.target.files);
//     setUploadedProductPictures(prev => [...prev, ...files]);
//     e.target.value = '';
//   };

//   const removeDesignDoc = (index) => {
//     setUploadedDesignDocs(prev => prev.filter((_, i) => i !== index));
//   };

//   const removeProductPicture = (index) => {
//     setUploadedProductPictures(prev => prev.filter((_, i) => i !== index));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Filter out empty industries
//     const filteredIndustries = formData.targetIndustries.filter(industry => industry.trim() !== '');
    
//     const completeData = {
//       ...formData,
//       targetIndustries: filteredIndustries,
//       uploadDesignDocs: uploadedDesignDocs,
//       uploadProductPictures: uploadedProductPictures,
//     };
    
//     dispatch({ type: 'SET_STEP3_DATA', payload: completeData });
//     setShowSuccess(true);

//     setTimeout(() => {
//       gsap.to(formRef.current, {
//         opacity: 0,
//         x: -30,
//         duration: 0.5,
//         onComplete: () => navigate('/ai-evaluation')
//       });
//     }, 1400);
//   };

//   const handleBack = () => navigate(-1);
//   const handleHome = () => navigate('/home');

//   const developmentStages = ['Prototype', 'Pre-Production', 'General Available'];
//   const softwareStatusOptions = ['Applied', 'Awaiting For Defence', 'Defence Completed', 'Awarded'];

//   const showHardwareFields = formData.physicalHardware === 'Yes';
//   const showSoftwareStatusDropdown = formData.hasSoftwareStatus === 'Yes';
//   const showSoftwareFields = formData.softwareStatus !== '' && showSoftwareStatusDropdown;

//   return (
//     <div className="min-h-screen relative overflow-hidden p-4">
//       {/* Background Image */}
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
//       <div ref={formRef} className="relative z-10 max-w-3xl mx-auto py-8 sm:py-12">
//         {/* Navigation Buttons */}
//         <div className="flex items-center justify-between mb-6 sm:mb-8">
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

//         <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
//           {/* Header */}
//           <div className="mb-8">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Commercialization Info</h2>
//               <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Step 3 of 3</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
//               <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-full"></div>
//             </div>
//             <p className="text-sm sm:text-base text-gray-600">Provide the commercialization details about your intellectual property assets</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Target Industries - Multiple Fields */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Target Industries For Your IP <span className="text-red-500">*</span>
//               </label>
//               <div className="space-y-3">
//                 {formData.targetIndustries.map((industry, index) => (
//                   <div key={index} className="flex gap-2">
//                     <input
//                       type="text"
//                       value={industry}
//                       onChange={(e) => handleIndustryChange(index, e.target.value)}
//                       className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                       placeholder={`e.g., ${index === 0 ? 'Healthcare' : index === 1 ? 'Manufacturing' : 'Technology'}`}
//                       required={index === 0}
//                     />
//                     {formData.targetIndustries.length > 1 && (
//                       <button
//                         type="button"
//                         onClick={() => removeIndustryField(index)}
//                         className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
//                         title="Remove industry"
//                       >
//                         <X className="w-5 h-5" />
//                       </button>
//                     )}
//                   </div>
//                 ))}
//                 <button
//                   type="button"
//                   onClick={addIndustryField}
//                   className="flex items-center gap-2 px-4 py-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors font-medium"
//                 >
//                   <Plus className="w-4 h-4" />
//                   Add Another Industry
//                 </button>
//               </div>
//             </div>

//             {/* Physical Hardware */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Is This IP Associated With Physical Hardware (Embedded Products) <span className="text-red-500">*</span>
//               </label>
//               <select
//                 name="physicalHardware"
//                 value={formData.physicalHardware}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//             </div>

//             {/* Conditional: Show if Physical Hardware is Yes */}
//             {showHardwareFields && (
//               <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 space-y-6">
//                 <h3 className="text-lg font-bold text-gray-800 mb-4">Hardware Information</h3>

//                 {/* Stage of Development */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Stage Of Development <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     name="developmentStage"
//                     value={formData.developmentStage}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white"
//                     required={showHardwareFields}
//                   >
//                     <option value="">Select</option>
//                     {developmentStages.map(stage => (
//                       <option key={stage} value={stage}>{stage}</option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Innovation Video URL */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Innovation Video About IP (Optional)
//                   </label>
//                   <input
//                     type="url"
//                     name="innovationVideoUrl"
//                     value={formData.innovationVideoUrl}
//                     onChange={handleInputChange}
//                     placeholder="https://youtube.com/..."
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white"
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Software Status Yes/No Question */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Is This IP Associated With Software Status <span className="text-red-500">*</span>
//               </label>
//               <select
//                 name="hasSoftwareStatus"
//                 value={formData.hasSoftwareStatus}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//             </div>

//             {/* Conditional: Show Software Status Dropdown if Yes is selected */}
//             {showSoftwareStatusDropdown && (
//               <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 space-y-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                    IP Software Status <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     name="softwareStatus"
//                     value={formData.softwareStatus}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white"
//                     required={showSoftwareStatusDropdown}
//                   >
//                     <option value="">Select</option>
//                     {softwareStatusOptions.map(status => (
//                       <option key={status} value={status}>{status}</option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Conditional: Show detailed software fields only if a status is selected */}
//                 {showSoftwareFields && (
//                   <>
//                     <h3 className="text-lg font-bold text-gray-800 mb-4 pt-4 border-t border-purple-300">
//                       Software Information
//                     </h3>

//                     {/* Product Name, Category, Description Grid */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                       <div>
//                         <label className="block text-xs font-semibold text-gray-700 mb-1">
//                           Product Name <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           name="productName"
//                           value={formData.productName}
//                           onChange={handleInputChange}
//                           placeholder="Product Name"
//                           className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white text-sm"
//                           required={showSoftwareFields}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-xs font-semibold text-gray-700 mb-1">
//                           Category <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           name="softwareCategory"
//                           value={formData.softwareCategory}
//                           onChange={handleInputChange}
//                           placeholder="Category"
//                           className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white text-sm"
//                           required={showSoftwareFields}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-xs font-semibold text-gray-700 mb-1">
//                           Description
//                         </label>
//                         <input
//                           type="text"
//                           name="softwareDescription"
//                           value={formData.softwareDescription}
//                           onChange={handleInputChange}
//                           placeholder="Description"
//                           className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white text-sm"
//                         />
//                       </div>
//                     </div>

//                     {/* Upload Design Documents & Pictures */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {/* Upload Design Documents */}
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           Upload Design Documents <span className="text-red-500">*</span>
//                         </label>
//                         <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors bg-white">
//                           <Upload className="w-8 h-8 mx-auto mb-1 text-gray-400" />
//                           <p className="text-xs text-gray-600 mb-1">Click or drag files</p>
//                           <p className="text-xs text-gray-500">PDF, DOC, JPG, PNG</p>
//                           <input
//                             type="file"
//                             multiple
//                             accept=".pdf,.jpg,.png,.doc,.docx"
//                             onChange={handleDesignDocsChange}
//                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                           />
//                         </div>
//                         {uploadedDesignDocs.length > 0 && (
//                           <div className="mt-2 space-y-1">
//                             <p className="text-xs font-semibold text-gray-700">Files ({uploadedDesignDocs.length}):</p>
//                             {uploadedDesignDocs.map((file, index) => (
//                               <div key={index} className="flex items-center justify-between p-2 bg-white rounded border border-gray-200">
//                                 <div className="flex items-center gap-2 flex-1 min-w-0">
//                                   <FileText className="w-3 h-3 text-blue-600 flex-shrink-0" />
//                                   <span className="text-xs text-gray-700 truncate">{file.name}</span>
//                                 </div>
//                                 <button
//                                   type="button"
//                                   onClick={() => removeDesignDoc(index)}
//                                   className="ml-2 text-red-600 hover:text-red-800"
//                                 >
//                                   <X className="w-3 h-3" />
//                                 </button>
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>

//                       {/* Upload Product Pictures */}
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           Upload Product Pictures <span className="text-red-500">*</span>
//                         </label>
//                         <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors bg-white">
//                           <Upload className="w-8 h-8 mx-auto mb-1 text-gray-400" />
//                           <p className="text-xs text-gray-600 mb-1">Click or drag files</p>
//                           <p className="text-xs text-gray-500">JPG, PNG, JPEG</p>
//                           <input
//                             type="file"
//                             multiple
//                             accept=".jpg,.png,.jpeg"
//                             onChange={handleProductPicturesChange}
//                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                           />
//                         </div>
//                         {uploadedProductPictures.length > 0 && (
//                           <div className="mt-2 space-y-1">
//                             <p className="text-xs font-semibold text-gray-700">Files ({uploadedProductPictures.length}):</p>
//                             {uploadedProductPictures.map((file, index) => (
//                               <div key={index} className="flex items-center justify-between p-2 bg-white rounded border border-gray-200">
//                                 <div className="flex items-center gap-2 flex-1 min-w-0">
//                                   <ImageIcon className="w-3 h-3 text-green-600 flex-shrink-0" />
//                                   <span className="text-xs text-gray-700 truncate">{file.name}</span>
//                                 </div>
//                                 <button
//                                   type="button"
//                                   onClick={() => removeProductPicture(index)}
//                                   className="ml-2 text-red-600 hover:text-red-800"
//                                 >
//                                   <X className="w-3 h-3" />
//                                 </button>
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     {/* Set Price and Any Other Info */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           Set Monitise (INR) <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           type="number"
//                           name="setPrice"
//                           value={formData.setPrice}
//                           onChange={handleInputChange}
//                           placeholder="₹ 0.00"
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white"
//                           required={showSoftwareFields}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           Any Other Info <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           name="otherInfo"
//                           value={formData.otherInfo}
//                           onChange={handleInputChange}
//                           placeholder="Additional information"
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white"
//                           required={showSoftwareFields}
//                         />
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             )}

        
           

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
//               <button
//                 type="button"
//                 onClick={handleBack}
//                 className="w-full sm:w-auto border-2 border-blue-700 text-blue-700 bg-white px-6 py-2.5 rounded-lg hover:bg-blue-50 font-semibold transition-all duration-200"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="w-full sm:w-auto bg-blue-800 text-white px-6 py-2.5 rounded-lg hover:bg-blue-900 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
//               >
//                 Submit
//               </button>
//             </div>

//             {/* Success Message */}
//             {showSuccess && (
//               <div className="mt-6 text-center">
//                 <div className="bg-green-100 text-green-800 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
//                   <CheckCircle className="w-5 h-5" />
//                   Perfect! We've Received And Started Evaluating Your IP...
//                 </div>
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default IPSubmissionStep3;