import { motion } from 'framer-motion';
import { useTheme } from '../../src/contexts/ThemeContext.jsx';

export const GlassmorphismCard = ({ 
  children, 
  className = '', 
  intensity = 'medium',
  glow = false,
  onClick,
  ...props 
}) => {
  const { isDark } = useTheme();

  const intensities = {
    light: isDark 
      ? 'bg-white/5 backdrop-blur-sm border-white/10' 
      : 'bg-white/60 backdrop-blur-sm border-white/20',
    medium: isDark 
      ? 'bg-white/10 backdrop-blur-md border-white/20' 
      : 'bg-white/80 backdrop-blur-md border-white/30',
    heavy: isDark 
      ? 'bg-white/20 backdrop-blur-lg border-white/30' 
      : 'bg-white/90 backdrop-blur-lg border-white/40'
  };

  return (
    <motion.div
      className={`
        relative rounded-2xl border transition-all duration-500
        ${intensities[intensity]}
        ${glow ? 'shadow-2xl shadow-indigo-500/20' : 'shadow-lg'}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
      whileHover={onClick ? { 
        scale: 1.02, 
        y: -4,
        boxShadow: glow 
          ? '0 25px 50px -12px rgba(99, 102, 241, 0.25)' 
          : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      {...props}
    >
      {/* Gradient overlay for extra depth */}
      <div className={`absolute inset-0 rounded-2xl ${
        isDark 
          ? 'bg-gradient-to-br from-white/5 via-transparent to-white/5' 
          : 'bg-gradient-to-br from-white/20 via-transparent to-white/10'
      }`} />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export const GlassmorphismHero = ({ children, className = '' }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      className={`
        relative p-8 md:p-12 rounded-3xl border transition-all duration-700
        ${isDark 
          ? 'bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/40 backdrop-blur-xl border-slate-700/50' 
          : 'bg-gradient-to-br from-white/60 via-white/40 to-white/60 backdrop-blur-xl border-white/30'
        }
        shadow-2xl
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
