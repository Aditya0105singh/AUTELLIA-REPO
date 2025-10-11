
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { Target, Users, BarChart3, CheckCircle, ArrowRight, Lightbulb, Zap, TrendingUp, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function AutomationConsulting() {
  const { isDark } = useTheme();
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const benefits = [
    { icon: Target, title: "Strategic Roadmap", desc: "Comprehensive automation strategy aligned with business goals" },
    { icon: TrendingUp, title: "ROI Analysis", desc: "Detailed business case development and value assessment" },
    { icon: Zap, title: "Technology Selection", desc: "Platform evaluation and architecture design" },
    { icon: Shield, title: "Governance Framework", desc: "Center of Excellence setup and best practices" },
    { icon: Users, title: "Change Management", desc: "Stakeholder alignment and adoption strategies" }
  ];

  const deliverables = [
    {
      icon: BarChart3,
      title: "Automation Assessment Report",
      description: "Comprehensive analysis of current processes and automation readiness",
      timeline: "2-3 weeks"
    },
    {
      icon: Target,
      title: "Strategic Roadmap",
      description: "Prioritized implementation plan with timeline and resource requirements",
      timeline: "3-4 weeks"
    },
    {
      icon: Lightbulb,
      title: "Technology Blueprint",
      description: "Recommended platform architecture and integration strategy"
    },
    {
      title: "Governance Framework", 
      description: "CoE model, policies, and best practices for sustainable automation"
    }
  ];

  // Component for a single background ripple element
  const BackgroundRipple = ({ delay, duration, size, top, left, color, blur }) => (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        top: top,
        left: left,
        backgroundColor: color,
        filter: `blur(${blur}px)`, // Apply blur effect
        zIndex: 0, // Ensure it's behind content
        pointerEvents: 'none', // Don't block interactions
      }}
      initial={{ scale: 0.1, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: [0, 0.05, 0], // Fade in slightly then fade out
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: delay, // Delay before next repetition
        delay: delay // Initial delay for staggering
      }}
    />
  );

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-[--bg] text-[--text-primary]' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80')`
          }}
        />
        <div className={`absolute inset-0 backdrop-blur-sm ${
          isDark ? 'bg-gray-900/80' : 'bg-white/85'
        }`} />
        
        {/* Animated gradient elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="relative z-10 pt-16 sm:pt-20 pb-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 ${
                isDark ? 'bg-cyan-500/20 border border-cyan-500/30' : 'bg-cyan-100 border border-cyan-200'
              }`}
            >
              <Target className={`w-10 h-10 ${
                isDark ? 'text-cyan-400' : 'text-cyan-600'
              }`} />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Automation Consulting
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                & Strategy
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Transform your business with strategic automation consulting that aligns technology 
              initiatives with business outcomes and maximizes ROI.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to={createPageUrl('demo')}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to={createPageUrl('case-studies')}
                className={`inline-flex items-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  isDark 
                    ? 'border border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500' 
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400'
                }`}
              >
                View Case Studies
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Benefits Section */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={containerVariants}
        className="relative z-10 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={itemVariants}
              className={`text-3xl md:text-5xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Why Choose Our Consulting?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Our strategic approach ensures successful automation transformation with measurable business impact.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/70 hover:border-gray-600' 
                      : 'bg-white/80 border border-gray-200 hover:bg-white hover:border-gray-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-colors duration-300 ${
                    isDark 
                      ? 'bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30' 
                      : 'bg-cyan-100 text-cyan-600 group-hover:bg-cyan-200'
                  }`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {benefit.title}
                  </h3>
                  <p className={`leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Overview */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-3xl p-12 md:p-16 ${
            isDark 
              ? 'bg-gray-800/50 border border-gray-700/50' 
              : 'bg-white/80 border border-gray-200 shadow-xl'
          }`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Strategic Automation Planning
                </h2>
                <p className={`text-lg leading-relaxed mb-8 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Our automation consulting services help organizations develop comprehensive strategies 
                  for digital transformation through intelligent automation. We work with your leadership 
                  team to identify high-impact opportunities, design scalable automation architectures, 
                  and establish governance frameworks that ensure sustainable success.
                </p>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  From initial assessment to full-scale implementation roadmaps, our consultants bring 
                  deep industry expertise and proven methodologies to accelerate your automation journey 
                  while minimizing risks and maximizing business value.
                </p>
              </div>
              <div className="flex justify-center">
                <div className={`w-full max-w-md p-8 rounded-2xl ${
                  isDark ? 'bg-cyan-500/10 border border-cyan-500/20' : 'bg-cyan-50 border border-cyan-200'
                }`}>
                  <div className="text-center">
                    <Clock className={`w-12 h-12 mx-auto mb-4 ${
                      isDark ? 'text-cyan-400' : 'text-cyan-600'
                    }`} />
                    <h3 className={`text-xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Typical Timeline
                    </h3>
                    <p className={`text-lg ${
                      isDark ? 'text-cyan-300' : 'text-cyan-700'
                    }`}>
                      4-8 weeks
                    </p>
                    <p className={`text-sm mt-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      From assessment to strategy delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Deliverables */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={itemVariants}
              className={`text-3xl md:text-5xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              What You'll Receive
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Comprehensive deliverables designed to guide your automation transformation journey.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {deliverables.map((deliverable, index) => {
              const IconComponent = deliverable.icon || Lightbulb;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants} 
                  className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/70 hover:border-gray-600' 
                      : 'bg-white/80 border border-gray-200 hover:bg-white hover:border-gray-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-colors duration-300 ${
                    isDark 
                      ? 'bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30' 
                      : 'bg-cyan-100 text-cyan-600 group-hover:bg-cyan-200'
                  }`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {deliverable.title}
                  </h3>
                  <p className={`leading-relaxed mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {deliverable.description}
                  </p>
                  {deliverable.timeline && (
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                      isDark 
                        ? 'bg-cyan-500/20 text-cyan-300' 
                        : 'bg-cyan-100 text-cyan-700'
                    }`}>
                      <Clock className="w-4 h-4" />
                      {deliverable.timeline}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-20 relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`rounded-3xl p-12 md:p-16 ${
            isDark 
              ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50' 
              : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-200 shadow-xl'
          }`}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Build Your Automation Strategy?
            </h2>
            <p className={`text-lg md:text-xl mb-8 leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Let our experts help you develop a comprehensive automation roadmap 
              that drives measurable business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to={createPageUrl("demo")}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to={createPageUrl("solutions")}
                className={`inline-flex items-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  isDark 
                    ? 'border border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500' 
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400'
                }`}
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
