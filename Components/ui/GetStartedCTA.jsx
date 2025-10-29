import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { useTheme } from '../../src/contexts/ThemeContext';

const GetStartedCTA = () => {
  const { isDark } = useTheme();

  return (
    <section className={`relative py-20 overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-blue-500 to-transparent"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`relative rounded-2xl p-8 md:p-12 overflow-hidden ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800' : 'bg-white border border-gray-100 shadow-xl'}`}
        >
          {/* Glow effect */}
          <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-10 blur-xl`}></div>
          
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Ready to get started?
                </h2>
                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Explore our solutions and discover how we can transform your business processes with intelligent automation.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center">
                <motion.a
                  whileHover={{ y: -2, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  whileTap={{ scale: 0.98 }}
                  href="/contact"
                  className={`flex items-center justify-center px-6 py-3.5 rounded-lg font-medium text-lg transition-all duration-300 ${
                    isDark 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
                  }`}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Get in Touch
                </motion.a>
                
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="/demo"
                  className={`flex items-center justify-center px-6 py-3.5 rounded-lg font-medium text-lg transition-all duration-300 ${
                    isDark 
                      ? 'bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-900/20' 
                      : 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  Request a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedCTA;
