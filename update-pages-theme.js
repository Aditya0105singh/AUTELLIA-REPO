// Script to update all pages with theme support
const fs = require('fs');
const path = require('path');

const pagesDir = './Pages';
const pages = [
  'AIMLIntegration.jsx',
  'AutomationConsulting.jsx', 
  'BOTDevelopment.jsx',
  'BlogKnowledgeHub.jsx',
  'CallToAction.jsx',
  'Careers.jsx',
  'CaseStudies.jsx',
  'CloudAutomation.jsx',
  'DataAnalytics.jsx',
  'Demo.jsx',
  'DocumentProcessing.jsx',
  'ManagedServices.jsx',
  'Perspectives.jsx',
  'ProcessOptimization.jsx',
  'SoftwareDevelopment.jsx',
  'Solutions.jsx'
];

const themeImport = `import { useTheme } from "../src/contexts/ThemeContext.jsx";`;
const themeHook = `  const { isDark } = useTheme();`;

const replacements = [
  // Main container
  {
    from: /className="([^"]*?)bg-\[--bg\]([^"]*?)text-\[--text-primary\]([^"]*?)"/g,
    to: 'className={`$1transition-colors duration-500 ${isDark ? \'bg-[--bg] text-[--text-primary]\' : \'bg-white text-gray-900\'} $2$3`}'
  },
  // Background classes
  {
    from: /className="([^"]*?)bg-\[--bg\]([^"]*?)"/g,
    to: 'className={`$1transition-colors duration-500 ${isDark ? \'bg-[--bg]\' : \'bg-white\'} $2`}'
  },
  // Text primary classes
  {
    from: /className="([^"]*?)text-\[--text-primary\]([^"]*?)"/g,
    to: 'className={`$1transition-colors duration-300 ${isDark ? \'text-[--text-primary]\' : \'text-gray-900\'} $2`}'
  },
  // Text muted classes
  {
    from: /className="([^"]*?)text-\[--text-muted\]([^"]*?)"/g,
    to: 'className={`$1transition-colors duration-300 ${isDark ? \'text-[--text-muted]\' : \'text-gray-600\'} $2`}'
  }
];

pages.forEach(pageFile => {
  const filePath = path.join(pagesDir, pageFile);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add theme import if not present
    if (!content.includes('useTheme')) {
      const importIndex = content.indexOf('import { motion }') || content.indexOf('import React');
      if (importIndex !== -1) {
        const lines = content.split('\n');
        let insertIndex = 0;
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].startsWith('import')) {
            insertIndex = i + 1;
          } else {
            break;
          }
        }
        lines.splice(insertIndex, 0, themeImport);
        content = lines.join('\n');
      }
    }
    
    // Add theme hook if not present
    if (!content.includes('const { isDark } = useTheme()')) {
      const functionMatch = content.match(/export default function \w+\(\) \{/);
      if (functionMatch) {
        content = content.replace(functionMatch[0], functionMatch[0] + '\n' + themeHook);
      }
    }
    
    // Apply replacements
    replacements.forEach(replacement => {
      content = content.replace(replacement.from, replacement.to);
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${pageFile}`);
  }
});

console.log('All pages updated with theme support!');
