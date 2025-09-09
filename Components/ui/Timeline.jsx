"use client";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../src/contexts/ThemeContext.jsx";
import { cn } from "../../src/lib/utils.js";

export const Timeline = ({ data }) => {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={cn(
        "w-full font-sans relative overflow-hidden transition-colors duration-500",
        isDark ? "bg-[--bg]" : "bg-gradient-to-br from-gray-50 via-white to-indigo-50/30"
      )}
      ref={containerRef}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={cn(
          "absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse",
          isDark ? "bg-gradient-to-br from-indigo-500 to-purple-600" : "bg-gradient-to-br from-indigo-300 to-purple-400"
        )}></div>
        <div className={cn(
          "absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-15 animate-pulse",
          isDark ? "bg-gradient-to-tr from-cyan-500 to-blue-600" : "bg-gradient-to-tr from-cyan-300 to-blue-400"
        )} style={{ animationDelay: '2s' }}></div>
      </div>


      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence>
          {data.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex items-start gap-6 md:gap-8 py-8 md:py-12 border-l-2 border-transparent relative p-6 md:p-8 rounded-3xl transition-all duration-300 ${
                isDark 
                  ? 'bg-gradient-to-br from-[--surface]/30 to-[--panel]/20 border border-[--border]/20 hover:border-[--accent]/30 backdrop-blur-sm' 
                  : 'bg-gradient-to-br from-white/40 to-gray-50/30 border border-gray-200/30 hover:border-indigo-300/50 backdrop-blur-sm'
              }`}
            >
              {/* Sleek Timeline Marker */}
              <div className="relative flex-shrink-0">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className={cn(
                    "w-4 h-4 rounded-full border-2 transition-all duration-300 relative z-10",
                    isDark 
                      ? "bg-[--accent] border-[--accent] shadow-lg shadow-[--accent]/30" 
                      : "bg-indigo-600 border-indigo-600 shadow-lg shadow-indigo-300"
                  )}
                >
                  <div className={cn(
                    "absolute inset-0 rounded-full animate-ping opacity-20",
                    isDark ? "bg-[--accent]" : "bg-indigo-600"
                  )} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className={cn(
                    "text-xl md:text-2xl font-bold mb-4 transition-colors duration-300",
                    isDark ? "text-[--text-primary]" : "text-gray-900"
                  )}
                >
                  {item.title}
                </motion.h3>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {item.content}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Continuous Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className={cn(
            "absolute left-2 top-0 w-0.5 transition-all duration-300",
            isDark 
              ? "bg-[--border]/30" 
              : "bg-gray-300/50"
          )}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className={cn(
              "absolute inset-x-0 top-0 w-0.5",
              "bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400"
            )}
          />
        </div>
      </div>
    </div>
  );
};
