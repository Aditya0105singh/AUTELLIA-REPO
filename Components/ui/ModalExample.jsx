import React from 'react';
import { Modal, ModalTrigger, ModalBody, ModalContent, ModalFooter } from './Modal';
import { useTheme } from '../../src/contexts/ThemeContext';
import { cn } from '../../src/lib/utils';

const ModalExample = () => {
  const { isDark } = useTheme();

  return (
    <div className="flex flex-col gap-4 p-8">
      <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
        isDark ? 'text-[--text-primary]' : 'text-gray-900'
      }`}>
        Modal Examples
      </h2>

      {/* Basic Modal Example */}
      <Modal>
        <ModalTrigger className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
          Open Basic Modal
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
              isDark ? 'text-[--text-primary]' : 'text-gray-900'
            }`}>
              Welcome to Autellia
            </h3>
            <p className={`text-base leading-relaxed mb-6 transition-colors duration-300 ${
              isDark ? 'text-[--text-muted]' : 'text-gray-600'
            }`}>
              This is a beautiful modal component with smooth animations and theme support. 
              It automatically adapts to your light/dark theme preferences and provides 
              a great user experience with backdrop blur and spring animations.
            </p>
            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                Get Started
              </button>
              <button className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                isDark 
                  ? 'border-[--border] text-[--text-muted] hover:bg-[--surface]' 
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}>
                Learn More
              </button>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>

      {/* Contact Form Modal Example */}
      <Modal>
        <ModalTrigger className={`border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 ${
          isDark ? 'hover:bg-purple-600' : 'hover:bg-purple-600'
        }`}>
          Contact Us
        </ModalTrigger>
        <ModalBody className="md:max-w-[500px]">
          <ModalContent>
            <h3 className={`text-xl font-semibold mb-6 transition-colors duration-300 ${
              isDark ? 'text-[--text-primary]' : 'text-gray-900'
            }`}>
              Get in Touch
            </h3>
            <form className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDark ? 'text-[--text-primary]' : 'text-gray-700'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  className={cn(
                    "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300",
                    isDark 
                      ? "bg-[--panel] border-[--border] text-[--text-primary]" 
                      : "bg-white border-gray-300 text-gray-900"
                  )}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDark ? 'text-[--text-primary]' : 'text-gray-700'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  className={cn(
                    "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300",
                    isDark 
                      ? "bg-[--panel] border-[--border] text-[--text-primary]" 
                      : "bg-white border-gray-300 text-gray-900"
                  )}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDark ? 'text-[--text-primary]' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  rows={4}
                  className={cn(
                    "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none",
                    isDark 
                      ? "bg-[--panel] border-[--border] text-[--text-primary]" 
                      : "bg-white border-gray-300 text-gray-900"
                  )}
                  placeholder="Tell us about your project..."
                />
              </div>
            </form>
          </ModalContent>
          <ModalFooter>
            <div className="flex gap-3">
              <button className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                isDark 
                  ? 'border-[--border] text-[--text-muted] hover:bg-[--surface]' 
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}>
                Cancel
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                Send Message
              </button>
            </div>
          </ModalFooter>
        </ModalBody>
      </Modal>

      {/* Service Details Modal Example */}
      <Modal>
        <ModalTrigger className={`text-left p-4 border rounded-lg transition-all duration-300 hover:shadow-lg ${
          isDark 
            ? 'border-[--border] bg-[--surface] hover:border-[--accent]/50' 
            : 'border-gray-200 bg-white hover:border-purple-300'
        }`}>
          <div>
            <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
              isDark ? 'text-[--text-primary]' : 'text-gray-900'
            }`}>
              AI/ML Integration
            </h4>
            <p className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-[--text-muted]' : 'text-gray-600'
            }`}>
              Click to learn more about our AI/ML services
            </p>
          </div>
        </ModalTrigger>
        <ModalBody className="md:max-w-[600px]">
          <ModalContent>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                isDark 
                  ? 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-[--border]' 
                  : 'bg-gradient-to-br from-purple-100 to-indigo-100 border border-purple-200'
              }`}>
                <svg className={`w-6 h-6 transition-colors duration-300 ${
                  isDark ? 'text-[--accent]' : 'text-purple-600'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                  isDark ? 'text-[--text-primary]' : 'text-gray-900'
                }`}>
                  AI/ML Model Training & Integration
                </h3>
              </div>
            </div>
            
            <p className={`text-base leading-relaxed mb-4 transition-colors duration-300 ${
              isDark ? 'text-[--text-muted]' : 'text-gray-700'
            }`}>
              We develop and deploy custom AI/ML models tailored to your business needs, including predictive analytics, 
              natural language processing, computer vision, and generative AI solutions.
            </p>
            
            <p className={`text-base leading-relaxed mb-6 transition-colors duration-300 ${
              isDark ? 'text-[--text-muted]' : 'text-gray-600'
            }`}>
              Our team leverages cutting-edge frameworks like TensorFlow, PyTorch, and Hugging Face to create 
              intelligent systems that can analyze data, make predictions, and automate complex decision-making processes.
            </p>

            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                Schedule Consultation
              </button>
              <button className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                isDark 
                  ? 'border-[--border] text-[--text-muted] hover:bg-[--surface]' 
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}>
                View Portfolio
              </button>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalExample;
