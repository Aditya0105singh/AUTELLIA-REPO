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
        "w-full font-sans relative overflow-hidden py-12",
        isDark ? "bg-transparent" : "bg-transparent"
      )}
      ref={containerRef}
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={cn(
          "absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10",
          isDark ? "bg-gradient-to-br from-indigo-500 to-purple-600" : "bg-gradient-to-br from-indigo-300 to-purple-400"
        )}></div>
        <div className={cn(
          "absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-8",
          isDark ? "bg-gradient-to-tr from-cyan-500 to-blue-600" : "bg-gradient-to-tr from-cyan-300 to-blue-400"
        )}></div>
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Grid Layout for Better Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {data.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.2 }}
              className={cn(
                "group relative p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02]",
                isDark 
                  ? 'bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/30 hover:border-indigo-500/40 backdrop-blur-sm' 
                  : 'bg-gradient-to-br from-white/60 to-gray-50/60 border border-gray-200/50 hover:border-indigo-300/60 backdrop-blur-sm shadow-lg hover:shadow-xl'
              )}
            >
              {/* Icon/Number Badge */}
              <div className="flex items-center mb-6">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300",
                    isDark 
                      ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25" 
                      : "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-300/30"
                  )}
                >
                  {index + 1}
                </motion.div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <motion.h3 
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className={cn(
                    "text-xl lg:text-2xl font-bold transition-colors duration-300 leading-tight",
                    isDark ? "text-white" : "text-gray-900"
                  )}
                >
                  {item.title}
                </motion.h3>
                
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className={cn(
                    "space-y-3 leading-relaxed",
                    isDark ? "text-slate-300" : "text-gray-600"
                  )}
                >
                  {item.content}
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <div className={cn(
                "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                isDark 
                  ? "bg-gradient-to-br from-indigo-500/5 to-purple-600/5" 
                  : "bg-gradient-to-br from-indigo-500/5 to-purple-600/5"
              )} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
