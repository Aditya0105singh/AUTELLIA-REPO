import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const defaultClients = [
  {
    id: 1,
    name: 'TechCorp',
    logo: 'TC',
    url: '#',
  },
  {
    id: 2,
    name: 'InnoVate',
    logo: 'IV',
    url: '#',
  },
  {
    id: 3,
    name: 'Global Solutions',
    logo: 'GS',
    url: '#',
  },
  {
    id: 4,
    name: 'DataSphere',
    logo: 'DS',
    url: '#',
  },
  {
    id: 5,
    name: 'CloudNova',
    logo: 'CN',
    url: '#',
  },
];

export function Clients({
  title = 'Trusted by industry leaders',
  subtitle = 'Join thousands of businesses that trust our platform',
  clients = [],
  variant = 'default',
  className,
}) {
  const displayClients = clients.length > 0 ? clients : defaultClients;

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
    card: 'bg-card border border-border',
    gradient: 'bg-gradient-to-br from-primary/5 to-secondary/5',
  };

  return (
    <section className={cn('py-16 md:py-20', variants[variant] || variants.default, className)}>
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
          className="grid grid-cols-2 gap-8 md:grid-cols-5"
        >
          {displayClients.map((client) => (
            <motion.a
              key={client.id}
              variants={item}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center justify-center p-4 rounded-lg',
                'bg-card border border-border hover:border-primary/50',
                'transition-all duration-300 hover:-translate-y-1 hover:shadow-md',
                'h-24 sm:h-28'
              )}
              aria-label={`${client.name} website`}
            >
              {client.logo ? (
                <span className="text-2xl font-bold text-foreground">
                  {client.logo}
                </span>
              ) : (
                <div className="h-12 w-24 bg-muted rounded" />
              )}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Want to become a partner?
          </p>
          <Button variant="outline" asChild>
            <a href="/contact">
              Contact Sales
            </a>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
