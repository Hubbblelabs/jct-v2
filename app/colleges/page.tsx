import React from 'react';
import Link from 'next/link';
import CollegeCard from '../components/CollegeCard';

export const metadata = {
    title: 'Our Colleges | JCT Institutions',
    description: 'Explore our three flagship colleges - Engineering & Technology, Arts & Science, and Polytechnic.',
};

const colleges = [
    {
        name: 'JCT College of Engineering & Technology',
        shortName: 'Engineering & Technology',
        description: 'Autonomous institution offering B.E./B.Tech programs with NBA accreditation. State-of-the-art labs, experienced faculty, and excellent placement records.',
        href: '/colleges/engineering',
        icon: <EngineeringIcon />,
        tag: 'Autonomous',
        stats: { students: '2500+', programs: '8', placement: '100%' },
    },
    {
        name: 'JCT College of Arts & Science',
        shortName: 'Arts & Science',
        description: 'Comprehensive UG & PG programs in Arts, Science, and Commerce. Focus on holistic development with modern teaching methodologies.',
        href: '/colleges/arts-science',
        icon: <BookIcon />,
        stats: { students: '1800+', programs: '12', placement: '95%' },
    },
    {
        name: 'JCT Polytechnic College',
        shortName: 'Polytechnic',
        description: 'Industry-ready diploma programs with hands-on training. Strong industry partnerships and workshop-based learning approach.',
        href: '/colleges/polytechnic',
        icon: <GearIcon />,
        stats: { students: '1200+', programs: '6', placement: '98%' },
    },
];

export default function CollegesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 bg-gradient-hero overflow-hidden">
                <div className="absolute inset-0 decoration-grid" />
                <div className="absolute top-20 right-[20%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />

                <div className="container relative z-10">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-white">Our Colleges</span>
                    </nav>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Our <span className="text-gradient">Colleges</span>
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed">
                            Explore our three flagship institutions, each offering unique programs
                            designed to prepare students for successful careers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Colleges Grid */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {colleges.map((college, index) => (
                            <div
                                key={college.name}
                                className="animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CollegeCard {...college} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-alt">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to Begin Your Journey?
                        </h2>
                        <p className="text-neutral-600 mb-8">
                            Choose your path and take the first step towards a successful career.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/apply" className="btn btn-primary">
                                Apply Now
                            </Link>
                            <Link href="/contact" className="btn btn-outline">
                                Contact Admissions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function EngineeringIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
    );
}

function BookIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
    );
}

function GearIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}
