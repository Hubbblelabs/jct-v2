'use client';

import React from 'react';
import Link from 'next/link';

interface Department {
    name: string;
    code: string;
    description: string;
    href: string;
    icon?: React.ReactNode;
    image?: string;
}


interface DepartmentGridProps {
    departments: Department[];
    title?: string;
    subtitle?: string;
}

export default function DepartmentGrid({
    departments,
    title = "Departments",
    subtitle = "Explore our academic departments"
}: DepartmentGridProps) {
    return (
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary-dark to-neutral-950 overflow-hidden" id="programs">
            {/* Decorative Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 decoration-dots opacity-[0.03]" />
                <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 left-[10%] w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-white/80 text-sm font-medium">Programs</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white mb-4">
                        {title.split(' ').map((word, i) =>
                            i === 0 ? <span key={i} className="text-gradient">{word} </span> : word + ' '
                        )}
                    </h2>
                    <p className="text-white/60 text-lg">{subtitle}</p>
                </div>

                {/* Departments Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {departments.map((dept, index) => (
                        <Link
                            key={dept.code}
                            href={dept.href}
                            className="group relative p-6 md:p-8 bg-white/[0.07] backdrop-blur-sm rounded-2xl border border-white/15 hover:border-accent/50 overflow-hidden transition-all duration-500 shadow-lg hover:shadow-xl"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {/* Background Image */}
                            {dept.image && (
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                    style={{ backgroundImage: `url('${dept.image}')` }}
                                />
                            )}

                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-accent mb-5 group-hover:scale-110 group-hover:bg-accent/30 transition-all duration-300">
                                    {dept.icon || '📚'}
                                </div>

                                {/* Content */}
                                <div className="flex items-start gap-3 mb-3">
                                    <h3 className="text-lg font-semibold !text-white group-hover:text-accent transition-colors">
                                        {dept.name}
                                    </h3>
                                    <span className="px-2 py-0.5 rounded-md bg-accent/20 !text-accent text-xs font-medium shrink-0">
                                        {dept.code}
                                    </span>
                                </div>

                                <p className="text-white/70 text-sm leading-relaxed line-clamp-2 mb-5">
                                    {dept.description}
                                </p>

                                {/* CTA */}
                                <div className="flex items-center text-sm font-medium text-accent">
                                    Learn More
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
