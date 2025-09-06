import React, { useEffect, useRef } from 'react';

const VantaDots = ({ children, className = "" }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // Initialize Vanta effect when component mounts
    if (vantaRef.current && window.VANTA) {
      vantaEffect.current = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x000000, // Pure black background
        color: 0x888888, // Brighter gray lines for shooting star effect
        points: 8.0, // Number of moving dots
        maxDistance: 18.0, // How far lines can connect
        spacing: 20.0, // Spread of points
        showDots: true,
        showLines: true
      });
    }

    // Cleanup function to destroy effect on unmount
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className={`relative overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)'
      }}
    >
      {/* Very subtle overlays that won't compete with content */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/1 via-transparent to-gray-400/2 pointer-events-none"></div>
      
      {/* Content overlay with proper z-index */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default VantaDots;
