'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

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
    const pathname = usePathname();
    const isEngineering = pathname?.startsWith('/colleges/engineering');
    const isArtsScience = pathname?.startsWith('/colleges/arts-science');
    const isPolytechnic = pathname?.startsWith('/colleges/polytechnic');
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle subscription
        setEmail('');
    };

    return (
        <footer
            data-theme={isArtsScience ? 'arts-science' : isPolytechnic ? 'polytechnic' : undefined}
            className="bg-neutral-950 text-white relative overflow-hidden pt-16 md:pt-20"
        >
            {/* Decorative Elements */}
            <div className="absolute inset-0 decoration-dots opacity-[0.03]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container relative z-10">
                {/* Top Section: Newsletter & CTA */}
                <div className="mb-16 md:mb-20">
                    <div className="glass-dark rounded-2xl p-8 md:p-12 relative overflow-hidden border border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />
                        <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold !text-white mb-2">
                                    Stay Connected with <span className="text-gradient">JCT</span>
                                </h3>
                                <p className="!text-white/70 text-lg">
                                    Subscribe to our newsletter for the latest updates, news, and events.
                                </p>
                            </div>
                            <div>
                                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-accent/50 focus:bg-white/15 transition-all shadow-inner"
                                        required
                                    />
                                    <button type="submit" className="btn btn-primary whitespace-nowrap !py-3.5">
                                        Subscribe Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
                    {/* Brand Column & Contact */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-8">
                        <div className="space-y-6">
                            <Link href="/" className="inline-flex items-center gap-3">
                                <div className="relative w-12 h-12 flex items-center justify-center">
                                    <Image
                                        src="/jct_logo.svg"
                                        alt="JCT Logo"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-contain brightness-100 invert"
                                    />
                                </div>
                                <div>
                                    <span className="block text-lg font-bold leading-tight text-white">
                                        {isEngineering ? 'JCT College of Engineering & Technology' :
                                            isArtsScience ? 'JCT College of Arts & Science' :
                                                isPolytechnic ? 'JCT Polytechnic College' : 'JCT Institutions'}
                                    </span>
                                </div>
                            </Link>
                            <p className="text-white/60 leading-relaxed text-sm max-w-sm">
                                Premier educational trust dedicated to providing world-class technical and professional education since 2008.
                            </p>
                            <div className="flex items-center gap-2">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-primary-dark transition-all duration-300"
                                        aria-label={social.name}
                                    >
                                        <social.icon />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact Info Embedded in Brand Column */}
                        <div className="pt-6 border-t border-white/10 max-w-sm">
                            <ul className="space-y-4">
                                <li>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded bg-accent/10 flex items-center justify-center shrink-0">
                                            <LocationIcon />
                                        </div>
                                        <span className="text-white/70 text-sm leading-relaxed">
                                            Pichanur, Coimbatore,<br />Tamil Nadu - 641105
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <a href="tel:+91 93614 88801" className="flex items-center gap-3 group">
                                        <div className="w-5 h-5 rounded bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                                            <PhoneIcon className="text-accent" />
                                        </div>
                                        <span className="text-white/70 text-sm group-hover:text-white transition-colors">+91 93614 88801</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:info@jct.edu.in" className="flex items-center gap-3 group">
                                        <div className="w-5 h-5 rounded bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                                            <EmailIcon className="text-accent" />
                                        </div>
                                        <span className="text-white/70 text-sm group-hover:text-white transition-colors">info@jct.edu.in</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Colleges */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider !text-white mb-6">Our Colleges</h4>
                        <ul className="space-y-3">
                            {colleges.map((college) => (
                                <li key={college.name}>
                                    <Link
                                        href={college.href}
                                        className="text-white/70 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-accent transition-colors" />
                                        {college.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider !text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-accent transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources (Restored) */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider !text-white mb-6">Resources</h4>
                        <ul className="space-y-3">
                            {resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
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
            <div className="border-t border-white/10 bg-neutral-950">
                <div className="container py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-white/40 text-xs md:text-sm text-center md:text-left">
                            © {new Date().getFullYear()} JCT Institutions. All rights reserved.
                        </p>

                        <div className="flex items-center gap-6 text-xs md:text-sm text-white/40">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
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
        <svg className={`w-3 h-3 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
    );
}

function EmailIcon({ className }: { className?: string }) {
    return (
        <svg className={`w-3 h-3 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function YouTubeIcon() {
    return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    );
}

function TwitterIcon() {
    return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}
