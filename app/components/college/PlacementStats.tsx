import React from 'react';

interface PlacementStatsProps {
    stats: {
        placementRate: string;
        averagePackage: string;
        highestPackage: string;
        companiesVisited: string;
    };
    recruiters: Array<{ name: string; logo?: string }>;
}

export default function PlacementStats({ stats, recruiters }: PlacementStatsProps) {
    return (
        <section className="section section-dark relative overflow-hidden" id="placements">
            {/* Background */}
            <div className="absolute inset-0 decoration-dots opacity-20" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="section-eyebrow justify-center">
                        <span>Career Success</span>
                    </div>
                    <h2 className="section-title text-white">
                        Placement <span className="text-gradient">Highlights</span>
                    </h2>
                    <p className="section-subtitle mx-auto text-white/70">
                        Our students are placed in top companies across the globe
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                        <div className="text-4xl font-bold text-accent mb-2">{stats.placementRate}</div>
                        <div className="text-white/70 text-sm">Placement Rate</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                        <div className="text-4xl font-bold text-white mb-2">{stats.averagePackage}</div>
                        <div className="text-white/70 text-sm">Average Package</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                        <div className="text-4xl font-bold text-white mb-2">{stats.highestPackage}</div>
                        <div className="text-white/70 text-sm">Highest Package</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                        <div className="text-4xl font-bold text-accent mb-2">{stats.companiesVisited}</div>
                        <div className="text-white/70 text-sm">Companies Visited</div>
                    </div>
                </div>

                {/* Recruiters */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-8">Our Top Recruiters</h3>
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                        {recruiters.map((recruiter) => (
                            <div
                                key={recruiter.name}
                                className="w-24 h-16 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                {recruiter.logo ? (
                                    <img
                                        src={recruiter.logo}
                                        alt={recruiter.name}
                                        className="max-w-full max-h-full p-2"
                                    />
                                ) : (
                                    <span className="text-white/80 text-xs font-medium text-center px-2">
                                        {recruiter.name}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
