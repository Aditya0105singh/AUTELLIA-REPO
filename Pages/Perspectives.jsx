
import React from "react";
import { Building2, Heart, ShoppingCart, Monitor, FileText, Headphones, CreditCard, Shield, CheckCircle, Lightbulb, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
// Grid component not available, removing references
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function Perspectives() {
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

  const industries = [
    {
      icon: Building2,
      title: "Banking & Financial Services",
      description: "Automated loan processing, compliance reporting, and customer onboarding with regulatory compliance."
    },
    {
      icon: Heart, 
      title: "Healthcare",
      description: "Patient data management, claims processing, and clinical workflow automation for improved care delivery."
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce", 
      description: "Inventory management, order processing, and customer service automation for enhanced experiences."
    },
    {
      icon: Monitor,
      title: "IT Services",
      description: "Service desk automation, infrastructure monitoring, and deployment pipelines for operational excellence."
    }
  ];

  const useCases = [
    {
      icon: FileText,
      title: "Invoice Processing Automation",
      description: "End-to-end invoice processing with OCR, validation, and ERP integration reducing processing time by 80%."
    },
    {
      icon: Headphones,
      title: "Customer Support Automation", 
      description: "AI-powered chatbots and ticket routing with sentiment analysis improving resolution times by 60%."
    },
    {
      icon: CreditCard,
      title: "Order-to-Cash Optimization",
      description: "Automated order processing, fulfillment tracking, and payment reconciliation for improved cash flow."
    }
  ];

  const governanceFeatures = [
    "Policy-driven automation with built-in compliance checks",
    "Responsible AI frameworks with bias detection and mitigation",
    "Full audit trails and explainability for all automated decisions",
    "Role-based access controls and data privacy protection",
    "Continuous monitoring and performance optimization"
  ];

  const differentiators = [
    {
      title: "Full-Stack Automation",
      description: "From RPA to agentic AI, we cover the entire automation spectrum with integrated solutions."
    },
    {
      title: "Platform Depth",
      description: "Deep expertise across all major automation platforms with vendor-agnostic approach."
    },
    {
      title: "Outcome-First Methodology",
      description: "Business results-driven approach with clear KPIs and measurable ROI from day one."
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-transparent text-gray-200' : 'bg-white text-gray-900'
    }`}>
      <BackgroundRippleEffect />
      {/* Hero Section */}
      <motion.section
        initial="hidden" animate="visible" variants={fadeIn}
        className="pt-24 sm:pt-20 pb-16 bg-transparent relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Our Perspectives
          </h1>
          <p className={`text-xl leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Insights, use cases, and thought leadership in intelligent automation
          </p>
        </div>
      </motion.section>

      {/* Industry Use Cases */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Industry Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div key={index} variants={itemVariants} className={`group relative rounded-2xl p-8 border transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                  isDark
                    ? 'border-gray-700 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-900/20 bg-gray-900/30'
                    : 'border-gray-200 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 bg-white'
                }`}>
                  <div className={`w-12 h-12 border rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 ${
                    isDark ? 'bg-gray-900 border-gray-700' : 'bg-cyan-50 border-cyan-200'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${
                      isDark ? 'text-cyan-400' : 'text-cyan-600'
                    }`} />
                  </div>
                  <h3 className={`text-lg font-bold mb-4 relative z-10 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{industry.title}</h3>
                  <p className={`leading-relaxed text-sm relative z-10 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>{industry.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Featured Use Cases */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Featured Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <motion.div key={index} variants={itemVariants} className={`rounded-2xl p-8 border transition-all duration-300 relative overflow-hidden ${
                  isDark
                    ? 'border-gray-700 hover:shadow-xl hover:shadow-cyan-900/20 bg-gray-900/30'
                    : 'border-gray-200 hover:shadow-xl hover:shadow-cyan-500/20 bg-white'
                }`}>
                  <div className={`w-12 h-12 border rounded-xl flex items-center justify-center mb-6 relative z-10 ${
                    isDark ? 'bg-gray-900 border-gray-700' : 'bg-cyan-50 border-cyan-200'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${
                      isDark ? 'text-cyan-400' : 'text-cyan-600'
                    }`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 relative z-10 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{useCase.title}</h3>
                  <p className={`leading-relaxed relative z-10 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>{useCase.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Governance & Security */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className={`w-16 h-16 border rounded-2xl flex items-center justify-center mx-auto mb-6 ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-green-50 border-green-200'
            }`}>
              <Shield className={`w-8 h-8 ${
                isDark ? 'text-green-400' : 'text-green-600'
              }`} />
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Governance & Security</h2>
            <p className={`text-xl transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Enterprise-grade security and responsible AI governance built into every solution
            </p>
          </div>

          <div className={`border rounded-3xl p-12 transition-all duration-300 ${
            isDark
              ? 'border-gray-700 hover:shadow-xl hover:shadow-green-900/20 bg-gray-900/30'
              : 'border-gray-200 hover:shadow-xl hover:shadow-green-500/20 bg-white'
          }`}>
            <div className="space-y-4">
              {governanceFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                    isDark ? 'bg-gray-700' : 'bg-green-100'
                  }`}>
                    <CheckCircle className={`w-4 h-4 ${
                      isDark ? 'text-green-400' : 'text-green-600'
                    }`} />
                  </div>
                  <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-gray-200' : 'text-gray-800'
                  }`}>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Autellia */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className={`w-16 h-16 border rounded-2xl flex items-center justify-center mx-auto mb-6 ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-cyan-50 border-cyan-200'
            }`}>
              <Lightbulb className={`w-8 h-8 ${
                isDark ? 'text-cyan-400' : 'text-cyan-600'
              }`} />
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Why Autellia</h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Three key differentiators that set us apart in the automation landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <motion.div key={index} variants={itemVariants} className={`rounded-2xl p-8 border text-center transition-all duration-300 relative overflow-hidden ${
                isDark
                  ? 'border-gray-700 hover:shadow-xl hover:shadow-cyan-900/20 bg-gray-900/30'
                  : 'border-gray-200 hover:shadow-xl hover:shadow-cyan-500/20 bg-white'
              }`}>
                <div className={`w-12 h-12 border rounded-xl flex items-center justify-center mx-auto mb-6 relative z-10 ${
                  isDark ? 'bg-gray-900 border-gray-700' : 'bg-cyan-50 border-cyan-200'
                }`}>
                  <span className={`text-xl font-bold ${
                    isDark ? 'text-cyan-400' : 'text-cyan-600'
                  }`}>{index + 1}</span>
                </div>
                <h3 className={`text-xl font-bold mb-4 relative z-10 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{diff.title}</h3>
                <p className={`leading-relaxed relative z-10 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>{diff.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`border rounded-3xl p-12 transition-all duration-300 ${
            isDark
              ? 'border-gray-700 hover:shadow-xl hover:shadow-blue-900/20 bg-gray-900/30'
              : 'border-gray-200 hover:shadow-xl hover:shadow-blue-500/20 bg-white'
          }`}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Ready to Transform Your Operations?</h2>
            <p className={`text-xl mb-8 leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Let's discuss how our automation and AI solutions can drive measurable outcomes for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://cal.com/autellia-technology-43lknv" target="_blank" rel="noopener noreferrer" className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#1e293b_50%,#06b6d4_100%)]" />
                <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold backdrop-blur-3xl gap-2 ${
                  isDark ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'
                }`}>
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <button className={`border px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                isDark
                  ? 'bg-gray-700/50 border-gray-600 text-gray-200 hover:bg-gray-600/50 hover:border-gray-500'
                  : 'bg-gray-100 border-gray-300 text-gray-900 hover:bg-gray-200 hover:border-gray-400'
              }`}>
                Download Case Studies
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
