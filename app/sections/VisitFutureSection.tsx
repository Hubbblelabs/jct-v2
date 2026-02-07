'use client';

import React from 'react';
import Link from 'next/link';
import PlaceholderImage from '../components/PlaceholderImage';

export default function VisitFutureSection() {
    return (
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
            {/* Background Image with Placeholder */}
            <div className="absolute inset-0">
                <PlaceholderImage
                    variant="campus"
                    className="w-full h-full"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-primary-dark/85" />

            {/* Decorative Elements */}
            <div className="absolute inset-0 decoration-dots opacity-10" />
            <div className="absolute top-10 right-10 w-32 md:w-64 h-32 md:h-64 border border-white/10 rounded-full hidden sm:block" />
            <div className="absolute bottom-10 left-10 w-24 md:w-48 h-24 md:h-48 border border-white/10 rounded-full hidden sm:block" />
            <div className="absolute top-1/2 left-1/4 w-24 md:w-32 h-24 md:h-32 bg-accent/20 rounded-full blur-3xl" />

            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-6 md:mb-8">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <span className="text-white/90 text-xs md:text-sm font-medium">Admissions Open 2024-25</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4 md:mb-6 leading-tight">
                        Visit Your <span className="text-gradient">Future</span>
                    </h2>

                    {/* Description */}
                    <p className="text-base md:text-lg lg:text-xl text-white/70 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                        Take the first step towards a bright future. Schedule a campus visit
                        or apply online to join our community of achievers.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4">
                        <Link
                            href="/apply"
                            className="w-full sm:w-auto btn btn-primary btn-lg animate-pulse-glow justify-center"
                        >
                            Apply Now
                            <ArrowIcon />
                        </Link>
                        <Link
                            href="/schedule-visit"
                            className="w-full sm:w-auto btn btn-ghost btn-lg justify-center"
                        >
                            <CalendarIcon />
                            Schedule a Visit
                        </Link>
                    </div>

                    {/* Quick Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto px-4">
                        <a href="tel:+914222345678" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/10 transition-colors">
                            <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                <PhoneIcon />
                            </div>
                            <h4 className="font-semibold mb-1 text-sm md:text-base text-accent-color">Call Us</h4>
                            <span className="text-white/70 text-xs md:text-sm hover:text-accent transition-colors">
                                +91 422 234 5678
                            </span>
                        </a>

                        <a href="mailto:admissions@jct.edu.in" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/10 transition-colors">
                            <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                <EmailIcon />
                            </div>
                            <h4 className="font-semibold mb-1 text-sm md:text-base text-accent-color">Email Us</h4>
                            <span className="text-white/70 text-xs md:text-sm hover:text-accent transition-colors">
                                admissions@jct.edu.in
                            </span>
                        </a>

                        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/10 transition-colors">
                            <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                <LocationIcon />
                            </div>
                            <h4 className="font-semibold mb-1 text-sm md:text-base text-accent-color">Visit Us</h4>
                            <span className="text-white/70 text-xs md:text-sm">
                                Coimbatore, Tamil Nadu
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ArrowIcon() {
    return (
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    );
}

function CalendarIcon() {
    return (
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
    );
}

function EmailIcon() {
    return (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
    );
}
