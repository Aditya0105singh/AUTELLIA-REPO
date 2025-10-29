import React from "react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
import { Building2, TrendingUp, Clock, DollarSign, CheckCircle, ArrowRight, Calendar, Target, Zap, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function CaseStudyEuromaster() {
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
    { icon: Clock, value: "2-3 days → <6 hrs", label: "Processing Time" },
    { icon: Target, value: "100%", label: "Accuracy Rate" },
    { icon: DollarSign, value: "240%", label: "ROI" },
    { icon: Calendar, value: "5 months", label: "Project Duration" }
  ];

  const benefits = [
    "Manual Effort Reduced by 85% through full-cycle automation",
    "Error-Free Data Synchronization between macro files and Tyrecheck",
    "Automated Reporting: Daily performance and completion emails",
    "Improved Accuracy: Eliminated mismatched VINs and registration errors",
    "Compliance: Ensured data integrity across all fleet management records"
  ];

  const technologies = [
    "UiPath Studio & Orchestrator – Automation and scheduling",
    "Microsoft Excel (Macros) – Data preparation and transformation", 
    "Tyrecheck Platform – Fleet and vehicle data management",
    "Outlook Integration – Automated reporting and alerts",
    "Windows Shared Drive – File storage and sharing"
  ];

  const challengePoints = [
    "The Data Maintenance Team manually copied and cleaned data from Excel attachments sent by French Fleet Management",
    "Each dataset had to be processed using macros, validated, and uploaded to Tyrecheck manually",
    "Multiple verification steps for vehicle 'create,' 'reactivate,' and 'remove' operations made the process lengthy",
    "Errors such as missing VINs, incorrect registration formats, or mismatched fleet details led to rework",
    "Manual email reporting caused communication delays and version control issues"
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
                Automotive & Fleet Management
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Euromaster Transforms Parc Update Process Using UiPath RPA
            </h1>
            <p className={`text-xl leading-relaxed max-w-4xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              How Euromaster automated their fleet data management process, reducing processing time from 2-3 days to under 6 hours while achieving 100% accuracy
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
              Euromaster, a leading European tire and fleet management company, managed large-scale customer and vehicle data through the Tyrecheck system. The manual "Parc Update" process involved copying data from email attachments, cleaning it via macros, uploading it to Tyrecheck, and validating results. This highly repetitive and time-intensive workflow slowed down monthly updates and introduced potential data inconsistencies. To address these challenges, Proservartner implemented a UiPath-based automation that fully streamlined the Parc Update process — minimizing manual involvement and ensuring faster, error-free data synchronization.
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
                <source src="/3rd%20(online-video-cutter.com).mp4" type="video/mp4" />
                <div className={`flex items-center justify-center h-full transition-colors duration-300 ${
                  isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
                }`}>
                  Your browser does not support the video tag. Please update your browser to view this content.
                </div>
              </video>
              <p className={`text-center mt-4 text-sm transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Watch how our UiPath automation streamlines the Parc Update process for Euromaster's fleet management
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
                The RPA solution automated the entire lifecycle of the Parc Update process using UiPath bots integrated with Excel and Tyrecheck.
              </p>
              <div className={`text-sm font-semibold mb-3 transition-colors duration-300 ${
                isDark ? 'text-green-400' : 'text-green-700'
              }`}>Key Automation Flow:</div>
              <ul className="space-y-2 text-sm">
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Data Collection & Cleansing:</strong> Bot reads Excel files and executes macros to analyze vehicle data
                  </div>
                </li>
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Data Validation:</strong> Cross-verifies entries and applies quality checks
                  </div>
                </li>
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>File Preparation:</strong> Splits datasets into batches of up to 500 records
                  </div>
                </li>
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Tyrecheck Integration:</strong> Logs in and uploads import files automatically
                  </div>
                </li>
                <li className={`flex items-start gap-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Reporting & Communication:</strong> Uploads files to shared drive and sends notifications
                  </div>
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
                  <h4 className={`text-sm font-semibold mb-2 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>Automation Type:</h4>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Unattended UiPath Robot</p>
                </div>
                <div>
                  <h4 className={`text-sm font-semibold mb-2 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>Infrastructure:</h4>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Deployed with Orchestrator and scheduled execution</p>
                </div>
                <div>
                  <h4 className={`text-sm font-semibold mb-2 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>Applications Integrated:</h4>
                  <ul className={`text-sm space-y-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• Microsoft Excel (macros & data manipulation)</li>
                    <li>• Tyrecheck (web automation for uploads)</li>
                    <li>• Microsoft Outlook (email automation)</li>
                    <li>• Shared Drive (data storage & reporting)</li>
                  </ul>
                </div>
                <div>
                  <h4 className={`text-sm font-semibold mb-2 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>Error Handling:</h4>
                  <ul className={`text-sm space-y-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• Color-coded Excel indicators (red for incomplete, green for excluded)</li>
                    <li>• Automated email alerts for exceptions and manual intervention</li>
                  </ul>
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
                    }`}>Manual Processing Time</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>2–3 days per cycle</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>&lt;6 hours</td>
                  </tr>
                  <tr className={`border-b transition-colors duration-300 ${
                    isDark ? 'border-gray-800' : 'border-gray-100'
                  }`}>
                    <td className={`py-4 px-6 font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Accuracy</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>90%</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>100%</td>
                  </tr>
                  <tr className={`border-b transition-colors duration-300 ${
                    isDark ? 'border-gray-800' : 'border-gray-100'
                  }`}>
                    <td className={`py-4 px-6 font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Error Reporting</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>Manual</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>Automated</td>
                  </tr>
                  <tr className={`border-b transition-colors duration-300 ${
                    isDark ? 'border-gray-800' : 'border-gray-100'
                  }`}>
                    <td className={`py-4 px-6 font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Compliance</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>Inconsistent</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>Fully standardized</td>
                  </tr>
                  <tr>
                    <td className={`py-4 px-6 font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>ROI</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>—</td>
                    <td className={`py-4 px-6 font-semibold text-green-400`}>240%</td>
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
            }`}>Ready to Transform Your Fleet Management?</h2>
            <p className={`text-xl mb-8 leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Discover how RPA can streamline your data management processes and improve operational efficiency.
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
