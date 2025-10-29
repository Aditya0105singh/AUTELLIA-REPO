import React, { useEffect, useRef, useState } from 'react';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const SimpleScrollStack = ({ children, className = '' }) => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.scroll-stack-card');
    cards.forEach((card, index) => {
      const progress = Math.max(0, scrollY - (index * 0.1));
      const scale = Math.max(0.85, 1 - progress * 0.15);
      const translateY = Math.min(0, -progress * 50 * index);
      const opacity = Math.max(0.3, 1 - progress * 0.7);

      card.style.transform = `translateY(${translateY}px) scale(${scale})`;
      card.style.opacity = opacity;
      card.style.zIndex = cards.length - index;
    });
  }, [scrollY]);

  return (
    <div ref={containerRef} className={`simple-scroll-stack ${className}`.trim()}>
      <div className="space-y-8">
        {children}
      </div>
    </div>
  );
};

export default SimpleScrollStack;
