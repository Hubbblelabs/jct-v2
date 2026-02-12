'use client';

import React from 'react';

const stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '7000+', label: 'Graduates' },
    { value: '100%', label: 'Placement Support' },
    { value: '8000+', label: 'Scholarships' }
];

export default function StatsSection() {
    return (
        <section className="py-8 bg-primary border-t border-white/10">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <div key={index} className="px-4 flex flex-col items-center justify-center text-center group">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm font-medium text-white/80 uppercase tracking-wider group-hover:text-accent transition-colors">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
