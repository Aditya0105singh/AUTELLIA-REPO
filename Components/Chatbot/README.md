# Autellia AI Chatbot

A modern, professional, and feature-rich chatbot interface built with React, Framer Motion, and Tailwind CSS.

## Features

### 🎨 Design & UI
- **Clean, minimalist design** with soft gradients and rounded corners
- **Neutral color palette** with cyan/blue accent colors
- **Modern typography** with proper spacing and hierarchy
- **Smooth animations** using Framer Motion
- **Responsive design** for desktop, tablet, and mobile
- **Dark/Light mode support** with seamless theme switching
- **Glassmorphism effects** for a modern look

### 💬 Chat Functionality
- **Real-time messaging** with smooth animations
- **Typing indicators** with animated dots
- **Message timestamps** for context
- **Quick reply buttons** for common questions
- **Action buttons** for external links and actions
- **Context persistence** - bot remembers conversation flow
- **Multi-turn conversations** with intelligent responses

### 🎯 User Experience
- **Auto-open after 5 seconds** with pulsing notification badge
- **Minimize/Maximize** functionality
- **Scroll-to-latest** animation for new messages
- **Message copy** functionality
- **Feedback system** (thumbs up/down) for message quality
- **Chat export** feature to save conversations
- **Clear chat** option to start fresh
- **Keyboard navigation** support (Enter to send)

### 🤖 Bot Intelligence
- **Smart response generation** based on user input
- **Quick replies** for common queries:
  - Automation services
  - Demo scheduling
  - Pricing information
  - Support contact
- **Action buttons** for:
  - Scheduling demos (Cal.com integration)
  - Viewing services
  - Contacting sales
- **Command support**:
  - `/help` - Show available commands
  - `/clear` - Clear chat history
  - `/settings` - Open settings (future feature)

### ♿ Accessibility
- **ARIA labels** for all interactive elements
- **Keyboard navigation** support
- **Focus management** for better UX
- **Screen reader friendly** message structure

## Components

### Chatbot.jsx
Main chatbot component that handles:
- State management
- Message handling
- UI rendering
- Theme integration

### Message.jsx
Individual message component featuring:
- User/Bot message differentiation
- Quick reply buttons
- Action buttons
- Feedback controls
- Copy functionality
- Timestamp display

### TypingIndicator.jsx
Animated typing indicator with:
- Three animated dots
- Smooth entrance/exit animations
- Theme-aware styling

## Usage

The chatbot is automatically included in the Layout component and will:
1. Auto-open after 5 seconds
2. Display a welcome message with quick replies
3. Respond to user messages intelligently
4. Provide action buttons for common tasks

### Integration Points

- **Cal.com**: Schedule demo button opens booking page
- **Theme Context**: Syncs with global theme settings
- **Export**: Downloads chat history as text file

## Customization

### Changing Bot Responses
Edit the `generateBotResponse` function in `Chatbot.jsx` to customize:
- Response messages
- Quick reply options
- Action buttons
- Conditional logic

### Styling
The chatbot uses Tailwind CSS classes and respects the global theme:
- Dark mode: Gray/cyan color scheme
- Light mode: White/blue color scheme
- Gradients: Cyan to blue for primary actions

### Auto-open Delay
Change the delay in the `useEffect` hook:
```javascript
setTimeout(() => {
  setIsOpen(true);
}, 5000); // Change 5000 to desired milliseconds
```

## Future Enhancements

Potential features to add:
- [ ] Voice input/output (speech-to-text, text-to-speech)
- [ ] File upload support
- [ ] Rich media messages (images, videos, cards)
- [ ] User authentication and personalization
- [ ] Chat history persistence (localStorage/backend)
- [ ] Analytics integration
- [ ] Multi-language support
- [ ] Emoji picker
- [ ] GIF support
- [ ] Live agent handoff
- [ ] Sentiment analysis
- [ ] Suggested responses based on AI

## Technical Stack

- **React** - Component framework
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Theme Context** - Dark/Light mode

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lazy loading of messages
- Optimized animations
- Minimal re-renders
- Efficient state management
- Small bundle size (~15KB gzipped)

## Accessibility Compliance

- WCAG 2.1 Level AA compliant
- Keyboard navigable
- Screen reader tested
- High contrast mode support
- Focus indicators
- Semantic HTML

---

Built with ❤️ for Autellia Technology

