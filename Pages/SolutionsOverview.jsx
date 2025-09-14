import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../src/contexts/ThemeContext';
import { createPageUrl } from '../src/utils/index';
import { 
  Cpu, 
  Bot, 
  Brain, 
  TrendingUp, 
  BarChart3, 
  FileText, 
  Code2, 
  Cloud, 
  Headphones,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const SolutionsOverview = () => {
  const { isDark } = useTheme();

  const solutions = [
    {
      title: "Automation Consulting & Strategy",
      path: "AutomationConsulting",
      icon: Cpu,
      description: "Strategic roadmap development for enterprise automation transformation",
      highlights: ["Process Assessment", "ROI Analysis", "Implementation Planning"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "BOT Development & Deployment",
      path: "BOTDevelopment",
      icon: Bot,
      description: "Custom RPA bots and intelligent automation solutions",
      highlights: ["RPA Development", "Bot Orchestration", "Process Automation"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI/ML Model Training & Integration",
      path: "AIMLIntegration",
      icon: Brain,
      description: "Advanced machine learning models tailored to your business needs",
      highlights: ["Custom AI Models", "ML Integration", "Predictive Analytics"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Business Process Optimization",
      path: "ProcessOptimization",
      icon: TrendingUp,
      description: "Streamline operations and maximize efficiency across your organization",
      highlights: ["Workflow Analysis", "Process Redesign", "Performance Metrics"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Data Analytics & Visualization",
      path: "DataAnalytics",
      icon: BarChart3,
      description: "Transform raw data into actionable business intelligence",
      highlights: ["Data Mining", "Dashboard Creation", "Real-time Analytics"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Intelligent Document Processing",
      path: "DocumentProcessing",
      icon: FileText,
      description: "Automate document extraction, classification, and processing",
      highlights: ["OCR Solutions", "Document AI", "Data Extraction"],
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Custom Software Development",
      path: "SoftwareDevelopment",
      icon: Code2,
      description: "Tailored software solutions built for your unique requirements",
      highlights: ["Web Applications", "API Development", "System Integration"],
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Cloud-based Automation & Migration",
      path: "CloudAutomation",
      icon: Cloud,
      description: "Seamless cloud migration and automation infrastructure",
      highlights: ["Cloud Migration", "Infrastructure Automation", "DevOps Solutions"],
      color: "from-sky-500 to-blue-500"
    },
    {
      title: "Support & Managed Services",
      path: "ManagedServices",
      icon: Headphones,
      description: "24/7 support and maintenance for your automation ecosystem",
      highlights: ["24/7 Support", "System Monitoring", "Performance Optimization"],
      color: "from-rose-500 to-pink-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0A0F19]' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-20 left-10 w-72 h-72 ${
            isDark ? 'bg-blue-500/20' : 'bg-blue-400/20'
          } rounded-full blur-3xl`} />
          <div className={`absolute bottom-20 right-10 w-96 h-96 ${
            isDark ? 'bg-purple-500/20' : 'bg-purple-400/20'
          } rounded-full blur-3xl`} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <span className={`text-sm font-semibold uppercase tracking-wider ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                Our Solutions
              </span>
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Transform Your Business with
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Intelligent Automation
              </span>
            </h1>
            
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Discover our comprehensive suite of automation solutions designed to revolutionize 
              your operations, enhance efficiency, and drive unprecedented growth.
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.path}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={createPageUrl(solution.path)}
                    className="block h-full"
                  >
                    <div className={`h-full p-6 rounded-2xl border transition-all duration-300 ${
                      isDark 
                        ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:border-blue-500/50' 
                        : 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-xl'
                    } backdrop-blur-sm`}>
                      {/* Icon with gradient background */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} p-3 mb-4 shadow-lg`}>
                        <Icon className="w-full h-full text-white" />
                      </div>

                      {/* Title */}
                      <h3 className={`text-xl font-bold mb-3 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {solution.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-sm mb-4 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {solution.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-4">
                        {solution.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${
                              isDark ? 'bg-blue-400' : 'bg-blue-500'
                            }`} />
                            <span className={`text-xs ${
                              isDark ? 'text-gray-500' : 'text-gray-500'
                            }`}>
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <div className="flex items-center gap-2 group">
                        <span className={`text-sm font-semibold ${
                          isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          Learn More
                        </span>
                        <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                          isDark ? 'text-blue-400' : 'text-blue-600'
                        }`} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 ${isDark ? 'bg-gray-900/50' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Transform Your Business?
            </h2>
            <p className={`text-lg mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Let's discuss how our solutions can help you achieve your automation goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = 'https://cal.com/autellia-technology-43lknv'}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Schedule a Consultation
              </button>
              <Link
                to={createPageUrl("Platform")}
                className={`px-8 py-4 font-semibold rounded-lg transition-all duration-300 border-2 ${
                  isDark 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                Learn About Our Platform
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsOverview;
