import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../src/contexts/ThemeContext.jsx';
import { Shield, Eye, Database, Lock, Users, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  const { isDark } = useTheme();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const sections = [
    {
      icon: Database,
      title: "1. Information We Collect",
      content: `We collect information you provide directly to us, such as when you:
      
      • Create an account or use our services
      • Contact us for support or inquiries
      • Subscribe to our newsletter or marketing communications
      • Participate in surveys or feedback forms
      
      This may include your name, email address, phone number, company information, and any other information you choose to provide.`
    },
    {
      icon: Eye,
      title: "2. How We Use Your Information",
      content: `We use the information we collect to:
      
      • Provide, maintain, and improve our services
      • Process transactions and send related information
      • Send technical notices, updates, security alerts, and support messages
      • Respond to your comments, questions, and customer service requests
      • Communicate with you about products, services, offers, and events
      • Monitor and analyze trends, usage, and activities in connection with our services`
    },
    {
      icon: Users,
      title: "3. Information Sharing",
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
      
      • With your explicit consent
      • To comply with legal obligations
      • To protect our rights, property, or safety
      • With service providers who assist us in operating our business
      • In connection with a merger, acquisition, or sale of assets`
    },
    {
      icon: Lock,
      title: "4. Data Security",
      content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
      
      • Encryption of data in transit and at rest
      • Regular security assessments and updates
      • Access controls and authentication procedures
      • Employee training on data protection practices`
    },
    {
      icon: Shield,
      title: "5. Your Rights",
      content: `You have the right to:
      
      • Access your personal information
      • Correct inaccurate or incomplete information
      • Delete your personal information
      • Object to processing of your information
      • Request data portability
      • Withdraw consent where processing is based on consent
      
      To exercise these rights, please contact us using the information provided below.`
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
                ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/25' 
                : 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-300/30'
            }`}>
              <Shield className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Privacy Policy
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-gray-600'
          }`}>
            Your privacy is important to us. Learn how we collect, use, and protect your information.
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
                      ? 'bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/30 hover:border-green-500/40 backdrop-blur-sm' 
                      : 'bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 hover:border-green-300/60 backdrop-blur-sm shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      isDark 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/25' 
                        : 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-300/30'
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

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className={`mt-12 p-8 rounded-2xl ${
              isDark 
                ? 'bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/30' 
                : 'bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 shadow-lg'
            }`}
          >
            <div className="flex items-start gap-6">
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                isDark 
                  ? 'bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg shadow-blue-500/25' 
                  : 'bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg shadow-blue-300/30'
              }`}>
                <Mail className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1">
                <h2 className={`text-2xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  6. Contact Us
                </h2>
                
                <p className={`text-lg leading-relaxed mb-4 ${
                  isDark ? 'text-slate-300' : 'text-gray-600'
                }`}>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                
                <div className={`p-4 rounded-lg ${
                  isDark ? 'bg-slate-700/30' : 'bg-gray-100'
                }`}>
                  <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Autellia Technology
                  </p>
                  <p className={isDark ? 'text-slate-300' : 'text-gray-600'}>
                    Email: autelliatechnology@gmail.com
                  </p>
                  <p className={`mt-2 text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                    We will respond to your inquiry within 30 days.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
