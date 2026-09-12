import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#0b1727] text-slate-400 text-sm">
            {/* Top Main Footer Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Column 1: Brand Info */}
                    <div className="space-y-4">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <h2 className="text-2xl font-bold text-white">
                                <span className="text-[var(--primary)]">M</span> NextGen
                            </h2>
                        </div>

                        <p className="text-xs leading-relaxed text-slate-400 max-w-xs">
                            We build modern web solutions that help businesses grow and succeed in the digital world.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex space-x-3 pt-2">
                            <a href="#" className="p-2 rounded-full bg-[#162a45] text-slate-300 hover:bg-blue-600 hover:text-white transition-colors">
                                <FaFacebookF size={13} />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-[#162a45] text-slate-300 hover:bg-blue-600 hover:text-white transition-colors">
                                <FaLinkedinIn size={13} />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-[#162a45] text-slate-300 hover:bg-blue-600 hover:text-white transition-colors">
                                <FaTwitter size={13} />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-[#162a45] text-slate-300 hover:bg-blue-600 hover:text-white transition-colors">
                                <FaInstagram size={13} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-base">Quick Links</h4>
                        <ul className="space-y-2.5 text-xs">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-base">Services</h4>
                        <ul className="space-y-2.5 text-xs">
                            <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Mobile Friendly</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">API Integration</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Maintenance & Support</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-base">Contact</h4>
                        <ul className="space-y-3 text-xs">
                            <li className="flex items-center space-x-3">
                                <div className="p-2 rounded-full bg-blue-600/20 text-blue-500 shrink-0">
                                    <FaEnvelope size={12} />
                                </div>
                                <span>info@nextgen.com</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="p-2 rounded-full bg-blue-600/20 text-blue-500 shrink-0">
                                    <FaPhoneAlt size={12} />
                                </div>
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="p-2 rounded-full bg-blue-600/20 text-blue-500 shrink-0 mt-0.5">
                                    <FaMapMarkerAlt size={12} />
                                </div>
                                <span>Chennai, India</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="border-t border-slate-800/80 py-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 space-y-3 sm:space-y-0">
                    <p>© 2026 NextGen. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}