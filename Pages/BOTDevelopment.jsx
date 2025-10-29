
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { Bot, Code, Zap, CheckCircle, ArrowRight, Cog, Settings, Cpu, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function BOTDevelopment() {
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

  const capabilities = [
    "End-to-end RPA bot development and testing",
    "Cross-platform automation (UiPath, Power Automate, Blue Prism)",
    "API integrations and system connectivity",
    "Intelligent document processing integration",
    "Exception handling and error recovery mechanisms"
  ];

  const platforms = [
    {
      name: "UiPath",
      description: "Enterprise-grade RPA platform for complex automation scenarios"
    },
    {
      name: "Microsoft Power Automate",
      description: "Cloud-native automation integrated with Microsoft ecosystem"
    },
    {
      name: "Blue Prism",
      description: "Secure, scalable RPA platform for regulated industries"
    },
    {
      name: "Automation Anywhere",
      description: "AI-powered automation platform with cloud-native architecture"
    }
  ];

  const benefits = [
    { icon: Bot, title: "Custom Development", desc: "Tailored bots designed for your specific business processes and requirements" },
    { icon: Settings, title: "System Integration", desc: "Seamless integration with existing systems and workflows" },
    { icon: Zap, title: "Scalable Architecture", desc: "High-performance bots supporting enterprise-level operations" },
    { icon: Cpu, title: "AI-Powered Intelligence", desc: "Advanced cognitive capabilities for intelligent decision-making" },
    { icon: Shield, title: "Quality Assurance", desc: "Comprehensive testing and validation for reliable performance" }
  ];

  const deliverables = [
    {
      icon: Code,
      title: "Bot Design & Architecture",
      description: "Detailed technical specifications and system architecture documentation",
      timeline: "1-2 weeks"
    },
    {
      icon: Bot,
      title: "Custom Bot Development", 
      description: "Fully developed and tested automation bots ready for deployment",
      timeline: "4-8 weeks"
    },
    {
      icon: Settings,
      title: "Integration Framework",
      description: "APIs and connectors for seamless system integration",
      timeline: "2-3 weeks"
    },
    {
      icon: CheckCircle,
      title: "Documentation & Training",
      description: "Complete user guides, technical documentation, and team training",
      timeline: "1-2 weeks"
    }
  ];

  // Properties for background ripple effect
  const rippleCount = 8;
  const ripples = Array.from({ length: rippleCount }).map((_, i) => ({
    id: i,
    size: Math.random() * 200 + 150, // Size between 150px and 350px
    delay: Math.random() * 3, // Delay between 0s and 3s
    duration: Math.random() * 8 + 10, // Duration between 10s and 18s
    initialX: Math.random() * 100, // Initial X percentage from left
    initialY: Math.random() * 100, // Initial Y percentage from top
    xMove: (Math.random() - 0.5) * 40, // Move max +/- 20vw
    yMove: (Math.random() - 0.5) * 40, // Move max +/- 20vh
  }));

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-[--bg] text-[--text-primary]' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className={`absolute inset-0 backdrop-blur-sm ${
          isDark ? 'bg-gray-900/80' : 'bg-white/85'
        }`} />
        
        {/* Animated gradient elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="relative z-10 pt-32 pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ scale: 0, rotate: -180 }} 
              animate={{ scale: 1, rotate: 0 }} 
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-10 shadow-2xl ${
                isDark ? 'bg-gradient-to-br from-orange-500/30 to-red-500/30 border border-orange-500/50' : 'bg-gradient-to-br from-orange-100 to-red-100 border border-orange-300'
              }`}
            >
              <Bot className={`w-12 h-12 ${
                isDark ? 'text-orange-400' : 'text-orange-600'
              }`} />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 overflow-visible ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              style={{ lineHeight: '1.15' }}
            >
              Intelligent BOT
              <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse pb-2">
                Development
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`text-xl md:text-2xl leading-relaxed max-w-5xl mx-auto mb-12 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Transform your business with cutting-edge RPA bots that deliver precision automation, 
              intelligent decision-making, and enterprise-grade reliability across all major platforms.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <Link 
                to={createPageUrl('Solutions')}
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-bold text-lg rounded-2xl hover:from-orange-600 hover:via-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25"
              >
                Start Your Project
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to={createPageUrl('CaseStudies')}
                className={`inline-flex items-center px-10 py-5 font-bold text-lg rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm ${
                  isDark 
                    ? 'border-orange-500/50 text-orange-400 hover:bg-orange-500/10 bg-gray-800/30' 
                    : 'border-orange-600/50 text-orange-600 hover:bg-orange-50 bg-white/70 shadow-lg'
                }`}
              >
                View Case Studies
              </Link>
            </motion.div>

            {/* Enhanced Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { number: "500+", label: "Bots Deployed", icon: Bot, color: "orange" },
                { number: "99.9%", label: "Uptime", icon: Shield, color: "green" },
                { number: "80%", label: "Cost Reduction", icon: Zap, color: "blue" },
                { number: "24/7", label: "Support", icon: Settings, color: "purple" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className={`group text-center p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 hover:scale-110 cursor-pointer ${
                    isDark 
                      ? 'bg-gray-800/40 border border-gray-700/50 hover:bg-gray-800/60 hover:border-gray-600' 
                      : 'bg-white/80 border border-gray-200 hover:bg-white hover:border-gray-300 shadow-xl hover:shadow-2xl'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110 ${
                    isDark ? 'bg-orange-500/20 group-hover:bg-orange-500/30' : 'bg-orange-100 group-hover:bg-orange-200'
                  }`}>
                    <stat.icon className={`w-8 h-8 ${
                      isDark ? 'text-orange-400' : 'text-orange-600'
                    }`} />
                  </div>
                  <div className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className={`text-base font-semibold ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
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
        className="relative z-10 py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              variants={itemVariants}
              className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold mb-8 ${
                isDark 
                  ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' 
                  : 'bg-orange-100 text-orange-700 border border-orange-200'
              }`}
            >
              <Zap className="w-4 h-4 mr-2" />
              Premium Development Services
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className={`text-4xl md:text-6xl font-bold mb-8 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                BOT Development?
              </span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Expert development services that deliver reliable, scalable automation solutions 
              with enterprise-grade security and performance.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`group relative p-10 rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden ${
                    isDark 
                      ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 hover:border-orange-500/50' 
                      : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-gray-200 hover:border-orange-300 shadow-xl hover:shadow-2xl'
                  }`}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8 transition-all duration-300 group-hover:scale-110 ${
                      isDark 
                        ? 'bg-gradient-to-br from-orange-500/20 to-red-500/20 text-orange-400 group-hover:from-orange-500/30 group-hover:to-red-500/30' 
                        : 'bg-gradient-to-br from-orange-100 to-red-100 text-orange-600 group-hover:from-orange-200 group-hover:to-red-200'
                    }`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {benefit.title}
                    </h3>
                    <p className={`text-lg leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
          className="relative z-10 py-24"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`relative rounded-4xl p-16 overflow-hidden ${
              isDark ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50' : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-gray-200 shadow-2xl'
            }`}>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500 to-red-500" />
              </div>
              
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-8 ${
                    isDark ? 'bg-orange-500/20 border border-orange-500/30' : 'bg-orange-100 border border-orange-200'
                  }`}
                >
                  <Code className={`w-10 h-10 ${
                    isDark ? 'text-orange-400' : 'text-orange-600'
                  }`} />
                </motion.div>
                
                <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Expert Bot Development
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 text-left">
                  <div>
                    <p className={`text-xl leading-relaxed mb-6 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Our certified developers create robust, scalable automation bots that handle complex 
                      business processes with precision and reliability. We specialize in developing bots 
                      across all major RPA platforms, ensuring optimal performance and maintainability.
                    </p>
                  </div>
                  <div>
                    <p className={`text-xl leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      From simple data entry automation to complex multi-system orchestration, our bots 
                      are designed with enterprise-grade error handling, logging, and monitoring capabilities 
                      to ensure reliable 24/7 operation.
                    </p>
                  </div>
                </div>

                {/* Feature highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                  {[
                    { icon: Shield, label: "Secure" },
                    { icon: Zap, label: "Fast" },
                    { icon: Settings, label: "Reliable" },
                    { icon: CheckCircle, label: "Tested" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-3 ${
                        isDark ? 'bg-orange-500/20' : 'bg-orange-100'
                      }`}>
                        <feature.icon className={`w-6 h-6 ${
                          isDark ? 'text-orange-400' : 'text-orange-600'
                        }`} />
                      </div>
                      <p className={`font-semibold ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {feature.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </motion.section>

      {/* Capabilities */}
      <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
          className="relative z-10 py-16"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-12 text-center transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Development Capabilities</h2>
            <div className="space-y-4">
              {capabilities.map((capability, index) => (
                <motion.div key={index} variants={itemVariants} className={`flex items-start gap-4 p-6 rounded-xl transition-colors duration-300 ${
                  isDark ? 'border border-gray-700 bg-gray-800/30' : 'border border-gray-200 bg-white/80 shadow-lg'
                }`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition-colors duration-300 ${
                    isDark ? 'bg-cyan-500' : 'bg-orange-500'
                  }`}>
                    <CheckCircle className={`w-4 h-4 ${
                      isDark ? 'text-gray-900' : 'text-white'
                    }`} />
                  </div>
                  <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>{capability}</p>
                </motion.div>
              ))}
            </div>
          </div>
      </motion.section>

      {/* Supported Platforms */}
      <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
          className="relative z-10 py-16"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-12 text-center transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Supported Platforms</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <motion.div key={index} variants={itemVariants} className={`rounded-2xl p-8 transition-colors duration-300 ${
                  isDark ? 'border border-gray-700 bg-gray-800/30' : 'border border-gray-200 bg-white/80 shadow-lg'
                }`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                    isDark ? 'bg-cyan-500/20 border border-cyan-500' : 'bg-orange-100 border border-orange-200'
                  }`}>
                    <Cog className={`w-6 h-6 transition-colors duration-300 ${
                      isDark ? 'text-cyan-400' : 'text-orange-600'
                    }`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{platform.name}</h3>
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{platform.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
      </motion.section>

      {/* Development Process */}
      <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
          className="relative z-10 py-16"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-12 text-center transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Our Development Process</h2>
            <div className="space-y-8">
              <motion.div variants={itemVariants} className={`flex items-start gap-6 p-6 rounded-xl transition-colors duration-300 ${
                isDark ? 'border border-gray-700 bg-gray-800/30' : 'border border-gray-200 bg-white/80 shadow-lg'
              }`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg transition-colors duration-300 ${
                  isDark ? 'bg-cyan-500/80 text-gray-900' : 'bg-orange-500 text-white'
                }`}>
                  1
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Process Analysis & Design</h3>
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Detailed process mapping, exception identification, and bot architecture design.
                  </p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className={`flex items-start gap-6 p-6 rounded-xl transition-colors duration-300 ${
                isDark ? 'border border-gray-700 bg-gray-800/30' : 'border border-gray-200 bg-white/80 shadow-lg'
              }`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg transition-colors duration-300 ${
                  isDark ? 'bg-cyan-500/80 text-gray-900' : 'bg-orange-500 text-white'
                }`}>
                  2
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Development & Testing</h3>
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Agile development with continuous testing and validation against business requirements.
                  </p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className={`flex items-start gap-6 p-6 rounded-xl transition-colors duration-300 ${
                isDark ? 'border border-gray-700 bg-gray-800/30' : 'border border-gray-200 bg-white/80 shadow-lg'
              }`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg transition-colors duration-300 ${
                  isDark ? 'bg-cyan-500/80 text-gray-900' : 'bg-orange-500 text-white'
                }`}>
                  3
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Deployment & Monitoring</h3>
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Production deployment with comprehensive monitoring and performance optimization.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
      </motion.section>

      {/* Strategic Overview Section */}
      <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={fadeIn}
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
                Our Development Approach
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className={`text-xl max-w-3xl mx-auto ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Comprehensive bot development services covering the entire automation lifecycle.
              </motion.p>
            </div>
            
            <div className={`rounded-3xl p-12 ${
              isDark 
                ? 'bg-gray-800/50 border border-gray-700/50' 
                : 'bg-white/80 border border-gray-200 shadow-xl'
            }`}>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className={`text-2xl font-bold mb-6 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Development Process
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Requirements analysis and process mapping',
                      'Bot design and architecture planning', 
                      'Development and testing phases',
                      'Deployment and integration'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          isDark ? 'bg-orange-400' : 'bg-orange-500'
                        }`} />
                        <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-6 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Quality Assurance
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Comprehensive testing protocols',
                      'Performance optimization',
                      'Security and compliance validation', 
                      'User acceptance testing'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          isDark ? 'bg-orange-400' : 'bg-orange-500'
                        }`} />
                        <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </motion.section>

      {/* Bot Capabilities Section */}
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
                Bot Capabilities
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className={`text-xl max-w-3xl mx-auto ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Advanced automation capabilities designed to handle complex business processes.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
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
                      ? 'bg-orange-500/20 text-orange-400 group-hover:bg-orange-500/30' 
                      : 'bg-orange-100 text-orange-600 group-hover:bg-orange-200'
                  }`}>
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {capability}
                  </h3>
                  <p className={`leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Advanced automation capability for enterprise-level operations.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
      </motion.section>

      {/* Supported Platforms Section */}
      <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={fadeIn}
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
                Supported Platforms
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className={`text-xl max-w-3xl mx-auto ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                We develop bots for all major RPA and automation platforms.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/50' 
                      : 'bg-white/80 border border-gray-200 hover:bg-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                    isDark ? 'bg-orange-500/20' : 'bg-orange-100'
                  }`}>
                    <Cog className={`w-6 h-6 ${
                      isDark ? 'text-orange-400' : 'text-orange-600'
                    }`} />
                  </div>
                  <h3 className={`font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {platform.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Development Process Timeline */}
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
                Development Timeline
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className={`text-xl max-w-3xl mx-auto ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Our structured approach ensures successful bot deployment.
              </motion.p>
            </div>
            
            <div className="space-y-8">
              {deliverables.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-6"
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      isDark 
                        ? 'bg-orange-500/20 border border-orange-500/30' 
                        : 'bg-orange-100 border border-orange-200'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        isDark ? 'text-orange-400' : 'text-orange-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-3 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-lg mb-4 leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {step.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <Clock className={`w-5 h-5 ${
                          isDark ? 'text-orange-400' : 'text-orange-500'
                        }`} />
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                          isDark 
                            ? 'bg-orange-500/20 text-orange-400' 
                            : 'bg-orange-100 text-orange-600'
                        }`}>
                          {step.timeline}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={fadeIn}
          className="relative z-10 py-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`rounded-3xl p-12 ${
              isDark 
                ? 'bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20' 
                : 'bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200'
            }`}>
              <motion.h2 
                variants={itemVariants}
                className={`text-3xl md:text-5xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Ready to Automate Your Processes?
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className={`text-xl mb-10 max-w-2xl mx-auto ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Let's discuss your automation needs and create custom bots that transform your business operations.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link 
                  to={createPageUrl("demo")}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Bot className="mr-2 w-5 h-5" />
                  Start Your Bot Project
                </Link>
                <Link 
                  to={createPageUrl("Solutions")}
                  className={`inline-flex items-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    isDark 
                      ? 'border border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500' 
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400'
                  }`}
                >
                  View All Services
                </Link>
              </motion.div>
            </div>
          </div>
      </motion.section>
    </div>
  );
}
