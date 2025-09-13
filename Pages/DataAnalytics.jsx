import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { BarChart3, PieChart, TrendingUp, CheckCircle, ArrowRight, Database, LineChart, Gauge, Eye, Clock, Zap, Users } from "lucide-react";
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

  const benefits = [
    {
      icon: BarChart3,
      title: "Interactive Dashboards",
      desc: "Custom dashboard development with Power BI, Tableau, and modern visualization frameworks for real-time insights."
    },
    {
      icon: Database,
      title: "Data Integration & ETL",
      desc: "Seamless data integration from multiple sources with automated ETL processes and data quality management."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      desc: "Advanced statistical modeling and machine learning algorithms to forecast trends and predict outcomes."
    },
    {
      icon: Gauge,
      title: "Performance Monitoring",
      desc: "Real-time KPI tracking and performance monitoring with automated alerts and threshold management."
    },
    {
      icon: Eye,
      title: "Business Intelligence",
      desc: "Comprehensive BI solutions that transform raw data into actionable business insights and strategic recommendations."
    },
    {
      icon: Zap,
      title: "Automated Reporting",
      desc: "Automated report generation and distribution with customizable schedules and delivery methods."
    }
  ];

  const services = [
    "Custom dashboard development with Power BI and Tableau",
    "Real-time data integration and ETL processes",
    "Advanced analytics and predictive modeling",
    "Automated reporting and alerting systems",
    "Data warehouse design and implementation"
  ];

  const solutions = [
    {
      icon: Gauge,
      title: "Executive Dashboards",
      description: "High-level KPI tracking and performance monitoring for leadership teams",
      timeline: "2-4 weeks"
    },
    {
      icon: LineChart,
      title: "Operational Analytics",
      description: "Real-time process monitoring and operational efficiency metrics",
      timeline: "3-5 weeks"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecasting models to predict trends and enable proactive decision-making",
      timeline: "4-8 weeks"
    },
    {
      icon: Users,
      title: "Customer Analytics",
      description: "Customer behavior analysis and segmentation for improved engagement",
      timeline: "3-6 weeks"
    }
  ];

  const technologies = [
    {
      icon: PieChart,
      platform: "Microsoft Power BI",
      description: "Enterprise-grade business intelligence with seamless Office integration",
      features: ["Real-time dashboards", "Natural language queries", "Mobile accessibility", "Cloud integration"]
    },
    {
      icon: BarChart3,
      platform: "Tableau",
      description: "Advanced data visualization and self-service analytics platform",
      features: ["Interactive visualizations", "Data storytelling", "Advanced analytics", "Collaboration tools"]
    },
    {
      icon: TrendingUp,
      platform: "Custom Solutions",
      description: "Bespoke analytics applications using Python, R, and cloud platforms",
      features: ["Custom algorithms", "API integrations", "Scalable architecture", "Advanced ML models"]
    }
  ];

  const process = [
    {
      title: "Data Assessment & Strategy",
      desc: "Analyze current data landscape and define analytics objectives aligned with business goals.",
      timeline: "1-2 weeks"
    },
    {
      title: "Data Integration & Preparation",
      desc: "Set up data pipelines, ETL processes, and ensure data quality and consistency.",
      timeline: "2-4 weeks"
    },
    {
      title: "Dashboard Development & Testing",
      desc: "Build interactive dashboards and analytics solutions with comprehensive testing.",
      timeline: "3-6 weeks"
    },
    {
      title: "Deployment & Training",
      desc: "Deploy solutions to production and provide user training and documentation.",
      timeline: "1-2 weeks"
    }
  ];

  const results = [
    {
      icon: TrendingUp,
      metric: "75%",
      description: "Faster Decision Making"
    },
    {
      icon: Database,
      metric: "90%",
      description: "Data Accessibility"
    },
    {
      icon: BarChart3,
      metric: "60%",
      description: "Reporting Time Savings"
    }
  ];

  return (
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
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Data Analytics Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>

        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Data Analytics & Visualization
          </h1>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-200'
          }`}>
            Transform raw data into actionable insights with advanced analytics, 
            interactive dashboards, and automated reporting solutions.
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
          }`}>Analytics Capabilities</h2>
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
                      ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-500/50' 
                      : 'bg-white border-gray-200 hover:border-cyan-500/50 shadow-lg'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
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
                }`}>Data-Driven Decision Making</h2>
                <p className={`text-lg leading-relaxed mb-6 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Our data analytics and visualization services help organizations unlock the full 
                  potential of their data assets. We create comprehensive analytics solutions that 
                  provide real-time insights, predictive capabilities, and intuitive visualizations.
                </p>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  From executive dashboards to operational metrics, our solutions integrate seamlessly 
                  with your existing systems and automation workflows.
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Key Focus Areas</h3>
                <div className="space-y-4">
                  {[
                    "Real-time data visualization and monitoring",
                    "Predictive analytics and forecasting models",
                    "Automated reporting and alert systems",
                    "Data quality management and governance",
                    "Self-service analytics and user empowerment"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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

      {/* Solution Types */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Analytics Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`rounded-2xl p-8 border transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800/30 border-gray-700 hover:border-cyan-500/50' 
                      : 'bg-white border-gray-200 hover:border-cyan-500/50 shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isDark 
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                        : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
                    }`}>
                      {solution.timeline}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{solution.title}</h3>
                  <p className={`leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{solution.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Technology Stack */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Technology Platforms</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-2xl p-8 text-center border transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800/30 border-gray-700 hover:border-cyan-500/50' 
                      : 'bg-white border-gray-200 hover:border-cyan-500/50 shadow-lg'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{tech.platform}</h3>
                  <p className={`text-sm mb-4 leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{tech.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {tech.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          isDark 
                            ? 'bg-cyan-500/20 text-cyan-400' 
                            : 'bg-cyan-100 text-cyan-700'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Development Process Timeline */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Analytics Development Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
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
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    isDark 
                      ? 'bg-cyan-500/20 text-cyan-400' 
                      : 'bg-cyan-100 text-cyan-700'
                  }`}>
                    {step.timeline}
                  </span>
                </div>
                <h3 className={`text-lg font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{step.title}</h3>
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>{step.desc}</p>
              </motion.div>
            ))}
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
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`backdrop-blur-sm rounded-3xl p-12 shadow-xl border ${
            isDark 
              ? 'bg-gray-800/30 border-gray-700/50' 
              : 'bg-white/80 border-gray-200/50'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className={`text-lg mb-8 leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
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
                <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold backdrop-blur-3xl gap-2 ${
                  isDark 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-white text-gray-900'
                }`}>
                  Explore Analytics Solutions
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