// Utility functions for theme-aware styling
export const getThemeClasses = (isDark, darkClasses, lightClasses) => {
  return `transition-colors duration-300 ${isDark ? darkClasses : lightClasses}`;
};

export const getBgThemeClasses = (isDark, darkBg = 'bg-[--bg]', lightBg = 'bg-white') => {
  return `transition-colors duration-500 ${isDark ? darkBg : lightBg}`;
};

export const getTextThemeClasses = (isDark, darkText = 'text-[--text-primary]', lightText = 'text-gray-900') => {
  return `transition-colors duration-300 ${isDark ? darkText : lightText}`;
};

export const getMutedTextThemeClasses = (isDark, darkText = 'text-[--text-muted]', lightText = 'text-gray-600') => {
  return `transition-colors duration-300 ${isDark ? darkText : lightText}`;
};
