'use client';

import React from 'react';
import StatsCounter from '../components/StatsCounter';

const metrics = [
    { value: 15, suffix: '+', label: 'Years of Excellence' },
    { value: 7000, suffix: '+', label: 'Successful Graduates' },
    { value: 100, suffix: '%', label: 'Placement Support' },
    { value: 65, suffix: '+', label: 'Recruiting Partners' },
];

export default function MetricsSection() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark" />

            {/* Decorative Elements */}
            <div className="absolute inset-0 decoration-grid" />
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px]" />

            {/* Animated Circles */}
            <div className="absolute top-10 right-10 w-32 h-32 border border-white/10 rounded-full animate-pulse" />
            <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="section-eyebrow justify-center">
                        <span className="text-accent">Our Impact</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">
                        Numbers That <span className="text-gradient">Speak</span>
                    </h2>
                    <p className="!text-white/70">
                        Our track record of excellence reflected in the success of our students
                    </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {metrics.map((metric) => (
                        <div
                            key={metric.label}
                            className="relative group"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Card */}
                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-300">
                                <StatsCounter
                                    value={metric.value}
                                    suffix={metric.suffix}
                                    label={metric.label}
                                    variant="accent"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-white/60 mb-4">
                        Be part of our success story
                    </p>
                    <a href="/apply" className="btn btn-primary">
                        Start Your Journey
                        <ArrowIcon />
                    </a>
                </div>
            </div>
        </section>
    );
}

function ArrowIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    );
}
