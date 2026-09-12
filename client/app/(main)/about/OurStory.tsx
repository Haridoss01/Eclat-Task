import React from 'react';
import { FiSun, FiUsers, FiShield } from 'react-icons/fi';

export default function OurStory() {
  return (
    <section className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Workspace Image */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100">
              <img
                src="https://media.istockphoto.com/id/1410418792/photo/laptop-and-computer-pc-on-wooden-office-desk-with-programming-code-on-screens.webp?a=1&b=1&s=612x612&w=0&k=20&c=g30nJlpPWcp4JbZVcCyK_ukigLz28xS-NlJns_ZM60o="
                alt="Developer workspace"
                className="w-full h-[320px] object-cover"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our Story
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Founded in 2020, NextGen started with a simple goal — to help businesses succeed online. What began as a small team of developers has now grown into a full-service web development company, working with clients across different industries.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We are a team of designers, developers and strategists who love building clean, scalable and user-friendly web applications.
            </p>
          </div>

        </div>

        {/* Bottom 3-Column Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-slate-100 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
          {/* Feature 1: Innovation */}
          <div className="flex items-start space-x-4 pt-6 md:pt-0">
            <div className="p-3.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
              <FiSun size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Innovation</h4>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                We embrace new technologies and creative ideas.
              </p>
            </div>
          </div>

          {/* Feature 2: Collaboration */}
          <div className="flex items-start space-x-4 pt-6 md:pt-0 md:pl-8">
            <div className="p-3.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
              <FiUsers size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Collaboration</h4>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                We work closely with our clients to achieve the best results.
              </p>
            </div>
          </div>

          {/* Feature 3: Quality */}
          <div className="flex items-start space-x-4 pt-6 md:pt-0 md:pl-8">
            <div className="p-3.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
              <FiShield size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Quality</h4>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                We deliver high-quality work with attention to detail.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}