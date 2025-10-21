import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  ipTitle: '',
  description: '',
  patentNumber: '',
  category: '',
  helpText: '',
};

function ContactIPExperts() {
  const navigate = useNavigate();
  const { ipId } = useParams();
  const [formData, setFormData] = useState({
    ...initialState,
    ipTitle: ipId ? `IP #${ipId}` : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook up backend submission logic
    navigate('/expert-consultation');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-10">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 text-sm sm:text-base hover:underline mb-6"
        >
          &larr; Back
        </button>

        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Contact IP Experts
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Let’s schedule a consultation to discuss your intellectual property needs and explore how we can help protect and monetize your innovation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">IP Title</label>
            <input
              type="text"
              name="ipTitle"
              value={formData.ipTitle}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="IP Title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">IP Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Briefly describe your IP"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Patent Number</label>
              <input
                type="text"
                name="patentNumber"
                value={formData.patentNumber}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="12345"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select a category</option>
                <option value="software">Software</option>
                <option value="hardware">Hardware</option>
                <option value="biotech">Biotech</option>
                <option value="ai">Artificial Intelligence</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
            <textarea
              name="helpText"
              value={formData.helpText}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Share details about the assistance you need"
              required
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule My Consultation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactIPExperts;
