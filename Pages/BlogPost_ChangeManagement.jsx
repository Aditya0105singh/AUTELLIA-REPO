import React from "react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, User, Users, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function BlogPostChangeManagement() {
  const { isDark } = useTheme();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const article = {
    title: "Change Management for Automation Success",
    category: "Strategy",
    readTime: "9 min read",
    publishDate: "Jan 3, 2025",
    views: "1.5k",
    author: "Autellia Team",
    authorRole: "Strategy Consultants"
  };

  const relatedArticles = [
    {
      title: "Best Practices for Scaling RPA Across the Enterprise",
      category: "Implementation",
      link: "/blog/rpa-scaling-best-practices"
    },
    {
      title: "Data Security in Intelligent Automation",
      category: "Security",
      link: "/blog/data-security-intelligent-automation"
    },
    {
      title: "Building an Automation Center of Excellence",
      category: "Strategy",
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
                Automation promises efficiency, speed, and accuracy—but without effective change management, even the most advanced solutions can fail. The real challenge lies not in the technology, but in preparing people and processes for transformation.
              </p>
              <p className="mb-6">
                In this article, we'll explore how structured change management ensures successful automation adoption and long-term ROI.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                1. Start with Clear Vision and Executive Sponsorship
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Successful automation programs begin with leadership alignment. Define a clear vision and business case for automation that ties to organizational goals. Executive sponsorship ensures commitment, funding, and advocacy across departments.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                2. Engage Stakeholders Early and Often
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Automation impacts multiple teams—from IT and operations to finance and HR. Involve stakeholders early in the design phase to gather insights and reduce resistance. Regular updates and feedback sessions foster trust and transparency.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                3. Communicate the "Why" Behind Automation
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Fear of job displacement remains a common barrier. Effective communication should emphasize how automation enhances roles—freeing employees from repetitive tasks so they can focus on strategic, creative, or customer-centric work.
              </p>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Use real success stories to illustrate tangible benefits such as reduced workload, faster processes, or improved accuracy.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                4. Invest in Upskilling and Change Champions
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Equip employees with the skills needed to work alongside automation tools. Offer training programs in process redesign, data literacy, and RPA operations.
              </p>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Appoint automation champions—enthusiastic team members who advocate for change and mentor peers throughout the transition.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                5. Redesign Processes, Don't Just Automate Them
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Automating broken or inefficient processes only amplifies problems. Conduct process assessments to identify redundancies and optimization opportunities before automation. Process reengineering ensures automation drives true efficiency.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                6. Track Progress and Celebrate Wins
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Define success metrics—time saved, cost reduced, error rates lowered—and share them company-wide. Recognizing achievements helps maintain morale and reinforces automation's positive impact.
              </p>
            </div>

            {/* Conclusion */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Conclusion: Empowering People to Drive Automation Success
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Automation success is as much about people as it is about technology. When employees understand, support, and contribute to automation goals, adoption accelerates and transformation becomes sustainable.
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
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Ready to Transform Your Workforce?
                </h3>
                <p className={`mb-4 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Talk to our experts about designing a change management strategy that ensures lasting automation success.
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
