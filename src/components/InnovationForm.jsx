

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Upload } from "lucide-react";

// const InnovationForm = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can add any form submission logic here if needed before redirection
//     navigate("/expert-consultation");
//   };

//   return (
//     <form
//       className="w-full space-y-5 flex flex-col"
//       onSubmit={handleSubmit}
//     >
//       {/* Innovation Title */}
//       <div>
//         <label className="block text-gray-800 font-semibold mb-2 text-sm ">
//           Innovation Title <span className="text-red-500">*</span>
//         </label>
//         <input
//           type="text"
//           placeholder="Enter the name of your innovation"
//           className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
//           required
//         />
//       </div>
      
//       {/* Innovation Description */}
//       <div>
//         <label className="block text-gray-800 font-semibold mb-2 text-sm">
//           Innovation Description <span className="text-red-500">*</span>
//         </label>
//         <textarea
//           placeholder="Describe your innovation in detail..."
//           rows={4}
//           className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none hover:border-gray-400"
//           required
//         />
//       </div>
      
//       {/* Upload Documents */}
//       <div>
//         <label className="block text-gray-800 font-semibold mb-2 text-sm">
//           Upload Supportive Documents <span className="text-red-500">*</span>
//         </label>
//         <div className="relative">
//           <input
//             type="file"
//             accept=".jpg,.jpeg,.png,.pdf"
//             className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer hover:border-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//             required
//           />
//         </div>
//         <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
//           <Upload className="w-3 h-3" />
//           Supported formats: JPG, PNG, PDF (Max 5MB)
//         </p>
//       </div>
      
//       {/* Schedule Date & Time */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-gray-800 font-semibold mb-2 text-sm">
//             Schedule Date <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="date"
//             className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-800 font-semibold mb-2 text-sm">
//             Schedule Time <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="time"
//             className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
//             required
//           />
//         </div>
//       </div>
      
//       {/* Submit Button */}
//       <button
//         type="submit"
//         className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg text-base mt-2"
//       >
//         Talk To Our Experts
//       </button>
//     </form>
//   );
// };

// export default InnovationForm;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, FileText, X } from "lucide-react";

const InnovationForm = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // build FormData if you need to actually upload
    // const formData = new FormData();
    // files.forEach((f) => formData.append("supportDocs", f));
    navigate("/expert-consultation");
  };

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);

    // optional: filter by size 5MB
    const valid = selected.filter((f) => f.size <= 5 * 1024 * 1024);

    // merge with already selected files, avoid duplicates by name+size
    setFiles((prev) => {
      const map = new Map(prev.map((f) => [f.name + f.size, f]));
      valid.forEach((f) => map.set(f.name + f.size, f));
      return Array.from(map.values());
    });

    // allow selecting same file again later
    e.target.value = "";
  };

  const handleRemoveFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
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
          Supportive Documents <span className="text-red-500">*</span>
        </label>

        {/* Native input looking like screenshot */}
        <div className="w-full">
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf,.xlsx,.xls,.doc,.docx"
            multiple
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700
                       border border-gray-300 rounded-lg
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-l-md file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700
                       hover:file:bg-blue-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
          <Upload className="w-3 h-3" />
          Supported: JPG, PNG, PDF, DOC, XLS (Max 5MB each)
        </p>

        {/* Selected files list (like screenshot) */}
        {files.length > 0 && (
          <div className="mt-4 border border-gray-200 rounded-lg bg-white">
            <div className="border-b border-gray-200 px-4 py-2 text-xs text-gray-500 text-center">
              Selected files:
            </div>
            <ul className="divide-y divide-gray-100">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between px-4 py-2 text-sm"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <FileText className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="truncate">{file.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(index)}
                    className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700"
                  >
                    <X className="w-3 h-3" />
                    <span>Remove</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
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
        disabled={files.length === 0}
      >
        Talk To Our Experts
      </button>
    </form>
  );
};

export default InnovationForm;

