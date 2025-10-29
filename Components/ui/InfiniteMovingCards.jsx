import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../src/contexts/ThemeContext.jsx";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const { isDark } = useTheme();
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      }
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div className="relative w-full overflow-hidden py-8">

      <div
        ref={containerRef}
        className={`scroller relative z-10 max-w-7xl mx-auto overflow-hidden ${
          isDark 
            ? '[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]'
            : '[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]'
        } ${className}`}
      >
        <motion.ul
          ref={scrollerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`flex min-w-full shrink-0 gap-6 py-6 w-max flex-nowrap ${
            start ? "animate-scroll" : ""
          } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        >
        {items.map((item, idx) => (
          <motion.li
            key={item.name + idx}
            whileHover={{ 
              y: -4,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className={`w-[350px] max-w-full relative rounded-xl p-6 transition-all duration-300 ${
              isDark 
                ? 'border border-[--border] bg-[--surface] hover:shadow-lg' 
                : 'border border-gray-200 bg-white hover:shadow-lg'
            }`}
          >
            <blockquote>
              
              <p className={`text-base leading-relaxed mb-6 transition-colors duration-300 ${
                isDark ? 'text-[--text-muted]' : 'text-gray-700'
              }`}>
                "{item.quote}"
              </p>
              
              <div className="flex flex-col">
                <span className={`text-sm font-semibold transition-colors duration-300 ${
                  isDark ? 'text-[--text-primary]' : 'text-gray-900'
                }`}>
                  {item.name}
                </span>
                <span className={`text-xs transition-colors duration-300 ${
                  isDark ? 'text-[--text-muted]' : 'text-gray-600'
                }`}>
                  {item.title}
                </span>
              </div>
            </blockquote>
          </motion.li>
        ))}
        </motion.ul>
        
        <style jsx>{`
          .animate-scroll {
            animation: scroll var(--animation-duration, 120s) var(--animation-direction, forwards) linear infinite;
          }
          
          @keyframes scroll {
            to {
              transform: translate(calc(-50% - 1.5rem));
            }
          }
        `}</style>
      </div>
    </div>
  );
};