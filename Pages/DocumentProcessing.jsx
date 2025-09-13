
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { FileText, Scan, Zap, CheckCircle, ArrowRight, Database, Upload, Brain, Settings, Eye, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function DocumentProcessing() {
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
      icon: Scan,
      title: "Advanced OCR Technology",
      desc: "State-of-the-art optical character recognition for structured and unstructured documents with 99%+ accuracy."
    },
    {
      icon: Brain,
      title: "Intelligent Data Extraction",
      desc: "AI-powered extraction and validation of key data points with contextual understanding and error detection."
    },
    {
      icon: Settings,
      title: "Automated Classification",
      desc: "Smart document classification and routing based on content, format, and business rules for streamlined workflows."
    },
    {
      icon: Eye,
      title: "Multi-Language Support",
      desc: "Comprehensive language support with complex layout handling for global document processing requirements."
    },
    {
      icon: Database,
      title: "Enterprise Integration",
      desc: "Seamless integration with ERP, CRM, and other business systems through robust APIs and connectors."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      desc: "Enterprise-grade security with data encryption, audit trails, and compliance with industry regulations."
    }
  ];

  const features = [ // Renamed from 'capabilities'
    "Advanced OCR for structured and unstructured documents",
    "Intelligent data extraction and validation",
    "Automated document classification and routing",
    "Multi-language support and complex layout handling",
    "Seamless integration with enterprise systems"
  ];

  const useCases = [ // Renamed from 'documentTypes'
    {
      icon: FileText,
      title: "Invoices & Bills",
      description: "Automated extraction of vendor details, line items, taxes, and totals for financial reconciliation",
      timeline: "2-3 weeks"
    },
    {
      icon: Database,
      title: "Contracts & Agreements",
      description: "Automated extraction of clauses, dates, parties, and obligations for legal compliance",
      timeline: "3-4 weeks"
    },
    {
      icon: Scan,
      title: "Forms & Applications",
      description: "Automated data extraction and validation from forms, applications, and surveys",
      timeline: "2-4 weeks"
    },
    {
      icon: Settings,
      title: "Purchase Orders",
      description: "Extraction of line items, vendor info, and quantities for supply chain automation",
      timeline: "2-3 weeks"
    }
  ];

  const process = [
    {
      icon: Upload,
      title: "Document Ingestion",
      desc: "Automatic document capture from email, file systems, or direct upload with format validation.",
      timeline: "Real-time"
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      desc: "Advanced OCR and machine learning models extract and classify data with high accuracy.",
      timeline: "< 30 seconds"
    },
    {
      icon: Database,
      title: "System Integration",
      desc: "Seamless data integration into your ERP, CRM, or other business systems with validation.",
      timeline: "Real-time"
    }
  ];

  const results = [
    {
      icon: Zap,
      metric: "90%",
      description: "Processing Time Reduction"
    },
    {
      icon: CheckCircle,
      metric: "99%+",
      description: "Data Accuracy"
    },
    {
      icon: FileText,
      metric: "80%",
      description: "Cost Reduction"
    }
  ];

  return (
    // Changed bg-gray-950 to bg-transparent for ripple visibility.
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-transparent text-gray-200' : 'bg-white text-gray-900'
    }`}>
      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="pt-20 pb-16 relative overflow-hidden"
      >
        {/* Background Image with Blur Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Document Processing Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>

        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-400/20 to-red-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-red-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
            Intelligent Document Processing
          </h1>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-200'
          }`}>
            Advanced OCR and AI-powered document processing to automate data extraction 
            from any document type with enterprise-grade accuracy.
          </p>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Document Processing Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-700 hover:border-orange-500/50' 
                      : 'bg-white border-gray-200 hover:border-orange-500/50 shadow-lg'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{benefit.title}</h3>
                  <p className={`text-sm leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Strategic Overview */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-3xl p-12 border ${
            isDark 
              ? 'bg-gray-800/30 border-gray-700' 
              : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Automated Document Intelligence</h2>
                <p className={`text-lg leading-relaxed mb-6 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Our Intelligent Document Processing (IDP) solutions combine advanced OCR, NLP, 
                  and machine learning to automatically extract, classify, and validate data from 
                  any document type, structured or unstructured.
                </p>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Transform your paper-based processes into streamlined digital workflows, reducing 
                  manual effort and improving data accuracy.
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Key Technologies</h3>
                <div className="space-y-4">
                  {[
                    "Advanced OCR with 99%+ accuracy rates",
                    "Natural Language Processing for context understanding",
                    "Machine Learning models for intelligent classification",
                    "Computer Vision for complex layout analysis",
                    "API-first architecture for seamless integration"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className={`leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Use Cases */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`rounded-2xl p-8 border transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800/30 border-gray-700 hover:border-orange-500/50' 
                      : 'bg-white border-gray-200 hover:border-orange-500/50 shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isDark 
                        ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                        : 'bg-orange-100 text-orange-700 border border-orange-200'
                    }`}>
                      {useCase.timeline}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{useCase.title}</h3>
                  <p className={`leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{useCase.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Processing Workflow Timeline */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Processing Workflow</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className={`relative p-6 rounded-2xl border ${
                    isDark 
                      ? 'bg-gray-800/30 border-gray-700' 
                      : 'bg-white border-gray-200 shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      isDark 
                        ? 'bg-orange-500/20 text-orange-400' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {step.timeline}
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{step.title}</h3>
                  <p className={`text-sm leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Expected Results */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Expected Results</h2>
          <div className={`rounded-3xl p-12 border ${
            isDark 
              ? 'bg-gray-800/30 border-gray-700' 
              : 'bg-gray-50 border-gray-200'
          }`}>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="grid md:grid-cols-3 gap-8 text-center">
              {results.map((result, index) => {
                const IconComponent = result.icon;
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>{result.metric}</h3>
                    <p className={`${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>{result.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 relative overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-pink-600/20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`backdrop-blur-sm rounded-3xl p-12 shadow-xl border ${
            isDark 
              ? 'bg-gray-800/30 border-gray-700/50' 
              : 'bg-white/80 border-gray-200/50'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Automate Your Document Workflows?
            </h2>
            <p className={`text-lg mb-8 leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Let our experts help you implement an IDP solution that eliminates manual 
              data entry and accelerates your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://cal.com/autellia-technology-43lknv"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f97316_0%,#1e293b_50%,#f97316_100%)]" />
                <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold backdrop-blur-3xl gap-2 ${
                  isDark 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-white text-gray-900'
                }`}>
                  Automate Your Documents
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <Link 
                to={createPageUrl("Solutions")}
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg border transform hover:-translate-y-1 transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-700/50 text-gray-200 border-gray-600 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
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
