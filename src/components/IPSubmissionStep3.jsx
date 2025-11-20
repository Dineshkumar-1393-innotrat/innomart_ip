// src/components/IPSubmissionStep3.jsx
// src/components/IPSubmissionStep3.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useIP } from '../context/IPContext.jsx';
import {
  ArrowLeft,
  Home,
  X,
  FileText,
  ImageIcon,
  Upload,
  CheckCircle,
  Briefcase,
} from 'lucide-react';
import homepageImage from '../assets/homepage-image.png';

function IPSubmissionStep3() {
  const navigate = useNavigate();
  const { state, dispatch } = useIP();

  // normalize to array for targetIndustries
  const normalizeArray = (value) => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    return String(value)
      .split(',')
      .map((v) => v.trim())
      .filter((v) => v.length > 0);
  };

  const [formData, setFormData] = useState({
    targetIndustries: normalizeArray(state.step3Data?.targetIndustries),
    targetIndustriesInput:
      normalizeArray(state.step3Data?.targetIndustries).join(', '),

    physicalHardware: state.step3Data?.physicalHardware || '',
    developmentStage: state.step3Data?.developmentStage || '',
    innovationVideoUrl: state.step3Data?.innovationVideoUrl || '',
    hasSoftwareStatus: state.step3Data?.hasSoftwareStatus || '',
    softwareStatus: state.step3Data?.softwareStatus || '',
    productName: state.step3Data?.productName || '',
    softwareCategory: state.step3Data?.softwareCategory || '',
    softwareDescription: state.step3Data?.softwareDescription || '',
    setPrice: state.step3Data?.setPrice || '',
    otherInfo: state.step3Data?.otherInfo || '',
  });

  const [uploadedDesignDocs, setUploadedDesignDocs] = useState(
    state.step3Data?.uploadDesignDocs || []
  );
  const [uploadedProductPictures, setUploadedProductPictures] = useState(
    state.step3Data?.uploadProductPictures || []
  );
  const [showSuccess, setShowSuccess] = useState(false);

  const formRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8 }
    );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'hasSoftwareStatus' && value === 'No'
        ? { softwareStatus: '' }
        : {}),
    }));
  };

  /* ---------- TARGET INDUSTRIES MULTI ---------- */

  const suggestedIndustries = [
    'Healthcare',
    'Manufacturing',
    'Energy',
    'Agriculture',
    'Education',
    'Fintech',
    'IT Services',
    'Retail',
    'Transportation',
    'Telecom',
  ];

  const syncIndustriesInputFromArray = (arr) =>
    arr && arr.length ? arr.join(', ') : '';

  const handleIndustriesInputChange = (e) => {
    const value = e.target.value;
    const pieces = value
      .split(',')
      .map((v) => v.trim())
      .filter((v) => v.length > 0);

    setFormData((prev) => ({
      ...prev,
      targetIndustriesInput: value,
      targetIndustries: pieces,
    }));
  };

  const [showIndustrySuggestions, setShowIndustrySuggestions] =
    useState(false);

  const handleIndustrySuggestionClick = (industry) => {
    setFormData((prev) => {
      const exists = (prev.targetIndustries || []).includes(industry);
      let updated;
      if (exists) {
        updated = prev.targetIndustries.filter((i) => i !== industry);
      } else {
        updated = Array.from(
          new Set([...(prev.targetIndustries || []), industry])
        );
      }
      return {
        ...prev,
        targetIndustries: updated,
        targetIndustriesInput: syncIndustriesInputFromArray(updated),
      };
    });
  };

  /* ---------- UPLOAD HANDLERS ---------- */

  const handleDesignDocsChange = (e) => {
    const files = Array.from(e.target.files);
    setUploadedDesignDocs((prev) => [...prev, ...files]);
    e.target.value = '';
  };

  const handleProductPicturesChange = (e) => {
    const files = Array.from(e.target.files);
    setUploadedProductPictures((prev) => [...prev, ...files]);
    e.target.value = '';
  };

  const removeDesignDoc = (index) => {
    setUploadedDesignDocs((prev) => prev.filter((_, i) => i !== index));
  };

  const removeProductPicture = (index) => {
    setUploadedProductPictures((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  /* ---------- SUBMIT / NAV ---------- */

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredIndustries = formData.targetIndustries.filter(
      (industry) => industry.trim() !== ''
    );

    if (filteredIndustries.length === 0) {
      alert('Please select at least one target industry.');
      return;
    }

    if (!formData.physicalHardware) {
      alert('Please select Physical Hardware association.');
      return;
    }

    if (!formData.hasSoftwareStatus) {
      alert('Please select Software Status Yes/No.');
      return;
    }

    const completeData = {
      ...formData,
      targetIndustries: filteredIndustries,
      uploadDesignDocs: uploadedDesignDocs,
      uploadProductPictures: uploadedProductPictures,
    };

    // save step‑3 data
    dispatch({ type: 'SET_STEP3_DATA', payload: completeData });

    setShowSuccess(true);

    // animate out this step, then go to AI Evaluation, then Analysis Complete
    setTimeout(() => {
      gsap.to(formRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.5,
        onComplete: () => {
          // 1) navigate to AI evaluation
          navigate('/ai-evaluation');

          // 2) after AI evaluation completes (simulated delay), go to analysis-complete
          setTimeout(() => {
            navigate('/analysis-complete');
          }, 2000); // adjust this to match real evaluation time or move into AIEvaluation
        },
      });
    }, 1400);
  };

  const handleBack = () => navigate(-1);
  const handleHome = () => navigate('/home');

  const developmentStages = [
    'Prototype',
    'Pre-Production',
    'General Available',
  ];
  const softwareStatusOptions = [
    'Applied',
    'Awaiting For Defence',
    'Defence Completed',
    'Awarded',
  ];

  const showHardwareFields = formData.physicalHardware === 'Yes';
  const showSoftwareStatusDropdown = formData.hasSoftwareStatus === 'Yes';
  const showSoftwareFields =
    formData.softwareStatus !== '' && showSoftwareStatusDropdown;

  return (
    <div className="min-h-screen relative overflow-hidden p-4">
      {/* Background Image */}
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
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80" />

      {/* Content */}
      <div
        ref={formRef}
        className="relative z-10 max-w-3xl mx-auto py-8 sm:py-12"
      >
        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/50 rounded-lg transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>

          <button
            onClick={handleHome}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/50 rounded-lg transition-all duration-200"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Commercialization Info
              </h2>
              <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                Step 3 of 3
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-full" />
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              Provide the commercialization details about your intellectual
              property assets
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Target Industries – multi-select */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Target Industries For Your IP{' '}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    value={formData.targetIndustriesInput}
                    onChange={handleIndustriesInputChange}
                    onFocus={() => setShowIndustrySuggestions(true)}
                    onBlur={() =>
                      setTimeout(() => setShowIndustrySuggestions(false), 150)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    placeholder="e.g., Healthcare, Manufacturing, Energy"
                    required
                  />
                </div>

                {showIndustrySuggestions && (
                  <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                    <p className="text-xs text-gray-500 px-1 pb-1">
                      Click to add or remove industries
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedIndustries.map((ind) => {
                        const selected =
                          formData.targetIndustries &&
                          formData.targetIndustries.includes(ind);

                        return (
                          <button
                            key={ind}
                            type="button"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => handleIndustrySuggestionClick(ind)}
                            className={`px-3 py-1 rounded-full text-xs sm:text-sm border transition-colors ${
                              selected
                                ? 'bg-purple-600 text-white border-purple-600'
                                : 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100'
                            }`}
                          >
                            {ind}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Physical Hardware */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Is This IP Associated With Physical Hardware (Embedded Products){' '}
                <span className="text-red-500">*</span>
              </label>
              <select
                name="physicalHardware"
                value={formData.physicalHardware}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                required
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Hardware fields */}
            {showHardwareFields && (
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 space-y-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Hardware Information
                </h3>

                {/* Stage of Development */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Stage Of Development <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="developmentStage"
                    value={formData.developmentStage}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white"
                    required
                  >
                    <option value="">Select</option>
                    {developmentStages.map((stage) => (
                      <option key={stage} value={stage}>
                        {stage}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Innovation Video URL */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Innovation Video About IP (Optional)
                  </label>
                  <input
                    type="url"
                    name="innovationVideoUrl"
                    value={formData.innovationVideoUrl}
                    onChange={handleInputChange}
                    placeholder="https://youtube.com/..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white"
                  />
                </div>
              </div>
            )}

            {/* Software Status Yes/No */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Is This IP Associated With Software Status{' '}
                <span className="text-red-500">*</span>
              </label>
              <select
                name="hasSoftwareStatus"
                value={formData.hasSoftwareStatus}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                required
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Software status and extra fields */}
            {showSoftwareStatusDropdown && (
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    IP Software Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="softwareStatus"
                    value={formData.softwareStatus}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white"
                    required
                  >
                    <option value="">Select</option>
                    {softwareStatusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>

                {showSoftwareFields && (
                  <>
                    <h3 className="text-lg font-bold text-gray-800 mb-4 pt-4 border-t border-purple-300">
                      Software Information
                    </h3>

                    {/* Product Name, Category, Description */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Product Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="productName"
                          value={formData.productName}
                          onChange={handleInputChange}
                          placeholder="Product Name"
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Category <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="softwareCategory"
                          value={formData.softwareCategory}
                          onChange={handleInputChange}
                          placeholder="Category"
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Description
                        </label>
                        <input
                          type="text"
                          name="softwareDescription"
                          value={formData.softwareDescription}
                          onChange={handleInputChange}
                          placeholder="Description"
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white text-sm"
                        />
                      </div>
                    </div>

                    {/* Upload Design Docs & Product Pictures */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Design Docs */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Upload Design Documents{' '}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors bg-white">
                          <Upload className="w-8 h-8 mx-auto mb-1 text-gray-400" />
                          <p className="text-xs text-gray-600 mb-1">
                            Click or drag files
                          </p>
                          <p className="text-xs text-gray-500">
                            PDF, DOC, JPG, PNG
                          </p>
                          <input
                            type="file"
                            multiple
                            accept=".pdf,.jpg,.png,.doc,.docx"
                            onChange={handleDesignDocsChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                        </div>
                        {uploadedDesignDocs.length > 0 && (
                          <div className="mt-2 space-y-1">
                            <p className="text-xs font-semibold text-gray-700">
                              Files ({uploadedDesignDocs.length}):
                            </p>
                            {uploadedDesignDocs.map((file, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between p-2 bg-white rounded border border-gray-200"
                              >
                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                  <FileText className="w-3 h-3 text-blue-600 flex-shrink-0" />
                                  <span className="text-xs text-gray-700 truncate">
                                    {file.name}
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeDesignDoc(index)}
                                  className="ml-2 text-red-600 hover:text-red-800"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Product Pictures */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Upload Product Pictures{' '}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors bg-white">
                          <Upload className="w-8 h-8 mx-auto mb-1 text-gray-400" />
                          <p className="text-xs text-gray-600 mb-1">
                            Click or drag files
                          </p>
                          <p className="text-xs text-gray-500">
                            JPG, PNG, JPEG
                          </p>
                          <input
                            type="file"
                            multiple
                            accept=".jpg,.png,.jpeg"
                            onChange={handleProductPicturesChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                        </div>
                        {uploadedProductPictures.length > 0 && (
                          <div className="mt-2 space-y-1">
                            <p className="text-xs font-semibold text-gray-700">
                              Files ({uploadedProductPictures.length}):
                            </p>
                            {uploadedProductPictures.map((file, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between p-2 bg-white rounded border border-gray-200"
                              >
                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                  <ImageIcon className="w-3 h-3 text-green-600 flex-shrink-0" />
                                  <span className="text-xs text-gray-700 truncate">
                                    {file.name}
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeProductPicture(index)}
                                  className="ml-2 text-red-600 hover:text-red-800"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Set Price and Any Other Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Set Monitise (INR){' '}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          name="setPrice"
                          value={formData.setPrice}
                          onChange={handleInputChange}
                          placeholder="₹ 0.00"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Any Other Info <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="otherInfo"
                          value={formData.otherInfo}
                          onChange={handleInputChange}
                          placeholder="Additional information"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={handleBack}
                className="w-full sm:w-auto border-2 border-blue-700 text-blue-700 bg-white px-6 py-2.5 rounded-lg hover:bg-blue-50 font-semibold transition-all duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-800 text-white px-6 py-2.5 rounded-lg hover:bg-blue-900 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Submit
              </button>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="mt-6 text-center">
                <div className="bg-green-100 text-green-800 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Perfect! We've received your details and started AI
                  evaluation.
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default IPSubmissionStep3;


// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { useIP } from '../context/IPContext.jsx';
// import {
//   ArrowLeft,
//   Home,
//   X,
//   FileText,
//   ImageIcon,
//   Upload,
//   CheckCircle,
//   Plus,
//   Briefcase
// } from 'lucide-react';
// import homepageImage from '../assets/homepage-image.png';

// function IPSubmissionStep3() {
//   const navigate = useNavigate();
//   const { state, dispatch } = useIP();

//   // normalize to array for targetIndustries
//   const normalizeArray = (value) => {
//     if (!value) return [];
//     if (Array.isArray(value)) return value;
//     return String(value)
//       .split(',')
//       .map((v) => v.trim())
//       .filter((v) => v.length > 0);
//   };

//   const [formData, setFormData] = useState({
//     // target industries as array + input string (NEW)
//     targetIndustries: normalizeArray(state.step3Data?.targetIndustries),
//     targetIndustriesInput: normalizeArray(
//       state.step3Data?.targetIndustries
//     ).join(', '),

//     physicalHardware: state.step3Data?.physicalHardware || '',
//     developmentStage: state.step3Data?.developmentStage || '',
//     innovationVideoUrl: state.step3Data?.innovationVideoUrl || '',
//     hasSoftwareStatus: state.step3Data?.hasSoftwareStatus || '',
//     softwareStatus: state.step3Data?.softwareStatus || '',
//     productName: state.step3Data?.productName || '',
//     softwareCategory: state.step3Data?.softwareCategory || '',
//     softwareDescription: state.step3Data?.softwareDescription || '',
//     setPrice: state.step3Data?.setPrice || '',
//     otherInfo: state.step3Data?.otherInfo || '',
//     monetise: state.step3Data?.monetise || ''
//   });

//   const [uploadedDesignDocs, setUploadedDesignDocs] = useState([]);
//   const [uploadedProductPictures, setUploadedProductPictures] = useState([]);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const formRef = useRef();

//   useEffect(() => {
//     gsap.fromTo(
//       formRef.current,
//       { opacity: 0, x: 30 },
//       { opacity: 1, x: 0, duration: 0.8 }
//     );
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (name === 'hasSoftwareStatus' && value === 'No') {
//       setFormData((prev) => ({ ...prev, softwareStatus: '' }));
//     }
//   };

//   /* ---------- TARGET INDUSTRIES: STEP‑1 STYLE MULTI SELECT ---------- */

//   const suggestedIndustries = [
//     'Healthcare',
//     'Manufacturing',
//     'Energy',
//     'Agriculture',
//     'Education',
//     'Fintech',
//     'IT Services',
//     'Retail',
//     'Transportation',
//     'Telecom'
//   ];

//   const syncIndustriesInputFromArray = (arr) =>
//     arr && arr.length ? arr.join(', ') : '';

//   const handleIndustriesInputChange = (e) => {
//     const value = e.target.value;
//     const pieces = value
//       .split(',')
//       .map((v) => v.trim())
//       .filter((v) => v.length > 0);

//     setFormData((prev) => ({
//       ...prev,
//       targetIndustriesInput: value,
//       targetIndustries: pieces
//     }));
//   };

//   const [showIndustrySuggestions, setShowIndustrySuggestions] =
//     useState(false);

//   const handleIndustrySuggestionClick = (industry) => {
//     setFormData((prev) => {
//       const exists = (prev.targetIndustries || []).includes(industry);
//       let updated;
//       if (exists) {
//         updated = prev.targetIndustries.filter((i) => i !== industry);
//       } else {
//         updated = Array.from(
//           new Set([...(prev.targetIndustries || []), industry])
//         );
//       }
//       return {
//         ...prev,
//         targetIndustries: updated,
//         targetIndustriesInput: syncIndustriesInputFromArray(updated)
//       };
//     });
//   };

//   /* ---------- UPLOADS (unchanged) ---------- */

//   const handleDesignDocsChange = (e) => {
//     const files = Array.from(e.target.files);
//     setUploadedDesignDocs((prev) => [...prev, ...files]);
//     e.target.value = '';
//   };

//   const handleProductPicturesChange = (e) => {
//     const files = Array.from(e.target.files);
//     setUploadedProductPictures((prev) => [...prev, ...files]);
//     e.target.value = '';
//   };

//   const removeDesignDoc = (index) => {
//     setUploadedDesignDocs((prev) => prev.filter((_, i) => i !== index));
//   };

//   const removeProductPicture = (index) => {
//     setUploadedProductPictures((prev) =>
//       prev.filter((_, i) => i !== index)
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // filter out empty industries (array form)
//     const filteredIndustries = formData.targetIndustries.filter(
//       (industry) => industry.trim() !== ''
//     );

//     const completeData = {
//       ...formData,
//       targetIndustries: filteredIndustries,
//       uploadDesignDocs: uploadedDesignDocs,
//       uploadProductPictures: uploadedProductPictures
//     };

//     dispatch({ type: 'SET_STEP3_DATA', payload: completeData });
//     setShowSuccess(true);

//     setTimeout(() => {
//       gsap.to(formRef.current, {
//         opacity: 0,
//         x: -30,
//         duration: 0.5,
//         onComplete: () => navigate('/ai-evaluation')
//       });
//     }, 1400);
//   };

//   const handleBack = () => navigate(-1);
//   const handleHome = () => navigate('/home');

//   const developmentStages = [
//     'Prototype',
//     'Pre-Production',
//     'General Available'
//   ];
//   const softwareStatusOptions = [
//     'Applied',
//     'Awaiting For Defence',
//     'Defence Completed',
//     'Awarded'
//   ];

//   const showHardwareFields = formData.physicalHardware === 'Yes';
//   const showSoftwareStatusDropdown = formData.hasSoftwareStatus === 'Yes';
//   const showSoftwareFields =
//     formData.softwareStatus !== '' && showSoftwareStatusDropdown;

//   return (
//     <div className="min-h-screen relative overflow-hidden p-4">
//       {/* Background Image */}
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

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80"></div>

//       {/* Content */}
//       <div
//         ref={formRef}
//         className="relative z-10 max-w-3xl mx-auto py-8 sm:py-12"
//       >
//         {/* Navigation Buttons */}
//         <div className="flex items-center justify-between mb-6 sm:mb-8">
//           <button
//             onClick={handleBack}
//             className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/50 rounded-lg transition-all duration-200"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             <span className="font-medium">Back</span>
//           </button>

//           <button
//             onClick={handleHome}
//             className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/50 rounded-lg transition-all duration-200"
//           >
//             <Home className="w-5 h-5" />
//             <span className="font-medium">Home</span>
//           </button>
//         </div>

//         <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
//           {/* Header */}
//           <div className="mb-8">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
//                 Commercialization Info
//               </h2>
//               <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
//                 Step 3 of 3
//               </span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
//               <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-full"></div>
//             </div>
//             <p className="text-sm sm:text-base text-gray-600">
//               Provide the commercialization details about your intellectual
//               property assets
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Target Industries – replaced with Step‑1 style multi-select */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Target Industries For Your IP{' '}
//                 <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <div className="flex items-center gap-2">
//                   <Briefcase className="w-4 h-4 text-gray-500" />
//                   <input
//                     type="text"
//                     value={formData.targetIndustriesInput}
//                     onChange={handleIndustriesInputChange}
//                     onFocus={() => setShowIndustrySuggestions(true)}
//                     onBlur={() =>
//                       setTimeout(
//                         () => setShowIndustrySuggestions(false),
//                         150
//                       )
//                     }
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                     placeholder="e.g., Healthcare, Manufacturing, Energy"
//                     required
//                   />
//                 </div>

//                 {showIndustrySuggestions && (
//                   <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-2">
//                     <p className="text-xs text-gray-500 px-1 pb-1">
//                       Click to add or remove industries
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {suggestedIndustries.map((ind) => {
//                         const selected =
//                           formData.targetIndustries &&
//                           formData.targetIndustries.includes(ind);

//                         return (
//                           <button
//                             key={ind}
//                             type="button"
//                             onMouseDown={(e) => e.preventDefault()}
//                             onClick={() =>
//                               handleIndustrySuggestionClick(ind)
//                             }
//                             className={`px-3 py-1 rounded-full text-xs sm:text-sm border transition-colors ${
//                               selected
//                                 ? 'bg-purple-600 text-white border-purple-600'
//                                 : 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100'
//                             }`}
//                           >
//                             {ind}
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Physical Hardware */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Is This IP Associated With Physical Hardware (Embedded
//                 Products) <span className="text-red-500">*</span>
//               </label>
//               <select
//                 name="physicalHardware"
//                 value={formData.physicalHardware}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//             </div>

//             {/* Conditional: Hardware section */}
//             {formData.physicalHardware === 'Yes' && (
//               <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 space-y-6">
//                 <h3 className="text-lg font-bold text-gray-800 mb-4">
//                   Hardware Information
//                 </h3>

//                 {/* Stage of Development */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Stage Of Development <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     name="developmentStage"
//                     value={formData.developmentStage}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white"
//                     required
//                   >
//                     <option value="">Select</option>
//                     {developmentStages.map((stage) => (
//                       <option key={stage} value={stage}>
//                         {stage}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Innovation Video URL */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Innovation Video About IP (Optional)
//                   </label>
//                   <input
//                     type="url"
//                     name="innovationVideoUrl"
//                     value={formData.innovationVideoUrl}
//                     onChange={handleInputChange}
//                     placeholder="https://youtube.com/..."
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white"
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Software Status Yes/No */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Is This IP Associated With Software Status{' '}
//                 <span className="text-red-500">*</span>
//               </label>
//               <select
//                 name="hasSoftwareStatus"
//                 value={formData.hasSoftwareStatus}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//             </div>

//             {/* Software status dropdown + detailed fields */}
//             {showSoftwareStatusDropdown && (
//               <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 space-y-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     IP Software Status <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     name="softwareStatus"
//                     value={formData.softwareStatus}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white"
//                     required
//                   >
//                     <option value="">Select</option>
//                     {softwareStatusOptions.map((status) => (
//                       <option key={status} value={status}>
//                         {status}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {showSoftwareFields && (
//                   <>
//                     <h3 className="text-lg font-bold text-gray-800 mb-4 pt-4 border-t border-purple-300">
//                       Software Information
//                     </h3>

//                     {/* Product Name, Category, Description */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                       <div>
//                         <label className="block text-xs font-semibold text-gray-700 mb-1">
//                           Product Name <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           name="productName"
//                           value={formData.productName}
//                           onChange={handleInputChange}
//                           placeholder="Product Name"
//                           className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg白 text-sm"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-xs font-semibold text-gray-700 mb-1">
//                           Category <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           name="softwareCategory"
//                           value={formData.softwareCategory}
//                           onChange={handleInputChange}
//                           placeholder="Category"
//                           className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg白 text-sm"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-xs font-semibold text-gray-700 mb-1">
//                           Description
//                         </label>
//                         <input
//                           type="text"
//                           name="softwareDescription"
//                           value={formData.softwareDescription}
//                           onChange={handleInputChange}
//                           placeholder="Description"
//                           className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg白 text-sm"
//                         />
//                       </div>
//                     </div>

//                     {/* Upload Design Docs & Product Pictures */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {/* Design Docs */}
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           Upload Design Documents{' '}
//                           <span className="text-red-500">*</span>
//                         </label>
//                         <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors bg-white">
//                           <Upload className="w-8 h-8 mx-auto mb-1 text-gray-400" />
//                           <p className="text-xs text-gray-600 mb-1">
//                             Click or drag files
//                           </p>
//                           <p className="text-xs text-gray-500">
//                             PDF, DOC, JPG, PNG
//                           </p>
//                           <input
//                             type="file"
//                             multiple
//                             accept=".pdf,.jpg,.png,.doc,.docx"
//                             onChange={handleDesignDocsChange}
//                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                           />
//                         </div>
//                         {uploadedDesignDocs.length > 0 && (
//                           <div className="mt-2 space-y-1">
//                             <p className="text-xs font-semibold text-gray-700">
//                               Files ({uploadedDesignDocs.length}):
//                             </p>
//                             {uploadedDesignDocs.map((file, index) => (
//                               <div
//                                 key={index}
//                                 className="flex items-center justify-between p-2 bg-white rounded border border-gray-200"
//                               >
//                                 <div className="flex items-center gap-2 flex-1 min-w-0">
//                                   <FileText className="w-3 h-3 text-blue-600 flex-shrink-0" />
//                                   <span className="text-xs text-gray-700 truncate">
//                                     {file.name}
//                                   </span>
//                                 </div>
//                                 <button
//                                   type="button"
//                                   onClick={() => removeDesignDoc(index)}
//                                   className="ml-2 text-red-600 hover:text-red-800"
//                                 >
//                                   <X className="w-3 h-3" />
//                                 </button>
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>

//                       {/* Product Pictures */}
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           Upload Product Pictures{' '}
//                           <span className="text-red-500">*</span>
//                         </label>
//                         <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors bg-white">
//                           <Upload className="w-8 h-8 mx-auto mb-1 text-gray-400" />
//                           <p className="text-xs text-gray-600 mb-1">
//                             Click or drag files
//                           </p>
//                           <p className="text-xs text-gray-500">
//                             JPG, PNG, JPEG
//                           </p>
//                           <input
//                             type="file"
//                             multiple
//                             accept=".jpg,.png,.jpeg"
//                             onChange={handleProductPicturesChange}
//                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                           />
//                         </div>
//                         {uploadedProductPictures.length > 0 && (
//                           <div className="mt-2 space-y-1">
//                             <p className="text-xs font-semibold text-gray-700">
//                               Files ({uploadedProductPictures.length}):
//                             </p>
//                             {uploadedProductPictures.map((file, index) => (
//                               <div
//                                 key={index}
//                                 className="flex items-center justify-between p-2 bg-white rounded border border-gray-200"
//                               >
//                                 <div className="flex items-center gap-2 flex-1 min-w-0">
//                                   <ImageIcon className="w-3 h-3 text-green-600 flex-shrink-0" />
//                                   <span className="text-xs text-gray-700 truncate">
//                                     {file.name}
//                                   </span>
//                                 </div>
//                                 <button
//                                   type="button"
//                                   onClick={() =>
//                                     removeProductPicture(index)
//                                   }
//                                   className="ml-2 text-red-600 hover:text-red-800"
//                                 >
//                                   <X className="w-3 h-3" />
//                                 </button>
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     {/* Set Price and Any Other Info (unchanged) */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           Set Monitise (INR){' '}
//                           <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           type="number"
//                           name="setPrice"
//                           value={formData.setPrice}
//                           onChange={handleInputChange}
//                           placeholder="₹ 0.00"
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white"
//                           required={showSoftwareFields}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           Any Other Info{' '}
//                           <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           name="otherInfo"
//                           value={formData.otherInfo}
//                           onChange={handleInputChange}
//                           placeholder="Additional information"
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white"
//                           required={showSoftwareFields}
//                         />
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             )}

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
//               <button
//                 type="button"
//                 onClick={handleBack}
//                 className="w-full sm:w-auto border-2 border-blue-700 text-blue-700 bg-white px-6 py-2.5 rounded-lg hover:bg-blue-50 font-semibold transition-all duration-200"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="w-full sm:w-auto bg-blue-800 text-white px-6 py-2.5 rounded-lg hover:bg-blue-900 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
//               >
//                 Submit
//               </button>
//             </div>

//             {/* Success Message */}
//             {showSuccess && (
//               <div className="mt-6 text-center">
//                 <div className="bg-green-100 text-green-800 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
//                   <CheckCircle className="w-5 h-5" />
//                   Perfect! We've Received And Started Evaluating Your IP...
//                 </div>
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default IPSubmissionStep3;
