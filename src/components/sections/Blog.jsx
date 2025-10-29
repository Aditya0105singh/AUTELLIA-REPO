import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const defaultPosts = [
  {
    id: 1,
    title: 'The Future of AI in Business Automation',
    excerpt: 'Explore how artificial intelligence is transforming business processes and what it means for the future of work.',
    date: 'May 15, 2023',
    readTime: '5 min read',
    category: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    slug: 'future-of-ai-in-business-automation',
  },
  {
    id: 2,
    title: '10 Ways to Improve Your Data Security in 2023',
    excerpt: 'Essential security practices every business should implement to protect sensitive data and maintain compliance.',
    date: 'April 28, 2023',
    readTime: '7 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    slug: 'improve-data-security-2023',
  },
  {
    id: 3,
    title: 'Getting Started with Cloud-Native Development',
    excerpt: 'A comprehensive guide to building scalable and resilient applications using cloud-native technologies.',
    date: 'April 12, 2023',
    readTime: '8 min read',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    slug: 'getting-started-cloud-native',
  },
];

export function Blog({
  title = 'Latest Insights',
  subtitle = 'Stay updated with our latest articles and industry news',
  posts = [],
  showViewAll = true,
  variant = 'default',
  className,
}) {
  const displayPosts = posts.length > 0 ? posts : defaultPosts;

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
    card: 'bg-card',
    gradient: 'bg-gradient-to-br from-primary/5 to-secondary/5',
  };

  return (
    <section className={cn('py-16 md:py-24', variants[variant] || variants.default, className)} id="blog">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
            Blog
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {displayPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={item}
              className={cn(
                'group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm',
                'transition-all duration-300 hover:shadow-md hover:-translate-y-1'
              )}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 self-start">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                  <a href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </a>
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 group"
                  >
                    Read more
                    <svg
                      className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {showViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 text-center"
          >
            <Button variant="outline" asChild>
              <a href="/blog">
                View All Articles
              </a>
            </Button>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
