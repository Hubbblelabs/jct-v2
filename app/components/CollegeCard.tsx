import React from 'react';
import Link from 'next/link';

interface CollegeCardProps {
    name: string;
    shortName: string;
    description: string;
    href: string;
    image?: string;
    stats?: {
        students: string;
        programs: string;
        placement: string;
    };
    tag?: string;
    icon?: React.ReactNode;
}

export default function CollegeCard({
    name,
    shortName,
    description,
    href,
    image,
    stats,
    tag,
    icon,
}: CollegeCardProps) {
    return (
        <Link
            href={href}
            className="group relative block rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-card-hover transition-all duration-500"
        >
            {/* Image Section */}
            <div className="relative aspect-[16/10] overflow-hidden">
                {image ? (
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${image}')` }}
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary" />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Icon & Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                        {icon || <DefaultIcon />}
                    </div>
                    {tag && (
                        <span className="badge badge-primary">
                            {tag}
                        </span>
                    )}
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold !text-white mb-1">{shortName}</h3>
                    <p className="text-white/80 text-sm line-clamp-1">{name}</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5">
                <p className="text-neutral-600 text-sm line-clamp-2 mb-4">
                    {description}
                </p>

                {/* Stats */}
                {stats && (
                    <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                        <div className="text-center">
                            <div className="text-lg font-bold text-primary">{stats.students}</div>
                            <div className="text-xs text-neutral-500">Students</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold text-primary">{stats.programs}</div>
                            <div className="text-xs text-neutral-500">Programs</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold text-accent">{stats.placement}</div>
                            <div className="text-xs text-neutral-500">Placement</div>
                        </div>
                    </div>
                )}

                {/* CTA */}
                <div className="mt-4 flex items-center text-primary font-medium group-hover:text-accent transition-colors">
                    Explore College
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}

function DefaultIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
    );
}
