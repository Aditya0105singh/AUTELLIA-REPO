import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Cta({
  title = "Ready to get started?",
  description = "Join thousands of businesses already using our platform to drive growth and efficiency.",
  primaryAction = { text: "Get Started", href: "/get-started" },
  secondaryAction = { text: "Contact Sales", href: "/contact" },
  variant = "default",
  className,
}) {
  const variants = {
    default: 'bg-card border border-border',
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    gradient: 'bg-gradient-to-r from-primary to-accent text-primary-foreground',
  };

  const textColor = {
    default: 'text-foreground',
    primary: 'text-primary-foreground',
    secondary: 'text-secondary-foreground',
    gradient: 'text-primary-foreground',
  };

  const buttonVariant = {
    default: 'default',
    primary: 'secondary',
    secondary: 'default',
    gradient: 'secondary',
  }[variant];

  const secondaryButtonVariant = {
    default: 'outline',
    primary: 'outline',
    secondary: 'outline',
    gradient: 'outline',
  }[variant];

  return (
    <section className={cn('py-16 md:py-24', className)}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            'rounded-2xl px-6 py-16 sm:p-16 text-center',
            variants[variant] || variants.default,
            'relative overflow-hidden'
          )}
        >
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
          
          <div className="relative z-10">
            <motion.h2 
              className={cn(
                'text-3xl font-bold tracking-tight sm:text-4xl mb-6',
                textColor[variant] || textColor.default
              )}
            >
              {title}
            </motion.h2>
            
            <motion.p 
              className={cn(
                'mx-auto max-w-2xl text-lg mb-8',
                variant === 'default' ? 'text-muted-foreground' : 'text-opacity-90'
              )}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button 
                size="lg" 
                variant={buttonVariant}
                asChild
                className={cn(
                  variant === 'gradient' && 'bg-background text-foreground hover:bg-background/90',
                  'transition-all duration-300 hover:scale-105 hover:shadow-lg'
                )}
              >
                <a href={primaryAction.href}>
                  {primaryAction.text}
                </a>
              </Button>
              
              {secondaryAction && (
                <Button 
                  size="lg" 
                  variant={secondaryButtonVariant}
                  asChild
                  className={cn(
                    variant !== 'default' && 'bg-transparent hover:bg-white/10',
                    'transition-all duration-300 hover:scale-105'
                  )}
                >
                  <a href={secondaryAction.href}>
                    {secondaryAction.text}
                  </a>
                </Button>
              )}
            </motion.div>
            
            <motion.div 
              className="mt-8 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="h-8 w-8 rounded-full ring-2 ring-background"
                    src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i * 5}.jpg`}
                    alt="User avatar"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className={cn(variant === 'default' ? 'text-muted-foreground' : 'text-opacity-90')}>
                  Join <span className="font-semibold">10,000+</span> businesses already growing with us
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
