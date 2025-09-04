
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { Brain, Cpu, Zap, CheckCircle, ArrowRight, Network } from "lucide-react";
import { motion } from "framer-motion";

export default function AIMLIntegration() {
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
    "Custom ML model development and training",
    "Pre-trained model integration and fine-tuning",
    "Natural Language Processing (NLP) solutions",
    "Computer Vision and OCR implementation",
    "Predictive analytics and forecasting models"
  ];

  const useCases = [
    {
      title: "Intelligent Document Processing",
      description: "Extract and classify data from unstructured documents using advanced OCR and NLP"
    },
    {
      title: "Predictive Maintenance",
      description: "Machine learning models to predict equipment failures and optimize maintenance schedules"
    },
    {
      title: "Customer Sentiment Analysis",
      description: "Real-time analysis of customer feedback and social media mentions for insights"
    },
    {
      title: "Fraud Detection",
      description: "AI-powered anomaly detection to identify suspicious transactions and activities"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-gray-200 relative overflow-hidden">
      {/* Global Background Ripple Effect 1 */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-full"
        style={{ 
          width: '50vw', height: '50vw', 
          maxWidth: '800px', maxHeight: '800px', 
          background: 'radial-gradient(circle, rgba(0,255,255,0.1) 0%, rgba(0,255,255,0) 70%)' 
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.5, opacity: [0, 0.2, 0] }}
        transition={{ 
          duration: 8, 
          ease: "easeInOut", 
          repeat: Infinity, 
          repeatType: "loop",
          times: [0, 0.5, 1] 
        }}
      />

      {/* Global Background Ripple Effect 2 */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-full"
        style={{ 
          width: '60vw', height: '60vw', 
          maxWidth: '1000px', maxHeight: '1000px', 
          background: 'radial-gradient(circle, rgba(128,0,128,0.08) 0%, rgba(128,0,128,0) 70%)' 
        }}
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1.4, opacity: [0, 0.15, 0] }}
        transition={{ 
          duration: 10, 
          ease: "easeInOut", 
          repeat: Infinity, 
          repeatType: "loop",
          delay: 3, 
          times: [0, 0.5, 1] 
        }}
      />

      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="pt-20 pb-16 bg-transparent backdrop-blur-sm relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Brain className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            AI/ML Model Training & Integration
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Advanced AI and machine learning solutions that integrate seamlessly with your 
            automation workflows to enable intelligent decision-making.
          </p>
        </div>
      </motion.section>

      {/* Overview */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gray-700 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Intelligent Automation Solutions</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Our AI/ML integration services transform traditional automation into intelligent, 
              adaptive systems that learn and improve over time. We develop custom machine learning 
              models tailored to your specific business needs and integrate them seamlessly into 
              your existing automation workflows.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From natural language processing to computer vision, our solutions leverage the latest 
              AI technologies to handle complex, unstructured data and enable autonomous 
              decision-making across your enterprise operations.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">AI/ML Services</h2>
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

      {/* Use Cases */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div key={index} variants={itemVariants} className="rounded-2xl p-8 border border-gray-700">
                <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <Network className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Technology Stack</h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="grid md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="rounded-2xl p-8 text-center border border-gray-700">
              <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">Frameworks</h3>
              <p className="text-gray-400 text-sm">TensorFlow, PyTorch, Scikit-learn, Hugging Face</p>
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-2xl p-8 text-center border border-gray-700">
              <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">Cloud Platforms</h3>
              <p className="text-gray-400 text-sm">Azure ML, AWS SageMaker, Google Cloud AI</p>
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-2xl p-8 text-center border border-gray-700">
              <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">Specializations</h3>
              <p className="text-gray-400 text-sm">NLP, Computer Vision, Time Series, Deep Learning</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur rounded-3xl p-12 shadow-xl border border-gray-700/50">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Add Intelligence to Your Automation?
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Let us help you integrate advanced AI and ML capabilities that transform 
              your business processes into intelligent, self-improving systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to={createPageUrl("Demo")}
                className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#1e293b_50%,#06b6d4_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-lg font-semibold text-white backdrop-blur-3xl gap-2">
                  Explore AI Solutions
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
