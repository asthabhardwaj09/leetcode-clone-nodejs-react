import React from 'react';

export default function Product() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row gap-12 px-6 py-12 max-w-7xl w-full justify-center items-start">
        
        {/* Left Section */}
        <div className="max-w-md text-left">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 p-2 rounded-full">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 14h.01M16 10h.01M12 18h.01M12 6h.01M4 6h16M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6" />
                </svg>
              </div>
              <div className="bg-green-500 p-2 rounded-full">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20h6M4 20h5v-2a4 4 0 00-3-3.87M9 10a4 4 0 100-8 4 4 0 000 8zm6 0a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
              </div>
              <div className="bg-yellow-400 p-2 rounded-full">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M4 5a2 2 0 012-2h12a2 2 0 012 2v2a5 5 0 01-5 5h-6a5 5 0 01-5-5V5z" />
                </svg>
              </div>
            </div>
          </div>

          <span className="text-[#1a53ff] text-xl font-semibold block mb-3">
            Questions, Community & Contests
          </span>

          <p className="text-gray-600 mb-4 leading-relaxed text-sm">
            Over 3800 questions for you to practice. Come and join one of the largest tech communities with hundreds of thousands of active users and participate in our contests to challenge yourself and earn rewards.
          </p>

          <button className="text-blue-600 font-medium hover:underline">
            View Questions &rarr;
          </button>
        </div>

        {/* Right Section */}
        <div className="max-w-md text-left">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-600 p-2 rounded-full">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5V4a1 1 0 011-1h4a1 1 0 011 1v1m5 4v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9m16 0H3" />
                </svg>
              </div>
              <div className="bg-gray-400 p-2 rounded-full">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6M9 11h6M9 15h2m4 0h.01M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
                </svg>
              </div>
            </div>
          </div>

          <span className="text-yellow-700 text-xl font-semibold block mb-3">
            Companies & Candidates
          </span>

          <p className="text-gray-600 mb-4 leading-relaxed text-sm">
            Not only does LeetCode prepare candidates for technical interviews, we also help companies identify top technical talent. From sponsoring contests to providing online assessments and training, we offer numerous services to businesses.
          </p>

          <button className="text-blue-600 font-medium hover:underline">
            Business Opportunities &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
