import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Brain, Loader2 } from 'lucide-react';

function AIEvaluation() {
  const navigate = useNavigate();
  const containerRef = useRef();
  const loadingRef = useRef();

  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8 }
    );

    gsap.to(loadingRef.current, {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: "none"
    });

    const timer = setTimeout(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        onComplete: () => navigate('/analysis-complete')
      });
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div ref={containerRef} className="text-center">
        <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-md mx-auto">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6 animate-float">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Evaluating Your IP...
            </h2>
            <p className="text-gray-600 mb-8">
              Our AI is analyzing your intellectual property and generating comprehensive insights
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3 text-blue-600">
              <Loader2 ref={loadingRef} className="w-6 h-6" />
              <span>Processing technical specifications...</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full animate-pulse" style={{width: '75%'}}></div>
            </div>

            <div className="text-sm text-gray-500 space-y-2">
              <div className="flex items-center justify-center">
                <span className="text-green-500 mr-2">✓</span>
                Market analysis complete
              </div>
              <div className="flex items-center justify-center">
                <span className="text-green-500 mr-2">✓</span>
                Novelty assessment complete
              </div>
              <div className="flex items-center justify-center">
                <span className="text-yellow-500 mr-2">⏳</span>
                Generating valuation report...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIEvaluation;
