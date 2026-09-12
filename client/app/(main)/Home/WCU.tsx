import React from 'react';

const stats = [
    { value: '100+', label: 'Happy Clients' },
    { value: '150+', label: 'Projects Completed' },
    { value: '5+', label: 'Years Experience' },
];

export default function WhyChooseUs() {
    return (
        <section className="section-padding bg-[var(--light-bg)] py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Team working together"
                            className="w-full h-[400px] object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h4 className="text-blue-600 font-bold text-sm uppercase tracking-wide">
                            Why Choose Us
                        </h4>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
                            Your Success Is Our Priority
                        </h2>
                        <p className="text-slate-600 mt-4 leading-relaxed">
                            We focus on delivering high-quality solutions, on time and within your budget. Our team combines creativity, technology, and business strategy to bring your ideas to life.
                        </p>
                        <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-slate-100">
                            {stats.map((stat, index) => (
                                <div key={index} className="border-r-2 border-[var(--text-light)]/20 last:border-r-0 pr-4">
                                    <p className="text-3xl font-extrabold text-blue-600">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm font-medium text-slate-500 mt-1">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}