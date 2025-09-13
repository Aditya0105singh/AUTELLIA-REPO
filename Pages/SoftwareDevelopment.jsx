
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { Code, CheckCircle, ArrowRight, Database, Cloud, Smartphone, Globe, Layers, Zap, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function SoftwareDevelopment() {
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
      icon: Globe,
      title: "Web Application Development",
      desc: "Custom web applications built with modern frameworks, responsive design, and scalable architecture for optimal performance."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile applications for iOS and Android with intuitive user interfaces and seamless functionality."
    },
    {
      icon: Database,
      title: "API Development & Integration",
      desc: "Robust API development and third-party service integrations to connect your systems and enable data flow automation."
    },
    {
      icon: Layers,
      title: "UI/UX Design & Prototyping",
      desc: "User-centered design approach with interactive prototypes, wireframes, and modern interfaces that enhance user experience."
    },
    {
      icon: Zap,
      title: "Legacy System Modernization",
      desc: "Transform outdated systems into modern, efficient applications while preserving critical business logic and data integrity."
    },
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      desc: "Built-in security measures, data encryption, and compliance with industry standards to protect your business assets."
    }
  ];

  const services = [
    "Custom web application development",
    "Mobile app development (iOS and Android)",
    "API development and integration services",
    "UI/UX design and prototyping",
    "Legacy system modernization and migration"
  ];

  const technologies = [
    {
      icon: Code,
      category: "Frontend Technologies",
      description: "Modern frontend frameworks and libraries for responsive, interactive user interfaces",
      stack: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "TypeScript"]
    },
    {
      icon: Database,
      category: "Backend & APIs",
      description: "Scalable server-side technologies and database management systems",
      stack: ["Node.js", "Python", "Java", ".NET", "PostgreSQL", "MongoDB"]
    },
    {
      icon: Smartphone,
      category: "Mobile Development",
      description: "Cross-platform and native mobile development frameworks",
      stack: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"]
    },
    {
      icon: Cloud,
      category: "Cloud & DevOps",
      description: "Cloud platforms and deployment automation for scalable applications",
      stack: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"]
    }
  ];

  const process = [
    {
      title: "Discovery & Planning",
      desc: "Comprehensive analysis of requirements, technical feasibility, and project roadmap development.",
      timeline: "1-2 weeks"
    },
    {
      title: "Design & Architecture",
      desc: "System architecture design, UI/UX mockups, and technical specification documentation.",
      timeline: "2-3 weeks"
    },
    {
      title: "Development & Testing",
      desc: "Agile development with continuous testing, code reviews, and quality assurance processes.",
      timeline: "6-12 weeks"
    },
    {
      title: "Deployment & Support",
      desc: "Production deployment, user training, documentation, and ongoing maintenance support.",
      timeline: "1-2 weeks"
    }
  ];

  const results = [
    {
      icon: Zap,
      metric: "50%",
      description: "Faster Development Time"
    },
    {
      icon: Users,
      metric: "95%",
      description: "Client Satisfaction Rate"
    },
    {
      icon: Shield,
      metric: "99.9%",
      description: "System Uptime"
    }
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
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
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
            alt="Software Development Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>

        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Custom Software Development
          </h1>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-200'
          }`}>
            Bespoke software solutions that are scalable, secure, and tailored 
            to your unique business requirements.
          </p>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Development Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50' 
                      : 'bg-white border-gray-200 hover:border-blue-500/50 shadow-lg'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{benefit.title}</h3>
                  <p className={`text-sm leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Strategic Overview */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-3xl p-12 border ${
            isDark 
              ? 'bg-gray-800/30 border-gray-700' 
              : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Bespoke Software Solutions</h2>
                <p className={`text-lg leading-relaxed mb-6 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Our custom software development services provide tailor-made solutions that address 
                  your unique business challenges and integrate seamlessly with your existing systems.
                </p>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  From enterprise web applications to custom API integrations, our team follows 
                  agile methodologies to deliver high-quality software.
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Development Approach</h3>
                <div className="space-y-4">
                  {[
                    "Agile development methodology with iterative delivery",
                    "Test-driven development and continuous integration",
                    "Scalable architecture design and code optimization",
                    "Security-first approach with data protection measures",
                    "Comprehensive documentation and knowledge transfer"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className={`leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Technology Stack */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-2xl p-6 text-center border transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800/30 border-gray-700 hover:border-blue-500/50' 
                      : 'bg-white border-gray-200 hover:border-blue-500/50 shadow-lg'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{tech.category}</h3>
                  <p className={`text-sm mb-4 leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{tech.description}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {tech.stack.map((item, idx) => (
                      <span 
                        key={idx}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          isDark 
                            ? 'bg-blue-500/20 text-blue-400' 
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Development Process Timeline */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Development Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`relative p-6 rounded-2xl border ${
                  isDark 
                    ? 'bg-gray-800/30 border-gray-700' 
                    : 'bg-white border-gray-200 shadow-lg'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    isDark 
                      ? 'bg-blue-500/20 text-blue-400' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {step.timeline}
                  </span>
                </div>
                <h3 className={`text-lg font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{step.title}</h3>
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Expected Results */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Expected Results</h2>
          <div className={`rounded-3xl p-12 border ${
            isDark 
              ? 'bg-gray-800/30 border-gray-700' 
              : 'bg-gray-50 border-gray-200'
          }`}>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="grid md:grid-cols-3 gap-8 text-center">
              {results.map((result, index) => {
                const IconComponent = result.icon;
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>{result.metric}</h3>
                    <p className={`${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>{result.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 relative overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`backdrop-blur-sm rounded-3xl p-12 shadow-xl border ${
            isDark 
              ? 'bg-gray-800/30 border-gray-700/50' 
              : 'bg-white/80 border-gray-200/50'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Build Your Custom Solution?
            </h2>
            <p className={`text-lg mb-8 leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
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
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#1e293b_50%,#3b82f6_100%)]" />
                <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold backdrop-blur-3xl gap-2 ${
                  isDark 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-white text-gray-900'
                }`}>
                  Start Your Project
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
