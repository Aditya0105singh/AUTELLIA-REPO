import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { BarChart3, PieChart, TrendingUp, CheckCircle, ArrowRight, Database } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function DataAnalytics() {
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

  const services = [
    "Custom dashboard development with Power BI and Tableau",
    "Real-time data integration and ETL processes",
    "Advanced analytics and predictive modeling",
    "Automated reporting and alerting systems",
    "Data warehouse design and implementation"
  ];

  const solutions = [
    {
      title: "Executive Dashboards",
      description: "High-level KPI tracking and performance monitoring for leadership teams"
    },
    {
      title: "Operational Analytics",
      description: "Real-time process monitoring and operational efficiency metrics"
    },
    {
      title: "Predictive Analytics",
      description: "Forecasting models to predict trends and enable proactive decision-making"
    },
    {
      title: "Customer Analytics",
      description: "Customer behavior analysis and segmentation for improved engagement"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-transparent text-gray-200' : 'bg-white text-gray-900'
    }`}>
      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="pt-20 pb-16 relative"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <BarChart3 className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Data Analytics & Visualization
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Transform raw data into actionable insights with advanced analytics, 
            interactive dashboards, and automated reporting solutions.
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
            <h2 className="text-3xl font-bold text-white mb-6">Data-Driven Decision Making</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Our data analytics and visualization services help organizations unlock the full 
              potential of their data assets. We create comprehensive analytics solutions that 
              provide real-time insights, predictive capabilities, and intuitive visualizations 
              that drive informed decision-making across all levels of your organization.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From executive dashboards to operational metrics, our solutions integrate seamlessly 
              with your existing systems and automation workflows, ensuring data accuracy, 
              consistency, and accessibility when you need it most.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Analytics Services</h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-start gap-4 p-6 rounded-xl border border-gray-700">
                <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-gray-900" />
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Solution Types */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Analytics Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div key={index} variants={itemVariants} className="rounded-2xl p-8 border border-gray-700">
                <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-400 leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technology Stack */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Technology Platforms</h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="grid md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="rounded-2xl p-8 text-center border border-gray-700">
              <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <PieChart className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">Microsoft Power BI</h3>
              <p className="text-gray-400 text-sm">Enterprise-grade business intelligence with seamless Office integration</p>
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-2xl p-8 text-center border border-gray-700">
              <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">Tableau</h3>
              <p className="text-gray-400 text-sm">Advanced data visualization and self-service analytics platform</p>
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-2xl p-8 text-center border border-gray-700">
              <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-400 text-sm">Bespoke analytics applications using Python, R, and cloud platforms</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Business Impact</h2>
          <div className="border border-gray-700 rounded-3xl p-12">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div variants={itemVariants}>
                <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">75%</h3>
                <p className="text-gray-400">Faster Decision Making</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">90%</h3>
                <p className="text-gray-400">Data Accessibility</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">60%</h3>
                <p className="text-gray-400">Reporting Time Savings</p>
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
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Transform your data into powerful insights with our comprehensive 
              analytics and visualization solutions.
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
                  Explore Analytics Solutions
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