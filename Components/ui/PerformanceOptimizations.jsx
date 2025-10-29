import { memo, useMemo, useCallback, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

// Higher-order component for memoizing expensive components
export const withMemo = (Component) => {
  return memo(Component, (prevProps, nextProps) => {
    // Custom comparison logic if needed
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  });
};

// Virtualized list component for large datasets
export const VirtualizedList = ({ 
  items, 
  itemHeight = 100, 
  containerHeight = 400,
  renderItem,
  className = '' 
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(Math.ceil(containerHeight / itemHeight));

  const handleScroll = useCallback((e) => {
    const scrollTop = e.target.scrollTop;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = Math.min(
      newStartIndex + Math.ceil(containerHeight / itemHeight) + 1,
      items.length
    );
    
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  }, [itemHeight, containerHeight, items.length]);

  const visibleItems = useMemo(() => {
    return items.slice(startIndex, endIndex);
  }, [items, startIndex, endIndex]);

  const totalHeight = items.length * itemHeight;
  const offsetY = startIndex * itemHeight;

  return (
    <div 
      className={`overflow-auto ${className}`}
      style={{ height: containerHeight }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map((item, index) => (
            <div key={startIndex + index} style={{ height: itemHeight }}>
              {renderItem(item, startIndex + index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Debounced search input
export const DebouncedSearch = ({ 
  onSearch, 
  delay = 300, 
  placeholder = 'Search...', 
  className = '' 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, delay);

    return () => clearTimeout(timer);
  }, [searchTerm, delay]);

  useEffect(() => {
    if (onSearch) {
      onSearch(debouncedTerm);
    }
  }, [debouncedTerm, onSearch]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder={placeholder}
      className={`
        px-4 py-2 border border-gray-300 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
        dark:bg-gray-700 dark:border-gray-600 dark:text-white
        ${className}
      `}
    />
  );
};

// Lazy loading wrapper with fallback
export const LazyWrapper = ({ 
  children, 
  fallback = <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-32" />,
  className = '' 
}) => {
  return (
    <Suspense fallback={fallback}>
      <div className={className}>
        {children}
      </div>
    </Suspense>
  );
};

// Code splitting for heavy components
export const LazyComponents = {
  Chart: lazy(() => import('./Chart.jsx')),
  DataTable: lazy(() => import('./DataTable.jsx')),
  VideoPlayer: lazy(() => import('./VideoPlayer.jsx')),
  Map: lazy(() => import('./Map.jsx'))
};

// Optimized animation component
export const OptimizedMotion = memo(({ 
  children, 
  animation = 'fadeIn',
  duration = 0.6,
  delay = 0,
  className = '',
  ...props 
}) => {
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 }
    },
    slideLeft: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeIn;

  return (
    <motion.div
      className={className}
      initial={selectedAnimation.initial}
      animate={selectedAnimation.animate}
      exit={selectedAnimation.exit}
      transition={{ 
        duration, 
        delay,
        ease: 'easeOut'
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
});

// Performance monitoring hook
export const usePerformanceMonitor = (componentName) => {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      if (renderTime > 16) { // More than one frame at 60fps
        console.warn(`${componentName} took ${renderTime.toFixed(2)}ms to render`);
      }
    };
  });
};

// Intersection observer hook for performance
export const useIntersectionObserver = (
  elementRef,
  { threshold = 0.1, root = null, rootMargin = '0%' } = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin]);

  return isIntersecting;
};

// Optimized card component with intersection observer
export const OptimizedCard = memo(({ 
  title, 
  description, 
  image, 
  onClick,
  className = '' 
}) => {
  const cardRef = useRef();
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.2 });
  
  usePerformanceMonitor('OptimizedCard');

  return (
    <motion.div
      ref={cardRef}
      className={`
        bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer
        transition-transform duration-300 hover:scale-105
        ${className}
      `}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {image && isVisible && (
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
});

// Bundle size analyzer (development only)
export const BundleAnalyzer = () => {
  if (process.env.NODE_ENV !== 'development') return null;

  const analyzeBundle = () => {
    // This would integrate with webpack-bundle-analyzer or similar
    console.log('Bundle analysis would run here in development');
  };

  return (
    <button
      onClick={analyzeBundle}
      className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
    >
      Analyze Bundle
    </button>
  );
};
