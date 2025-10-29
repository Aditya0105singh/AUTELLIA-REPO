import React from "react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, User, Shield, Lock, Eye as EyeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function BlogPostDataSecurity() {
  const { isDark } = useTheme();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const article = {
    title: "Data Security in Intelligent Automation",
    category: "Security",
    readTime: "5 min read",
    publishDate: "Jan 5, 2025",
    views: "980",
    author: "Autellia Team",
    authorRole: "Security Experts"
  };

  const relatedArticles = [
    {
      title: "Best Practices for Scaling RPA Across the Enterprise",
      category: "Implementation",
      link: "/blog/rpa-scaling-best-practices"
    },
    {
      title: "Change Management for Automation Success",
      category: "Strategy",
      link: "/blog-knowledge-hub"
    },
    {
      title: "Compliance in Intelligent Automation",
      category: "Security",
      link: "/blog-knowledge-hub"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 relative ${
      isDark ? 'bg-transparent text-gray-200' : 'bg-white text-gray-900'
    }`}>
      <BackgroundRippleEffect />
      
      {/* Header */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="pt-24 sm:pt-20 pb-8 bg-transparent relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/blog-knowledge-hub"
            className={`inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors ${
              isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Knowledge Hub
          </Link>

          {/* Article Meta */}
          <div className="mb-6">
            <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {article.title}
          </h1>

          {/* Article Info */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-gray-500" />
              <div>
                <span className={`text-sm font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>{article.author}</span>
                <span className="text-xs text-gray-500 ml-1">• {article.authorRole}</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.publishDate}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
            </div>
            <button className={`flex items-center gap-2 px-3 py-1 rounded-lg border transition-colors ${
              isDark 
                ? 'border-gray-700 hover:border-gray-600 text-gray-400 hover:text-gray-300' 
                : 'border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-700'
            }`}>
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </motion.section>

      {/* Article Content */}
      <section 
        className="pb-16 bg-transparent relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className={`prose prose-lg max-w-none ${
            isDark ? 'prose-invert' : ''
          }`}>
            
            {/* Introduction */}
            <div className={`text-lg leading-relaxed mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <p className="mb-6">
                As enterprises embrace intelligent automation—combining Robotic Process Automation (RPA), Artificial Intelligence (AI), and Machine Learning (ML)—data security has become a top concern. Automated systems now handle sensitive information at unprecedented speed and scale. Without strong data governance, even well-intentioned automation initiatives can expose organizations to compliance risks and data breaches.
              </p>
              <p className="mb-6">
                This article explores the key principles and best practices for securing data throughout your automation journey.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                1. Understanding Data Security in Intelligent Automation
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Data security in automation isn't just about encrypting files. It encompasses the entire data lifecycle—from capture and storage to processing and transfer. Automated bots and AI models frequently interact with confidential information such as financial records, personal identifiers, or intellectual property.
              </p>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                To protect this data, organizations must treat bots as digital employees, governed by the same access controls and security policies as humans.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                2. Establish Robust Identity and Access Management (IAM)
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Bots should never have unrestricted access to systems or databases. Implement role-based access control (RBAC) to limit data exposure and ensure every automated process has the minimum permissions necessary.
              </p>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Integrating your RPA or AI platforms with enterprise IAM tools allows centralized control over credentials and activity monitoring.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                3. Encrypt Data at Every Stage
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                End-to-end encryption—both in transit and at rest—is critical. This includes encrypting data exchanged between automation tools, APIs, and databases. Secure credential vaults and tokenization methods further protect sensitive information handled by bots or AI services.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                4. Monitor, Audit, and Log Everything
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Automation platforms should provide detailed audit trails of all bot activities. Regularly reviewing logs helps detect anomalies such as unauthorized access attempts or suspicious data transfers.
              </p>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Adding an AI-based monitoring layer can improve real-time threat detection and accelerate incident response.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                5. Ensure Compliance with Industry Standards
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Compliance requirements such as GDPR, HIPAA, or SOC 2 mandate strict data handling procedures. Intelligent automation tools must support compliance through configurable workflows, access logs, and data retention policies.
              </p>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Partnering with vendors who adhere to recognized frameworks adds an extra layer of assurance.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                6. Embed Security in the Automation Lifecycle
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Security shouldn't be an afterthought—it must be integrated into every stage of automation development.
              </p>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Adopt a "secure by design" approach, including:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Security reviews during process assessment</li>
                <li>Vulnerability testing before deployment</li>
                <li>Regular bot maintenance and patching</li>
              </ul>
            </div>

            {/* Conclusion */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Conclusion: Safeguarding the Future of Automation
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Data security is not just a compliance requirement—it's a business imperative. As automation systems grow more intelligent, the need for proactive security governance becomes even greater. Organizations that embed data protection into their automation frameworks will not only prevent breaches but also build lasting customer trust.
              </p>
            </div>

          </article>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-2xl p-8 border ${
            isDark 
              ? 'bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500/30' 
              : 'bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200'
          }`}>
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg ${
                isDark ? 'bg-cyan-500/20' : 'bg-cyan-100'
              }`}>
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Ready to Strengthen Your Data Security?
                </h3>
                <p className={`mb-4 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Connect with our team to design a secure, compliant, and future-proof automation strategy.
                </p>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors"
                >
                  Schedule a Consultation
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Related Articles */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent border-t relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className={`text-2xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((related, index) => (
              <Link
                key={index}
                to={related.link}
                className={`p-6 rounded-lg border transition-all hover:shadow-lg ${
                  isDark 
                    ? 'border-gray-700 hover:border-cyan-500/50 bg-gray-800/50' 
                    : 'border-gray-300 hover:border-cyan-400 bg-white'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-cyan-400 font-medium">{related.category}</span>
                </div>
                <h4 className={`font-semibold leading-tight ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {related.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
