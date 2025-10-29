import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../src/contexts/ThemeContext';
import { createPageUrl } from '../src/utils/index';
import { 
  Target,
  Bot, 
  Brain, 
  TrendingUp, 
  BarChart, 
  FileText, 
  Code, 
  Cloud, 
  Headphones,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Users,
  Star
} from 'lucide-react';

const SolutionsOverview = () => {
  const { isDark } = useTheme();

  const solutions = [
    {
      title: "Automation Consulting & Strategy",
      path: "AutomationConsulting",
      icon: Target,
      description: "Strategic roadmap development for enterprise automation transformation",
      highlights: ["Process Assessment", "ROI Analysis", "Implementation Planning"],
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      darkBgGradient: "from-blue-900/20 to-cyan-900/20"
    },
    {
      title: "BOT Development & Deployment",
      path: "BOTDevelopment",
      icon: Bot,
      description: "Custom RPA bots and intelligent automation solutions",
      highlights: ["RPA Development", "Bot Orchestration", "Process Automation"],
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      darkBgGradient: "from-purple-900/20 to-pink-900/20"
    },
    {
      title: "AI/ML Model Training & Integration",
      path: "AIMLIntegration",
      icon: Brain,
      description: "Advanced machine learning models tailored to your business needs",
      highlights: ["Custom AI Models", "ML Integration", "Predictive Analytics"],
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      darkBgGradient: "from-green-900/20 to-emerald-900/20"
    },
    {
      title: "Business Process Optimization",
      path: "ProcessOptimization",
      icon: TrendingUp,
      description: "Streamline operations and maximize efficiency across your organization",
      highlights: ["Workflow Analysis", "Process Redesign", "Performance Metrics"],
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      darkBgGradient: "from-orange-900/20 to-red-900/20"
    },
    {
      title: "Data Analytics & Visualization",
      path: "DataAnalytics",
      icon: BarChart,
      description: "Transform raw data into actionable business intelligence",
      highlights: ["Real-time Dashboards", "Predictive Insights", "KPI Tracking"],
      gradient: "from-indigo-600 to-blue-600",
      bgGradient: "from-indigo-50 to-blue-50",
      darkBgGradient: "from-indigo-900/20 to-blue-900/20"
    },
    {
      title: "Intelligent Document Processing",
      path: "DocumentProcessing",
      icon: FileText,
      description: "Automate document extraction, classification, and processing",
      highlights: ["OCR Solutions", "Document AI", "Data Extraction"],
      gradient: "from-teal-600 to-cyan-600",
      bgGradient: "from-teal-50 to-cyan-50",
      darkBgGradient: "from-teal-900/20 to-cyan-900/20"
    },
    {
      title: "Custom Software Development",
      path: "SoftwareDevelopment",
      icon: Code,
      description: "Tailored software solutions built for your unique requirements",
      highlights: ["Web Applications", "API Development", "System Integration"],
      gradient: "from-violet-600 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50",
      darkBgGradient: "from-violet-900/20 to-purple-900/20"
    },
    {
      title: "Cloud-based Automation & Migration",
      path: "CloudAutomation",
      icon: Cloud,
      description: "Seamless cloud migration and automation infrastructure",
      highlights: ["Cloud Migration", "Infrastructure Automation", "DevOps Solutions"],
      gradient: "from-sky-600 to-blue-600",
      bgGradient: "from-sky-50 to-blue-50",
      darkBgGradient: "from-sky-900/20 to-blue-900/20"
    },
    {
      title: "Support & Managed Services",
      path: "ManagedServices",
      icon: Headphones,
      description: "24/7 support and maintenance for your automation ecosystem",
      highlights: ["24/7 Support", "System Monitoring", "Performance Optimization"],
      gradient: "from-rose-600 to-pink-600",
      bgGradient: "from-rose-50 to-pink-50",
      darkBgGradient: "from-rose-900/20 to-pink-900/20"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechCorp Solutions",
      role: "CTO",
      content: "Autellia's RPA solutions transformed our operations completely. We achieved 70% reduction in processing time.",
      rating: 5
    },
    {
      name: "Sarah Thompson",
      company: "Global Finance Inc",
      role: "Operations Director",
      content: "The AI/ML integration provided by Autellia helped us predict market trends with 95% accuracy.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Healthcare Plus",
      role: "VP of Technology",
      content: "Their document processing solution saved us thousands of hours in manual data entry.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "95%", label: "Success Rate", icon: Shield },
    { number: "50M+", label: "Cost Savings", icon: TrendingUp },
    { number: "24/7", label: "Support", icon: Users }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800' : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
    }`}>
      {/* Hero Section with Enhanced Design */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`relative pt-32 pb-24 px-6 overflow-hidden`}
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-10 left-10 w-[40rem] h-[40rem] ${
            isDark ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30' : 'bg-gradient-to-r from-blue-400/40 to-cyan-400/40'
          } rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-10 right-10 w-[45rem] h-[45rem] ${
            isDark ? 'bg-gradient-to-r from-purple-500/25 to-pink-500/25' : 'bg-gradient-to-r from-purple-400/35 to-pink-400/35'
          } rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }} />
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] ${
            isDark ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20' : 'bg-gradient-to-r from-indigo-400/30 to-purple-400/30'
          } rounded-full blur-2xl animate-pulse`} style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="block mb-4">Explore Our</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient bg-300%">
                Solutions Portfolio
              </span>
            </h1>
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-medium px-4 ${
              isDark ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Discover <span className="font-bold text-blue-600">comprehensive automation</span> and <span className="font-bold text-purple-600">AI solutions</span> designed to revolutionize your business operations
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20 max-w-5xl mx-auto px-4"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'bg-gray-800/60 border border-gray-700/50 hover:border-blue-500/50' 
                      : 'bg-white/80 border border-gray-200 hover:border-blue-400 hover:shadow-xl'
                  } backdrop-blur-sm`}
                >
                  <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                  <div className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.number}
                  </div>
                  <div className={`text-xs sm:text-sm font-medium ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Solutions Grid with Enhanced Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4"
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
                    <div className={`h-full p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 ${
                      isDark 
                        ? `bg-gradient-to-br ${solution.darkBgGradient} border-gray-700/50 hover:border-blue-500/70` 
                        : `bg-gradient-to-br ${solution.bgGradient} border-gray-200 hover:border-blue-400/70 hover:shadow-2xl`
                    } backdrop-blur-lg relative overflow-hidden group`}>
                      {/* Enhanced Background Effects */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`} />
                      <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-20 transition-all duration-700 rounded-full blur-3xl`} />
                      
                      {/* Enhanced Icon with Better Size */}
                      <div className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${solution.gradient} p-3 sm:p-4 md:p-5 mb-6 sm:mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <Icon className="w-full h-full text-white" />
                      </div>

                      {/* Enhanced Content with Better Typography */}
                      <h3 className={`text-lg sm:text-xl md:text-2xl font-black mb-4 sm:mb-6 group-hover:text-blue-600 transition-colors duration-300 leading-tight ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {solution.title}
                      </h3>
                      
                      <p className={`text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {solution.description}
                      </p>

                      {/* Enhanced Highlights */}
                      <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                        {solution.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${
                              isDark ? 'text-green-400' : 'text-green-600'
                            }`} />
                            <span className={`text-xs sm:text-sm font-semibold ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Enhanced Learn More Button */}
                      <div className="flex items-center gap-3 group/link">
                        <span className={`text-base sm:text-lg font-bold transition-colors duration-300 ${
                          isDark ? 'text-blue-400 group-hover/link:text-blue-300' : 'text-blue-600 group-hover/link:text-blue-700'
                        }`}>
                          Learn More
                        </span>
                        <ArrowRight className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 group-hover/link:translate-x-2 ${
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
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              What Our Clients Say
            </h2>
            <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Trusted by leading enterprises worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50' 
                    : 'bg-white border border-gray-200 hover:shadow-2xl'
                } backdrop-blur-sm`}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className={`mb-6 italic ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "{testimonial.content}"
                </p>
                <div>
                  <p className={`font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className={`py-20 px-4 ${isDark ? 'bg-gray-900/50' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`py-20 sm:py-24 md:py-32 px-4 sm:px-6 text-center relative overflow-hidden ${
              isDark ? 'bg-gradient-to-r from-gray-900 via-blue-900/20 to-gray-900' : 'bg-gradient-to-r from-blue-50 via-indigo-100 to-blue-50'
            }`}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] ${
                isDark ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10' : 'bg-gradient-to-r from-blue-400/20 to-purple-400/20'
              } rounded-full blur-3xl`} />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
              <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Ready to Get Started?
              </h2>
              <p className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Explore a discovery workshop to identify top ROI use cases in 2 weeks and stand up a pilot in 30-45 days with measurable outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                <button
                  onClick={() => window.location.href = 'https://cal.com/autellia-technology-43lknv'}
                  className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
                >
                  Schedule Discovery Workshop
                </button>
                <Link
                  to={createPageUrl('Platform')}
                  className={`px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl transition-all duration-300 border-2 hover:scale-105 ${
                    isDark 
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:border-gray-500' 
                      : 'border-gray-300 text-gray-700 hover:bg-white hover:border-gray-400 hover:shadow-xl'
                  }`}
                >
                  Learn About Our Platform
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </div>
  );
};

export default SolutionsOverview;
