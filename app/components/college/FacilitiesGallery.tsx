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
        <section className="section section-alt" id="facilities">
            <div className="container">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="section-eyebrow justify-center">
                        <span>Infrastructure</span>
                    </div>
                    <h2 className="section-title">{title}</h2>
                    <p className="section-subtitle mx-auto">{subtitle}</p>
                </div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facilities.map((facility, index) => (
                        <div
                            key={facility.name}
                            className={`group relative rounded-2xl overflow-hidden ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                                }`}
                        >
                            {/* Image */}
                            <div className={`relative ${index === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                                {facility.image ? (
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${facility.image}')` }}
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light" />
                                )}

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    {facility.icon && (
                                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl mb-3">
                                            {facility.icon}
                                        </div>
                                    )}
                                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-accent transition-colors">
                                        {facility.name}
                                    </h3>
                                    <p className="text-white/70 text-sm line-clamp-2">
                                        {facility.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
