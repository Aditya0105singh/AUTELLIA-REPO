
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
        className="pt-20 pb-16 bg-transparent relative"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Our Perspectives
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Industry Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="group relative rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-900/20 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="w-12 h-12 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <IconComponent className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4 relative z-10">{industry.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm relative z-10">{industry.description}</p>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="rounded-2xl p-8 border border-gray-700 hover:shadow-xl hover:shadow-cyan-900/20 transition-shadow duration-300 relative overflow-hidden">
                  <div className="w-12 h-12 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center mb-6 relative z-10">
                    <IconComponent className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 relative z-10">{useCase.title}</h3>
                  <p className="text-gray-400 leading-relaxed relative z-10">{useCase.description}</p>
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
            <div className="w-16 h-16 bg-gray-800 border border-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Governance & Security</h2>
            <p className="text-xl text-gray-400">
              Enterprise-grade security and responsible AI governance built into every solution
            </p>
          </div>

          <div className="border border-gray-700 rounded-3xl p-12 hover:shadow-xl hover:shadow-green-900/20 transition-all duration-300">
            <div className="space-y-4">
              {governanceFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">{feature}</p>
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
            <div className="w-16 h-16 bg-gray-800 border border-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Why Autellia</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three key differentiators that set us apart in the automation landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <motion.div key={index} variants={itemVariants} className="rounded-2xl p-8 border border-gray-700 text-center hover:shadow-xl hover:shadow-cyan-900/20 transition-shadow duration-300 relative overflow-hidden">
                <div className="w-12 h-12 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-cyan-400 text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{diff.title}</h3>
                <p className="text-gray-400 leading-relaxed relative z-10">{diff.description}</p>
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
          <div className="border border-gray-700 rounded-3xl p-12 text-white hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Let's discuss how our automation and AI solutions can drive measurable outcomes for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://cal.com/autellia-technology-43lknv" target="_blank" rel="noopener noreferrer" className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#1e293b_50%,#06b6d4_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-lg font-semibold text-white backdrop-blur-3xl gap-2">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <button className="bg-gray-700/50 border border-gray-600 text-gray-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-600/50 hover:border-gray-500 transition-all duration-300 transform hover:scale-105">
                Download Case Studies
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
