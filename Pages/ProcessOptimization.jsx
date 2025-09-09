
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { TrendingUp, Target, BarChart3, CheckCircle, ArrowRight, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
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
    "Process mapping and bottleneck identification",
    "Workflow redesign and optimization",
    "Performance metrics and KPI development",
    "Change management and training programs",
    "Continuous improvement methodologies"
  ];

  const methodologies = [
    {
      title: "Lean Six Sigma",
      description: "Data-driven approach to eliminate waste and reduce process variation"
    },
    {
      title: "Process Mining",
      description: "Advanced analytics to discover actual process flows and inefficiencies"
    },
    {
      title: "Value Stream Mapping",
      description: "Visual representation of information and material flow through processes"
    },
    {
      title: "Continuous Improvement",
      description: "Ongoing optimization culture with regular monitoring and adjustments"
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
        className="pt-20 pb-16 relative"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <TrendingUp className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Business Process Optimization
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Streamline operations and maximize efficiency through comprehensive process 
            analysis, redesign, and continuous improvement initiatives.
          </p>
        </div>
      </motion.section>

      {/* Overview */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gray-700 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Optimize for Excellence</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Our business process optimization services help organizations identify inefficiencies, 
              eliminate bottlenecks, and redesign workflows for maximum performance. We combine 
              proven methodologies like Lean Six Sigma with advanced process mining techniques 
              to deliver measurable improvements.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From initial assessment to implementation and monitoring, we ensure that process 
              improvements are sustainable and aligned with your business objectives, resulting 
              in reduced costs, improved quality, and enhanced customer satisfaction.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Key Benefits */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Optimization Benefits</h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-start gap-4 p-6 rounded-xl border border-gray-700">
                <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-gray-900" />
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Methodologies */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Methodologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {methodologies.map((methodology, index) => (
              <motion.div key={index} variants={itemVariants} className="rounded-2xl p-8 border border-gray-700">
                <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{methodology.title}</h3>
                <p className="text-gray-400 leading-relaxed">{methodology.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Framework */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Optimization Framework</h2>
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="flex items-start gap-6 p-6 rounded-xl shadow-sm border border-gray-700">
              <div className="w-12 h-12 bg-cyan-500/80 rounded-full flex items-center justify-center flex-shrink-0 text-gray-900 font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Current State Analysis</h3>
                <p className="text-gray-400 leading-relaxed">
                  Comprehensive assessment of existing processes, identification of pain points and inefficiencies.
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-start gap-6 p-6 rounded-xl shadow-sm border border-gray-700">
              <div className="w-12 h-12 bg-cyan-500/80 rounded-full flex items-center justify-center flex-shrink-0 text-gray-900 font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Future State Design</h3>
                <p className="text-gray-400 leading-relaxed">
                  Redesign processes for optimal efficiency, incorporating best practices and automation opportunities.
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-start gap-6 p-6 rounded-xl shadow-sm border border-gray-700">
              <div className="w-12 h-12 bg-cyan-500/80 rounded-full flex items-center justify-center flex-shrink-0 text-gray-900 font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Implementation & Monitoring</h3>
                <p className="text-gray-400 leading-relaxed">
                  Execute process changes with change management support and continuous performance monitoring.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Results */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Expected Results</h2>
          <div className="border border-gray-700 rounded-3xl p-12">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div variants={itemVariants}>
                <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">30-50%</h3>
                <p className="text-gray-400">Cycle Time Reduction</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">25-40%</h3>
                <p className="text-gray-400">Cost Savings</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">95%+</h3>
                <p className="text-gray-400">Quality Improvement</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur rounded-3xl p-12 shadow-xl border border-gray-700/50">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Optimize Your Processes?
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Let our experts help you identify inefficiencies and redesign your processes 
              for maximum performance and cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://cal.com/autellia-technology-43lknv"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#1e293b_50%,#06b6d4_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-lg font-semibold text-white backdrop-blur-3xl gap-2">
                  Start Optimization
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
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
