'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import dynamic from 'next/dynamic';
import AccreditationSection from './AccreditationSection';
import StatsSection from './StatsSection';



export default function HeroSection() {
    return (
        <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-campus.jpg"
                    alt="JCT Campus"
                    fill
                    priority
                    className="object-cover animate-zoom-slow"
                    quality={75}
                />
                {/* Cinema-style Overlay with Blue Tint */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/60 to-primary-dark/90 mix-blend-multiply" />
                <div className="absolute inset-0 bg-blue-950/40" /> {/* Extra blue tint */}
            </div>

            {/* Content Container */}
            <div className="container relative z-10 flex-grow flex flex-col items-center justify-center text-center pt-24 pb-12">

                {/* Eyebrow Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 mb-8 animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-sm font-medium text-white/90 tracking-wide uppercase">
                        Estd. 2009 | Coimbatore
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="max-w-5xl mx-auto text-3xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-in-up delay-100">
                    <span className="!text-white drop-shadow-lg">Shape Your Future at</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 drop-shadow-lg">
                        JCT Institutions
                    </span>
                </h1>

                {/* Description */}
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed mb-10 animate-fade-in-up delay-200 text-shadow-sm">
                    Experience world-class education where innovation meets tradition.
                    We nurture talent with industry-aligned curriculum and state-of-the-art facilities to shape tomorrow&apos;s leaders.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-300">
                    <Link
                        href="/admissions"
                        className="group relative px-8 py-4 bg-white text-neutral-950 rounded-full font-bold text-lg hover:bg-neutral-100 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center gap-2"
                    >
                        Admissions Open 2026
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        href="/campus-tour"
                        className="px-8 py-4 glass-dark text-white rounded-full font-bold text-lg border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3 backdrop-blur-md"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                        </div>
                        Virtual Tour
                    </Link>
                </div>
            </div>
            <div className="relative z-10 w-full">
            {/* <AccreditationSection /> */}
                <StatsSection />
            </div>
        </section>
    );
}

