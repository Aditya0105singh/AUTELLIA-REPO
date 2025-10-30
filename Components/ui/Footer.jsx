import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../src/utils/index.js';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Heart, 
  Factory, 
  ShoppingCart,
  Linkedin,
  Youtube,
  Instagram,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const services = [
    { title: "Automation Consulting & Strategy", path: "AutomationConsulting" },
    { title: "BOT Development & Deployment", path: "BOTDevelopment" },
    { title: "AI/ML Model Training & Integration", path: "AIMLIntegration" },
    { title: "Business Process Optimization", path: "ProcessOptimization" },
    { title: "Data Analytics & Visualization", path: "DataAnalytics" },
    { title: "Intelligent Document Processing (IDP)", path: "DocumentProcessing" },
    { title: "Custom Software Development", path: "SoftwareDevelopment" },
    { title: "Cloud-based Automation & Migration", path: "CloudAutomation" },
    { title: "Support & Managed Services", path: "ManagedServices" }
  ];

  const perspectives = [
    { title: "Case Studies", path: "CaseStudies" },
    { title: "Call-to-Action", path: "CallToAction" },
    { title: "Blog/Knowledge Hub", path: "BlogKnowledgeHub" }
  ];

  const quickLinks = [
    { title: 'Platform', url: createPageUrl("Platform") },
    { title: 'Solutions', url: createPageUrl("Solutions") },
    { title: 'Our Perspectives', url: createPageUrl("Perspectives") },
<<<<<<< HEAD
    { title: 'Come Join Us', url: createPageUrl("Careers") }
=======
    { title: 'Careers', url: createPageUrl("Careers") }
>>>>>>> 701900e0615f169fd65c1cc2c725940a53784bb9
  ];

  const industries = [
    { title: 'Banking & Finance', icon: Building2 },
    { title: 'Healthcare', icon: Heart },
    { title: 'Manufacturing', icon: Factory },
    { title: 'Retail & E-commerce', icon: ShoppingCart }
  ];

  // Custom X (Twitter) icon component
  const XIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/company/autellia/', label: 'LinkedIn' },
    { icon: Youtube, url: 'https://www.youtube.com/@AutelliaTechnology', label: 'YouTube' },
    { icon: Instagram, url: 'https://www.instagram.com/autelliatechnology?igsh=MTF2eW5nYTJsbWRsNw==', label: 'Instagram' }
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Branding Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <motion.img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c29fb92fd_logocopy.jpg" 
              alt="Autellia Logo" 
              className="w-16 h-16 object-contain rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Autellia Technology
              </h2>
              <p className="text-gray-400 text-sm">Innovating the future of enterprise technology</p>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Services Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-white uppercase tracking-wide">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={createPageUrl(service.path)}
                    className="text-gray-400 hover:text-[#7c3aed] transition-all duration-300 text-sm leading-relaxed flex items-center group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-3 group-hover:bg-purple-400 transition-colors duration-300"></span>
                    {service.title
                      .replace('Automation Consulting & Strategy', 'Automation Consulting')
                      .replace('BOT Development & Deployment', 'BOT Development')
                      .replace('AI/ML Model Training & Integration', 'AI/ML Integration')
                      .replace('Business Process Optimization', 'Process Optimization')
                      .replace('Data Analytics & Visualization', 'Data Analytics')
                      .replace('Intelligent Document Processing (IDP)', 'Document Processing')
                      .replace('Custom Software Development', 'Software Development')
                      .replace('Cloud-based Automation & Migration', 'Cloud Automation')
                      .replace('Support & Managed Services', 'Managed Services')
                    }
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Perspectives Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-white uppercase tracking-wide">
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Our Perspectives</span>
            </h3>
            <ul className="space-y-4">
              {perspectives.map((perspective, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={createPageUrl(perspective.path)}
                    className="text-gray-400 hover:text-[#7c3aed] transition-all duration-300 text-sm leading-relaxed flex items-center group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors duration-300"></span>
                    {perspective.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-white uppercase tracking-wide">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Quick Links</span>
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={link.url}
                    className="text-gray-400 hover:text-[#7c3aed] transition-all duration-300 text-sm leading-relaxed flex items-center group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-3 group-hover:bg-indigo-400 transition-colors duration-300"></span>
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Industries Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-white uppercase tracking-wide">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Industries</span>
            </h3>
            <ul className="space-y-4">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <motion.li 
                    key={index} 
                    className="flex items-center space-x-3 group cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent className="w-4 h-4 text-gray-400 flex-shrink-0 group-hover:text-purple-400 transition-colors duration-300" />
                    <span className="text-gray-400 hover:text-[#7c3aed] transition-colors duration-300 text-sm leading-relaxed">
                      {industry.title}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Contact Information Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-white uppercase tracking-wide">
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">Contact Us</span>
            </h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0 group-hover:text-pink-400 transition-colors duration-300" />
                <a 
                  href="mailto:support@autellia.com"
                  className="text-gray-400 hover:text-[#7c3aed] transition-colors duration-300 text-sm leading-relaxed"
                >
                  support@autellia.com
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0 group-hover:text-pink-400 transition-colors duration-300" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  +91 8668365563
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 group-hover:text-pink-400 transition-colors duration-300" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Gurugram, Haryana, India
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Separator Line */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright and Legal Links */}
          <div className="text-center md:text-left space-y-2">
            <p className="text-gray-400 text-sm">
<<<<<<< HEAD
              2025 Autellia Technology. All Rights Reserved. Innovating the future of enterprise technology.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs">
              <Link 
                to={createPageUrl("TermsOfService")} 
=======
              © 2025 Autellia Technology. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs">
              <Link
                to={createPageUrl("TermsOfService")}
>>>>>>> 701900e0615f169fd65c1cc2c725940a53784bb9
                className="text-gray-500 hover:text-purple-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <span className="text-gray-600">•</span>
<<<<<<< HEAD
              <Link 
                to={createPageUrl("PrivacyPolicy")} 
=======
              <Link
                to={createPageUrl("PrivacyPolicy")}
>>>>>>> 701900e0615f169fd65c1cc2c725940a53784bb9
                className="text-gray-500 hover:text-purple-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

            {/* Social Media Icons */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-3 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 text-gray-400 hover:text-white transition-all duration-300 group backdrop-blur-sm"
                    aria-label={social.label}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      boxShadow: "0 10px 30px rgba(124, 58, 237, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <IconComponent className="w-8 h-8 relative z-10" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
