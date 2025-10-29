import React from "react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
import { Building2, TrendingUp, Clock, DollarSign, CheckCircle, ArrowRight, Calendar, Target, Zap, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function CaseStudyUnistrut() {
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
    { icon: Clock, value: "3 days → Few hours", label: "Processing Time" },
    { icon: Target, value: "99%", label: "Accuracy Rate" },
    { icon: DollarSign, value: "280%", label: "ROI" },
    { icon: Calendar, value: "6 months", label: "Project Duration" }
  ];

  const benefits = [
    "Processing Time Reduced: From 3 days per month to a few hours",
    "Accuracy Improved: Up to 99% in journal posting",
    "Audit Readiness: Automatic logs and reports sent via Outlook",
    "Productivity Boost: Finance staff reallocated to higher-value tasks",
    "Scalability: Designed for easy extension to other financial processes"
  ];

  const technologies = [
    "UiPath – RPA development and orchestration",
    "Infor XA (Release 9) – ERP system for journal entries", 
    "Microsoft Excel & Outlook – Input data and reporting",
    "Windows VM Environment – Hosted by Unistrut for development and production"
  ];

  const implementationSteps = [
    "Environment setup on Unistrut-hosted VM with UiPath Studio & Robot installed",
    "Integration with Excel and Outlook for input and notification reports",
    "Automated handling of both standard journals and reversing journals",
    "Validation and error handling built for exceptions such as missing fields or incorrect formats",
    "Tested in multiple phases — system test, UAT, and final deployment"
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
              <Building2 className={`w-8 h-8 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
              <span className={`text-lg font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                Finance & Accounting
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Unistrut Automates Journal Posting with UiPath RPA
            </h1>
            <p className={`text-xl leading-relaxed max-w-4xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              How Unistrut transformed their manual journal posting process, reducing processing time from 3 days to just a few hours while achieving 99% accuracy
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
              Unistrut, a leading global manufacturer, faced challenges in manual journal posting within their Infor XA financial system. The repetitive data entry process for journal vouchers was not only time-consuming but also prone to human error, leading to reconciliation delays and inconsistent reporting. To overcome this, Unistrut collaborated with Proservartner to design and deploy a Robotic Process Automation (RPA) solution using UiPath.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Video Section */}
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
            }`}>See the Automation in Action</h2>
            <div className="relative w-full max-w-6xl mx-auto">
              <video 
                className={`w-full h-auto rounded-xl shadow-lg transition-all duration-300 ${
                  isDark ? 'border border-gray-600' : 'border border-gray-200'
                }`}
                controls
                muted
                loop
                preload="metadata"
              >
                <source src="/2nd%20(online-video-cutter.com).mp4" type="video/mp4" />
                <div className={`flex items-center justify-center h-full transition-colors duration-300 ${
                  isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
                }`}>
                  Your browser does not support the video tag. Please update your browser to view this content.
                </div>
              </video>
              <p className={`text-center mt-4 text-sm transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Watch how our UiPath RPA solution automates journal posting for Unistrut's Infor XA system
              </p>
            </div>
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
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2.5 flex-shrink-0"></div>
                  Journal posting was performed once a month over three working days
                </li>
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2.5 flex-shrink-0"></div>
                  Each transaction required manual entry of fields such as transaction number, date, narrative, GL values, debit and credit amounts
                </li>
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2.5 flex-shrink-0"></div>
                  Frequent errors led to rework and delayed month-end closing
                </li>
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2.5 flex-shrink-0"></div>
                  Lack of standardization across teams created inconsistencies in financial reporting
                </li>
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
                Proservartner built an end-to-end UiPath automation that replicated the manual posting workflow.
              </p>
              <div className={`text-sm font-semibold mb-3 transition-colors duration-300 ${
                isDark ? 'text-green-400' : 'text-green-700'
              }`}>How it works:</div>
              <ul className="space-y-2 text-sm">
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  The bot reads Excel files containing journal voucher data (GL account, description, debit, and credit values)
                </li>
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  It opens Infor XA (release 9) on the VM and navigates to the Journal Entry screen
                </li>
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Each record is entered automatically — including the narrative, amounts, and codes
                </li>
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Once completed, the bot confirms the entry and posts it to the system
                </li>
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  For reversing journals, the same logic is used with adjusted parameters (MEREV type)
                </li>
              </ul>
              <p className={`mt-4 text-sm transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                This solution ensured seamless integration with existing infrastructure and compliance with financial policies.
              </p>
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
                    }`}>3 days/month</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>Few hours</td>
                  </tr>
                  <tr className={`border-b transition-colors duration-300 ${
                    isDark ? 'border-gray-800' : 'border-gray-100'
                  }`}>
                    <td className={`py-4 px-6 font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Accuracy</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>~85%</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>99%</td>
                  </tr>
                  <tr className={`border-b transition-colors duration-300 ${
                    isDark ? 'border-gray-800' : 'border-gray-100'
                  }`}>
                    <td className={`py-4 px-6 font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Manual Effort</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>High</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>Minimal</td>
                  </tr>
                  <tr className={`border-b transition-colors duration-300 ${
                    isDark ? 'border-gray-800' : 'border-gray-100'
                  }`}>
                    <td className={`py-4 px-6 font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>ROI</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>—</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>280%</td>
                  </tr>
                  <tr>
                    <td className={`py-4 px-6 font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Audit Reports</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>Manual</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>Auto-generated</td>
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
            }`}>Ready to Transform Your Financial Processes?</h2>
            <p className={`text-xl mb-8 leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              See how RPA can revolutionize your journal posting and financial operations like it did for Unistrut.
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
