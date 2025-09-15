import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../src/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 focus:ring-purple-500 border-2 border-gray-600' 
          : 'bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 focus:ring-yellow-500 border-2 border-gray-300'
      } ${className} shadow-lg hover:shadow-xl`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ rotate: isDark ? 360 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
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
        <Sun className={`w-6 h-6 ${
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
        <Moon className={`w-6 h-6 ${
          isDark ? 'text-purple-400' : 'text-gray-400'
        }`} />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
