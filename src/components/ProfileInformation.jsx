// import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Camera, MapPinHouse, Sparkles, UserRound, Link2, UploadCloud } from 'lucide-react';
// import Navbar from './Navbar.jsx';
// import { useUser } from '../context/UserContext.jsx';

// function ProfileInformation() {
//   const navigate = useNavigate();
//   const { state, dispatch } = useUser();
//   const [formData, setFormData] = useState(() => ({
//     ...state.userData,
//     focusAreas: state.userData.focusAreas || []
//   }));
//   const [focusAreaInput, setFocusAreaInput] = useState('');
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [imageInput, setImageInput] = useState(() => ({
//     source: state.userData.profileImageSource || 'upload',
//     url: state.userData.profileImage || ''
//   }));
//   const fileInputRef = useRef(null);

//   useEffect(() => {
//     // This effect now runs only once on mount to initialize the form
//     setFormData({
//       ...state.userData,
//       focusAreas: state.userData.focusAreas || []
//     });
//     setImageInput({
//       source: state.userData.profileImageSource || 'upload',
//       url: state.userData.profileImage || ''
//     });
//   }, []); // Empty dependency array ensures this runs only once

//   useEffect(() => {
//     // Sync local form data with context state changes
//     setFormData({
//       ...state.userData,
//       focusAreas: state.userData.focusAreas || []
//     });
//     setImageInput({
//       source: state.userData.profileImageSource || 'upload',
//       url: state.userData.profileImage || ''
//     });
//   }, [state.userData]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFocusAreaAdd = () => {
//     const value = focusAreaInput.trim();
//     if (!value || formData.focusAreas.includes(value)) {
//       setFocusAreaInput('');
//       return;
//     }
//     setFormData((prev) => ({
//       ...prev,
//       focusAreas: [...prev.focusAreas, value]
//     }));
//     setFocusAreaInput('');
//   };

//   const handleFocusAreaKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       event.preventDefault();
//       handleFocusAreaAdd();
//     }
//   };

//   const handleFocusAreaRemove = (indexToRemove) => {
//     setFormData((prev) => ({
//       ...prev,
//       focusAreas: prev.focusAreas.filter((_, index) => index !== indexToRemove)
//     }));
//   };

//   const handleSave = (event) => {
//     event.preventDefault();
//     dispatch({
//       type: 'SET_USER_DATA',
//       payload: {
//         ...formData,
//         profileImage: imageInput.url,
//         profileImageSource: imageInput.source
//       }
//     });
//     setShowSuccess(true);
//     setTimeout(() => setShowSuccess(false), 3000);
//   };

//   const handleImageUpload = async (event) => {
//     const file = event.target.files?.[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       const result = typeof reader.result === 'string' ? reader.result : '';
//       setImageInput({ source: 'upload', url: result });
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImageUrlChange = (event) => {
//     const value = event.target.value;
//     setImageInput({ source: 'link', url: value });
//   };

//   const handleImageSourceToggle = (source) => {
//     setImageInput((prev) => ({
//       source,
//       url: source === prev.source ? prev.url : ''
//     }));
//   };

//   const openFilePicker = () => {
//     fileInputRef.current?.click();
//   };

//   const handleUploadButtonClick = () => {
//     handleImageSourceToggle('upload');
//     openFilePicker();
//   };

//   return (
//     <div className="min-h-screen bg-[#f3f6fb]">
//       <Navbar title="IP Legal Review Status" />

//       <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
//         <div className="bg-white rounded-3xl shadow-sm border border-gray-100">
//           <div className="flex flex-col lg:flex-row">
//             <aside className="lg:w-72 border-b lg:border-b-0 lg:border-r border-gray-100 p-6 sm:p-8 bg-gray-50">
//               <div className="flex flex-col items-center text-center gap-6">
//                 <div
//                   onClick={openFilePicker}
//                   className="w-40 h-40 rounded-2xl border-2 border-dashed border-gray-200 bg-white flex flex-col items-center justify-center gap-3 text-gray-400 cursor-pointer overflow-hidden"
//                 >
//                   {imageInput.url ? (
//                     <img
//                       src={imageInput.url}
//                       alt="Profile avatar"
//                       className="h-full w-full object-cover"
//                     />
//                   ) : (
//                     <>
//                       <Camera className="w-8 h-8" />
//                       <span className="text-xs uppercase tracking-wide">Upload Picture</span>
//                     </>
//                   )}
//                 </div>
//                 <input
//                   ref={fileInputRef}
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleImageUpload}
//                 />
//                 <div className="flex flex-col items-center gap-3 text-sm">
//                   <div className="flex gap-2">
//                     <button
//                       type="button"
//                       onClick={handleUploadButtonClick}
//                       className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
//                         imageInput.source === 'upload'
//                           ? 'border-blue-500 bg-blue-50 text-blue-600'
//                           : 'border-gray-200 text-gray-500 hover:bg-gray-100'
//                       }`}
//                     >
//                       Upload
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => handleImageSourceToggle('link')}
//                       className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
//                         imageInput.source === 'link'
//                           ? 'border-blue-500 bg-blue-50 text-blue-600'
//                           : 'border-gray-200 text-gray-500 hover:bg-gray-100'
//                       }`}
//                     >
//                       Use Link
//                     </button>
//                   </div>
//                   {imageInput.source === 'link' && (
//                     <input
//                       type="url"
//                       placeholder="https://example.com/avatar.png"
//                       className="w-48 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
//                       value={imageInput.url}
//                       onChange={handleImageUrlChange}
//                     />
//                   )}
//                   {imageInput.url && (
//                     <button
//                       type="button"
//                       onClick={() => setImageInput({ source: 'upload', url: '' })}
//                       className="flex items-center gap-2 text-xs font-semibold text-red-500 hover:text-red-600"
//                     >
//                       <UploadCloud className="h-4 w-4" />
//                       Remove Image
//                     </button>
//                   )}
//                 </div>
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-800">{formData.name || 'Profile Name'}</h2>
//                   <p className="text-sm text-gray-500 mt-1">IP Strategist</p>
//                 </div>
//               </div>
//             </aside>

//             <section className="flex-1 p-6 sm:p-10">
//               <div className="border-b border-gray-100 pb-6 mb-6">
//                 <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Profile Information</h1>
//                 <p className="text-sm text-gray-500 mt-2">Update Your Information</p>
//               </div>

//               {showSuccess && (
//                 <div className="mb-8 rounded-lg border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-700">
//                   Profile details saved successfully.
//                 </div>
//               )}

//               <form onSubmit={handleSave} className="space-y-10">
//                 <div className="space-y-6">
//                   <div className="flex items-center gap-2 text-blue-600 font-semibold">
//                     <UserRound className="w-5 h-5" />
//                     <h2 className="text-lg text-gray-800">Basic Information</h2>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Name</label>
//                       <input
//                         type="text"
//                         placeholder="Name"
//                         name="name"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.name || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Email ID</label>
//                       <input
//                         type="email"
//                         placeholder="xxx@gmail.com"
//                         name="email"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.email || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Phone No.</label>
//                       <input
//                         type="tel"
//                         placeholder="0987654321"
//                         name="phone"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.phone || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex items-center gap-2 text-blue-600 font-semibold">
//                     <MapPinHouse className="w-5 h-5" />
//                     <h2 className="text-lg text-gray-800">Address Information</h2>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex flex-col gap-2 md:col-span-2">
//                       <label className="text-sm font-medium text-gray-600">Address Line 1</label>
//                       <input
//                         type="text"
//                         placeholder="Address Line 1"
//                         name="addressLine1"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.addressLine1 || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Address Line 2</label>
//                       <input
//                         type="text"
//                         placeholder="Address Line 2"
//                         name="addressLine2"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.addressLine2 || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Area</label>
//                       <input
//                         type="text"
//                         placeholder="Area"
//                         name="area"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.area || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Pincode</label>
//                       <input
//                         type="text"
//                         placeholder="Pincode"
//                         name="pincode"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.pincode || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex items-center gap-2 text-blue-600 font-semibold">
//                     <Sparkles className="w-5 h-5" />
//                     <h2 className="text-lg text-gray-800">Professional Information</h2>
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-medium text-gray-600">Bio</label>
//                     <textarea
//                       rows="3"
//                       placeholder="Write about yourself"
//                       name="bio"
//                       className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                       value={formData.bio || ''}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex items-center gap-2 text-blue-600 font-semibold">
//                     <Sparkles className="w-5 h-5" />
//                     <h2 className="text-lg text-gray-800">Focus Areas</h2>
//                   </div>
//                   <div className="flex flex-wrap gap-3">
//                     {formData.focusAreas?.map((label, index) => (
//                       <button
//                         key={`${label}-${index}`}
//                         type="button"
//                         onClick={() => handleFocusAreaRemove(index)}
//                         className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600 hover:bg-blue-100"
//                       >
//                         {label}
//                         <span className="text-xs">×</span>
//                       </button>
//                     ))}
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <input
//                       type="text"
//                       placeholder="Add Focus Areas (Robotic, AI/ML, Drone)"
//                       className="w-full rounded-lg border border-dashed border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
//                       value={focusAreaInput}
//                       onChange={(event) => setFocusAreaInput(event.target.value)}
//                       onKeyDown={handleFocusAreaKeyDown}
//                     />
//                     <button
//                       type="button"
//                       onClick={handleFocusAreaAdd}
//                       className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
//                     >
//                       Add
//                     </button>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex items-center gap-2 text-blue-600 font-semibold">
//                     <Link2 className="w-5 h-5" />
//                     <h2 className="text-lg text-gray-800">Professional Links</h2>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Portfolio Link</label>
//                       <input
//                         type="url"
//                         placeholder="https://sri.dev"
//                         name="portfolioLink"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.portfolioLink || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">LinkedIn Link</label>
//                       <input
//                         type="url"
//                         placeholder="https://linkedin.com"
//                         name="linkedinLink"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.linkedinLink || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center gap-4 mt-12">
//                   <button
//                     type="button"
//                     onClick={() => navigate(-1)}
//                     className="px-8 py-3 rounded-lg border border-blue-200 text-blue-600 font-semibold hover:bg-blue-50 transition"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-10 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </form>
//             </section>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default ProfileInformation;



// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Camera, MapPinHouse, Sparkles, UserRound, Link2, UploadCloud } from 'lucide-react';
// import Navbar from './Navbar.jsx';
// import { useUser } from '../context/UserContext.jsx';
// import { toast } from "react-toastify";

// function ProfileInformation() {
//   const navigate = useNavigate();
//   const { state, dispatch } = useUser();
//   const [formData, setFormData] = useState({});
//   console.log(formData,"formData---");

//   const [focusAreaInput, setFocusAreaInput] = useState('');
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [imageInput, setImageInput] = useState({});
//   const [draftLoaded, setDraftLoaded] = useState(false);
//   const fileInputRef = useRef(null);
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     // Load saved user data from localStorage to context on mount
//     const savedData = localStorage.getItem('userData');
//     if (savedData) {
//       try {
//         const parsed = JSON.parse(savedData);
//         dispatch({ type: 'SET_USER_DATA', payload: parsed });
//       } catch (e) {
//         console.error('Failed to load user data from localStorage:', e);
//       }
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     if (draftLoaded) return;

//     const draftStr = localStorage.getItem('userDataDraft');
//     let initialData = null;

//     if (draftStr) {
//       try {
//         initialData = JSON.parse(draftStr);
//       } catch (e) {
//         console.error('Failed to parse draft:', e);
//       }
//     }

//     if (initialData) {
//       setFormData({
//         ...initialData,
//         focusAreas: initialData.focusAreas || []
//       });
//       setImageInput({
//         source: initialData.profileImageSource || 'upload',
//         url: initialData.profileImage || ''
//       });
//     } else {
//       setFormData({
//         ...state.userData,
//         focusAreas: state.userData.focusAreas || []
//       });
//       setImageInput({
//         source: state.userData.profileImageSource || 'upload',
//         url: state.userData.profileImage || ''
//       });
//     }

//     setDraftLoaded(true);
//   }, [state.userData, draftLoaded]);

//   useEffect(() => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     timeoutRef.current = setTimeout(() => {
//       const draft = {
//         ...formData,
//         profileImage: imageInput.url,
//         profileImageSource: imageInput.source,
//         focusAreas: formData.focusAreas || []
//       };
//       localStorage.setItem('userDataDraft', JSON.stringify(draft));

//       // ✅ Show toast notification
//       toast.success("Draft saved successfully!", {
//         position: "bottom-right",
//         autoClose: 1500,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: false,
//         draggable: true,
//       });

//       // ✅ Clear inputs after saving
//       setFormData({
//         ...formData,
//         name: "",
//         email: "",
//         focusAreas: [],
//         // Add other form fields here to reset them
//       });

//       setImageInput({
//         url: "",
//         source: "",
//       });
//     }, 1500);

//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, [formData, imageInput]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFocusAreaAdd = () => {
//     const value = focusAreaInput.trim();
//     if (!value || formData.focusAreas.includes(value)) {
//       setFocusAreaInput('');
//       return;
//     }
//     setFormData((prev) => ({
//       ...prev,
//       focusAreas: [...prev.focusAreas, value]
//     }));
//     setFocusAreaInput('');
//   };

//   const handleFocusAreaKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       event.preventDefault();
//       handleFocusAreaAdd();
//     }
//   };

//   const handleFocusAreaRemove = (indexToRemove) => {
//     setFormData((prev) => ({
//       ...prev,
//       focusAreas: prev.focusAreas.filter((_, index) => index !== indexToRemove)
//     }));
//   };

//   const handleSave = (event) => {
//     event.preventDefault();
//     const payload = {
//       ...formData,
//       profileImage: imageInput.url,
//       profileImageSource: imageInput.source
//     };
//     dispatch({
//       type: 'SET_USER_DATA',
//       payload
//     });
//     localStorage.setItem('userData', JSON.stringify(payload));
//     localStorage.removeItem('userDataDraft');
//     setShowSuccess(true);
//     setTimeout(() => setShowSuccess(false), 3000);
//   };

//   const handleImageUpload = async (event) => {
//     const file = event.target.files?.[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       const result = typeof reader.result === 'string' ? reader.result : '';
//       setImageInput({ source: 'upload', url: result });
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImageUrlChange = (event) => {
//     const value = event.target.value;
//     setImageInput({ source: 'link', url: value });
//   };

//   const handleImageSourceToggle = (source) => {
//     setImageInput((prev) => ({
//       source,
//       url: source === prev.source ? prev.url : ''
//     }));
//   };

//   const openFilePicker = () => {
//     fileInputRef.current?.click();
//   };

//   const handleUploadButtonClick = () => {
//     handleImageSourceToggle('upload');
//     openFilePicker();
//   };

//   return (
//     <div className="min-h-screen bg-[#f3f6fb]">
//       <Navbar title="IP Legal Review Status" />

//       <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
//         <div className="bg-white rounded-3xl shadow-sm border border-gray-100">
//           <div className="flex flex-col lg:flex-row">
//             <aside className="lg:w-72 border-b lg:border-b-0 lg:border-r border-gray-100 p-6 sm:p-8 bg-gray-50">
//               <div className="flex flex-col items-center text-center gap-6">
//                 <div
//                   onClick={openFilePicker}
//                   className="w-40 h-40 rounded-2xl border-2 border-dashed border-gray-200 bg-white flex flex-col items-center justify-center gap-3 text-gray-400 cursor-pointer overflow-hidden"
//                 >
//                   {imageInput.url ? (
//                     <img
//                       src={imageInput.url}
//                       alt="Profile avatar"
//                       className="h-full w-full object-cover"
//                     />
//                   ) : (
//                     <>
//                       <Camera className="w-8 h-8" />
//                       <span className="text-xs uppercase tracking-wide">Upload Picture</span>
//                     </>
//                   )}
//                 </div>
//                 <input
//                   ref={fileInputRef}
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleImageUpload}
//                 />
//                 <div className="flex flex-col items-center gap-3 text-sm">
//                   <div className="flex gap-2">
//                     <button
//                       type="button"
//                       onClick={handleUploadButtonClick}
//                       className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${imageInput.source === 'upload'
//                           ? 'border-blue-500 bg-blue-50 text-blue-600'
//                           : 'border-gray-200 text-gray-500 hover:bg-gray-100'
//                         }`}
//                     >
//                       Upload
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => handleImageSourceToggle('link')}
//                       className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${imageInput.source === 'link'
//                           ? 'border-blue-500 bg-blue-50 text-blue-600'
//                           : 'border-gray-200 text-gray-500 hover:bg-gray-100'
//                         }`}
//                     >
//                       Use Link
//                     </button>
//                   </div>
//                   {imageInput.source === 'link' && (
//                     <input
//                       type="url"
//                       placeholder="https://example.com/avatar.png"
//                       className="w-48 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
//                       value={imageInput.url || ''}
//                       onChange={handleImageUrlChange}
//                     />
//                   )}
//                   {imageInput.url && (
//                     <button
//                       type="button"
//                       onClick={() => setImageInput({ source: 'upload', url: '' })}
//                       className="flex items-center gap-2 text-xs font-semibold text-red-500 hover:text-red-600"
//                     >
//                       <UploadCloud className="h-4 w-4" />
//                       Remove Image
//                     </button>
//                   )}
//                 </div>
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-800">{formData.name || 'Profile Name'}</h2>
//                   <p className="text-sm text-gray-500 mt-1">IP Strategist</p>
//                 </div>
//               </div>
//             </aside>

//             <section className="flex-1 p-6 sm:p-10">
//               <div className="border-b border-gray-100 pb-6 mb-6">
//                 <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Profile Information</h1>
//                 <p className="text-sm text-gray-500 mt-2">Update Your Information</p>
//               </div>

//               {showSuccess && (
//                 <div className="mb-8 rounded-lg border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-700">
//                   Profile details saved successfully.
//                 </div>
//               )}

//               <form onSubmit={handleSave} className="space-y-10">
//                 <div className="space-y-6">
//                   <div className="flex items-center gap-2 text-blue-600 font-semibold">
//                     <UserRound className="w-5 h-5" />
//                     <h2 className="text-lg text-gray-800">Basic Information</h2>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Name</label>
//                       <input
//                         type="text"
//                         placeholder="Name"
//                         name="name"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.name || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Email ID</label>
//                       <input
//                         type="email"
//                         placeholder="xxx@gmail.com"
//                         name="email"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.email || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Phone No.</label>
//                       <input
//                         type="tel"
//                         placeholder="0987654321"
//                         name="phone"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.phone || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex items-center gap-2 text-blue-600 font-semibold">
//                     <MapPinHouse className="w-5 h-5" />
//                     <h2 className="text-lg text-gray-800">Address Information</h2>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex flex-col gap-2 md:col-span-2">
//                       <label className="text-sm font-medium text-gray-600">Address Line 1</label>
//                       <input
//                         type="text"
//                         placeholder="Address Line 1"
//                         name="addressLine1"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.addressLine1 || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Address Line 2</label>
//                       <input
//                         type="text"
//                         placeholder="Address Line 2"
//                         name="addressLine2"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.addressLine2 || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Area</label>
//                       <input
//                         type="text"
//                         placeholder="Area"
//                         name="area"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.area || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Pincode</label>
//                       <input
//                         type="text"
//                         placeholder="Pincode"
//                         name="pincode"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.pincode || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex items-center gap-2 text-blue-600 font-semibold">
//                     <Sparkles className="w-5 h-5" />
//                     <h2 className="text-lg text-gray-800">Professional Information</h2>
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-medium text-gray-600">Bio</label>
//                     <textarea
//                       rows="3"
//                       placeholder="Write about yourself"
//                       name="bio"
//                       className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                       value={formData.bio || ''}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex items-center gap-2 text-blue-600 font-semibold">
//                     <Sparkles className="w-5 h-5" />
//                     <h2 className="text-lg text-gray-800">Focus Areas</h2>
//                   </div>
//                   <div className="flex flex-wrap gap-3">
//                     {formData.focusAreas?.map((label, index) => (
//                       <button
//                         key={`${label}-${index}`}
//                         type="button"
//                         onClick={() => handleFocusAreaRemove(index)}
//                         className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600 hover:bg-blue-100"
//                       >
//                         {label}
//                         <span className="text-xs">×</span>
//                       </button>
//                     ))}
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <input
//                       type="text"
//                       placeholder="Add Focus Areas (Robotic, AI/ML, Drone)"
//                       className="w-full rounded-lg border border-dashed border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
//                       value={focusAreaInput}
//                       onChange={(event) => setFocusAreaInput(event.target.value)}
//                       onKeyDown={handleFocusAreaKeyDown}
//                     />
//                     <button
//                       type="button"
//                       onClick={handleFocusAreaAdd}
//                       className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
//                     >
//                       Add
//                     </button>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex items-center gap-2 text-blue-600 font-semibold">
//                     <Link2 className="w-5 h-5" />
//                     <h2 className="text-lg text-gray-800">Professional Links</h2>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Portfolio Link</label>
//                       <input
//                         type="url"
//                         placeholder="https://sri.dev"
//                         name="portfolioLink"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.portfolioLink || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">LinkedIn Link</label>
//                       <input
//                         type="url"
//                         placeholder="https://linkedin.com"
//                         name="linkedinLink"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.linkedinLink || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center gap-4 mt-12">
//                   <button
//                     type="button"
//                     onClick={() => navigate(-1)}
//                     className="px-8 py-3 rounded-lg border border-blue-200 text-blue-600 font-semibold hover:bg-blue-50 transition"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-10 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </form>
//             </section>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default ProfileInformation;



//new one .01
// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Camera, MapPinHouse, Sparkles, UserRound, Link2, UploadCloud } from 'lucide-react';
// import Navbar from './Navbar.jsx';
// import { useUser } from '../context/UserContext.jsx';
// import { toast } from "react-toastify";

// function ProfileInformation() {
//   const navigate = useNavigate();
//   const { state, dispatch } = useUser();
//   const [formData, setFormData] = useState({});
//   console.log(formData,"formData---");

//   const [focusAreaInput, setFocusAreaInput] = useState('');
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [imageInput, setImageInput] = useState({});
//   const [draftLoaded, setDraftLoaded] = useState(false);
//   const fileInputRef = useRef(null);
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     // Load saved user data from localStorage to context on mount
//     const savedData = localStorage.getItem('userData');
//     if (savedData) {
//       try {
//         const parsed = JSON.parse(savedData);
//         dispatch({ type: 'SET_USER_DATA', payload: parsed });
//       } catch (e) {
//         console.error('Failed to load user data from localStorage:', e);
//       }
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     if (draftLoaded) return;

//     const draftStr = localStorage.getItem('userDataDraft');
//     let initialData = null;

//     if (draftStr) {
//       try {
//         initialData = JSON.parse(draftStr);
//       } catch (e) {
//         console.error('Failed to parse draft:', e);
//       }
//     }

//     if (initialData) {
//       setFormData({
//         ...initialData,
//         focusAreas: initialData.focusAreas || []
//       });
//       setImageInput({
//         source: initialData.profileImageSource || 'upload',
//         url: initialData.profileImage || ''
//       });
//     } else {
//       setFormData({
//         ...state.userData,
//         focusAreas: state.userData.focusAreas || []
//       });
//       setImageInput({
//         source: state.userData.profileImageSource || 'upload',
//         url: state.userData.profileImage || ''
//       });
//     }

//     setDraftLoaded(true);
//   }, [state.userData, draftLoaded]);

//   useEffect(() => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     // Only auto-save if we have actual data
//     const hasFormData = Object.keys(formData).length > 0 || imageInput.url;

//     if (hasFormData) {
//       timeoutRef.current = setTimeout(() => {
//         const draft = {
//           ...formData,
//           profileImage: imageInput.url,
//           profileImageSource: imageInput.source,
//           focusAreas: formData.focusAreas || []
//         };
//         localStorage.setItem('userDataDraft', JSON.stringify(draft));

//         // ✅ Show toast notification only if there are changes
//         toast.success("Draft saved successfully!", {
//           position: "bottom-right",
//           autoClose: 1500,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: false,
//           draggable: true,
//         });
//       }, 1500);
//     }

//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, [formData, imageInput]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFocusAreaAdd = () => {
//     const value = focusAreaInput.trim();
//     if (!value || formData.focusAreas?.includes(value)) {
//       setFocusAreaInput('');
//       return;
//     }
//     setFormData((prev) => ({
//       ...prev,
//       focusAreas: [...(prev.focusAreas || []), value]
//     }));
//     setFocusAreaInput('');
//   };

//   const handleFocusAreaKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       event.preventDefault();
//       handleFocusAreaAdd();
//     }
//   };

//   const handleFocusAreaRemove = (indexToRemove) => {
//     setFormData((prev) => ({
//       ...prev,
//       focusAreas: prev.focusAreas.filter((_, index) => index !== indexToRemove)
//     }));
//   };

//   const handleSave = (event) => {
//     event.preventDefault();
//     const payload = {
//       ...formData,
//       profileImage: imageInput.url,
//       profileImageSource: imageInput.source
//     };
//     dispatch({
//       type: 'SET_USER_DATA',
//       payload
//     });
//     localStorage.setItem('userData', JSON.stringify(payload));
//     localStorage.removeItem('userDataDraft');
//     setShowSuccess(true);

//     // ✅ Show success toast for final save
//     toast.success("Profile saved successfully!", {
//       position: "bottom-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: false,
//       draggable: true,
//     });

//     setTimeout(() => setShowSuccess(false), 3000);
//   };

//   const handleImageUpload = async (event) => {
//     const file = event.target.files?.[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       const result = typeof reader.result === 'string' ? reader.result : '';
//       setImageInput({ source: 'upload', url: result });
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImageUrlChange = (event) => {
//     const value = event.target.value;
//     setImageInput({ source: 'link', url: value });
//   };

//   const handleImageSourceToggle = (source) => {
//     setImageInput((prev) => ({
//       source,
//       url: source === prev.source ? prev.url : ''
//     }));
//   };

//   const openFilePicker = () => {
//     fileInputRef.current?.click();
//   };

//   const handleUploadButtonClick = () => {
//     handleImageSourceToggle('upload');
//     openFilePicker();
//   };

//   return (
//     <div className="min-h-screen bg-[#f3f6fb]">
//       <Navbar title="IP Legal Review Status" />

//       <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
//         <div className="bg-white rounded-3xl shadow-sm border border-gray-100">
//           <div className="flex flex-col lg:flex-row">
//             <aside className="lg:w-72 border-b lg:border-b-0 lg:border-r border-gray-100 p-6 sm:p-8 bg-gray-50">
//               <div className="flex flex-col items-center text-center gap-6">
//                 <div
//                   onClick={openFilePicker}
//                   className="w-40 h-40 rounded-2xl border-2 border-dashed border-gray-200 bg-white flex flex-col items-center justify-center gap-3 text-gray-400 cursor-pointer overflow-hidden"
//                 >
//                   {imageInput.url ? (
//                     <img
//                       src={imageInput.url}
//                       alt="Profile avatar"
//                       className="h-full w-full object-cover"
//                     />
//                   ) : (
//                     <>
//                       <Camera className="w-8 h-8" />
//                       <span className="text-xs uppercase tracking-wide">Upload Picture</span>
//                     </>
//                   )}
//                 </div>
//                 <input
//                   ref={fileInputRef}
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleImageUpload}
//                 />
//                 <div className="flex flex-col items-center gap-3 text-sm">
//                   <div className="flex gap-2">
//                     <button
//                       type="button"
//                       onClick={handleUploadButtonClick}
//                       className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${imageInput.source === 'upload'
//                           ? 'border-blue-500 bg-blue-50 text-blue-600'
//                           : 'border-gray-200 text-gray-500 hover:bg-gray-100'
//                         }`}
//                     >
//                       Upload
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => handleImageSourceToggle('link')}
//                       className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${imageInput.source === 'link'
//                           ? 'border-blue-500 bg-blue-50 text-blue-600'
//                           : 'border-gray-200 text-gray-500 hover:bg-gray-100'
//                         }`}
//                     >
//                       Use Link
//                     </button>
//                   </div>
//                   {imageInput.source === 'link' && (
//                     <input
//                       type="url"
//                       placeholder="https://example.com/avatar.png"
//                       className="w-48 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
//                       value={imageInput.url || ''}
//                       onChange={handleImageUrlChange}
//                     />
//                   )}
//                   {imageInput.url && (
//                     <button
//                       type="button"
//                       onClick={() => setImageInput({ source: 'upload', url: '' })}
//                       className="flex items-center gap-2 text-xs font-semibold text-red-500 hover:text-red-600"
//                     >
//                       <UploadCloud className="h-4 w-4" />
//                       Remove Image
//                     </button>
//                   )}
//                 </div>
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-800">{formData.name || 'Profile Name'}</h2>
//                   <p className="text-sm text-gray-500 mt-1">IP Strategist</p>
//                 </div>
//               </div>
//             </aside>

//             <section className="flex-1 p-6 sm:p-10">
//               <div className="border-b border-gray-100 pb-6 mb-6">
//                 <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Profile Information</h1>
//                 <p className="text-sm text-gray-500 mt-2">Update Your Information</p>
//               </div>

//               {showSuccess && (
//                 <div className="mb-8 rounded-lg border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-700">
//                   Profile details saved successfully.
//                 </div>
//               )}

//               <form onSubmit={handleSave} className="space-y-10">
//                 <div className="space-y-6">
//                   <div className="flex items-center gap-2 text-blue-600 font-semibold">
//                     <UserRound className="w-5 h-5" />
//                     <h2 className="text-lg text-gray-800">Basic Information</h2>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Name</label>
//                       <input
//                         type="text"
//                         placeholder="Name"
//                         name="name"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.name || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Email ID</label>
//                       <input
//                         type="email"
//                         placeholder="xxx@gmail.com"
//                         name="email"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.email || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Phone No.</label>
//                       <input
//                         type="tel"
//                         placeholder="0987654321"
//                         name="phone"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.phone || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex items-center gap-2 text-blue-600 font-semibold">
//                     <MapPinHouse className="w-5 h-5" />
//                     <h2 className="text-lg text-gray-800">Address Information</h2>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex flex-col gap-2 md:col-span-2">
//                       <label className="text-sm font-medium text-gray-600">Address Line 1</label>
//                       <input
//                         type="text"
//                         placeholder="Address Line 1"
//                         name="addressLine1"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.addressLine1 || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Address Line 2</label>
//                       <input
//                         type="text"
//                         placeholder="Address Line 2"
//                         name="addressLine2"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.addressLine2 || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Area</label>
//                       <input
//                         type="text"
//                         placeholder="Area"
//                         name="area"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.area || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Pincode</label>
//                       <input
//                         type="text"
//                         placeholder="Pincode"
//                         name="pincode"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.pincode || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex items-center gap-2 text-blue-600 font-semibold">
//                     <Sparkles className="w-5 h-5" />
//                     <h2 className="text-lg text-gray-800">Professional Information</h2>
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-medium text-gray-600">Bio</label>
//                     <textarea
//                       rows="3"
//                       placeholder="Write about yourself"
//                       name="bio"
//                       className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                       value={formData.bio || ''}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex items-center gap-2 text-blue-600 font-semibold">
//                     <Sparkles className="w-5 h-5" />
//                     <h2 className="text-lg text-gray-800">Focus Areas</h2>
//                   </div>
//                   <div className="flex flex-wrap gap-3">
//                     {formData.focusAreas?.map((label, index) => (
//                       <button
//                         key={`${label}-${index}`}
//                         type="button"
//                         onClick={() => handleFocusAreaRemove(index)}
//                         className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600 hover:bg-blue-100"
//                       >
//                         {label}
//                         <span className="text-xs">×</span>
//                       </button>
//                     ))}
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <input
//                       type="text"
//                       placeholder="Add Focus Areas (Robotic, AI/ML, Drone)"
//                       className="w-full rounded-lg border border-dashed border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
//                       value={focusAreaInput}
//                       onChange={(event) => setFocusAreaInput(event.target.value)}
//                       onKeyDown={handleFocusAreaKeyDown}
//                     />
//                     <button
//                       type="button"
//                       onClick={handleFocusAreaAdd}
//                       className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
//                     >
//                       Add
//                     </button>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex items-center gap-2 text-blue-600 font-semibold">
//                     <Link2 className="w-5 h-5" />
//                     <h2 className="text-lg text-gray-800">Professional Links</h2>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">Portfolio Link</label>
//                       <input
//                         type="url"
//                         placeholder="https://sri.dev"
//                         name="portfolioLink"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.portfolioLink || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm font-medium text-gray-600">LinkedIn Link</label>
//                       <input
//                         type="url"
//                         placeholder="https://linkedin.com"
//                         name="linkedinLink"
//                         className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
//                         value={formData.linkedinLink || ''}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center gap-4 mt-12">
//                   <button
//                     type="button"
//                     onClick={() => navigate(-1)}
//                     className="px-8 py-3 rounded-lg border border-blue-200 text-blue-600 font-semibold hover:bg-blue-50 transition"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-10 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </form>
//             </section>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default ProfileInformation;


//new one .02
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, MapPinHouse, Sparkles, UserRound, Link2, UploadCloud } from 'lucide-react';
import Navbar from './Navbar.jsx';
import { useUser } from '../context/UserContext.jsx';
import { toast } from "react-toastify";

function ProfileInformation() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const [formData, setFormData] = useState({});
  console.log(formData, "formData---");

  const [focusAreaInput, setFocusAreaInput] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [imageInput, setImageInput] = useState({});
  const [draftLoaded, setDraftLoaded] = useState(false);
  const fileInputRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Load saved user data from localStorage to context on mount
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        dispatch({ type: 'SET_USER_DATA', payload: parsed });
      } catch (e) {
        console.error('Failed to load user data from localStorage:', e);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (draftLoaded) return;

    const draftStr = localStorage.getItem('userDataDraft');
    let initialData = null;

    if (draftStr) {
      try {
        initialData = JSON.parse(draftStr);
      } catch (e) {
        console.error('Failed to parse draft:', e);
      }
    }

    if (initialData) {
      setFormData({
        ...initialData,
        focusAreas: initialData.focusAreas || []
      });
      setImageInput({
        source: initialData.profileImageSource || 'upload',
        url: initialData.profileImage || ''
      });
    } else {
      setFormData({
        ...state.userData,
        focusAreas: state.userData.focusAreas || []
      });
      setImageInput({
        source: state.userData.profileImageSource || 'upload',
        url: state.userData.profileImage || ''
      });
    }

    setDraftLoaded(true);
  }, [state.userData, draftLoaded]);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Only auto-save if we have actual data
    const hasFormData = Object.keys(formData).length > 0 || imageInput.url;

    if (hasFormData) {
      timeoutRef.current = setTimeout(() => {
        const draft = {
          ...formData,
          profileImage: imageInput.url,
          profileImageSource: imageInput.source,
          focusAreas: formData.focusAreas || []
        };
        localStorage.setItem('userDataDraft', JSON.stringify(draft));

        // ✅ Show toast notification only if there are changes
        toast.success("Draft saved successfully!", {
          position: "bottom-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      }, 1500);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [formData, imageInput]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocusAreaAdd = () => {
    const value = focusAreaInput.trim();
    if (!value || formData.focusAreas?.includes(value)) {
      setFocusAreaInput('');
      return;
    }
    setFormData((prev) => ({
      ...prev,
      focusAreas: [...(prev.focusAreas || []), value]
    }));
    setFocusAreaInput('');
  };

  const handleFocusAreaKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleFocusAreaAdd();
    }
  };

  const handleFocusAreaRemove = (indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      focusAreas: prev.focusAreas.filter((_, index) => index !== indexToRemove)
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    const payload = {
      ...formData,
      profileImage: imageInput.url,
      profileImageSource: imageInput.source
    };
    dispatch({
      type: 'SET_USER_DATA',
      payload
    });
    localStorage.setItem('userData', JSON.stringify(payload));
    localStorage.removeItem('userDataDraft');
    setShowSuccess(true);

    // ✅ Show success toast for final save
    toast.success("Profile saved successfully!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });

    // ✅ Clear ALL form data after successful save
    setFormData({
      name: "",
      email: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      area: "",
      pincode: "",
      bio: "",
      focusAreas: [],
      portfolioLink: "",
      linkedinLink: ""
    });

    setImageInput({
      source: 'upload',
      url: ""
    });

    setFocusAreaInput('');

    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      setImageInput({ source: 'upload', url: result });
    };
    reader.readAsDataURL(file);
  };

  const handleImageUrlChange = (event) => {
    const value = event.target.value;
    setImageInput({ source: 'link', url: value });
  };

  const handleImageSourceToggle = (source) => {
    setImageInput((prev) => ({
      source,
      url: source === prev.source ? prev.url : ''
    }));
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleUploadButtonClick = () => {
    handleImageSourceToggle('upload');
    openFilePicker();
  };

  return (
    <div className="min-h-screen bg-[#f3f6fb]">
      <Navbar title="IP Legal Review Status" />

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            <aside className="lg:w-72 border-b lg:border-b-0 lg:border-r border-gray-100 p-6 sm:p-8 bg-gray-50">
              <div className="flex flex-col items-center text-center gap-6">
                <div
                  onClick={openFilePicker}
                  className="w-40 h-40 rounded-2xl border-2 border-dashed border-gray-200 bg-white flex flex-col items-center justify-center gap-3 text-gray-400 cursor-pointer overflow-hidden"
                >
                  {imageInput.url ? (
                    <img
                      src={imageInput.url}
                      alt="Profile avatar"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <>
                      <Camera className="w-8 h-8" />
                      <span className="text-xs uppercase tracking-wide">Upload Picture</span>
                    </>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <div className="flex flex-col items-center gap-3 text-sm">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleUploadButtonClick}
                      className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${imageInput.source === 'upload'
                        ? 'border-blue-500 bg-blue-50 text-blue-600'
                        : 'border-gray-200 text-gray-500 hover:bg-gray-100'
                        }`}
                    >
                      Upload
                    </button>
                    <button
                      type="button"
                      onClick={() => handleImageSourceToggle('link')}
                      className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${imageInput.source === 'link'
                        ? 'border-blue-500 bg-blue-50 text-blue-600'
                        : 'border-gray-200 text-gray-500 hover:bg-gray-100'
                        }`}
                    >
                      Use Link
                    </button>
                  </div>
                  {imageInput.source === 'link' && (
                    <input
                      type="url"
                      placeholder="https://example.com/avatar.png"
                      className="w-48 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                      value={imageInput.url || ''}
                      onChange={handleImageUrlChange}
                    />
                  )}
                  {imageInput.url && (
                    <button
                      type="button"
                      onClick={() => setImageInput({ source: 'upload', url: '' })}
                      className="flex items-center gap-2 text-xs font-semibold text-red-500 hover:text-red-600"
                    >
                      <UploadCloud className="h-4 w-4" />
                      Remove Image
                    </button>
                  )}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{formData.name || 'Profile Name'}</h2>
                  <p className="text-sm text-gray-500 mt-1">IP Strategist</p>
                </div>
              </div>
            </aside>

            <section className="flex-1 p-6 sm:p-10">
              <div className="border-b border-gray-100 pb-6 mb-6">
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Profile Information</h1>
                <p className="text-sm text-gray-500 mt-2">Update Your Information</p>
              </div>

              {showSuccess && (
                <div className="mb-8 rounded-lg border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-700">
                  Profile details saved successfully.
                </div>
              )}

              <form onSubmit={handleSave} className="space-y-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <UserRound className="w-5 h-5" />
                    <h2 className="text-lg text-gray-800">Basic Information</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-600">Name</label>
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                        value={formData.name || ''}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-600">Email ID</label>
                      <input
                        type="email"
                        placeholder="xxx@gmail.com"
                        name="email"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                        value={formData.email || ''}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-600">Phone No.</label>
                      <input
                        type="tel"
                        placeholder="0987654321"
                        name="phone"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                        value={formData.phone || ''}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <MapPinHouse className="w-5 h-5" />
                    <h2 className="text-lg text-gray-800">Address Information</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label className="text-sm font-medium text-gray-600">Address Line 1</label>
                      <input
                        type="text"
                        placeholder="Address Line 1"
                        name="addressLine1"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                        value={formData.addressLine1 || ''}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-600">Address Line 2</label>
                      <input
                        type="text"
                        placeholder="Address Line 2"
                        name="addressLine2"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                        value={formData.addressLine2 || ''}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-600">Area</label>
                      <input
                        type="text"
                        placeholder="Area"
                        name="area"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                        value={formData.area || ''}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-600">Pincode</label>
                      <input
                        type="text"
                        placeholder="Pincode"
                        name="pincode"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                        value={formData.pincode || ''}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <Sparkles className="w-5 h-5" />
                    <h2 className="text-lg text-gray-800">Professional Information</h2>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-600">Bio</label>
                    <textarea
                      rows="3"
                      placeholder="Write about yourself"
                      name="bio"
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                      value={formData.bio || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <Sparkles className="w-5 h-5" />
                    <h2 className="text-lg text-gray-800">Focus Areas</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {formData.focusAreas?.map((label, index) => (
                      <button
                        key={`${label}-${index}`}
                        type="button"
                        onClick={() => handleFocusAreaRemove(index)}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600 hover:bg-blue-100"
                      >
                        {label}
                        <span className="text-xs">×</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Add Focus Areas (Robotic, AI/ML, Drone)"
                      className="w-full rounded-lg border border-dashed border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                      value={focusAreaInput}
                      onChange={(event) => setFocusAreaInput(event.target.value)}
                      onKeyDown={handleFocusAreaKeyDown}
                    />
                    <button
                      type="button"
                      onClick={handleFocusAreaAdd}
                      className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <Link2 className="w-5 h-5" />
                    <h2 className="text-lg text-gray-800">Professional Links</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-600">Portfolio Link</label>
                      <input
                        type="url"
                        placeholder="https://sri.dev"
                        name="portfolioLink"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                        value={formData.portfolioLink || ''}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-600">LinkedIn Link</label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com"
                        name="linkedinLink"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                        value={formData.linkedinLink || ''}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 mt-12">
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="px-8 py-3 rounded-lg border border-blue-200 text-blue-600 font-semibold hover:bg-blue-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-10 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
                  >
                    Save
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfileInformation;
