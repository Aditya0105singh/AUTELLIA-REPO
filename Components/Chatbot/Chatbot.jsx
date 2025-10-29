import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  Mic,
  Paperclip,
  MoreVertical,
  Download,
  Trash2,
  Settings,
  Sun,
  Moon,
  Minimize2,
  Maximize2,
  User,
  Bot as BotIcon,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Check
} from 'lucide-react';
import { useTheme } from '../../src/contexts/ThemeContext.jsx';
import Message from './Message.jsx';
import TypingIndicator from './TypingIndicator.jsx';

const Chatbot = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! 👋 I\'m Autellia AI Assistant. How can I help you today?',
      timestamp: new Date(),
      quickReplies: [
        'Tell me about automation',
        'Schedule a demo',
        'Pricing information',
        'Contact support'
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-open after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async (text = inputValue) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    let response = {
      id: Date.now() + 1,
      type: 'bot',
      content: '',
      timestamp: new Date()
    };

    if (input.includes('automation') || input.includes('automate')) {
      response.content = 'We offer comprehensive automation solutions including RPA, AI/ML integration, and intelligent document processing. Would you like to learn more about a specific service?';
      response.quickReplies = ['RPA Solutions', 'AI/ML Integration', 'Document Processing', 'View All Services'];
    } else if (input.includes('demo') || input.includes('schedule')) {
      response.content = 'I\'d be happy to help you schedule a demo! You can book a time that works for you using our calendar. Would you like me to open the booking page?';
      response.buttons = [
        { text: 'Schedule Demo', action: 'schedule', variant: 'primary' },
        { text: 'Learn More First', action: 'info', variant: 'secondary' }
      ];
    } else if (input.includes('price') || input.includes('cost')) {
      response.content = 'Our pricing is customized based on your specific needs and scale. We offer flexible packages for businesses of all sizes. Would you like to speak with our sales team?';
      response.quickReplies = ['Contact Sales', 'View Case Studies', 'ROI Calculator'];
    } else if (input.includes('contact') || input.includes('support')) {
      response.content = 'You can reach our support team at support@autellia.com or call us at +1 (555) 123-4567. We\'re available Monday-Friday, 9 AM - 6 PM EST.';
    } else if (input.includes('help') || input.includes('/help')) {
      response.content = 'Here are some things I can help you with:\n\n• Learn about our automation services\n• Schedule a demo or consultation\n• Get pricing information\n• Contact support\n• View case studies and success stories\n\nYou can also use commands like /clear to clear the chat or /settings to adjust preferences.';
    } else {
      response.content = 'Thank you for your message! Our team specializes in intelligent automation solutions. How can I assist you today?';
      response.quickReplies = ['Our Services', 'Schedule Demo', 'Case Studies', 'Contact Us'];
    }

    return response;
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  const handleCommand = (command) => {
    if (command === '/clear') {
      setMessages([{
        id: Date.now(),
        type: 'bot',
        content: 'Chat cleared! How can I help you?',
        timestamp: new Date()
      }]);
    } else if (command === '/help') {
      handleSendMessage('/help');
    } else if (command === '/settings') {
      setShowSettings(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.startsWith('/')) {
        handleCommand(inputValue);
        setInputValue('');
      } else {
        handleSendMessage();
      }
    }
  };

  const copyMessage = (messageId, content) => {
    navigator.clipboard.writeText(content);
    setCopiedMessageId(messageId);
    setTimeout(() => setCopiedMessageId(null), 2000);
  };

  const exportChat = () => {
    const chatText = messages.map(msg => 
      `[${msg.timestamp.toLocaleTimeString()}] ${msg.type === 'user' ? 'You' : 'Bot'}: ${msg.content}`
    ).join('\n');
    
    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-export-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
  };

  if (!isOpen) {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-22 h-22 shadow-2xl flex items-center justify-center z-50 p-2 ${
          isDark
            ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
            : 'bg-gradient-to-r from-cyan-400 to-blue-500'
        }`}
        style={{ borderRadius: '50px' }}
        aria-label="Open chat"
      >
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c29fb92fd_logocopy.jpg"
          alt="Autellia Chat"
          className="w-full h-full object-contain rounded-full"
        />
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        height: isMinimized ? 'auto' : '550px'
      }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className={`fixed bottom-6 right-6 w-[450px] rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col ${
        isDark
          ? 'bg-gray-900 border border-gray-700'
          : 'bg-white border border-gray-200'
      }`}
      style={{ maxHeight: isMinimized ? '64px' : '700px' }}
    >
      {/* Header */}
      <div className={`px-6 py-4 flex items-center justify-between border-b ${
        isDark 
          ? 'bg-gradient-to-r from-cyan-600 to-blue-700 border-gray-700' 
          : 'bg-gradient-to-r from-cyan-500 to-blue-600 border-gray-200'
      }`}>
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c29fb92fd_logocopy.jpg"
              alt="Autellia Logo"
              className="w-12 h-12 object-contain rounded-full bg-white/10 backdrop-blur-sm p-1"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-base">Autellia AI Assistant</h3>
            <p className="text-white/80 text-xs">Online • Typically replies instantly</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label={isMinimized ? "Maximize" : "Minimize"}
          >
            {isMinimized ? <Maximize2 className="w-10 h-10" /> : <Minimize2 className="w-10 h-10"/>}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Close chat"
          >
            <X className="w-10 h-10" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages Area */}
          <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${
            isDark ? 'bg-gray-900' : 'bg-gray-50'
          }`} style={{ maxHeight: '520px' }}>
            <AnimatePresence>
              {messages.map((message, index) => (
                <Message 
                  key={message.id} 
                  message={message} 
                  isDark={isDark}
                  onQuickReply={handleQuickReply}
                  onCopy={copyMessage}
                  isCopied={copiedMessageId === message.id}
                />
              ))}
            </AnimatePresence>
            
            {isTyping && <TypingIndicator isDark={isDark} />}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className={`p-4 border-t ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <div className={`flex items-end gap-2 p-2 rounded-xl ${
              isDark ? 'bg-gray-900' : 'bg-gray-100'
            }`}>
              <button
                className={`p-2 rounded-lg transition-colors ${
                  isDark ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-200 text-gray-600'
                }`}
                aria-label="Attach file"
              >
                <Paperclip className="w-12 h-12" />
              </button>
              
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                rows={1}
                className={`flex-1 bg-transparent border-none outline-none resize-none ${
                  isDark ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'
                }`}
                style={{ maxHeight: '100px' }}
              />
              
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className={`p-2 rounded-lg transition-all ${
                  inputValue.trim()
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg'
                    : isDark ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'
                }`}
                aria-label="Send message"
              >
                <Send className="w-13 h-13" />
              </button>
            </div>
            
            <div className="flex items-center justify-between mt-2 px-2">
              <div className="flex gap-2">
                <button
                  onClick={exportChat}
                  className={`text-xs flex items-center gap-1 ${
                    isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'
                  }`}
                >
                  <Download className="w-8 h-8" />
                  Export
                </button>
                <button
                  onClick={() => handleCommand('/clear')}
                  className={`text-xs flex items-center gap-1 ${
                    isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'
                  }`}
                >
                  <Trash2 className="w-8 h-8" />
                  Clear
                </button>
              </div>
              <button
                onClick={toggleTheme}
                className={`text-xs flex items-center gap-1 ${
                  isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'
                }`}
              >
                {isDark ? <Sun className="w-8 h-8" /> : <Moon className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Chatbot;

