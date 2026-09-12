import React from 'react';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-[#0b1727] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Ready to start your project?
          </h2>
          <p className="text-slate-300 text-sm md:text-base">
            Let's work together to bring your ideas to life.
          </p>
        </div>
        <div className="shrink-0">
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold text-sm px-7 py-3 rounded-full hover:bg-slate-100 transition-colors shadow-md"
          >
            Get in Touch
          </Link>
        </div>

      </div>
    </section>
  );
}