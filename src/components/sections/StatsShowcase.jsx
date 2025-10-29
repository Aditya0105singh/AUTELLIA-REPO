import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';

const defaultStats = [
  { value: '10,000+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '50+', label: 'Countries' },
  { value: '24/7', label: 'Support' },
];

export function StatsShowcase({ stats = [], className }) {
  const displayStats = stats.length ? stats : defaultStats;
  
  return (
    <section className={cn('py-16 bg-muted/20', className)}>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {displayStats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="mt-2 text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
