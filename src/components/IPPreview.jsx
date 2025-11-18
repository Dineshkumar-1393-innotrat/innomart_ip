// src/pages/IPPreview.jsx
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useIP } from '../context/IPContext.jsx';
import {
  ArrowLeft,
  Home,
  FileText,
  Tag,
  Grid3X3,
  Hash,
  Upload,
  Briefcase,
  CheckCircle
} from 'lucide-react';
import homepageImage from '../assets/homepage-image.png';

function IPPreview() {
  const navigate = useNavigate();
  const { state } = useIP();
  const containerRef = useRef();

  const { step1Data, step2Data, step3Data } = state;

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    );
  }, []);

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/home');

  const joinArray = (val) =>
    Array.isArray(val) ? val.join(', ') : val || '';

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
          opacity: 0.15
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80" />

      <div
        ref={containerRef}
        className="relative z-10 max-w-5xl mx-auto py-8 sm:py-12"
      >
        {/* top nav */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <button
            onClick={goBack}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/60 rounded-lg transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
          <button
            onClick={goHome}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/60 rounded-lg transition-all"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </button>
        </div>

        <h1 className="text-center text-lg sm:text-xl font-semibold text-blue-700 mb-6">
          Preview
        </h1>

        {/* Basic Information */}
        <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
            Basic Information
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Provide the fundamental details about your intellectual property assets
          </p>

          <div className="space-y-4">
            <div>
              <label className="flex items-center text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                <FileText className="w-4 h-4 mr-2" />
                Title Of Your IP
              </label>
              <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base">
                {step1Data?.title || '-'}
              </div>
            </div>

            <div>
              <label className="flex items-center text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                <FileText className="w-4 h-4 mr-2" />
                Abstract
              </label>
              <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base min-h-[80px]">
                {step1Data?.abstract || '-'}
              </div>
            </div>

            <div>
              <label className="flex items-center text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                <Tag className="w-4 h-4 mr-2" />
                Tag
              </label>
              <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base">
                {joinArray(step1Data?.tags) || '-'}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  <Hash className="w-4 h-4 mr-2" />
                  Patent Number
                </label>
                <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base">
                  {step1Data?.patentNumber || '-'}
                </div>
              </div>
              <div>
                <label className="flex items-center text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  Category
                </label>
                <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base">
                  {joinArray(step1Data?.categories || step1Data?.category) || '-'}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
            Technical Details
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Provide the technical details about your intellectual property assets
          </p>

          <div className="space-y-4">
            <div>
              <label className="flex items-center text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                <FileText className="w-4 h-4 mr-2" />
                Technical Specifications Of Your IP
              </label>
              <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base min-h-[60px]">
                {step2Data?.technicalSpecs || '-'}
              </div>
            </div>

            <div>
              <label className="flex items-center text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                <FileText className="w-4 h-4 mr-2" />
                Detailed Description Of IP
              </label>
              <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base min-h-[80px]">
                {step2Data?.detailedDescription || '-'}
              </div>
            </div>

            <div>
              <label className="flex items-center text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                <Upload className="w-4 h-4 mr-2" />
                Upload Supportive Documents
              </label>
              <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-xs sm:text-sm text-gray-700">
                {step2Data?.documents?.length
                  ? step2Data.documents.map((f, idx) => (
                      <span key={idx} className="block">
                        • {f.name || `Document ${idx + 1}`}
                      </span>
                    ))
                  : 'No files uploaded'}
              </div>
              <p className="mt-1 text-[11px] text-gray-400">
                Note – Pdf, Jpg, not more than 5MB. Multiple files supported.
              </p>
            </div>
          </div>
        </section>

        {/* Commercialization Info */}
        <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
            Commercialization Info
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Provide the commercialization details about your intellectual property assets
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                Target Industries For Your IP
              </label>
              <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base">
                {joinArray(step3Data?.targetIndustries) || '-'}
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                Is This IP Associated With Physical Hardware (Embedded Products)
              </label>
              <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base">
                {step3Data?.physicalHardware || '-'}
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                Stage Of Development
              </label>
              <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base">
                {step3Data?.developmentStage || '-'}
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                Innovators Video About IP (Optional)
              </label>
              <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base break-all">
                {step3Data?.innovationVideoUrl || 'Not provided'}
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                Is This IP Associated With Software Status
              </label>
              <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base">
                {step3Data?.hasSoftwareStatus || step3Data?.softwareStatus || '-'}
              </div>
            </div>

            {/* you can add more read‑only fields here as needed */}
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={goBack}
              className="px-6 py-2.5 border border-blue-700 text-blue-700 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-50"
            >
              Cancel
            </button>
            <button
              onClick={() => navigate('/sell-product')}
              className="px-6 py-2.5 bg-blue-800 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-900 shadow"
            >
              Sell My Product
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default IPPreview;
