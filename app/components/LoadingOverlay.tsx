import React from 'react';

const LoadingOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Cute Loading Animation */}
        <div className="mb-8">
          <svg 
            className="w-24 h-24 mx-auto animate-bounce" 
            viewBox="0 0 100 100" 
            fill="none" 
            stroke="currentColor"
            strokeWidth="4"
          >
            {/* Cute Robot Face */}
            <rect x="25" y="20" width="50" height="60" rx="8" className="text-orange-500"/>
            <circle cx="40" cy="45" r="5" className="text-blue-500 animate-pulse"/>
            <circle cx="60" cy="45" r="5" className="text-blue-500 animate-pulse"/>
            <path d="M35 65q15 10 30 0" className="text-green-500"/>
            {/* Antenna */}
            <path d="M50 20v-10" className="text-orange-500"/>
            <circle cx="50" cy="5" r="3" className="text-orange-500 animate-ping"/>
          </svg>
        </div>
        <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
          Loading BizGuard AI...
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Preparing your experience
        </p>
      </div>
    </div>
  );
};

export default LoadingOverlay; 