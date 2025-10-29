
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { Shield, CheckCircle, ArrowRight, Clock, Headphones, Settings, Users, Zap, Monitor, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function ManagedServices() {
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
      icon: Clock,
      title: "24/7 Monitoring & Support",
      desc: "Round-the-clock automation monitoring with immediate response to issues and comprehensive support coverage."
    },
    {
      icon: Settings,
      title: "Proactive Maintenance",
      desc: "Regular bot maintenance, performance tuning, and optimization to ensure peak efficiency and reliability."
    },
    {
      icon: AlertTriangle,
      title: "Incident Management",
      desc: "Rapid incident detection, escalation, and resolution with detailed root cause analysis and prevention strategies."
    },
    {
      icon: Zap,
      title: "Continuous Improvement",
      desc: "Ongoing automation enhancement, feature updates, and process optimization based on performance analytics."
    },
    {
      icon: Monitor,
      title: "Performance Reporting",
      desc: "Comprehensive performance reports, health checks, and analytics dashboards for complete visibility."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      desc: "Enterprise-grade security monitoring, compliance management, and data protection for all automation processes."
    }
  ];

  const services = [
    "24/7 automation monitoring and support",
    "Proactive bot maintenance and performance tuning",
    "Incident management and resolution",
    "Automation enhancement and continuous improvement",
    "Regular performance reporting and health checks"
  ];

  const supportTiers = [
    {
      icon: Shield,
      title: "Standard Support",
      description: "Business hours support with proactive monitoring and maintenance.",
      features: ["Business Hours Support", "Email & Chat Support", "Monthly Reports", "Basic Monitoring"]
    },
    {
      icon: Headphones,
      title: "Premium Support",
      description: "24/7 support with dedicated account management and faster SLAs.",
      features: ["24/7 Support", "Phone Support", "Dedicated Manager", "Advanced Analytics"]
    },
    {
      icon: Users,
      title: "Enterprise Support",
      description: "Fully managed automation operations with custom SLAs and dedicated team.",
      features: ["Dedicated Team", "Custom SLAs", "Priority Support", "Strategic Planning"]
    }
  ];

  const process = [
    {
      title: "Assessment & Onboarding",
      desc: "Comprehensive evaluation of your automation landscape and seamless service integration.",
      timeline: "1 week"
    },
    {
      title: "Monitoring Setup",
      desc: "Implementation of monitoring tools, alerts, and performance tracking systems.",
      timeline: "1-2 weeks"
    },
    {
      title: "Ongoing Management",
      desc: "Continuous monitoring, maintenance, and optimization of your automation solutions.",
      timeline: "Ongoing"
    },
    {
      title: "Reporting & Optimization",
      desc: "Regular performance reports and strategic recommendations for continuous improvement.",
      timeline: "Monthly"
    }
  ];

  const results = [
    {
      icon: Clock,
      metric: "99.9%",
      description: "System Uptime"
    },
    {
      icon: Zap,
      metric: "<15min",
      description: "Average Response Time"
    },
    {
      icon: Shield,
      metric: "50%",
      description: "Reduced Incidents"
    }
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-[--bg] text-[--text-primary]' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80')`
          }}
        />
        <div className={`absolute inset-0 backdrop-blur-sm ${
          isDark ? 'bg-gray-900/80' : 'bg-white/85'
        }`} />
        
        {/* Animated gradient elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="relative z-10 pt-24 pb-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 ${
                isDark ? 'bg-violet-500/20 border border-violet-500/30' : 'bg-violet-100 border border-violet-200'
              }`}
            >
              <Shield className={`w-10 h-10 ${
                isDark ? 'text-violet-400' : 'text-violet-600'
              }`} />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 overflow-visible ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              style={{ lineHeight: '1.2' }}
            >
              Support &
              <span className="block bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent pb-2">
                Managed Services
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Comprehensive support and managed services to ensure your automation 
              solutions run smoothly and deliver continuous value.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to={createPageUrl('demo')}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to={createPageUrl('case-studies')}
                className={`inline-flex items-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  isDark 
                    ? 'border border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500' 
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400'
                }`}
              >
                View Case Studies
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Support Services Benefits */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="relative z-10 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Managed Services Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/70 hover:border-gray-600' 
                      : 'bg-white/80 border border-gray-200 hover:bg-white hover:border-gray-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {benefit.title}
                  </h3>
                  <p className={`leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Strategic Overview */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Reliable Automation Support
              </h2>
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Our managed services provide comprehensive support and maintenance for your 
                automation solutions, ensuring they operate at peak performance and deliver 
                continuous value. We offer flexible support models tailored to your specific 
                needs, from basic monitoring to fully outsourced BotOps.
              </p>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Our team of expert engineers provides 24/7 monitoring, proactive maintenance, 
                and rapid issue resolution to minimize downtime and maximize the ROI of your 
                automation investments.
              </p>
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Service Excellence
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Clock, text: "24/7 monitoring and immediate incident response" },
                  { icon: Shield, text: "Enterprise-grade security and compliance management" },
                  { icon: Zap, text: "Proactive optimization and performance enhancement" },
                  { icon: Users, text: "Dedicated support teams with deep expertise" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Support Tiers */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Support Tiers
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`rounded-2xl p-8 border transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-700/50 hover:border-purple-500/50' 
                      : 'bg-white/80 border-gray-200 hover:border-purple-400/50 shadow-lg'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {tier.title}
                  </h3>
                  <p className={`leading-relaxed mb-6 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {tier.description}
                  </p>
                  <div className="space-y-2">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className={`w-4 h-4 ${
                          isDark ? 'text-purple-400' : 'text-purple-600'
                        }`} />
                        <span className={`text-sm ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Support Process */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Support Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`text-center relative ${
                  index < process.length - 1 ? 'lg:after:content-[""] lg:after:absolute lg:after:top-8 lg:after:-right-4 lg:after:w-8 lg:after:h-0.5 lg:after:bg-gradient-to-r lg:after:from-violet-500 lg:after:to-purple-600' : ''
                }`}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {step.title}
                </h3>
                <p className={`leading-relaxed mb-4 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {step.desc}
                </p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  isDark 
                    ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' 
                    : 'bg-violet-100 text-violet-700 border border-violet-200'
                }`}>
                  {step.timeline}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Expected Results */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 relative"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold mb-12 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Expected Results
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => {
              const IconComponent = result.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`p-8 rounded-2xl border ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-700/50' 
                      : 'bg-white/80 border-gray-200 shadow-lg'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent mb-2">
                    {result.metric}
                  </div>
                  <p className={`font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {result.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 relative overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-indigo-600/20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`backdrop-blur-sm rounded-3xl p-12 shadow-xl border ${
            isDark 
              ? 'bg-gray-800/30 border-gray-700/50' 
              : 'bg-white/80 border-gray-200/50'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ready for Hassle-Free Automation Support?
            </h2>
            <p className={`text-lg mb-8 leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Let our expert team manage your automation solutions so you can focus on 
              your core business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://cal.com/autellia-technology-43lknv"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8b5cf6_0%,#1e293b_50%,#8b5cf6_100%)]" />
                <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold backdrop-blur-3xl gap-2 ${
                  isDark 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-white text-gray-900'
                }`}>
                  Get a Support Quote
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
