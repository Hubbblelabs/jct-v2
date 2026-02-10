import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CollegeHeroProps {
    name: string;
    shortName: string;
    tagline: string;
    description: string;
    tag?: string;
    image?: string;
    stats: Array<{ value: string; label: string }>;
}

export default function CollegeHero({
    name,
    shortName,
    tagline,
    description,
    tag,
    image,
    stats,
}: CollegeHeroProps) {
    return (
        <section className="relative min-h-[100vh] md:min-h-[100vh] flex items-center bg-gradient-hero overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 decoration-grid" />
                <div className="absolute top-20 right-[20%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[80px]" />
            </div>

            {/* Background Image */}
            {image && (
                <>
                    <Image
                        src={image}
                        alt={name}
                        fill
                        priority
                        className="object-cover object-center opacity-40"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary-dark/70 to-primary/75" />
                </>
            )}

            <div className="container relative z-10 py-20 md:py-24 lg:py-32">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/colleges" className="hover:text-white transition-colors">Colleges</Link>
                    <span>/</span>
                    <span className="text-white">{shortName}</span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                        {/* Tag */}
                        {tag && (
                            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                                <span className="w-2 h-2 bg-accent rounded-full" />
                                {tag}
                            </div>
                        )}

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 !text-white leading-tight">
                            {shortName}
                        </h1>

                        {/* Tagline */}
                        <p className="text-xl md:text-2xl text-accent font-medium mb-6">{tagline}</p>

                        {/* Description */}
                        <p className="text-base md:text-lg !text-white/80 mb-8 max-w-xl leading-relaxed">{description}</p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mb-10">
                            <Link href="https://admissions.jct.ac.in/" className="btn btn-primary">
                                Apply Now
                            </Link>
                            <Link href="#programs" className="btn btn-ghost">
                                View Programs
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 pt-6 border-t border-white/10">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-bold text-accent">{stat.value}</div>
                                    <div className="text-sm text-white/60">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="hidden lg:block relative">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-white/5 backdrop-blur-sm border border-white/10">
                            {image ? (
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url('${image}')` }}
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-primary" />
                            )}
                        </div>

                        {/* Floating Element */}
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                                    <span className="text-2xl">🎓</span>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-primary">{stats[0]?.value}</div>
                                    <div className="text-xs text-neutral-500">{stats[0]?.label}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
