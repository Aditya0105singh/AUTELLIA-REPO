import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const defaultFaqs = [
  {
    id: 1,
    question: 'What is Autellia and how does it work?',
    answer: 'Autellia is an AI-powered automation platform that helps businesses streamline their operations through intelligent automation. Our platform uses advanced machine learning algorithms to analyze your business processes and automate repetitive tasks, allowing your team to focus on higher-value work.'
  },
  {
    id: 2,
    question: 'How long does it take to implement?',
    answer: 'Implementation time varies based on your specific needs and the complexity of your processes. Most of our customers are up and running within 2-4 weeks. Our team works closely with you to ensure a smooth onboarding process with minimal disruption to your operations.'
  },
  {
    id: 3,
    question: 'What kind of support do you offer?',
    answer: 'We offer comprehensive support including email, chat, and phone support during business hours. Our enterprise plans include 24/7 priority support with a dedicated account manager. We also provide extensive documentation, video tutorials, and regular training webinars.'
  },
  {
    id: 4,
    question: 'Is my data secure with Autellia?',
    answer: 'Absolutely. We take data security very seriously. All data is encrypted in transit and at rest using industry-standard encryption protocols. We are SOC 2 Type II compliant and follow strict data protection regulations including GDPR and CCPA.'
  },
  {
    id: 5,
    question: 'Can I integrate Autellia with my existing tools?',
    answer: 'Yes, Autellia offers seamless integration with hundreds of popular business applications through our API and pre-built connectors. If you don\'t see a specific integration, our team can work with you to build a custom connector for your needs.'
  },
  {
    id: 6,
    question: 'What happens if I need to cancel?',
    answer: 'You can cancel your subscription at any time. We offer flexible monthly and annual plans with no long-term contracts. When you cancel, you\'ll continue to have access to your account until the end of your current billing period.'
  }
];

const FaqItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-border/50">
      <button
        className="flex w-full items-center justify-between py-6 text-left"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-${item.id}`}
      >
        <h3 className="text-lg font-medium text-foreground">
          {item.question}
        </h3>
        <div className="ml-6 flex h-7 items-center">
          <svg
            className={cn(
              'h-6 w-6 transform transition-transform duration-200',
              isOpen ? 'rotate-180' : ''
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6">
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function Faq({
  title = 'Frequently asked questions',
  subtitle = 'Can\'t find the answer you\'re looking for? Reach out to our support team.',
  faqs = [],
  variant = 'default',
  className,
}) {
  const [openItem, setOpenItem] = useState(null);
  const displayFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  const variants = {
    default: 'bg-background',
    card: 'bg-card rounded-xl p-8 shadow-sm',
    gradient: 'bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8',
  };

  return (
    <section className={cn('py-16 md:py-24', className)} id="faq">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className={cn(
            'mx-auto max-w-3xl divide-y divide-border/50',
            variants[variant] || variants.default
          )}
        >
          {displayFaqs.map((faq) => (
            <motion.div key={faq.id} variants={item}>
              <FaqItem
                item={faq}
                isOpen={openItem === faq.id}
                onClick={() => toggleItem(faq.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="text-lg font-medium text-foreground mb-4">
            Still have questions?
          </div>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Contact Support
            </a>
            <a
              href="/docs"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              View Documentation
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
