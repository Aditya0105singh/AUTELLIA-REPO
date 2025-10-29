"use client";
import React, { useRef, useEffect } from "react";

export const ShootingStars = () => {
  const shootingStarsRef = useRef(null);

  useEffect(() => {
    const createShootingStar = () => {
      if (!shootingStarsRef.current) return;

      const star = document.createElement("div");
      star.className = "shooting-star";
      star.style.position = "absolute";
      star.style.width = "2px";
      star.style.height = "2px";
      star.style.backgroundColor = "#4169E1";
      star.style.borderRadius = "50%";
      star.style.boxShadow = "0 0 6px 2px rgba(65, 105, 225, 0.5)";
      
      // Random starting position
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      
      // Random direction and speed
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1;
      
      shootingStarsRef.current.appendChild(star);
      
      // Animate the star
      let x = 0;
      let y = 0;
      const animate = () => {
        x += Math.cos(angle) * speed;
        y += Math.sin(angle) * speed;
        
        star.style.transform = `translate(${x}px, ${y}px)`;
        star.style.opacity = Math.max(0, 1 - (Math.abs(x) + Math.abs(y)) / 1000);
        
        if (star.style.opacity > 0) {
          requestAnimationFrame(animate);
        } else {
          star.remove();
        }
      };
      
      animate();
    };

    const interval = setInterval(createShootingStar, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={shootingStarsRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    />
  );
};