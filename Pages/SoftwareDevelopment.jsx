
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { Code, CheckCircle, ArrowRight, Database, Cloud } from "lucide-react";
import { motion } from "framer-motion";

export default function SoftwareDevelopment() {
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
    "Custom web application development",
    "Mobile app development (iOS and Android)",
    "API development and integration services",
    "UI/UX design and prototyping",
    "Legacy system modernization and migration"
  ];

  const technologies = [
    {
      title: "Frontend",
      description: "React, Next.js, Vue.js, Tailwind CSS"
    },
    {
      title: "Backend",
      description: "Node.js, Python, Java, .NET"
    },
    {
      title: "Mobile",
      description: "React Native, Flutter, Swift, Kotlin"
    },
    { // This item's description is updated as per outline
      title: "API Development",
      description: "Custom API development and integration with third-party services"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-gray-200 relative overflow-hidden">
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="pt-20 pb-16 bg-transparent backdrop-blur-sm relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Code className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Custom Software Development
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Bespoke software solutions that are scalable, secure, and tailored 
            to your unique business requirements.
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
            <h2 className="text-3xl font-bold text-white mb-6">Bespoke Software Solutions</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Our custom software development services provide tailor-made solutions that address 
              your unique business challenges and integrate seamlessly with your existing systems. 
              We build scalable, secure, and maintainable applications that support your automation 
              and digital transformation initiatives.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From enterprise web applications to custom API integrations, our team of expert 
              developers follows agile methodologies to deliver high-quality software that meets 
              your specific requirements and drives business value.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Development Services */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Development Services</h2>
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

      {/* Technology Stack */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Technology Stack</h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="grid md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="rounded-2xl p-8 text-center border border-gray-700">
              <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Code className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{technologies[0].title}</h3>
              <p className="text-gray-400 leading-relaxed">{technologies[0].description}</p>
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-2xl p-8 text-center border border-gray-700">
              <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Database className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Backend & APIs</h3>
              <p className="text-gray-400 leading-relaxed">{technologies[1].description}, {technologies[3].description}</p>
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-2xl p-8 text-center border border-gray-700">
              <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile & Cloud</h3>
              <p className="text-gray-400 leading-relaxed">{technologies[2].description}, AWS, Azure, Google Cloud</p>
            </motion.div>
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
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Let our expert developers build a tailor-made application that solves your 
              unique business challenges and drives growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://cal.com/autellia-technology-43lknv"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#1e293b_50%,#06b6d4_100%)]" />
                <span className="border-magic-inner flex items-center justify-center gap-2">
                  Start Your Project
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
