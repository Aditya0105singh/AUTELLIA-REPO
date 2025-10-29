import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const defaultPlans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small teams getting started',
    price: 29,
    billing: 'per month',
    features: [
      'Up to 10 users',
      'Basic analytics',
      'Email support',
      'API access',
      '1,000 requests/month',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing businesses',
    price: 99,
    billing: 'per month',
    features: [
      'Up to 50 users',
      'Advanced analytics',
      'Priority email & chat support',
      'API access',
      '10,000 requests/month',
      'Custom integrations',
      'Basic reporting',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    billing: 'custom billing',
    features: [
      'Unlimited users',
      'Advanced analytics',
      '24/7 dedicated support',
      'API access',
      'Unlimited requests',
      'Custom integrations',
      'Advanced reporting',
      'SLA & dedicated account manager',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const BillingToggle = ({ billingCycle, setBillingCycle }) => {
  return (
    <div className="flex items-center justify-center mb-12">
      <span className={cn(
        'mr-4 text-sm font-medium',
        billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground'
      )}>
        Monthly
      </span>
      <button
        type="button"
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary/10"
        onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')}
      >
        <span className="sr-only">Toggle billing cycle</span>
        <span
          className={cn(
            'inline-block h-4 w-4 transform rounded-full bg-primary transition',
            billingCycle === 'monthly' ? 'translate-x-1' : 'translate-x-6'
          )}
        />
      </button>
      <span className={cn(
        'ml-4 text-sm font-medium',
        billingCycle === 'annually' ? 'text-foreground' : 'text-muted-foreground'
      )}>
        Annually <span className="text-primary">(Save 20%)</span>
      </span>
    </div>
  );
};

export function Pricing({
  title = 'Simple, transparent pricing',
  subtitle = 'Choose the perfect plan for your business needs',
  plans = [],
  showBillingToggle = true,
  variant = 'default',
  className,
}) {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const displayPlans = plans.length > 0 ? plans : defaultPlans;

  const variants = {
    default: 'border border-border',
    card: 'bg-card shadow-sm',
    elevated: 'bg-card shadow-lg',
  };

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

  return (
    <section className={cn('py-16 md:py-24', className)} id="pricing">
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

        {showBillingToggle && (
          <BillingToggle 
            billingCycle={billingCycle} 
            setBillingCycle={setBillingCycle} 
          />
        )}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className={cn(
            'grid gap-8',
            displayPlans.length === 1 ? 'max-w-2xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'
          )}
        >
          {displayPlans.map((plan) => {
            const isPopular = plan.popular;
            const displayPrice = plan.price === 'Custom' 
              ? 'Custom' 
              : billingCycle === 'annually' 
                ? `$${Math.round(plan.price * 0.8 * 12)}` 
                : `$${plan.price}`;
            
            const displayBilling = plan.price === 'Custom' 
              ? plan.billing 
              : billingCycle === 'annually' 
                ? 'per year (billed annually)' 
                : plan.billing;

            return (
              <motion.div
                key={plan.id}
                variants={item}
                className={cn(
                  'relative rounded-2xl p-8',
                  variants[variant] || variants.default,
                  isPopular && 'ring-2 ring-primary',
                  'flex flex-col h-full',
                  'transition-all duration-300 hover:shadow-lg'
                )}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                  <p className="mt-2 text-muted-foreground">{plan.description}</p>
                  
                  <div className="mt-6">
                    <p className="text-4xl font-bold tracking-tight text-foreground">
                      {displayPrice}
                      {plan.price !== 'Custom' && (
                        <span className="text-base font-normal text-muted-foreground">
                          /{displayBilling.split(' ')[0]}
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {displayBilling}
                    </p>
                  </div>
                  
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-10">
                  <Button
                    size="lg"
                    className={cn(
                      'w-full',
                      isPopular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-secondary hover:bg-secondary/80'
                    )}
                    asChild
                  >
                    <a href={plan.cta === 'Contact Sales' ? '/contact' : '/signup'}>
                      {plan.cta}
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Need a custom solution?{' '}
            <a href="/contact" className="text-primary hover:underline">
              Contact our sales team
            </a>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
