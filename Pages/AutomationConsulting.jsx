
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { Target, Users, BarChart3, CheckCircle, ArrowRight, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function AutomationConsulting() {
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
    "Strategic roadmap for automation initiatives",
    "ROI analysis and business case development",
    "Technology platform selection and architecture design",
    "Center of Excellence (CoE) setup and governance",
    "Change management and stakeholder alignment"
  ];

  const deliverables = [
    {
      title: "Automation Assessment Report",
      description: "Comprehensive analysis of current processes and automation readiness"
    },
    {
      title: "Strategic Roadmap",
      description: "Prioritized implementation plan with timeline and resource requirements"
    },
    {
      title: "Technology Blueprint",
      description: "Recommended platform architecture and integration strategy"
    },
    {
      title: "Governance Framework", 
      description: "CoE model, policies, and best practices for sustainable automation"
    }
  ];

  // Component for a single background ripple element
  const BackgroundRipple = ({ delay, duration, size, top, left, color, blur }) => (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        top: top,
        left: left,
        backgroundColor: color,
        filter: `blur(${blur}px)`, // Apply blur effect
        zIndex: 0, // Ensure it's behind content
        pointerEvents: 'none', // Don't block interactions
      }}
      initial={{ scale: 0.1, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: [0, 0.05, 0], // Fade in slightly then fade out
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: delay, // Delay before next repetition
        delay: delay // Initial delay for staggering
      }}
    />
  );

  return (
    <div className="min-h-screen bg-transparent text-gray-200 relative overflow-hidden">
      {/* Global Background Ripple Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <BackgroundRipple delay={0} duration={30} size="300px" top="10%" left="15%" color="rgba(7,143,156,0.05)" blur={100} />
        <BackgroundRipple delay={5} duration={35} size="400px" top="60%" left="70%" color="rgba(7,143,156,0.05)" blur={120} />
        <BackgroundRipple delay={10} duration={25} size="250px" top="30%" left="80%" color="rgba(7,143,156,0.05)" blur={80} />
        <BackgroundRipple delay={15} duration={40} size="350px" top="85%" left="25%" color="rgba(7,143,156,0.05)" blur={110} />
        <BackgroundRipple delay={20} duration={32} size="280px" top="5%" left="40%" color="rgba(7,143,156,0.05)" blur={90} />
      </div>

      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="pt-20 pb-16 bg-transparent backdrop-blur-sm relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Target className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Automation Consulting & Strategy
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Transform your business with strategic automation consulting that aligns technology 
            initiatives with business outcomes and maximizes ROI.
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
            <h2 className="text-3xl font-bold text-white mb-6">Strategic Automation Planning</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Our automation consulting services help organizations develop comprehensive strategies 
              for digital transformation through intelligent automation. We work with your leadership 
              team to identify high-impact opportunities, design scalable automation architectures, 
              and establish governance frameworks that ensure sustainable success.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From initial assessment to full-scale implementation roadmaps, our consultants bring 
              deep industry expertise and proven methodologies to accelerate your automation journey 
              while minimizing risks and maximizing business value.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Key Benefits */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Benefits</h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-start gap-4 p-6 rounded-xl border border-gray-700">
                <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-gray-900" />
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Deliverables */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What You'll Receive</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {deliverables.map((deliverable, index) => (
              <motion.div key={index} variants={itemVariants} className="rounded-2xl p-8 border border-gray-700">
                <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{deliverable.title}</h3>
                <p className="text-gray-400 leading-relaxed">{deliverable.description}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Build Your Automation Strategy?
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Let our experts help you develop a comprehensive automation roadmap 
              that drives measurable business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to={createPageUrl("Demo")}
                className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#1e293b_50%,#06b6d4_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-lg font-semibold text-white backdrop-blur-3xl gap-2">
                  Schedule Consultation
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
    </div>
  );
}
