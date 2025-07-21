import React from 'react';

export default function Prenium() {
  return (
    <div className="px-6 py-10 bg-blue-50">
      {/* Heading Section */}
      <div className="mb-10 text-center">
        <h1 className="text-6xl font-extrabold font-mono  text-black mb-2">Premium</h1>
        <p className="text-gray-600 text-sm mb-5">
          Get started with a LeetCode Subscription that works for you.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 justify-center mb-16">
        {/* Yearly Plan Card - Left */}
        <div className="relative bg-orange-50 border border-yellow-300 rounded-2xl p-6 w-[440px] h-[360px] text-black shadow-md">
          <span className="absolute top-4 right-4 bg-yellow-200 text-yellow-800 font-semibold px-2 py-1 text-xs rounded-md">
            🎉 Most popular
          </span>
          <p className="text-sm mb-2 text-left">
            <span className="font-medium text-lg">Yearly</span> billed yearly ($159)
          </p>
          <p className="text-sm mb-4 leading-relaxed text-gray-700 text-left">
            Our <span className="font-medium">most popular</span> plan previously sold for $299 and is now only
            <span className="font-semibold"> $13.25/month.</span> This plan
            <span className="font-medium"> saves you over 60%</span> in comparison to the monthly plan.
          </p>
          <div className="text-2xl font-bold text-left">
            <span>$13.25</span>
            <span className="text-base font-normal">/mo</span>
          </div>
          <p className="text-xs text-gray-500 mb-4">Prices are marked in USD</p>
          <button className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition w-full">
            Subscribe
          </button>
        </div>

        {/* Monthly Plan Card - Right */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 w-[400px] h-[320px] text-black shadow-md self-start">
          <div className="text-sm font-semibold mb-2">
            <span className="block text-base text-black">Monthly</span>
            <span className="block text-sm text-gray-700">billed monthly</span>
          </div>
          <p className="text-sm mb-2 text-gray-700 font-semibold">Down from $39/month.</p>
          <p className="text-sm mb-4 leading-relaxed text-gray-600">
            Our monthly plan grants access to
            <span className="font-medium"> all premium features,</span> the best plan for short-term
            subscribers.
          </p>
          <div className="text-2xl font-bold mb-1 text-black">
            $35 <span className="text-base font-normal">/mo</span>
          </div>
          <p className="text-xs text-gray-500 mb-4">Prices are marked in USD</p>
          <button className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition w-[80%]">
            Subscribe
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        {/* Left Side (6 features) */}
        <div className="flex flex-col gap-10">
          
          <div>
            <h3 className="font-bold text-base text-gray-800 mb-2 text-left">🎥 Video Solutions</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-left">
              Unlock elaborate premium video solutions like{' '}
              <a
                href="https://leetcode.com/problems/merge-intervals/editorial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                this
              </a>
              . Each video includes a detailed conceptual overview and code walkthrough that will efficiently guide you through the problem.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base text-gray-800 text-left mb-2">🔒 Access to Premium Content</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-left">
              Gain exclusive access to our latest and ever-growing collection of premium content, such as questions, Explore cards, and premium solutions. Detailed explanations are written by our team of algorithm and data structure experts.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base text-gray-800 text-left mb-2">💻 Select Questions by Company</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-left">
              Target your studying more accurately towards reaching your dream job. Find out which companies asked specific questions. We have nearly 200 questions from Google alone.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base text-gray-800 mb-2 text-left">📝 Autocomplete</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-left">
              Not interested in memorization? With premium access, you'll receive intelligent code autocompletion based on language and an analysis of your source code.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base text-gray-800 mb-2 text-left">🐞 Debugger</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-left">
                <span>Tired of </span>
              <span className="text-gray-600 text-lg bg-yellow-50 px-2 py-1 rounded shadow-sm">System.out.println(val)?</span> Set breakpoints and debug your code interactively line-by-line right inside our code editor.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base text-gray-800 mb-2 text-left">⚡️ Lightning Judge</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-left">
              Tired of waiting? Premium users get priority judging using an exclusive queue, resulting in a 3X shorter wait time, up to 10X during peak hours.
            </p>
          </div>

        </div>

        {/* Right Side (5 features) */}
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="font-bold text-base text-gray-800 mb-2 text-left">💪 Sort Questions by Prevalence</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-centre">
              Find out which questions turn up most frequently in interviews so that you know where to focus your personal studying. Invaluable data collected from thousands of samples.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base text-gray-800 text-left mb-2">🗪 Interview Simulations</h3>
            <p className="text-sm text-gray-600 text-centreleading-relaxed text-left">
              Mock assessments provide you with a way to test your abilities in a timed setting, just like a coding challenge or on-site interview. You choose the company and we will select an appropriate question from our constantly growing database.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base text-gray-800 text-left mb-2">🚀 Additional Discounts</h3>
            <p className="text-sm text-gray-600 text-centre leading-relaxed">
              Premium subscription also gets you significant discounts on select items/content.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base text-gray-800 mb-2 text-left">☁︎ Cloud Storage</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-left">
              Code and layouts are instantly saved to the cloud, ensuring you can learn across devices at ease.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base text-gray-800 mb-2 text-left">♾️ Unlimited Playground</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-left">
              Code and layouts are instantly saved to the cloud, ensuring you can learn across devices at ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
