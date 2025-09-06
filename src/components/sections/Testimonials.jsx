import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const defaultTestimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
    content: 'Autellia has transformed how we handle data analytics. The platform is intuitive and powerful, giving us insights we never had before.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager at InnovateX',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'The automation features have saved us hundreds of hours in manual work. The support team is also incredibly responsive and helpful.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'CEO at StartUp Vision',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    content: 'We\'ve seen a 40% increase in operational efficiency since implementing Autellia. The ROI was apparent within the first quarter.',
    rating: 4,
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Operations Director at Global Solutions',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    content: 'The platform is robust and reliable. We\'ve been able to scale our operations without adding additional headcount thanks to Autellia.',
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={cn(
            'h-5 w-5',
            star <= rating ? 'text-yellow-400' : 'text-gray-300'
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export function Testimonials({
  title = 'What our customers say',
  subtitle = 'Join thousands of satisfied customers who have transformed their business with our platform.',
  testimonials = [],
  variant = 'default',
  className,
}) {
  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  const variants = {
    default: 'bg-background',
    card: 'bg-card border border-border',
    gradient: 'bg-gradient-to-br from-primary/5 to-secondary/5',
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
    <section className={cn('py-16 md:py-24', className)}>
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
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
          {displayTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className={cn(
                'rounded-xl p-8 shadow-sm',
                variants[variant] || variants.default,
                'flex flex-col h-full',
                'transition-all duration-300 hover:shadow-md hover:-translate-y-1'
              )}
            >
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                <blockquote className="text-lg text-muted-foreground mb-6">
                  "{testimonial.content}"
                </blockquote>
              </div>
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  className="h-10 w-10 rounded-full ring-2 ring-background"
                  src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i * 7}.jpg`}
                  alt="Customer avatar"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="font-medium text-foreground">Trusted by 10,000+ businesses</p>
              <div className="flex items-center">
                <StarRating rating={5} />
                <span className="ml-2 text-sm text-muted-foreground">
                  4.9/5 from 2,000+ reviews
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
