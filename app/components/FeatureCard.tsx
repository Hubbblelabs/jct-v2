'use client';

import React from 'react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    variant?: 'default' | 'outlined' | 'gradient';
}

export default function FeatureCard({
    icon,
    title,
    description,
    variant = 'default',
}: FeatureCardProps) {
    const baseClasses = "group relative p-6 rounded-2xl transition-all duration-300";

    const variantClasses = {
        default: "bg-white shadow-card hover:shadow-card-hover border border-transparent hover:border-neutral-100",
        outlined: "bg-transparent border-2 border-neutral-200 hover:border-accent hover:bg-accent/5",
        gradient: "bg-gradient-to-br from-white to-neutral-50 border border-neutral-100 hover:shadow-xl",
    };

    return (
        <div className={`${baseClasses} ${variantClasses[variant]}`}>
            {/* Gradient border effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent to-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

            {/* Icon */}
            <div className="icon-box mb-4 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>

            {/* Content */}
            <h4 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                {title}
            </h4>
            <p className="text-neutral-600 text-sm leading-relaxed">
                {description}
            </p>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
    );
}
