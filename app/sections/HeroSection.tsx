'use client';

import React from 'react';
import Link from 'next/link';


const stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '7000+', label: 'Graduates' },
    { value: '100%', label: 'Placement Support' },
    { value: '65+', label: 'Recruiters' },
];

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Grid Pattern */}
                <div className="absolute inset-0 decoration-grid" />

                {/* Gradient Orbs */}
                <div className="absolute top-20 right-[20%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/10 rounded-full blur-[100px] animate-float-slow" />
                <div className="absolute bottom-20 left-[10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-secondary/15 rounded-full blur-[80px] animate-float" />
                <div className="absolute top-1/2 left-1/2 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-tertiary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Main Content */}
            <div className="container relative z-10 pt-20 md:pt-24 pb-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-6rem)]">

                    {/* Text Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3 mb-4 md:mb-6 animate-fade-in-up justify-center lg:justify-start">
                            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-accent to-accent-light" />
                            <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-widest">
                                Since 2008
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-4 md:mb-6 animate-fade-in-up delay-100">
                            <span className="text-white">Shape Your</span>
                            <br />
                            <span className="text-gradient">Future</span>
                            <span className="text-white"> With Us</span>
                        </h1>

                        {/* Description */}
                        <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200">
                            JCT Institutions offers world-class technical education with
                            NAAC &apos;A&apos; Grade accreditation, industry partnerships, and a
                            proven track record of excellence in Coimbatore.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-12 animate-fade-in-up delay-300 justify-center lg:justify-start">
                            <Link
                                href="/apply"
                                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-accent-light text-primary-dark px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
                            >
                                Apply Now
                                <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary-dark/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                    <ArrowIcon />
                                </span>
                            </Link>
                            <Link
                                href="/campus-tour"
                                className="btn btn-ghost justify-center"
                            >
                                <PlayIcon />
                                Virtual Tour
                            </Link>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 pt-6 md:pt-8 border-t border-white/10 animate-fade-in-up delay-400">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center lg:text-left">
                                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
                                    <div className="text-xs md:text-sm text-white/60 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="order-1 lg:order-2 relative animate-fade-in-right delay-200">
                        {/* Main Image Container */}
                        <div className="relative max-w-[400px] mx-auto lg:max-w-none">
                            {/* Decorative Ring */}
                            <div className="absolute -inset-4 border-2 border-white/10 rounded-[2.5rem] animate-rotate hidden sm:block" style={{ animationDuration: '30s' }} />

                            {/* Background Glow */}
                            <div className="absolute -inset-8 bg-gradient-to-br from-accent/20 via-secondary/10 to-tertiary/10 rounded-[3rem] blur-2xl" />

                            {/* Primary Image */}
                            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: "url('/images/hero-campus.jpg')" }}
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent" />

                                {/* Floating Card - NAAC */}
                                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 glass rounded-xl md:rounded-2xl p-4 md:p-5 shadow-2xl animate-fade-in-up delay-500">
                                    <div className="flex items-center gap-3 md:gap-4">
                                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shrink-0 shadow-lg">
                                            <span className="text-lg md:text-2xl font-bold text-primary-dark">A</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-xs md:text-sm text-neutral-500">Accreditation</div>
                                            <div className="font-bold text-neutral-900 text-sm md:text-base">NAAC &apos;A&apos; Grade</div>
                                        </div>
                                        <div className="ml-auto hidden sm:block">
                                            <VerifiedIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge - Top Right */}
                            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 lg:-right-8 bg-gradient-to-br from-accent to-accent-light text-primary-dark rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl animate-float">
                                <div className="text-center">
                                    <div className="text-xl md:text-3xl font-bold">65+</div>
                                    <div className="text-[10px] md:text-xs font-medium opacity-80">Recruiters</div>
                                </div>
                            </div>

                            {/* Floating Card - Left */}
                            <div className="hidden lg:flex absolute -left-8 top-1/3 glass rounded-xl shadow-xl p-4 items-center gap-3 animate-fade-in-left delay-600">
                                <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center">
                                    <CheckIcon />
                                </div>
                                <div>
                                    <div className="text-xs text-neutral-500">Placement Rate</div>
                                    <div className="font-bold text-neutral-900">100%</div>
                                </div>
                            </div>

                            {/* Decorative Dots */}
                            <div className="absolute -bottom-8 -right-8 w-24 h-24 decoration-dots opacity-50 rounded-lg hidden md:block" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-700">
                <span className="text-white/50 text-[10px] md:text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1 md:p-1.5">
                    <div className="w-1 h-2 md:w-1.5 md:h-3 bg-accent rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
}

function ArrowIcon() {
    return (
        <svg className="w-3 h-3 md:w-4 md:h-4 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    );
}

function PlayIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
        </svg>
    );
}

function VerifiedIcon() {
    return (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-tertiary" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg className="w-5 h-5 text-tertiary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
    );
}
