import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference, default to light
    const savedTheme = localStorage.getItem('autellia-theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light'; // Default to light theme
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove both classes first
    root.classList.remove('light', 'dark');
    
    // Add the current theme class
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem('autellia-theme', theme);
    
    // Update CSS custom properties for smooth transitions
    if (theme === 'light') {
      root.style.setProperty('--theme-bg', '#FFFFFF');
      root.style.setProperty('--theme-surface', '#F9FAFB');
      root.style.setProperty('--theme-panel', '#F3F4F6');
      root.style.setProperty('--theme-text-primary', '#1A1A1A');
      root.style.setProperty('--theme-text-secondary', '#4B5563');
      root.style.setProperty('--theme-text-muted', '#6B7280');
      root.style.setProperty('--theme-border', '#E5E7EB');
    } else {
      root.style.setProperty('--theme-bg', '#0A0F19');
      root.style.setProperty('--theme-surface', '#1A2332');
      root.style.setProperty('--theme-panel', '#242B3D');
      root.style.setProperty('--theme-text-primary', '#F0F4F8');
      root.style.setProperty('--theme-text-secondary', '#B8C5D1');
      root.style.setProperty('--theme-text-muted', '#94A3B8');
      root.style.setProperty('--theme-border', 'rgba(255,255,255,0.12)');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
