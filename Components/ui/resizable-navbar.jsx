"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../src/utils/index.js";

export const Navbar = ({ children, className = "" }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[--surface]/95 backdrop-blur-xl border-b border-[--border] shadow-lg"
          : "bg-[--surface]/80 backdrop-blur-lg border-b border-[--border]"
      } ${className}`}
    >
      <motion.div
        animate={{
          height: isScrolled ? "64px" : "80px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {children}
      </motion.div>
    </motion.header>
  );
};

export const NavBody = ({ children, className = "" }) => {
  return (
    <div className={`flex justify-between items-center h-full ${className}`}>
      {children}
    </div>
  );
};

export const NavbarLogo = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className={`flex items-center space-x-3 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ children, className = "" }) => {
  return (
    <nav className={`hidden md:flex items-center space-x-2 ${className}`}>
      {children}
    </nav>
  );
};

export const NavItem = ({ 
  children, 
  hasDropdown = false, 
  dropdownItems = [], 
  isActive = false,
  className = "" 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative ${className}`}
      >
        {hasDropdown ? (
          <button className="flex items-center gap-1 px-4 py-2 rounded-md font-semibold text-[--text-muted] hover:text-[--text-primary] hover:bg-[--panel] transition-all duration-200">
            {children}
            <motion.div
              animate={{ rotate: isHovered ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
        ) : (
          <div className={`px-4 py-2 rounded-md font-semibold transition-all duration-200 ${
            isActive
              ? "bg-[--panel] text-[--text-primary]"
              : "text-[--text-muted] hover:text-[--text-primary] hover:bg-[--panel]"
          }`}>
            {children}
          </div>
        )}
        
        {/* Active indicator */}
        {isActive && (
          <motion.div
            layoutId="activeTab"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[--accent] rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.div>

      {/* Dropdown */}
      {hasDropdown && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-[9999]"
            >
              <div className="w-72 bg-[--panel] border border-[--border] rounded-lg shadow-2xl py-2 backdrop-blur-xl">
                {dropdownItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ backgroundColor: "var(--surface)" }}
                    className="px-5 py-3 text-sm font-medium text-[--text-muted] hover:text-[--accent] transition-colors duration-200 cursor-pointer"
                  >
                    {typeof item === 'object' && item.title ? (
                      <Link to={createPageUrl(item.path)} className="block w-full text-left">
                        {item.title}
                      </Link>
                    ) : (
                      item
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export const NavbarButton = ({ 
  children, 
  variant = "primary", 
  className = "",
  onClick,
  ...props 
}) => {
  const baseClasses = "px-4 py-2 rounded-md font-semibold transition-all duration-200 cursor-pointer";
  
  const variants = {
    primary: "relative inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:outline-none",
    secondary: "text-[--text-muted] hover:text-[--text-primary] hover:bg-[--panel]",
  };

  if (variant === "primary") {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${variants[variant]} ${className}`}
        onClick={onClick}
        {...props}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4169E1_0%,#161D2E_50%,#4169E1_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-[--surface] px-4 py-2 text-sm font-semibold text-[--text-primary] backdrop-blur-3xl">
          {children}
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const MobileNav = ({ children, className = "" }) => {
  return (
    <div className={`md:hidden ${className}`}>
      {children}
    </div>
  );
};

export const MobileNavHeader = ({ children, className = "" }) => {
  return (
    <div className={`flex justify-between items-center h-16 px-4 ${className}`}>
      {children}
    </div>
  );
};

export const MobileNavToggle = ({ isOpen, onClick, className = "" }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`text-[--text-muted] hover:text-[--text-primary] transition-colors ${className}`}
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <X className="w-7 h-7" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Menu className="w-7 h-7" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export const MobileNavMenu = ({ isOpen, onClose, children, className = "" }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`bg-[--surface] border-t border-[--border] overflow-hidden ${className}`}
        >
          <motion.nav
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            exit={{ y: -20 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="flex flex-col space-y-1 p-4"
          >
            {children}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
