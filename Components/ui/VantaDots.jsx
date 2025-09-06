import React, { useEffect, useRef } from 'react';

const VantaDots = ({ children, className = "" }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // Initialize Vanta effect when component mounts
    const initVanta = () => {
      if (vantaRef.current && window.VANTA && window.THREE) {
        try {
          vantaEffect.current = window.VANTA.WAVES({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x4191c, // Wave color
            shininess: 15.00,
            waveHeight: 23.00,
            waveSpeed: 1.10,
            zoom: 0.71
          });
        } catch (error) {
          console.warn('Vanta.js initialization failed:', error);
        }
      }
    };

    // Try to initialize immediately, or wait for scripts to load
    if (window.VANTA && window.THREE) {
      initVanta();
    } else {
      const checkVanta = setInterval(() => {
        if (window.VANTA && window.THREE) {
          clearInterval(checkVanta);
          initVanta();
        }
      }, 100);
      
      // Clear interval after 5 seconds to avoid infinite checking
      setTimeout(() => clearInterval(checkVanta), 5000);
    }

    // Cleanup function to destroy effect on unmount
    return () => {
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (error) {
          console.warn('Vanta.js cleanup failed:', error);
        }
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className={`relative overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
      }}
    >
      {/* Enhanced gradient overlays for better visual depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-blue-900/10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Content overlay with proper z-index */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default VantaDots;
