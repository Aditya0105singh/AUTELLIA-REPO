import React from "react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
import { Plane, TrendingUp, Clock, DollarSign, CheckCircle, ArrowRight, Calendar, Target, Zap, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function CaseStudyTravelCounsellors() {
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
    { icon: Clock, value: "4x", label: "Faster Processing" },
    { icon: Target, value: "100%", label: "SLA Compliance" },
    { icon: DollarSign, value: "260%", label: "ROI" },
    { icon: Calendar, value: "4 months", label: "Project Duration" }
  ];

  const benefits = [
    "Automation Coverage: 100% of the manual process",
    "Speed: Reduced confirmation handling time by 4x",
    "Accuracy: Eliminated data mismatches and duplicate entries",
    "SLA Compliance: Achieved consistent same-day confirmation",
    "Auditability: Complete trace logs through UiPath Orchestrator",
    "Productivity: Employees redirected to customer relationship tasks instead of repetitive validation work"
  ];

  const technologies = [
    "UiPath Orchestrator & Studio – Bot management and workflow orchestration",
    "ABBYY FlexiCapture – Document OCR and data extraction", 
    "Freshdesk API – Automated ticket generation and tracking",
    "Azure Logic App – Event-based triggers for mail and queue integration",
    "Microsoft Outlook (POP3/SMTP) – Mail handling for supplier confirmations"
  ];

  const challengePoints = [
    "Multiple suppliers sending confirmation emails in different formats",
    "Manual verification led to data mismatches and delayed responses",
    "Each confirmation required staff to download attachments, extract data, and compare it with booking system APIs",
    "High dependency on staff availability during peak travel seasons",
    "SLA breaches and customer dissatisfaction due to confirmation delays"
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
              <Plane className={`w-8 h-8 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
              <span className={`text-lg font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                Travel & Hospitality
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Travel Counsellors Automate Retail Confirmations Using UiPath RPA
            </h1>
            <p className={`text-xl leading-relaxed max-w-4xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              How Travel Counsellors streamlined their booking confirmation process with intelligent automation, achieving 4x faster processing and 100% SLA compliance
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
              Travel Counsellors, a leading UK-based travel company, receives thousands of booking confirmations from multiple suppliers such as TUI, Jet2, EasyJet, Sandals, and Hoseasons. The manual confirmation process required staff to extract booking details, verify them against the internal database, and manually create support tickets — causing operational delays and data mismatches. To overcome these bottlenecks, Proservartner developed an RPA-based automation using UiPath, ABBYY FlexiCapture, and Freshdesk APIs to manage and streamline the entire retail confirmation lifecycle.
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
                The automation was designed using a Dispatcher-Performer architecture for robust scalability and error handling.
              </p>
              <div className={`text-sm font-semibold mb-3 transition-colors duration-300 ${
                isDark ? 'text-green-400' : 'text-green-700'
              }`}>Dispatcher Bot:</div>
              <ul className="space-y-2 text-sm mb-4">
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Monitors shared mailbox for new booking emails
                </li>
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Identifies suppliers based on email patterns
                </li>
              </ul>
              <div className={`text-sm font-semibold mb-3 transition-colors duration-300 ${
                isDark ? 'text-green-400' : 'text-green-700'
              }`}>Performer Bot:</div>
              <ul className="space-y-2 text-sm">
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Uses ABBYY FlexiCapture to extract booking details
                </li>
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Creates tickets automatically in Freshdesk
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Implementation Details & Benefits */}
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
              }`}>Implementation Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className={`text-sm font-semibold mb-2 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>Architecture:</h4>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Two-bot system — Dispatcher and Performer</p>
                </div>
                <div>
                  <h4 className={`text-sm font-semibold mb-2 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>APIs Integrated:</h4>
                  <ul className={`text-sm space-y-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• Booking API for validation</li>
                    <li>• Freshdesk API for ticket creation</li>
                    <li>• ABBYY Connector API for OCR data extraction</li>
                  </ul>
                </div>
                <div>
                  <h4 className={`text-sm font-semibold mb-2 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>Automation Level:</h4>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>100% of the Retail Confirmations process</p>
                </div>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div variants={itemVariants} className={`rounded-3xl p-8 transition-all duration-300 ${
              isDark 
                ? 'border border-gray-700 bg-gray-900/50' 
                : 'border border-gray-200 bg-white shadow-lg'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Benefits</h3>
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
            <div className="space-y-4">
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
                    }`}>Manual Effort</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>100% manual</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>&lt;5% manual oversight</td>
                  </tr>
                  <tr className={`border-b transition-colors duration-300 ${
                    isDark ? 'border-gray-800' : 'border-gray-100'
                  }`}>
                    <td className={`py-4 px-6 font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Processing Time</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>1–2 days</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>Within 4–5 hours</td>
                  </tr>
                  <tr className={`border-b transition-colors duration-300 ${
                    isDark ? 'border-gray-800' : 'border-gray-100'
                  }`}>
                    <td className={`py-4 px-6 font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Duplicate Confirmations</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>Frequent</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>None</td>
                  </tr>
                  <tr className={`border-b transition-colors duration-300 ${
                    isDark ? 'border-gray-800' : 'border-gray-100'
                  }`}>
                    <td className={`py-4 px-6 font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>SLA Adherence</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>70%</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>100%</td>
                  </tr>
                  <tr>
                    <td className={`py-4 px-6 font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>ROI</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>—</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>260%</td>
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
            }`}>Ready to Streamline Your Travel Operations?</h2>
            <p className={`text-xl mb-8 leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Discover how RPA can transform your booking confirmations and customer service processes.
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
