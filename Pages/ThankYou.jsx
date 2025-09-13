import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../src/contexts/ThemeContext.jsx';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../src/utils/index.js';
import { CheckCircle, ArrowLeft, Mail, Calendar, Users } from 'lucide-react';

const ThankYou = () => {
  const { isDark } = useTheme();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const nextSteps = [
    {
      icon: Mail,
      title: "Check Your Email",
      description: "We've sent you a confirmation with all the details of your inquiry."
    },
    {
      icon: Calendar,
      title: "Schedule Follow-up",
      description: "Our team will reach out within 24 hours to schedule your consultation."
    },
    {
      icon: Users,
      title: "Meet Our Experts",
      description: "Connect with our AI and automation specialists to discuss your needs."
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
        className="pt-32 pb-20 px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ${
              isDark 
                ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/25' 
                : 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-300/30'
            }`}>
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Thank You!
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-xl md:text-2xl mb-8 leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-gray-600'
            }`}
          >
            Your inquiry has been successfully submitted. We're excited to help transform your business with AI and intelligent automation.
          </motion.p>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link 
              to={createPageUrl("Platform")}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25' 
                  : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg shadow-indigo-300/30'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Next Steps Section */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              What Happens Next?
            </h2>
            <p className={`text-lg ${
              isDark ? 'text-slate-300' : 'text-gray-600'
            }`}>
              Here's what you can expect from our team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nextSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className={`text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/30 hover:border-indigo-500/40 backdrop-blur-sm' 
                      : 'bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 hover:border-indigo-300/60 backdrop-blur-sm shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                    isDark 
                      ? 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25' 
                      : 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-300/30'
                  }`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {step.title}
                  </h3>
                  
                  <p className={`leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-gray-600'
                  }`}>
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="pb-20 px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className={`text-center p-8 rounded-2xl ${
            isDark 
              ? 'bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/30' 
              : 'bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 shadow-lg'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Need Immediate Assistance?
            </h3>
            
            <p className={`text-lg mb-6 ${
              isDark ? 'text-slate-300' : 'text-gray-600'
            }`}>
              Feel free to reach out to us directly
            </p>
            
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
              isDark ? 'bg-slate-700/30' : 'bg-gray-100'
            }`}>
              <Mail className="w-5 h-5 text-indigo-500" />
              <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                autelliatechnology@gmail.com
              </span>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ThankYou;
