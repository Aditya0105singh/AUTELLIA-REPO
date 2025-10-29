import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bot as BotIcon,} from 'lucide-react';

const Message = ({ message, isDark, onQuickReply, onCopy, isCopied }) => {
  const [feedback, setFeedback] = useState(null);
  const isBot = message.type === 'bot';

  const handleFeedback = (type) => {
    setFeedback(type);
    // Here you could send feedback to analytics
    console.log(`Feedback for message ${message.id}: ${type}`);
  };

  const handleButtonClick = (action) => {
    if (action === 'schedule') {
      window.open('https://cal.com/autellia-technology-43lknv', '_blank');
    } else if (action === 'info') {
      onQuickReply('Tell me more about your services');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex gap-3 ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      {isBot && (
        <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10 backdrop-blur-sm p-0.5">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c29fb92fd_logocopy.jpg"
            alt="Autellia Logo"
            className="w-full h-full object-contain rounded-full"
          />
        </div>
      )}

      <div className={`flex flex-col gap-2 max-w-[75%] ${!isBot && 'items-end'}`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isBot
  ? isDark
    ? 'bg-gray-800 text-gray-100'
    : 'bg-white text-gray-900'
  : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium'



          }`}
        >
         <p className={`text-sm leading-relaxed whitespace-pre-wrap ${!isBot ? 'text-white' : ''}`}>
  {message.content}
</p>

        </div>

        {/* Quick Replies */}
        {message.quickReplies && message.quickReplies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {message.quickReplies.map((reply, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onQuickReply(reply)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isDark
                    ? 'bg-gray-800 text-cyan-400 border border-gray-700 hover:bg-gray-700'
                    : 'bg-white text-cyan-600 border border-cyan-200 hover:bg-cyan-50 shadow-sm'
                }`}
              >
                {reply}
              </motion.button>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        {message.buttons && message.buttons.length > 0 && (
          <div className="flex flex-col gap-2 mt-1 w-full">
            {message.buttons.map((button, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleButtonClick(button.action)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  button.variant === 'primary'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg'
                    : isDark
                    ? 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 shadow-sm'
                }`}
              >
                {button.text}
                
              </motion.button>
            ))}
          </div>
        )}

        {/* Message Footer */}
        <div className="flex items-center gap-2 px-1">
          <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>

          {isBot && (
            <div className="flex items-center gap-1">
              <button
                onClick={() => onCopy(message.id, message.content)}
                className={`p-1 rounded transition-colors ${
                  isDark ? 'hover:bg-gray-800 text-gray-500' : 'hover:bg-gray-100 text-gray-400'
                }`}
                aria-label="Copy message"
              >
               
              </button>

              <button
                onClick={() => handleFeedback('up')}
                className={`p-1 rounded transition-colors ${
                  feedback === 'up'
                    ? 'text-green-500'
                    : isDark
                    ? 'hover:bg-gray-800 text-gray-500'
                    : 'hover:bg-gray-100 text-gray-400'
                }`}
                aria-label="Helpful"
              >
            
              </button>

              <button
                onClick={() => handleFeedback('down')}
                className={`p-1 rounded transition-colors ${
                  feedback === 'down'
                    ? 'text-red-500'
                    : isDark
                    ? 'hover:bg-gray-800 text-gray-500'
                    : 'hover:bg-gray-100 text-gray-400'
                }`}
                aria-label="Not helpful"
              >
               
              </button>
            </div>
          )}
        </div>
      </div>

      {!isBot && (
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isDark ? 'bg-gray-700' : 'bg-gray-300'
        }`}>
          <User className={`w-10 h-10 ${isDark ? 'text-white' : 'text-white'}`} />
        </div>
      )}
    </motion.div>
  );
};

export default Message;

