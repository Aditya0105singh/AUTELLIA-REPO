
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { Cloud, Zap, CheckCircle, ArrowRight, Server } from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
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

  const services = [
    "Cloud infrastructure setup and configuration (AWS, Azure, GCP)",
    "Serverless automation and function development",
    "Cloud migration for existing automation solutions",
    "CI/CD pipeline development for automated deployments",
    "Cloud cost optimization and management"
  ];

  const platforms = [
    {
      title: "Amazon Web Services (AWS)",
      description: "Leverage Lambda, Step Functions, and other AWS services for scalable automation"
    },
    {
      title: "Microsoft Azure",
      description: "Utilize Azure Functions, Logic Apps, and Power Automate for cloud-native workflows"
    },
    {
      title: "Google Cloud Platform (GCP)",
      description: "Build robust automation solutions with Cloud Functions, Workflows, and App Engine"
    },
    { 
      title: "Cloud Cost Optimization", 
      description: "Cloud-native application development and modernization" 
    }
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-transparent text-gray-200' : 'bg-white text-gray-900'
    }`}>
      <BackgroundRippleEffect />
      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="pt-20 pb-16 bg-transparent backdrop-blur-sm relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Cloud className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Cloud-based Automation & Migration
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Harness the power of the cloud with our expert services for cloud-native 
            automation and seamless migration of your existing workflows.
          </p>
        </div>
      </motion.section>

      {/* Overview */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="border border-gray-700 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Cloud-Powered Automation</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Our cloud automation services help you leverage the power of cloud platforms like 
              AWS, Azure, and Google Cloud to build scalable, resilient, and cost-effective 
              automation solutions. We design and implement cloud-native architectures that 
              support your digital transformation goals.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From migrating existing automation workloads to the cloud to building serverless 
              automation workflows, our experts ensure that your cloud strategy aligns with your 
              business objectives and maximizes the benefits of cloud computing.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Key Services */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Cloud Services</h2>
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

      {/* Cloud Platforms */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Supported Cloud Platforms</h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div key={index} variants={itemVariants} className="rounded-2xl p-8 text-center border border-gray-700">
                <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Cloud className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{platform.title}</h3>
                <p className="text-gray-400 leading-relaxed">{platform.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="backdrop-blur rounded-3xl p-12 shadow-xl border border-gray-700/50">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Move Your Automation to the Cloud?
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
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
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#1e293b_50%,#06b6d4_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-lg font-semibold text-white backdrop-blur-3xl gap-2">
                  Start Your Cloud Journey
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
