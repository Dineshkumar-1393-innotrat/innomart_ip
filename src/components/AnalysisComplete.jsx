import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useIP } from '../context/IPContext.jsx';
import { TrendingUp, Award, Users, ArrowRight, FileCheck, BarChart3, PieChart, Activity } from 'lucide-react';

function AnalysisComplete() {
  const navigate = useNavigate();
  const { dispatch } = useIP();
  const containerRef = useRef();
  const cardsRef = useRef([]);
  const [isAgreed, setIsAgreed] = useState(false);
  const [showLegalExperts, setShowLegalExperts] = useState(false);

  useEffect(() => {
    const mockResults = {
      marketValue: { min: 23000, max: 25000 },
      noveltyScore: 8.1,
      competitorCount: 12,
      summary: "Your IP shows strong commercial potential with high novelty score and moderate competition.",
      detailedMetrics: {
        technicalFeasibility: 85,
        marketDemand: 78,
        competitiveAdvantage: 82,
        scalability: 90,
        patentability: 88
      },
      marketAnalysis: {
        totalMarketSize: "₹2.5B",
        growthRate: "12.5%",
        marketShare: "0.8%"
      },
      riskAssessment: {
        technicalRisk: "Low",
        marketRisk: "Medium", 
        legalRisk: "Low"
      }
    };

    dispatch({ type: 'SET_EVALUATION_RESULTS', payload: mockResults });

    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    );

    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, delay: 0.3 }
    );
  }, [dispatch]);

  const handleExpertConsultation = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      onComplete: () => navigate('/expert-consultation')
    });
  };

  const handleLegalReview = () => {
    if (!isAgreed) return;
    setShowLegalExperts(true);
  };

  const handleBookAppointment = () => {
    navigate('/payment');
  };

  const legalExperts = Array.from({ length: 9 }).map((_, index) => ({
    id: index,
    name: 'Name Of IP Lawyer',
    skills: 'Skills Skills Skills Skills Skills Skills Skills Skills',
    imageUrl: 'https://via.placeholder.com/80'
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6">
      <div ref={containerRef} className="max-w-6xl mx-auto py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 animate-float">
            <FileCheck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Analysis Complete!
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            Here's your comprehensive IP evaluation
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div ref={el => cardsRef.current[0] = el} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <TrendingUp className="w-8 h-8 sm:w-12 sm:h-12 text-green-500 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2">Market Value</h3>
            <p className="text-xl sm:text-3xl font-bold text-green-600">₹23,000 - ₹25,000</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">Estimated range</p>
          </div>

          <div ref={el => cardsRef.current[1] = el} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <Award className="w-8 h-8 sm:w-12 sm:h-12 text-blue-500 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2">Novelty Score</h3>
            <p className="text-xl sm:text-3xl font-bold text-blue-600">8.1/10</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">Innovation level</p>
          </div>

          <div ref={el => cardsRef.current[2] = el} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <Users className="w-8 h-8 sm:w-12 sm:h-12 text-purple-500 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2">Competitors</h3>
            <p className="text-xl sm:text-3xl font-bold text-purple-600">12 Similar IPs</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">Market competition</p>
          </div>
        </div>

        {/* Detailed Metrics Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Metrics Chart */}
          <div ref={el => cardsRef.current[3] = el} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <BarChart3 className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Detailed Metrics</h3>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Technical Feasibility', value: 85, color: 'bg-blue-500' },
                { label: 'Market Demand', value: 78, color: 'bg-green-500' },
                { label: 'Competitive Advantage', value: 82, color: 'bg-purple-500' },
                { label: 'Scalability', value: 90, color: 'bg-orange-500' },
                { label: 'Patentability', value: 88, color: 'bg-pink-500' }
              ].map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-gray-700">{metric.label}</span>
                    <span className="text-sm sm:text-base font-semibold text-gray-800">{metric.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`${metric.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${metric.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Analysis */}
          <div ref={el => cardsRef.current[4] = el} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <PieChart className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Market Analysis</h3>
            </div>
            <div className="space-y-6">
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">₹2.5B</div>
                <div className="text-sm sm:text-base text-gray-600">Total Market Size</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">12.5%</div>
                <div className="text-sm sm:text-base text-gray-600">Annual Growth Rate</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">0.8%</div>
                <div className="text-sm sm:text-base text-gray-600">Potential Market Share</div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Assessment */}
        <div ref={el => cardsRef.current[5] = el} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-8 sm:mb-12">
          <div className="flex items-center mb-6">
            <Activity className="w-6 h-6 text-orange-600 mr-3" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Risk Assessment</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-lg sm:text-xl font-bold text-green-600 mb-2">Low</div>
              <div className="text-sm sm:text-base text-gray-600">Technical Risk</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-xl">
              <div className="text-lg sm:text-xl font-bold text-yellow-600 mb-2">Medium</div>
              <div className="text-sm sm:text-base text-gray-600">Market Risk</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-lg sm:text-xl font-bold text-green-600 mb-2">Low</div>
              <div className="text-sm sm:text-base text-gray-600">Legal Risk</div>
            </div>
          </div>
        </div>

        {/* Analysis Summary */}
        <div ref={el => cardsRef.current[6] = el} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Analysis Summary</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Your IP shows strong commercial potential with high novelty score and moderate competition.
            The market analysis indicates favorable conditions for both licensing and direct sales opportunities.
            Technical feasibility is excellent at 85%, with strong scalability potential at 90%.
            We recommend proceeding with expert consultation to explore optimal monetization strategies.
          </p>
        </div>

        {/* Agreement + Action Buttons */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg space-y-4">
          <label className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span>
              I agree to proceed with legal review with an IP professional and make required payment for review.
            </span>
          </label>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleLegalReview}
              disabled={!isAgreed}
              className={`flex-1 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center text-sm sm:text-base transition-all duration-200 ${
                isAgreed
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Submit And Get Legal Review
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </button>

            <button
              onClick={handleExpertConsultation}
              className="flex-1 bg-white border-2 border-blue-600 text-blue-600 py-3 sm:py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 font-semibold flex items-center justify-center transform hover:scale-105 text-sm sm:text-base"
            >
              Book Expert Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Legal Experts Grid */}
        {showLegalExperts && (
          <div className="mt-10">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">IP Legal Experts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {legalExperts.map((expert) => (
                <div key={expert.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
                  <img src={expert.imageUrl} alt={expert.name} className="w-20 h-20 rounded-full object-cover mb-4" />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{expert.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{expert.skills}</p>
                  <button
                    onClick={handleBookAppointment}
                    className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Book Appointment
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnalysisComplete;
