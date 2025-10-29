import React from "react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, User, TrendingUp, DollarSign, BarChart3, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function BlogPostROIFramework() {
  const { isDark } = useTheme();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const article = {
    title: "ROI Calculation Framework for Automation Projects",
    category: "Business",
    readTime: "10 min read",
    publishDate: "Jan 10, 2025",
    views: "3.1k",
    author: "Autellia Team",
    authorRole: "Business Analysts"
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
      link: "/blog/change-management-automation-success"
    },
    {
      title: "AI-Powered Document Processing: A Complete Guide",
      category: "AI/ML",
      link: "/blog/ai-powered-document-processing"
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
                In today's data-driven enterprise environment, every automation initiative must justify its investment. While the benefits of automation—speed, accuracy, and scalability—are clear, quantifying them in financial terms is often challenging.
              </p>
              <p className="mb-6">
                A structured ROI (Return on Investment) framework helps organizations evaluate, compare, and prioritize automation projects based on measurable outcomes.
              </p>
              <p className="mb-6">
                In this article, we'll walk through a proven ROI calculation framework that balances financial, operational, and strategic metrics.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                1. Why Measuring ROI in Automation Matters
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Automation success isn't just about deploying bots or AI tools—it's about delivering tangible business value.
              </p>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                A robust ROI model:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Aligns automation goals with enterprise strategy</li>
                <li>Guides investment decisions</li>
                <li>Justifies scaling and funding</li>
                <li>Provides a baseline for continuous improvement</li>
              </ul>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Without measurable ROI, automation risks becoming a cost center rather than a value driver.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                2. Core Components of Automation ROI
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                A holistic automation ROI framework includes three categories of measurable impact:
              </p>
              
              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                a. Financial Returns
              </h3>
              <p className={`leading-relaxed mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Direct financial gains such as:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Labor cost savings (reduced manual hours)</li>
                <li>Reduced error-related rework costs</li>
                <li>Lower compliance and audit expenses</li>
              </ul>

              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                b. Operational Efficiency
              </h3>
              <p className={`leading-relaxed mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Non-financial, yet quantifiable improvements such as:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Cycle time reduction</li>
                <li>Throughput increase</li>
                <li>Accuracy improvement</li>
                <li>Service-level consistency</li>
              </ul>

              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                c. Strategic Value
              </h3>
              <p className={`leading-relaxed mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Long-term business benefits like:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Enhanced employee experience</li>
                <li>Customer satisfaction gains</li>
                <li>Improved compliance posture</li>
                <li>Scalability and resilience</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                3. Step-by-Step ROI Calculation Framework
              </h2>
              
              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Step 1: Identify Automation Candidates
              </h3>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Assess processes based on volume, complexity, and repetition. Prioritize those with high manual effort and low variation—ideal for measurable ROI.
              </p>

              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Step 2: Define Baseline Metrics
              </h3>
              <p className={`leading-relaxed mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Before automation, capture baseline data such as:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Average time per transaction</li>
                <li>Error rate</li>
                <li>Labor hours and costs</li>
                <li>Volume per week/month</li>
              </ul>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Baseline accuracy ensures credible ROI comparisons post-deployment.
              </p>

              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Step 3: Quantify Expected Benefits
              </h3>
              <p className={`leading-relaxed mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Estimate automation-driven improvements, for example:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li><strong>Time saved:</strong> (Manual hours – Automated hours) × Hourly cost</li>
                <li><strong>Error cost reduction:</strong> (Old error cost – New error cost)</li>
                <li><strong>Volume capacity gain:</strong> % increase in output per resource</li>
              </ul>

              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Step 4: Calculate Total Benefits
              </h3>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Add up financial and operational benefits over a given period (typically 12 months).
              </p>
              <div className={`p-4 rounded-lg mb-4 ${
                isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-50 border border-gray-200'
              }`}>
                <p className={`font-mono text-sm ${
                  isDark ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  Total Benefits = Cost Savings + Revenue Gains + Avoided Costs
                </p>
              </div>

              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Step 5: Estimate Total Costs
              </h3>
              <p className={`leading-relaxed mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Include:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Licensing/subscription fees</li>
                <li>Infrastructure and IT costs</li>
                <li>Development and testing time</li>
                <li>Maintenance and support expenses</li>
              </ul>
              <div className={`p-4 rounded-lg mb-4 ${
                isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-50 border border-gray-200'
              }`}>
                <p className={`font-mono text-sm ${
                  isDark ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  Total Costs = Implementation Costs + Operational Costs
                </p>
              </div>

              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Step 6: Compute ROI
              </h3>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Finally, use the standard ROI equation:
              </p>
              <div className={`p-4 rounded-lg mb-4 ${
                isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-50 border border-gray-200'
              }`}>
                <p className={`font-mono text-sm ${
                  isDark ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  ROI (%) = [(Total Benefits - Total Costs) / Total Costs] × 100
                </p>
              </div>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                A positive ROI (typically &gt;30%) indicates a strong business case for automation.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                4. Example: ROI Calculation in Practice
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Let's say a finance department automates invoice processing:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Manual cost per invoice: $8</li>
                <li>Automated cost per invoice: $2</li>
                <li>Annual volume: 50,000 invoices</li>
              </ul>
              <p className={`leading-relaxed mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <strong>Annual savings:</strong>
              </p>
              <div className={`p-4 rounded-lg mb-4 ${
                isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-50 border border-gray-200'
              }`}>
                <p className={`font-mono text-sm ${
                  isDark ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  (8 - 2) × 50,000 = $300,000
                </p>
              </div>
              <p className={`leading-relaxed mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                If implementation and maintenance costs total $120,000 annually:
              </p>
              <div className={`p-4 rounded-lg mb-4 ${
                isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-50 border border-gray-200'
              }`}>
                <p className={`font-mono text-sm ${
                  isDark ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  ROI = [(300,000 - 120,000) / 120,000] × 100 = 150%
                </p>
              </div>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                This shows a clear financial win, often achieved within the first year of deployment.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                5. Beyond Numbers: Measuring Intangible Benefits
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Some benefits are harder to quantify but equally vital:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li><strong>Employee satisfaction:</strong> Less repetitive work and burnout</li>
                <li><strong>Customer experience:</strong> Faster response times and higher accuracy</li>
                <li><strong>Agility:</strong> Ability to adapt processes quickly</li>
              </ul>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Track these qualitative outcomes via surveys, performance dashboards, or customer feedback loops.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                6. Using ROI Insights to Guide Automation Strategy
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Once you've measured ROI, use those insights to:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Prioritize high-impact projects</li>
                <li>Justify scaling automation enterprise-wide</li>
                <li>Continuously refine process design for greater returns</li>
              </ul>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Over time, your ROI model becomes a strategic decision-making tool, helping allocate resources where automation yields the most value.
              </p>
            </div>

            {/* Conclusion */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Conclusion: Building a Business Case for Automation Success
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                A structured ROI framework transforms automation from a technology initiative into a business growth engine. By quantifying both tangible and intangible returns, organizations can confidently expand automation investments while maintaining fiscal responsibility.
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
                <Calculator className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Build Your ROI Framework
                </h3>
                <p className={`mb-4 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Talk to our automation consultants today to measure, optimize, and maximize your returns.
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
