import React from "react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function BlogPostRPAScaling() {
  const { isDark } = useTheme();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const article = {
    title: "Best Practices for Scaling RPA Across the Enterprise",
    category: "Implementation",
    readTime: "7 min read",
    publishDate: "Dec 8, 2024",
    views: "1.2k",
    author: "Autellia Team",
    authorRole: "Automation Experts"
  };

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
                Robotic Process Automation (RPA) has evolved from a niche technology to a critical enabler of enterprise efficiency and agility. Yet, many organizations struggle to move beyond pilot projects to full-scale deployment. Scaling RPA across an enterprise requires more than just adding more bots—it demands governance, alignment, and sustainable change management.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                1. Build a Strong Foundation with the Right Governance Model
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Successful RPA scaling begins with structure. Establish a Center of Excellence (CoE) to oversee RPA strategy, standardize best practices, and ensure compliance. A CoE helps balance innovation with control, enabling business units to deploy automation independently while adhering to enterprise-wide standards.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                2. Prioritize High-Impact, Cross-Functional Use Cases
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Start by automating processes that deliver measurable ROI and can be replicated across departments—such as invoice processing, employee onboarding, or compliance reporting. This builds momentum and executive confidence while demonstrating RPA's potential at scale.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                3. Invest in the Right Technology Stack
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                As automation scales, integration and maintenance become complex. Choose an RPA platform that offers:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Centralized management for bots and workflows</li>
                <li>Scalability across hybrid or cloud environments</li>
                <li>Integration with AI, analytics, and enterprise systems</li>
              </ul>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Platforms with built-in analytics help track performance and identify optimization opportunities.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                4. Standardize, But Stay Flexible
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                While standardization is key for scalability, flexibility ensures business units can adapt automations to local needs. A modular design approach allows reuse of automation components across departments, saving development time and improving consistency.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                5. Measure and Communicate Success
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Use metrics such as cost savings, time reduction, and error minimization to track performance. Communicating these results reinforces business value and drives broader adoption.
              </p>
            </div>

            {/* Conclusion */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Conclusion: Turning Pilot Success into Enterprise Transformation
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Scaling RPA successfully is a journey, not a sprint. By combining governance, technology alignment, and business engagement, enterprises can evolve from isolated RPA pilots to an automation-first culture.
              </p>
            </div>

            {/* Call to Action */}
            <div className={`border rounded-2xl p-6 mt-12 ${
              isDark 
                ? 'border-gray-700 bg-gray-800/50' 
                : 'border-gray-300 bg-gray-50'
            }`}>
              <h3 className={`text-xl font-bold mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Ready to Scale Your RPA Initiatives?
              </h3>
              <p className={`mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Looking to scale your RPA initiatives across the enterprise? Our experts can help you build a sustainable automation framework that delivers measurable business impact.
              </p>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <BookOpen className="w-4 h-4" />
                Contact us today
              </Link>
            </div>

          </article>
        </div>
      </section>

      {/* Related Articles */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10 border-t border-gray-700"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className={`text-2xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Related Articles
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              to="/blog-knowledge-hub"
              className={`border rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${
                isDark 
                  ? 'border-gray-700 hover:border-cyan-500/30 hover:shadow-cyan-900/20' 
                  : 'border-gray-300 hover:border-cyan-400 hover:shadow-cyan-200 bg-white'
              }`}
            >
              <span className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                Strategy
              </span>
              <h4 className={`font-semibold mt-3 mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Change Management for Automation Success
              </h4>
              <p className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Learn how to manage organizational change during automation implementation.
              </p>
            </Link>
            <Link 
              to="/blog-knowledge-hub"
              className={`border rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${
                isDark 
                  ? 'border-gray-700 hover:border-cyan-500/30 hover:shadow-cyan-900/20' 
                  : 'border-gray-300 hover:border-cyan-400 hover:shadow-cyan-200 bg-white'
              }`}
            >
              <span className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs font-medium text-green-400">
                Security
              </span>
              <h4 className={`font-semibold mt-3 mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Data Security in Intelligent Automation
              </h4>
              <p className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Best practices for maintaining data security in automated processes.
              </p>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
