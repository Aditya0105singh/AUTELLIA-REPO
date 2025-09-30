import React, { useState } from "react";
import { Users, Rocket, Heart, Globe, Send, MapPin, Clock, DollarSign, Briefcase, Star, Award, Coffee, Zap, Shield, Headphones, Calendar, TrendingUp } from "lucide-react";
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
      <div className="mx-6 sm:mx-8 lg:mx-12">
        <BackgroundRippleEffect />
      
      {/* Enhanced Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="pt-32 pb-20 bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-8"
            >
              <Briefcase className="w-4 h-4 text-indigo-500" />
              <span className={`text-sm font-medium ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>
                We're Hiring
              </span>
            </motion.div>
            
            <h1 className={`text-5xl md:text-7xl font-bold mb-8 leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="block">Join the Future of</span>
              <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Intelligent Automation
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12 ${
              isDark ? 'text-slate-300' : 'text-gray-600'
            }`}>
              Build the next generation of AI-powered enterprise solutions with a team of world-class engineers, 
              data scientists, and automation experts who are reshaping how businesses operate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#open-positions"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Briefcase className="w-5 h-5" />
                View Open Positions
              </motion.a>
              
              <motion.a
                href="#culture"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-3 px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 ${
                  isDark 
                    ? 'border-slate-600 text-white hover:border-indigo-500 hover:bg-indigo-500/10' 
                    : 'border-gray-300 text-gray-700 hover:border-indigo-500 hover:bg-indigo-50'
                }`}
              >
                <Users className="w-5 h-5" />
                Our Culture
              </motion.a>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "50+", label: "Team Members" },
              { number: "15+", label: "Countries" },
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Employee Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.number}
                </div>
                <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Introduction */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`border rounded-3xl p-12 text-center ${
            isDark
              ? 'border-gray-700 bg-gray-800/50'
              : 'border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-indigo-900'
            }`}>Shape the Future of Work</h2>
            <p className={`text-lg leading-relaxed mb-8 ${
              isDark ? 'text-gray-400' : 'text-indigo-700'
            }`}>
              At Autellia, we're building the next generation of autonomous enterprise solutions. Our team combines 
              deep technical expertise with business acumen to deliver transformational outcomes for leading organizations 
              worldwide. Join us in revolutionizing how businesses operate through intelligent automation, agentic AI, 
              and data-driven insights.
            </p>
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-indigo-600'
            }`}>
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
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Our Values & Culture</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div key={index} variants={itemVariants} className={`rounded-2xl p-8 border text-center transition-all duration-300 relative overflow-hidden transform hover:-translate-y-1 hover:shadow-xl ${
                  isDark
                    ? 'border-gray-700 bg-gray-800/50 hover:border-cyan-500/50'
                    : 'border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50 hover:border-purple-300'
                }`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6 relative z-10 ${
                    isDark ? 'bg-gray-700 border border-gray-600' : 'bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`} />
                  </div>
                  <h3 className={`text-lg font-bold mb-4 relative z-10 ${
                    isDark ? 'text-white' : 'text-indigo-900'
                  }`}>{value.title}</h3>
                  <p className={`leading-relaxed text-sm relative z-10 ${
                    isDark ? 'text-gray-400' : 'text-indigo-600'
                  }`}>{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Benefits & Perks */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-20 bg-transparent relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Why You'll Love Working Here
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-gray-600'
            }`}>
              We believe in taking care of our team with comprehensive benefits and a culture that promotes growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: DollarSign,
                title: "Competitive Compensation",
                description: "Market-leading salaries with equity options and performance bonuses",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: Shield,
                title: "Health & Wellness",
                description: "Comprehensive medical, dental, vision coverage plus wellness stipends",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: Clock,
                title: "Flexible Work",
                description: "Remote-first culture with flexible hours and unlimited PTO policy",
                color: "from-purple-500 to-indigo-600"
              },
              {
                icon: TrendingUp,
                title: "Career Growth",
                description: "Learning budget, mentorship programs, and clear advancement paths",
                color: "from-orange-500 to-red-600"
              },
              {
                icon: Coffee,
                title: "Work-Life Balance",
                description: "Wellness days, team retreats, and mental health support programs",
                color: "from-pink-500 to-rose-600"
              },
              {
                icon: Award,
                title: "Recognition",
                description: "Peer recognition programs, achievement bonuses, and career milestones",
                color: "from-yellow-500 to-amber-600"
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50' 
                      : 'bg-white border border-gray-200 hover:border-indigo-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {benefit.title}
                  </h3>
                  <p className={`leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-gray-600'
                  }`}>
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Open Positions */}
      <motion.section 
        id="open-positions"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-20 bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Open Positions
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-gray-600'
            }`}>
              Join our growing team and help shape the future of enterprise automation
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Senior AI/ML Engineer",
                department: "Engineering",
                location: "Remote / San Francisco",
                type: "Full-time",
                description: "Lead the development of next-generation AI models for enterprise automation platforms.",
                requirements: ["5+ years ML experience", "Python/TensorFlow", "Cloud platforms", "PhD preferred"]
              },
              {
                title: "RPA Developer",
                department: "Automation",
                location: "Remote / New York",
                type: "Full-time", 
                description: "Design and implement robotic process automation solutions for Fortune 500 clients.",
                requirements: ["3+ years RPA experience", "UiPath/Blue Prism", "Process analysis", "Client-facing skills"]
              },
              {
                title: "Data Scientist",
                department: "Analytics",
                location: "Remote / London",
                type: "Full-time",
                description: "Extract insights from complex datasets to drive automation strategy and optimization.",
                requirements: ["PhD in Data Science", "R/Python/SQL", "Statistical modeling", "Business acumen"]
              },
              {
                title: "Solutions Architect",
                department: "Consulting",
                location: "Remote / Global",
                type: "Full-time",
                description: "Design end-to-end automation architectures for enterprise digital transformation.",
                requirements: ["7+ years enterprise architecture", "Cloud expertise", "Automation platforms", "Leadership skills"]
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                  isDark 
                    ? 'bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50' 
                    : 'bg-white border border-gray-200 hover:border-indigo-300 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className={`text-2xl font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium rounded-full">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                      <div className={`flex items-center gap-2 ${
                        isDark ? 'text-slate-400' : 'text-gray-600'
                      }`}>
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className={`flex items-center gap-2 ${
                        isDark ? 'text-slate-400' : 'text-gray-600'
                      }`}>
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                    </div>
                    
                    <p className={`mb-4 leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-gray-600'
                    }`}>
                      {job.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, reqIndex) => (
                        <span
                          key={reqIndex}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            isDark 
                              ? 'bg-slate-700 text-slate-300' 
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <motion.a
                      href="#application-form"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Send className="w-4 h-4" />
                      Apply Now
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* Application Form */}
      <motion.section 
        id="application-form"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-20 bg-transparent relative z-10"
      >
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`rounded-3xl p-12 transition-all duration-300 ${
            isDark 
              ? 'bg-slate-800/50 border border-slate-700/50 shadow-2xl' 
              : 'bg-white border border-gray-200 shadow-2xl'
          }`}>
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg"
              >
                <Send className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Ready to Join Our Team?
              </h2>
              <p className={`text-xl leading-relaxed max-w-2xl mx-auto ${
                isDark ? 'text-slate-300' : 'text-gray-600'
              }`}>
                Tell us about yourself and how you'd like to contribute to the future of intelligent automation. 
                We review every application personally and will get back to you within 48 hours.
              </p>
            </div>

            <form 
              action="https://formsubmit.co/autelliatechnology@gmail.com" 
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New Career Application - Autellia" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://autellia.com/thank-you" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-semibold mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 ${
                      isDark
                        ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                        : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-semibold mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 ${
                      isDark
                        ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                        : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="resume" className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Resume/LinkedIn URL
                </label>
                <input
                  type="url"
                  id="resume"
                  name="resume"
                  value={formData.resume}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 ${
                    isDark
                      ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                      : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="https://linkedin.com/in/yourprofile or resume URL"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Tell Us About Yourself *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none ${
                    isDark
                      ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                      : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                  }`}
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
    </div>
  );
}