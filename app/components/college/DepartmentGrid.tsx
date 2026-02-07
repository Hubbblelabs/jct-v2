import React from 'react';
import Link from 'next/link';

interface Department {
    name: string;
    code: string;
    description: string;
    href: string;
    icon?: React.ReactNode;
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
        <section className="section bg-white" id="programs">
            <div className="container">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="section-eyebrow justify-center">
                        <span>Programs</span>
                    </div>
                    <h2 className="section-title">{title}</h2>
                    <p className="section-subtitle mx-auto">{subtitle}</p>
                </div>

                {/* Departments Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {departments.map((dept, index) => (
                        <Link
                            key={dept.code}
                            href={dept.href}
                            className="group relative p-6 bg-white rounded-2xl border border-neutral-100 hover:border-accent hover:shadow-xl transition-all duration-300"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                                {dept.icon || '📚'}
                            </div>

                            {/* Content */}
                            <div className="flex items-start gap-2 mb-2">
                                <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary transition-colors">
                                    {dept.name}
                                </h3>
                                <span className="badge badge-secondary text-xs shrink-0">
                                    {dept.code}
                                </span>
                            </div>

                            <p className="text-neutral-600 text-sm line-clamp-2 mb-4">
                                {dept.description}
                            </p>

                            {/* CTA */}
                            <div className="flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
                                Learn More
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>

                            {/* Hover Gradient */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
