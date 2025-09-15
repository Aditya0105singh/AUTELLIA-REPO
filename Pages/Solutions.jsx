import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../src/contexts/ThemeContext';
import { 
  Target, Bot, Brain, Cog, BarChart, FileText, 
  Code, Cloud, Headphones, ArrowRight, Sparkles,
  CheckCircle, Zap, TrendingUp, Shield, Users
} from 'lucide-react';
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";

export default function Solutions() {
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

  const services = [
    {
      icon: Target,
      title: "Automation Consulting & Strategy",
      path: "AutomationConsulting",
      description: "Strategic roadmap development for enterprise automation transformation with measurable ROI.",
      features: ["Process Assessment", "ROI Analysis", "Implementation Planning"],
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Bot,
      title: "BOT Development & Deployment",
      path: "BOTDevelopment",
      description: "Custom RPA bots using UiPath, Power Automate, Blue Prism, and Automation Anywhere.",
      features: ["RPA Development", "Bot Orchestration", "24/7 Monitoring"],
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: Brain,
      title: "AI/ML Model Training & Integration",
      path: "AIMLIntegration",
      description: "Advanced machine learning models for predictive analytics, NLP, and computer vision.",
      features: ["Custom AI Models", "ML Integration", "Predictive Analytics"],
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: TrendingUp,
      title: "Business Process Optimization",
      path: "ProcessOptimization",
      description: "Streamline operations using Lean, Six Sigma, and Process Mining methodologies.",
      features: ["Workflow Analysis", "Process Redesign", "Performance Metrics"],
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: BarChart,
      title: "Data Analytics & Visualization",
      path: "DataAnalytics",
      description: "Transform raw data into actionable insights with Power BI and Tableau dashboards.",
      features: ["Real-time Dashboards", "Predictive Insights", "KPI Tracking"],
      color: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50"
    },
    {
      icon: FileText,
      title: "Intelligent Document Processing",
      path: "DocumentProcessing",
      description: "Automate document extraction and processing with OCR, NLP, and AI technologies.",
      features: ["OCR Solutions", "Document AI", "Data Extraction"],
      color: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50"
    },
    {
      icon: Code,
      title: "Custom Software Development",
      path: "SoftwareDevelopment",
      description: "Tailored web applications, APIs, and enterprise integrations for digital transformation.",
      features: ["Web Applications", "API Development", "System Integration"],
      color: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-50 to-purple-50"
    },
    {
      icon: Cloud,
      title: "Cloud-based Automation & Migration",
      path: "CloudAutomation",
      description: "Seamless cloud migration and automation infrastructure with scalable architectures.",
      features: ["Cloud Migration", "Infrastructure Automation", "DevOps Solutions"],
      color: "from-sky-500 to-blue-500",
      bgGradient: "from-sky-50 to-blue-50"
    },
    {
      icon: Headphones,
      title: "Support & Managed Services",
      path: "ManagedServices",
      description: "24/7 support and maintenance for your automation ecosystem with proactive monitoring.",
      features: ["24/7 Support", "System Monitoring", "Performance Optimization"],
      color: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "$50M+", label: "Cost Savings Generated", icon: TrendingUp },
    { number: "95%", label: "Success Rate", icon: Shield },
    { number: "24/7", label: "Support Coverage", icon: Users }
  ];

  const platforms = [
    { name: "UiPath", color: "from-orange-500 to-red-500" },
    { name: "Power Automate", color: "from-blue-500 to-indigo-500" },
    { name: "Blue Prism", color: "from-blue-600 to-purple-600" },
    { name: "Automation Anywhere", color: "from-green-500 to-teal-500" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800' : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
    }`}>
      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="relative pt-32 pb-24 px-4 overflow-hidden"
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-10 left-10 w-96 h-96 ${
            isDark ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30' : 'bg-gradient-to-r from-blue-400/40 to-cyan-400/40'
          } rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-10 right-10 w-[32rem] h-[32rem] ${
            isDark ? 'bg-gradient-to-r from-purple-500/25 to-pink-500/25' : 'bg-gradient-to-r from-purple-400/35 to-pink-400/35'
          } rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '1s' }} />
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 ${
            isDark ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20' : 'bg-gradient-to-r from-indigo-400/30 to-purple-400/30'
          } rounded-full blur-2xl animate-pulse`} style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <span className={`text-sm font-semibold uppercase tracking-wider ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                Our Solutions
              </span>
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </div>
            
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="block mb-2">Enterprise</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                Automation
              </span>
              <span className={`block text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                & AI Solutions
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto mb-16 leading-relaxed font-medium ${
              isDark ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Transform your business with our <span className="font-bold text-blue-600">comprehensive suite</span> of intelligent automation solutions. 
              From strategy to deployment, we deliver <span className="font-bold text-purple-600">measurable results</span> that drive growth and efficiency.
            </p>

            {/* Enhanced Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.15, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-8 rounded-3xl border-2 transition-all duration-500 group cursor-pointer ${
                      isDark 
                        ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-600/50 hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-gray-700/90 hover:to-gray-800/90' 
                        : 'bg-gradient-to-br from-white to-gray-50/80 border-gray-200/80 hover:border-blue-400/60 hover:shadow-2xl hover:bg-gradient-to-br hover:from-white hover:to-blue-50/60'
                    } backdrop-blur-lg shadow-xl`}
                  >
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      isDark ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-br from-blue-100 to-purple-100'
                    }`}>
                      <IconComponent className={`w-10 h-10 transition-colors duration-300 ${
                        isDark ? 'text-blue-400 group-hover:text-blue-300' : 'text-blue-600 group-hover:text-blue-700'
                      }`} />
                    </div>
                    <div className={`text-3xl md:text-4xl font-black mb-2 transition-colors duration-300 ${
                      isDark ? 'text-white group-hover:text-blue-200' : 'text-gray-900 group-hover:text-blue-800'
                    }`}>
                      {stat.number}
                    </div>
                    <div className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${
                      isDark ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
                    }`}>
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Platforms Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className={`py-20 transition-colors duration-500 relative ${
          isDark ? 'bg-gradient-to-r from-slate-800/90 to-gray-800/90' : 'bg-gradient-to-r from-white to-blue-50/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Powered by
              </span>
              <span className="block mt-2">Leading Platforms</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto font-medium leading-relaxed ${
              isDark ? 'text-gray-200' : 'text-gray-700'
            }`}>
              We leverage <span className="font-bold text-blue-600">industry-leading automation platforms</span> to deliver robust, scalable solutions that transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotateY: 10, z: 50 }}
                className={`p-8 rounded-3xl border-2 text-center transition-all duration-500 group cursor-pointer transform-gpu ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-600/50 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-gray-700/90 hover:to-gray-800/90' 
                    : 'bg-gradient-to-br from-white to-gray-50/80 border-gray-200/80 hover:border-purple-400/60 hover:shadow-2xl hover:bg-gradient-to-br hover:from-white hover:to-purple-50/60'
                } backdrop-blur-lg shadow-xl`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${platform.color} p-4 shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                  <Zap className="w-full h-full text-white" />
                </div>
                <h3 className={`font-bold text-lg transition-colors duration-300 ${
                  isDark ? 'text-white group-hover:text-purple-200' : 'text-gray-900 group-hover:text-purple-800'
                }`}>
                  {platform.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className={`py-24 transition-colors duration-500 relative ${
          isDark ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800' : 'bg-gradient-to-br from-gray-50 via-white to-indigo-50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-5xl md:text-6xl font-black mb-8 leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="block mb-2">Our Solutions</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium ${
              isDark ? 'text-gray-200' : 'text-gray-700'
            }`}>
              <span className="font-bold text-blue-600">Comprehensive automation and AI solutions</span> designed to transform your business operations with <span className="font-bold text-purple-600">cutting-edge technology</span> and proven methodologies
            </p>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group"
                >
                  <Link
                    to={createPageUrl(service.path)}
                    className="block h-full"
                  >
                    <div className={`h-full p-10 rounded-3xl border-2 transition-all duration-500 ${
                      isDark 
                        ? 'bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-600/50 hover:border-blue-500/70 hover:bg-gradient-to-br hover:from-gray-700/95 hover:to-gray-800/95' 
                        : 'bg-gradient-to-br from-white to-gray-50/90 border-gray-200/80 hover:border-blue-400/70 hover:shadow-2xl hover:bg-gradient-to-br hover:from-white hover:to-blue-50/80'
                    } backdrop-blur-lg relative overflow-hidden shadow-xl group-hover:shadow-3xl`}>
                      
                      {/* Enhanced Background Gradient Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl`} />
                      <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-all duration-700 rounded-full blur-2xl`} />
                      
                      {/* Enhanced Icon */}
                      <div className={`relative z-10 w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} p-5 mb-8 shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className={`text-2xl font-black mb-6 group-hover:text-blue-600 transition-colors duration-300 leading-tight ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {service.title}
                        </h3>
                        
                        <p className={`text-base mb-8 leading-relaxed font-medium ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {service.description}
                        </p>

                        {/* Enhanced Features */}
                        <div className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} shadow-lg`} />
                              <span className={`text-sm font-semibold ${
                                isDark ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Enhanced Learn More */}
                        <div className="flex items-center gap-3 group/link">
                          <span className={`text-lg font-bold transition-colors duration-300 ${
                            isDark ? 'text-blue-400 group-hover/link:text-blue-300' : 'text-blue-600 group-hover/link:text-blue-700'
                          }`}>
                            Learn More
                          </span>
                          <ArrowRight className={`w-6 h-6 transition-all duration-300 group-hover/link:translate-x-2 group-hover/link:scale-110 ${
                            isDark ? 'text-blue-400 group-hover/link:text-blue-300' : 'text-blue-600 group-hover/link:text-blue-700'
                          }`} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className={`py-20 text-center transition-colors duration-500 ${
          isDark ? 'bg-[--bg]' : 'bg-gray-50'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
            isDark ? 'text-[--text-primary]' : 'text-gray-900'
          }`}>Ready to Transform Your Operations?</h2>
          <p className={`text-xl mb-8 leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-[--text-muted]' : 'text-gray-600'
          }`}>
            Contact us today to discover how our comprehensive automation and AI solutions can drive your business forward.
          </p>
          <button
            onClick={() => window.location.href = 'https://cal.com/autellia-technology-43lknv'}
            className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 max-w-sm mx-auto touch-manipulation"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            Get in Touch
          </button>
        </div>
      </motion.section>
    </div>
  );
}