import React from "react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, User, Bot, Brain, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function BlogPostRPAvsIA() {
  const { isDark } = useTheme();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const article = {
    title: "RPA vs. Intelligent Automation: Making the Right Choice",
    category: "Strategy",
    readTime: "6 min read",
    publishDate: "Jan 12, 2025",
    views: "1.8k",
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
      title: "AI-Powered Document Processing: A Complete Guide",
      category: "AI/ML",
      link: "/blog/ai-powered-document-processing"
    },
    {
      title: "ROI Calculation Framework for Automation Projects",
      category: "Business",
      link: "/blog/roi-calculation-framework"
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
                In the evolving world of digital transformation, businesses are seeking technologies that enhance efficiency, accuracy, and scalability. Two popular automation approaches—Robotic Process Automation (RPA) and Intelligent Automation (IA)—often dominate the conversation.
              </p>
              <p className="mb-6">
                While both aim to streamline operations, they differ significantly in capability, complexity, and long-term impact. Understanding these differences is crucial for making the right investment and ensuring sustainable automation success.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                1. Understanding RPA: The Foundation of Automation
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Robotic Process Automation (RPA) uses software "bots" to mimic human actions and automate repetitive, rule-based tasks.
              </p>
              <p className={`leading-relaxed mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Typical examples include:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Data entry and migration</li>
                <li>Report generation</li>
                <li>Invoice processing</li>
                <li>User account setup</li>
              </ul>
              
              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Key Characteristics of RPA:
              </h3>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Task-based automation</li>
                <li>Works with structured data</li>
                <li>Requires predefined rules and logic</li>
                <li>Quick to implement and scale for repetitive processes</li>
              </ul>

              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Benefits:
              </h3>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Rapid ROI through time and cost savings</li>
                <li>Minimal disruption to existing systems</li>
                <li>High accuracy and compliance in routine workflows</li>
              </ul>
              
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                However, RPA alone has limitations—it cannot handle unstructured data, learn from patterns, or make decisions without explicit rules.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                2. Introducing Intelligent Automation: The Next Evolution
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Intelligent Automation (IA) combines RPA with advanced technologies like Artificial Intelligence (AI), Machine Learning (ML), Natural Language Processing (NLP), and Computer Vision.
              </p>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                This fusion enables systems to not just execute tasks, but also analyze, learn, and adapt to complex business scenarios.
              </p>

              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Capabilities of Intelligent Automation:
              </h3>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Processes both structured and unstructured data</li>
                <li>Understands text, voice, and images</li>
                <li>Learns from data patterns to make contextual decisions</li>
                <li>Integrates cognitive insights into workflows</li>
              </ul>

              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Common IA Applications:
              </h3>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>AI-powered document processing</li>
                <li>Predictive analytics and decision-making</li>
                <li>Chatbots and virtual assistants</li>
                <li>Fraud detection and compliance monitoring</li>
              </ul>
            </div>

            {/* Section 3 - Comparison Table */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                3. Key Differences Between RPA and Intelligent Automation
              </h2>
              <div className="overflow-x-auto">
                <table className={`w-full border-collapse ${
                  isDark ? 'border-gray-700' : 'border-gray-300'
                }`}>
                  <thead>
                    <tr className={isDark ? 'bg-gray-800/50' : 'bg-gray-100'}>
                      <th className={`border p-3 text-left font-bold ${
                        isDark ? 'border-gray-700' : 'border-gray-300'
                      }`}>Feature</th>
                      <th className={`border p-3 text-left font-bold ${
                        isDark ? 'border-gray-700' : 'border-gray-300'
                      }`}>RPA</th>
                      <th className={`border p-3 text-left font-bold ${
                        isDark ? 'border-gray-700' : 'border-gray-300'
                      }`}>Intelligent Automation (IA)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={`border p-3 font-medium ${
                        isDark ? 'border-gray-700' : 'border-gray-300'
                      }`}>Focus</td>
                      <td className={`border p-3 ${
                        isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
                      }`}>Rule-based task execution</td>
                      <td className={`border p-3 ${
                        isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
                      }`}>Cognitive and adaptive automation</td>
                    </tr>
                    <tr className={isDark ? 'bg-gray-800/30' : 'bg-gray-50'}>
                      <td className={`border p-3 font-medium ${
                        isDark ? 'border-gray-700' : 'border-gray-300'
                      }`}>Data Type</td>
                      <td className={`border p-3 ${
                        isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
                      }`}>Structured</td>
                      <td className={`border p-3 ${
                        isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
                      }`}>Structured + Unstructured</td>
                    </tr>
                    <tr>
                      <td className={`border p-3 font-medium ${
                        isDark ? 'border-gray-700' : 'border-gray-300'
                      }`}>Technology Stack</td>
                      <td className={`border p-3 ${
                        isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
                      }`}>RPA tools (bots, scripts)</td>
                      <td className={`border p-3 ${
                        isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
                      }`}>RPA + AI + ML + NLP + Analytics</td>
                    </tr>
                    <tr className={isDark ? 'bg-gray-800/30' : 'bg-gray-50'}>
                      <td className={`border p-3 font-medium ${
                        isDark ? 'border-gray-700' : 'border-gray-300'
                      }`}>Complexity</td>
                      <td className={`border p-3 ${
                        isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
                      }`}>Low to moderate</td>
                      <td className={`border p-3 ${
                        isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
                      }`}>Moderate to high</td>
                    </tr>
                    <tr>
                      <td className={`border p-3 font-medium ${
                        isDark ? 'border-gray-700' : 'border-gray-300'
                      }`}>Decision-Making</td>
                      <td className={`border p-3 ${
                        isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
                      }`}>None (rules only)</td>
                      <td className={`border p-3 ${
                        isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
                      }`}>Contextual and predictive</td>
                    </tr>
                    <tr className={isDark ? 'bg-gray-800/30' : 'bg-gray-50'}>
                      <td className={`border p-3 font-medium ${
                        isDark ? 'border-gray-700' : 'border-gray-300'
                      }`}>ROI Horizon</td>
                      <td className={`border p-3 ${
                        isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
                      }`}>Short-term gains</td>
                      <td className={`border p-3 ${
                        isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
                      }`}>Long-term, scalable transformation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                4. When to Choose RPA
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                RPA is ideal if your organization wants to:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Quickly automate high-volume, repetitive tasks</li>
                <li>Reduce manual workloads without major process redesign</li>
                <li>Achieve fast ROI with minimal upfront complexity</li>
              </ul>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <strong>Best Fit:</strong> Back-office processes such as finance, HR, and IT operations.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                5. When to Choose Intelligent Automation
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Intelligent Automation is the right choice if you need to:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Automate complex, data-rich workflows</li>
                <li>Leverage AI for decision-making or customer interactions</li>
                <li>Enable end-to-end process transformation</li>
                <li>Future-proof your digital strategy</li>
              </ul>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <strong>Best Fit:</strong> Enterprises aiming for scalable, adaptive, and AI-driven operations.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                6. Bridging the Gap: A Phased Approach
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                For most organizations, the journey from RPA to Intelligent Automation is evolutionary, not revolutionary.
              </p>
              <p className={`leading-relaxed mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                A pragmatic approach looks like this:
              </p>
              <ol className={`list-decimal pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Start with RPA to prove value and build automation governance.</li>
                <li>Integrate analytics and AI into high-value workflows.</li>
                <li>Scale towards IA, connecting bots, data, and intelligence into unified ecosystems.</li>
              </ol>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                This phased strategy balances short-term gains with long-term transformation.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                7. Strategic Considerations Before Deciding
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Before choosing your automation path, evaluate:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li><strong>Process maturity:</strong> Are your workflows standardized?</li>
                <li><strong>Data readiness:</strong> Is data accessible and clean enough for AI models?</li>
                <li><strong>Budget and timeline:</strong> Can you invest for long-term cognitive automation?</li>
                <li><strong>Business goals:</strong> Are you targeting efficiency or digital reinvention?</li>
              </ul>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                An automation assessment can help determine whether RPA alone meets your needs or if IA delivers greater strategic value.
              </p>
            </div>

            {/* Conclusion */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Conclusion: Choosing the Right Path for Your Enterprise
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Both RPA and Intelligent Automation have powerful roles to play.
              </p>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                RPA delivers quick wins and operational efficiency.
              </p>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Intelligent Automation builds on that foundation to unlock enterprise-wide intelligence and adaptability.
              </p>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                The best approach depends on where your organization stands in its digital transformation journey—and where you want to go next.
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
                <Brain className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Need Help Choosing the Right Automation Path?
                </h3>
                <p className={`mb-4 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Speak with our automation specialists to assess your needs and chart the right path to enterprise transformation.
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
