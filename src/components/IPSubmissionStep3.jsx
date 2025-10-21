import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useIP } from '../context/IPContext.jsx';
import { ArrowLeft, ArrowRight, Briefcase, CheckCircle } from 'lucide-react';

function IPSubmissionStep3() {
  const navigate = useNavigate();
  const { state, dispatch } = useIP();
  const [formData, setFormData] = useState(state.step3Data);
  const formRef = useRef();

  useEffect(() => {
    gsap.fromTo(formRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8 });
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleIndustriesChange = (e) => {
    setFormData({ ...formData, targetIndustries: e.target.value.split(',').map(v => v.trim()) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_STEP3_DATA', payload: formData });
    gsap.to(formRef.current, {
      opacity: 0,
      x: -30,
      duration: 0.5,
      onComplete: () => navigate('/ai-evaluation')
    });
  };

  const developmentStages = ['Prototype', 'Product-Ready'];

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
              <h2 className="text-3xl font-bold text-gray-800">Commercialisation Info</h2>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Step 3 of 3</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-full"></div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <Briefcase className="w-5 h-5 mr-2" /> Target Industries
              </label>
              <input
                type="text"
                name="targetIndustries"
                value={formData.targetIndustries.join(', ')}
                onChange={handleIndustriesChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Healthcare, Manufacturing"
                required
              />
            </div>
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <CheckCircle className="w-5 h-5 mr-2" /> Development Stage
              </label>
              <select
                name="developmentStage"
                value={formData.developmentStage}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Stage</option>
                {developmentStages.map(stage => (
                  <option key={stage} value={stage}>{stage}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold flex items-center justify-center"
            >
              Submit IP <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IPSubmissionStep3;
