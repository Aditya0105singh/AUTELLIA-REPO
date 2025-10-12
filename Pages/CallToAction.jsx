import React from "react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
import { Calendar, MessageSquare, FileText, Users, ArrowRight, CheckCircle, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function CallToAction() {
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

  const ctaOptions = [
    {
      icon: Calendar,
      title: "Schedule a Discovery Workshop",
      description: "Book a 60-minute session to explore your automation opportunities and create a roadmap for success.",
      benefits: [
        "Free automation assessment",
        "Custom ROI projections",
        "Technology recommendations",
        "Implementation timeline"
      ],
      buttonText: "Book Discovery Call",
      buttonLink: "Demo",
      primary: true
    },
    {
      icon: FileText,
      title: "Download Our Automation Guide",
      description: "Get our comprehensive guide covering RPA, AI/ML, and intelligent automation best practices.",
      benefits: [
        "Industry use cases",
        "Technology comparison",
        "Implementation checklist",
        "ROI calculation framework"
      ],
      buttonText: "Download Guide",
      buttonLink: "#",
      primary: false
    },
    {
      icon: MessageSquare,
      title: "Start a Conversation",
      description: "Connect with our automation experts to discuss your specific challenges and requirements.",
      benefits: [
        "Expert consultation",
        "Custom solution design",
        "Proof of concept planning",
        "Partnership discussion"
      ],
      buttonText: "Contact Us",
      buttonLink: "#",
      primary: false
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current processes and identify automation opportunities with the highest ROI potential.",
      icon: Target
    },
    {
      step: "02", 
      title: "Solution Design",
      description: "Our experts design a custom automation solution tailored to your specific business requirements.",
      icon: FileText
    },
    {
      step: "03",
      title: "Implementation & Deployment",
      description: "We implement the solution with minimal disruption to your operations and provide comprehensive training.",
      icon: Users
    },
    {
      step: "04",
      title: "Support & Optimization",
      description: "Ongoing support and continuous optimization to ensure maximum value from your automation investment.",
      icon: Clock
    }
  ];

  const testimonials = [
    {
      quote: "Autellia transformed our loan processing from 15 days to just 2 days. The ROI was incredible.",
      author: "Sarah Johnson",
      title: "VP of Operations, Global Bank",
      company: "Fortune 500 Financial Services"
    },
    {
      quote: "Their AI-powered claims processing solution reduced our operational costs by $1.8M annually.",
      author: "Michael Chen",
      title: "CTO, Healthcare Provider",
      company: "Leading Healthcare Network"
    },
    {
      quote: "The supply chain automation delivered 450% ROI in the first year. Outstanding results.",
      author: "David Rodriguez",
      title: "Director of Operations",
      company: "Manufacturing Giant"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-transparent text-gray-200' : 'bg-white text-gray-900'
    }`}>
      <BackgroundRippleEffect />
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="pt-24 sm:pt-20 pb-16 bg-transparent relative"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Transform Your Business?
          </h1>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Take the next step towards intelligent automation. Choose how you'd like to get started 
            with Autellia's enterprise automation solutions.
          </p>
        </div>
      </motion.section>

      {/* CTA Options */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {ctaOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className={`rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 ${
                    isDark
                      ? option.primary 
                        ? 'border-cyan-500/50 bg-cyan-900/10 hover:shadow-cyan-900/20' 
                        : 'border-gray-700 hover:border-cyan-500/30 hover:shadow-cyan-900/10'
                      : option.primary
                        ? 'border-cyan-500/30 bg-white hover:shadow-cyan-200'
                        : 'border-gray-300 hover:border-cyan-400 hover:shadow-lg bg-white'
                  }`}
                >
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                      isDark
                        ? option.primary ? 'bg-cyan-500/20 border border-cyan-500/30' : 'bg-gray-800 border border-gray-700'
                        : option.primary ? 'bg-cyan-100 border border-cyan-300' : 'bg-gray-100 border border-gray-300'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        isDark
                          ? option.primary ? 'text-cyan-400' : 'text-gray-400'
                          : option.primary ? 'text-cyan-600' : 'text-gray-600'
                      }`} />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>{option.title}</h3>
                    <p className={`leading-relaxed mb-6 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>{option.description}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {option.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className={`text-sm ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    {option.primary ? (
                      <Link 
                        to={createPageUrl(option.buttonLink)} 
                        className="relative inline-flex h-12 w-full max-w-xs overflow-hidden rounded-xl p-[1px] focus:outline-none group"
                      >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#1e293b_50%,#06b6d4_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white backdrop-blur-3xl gap-2">
                          {option.buttonText}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    ) : (
                      <button className={`w-full max-w-xs px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                        isDark
                          ? 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-600/50 hover:border-gray-500'
                          : 'bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-gray-400'
                      }`}>
                        {option.buttonText}
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Process Steps */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Our Proven Process</h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              From initial assessment to ongoing optimization, we guide you through every step of your automation journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div key={index} variants={itemVariants} className={`text-center p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                  isDark
                    ? 'border-gray-700 bg-gray-800/50 hover:border-cyan-500/30'
                    : 'border-gray-200 bg-white hover:border-cyan-400 shadow-sm'
                }`}>
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto ${
                      isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-300'
                    }`}>
                      <IconComponent className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{step.title}</h3>
                  <p className={`text-sm leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>What Our Clients Say</h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>Real results from real enterprises</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 ${
                  isDark 
                    ? 'border-gray-700 hover:shadow-cyan-900/20' 
                    : 'border-gray-300 hover:shadow-cyan-200 bg-white'
                }`}
              >
                <div className="mb-4">
                  <div className="flex text-cyan-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className={`italic leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>"{testimonial.quote}"</p>
                </div>
                <div className={`border-t pt-4 ${
                  isDark ? 'border-gray-700' : 'border-gray-300'
                }`}>
                  <div className={`font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{testimonial.author}</div>
                  <div className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{testimonial.title}</div>
                  <div className={`text-xs ${
                    isDark ? 'text-gray-500' : 'text-gray-500'
                  }`}>{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`border rounded-3xl p-12 hover:shadow-xl transition-all duration-300 ${
            isDark 
              ? 'border-gray-700 text-white hover:shadow-blue-900/20' 
              : 'border-gray-300 text-gray-900 hover:shadow-blue-200 bg-white'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Don't Wait - Start Your Transformation Today</h2>
            <p className={`text-xl mb-8 leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Join the hundreds of enterprises already benefiting from intelligent automation. 
              Your competitors are already moving - don't get left behind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Demo")} className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#1e293b_50%,#06b6d4_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-lg font-semibold text-white backdrop-blur-3xl gap-2">
                  Schedule Discovery Workshop
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
