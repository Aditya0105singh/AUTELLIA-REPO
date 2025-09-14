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
        className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center text-center overflow-hidden px-4 sm:px-6 lg:px-8"
        style={{ background: 'var(--gradient-hero)' }}
        data-aos="fade-up"
        role="banner"
        aria-labelledby="hero-heading"
      >
        {/* Background Image with Blur Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`
            }}
          />
          
          {/* Blur Overlay */}
          <div className={`absolute inset-0 backdrop-blur-sm ${
            isDark 
              ? 'bg-gray-900/70' 
              : 'bg-gray-900/70'
          }`} />
          
          {/* Animated gradient elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.h1 
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-5 lg:mb-6 leading-tight px-2 sm:px-0"
          >
            <span className={`text-high-contrast transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-black'
            }`}>Empowering Enterprises </span>
            <span className="gradient-text">with AI & Intelligent Automation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto px-2 sm:px-4 transition-colors duration-300 text-white`}
          >
            Transform your enterprise with cutting-edge AI and intelligent automation solutions. We deliver breakthrough efficiency, accelerated growth, and data-driven insights that revolutionize how modern businesses operate and compete.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-4 justify-center items-center px-2 sm:px-0"
          >
            <button
              onClick={() => window.location.href = 'https://cal.com/autellia-technology-43lknv'}
              className="inline-flex items-center px-8 py-4 font-semibold text-lg rounded-lg border-none cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white hover:shadow-indigo-500/25 touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              Book a Free Consultation
            </button>
            <Link
              to="/explore-solutions"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white hover:shadow-indigo-500/25 touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5" />
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
              className={`inline-flex items-center px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 hover:scale-105 shadow-lg touch-manipulation ${
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
        className={`py-8 sm:py-12 md:py-16 lg:py-24 transition-colors duration-500 ${
          isDark ? 'bg-[--bg]' : 'bg-white'
        }`}
        data-aos="fade-up"
      >
        <div className="container-responsive">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 transition-colors duration-300 ${
              isDark ? 'text-[--text-primary]' : 'text-gray-900'
            }`}>Industries We Serve</h2>
          </div>
          <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us - Redesigned */}
      <section className={`py-16 sm:py-20 md:py-24 lg:py-32 transition-colors duration-500 ${
        isDark ? 'bg-[--bg]' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Why Forward-Thinking Businesses Choose Autellia</h2>
            <p className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-700'
            }`}>We combine expertise, innovation, and trust to deliver scalable automation solutions.</p>
          </div>

          {/* Hero Metrics Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-12 p-8 rounded-2xl border transition-all duration-300 ${
              isDark 
                ? 'bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border-purple-700/30' 
                : 'bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className={`text-4xl lg:text-5xl font-bold mb-2 ${
                  isDark ? 'text-purple-400' : 'text-purple-600'
                }`}>500+</div>
                <div className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>Projects Delivered</div>
              </div>
              <div>
                <div className={`text-4xl lg:text-5xl font-bold mb-2 ${
                  isDark ? 'text-indigo-400' : 'text-indigo-600'
                }`}>98%</div>
                <div className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>Success Rate</div>
              </div>
              <div>
                <div className={`text-4xl lg:text-5xl font-bold mb-2 ${
                  isDark ? 'text-cyan-400' : 'text-cyan-600'
                }`}>10x</div>
                <div className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>Average ROI</div>
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
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`mt-12 text-center p-6 rounded-xl ${
              isDark ? 'bg-gray-900/30' : 'bg-gray-50'
            }`}
          >
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
              <span className="font-semibold">Trusted by Fortune 500 companies</span> • 
              <span className="ml-2">Serving clients across 12+ industries</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}
        className={`py-16 transition-colors duration-500 ${
          isDark ? 'bg-[--bg]' : 'bg-white'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-[--text-primary]' : 'text-gray-900'
            }`}>What Our Clients Say</h2>
          </div>
          
          {/* Clean White Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Autellia's RPA bots handle our entire order-to-cash process. The reliability and accuracy are exceptional.",
                name: "David Park",
                title: "Operations Manager, RetailPlus",
              },
              {
                text: "The process optimization consulting helped us identify bottlenecks we didn't know existed. ROI was achieved in just 6 weeks.",
                name: "Lisa Thompson",
                title: "Process Excellence Lead, HealthCare United",
              },
              {
                text: "Autellia transformed our operations with intelligent automation. We achieved 80% cost reduction in our invoice processing within 3 months.",
                name: "Sarah Johnson",
                title: "CFO, Global Manufacturing Corp",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl transition-all duration-300 hover:shadow-lg ${
                  isDark 
                    ? 'bg-gradient-to-br from-[--surface] to-[--panel] border border-[--border] hover:border-[--accent]/40'
                    : 'bg-white border border-gray-100 shadow-md hover:shadow-lg'
                }`}
              >
                <p className={`text-lg italic mb-4 transition-colors duration-300 ${
                  isDark ? 'text-[--text-muted]' : 'text-gray-700'
                }`}>"{testimonial.text}"</p>
                <div className={`font-semibold transition-colors duration-300 ${
                  isDark ? 'text-[--text-primary]' : 'text-gray-900'
                }`}>{testimonial.name}</div>
                <div className={`text-sm transition-colors duration-300 ${
                  isDark ? 'text-[--text-muted]' : 'text-gray-500'
                }`}>{testimonial.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      

       {/* Bottom CTA Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}
        className={`py-16 transition-colors duration-500 ${
          isDark ? 'bg-[--bg]' : 'bg-white border-t border-gray-100'
        }`}
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-[--text-primary]' : 'text-gray-900'
          }`}>
            Ready to Get Started?
          </h2>
          <p className={`text-gray-600 max-w-2xl mx-auto mb-8 transition-colors duration-300 ${
            isDark ? 'text-[--text-muted]' : 'text-gray-600'
          }`}>
            Explore a discovery workshop to identify top ROI use cases in 2 weeks 
            and stand up a pilot in 30–45 days with measurable outcomes.
          </p>
          <button
            onClick={() => window.location.href = 'https://cal.com/autellia-technology-43lknv'}
            className={`px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md touch-manipulation ${
              isDark 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white' 
                : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white'
            }`}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            Schedule Discovery Workshop
          </button>
        </div>
      </motion.section>
    </div>
  );
}