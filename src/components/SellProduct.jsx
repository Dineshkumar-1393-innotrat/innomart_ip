import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialFormState = {
  productName: '',
  category: '',
  description: '',
  designDocument: null,
  productMedia: null,
  price: '',
  sourceCodeOptions: {
    downloadSourceCode: false,
    downloadBinary: false,
    trackHours: false,
  },
  sellingRights: {
    sendToInvestor: false,
    schematic: false,
    transferIP: false,
  },
};

function SellProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files?.[0] || null }));
  };

  const handleCheckboxChange = (group, name) => {
    setFormData((prev) => ({
      ...prev,
      [group]: {
        ...prev[group],
        [name]: !prev[group][name],
      },
    }));
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with backend submission
    navigate('/schedule-consultation');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
          Sell Your Product In Innomart And Get The Value Of It
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Product Name</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                placeholder="Enter product name"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                placeholder="Enter category"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              placeholder="Provide a brief description of the product"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Upload Design Documents</label>
              <input
                type="file"
                name="designDocument"
                onChange={handleFileChange}
                className="border border-dashed border-gray-300 rounded-lg px-4 py-3 bg-gray-50"
                accept=".pdf,.doc,.docx,.zip"
              />
              <span className="text-xs text-gray-500 mt-1">Supported formats: PDF, DOC, DOCX, ZIP</span>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Upload Pictures or Media</label>
              <input
                type="file"
                name="productMedia"
                onChange={handleFileChange}
                className="border border-dashed border-gray-300 rounded-lg px-4 py-3 bg-gray-50"
                accept="image/*,video/*"
              />
              <span className="text-xs text-gray-500 mt-1">Supported formats: Images, MP4, MOV</span>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">Set Price (INR)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Proposed price"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
              <h2 className="text-sm font-semibold text-gray-700 mb-3">Select Source Code Options</h2>
              <div className="space-y-2">
                <label className="flex items-center gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={formData.sourceCodeOptions.downloadSourceCode}
                    onChange={() => handleCheckboxChange('sourceCodeOptions', 'downloadSourceCode')}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                  />
                  Download Source Code
                </label>
                <label className="flex items-center gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={formData.sourceCodeOptions.downloadBinary}
                    onChange={() => handleCheckboxChange('sourceCodeOptions', 'downloadBinary')}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                  />
                  Download Binary
                </label>
                <label className="flex items-center gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={formData.sourceCodeOptions.trackHours}
                    onChange={() => handleCheckboxChange('sourceCodeOptions', 'trackHours')}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                  />
                  Track work hours for delivery
                </label>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
              <h2 className="text-sm font-semibold text-gray-700 mb-3">Select Selling Rights</h2>
              <div className="space-y-2">
                <label className="flex items-center gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={formData.sellingRights.sendToInvestor}
                    onChange={() => handleCheckboxChange('sellingRights', 'sendToInvestor')}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                  />
                  Send to investor list directly
                </label>
                <label className="flex items-center gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={formData.sellingRights.schematic}
                    onChange={() => handleCheckboxChange('sellingRights', 'schematic')}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                  />
                  Include schematics
                </label>
                <label className="flex items-center gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={formData.sellingRights.transferIP}
                    onChange={() => handleCheckboxChange('sellingRights', 'transferIP')}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                  />
                  Transfer IP ownership directly
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="px-5 sm:px-8 py-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 sm:px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SellProduct;
