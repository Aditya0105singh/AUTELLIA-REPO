import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Lazy loading image component with WebP support and blur placeholder
export const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  placeholder = 'blur',
  blurDataURL,
  priority = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imageSrc, setImageSrc] = useState(priority ? src : null);
  const imgRef = useRef();

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setImageSrc(src);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, priority, isInView]);

  // WebP format detection and fallback
  const getOptimizedSrc = (originalSrc) => {
    if (!originalSrc) return null;
    
    // Check if browser supports WebP
    const supportsWebP = () => {
      const canvas = document.createElement('canvas');
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    // Convert to WebP if supported and not already WebP
    if (supportsWebP() && !originalSrc.includes('.webp')) {
      return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    
    return originalSrc;
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = (e) => {
    // Fallback to original format if WebP fails
    if (e.target.src.includes('.webp')) {
      e.target.src = src;
    }
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Blur placeholder */}
      {placeholder === 'blur' && !isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
          style={{
            backgroundImage: blurDataURL ? `url(${blurDataURL})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(10px)',
            transform: 'scale(1.1)'
          }}
        />
      )}

      {/* Skeleton placeholder */}
      {placeholder === 'skeleton' && !isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
      )}

      {/* Main image */}
      {imageSrc && (
        <motion.img
          src={getOptimizedSrc(imageSrc)}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`
            absolute inset-0 w-full h-full object-cover transition-opacity duration-500
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 1.1
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          loading={priority ? 'eager' : 'lazy'}
          {...props}
        />
      )}

      {/* Loading indicator */}
      {isInView && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

// Progressive image component with multiple sizes
export const ProgressiveImage = ({ 
  srcSet, 
  sizes, 
  alt, 
  className = '',
  lowQualitySrc,
  ...props 
}) => {
  const [currentSrc, setCurrentSrc] = useState(lowQualitySrc);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    
    if (srcSet) {
      img.srcset = srcSet;
      img.sizes = sizes;
    }
    
    img.onload = () => {
      setCurrentSrc(img.src);
      setIsLoaded(true);
    };
    
    // Start loading the high-quality image
    if (srcSet) {
      const highQualitySrc = srcSet.split(',')[0].split(' ')[0];
      img.src = highQualitySrc;
    }
  }, [srcSet, sizes]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Low quality placeholder */}
      {lowQualitySrc && (
        <img
          src={lowQualitySrc}
          alt={alt}
          className={`
            absolute inset-0 w-full h-full object-cover transition-opacity duration-500
            ${isLoaded ? 'opacity-0' : 'opacity-100'}
          `}
          style={{ filter: 'blur(5px)', transform: 'scale(1.05)' }}
        />
      )}

      {/* High quality image */}
      <motion.img
        src={currentSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className={`
          absolute inset-0 w-full h-full object-cover transition-opacity duration-500
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        {...props}
      />
    </div>
  );
};

// Image gallery with lazy loading
export const ImageGallery = ({ images, className = '' }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="aspect-square cursor-pointer rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(image)}
          >
            <LazyImage
              src={image.src}
              alt={image.alt}
              className="w-full h-full"
              placeholder="blur"
              blurDataURL={image.blurDataURL}
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          />
          
          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </motion.div>
      )}
    </>
  );
};
