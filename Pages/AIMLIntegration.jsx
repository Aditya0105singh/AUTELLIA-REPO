
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { Brain, Cpu, Zap, CheckCircle, ArrowRight, Network, Database, Eye, MessageSquare, TrendingUp, Clock, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function AIMLIntegration() {
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
      icon: Brain,
      title: "Intelligent Decision Making",
      desc: "AI-powered systems that learn from data patterns and make autonomous decisions to optimize business processes."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      desc: "Advanced forecasting models that predict trends, behaviors, and outcomes to enable proactive business strategies."
    },
    {
      icon: Eye,
      title: "Computer Vision",
      desc: "Visual recognition systems for document processing, quality control, and automated visual inspections."
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      desc: "Text analysis, sentiment detection, and language understanding for automated communication and content processing."
    },
    {
      icon: Database,
      title: "Data Intelligence",
      desc: "Transform raw data into actionable insights using machine learning algorithms and statistical analysis."
    },
    {
      icon: Target,
      title: "Custom Model Development",
      desc: "Tailored AI solutions designed specifically for your industry requirements and business objectives."
    }
  ];

  const services = [
    "Custom ML model development and training",
    "Pre-trained model integration and fine-tuning",
    "Natural Language Processing (NLP) solutions",
    "Computer Vision and OCR implementation",
    "Predictive analytics and forecasting models"
  ];

  const useCases = [
    {
      icon: Database,
      title: "Intelligent Document Processing",
      description: "Extract and classify data from unstructured documents using advanced OCR and NLP",
      timeline: "2-4 weeks"
    },
    {
      icon: TrendingUp,
      title: "Predictive Maintenance",
      description: "Machine learning models to predict equipment failures and optimize maintenance schedules",
      timeline: "4-6 weeks"
    },
    {
      icon: MessageSquare,
      title: "Customer Sentiment Analysis",
      description: "Real-time analysis of customer feedback and social media mentions for insights",
      timeline: "3-5 weeks"
    },
    {
      icon: Eye,
      title: "Fraud Detection",
      description: "AI-powered anomaly detection to identify suspicious transactions and activities",
      timeline: "6-8 weeks"
    }
  ];

  const technologies = [
    {
      icon: Cpu,
      category: "Frameworks",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face"]
    },
    {
      icon: Zap,
      category: "Cloud Platforms",
      items: ["Azure ML", "AWS SageMaker", "Google Cloud AI", "IBM Watson"]
    },
    {
      icon: Brain,
      category: "Specializations",
      items: ["NLP", "Computer Vision", "Time Series", "Deep Learning"]
    }
  ];

  const process = [
    {
      title: "Data Assessment & Strategy",
      desc: "Analyze your data landscape and define AI objectives aligned with business goals.",
      timeline: "1-2 weeks"
    },
    {
      title: "Model Development & Training",
      desc: "Build and train custom machine learning models using your specific datasets.",
      timeline: "3-6 weeks"
    },
    {
      title: "Integration & Testing",
      desc: "Seamlessly integrate AI models into existing systems with comprehensive testing.",
      timeline: "2-3 weeks"
    },
    {
      title: "Deployment & Monitoring",
      desc: "Deploy models to production with continuous monitoring and performance optimization.",
      timeline: "1-2 weeks"
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
            backgroundImage: `url('https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className={`absolute inset-0 backdrop-blur-sm ${
          isDark ? 'bg-gray-900/80' : 'bg-white/85'
        }`} />
        
        {/* Animated gradient elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                isDark ? 'bg-blue-500/20 border border-blue-500/30' : 'bg-blue-100 border border-blue-200'
              }`}
            >
              <Brain className={`w-10 h-10 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
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
              AI/ML Integration
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                & Intelligence
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
              Transform your business with intelligent AI solutions that learn, adapt, 
              and make autonomous decisions to drive unprecedented efficiency.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to={createPageUrl('demo')}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore AI Solutions
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
              AI-Powered Capabilities
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Cutting-edge artificial intelligence solutions that revolutionize how your business operates.
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
                      ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30' 
                      : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
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
              Intelligent Automation Solutions
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Transform traditional automation into intelligent, adaptive systems that learn and improve over time.
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
                  AI Integration Services
                </h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        isDark ? 'bg-blue-400' : 'bg-blue-500'
                      }`} />
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Key Technologies
                </h3>
                <div className="space-y-4">
                  {[
                    'Machine Learning & Deep Learning',
                    'Natural Language Processing (NLP)',
                    'Computer Vision & OCR',
                    'Predictive Analytics & Forecasting'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        isDark ? 'bg-blue-400' : 'bg-blue-500'
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

      {/* Use Cases Section */}
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
              AI Use Cases & Applications
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Real-world applications of AI that deliver measurable business value.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
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
                      ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30' 
                      : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                  }`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {useCase.title}
                  </h3>
                  <p className={`leading-relaxed mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {useCase.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Clock className={`w-5 h-5 ${
                      isDark ? 'text-blue-400' : 'text-blue-500'
                    }`} />
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      isDark 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {useCase.timeline}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Technology Stack Section */}
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
              Technology Stack
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Cutting-edge tools and platforms for building robust AI solutions.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`group p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/70 hover:border-gray-600' 
                      : 'bg-white/80 border border-gray-200 hover:bg-white hover:border-gray-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 mx-auto transition-colors duration-300 ${
                    isDark 
                      ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30' 
                      : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                  }`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {tech.category}
                  </h3>
                  <div className="space-y-2">
                    {tech.items.map((item, itemIndex) => (
                      <span 
                        key={itemIndex}
                        className={`inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2 ${
                          isDark 
                            ? 'bg-gray-700/50 text-gray-300' 
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
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
              AI Development Process
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Our systematic approach to delivering intelligent automation solutions.
            </motion.p>
          </div>
          
          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-6"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  isDark 
                    ? 'bg-blue-500/20 border border-blue-500/30' 
                    : 'bg-blue-100 border border-blue-200'
                }`}>
                  <span className={`text-xl font-bold ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
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
                      isDark ? 'text-blue-400' : 'text-blue-500'
                    }`} />
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      isDark 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'bg-blue-100 text-blue-600'
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
              ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20' 
              : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'
          }`}>
            <motion.h2 
              variants={itemVariants}
              className={`text-3xl md:text-5xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Ready to Add Intelligence to Your Automation?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-xl mb-10 max-w-2xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Let us help you integrate advanced AI and ML capabilities that transform 
              your business processes into intelligent, self-improving systems.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to={createPageUrl("demo")}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Brain className="mr-2 w-5 h-5" />
                Explore AI Solutions
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
