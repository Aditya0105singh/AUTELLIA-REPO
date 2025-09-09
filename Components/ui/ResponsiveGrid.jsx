import { motion } from 'framer-motion';
import { useTheme } from '../../src/contexts/ThemeContext.jsx';

// Responsive grid component for cards, events, jobs, etc.
export const ResponsiveGrid = ({ 
  children, 
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 6,
  className = '',
  ...props 
}) => {
  const gridClasses = `
    grid gap-${gap}
    grid-cols-${columns.mobile}
    md:grid-cols-${columns.tablet}
    lg:grid-cols-${columns.desktop}
    ${className}
  `;

  return (
    <div className={gridClasses} {...props}>
      {children}
    </div>
  );
};

// Enhanced service card with glassmorphism and micro-interactions
export const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  features = [],
  onClick,
  className = '' 
}) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      className={`
        group relative p-8 rounded-2xl border cursor-pointer
        transition-all duration-500 transform-gpu
        ${isDark 
          ? 'bg-slate-800/50 border-slate-700/50 hover:border-indigo-500/50' 
          : 'bg-white/80 border-gray-200/50 hover:border-indigo-300/50'
        }
        backdrop-blur-sm hover:shadow-2xl
        ${className}
      `}
      onClick={onClick}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        rotateX: 5,
        rotateY: 5
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Gradient background overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: isDark 
            ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)'
            : 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)'
        }}
      />

      {/* Icon */}
      <motion.div 
        className="mb-6 relative z-10"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
          isDark 
            ? 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20' 
            : 'bg-gradient-to-br from-indigo-100 to-purple-100'
        }`}>
          {icon}
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
          isDark ? 'text-white group-hover:text-indigo-300' : 'text-gray-900 group-hover:text-indigo-600'
        }`}>
          {title}
        </h3>
        
        <p className={`text-sm leading-relaxed mb-6 ${
          isDark ? 'text-slate-400' : 'text-gray-600'
        }`}>
          {description}
        </p>

        {/* Features list */}
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className={`text-sm flex items-center ${
                  isDark ? 'text-slate-300' : 'text-gray-700'
                }`}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>
        )}
      </div>

      {/* Hover arrow */}
      <motion.div
        className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: -10 }}
        whileHover={{ x: 0 }}
      >
        <svg 
          className={`w-5 h-5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

// Testimonial card with enhanced animations
export const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  company, 
  avatar,
  rating = 5,
  className = '' 
}) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      className={`
        relative p-8 rounded-2xl border backdrop-blur-sm
        ${isDark 
          ? 'bg-slate-800/30 border-slate-700/50' 
          : 'bg-white/60 border-gray-200/50'
        }
        shadow-lg hover:shadow-2xl transition-all duration-500
        ${className}
      `}
      whileHover={{ y: -4, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Quote icon */}
      <div className="absolute top-6 right-6 opacity-20">
        <svg className="w-8 h-8 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
      </div>

      {/* Rating stars */}
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <motion.svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className={`text-lg leading-relaxed mb-6 ${
        isDark ? 'text-slate-300' : 'text-gray-700'
      }`}>
        "{quote}"
      </blockquote>

      {/* Author info */}
      <div className="flex items-center">
        {avatar && (
          <img 
            src={avatar} 
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div>
          <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {author}
          </div>
          <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
            {role} at {company}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Stats card with animated numbers
export const StatsCard = ({ 
  number, 
  label, 
  suffix = '', 
  prefix = '',
  icon,
  color = 'indigo',
  className = '' 
}) => {
  const { isDark } = useTheme();
  
  const colors = {
    indigo: 'from-indigo-500 to-purple-600',
    emerald: 'from-emerald-500 to-teal-600',
    orange: 'from-orange-500 to-red-600',
    blue: 'from-blue-500 to-cyan-600'
  };

  return (
    <motion.div
      className={`
        relative p-6 rounded-2xl border backdrop-blur-sm text-center
        ${isDark 
          ? 'bg-slate-800/30 border-slate-700/50' 
          : 'bg-white/60 border-gray-200/50'
        }
        shadow-lg hover:shadow-2xl transition-all duration-500
        ${className}
      `}
      whileHover={{ y: -4, scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Icon */}
      {icon && (
        <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${colors[color]} flex items-center justify-center text-white`}>
          {icon}
        </div>
      )}

      {/* Animated number */}
      <motion.div
        className={`text-3xl font-bold mb-2 bg-gradient-to-r ${colors[color]} bg-clip-text text-transparent`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
      >
        {prefix}{number}{suffix}
      </motion.div>

      {/* Label */}
      <div className={`text-sm font-medium ${
        isDark ? 'text-slate-400' : 'text-gray-600'
      }`}>
        {label}
      </div>
    </motion.div>
  );
};
