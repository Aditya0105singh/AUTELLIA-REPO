
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { TrendingUp, Target, BarChart3, CheckCircle, ArrowRight, Activity, Zap, Settings, Clock, Users, LineChart, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function ProcessOptimization() {
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
    {
      icon: BarChart3,
      title: "Process Analysis & Mapping",
      desc: "Comprehensive analysis of current workflows to identify bottlenecks, inefficiencies, and optimization opportunities."
    },
    {
      icon: Target,
      title: "Performance Optimization",
      desc: "Redesign processes for maximum efficiency using proven methodologies and best practices."
    },
    {
      icon: Gauge,
      title: "KPI Development & Monitoring",
      desc: "Establish key performance indicators and monitoring systems to track process improvements."
    },
    {
      icon: Users,
      title: "Change Management",
      desc: "Support teams through process changes with comprehensive training and adoption strategies."
    },
    {
      icon: LineChart,
      title: "Continuous Improvement",
      desc: "Implement ongoing optimization culture with regular reviews and iterative enhancements."
    },
    {
      icon: Zap,
      title: "Automation Integration",
      desc: "Identify and implement automation opportunities to eliminate manual tasks and reduce errors."
    }
  ];

  const methodologies = [
    {
      icon: Target,
      title: "Lean Six Sigma",
      description: "Data-driven approach to eliminate waste and reduce process variation",
      timeline: "4-8 weeks"
    },
    {
      icon: Activity,
      title: "Process Mining",
      description: "Advanced analytics to discover actual process flows and inefficiencies",
      timeline: "2-4 weeks"
    },
    {
      icon: BarChart3,
      title: "Value Stream Mapping",
      description: "Visual representation of information and material flow through processes",
      timeline: "3-6 weeks"
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Ongoing optimization culture with regular monitoring and adjustments",
      timeline: "Ongoing"
    }
  ];

  const framework = [
    {
      title: "Current State Analysis",
      desc: "Comprehensive assessment of existing processes, identification of pain points and inefficiencies.",
      timeline: "2-3 weeks"
    },
    {
      title: "Future State Design",
      desc: "Redesign processes for optimal efficiency, incorporating best practices and automation opportunities.",
      timeline: "3-4 weeks"
    },
    {
      title: "Implementation & Training",
      desc: "Execute process changes with comprehensive change management and team training programs.",
      timeline: "4-6 weeks"
    },
    {
      title: "Monitoring & Optimization",
      desc: "Continuous performance monitoring with regular reviews and iterative improvements.",
      timeline: "Ongoing"
    }
  ];

  const results = [
    {
      icon: BarChart3,
      metric: "30-50%",
      description: "Cycle Time Reduction"
    },
    {
      icon: Target,
      metric: "25-40%",
      description: "Cost Savings"
    },
    {
      icon: TrendingUp,
      metric: "95%+",
      description: "Quality Improvement"
    }
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-[--bg] text-[--text-primary]' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80')`
          }}
        />
        <div className={`absolute inset-0 backdrop-blur-sm ${
          isDark ? 'bg-gray-900/80' : 'bg-white/85'
        }`} />
        
        {/* Animated gradient elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="relative z-10 pt-24 pb-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 ${
                isDark ? 'bg-green-500/20 border border-green-500/30' : 'bg-green-100 border border-green-200'
              }`}
            >
              <TrendingUp className={`w-10 h-10 ${
                isDark ? 'text-green-400' : 'text-green-600'
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
              Process Optimization
              <span className="block bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                & Excellence
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
              Streamline operations and maximize efficiency through comprehensive process 
              analysis, redesign, and continuous improvement initiatives.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to={createPageUrl('demo')}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Optimization
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
              Optimization Benefits
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Comprehensive process improvement services that deliver measurable business results.
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
                      ? 'bg-green-500/20 text-green-400 group-hover:bg-green-500/30' 
                      : 'bg-green-100 text-green-600 group-hover:bg-green-200'
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
              Optimize for Excellence
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Transform your operations with proven methodologies and data-driven process improvements.
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
                  Our Approach
                </h3>
                <p className={`text-lg leading-relaxed mb-6 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  We combine proven methodologies like Lean Six Sigma with advanced process mining techniques 
                  to deliver measurable improvements that align with your business objectives.
                </p>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  From initial assessment to implementation and monitoring, we ensure sustainable 
                  process improvements that reduce costs and enhance customer satisfaction.
                </p>
              </div>
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Key Focus Areas
                </h3>
                <div className="space-y-4">
                  {[
                    'Bottleneck identification and elimination',
                    'Workflow redesign and optimization',
                    'Performance metrics development',
                    'Change management and training'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        isDark ? 'bg-green-400' : 'bg-green-500'
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

      {/* Methodologies Section */}
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
              Our Methodologies
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Proven frameworks and techniques for systematic process improvement.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {methodologies.map((methodology, index) => {
              const IconComponent = methodology.icon;
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
                      ? 'bg-green-500/20 text-green-400 group-hover:bg-green-500/30' 
                      : 'bg-green-100 text-green-600 group-hover:bg-green-200'
                  }`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {methodology.title}
                  </h3>
                  <p className={`leading-relaxed mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {methodology.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Clock className={`w-5 h-5 ${
                      isDark ? 'text-green-400' : 'text-green-500'
                    }`} />
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      isDark 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-green-100 text-green-600'
                    }`}>
                      {methodology.timeline}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Optimization Framework Timeline */}
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
              Optimization Framework
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Our systematic approach to delivering sustainable process improvements.
            </motion.p>
          </div>
          
          <div className="space-y-8">
            {framework.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-6"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  isDark 
                    ? 'bg-green-500/20 border border-green-500/30' 
                    : 'bg-green-100 border border-green-200'
                }`}>
                  <span className={`text-xl font-bold ${
                    isDark ? 'text-green-400' : 'text-green-600'
                  }`}>
                    {index + 1}
                  </span>
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
                    {step.desc}
                  </p>
                  <div className="flex items-center gap-2">
                    <Clock className={`w-5 h-5 ${
                      isDark ? 'text-green-400' : 'text-green-500'
                    }`} />
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      isDark 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-green-100 text-green-600'
                    }`}>
                      {step.timeline}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Expected Results Section */}
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
              Expected Results
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Measurable improvements that drive business value and operational excellence.
            </motion.p>
          </div>
          
          <div className={`rounded-3xl p-12 ${
            isDark 
              ? 'bg-gray-800/50 border border-gray-700/50' 
              : 'bg-white/80 border border-gray-200 shadow-xl'
          }`}>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {results.map((result, index) => {
                const IconComponent = result.icon;
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                      isDark 
                        ? 'bg-green-500/20 border border-green-500/30' 
                        : 'bg-green-100 border border-green-200'
                    }`}>
                      <IconComponent className={`w-10 h-10 ${
                        isDark ? 'text-green-400' : 'text-green-600'
                      }`} />
                    </div>
                    <h3 className={`text-3xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {result.metric}
                    </h3>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                      {result.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
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
              ? 'bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20' 
              : 'bg-gradient-to-r from-green-50 to-teal-50 border border-green-200'
          }`}>
            <motion.h2 
              variants={itemVariants}
              className={`text-3xl md:text-5xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Ready to Optimize Your Processes?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-xl mb-10 max-w-2xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Let our experts help you identify inefficiencies and redesign your processes 
              for maximum performance and cost savings.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to={createPageUrl("demo")}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <TrendingUp className="mr-2 w-5 h-5" />
                Start Optimization
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
