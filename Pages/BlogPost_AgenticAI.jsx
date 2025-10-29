import React from "react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, User, Sparkles, Brain, Network, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function BlogPostAgenticAI() {
  const { isDark } = useTheme();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const article = {
    title: "The Future of Intelligent Automation: Agentic AI in the Enterprise",
    category: "AI/ML",
    readTime: "8 min read",
    publishDate: "Jan 15, 2025",
    views: "2.3k",
    author: "Autellia Team",
    authorRole: "AI/ML Specialists"
  };

  const relatedArticles = [
    {
      title: "RPA vs. Intelligent Automation: Making the Right Choice",
      category: "Strategy",
      link: "/blog/rpa-vs-intelligent-automation"
    },
    {
      title: "AI-Powered Document Processing: A Complete Guide",
      category: "AI/ML",
      link: "/blog/ai-powered-document-processing"
    },
    {
      title: "Change Management for Automation Success",
      category: "Strategy",
      link: "/blog/change-management-automation-success"
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
                Automation has evolved from rule-based RPA to intelligent automation, but a new frontier is now emerging: <strong>Agentic AI</strong>. These are autonomous agents capable of perceiving, reasoning, acting, and learning with minimal human intervention. As enterprises look ahead, agentic AI promises to reshape how workflows are managed, decisions are made, and innovation is scaled.
              </p>
              <p className="mb-6">
                In this article, we'll explore what agentic AI is, why it matters now, how enterprises are already using it, challenges to adoption, and what organizations must do to stay ahead.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                1. What Is Agentic AI?
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Agentic AI refers to AI systems (agents) that are not just tools responding to prompts, but entities that can:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li><strong>Set goals</strong> based on instructions or high-level objectives</li>
                <li><strong>Perceive context</strong> (data, environment, changes)</li>
                <li><strong>Decide and act autonomously</strong>, choosing which tasks or tools to use</li>
                <li><strong>Learn and adapt</strong> over time, improving with experience</li>
              </ul>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                This contrasts with traditional automation / RPA which is largely deterministic and rule-based, and even compared to intelligent automation, which often still requires human inputs or oversight in many steps.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                2. Why Agentic AI Is Gaining Momentum
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Several forces are accelerating the shift toward agentic AI in enterprises:
              </p>
              
              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Operational Complexity & Scale
              </h3>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Enterprises deal with more varied, changing, and large volumes of data and processes. Static rules struggle to keep up. Agentic AI enables dynamic responses.
              </p>

              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Demand for Real-Time Decision-Making
              </h3>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                As business cycles shorten, organizations need systems that can sense and respond quickly—not just execute fixed workflows. Agentic AI supports more real-time, adaptive behavior.
              </p>

              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Advancements in AI Technologies
              </h3>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Large Language Models (LLMs), better tool integration, improved multi-agent orchestration, and cloud infrastructure are enabling more powerful, capable agents.
              </p>

              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Competitive Differentiation
              </h3>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Early adopters of agentic AI are already seeing benefits in efficiency, innovation, scalability, customer experience, and cost savings. Enterprises see agentic AI as a strategic capability.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                3. Current & Emerging Use Cases
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Here are some of the places agentic AI is being used or is on the horizon:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li><strong>Multi-agent workflows in finance</strong> (e.g. refund/claims processing) where different agents handle parts of the process (data collection, validation, updating systems, user communication).</li>
                <li><strong>Decision automation for operations:</strong> predictive maintenance, anomaly detection, supply chain adjustments.</li>
                <li><strong>Customer service agents</strong> that autonomously handle end-to-end support cases, escalating only when needed.</li>
                <li><strong>Automation of knowledge work:</strong> content generation, training modules, compliance reports, data summarization etc., where agents interact with unstructured data.</li>
              </ul>
            </div>

            {/* Section 4 - Architecture Table */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                4. Key Components of Agentic AI Architecture
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                To do agentic AI well, enterprises will need certain architectural and operational components:
              </p>
              <div className="overflow-x-auto">
                <table className={`w-full border-collapse ${
                  isDark ? 'border-gray-700' : 'border-gray-300'
                }`}>
                  <thead>
                    <tr className={isDark ? 'bg-gray-800/50' : 'bg-gray-100'}>
                      <th className={`border p-3 text-left font-bold ${
                        isDark ? 'border-gray-700' : 'border-gray-300'
                      }`}>Component</th>
                      <th className={`border p-3 text-left font-bold ${
                        isDark ? 'border-gray-700' : 'border-gray-300'
                      }`}>Purpose & Considerations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={`border p-3 font-medium ${
                        isDark ? 'border-gray-700' : 'border-gray-300'
                      }`}>Agent orchestration framework / multi-agent system</td>
                      <td className={`border p-3 ${
                        isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
                      }`}>Agents need to communicate, coordinate, and avoid conflicts. Ensuring smooth flow of tasks among agents is critical.</td>
                    </tr>
                    <tr className={isDark ? 'bg-gray-800/30' : 'bg-gray-50'}>
                      <td className={`border p-3 font-medium ${
                        isDark ? 'border-gray-700' : 'border-gray-300'
                      }`}>Perceive-Reason-Act-Learn (PRAL) loop</td>
                      <td className={`border p-3 ${
                        isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
                      }`}>Agents must not just act but sense environment, reason about context & purpose, then learn from outcomes.</td>
                    </tr>
                    <tr>
                      <td className={`border p-3 font-medium ${
                        isDark ? 'border-gray-700' : 'border-gray-300'
                      }`}>Data infrastructure & integrations</td>
                      <td className={`border p-3 ${
                        isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
                      }`}>Access to real-time data, both structured and unstructured; integration with existing systems, APIs; data pipelines must be robust.</td>
                    </tr>
                    <tr className={isDark ? 'bg-gray-800/30' : 'bg-gray-50'}>
                      <td className={`border p-3 font-medium ${
                        isDark ? 'border-gray-700' : 'border-gray-300'
                      }`}>Security, governance & trust</td>
                      <td className={`border p-3 ${
                        isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
                      }`}>As agents get more autonomy, risks grow: bias, errors, privacy leaks, misuse. Proper oversight, explainability, audit trails, compliance are essential.</td>
                    </tr>
                    <tr>
                      <td className={`border p-3 font-medium ${
                        isDark ? 'border-gray-700' : 'border-gray-300'
                      }`}>Human-in-the-loop / oversight</td>
                      <td className={`border p-3 ${
                        isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
                      }`}>Even with autonomy, humans still play role in governance, exception handling, reviewing decisions. Balancing autonomy with control is a key challenge.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                5. Challenges and Risks
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Agentic AI holds promise, but enterprises should approach with clear awareness of these challenges:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-3 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li><strong>Complexity & Cost:</strong> Designing, training, maintaining autonomous agents is more complex (computationally, architecturally). Initial investment is higher.</li>
                <li><strong>Explainability & Trust:</strong> Autonomous decisions may be opaque. Stakeholders need clarity on why an action happened. Regulatory compliance may demand traceability.</li>
                <li><strong>Data Quality & Bias:</strong> Agents acting on flawed or biased data can magnify errors. Ensuring data integrity is crucial.</li>
                <li><strong>Scalability of Agent Networks:</strong> Many agents working together can produce emergent behavior (unexpected interactions). Orchestration and governance become harder.</li>
                <li><strong>Ethical & Legal Issues:</strong> Who is accountable? How are privacy, security, regulatory norms maintained, especially with autonomous agents?</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                6. What Enterprises Should Do to Prepare
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                To reap the benefits of agentic AI and avoid pitfalls, organizations should undertake:
              </p>

              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                a) Strategic Planning & Road-mapping
              </h3>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Assess where agentic AI makes sense: tasks with high complexity, variability, decision fatigue, unstructured data workloads. Develop a roadmap that phases in autonomy gradually.
              </p>

              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                b) Build Proofs of Concept (PoCs)
              </h3>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Start with limited domain pilots to test agent behavior, performance, integration, governance. Learn and iterate.
              </p>

              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                c) Strengthen Data Infrastructure & Tooling
              </h3>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Ensure access to clean, relevant data; invest in AI/ML platforms; include feedback loops for learning; modular tool integrations.
              </p>

              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                d) Define Governance & Ethical Frameworks Early
              </h3>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Set policies for agent accountability, transparency, safety; build in auditability. Assign roles (AI ethics, oversight, compliance).
              </p>

              <h3 className={`text-xl font-bold mb-3 mt-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                e) Upskill Workforce & Change Culture
              </h3>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Employees will need new skills: understanding agentic systems, oversight, interpreting AI decisions. Culture must shift to accept agents as collaborators rather than threats.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                7. Future Outlook: What's Next
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Looking ahead, we can expect:
              </p>
              <ul className={`list-disc pl-6 mb-4 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li><strong>More hybrid enterprises,</strong> where human teams and AI agents co-operate. Humans focusing on strategy, creativity, oversight; agents handling routine, dynamic, data-rich tasks.</li>
                <li><strong>Rise of agent marketplaces</strong> and reusable agent modules — pre-built agents for specific business functions that can be plugged in.</li>
                <li><strong>Stronger regulatory frameworks</strong> to ensure agentic AI is safe, fair, private, and auditable.</li>
                <li><strong>Better standardization</strong> of agent architecture, benchmarks (how to evaluate agent performance).</li>
                <li><strong>Gradual shift from "automation of tasks" to "automation of decisions"</strong> in many enterprise domains.</li>
              </ul>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                By, say, 2028-2030, we might see a significant portion of routine decision-making (customer service, operations, forecasting) handled via agentic AI under human governance.
              </p>
            </div>

            {/* Conclusion */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Conclusion: Agentic AI as the Next Leap
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Agentic AI isn't just the latest buzzword—it is the next stage in the automation evolution. For enterprises, it offers the potential for greater autonomy, adaptability, and strategic value. But success won't come from jumping in blindly. It comes from thoughtful planning, governance, data readiness, culture, and gradual staging.
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
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Ready to Explore Agentic AI?
                </h3>
                <p className={`mb-4 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Reach out to our AI strategy experts to map out your roadmap, build pilot agents, and prepare for the future.
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
