'use client';

import React from 'react';

interface Facility {
    name: string;
    description: string;
    image?: string;
    icon?: React.ReactNode;
}


interface FacilitiesGalleryProps {
    facilities: Facility[];
    title?: string;
    subtitle?: string;
}

export default function FacilitiesGallery({
    facilities,
    title = "Campus Facilities",
    subtitle = "State-of-the-art infrastructure for holistic development"
}: FacilitiesGalleryProps) {
    return (
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-neutral-50 to-white overflow-hidden" id="facilities">
            {/* Decorative Background */}
            <div className="absolute inset-0">
                <div className="absolute top-40 left-[10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-[10%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px]" />
            </div>

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2 mb-6">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-primary/80 text-sm font-medium">Infrastructure</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                        {title.split(' ').slice(0, -1).join(' ')}{' '}
                        <span className="text-gradient">{title.split(' ').slice(-1)[0]}</span>
                    </h2>
                    <p className="text-neutral-600 text-lg">{subtitle}</p>
                </div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {facilities.map((facility, index) => (
                        <div
                            key={facility.name}
                            className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${index === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-1' : ''
                                }`}
                        >
                            {/* Image */}
                            <div className={`relative ${index === 0 ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3]'}`}>
                                {facility.image ? (
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${facility.image}')` }}
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary" />
                                )}

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                                    <div className="flex items-start gap-4">
                                        {facility.icon && (
                                            <div className="w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-sm border border-white/10 flex items-center justify-center text-accent shrink-0">
                                                {facility.icon}
                                            </div>
                                        )}
                                        <div>
                                            <h3 className="text-lg md:text-xl font-semibold text-white mb-1 group-hover:text-accent transition-colors">
                                                {facility.name}
                                            </h3>
                                            <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                                                {facility.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
