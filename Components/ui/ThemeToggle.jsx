import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../src/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative w-16 h-16 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${isDark ? 'bg-gray-800' : 'bg-gray-200'} ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      role="switch"
      aria-checked={isDark}
    >
      {/* Sun Icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          opacity: isDark ? 0 : 1,
          scale: isDark ? 0.5 : 1,
          rotate: isDark ? 180 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <Sun className={`w-10 h-10 ${
          isDark ? 'text-gray-400' : 'text-yellow-500'
        }`} />
      </motion.div>
      
      {/* Moon Icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          opacity: isDark ? 1 : 0,
          scale: isDark ? 1 : 0.5,
          rotate: isDark ? 0 : -180
        }}
        transition={{ duration: 0.3 }}
      >
        <Moon className={`w-10 h-10 ${
          isDark ? 'text-purple-400' : 'text-gray-400'
        }`} />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
