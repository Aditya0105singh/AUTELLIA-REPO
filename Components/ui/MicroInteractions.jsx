import { motion } from 'framer-motion';
import { useState } from 'react';

// Enhanced Button with micro-interactions
export const InteractiveButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  disabled = false,
  ...props 
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const variants = {
    primary: 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:shadow-indigo-500/25',
    secondary: 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      className={`
        relative font-semibold rounded-xl transition-all duration-300 transform-gpu
        ${variants[variant]} ${sizes[size]} ${className}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ 
        scale: disabled ? 1 : 1.05,
        y: disabled ? 0 : -2
      }}
      whileTap={{ 
        scale: disabled ? 1 : 0.95,
        y: disabled ? 0 : 0
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      {...props}
    >
      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: isPressed ? 0 : [-200, 200],
          opacity: isPressed ? 0 : [0, 1, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 2
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

// Enhanced Card with hover effects
export const InteractiveCard = ({ 
  children, 
  className = '', 
  glowColor = 'indigo',
  onClick,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const glowColors = {
    indigo: 'hover:shadow-indigo-500/20',
    purple: 'hover:shadow-purple-500/20',
    cyan: 'hover:shadow-cyan-500/20',
    emerald: 'hover:shadow-emerald-500/20'
  };

  return (
    <motion.div
      className={`
        relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500
        bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10
        shadow-lg hover:shadow-2xl ${glowColors[glowColor]}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ 
        y: -8,
        rotateX: 5,
        rotateY: 5
      }}
      whileTap={onClick ? { scale: 0.98 } : {}}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      {...props}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

// Floating Action Button with pulse effect
export const FloatingButton = ({ 
  children, 
  onClick, 
  position = 'bottom-right',
  className = '' 
}) => {
  const positions = {
    'bottom-right': 'fixed bottom-8 right-8',
    'bottom-left': 'fixed bottom-8 left-8',
    'top-right': 'fixed top-8 right-8',
    'top-left': 'fixed top-8 left-8'
  };

  return (
    <motion.button
      className={`
        ${positions[position]} z-50 w-14 h-14 rounded-full
        bg-gradient-to-r from-indigo-600 to-purple-600 text-white
        shadow-lg hover:shadow-xl flex items-center justify-center
        ${className}
      `}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        boxShadow: [
          '0 0 20px rgba(99, 102, 241, 0.3)',
          '0 0 40px rgba(99, 102, 241, 0.6)',
          '0 0 20px rgba(99, 102, 241, 0.3)'
        ]
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      }}
    >
      {children}
    </motion.button>
  );
};

// Enhanced Link with underline animation
export const AnimatedLink = ({ 
  children, 
  href, 
  className = '',
  external = false,
  ...props 
}) => {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`
        relative inline-block text-indigo-600 dark:text-indigo-400 
        font-medium transition-colors duration-300 group
        ${className}
      `}
      whileHover={{ y: -1 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Animated underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </motion.a>
  );
};

// Loading spinner with smooth animation
export const LoadingSpinner = ({ size = 'md', color = 'indigo' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colors = {
    indigo: 'text-indigo-600',
    purple: 'text-purple-600',
    cyan: 'text-cyan-600',
    white: 'text-white'
  };

  return (
    <motion.div
      className={`${sizes[size]} ${colors[color]}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear'
      }}
    >
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </motion.div>
  );
};

// Notification Toast with slide animation
export const Toast = ({ 
  message, 
  type = 'info', 
  isVisible, 
  onClose,
  duration = 4000 
}) => {
  const types = {
    success: 'bg-emerald-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-amber-500 text-white',
    info: 'bg-blue-500 text-white'
  };

  return (
    <motion.div
      className={`
        fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg
        ${types[type]} max-w-md
      `}
      initial={{ x: 400, opacity: 0 }}
      animate={{ 
        x: isVisible ? 0 : 400, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="flex items-center justify-between">
        <p className="font-medium">{message}</p>
        <button
          onClick={onClose}
          className="ml-4 text-white/80 hover:text-white"
        >
          ×
        </button>
      </div>
    </motion.div>
  );
};
