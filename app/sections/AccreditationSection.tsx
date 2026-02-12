'use client';

import React from 'react';
import Image from 'next/image';

const accreditations = [
    {
        name: 'ISO 9001:2008',
        fullForm: 'Certified Institution',
        type: 'image',
        image: '/iso.png'
    },
    {
        name: 'AICTE',
        fullForm: 'All India Council for Technical Education',
        type: 'image',
        image: '/aicte.png'
    },
    {
        name: 'Anna University',
        fullForm: 'Affiliated Institution',
        type: 'image',
        image: '/anna.png'
    },
    {
        name: 'DOTE',
        fullForm: 'Directorate of Technical Education',
        type: 'text'
    },
    {
        name: 'UGC',
        fullForm: 'University Grants Commission',
        type: 'image',
        image: '/ugc.png'
    },
    {
        name: 'NAAC',
        fullForm: 'Accredited with "A" Grade',
        image: '/naac.png',
        type: 'image'
    },
    {
        name: 'NBA',
        fullForm: 'National Board of Accreditation',
        image: '/nba.png',
        type: 'image'
    }
];

export default function AccreditationSection() {
    return (
        <section className="py-8 bg-primary border-b border-white/10 overflow-hidden">
            <div className="container-fluid">
                <div className="flex animate-marquee hover:pause-animation items-center gap-16 pr-16">
                    {/* First Set */}
                    {accreditations.map((item, index) => (
                        <div key={`first-${index}`} className="flex items-center justify-center flex-shrink-0">
                            {item.type === 'image' && item.image ? (
                                <div className="relative h-24 w-48 flex items-center justify-center transition-transform hover:scale-110 duration-300">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={200}
                                        height={96}
                                        className="max-h-full max-w-full object-contain"
                                        style={{ width: 'auto', height: '100%' }}
                                    />
                                </div>
                            ) : (
                                <div className="text-center w-48 flex flex-col items-center justify-center">
                                    <div className="font-bold text-white text-xl leading-tight">
                                        {item.name}
                                    </div>
                                    <div className="text-sm text-neutral-300 leading-tight mt-1">
                                        {item.fullForm}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Second Set for Loop */}
                    {accreditations.map((item, index) => (
                        <div key={`second-${index}`} className="flex items-center justify-center flex-shrink-0">
                            {item.type === 'image' && item.image ? (
                                <div className="relative h-24 w-48 flex items-center justify-center transition-transform hover:scale-110 duration-300">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={200}
                                        height={96}
                                        className="max-h-full max-w-full object-contain"
                                        style={{ width: 'auto', height: '100%' }}
                                    />
                                </div>
                            ) : (
                                <div className="text-center w-48 flex flex-col items-center justify-center">
                                    <div className="font-bold text-white text-xl leading-tight">
                                        {item.name}
                                    </div>
                                    <div className="text-sm text-neutral-300 leading-tight mt-1">
                                        {item.fullForm}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
