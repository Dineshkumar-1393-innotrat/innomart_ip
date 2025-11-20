// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { useIP } from '../context/IPContext.jsx';
// import {
//   ArrowLeft,
//   ArrowRight,
//   FileText,
//   Tag as TagIcon,
//   Grid3X3,
//   Home,
//   Hash,
//   X
// } from 'lucide-react';
// import homepageImage from '../assets/homepage-image.png';

// function IPSubmissionStep1() {
//   const navigate = useNavigate();
//   const { state, dispatch } = useIP();

//   // EXPECTED step1Data SHAPE:
//   // {
//   //   title: '',
//   //   abstract: '',
//   //   patentNumber: '',
//   //   tags: [],
//   //   categories: []
//   // }

//   const [formData, setFormData] = useState({
//     title: state.step1Data.title || '',
//     abstract: state.step1Data.abstract || '',
//     patentNumber: state.step1Data.patentNumber || '',
//     tags: state.step1Data.tags || [],
//     categories: state.step1Data.categories || [],
//     tagsInput:
//       (state.step1Data.tags && state.step1Data.tags.join(', ')) || '',
//     categoriesInput:
//       (state.step1Data.categories &&
//         state.step1Data.categories.join(', ')) ||
//       ''
//   });

//   const [showTagSuggestions, setShowTagSuggestions] = useState(false);
//   const [showCategorySuggestions, setShowCategorySuggestions] =
//     useState(false);

//   const formRef = useRef();

//   useEffect(() => {
//     gsap.fromTo(
//       formRef.current,
//       { opacity: 0, x: 30 },
//       { opacity: 1, x: 0, duration: 0.8 }
//     );
//   }, []);

//   /* ----------------- helpers ----------------- */

//   const syncCommaInputFromArray = (arr) =>
//     arr && arr.length ? arr.join(', ') : '';

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   /* ----------------- TAGS (multi, suggestions) ----------------- */

//   const suggestedTags = [
//     'AI',
//     'Machine Learning',
//     'Blockchain',
//     'Cloud',
//     'AR/VR',
//     'IoT',
//     'Robotics',
//     'Cybersecurity',
//     'Data Analytics',
//     'Automation'
//   ];

//   const handleTagsInputChange = (e) => {
//     const value = e.target.value;
//     const pieces = value
//       .split(',')
//       .map((t) => t.trim())
//       .filter((t) => t.length > 0);

//     setFormData((prev) => ({
//       ...prev,
//       tagsInput: value,
//       tags: pieces
//     }));
//   };

//   const handleTagSuggestionClick = (tag) => {
//     setFormData((prev) => {
//       const exists = (prev.tags || []).includes(tag);
//       let updated;

//       if (exists) {
//         updated = prev.tags.filter((t) => t !== tag);
//       } else {
//         updated = Array.from(new Set([...(prev.tags || []), tag]));
//       }

//       return {
//         ...prev,
//         tags: updated,
//         tagsInput: syncCommaInputFromArray(updated)
//       };
//     });
//   };

//   const handleRemoveTagChip = (tagToRemove) => {
//     setFormData((prev) => {
//       const updated = (prev.tags || []).filter((t) => t !== tagToRemove);
//       return {
//         ...prev,
//         tags: updated,
//         tagsInput: syncCommaInputFromArray(updated)
//       };
//     });
//   };

//   /* ----------------- CATEGORIES (multi, suggestions) ----------------- */

//   const suggestedCategories = [
//     'Technology',
//     'Healthcare',
//     'Energy',
//     'Agriculture',
//     'Manufacturing',
//     'Software',
//     'Biotechnology',
//     'Education',
//     'Fintech',
//     'IoT'
//   ];

//   const handleCategoriesInputChange = (e) => {
//     const value = e.target.value;
//     const pieces = value
//       .split(',')
//       .map((c) => c.trim())
//       .filter((c) => c.length > 0);

//     setFormData((prev) => ({
//       ...prev,
//       categoriesInput: value,
//       categories: pieces
//     }));
//   };

//   const handleCategorySuggestionClick = (cat) => {
//     setFormData((prev) => {
//       const exists = (prev.categories || []).includes(cat);
//       let updated;

//       if (exists) {
//         updated = prev.categories.filter((c) => c !== cat);
//       } else {
//         updated = Array.from(
//           new Set([...(prev.categories || []), cat])
//         );
//       }

//       return {
//         ...prev,
//         categories: updated,
//         categoriesInput: syncCommaInputFromArray(updated)
//       };
//     });
//   };

//   const handleRemoveCategoryChip = (catToRemove) => {
//     setFormData((prev) => {
//       const updated = (prev.categories || []).filter(
//         (c) => c !== catToRemove
//       );
//       return {
//         ...prev,
//         categories: updated,
//         categoriesInput: syncCommaInputFromArray(updated)
//       };
//     });
//   };

//   /* ----------------- submit / nav ----------------- */

//   const handleNext = (e) => {
//     e.preventDefault();

//     if (!formData.title.trim() || !formData.abstract.trim()) {
//       alert('Please fill Title and Abstract.');
//       return;
//     }
//     if (!formData.patentNumber.trim()) {
//       alert('Please enter patent number.');
//       return;
//     }
//     if (!formData.categories || formData.categories.length === 0) {
//       alert('Please enter at least one category.');
//       return;
//     }

//     dispatch({
//       type: 'SET_STEP1_DATA',
//       payload: {
//         title: formData.title.trim(),
//         abstract: formData.abstract.trim(),
//         patentNumber: formData.patentNumber.trim(),
//         tags: formData.tags,
//         categories: formData.categories
//       }
//     });

//     gsap.to(formRef.current, {
//       opacity: 0,
//       x: -30,
//       duration: 0.5,
//       onComplete: () => navigate('/ip-submission/step2')
//     });
//   };

//   const handleBack = () => navigate(-1);
//   const handleHome = () => navigate('/home');

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
//         ref={formRef}
//         className="relative z-10 max-w-3xl mx-auto py-8 sm:py-12"
//       >
//         {/* nav */}
//         <div className="flex items-center justify-between mb-6 sm:mb-8">
//           <button
//             onClick={handleBack}
//             className="flex items-center gap-2 px-3 sm:px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/50 rounded-lg transition-all duration-200 text-sm sm:text-base"
//           >
//             <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
//             <span className="font-medium">Back</span>
//           </button>
//           <button
//             onClick={handleHome}
//             className="flex items-center gap-2 px-3 sm:px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/50 rounded-lg transition-all duration-200 text-sm sm:text-base"
//           >
//             <Home className="w-4 h-4 sm:w-5 sm:h-5" />
//             <span className="font-medium">Home</span>
//           </button>
//         </div>

//         {/* card */}
//         <div className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 sm:p-8">
//           {/* header */}
//           <div className="mb-6 sm:mb-8">
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
//               <div>
//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
//                   Basic Information
//                 </h2>
//                 <p className="mt-1 text-xs sm:text-sm text-gray-500">
//                   Provide the fundamental details about your intellectual
//                   property assets.
//                 </p>
//               </div>
//               <span className="mt-3 sm:mt-0 text-xs sm:text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full self-start sm:self-auto">
//                 Step 1 of 3
//               </span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-1/3" />
//             </div>
//           </div>

//           {/* form */}
//           <form
//             onSubmit={handleNext}
//             className="space-y-4 sm:space-y-6"
//           >
//             {/* Title Of Your IP */}
//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2 text-sm sm:text-base">
//                 <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//                 Title Of Your IP
//                 <span className="ml-1 text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 placeholder="Enter your intellectual property title"
//                 className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 text-sm sm:text-base"
//                 required
//               />
//             </div>

//             {/* Abstract */}
//             <div>
//               <label className="flex items-center text-gray-700 font-semibold mb-2 text-sm sm:text-base">
//                 <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//                 Abstract
//                 <span className="ml-1 text-red-500">*</span>
//               </label>
//               <textarea
//                 name="abstract"
//                 value={formData.abstract}
//                 onChange={handleInputChange}
//                 rows={4}
//                 placeholder="Write brief description about your intellectual property here..."
//                 className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 text-sm sm:text-base resize-none"
//                 required
//               />
//             </div>

//             {/* Tag (multi, suggestions + chips) */}
//             <div className="relative">
//               <label className="flex items-center text-gray-700 font-semibold mb-2 text-sm sm:text-base">
//                 <TagIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//                 Tag
//               </label>
//               <input
//                 type="text"
//                 value={formData.tagsInput}
//                 onChange={handleTagsInputChange}
//                 onFocus={() => setShowTagSuggestions(true)}
//                 onBlur={() => {
//                   setTimeout(() => setShowTagSuggestions(false), 150);
//                 }}
//                 className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 text-sm sm:text-base"
//                 placeholder="Enter relevant tags separated by commas"
//               />

//               {/* suggestions – only on focus */}
//               {showTagSuggestions && (
//                 <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-2">
//                   <p className="text-xs text-gray-500 px-1 pb-1">
//                     Click to add or remove tags
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {suggestedTags.map((tag) => {
//                       const selected =
//                         formData.tags &&
//                         formData.tags.includes(tag);

//                       return (
//                         <button
//                           key={tag}
//                           type="button"
//                           onMouseDown={(e) => e.preventDefault()}
//                           onClick={() => handleTagSuggestionClick(tag)}
//                           className={`px-3 py-1 rounded-full text-xs sm:text-sm border transition-colors ${
//                             selected
//                               ? 'bg-blue-600 text-white border-blue-600'
//                               : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
//                           }`}
//                         >
//                           {tag}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>
//               )}

//               {/* chips under input */}
//               {formData.tags.length > 0 && (
//                 <div className="mt-2 flex flex-wrap gap-2">
//                   {formData.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm bg-blue-100 text-blue-800"
//                     >
//                       {tag}
//                       <button
//                         type="button"
//                         onClick={() => handleRemoveTagChip(tag)}
//                         className="ml-2 text-blue-600 hover:text-blue-800 focus:outline-none"
//                       >
//                         <X className="w-3 h-3" />
//                       </button>
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Patent Number + Category row */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//               {/* Patent Number */}
//               <div>
//                 <label className="flex items-center text-gray-700 font-semibold mb-2 text-sm sm:text-base">
//                   <Hash className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//                   Patent Number
//                   <span className="ml-1 text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="patentNumber"
//                   value={formData.patentNumber}
//                   onChange={handleInputChange}
//                   placeholder="Enter patent number"
//                   className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 text-sm sm:text-base"
//                   required
//                 />
//               </div>

//               {/* Category (multi, suggestions + chips) */}
//               <div className="relative">
//                 <label className="flex items-center text-gray-700 font-semibold mb-2 text-sm sm:text-base">
//                   <Grid3X3 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//                   Category
//                   <span className="ml-1 text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.categoriesInput}
//                   onChange={handleCategoriesInputChange}
//                   onFocus={() => setShowCategorySuggestions(true)}
//                   onBlur={() => {
//                     setTimeout(
//                       () => setShowCategorySuggestions(false),
//                       150
//                     );
//                   }}
//                   className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 text-sm sm:text-base"
//                   placeholder="Enter categories separated by commas"
//                 />

//                 {showCategorySuggestions && (
//                   <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-2">
//                     <p className="text-xs text-gray-500 px-1 pb-1">
//                       Click to add or remove categories
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {suggestedCategories.map((cat) => {
//                         const selected =
//                           formData.categories &&
//                           formData.categories.includes(cat);

//                         return (
//                           <button
//                             key={cat}
//                             type="button"
//                             onMouseDown={(e) => e.preventDefault()}
//                             onClick={() =>
//                               handleCategorySuggestionClick(cat)
//                             }
//                             className={`px-3 py-1 rounded-full text-xs sm:text-sm border transition-colors ${
//                               selected
//                                 ? 'bg-purple-600 text-white border-purple-600'
//                                 : 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100'
//                             }`}
//                           >
//                             {cat}
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* category chips under row */}
//             {formData.categories.length > 0 && (
//               <div className="flex flex-wrap gap-2">
//                 {formData.categories.map((cat) => (
//                   <span
//                     key={cat}
//                     className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm bg-purple-100 text-purple-800"
//                   >
//                     {cat}
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveCategoryChip(cat)}
//                       className="ml-2 text-purple-600 hover:text-purple-800 focus:outline-none"
//                     >
//                       <X className="w-3 h-3" />
//                     </button>
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* submit */}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold flex items-center justify-center text-sm sm:text-base shadow-lg hover:shadow-xl"
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

// src/components/IPSubmissionStep1.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useIP } from '../context/IPContext.jsx';
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  Tag as TagIcon,
  Grid3X3,
  Home,
  Hash,
  X,
} from 'lucide-react';
import homepageImage from '../assets/homepage-image.png';

function IPSubmissionStep1() {
  const navigate = useNavigate();
  const { state, dispatch } = useIP();

  const [formData, setFormData] = useState({
    title: state.step1Data.title || '',
    abstract: state.step1Data.abstract || '',
    patentNumber: state.step1Data.patentNumber || '',
    tags: state.step1Data.tags || [],
    categories: state.step1Data.categories || [],
    tagsInput:
      (state.step1Data.tags && state.step1Data.tags.join(', ')) || '',
    categoriesInput:
      (state.step1Data.categories &&
        state.step1Data.categories.join(', ')) ||
      '',
  });

  const [showTagSuggestions, setShowTagSuggestions] = useState(false);
  const [showCategorySuggestions, setShowCategorySuggestions] =
    useState(false);

  const formRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8 }
    );
  }, []);

  const syncCommaInputFromArray = (arr) =>
    arr && arr.length ? arr.join(', ') : '';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const suggestedTags = [
    'AI',
    'Machine Learning',
    'Blockchain',
    'Cloud',
    'AR/VR',
    'IoT',
    'Robotics',
    'Cybersecurity',
    'Data Analytics',
    'Automation',
  ];

  const handleTagsInputChange = (e) => {
    const value = e.target.value;
    const pieces = value
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    setFormData((prev) => ({
      ...prev,
      tagsInput: value,
      tags: pieces,
    }));
  };

  const handleTagSuggestionClick = (tag) => {
    setFormData((prev) => {
      const exists = (prev.tags || []).includes(tag);
      let updated;

      if (exists) {
        updated = prev.tags.filter((t) => t !== tag);
      } else {
        updated = Array.from(new Set([...(prev.tags || []), tag]));
      }

      return {
        ...prev,
        tags: updated,
        tagsInput: syncCommaInputFromArray(updated),
      };
    });
  };

  const handleRemoveTagChip = (tagToRemove) => {
    setFormData((prev) => {
      const updated = (prev.tags || []).filter((t) => t !== tagToRemove);
      return {
        ...prev,
        tags: updated,
        tagsInput: syncCommaInputFromArray(updated),
      };
    });
  };

  const suggestedCategories = [
    'Technology',
    'Healthcare',
    'Energy',
    'Agriculture',
    'Manufacturing',
    'Software',
    'Biotechnology',
    'Education',
    'Fintech',
    'IoT',
  ];

  const handleCategoriesInputChange = (e) => {
    const value = e.target.value;
    const pieces = value
      .split(',')
      .map((c) => c.trim())
      .filter((c) => c.length > 0);

    setFormData((prev) => ({
      ...prev,
      categoriesInput: value,
      categories: pieces,
    }));
  };

  const handleCategorySuggestionClick = (cat) => {
    setFormData((prev) => {
      const exists = (prev.categories || []).includes(cat);
      let updated;

      if (exists) {
        updated = prev.categories.filter((c) => c !== cat);
      } else {
        updated = Array.from(new Set([...(prev.categories || []), cat]));
      }

      return {
        ...prev,
        categories: updated,
        categoriesInput: syncCommaInputFromArray(updated),
      };
    });
  };

  const handleRemoveCategoryChip = (catToRemove) => {
    setFormData((prev) => {
      const updated = (prev.categories || []).filter(
        (c) => c !== catToRemove
      );
      return {
        ...prev,
        categories: updated,
        categoriesInput: syncCommaInputFromArray(updated),
      };
    });
  };

  /* ---------- submit / nav ---------- */

  const handleNext = (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.abstract.trim()) {
      alert('Please fill Title and Abstract.');
      return;
    }
    if (!formData.patentNumber.trim()) {
      alert('Please enter patent number.');
      return;
    }
    if (!formData.categories || formData.categories.length === 0) {
      alert('Please enter at least one category.');
      return;
    }

    dispatch({
      type: 'SET_STEP1_DATA',
      payload: {
        title: formData.title.trim(),
        abstract: formData.abstract.trim(),
        patentNumber: formData.patentNumber.trim(),
        tags: formData.tags,
        categories: formData.categories,
      },
    });

    gsap.to(formRef.current, {
      opacity: 0,
      x: -30,
      duration: 0.5,
      onComplete: () => navigate('/ip-submission/step2'),
    });
  };

  const handleBack = () => navigate(-1);
  const handleHome = () => navigate('/home');

  return (
    <div className="min-h-screen relative overflow-hidden p-4 sm:p-6">
      {/* background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${homepageImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80" />

      <div
        ref={formRef}
        className="relative z-10 max-w-3xl mx-auto py-8 sm:py-12"
      >
        {/* nav */}
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

        {/* card */}
        <div className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 sm:p-8">
          {/* header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Basic Information
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-gray-500">
                  Provide the fundamental details about your intellectual
                  property assets.
                </p>
              </div>
              <span className="mt-3 sm:mt-0 text-xs sm:text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full self-start sm:self-auto">
                Step 1 of 3
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-1/3" />
            </div>
          </div>

          {/* form */}
          <form onSubmit={handleNext} className="space-y-4 sm:space-y-6">
            {/* Title Of Your IP */}
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Title Of Your IP
                <span className="ml-1 text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter your intellectual property title"
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 text-sm sm:text-base"
                required
              />
            </div>

            {/* Abstract */}
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Abstract
                <span className="ml-1 text-red-500">*</span>
              </label>
              <textarea
                name="abstract"
                value={formData.abstract}
                onChange={handleInputChange}
                rows={4}
                placeholder="Write brief description about your intellectual property here..."
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 text-sm sm:text-base resize-none"
                required
              />
            </div>

            {/* Tag (multi, suggestions + chips) */}
            <div className="relative">
              <label className="flex items-center text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                <TagIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Tag
              </label>
              <input
                type="text"
                value={formData.tagsInput}
                onChange={handleTagsInputChange}
                onFocus={() => setShowTagSuggestions(true)}
                onBlur={() => {
                  setTimeout(() => setShowTagSuggestions(false), 150);
                }}
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 text-sm sm:text-base"
                placeholder="Enter relevant tags separated by commas"
              />

              {showTagSuggestions && (
                <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                  <p className="text-xs text-gray-500 px-1 pb-1">
                    Click to add or remove tags
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedTags.map((tag) => {
                      const selected =
                        formData.tags && formData.tags.includes(tag);

                      return (
                        <button
                          key={tag}
                          type="button"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => handleTagSuggestionClick(tag)}
                          className={`px-3 py-1 rounded-full text-xs sm:text-sm border transition-colors ${
                            selected
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                          }`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {formData.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {formData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm bg-blue-100 text-blue-800"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTagChip(tag)}
                        className="ml-2 text-blue-600 hover:text-blue-800 focus:outline-none"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Patent Number + Category row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  <Hash className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Patent Number
                  <span className="ml-1 text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="patentNumber"
                  value={formData.patentNumber}
                  onChange={handleInputChange}
                  placeholder="Enter patent number"
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 text-sm sm:text-base"
                  required
                />
              </div>

              <div className="relative">
                <label className="flex items-center text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  <Grid3X3 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Category
                  <span className="ml-1 text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.categoriesInput}
                  onChange={handleCategoriesInputChange}
                  onFocus={() => setShowCategorySuggestions(true)}
                  onBlur={() => {
                    setTimeout(
                      () => setShowCategorySuggestions(false),
                      150
                    );
                  }}
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 text-sm sm:text-base"
                  placeholder="Enter categories separated by commas"
                />

                {showCategorySuggestions && (
                  <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                    <p className="text-xs text-gray-500 px-1 pb-1">
                      Click to add or remove categories
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedCategories.map((cat) => {
                        const selected =
                          formData.categories &&
                          formData.categories.includes(cat);

                        return (
                          <button
                            key={cat}
                            type="button"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() =>
                              handleCategorySuggestionClick(cat)
                            }
                            className={`px-3 py-1 rounded-full text-xs sm:text-sm border transition-colors ${
                              selected
                                ? 'bg-purple-600 text-white border-purple-600'
                                : 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100'
                            }`}
                          >
                            {cat}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {formData.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.categories.map((cat) => (
                  <span
                    key={cat}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm bg-purple-100 text-purple-800"
                  >
                    {cat}
                    <button
                      type="button"
                      onClick={() => handleRemoveCategoryChip(cat)}
                      className="ml-2 text-purple-600 hover:text-purple-800 focus:outline-none"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

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
// import { ArrowLeft, ArrowRight, FileText, Tag, Grid3X3, Home } from 'lucide-react';
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

//   const handleBack = () => {
//     navigate(-1);
//   };

//   const handleHome = () => {
//     navigate('/home');
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
//         {/* Navigation Buttons */}
//         <div className="flex items-center justify-between mb-6 sm:mb-8">
//           <button
//             onClick={handleBack}
//             className="flex items-center gap-2 px-3 sm:px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/50 rounded-lg transition-all duration-200 text-sm sm:text-base"
//           >
//             <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
//             <span className="font-medium">Back</span>
//           </button>
          
//           <button
//             onClick={handleHome}
//             className="flex items-center gap-2 px-3 sm:px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/50 rounded-lg transition-all duration-200 text-sm sm:text-base"
//           >
//             <Home className="w-4 h-4 sm:w-5 sm:h-5" />
//             <span className="font-medium">Home</span>
//           </button>
//         </div>

//         <div className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 sm:p-8">
//           <div className="mb-6 sm:mb-8">
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-0">Basic Information</h2>
//               <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start sm:self-auto">
//                 Step 1 of 3
//               </span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
//               <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-1/3"></div>
//             </div>
//             <p className="w-full text-sm sm:text-base text-gray-600">Provide the fundamental details about your intellectual property assets</p>
//           </div>

//           <form onSubmit={handleNext} className="space-y-4 sm:space-y-6">
//             <div>
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
//                 className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 text-sm sm:text-base"
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
//                 className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 text-sm sm:text-base resize-none"
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
//                 className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 text-sm sm:text-base"
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
//                 className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 text-sm sm:text-base"
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
//               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold flex items-center justify-center text-sm sm:text-base shadow-lg hover:shadow-xl"
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