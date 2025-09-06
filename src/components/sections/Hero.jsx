import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Simple utility function
const cn = (...classes) => classes.filter(Boolean).join(' ');

export function Hero({
  title = "Transform Your Business with AI & Automation",
  subtitle = "Accelerate growth, reduce costs, and unlock new opportunities with our cutting-edge AI and automation solutions.",
  primaryCta = { text: "Get Started", href: "/get-started" },
  secondaryCta = { text: "Learn More", href: "/solutions" },
  background = "default",
  className,
}) {
  const containerRef = useRef(null);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const backgroundClasses = {
    default: 'bg-gradient-to-br from-background via-background to-muted/10',
    gradient: 'bg-gradient-to-br from-primary/5 via-background to-secondary/5',
    dark: 'bg-background',
    pattern: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background',
  };

  return (
    <section 
      ref={containerRef}
      className={cn(
        'relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28',
        backgroundClasses[background] || backgroundClasses.default,
        className
      )}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -z-10 -translate-x-1/2 sm:top-0 sm:h-[72rem] sm:w-[72rem] sm:-translate-x-[30rem] md:-translate-x-[25rem] lg:-translate-x-[15rem] xl:-translate-x-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />
          <svg
            viewBox="0 0 1108 632"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 w-[69.25rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle cx={554} cy={512} r={512} fill="url(#gradient-circle)" fillOpacity="0.1" />
            <defs>
              <radialGradient id="gradient-circle">
                <stop stopColor="hsl(var(--primary))" />
                <stop offset={1} stopColor="hsl(var(--accent))" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={item}>
            <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/10">
              Now with AI Copilot
              <span className="ml-2 h-1.5 w-1.5 rounded-full bg-primary/50 animate-pulse" />
            </span>
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
          >
            {title}
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            variants={item}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Button size="lg" asChild>
              <a href={primaryCta.href}>
                {primaryCta.text}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={secondaryCta.href}>
                {secondaryCta.text}
                <span className="ml-1.5" aria-hidden="true">→</span>
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            variants={item}
            className="mt-16 flex items-center justify-center gap-x-6"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  className="h-10 w-10 rounded-full ring-2 ring-background"
                  src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i * 10}.jpg`}
                  alt="User avatar"
                />
              ))}
            </div>
            <div className="text-sm leading-6">
              <p className="font-semibold text-foreground">Trusted by 10,000+ businesses</p>
              <p className="text-muted-foreground">Join our growing community</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Decorative elements */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1)"
            fillOpacity="0.2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--primary))" />
              <stop offset={1} stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
