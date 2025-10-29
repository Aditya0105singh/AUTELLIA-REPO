import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ContentSection({
  title = 'Title',
  subtitle = 'Subtitle text goes here',
  description = 'Description text goes here. You can add more details about the feature or content.',
  image = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  imageAlt = 'Content image',
  primaryAction = { text: 'Learn More', href: '#' },
  secondaryAction,
  reverse = false,
  variant = 'default',
  className,
}) {
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
    <section className={cn('py-16 md:py-24', variants[variant] || variants.default, className)}>
      <Container>
        <div className={cn(
          'flex flex-col items-center',
          reverse ? 'lg:flex-row-reverse' : 'lg:flex-row',
          'gap-12 md:gap-16'
        )}>
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className={cn(
              'relative rounded-xl overflow-hidden',
              'aspect-video w-full',
              'shadow-lg',
              'border border-border/50',
              'group'
            )}>
              <img
                src={image}
                alt={imageAlt}
                className={cn(
                  'w-full h-full object-cover',
                  'transition-transform duration-700 group-hover:scale-105'
                )}
              />
              {/* Decorative element */}
              <div className={cn(
                'absolute inset-0',
                'bg-gradient-to-t from-foreground/20 to-transparent',
                'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              )} />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className={cn(
              'w-full lg:w-1/2',
              reverse ? 'lg:pr-8' : 'lg:pl-8',
              'flex flex-col justify-center'
            )}
          >
            <motion.div variants={item} className="mb-4">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-2 text-lg text-primary font-medium">
                  {subtitle}
                </p>
              )}
            </motion.div>
            
            <motion.div variants={item} className="prose prose-lg text-muted-foreground max-w-none">
              {typeof description === 'string' ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </motion.div>

            {(primaryAction || secondaryAction) && (
              <motion.div 
                variants={item}
                className="mt-8 flex flex-wrap gap-4"
              >
                {primaryAction && (
                  <Button asChild>
                    <a href={primaryAction.href}>
                      {primaryAction.text}
                    </a>
                  </Button>
                )}
                {secondaryAction && (
                  <Button variant="outline" asChild>
                    <a href={secondaryAction.href}>
                      {secondaryAction.text}
                    </a>
                  </Button>
                )}
              </motion.div>
            )}

            {/* Features list */}
            {Array.isArray(description) && description.length > 0 && (
              <motion.div 
                variants={item}
                className="mt-8 space-y-4"
              >
                {description.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-muted-foreground">
                      {feature}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
