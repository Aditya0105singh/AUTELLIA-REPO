import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export function Newsletter({
  title = 'Stay Updated',
  subtitle = 'Subscribe to our newsletter for the latest updates, news, and product offers.',
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  successMessage = 'Thank you for subscribing!',
  variant = 'default',
  className,
}) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setEmail('');
      setIsSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const variants = {
    default: 'bg-card border border-border',
    primary: 'bg-primary text-primary-foreground',
    gradient: 'bg-gradient-to-r from-primary to-accent text-primary-foreground',
  };

  const textColor = {
    default: 'text-foreground',
    primary: 'text-primary-foreground',
    gradient: 'text-primary-foreground',
  };

  const inputVariant = {
    default: 'bg-background',
    primary: 'bg-white/10 border-white/20 text-white placeholder-white/80',
    gradient: 'bg-white/10 border-white/20 text-white placeholder-white/80',
  };

  return (
    <section className={cn('py-16 md:py-20', className)}>
      <Container>
        <div className={cn(
          'rounded-2xl px-6 py-12 md:p-12',
          variants[variant] || variants.default,
          'relative overflow-hidden'
        )}>
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          
          <div className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className={cn(
                'text-2xl md:text-3xl font-bold tracking-tight mb-4',
                textColor[variant] || textColor.default
              )}>
                {title}
              </h2>
              <p className={cn(
                'text-lg mb-8 max-w-2xl mx-auto',
                variant === 'default' ? 'text-muted-foreground' : 'text-opacity-90'
              )}>
                {subtitle}
              </p>
              
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    'inline-flex items-center px-4 py-3 rounded-md',
                    variant === 'default' ? 'bg-green-50 text-green-800' : 'bg-white/20 text-white'
                  )}
                >
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {successMessage}
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <div className="flex-1">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={placeholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={cn(
                        'w-full',
                        variant !== 'default' && inputVariant[variant]
                      )}
                      required
                    />
                    {error && (
                      <p className="mt-2 text-sm text-red-500 text-left">
                        {error}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      'whitespace-nowrap',
                      variant === 'default' 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'bg-white text-foreground hover:bg-white/90'
                    )}
                  >
                    {isSubmitting ? 'Subscribing...' : buttonText}
                  </Button>
                </form>
              )}
              
              <p className={cn(
                'mt-4 text-sm',
                variant === 'default' ? 'text-muted-foreground' : 'text-opacity-80'
              )}>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
