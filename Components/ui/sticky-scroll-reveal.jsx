"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../src/lib/utils.js";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });
  
  return (
    <motion.div
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 bg-[--surface] border border-[--border]"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.4,
                }}
                className="text-2xl font-bold text-[--text-primary]"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.6,
                }}
                className="text-kg mt-10 max-w-sm text-[--text-muted]"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
            background: 'var(--accent)',
        }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md lg:block",
          contentClassName
        )}
      >
        {content.map((item, index) => (
            <motion.div
                key={item.title + index}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full"
            >
                {item.content ?? null}
            </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};