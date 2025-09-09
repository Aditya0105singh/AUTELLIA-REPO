
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { Bot, Code, Zap, CheckCircle, ArrowRight, Cog } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function BOTDevelopment() {
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

  const capabilities = [
    "End-to-end RPA bot development and testing",
    "Cross-platform automation (UiPath, Power Automate, Blue Prism)",
    "API integrations and system connectivity",
    "Intelligent document processing integration",
    "Exception handling and error recovery mechanisms"
  ];

  const platforms = [
    {
      name: "UiPath",
      description: "Enterprise-grade RPA platform for complex automation scenarios"
    },
    {
      name: "Microsoft Power Automate",
      description: "Cloud-native automation integrated with Microsoft ecosystem"
    },
    {
      name: "Blue Prism",
      description: "Secure, scalable RPA platform for regulated industries"
    },
    {
      name: "Automation Anywhere",
      description: "AI-powered automation platform with cloud-native architecture"
    }
  ];

  // Properties for background ripple effect
  const rippleCount = 8;
  const ripples = Array.from({ length: rippleCount }).map((_, i) => ({
    id: i,
    size: Math.random() * 200 + 150, // Size between 150px and 350px
    delay: Math.random() * 3, // Delay between 0s and 3s
    duration: Math.random() * 8 + 10, // Duration between 10s and 18s
    initialX: Math.random() * 100, // Initial X percentage from left
    initialY: Math.random() * 100, // Initial Y percentage from top
    xMove: (Math.random() - 0.5) * 40, // Move max +/- 20vw
    yMove: (Math.random() - 0.5) * 40, // Move max +/- 20vh
  }));

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'text-gray-200 bg-transparent' : 'text-gray-900 bg-white'
    }`}>
      {/* Background Ripple Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            className="absolute bg-cyan-500/10 rounded-full mix-blend-screen"
            animate={{
              scale: [0.7, 1.3, 0.7], // Scale up and down
              opacity: [0.15, 0.05, 0], // Fade out
              x: [0, ripple.xMove, 0], // Move relative to initial position
              y: [0, ripple.yMove, 0],
            }}
            transition={{
              duration: ripple.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: ripple.delay,
              repeatType: "reverse", // Makes the animation loop smoothly back and forth
            }}
            style={{
              width: ripple.size,
              height: ripple.size,
              filter: 'blur(60px)', // Further increased blur for softer look
              left: `${ripple.initialX}vw`,
              top: `${ripple.initialY}vh`,
              transform: 'translate(-50%, -50%)', // Center the element on its initial position
            }}
          />
        ))}
      </div>

      {/* Main content wrapper with higher z-index */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          initial="hidden" animate="visible" variants={fadeIn}
          className="pt-20 pb-16 bg-transparent backdrop-blur-sm relative"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Bot className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              BOT Development & Deployment
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Custom RPA bot development and deployment services across all major platforms 
              to automate your critical business processes.
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
              <h2 className="text-3xl font-bold text-white mb-6">Expert Bot Development</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                Our certified developers create robust, scalable automation bots that handle complex 
                business processes with precision and reliability. We specialize in developing bots 
                across all major RPA platforms, ensuring optimal performance and maintainability.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                From simple data entry automation to complex multi-system orchestration, our bots 
                are designed with enterprise-grade error handling, logging, and monitoring capabilities 
                to ensure reliable 24/7 operation.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Capabilities */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
          className="py-16 bg-transparent"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Development Capabilities</h2>
            <div className="space-y-4">
              {capabilities.map((capability, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-start gap-4 p-6 rounded-xl border border-gray-700">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-gray-900" />
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">{capability}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Supported Platforms */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
          className="py-16"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Supported Platforms</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <motion.div key={index} variants={itemVariants} className="rounded-2xl p-8 border border-gray-700">
                  <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded-xl flex items-center justify-center mb-6">
                    <Cog className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{platform.name}</h3>
                  <p className="text-gray-400 leading-relaxed">{platform.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Development Process */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
          className="py-16 bg-transparent"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Development Process</h2>
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="flex items-start gap-6 p-6 rounded-xl shadow-sm border border-gray-700">
                <div className="w-12 h-12 bg-cyan-500/80 rounded-full flex items-center justify-center flex-shrink-0 text-gray-900 font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Process Analysis & Design</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Detailed process mapping, exception identification, and bot architecture design.
                  </p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start gap-6 p-6 rounded-xl shadow-sm border border-gray-700">
                <div className="w-12 h-12 bg-cyan-500/80 rounded-full flex items-center justify-center flex-shrink-0 text-gray-900 font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Development & Testing</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Agile development with continuous testing and validation against business requirements.
                  </p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start gap-6 p-6 rounded-xl shadow-sm border border-gray-700">
                <div className="w-12 h-12 bg-cyan-500/80 rounded-full flex items-center justify-center flex-shrink-0 text-gray-900 font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Deployment & Monitoring</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Production deployment with comprehensive monitoring and performance optimization.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
          className="py-16"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="backdrop-blur rounded-3xl p-12 shadow-xl border border-gray-700/50">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Automate Your Processes?
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Let our expert developers build custom bots that transform your operations 
                and deliver measurable ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to={createPageUrl("Demo")}
                  className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#1e293b_50%,#06b6d4_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-lg font-semibold text-white backdrop-blur-3xl gap-2">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
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
      </div> {/* End of main content wrapper */}
    </div>
  );
}
