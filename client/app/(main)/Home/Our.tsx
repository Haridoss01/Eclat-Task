import React from 'react';
import { FiMonitor, FiSmartphone, FiSettings, FiHeart } from 'react-icons/fi';

const services = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Custom websites and web applications built with modern technologies.',
        icon: FiMonitor,
    },
    {
        id: 2,
        title: 'Mobile Friendly',
        description: 'Responsive designs that work perfectly on all devices and screen sizes.',
        icon: FiSmartphone,
    },
    {
        id: 3,
        title: 'API Integration',
        description: 'Seamless integration with third-party services and custom APIs.',
        icon: FiSettings,
    },
    {
        id: 4,
        title: 'Maintenance & Support',
        description: 'Ongoing support to keep your website secure, updated and running smoothly.',
        icon: FiHeart,
    },
];
function Our() {
    return (
        <section className="section-padding bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    <h4 className="text-[var(--primary)] font-bold uppercase tracking-wider">
                        Our services
                    </h4>
                    <h2 className="text-[var(--text)] text-3xl md:text-4xl font-bold mt-3">
                        What We Do
                    </h2>
                    <p className="text-[var(--text-light)] max-w-[600px] mt-3 text-lg text-balance">
                        We provide end-to-end web development services to help you build a strong online presence and achieve your business goals.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 md:mt-16">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
                            >
                                <div className="p-4 rounded-xl bg-slate-50 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-[var(--text)] text-xl font-semibold mt-6">
                                    {service.title}
                                </h3>
                                <p className="text-[var(--text-light)] mt-3 leading-relaxed text-sm md:text-base">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

export default Our;