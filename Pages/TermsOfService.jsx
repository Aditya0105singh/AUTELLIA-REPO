import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../src/contexts/ThemeContext.jsx';
import { FileText, Shield, Users, AlertCircle } from 'lucide-react';

const TermsOfService = () => {
  const { isDark } = useTheme();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const sections = [
    {
      icon: FileText,
      title: "1. Acceptance of Terms",
      content: `By accessing and using Autellia Technology's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      icon: Users,
      title: "2. Use License",
      content: `Permission is granted to temporarily download one copy of the materials on Autellia Technology's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
      
      • Modify or copy the materials
      • Use the materials for any commercial purpose or for any public display
      • Attempt to reverse engineer any software contained on the website
      • Remove any copyright or other proprietary notations from the materials`
    },
    {
      icon: Shield,
      title: "3. Disclaimer",
      content: `The materials on Autellia Technology's website are provided on an 'as is' basis. Autellia Technology makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.`
    },
    {
      icon: AlertCircle,
      title: "4. Limitations",
      content: `In no event shall Autellia Technology or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Autellia Technology's website, even if Autellia Technology or an authorized representative has been notified orally or in writing of the possibility of such damage.`
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-[--bg] text-[--text-primary]' : 'bg-white text-gray-900'
    }`}>
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="pt-32 pb-16 px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 ${
              isDark 
                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25' 
                : 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-300/30'
            }`}>
              <FileText className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Terms of Service
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-gray-600'
          }`}>
            Please read these terms carefully before using our services
          </p>
          
          <div className={`inline-flex items-center px-4 py-2 rounded-lg text-sm ${
            isDark 
              ? 'bg-slate-800/50 text-slate-300 border border-slate-700/50' 
              : 'bg-gray-100 text-gray-600 border border-gray-200'
          }`}>
            Last updated: January 2025
          </div>
        </div>
      </motion.section>

      {/* Content Sections */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-2xl transition-all duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/30 hover:border-indigo-500/40 backdrop-blur-sm' 
                      : 'bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 hover:border-indigo-300/60 backdrop-blur-sm shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      isDark 
                        ? 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25' 
                        : 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-300/30'
                    }`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h2 className={`text-2xl font-bold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {section.title}
                      </h2>
                      
                      <div className={`text-lg leading-relaxed whitespace-pre-line ${
                        isDark ? 'text-slate-300' : 'text-gray-600'
                      }`}>
                        {section.content}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className={`mt-12 p-8 rounded-2xl ${
              isDark 
                ? 'bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/30' 
                : 'bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 shadow-lg'
            }`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              5. Contact Information
            </h2>
            
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-gray-600'
            }`}>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            
            <div className={`mt-4 p-4 rounded-lg ${
              isDark ? 'bg-slate-700/30' : 'bg-gray-100'
            }`}>
              <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Autellia Technology
              </p>
              <p className={isDark ? 'text-slate-300' : 'text-gray-600'}>
                Email: autelliatechnology@gmail.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
