import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils/index.js";
import { ArrowRight, Zap, Brain, BarChart3, Bot, Building, Heart, ShoppingCart, Truck, Lock, Share2, TrendingUp, BarChart, Users, Star, Cog, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../Components/ui/InfiniteMovingCards.jsx";
import { StickyScroll } from "../Components/ui/sticky-scroll-reveal.jsx";
import { Grid } from "../Components/ui/grid-pattern.jsx";

export default function Platform() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      }
    }
  };

  const valueProps = [
    { icon: Zap, title: "Intelligent Automation", description: "Streamline workflows with RPA & AI." },
    { icon: Brain, title: "AI & Machine Learning", description: "Unlock predictive insights & generative AI." },
    { icon: BarChart3, title: "Data Analytics", description: "Real-time dashboards & business intelligence." },
    { icon: Bot, title: "Agentic AI", description: "Autonomous AI agents to drive business decisions." }
  ];
  
  const industries = [
    { icon: Building, title: "Banking & Finance" },
    { icon: Heart, title: "Healthcare" },
    { icon: ShoppingCart, title: "Retail & E-commerce" },
    { icon: Truck, title: "Manufacturing" }
  ];
  
  const whyChooseUsContent = [
    {
      title: "Collaborative Excellence",
      description: "From initial strategy to final execution and support, we are your dedicated automation partners. We build autonomous systems that deliver lasting value.",
      content: (
        <div className="h-full w-full bg-cover bg-center rounded-lg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1614063231914-ab4838635b43?q=80&w=2574&auto=format&fit=crop')"}}>
            <div className="h-full w-full bg-black/50 rounded-lg flex items-center justify-center"><Share2 className="w-16 h-16 text-[--accent]"/></div>
        </div>
      ),
    },
    {
      title: "Uncompromising Security",
      description: "Our team holds deep expertise in building secure, compliant solutions. This vendor-agnostic approach ensures we architect the perfect, most cost-effective solution for your unique needs.",
      content: (
        <div className="h-full w-full bg-cover bg-center rounded-lg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1550643968-07e9c5c29729?q=80&w=2574&auto=format&fit=crop')"}}>
            <div className="h-full w-full bg-black/50 rounded-lg flex items-center justify-center"><Lock className="w-16 h-16 text-teal-400"/></div>
        </div>
      ),
    },
    {
      title: "Built for Scale",
      description: "We leverage agile practices and proven, battle-tested frameworks to deliver success, mitigate risk, and ensure on-time delivery for enterprise-level scale.",
      content: (
        <div className="h-full w-full bg-cover bg-center rounded-lg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2670&auto=format&fit=crop')"}}>
            <div className="h-full w-full bg-black/50 rounded-lg flex items-center justify-center"><TrendingUp className="w-16 h-16 text-[--accent]"/></div>
        </div>
      ),
    },
    {
      title: "Actionable Insights",
      description: "We are relentlessly committed to innovation. We help you stay ahead of the curve, transforming data into competitive advantages and clear ROI.",
      content: (
        <div className="h-full w-full bg-cover bg-center rounded-lg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')"}}>
            <div className="h-full w-full bg-black/50 rounded-lg flex items-center justify-center"><BarChart className="w-16 h-16 text-[--secondary-accent]"/></div>
        </div>
      ),
    },
  ];

  const testimonials = [
    { quote: "Autellia transformed our operations with intelligent automation. We achieved 80% cost reduction in our invoice processing within 3 months.", name: "Sarah Johnson", title: "CFO, Global Manufacturing Corp" },
    { quote: "The AI-powered analytics dashboard gives us real-time insights that have revolutionized our decision-making process.", name: "Michael Chen", title: "VP Operations, TechFlow Solutions" },
    { quote: "Their agentic AI implementation has made our customer service 24/7 autonomous while improving satisfaction scores by 40%.", name: "Emily Rodriguez", title: "Director of Customer Success, ServiceMax" },
    { quote: "Autellia's RPA bots handle our entire order-to-cash process. The reliability and accuracy are exceptional.", name: "David Park", title: "Operations Manager, RetailPlus" },
    { quote: "The process optimization consulting helped us identify bottlenecks we didn't know existed. ROI was achieved in just 6 weeks.", name: "Lisa Thompson", title: "Process Excellence Lead, HealthCare United" }
  ];

  const animatedCounters = [
      { number: "97%", label: "Client Satisfaction" },
      { number: "50M+", label: "Automated Decisions" },
      { number: "10x", label: "Average ROI" }
  ]

  const CountUp = ({ value }) => {
    const [display, setDisplay] = React.useState(value);
    React.useEffect(() => {
      const match = String(value).match(/^(\d+)(.*)$/);
      if (!match) return;
      const target = parseInt(match[1], 10);
      const suffix = match[2] || '';
      let current = 0;
      const duration = 1200;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        current = Math.floor(target * progress);
        setDisplay(`${current}${suffix}`);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, [value]);
    return <>{display}</>;
  };

  return (
    <div className="bg-[--bg] text-[--text-primary]">
      {/* Hero Section - Modern Theme with Original Content */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeIn}
        className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center text-center overflow-hidden px-4"
        style={{ background: 'var(--gradient-hero)' }}
        data-aos="fade-up"
        role="banner"
        aria-labelledby="hero-heading"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.h1 
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 lg:mb-6 leading-tight"
          >
            <span className="text-white text-high-contrast">Empowering Enterprises </span>
            <span className="gradient-text">with AI & Automation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl font-medium text-slate-300 leading-relaxed mb-6 lg:mb-10 max-w-3xl mx-auto px-4"
          >
            Autellia transforms business operations through RPA, AI/ML, Agentic AI, and Data Analytics — delivering efficiency, speed, and smarter decision-making at scale.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center"
          >
            <Link 
              to={createPageUrl("Demo")}
              className="border-magic group"
            >
              <span className="border-magic-inner flex items-center justify-center gap-2">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to={createPageUrl("Solutions")}
              className="btn-secondary inline-flex items-center gap-2 px-6 py-3"
            >
              Explore Solutions
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Value Propositions */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}
        className="py-12 lg:py-24 bg-[--bg]"
        data-aos="fade-up"
        aria-labelledby="value-props-heading"
      >
        <div className="container-responsive">
          <h2 id="value-props-heading" className="sr-only">Our Key Value Propositions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {valueProps.map((prop) => {
              const IconComponent = prop.icon;
              return (
                <motion.div 
                  key={prop.title} 
                  variants={fadeIn} 
                  className="card-modern group relative overflow-hidden transition-all duration-300 transform hover:-translate-y-3 hover:scale-[1.02] shadow-lg hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)]"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    e.currentTarget.style.setProperty('--x', `${x}%`);
                    e.currentTarget.style.setProperty('--y', `${y}%`);
                  }}
                >
                  {/* Glowing boundary overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[0.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(300px circle at var(--x,50%) var(--y,50%), rgba(65,105,225,0.25), transparent 40%)",
                      WebkitMask:
                        "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      padding: "1px",
                      borderRadius: "0.75rem",
                    }}
                  />
                  <motion.div
                    className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(65,105,225,0.12), transparent 40%)",
                    }}
                  />
                  <Grid size={20} />
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-[--border] rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-[--accent]" />
                  </div>
                  <h3 className="text-xl font-bold text-[--text-primary] mb-3">{prop.title}</h3>
                  <p className="text-[--text-muted] leading-relaxed">{prop.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* About Section - Modern Theme */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        className="py-12 lg:py-24 glass"
        data-aos="fade-up"
        aria-labelledby="about-heading"
      >
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div variants={fadeIn}>
              <h2 id="about-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[--text-primary] mb-4 lg:mb-6">Reimagining How Businesses Operate</h2>
              <p className="text-base lg:text-lg text-[--text-muted] leading-relaxed mb-6 lg:mb-8">
                Founded with a vision to create future-ready enterprises, Autellia combines deep expertise in RPA, AI, and Analytics to empower organizations to reduce costs, improve productivity, and accelerate growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 text-center">
                {animatedCounters.map((item, idx) => (
                    <motion.div key={item.label} variants={fadeIn} className="card-modern p-6 text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl" data-aos="zoom-in">
                        <p className="text-4xl font-bold gradient-text"><CountUp value={item.number} /></p>
                        <p className="text-sm text-[--text-muted] mt-2">{item.label}</p>
                    </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="h-full mt-8 lg:mt-0">
              <img src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2572&auto=format&fit=crop" alt="AI and automation technology illustration showing modern business transformation" className="rounded-lg shadow-2xl object-cover h-full w-full" data-aos="fade-right"/>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Industries We Serve */}
       <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        className="py-24 bg-[--bg]"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[--text-primary] mb-4">Industries We Serve</h2>
          </div>
          <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <motion.div 
                  key={industry.title} 
                  variants={fadeIn} 
                  className="card-modern group text-center relative overflow-hidden transition-all duration-300 transform hover:-translate-y-3 hover:scale-[1.02] shadow-sm hover:shadow-[0_18px_40px_rgba(99,102,241,0.12)]"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    e.currentTarget.style.setProperty('--x', `${x}%`);
                    e.currentTarget.style.setProperty('--y', `${y}%`);
                  }}
                >
                  {/* Glowing boundary overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[0.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(260px circle at var(--x,50%) var(--y,50%), rgba(65,105,225,0.22), transparent 42%)",
                      WebkitMask:
                        "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      padding: "1px",
                      borderRadius: "0.75rem",
                    }}
                  />
                  <motion.div
                    className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(500px circle at var(--x,50%) var(--y,50%), rgba(65,105,225,0.10), transparent 42%)",
                    }}
                  />
                  <Grid size={18} />
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-[--border] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="w-8 h-8 text-[--accent]" />
                  </div>
                  <h3 className="text-lg font-bold text-[--text-primary]">{industry.title}</h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us (Sticky Scroll) */}
      <section className="py-24 glass" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[--text-primary] mb-4">Why Forward-Thinking Businesses Choose Autellia</h2>
            <p className="text-lg text-[--text-muted] max-w-2xl mx-auto">Our approach is built on a foundation of deep expertise, strategic partnership, and a relentless commitment to innovation.</p>
          </div>
          <StickyScroll content={whyChooseUsContent} />
        </div>
      </section>

      {/* Testimonials Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}
        className="py-24 bg-[--bg]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[--text-primary] mb-4">What Our Clients Say</h2>
            <p className="text-lg text-[--text-muted] max-w-2xl mx-auto">Hear from industry leaders who have transformed their operations with Autellia</p>
          </div>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </motion.section>

      

       {/* Bottom CTA Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}
        className="py-24 bg-[--bg]"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card-modern p-12">
            <h2 className="text-4xl font-bold text-[--text-primary] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-[--text-muted] mb-8 leading-relaxed">
              Explore a discovery workshop to identify top ROI use cases in 2 weeks 
              and stand up a pilot in 30–45 days with measurable outcomes.
            </p>
            <Link 
              to={createPageUrl("Demo")}
              className="border-magic group"
            >
              <span className="border-magic-inner flex items-center justify-center gap-2">
                Schedule Discovery Workshop
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}