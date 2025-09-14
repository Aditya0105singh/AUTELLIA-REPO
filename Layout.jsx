import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './src/utils/index.js';
import VantaDots from './Components/ui/VantaDots.jsx';
import { useTheme } from './src/contexts/ThemeContext.jsx';
import ThemeToggle from './Components/ui/ThemeToggle.jsx';
import ExploreSolutionModal from './Components/ui/ExploreSolutionModal.jsx';
import { BackgroundBeams } from './Components/ui/background-beams.jsx';
import Footer from './Components/ui/Footer.jsx';
 
import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavItems,
  NavItem,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "./Components/ui/resizable-navbar.jsx";
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

  // Debug function to test URL generation
  const testBotDevelopmentUrl = () => {
    console.log('BOT Development URL test:', createPageUrl('BOTDevelopment'));
    console.log('Services array:', services);
  };

  // Call debug function on component mount
  React.useEffect(() => {
    testBotDevelopmentUrl();
  }, []);
  const perspectives = [
    { title: "Case Studies", path: "CaseStudies" },
    { title: "Call-to-Action", path: "CallToAction" },
    { title: "Blog/Knowledge Hub", path: "BlogKnowledgeHub" }
  ];

  const navigationItems = [
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
    hidden: { y: -96, transition: { type: 'tween', duration: 0.25 } }
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
  const handleBookDemo = (e) => {
    console.log('Book Demo clicked'); // Debug log
    
    const calUrl = 'https://cal.com/autellia-technology-43lknv';
    
    // Prevent default behavior
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Use window.open for better mobile compatibility and fallback to location.href
    try {
      const newWindow = window.open(calUrl, '_blank', 'noopener,noreferrer');
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // Popup blocked, fallback to same window
        window.location.href = calUrl;
      }
    } catch (error) {
      console.error('Error opening Cal.com:', error);
      // Fallback to direct navigation
      window.location.href = calUrl;
    }
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
          box-shadow: none;
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
        /* Force dropdown to appear above all content */
        .group:hover > div[style*="position: absolute"] {
          z-index: 999999 !important;
          position: absolute !important;
        }
        /* Ensure navbar and dropdowns are always on top */
        header[class*="z-"] {
          z-index: 999998 !important;
        }
        /* Override any conflicting z-index values */
        .group > div > div[class*="bg-white"],
        .group > div > div[class*="bg-gray-800"] {
          z-index: 999999 !important;
          position: relative !important;
        }
      `}</style>
      <div className={`min-h-screen w-full font-sans relative overflow-x-hidden transition-colors duration-500 ${
        isDark 
          ? 'bg-[--bg] text-[--text-primary]' 
          : 'bg-white text-gray-900'
      }`}>
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>

        {/* Resizable Navbar */}
        <Navbar className={isDark ? 'bg-[--surface]/95' : 'bg-white/95'}>
          <NavBody>
            {/* Logo */}
            <NavbarLogo>
              <Link to={createPageUrl("Platform")} className="flex items-center space-x-3">
                <motion.img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c29fb92fd_logocopy.jpg" 
                  alt="Autellia Logo" 
                  className="w-12 h-12 object-contain rounded-full"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                />
                <span className={`text-[1.44rem] font-bold ${
                  isDark ? 'text-[--text-primary]' : 'text-gray-900'
                }`}>
                  Autellia
                </span>
              </Link>
            </NavbarLogo>

            {/* Navigation Items */}
            <NavItems>
              {navigationItems.map((item) => (
                <NavItem
                  key={item.title}
                  hasDropdown={item.hasDropdown}
                  dropdownItems={item.dropdownItems?.map(dropdownItem => ({
                    title: dropdownItem.title
                      .replace('Automation Consulting & Strategy', 'Automation Consulting')
                      .replace('BOT Development & Deployment', 'BOT Development')
                      .replace('AI/ML Model Training & Integration', 'AI/ML Integration')
                      .replace('Business Process Optimization', 'Process Optimization')
                      .replace('Data Analytics & Visualization', 'Data Analytics')
                      .replace('Intelligent Document Processing (IDP)', 'Document Processing')
                      .replace('Custom Software Development', 'Software Development')
                      .replace('Cloud Infrastructure & Automation', 'Cloud Automation')
                      .replace('Managed Services & Support', 'Managed Services'),
                    path: dropdownItem.path
                  }))}
                  isActive={location.pathname === item.url}
                >
                  {item.isButton ? (
                    <NavbarButton onClick={handleBookDemo}>
                      {item.title}
                    </NavbarButton>
                  ) : item.hasDropdown ? (
                    item.title
                  ) : (
                    <Link to={item.url}>
                      {item.title}
                    </Link>
                  )}
                </NavItem>
              ))}
              
              {/* Theme Toggle */}
              <div className="ml-4">
                <ThemeToggle />
              </div>
            </NavItems>

            {/* Mobile Navigation */}
            <MobileNav>
              <MobileNavToggle 
                isOpen={isMobileMenuOpen} 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              />
            </MobileNav>
          </NavBody>
        </Navbar>

        {/* Mobile Menu */}
        <MobileNavMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navigationItems.map((item) => (
            <div key={item.title} className="py-2">
              {item.hasDropdown ? (
                <div>
                  <div className={`font-semibold text-lg mb-2 ${
                    isDark ? 'text-[--text-primary]' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </div>
                  <div className="pl-4 space-y-2 max-h-[60vh] overflow-y-auto">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={createPageUrl(dropdownItem.path)}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-2 sm:py-2.5 text-sm sm:text-base leading-relaxed ${
                          isDark ? 'text-[--text-muted] hover:text-[--text-primary]' : 'text-gray-600 hover:text-gray-900'
                        } transition-colors duration-200 cursor-pointer touch-manipulation`}
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                      >
                        {dropdownItem.title
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
                    ))}
                  </div>
                </div>
              ) : item.isButton ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleBookDemo(e);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-3 px-4 sm:py-4 sm:px-6 rounded-lg font-semibold text-base sm:text-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 cursor-pointer touch-manipulation"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {item.title}
                </button>
              ) : (
                <Link
                  to={item.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 sm:py-3 font-semibold text-base sm:text-lg ${
                    location.pathname === item.url
                      ? (isDark ? 'text-[--accent]' : 'text-blue-600')
                      : (isDark ? 'text-[--text-primary]' : 'text-gray-900')
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          
          {/* Mobile Theme Toggle */}
          <div className="pt-4 border-t border-[--border] mt-4">
            <ThemeToggle />
          </div>
        </MobileNavMenu>

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
                <button
                  onClick={handleBookDemo}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg hover:shadow-indigo-500/30 text-white font-semibold text-lg rounded-lg border-none cursor-pointer transition-all duration-300 hover:scale-105 touch-manipulation"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Book a Demo
                </button>
              </motion.div>
            </motion.div>
          </div>
        </VantaDots>

        {/* Modern Footer */}
        <Footer />
      </div>
    </>
  );
}