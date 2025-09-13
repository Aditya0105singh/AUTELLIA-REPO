
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { Cloud, Zap, CheckCircle, ArrowRight, Server, Upload, Settings, Shield, Globe, Database, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function CloudAutomation() {
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
      icon: Cloud,
      title: "Cloud Infrastructure Setup",
      desc: "Complete cloud infrastructure setup and configuration across AWS, Azure, and Google Cloud Platform with best practices."
    },
    {
      icon: Zap,
      title: "Serverless Automation",
      desc: "Serverless function development and automation workflows that scale automatically based on demand and usage patterns."
    },
    {
      icon: Upload,
      title: "Cloud Migration Services",
      desc: "Seamless migration of existing automation solutions to cloud platforms with minimal downtime and data integrity."
    },
    {
      icon: Settings,
      title: "CI/CD Pipeline Development",
      desc: "Automated deployment pipelines with continuous integration and delivery for faster, reliable software releases."
    },
    {
      icon: Database,
      title: "Cloud Cost Optimization",
      desc: "Comprehensive cost management and optimization strategies to maximize cloud ROI and minimize unnecessary expenses."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      desc: "Enterprise-grade security implementation with compliance frameworks and data protection measures for cloud environments."
    }
  ];

  const services = [
    "Cloud infrastructure setup and configuration (AWS, Azure, GCP)",
    "Serverless automation and function development",
    "Cloud migration for existing automation solutions",
    "CI/CD pipeline development for automated deployments",
    "Cloud cost optimization and management"
  ];

  const platforms = [
    {
      icon: Cloud,
      title: "Amazon Web Services (AWS)",
      description: "Leverage Lambda, Step Functions, and other AWS services for scalable automation",
      services: ["Lambda Functions", "Step Functions", "CloudFormation", "EC2 Auto Scaling", "S3 Storage", "RDS Database"]
    },
    {
      icon: Globe,
      title: "Microsoft Azure",
      description: "Utilize Azure Functions, Logic Apps, and Power Automate for cloud-native workflows",
      services: ["Azure Functions", "Logic Apps", "Power Automate", "Azure DevOps", "Cosmos DB", "App Service"]
    },
    {
      icon: Server,
      title: "Google Cloud Platform (GCP)",
      description: "Build robust automation solutions with Cloud Functions, Workflows, and App Engine",
      services: ["Cloud Functions", "Cloud Workflows", "App Engine", "Cloud Run", "BigQuery", "Firestore"]
    }
  ];

  const process = [
    {
      title: "Assessment & Planning",
      desc: "Comprehensive analysis of current infrastructure and development of cloud migration strategy.",
      timeline: "1-2 weeks"
    },
    {
      title: "Architecture Design",
      desc: "Cloud-native architecture design with scalability, security, and cost optimization in mind.",
      timeline: "2-3 weeks"
    },
    {
      title: "Migration & Implementation",
      desc: "Phased migration approach with testing, validation, and minimal business disruption.",
      timeline: "4-8 weeks"
    },
    {
      title: "Optimization & Support",
      desc: "Performance monitoring, cost optimization, and ongoing support for cloud infrastructure.",
      timeline: "Ongoing"
    }
  ];

  const results = [
    {
      icon: Zap,
      metric: "70%",
      description: "Faster Deployment Time"
    },
    {
      icon: Database,
      metric: "40%",
      description: "Cost Reduction"
    },
    {
      icon: Shield,
      metric: "99.9%",
      description: "System Availability"
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
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" 
            alt="Cloud Automation Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>

        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-500/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
            Cloud-based Automation & Migration
          </h1>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-200'
          }`}>
            Harness the power of the cloud with our expert services for cloud-native 
            automation and seamless migration of your existing workflows.
          </p>
        </div>
      </motion.section>

      {/* Cloud Automation Benefits */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 relative"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Cloud Automation Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-2xl p-8 border transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-700/50 hover:border-emerald-500/50' 
                      : 'bg-white/80 border-gray-200 hover:border-emerald-400/50 shadow-lg'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Cloud-Native Transformation
              </h2>
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Our cloud automation services help you leverage the power of cloud platforms like 
                AWS, Azure, and Google Cloud to build scalable, resilient, and cost-effective 
                automation solutions. We design and implement cloud-native architectures that 
                support your digital transformation goals.
              </p>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                From migrating existing automation workloads to the cloud to building serverless 
                automation workflows, our experts ensure that your cloud strategy aligns with your 
                business objectives and maximizes the benefits of cloud computing.
              </p>
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Key Focus Areas
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Cloud, text: "Multi-cloud architecture design and implementation" },
                  { icon: Zap, text: "Serverless computing and event-driven automation" },
                  { icon: Shield, text: "Security-first cloud migration strategies" },
                  { icon: Database, text: "Cost optimization and resource management" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
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

      {/* Cloud Platforms */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 relative"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Supported Cloud Platforms
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`rounded-2xl p-8 border transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-700/50 hover:border-teal-500/50' 
                      : 'bg-white/80 border-gray-200 hover:border-teal-400/50 shadow-lg'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {platform.title}
                  </h3>
                  <p className={`leading-relaxed mb-6 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {platform.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {platform.services.map((service, serviceIndex) => (
                      <span 
                        key={serviceIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          isDark 
                            ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' 
                            : 'bg-teal-100 text-teal-700 border border-teal-200'
                        }`}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Migration Process */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 relative"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Cloud Migration Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`text-center relative ${
                  index < process.length - 1 ? 'lg:after:content-[""] lg:after:absolute lg:after:top-8 lg:after:-right-4 lg:after:w-8 lg:after:h-0.5 lg:after:bg-gradient-to-r lg:after:from-emerald-500 lg:after:to-teal-600' : ''
                }`}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                    : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
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
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent mb-2">
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
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`backdrop-blur-sm rounded-3xl p-12 shadow-xl border ${
            isDark 
              ? 'bg-gray-800/30 border-gray-700/50' 
              : 'bg-white/80 border-gray-200/50'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Move Your Automation to the Cloud?
            </h2>
            <p className={`text-lg mb-8 leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Let our experts help you design and implement a cloud automation strategy 
              that unlocks scalability, resilience, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://cal.com/autellia-technology-43lknv"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10b981_0%,#1e293b_50%,#10b981_100%)]" />
                <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold backdrop-blur-3xl gap-2 ${
                  isDark 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-white text-gray-900'
                }`}>
                  Start Your Cloud Journey
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
