'use client';

import React from 'react';

export default function MobileStickyCTA() {
    return (
        <div className="mobile-sticky-cta md:hidden">
            <a
                href="#apply"
                className="btn btn-primary w-full justify-center text-base"
            >
                Apply Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </a>
        </div>
    );
}
