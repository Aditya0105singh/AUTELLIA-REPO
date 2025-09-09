import React from 'react';
import ExploreSolutionModal from './ExploreSolutionModal';
import { useTheme } from '../../src/contexts/ThemeContext';

const ExploreSolutionExample = () => {
  const { isDark } = useTheme();

  return (
    <div className="space-y-8 p-8">
      <h2 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
        isDark ? 'text-[--text-primary]' : 'text-gray-900'
      }`}>
        Explore Solution Modal Examples
      </h2>

      {/* Hero Section Integration */}
      <div className={`p-8 rounded-2xl transition-colors duration-500 ${
        isDark ? 'bg-[--surface] border border-[--border]' : 'bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200'
      }`}>
        <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
          isDark ? 'text-[--text-primary]' : 'text-gray-900'
        }`}>
          Hero Section Integration
        </h3>
        <p className={`mb-6 transition-colors duration-300 ${
          isDark ? 'text-[--text-muted]' : 'text-gray-600'
        }`}>
          Perfect for hero sections where you want users to take action immediately.
        </p>
        <ExploreSolutionModal 
          triggerText="Get Started Today" 
          triggerClassName="text-lg px-8 py-4"
        />
      </div>

      {/* Services Section Integration */}
      <div className={`p-8 rounded-2xl transition-colors duration-500 ${
        isDark ? 'bg-[--surface] border border-[--border]' : 'bg-white border border-gray-200'
      }`}>
        <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
          isDark ? 'text-[--text-primary]' : 'text-gray-900'
        }`}>
          Services Section Integration
        </h3>
        <p className={`mb-6 transition-colors duration-300 ${
          isDark ? 'text-[--text-muted]' : 'text-gray-600'
        }`}>
          Great for service cards where users want to learn more about specific solutions.
        </p>
        <div className="flex flex-wrap gap-4">
          <ExploreSolutionModal 
            triggerText="Explore Solutions" 
            triggerClassName="px-6 py-3"
          />
          <ExploreSolutionModal 
            triggerText="Request Consultation" 
            triggerClassName="px-6 py-3 bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
          />
        </div>
      </div>

      {/* Footer Integration */}
      <div className={`p-8 rounded-2xl transition-colors duration-500 ${
        isDark ? 'bg-[--panel] border border-[--border]' : 'bg-gray-100 border border-gray-200'
      }`}>
        <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
          isDark ? 'text-[--text-primary]' : 'text-gray-900'
        }`}>
          Footer/CTA Section Integration
        </h3>
        <p className={`mb-6 transition-colors duration-300 ${
          isDark ? 'text-[--text-muted]' : 'text-gray-600'
        }`}>
          Ideal for call-to-action sections at the bottom of pages.
        </p>
        <ExploreSolutionModal 
          triggerText="Start Your Project" 
          triggerClassName="w-full sm:w-auto px-8 py-4 text-lg"
        />
      </div>

      {/* Integration Instructions */}
      <div className={`p-6 rounded-xl border-l-4 border-purple-500 transition-colors duration-500 ${
        isDark ? 'bg-[--surface]' : 'bg-purple-50'
      }`}>
        <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
          isDark ? 'text-[--text-primary]' : 'text-gray-900'
        }`}>
          How to Use in Your Pages:
        </h4>
        <div className={`text-sm space-y-2 transition-colors duration-300 ${
          isDark ? 'text-[--text-muted]' : 'text-gray-700'
        }`}>
          <p>1. Import: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">import ExploreSolutionModal from './Components/ui/ExploreSolutionModal';</code></p>
          <p>2. Use anywhere: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">&lt;ExploreSolutionModal /&gt;</code></p>
          <p>3. Customize text: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">triggerText="Your Custom Text"</code></p>
          <p>4. Custom styling: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">triggerClassName="your-custom-classes"</code></p>
        </div>
      </div>
    </div>
  );
};

export default ExploreSolutionExample;
