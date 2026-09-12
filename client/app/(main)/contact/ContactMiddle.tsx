"use client";

import React, { useState } from "react";
import { FiMapPin, FiMail, FiPhone, FiClock } from "react-icons/fi";

export default function ContactMiddle() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-8">
              <div className="flex items-start space-x-5">
                <div className="p-4 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Our Office</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    123 Business Street<br />
                    Chennai, Tamil Nadu 600001
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="p-4 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Email Us</h4>
                  <p className="text-slate-600 text-sm mt-1">info@nextgen.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="p-4 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Call Us</h4>
                  <p className="text-slate-600 text-sm mt-1">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="p-4 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
                  <FiClock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Working Hours</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat - Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all resize-none placeholder-slate-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md shadow-blue-600/20 text-sm mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}