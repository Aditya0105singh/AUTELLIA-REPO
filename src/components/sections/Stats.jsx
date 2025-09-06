import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const defaultStats = [
  {
    id: 1,
    value: '10,000+',
    label: 'Happy Customers',
    description: 'Businesses trust our solutions',
  },
  {
    id: 2,
    value: '24/7',
    label: 'Support',
    description: 'Dedicated customer success team',
  },
  {
    id: 3,
    value: '99.9%',
    label: 'Uptime',
    description: 'Guaranteed reliability',
  },
  {
    id: 4,
    value: '50+',
    label: 'Countries',
    description: 'Global presence',
  },
];

export function Stats({
  title = 'Trusted by businesses worldwide',
  subtitle = 'Join thousands of companies that rely on our platform to drive growth and efficiency.',
  stats = [],
  variant = 'default',
  className,
}) {
  const displayStats = stats.length > 0 ? stats : defaultStats;

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
    <section className={cn('py-16 md:py-24', variants[variant] || variants.default, className)}>
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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {displayStats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={item}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary sm:text-5xl mb-2">
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="opacity-60 hover:opacity-100 transition-opacity">
              <div className="h-12 w-32 bg-muted rounded-md" />
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
