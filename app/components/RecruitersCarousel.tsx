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
            <div className="transition-transform duration-300 group-hover:scale-110">
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
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
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
            <div className="flex animate-marquee pause-on-hover">
                {/* First set */}
                {recruiters.map((recruiter, index) => (
                    <div
                        key={`first-${recruiter.name}-${index}`}
                        className="group flex-shrink-0 w-28 sm:w-36 md:w-48 h-24 sm:h-28 md:h-36 rounded-2xl sm:rounded-3xl bg-white border border-neutral-200 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:shadow-xl hover:border-accent/40 transition-all duration-300 mx-4 md:mx-6 p-4 sm:p-6"
                    >
                        <div className="flex-1 flex items-center justify-center w-full relative">
                            <RecruiterLogo recruiter={recruiter} />
                        </div>
                        <span className="text-[9px] sm:text-[10px] md:text-sm font-bold text-neutral-400 uppercase tracking-widest group-hover:text-primary transition-colors">
                            {recruiter.name}
                        </span>
                    </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {recruiters.map((recruiter, index) => (
                    <div
                        key={`second-${recruiter.name}-${index}`}
                        className="group flex-shrink-0 w-28 sm:w-36 md:w-48 h-24 sm:h-28 md:h-36 rounded-2xl sm:rounded-3xl bg-white border border-neutral-200 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:shadow-xl hover:border-accent/40 transition-all duration-300 mx-4 md:mx-6 p-4 sm:p-6"
                    >
                        <div className="flex-1 flex items-center justify-center w-full relative">
                            <RecruiterLogo recruiter={recruiter} />
                        </div>
                        <span className="text-[9px] sm:text-[10px] md:text-sm font-bold text-neutral-400 uppercase tracking-widest group-hover:text-primary transition-colors">
                            {recruiter.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
