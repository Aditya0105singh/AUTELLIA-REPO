import React from "react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../Components/ui/BackgroundRippleEffect.jsx";
import { BookOpen, TrendingUp, Users, Calendar, ArrowRight, Tag, Clock, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { useTheme } from "../src/contexts/ThemeContext.jsx";

export default function BlogKnowledgeHub() {
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

  const featuredArticles = [
    {
      id: 1,
      title: "The Future of Intelligent Automation: Agentic AI in Enterprise",
      excerpt: "Explore how agentic AI is revolutionizing enterprise automation by enabling autonomous decision-making and adaptive workflows.",
      category: "AI/ML",
      readTime: "8 min read",
      publishDate: "Dec 15, 2024",
      views: "2.3k",
      featured: true,
      tags: ["Agentic AI", "Enterprise", "Automation"]
    },
    {
      id: 2,
      title: "RPA vs. Intelligent Automation: Making the Right Choice",
      excerpt: "A comprehensive comparison of traditional RPA and intelligent automation solutions to help you choose the right approach.",
      category: "Strategy",
      readTime: "6 min read",
      publishDate: "Dec 12, 2024",
      views: "1.8k",
      featured: true,
      tags: ["RPA", "Strategy", "Decision Making"]
    },
    {
      id: 3,
      title: "ROI Calculation Framework for Automation Projects",
      excerpt: "Learn how to accurately calculate and present ROI for your automation initiatives with our proven framework.",
      category: "Business",
      readTime: "10 min read",
      publishDate: "Dec 10, 2024",
      views: "3.1k",
      featured: true,
      tags: ["ROI", "Business Case", "Finance"]
    }
  ];

  const recentArticles = [
    {
      title: "Best Practices for Scaling RPA Across Enterprise",
      category: "Implementation",
      readTime: "7 min read",
      publishDate: "Dec 8, 2024",
      views: "1.2k"
    },
    {
      title: "Data Security in Intelligent Automation",
      category: "Security",
      readTime: "5 min read",
      publishDate: "Dec 5, 2024",
      views: "980"
    },
    {
      title: "Change Management for Automation Success",
      category: "Strategy",
      readTime: "9 min read",
      publishDate: "Dec 3, 2024",
      views: "1.5k"
    },
    {
      title: "AI-Powered Document Processing: A Complete Guide",
      category: "AI/ML",
      readTime: "12 min read",
      publishDate: "Nov 30, 2024",
      views: "2.7k"
    }
  ];

  const categories = [
    { name: "AI/ML", count: 24, color: "cyan" },
    { name: "RPA", count: 18, color: "purple" },
    { name: "Strategy", count: 15, color: "green" },
    { name: "Implementation", count: 12, color: "blue" },
    { name: "Security", count: 8, color: "red" },
    { name: "Business", count: 10, color: "yellow" }
  ];

  const resources = [
    {
      title: "Automation Readiness Assessment",
      description: "Evaluate your organization's readiness for automation initiatives",
      type: "Tool",
      icon: TrendingUp
    },
    {
      title: "RPA Implementation Checklist",
      description: "Step-by-step checklist for successful RPA deployments",
      type: "Guide",
      icon: BookOpen
    },
    {
      title: "AI/ML Use Case Library",
      description: "Comprehensive library of AI/ML use cases across industries",
      type: "Database",
      icon: Users
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-transparent text-gray-200' : 'bg-white text-gray-900'
    }`}>
      <BackgroundRippleEffect />
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="pt-20 pb-16 bg-transparent relative"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Knowledge Hub
          </h1>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Stay ahead with the latest insights, best practices, and thought leadership 
            in intelligent automation and AI/ML technologies
          </p>
        </div>
      </motion.section>

      {/* Featured Articles */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Featured Articles</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article 
                key={article.id} 
                variants={itemVariants}
                className={`border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 ${
                  isDark
                    ? 'border-gray-700 hover:shadow-cyan-900/20 hover:border-cyan-500/30'
                    : 'border-gray-300 hover:shadow-cyan-200 hover:border-cyan-400 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Eye className="w-3 h-3" />
                    {article.views}
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold mb-3 leading-tight ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {article.title}
                </h3>
                
                <p className={`text-sm leading-relaxed mb-4 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, idx) => (
                    <span key={idx} className={`px-2 py-1 rounded text-xs ${
                      isDark
                        ? 'bg-gray-800 border border-gray-700 text-gray-300'
                        : 'bg-gray-100 border border-gray-300 text-gray-700'
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className={`flex items-center justify-between pt-4 border-t ${
                  isDark ? 'border-gray-700' : 'border-gray-300'
                }`}>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.publishDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1">
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Categories and Recent Articles */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className={`text-xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 border rounded-lg transition-colors cursor-pointer ${
                    isDark
                      ? 'border-gray-700 hover:border-gray-600'
                      : 'border-gray-300 hover:border-gray-400 bg-white'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-${category.color}-400`}></div>
                      <span className={`${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>{category.name}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      isDark ? 'text-gray-500 bg-gray-800' : 'text-gray-600 bg-gray-100'
                    }`}>
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Articles */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <h3 className={`text-xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Recent Articles</h3>
              <div className="space-y-4">
                {recentArticles.map((article, index) => (
                  <div key={index} className={`border rounded-lg p-4 transition-colors cursor-pointer ${
                    isDark
                      ? 'border-gray-700 hover:border-gray-600'
                      : 'border-gray-300 hover:border-gray-400 bg-white'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-2 py-1 rounded text-xs ${
                            isDark
                              ? 'bg-gray-800 border border-gray-700 text-gray-400'
                              : 'bg-gray-100 border border-gray-300 text-gray-600'
                          }`}>
                            {article.category}
                          </span>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {article.publishDate}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readTime}
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {article.views}
                            </div>
                          </div>
                        </div>
                        <h4 className={`font-semibold hover:text-cyan-400 transition-colors ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {article.title}
                        </h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500 ml-4 flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Resources */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
        className="py-16 bg-transparent"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Additional Resources</h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>Tools and guides to accelerate your automation journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className={`border rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 ${
                    isDark
                      ? 'border-gray-700 hover:shadow-cyan-900/20 hover:border-cyan-500/30'
                      : 'border-gray-300 hover:shadow-cyan-200 hover:border-cyan-400 bg-white'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                    isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-300'
                  }`}>
                    <IconComponent className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="mb-2">
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{resource.title}</h3>
                  <p className={`text-sm leading-relaxed mb-4 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{resource.description}</p>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center gap-1 mx-auto">
                    Access Resource
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Newsletter Signup */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="py-16 bg-transparent"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`border rounded-3xl p-12 hover:shadow-xl transition-all duration-300 ${
            isDark
              ? 'border-gray-700 text-white hover:shadow-blue-900/20'
              : 'border-gray-300 text-gray-900 hover:shadow-blue-200 bg-white'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Stay Updated</h2>
            <p className={`text-xl mb-8 leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Subscribe to our newsletter for the latest insights, case studies, and automation trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className={`flex-1 px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 ${
                  isDark
                    ? 'bg-gray-800 border border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
