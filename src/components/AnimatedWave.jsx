import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const AnimatedWave = ({ className = '' }) => {
  const waveRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(waveRef.current, {
        xPercent: -50,
        yPercent: -5,
        duration: 18,
        ease: 'none',
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={`pointer-events-none overflow-hidden ${className}`}>
      <svg
        ref={waveRef}
        style={{ width: '200%', height: '180px' }}
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradientPrimary" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d6e4ff" />
            <stop offset="50%" stopColor="#e7d9ff" />
            <stop offset="100%" stopColor="#ffd9ef" />
          </linearGradient>
          <linearGradient id="waveGradientSecondary" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c3dbff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#f5d7ff" stopOpacity="0.7" />
          </linearGradient>
          <path
            id="wave-path"
            d="M0,240L48,229.3C96,219,192,198,288,186.7C384,176,480,176,576,192C672,208,768,240,864,213.3C960,187,1056,101,1152,80C1248,59,1344,101,1392,122.7L1440,144L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            id="wave-path-secondary"
            d="M0,272L60,256C120,240,240,208,360,197.3C480,187,600,197,720,213.3C840,229,960,251,1080,250.7C1200,251,1320,229,1380,218.7L1440,208L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </defs>
        <use href="#wave-path" x="0" y="0" fill="url(#waveGradientPrimary)" />
        <use href="#wave-path" x="1440" y="0" fill="url(#waveGradientPrimary)" />
        <use href="#wave-path-secondary" x="0" y="0" fill="url(#waveGradientSecondary)" />
        <use href="#wave-path-secondary" x="1440" y="0" fill="url(#waveGradientSecondary)" />
      </svg>
    </div>
  );
};

export default AnimatedWave;
