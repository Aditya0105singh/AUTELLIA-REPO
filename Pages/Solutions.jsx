import React from "react";
import { CheckCircle, Target, Lightbulb, Shield, Cog, BarChart, Users, Zap, Brain, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";

export default function Solutions() {
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

  const objectives = [
    "Accelerate business outcomes through intelligent automation",
    "Enable autonomous decision-making with agentic AI systems", 
    "Transform operational data into strategic business insights"
  ];

  const problems = [
    {
      title: "Operational Inefficiency",
      description: "Manual processes creating bottlenecks and errors"
    },
    {
      title: "Slow Decision Making", 
      description: "Data scattered across systems without actionable insights"
    },
    {
      title: "Governance & Risk",
      description: "Lack of controls and visibility in automated processes"
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: "Intelligent Automation Platform",
      description: "End-to-end RPA implementation with process mining, workflow orchestration, and intelligent document processing.",
    },
    {
      icon: Brain,
      title: "Agentic AI for Operations",
      description: "Autonomous agents that plan, execute, and optimize business processes with built-in governance and explainability.",
    },
    {
      icon: BarChart,
      title: "Data to Decisions",
      description: "Real-time analytics and Power BI/Tableau integration to turn operational data into strategic insights.",
    }
  ];

  const services = [
    { title: "RPA Implementation", description: "Full-cycle bot development and deployment across platforms" },
    { title: "Process Mining & Discovery", description: "Identify automation opportunities with data-driven insights" },
    { title: "Agentic AI Engineering", description: "Design autonomous systems for complex business scenarios" },
    { title: "AI/ML Solutions", description: "Custom machine learning models for predictive analytics" },
    { title: "Analytics & Dashboards", description: "Real-time business intelligence and reporting" },
    { title: "Managed Automation (BotOps)", description: "24/7 monitoring, maintenance, and optimization" },
    { title: "Enablement & Training", description: "Team upskilling and center of excellence setup" }
  ];

  const platforms = ["UiPath", "Power Automate", "Blue Prism", "Automation Anywhere"];

  const deliverySteps = [
    { title: "Discover", description: "Process assessment and ROI identification" },
    { title: "Design & Build", description: "Solution architecture and rapid development" },
    { title: "Run & Optimize", description: "Deployment, monitoring, and continuous improvement" }
  ];

  return (
    <div className="min-h-screen bg-[--bg] text-[--text-primary]">
      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="pt-20 pb-16 bg-[--surface] relative"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[--text-primary]">
            Solutions
          </h1>
          <p className="text-xl text-[--text-muted] leading-relaxed">
            Comprehensive automation and AI solutions for enterprise transformation
          </p>
        </div>
      </motion.section>

      {/* Company Overview */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="py-16 bg-[--bg]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-[--border] bg-[--surface] rounded-2xl p-12 shadow-[var(--shadow)]">
            <h2 className="text-3xl font-bold text-[--text-primary] mb-6">Company Overview</h2>
            <p className="text-lg text-[--text-muted] leading-relaxed">
              Autellia is a leading provider of intelligent automation and agentic AI solutions that help enterprises 
              build autonomous operations. We specialize in end-to-end automation platforms, from traditional RPA to 
              advanced AI agents that can plan, execute, and optimize business processes independently. Our approach 
              combines deep technical expertise with business outcome focus, delivering measurable ROI through secure, 
              scalable, and governed automation solutions.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Objectives Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="py-16 bg-[--surface]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[--text-primary] mb-12">Our Objectives</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {objectives.map((obj, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative border border-[--border] bg-[--panel] rounded-xl p-8 flex items-start space-x-4 hover:border-[--accent]/50 hover:shadow-[var(--shadow)] transition-all duration-300"
              >
                <CheckCircle className="text-[--accent] w-8 h-8 flex-shrink-0 mt-1" />
                <p className="text-lg text-[--text-muted]">{obj}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      {/* Problems & Solutions Grid */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="py-24 bg-[--bg]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-start">
            <div>
                <h2 className="text-4xl font-bold text-center text-[--text-primary] mb-12">The Problem</h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-8"
                >
                    {problems.map((prob, index) => (
                    <motion.div key={index} variants={itemVariants} className="relative border border-[--border] rounded-xl p-8 shadow-sm transition-all duration-300 hover:border-red-500/50 transform hover:-translate-y-1 bg-[--surface]">
                        <Target className="text-red-400 w-10 h-10 mb-4" />
                        <h3 className="text-2xl font-semibold text-[--text-primary] mb-2">{prob.title}</h3>
                        <p className="text-[--text-muted]">{prob.description}</p>
                    </motion.div>
                    ))}
                </motion.div>
            </div>
            <div>
                <h2 className="text-4xl font-bold text-center text-[--text-primary] mb-12">Our Solution</h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-8"
                >
                    {solutions.map((sol, index) => (
                    <motion.div key={index} variants={itemVariants} className="relative border border-[--border] rounded-xl p-8 shadow-sm transition-all duration-300 hover:border-[--accent]/50 transform hover:-translate-y-1 bg-[--surface]">
                        <sol.icon className="text-[--accent] w-10 h-10 mb-4" />
                        <h3 className="text-2xl font-semibold text-[--text-primary] mb-2">{sol.title}</h3>
                        <p className="text-[--text-muted]">{sol.description}</p>
                    </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
      </motion.section>

      {/* Our Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="py-16 bg-[--surface]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[--text-primary] mb-12">Our Services</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative border border-[--border] rounded-xl p-6 shadow-sm transition-all duration-300 hover:border-[--accent]/50 transform hover:-translate-y-1 bg-[--panel]"
              >
                <h3 className="text-xl font-semibold text-[--text-primary] mb-2">{service.title}</h3>
                <p className="text-[--text-muted]">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="py-20 bg-[--bg] text-center"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl mb-8 leading-relaxed text-[--text-muted]">
            Contact us today to discover how intelligent automation and agentic AI can drive your business forward.
          </p>
          <a
            href="https://cal.com/autellia-technology-43lknv"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[--accent] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[--accent-variant] transition-all duration-300 btn-glow flex items-center justify-center gap-2 max-w-sm mx-auto"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.section>
    </div>
  );
}