import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './src/utils/index.js';
import VantaDots from './Components/ui/VantaDots.jsx';
import { useTheme } from './src/contexts/ThemeContext.jsx';
import ThemeToggle from './Components/ui/ThemeToggle.jsx';
import ExploreSolutionModal from './Components/ui/ExploreSolutionModal.jsx';
import { BackgroundBeams } from './Components/ui/background-beams.jsx';
 
import {
  Navbar as MotionNavbar,
  NavBody as MotionNavBody,
  MobileNav as MotionMobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "./Components/ui/navbar-motion.jsx";
// Basic navbar without animations

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const { isDark } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Enhanced scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 10;
      
      // Set scrolled state for background change
      setIsScrolled(currentScrollY > scrollThreshold);
      
      // Hide/show header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderHidden(true);
      } else {
        setIsHeaderHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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

  const navigationItems = [
    { title: "Platform", url: createPageUrl("Platform") },
    { title: "Solutions", hasDropdown: true, dropdownItems: services },
    { title: "Our Perspectives", hasDropdown: true, dropdownItems: perspectives },
    { title: "Come Join Us", url: createPageUrl("Careers") },
    { title: "Book a Demo", url: createPageUrl("Demo"), isButton: true },
  ];

  // Routes where background beams should appear
  const beamsRoutes = new Set([
    "/",
    "/platform",
    "/solutions",
    "/perspectives",
    "/demo",
  ]);
  const showBeams = beamsRoutes.has(location.pathname);

  useEffect(() => {
    // Chat widget script
    const chatScript = document.createElement('script');
    chatScript.src = "https://automatic.chat/embed.js";
    chatScript.async = true;
    chatScript.id = 'cmeygesdy00kmeep6iqegyw98';
    chatScript.setAttribute('open', 'true');
    chatScript.setAttribute('openDelay', '5000');
    document.body.appendChild(chatScript);

    // Cal.com booking script
    const calScript = document.createElement('script');
    calScript.src = "https://app.cal.com/embed/embed.js";
    calScript.async = true;
    calScript.id = 'cal-embed-script';
    calScript.onload = () => {
      console.log('Cal.com script loaded successfully');
    };
    calScript.onerror = () => {
      console.error('Failed to load Cal.com script');
    };
    document.head.appendChild(calScript);

    return () => {
      const existingChatScript = document.getElementById('cmeygesdy00kmeep6iqegyw98');
      if (existingChatScript) document.body.removeChild(existingChatScript);
      
      const existingCalScript = document.getElementById('cal-embed-script');
      if (existingCalScript) document.head.removeChild(existingCalScript);
    };
  }, []);


  const headerVariants = {
    visible: { y: 0, transition: { type: 'spring', stiffness: 500, damping: 40 } },
    hidden: { y: -60, transition: { type: 'tween', duration: 0.25 } }
  };

  const mobileMenuVariants = {
    initial: { height: 0, opacity: 0 },
    animate: { height: 'auto', opacity: 1, transition: { duration: 0.25 } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.2 } }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.2 } }
  };

  // Cal.com booking handler
  const handleBookDemo = () => {
    const calUrl = 'https://cal.com/autellia-technology-43lknv';
    window.open(calUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <style>{`
        :root {
          --bg: #0A0F19;              /* deep navy/black */
          --surface: #1A2332;         /* lighter surface */
          --panel: #242B3D;           /* lighter panel background */
          --text-primary: #f0f4f8;    /* near-white for body headings */
          --text-muted: #b8c5d1;      /* lighter muted text */
          --accent: #4169E1;          /* Royal Blue */
          --accent-variant: #3a5cc7;  /* hover / darker accent */
          --secondary-accent: #DAA520; /* Soft Gold */
          --border: rgba(255,255,255,0.12);
          --shadow: 0 12px 32px rgba(2,6,23,0.7);
          /* Sticky scroll section colors */
          --scroll-color-1: #2D4A7C;  /* Deep Blue */
          --scroll-color-2: #1E3A5F;  /* Navy Blue */
          --scroll-color-3: #3B5998;  /* Royal Blue */
          --scroll-color-4: #4A6FA5;  /* Light Blue */
        }
        body {
          background-color: var(--bg);
        }
        /* Modern button with gradient border animation */
        .border-magic {
          position: relative;
          display: inline-flex;
          height: 3rem;
          overflow: hidden;
          border-radius: 12px;
          padding: 1px;
          background: var(--gradient-primary);
        }
        .border-magic:focus {
          outline: none;
          box-shadow: 0 0 0 2px var(--accent-light), 0 0 0 4px rgba(99, 102, 241, 0.1);
        }
        .border-magic::before {
          content: '';
          position: absolute;
          inset: -1000%;
          animation: spin 3s linear infinite;
          background: conic-gradient(from 90deg at 50% 50%, var(--accent-light) 0%, var(--accent) 50%, var(--accent-light) 100%);
        }
        .border-magic-inner {
          display: inline-flex;
          height: 100%;
          width: 100%;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: var(--card-bg);
          padding: 0.75rem 1.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: white;
          backdrop-filter: blur(20px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .border-magic:hover .border-magic-inner {
          background: rgba(15, 20, 25, 0.8);
          transform: translateY(-1px);
          box-shadow: var(--glow);
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        /* x.ai-style star twinkle animation */
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        /* Modern navigation styles */
        .nav-link {
          position: relative;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link:hover {
          background: rgba(148, 163, 184, 0.1);
          color: var(--text-primary);
        }
        .nav-link.active {
          background: rgba(99, 102, 241, 0.1);
          color: var(--accent-light);
        }
      `}</style>
      <div className={`min-h-screen w-full font-sans relative overflow-hidden transition-colors duration-500 ${
        isDark 
          ? 'bg-[--bg] text-[--text-primary]' 
          : 'bg-white text-gray-900'
      }`}>
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>

        {/* Enhanced Sticky Header with Glassmorphism */}
        <motion.header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl border-b ${
            isScrolled 
              ? isDark 
                ? 'bg-slate-900/90 border-slate-700/50 shadow-2xl shadow-black/20' 
                : 'bg-white/90 border-gray-200/50 shadow-xl shadow-gray-900/5'
              : isDark 
                ? 'bg-transparent border-transparent' 
                : 'bg-transparent border-transparent'
          }`}
          variants={headerVariants}
          animate={isHeaderHidden ? 'hidden' : 'visible'}
          initial="visible"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
            <div className="flex items-center justify-between h-full w-full">
              {/* Logo */}
              <Link to={createPageUrl("Platform")} className="flex items-center space-x-3 group">
                <motion.img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c29fb92fd_logocopy.jpg" 
                  alt="Autellia Logo" 
                  className="w-8 h-8 object-contain rounded-full transition-all duration-300 group-hover:scale-110"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                />
                <span className={`text-xl font-bold transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-600 group-hover:bg-clip-text ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Autellia
                </span>
              </Link>

              {/* Center Navigation */}
              <nav className="hidden md:flex items-center justify-end flex-1 mr-16 space-x-12">
                {navigationItems.map((item) => (
                  <div key={item.title} className="relative group">
                    {item.hasDropdown ? (
                      <div>
                        <button className={`flex items-center gap-1 font-medium text-sm transition-all duration-200 ${
                          isDark 
                            ? 'text-slate-300 hover:text-white' 
                            : 'text-gray-700 hover:text-gray-900'
                        }`}>
                          {item.title}
                          <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {/* Dropdown */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className={`min-w-[220px] w-auto border rounded-lg shadow-xl py-2 transition-colors duration-300 ${
                              isDark 
                                ? 'bg-slate-900/95 border-slate-700/50 backdrop-blur-sm' 
                                : 'bg-white/95 border-gray-200/50 backdrop-blur-sm'
                            }`}
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.path}
                                to={createPageUrl(dropdownItem.path)}
                                className={`block px-4 py-2.5 text-sm transition-all duration-200 whitespace-nowrap ${
                                  isDark 
                                    ? 'text-slate-300 hover:text-white hover:bg-indigo-500/15' 
                                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                                }`}
                              >
                                {dropdownItem.title
                                  .replace('Automation Consulting & Strategy', 'Automation Consulting')
                                  .replace('BOT Development & Deployment', 'BOT Development')
                                  .replace('AI/ML Model Training & Integration', 'AI/ML Integration')
                                  .replace('Business Process Optimization', 'Process Optimization')
                                  .replace('Data Analytics & Visualization', 'Data Analytics')
                                  .replace('Intelligent Document Processing (IDP)', 'Document Processing')
                                  .replace('Custom Software Development', 'Software Development')
                                  .replace('Cloud Infrastructure & Automation', 'Cloud Automation')
                                  .replace('Managed Services & Support', 'Managed Services')
                                }
                              </Link>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    ) : item.isButton ? (
                      <button
                        onClick={handleBookDemo}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-md transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25 cursor-pointer border-none text-sm"
                      >
                        {item.title}
                      </button>
                    ) : (
                      <Link
                        to={item.url}
                        className={`font-medium text-sm transition-all duration-200 ${
                          location.pathname === item.url
                            ? (isDark ? 'text-white' : 'text-indigo-600')
                            : (isDark 
                                ? 'text-slate-300 hover:text-white' 
                                : 'text-gray-700 hover:text-gray-900'
                              )
                        }`}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              
              {/* Theme Toggle - Far Right */}
              <div className="hidden md:flex items-center">
                <ThemeToggle />
              </div>

              {/* Mobile Theme Toggle and Menu Button */}
              <div className="md:hidden flex items-center space-x-2">
                <ThemeToggle className="scale-75" />
                <motion.button
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isDark 
                      ? 'text-slate-300 hover:text-white hover:bg-white/10' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  whileTap={{ scale: 0.95 }}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label="Toggle menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence initial={false}>
            {isMobileMenuOpen && (
              <motion.div
                id="mobile-menu"
                key="mobile-menu"
                variants={mobileMenuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`md:hidden border-t overflow-hidden transition-colors duration-300 ${
                  isDark 
                    ? 'bg-[--surface] border-[--border]' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="px-4 py-4 space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.title} className="mobile-menu-item">
                      {item.hasDropdown ? (
                        <div className="space-y-2">
                          <div className={`font-semibold px-2 py-2 text-base transition-colors duration-300 ${
                            isDark ? 'text-[--text-primary]' : 'text-gray-900'
                          }`}>
                            {item.title}
                          </div>
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={createPageUrl(dropdownItem.path)}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                                isDark 
                                  ? 'text-[--text-muted] hover:text-[--accent]' 
                                  : 'text-gray-600 hover:text-brand-purple'
                              }`}
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </div>
                      ) : item.isButton ? (
                          <button
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              handleBookDemo();
                            }}
                            className="block w-full px-4 py-3 rounded-lg font-semibold text-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-none cursor-pointer transition-all duration-200 text-sm"
                          >
                            {item.title}
                          </button>
                        ) : (
                          <Link
                            to={item.url || '#'}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block px-2 py-3 rounded-md font-semibold text-base transition-colors duration-200 ${
                              isDark 
                                ? 'text-[--text-muted] hover:text-[--text-primary]' 
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                          >
                            {item.title}
                          </Link>
                        )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>

        {/* Main Content */}
        <motion.main
          id="main-content"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="pt-20"
          role="main"
        >
          {children}
        </motion.main>

        {/* Vanta Dots Interactive Section */}
        <VantaDots className="min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20">
          <div className="container-responsive text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 sm:space-y-10 lg:space-y-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight px-2 sm:px-0">
                <span className="block text-white mb-2">Transforming Enterprise</span>
                <span className="block bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  Operations
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
                Experience the power of intelligent automation with our cutting-edge AI/ML solutions that revolutionize how enterprises operate.
              </p>
              
              {/* Enhanced Statistics Grid */}
              <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20 flex-wrap">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/15 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300 text-center min-w-[160px] sm:min-w-[200px] lg:min-w-[220px]"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3">500+</div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-400 font-light">Automations Deployed</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/15 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300 text-center min-w-[160px] sm:min-w-[200px] lg:min-w-[220px]"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3">$50M+</div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-400 font-light">Cost Savings Generated</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/15 hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all duration-300 text-center min-w-[160px] sm:min-w-[200px] lg:min-w-[220px]"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3">95%</div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-400 font-light">Success Rate</div>
                </motion.div>
              </div>

              {/* Enhanced Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 sm:mt-14 lg:mt-16"
              >
                <ExploreSolutionModal 
                  triggerText="Book a Demo"
                  triggerClassName="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg hover:shadow-indigo-500/30 text-white font-semibold text-lg rounded-lg border-none cursor-pointer transition-all duration-300 hover:scale-105"
                />
              </motion.div>
            </motion.div>
          </div>
        </VantaDots>

        {/* Simplified Footer */}
        <footer className={`mt-auto border-t transition-colors duration-300 ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'
        }`} role="contentinfo">
          <div className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
              {/* Enhanced Company Header */}
              <div className="text-center mb-16">
                <div className="flex flex-col items-center space-y-6">
                  <div className="relative group">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c29fb92fd_logocopy.jpg" 
                      alt="Autellia Logo" 
                      className={`w-20 h-20 object-contain rounded-2xl ring-4 shadow-2xl transition-all duration-500 group-hover:scale-105 ${
                        isDark 
                          ? 'ring-indigo-500/40 shadow-indigo-500/30' 
                          : 'ring-brand-purple/40 shadow-brand-purple/30'
                      }`}
                    />
                    <div className={`absolute -inset-2 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500 ${
                      isDark 
                        ? 'from-indigo-500 via-purple-500 to-cyan-400' 
                        : 'from-brand-purple via-brand-purple-light to-indigo-400'
                    }`}></div>
                  </div>
                  
                  <div className="space-y-3">
                    <h2 className={`text-4xl md:text-5xl font-black bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ${
                      isDark 
                        ? 'from-white via-indigo-200 to-purple-200' 
                        : 'from-gray-900 via-indigo-700 to-purple-700'
                    }`}>
                      Autellia
                    </h2>
                    <p className={`text-base font-semibold tracking-wider uppercase transition-colors duration-300 ${
                      isDark ? 'text-indigo-400' : 'text-brand-purple'
                    }`}>Technology Solutions</p>
                    
                    <div className={`w-24 h-1 mx-auto rounded-full bg-gradient-to-r ${
                      isDark ? 'from-indigo-500 via-purple-500 to-cyan-400' : 'from-brand-purple via-indigo-500 to-purple-600'
                    }`}></div>
                  </div>
                  
                  <p className={`text-lg md:text-xl leading-relaxed max-w-4xl font-light transition-colors duration-300 ${
                    isDark ? 'text-slate-300' : 'text-gray-600'
                  }`}>
                    Empowering enterprises with intelligent automation, AI/ML solutions, and data analytics to unlock efficiency, speed, and smarter decision-making.
                  </p>
                </div>
              </div>

              {/* Enhanced Navigation Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
                  {/* Services Column */}
                  <div className="group">
                    <div className={`p-6 rounded-2xl transition-all duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-slate-700/50 group-hover:border-indigo-500/30' 
                        : 'bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 group-hover:border-brand-purple/30'
                    }`}>
                      <div className="flex items-center space-x-3 mb-6">
                        <div className={`w-2 h-8 bg-gradient-to-b rounded-full transition-all duration-300 ${
                          isDark ? 'from-indigo-400 to-purple-500' : 'from-brand-purple to-brand-purple-light'
                        }`}></div>
                        <h3 className={`text-lg font-bold tracking-wide transition-colors duration-300 ${
                          isDark 
                            ? 'text-white group-hover:text-indigo-300' 
                            : 'text-gray-900 group-hover:text-brand-purple'
                        }`}>Services</h3>
                      </div>
                      <ul className="space-y-3">
                        {services.slice(0, 6).map((service) => (
                          <li key={service.path}>
                            <Link 
                              to={createPageUrl(service.path)} 
                              className={`group/link flex items-center space-x-2 hover:translate-x-2 transition-all duration-300 text-sm focus:outline-none block py-2 px-3 rounded-lg ${
                                isDark 
                                  ? 'text-slate-400 hover:text-indigo-300 hover:bg-slate-800/50 focus:text-indigo-400' 
                                  : 'text-gray-600 hover:text-brand-purple hover:bg-gray-100/50 focus:text-brand-purple'
                              }`}
                              aria-label={`Learn more about ${service.title}`}
                            >
                              <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                isDark ? 'bg-indigo-400 group-hover/link:bg-indigo-300' : 'bg-brand-purple group-hover/link:bg-brand-purple-light'
                              }`}></div>
                              <span>{service.title}</span>
                            </Link>
                          </li>
                        ))}
                        <li className="pt-2">
                          <Link 
                            to={createPageUrl("Solutions")} 
                            className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                              isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-brand-purple hover:text-brand-purple-light'
                            }`}
                          >
                            View All Services →
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Quick Links Column */}
                  <div className="group">
                    <div className={`p-6 rounded-2xl transition-all duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-slate-700/50 group-hover:border-purple-500/30' 
                        : 'bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 group-hover:border-brand-purple/30'
                    }`}>
                      <div className="flex items-center space-x-3 mb-6">
                        <div className={`w-2 h-8 bg-gradient-to-b rounded-full transition-all duration-300 ${
                          isDark ? 'from-purple-400 to-pink-500' : 'from-brand-purple to-brand-purple-light'
                        }`}></div>
                        <h3 className={`text-lg font-bold tracking-wide transition-colors duration-300 ${
                          isDark 
                            ? 'text-white group-hover:text-purple-300' 
                            : 'text-gray-900 group-hover:text-brand-purple'
                        }`}>Quick Links</h3>
                      </div>
                      <nav aria-label="Footer navigation">
                        <ul className="space-y-3">
                          <li>
                            <Link to={createPageUrl("Platform")} className={`group/link flex items-center space-x-2 hover:translate-x-2 transition-all duration-300 text-sm focus:outline-none block py-2 px-3 rounded-lg ${
                              isDark 
                                ? 'text-slate-400 hover:text-purple-300 hover:bg-slate-800/50 focus:text-purple-400' 
                                : 'text-gray-600 hover:text-brand-purple hover:bg-gray-100/50 focus:text-brand-purple'
                            }`}>
                              <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                isDark ? 'bg-purple-400 group-hover/link:bg-purple-300' : 'bg-brand-purple group-hover/link:bg-brand-purple-light'
                              }`}></div>
                              <span>Platform</span>
                            </Link>
                          </li>
                          <li>
                            <Link to={createPageUrl("Solutions")} className={`group/link flex items-center space-x-2 hover:translate-x-2 transition-all duration-300 text-sm focus:outline-none block py-2 px-3 rounded-lg ${
                              isDark 
                                ? 'text-slate-400 hover:text-purple-300 hover:bg-slate-800/50 focus:text-purple-400' 
                                : 'text-gray-600 hover:text-brand-purple hover:bg-gray-100/50 focus:text-brand-purple'
                            }`}>
                              <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                isDark ? 'bg-purple-400 group-hover/link:bg-purple-300' : 'bg-brand-purple group-hover/link:bg-brand-purple-light'
                              }`}></div>
                              <span>Solutions</span>
                            </Link>
                          </li>
                          <li>
                            <Link to={createPageUrl("Perspectives")} className={`group/link flex items-center space-x-2 hover:translate-x-2 transition-all duration-300 text-sm focus:outline-none block py-2 px-3 rounded-lg ${
                              isDark 
                                ? 'text-slate-400 hover:text-purple-300 hover:bg-slate-800/50 focus:text-purple-400' 
                                : 'text-gray-600 hover:text-brand-purple hover:bg-gray-100/50 focus:text-brand-purple'
                            }`}>
                              <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                isDark ? 'bg-purple-400 group-hover/link:bg-purple-300' : 'bg-brand-purple group-hover/link:bg-brand-purple-light'
                              }`}></div>
                              <span>Perspectives</span>
                            </Link>
                          </li>
                          <li>
                            <Link to={createPageUrl("Careers")} className={`group/link flex items-center space-x-2 hover:translate-x-2 transition-all duration-300 text-sm focus:outline-none block py-2 px-3 rounded-lg ${
                              isDark 
                                ? 'text-slate-400 hover:text-purple-300 hover:bg-slate-800/50 focus:text-purple-400' 
                                : 'text-gray-600 hover:text-brand-purple hover:bg-gray-100/50 focus:text-brand-purple'
                            }`}>
                              <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                isDark ? 'bg-purple-400 group-hover/link:bg-purple-300' : 'bg-brand-purple group-hover/link:bg-brand-purple-light'
                              }`}></div>
                              <span>Careers</span>
                            </Link>
                          </li>
                          <li className="pt-3">
                            <ExploreSolutionModal 
                              triggerText="📅 Book a Demo"
                              triggerClassName={`w-full px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                                isDark 
                                  ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-xl' 
                                  : 'text-white bg-gradient-to-r from-brand-purple to-indigo-600 hover:from-brand-purple-light hover:to-indigo-500 shadow-lg hover:shadow-xl'
                              }`}
                            />
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>

                  {/* Perspectives Column */}
                  <div className="group">
                    <div className={`p-6 rounded-2xl transition-all duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-slate-700/50 group-hover:border-cyan-500/30' 
                        : 'bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 group-hover:border-brand-purple/30'
                    }`}>
                      <div className="flex items-center space-x-3 mb-6">
                        <div className={`w-2 h-8 bg-gradient-to-b rounded-full transition-all duration-300 ${
                          isDark ? 'from-cyan-400 to-blue-500' : 'from-brand-purple to-brand-purple-light'
                        }`}></div>
                        <h3 className={`text-lg font-bold tracking-wide transition-colors duration-300 ${
                          isDark 
                            ? 'text-white group-hover:text-cyan-300' 
                            : 'text-gray-900 group-hover:text-brand-purple'
                        }`}>Perspectives</h3>
                      </div>
                      <ul className="space-y-3">
                        <li>
                          <Link to="/case-studies" className={`group/link flex items-center space-x-2 hover:translate-x-2 transition-all duration-300 text-sm focus:outline-none block py-2 px-3 rounded-lg ${
                            isDark 
                              ? 'text-slate-400 hover:text-cyan-300 hover:bg-slate-800/50 focus:text-cyan-400' 
                              : 'text-gray-600 hover:text-brand-purple hover:bg-gray-100/50 focus:text-brand-purple'
                          }`}>
                            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              isDark ? 'bg-cyan-400 group-hover/link:bg-cyan-300' : 'bg-brand-purple group-hover/link:bg-brand-purple-light'
                            }`}></div>
                            <span>📊 Case Studies</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/call-to-action" className={`group/link flex items-center space-x-2 hover:translate-x-2 transition-all duration-300 text-sm focus:outline-none block py-2 px-3 rounded-lg ${
                            isDark 
                              ? 'text-slate-400 hover:text-cyan-300 hover:bg-slate-800/50 focus:text-cyan-400' 
                              : 'text-gray-600 hover:text-brand-purple hover:bg-gray-100/50 focus:text-brand-purple'
                          }`}>
                            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              isDark ? 'bg-cyan-400 group-hover/link:bg-cyan-300' : 'bg-brand-purple group-hover/link:bg-brand-purple-light'
                            }`}></div>
                            <span>📞 Call-to-Action</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-knowledge-hub" className={`group/link flex items-center space-x-2 hover:translate-x-2 transition-all duration-300 text-sm focus:outline-none block py-2 px-3 rounded-lg ${
                            isDark 
                              ? 'text-slate-400 hover:text-cyan-300 hover:bg-slate-800/50 focus:text-cyan-400' 
                              : 'text-gray-600 hover:text-brand-purple hover:bg-gray-100/50 focus:text-brand-purple'
                          }`}>
                            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              isDark ? 'bg-cyan-400 group-hover/link:bg-cyan-300' : 'bg-brand-purple group-hover/link:bg-brand-purple-light'
                            }`}></div>
                            <span>📚 Blog/Knowledge Hub</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>


            {/* Clean Footer Bottom Bar */}
            <div className={`border-t py-4 px-6 max-w-7xl mx-auto transition-colors duration-300 ${
              isDark ? 'border-slate-700/50' : 'border-gray-300/50'
            }`}>
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Left: Copyright + Tagline */}
                <div className="text-center md:text-left">
                  <p className={`text-xs font-light transition-colors duration-300 ${
                    isDark ? 'text-slate-400/80' : 'text-gray-500'
                  }`}>
                    © {new Date().getFullYear()} Autellia Technology. All Rights Reserved.
                  </p>
                  <p className={`text-xs mt-0.5 transition-colors duration-300 ${
                    isDark ? 'text-slate-500' : 'text-gray-400'
                  }`}>Innovating the future of enterprise technology</p>
                </div>
                
                {/* Right: Social Icons */}
                <div className="flex items-center space-x-4">
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/company/autellia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                      isDark 
                        ? 'bg-slate-800 text-slate-400 hover:text-blue-400 hover:bg-slate-700' 
                        : 'bg-gray-100 text-gray-600 hover:text-blue-600 hover:bg-gray-200'
                    }`}
                    aria-label="Follow us on LinkedIn"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  {/* YouTube */}
                  <a 
                    href="https://www.youtube.com/@autellia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                      isDark 
                        ? 'bg-slate-800 text-slate-400 hover:text-red-400 hover:bg-slate-700' 
                        : 'bg-gray-100 text-gray-600 hover:text-red-600 hover:bg-gray-200'
                    }`}
                    aria-label="Subscribe to our YouTube channel"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  
                  {/* Twitter */}
                  <a 
                    href="https://twitter.com/autellia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-slate-700 transition-colors duration-200"
                    aria-label="Follow us on Twitter"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}