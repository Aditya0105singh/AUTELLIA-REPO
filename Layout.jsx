import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "./src/utils";
import { AnimatePresence, motion } from "framer-motion";
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
    const script = document.createElement('script');
    script.src = "https://automatic.chat/embed.js";
    script.async = true;
    script.id = 'cmeygesdy00kmeep6iqegyw98';
    script.setAttribute('open', 'true');
    script.setAttribute('openDelay', '5000');
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById(script.id);
      if (existingScript) document.body.removeChild(existingScript);
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
    hidden: { y: -80, transition: { type: 'tween', duration: 0.25 } }
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
        .btn-glow:hover {
          box-shadow: 0 0 20px var(--accent-variant), 0 0 5px var(--accent);
        }
        .border-magic {
          position: relative;
          display: inline-flex;
          height: 3rem;
          overflow: hidden;
          border-radius: 9999px;
          padding: 1px;
        }
        .border-magic:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(148, 163, 184, 0.5), 0 0 0 4px rgba(148, 163, 184, 0.1);
        }
        .border-magic::before {
          content: '';
          position: absolute;
          inset: -1000%;
          animation: spin 2s linear infinite;
          background: conic-gradient(from 90deg at 50% 50%, #E2CBFF 0%, #393BB2 50%, #E2CBFF 100%);
        }
        .border-magic-inner {
          display: inline-flex;
          height: 100%;
          width: 100%;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          background-color: var(--bg);
          padding: 0.75rem 1.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: white;
          backdrop-filter: blur(12px);
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div className="min-h-screen bg-[--bg] text-[--text-primary] font-sans relative overflow-hidden">
        {showBeams && (
          <BackgroundBeams />
        )}
        
        {/* Basic Header */}
        <motion.header
          className={`fixed top-0 left-0 right-0 z-50 bg-[--surface]/95 backdrop-blur-xl border-b border-[--border] ${isScrolled ? 'shadow-lg' : 'shadow-none'}`}
          variants={headerVariants}
          animate={isHeaderHidden ? 'hidden' : 'visible'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
            <div className="flex justify-between items-center h-full">
              {/* Logo */}
              <Link to={createPageUrl("Platform")} className="flex items-center space-x-3">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c29fb92fd_logocopy.jpg" 
                  alt="Autellia Logo" 
                  className="w-10 h-10 object-contain rounded-full"
                />
                <span className="text-2xl font-bold text-[--text-primary]">
                  Autellia
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <div key={item.title} className="relative group">
                    {item.hasDropdown ? (
                      <div>
                        <button className="flex items-center gap-1 px-3 py-2 text-[--text-muted] hover:text-[--text-primary] font-medium">
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
                      <Link
                        to={item.url}
                        className="border-magic"
                      >
                        <span className="border-magic-inner">
                          {item.title}
                        </span>
                      </Link>
                    ) : (
                      <Link
                        to={item.url}
                        className={`px-3 py-2 font-medium relative transition-colors ${
                          location.pathname === item.url
                            ? 'text-[--accent]'
                            : 'text-[--text-muted] hover:text-[--text-primary]'
                        } after:content-[" "] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:bg-[--accent] after:scale-x-0 after:origin-left group-hover:after:scale-x-100 after:transition-transform`}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-[--text-muted] hover:text-[--text-primary]"
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
                      ) : (
                        <Link
                          to={item.url || '#'}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-2 py-3 rounded-md font-semibold ${
                            item.isButton 
                              ? 'border-magic text-center' 
                              : 'text-[--text-muted] hover:text-[--text-primary]'
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
        <main className="pt-24 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="bg-[--surface] border-t border-[--border] text-[--text-primary] relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4 col-span-1 md:col-span-2">
                 <Link to={createPageUrl("Platform")} className="flex items-center space-x-3">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c29fb92fd_logocopy.jpg" 
                    alt="Autellia Logo" 
                    className="w-12 h-12 object-contain bg-white rounded-lg p-1"
                  />
                  <span className="text-3xl font-bold">Autellia</span>
                </Link>
                <p className="text-[--text-muted] text-sm leading-relaxed max-w-md">
                  Build an Autonomous Enterprise with intelligent automation, agentic AI, 
                  and data-driven analytics for measurable business outcomes.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[--accent]">Solutions</h3>
                <ul className="space-y-2 text-sm">
                  {services.slice(0, 5).map(s => (
                    <li key={s.path}><Link to={createPageUrl(s.path)} className="text-[--text-muted] hover:text-[--accent] transition-colors">{s.title}</Link></li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[--accent]">Get in Touch</h3>
                <div className="space-y-3 text-sm text-[--text-muted]">
                  <p>Ready to transform your operations?</p>
                  <Link 
                    to={createPageUrl("Demo")}
                    className="border-magic"
                  >
                    <span className="border-magic-inner">
                      Schedule a Workshop
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[--border] text-center">
              <p className="text-[--text-muted] text-sm">
                © {new Date().getFullYear()} Autellia. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}