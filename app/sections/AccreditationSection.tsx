'use client';

import React from 'react';

const accreditations = [
    { name: 'NAAC', grade: 'A', description: 'National Assessment and Accreditation Council', image: '/naac.png' },
    { name: 'NBA', grade: 'Accredited', description: 'National Board of Accreditation', image: '/nba.png' },
    { name: 'AICTE', grade: 'Approved', description: 'All India Council for Technical Education' },
    { name: 'UGC', grade: 'Recognized', description: 'University Grants Commission' },
];

const affiliations = [
    { name: 'Anna University', logo: '/images/anna-university.png' },
    { name: 'Bharathiar University', logo: '/images/bharathiar-university.png' },
    { name: 'DOTE', logo: '/images/dote.png' },
];

const achievements = [
    { value: '15+', label: 'Years of Excellence', icon: <TrophyIcon /> },
    { value: 'A', label: 'NAAC Grade', icon: <StarIcon /> },
    { value: '100%', label: 'Placement Support', icon: <BriefcaseIcon /> },
    { value: '65+', label: 'Corporate Partners', icon: <HandshakeIcon /> },
];

export default function AccreditationSection() {
    return (
        <section className="section section-dark relative overflow-hidden" id="accreditation">
            {/* Background Elements */}
            <div className="absolute inset-0 decoration-dots opacity-20" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="section-eyebrow justify-center">
                        <span>Recognition</span>
                    </div>
                    <h2 className="section-title !text-white">
                        Accreditations & <span className="text-gradient">Affiliations</span>
                    </h2>
                    <p className="section-subtitle mx-auto !text-white/70">
                        Our commitment to quality education is recognized by national accreditation bodies
                    </p>
                </div>

                {/* Accreditation Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {accreditations.map((accreditation, index) => (
                        <div
                            key={accreditation.name}
                            className="card-dark rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden bg-white">
                                {accreditation.image ? (
                                    <img
                                        src={accreditation.image}
                                        alt={accreditation.name}
                                        className="w-full h-full object-contain p-2"
                                    />
                                ) : (
                                    <span className="text-xl font-bold text-primary-dark">{accreditation.grade}</span>
                                )}
                            </div>
                            <h4 className="text-xl font-bold !text-white mb-2">{accreditation.name}</h4>
                            <p className="!text-white/60 text-sm">{accreditation.description}</p>
                        </div>
                    ))}
                </div>

                {/* Achievements Row */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {achievements.map((achievement) => (
                            <div key={achievement.label} className="text-center">
                                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                                    {achievement.icon}
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                                    {achievement.value}
                                </div>
                                <div className="!text-white/70 text-sm">{achievement.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Affiliated Universities */}
                <div className="text-center">
                    <h3 className="text-xl font-semibold !text-white mb-8">Affiliated With</h3>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                        {affiliations.map((affiliation) => (
                            <div
                                key={affiliation.name}
                                className="group flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
                            >
                                <div className="w-20 h-20 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <span className="text-2xl font-bold !text-white">{affiliation.name.charAt(0)}</span>
                                </div>
                                <span className="!text-white/80 text-sm font-medium">{affiliation.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TrophyIcon() {
    return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m3.044.568a6.003 6.003 0 00-2.062-.795m2.062.795a6.003 6.003 0 003.386-4.956c.962-.203 1.934-.377 2.916-.52V4.5a6.003 6.003 0 01-2.916 5.228M14.27 9.728a6.726 6.726 0 01-2.748 1.35" />
        </svg>
    );
}

function StarIcon() {
    return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
    );
}

function BriefcaseIcon() {
    return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
    );
}

function HandshakeIcon() {
    return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
    );
}
