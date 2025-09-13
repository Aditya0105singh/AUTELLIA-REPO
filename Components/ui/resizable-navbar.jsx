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
      className={`fixed top-0 left-0 right-0 z-[99998] transition-all duration-300 ${
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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible relative"
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
    <nav className={`hidden md:flex items-center space-x-1 lg:space-x-2 overflow-visible ${className}`}>
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
      style={{ zIndex: 'auto' }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative ${className}`}
      >
        {hasDropdown ? (
          <button className="flex items-center gap-1 px-4 py-2 rounded-md font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
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
              ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
              : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}>
            {children}
          </div>
        )}
        
        {/* Active indicator */}
        {isActive && (
          <motion.div
            layoutId="activeTab"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"
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
              className="absolute top-full left-0 pt-2"
              style={{ 
                zIndex: 999999,
                position: 'absolute'
              }}
            >
              <div className="w-auto min-w-[16rem] sm:min-w-[18rem] max-w-[20rem] sm:max-w-[24rem] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl py-3 backdrop-blur-xl relative z-[99999]" style={{ zIndex: 99999 }}>
                {dropdownItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis"
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
    primary: "relative inline-flex h-11 overflow-hidden rounded-lg p-[1px] focus:outline-none",
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
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-base font-semibold text-white backdrop-blur-3xl">
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
      className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${className}`}
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
          className={`bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}
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
