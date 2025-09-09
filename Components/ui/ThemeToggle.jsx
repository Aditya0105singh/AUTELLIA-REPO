import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../src/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-start h-8 w-16 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
        isDark 
          ? 'bg-gradient-to-r from-indigo-600 to-purple-600' 
          : 'bg-gradient-to-r from-orange-400 to-yellow-400'
      } ${className}`}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      role="switch"
      aria-checked={isDark}
    >
      {/* Icon */}
      <div className={`absolute transition-all duration-300 ${isDark ? 'left-2 opacity-100' : 'right-2 opacity-100'}`}>
        {isDark ? (
          <Moon className="w-4 h-4 text-white" />
        ) : (
          <Sun className="w-4 h-4 text-white" />
        )}
      </div>
      
      {/* Thumb */}
      <motion.div
        className="absolute w-6 h-6 bg-white rounded-full shadow-lg top-1 left-1"
        animate={{
          x: isDark ? 17 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25
        }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
