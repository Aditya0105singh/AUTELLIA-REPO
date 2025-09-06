import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import VantaDots from './Components/ui/VantaDots'
import { createPageUrl } from "./src/utils";
import { BackgroundBeams } from "./Components/ui/background-beams.jsx";
 
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 8);
      const isScrollingDown = currentY > lastScrollY;
      setIsHeaderHidden(isScrollingDown && currentY > 80);
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    // TODO: Replace with your actual Cal.com URL after setup
    // For now, redirect to a contact form or placeholder
    const calUrl = 'https://cal.com/autellia/demo'; // Replace 'autellia' with your actual username
    
    // Check if Cal.com account is set up (you'll know when the URL works)
    // For now, this will show the 404 until you complete Cal.com setup
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
      <div className="min-h-screen w-full bg-[--bg] text-[--text-primary] font-sans relative overflow-hidden">
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {showBeams && (
          <BackgroundBeams />
        )}
        
        {/* Basic Header */}
        <motion.header
          className={`fixed top-0 left-0 right-0 z-50 w-full bg-black/20 backdrop-blur-md border-b border-white/10 ${isScrolled ? 'shadow-2xl shadow-black/30' : 'shadow-none'}`}
          variants={headerVariants}
          animate={isHeaderHidden ? 'hidden' : 'visible'}
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-6 h-[60px]">
            <div className="flex justify-between items-center h-full">
              {/* Logo */}
              <Link to={createPageUrl("Platform")} className="flex items-center space-x-2.5">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c29fb92fd_logocopy.jpg" 
                  alt="Autellia Logo" 
                  className="w-8 h-8 object-contain rounded-full"
                />
                <span className="text-xl font-bold text-white">
                  Autellia
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-1">
                {navigationItems.map((item) => (
                  <div key={item.title} className="relative group">
                    {item.hasDropdown ? (
                      <div>
                        <button className="flex items-center gap-1 px-4 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-200">
                          {item.title}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {/* Dropdown */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.15 }}
                            className="w-72 bg-[--panel] border border-[--border] rounded-lg shadow-xl py-2"
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.path}
                                to={createPageUrl(dropdownItem.path)}
                                className="block px-4 py-3 text-sm text-[--text-muted] hover:text-[--accent] hover:bg-[--surface] transition-colors"
                              >
                                {dropdownItem.title}
                              </Link>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    ) : item.isButton ? (
                      <button
                        onClick={handleBookDemo}
                        className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25 cursor-pointer border-none"
                      >
                        {item.title}
                      </button>
                    ) : (
                      <Link
                        to={item.url}
                        className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 ${
                          location.pathname === item.url
                            ? 'text-white bg-white/10'
                            : 'text-slate-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
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
                className="md:hidden bg-[--surface] border-t border-[--border] overflow-hidden"
              >
                <div className="px-4 py-4 space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.title}>
                      {item.hasDropdown ? (
                        <div className="space-y-2">
                          <div className="text-[--text-primary] font-semibold px-2 py-1">
                            {item.title}
                          </div>
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={createPageUrl(dropdownItem.path)}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-4 py-2 text-[--text-muted] hover:text-[--accent]"
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
                            className="block w-full px-2 py-3 rounded-md font-semibold border-magic text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-none cursor-pointer"
                          >
                            {item.title}
                          </button>
                        ) : (
                          <Link
                            to={item.url || '#'}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-2 py-3 rounded-md font-semibold text-[--text-muted] hover:text-[--text-primary]"
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
          className="pt-16"
          role="main"
        >
          {children}
        </motion.main>

        {/* Vanta Dots Interactive Section */}
        <VantaDots className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Transforming Enterprise Operations
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Experience the power of intelligent automation with our cutting-edge AI/ML solutions that revolutionize how enterprises operate.
              </p>
              
              {/* Enhanced Statistics Grid */}
              <div className="flex justify-center gap-8 mt-20 flex-wrap">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/15 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300 text-center min-w-[220px]"
                >
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">500+</div>
                  <div className="text-base text-gray-400 font-light">Automations Deployed</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/15 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300 text-center min-w-[220px]"
                >
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">$50M+</div>
                  <div className="text-base text-gray-400 font-light">Cost Savings Generated</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/15 hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all duration-300 text-center min-w-[220px]"
                >
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">95%</div>
                  <div className="text-base text-gray-400 font-light">Success Rate</div>
                </motion.div>
              </div>

              {/* Enhanced Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-16"
              >
                <button 
                  onClick={handleBookDemo}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#6a5af9] to-[#2acfcf] hover:shadow-lg hover:shadow-[#6a5af9]/30 text-white font-semibold text-lg rounded-full border-none cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  Book a Demo
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </VantaDots>

        {/* Footer with x.ai-style background */}
        <footer className="relative mt-auto" role="contentinfo">
          {/* x.ai-style layered gradient background */}
          <div className="relative overflow-hidden" style={{
            background: `
              radial-gradient(120% 80% at 50% 140%, rgba(99,102,241,0.75) 0%, rgba(99,102,241,0.55) 15%, rgba(99,102,241,0.35) 30%, rgba(99,102,241,0.18) 50%, rgba(99,102,241,0.08) 70%, rgba(13,13,13,0) 85%),
              radial-gradient(130% 90% at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.35) 85%, rgba(0,0,0,0.65) 100%),
              radial-gradient(50% 20% at 50% -10%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%),
              linear-gradient(to bottom, #0b0b0c, #080808)
            `
          }}>
            {/* Noise overlay */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '256px 256px'
            }}></div>
            
            {/* Stars effect */}
            <div className="stars absolute inset-0 pointer-events-none">
              <div className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-pulse" style={{
                left: '10%', top: '20%',
                boxShadow: '0 0 6px rgba(255,255,255,0.8)',
                animation: 'twinkle 3s infinite alternate'
              }}></div>
              <div className="absolute w-0.5 h-0.5 bg-slate-300 rounded-full opacity-30 animate-pulse" style={{
                left: '25%', top: '40%',
                boxShadow: '0 0 4px rgba(204,204,204,0.6)',
                animation: 'twinkle 4s infinite alternate-reverse'
              }}></div>
              <div className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-50 animate-pulse" style={{
                left: '70%', top: '15%',
                boxShadow: '0 0 6px rgba(255,255,255,0.8)',
                animation: 'twinkle 2.5s infinite alternate'
              }}></div>
              <div className="absolute w-0.5 h-0.5 bg-slate-400 rounded-full opacity-25 animate-pulse" style={{
                left: '85%', top: '35%',
                boxShadow: '0 0 4px rgba(148,163,184,0.5)',
                animation: 'twinkle 3.5s infinite alternate-reverse'
              }}></div>
              <div className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-35 animate-pulse" style={{
                left: '45%', top: '60%',
                boxShadow: '0 0 5px rgba(255,255,255,0.7)',
                animation: 'twinkle 4.2s infinite alternate'
              }}></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
              {/* Company Info - Enhanced Full Width Row */}
              <div className="mb-12 pb-8 border-b border-slate-700/50">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c29fb92fd_logocopy.jpg" 
                      alt="Autellia Logo" 
                      className="w-16 h-16 object-contain rounded-full ring-2 ring-indigo-500/30 shadow-lg shadow-indigo-500/20"
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20 blur-sm"></div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                      Autellia
                    </h2>
                    <p className="text-indigo-400/80 text-sm font-medium tracking-wide">Technology Solutions</p>
                  </div>
                </div>
                <p className="text-slate-300/90 leading-relaxed text-lg max-w-3xl font-light">
                  Empowering enterprises with intelligent automation, AI/ML solutions, and data analytics to unlock efficiency, speed, and smarter decision-making.
                </p>
              </div>

              {/* Three Equal Columns - Services, Quick Links, Industries */}
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
                  {/* Services */}
                  <div className="group">
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full"></div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-indigo-300 transition-colors duration-300">SERVICES</h3>
                    </div>
                    <ul className="space-y-2">
                      {services.slice(0, 4).map((service) => (
                        <li key={service.path}>
                          <Link 
                            to={createPageUrl(service.path)} 
                            className="text-slate-400 hover:text-indigo-300 hover:translate-x-1 transition-all duration-200 text-sm focus:outline-none focus:text-indigo-400 block py-2 group-hover:text-slate-300"
                            aria-label={`Learn more about ${service.title}`}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Links */}
                  <div className="group">
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-purple-300 transition-colors duration-300">QUICK LINKS</h3>
                    </div>
                    <nav aria-label="Footer navigation">
                      <ul className="space-y-2">
                        <li>
                          <Link to={createPageUrl("Platform")} className="text-slate-400 hover:text-purple-300 hover:translate-x-1 transition-all duration-200 text-sm focus:outline-none focus:text-purple-400 block py-2 group-hover:text-slate-300">
                            Platform
                          </Link>
                        </li>
                        <li>
                          <Link to={createPageUrl("Solutions")} className="text-slate-400 hover:text-purple-300 hover:translate-x-1 transition-all duration-200 text-sm focus:outline-none focus:text-purple-400 block py-2 group-hover:text-slate-300">
                            Solutions
                          </Link>
                        </li>
                        <li>
                          <Link to={createPageUrl("Perspectives")} className="text-slate-400 hover:text-purple-300 hover:translate-x-1 transition-all duration-200 text-sm focus:outline-none focus:text-purple-400 block py-2 group-hover:text-slate-300">
                            Perspectives
                          </Link>
                        </li>
                        <li>
                          <Link to={createPageUrl("Careers")} className="text-slate-400 hover:text-purple-300 hover:translate-x-1 transition-all duration-200 text-sm focus:outline-none focus:text-purple-400 block py-2 group-hover:text-slate-300">
                            Careers
                          </Link>
                        </li>
                        <li>
                          <button 
                            onClick={handleBookDemo}
                            className="text-slate-300 hover:text-purple-300 hover:translate-x-1 transition-all duration-200 text-sm focus:outline-none focus:text-purple-400 block py-2 font-semibold bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg px-3 py-2 border border-purple-500/20 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer w-full text-left"
                          >
                            📅 Book a Demo
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  {/* Industries */}
                  <div className="group">
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-cyan-300 transition-colors duration-300">INDUSTRIES</h3>
                    </div>
                    <ul className="space-y-3 text-sm">
                      <li><span className="text-slate-400 hover:text-cyan-300 transition-colors duration-200 block py-1 cursor-default group-hover:text-slate-300">🏦 Banking & Finance</span></li>
                      <li><span className="text-slate-400 hover:text-cyan-300 transition-colors duration-200 block py-1 cursor-default group-hover:text-slate-300">🏥 Healthcare</span></li>
                      <li><span className="text-slate-400 hover:text-cyan-300 transition-colors duration-200 block py-1 cursor-default group-hover:text-slate-300">🏭 Manufacturing</span></li>
                      <li><span className="text-slate-400 hover:text-cyan-300 transition-colors duration-200 block py-1 cursor-default group-hover:text-slate-300">🛒 Retail & E-commerce</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Clean Footer Bottom Bar */}
            <div className="border-t border-slate-700/50 py-4 px-6 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Left: Copyright + Tagline */}
                <div className="text-center md:text-left">
                  <p className="text-slate-400/80 text-xs font-light">
                    © {new Date().getFullYear()} Autellia Technology. All Rights Reserved.
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">Innovating the future of enterprise technology</p>
                </div>
                
                {/* Right: Social Icons */}
                <div className="flex items-center space-x-4">
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/company/autellia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-colors duration-200"
                    aria-label="Follow us on LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  {/* YouTube */}
                  <a 
                    href="https://www.youtube.com/@autellia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-400 hover:bg-slate-700 transition-colors duration-200"
                    aria-label="Subscribe to our YouTube channel"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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