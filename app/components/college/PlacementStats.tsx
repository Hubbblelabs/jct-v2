'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface PlacementStatsProps {
    stats: {
        placementRate: string;
        averagePackage: string;
        highestPackage: string;
        companiesVisited: string;
    };
    recruiters: Array<{ name: string; logo?: string; icon?: React.ReactNode }>;
}

// Animated counter hook
function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!startOnView) {
            setHasStarted(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasStarted, startOnView]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, hasStarted]);

    return { count, ref };
}

// Parse number from string (e.g., "100%" -> 100, "4.5 LPA" -> 4.5)
function parseStatNumber(stat: string): number {
    const match = stat.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
}

// Get suffix from string (e.g., "100%" -> "%", "4.5 LPA" -> " LPA")
function getStatSuffix(stat: string): string {
    return stat.replace(/[\d.]+/, '');
}

import RecruitersCarousel from '../RecruitersCarousel';

export default function PlacementStats({ stats, recruiters }: PlacementStatsProps) {
    const placementNum = parseStatNumber(stats.placementRate);
    const avgNum = parseStatNumber(stats.averagePackage);
    const highNum = parseStatNumber(stats.highestPackage);
    const companiesNum = parseStatNumber(stats.companiesVisited);

    const placement = useCountUp(placementNum, 2000);
    const avg = useCountUp(avgNum * 10, 2000); // multiply by 10 for decimal animation
    const high = useCountUp(highNum, 2000);
    const companies = useCountUp(companiesNum, 2000);

    return (
        // <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary-dark via-neutral-900 to-primary-dark overflow-hidden" id="placements">
        <section className="relative py-16 md:py-28 bg-primary-dark overflow-hidden" id="placements">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 decoration-dots opacity-[0.03]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 px-4">
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <span className="text-white/80 text-sm font-medium">Career Success</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white mb-4">
                        Placement <span className="text-gradient">Highlights</span>
                    </h2>
                    <p className="text-white/60 text-base md:text-lg">
                        Our students are placed in top companies across the globe
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 px-4">
                    <div ref={placement.ref} className="group bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm border border-accent/30 rounded-2xl p-6 md:p-8 text-center hover:border-accent/50 transition-all duration-300">
                        <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                            {placement.count}{getStatSuffix(stats.placementRate)}
                        </div>
                        <div className="text-white/70 text-sm">Placement Rate</div>
                    </div>
                    <div ref={avg.ref} className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:border-white/20 transition-all duration-300">
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                            {(avg.count / 10).toFixed(1)}{getStatSuffix(stats.averagePackage)}
                        </div>
                        <div className="text-white/70 text-sm">Average Package</div>
                    </div>
                    <div ref={high.ref} className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:border-white/20 transition-all duration-300">
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                            {high.count}{getStatSuffix(stats.highestPackage)}
                        </div>
                        <div className="text-white/70 text-sm">Highest Package</div>
                    </div>
                    <div ref={companies.ref} className="group bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-sm border border-secondary/30 rounded-2xl p-6 md:p-8 text-center hover:border-secondary/50 transition-all duration-300">
                        <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                            {companies.count}{getStatSuffix(stats.companiesVisited)}
                        </div>
                        <div className="text-white/70 text-sm">Companies Visited</div>
                    </div>
                </div>

                {/* Recruiters */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-gradient mb-8">Our Top Recruiters</h3>
                    <RecruitersCarousel recruiters={recruiters} />
                </div>
            </div>
        </section>
    );
}
