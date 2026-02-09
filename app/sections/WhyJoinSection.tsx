'use client';

import React from 'react';
import FeatureCard from '../components/FeatureCard';

const features = [
    {
        icon: <GraduationIcon />,
        title: 'Academic Excellence',
        description: 'NAAC "A" Grade accreditation with NBA certified programs ensuring top-quality education.',
    },
    {
        icon: <BriefcaseIcon />,
        title: '100% Placement Support',
        description: 'Dedicated placement cell with 65+ recruiting companies and excellent industry connections.',
    },
    {
        icon: <BuildingIcon />,
        title: 'Modern Infrastructure',
        description: 'State-of-the-art labs, smart classrooms, and cutting-edge research facilities.',
    },
    {
        icon: <UsersIcon />,
        title: 'Expert Faculty',
        description: 'Experienced professors with industry and research backgrounds providing quality mentorship.',
    },
    {
        icon: <GlobeIcon />,
        title: 'Industry Partnerships',
        description: 'Strong collaborations with leading companies for internships and live projects.',
    },
    {
        icon: <HeartIcon />,
        title: 'Holistic Development',
        description: 'Focus on sports, arts, cultural activities, and soft skills alongside academics.',
    },
];

export default function WhyJoinSection() {
    return (
        <section className="section bg-neutral-50" id="why-join">
            <div className="container">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <div className="section-eyebrow">
                            <span>Why Choose Us</span>
                        </div>
                        <h2 className="section-title">
                            Why Join <span className="text-gradient">JCT</span>?
                        </h2>
                        <p className="section-subtitle">
                            Discover what makes JCT Institutions the perfect choice for your educational journey.
                        </p>
                    </div>
                    <a href="/about" className="btn btn-outline shrink-0">
                        Learn More
                        <ArrowIcon />
                    </a>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <FeatureCard
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                variant="gradient"
                            />
                        </div>
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="mt-16 relative rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-primary" />
                    <div className="absolute inset-0 decoration-dots opacity-20" />

                    <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold !text-white mb-2">
                                Ready to Shape Your Future?
                            </h3>
                            <p className="!text-white/70">
                                Join thousands of successful graduates who started their journey here.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <a href="/apply" className="btn btn-primary">
                                Apply Now
                            </a>
                            <a href="/contact" className="btn btn-ghost">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Icons
function GraduationIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
    );
}

function BriefcaseIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
    );
}

function BuildingIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
    );
}

function UsersIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
    );
}

function GlobeIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
    );
}

function HeartIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
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
