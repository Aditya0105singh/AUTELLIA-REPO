import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const defaultMilestones = [
  {
    id: 1,
    year: '2023',
    title: 'Series B Funding',
    description: 'Raised $50M to accelerate product development and expand globally.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125h20.25c.621 0 1.125.504 1.125 1.125v17.25c0 .621-.504 1.125-1.125 1.125H4.125c-.621 0-1.125-.504-1.125-1.125V6z" />
      </svg>
    ),
  },
  {
    id: 2,
    year: '2022',
    title: 'Product Launch v2.0',
    description: 'Introduced advanced AI features and improved user experience.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    id: 3,
    year: '2021',
    title: 'Global Expansion',
    description: 'Expanded operations to Europe and Asia-Pacific regions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    id: 4,
    year: '2020',
    title: 'Series A Funding',
    description: 'Secured $10M in Series A funding to scale operations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 5,
    year: '2019',
    title: 'Company Founded',
    description: 'Autellia was founded with a vision to revolutionize business automation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009 3.05M9 15.38a6 6 0 01-5.85-7.38 14.98 14.98 0 014.34-7.61 14.98 14.98 0 014.33 7.61A6 6 0 019 15.38z" />
      </svg>
    ),
  },
];

export function Timeline({
  title = 'Our Journey',
  subtitle = 'Key milestones in our company history',
  milestones = [],
  variant = 'default',
  className,
}) {
  const displayMilestones = milestones.length > 0 ? milestones : defaultMilestones;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const variants = {
    default: 'bg-background',
    card: 'bg-card border border-border rounded-xl',
    gradient: 'bg-gradient-to-br from-primary/5 to-secondary/5',
  };

  return (
    <section className={cn('py-16 md:py-24', variants[variant] || variants.default, className)} id="timeline">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-0.5 h-full bg-border -translate-x-1/2" />
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {displayMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                variants={item}
                className={cn(
                  'relative pl-8 pr-6 sm:pl-0 sm:pr-0 sm:flex sm:items-center',
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse',
                  'group'
                )}
              >
                {/* Year */}
                <div className={cn(
                  'sm:w-1/2',
                  index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12',
                )}>
                  <div className="text-2xl font-bold text-primary">
                    {milestone.year}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background flex items-center justify-center z-10">
                  <div className="w-2 h-2 bg-background rounded-full" />
                </div>

                {/* Milestone card */}
                <div className={cn(
                  'mt-4 sm:mt-0 sm:w-1/2',
                  index % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12',
                  'relative'
                )}>
                  <div className={cn(
                    'p-6 rounded-xl bg-card border border-border',
                    'transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1',
                    'relative z-0 overflow-hidden'
                  )}>
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-16 h-16 -mr-6 -mt-6 bg-primary/10 rounded-full -z-10" />
                    
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                      {milestone.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
