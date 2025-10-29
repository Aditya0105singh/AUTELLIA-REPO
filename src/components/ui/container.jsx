import React from 'react';
import { cn } from '@/lib/utils';

export function Container({
  className,
  children,
  as: Component = 'div',
  size = 'default',
  ...props
}) {
  const sizeClasses = {
    default: 'max-w-7xl',
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-[90rem]',
    full: 'max-w-full',
  };

  return (
    <Component
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

// Section component for consistent vertical spacing
export function Section({
  className,
  children,
  as: Component = 'section',
  size = 'default',
  ...props
}) {
  const sizeClasses = {
    default: 'py-12 md:py-16 lg:py-20',
    sm: 'py-8 md:py-12 lg:py-16',
    md: 'py-16 md:py-20 lg:py-24',
    lg: 'py-20 md:py-24 lg:py-32',
    xl: 'py-24 md:py-32 lg:py-40',
    none: 'py-0',
  };

  return (
    <Component
      className={cn(
        'relative',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

// Grid layout component
export function Grid({
  className,
  children,
  cols = 1,
  gap = 'default',
  ...props
}) {
  const gapClasses = {
    none: 'gap-0',
    xs: 'gap-2',
    sm: 'gap-4',
    default: 'gap-6',
    md: 'gap-8',
    lg: 'gap-10',
    xl: 'gap-12',
  };

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5',
    6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
  };

  return (
    <div
      className={cn(
        'grid',
        gridCols[cols],
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Flex container component
export function Flex({
  className,
  children,
  direction = 'row',
  align = 'start',
  justify = 'start',
  wrap = 'nowrap',
  gap = 'default',
  ...props
}) {
  const directionClasses = {
    row: 'flex-row',
    col: 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'col-reverse': 'flex-col-reverse',
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    baseline: 'items-baseline',
    stretch: 'items-stretch',
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  const wrapClasses = {
    nowrap: 'flex-nowrap',
    wrap: 'flex-wrap',
    'wrap-reverse': 'flex-wrap-reverse',
  };

  const gapClasses = {
    none: 'gap-0',
    xs: 'gap-2',
    sm: 'gap-4',
    default: 'gap-6',
    md: 'gap-8',
    lg: 'gap-10',
    xl: 'gap-12',
  };

  return (
    <div
      className={cn(
        'flex',
        directionClasses[direction],
        alignClasses[align],
        justifyClasses[justify],
        wrapClasses[wrap],
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Box component for consistent padding and margins
export function Box({
  className,
  children,
  p = 'default',
  px = null,
  py = null,
  m = null,
  mx = null,
  my = null,
  ...props
}) {
  const padding = {
    none: 'p-0',
    xs: 'p-2',
    sm: 'p-4',
    default: 'p-6',
    md: 'p-8',
    lg: 'p-10',
    xl: 'p-12',
  };

  const paddingX = {
    none: 'px-0',
    xs: 'px-2',
    sm: 'px-4',
    default: 'px-6',
    md: 'px-8',
    lg: 'px-10',
    xl: 'px-12',
  };

  const paddingY = {
    none: 'py-0',
    xs: 'py-2',
    sm: 'py-4',
    default: 'py-6',
    md: 'py-8',
    lg: 'py-10',
    xl: 'py-12',
  };

  const margin = {
    none: 'm-0',
    xs: 'm-2',
    sm: 'm-4',
    default: 'm-6',
    md: 'm-8',
    lg: 'm-10',
    xl: 'm-12',
  };

  const marginX = {
    none: 'mx-0',
    xs: 'mx-2',
    sm: 'mx-4',
    default: 'mx-6',
    md: 'mx-8',
    lg: 'mx-10',
    xl: 'mx-12',
  };

  const marginY = {
    none: 'my-0',
    xs: 'my-2',
    sm: 'my-4',
    default: 'my-6',
    md: 'my-8',
    lg: 'my-10',
    xl: 'my-12',
  };

  return (
    <div
      className={cn(
        p && !px && !py ? padding[p] : '',
        px ? paddingX[px] : '',
        py ? paddingY[py] : '',
        m ? margin[m] : '',
        mx ? marginX[mx] : '',
        my ? marginY[my] : '',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
