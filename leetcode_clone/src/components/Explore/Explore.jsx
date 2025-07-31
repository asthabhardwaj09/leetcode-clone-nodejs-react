import React from 'react';

export default function Explore() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="text-center max-w-xl px-4">
        <div className="flex items-center justify-center mb-4">
          {/* Icon with hover effect */}
          <div className="bg-teal-500 p-3 rounded-full shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-lg">
            <span className="text-white text-xl">🎓</span>
          </div>
        </div>

        <span className="text-teal-600 font-semibold text-xl block mb-2">
          Start Exploring
        </span>

        <p className="text-gray-600 text-base mb-4 leading-relaxed">
          Explore is a well-organized tool that helps you get the most out of
          LeetCode by providing structure to guide your progress towards the
          next step in your programming career.
        </p>

        <div>
          <button className="text-blue-600 font-medium hover:underline">
            Get Started &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
