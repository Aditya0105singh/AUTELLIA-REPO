"use client";
import React, { useRef, useCallback, useState, useEffect } from "react";

export const BackgroundRippleEffect = () => {
  const containerRef = useRef(null);
  const [ripples, setRipples] = useState([]);
  const [boxes, setBoxes] = useState([]);

  // Generate random boxes for the background
  useEffect(() => {
    const generateBoxes = () => {
      const newBoxes = [];
      for (let i = 0; i < 30; i++) {
        newBoxes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 60 + 20,
          opacity: Math.random() * 0.3 + 0.1,
          rotation: Math.random() * 360,
        });
      }
      setBoxes(newBoxes);
    };

    generateBoxes();
  }, []);

  const createRipple = useCallback((event) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y,
      size: 0,
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 1000);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
      onClick={createRipple}
    >
      {/* Background boxes */}
      {boxes.map((box) => (
        <div
          key={box.id}
          className="absolute border border-[--accent]/20 bg-[--accent]/5"
          style={{
            left: `${box.x}%`,
            top: `${box.y}%`,
            width: `${box.size}px`,
            height: `${box.size}px`,
            opacity: box.opacity,
            transform: `rotate(${box.rotation}deg)`,
            borderRadius: "8px",
          }}
        />
      ))}

      {/* Interactive ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute rounded-full border-2 border-[--accent]/30 bg-[--accent]/10 animate-ping"
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
            width: "50px",
            height: "50px",
          }}
        />
      ))}
    </div>
  );
};