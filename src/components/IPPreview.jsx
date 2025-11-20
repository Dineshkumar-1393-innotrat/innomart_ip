
// src/pages/IPPreview.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useIP } from '../context/IPContext.jsx';
import { toast } from 'react-toastify';

function IPPreview() {
  const navigate = useNavigate();
  const { state } = useIP();

  // all data coming from context (filled in step1, step2, step3 screens)
  const {
    step1Data = {},
    step2Data = {},
    step3Data = {},
  } = state || {};

  const joinArray = (val) =>
    Array.isArray(val) ? val.join(', ') : val || '';

  const goBack = () => navigate(-1);

  const handleSellMyProduct = () => {
    toast.success(
      'Your IP has been posted successfully and sent for admin review!',
      {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
      }
    );
    // no navigation – user stays on preview screen
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10">
      {/* page title */}
      <h2 className="text-sm font-semibold text-blue-600 mb-6">Preview</h2>

      {/* main preview card */}
      <div className="w-full max-w-5xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] rounded-lg border border-gray-100 px-6 sm:px-10 py-8 space-y-10">
        {/* ========== BASIC INFORMATION ========== */}
        <section>
          <header className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Basic Information
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
              Provide the fundamental details about your intellectual property
              assets
            </p>
          </header>

          <div className="space-y-4 text-xs sm:text-sm">
            {/* Title Of Your IP */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Title Of Your IP <span className="text-red-500">*</span>
              </label>
              <input
                readOnly
                value={step1Data.title || ''}
                placeholder="Enter Your Intellectual Property Title"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
              />
            </div>

            {/* Abstract */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Abstract <span className="text-red-500">*</span>
              </label>
              <textarea
                readOnly
                rows={4}
                value={step1Data.abstract || ''}
                placeholder="Write Brief Description About Your Intellectual Property Here…"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800 resize-none"
              />
            </div>

            {/* Tag */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Tag
              </label>
              <input
                readOnly
                value={joinArray(step1Data.tags)}
                placeholder="Enter Relevant Tags Separated By Commas"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
              />
            </div>

            {/* Patent Number + Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Patent Number <span className="text-red-500">*</span>
                </label>
                <input
                  readOnly
                  value={step1Data.patentNumber || ''}
                  placeholder="Patent Number"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <input
                  readOnly
                  value={
                    joinArray(step1Data.categories || step1Data.category) || ''
                  }
                  placeholder="Select A Category"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========== TECHNICAL DETAILS ========== */}
        <section>
          <header className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Technical Details
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
              Provide the technical details about your intellectual property
              assets
            </p>
          </header>

          <div className="space-y-4 text-xs sm:text-sm">
            {/* Technical Specifications */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Technical Specifications Of Your IP{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                readOnly
                value={step2Data.technicalSpecs || ''}
                placeholder="Enter Your Intellectual Property Title"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
              />
            </div>

            {/* Detailed Description */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Detailed Description Of IP{' '}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                readOnly
                rows={4}
                value={step2Data.detailedDescription || ''}
                placeholder="Write Brief Description About Your Intellectual Property Here…"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800 resize-none"
              />
            </div>

            {/* Upload Supportive Documents */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Upload Supportive Documents{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                readOnly
                value={
                  step2Data.documents && step2Data.documents.length
                    ? step2Data.documents
                        .map((f, idx) => f.name || `Document ${idx + 1}`)
                        .join(', ')
                    : ''
                }
                placeholder="Drag And Drop To Upload"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
              />
              <p className="mt-1 text-[10px] text-gray-500">
                Note – Pdf, Jpg, not more than 5MB. Multiple file supported.
              </p>
            </div>
          </div>
        </section>

        {/* ========== COMMERCIALIZATION INFO ========== */}
        <section>
          <header className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Commercialization Info
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
              Provide the commercialization details about your intellectual
              property assets
            </p>
          </header>

          <div className="space-y-4 text-xs sm:text-sm">
            {/* Target Industries */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Target Industries For Your IP{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                readOnly
                value={joinArray(step3Data.targetIndustries)}
                placeholder="Enter Your Intellectual Property Title"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
              />
            </div>

            {/* Physical Hardware */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Is This IP Associated With Physical Hardware (Embedded Products){' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                readOnly
                value={step3Data.physicalHardware || ''}
                placeholder="Select"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
              />
            </div>

            {/* Stage Of Development */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Stage Of Development
              </label>
              <input
                readOnly
                value={step3Data.developmentStage || ''}
                placeholder="Select"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
              />
            </div>

            {/* Innovators Video */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Innovators Video About IP (Optional)
              </label>
              <input
                readOnly
                value={step3Data.innovationVideoUrl || ''}
                placeholder="Paste link or leave empty"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
              />
            </div>

            {/* Software Status */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Is This IP Associated With Software Status{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                readOnly
                value={
                  step3Data.hasSoftwareStatus || step3Data.softwareStatus || ''
                }
                placeholder="Select"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
              />
            </div>
          </div>
        </section>

        {/* ACTION BUTTONS */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={goBack}
            className="px-5 py-2 border border-gray-300 rounded-md text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSellMyProduct}
            className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md text-xs sm:text-sm font-semibold"
          >
            Sell My Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default IPPreview;


// // src/pages/IPPreview.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useIP } from '../context/IPContext.jsx';

// function IPPreview() {
//   const navigate = useNavigate();
//   const { state } = useIP();

//   // all data coming from context (filled in step1, step2, step3 screens)
//   const {
//     step1Data = {},
//     step2Data = {},
//     step3Data = {},
//   } = state || {};

//   const joinArray = (val) =>
//     Array.isArray(val) ? val.join(', ') : val || '';

//   const goBack = () => navigate(-1);

//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center py-10">
//       {/* page title */}
//       <h2 className="text-sm font-semibold text-blue-600 mb-6">Preview</h2>

//       {/* main preview card */}
//       <div className="w-full max-w-5xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] rounded-lg border border-gray-100 px-6 sm:px-10 py-8 space-y-10">

//         {/* ========== BASIC INFORMATION ========== */}
//         <section>
//           <header className="mb-4">
//             <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
//               Basic Information
//             </h3>
//             <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
//               Provide the fundamental details about your intellectual property assets
//             </p>
//           </header>

//           <div className="space-y-4 text-xs sm:text-sm">
//             {/* Title Of Your IP */}
//             <div>
//               <label className="block font-semibold text-gray-700 mb-1">
//                 Title Of Your IP <span className="text-red-500">*</span>
//               </label>
//               <input
//                 readOnly
//                 value={step1Data.title || ''}
//                 placeholder="Enter Your Intellectual Property Title"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
//               />
//             </div>

//             {/* Abstract */}
//             <div>
//               <label className="block font-semibold text-gray-700 mb-1">
//                 Abstract <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 readOnly
//                 rows={4}
//                 value={step1Data.abstract || ''}
//                 placeholder="Write Brief Description About Your Intellectual Property Here…"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800 resize-none"
//               />
//             </div>

//             {/* Tag */}
//             <div>
//               <label className="block font-semibold text-gray-700 mb-1">
//                 Tag
//               </label>
//               <input
//                 readOnly
//                 value={joinArray(step1Data.tags)}
//                 placeholder="Enter Relevant Tags Separated By Commas"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
//               />
//             </div>

//             {/* Patent Number + Category */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block font-semibold text-gray-700 mb-1">
//                   Patent Number <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   readOnly
//                   value={step1Data.patentNumber || ''}
//                   placeholder="Patent Number"
//                   className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
//                 />
//               </div>
//               <div>
//                 <label className="block font-semibold text-gray-700 mb-1">
//                   Category <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   readOnly
//                   value={
//                     joinArray(step1Data.categories || step1Data.category) || ''
//                   }
//                   placeholder="Select A Category"
//                   className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========== TECHNICAL DETAILS ========== */}
//         <section>
//           <header className="mb-4">
//             <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
//               Technical Details
//             </h3>
//             <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
//               Provide the technical details about your intellectual property assets
//             </p>
//           </header>

//           <div className="space-y-4 text-xs sm:text-sm">
//             {/* Technical Specifications */}
//             <div>
//               <label className="block font-semibold text-gray-700 mb-1">
//                 Technical Specifications Of Your IP{' '}
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 readOnly
//                 value={step2Data.technicalSpecs || ''}
//                 placeholder="Enter Your Intellectual Property Title"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
//               />
//             </div>

//             {/* Detailed Description */}
//             <div>
//               <label className="block font-semibold text-gray-700 mb-1">
//                 Detailed Description Of IP{' '}
//                 <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 readOnly
//                 rows={4}
//                 value={step2Data.detailedDescription || ''}
//                 placeholder="Write Brief Description About Your Intellectual Property Here…"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800 resize-none"
//               />
//             </div>

//             {/* Upload Supportive Documents */}
//             <div>
//               <label className="block font-semibold text-gray-700 mb-1">
//                 Upload Supportive Documents{' '}
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 readOnly
//                 value={
//                   step2Data.documents && step2Data.documents.length
//                     ? step2Data.documents
//                         .map((f, idx) => f.name || `Document ${idx + 1}`)
//                         .join(', ')
//                     : ''
//                 }
//                 placeholder="Drag And Drop To Upload"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
//               />
//               <p className="mt-1 text-[10px] text-gray-500">
//                 Note – Pdf, Jpg, not more than 5MB. Multiple file supported.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* ========== COMMERCIALIZATION INFO ========== */}
//         <section>
//           <header className="mb-4">
//             <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
//               Commercialization Info
//             </h3>
//             <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
//               Provide the commercialization details about your intellectual property assets
//             </p>
//           </header>

//           <div className="space-y-4 text-xs sm:text-sm">
//             {/* Target Industries */}
//             <div>
//               <label className="block font-semibold text-gray-700 mb-1">
//                 Target Industries For Your IP{' '}
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 readOnly
//                 value={joinArray(step3Data.targetIndustries)}
//                 placeholder="Enter Your Intellectual Property Title"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
//               />
//             </div>

//             {/* Physical Hardware */}
//             <div>
//               <label className="block font-semibold text-gray-700 mb-1">
//                 Is This IP Associated With Physical Hardware (Embedded Products){' '}
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 readOnly
//                 value={step3Data.physicalHardware || ''}
//                 placeholder="Select"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
//               />
//             </div>

//             {/* Stage Of Development */}
//             <div>
//               <label className="block font-semibold text-gray-700 mb-1">
//                 Stage Of Development
//               </label>
//               <input
//                 readOnly
//                 value={step3Data.developmentStage || ''}
//                 placeholder="Select"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
//               />
//             </div>

//             {/* Innovators Video */}
//             <div>
//               <label className="block font-semibold text-gray-700 mb-1">
//                 Innovators Video About IP (Optional)
//               </label>
//               <input
//                 readOnly
//                 value={step3Data.innovationVideoUrl || ''}
//                 placeholder="Paste link or leave empty"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
//               />
//             </div>

//             {/* Software Status */}
//             <div>
//               <label className="block font-semibold text-gray-700 mb-1">
//                 Is This IP Associated With Software Status{' '}
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 readOnly
//                 value={step3Data.hasSoftwareStatus || step3Data.softwareStatus || ''}
//                 placeholder="Select"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-800"
//               />
//             </div>
//           </div>
//         </section>

//         {/* ACTION BUTTONS */}
//         <div className="flex justify-end gap-3 pt-2">
//           <button
//             type="button"
//             onClick={goBack}
//             className="px-5 py-2 border border-gray-300 rounded-md text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-100"
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             // onClick={() => navigate('/sell-product')}
//             className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md text-xs sm:text-sm font-semibold"
//           >
//             Sell My Product
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default IPPreview;



// // src/pages/IPPreview.jsx
// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { useIP } from '../context/IPContext.jsx';
// import {
//   ArrowLeft,
//   Home,
//   FileText,
//   Tag,
//   Grid3X3,
//   Hash,
//   Upload,
//   Briefcase,
//   CheckCircle
// } from 'lucide-react';
// import homepageImage from '../assets/homepage-image.png';

// function IPPreview() {
//   const navigate = useNavigate();
//   const { state } = useIP();
//   const containerRef = useRef();

//   const { step1Data, step2Data, step3Data } = state;

//   useEffect(() => {
//     gsap.fromTo(
//       containerRef.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 0.8 }
//     );
//   }, []);

//   const goBack = () => navigate(-1);
//   const goHome = () => navigate('/home');

//   const joinArray = (val) =>
//     Array.isArray(val) ? val.join(', ') : val || '';

//   return (
//     <div className="min-h-screen relative overflow-hidden p-4 sm:p-6">
//       {/* background */}
//       <div
//         className="absolute inset-0 w-full h-full"
//         style={{
//           backgroundImage: `url(${homepageImage})`,
//           backgroundPosition: 'center',
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//           opacity: 0.15
//         }}
//       />
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80" />

//       <div
//         ref={containerRef}
//         className="relative z-10 max-w-5xl mx-auto py-8 sm:py-12"
//       >
//         {/* top nav */}
//         <div className="flex items-center justify-between mb-6 sm:mb-8">
//           <button
//             onClick={goBack}
//             className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/60 rounded-lg transition-all"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             <span className="font-medium">Back</span>
//           </button>
//           <button
//             onClick={goHome}
//             className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/60 rounded-lg transition-all"
//           >
//             <Home className="w-5 h-5" />
//             <span className="font-medium">Home</span>
//           </button>
//         </div>

//         <h1 className="text-center text-lg sm:text-xl font-semibold text-blue-700 mb-6">
//           Preview
//         </h1>

//         {/* Basic Information */}
//         <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
//             Basic Information
//           </h2>
//           <p className="text-sm text-gray-600 mb-6">
//             Provide the fundamental details about your intellectual property assets
//           </p>

//           <div className="space-y-4">
//             <div>
//               <label className="flex items-center text-xs sm:text-sm font-semibold text-gray-700 mb-1">
//                 <FileText className="w-4 h-4 mr-2" />
//                 Title Of Your IP
//               </label>
//               <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base">
//                 {step1Data?.title || '-'}
//               </div>
//             </div>

//             <div>
//               <label className="flex items-center text-xs sm:text-sm font-semibold text-gray-700 mb-1">
//                 <FileText className="w-4 h-4 mr-2" />
//                 Abstract
//               </label>
//               <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base min-h-[80px]">
//                 {step1Data?.abstract || '-'}
//               </div>
//             </div>

//             <div>
//               <label className="flex items-center text-xs sm:text-sm font-semibold text-gray-700 mb-1">
//                 <Tag className="w-4 h-4 mr-2" />
//                 Tag
//               </label>
//               <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base">
//                 {joinArray(step1Data?.tags) || '-'}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="flex items-center text-xs sm:text-sm font-semibold text-gray-700 mb-1">
//                   <Hash className="w-4 h-4 mr-2" />
//                   Patent Number
//                 </label>
//                 <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base">
//                   {step1Data?.patentNumber || '-'}
//                 </div>
//               </div>
//               <div>
//                 <label className="flex items-center text-xs sm:text-sm font-semibold text-gray-700 mb-1">
//                   <Grid3X3 className="w-4 h-4 mr-2" />
//                   Category
//                 </label>
//                 <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base">
//                   {joinArray(step1Data?.categories || step1Data?.category) || '-'}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Technical Details */}
//         <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
//             Technical Details
//           </h2>
//           <p className="text-sm text-gray-600 mb-6">
//             Provide the technical details about your intellectual property assets
//           </p>

//           <div className="space-y-4">
//             <div>
//               <label className="flex items-center text-xs sm:text-sm font-semibold text-gray-700 mb-1">
//                 <FileText className="w-4 h-4 mr-2" />
//                 Technical Specifications Of Your IP
//               </label>
//               <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base min-h-[60px]">
//                 {step2Data?.technicalSpecs || '-'}
//               </div>
//             </div>

//             <div>
//               <label className="flex items-center text-xs sm:text-sm font-semibold text-gray-700 mb-1">
//                 <FileText className="w-4 h-4 mr-2" />
//                 Detailed Description Of IP
//               </label>
//               <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base min-h-[80px]">
//                 {step2Data?.detailedDescription || '-'}
//               </div>
//             </div>

//             <div>
//               <label className="flex items-center text-xs sm:text-sm font-semibold text-gray-700 mb-1">
//                 <Upload className="w-4 h-4 mr-2" />
//                 Upload Supportive Documents
//               </label>
//               <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-xs sm:text-sm text-gray-700">
//                 {step2Data?.documents?.length
//                   ? step2Data.documents.map((f, idx) => (
//                       <span key={idx} className="block">
//                         • {f.name || `Document ${idx + 1}`}
//                       </span>
//                     ))
//                   : 'No files uploaded'}
//               </div>
//               <p className="mt-1 text-[11px] text-gray-400">
//                 Note – Pdf, Jpg, not more than 5MB. Multiple files supported.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Commercialization Info */}
//         <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
//             Commercialization Info
//           </h2>
//           <p className="text-sm text-gray-600 mb-6">
//             Provide the commercialization details about your intellectual property assets
//           </p>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
//                 Target Industries For Your IP
//               </label>
//               <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base">
//                 {joinArray(step3Data?.targetIndustries) || '-'}
//               </div>
//             </div>

//             <div>
//               <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
//                 Is This IP Associated With Physical Hardware (Embedded Products)
//               </label>
//               <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base">
//                 {step3Data?.physicalHardware || '-'}
//               </div>
//             </div>

//             <div>
//               <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
//                 Stage Of Development
//               </label>
//               <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base">
//                 {step3Data?.developmentStage || '-'}
//               </div>
//             </div>

//             <div>
//               <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
//                 Innovators Video About IP (Optional)
//               </label>
//               <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base break-all">
//                 {step3Data?.innovationVideoUrl || 'Not provided'}
//               </div>
//             </div>

//             <div>
//               <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
//                 Is This IP Associated With Software Status
//               </label>
//               <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base">
//                 {step3Data?.hasSoftwareStatus || step3Data?.softwareStatus || '-'}
//               </div>
//             </div>

//             {/* you can add more read‑only fields here as needed */}
//           </div>

//           <div className="mt-8 flex justify-center gap-4">
//             <button
//               onClick={goBack}
//               className="px-6 py-2.5 border border-blue-700 text-blue-700 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-50"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={() => navigate('/sell-product')}
//               className="px-6 py-2.5 bg-blue-800 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-900 shadow"
//             >
//               Sell My Product
//             </button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default IPPreview;
