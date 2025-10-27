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


// responsive innovation form component
import React from "react";

const InnovationForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-2 sm:px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex-shrink-0 flex items-center justify-center bg-gray-50">
          <img
            src="/image.jpg" // Make sure this matches your public file!
            alt="Consulting"
            className="object-cover w-full h-56 md:h-full"
            style={{ minHeight: "150px" }}
          />
        </div>

        {/* Form Section */}
        <form className="w-full md:w-1/2 p-5 sm:p-7 space-y-4 flex flex-col justify-center">
          <div>
            <label className="block text-gray-700 font-bold mb-1 text-sm">
              Innovation Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name Of Your Innovations"
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-1 text-sm">
              Innovation Description <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Describe Your Innovations"
              rows={3}
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-1 text-sm">
              Upload Supportive Documents <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept=".jpg,.pdf"
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
              required
            />
            <p className="text-xs text-gray-400 mt-1">
              Select File – Jpg, Pdf Not Exceeding 5MB
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1 text-sm">
                Schedule Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1 text-sm">
                Schedule Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-800 text-white font-bold py-2 px-4 rounded hover:bg-blue-900 w-full text-sm sm:text-base"
          >
            Talk To Our Experts
          </button>
        </form>
      </div>
    </div>
  );
};

export default InnovationForm;
