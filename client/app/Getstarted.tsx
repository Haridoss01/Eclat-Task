import React from 'react';

export default function Getstarted() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-blue-900 text-white">
      {/* Background Image */}
      <img
        src="https://plus.unsplash.com/premium_photo-1676657954811-9409c4830467?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="get start background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Blue Overlay (Makes image visible through opacity/blend) */}
      <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 bg-blue-900/60 px-3 py-1 rounded-full border border-blue-700/50">
          Get Started
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-white">
          Let's Build Something Great Together
        </h2>

        <p className="text-blue-100 mt-3 text-base sm:text-lg max-w-xl mx-auto">
          Have a project in mind? We'd love to hear from you.
        </p>

        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block bg-white text-blue-900 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}