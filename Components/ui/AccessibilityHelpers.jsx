import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Skip to content link for keyboard navigation
export const SkipToContent = ({ targetId = 'main-content' }) => {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-lg z-50 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Skip to main content
    </a>
  );
};

// Accessible button with proper ARIA attributes
export const AccessibleButton = ({ 
  children, 
  onClick, 
  disabled = false,
  ariaLabel,
  ariaDescribedBy,
  className = '',
  variant = 'primary',
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500'
  };

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Accessible form input with proper labeling
export const AccessibleInput = ({ 
  label, 
  id, 
  error, 
  helperText, 
  required = false,
  type = 'text',
  className = '',
  ...props 
}) => {
  const errorId = error ? `${id}-error` : undefined;
  const helperId = helperText ? `${id}-helper` : undefined;
  const describedBy = [errorId, helperId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={className}>
      <label 
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
      </label>
      
      <input
        id={id}
        type={type}
        required={required}
        aria-describedby={describedBy}
        aria-invalid={error ? 'true' : 'false'}
        className={`
          block w-full px-3 py-2 border rounded-lg shadow-sm
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
          ${error 
            ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' 
            : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
          }
        `}
        {...props}
      />
      
      {helperText && (
        <p id={helperId} className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      )}
      
      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

// Accessible modal with focus management
export const AccessibleModal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  className = '' 
}) => {
  const [previousFocus, setPreviousFocus] = useState(null);

  useEffect(() => {
    if (isOpen) {
      // Store the previously focused element
      setPreviousFocus(document.activeElement);
      
      // Focus the modal
      const modal = document.getElementById('modal-content');
      if (modal) modal.focus();
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Restore focus and scroll
      if (previousFocus) previousFocus.focus();
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, previousFocus]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <motion.div
          id="modal-content"
          className={`
            relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6
            focus:outline-none focus:ring-2 focus:ring-indigo-500
            ${className}
          `}
          tabIndex={-1}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Title */}
          {title && (
            <h2 id="modal-title" className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {title}
            </h2>
          )}
          
          {/* Content */}
          {children}
        </motion.div>
      </div>
    </div>
  );
};

// Screen reader only text
export const ScreenReaderOnly = ({ children }) => {
  return (
    <span className="sr-only">
      {children}
    </span>
  );
};

// Focus trap for modals and dropdowns
export const FocusTrap = ({ children, active = true }) => {
  useEffect(() => {
    if (!active) return;

    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = document.querySelector('[role="dialog"]');
    if (!modal) return;

    const firstFocusableElement = modal.querySelector(focusableElements);
    const focusableContent = modal.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1];

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [active]);

  return <>{children}</>;
};
