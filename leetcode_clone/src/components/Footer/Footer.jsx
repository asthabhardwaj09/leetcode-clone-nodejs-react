import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const companyLogos = [
  {
    name: "Facebook",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
  {
    name: "Pinterest",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
  },
  {
    name: "Apple",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Uber",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
  },
  {
    name: "Amazon",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
];

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-[#f9f9f9] text-gray-700 text-center py-12 px-4">

      {/* Logo section */}
      <div className="flex justify-center items-center mb-6">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/ab-logos-design-template-b10955e6dc40b5c6571398639f7adb16_screen.jpg?ts=1680730681"
          alt="AsthaCode"
          className="h-12 object-contain"
        />
      </div>

        {/* Made with love - moved to bottom */}
      <div className="flex justify-center items-center mb-4">
        <span className="text-lg font-semibold">Made with ❤️ in SF</span>
      </div>

      <p className="max-w-xl mx-auto text-sm text-gray-600 mb-10">
        At LeetCode Clone, our mission is to help you improve yourself and land your dream job. We
        have a sizable repository of interview resources for many companies. In the past few years,
        our users have landed jobs at top companies around the world.
      </p>

      {/* Logos with scroll + hover animation */}
      <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
        {companyLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.name}
            title={logo.name}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            // ✅ Hover + scroll animation
            className="h-10 object-contain transition-transform duration-300 hover:animate-wiggle"
          />
        ))}
      </div>

      {/* Call to join */}
      <p className="text-sm mb-3">
        If you are passionate about tackling some of the most interesting problems around, we would
        love to hear from you.
      </p>
      <a href="#" className="text-blue-600 font-medium hover:underline">
        Join Our Team →
      </a>

      {/* Footer links */}
      <div className="mt-10 text-xs text-gray-500 flex flex-wrap justify-center gap-4">
        <a href="#">Help Center</a>
        <a href="#">Jobs</a>
        <a href="#">Bug Bounty</a>
        <a href="#">Students</a>
        <a href="#">Terms</a>
        <a href="#">Privacy Policy</a>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-xs text-gray-400">
        Copyright © {new Date().getFullYear()} AsthaCode
      </div>
    </footer>
  );
};

export default Footer;
