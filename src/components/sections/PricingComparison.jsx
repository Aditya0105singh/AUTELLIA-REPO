import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '@/components/ui';
import { cn } from '@/lib/utils';

const defaultPlans = [
  { id: 'basic', name: 'Basic', price: 29, features: ['10 users', 'Basic support'], cta: 'Get Started' },
  { id: 'pro', name: 'Pro', price: 99, features: ['50 users', 'Priority support', 'API access'], cta: 'Start Trial', popular: true },
  { id: 'enterprise', name: 'Enterprise', price: 'Custom', features: ['Unlimited', '24/7 support', 'Custom solutions'], cta: 'Contact Us' },
];

export function PricingComparison({ title, subtitle, plans = [], className }) {
  const [billing, setBilling] = useState('monthly');
  const displayPlans = plans.length ? plans : defaultPlans;

  return (
    <section className={cn('py-16', className)}>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">{title || 'Pricing Plans'}</h2>
          <p className="text-muted-foreground">{subtitle || 'Choose the right plan for your needs'}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayPlans.map((plan) => (
            <div key={plan.id} className={cn(
              'border rounded-xl p-6',
              plan.popular ? 'border-primary shadow-lg' : 'border-border'
            )}>
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">
                {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
              </p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
