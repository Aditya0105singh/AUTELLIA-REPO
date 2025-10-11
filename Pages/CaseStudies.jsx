import React from "react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
import { Building2, TrendingUp, Clock, DollarSign, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function CaseStudies() {
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

  const caseStudies = [
    {
      id: 1,
      title: "Global Bank Transforms Loan Processing",
      industry: "Banking & Finance",
      icon: Building2,
      challenge: "Manual loan processing taking 15+ days with high error rates",
      solution: "End-to-end RPA with AI-powered document analysis and risk assessment",
      results: [
        "85% reduction in processing time (15 days to 2 days)",
        "$2.3M annual cost savings",
        "99.2% accuracy in document processing",
        "40% improvement in customer satisfaction"
      ],
      technologies: ["UiPath", "Azure AI", "Power BI", "SQL Server"],
      timeline: "6 months",
      roi: "320%"
    },
    {
      id: 2,
      title: "Healthcare Provider Automates Claims Processing",
      industry: "Healthcare",
      icon: Building2,
      challenge: "Complex insurance claims processing with multiple touchpoints",
      solution: "Intelligent document processing with ML-based claim validation",
      results: [
        "70% faster claim processing",
        "$1.8M reduction in operational costs",
        "95% straight-through processing rate",
        "50% reduction in claim denials"
      ],
      technologies: ["Automation Anywhere", "AWS Textract", "Tableau", "Oracle"],
      timeline: "8 months",
      roi: "280%"
    },
    {
      id: 3,
      title: "Manufacturing Giant Optimizes Supply Chain",
      industry: "Manufacturing",
      icon: Building2,
      challenge: "Inefficient inventory management and supplier coordination",
      solution: "AI-driven demand forecasting with automated procurement workflows",
      results: [
        "60% improvement in demand accuracy",
        "$5.2M inventory cost reduction",
        "30% faster supplier onboarding",
        "25% reduction in stockouts"
      ],
      technologies: ["Blue Prism", "SAP", "Python ML Models", "Power Apps"],
      timeline: "10 months",
      roi: "450%"
    }
  ];

  const metrics = [
    { icon: TrendingUp, value: "500+", label: "Successful Implementations" },
    { icon: DollarSign, value: "$50M+", label: "Client Cost Savings" },
    { icon: Clock, value: "75%", label: "Average Time Reduction" },
    { icon: Users, value: "98%", label: "Client Satisfaction Rate" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-transparent text-gray-200' : 'bg-white text-gray-900'
    }`}>
      <BackgroundRippleEffect />
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="pt-16 sm:pt-20 pb-16 bg-transparent relative"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Case Studies
          </h1>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Real-world success stories showcasing how our automation and AI solutions 
            have transformed enterprise operations across industries
          </p>
        </div>
      </motion.section>

      {/* Success Metrics */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {metrics.map((metric, index) => {
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
                  <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{metric.value}</div>
                  <div className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{metric.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Case Studies */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Featured Success Stories</h2>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon;
              return (
                <motion.div 
                  key={study.id} 
                  variants={itemVariants}
                  className={`rounded-3xl p-8 lg:p-12 hover:shadow-xl transition-all duration-300 ${
                    isDark 
                      ? 'border border-gray-700 hover:shadow-cyan-900/20' 
                      : 'border border-gray-200 bg-white hover:shadow-blue-500/10 shadow-lg'
                  }`}
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Overview */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                          isDark ? 'bg-gray-800 border border-gray-700' : 'bg-blue-50 border border-blue-200'
                        }`}>
                          <IconComponent className={`w-6 h-6 transition-colors duration-300 ${
                            isDark ? 'text-cyan-400' : 'text-blue-600'
                          }`} />
                        </div>
                        <div>
                          <div className={`text-sm font-medium transition-colors duration-300 ${
                            isDark ? 'text-cyan-400' : 'text-blue-600'
                          }`}>{study.industry}</div>
                          <div className={`text-xs transition-colors duration-300 ${
                            isDark ? 'text-gray-500' : 'text-gray-500'
                          }`}>Case Study #{study.id}</div>
                        </div>
                      </div>
                      
                      <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{study.title}</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className={`text-sm font-semibold mb-2 transition-colors duration-300 ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}>Challenge</h4>
                          <p className={`text-sm transition-colors duration-300 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className={`text-sm font-semibold mb-2 transition-colors duration-300 ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}>Solution</h4>
                          <p className={`text-sm transition-colors duration-300 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>{study.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Middle Column - Results */}
                    <div className="lg:col-span-1">
                      <h4 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>Key Results</h4>
                      <div className="space-y-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className={`text-sm transition-colors duration-300 ${
                              isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="lg:col-span-1">
                      <div className="space-y-6">
                        <div>
                          <h4 className={`text-sm font-semibold mb-3 transition-colors duration-300 ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}>Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, idx) => (
                              <span key={idx} className={`px-3 py-1 rounded-full text-xs transition-colors duration-300 ${
                                isDark ? 'bg-gray-800 border border-gray-700 text-gray-300' : 'bg-blue-50 border border-blue-200 text-blue-700'
                              }`}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className={`text-sm font-semibold mb-1 transition-colors duration-300 ${
                              isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}>Timeline</h4>
                            <div className={`font-semibold transition-colors duration-300 ${
                              isDark ? 'text-cyan-400' : 'text-blue-600'
                            }`}>{study.timeline}</div>
                          </div>
                          <div>
                            <h4 className={`text-sm font-semibold mb-1 transition-colors duration-300 ${
                              isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}>ROI</h4>
                            <div className="text-green-400 font-semibold">{study.roi}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`rounded-3xl p-12 hover:shadow-xl transition-all duration-300 ${
            isDark 
              ? 'border border-gray-700 text-white hover:shadow-blue-900/20' 
              : 'border border-gray-200 bg-white text-gray-900 hover:shadow-blue-500/10 shadow-lg'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Ready to Write Your Success Story?</h2>
            <p className={`text-xl mb-8 leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Join hundreds of enterprises who have transformed their operations with our automation solutions.
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
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
