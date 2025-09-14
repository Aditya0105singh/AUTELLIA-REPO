import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../src/contexts/ThemeContext';
import ExploreSolutionModal from '../Components/ui/ExploreSolutionModal';
import { 
  Settings, Users, Bot, Brain, BarChart3, FileText, 
  Code, Cloud, Headphones, ArrowRight 
} from 'lucide-react';
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";

export default function Solutions() {
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
    {
      icon: Target,
      title: "Automation Consulting & Strategy",
      description: "At Autellia Technology, we help organizations identify the right automation opportunities and build a clear roadmap for success. Our experts assess existing workflows, uncover inefficiencies, and recommend automation-first strategies that align with business goals.",
      details: "From process discovery to ROI analysis, we ensure that every automation initiative delivers measurable outcomes—higher productivity, reduced costs, and improved customer experiences."
    },
    {
      icon: Bot,
      title: "BOT Development & Deployment",
      description: "We design, develop, and deploy Robotic Process Automation (RPA) BOTs using leading platforms such as UiPath, Power Automate, Blue Prism, and Automation Anywhere.",
      details: "Our BOTs are built with scalability, security, and reliability in mind. Whether it's rule-based tasks or complex workflows, we ensure smooth deployment across test, UAT, and production environments with continuous monitoring and governance."
    },
    {
      icon: Brain,
      title: "AI/ML Model Training & Integration",
      description: "We harness the power of Artificial Intelligence and Machine Learning to deliver smarter business solutions. Our team develops and trains ML models for predictive analytics, NLP, computer vision, and generative AI applications.",
      details: "We also specialize in integrating these models with enterprise applications and automation workflows, ensuring real-world impact such as demand forecasting, fraud detection, and intelligent decision-making."
    },
    {
      icon: Cog,
      title: "Business Process Optimization",
      description: "Beyond automation, we help businesses re-engineer processes for maximum efficiency. Using a mix of Lean, Six Sigma, and Process Mining tools, we analyze end-to-end workflows to eliminate bottlenecks, reduce redundancy, and increase throughput.",
      details: "This ensures that automation is applied to optimized processes, delivering long-term value and scalability."
    },
    {
      icon: BarChart,
      title: "Data Analytics & Visualization",
      description: "We empower businesses to turn raw data into actionable insights using Power BI and Tableau. Our analytics solutions enable real-time reporting, interactive dashboards, and predictive insights to support smarter decisions.",
      details: "From KPI tracking to advanced forecasting, we help clients visualize trends, monitor performance, and make data-driven strategies with confidence."
    },
    {
      icon: FileText,
      title: "Intelligent Document Processing (IDP)",
      description: "Autellia specializes in automating the extraction of data from invoices, contracts, PDFs, scanned documents, and unstructured data sources. By combining RPA with OCR, NLP, and AI, we ensure accurate, fast, and scalable document processing.",
      details: "This reduces manual effort, minimizes errors, and accelerates turnaround times—transforming back-office operations across industries."
    },
    {
      icon: Code,
      title: "Custom Software Development (Web & API Solutions)",
      description: "We build custom web applications, APIs, and enterprise integrations that align with your digital transformation goals. Our solutions are designed to seamlessly connect automation platforms with ERP, CRM, HRMS, and other enterprise systems.",
      details: "Whether you need REST APIs, microservices, or secure web portals, we deliver robust and future-ready software tailored to your business requirements."
    },
    {
      icon: Cloud,
      title: "Cloud-based Automation & Migration",
      description: "We help businesses leverage the power of cloud automation by designing, deploying, and managing workflows on cloud platforms. Our services include migration from legacy automation setups to cloud-native architectures, ensuring scalability and cost efficiency.",
      details: "By integrating RPA and AI with cloud ecosystems, we enable organizations to achieve anytime, anywhere accessibility and faster innovation."
    },
    {
      icon: HeadphonesIcon,
      title: "Support & Managed Services",
      description: "Our partnership doesn't end with deployment—we provide 24/7 support, monitoring, and managed services to ensure your automation ecosystem runs seamlessly.",
      details: "We handle BOT health checks, upgrades, enhancements, and proactive issue resolution, so your teams can focus on strategic initiatives while we ensure uninterrupted automation performance."
    }
  ];

  const platforms = ["UiPath", "Power Automate", "Blue Prism", "Automation Anywhere"];

  const deliverySteps = [
    { title: "Discover", description: "Process assessment and ROI identification" },
    { title: "Design & Build", description: "Solution architecture and rapid development" },
    { title: "Run & Optimize", description: "Deployment, monitoring, and continuous improvement" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-[--bg] text-[--text-primary]' : 'bg-white text-gray-900'
    }`}>
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
        className={`py-16 transition-colors duration-500 ${
          isDark ? 'bg-[--bg]' : 'bg-gray-50'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-2xl p-12 shadow-lg transition-colors duration-500 ${
            isDark ? 'border border-[--border] bg-[--surface]' : 'border border-gray-200 bg-white'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-[--text-primary]' : 'text-gray-900'
            }`}>Our Comprehensive Solutions</h2>
            <p className={`text-lg leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-[--text-muted]' : 'text-gray-600'
            }`}>
              Autellia Technology delivers end-to-end automation and AI solutions that transform business operations. 
              From strategic consulting to 24/7 managed services, we provide comprehensive support across your entire 
              digital transformation journey with measurable ROI and enterprise-grade security.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className={`py-16 transition-colors duration-500 ${
          isDark ? 'bg-[--surface]' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 transition-colors duration-300 ${
            isDark ? 'text-[--text-primary]' : 'text-gray-900'
          }`}>Our Services</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-12"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1 ${
                    isDark 
                      ? 'border border-[--border] bg-[--panel] hover:border-[--accent]/50' 
                      : 'border border-gray-200 bg-gradient-to-r from-white to-gray-50 hover:border-purple-300'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                        isDark 
                          ? 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-[--border]' 
                          : 'bg-gradient-to-br from-purple-100 to-indigo-100 border border-purple-200'
                      }`}>
                        <IconComponent className={`w-8 h-8 transition-colors duration-300 ${
                          isDark ? 'text-[--accent]' : 'text-purple-600'
                        }`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                        isDark ? 'text-[--text-primary]' : 'text-gray-900'
                      }`}>{service.title}</h3>
                      <p className={`text-lg leading-relaxed mb-4 transition-colors duration-300 ${
                        isDark ? 'text-[--text-muted]' : 'text-gray-700'
                      }`}>{service.description}</p>
                      <p className={`text-base leading-relaxed transition-colors duration-300 ${
                        isDark ? 'text-[--text-muted]' : 'text-gray-600'
                      }`}>{service.details}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className={`py-20 text-center transition-colors duration-500 ${
          isDark ? 'bg-[--bg]' : 'bg-gray-50'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
            isDark ? 'text-[--text-primary]' : 'text-gray-900'
          }`}>Ready to Transform Your Operations?</h2>
          <p className={`text-xl mb-8 leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-[--text-muted]' : 'text-gray-600'
          }`}>
            Contact us today to discover how our comprehensive automation and AI solutions can drive your business forward.
          </p>
          <button
            onClick={() => window.location.href = 'https://cal.com/autellia-technology-43lknv'}
            className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 max-w-sm mx-auto touch-manipulation"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            Get in Touch
          </button>
        </div>
      </motion.section>
    </div>
  );
}