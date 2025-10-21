import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useIP } from '../context/IPContext.jsx';
import { ArrowLeft, ArrowRight, FileText, Upload } from 'lucide-react';

function IPSubmissionStep2() {
  const navigate = useNavigate();
  const { state, dispatch } = useIP();
  const [formData, setFormData] = useState(state.step2Data);
  const formRef = useRef();

  useEffect(() => {
    gsap.fromTo(formRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8 });
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, documents: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_STEP2_DATA', payload: formData });
    gsap.to(formRef.current, {
      opacity: 0,
      x: -30,
      duration: 0.5,
      onComplete: () => navigate('/ip-submission/step3')
    });
  };

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
              <h2 className="text-3xl font-bold text-gray-800">Technical Details</h2>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Step 2 of 3</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-2/3"></div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <FileText className="w-5 h-5 mr-2" /> Technical Specifications
              </label>
              <textarea
                name="technicalSpecs"
                value={formData.technicalSpecs}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the technical features of your IP"
                required
              />
            </div>
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <FileText className="w-5 h-5 mr-2" /> Detailed Description
              </label>
              <textarea
                name="detailedDescription"
                value={formData.detailedDescription}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Provide a detailed description"
                required
              />
            </div>
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <Upload className="w-5 h-5 mr-2" /> Supportive Documents
              </label>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="w-full py-2"
              />
              {formData.documents && formData.documents.length > 0 && (
                <div className="mt-2 text-sm text-gray-600">
                  {formData.documents.map((file, i) => (
                    <span key={i}>{file.name}{i < formData.documents.length - 1 ? ', ' : ''}</span>
                  ))}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold flex items-center justify-center"
            >
              Next Step <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IPSubmissionStep2;
