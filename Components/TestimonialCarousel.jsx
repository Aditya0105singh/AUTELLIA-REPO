import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTheme } from '../src/contexts/ThemeContext.jsx';

const testimonials = [
  {
    id: 1,
    text: "Autellia's RPA bots handle our entire order-to-cash process. The reliability and accuracy are exceptional. We've seen a 95% reduction in processing time and our team can now focus on strategic initiatives.",
    name: "David Park",
    title: "Operations Manager",
    company: "RetailPlus",
    rating: 5,
    avatar: "DP",
    color: "from-blue-500 to-purple-600",
    stats: { metric: "95%", label: "Time Saved" }
  },
  {
    id: 2,
    text: "The process optimization consulting helped us identify bottlenecks we didn't know existed. ROI was achieved in just 6 weeks with measurable improvements across all departments.",
    name: "Lisa Thompson",
    title: "Process Excellence Lead",
    company: "HealthCare United",
    rating: 5,
    avatar: "LT",
    color: "from-green-500 to-teal-600",
    stats: { metric: "6 Weeks", label: "ROI Achieved" }
  },
  {
    id: 3,
    text: "Autellia transformed our operations with intelligent automation. We achieved 80% cost reduction in our invoice processing within 3 months and improved accuracy to 99.8%.",
    name: "Sarah Johnson",
    title: "CFO",
    company: "Global Manufacturing Corp",
    rating: 5,
    avatar: "SJ",
    color: "from-purple-500 to-pink-600",
    stats: { metric: "80%", label: "Cost Reduction" }
  },
  {
    id: 4,
    text: "The AI-powered analytics dashboard gives us real-time insights that have revolutionized our decision-making process. Data-driven decisions are now our competitive advantage.",
    name: "Michael Chen",
    title: "VP Operations",
    company: "TechFlow Solutions",
    rating: 5,
    avatar: "MC",
    color: "from-orange-500 to-red-600",
    stats: { metric: "10x", label: "Faster Insights" }
  },
  {
    id: 5,
    text: "Their agentic AI implementation has made our customer service 24/7 autonomous while improving satisfaction scores by 40%. The future of customer service is here.",
    name: "Emily Rodriguez",
    title: "Director of Customer Success",
    company: "ServiceMax",
    rating: 5,
    avatar: "ER",
    color: "from-cyan-500 to-blue-600",
    stats: { metric: "40%", label: "Satisfaction Increase" }
  }
];

const TestimonialCarousel = () => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${
          isDark ? 'bg-purple-500' : 'bg-purple-300'
        }`} />
        <div className={`absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-20 ${
          isDark ? 'bg-blue-500' : 'bg-blue-300'
        }`} />
      </div>

      <div className="relative">
        {/* Main testimonial card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`relative rounded-3xl p-8 lg:p-12 shadow-2xl ${
              isDark 
                ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50' 
                : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
            }`}
          >
            {/* Quote icon */}
            <div className={`absolute top-8 left-8 ${
              isDark ? 'text-purple-400/20' : 'text-purple-500/10'
            }`}>
              <Quote size={80} />
            </div>

            <div className="relative z-10 grid lg:grid-cols-3 gap-8">
              {/* Left side - Testimonial content */}
              <div className="lg:col-span-2">
                {/* Rating stars */}
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`text-lg lg:text-xl leading-relaxed mb-8 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  "{currentTestimonial.text}"
                </motion.p>

                {/* Author info */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${currentTestimonial.color} 
                    flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg`}>
                    {currentTestimonial.avatar}
                  </div>
                  <div>
                    <div className={`font-bold text-lg ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {currentTestimonial.name}
                    </div>
                    <div className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {currentTestimonial.title}
                    </div>
                    <div className={`text-sm font-medium ${
                      isDark ? 'text-purple-400' : 'text-purple-600'
                    }`}>
                      {currentTestimonial.company}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right side - Stats card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className={`flex items-center justify-center`}
              >
                <div className={`text-center p-8 rounded-2xl ${
                  isDark 
                    ? 'bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-700/30' 
                    : 'bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200'
                }`}>
                  <div className={`text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r ${currentTestimonial.color} 
                    bg-clip-text text-transparent`}>
                    {currentTestimonial.stats.metric}
                  </div>
                  <div className={`text-sm lg:text-base ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {currentTestimonial.stats.label}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Previous/Next buttons */}
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              className={`p-3 rounded-full transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-700 shadow-md'
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className={`p-3 rounded-full transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-700 shadow-md'
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex 
                    ? `w-8 h-2 rounded-full ${isDark ? 'bg-purple-500' : 'bg-purple-600'}` 
                    : `w-2 h-2 rounded-full ${isDark ? 'bg-gray-600' : 'bg-gray-400'}`
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isAutoPlaying
                  ? isDark 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-purple-600 text-white'
                  : isDark
                    ? 'bg-gray-800 text-gray-400'
                    : 'bg-gray-200 text-gray-600'
              }`}
            >
              {isAutoPlaying ? 'Auto-playing' : 'Paused'}
            </button>
          </div>
        </div>

        {/* Mini testimonials preview */}
        <div className="hidden lg:grid grid-cols-5 gap-4 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => handleDotClick(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-xl transition-all duration-300 ${
                index === currentIndex
                  ? isDark
                    ? 'bg-purple-900/30 border-2 border-purple-500'
                    : 'bg-purple-50 border-2 border-purple-500'
                  : isDark
                    ? 'bg-gray-800/30 border border-gray-700 hover:border-gray-600'
                    : 'bg-white border border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} 
                flex items-center justify-center text-white text-xs font-bold mx-auto mb-2`}>
                {testimonial.avatar}
              </div>
              <div className={`text-xs font-medium ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {testimonial.name.split(' ')[0]}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
