import React, { useState } from "react";
import { Calendar, Users, Target, Send, CheckCircle } from "lucide-react";
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function Demo() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Benefits of discovery workshop
  const benefits = [
    {
      icon: Target,
      title: "ROI Use Case Identification",
      description: "Identify top automation opportunities with highest ROI potential in just 2 weeks"
    },
    {
      icon: Users,
      title: "Rapid Pilot Development", 
      description: "Stand up a working pilot in 30-45 days with measurable business outcomes"
    },
    {
      icon: CheckCircle,
      title: "Platform Strategy",
      description: "Get expert guidance on automation platform selection and CoE model setup"
    }
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-[--bg] text-[--text-primary]' : 'bg-white text-gray-900'
    }`}>
      {/* Global Background Grid Animation */}
      <BackgroundRippleEffect />
      
      {/* Hero Section */}
      <section className="pt-16 lg:pt-20 pb-12 lg:pb-16 bg-transparent backdrop-blur-sm relative z-10" role="banner">
        <div className="container-responsive text-center">
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 text-high-contrast ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Book a Demo
          </h1>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Schedule a strategy session to accelerate your automation journey
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-transparent backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`border rounded-3xl p-12 text-center shadow-lg ${
            isDark
              ? 'border-gray-700 bg-gray-800/50'
              : 'border-gray-200 bg-white'
          }`}>
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
              isDark ? 'bg-gray-700 border border-gray-600' : 'bg-gray-100 border border-gray-200'
            }`}>
              <Calendar className={`w-8 h-8 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
            </div>
            <h2 className={`text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Discovery Workshop & Strategy Session</h2>
            <p className={`text-lg leading-relaxed mb-8 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Book a comprehensive strategy session where we'll work together to scope your automation roadmap, 
              design the optimal Center of Excellence (CoE) model, and guide platform choices that align with 
              your business objectives. Our proven methodology helps identify high-impact use cases and establish 
              a foundation for scalable automation success.
            </p>
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              In this collaborative session, we'll assess your current state, define target outcomes, 
              and create a tactical plan to achieve measurable ROI within the first 90 days.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-transparent backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>What You'll Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className={`border rounded-2xl p-8 shadow-lg text-center transition-all duration-300 ${
                  isDark
                    ? 'border-gray-700 bg-gray-800/50 hover:border-cyan-500/30'
                    : 'border-gray-200 bg-white hover:border-cyan-400'
                }`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6 ${
                    isDark ? 'bg-gray-700 border border-gray-600' : 'bg-gray-100 border border-gray-200'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{benefit.title}</h3>
                  <p className={`leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-transparent backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Our Process</h2>
          <div className="space-y-8">
            <div className={`flex items-start gap-6 p-6 border rounded-xl shadow-lg ${
              isDark
                ? 'border-gray-700 bg-gray-800/50'
                : 'border-gray-200 bg-white'
            }`}>
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Initial Consultation (Week 1)</h3>
                <p className={`leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Deep-dive assessment of your current processes, pain points, and automation readiness. 
                  We'll identify quick wins and long-term opportunities.
                </p>
              </div>
            </div>
            <div className={`flex items-start gap-6 p-6 border rounded-xl shadow-lg ${
              isDark
                ? 'border-gray-700 bg-gray-800/50'
                : 'border-gray-200 bg-white'
            }`}>
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Process Analysis & Use Case Prioritization (Week 2)</h3>
                <p className={`leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Detailed process mapping and ROI analysis to prioritize use cases by business impact, 
                  technical feasibility, and implementation timeline.
                </p>
              </div>
            </div>
            <div className={`flex items-start gap-6 p-6 border rounded-xl shadow-lg ${
              isDark
                ? 'border-gray-700 bg-gray-800/50'
                : 'border-gray-200 bg-white'
            }`}>
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Pilot Development & Launch (Weeks 3-6)</h3>
                <p className={`leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Rapid development and deployment of your first automation pilot with clear success metrics 
                  and governance framework in place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-transparent backdrop-blur-sm relative z-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`border rounded-3xl p-12 shadow-lg ${
            isDark
              ? 'border-gray-700 bg-gray-800/50'
              : 'border-gray-200 bg-white'
          }`}>
            <div className="text-center mb-8">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                isDark ? 'bg-gray-700 border border-gray-600' : 'bg-gray-100 border border-gray-200'
              }`}>
                <Send className={`w-8 h-8 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
              </div>
              <h2 className={`text-3xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Let's Get Started</h2>
              <p className={`leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Schedule your discovery workshop and take the first step toward autonomous operations.
              </p>
            </div>

            {/* FormSubmit Integration */}
            <form className="space-y-4 lg:space-y-6" role="form" aria-label="Contact form">
              {/* Hidden FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Demo Request - Autellia" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 min-h-[44px] ${
                      isDark
                        ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500'
                        : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-cyan-500'
                    }`}
                    placeholder="Enter your full name"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="company" className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 min-h-[44px] ${
                      isDark
                        ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500'
                        : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-cyan-500'
                    }`}
                    placeholder="Enter your company name"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 min-h-[44px] ${
                    isDark
                      ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500'
                      : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-cyan-500'
                  }`}
                  placeholder="Enter your email address"
                  required
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Tell Us About Your Automation Goals *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 min-h-[120px] ${
                    isDark
                      ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500'
                      : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-cyan-500'
                  }`}
                  placeholder="Describe your current challenges, automation goals, and what you'd like to achieve..."
                  required
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                className="relative w-full inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--accent)_0%,var(--surface)_50%,var(--accent)_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-[--surface] px-8 py-4 text-lg font-semibold text-[--text-primary] backdrop-blur-3xl gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule Discovery Workshop
                </span>
              </button>

              <p className="text-base sm:text-lg lg:text-xl text-[--text-muted] mb-6 lg:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
                Discover how Autellia can transform your business operations with a personalized discovery workshop.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}