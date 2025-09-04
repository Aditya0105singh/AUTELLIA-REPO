
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { FileText, Scan, Zap, CheckCircle, ArrowRight, Database } from "lucide-react";
import { motion } from "framer-motion";

export default function DocumentProcessing() {
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

  const features = [ // Renamed from 'capabilities'
    "Advanced OCR for structured and unstructured documents",
    "Intelligent data extraction and validation",
    "Automated document classification and routing",
    "Multi-language support and complex layout handling",
    "Seamless integration with enterprise systems"
  ];

  const useCases = [ // Renamed from 'documentTypes'
    {
      title: "Invoices & Bills",
      description: "Automated extraction of vendor details, line items, taxes, and totals for financial reconciliation"
    },
    {
      title: "Contracts & Agreements",
      description: "Automated extraction of clauses, dates, parties, and obligations for legal compliance"
    },
    {
      title: "Forms & Applications",
      description: "Automated data extraction and validation from forms, applications, and surveys"
    },
    {
      title: "Purchase Orders",
      description: "Extraction of line items, vendor info, and quantities for supply chain automation"
    }
  ];

  return (
    // Changed bg-gray-950 to bg-transparent for ripple visibility.
    <div className="min-h-screen bg-transparent text-gray-200 relative overflow-hidden">
      {/* Global Background Ripple Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Ripple 1 */}
        <motion.div
          className="absolute top-[10%] left-[10%] w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"
          initial={{ scale: 0, opacity: 0, x: -50, y: -50 }}
          animate={{ scale: [0, 1, 1.2, 1.5], opacity: [0, 0.15, 0.1, 0], x: [ -50, 0, 50, 100], y: [-50, 0, 50, 100] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
        />
        {/* Ripple 2 */}
        <motion.div
          className="absolute bottom-[20%] right-[15%] w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
          initial={{ scale: 0, opacity: 0, x: 50, y: 50 }}
          animate={{ scale: [0, 1, 1.3, 1.6], opacity: [0, 0.1, 0.08, 0], x: [50, 0, -50, -100], y: [50, 0, -50, -100] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear", delay: 2, repeatDelay: 1 }}
        />
        {/* Ripple 3 */}
        <motion.div
          className="absolute top-[40%] right-[30%] w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
          initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
          animate={{ scale: [0, 1, 1.1, 1.4], opacity: [0, 0.12, 0.09, 0], x: [0, -20, -40, -60], y: [0, 20, 40, 60] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear", delay: 4, repeatDelay: 1 }}
        />
      </div>

      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="pt-20 pb-16 bg-transparent backdrop-blur-sm relative z-10" // Changed bg-slate-900/70 to bg-transparent
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Database className="w-8 h-8 text-cyan-400" /> 
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Intelligent Document Processing
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Advanced OCR and AI-powered document processing to automate data extraction 
            from any document type with enterprise-grade accuracy.
          </p>
        </div>
      </motion.section>

      {/* Overview */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 relative z-10" 
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="border border-gray-700 rounded-3xl p-12"> {/* Removed bg-gray-800/50 */}
            <h2 className="text-3xl font-bold text-white mb-6">Automated Document Intelligence</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Our Intelligent Document Processing (IDP) solutions combine advanced OCR, NLP, 
              and machine learning to automatically extract, classify, and validate data from 
              any document type, structured or unstructured.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Transform your paper-based processes into streamlined digital workflows, reducing 
              manual effort, improving data accuracy, and accelerating decision-making across 
              your organization.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent relative z-10" // Changed bg-black/20 to bg-transparent
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Features</h2>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-start gap-4 p-6 rounded-xl border border-gray-700"> {/* Removed bg-gray-800/50 */}
                <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-gray-900" />
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Use Cases */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div key={index} variants={itemVariants} className="rounded-2xl p-8 border border-gray-700"> {/* Removed bg-gray-800/50 */}
                <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-cyan-400" /> {/* Changed icon from Scan to FileText */}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Flow */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-black/20 relative z-10" 
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Processing Workflow</h2>
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="flex items-start gap-6 p-6 bg-gray-800/50 rounded-xl shadow-sm border border-gray-700">
              <div className="w-12 h-12 bg-cyan-500/80 rounded-full flex items-center justify-center flex-shrink-0 text-gray-900 font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Document Ingestion</h3>
                <p className="text-gray-400 leading-relaxed">
                  Automatic document capture from email, file systems, or direct upload with format validation.
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-start gap-6 p-6 bg-gray-800/50 rounded-xl shadow-sm border border-gray-700">
              <div className="w-12 h-12 bg-cyan-500/80 rounded-full flex items-center justify-center flex-shrink-0 text-gray-900 font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">AI-Powered Analysis</h3>
                <p className="text-gray-400 leading-relaxed">
                  Advanced OCR and machine learning models extract and classify data with high accuracy.
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-start gap-6 p-6 bg-gray-800/50 rounded-xl shadow-sm border border-gray-700">
              <div className="w-12 h-12 bg-cyan-500/80 rounded-full flex items-center justify-center flex-shrink-0 text-gray-900 font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">System Integration</h3>
                <p className="text-gray-400 leading-relaxed">
                  Seamless data integration into your ERP, CRM, or other business systems with validation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 relative z-10" 
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Business Benefits</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-3xl p-12">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div variants={itemVariants}>
                <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">90%</h3>
                <p className="text-gray-400">Processing Time Reduction</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">99%+</h3>
                <p className="text-gray-400">Data Accuracy</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">80%</h3>
                <p className="text-gray-400">Cost Reduction</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10" // Changed bg-black/20 to bg-transparent
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="backdrop-blur rounded-3xl p-12 shadow-xl border border-gray-700/50"> {/* Removed bg-gray-800/80 */}
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Automate Your Document Workflows?
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Let our experts help you implement an IDP solution that eliminates manual 
              data entry and accelerates your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to={createPageUrl("Demo")}
                className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#1e293b_50%,#06b6d4_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-lg font-semibold text-white backdrop-blur-3xl gap-2">
                  Automate Your Documents
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to={createPageUrl("Solutions")}
                className="inline-flex items-center gap-2 bg-gray-700/50 text-gray-200 px-8 py-4 rounded-xl font-semibold text-lg border border-gray-600 hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300"
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
