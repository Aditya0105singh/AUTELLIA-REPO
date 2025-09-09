import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../src/contexts/ThemeContext';
import { cn } from '../../src/lib/utils';
import { Send, User, Mail, MessageSquare, X } from 'lucide-react';

const ExploreSolutionModal = ({ triggerText = "Explore Solutions", triggerClassName = "" }) => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const services = [
    'General Inquiry',
    'Automation Consulting & Strategy',
    'BOT Development & Deployment',
    'AI/ML Model Training & Integration',
    'Business Process Optimization',
    'Data Analytics & Visualization',
    'Intelligent Document Processing',
    'Custom Software Development',
    'Cloud-based Automation & Migration',
    'Support & Managed Services'
  ];

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={openModal}
        className={cn(
          "group relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-indigo-700 transform hover:-translate-y-0.5",
          triggerClassName
        )}
      >
        <span className="relative z-10 flex items-center gap-2">
          {triggerText}
          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed [perspective:800px] [transform-style:preserve-3d] inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{
                opacity: 0,
                scale: 0.5,
                rotateX: 40,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                rotateX: 10,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 15,
              }}
              className={cn(
                "relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl transition-colors duration-300",
                isDark ? "bg-[--surface] border border-[--border]" : "bg-white border border-gray-200"
              )}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className={cn(
                "absolute top-4 right-4 z-10 p-1 rounded-full transition-colors duration-200 hover:bg-gray-100",
                isDark ? "text-[--text-primary] hover:bg-[--panel]" : "text-gray-500 hover:bg-gray-100"
              )}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className={`px-8 py-6 border-b transition-colors duration-300 ${
              isDark ? 'border-[--border]' : 'border-gray-200'
            }`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                    isDark ? 'text-[--text-primary]' : 'text-gray-900'
                  }`}>
                    Explore Our Solutions
                  </h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-[--text-muted]' : 'text-gray-600'
                  }`}>
                    Tell us about your project and we'll get back to you within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="px-8 py-6">
              <form 
                action="https://formsubmit.co/adityasingh01517@gmail.com" 
                method="POST" 
                className="space-y-6"
              >
                {/* Hidden FormSubmit fields */}
                <input type="hidden" name="_subject" value="New Explore Solution Request from Autellia Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://autellia.com/thank-you" />
                
                {/* Service Selection */}
                <div>
                  <label className={`flex items-center gap-2 text-sm font-medium mb-3 transition-colors duration-300 ${
                    isDark ? 'text-[--text-primary]' : 'text-gray-700'
                  }`}>
                    <MessageSquare className="w-4 h-4" />
                    Service Interest
                  </label>
                  <select
                    name="service"
                    required
                    className={cn(
                      "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300",
                      isDark 
                        ? "bg-[--panel] border-[--border] text-[--text-primary]" 
                        : "bg-white border-gray-300 text-gray-900"
                    )}
                  >
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name Field */}
                <div>
                  <label className={`flex items-center gap-2 text-sm font-medium mb-3 transition-colors duration-300 ${
                    isDark ? 'text-[--text-primary]' : 'text-gray-700'
                  }`}>
                    <User className="w-4 h-4" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className={cn(
                      "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300",
                      isDark 
                        ? "bg-[--panel] border-[--border] text-[--text-primary] placeholder-[--text-muted]" 
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    )}
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className={`flex items-center gap-2 text-sm font-medium mb-3 transition-colors duration-300 ${
                    isDark ? 'text-[--text-primary]' : 'text-gray-700'
                  }`}>
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className={cn(
                      "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300",
                      isDark 
                        ? "bg-[--panel] border-[--border] text-[--text-primary] placeholder-[--text-muted]" 
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    )}
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className={`flex items-center gap-2 text-sm font-medium mb-3 transition-colors duration-300 ${
                    isDark ? 'text-[--text-primary]' : 'text-gray-700'
                  }`}>
                    <MessageSquare className="w-4 h-4" />
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className={cn(
                      "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none",
                      isDark 
                        ? "bg-[--panel] border-[--border] text-[--text-primary] placeholder-[--text-muted]" 
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    )}
                    placeholder="Tell us about your project, current challenges, and what you're looking to achieve..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transform hover:-translate-y-0.5 text-white"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </div>

                {/* Footer Note */}
                <p className={`text-xs text-center transition-colors duration-300 ${
                  isDark ? 'text-[--text-muted]' : 'text-gray-500'
                }`}>
                  By submitting this form, you agree to our privacy policy. We'll only use your information to respond to your inquiry.
                </p>
              </form>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExploreSolutionModal;
