import React from 'react';

/**
 * Responsive grid component with mobile-first design
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.className - Additional CSS classes
 * @param {number|Object} props.columns - Number of columns or responsive object
 * @param {string} props.gap - Gap size (xs, sm, md, lg, xl)
 * @param {string} props.align - Alignment (start, center, end, stretch)
 */
const ResponsiveGrid = ({ 
  children, 
  className = '', 
  columns = { xs: 1, sm: 2, md: 3, lg: 4 },
  gap = 'md',
  align = 'stretch',
  ...props 
}) => {
  const gapClasses = {
    xs: 'gap-2',
    sm: 'gap-3 sm:gap-4',
    md: 'gap-4 sm:gap-6 lg:gap-8',
    lg: 'gap-6 sm:gap-8 lg:gap-10',
    xl: 'gap-8 sm:gap-10 lg:gap-12'
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center', 
    end: 'items-end',
    stretch: 'items-stretch'
  };

  // Handle both number and object column definitions
  const getColumnClasses = () => {
    if (typeof columns === 'number') {
      return `grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns}`;
    }

    const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];
    let classes = [];

    breakpoints.forEach(bp => {
      if (columns[bp]) {
        const prefix = bp === 'xs' ? '' : `${bp}:`;
        classes.push(`${prefix}grid-cols-${columns[bp]}`);
      }
    });

    return classes.join(' ');
  };

  const baseClasses = [
    'grid',
    getColumnClasses(),
    gapClasses[gap],
    alignClasses[align],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;
