// import React from "react";

// const InnovationForm = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-white">
//       <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full flex flex-col md:flex-row overflow-hidden">
//         {/* Image Section */}
//         <div className="md:w-1/2 w-full flex items-center justify-center">
//           <img
//             src="/path/to/Screenshot-2025-10-24-153235.jpg"
//             alt="Consulting"
//             className="object-cover h-full w-full"
//           />
//         </div>

//         {/* Form Section */}
//         <form className="md:w-1/2 w-full p-8 space-y-5 flex flex-col justify-center">
//           <div>
//             <label className="block text-gray-700 font-bold mb-2">
//               Innovation Title <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Name Of Your Innovations"
//               className="w-full border rounded px-3 py-2 focus:outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-bold mb-2">
//               Innovation Description <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               placeholder="Describe Your Innovations"
//               rows={3}
//               className="w-full border rounded px-3 py-2 focus:outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-bold mb-2">
//               Upload Supportive Documents <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="file"
//               accept=".jpg,.pdf"
//               className="w-full border rounded px-3 py-2 focus:outline-none"
//               required
//             />
//             <p className="text-sm text-gray-400 mt-1">Select File – Jpg, Pdf Not Exceeding 5MB</p>
//           </div>

//           <div>
//             <label className="block text-gray-700 font-bold mb-2">
//               Schedule Date <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="date"
//               className="w-full border rounded px-3 py-2 focus:outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-bold mb-2">
//               Schedule Time <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="time"
//               className="w-full border rounded px-3 py-2 focus:outline-none"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-blue-800 text-white font-bold py-3 px-6 rounded hover:bg-blue-900 w-full"
//           >
//             Talk To Our Experts
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default InnovationForm;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";

const InnovationForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add any form submission logic here if needed before redirection
    navigate("/expert-consultation");
  };

  return (
    <form
      className="w-full space-y-5 flex flex-col"
      onSubmit={handleSubmit}
    >
      {/* Innovation Title */}
      <div>
        <label className="block text-gray-800 font-semibold mb-2 text-sm ">
          Innovation Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter the name of your innovation"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
          required
        />
      </div>
      
      {/* Innovation Description */}
      <div>
        <label className="block text-gray-800 font-semibold mb-2 text-sm">
          Innovation Description <span className="text-red-500">*</span>
        </label>
        <textarea
          placeholder="Describe your innovation in detail..."
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none hover:border-gray-400"
          required
        />
      </div>
      
      {/* Upload Documents */}
      <div>
        <label className="block text-gray-800 font-semibold mb-2 text-sm">
          Upload Supportive Documents <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer hover:border-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required
          />
        </div>
        <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
          <Upload className="w-3 h-3" />
          Supported formats: JPG, PNG, PDF (Max 5MB)
        </p>
      </div>
      
      {/* Schedule Date & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-800 font-semibold mb-2 text-sm">
            Schedule Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
            required
          />
        </div>
        <div>
          <label className="block text-gray-800 font-semibold mb-2 text-sm">
            Schedule Time <span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
            required
          />
        </div>
      </div>
      
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg text-base mt-2"
      >
        Talk To Our Experts
      </button>
    </form>
  );
};

export default InnovationForm;
