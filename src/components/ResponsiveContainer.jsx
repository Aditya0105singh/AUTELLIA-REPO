import React from 'react';

/**
 * Responsive container component with consistent spacing and breakpoints
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.size - Container size variant (sm, md, lg, xl, full)
 * @param {boolean} props.centered - Whether to center content
 * @param {string} props.padding - Padding variant (none, sm, md, lg, xl)
 */
const ResponsiveContainer = ({ 
  children, 
  className = '', 
  size = 'lg',
  centered = true,
  padding = 'md',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl', 
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };

  const paddingClasses = {
    none: 'px-0',
    sm: 'px-2 sm:px-4',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12',
    xl: 'px-8 sm:px-12 lg:px-16'
  };

  const baseClasses = [
    'w-full',
    sizeClasses[size],
    paddingClasses[padding],
    centered ? 'mx-auto' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;
