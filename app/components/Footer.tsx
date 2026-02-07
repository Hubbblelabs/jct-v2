'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const colleges = [
    { name: 'Engineering & Technology', href: '/colleges/engineering' },
    { name: 'Arts & Science', href: '/colleges/arts-science' },
    { name: 'Polytechnic', href: '/colleges/polytechnic' },
];

const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Placements', href: '/placements' },
    { name: 'Research', href: '/research' },
    { name: 'Campus Life', href: '/campus-life' },
    { name: 'Contact', href: '/contact' },
];

const resources = [
    { name: 'Student Portal', href: '/portal' },
    { name: 'Library', href: '/library' },
    { name: 'Results', href: '/results' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'FAQs', href: '/faqs' },
];

const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: FacebookIcon },
    { name: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedInIcon },
    { name: 'YouTube', href: 'https://youtube.com', icon: YouTubeIcon },
    { name: 'Twitter', href: 'https://twitter.com', icon: TwitterIcon },
];

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle subscription
        setEmail('');
    };

    return (
        <footer className="bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 decoration-dots opacity-[0.03]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />

            {/* Map & Contact Section */}
            <div className="relative border-b border-white/10">
                <div className="container py-18 md:py-22">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Map */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[350px] bg-neutral-800">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.1234567890123!2d76.9876543210!3d10.9876543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU5JzE1LjYiTiA3NsKwNTknMTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="JCT Institutions Location"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            {/* Map Overlay */}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-neutral-900/50 to-transparent" />

                            {/* Location Badge */}
                            <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto">
                                <div className="glass-dark rounded-xl p-4 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                                        <LocationIcon />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-sm text-white/60">Campus Location</div>
                                        <div className="font-semibold text-white truncate">Pichanur, Coimbatore</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info & Newsletter */}
                        <div className="flex flex-col justify-center">
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">
                                Get In <span className="text-gradient">Touch</span>
                            </h3>

                            {/* Contact Cards */}
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                <a href="tel:+914222345678" className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                                        <PhoneIcon className="text-accent group-hover:text-primary-dark" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/50 uppercase tracking-wider">Call Us</div>
                                        <div className="font-semibold text-white">+91 422 234 5678</div>
                                    </div>
                                </a>

                                <a href="mailto:info@jctinstitutions.edu.in" className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                                        <EmailIcon className="text-secondary group-hover:text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/50 uppercase tracking-wider">Email</div>
                                        <div className="font-semibold text-white text-sm md:text-base truncate">info@jct.edu.in</div>
                                    </div>
                                </a>
                            </div>

                            {/* Newsletter */}
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                                <h4 className="text-lg font-semibold mb-2 text-accent-color">Stay Updated</h4>
                                <p className="text-white/80 text-sm mb-4">
                                    Subscribe to our newsletter for news and updates
                                </p>

                                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-accent/50 focus:bg-white/15 transition-all"
                                        required
                                    />
                                    <button type="submit" className="btn btn-primary whitespace-nowrap">
                                        Subscribe
                                        <ArrowIcon />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container relative py-16 md:py-20">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-12">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2">
                        <Link href="/" className="inline-flex items-center gap-3 mb-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-light text-primary-dark font-bold text-xl shadow-lg">
                                JCT
                            </div>
                            <div>
                                <span className="block text-xl font-bold leading-tight">JCT Institutions</span>
                                <span className="block text-sm text-white/50">Excellence in Education</span>
                            </div>
                        </Link>
                        <p className="text-white/60 leading-relaxed mb-6 max-w-sm text-sm md:text-base">
                            JCT Institutions is a premier educational trust dedicated to providing
                            world-class technical and professional education since 2008.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-primary-dark transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Colleges Column */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-color mb-6">Our Colleges</h4>
                        <ul className="space-y-4">
                            {colleges.map((college) => (
                                <li key={college.name}>
                                    <Link
                                        href={college.href}
                                        className="text-white/90 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-accent transition-colors" />
                                        {college.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-color mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/90 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-accent transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-color mb-6">Resources</h4>
                        <ul className="space-y-4">
                            {resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/90 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-accent transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 relative">
                <div className="container py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-white/50 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} JCT Institutions. All rights reserved.
                        </p>

                        {/* Legal Links */}
                        <div className="flex items-center gap-6 text-sm text-white/50">
                            <Link href="/privacy" className="hover:text-accent transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-accent transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/sitemap" className="hover:text-accent transition-colors">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Icons
function PhoneIcon({ className }: { className?: string }) {
    return (
        <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
    );
}

function EmailIcon({ className }: { className?: string }) {
    return (
        <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function YouTubeIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    );
}

function TwitterIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}
