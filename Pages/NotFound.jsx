import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../src/contexts/ThemeContext.jsx';
import { createPageUrl } from '../src/utils/index.js';

export default function NotFound() {
  const { isDark } = useTheme();

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 ${
      isDark ? 'bg-slate-900' : 'bg-gray-50'
    }`}>
      <motion.div
        className="text-center max-w-2xl mx-auto"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* Floating 404 Animation */}
        <motion.div
          className="relative mb-8"
          variants={floatingVariants}
          animate="animate"
        >
          <motion.h1 
            className={`text-9xl md:text-[12rem] font-bold leading-none ${
              isDark 
                ? 'text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text' 
                : 'text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text'
            }`}
            variants={itemVariants}
          >
            404
          </motion.h1>
          
          {/* Glowing orbs around 404 */}
          <motion.div
            className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-indigo-500 opacity-60"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-purple-500 opacity-60"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-cyan-500 opacity-60"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h2 className={`text-3xl md:text-4xl font-bold ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Oops! Page Not Found
          </h2>
          
          <p className={`text-lg md:text-xl max-w-md mx-auto ${
            isDark ? 'text-slate-400' : 'text-gray-600'
          }`}>
            Looks like this page got lost in our automation pipeline. 
            Let's get you back on track!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >
          <Link to={createPageUrl("Platform")}>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              🏠 Go Home
            </motion.button>
          </Link>
          
          <Link to={createPageUrl("Solutions")}>
            <motion.button
              className={`px-8 py-4 border-2 font-semibold rounded-xl transition-all duration-300 ${
                isDark 
                  ? 'border-slate-600 text-slate-300 hover:border-indigo-400 hover:text-indigo-400 hover:bg-slate-800' 
                  : 'border-gray-300 text-gray-700 hover:border-indigo-600 hover:text-indigo-600 hover:bg-gray-50'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Explore Solutions
            </motion.button>
          </Link>
        </motion.div>

        {/* Fun AI-themed message */}
        <motion.div
          variants={itemVariants}
          className="mt-12 p-6 rounded-2xl border border-dashed border-indigo-300 dark:border-indigo-600 bg-indigo-50/50 dark:bg-indigo-900/20"
        >
          <p className={`text-sm ${
            isDark ? 'text-slate-400' : 'text-gray-600'
          }`}>
            💡 <strong>Pro Tip:</strong> While you're here, did you know our AI can automate 80% of repetitive tasks? 
            <Link 
              to={createPageUrl("Platform")} 
              className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1"
            >
              Learn more →
            </Link>
          </p>
        </motion.div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl"
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
            className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"
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
      </motion.div>
    </div>
  );
}
