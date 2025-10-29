import React from 'react';
import { cn } from '../../src/lib/utils';
import { ArrowRight } from 'lucide-react';

const ExploreSolutionModal = ({ triggerText = "Explore Solutions", triggerClassName = "" }) => {
  const handleCalRedirect = () => {
    console.log('Redirecting to Cal.com');
    // Use location.href for better mobile compatibility
    window.location.href = 'https://cal.com/autellia-technology-43lknv';
  };

  return (
    <button
      onClick={handleCalRedirect}
      onTouchEnd={handleCalRedirect}
      className={cn(
        "group relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-6 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-indigo-700 transform hover:-translate-y-0.5",
        triggerClassName
      )}
    >
      <span className="relative z-10 flex items-center justify-center gap-3">
        {triggerText}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default ExploreSolutionModal;
