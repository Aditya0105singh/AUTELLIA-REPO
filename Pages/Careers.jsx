import React, { useState } from "react";
import { Users, Rocket, Heart, Globe, Send } from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function Careers() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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

  const values = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "We push boundaries in automation and AI, always seeking the next breakthrough solution."
    },
    {
      icon: Users,
      title: "Collaborative Excellence", 
      description: "Teamwork drives our success. We achieve more together than any individual could alone."
    },
    {
      icon: Heart,
      title: "Impact-Driven",
      description: "Every project we undertake aims to create meaningful, measurable business outcomes."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We think globally while acting locally, bringing world-class solutions to every client."
    }
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-[--bg] text-[--text-primary]' : 'bg-white text-gray-900'
    }`}>
      <BackgroundRippleEffect />
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="pt-20 pb-16 bg-transparent relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[--text-primary]">
            Come Join Us
          </h1>
          <p className="text-xl text-[--text-muted] leading-relaxed max-w-3xl mx-auto">
            Be part of the team that's transforming how enterprises operate through intelligent automation and AI
          </p>
        </div>
      </motion.section>

      {/* Introduction */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-[--border] bg-[--surface] rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-[--text-primary] mb-6">Shape the Future of Work</h2>
            <p className="text-lg text-[--text-muted] leading-relaxed mb-8">
              At Autellia, we're building the next generation of autonomous enterprise solutions. Our team combines 
              deep technical expertise with business acumen to deliver transformational outcomes for leading organizations 
              worldwide. Join us in revolutionizing how businesses operate through intelligent automation, agentic AI, 
              and data-driven insights.
            </p>
            <p className="text-lg text-[--text-muted] leading-relaxed">
              We're looking for passionate individuals who thrive in a collaborative, innovation-driven environment 
              and want to make a meaningful impact on the future of enterprise operations.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Values */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[--text-primary] mb-12 text-center">Our Values & Culture</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="rounded-2xl p-8 border border-[--border] bg-[--surface] text-center hover:border-[--accent]/50 hover:shadow-[var(--shadow)] transition-all duration-300 relative overflow-hidden">
                  <div className="w-12 h-12 bg-[--panel] border border-[--border] rounded-xl flex items-center justify-center mx-auto mb-6 relative z-10">
                    <IconComponent className="w-6 h-6 text-[--accent]" />
                  </div>
                  <h3 className="text-lg font-bold text-[--text-primary] mb-4 relative z-10">{value.title}</h3>
                  <p className="text-[--text-muted] leading-relaxed text-sm relative z-10">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Growth Opportunities */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[--text-primary] mb-6">Growth Opportunities</h2>
            <p className="text-xl text-[--text-muted]">
              Accelerate your career with cutting-edge projects and continuous learning
            </p>
          </div>

          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div variants={itemVariants} className="flex items-start gap-4 p-6 rounded-xl border border-[--border] bg-[--surface] hover:border-[--accent]/50 hover:shadow-[var(--shadow)] transition-all duration-300 h-full">
              <div className="w-8 h-8 bg-[--panel] border border-[--border] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[--accent] text-sm font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-[--text-primary] mb-2">Technical Excellence</h3>
                <p className="text-[--text-muted] text-sm">Work with the latest automation platforms, AI technologies, and cloud infrastructure</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start gap-4 p-6 rounded-xl border border-[--border] bg-[--surface] hover:border-[--accent]/50 hover:shadow-[var(--shadow)] transition-all duration-300 h-full">
              <div className="w-8 h-8 bg-[--panel] border border-[--border] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[--accent] text-sm font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-[--text-primary] mb-2">Continuous Learning</h3>
                <p className="text-[--text-muted] text-sm">Access to certifications, conferences, and training on emerging technologies</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start gap-4 p-6 rounded-xl border border-[--border] bg-[--surface] hover:border-[--accent]/50 hover:shadow-[var(--shadow)] transition-all duration-300 h-full">
              <div className="w-8 h-8 bg-[--panel] border border-[--border] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[--accent] text-sm font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-[--text-primary] mb-2">Leadership Development</h3>
                <p className="text-[--text-muted] text-sm">Lead high-impact projects and mentor junior team members in a collaborative environment</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start gap-4 p-6 rounded-xl border border-[--border] bg-[--surface] hover:border-[--accent]/50 hover:shadow-[var(--shadow)] transition-all duration-300 h-full">
              <div className="w-8 h-8 bg-[--panel] border border-[--border] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[--accent] text-sm font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-[--text-primary] mb-2">Global Exposure</h3>
                <p className="text-[--text-muted] text-sm">Work with international clients and contribute to global automation initiatives</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start gap-4 p-6 rounded-xl border border-[--border] bg-[--surface] hover:border-[--accent]/50 hover:shadow-[var(--shadow)] transition-all duration-300 h-full">
              <div className="w-8 h-8 bg-[--panel] border border-[--border] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[--accent] text-sm font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-[--text-primary] mb-2">Industry Impact</h3>
                <p className="text-[--text-muted] text-sm">Shape the future of enterprise automation across multiple industries and use cases</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start gap-4 p-6 rounded-xl border border-[--border] bg-[--surface] hover:border-[--accent]/50 hover:shadow-[var(--shadow)] transition-all duration-300 h-full">
              <div className="w-8 h-8 bg-[--panel] border border-[--border] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[--accent] text-sm font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-[--text-primary] mb-2">Innovation Culture</h3>
                <p className="text-[--text-muted] text-sm">Contribute to R&D initiatives and help develop next-generation automation solutions</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Application Form */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-12 border border-[--border] bg-[--surface] shadow-[var(--shadow)]">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[--panel] border border-[--border] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-[--accent]" />
              </div>
              <h2 className="text-3xl font-bold text-[--text-primary] mb-4">Ready to Join Our Team?</h2>
              <p className="text-[--text-muted] leading-relaxed">
                Tell us about yourself and how you'd like to contribute to the future of intelligent automation.
              </p>
            </div>

            <form 
              action="https://formsubmit.co/adityasingh01517@gmail.com" 
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New Career Application - Autellia" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[--text-primary] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[--border] bg-[--panel] text-[--text-primary] rounded-xl focus:ring-2 focus:ring-[--accent] focus:border-transparent transition-all duration-200 placeholder-[--text-muted]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[--text-primary] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[--border] bg-[--panel] text-[--text-primary] rounded-xl focus:ring-2 focus:ring-[--accent] focus:border-transparent transition-all duration-200 placeholder-[--text-muted]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-semibold text-[--text-primary] mb-2">
                  Resume/LinkedIn URL
                </label>
                <input
                  type="url"
                  id="resume"
                  name="resume"
                  value={formData.resume}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[--border] bg-[--panel] text-[--text-primary] rounded-xl focus:ring-2 focus:ring-[--accent] focus:border-transparent transition-all duration-200 placeholder-[--text-muted]"
                  placeholder="https://linkedin.com/in/yourprofile or resume URL"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[--text-primary] mb-2">
                  Tell Us About Yourself *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[--border] bg-[--panel] text-[--text-primary] rounded-xl focus:ring-2 focus:ring-[--accent] focus:border-transparent transition-all duration-200 resize-none placeholder-[--text-muted]"
                  placeholder="Share your experience, interests, and why you'd like to join Autellia..."
                />
              </div>

              <button
                type="submit"
                className="relative w-full inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--accent)_0%,var(--surface)_50%,var(--accent)_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-[--surface] px-8 py-4 text-lg font-semibold text-[--text-primary] backdrop-blur-3xl gap-2">
                  <Send className="w-5 h-5" />
                  Submit Application
                </span>
              </button>
            </form>
          </div>
        </div>
      </motion.section>
    </div>
  );
}