import React from "react";
import { motion } from "framer-motion";

export function HoverEffect({ items = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <a
          key={item.title}
          href={item.link || "#"}
          target={item.link ? "_blank" : undefined}
          rel={item.link ? "noreferrer" : undefined}
          className="group relative block rounded-2xl border border-[--border] bg-[--surface] p-6 overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-[--panel] to-transparent opacity-0 group-hover:opacity-100"
          />
          <div className="relative z-10">
            <h3 className="text-lg font-semibold text-[--text-primary]">{item.title}</h3>
            {item.description && (
              <p className="mt-2 text-sm text-[--text-muted]">{item.description}</p>
            )}
            {item.link && (
              <span className="mt-4 inline-block text-sm font-medium text-[--accent]">Visit →</span>
            )}
          </div>
          <motion.div
            className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(65,105,225,0.15), transparent 40%)",
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              e.currentTarget.style.setProperty("--x", `${x}%`);
              e.currentTarget.style.setProperty("--y", `${y}%`);
            }}
          />
        </a>
      ))}
    </div>
  );
}




