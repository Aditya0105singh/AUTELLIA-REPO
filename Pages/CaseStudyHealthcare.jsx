import React from "react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
import { Heart, TrendingUp, Clock, DollarSign, CheckCircle, ArrowRight, Calendar, Target, Zap, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function CaseStudyHealthcare() {
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

  const keyMetrics = [
    { icon: Clock, value: "70%", label: "Faster Processing" },
    { icon: Target, value: "95%", label: "Straight-through Rate" },
    { icon: DollarSign, value: "$1.8M", label: "Cost Reduction" },
    { icon: Calendar, value: "8 months", label: "Project Duration" }
  ];

  const benefits = [
    "70% faster claim processing time",
    "$1.8M reduction in operational costs annually",
    "95% straight-through processing rate achieved",
    "50% reduction in claim denials and rejections",
    "Enhanced compliance with healthcare regulations",
    "Improved patient satisfaction through faster claim resolution"
  ];

  const technologies = [
    "Automation Anywhere – Primary RPA platform for workflow automation",
    "AWS Textract – AI-powered document analysis and data extraction", 
    "Tableau – Advanced analytics and reporting dashboards",
    "Oracle Database – Claims data management and storage",
    "HL7 FHIR – Healthcare data exchange standards",
    "Microsoft Azure – Cloud infrastructure and security"
  ];

  const implementationSteps = [
    "Comprehensive analysis of existing claims processing workflows and pain points",
    "Design and development of intelligent document processing solution using AWS Textract",
    "Integration with existing Oracle database systems and healthcare APIs",
    "Implementation of ML-based claim validation and fraud detection algorithms",
    "Development of real-time analytics dashboards using Tableau for monitoring",
    "Extensive testing including UAT with healthcare professionals and compliance validation"
  ];

  const challengePoints = [
    "Complex insurance claims processing with multiple touchpoints and stakeholders",
    "High volume of unstructured documents requiring manual review and data entry",
    "Frequent errors in claim coding leading to denials and rework",
    "Lengthy processing times affecting patient satisfaction and cash flow",
    "Compliance requirements with HIPAA and other healthcare regulations",
    "Integration challenges with legacy healthcare management systems"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-transparent text-gray-200' : 'bg-white text-gray-900'
    }`}>
      <BackgroundRippleEffect />
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="pt-24 sm:pt-20 pb-16 bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className={`w-8 h-8 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
              <span className={`text-lg font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                Healthcare
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Healthcare Provider Automates Claims Processing
            </h1>
            <p className={`text-xl leading-relaxed max-w-4xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              How a leading healthcare provider transformed their insurance claims processing with intelligent automation, achieving 70% faster processing and $1.8M in cost savings
            </p>
          </div>

          {/* Key Metrics */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {keyMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="text-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${
                    isDark ? 'bg-gray-800 border border-gray-700' : 'bg-blue-50 border border-blue-200'
                  }`}>
                    <IconComponent className={`w-8 h-8 transition-colors duration-300 ${
                      isDark ? 'text-cyan-400' : 'text-blue-600'
                    }`} />
                  </div>
                  <div className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{metric.value}</div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{metric.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-3xl p-8 lg:p-12 transition-all duration-300 ${
            isDark 
              ? 'border border-gray-700 bg-gray-900/50' 
              : 'border border-gray-200 bg-white shadow-lg'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Overview</h2>
            <p className={`text-lg leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              A major healthcare provider was struggling with inefficient insurance claims processing that involved multiple manual touchpoints, lengthy review cycles, and frequent errors. The organization processed over 50,000 claims monthly, with each claim requiring extensive manual review and data entry. To address these challenges, they partnered with our automation team to implement an intelligent document processing solution that would streamline the entire claims lifecycle while maintaining strict compliance with healthcare regulations.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Challenge & Solution */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Challenge */}
            <motion.div variants={itemVariants} className={`rounded-3xl p-8 transition-all duration-300 ${
              isDark 
                ? 'border border-red-800/50 bg-red-900/20' 
                : 'border border-red-200 bg-red-50'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-red-400' : 'text-red-700'
              }`}>Challenge</h3>
              <ul className="space-y-3">
                {challengePoints.map((challenge, index) => (
                  <li key={index} className={`flex items-start gap-3 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2.5 flex-shrink-0"></div>
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div variants={itemVariants} className={`rounded-3xl p-8 transition-all duration-300 ${
              isDark 
                ? 'border border-green-800/50 bg-green-900/20' 
                : 'border border-green-200 bg-green-50'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-green-400' : 'text-green-700'
              }`}>Solution</h3>
              <p className={`mb-4 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                We implemented an intelligent document processing solution with ML-based claim validation that automated the entire claims workflow.
              </p>
              <div className={`text-sm font-semibold mb-3 transition-colors duration-300 ${
                isDark ? 'text-green-400' : 'text-green-700'
              }`}>Key Solution Components:</div>
              <ul className="space-y-2 text-sm">
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Automated document ingestion and classification using AWS Textract
                </li>
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  ML-powered claim validation and fraud detection algorithms
                </li>
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Real-time integration with existing Oracle database systems
                </li>
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Comprehensive analytics dashboard for monitoring and reporting
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Implementation & Benefits */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Implementation */}
            <motion.div variants={itemVariants} className={`rounded-3xl p-8 transition-all duration-300 ${
              isDark 
                ? 'border border-gray-700 bg-gray-900/50' 
                : 'border border-gray-200 bg-white shadow-lg'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Implementation</h3>
              <div className="space-y-4">
                {implementationSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0 mt-0.5 shadow-md transition-all duration-300 ${
                      isDark ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900' : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                    }`}>
                      {index + 1}
                    </div>
                    <span className={`text-sm transition-colors duration-300 leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Benefits */}
            <motion.div variants={itemVariants} className={`rounded-3xl p-8 transition-all duration-300 ${
              isDark 
                ? 'border border-gray-700 bg-gray-900/50' 
                : 'border border-gray-200 bg-white shadow-lg'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className={`text-sm transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Technologies Used */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-3xl p-8 lg:p-12 transition-all duration-300 ${
            isDark 
              ? 'border border-gray-700 bg-gray-900/50' 
              : 'border border-gray-200 bg-white shadow-lg'
          }`}>
            <h2 className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Technologies Used</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Zap className={`w-6 h-6 flex-shrink-0 mt-1 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                  <span className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Project Impact Table */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-3xl p-8 lg:p-12 transition-all duration-300 ${
            isDark 
              ? 'border border-gray-700 bg-gray-900/50' 
              : 'border border-gray-200 bg-white shadow-lg'
          }`}>
            <h2 className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Project Impact</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b transition-colors duration-300 ${
                    isDark ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <th className={`text-left py-4 px-6 font-semibold transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>Metric</th>
                    <th className={`text-left py-4 px-6 font-semibold transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>Before Automation</th>
                    <th className={`text-left py-4 px-6 font-semibold transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>After Automation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={`border-b transition-colors duration-300 ${
                    isDark ? 'border-gray-800' : 'border-gray-100'
                  }`}>
                    <td className={`py-4 px-6 font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Processing Time</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>5-7 days average</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>1.5-2 days average</td>
                  </tr>
                  <tr className={`border-b transition-colors duration-300 ${
                    isDark ? 'border-gray-800' : 'border-gray-100'
                  }`}>
                    <td className={`py-4 px-6 font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Straight-through Processing</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>25%</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>95%</td>
                  </tr>
                  <tr className={`border-b transition-colors duration-300 ${
                    isDark ? 'border-gray-800' : 'border-gray-100'
                  }`}>
                    <td className={`py-4 px-6 font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Claim Denials</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>18%</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>9%</td>
                  </tr>
                  <tr className={`border-b transition-colors duration-300 ${
                    isDark ? 'border-gray-800' : 'border-gray-100'
                  }`}>
                    <td className={`py-4 px-6 font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Annual Cost Savings</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>—</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>$1.8M</td>
                  </tr>
                  <tr>
                    <td className={`py-4 px-6 font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>ROI</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>—</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>280%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`rounded-3xl p-12 hover:shadow-xl transition-all duration-300 ${
            isDark 
              ? 'border border-gray-700 text-white hover:shadow-blue-900/20' 
              : 'border border-gray-200 bg-white text-gray-900 hover:shadow-blue-500/10 shadow-lg'
          }`}>
            <Award className={`w-16 h-16 mx-auto mb-6 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
            <h2 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Ready to Revolutionize Your Healthcare Operations?</h2>
            <p className={`text-xl mb-8 leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Discover how intelligent automation can transform your claims processing and improve patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Demo")} className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#1e293b_50%,#06b6d4_100%)]" />
                <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold backdrop-blur-3xl gap-2 transition-colors duration-300 ${
                  isDark ? 'bg-slate-900 text-white' : 'bg-blue-600 text-white'
                }`}>
                  Schedule Discovery Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link to={createPageUrl("case-studies")} className={`inline-flex h-14 items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold border-2 transition-all duration-300 ${
                isDark 
                  ? 'border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400' 
                  : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
              }`}>
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
