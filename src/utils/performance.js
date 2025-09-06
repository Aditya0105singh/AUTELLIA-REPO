// Performance optimization utilities

/**
 * Debounce function to limit the rate of function execution
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @param {boolean} immediate - Execute immediately on first call
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait, immediate = false) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

/**
 * Throttle function to limit function execution frequency
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Lazy load images with intersection observer
 * @param {string} selector - CSS selector for images to lazy load
 * @param {Object} options - Intersection observer options
 */
export const lazyLoadImages = (selector = 'img[data-src]', options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '50px 0px',
    ...options
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  }, defaultOptions);

  const images = document.querySelectorAll(selector);
  images.forEach(img => imageObserver.observe(img));
};

/**
 * Preload critical resources
 * @param {Array} resources - Array of resource URLs to preload
 * @param {string} type - Resource type (image, script, style, font)
 */
export const preloadResources = (resources = [], type = 'image') => {
  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = type;
    if (type === 'font') {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

/**
 * Optimize animations for reduced motion preference
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} Whether to reduce motion
 */
export const shouldReduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get optimal image format based on browser support
 * @param {string} baseUrl - Base URL without extension
 * @returns {string} Optimal image URL with format
 */
export const getOptimalImageFormat = (baseUrl) => {
  const supportsWebP = () => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  };

  const supportsAVIF = () => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  };

  if (supportsAVIF()) {
    return `${baseUrl}.avif`;
  } else if (supportsWebP()) {
    return `${baseUrl}.webp`;
  } else {
    return `${baseUrl}.jpg`;
  }
};

/**
 * Measure and report Core Web Vitals
 */
export const measureWebVitals = () => {
  // Largest Contentful Paint (LCP)
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log('LCP:', lastEntry.startTime);
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // First Input Delay (FID)
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
      console.log('FID:', entry.processingStart - entry.startTime);
    });
  }).observe({ entryTypes: ['first-input'] });

  // Cumulative Layout Shift (CLS)
  let clsValue = 0;
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    console.log('CLS:', clsValue);
  }).observe({ entryTypes: ['layout-shift'] });
};

/**
 * Optimize scroll performance
 * @param {Function} callback - Scroll callback function
 * @param {number} delay - Throttle delay in milliseconds
 * @returns {Function} Optimized scroll handler
 */
export const optimizeScroll = (callback, delay = 16) => {
  return throttle(callback, delay);
};

/**
 * Detect if user is on a slow connection
 * @returns {boolean} Whether connection is slow
 */
export const isSlowConnection = () => {
  if ('connection' in navigator) {
    const connection = navigator.connection;
    return connection.effectiveType === 'slow-2g' || 
           connection.effectiveType === '2g' ||
           connection.saveData;
  }
  return false;
};

/**
 * Load script dynamically with error handling
 * @param {string} src - Script source URL
 * @param {Object} options - Loading options
 * @returns {Promise} Promise that resolves when script loads
 */
export const loadScript = (src, options = {}) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = options.async !== false;
    script.defer = options.defer || false;
    
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    
    document.head.appendChild(script);
  });
};

/**
 * Critical CSS inlining utility
 * @param {string} css - Critical CSS string
 */
export const inlineCriticalCSS = (css) => {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
};
