import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { ArrowRight, Zap, Brain, BarChart3, Bot, Building, Heart, ShoppingCart, Truck, Lock, Share2, TrendingUp, BarChart, Users, Star, Cog, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../Components/ui/InfiniteMovingCards.jsx";
import { Timeline } from "../Components/ui/Timeline.jsx";
import { Grid } from "../Components/ui/grid-pattern.jsx";
import { useTheme } from "../src/contexts/ThemeContext.jsx";
import ExploreSolutionModal from "../Components/ui/ExploreSolutionModal.jsx";
import GetStartedCTA from "../Components/ui/GetStartedCTA";
import TestimonialCarousel from "../Components/TestimonialCarousel.jsx";
import Orb from "../Components/Orb.jsx";
import HeroCarousel from "../Components/HeroCarousel.jsx";
// import LazyImage from "../src/components/LazyImage.jsx";

export default function Platform() {
  const { isDark } = useTheme();
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      }
    }
  };

  const valueProps = [
    { icon: Zap, title: "Intelligent Automation", description: "Streamline workflows with RPA & AI." },
    { icon: Brain, title: "AI & Machine Learning", description: "Unlock predictive insights & generative AI." },
    { icon: BarChart3, title: "Data Analytics", description: "Real-time dashboards & business intelligence." },
    { icon: Bot, title: "Agentic AI", description: "Autonomous AI agents to drive business decisions." }
  ];
  
  const industries = [
    { icon: Building, title: "Banking & Finance" },
    { icon: Heart, title: "Healthcare" },
    { icon: ShoppingCart, title: "Retail & E-commerce" },
    { icon: Truck, title: "Manufacturing" }
  ];

  const statsData = [
    { value: "500+", label: "Projects Delivered" },
    { value: "98%", label: "Success Rate" },
    { value: "10x", label: "Average ROI" }
  ];
  
  const whyChooseUsContent = [
    {
      title: "Collaborative Excellence",
      content: (
        <div className="space-y-4">
          <p className={`text-lg leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-[--text-muted]' : 'text-gray-600'
          }`}>
            From initial strategy to final execution and support, we are your dedicated automation partners. We build autonomous systems that deliver lasting value.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <motion.div 
              whileHover={{ 
                scale: 1.02, 
                y: -2,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className={`group p-5 rounded-3xl transition-all duration-500 cursor-pointer relative overflow-hidden ${
                isDark 
                  ? 'bg-gradient-to-br from-[--surface]/80 to-[--panel]/60 border border-[--border]/30 hover:border-[--accent]/40 shadow-lg hover:shadow-xl backdrop-blur-sm' 
                  : 'bg-gradient-to-br from-white/90 to-indigo-50/80 border border-indigo-100/50 hover:border-indigo-200 shadow-lg hover:shadow-xl backdrop-blur-sm'
              }`}
            >
              {/* Subtle glow effect */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                isDark 
                  ? 'bg-gradient-to-br from-indigo-500/5 to-purple-500/5'
                  : 'bg-gradient-to-br from-indigo-100/30 to-purple-100/20'
              }`} />
              
              <div className="relative z-10">
                <div className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
                  isDark ? 'text-[--accent]' : 'text-indigo-600'
                }`}>500+</div>
                <div className={`text-sm transition-colors duration-300 ${
                  isDark ? 'text-[--text-muted]' : 'text-gray-600'
                }`}>Projects Delivered</div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ 
                scale: 1.02, 
                y: -2,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className={`group p-5 rounded-3xl transition-all duration-500 cursor-pointer relative overflow-hidden ${
                isDark 
                  ? 'bg-gradient-to-br from-[--surface]/80 to-[--panel]/60 border border-[--border]/30 hover:border-purple-400/40 shadow-lg hover:shadow-xl backdrop-blur-sm' 
                  : 'bg-gradient-to-br from-white/90 to-purple-50/80 border border-purple-100/50 hover:border-purple-200 shadow-lg hover:shadow-xl backdrop-blur-sm'
              }`}
            >
              {/* Subtle glow effect */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                isDark 
                  ? 'bg-gradient-to-br from-purple-500/5 to-pink-500/5'
                  : 'bg-gradient-to-br from-purple-100/30 to-pink-100/20'
              }`} />
              
              <div className="relative z-10">
                <div className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
                  isDark ? 'text-purple-400' : 'text-purple-600'
                }`}>98%</div>
                <div className={`text-sm transition-colors duration-300 ${
                  isDark ? 'text-[--text-muted]' : 'text-gray-600'
                }`}>Success Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "Uncompromising Security",
      content: (
        <div className="space-y-4">
          <p className={`text-lg leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-[--text-muted]' : 'text-gray-600'
          }`}>
            Our team holds deep expertise in building secure, compliant solutions. This vendor-agnostic approach ensures we architect the perfect, most cost-effective solution for your unique needs.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {['SOC 2', 'GDPR', 'HIPAA', 'ISO 27001'].map((cert) => (
              <span key={cert} className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                isDark ? 'bg-[--surface]/50 text-emerald-400 border border-[--border]/50' : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
              }`}>
                {cert}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Built for Scale",
      content: (
        <div className="space-y-4">
          <p className={`text-lg leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-[--text-muted]' : 'text-gray-600'
          }`}>
            We leverage agile practices and proven, battle-tested frameworks to deliver success, mitigate risk, and ensure on-time delivery for enterprise-level scale.
          </p>
          <div className="space-y-3 mt-6">
            {['Enterprise Architecture', 'Cloud-Native Solutions', 'Microservices Design'].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  isDark ? 'bg-[--accent]' : 'bg-blue-600'
                }`}></div>
                <span className={`transition-colors duration-300 ${
                  isDark ? 'text-[--text-muted]' : 'text-gray-600'
                }`}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Actionable Insights",
      content: (
        <div className="space-y-4">
          <p className={`text-lg leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-[--text-muted]' : 'text-gray-600'
          }`}>
            We are relentlessly committed to innovation. We help you stay ahead of the curve, transforming data into competitive advantages and clear ROI.
          </p>
          <div className={`p-6 rounded-xl mt-6 transition-colors duration-300 ${
            isDark ? 'bg-[--surface]/50 border border-[--border]/50' : 'bg-amber-50 border border-amber-200'
          }`}>
            <div className="text-center">
              <div className={`text-3xl font-bold ${
                isDark ? 'text-[--secondary-accent]' : 'text-amber-600'
              }`}>10x ROI</div>
              <div className={`text-sm ${
                isDark ? 'text-[--text-muted]' : 'text-gray-600'
              }`}>Average Return on Investment</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const testimonials = [
    { quote: "Autellia transformed our operations with intelligent automation. We achieved 80% cost reduction in our invoice processing within 3 months.", name: "Sarah Johnson", title: "CFO, Global Manufacturing Corp" },
    { quote: "The AI-powered analytics dashboard gives us real-time insights that have revolutionized our decision-making process.", name: "Michael Chen", title: "VP Operations, TechFlow Solutions" },
    { quote: "Their agentic AI implementation has made our customer service 24/7 autonomous while improving satisfaction scores by 40%.", name: "Emily Rodriguez", title: "Director of Customer Success, ServiceMax" },
    { quote: "Autellia's RPA bots handle our entire order-to-cash process. The reliability and accuracy are exceptional.", name: "David Park", title: "Operations Manager, RetailPlus" },
    { quote: "The process optimization consulting helped us identify bottlenecks we didn't know existed. ROI was achieved in just 6 weeks.", name: "Lisa Thompson", title: "Process Excellence Lead, HealthCare United" }
  ];

  const animatedCounters = [
      { number: "97%", label: "Client Satisfaction" },
      { number: "50M+", label: "Automated Decisions" },
      { number: "10x", label: "Average ROI" }
  ]

  const CountUp = ({ value }) => {
    const [display, setDisplay] = React.useState(value);
    React.useEffect(() => {
      const match = String(value).match(/^(\d+)(.*)$/);
      if (!match) return;
      const target = parseInt(match[1], 10);
      const suffix = match[2] || '';
      let current = 0;
      const duration = 1200;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        current = Math.floor(target * progress);
        setDisplay(`${current}${suffix}`);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, [value]);
    return <>{display}</>;
  };

  return (
    <div className={`transition-colors duration-500 ${
      isDark
        ? 'bg-[--bg] text-[--text-primary]'
        : 'bg-white text-gray-900'
    }`}>
      {/* Hero Section - Modern Theme with Original Content */}
      <motion.section
        initial="hidden" animate="visible" variants={fadeIn}
        className="relative min-h-[100vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center text-center overflow-hidden px-4 sm:px-6 lg:px-8"
        style={{ background: 'var(--gradient-hero)', zIndex: 10 }}
        data-aos="fade-up"
        role="banner"
        aria-labelledby="hero-heading"
      >
        {/* Hero Background with Carousel or Orb */}
        <HeroCarousel>
          {/* Orb Animation Background (fallback when no images) */}
          <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black">
            <div style={{ width: '100%', height: '100%', position: 'absolute', opacity: 0.6 }}>
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={270}
                forceHoverState={false}
              />
            </div>

            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

            {/* Animated accent elements */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
        </HeroCarousel>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-0">
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 lg:mb-6 sm:leading-[1.1] px-0 sm:px-0"
          >
            <span className="block text-white mb-2" style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.8), 0 4px 40px rgba(0, 0, 0, 0.6)' }}>Empowering<br className="sm:hidden" /> Enterprises</span>
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent relative pt-1 sm:leading-[1.2] pb-2">
              with AI &<br className="sm:hidden" /> Intelligent<br className="sm:hidden" /> Automation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[0.95rem] leading-[1.6] sm:text-lg lg:text-xl xl:text-2xl text-slate-200 dark:text-slate-300 max-w-[90%] sm:max-w-3xl mx-auto mb-8 sm:mb-8 lg:mb-10 sm:leading-relaxed px-0 sm:px-0"
            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 4px 30px rgba(0, 0, 0, 0.6)' }}
          >
            Transform your enterprise with cutting-edge AI and intelligent automation solutions. We deliver breakthrough efficiency, accelerated growth, and data-driven insights that revolutionize how modern businesses operate and compete.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-4 lg:gap-4 justify-center items-center px-0 sm:px-0"
          >
            <button
              onClick={() => window.location.href = 'https://cal.com/autellia-technology-43lknv'}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg rounded-lg border-none cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white hover:shadow-indigo-500/25 touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              Book a Free Consultation
            </button>
            <Link
              to="/explore-solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span>Explore Solutions</span>
              <motion.span 
                className="ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Value Propositions */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}
        className={`py-8 sm:py-12 md:py-16 lg:py-24 transition-colors duration-500 ${
          isDark ? 'bg-[--bg]' : 'bg-gray-50'
        }`}
        data-aos="fade-up"
        aria-labelledby="value-props-heading"
      >
        <div className="container-responsive">
          <h2 id="value-props-heading" className="sr-only">Our Key Value Propositions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {valueProps.map((prop) => {
              const IconComponent = prop.icon;
              return (
                <motion.div 
                  key={prop.title} 
                  variants={fadeIn} 
                  className="card-modern group relative overflow-hidden transition-all duration-300 transform hover:-translate-y-3 hover:scale-[1.02] shadow-lg hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)]"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    e.currentTarget.style.setProperty('--x', `${x}%`);
                    e.currentTarget.style.setProperty('--y', `${y}%`);
                  }}
                >
                  {/* Glowing boundary overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[0.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(300px circle at var(--x,50%) var(--y,50%), rgba(65,105,225,0.25), transparent 40%)",
                      WebkitMask:
                        "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      padding: "1px",
                      borderRadius: "0.75rem",
                    }}
                  />
                  <motion.div
                    className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(65,105,225,0.12), transparent 40%)",
                    }}
                  />
                  <Grid size={20} />
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-[--border] rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[--accent]" />
                  </div>
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 transition-colors duration-300 ${
                    isDark ? 'text-[--text-primary]' : 'text-gray-900'
                  }`}>{prop.title}</h3>
                  <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-[--text-muted]' : 'text-gray-600'
                  }`}>{prop.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Enhanced About Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        className={`relative py-16 sm:py-20 lg:py-28 overflow-hidden transition-colors duration-500 ${
          isDark ? 'bg-[--bg]' : 'bg-gradient-to-br from-gray-50 via-white to-indigo-50/30'
        }`}
        aria-labelledby="about-heading"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            isDark ? 'bg-gradient-to-br from-indigo-500 to-purple-600' : 'bg-gradient-to-br from-indigo-300 to-purple-400'
          }`}></div>
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-8 ${
            isDark ? 'bg-gradient-to-tr from-cyan-500 to-blue-600' : 'bg-gradient-to-tr from-cyan-300 to-blue-400'
          }`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 id="about-heading" className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 leading-tight ${
                isDark ? 'text-[--text-primary]' : 'text-gray-900'
              }`}>
                <span className="block mb-2">Reimagining How Businesses</span>
                <span className={`block bg-gradient-to-r bg-clip-text text-transparent ${
                  isDark ? 'from-[--accent] to-purple-400' : 'from-indigo-600 to-purple-600'
                }`}>
                  Operate
                </span>
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h-1 w-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
              />
              <p className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-[--text-muted]' : 'text-gray-600'
              }`}>
                Founded with a vision to create future-ready enterprises, Autellia combines deep expertise in RPA, AI, and Analytics to empower organizations to reduce costs, improve productivity, and accelerate growth.
              </p>
            </motion.div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {animatedCounters.map((item, idx) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                viewport={{ once: true }}
                className={`relative group text-center p-8 lg:p-10 rounded-3xl transition-all duration-500 cursor-pointer ${
                  isDark 
                    ? 'bg-gradient-to-br from-[--surface] to-[--panel] border border-[--border] hover:border-[--accent]/50 shadow-xl hover:shadow-2xl'
                    : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-indigo-300 shadow-xl hover:shadow-2xl'
                }`}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  isDark 
                    ? 'bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-cyan-400/5'
                    : 'bg-gradient-to-br from-indigo-100/50 via-purple-100/50 to-cyan-100/50'
                }`} />
                
                <div className="relative z-10">
                  <motion.div
                    animate={{ 
                      textShadow: isDark 
                        ? "0 0 20px rgba(99, 102, 241, 0.3)" 
                        : "0 0 15px rgba(99, 102, 241, 0.2)"
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
                      isDark ? 'text-[--accent]' : 'text-indigo-600'
                    }`}
                  >
                    <CountUp value={item.number} />
                  </motion.div>
                  <p className={`text-sm lg:text-base font-medium transition-colors duration-300 ${
                    isDark ? 'text-[--text-muted]' : 'text-gray-600'
                  }`}>
                    {item.label}
                  </p>
                  
                  {/* Decorative elements */}
                  <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full opacity-60 animate-ping ${
                    isDark ? 'bg-[--accent]' : 'bg-indigo-500'
                  }`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16 lg:mt-20"
          >
            <p className={`text-base mb-6 transition-colors duration-300 ${
              isDark ? 'text-[--text-muted]' : 'text-gray-600'
            }`}>
              Ready to transform your business operations?
            </p>
            <Link
              to="/explore-solutions"
              className={`inline-flex items-center px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg touch-manipulation ${
                isDark 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white' 
                  : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white'
              }`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              Discover Our Solutions
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Industries We Serve */}
       <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        className={`py-12 sm:py-12 md:py-16 lg:py-24 transition-colors duration-500 ${
          isDark ? 'bg-[--bg]' : 'bg-gray-50'
        }`}
        role="region" aria-label="Value Propositions"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeIn} className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-12">
            <span className={`block ${isDark ? 'text-white' : 'text-gray-900'}`}>Industries We Serve</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <motion.div 
                  key={industry.title} 
                  variants={fadeIn} 
                  className="card-modern group text-center relative overflow-hidden transition-all duration-300 transform hover:-translate-y-3 hover:scale-[1.02] shadow-sm hover:shadow-[0_18px_40px_rgba(99,102,241,0.12)]"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    e.currentTarget.style.setProperty('--x', `${x}%`);
                    e.currentTarget.style.setProperty('--y', `${y}%`);
                  }}
                >
                  {/* Glowing boundary overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[0.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(260px circle at var(--x,50%) var(--y,50%), rgba(65,105,225,0.22), transparent 42%)",
                      WebkitMask:
                        "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      padding: "1px",
                      borderRadius: "0.75rem",
                    }}
                  />
                  <motion.div
                    className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(500px circle at var(--x,50%) var(--y,50%), rgba(65,105,225,0.10), transparent 42%)",
                    }}
                  />
                  <Grid size={18} />
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-[--border] rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[--accent]" />
                  </div>
                  <h3 className={`text-sm sm:text-base lg:text-lg font-bold transition-colors duration-300 ${
                    isDark ? 'text-[--text-primary]' : 'text-gray-900'
                  }`}>{industry.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us - Redesigned */}
      <section className={`relative py-12 sm:py-20 md:py-24 lg:py-32 transition-colors duration-500 ${
        isDark ? 'bg-[--bg]' : 'bg-white'
      }`} style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className={`text-[1.5rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Why Forward-Thinking Businesses Choose Autellia</h2>
            <p className={`text-[0.95rem] sm:text-lg lg:text-xl max-w-[90%] sm:max-w-3xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-700'
            }`}>We combine expertise, innovation, and trust to deliver scalable automation solutions.</p>
          </div>

          {/* Hero Metrics Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-16"
          >
            <div className={`rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 border backdrop-blur-xl ${
              isDark 
                ? 'border-purple-500/20 bg-gradient-to-br from-purple-900/40 via-indigo-900/30 to-purple-900/40' 
                : 'border-purple-200/50 bg-gradient-to-br from-purple-50/80 via-indigo-50/60 to-purple-50/80'
            }`}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">{
                statsData.map((stat, index) => {
                  const colors = ['text-purple-400', 'text-indigo-400', 'text-cyan-400'];
                  return (
                    <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                      <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 ${colors[index]}`}>
                        {stat.value}
                      </div>
                      <div className={`text-base sm:text-lg font-medium ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Enterprise Security Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-xl ${
                isDark 
                  ? 'bg-gray-900/50 border-gray-700 hover:border-emerald-500/50' 
                  : 'bg-white border-gray-200 hover:border-emerald-400 shadow-lg'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                isDark ? 'bg-emerald-900/30' : 'bg-emerald-100'
              }`}>
                <svg className={`w-6 h-6 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Enterprise-Grade Security
              </h3>
              <ul className={`space-y-2 mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li className="flex items-start">
                  <span className="mr-2">🔒</span>
                  <span>Vendor-agnostic, secure by design</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Full compliance coverage</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {['SOC2', 'GDPR', 'HIPAA', 'ISO'].map((cert) => (
                  <span key={cert} className={`px-2 py-1 rounded text-xs font-medium ${
                    isDark 
                      ? 'bg-emerald-900/30 text-emerald-400 border border-emerald-700/50' 
                      : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Built for Scale Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-xl ${
                isDark 
                  ? 'bg-gray-900/50 border-gray-700 hover:border-blue-500/50' 
                  : 'bg-white border-gray-200 hover:border-blue-400 shadow-lg'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                isDark ? 'bg-blue-900/30' : 'bg-blue-100'
              }`}>
                <svg className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Built for Scale
              </h3>
              <ul className={`space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li className="flex items-start">
                  <span className="mr-2">⚙️</span>
                  <span>Cloud-native architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🚀</span>
                  <span>Microservices & agile delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📈</span>
                  <span>Enterprise-ready solutions</span>
                </li>
              </ul>
            </motion.div>

            {/* Measurable ROI Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-xl ${
                isDark 
                  ? 'bg-gray-900/50 border-gray-700 hover:border-purple-500/50' 
                  : 'bg-white border-gray-200 hover:border-purple-400 shadow-lg'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                isDark ? 'bg-purple-900/30' : 'bg-purple-100'
              }`}>
                <svg className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Measurable Impact
              </h3>
              <ul className={`space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li className="flex items-start">
                  <span className="mr-2">📊</span>
                  <span>Data-driven insights</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">💡</span>
                  <span>Turn data into decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎯</span>
                  <span>Competitive advantage</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className={`text-sm sm:text-base lg:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <span className="font-bold">Trusted by Fortune 500 companies</span> <span className="mx-2">•</span> Serving clients across 12+ industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}
        className={`py-12 sm:py-20 transition-colors duration-500 relative overflow-hidden ${
          isDark ? 'bg-gradient-to-b from-[--bg] via-gray-900/50 to-[--bg]' : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
        }`}
        style={{ zIndex: 10 }}
      >
        {/* Section Header */}
        <div className="text-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Discover how leading enterprises transform their operations with our intelligent automation solutions
            </p>
          </motion.div>
        </div>
        
        {/* Testimonial Carousel */}
        <TestimonialCarousel />
      </motion.section>

      {/* Bottom CTA Section */}
      <section className="relative py-12 sm:py-20" style={{ zIndex: 10 }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-100 to-indigo-200 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-indigo-900/30" />
            
            {/* Content */}
            <div className="relative z-10 px-6 py-12 sm:px-8 sm:py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                Ready to Get Started?
              </h2>
              <p className="max-w-[90%] sm:max-w-3xl mx-auto mb-8 sm:mb-10 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Explore a discovery workshop to identify top ROI use cases in 2 weeks 
                and stand up a pilot in 30-45 days with measurable outcomes.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://cal.com/autellia-technology-43lknv"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Schedule Discovery Workshop
                </a>
                <a
                  href="/platform"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white border border-gray-200 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg dark:text-gray-200 dark:bg-gray-800/80 dark:hover:bg-gray-800 dark:border-gray-700"
                >
                  Learn About Our Platform
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}