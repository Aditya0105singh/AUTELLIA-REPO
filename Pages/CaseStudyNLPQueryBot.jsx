import React from "react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
import { Database, BarChart2, Clock, DollarSign, CheckCircle, ArrowRight, Zap, Cpu, Lock, Calendar, Target, Building2, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function CaseStudyNLPQueryBot() {
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

  const keyMetrics = [
    { icon: Clock, value: "Days → Seconds", label: "Query Response Time" },
    { icon: CheckCircle, value: "50%", label: "Reduced Analyst Workload" },
    { icon: DollarSign, value: "300%", label: "ROI" },
    { icon: Calendar, value: "3 months", label: "Duration" }
  ];

  const challenges = [
    "Non-technical employees rely on data analysts for simple data needs, causing long turnaround times",
    "Querying involves multiple steps — requirement gathering, SQL writing, validation, and visualization",
    "Tools like Tableau and Power BI are expensive and require technical training",
    "Business teams lack real-time insights for quick actions"
  ];

  const solutionSteps = [
    "Users enter a natural language question through a chat-style interface",
    "The system interprets intent using NLP and maps entities to database fields",
    "A secure SQL query is auto-generated and executed",
    "Results are displayed in an intuitive dashboard (charts, tables, or summaries)",
    "Insights can be exported as reports or pushed to messaging apps like Slack or Microsoft Teams"
  ];

  const benefits = [
    "50% Reduction in Analyst Workload: Analysts no longer need to serve repetitive query requests",
    "Real-Time Insights: Queries answered instantly instead of waiting 1–2 days",
    "Low Cost Alternative: Replaces high-cost BI tools with an AI-powered open-source system",
    "Empowered Teams: Marketing, Finance, HR, and Operations can query data independently",
    "Scalable Design: Works across multiple databases and can integrate with Slack or Teams"
  ];

  const technologies = [
    "Python (Flask) – Backend logic & API handling",
    "NLP Models (spaCy / Transformers) – Natural language to SQL conversion",
    "SQL Databases – MySQL, PostgreSQL, SQL Server",
    "Frontend Visualization – Chart.js, HTML/CSS",
    "Integration Tools – Slack, Teams, REST APIs"
  ];

  const projectImpact = [
    { metric: "Query Turnaround Time", before: "1–2 days", after: "Seconds" },
    { metric: "Analyst Involvement", before: "100%", after: "<50%" },
    { metric: "Data Accessibility", before: "Limited to analysts", after: "Open to all employees" },
    { metric: "Decision Speed", before: "Slow", after: "Real-time" },
    { metric: "BI Tool Cost", before: "High", after: "Eliminated" },
    { metric: "ROI", before: "—", after: "300%" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-transparent text-gray-200' : 'bg-white text-gray-900'
    }`}>
      <BackgroundRippleEffect />
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="pt-24 sm:pt-20 pb-16 bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Database className={`w-8 h-8 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
              <span className={`text-lg font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                Enterprise Software / Data Analytics
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Natural Language Query Bot for Data Accessibility
            </h1>
            <p className={`text-xl leading-relaxed max-w-4xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Democratizing data access across the enterprise with AI-powered natural language queries that convert plain English into SQL
            </p>
          </div>

          {/* Key Metrics */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {keyMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="text-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${
                    isDark ? 'bg-gray-800 border border-gray-700' : 'bg-blue-50 border border-blue-200'
                  }`}>
                    <IconComponent className={`w-8 h-8 transition-colors duration-300 ${
                      isDark ? 'text-cyan-400' : 'text-blue-600'
                    }`} />
                  </div>
                  <div className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{metric.value}</div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{metric.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-3xl p-8 lg:p-12 transition-all duration-300 ${
            isDark 
              ? 'border border-gray-700 bg-gray-900/50' 
              : 'border border-gray-200 bg-white shadow-lg'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Overview</h2>
            <p className={`text-lg leading-relaxed mb-6 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              In many modern enterprises, data-driven decisions are hindered by a simple barrier — data inaccessibility. 
              Only a small group of analysts or engineers possess the skills to write SQL queries, while business teams 
              depend on them for even basic data requests.
            </p>
            <p className={`text-lg leading-relaxed mb-6 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              The Natural Language Query Bot eliminates this gap by allowing users to query structured databases in plain English.
            </p>
            <p className={`text-lg leading-relaxed mb-4 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              For example, a marketing manager can simply ask:
            </p>
            <div className={`p-4 rounded-lg mb-6 border-l-4 transition-all duration-300 ${
              isDark ? 'bg-blue-900/20 border-blue-400' : 'bg-blue-50 border-blue-500'
            }`}>
              <p className={`italic transition-colors duration-300 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                "Show me the top 5 performing campaigns in the last 30 days."
              </p>
            </div>
            <p className={`text-lg leading-relaxed mb-4 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              The bot then:
            </p>
            <ul className="space-y-2 mb-6">
              <li className={`flex items-start gap-3 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Converts the query to SQL using NLP models</span>
              </li>
              <li className={`flex items-start gap-3 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Executes it on the database</span>
              </li>
              <li className={`flex items-start gap-3 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Returns results as interactive charts or summaries</span>
              </li>
            </ul>
            <p className={`text-lg leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              This solution democratizes access to enterprise data, saving time, costs, and technical dependencies.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Demo Video Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-3xl p-8 lg:p-12 transition-all duration-300 ${
            isDark 
              ? 'border border-gray-700 bg-gray-900/50' 
              : 'border border-gray-200 bg-white shadow-lg'
          }`}>
            <h2 className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>See the Bot in Action</h2>
            <div className="relative w-full max-w-6xl mx-auto">
              <video 
                className={`w-full h-auto rounded-xl shadow-lg transition-all duration-300 ${
                  isDark ? 'border border-gray-600' : 'border border-gray-200'
                }`}
                controls
                muted
                loop
                preload="metadata"
              >
                <source src="/Bot%20Demo.mp4" type="video/mp4" />
                <div className={`flex items-center justify-center h-full transition-colors duration-300 ${
                  isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
                }`}>
                  Your browser does not support the video tag. Please update your browser to view this content.
                </div>
              </video>
              <p className={`text-center mt-4 text-sm transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Watch how users can query complex data using simple natural language questions
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Challenge & Solution */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Challenge */}
            <motion.div variants={itemVariants} className={`rounded-3xl p-8 transition-all duration-300 ${
              isDark 
                ? 'border border-red-800/50 bg-red-900/20' 
                : 'border border-red-200 bg-red-50'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-red-400' : 'text-red-700'
              }`}>Challenge</h3>
              <div className="space-y-6">
                <div>
                  <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                    isDark ? 'text-red-300' : 'text-red-800'
                  }`}>Limited Data Accessibility:</h4>
                  <p className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Non-technical employees rely on data analysts for simple data needs, causing long turnaround times.
                  </p>
                </div>
                <div>
                  <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                    isDark ? 'text-red-300' : 'text-red-800'
                  }`}>Inefficient Workflows:</h4>
                  <p className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Querying involves multiple steps — requirement gathering, SQL writing, validation, and visualization.
                  </p>
                </div>
                <div>
                  <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                    isDark ? 'text-red-300' : 'text-red-800'
                  }`}>High BI Tool Costs:</h4>
                  <p className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Tools like Tableau and Power BI are expensive and require technical training.
                  </p>
                </div>
                <div>
                  <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                    isDark ? 'text-red-300' : 'text-red-800'
                  }`}>Decision Delays:</h4>
                  <p className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Business teams lack real-time insights for quick actions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div variants={itemVariants} className={`rounded-3xl p-8 transition-all duration-300 ${
              isDark 
                ? 'border border-green-800/50 bg-green-900/20' 
                : 'border border-green-200 bg-green-50'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-green-400' : 'text-green-700'
              }`}>Solution</h3>
              <p className={`mb-6 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                The Natural Language Query Bot combines Natural Language Processing (NLP) and SQL automation to simplify how users interact with data.
              </p>
              <div className={`font-semibold mb-4 transition-colors duration-300 ${
                isDark ? 'text-green-400' : 'text-green-700'
              }`}>How it Works:</div>
              <ul className="space-y-3">
                {solutionSteps.map((step, index) => (
                  <li key={index} className={`flex items-start gap-3 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <span className={`font-bold flex-shrink-0 transition-colors duration-300 ${
                      isDark ? 'text-green-400' : 'text-green-600'
                    }`}>{index + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Implementation Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-3xl p-8 lg:p-12 transition-all duration-300 ${
            isDark 
              ? 'border border-gray-700 bg-gray-900/50' 
              : 'border border-gray-200 bg-white shadow-lg'
          }`}>
            <h2 className={`text-3xl font-bold mb-8 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Implementation</h2>
            
            <ul className="space-y-4 mb-10">
              <li className={`flex items-start gap-3 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Developed and tested using Python (Flask, spaCy, SQLAlchemy)</span>
              </li>
              <li className={`flex items-start gap-3 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Connected with internal MySQL and PostgreSQL databases</span>
              </li>
              <li className={`flex items-start gap-3 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Enabled role-based access control to ensure secure queries</span>
              </li>
              <li className={`flex items-start gap-3 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Integrated data visualization using Chart.js and Matplotlib</span>
              </li>
              <li className={`flex items-start gap-3 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Deployed as a web-based interface accessible via browser or chat API</span>
              </li>
            </ul>

            <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Architecture Highlights</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl transition-all duration-300 ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-blue-50 border border-blue-200'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className={`w-6 h-6 transition-colors duration-300 ${
                    isDark ? 'text-cyan-400' : 'text-blue-600'
                  }`} />
                  <h4 className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-cyan-400' : 'text-blue-700'
                  }`}>Frontend</h4>
                </div>
                <p className={`transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Built with Flask and Chart.js for interactive data visualization
                </p>
              </div>
              
              <div className={`p-6 rounded-xl transition-all duration-300 ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-blue-50 border border-blue-200'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className={`w-6 h-6 transition-colors duration-300 ${
                    isDark ? 'text-cyan-400' : 'text-blue-600'
                  }`} />
                  <h4 className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-cyan-400' : 'text-blue-700'
                  }`}>NLP Engine</h4>
                </div>
                <p className={`transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Trained on query templates and domain-specific terms
                </p>
              </div>
              
              <div className={`p-6 rounded-xl transition-all duration-300 ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-blue-50 border border-blue-200'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className={`w-6 h-6 transition-colors duration-300 ${
                    isDark ? 'text-cyan-400' : 'text-blue-600'
                  }`} />
                  <h4 className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-cyan-400' : 'text-blue-700'
                  }`}>Secure Backend</h4>
                </div>
                <p className={`transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Handling database authentication and caching
                </p>
              </div>
              
              <div className={`p-6 rounded-xl transition-all duration-300 ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-blue-50 border border-blue-200'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <Database className={`w-6 h-6 transition-colors duration-300 ${
                    isDark ? 'text-cyan-400' : 'text-blue-600'
                  }`} />
                  <h4 className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-cyan-400' : 'text-blue-700'
                  }`}>Scalable</h4>
                </div>
                <p className={`transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Works with MySQL, PostgreSQL, SQL Server, and BigQuery
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Benefits & Impact Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-3xl p-8 lg:p-12 transition-all duration-300 ${
            isDark 
              ? 'border border-gray-700 bg-gray-900/50' 
              : 'border border-gray-200 bg-white shadow-lg'
          }`}>
            <h2 className={`text-3xl font-bold mb-8 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Key Benefits</h2>
            
            <div className="space-y-6 mb-12">
              {benefits.map((benefit, index) => {
                const [title, description] = benefit.split(': ');
                return (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className={`font-semibold transition-colors duration-300 ${
                        isDark ? 'text-gray-200' : 'text-gray-800'
                      }`}>{title}: </span>
                      <span className={`transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>{description}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mb-8">
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Project Impact</h3>
              <div className="overflow-x-auto">
                <table className={`min-w-full rounded-xl overflow-hidden transition-all duration-300 ${
                  isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow border border-gray-200'
                }`}>
                  <thead>
                    <tr className={`transition-colors duration-300 ${
                      isDark ? 'bg-gray-700' : 'bg-gray-100'
                    } text-left`}>
                      <th className={`py-3 px-4 font-semibold transition-colors duration-300 ${
                        isDark ? 'text-gray-200' : 'text-gray-800'
                      }`}>Metric</th>
                      <th className={`py-3 px-4 font-semibold transition-colors duration-300 ${
                        isDark ? 'text-gray-200' : 'text-gray-800'
                      }`}>Before</th>
                      <th className={`py-3 px-4 font-semibold transition-colors duration-300 ${
                        isDark ? 'text-gray-200' : 'text-gray-800'
                      }`}>After</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectImpact.map((item, index) => (
                      <tr 
                        key={index} 
                        className={`${index % 2 === 0 ? (isDark ? 'bg-gray-800/50' : 'bg-gray-50') : ''} border-t transition-colors duration-300 ${
                          isDark ? 'border-gray-700' : 'border-gray-200'
                        }`}
                      >
                        <td className={`py-3 px-4 font-medium transition-colors duration-300 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>{item.metric}</td>
                        <td className={`py-3 px-4 transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>{item.before}</td>
                        <td className="py-3 px-4 font-semibold text-green-600 dark:text-green-400">{item.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Technologies Used */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-3xl p-8 lg:p-12 transition-all duration-300 ${
            isDark 
              ? 'border border-gray-700 bg-gray-900/50' 
              : 'border border-gray-200 bg-white shadow-lg'
          }`}>
            <h2 className={`text-3xl font-bold mb-8 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Technologies Used</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Democratize Your Data?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our Natural Language Query Bot can transform your organization's data accessibility.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to={createPageUrl("/contact")}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-blue-700 bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to={createPageUrl("/case-studies")}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white border-2 border-white hover:bg-white/10 transition-all duration-300"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
