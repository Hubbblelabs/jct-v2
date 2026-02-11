'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Recruiter {
    name: string;
    logo?: string;
    icon?: React.ReactNode;
}

interface RecruitersCarouselProps {
    recruiters: Recruiter[];
}

// Recruiter Logo component with error handling
const RecruiterLogo = ({ recruiter }: { recruiter: Recruiter }) => {
    const [imgError, setImgError] = useState(false);

    if (recruiter.icon) {
        return (
            <div className="text-white/80 hover:text-white transition-colors">
                {recruiter.icon}
            </div>
        );
    }

    if (recruiter.logo && !imgError) {
        return (
            <div className="relative w-full h-full p-3">
                <Image
                    src={recruiter.logo}
                    alt={recruiter.name}
                    fill
                    className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    sizes="(max-width: 768px) 128px, 160px"
                    onError={() => setImgError(true)}
                />
            </div>
        );
    }

    return (
        <span className="text-white/70 text-sm font-medium text-center px-3 group-hover:text-white transition-colors">
            {recruiter.name}
        </span>
    );
};

export default function RecruitersCarousel({ recruiters }: RecruitersCarouselProps) {
    return (
        <div className="relative overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary-dark to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary-dark to-transparent z-10" />

            {/* Recruiter Logos - Infinite Marquee */}
            <div className="flex animate-marquee hover:pause-animation">
                {/* First set */}
                {recruiters.map((recruiter, index) => (
                    <div
                        key={`first-${recruiter.name}-${index}`}
                        className="group flex-shrink-0 w-32 md:w-40 h-16 md:h-20 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 mx-3"
                    >
                        <RecruiterLogo recruiter={recruiter} />
                    </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {recruiters.map((recruiter, index) => (
                    <div
                        key={`second-${recruiter.name}-${index}`}
                        className="group flex-shrink-0 w-32 md:w-40 h-16 md:h-20 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 mx-3"
                    >
                        <RecruiterLogo recruiter={recruiter} />
                    </div>
                ))}
            </div>
        </div>
    );
}
